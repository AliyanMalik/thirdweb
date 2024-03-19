import { C as Connector, _ as _classPrivateFieldInitSpec, a as _defineProperty, n as normalizeChainId, b as _classPrivateFieldSet, c as _classPrivateFieldGet, g as getChainProvider } from './App-40ca2dcc.js';
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
var _signer = /*#__PURE__*/new WeakMap();
class SignerConnector extends Connector {
  constructor(options) {
    super();
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
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
      _classPrivateFieldSet(this, _signer, getUpdatedSigner(this.options.signer, provider));
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
    _classPrivateFieldSet(this, _signer, getUpdatedSigner(this.options.signer, _classPrivateFieldGet(this, _provider)));
    this.onChainChanged(chainId);
  }
  async setupListeners() {}
  updateChains(chains) {
    this.options.chains = chains;
  }
}
function getUpdatedSigner(signer, provider) {
  if (provider) {
    return signer.connect(provider);
  }
  return signer;
}

export { SignerConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-signer.esm-745888d6.js.map
