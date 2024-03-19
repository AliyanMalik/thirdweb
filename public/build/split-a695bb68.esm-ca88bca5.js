import { bB as ADMIN_ROLE, r as ContractWrapper, s as AbiSchema, bC as SplitsContractSchema, t as ContractEncoder, B as BigNumber, Q as resolveAddress, $ as Contract, aI as fetchCurrencyValue, y as buildTransactionFunction, T as Transaction } from './App-40ca2dcc.js';
import { C as ContractMetadata, a as ContractAppURI, G as GasCostEstimator, b as ContractEvents } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractInterceptor } from './contract-interceptor-69c9c882.esm-2cda0528.js';
import { C as ContractRoles } from './contract-roles-107ca68a.esm-c3cfe3db.js';
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

/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
// TODO create extension wrappers for this
class Split {
  static contractRoles = ADMIN_ROLE;

  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, SplitsContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Split.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get Recipients of this splits contract
   *
   * @remarks Get the data about the shares of every split recipient on the contract
   *
   * @example
   * ```javascript
   * const recipients = await contract.getAllRecipients();
   * console.log(recipients);
   * ```
   */
  async getAllRecipients() {
    const recipients = [];
    let index = BigNumber.from(0);
    const totalRecipients = await this.contractWrapper.read("payeeCount", []);
    while (index.lt(totalRecipients)) {
      try {
        const recipientAddress = await this.contractWrapper.read("payee", [index]);
        recipients.push(await this.getRecipientSplitPercentage(recipientAddress));
        index = index.add(1);
      } catch (err) {
        // The only way we know how to detect that we've found all recipients
        // is if we get an error when trying to get the next recipient.
        if ("method" in err && err["method"].toLowerCase().includes("payee(uint256)")) {
          break;
        } else {
          throw err;
        }
      }
    }
    return recipients;
  }

  /**
   * Returns all the recipients and their balances in the native currency.
   *
   * @returns A map of recipient addresses to their balances in the native currency.
   */
  async balanceOfAllRecipients() {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOf(recipient.address);
    }
    return balances;
  }

  /**
   * Returns all the recipients and their balances in a non-native currency.
   *
   * @param tokenAddress - The address of the currency to check the balances in.
   * @returns A map of recipient addresses to their balances in the specified currency.
   */
  async balanceOfTokenAllRecipients(tokenAddress) {
    const [resolvedToken, recipients] = await Promise.all([resolveAddress(tokenAddress), this.getAllRecipients()]);
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOfToken(recipient.address, resolvedToken);
    }
    return balances;
  }

  /**
   * Get Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * const funds = await contract.balanceOf(address);
   * console.log(funds);
   * ```
   */
  async balanceOf(address) {
    const [resolvedAddress, walletBalance, totalReleased] = await Promise.all([resolveAddress(address), this.contractWrapper.getProvider().getBalance(this.getAddress()), this.contractWrapper.read("totalReleased", [])]);
    const totalReceived = walletBalance.add(totalReleased);
    return this._pendingPayment(resolvedAddress, totalReceived, await this.contractWrapper.read("released", [resolvedAddress]));
  }

  /**
   * Get non-native Token Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * // The address of the currency to check the contracts funds of
   * const tokenAddress = "0x..."
   * const funds = await contract.balanceOfToken(address, tokenAddress);
   * console.log(funds);
   * ```
   */
  async balanceOfToken(walletAddress, tokenAddress) {
    const [resolvedToken, resolvedWallet] = await Promise.all([resolveAddress(tokenAddress), resolveAddress(walletAddress)]);
    const ERC20Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
    const erc20 = new Contract(resolvedToken, ERC20Abi, this.contractWrapper.getProvider());
    const [walletBalance, totalReleased, alreadyReleased] = await Promise.all([erc20.balanceOf(this.getAddress()), this.contractWrapper.read("totalReleased", [resolvedToken]), this.contractWrapper.read("released", [resolvedToken, resolvedWallet])]);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(resolvedWallet, totalReceived, alreadyReleased);
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedToken, value);
  }

  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const [resolvedAddress, totalShares, walletsShares] = await Promise.all([resolveAddress(address), this.contractWrapper.read("totalShares", []), this.contractWrapper.read("shares", [address])]);
    // We convert to basis points to avoid floating point loss of precision
    return {
      address: resolvedAddress,
      splitPercentage: walletsShares.mul(BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Withdraw Funds
   * @remarks Triggers a transfer to account of the amount of native currency they are owed.
   *
   * @example
   * ```javascript
   * // the wallet address that wants to withdraw their funds
   * const walletAddress = "{{wallet_address}}"
   * await contract.withdraw(walletAddress);
   * ```
   *
   * @param walletAddress - The address to distributes the amount to
   */
  withdraw = /* @__PURE__ */buildTransactionFunction(async walletAddress => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address)",
      args: [await resolveAddress(walletAddress)]
    });
  });

  /**
   * Triggers a transfer to account of the amount of a given currency they are owed.
   *
   * @param walletAddress - The address to distributes the amount to
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  withdrawToken = /* @__PURE__ */buildTransactionFunction(async (walletAddress, tokenAddress) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address,address)",
      args: await Promise.all([resolveAddress(tokenAddress), resolveAddress(walletAddress)])
    });
  });

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * await contract.distribute();
   * ```
   */
  distribute = /* @__PURE__ */buildTransactionFunction(async () => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "distribute()",
      args: []
    });
  });

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * // The address of the currency to distribute funds
   * const tokenAddress = "0x..."
   * await contract.distributeToken(tokenAddress);
   * ```
   *
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  distributeToken = /* @__PURE__ */buildTransactionFunction(async tokenAddress => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "distribute(address)",
      args: [await resolveAddress(tokenAddress)]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const [resolvedAddress, totalShares] = await Promise.all([resolveAddress(address), this.contractWrapper.read("totalShares", [])]);
    const addressReceived = totalReceived.mul(await this.contractWrapper.read("shares", [resolvedAddress]));
    const totalRoyaltyAvailable = addressReceived.div(totalShares);
    return totalRoyaltyAvailable.sub(alreadyReleased);
  }

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

export { Split };
//# sourceMappingURL=split-a695bb68.esm-ca88bca5.js.map
