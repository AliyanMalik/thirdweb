import { W as WagmiConnector, a as _defineProperty, _ as _classPrivateFieldInitSpec, d as ConnectorNotFoundError, e as getAddress, U as UserRejectedRequestError, R as ResourceUnavailableError, n as normalizeChainId, b as _classPrivateFieldSet, c as _classPrivateFieldGet, h as Web3Provider, i as hexValue, j as ChainNotConfiguredError, A as AddChainError, S as SwitchChainError } from './App-40ca2dcc.js';
import { g as getValidPublicRPCUrl } from './url-0d129c6b.esm-6ec49aa3.js';
import 'events';
import 'os';
import 'fs';
import 'util';
import 'path';
import 'worker_threads';
import 'module';
import 'url';
import 'buffer';
import 'assert';
import 'crypto';
import 'stream';
import 'http';
import 'punycode';
import 'https';
import 'zlib';

var _provider = /*#__PURE__*/new WeakMap();
class FrameConnector extends WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options: suppliedOptions,
      connectorStorage
    } = _ref;
    const options = {
      shimDisconnect: true,
      ...suppliedOptions
    };
    super({
      chains,
      options
    });
    _defineProperty(this, "id", "frame");
    _defineProperty(this, "name", "Frame");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "shimDisconnectKey", `${this.id}.shimDisconnect`);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", () => {
      this.emit("disconnect");
      // Remove shim signalling wallet is disconnected
      if (this.options.shimDisconnect) {
        this.connectorStorage.removeItem(this.shimDisconnectKey);
      }
    });
    this.connectorStorage = connectorStorage;
  }
  async connect(config) {
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (config?.chainId && id !== config?.chainId) {
        const chain = await this.switchChain(config?.chainId);
        id = chain.chainId;
        unsupported = this.isChainUnsupported(id);
      }

      // Add shim to storage signalling wallet is connected
      if (this.options.shimDisconnect) {
        this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      return {
        account,
        provider,
        chain: {
          id,
          unsupported
        }
      };
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new ResourceUnavailableError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    if (!provider?.removeListener) {
      return;
    }
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    if (!this.isInjected()) {
      provider.close();
    }

    // Remove shim signalling wallet is disconnected
    if (this.options.shimDisconnect) {
      this.connectorStorage.removeItem(this.shimDisconnectKey);
    }
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    // return checksum address
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId(chainId);
  }
  async getProvider() {
    _classPrivateFieldSet(this, _provider, this.isInjected() ? this.injectedProvider() : await this.createProvider());
    return _classPrivateFieldGet(this, _provider);
  }

  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);

    // ethers.providers.Web3Provider
    return new Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      if (this.options.shimDisconnect &&
      // If shim does not exist in storage, wallet is disconnected
      !this.connectorStorage.getItem(this.shimDisconnectKey)) {
        return false;
      }
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const chainIdHex = hexValue(chainId);
    try {
      await Promise.all([provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      }), new Promise(res => this.on("change", _ref2 => {
        let {
          chain
        } = _ref2;
        if (chain?.id === chainId) {
          res();
        }
      }))]);
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true
      };
    } catch (switchChainError) {
      const chain = this.chains.find(x => x.chainId === chainId);
      if (!chain) {
        throw new ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }

      // Indicates chain is not added to provider
      if (switchChainError.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: chainIdHex,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: getValidPublicRPCUrl(chain),
              // no client id on purpose here
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          const currentChainId = await this.getChainId();
          if (currentChainId !== chainId) {
            throw new UserRejectedRequestError(new Error("User rejected switch after adding network."));
          }
          return chain;
        } catch (addChainError) {
          // if user rejects request to add chain
          if (this.isUserRejectedRequestError(addChainError)) {
            throw new UserRejectedRequestError(addChainError);
          }

          // else other error
          throw new AddChainError(addChainError.message);
        }
      }

      // if user rejects request to switch chain
      if (this.isUserRejectedRequestError(switchChainError)) {
        throw new UserRejectedRequestError(switchChainError);
      }

      // else other error
      throw new SwitchChainError(switchChainError);
    }
  }
  async watchAsset(_ref3) {
    let {
      address,
      decimals = 18,
      image,
      symbol
    } = _ref3;
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
  injectedProvider() {
    return window?.ethereum;
  }
  isInjected() {
    return !!this.injectedProvider()?.isFrame;
  }
  async createProvider() {
    const ethProvider = (await import('./node-43fcba8f.js').then(function (n) { return n.n; })).default;
    return ethProvider("frame");
  }
}

export { FrameConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-frame.esm-ff5af671.js.map
