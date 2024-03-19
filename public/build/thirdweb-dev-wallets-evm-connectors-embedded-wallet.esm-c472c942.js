import { C as Connector, a as _defineProperty, w as walletIds, _ as _classPrivateFieldInitSpec, e as getAddress, n as normalizeChainId, c as _classPrivateFieldGet, b as _classPrivateFieldSet, cE as EmbeddedWalletSdk, cF as UserWalletStatus, cG as AuthProvider } from './App-40ca2dcc.js';
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

var _embeddedWalletSdk = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class EmbeddedWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", walletIds.paper);
    _defineProperty(this, "name", "Embedded Wallet");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "user", null);
    _classPrivateFieldInitSpec(this, _embeddedWalletSdk, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        await this.onDisconnect();
      } else {
        this.emit("change", {
          account: getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.options.chains.findIndex(c => c.chainId === id) === -1;
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", async () => {
      this.emit("disconnect");
    });
    this.options = options;
  }
  getEmbeddedWalletSDK() {
    if (!_classPrivateFieldGet(this, _embeddedWalletSdk)) {
      _classPrivateFieldSet(this, _embeddedWalletSdk, new EmbeddedWalletSdk({
        clientId: this.options.clientId,
        chain: "Ethereum",
        onAuthSuccess: this.options.onAuthSuccess
      }));
    }
    return _classPrivateFieldGet(this, _embeddedWalletSdk);
  }
  async connect(args) {
    // backwards compatibility - options should really be required here
    if (!args) {
      // default to iframe flow
      const result = await this.authenticate({
        strategy: "iframe"
      });
      if (!result.user) {
        throw new Error("Error connecting User");
      }
      this.user = result.user;
    } else {
      if (!args.authResult) {
        throw new Error("Missing authData - call authenticate() first with your authentication strategy");
      }
      if (!args.authResult.user) {
        throw new Error("Missing authData.user - call authenticate() first with your authentication strategy");
      }
      this.user = args.authResult.user;
    }
    if (args?.chainId) {
      this.switchChain(args.chainId);
    }
    return this.getAddress();
  }
  async disconnect() {
    const paper = _classPrivateFieldGet(this, _embeddedWalletSdk);
    await paper?.auth.logout();
    _classPrivateFieldSet(this, _signer, undefined);
    _classPrivateFieldSet(this, _embeddedWalletSdk, undefined);
    this.user = null;
  }
  async getAddress() {
    if (!this.user) {
      throw new Error("Embedded Wallet is not connected");
    }
    return await this.getSigner().then(signer => signer.getAddress());
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch (e) {
      return false;
    }
  }
  async getProvider() {
    const signer = await this.getSigner();
    if (!signer.provider) {
      throw new Error("Provider not found");
    }
    return signer.provider;
  }
  async getSigner() {
    if (_classPrivateFieldGet(this, _signer)) {
      return _classPrivateFieldGet(this, _signer);
    }
    const user = await this.getUser();
    const signer = await user.wallet.getEthersJsSigner({
      rpcEndpoint: this.options.chain.rpc[0] || "" // TODO: handle chain.rpc being empty array
    });
    if (!signer) {
      throw new Error("Signer not found");
    }
    _classPrivateFieldSet(this, _signer, signer);
    return signer;
  }
  async isAuthorized() {
    return false;
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not configured");
    }
    try {
      // update chain in wallet
      await this.user?.wallet.setChain({
        chain: "Ethereum"
      }); // just pass Ethereum no matter what chain we are going to connect
      // update signer
      _classPrivateFieldSet(this, _signer, await this.user?.wallet.getEthersJsSigner({
        rpcEndpoint: chain.rpc[0] || ""
      }));
      this.emit("change", {
        chain: {
          id: chainId,
          unsupported: false
        }
      });
    } catch (e) {
      console.warn("Failed to switch chain", e);
    }
  }
  async setupListeners() {
    return Promise.resolve();
  }
  updateChains(chains) {
    this.options.chains = chains;
  }
  async getUser() {
    if (!this.user || !this.user.wallet || !this.user.wallet.getEthersJsSigner // when serializing, functions are lost, need to rehydrate
    ) {
      const embeddedWalletSdk = this.getEmbeddedWalletSDK();
      const user = await embeddedWalletSdk.getUser();
      switch (user.status) {
        case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED:
          {
            this.user = user;
            break;
          }
        default:
          {
            // if logged out or unitialized, we can't get a signer, so throw an error
            throw new Error("Embedded Wallet is not authenticated, please authenticate first");
          }
      }
    }
    return this.user;
  }
  async getEmail() {
    const user = await this.getUser();
    return user.authDetails.email;
  }
  async getRecoveryInformation() {
    const user = await this.getUser();
    return user.authDetails;
  }
  async sendVerificationEmail(_ref) {
    let {
      email
    } = _ref;
    const ewSDK = this.getEmbeddedWalletSDK();
    return ewSDK.auth.sendEmailLoginOtp({
      email
    });
  }
  async authenticate(params) {
    const ewSDK = this.getEmbeddedWalletSDK();
    const strategy = params.strategy;
    switch (strategy) {
      case "email_verification":
        {
          return await ewSDK.auth.verifyEmailLoginOtp({
            email: params.email,
            otp: params.verificationCode,
            recoveryCode: params.recoveryCode
          });
        }
      case "apple":
      case "facebook":
      case "google":
        {
          const oauthProvider = oauthStrategyToAuthProvider[strategy];
          return ewSDK.auth.loginWithOauth({
            oauthProvider,
            closeOpenedWindow: params.closeOpenedWindow,
            openedWindow: params.openedWindow
          });
        }
      case "jwt":
        {
          return ewSDK.auth.loginWithCustomJwt({
            jwt: params.jwt,
            encryptionKey: params.encryptionKey
          });
        }
      case "auth_endpoint":
        {
          return ewSDK.auth.loginWithCustomAuthEndpoint({
            payload: params.payload,
            encryptionKey: params.encryptionKey
          });
        }
      case "iframe_email_verification":
        {
          return ewSDK.auth.loginWithEmailOtp({
            email: params.email
          });
        }
      case "iframe":
        {
          return ewSDK.auth.loginWithModal();
        }
      default:
        assertUnreachable(strategy);
    }
  }
}
function assertUnreachable(x) {
  throw new Error("Invalid param: " + x);
}
const oauthStrategyToAuthProvider = {
  google: AuthProvider.GOOGLE,
  facebook: AuthProvider.FACEBOOK,
  apple: AuthProvider.APPLE
};

export { EmbeddedWalletConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-embedded-wallet.esm-c472c942.js.map