import { D as DEFAULT_QUERY_ALL_COUNT } from './QueryParams-fc338c68.esm-688d9d17.js';
import { N as NFT_BASE_CONTRACT_ROLES, r as ContractWrapper, s as AbiSchema, bp as DropErc721ContractSchema, t as ContractEncoder, bh as FEATURE_NFT_REVEALABLE, B as BigNumber, v as getRoleHash, x as AddressZero, y as buildTransactionFunction, T as Transaction } from './App-40ca2dcc.js';
import { C as ContractMetadata, a as ContractAppURI, G as GasCostEstimator, b as ContractEvents } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractInterceptor } from './contract-interceptor-69c9c882.esm-2cda0528.js';
import { C as ContractRoyalty, D as DelayedReveal, a as ContractOwner } from './contract-owner-9927b217.esm-6d4d11af.js';
import { C as ContractPlatformFee } from './contract-platform-fee-037b0cbb.esm-3f86947a.js';
import { C as ContractRoles } from './contract-roles-107ca68a.esm-c3cfe3db.js';
import { C as ContractPrimarySale } from './contract-sales-c64cd670.esm-d409be9d.js';
import { D as DropClaimConditions } from './drop-claim-conditions-81dea1f0.esm-7343e592.js';
import { S as StandardErc721 } from './erc-721-standard-ea5aa41f.esm-cd0f49d7.js';
import { P as PaperCheckout } from './thirdweb-checkout-46c13e50.esm-2986f9b5.js';
import './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
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
import './erc-721-ec9e393b.esm-3814a273.js';

/**
 * Setup a collection of one-of-one NFTs that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @internal
 * @deprecated use contract.erc721 instead
 */
class NFTDrop extends StandardErc721 {
  static contractRoles = NFT_BASE_CONTRACT_ROLES;

  /**
   * @internal
   */

  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
   * ```
   */

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   */

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc721ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, NFTDrop.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.claimConditions = new DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.revealer = new DelayedReveal(this.contractWrapper, this.storage, FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.owner = new ContractOwner(this.contractWrapper);
    this.checkout = new PaperCheckout(this.contractWrapper);
  }

  /**
   * @internal
   */
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
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */
  async totalSupply() {
    const [claimed, unclaimed] = await Promise.all([this.totalClaimedSupply(), this.totalUnclaimedSupply()]);
    return claimed.add(unclaimed);
  }

  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */
  async getAllClaimed(queryParams) {
    const start = BigNumber.from(queryParams?.start || 0).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.contractWrapper.read("nextTokenIdToClaim", [])).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map(i => this.get(i.toString())));
  }

  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAllUnclaimed(queryParams) {
    const start = BigNumber.from(queryParams?.start || 0).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const firstTokenId = BigNumber.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim", [])).toNumber(), start));
    const maxId = BigNumber.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint", [])).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map(i => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns The unclaimed supply
   */
  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }

  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns The unclaimed supply
   */
  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
  }

  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), AddressZero]);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  createBatch = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    return this.erc721.lazyMint.prepare(metadatas, options);
  });

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.getClaimTransaction(destinationAddress, quantity, {
      checkERC20Allowance
    });
  }

  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * const claimedTokenId = tx[0].id; // the id of the NFT claimed
   * const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  claimTo = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (destinationAddress, quantity) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return _this.erc721.claimTo.prepare(destinationAddress, quantity, {
        checkERC20Allowance
      });
    };
  })());

  /**
   * Claim NFTs to the connected wallet.
   *
   * @remarks See {@link NFTDrop.claimTo}
   *
   * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  claim = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (quantity) {
      let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _this2.claimTo.prepare(await _this2.contractWrapper.getSignerAddress(), quantity, checkERC20Allowance);
    };
  })());

  /**
   * Burn a single NFT
   *
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   *
   */
  burn = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return this.erc721.burn.prepare(tokenId);
  });

  /******************************
   * STANDARD ERC721 FUNCTIONS
   ******************************/

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */
  async get(tokenId) {
    return this.erc721.get(tokenId);
  }

  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns The address of the owner
   */
  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }

  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */
  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }

  /**
   * Get NFT Balance for the currently connected wallet
   */
  async balance() {
    return this.erc721.balance();
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
  }

  /**
   * Transfer an NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.transfer(walletAddress, tokenId);
   * ```
   */
  transfer = /* @__PURE__ */buildTransactionFunction(async (to, tokenId) => {
    return this.erc721.transfer.prepare(to, tokenId);
  });

  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return this.erc721.setApprovalForAll.prepare(operator, approved);
  });

  /**
   * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */
  setApprovalForToken = /* @__PURE__ */buildTransactionFunction(async (operator, tokenId) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approve",
      args: [operator, tokenId]
    });
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

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}

export { NFTDrop };
//# sourceMappingURL=nft-drop-52cde2b5.esm-12a22bba.js.map
