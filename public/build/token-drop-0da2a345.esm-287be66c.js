import { bD as TOKEN_DROP_CONTRACT_ROLES, r as ContractWrapper, s as AbiSchema, bE as DropErc20ContractSchema, t as ContractEncoder, Q as resolveAddress, v as getRoleHash, x as AddressZero, y as buildTransactionFunction, T as Transaction } from './App-40ca2dcc.js';
import { C as ContractMetadata, a as ContractAppURI, G as GasCostEstimator, b as ContractEvents } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractInterceptor } from './contract-interceptor-69c9c882.esm-2cda0528.js';
import { C as ContractPlatformFee } from './contract-platform-fee-037b0cbb.esm-3f86947a.js';
import { C as ContractRoles } from './contract-roles-107ca68a.esm-c3cfe3db.js';
import { C as ContractPrimarySale } from './contract-sales-c64cd670.esm-d409be9d.js';
import { D as DropClaimConditions } from './drop-claim-conditions-81dea1f0.esm-7343e592.js';
import { S as StandardErc20 } from './erc-20-standard-396ce9ab.esm-087707b1.js';
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
import './index-6571f75f.js';
import './assertEnabled-1fa10adb.esm-79af49b9.js';
import './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import './erc-20-54a3914e.esm-296e0835.js';

/**
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token-drop");
 * ```
 * @internal
 * @deprecated use contract.erc20 instead
 */
class TokenDrop extends StandardErc20 {
  static contractRoles = TOKEN_DROP_CONTRACT_ROLES;

  /**
   * Configure claim conditions
   * @remarks Define who can claim Tokens, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
   *     price: 0.001, // presale price per token
   *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.008, // public sale price per token
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc20ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, TokenDrop.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.claimConditions = new DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns The amount of voting power in tokens
   */
  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }
  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.read("getVotes", [await resolveAddress(account)]));
  }

  /**
   * Get your voting delegatee address
   *
   * @returns The address of your vote delegatee
   */
  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get a specific address voting delegatee address
   *
   * @returns The address of your vote delegatee
   */
  async getDelegationOf(account) {
    return await this.contractWrapper.read("delegates", [await resolveAddress(account)]);
  }

  /**
   * Get whether users can transfer tokens from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), AddressZero]);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Claim a certain amount of tokens
   * @remarks See {@link TokenDrop.claimTo}
   * @param amount - the amount of tokens to mint
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   */
  claim = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (amount) {
      let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _this.claimTo.prepare(await _this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance);
    };
  })());

  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns  The transaction receipt
   */
  claimTo = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (destinationAddress, amount) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return _this2.erc20.claimTo.prepare(destinationAddress, amount, {
        checkERC20Allowance
      });
    };
  })());

  /**
   * Lets you delegate your voting power to the delegateeAddress
   *
   * @param delegateeAddress - delegatee wallet address
   * @alpha
   */
  delegateTo = /* @__PURE__ */buildTransactionFunction(async delegateeAddress => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "delegate",
      args: [await resolveAddress(delegateeAddress)]
    });
  });

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnTokens(amount);
   * ```
   */
  burnTokens = /* @__PURE__ */buildTransactionFunction(async amount => {
    return this.erc20.burn.prepare(amount);
  });
  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnFrom(holderAddress, amount);
   * ```
   */
  burnFrom = /* @__PURE__ */buildTransactionFunction(async (holder, amount) => {
    return this.erc20.burnFrom.prepare(holder, amount);
  });

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}

export { TokenDrop };
//# sourceMappingURL=token-drop-0da2a345.esm-287be66c.js.map
