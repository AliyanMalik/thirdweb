import { SmartWalletConnector } from './thirdweb-dev-wallets-evm-connectors-smart-wallet.esm-60658135.js';
import { cY as ERC6551_REGISTRY, V as toUtf8Bytes } from './App-40ca2dcc.js';
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

class TokenBoundSmartWalletConnector extends SmartWalletConnector {
  constructor(input) {
    super({
      ...input,
      factoryAddress: input.registryAddress || ERC6551_REGISTRY
    });
    this.tbaConfig = input;
    // TODO default account implementation address
  }
  defaultFactoryInfo() {
    return {
      createAccount: async factory => {
        return factory.prepare("createAccount", [this.tbaConfig.accountImplementation, this.chainId, this.tbaConfig.tokenContract, this.tbaConfig.tokenId, this.tbaConfig.salt, toUtf8Bytes("")]);
      },
      getAccountAddress: async factory => {
        return await factory.call("account", [this.tbaConfig.accountImplementation, this.chainId, this.tbaConfig.tokenContract, this.tbaConfig.tokenId, this.tbaConfig.salt]);
      }
    };
  }
}

export { TokenBoundSmartWalletConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-token-bound-smart-wallet.esm-ecaf232f.js.map
