import { N as NFT_BASE_CONTRACT_ROLES, r as ContractWrapper, s as AbiSchema, bF as TokenErc20ContractSchema, t as ContractEncoder, Q as resolveAddress, v as getRoleHash, x as AddressZero, y as buildTransactionFunction, T as Transaction, B as BigNumber, aI as fetchCurrencyValue } from './App-40ca2dcc.js';
import { C as ContractMetadata, a as ContractAppURI, b as ContractEvents, G as GasCostEstimator } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractInterceptor } from './contract-interceptor-69c9c882.esm-2cda0528.js';
import { C as ContractPlatformFee } from './contract-platform-fee-037b0cbb.esm-3f86947a.js';
import { C as ContractRoles } from './contract-roles-107ca68a.esm-c3cfe3db.js';
import { C as ContractPrimarySale } from './contract-sales-c64cd670.esm-d409be9d.js';
import { a as Erc20SignatureMintable } from './erc-20-54a3914e.esm-296e0835.js';
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
import './assertEnabled-1fa10adb.esm-79af49b9.js';
import './drop-claim-conditions-81dea1f0.esm-7343e592.js';
import './index-6571f75f.js';
import './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';

/**
 * Manages history for Token contracts
 * @public
 */
class TokenERC20History {
  constructor(contractWrapper, events) {
    this.contractWrapper = contractWrapper;
    this.events = events;
  }

  /**
   * Get all holder balances
   *
   * @remarks Lets you get all token holders and their corresponding balances
   * @returns  A JSON object of all token holders and their corresponding balances
   * @example
   * ```javascript
   * const allHolderBalances = await contract.history.getAllHolderBalances();
   * ```
   */
  async getAllHolderBalances() {
    const a = await this.events.getEvents("Transfer");
    const txns = a.map(b => b.data);
    const balances = {};
    txns.forEach(item => {
      const from = item?.from;
      const to = item?.to;
      const amount = item?.value;
      if (!(from === AddressZero)) {
        if (!(from in balances)) {
          balances[from] = BigNumber.from(0);
        }
        balances[from] = balances[from].sub(amount);
      }
      if (!(to === AddressZero)) {
        if (!(to in balances)) {
          balances[to] = BigNumber.from(0);
        }
        balances[to] = balances[to].add(amount);
      }
    });
    const entries = Object.entries(balances);
    const results = await Promise.all(entries.map(_ref => {
      let [, value] = _ref;
      return fetchCurrencyValue(this.contractWrapper.getProvider(), this.contractWrapper.address, value);
    }));
    return entries.map((_ref2, index) => {
      let [addr] = _ref2;
      return {
        holder: addr,
        balance: results[index]
      };
    });
  }
}

/**
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @internal
 * @deprecated use contract.erc20 instead
 */
class Token extends StandardErc20 {
  static contractRoles = NFT_BASE_CONTRACT_ROLES;

  /**
   * Signature Minting
   * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the tokens
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
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
    this.metadata = new ContractMetadata(this.contractWrapper, TokenErc20ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Token.contractRoles);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.history = new TokenERC20History(this.contractWrapper, this.events);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.signature = new Erc20SignatureMintable(this.contractWrapper, this.roles);
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
    return await this.erc20.getValue(await this.contractWrapper.read("getVotes", [account]));
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
   * Mint Tokens for the connected wallet
   *
   * @remarks See {@link Token.mintTo}
   */
  mint = /* @__PURE__ */buildTransactionFunction(async amount => {
    return this.erc20.mint.prepare(amount);
  });

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   *
   * await contract.mintTo(toAddress, amount);
   * ```
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (to, amount) => {
    return this.erc20.mintTo.prepare(to, amount);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return this.erc20.getMintTransaction(to, amount);
  }

  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.mintBatchTo(data);
   * ```
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async args => {
    return this.erc20.mintBatchTo.prepare(args);
  });

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
  burn = /* @__PURE__ */buildTransactionFunction(amount => {
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

export { Token };
//# sourceMappingURL=token-e4960153.esm-b16f3afd.js.map
