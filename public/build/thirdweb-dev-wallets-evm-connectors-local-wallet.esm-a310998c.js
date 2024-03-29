import { C as Connector, a as _defineProperty, _ as _classPrivateFieldInitSpec, n as normalizeChainId, b as _classPrivateFieldSet, c as _classPrivateFieldGet, g as getChainProvider, p as Signer, u as utils, q as getDefaultGasOverrides } from './App-40ca2dcc.js';
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

class WrappedSigner extends Signer {
  constructor(signer) {
    super();
    this.signer = signer;
    utils.defineReadOnly(this, "provider", signer.provider);
  }
  async getAddress() {
    return await this.signer.getAddress();
  }
  async signMessage(message) {
    return await this.signer.signMessage(message);
  }
  async signTransaction(transaction) {
    return await this.signer.signTransaction(transaction);
  }
  connect(provider) {
    return new WrappedSigner(this.signer.connect(provider));
  }
  _signTypedData(domain, types, value) {
    return this.signer._signTypedData(domain, types, value);
  }
  async sendTransaction(transaction) {
    if (!this.provider) {
      throw new Error("Provider not found");
    }
    const gas = await getDefaultGasOverrides(this.provider);
    const txWithGas = {
      ...gas,
      ...transaction
    };
    return await this.signer.sendTransaction(txWithGas);
  }
}

var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class LocalWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", "local_wallet");
    _defineProperty(this, "name", "Local Wallet");
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "shimDisconnectKey", "localWallet.shimDisconnect");
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = !this.options.chains.find(c => c.chainId === id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    this.options = options;
  }
  async connect(args) {
    if (args.chainId) {
      this.switchChain(args.chainId);
    }
    const signer = await this.getSigner();
    const address = await signer.getAddress();
    return address;
  }
  async disconnect() {
    _classPrivateFieldSet(this, _provider, undefined);
    _classPrivateFieldSet(this, _signer, undefined);
  }
  async getAddress() {
    const signer = await this.getSigner();
    if (!signer) {
      throw new Error("No signer found");
    }
    return await signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch {
      return false;
    }
  }
  async getProvider() {
    if (!_classPrivateFieldGet(this, _provider)) {
      _classPrivateFieldSet(this, _provider, getChainProvider(this.options.chain, {
        clientId: this.options.clientId,
        secretKey: this.options.secretKey
      }));
    }
    return _classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    if (!_classPrivateFieldGet(this, _signer)) {
      const provider = await this.getProvider();
      _classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, provider));
    }
    return _classPrivateFieldGet(this, _signer);
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error(`Chain not found for chainId ${chainId}, please add it to the chains property when creating this wallet`);
    }
    _classPrivateFieldSet(this, _provider, getChainProvider(chain, {
      clientId: this.options.clientId,
      secretKey: this.options.secretKey
    }));
    _classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, _classPrivateFieldGet(this, _provider)));
    this.onChainChanged(chainId);
  }
  async setupListeners() {}
  updateChains(chains) {
    this.options.chains = chains;
  }
}
function getSignerFromEthersWallet(ethersWallet, provider) {
  let signer = ethersWallet;
  if (provider) {
    signer = ethersWallet.connect(provider);
  }
  return new WrappedSigner(signer);
}

export { LocalWalletConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-local-wallet.esm-a310998c.js.map
