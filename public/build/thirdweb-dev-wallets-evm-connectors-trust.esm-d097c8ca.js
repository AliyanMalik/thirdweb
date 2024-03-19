import { InjectedConnector } from './thirdweb-dev-wallets-evm-connectors-injected.esm-af96cc13.js';
import { k as assertWindowEthereum } from './App-40ca2dcc.js';
import './url-0d129c6b.esm-6ec49aa3.js';
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

class TrustConnector extends InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Trust",
      getProvider() {
        function getReady(ethereum) {
          const isTrust = !!ethereum?.isTrust;
          if (!isTrust) {
            return;
          }
          return ethereum;
        }
        if (typeof window === "undefined") {
          return;
        }
        if (assertWindowEthereum(globalThis.window)) {
          if (globalThis.window.ethereum?.providers) {
            return globalThis.window.ethereum.providers.find(getReady);
          }
          return getReady(globalThis.window.ethereum);
        }
      }
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
  }
}

export { TrustConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-trust.esm-d097c8ca.js.map
