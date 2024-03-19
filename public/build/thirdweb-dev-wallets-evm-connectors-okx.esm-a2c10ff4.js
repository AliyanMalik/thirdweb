import { a as _defineProperty, w as walletIds, d as ConnectorNotFoundError, U as UserRejectedRequestError, e as getAddress, R as ResourceUnavailableError, cu as getInjectedOKXProvider } from './App-40ca2dcc.js';
import { InjectedConnector } from './thirdweb-dev-wallets-evm-connectors-injected.esm-af96cc13.js';
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
import './url-0d129c6b.esm-6ec49aa3.js';

class OKXConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "OKX",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedOKXProvider
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
    _defineProperty(this, "id", walletIds.okx);
  }

  /**
   * Connect to injected OKX provider
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // Attempt to show wallet select prompt with `wallet_requestPermissions` when
      // `shimDisconnect` is active and account is in disconnected state (flag in storage)
      let account = null;
      if (this.options?.shimDisconnect && !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))) {
        account = await this.getAccount().catch(() => null);
        const isConnected = !!account;
        if (isConnected) {
          // Attempt to show another prompt for selecting wallet if already connected
          try {
            await provider.request({
              method: "wallet_requestPermissions",
              params: [{
                eth_accounts: {}
              }]
            });
          } catch (error) {
            // Not all injected providers support `wallet_requestPermissions` (e.g. iOS).
            // Only bubble up error if user rejects request
            if (this.isUserRejectedRequestError(error)) {
              throw new UserRejectedRequestError(error);
            }
          }
        }
      }

      // if account is not already set, request accounts and use the first account
      if (!account) {
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        account = getAddress(accounts[0]);
      }

      // get currently connected chainId
      let connectedChainId = await this.getChainId();
      // check if connected chain is unsupported
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is given, but does not match the currently connected chainId, switch to the given chainId
      if (options.chainId && connectedChainId !== options.chainId) {
        try {
          await this.switchChain(options.chainId);
          // recalculate the chainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id : ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options?.shimDisconnect) {
        // add shimDisconnectKey in storage - this signals that connector is "connected"
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider: provider,
        account
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
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
  async switchAccount() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_requestPermissions",
      params: [{
        eth_accounts: {}
      }]
    });
  }
}

export { OKXConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-okx.esm-a2c10ff4.js.map
