import { b0 as FEATURE_DIRECT_LISTINGS, t as ContractEncoder, B as BigNumber, Q as resolveAddress, y as buildTransactionFunction, a0 as normalizePriceValue, T as Transaction, a5 as invariant, aI as fetchCurrencyValue, $ as Contract, b1 as FEATURE_ENGLISH_AUCTIONS, x as AddressZero, aL as fetchCurrencyMetadata, J as formatUnits, aZ as AuctionHasNotEndedError, b2 as FEATURE_OFFERS, ar as isNativeToken, aW as NATIVE_TOKENS, r as ContractWrapper, ak as z, at as AddressOrEnsSchema, aF as BigNumberishSchema, a1 as NATIVE_TOKEN_ADDRESS, au as AmountSchema } from './App-40ca2dcc.js';
import { c as cleanCurrencyAddress } from './cleanCurrencyAddress-42c17db5.esm-a5ab6000.js';
import { s as setErc20Allowance } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import { g as getAllInBatches, h as handleTokenApproval, a as isTokenApprovedForTransfer } from './marketplace-302aa6cf.esm-b6b89b14.js';
import { f as fetchTokenMetadataForContract, I as InterfaceId_IERC721, c as InterfaceId_IERC1155 } from './QueryParams-fc338c68.esm-688d9d17.js';
import { R as RawDateSchema, E as EndDateSchema } from './assertEnabled-1fa10adb.esm-79af49b9.js';
import { b as ContractEvents, G as GasCostEstimator } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractInterceptor } from './contract-interceptor-69c9c882.esm-2cda0528.js';

/**
 * @internal
 */
const DirectListingInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being listed.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token to list.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The price to pay per unit of NFTs listed.
   */
  pricePerToken: AmountSchema,
  /**
   * The start time of the listing.
   */
  startTimestamp: RawDateSchema.default(new Date()),
  /**
   * The end time of the listing.
   */
  endTimestamp: EndDateSchema,
  /**
   * Whether the listing is reserved to be bought from a specific set of buyers.
   */
  isReservedListing: z.boolean().default(false)
}))();

/**
 * @public
 */

let Status = /*#__PURE__*/function (Status) {
  Status[Status["UNSET"] = 0] = "UNSET";
  Status[Status["Created"] = 1] = "Created";
  Status[Status["Completed"] = 2] = "Completed";
  Status[Status["Cancelled"] = 3] = "Cancelled";
  Status[Status["Active"] = 4] = "Active";
  Status[Status["Expired"] = 5] = "Expired";
  return Status;
}({});

/**
 * Handles direct listings
 * @public
 */
class MarketplaceV3DirectListings {
  featureName = FEATURE_DIRECT_LISTINGS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of direct listings
   *
   * @returns Returns the total number of direct listings created.
   * @public
   *
   * @example
   * ```javascript
   * const totalListings = await contract.directListings.getTotalCount();
   * ```
   * @twfeature DirectListings
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalListings", []);
  }

  /**
   * Get all direct listings
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Direct listing object array
   * @twfeature DirectListings
   */
  async getAll(filter) {
    const totalListings = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllListings", [startId, endId]));
    rawListings = batches.flat();
    const filteredListings = await this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get all valid direct listings
   *
   * @remarks A valid listing is where the listing is active, and the creator still owns & has approved Marketplace to transfer the listed NFTs.
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Direct listing object array
   * @twfeature DirectListings
   */
  async getAllValid(filter) {
    const totalListings = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidListings", [startId, endId]));
    rawListings = batches.flat();
    const filteredListings = await this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get a single direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.directListings.getListing(listingId);
   * ```
   *
   * @param listingId - the listing id
   * @returns The Direct listing object
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.directListings.getListing(listingId);
   * ```
   * @twfeature DirectListings
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.read("getListing", [listingId]);
    return await this.mapListing(listing);
  }

  /**
   * Check if a buyer is approved for a specific direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const isBuyerApproved = await contract.directListings.isBuyerApprovedForListing(listingId, "{{wallet_address}}");
   * ```
   *
   * @param listingId - the listing id
   * @param buyer - buyer address
   * @twfeature DirectListings
   */
  async isBuyerApprovedForListing(listingId, buyer) {
    const listing = await this.validateListing(BigNumber.from(listingId));
    if (!listing.isReservedListing) {
      throw new Error(`Listing ${listingId} is not a reserved listing.`);
    }
    return await this.contractWrapper.read("isBuyerApprovedForListing", [listingId, await resolveAddress(buyer)]);
  }

  /**
   * Check if a currency is approved for a specific direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const currencyContractAddress = '0x1234';
   * const isApproved = await contract.directListings.isCurrencyApprovedForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - the listing id
   * @param currency - currency address
   * @twfeature DirectListings
   */
  async isCurrencyApprovedForListing(listingId, currency) {
    await this.validateListing(BigNumber.from(listingId));
    return await this.contractWrapper.read("isCurrencyApprovedForListing", [listingId, await resolveAddress(currency)]);
  }

  /**
   * Check price per token for an approved currency
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const currencyContractAddress = '0x1234';
   * const price = await contract.directListings.currencyPriceForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - the listing id
   * @param currencyContractAddress - currency contract address
   * @twfeature DirectListings
   */
  async currencyPriceForListing(listingId, currencyContractAddress) {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      return listing.pricePerToken;
    }
    const isApprovedCurrency = await this.isCurrencyApprovedForListing(listingId, resolvedCurrencyAddress);
    if (!isApprovedCurrency) {
      throw new Error(`Currency ${resolvedCurrencyAddress} is not approved for Listing ${listingId}.`);
    }
    return await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create new direct listing
   *
   * @remarks Create a new listing on the marketplace where people can buy an asset directly.
   *
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   * @twfeature DirectListings
   */
  createListing = /* @__PURE__ */buildTransactionFunction(async listing => {
    const parsedListing = await DirectListingInputParamsSchema.parseAsync(listing);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedListing.startTimestamp.lt(blockTime)) {
      parsedListing.startTimestamp = BigNumber.from(blockTime);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createListing",
      args: [{
        assetContract: parsedListing.assetContractAddress,
        tokenId: parsedListing.tokenId,
        quantity: parsedListing.quantity,
        currency: cleanCurrencyAddress(parsedListing.currencyContractAddress),
        pricePerToken: normalizedPricePerToken,
        startTimestamp: parsedListing.startTimestamp,
        endTimestamp: parsedListing.endTimestamp,
        reserved: parsedListing.isReservedListing
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewListing", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new listings
   *
   * @remarks Create a batch of new listings on the marketplace
   *
   * @example
   * ```javascript
   * const listings = [...];
   * const tx = await contract.directListings.createListingsBatch(listings);
   * ```
   */
  createListingsBatch = /* @__PURE__ */buildTransactionFunction(async listings => {
    const data = (await Promise.all(listings.map(listing => this.createListing.prepare(listing)))).map(tx => tx.encode());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("NewListing", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.listingId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Update a direct listing
   *
   * @param listing - the new listing information
   *
   * @example
   * ```javascript
   * // Data of the listing you want to update
   *
   * const listingId = 0; // ID of the listing you want to update
   *
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...", // should be same as original listing
   *   // token ID of the asset you want to list
   *   tokenId: "0", // should be same as original listing
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()), // can't change this if listing already active
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.updateListing(listingId, listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   * @twfeature DirectListings
   */
  updateListing = /* @__PURE__ */buildTransactionFunction(async (listingId, listing) => {
    const parsedListing = await DirectListingInputParamsSchema.parseAsync(listing);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "updateListing",
      args: [listingId, {
        assetContract: parsedListing.assetContractAddress,
        tokenId: parsedListing.tokenId,
        quantity: parsedListing.quantity,
        currency: cleanCurrencyAddress(parsedListing.currencyContractAddress),
        pricePerToken: normalizedPricePerToken,
        startTimestamp: parsedListing.startTimestamp,
        endTimestamp: parsedListing.endTimestamp,
        reserved: parsedListing.isReservedListing
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("UpdatedListing", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Cancel Direct Listing
   *
   * @remarks Cancel a direct listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to cancel
   * const listingId = 0;
   *
   * await contract.directListings.cancelListing(listingId);
   * ```
   * @twfeature DirectListings
   */
  cancelListing = /* @__PURE__ */buildTransactionFunction(async listingId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelListing",
      args: [listingId]
    });
  });

  /**
   * Buy direct listing for a specific wallet
   *
   * @remarks Buy from a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param quantityDesired - the quantity to buy
   * @param receiver - optional receiver of the bought listing if different from the connected wallet
   * @twfeature DirectListings
   */
  buyFromListing = /* @__PURE__ */buildTransactionFunction(async (listingId, quantityDesired, receiver) => {
    if (receiver) {
      receiver = await resolveAddress(receiver);
    }
    const listing = await this.validateListing(BigNumber.from(listingId));
    const {
      valid,
      error
    } = await this.isStillValidListing(listing, quantityDesired);
    if (!valid) {
      throw new Error(`Listing ${listingId} is no longer valid. ${error}`);
    }
    const buyFor = receiver ? receiver : await this.contractWrapper.getSignerAddress();
    const quantity = BigNumber.from(quantityDesired);
    const value = BigNumber.from(listing.pricePerToken).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "buyFromListing",
      args: [listingId, buyFor, quantity, listing.currencyContractAddress, value],
      overrides
    });
  });

  /**
   * Approve buyer for a reserved direct listing
   *
   * @remarks Approve a buyer to buy from a reserved listing.
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.approveBuyerForReservedListing(listingId, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   * @twfeature DirectListings
   */
  approveBuyerForReservedListing = /* @__PURE__ */buildTransactionFunction(async (listingId, buyer) => {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (!isApproved) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approveBuyerForListing",
        args: [listingId, buyer, true]
      });
    } else {
      throw new Error(`Buyer ${buyer} already approved for listing ${listingId}.`);
    }
  });

  /**
   * Revoke approval of a buyer for a reserved direct listing
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.revokeBuyerApprovalForReservedListing(listingId, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   */
  revokeBuyerApprovalForReservedListing = /* @__PURE__ */buildTransactionFunction(async (listingId, buyer) => {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (isApproved) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approveBuyerForListing",
        args: [listingId, buyer, false]
      });
    } else {
      throw new Error(`Buyer ${buyer} not approved for listing ${listingId}.`);
    }
  });

  /**
   * Approve a currency for a direct listing
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve currency for
   * const listingId = "0";
   *
   * await contract.directListings.approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency being approved
   * @param pricePerTokenInCurrency - Price per token in the currency
   * @twfeature DirectListings
   */
  approveCurrencyForListing = /* @__PURE__ */buildTransactionFunction(async (listingId, currencyContractAddress, pricePerTokenInCurrency) => {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      invariant(pricePerTokenInCurrency === listing.pricePerToken, "Approving listing currency with a different price.");
    }
    const currencyPrice = await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
    invariant(pricePerTokenInCurrency === currencyPrice, "Currency already approved with this price.");
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approveCurrencyForListing",
      args: [listingId, resolvedCurrencyAddress, pricePerTokenInCurrency]
    });
  });

  /**
   * Revoke approval of a currency for a direct listing
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to revoke currency for
   * const listingId = "0";
   *
   * await contract.directListings.revokeCurrencyApprovalForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency
   * @twfeature DirectListings
   */
  revokeCurrencyApprovalForListing = /* @__PURE__ */buildTransactionFunction(async (listingId, currencyContractAddress) => {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      throw new Error(`Can't revoke approval for main listing currency.`);
    }
    const currencyPrice = await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
    invariant(!currencyPrice.isZero(), "Currency not approved.");
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approveCurrencyForListing",
      args: [listingId, resolvedCurrencyAddress, BigNumber.from(0)]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */
  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction listing to the direct listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns  The mapped interface.
   */
  async mapListing(listing) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (listing.status) {
      case 1:
        status = BigNumber.from(listing.startTimestamp).gt(blockTime) ? Status.Created : BigNumber.from(listing.endTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      assetContractAddress: listing.assetContract,
      currencyContractAddress: listing.currency,
      pricePerToken: listing.pricePerToken.toString(),
      currencyValuePerToken: await fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.pricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId.toString(),
      quantity: listing.quantity.toString(),
      startTimeInSeconds: BigNumber.from(listing.startTimestamp).toNumber(),
      asset: await fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      endTimeInSeconds: BigNumber.from(listing.endTimestamp).toNumber(),
      creatorAddress: listing.listingCreator,
      isReservedListing: listing.reserved,
      status: status
    };
  }

  /**
   * Use this method to check if a direct listing is still valid.
   *
   * Ways a direct listing can become invalid:
   * 1. The asset holder transferred the asset to another wallet
   * 2. The asset holder burned the asset
   * 3. The asset holder removed the approval on the marketplace
   *
   * @internal
   * @param listing - The listing to check.
   * @returns  True if the listing is valid, false otherwise.
   */
  async isStillValidListing(listing, quantity) {
    const approved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, listing.creatorAddress);
    if (!approved) {
      return {
        valid: false,
        error: `Token '${listing.tokenId}' from contract '${listing.assetContractAddress}' is not approved for transfer`
      };
    }
    const provider = this.contractWrapper.getProvider();
    const ERC165Abi = (await import('./IERC165-d67b8364.js')).default;
    const erc165 = new Contract(listing.assetContractAddress, ERC165Abi, provider);
    const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);
    if (isERC721) {
      const ERC721Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dk; })).default;
      const asset = new Contract(listing.assetContractAddress, ERC721Abi, provider);

      // Handle reverts in case of non-existent tokens
      let owner;
      try {
        owner = await asset.ownerOf(listing.tokenId);
      } catch (e) {}
      const valid = owner?.toLowerCase() === listing.creatorAddress.toLowerCase();
      return {
        valid,
        error: valid ? undefined : `Seller is not the owner of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} anymore'`
      };
    } else if (isERC1155) {
      const ERC1155Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dm; })).default;
      const asset = new Contract(listing.assetContractAddress, ERC1155Abi, provider);
      const balance = await asset.balanceOf(listing.creatorAddress, listing.tokenId);
      const valid = balance.gte(quantity || listing.quantity);
      return {
        valid,
        error: valid ? undefined : `Seller does not have enough balance of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} to fulfill the listing`
      };
    } else {
      return {
        valid: false,
        error: "Contract does not implement ERC 1155 or ERC 721."
      };
    }
  }
  async applyFilter(listings, filter) {
    let rawListings = [...listings];
    if (filter) {
      if (filter.seller) {
        const resolvedSeller = await resolveAddress(filter.seller);
        rawListings = rawListings.filter(seller => seller.listingCreator.toString().toLowerCase() === resolvedSeller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawListings.length ? rawListings.slice(0, filter.count) : rawListings;
  }
}

/**
 * @internal
 */
const EnglishAuctionInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being auctioned.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token to auction.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The minimum price that a bid must be in order to be accepted.
   */
  minimumBidAmount: AmountSchema,
  /**
   * The buyout price of the auction.
   */
  buyoutBidAmount: AmountSchema,
  /**
   * This is a buffer e.g. x seconds.
   *
   * If a new winning bid is made less than x seconds before expirationTimestamp, the
   * expirationTimestamp is increased by x seconds.
   */
  timeBufferInSeconds: BigNumberishSchema.default(900),
  // 15 minutes by default

  /**
   * This is a buffer in basis points e.g. x%.
   *
   * To be considered as a new winning bid, a bid must be at least x% greater than
   * the current winning bid.
   */
  bidBufferBps: BigNumberishSchema.default(500),
  // 5% by default

  /**
   * The start time of the auction.
   */
  startTimestamp: RawDateSchema.default(new Date()),
  /**
   * The end time of the auction.
   */
  endTimestamp: EndDateSchema
}))();

/**
 * @public
 */

/**
 * Handles auctions
 * @public
 */
class MarketplaceV3EnglishAuctions {
  featureName = FEATURE_ENGLISH_AUCTIONS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of english auctions
   *
   * @returns Returns the total number of auctions created.
   * @public
   *
   * @example
   * ```javascript
   * const totalAuctions = await contract.englishAuctions.getTotalCount();
   * ```
   * @twfeature EnglishAuctions
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalAuctions", []);
  }

  /**
   * Get all english auctions
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Auction object array
   * @twfeature EnglishAuctions
   */
  async getAll(filter) {
    const totalAuctions = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllAuctions", [startId, endId]));
    rawAuctions = batches.flat();
    const filteredAuctions = await this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get all valid english auctions
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Auction object array
   * @twfeature EnglishAuctions
   */
  async getAllValid(filter) {
    const totalAuctions = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidAuctions", [startId, endId]));
    rawAuctions = batches.flat();
    const filteredAuctions = await this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get a single english auction
   *
   * @example
   * ```javascript
   * const auctionId = 0;
   * const auction = await contract.englishAuctions.getAuction(auctionId);
   * ```
   *
   * @param auctionId - the auction Id
   * @returns The Auction object
   * @twfeature EnglishAuctions
   */
  async getAuction(auctionId) {
    const auction = await this.contractWrapper.read("getAuction", [auctionId]);
    return await this.mapAuction(auction);
  }

  /**
   * Get winning bid of an english auction
   *
   * @remarks Get the current highest bid of an active auction.
   *
   * @example
   * ```javascript
   * // The ID of the auction
   * const auctionId = 0;
   * const winningBid = await contract.englishAuctions.getWinningBid(auctionId);
   * ```
   * @param auctionId - the auction Id
   * @twfeature EnglishAuctions
   */
  async getWinningBid(auctionId) {
    await this.validateAuction(BigNumber.from(auctionId));
    const bid = await this.contractWrapper.read("getWinningBid", [auctionId]);
    if (bid._bidder === AddressZero) {
      return undefined;
    }
    return await this.mapBid(auctionId.toString(), bid._bidder, bid._currency, bid._bidAmount.toString());
  }

  /**
   * Check if a bid is or will be a winning bid
   *
   * @example
   * ```javascript
   * const auctionId = 0;
   * const bidAmount = 100;
   * const isWinningBid = await contract.englishAuctions.isWinningBid(auctionId, bidAmount);
   * ```
   *
   * @param auctionId - Auction Id
   * @param bidAmount - Amount to bid
   * @returns true if the bid is or will be a winning bid
   * @twfeature EnglishAuctions
   */
  async isWinningBid(auctionId, bidAmount) {
    return await this.contractWrapper.read("isNewWinningBid", [auctionId, bidAmount]);
  }

  /**
   * Get the winner for a specific english auction
   *
   * @remarks Get the winner of the auction after an auction ends.
   *
   * @example
   * ```javascript
   * // The auction ID of a closed english auction
   * const auctionId = 0;
   * const auctionWinner = await contract.englishAuctions.getWinner(auctionId);
   * ```
   * @param auctionId - the auction Id
   * @returns The address of the auction winner
   * @twfeature EnglishAuctions
   */
  async getWinner(auctionId) {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const bid = await this.contractWrapper.read("getWinningBid", [auctionId]);
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    const endTime = BigNumber.from(auction.endTimeInSeconds);

    // if we have a winner in the map and the current time is past the endtime of the auction return the address of the winner
    if (now.gt(endTime) && bid._bidder !== AddressZero) {
      return bid._bidder;
    }
    // otherwise fall back to query filter things

    // TODO this should be via indexer or direct contract call
    const contractEvent = new ContractEvents(this.contractWrapper);
    const closedAuctions = await contractEvent.getEvents("AuctionClosed");
    const closed = closedAuctions.find(a => a.data.auctionId.eq(BigNumber.from(auctionId)));
    if (!closed) {
      throw new Error(`Could not find auction with ID ${auctionId} in closed auctions`);
    }
    return closed.data.winningBidder;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create an english auction
   *
   * @remarks Create a new auction where people can bid on an asset.
   *
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "900", // 15 minutes by default
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "500", // 5% by default
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   * ```
   * @param auction - the auction data
   * @returns The transaction hash and the auction id
   * @twfeature EnglishAuctions
   */
  createAuction = /* @__PURE__ */buildTransactionFunction(async auction => {
    const parsedAuction = EnglishAuctionInputParamsSchema.parse(auction);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedAuction.assetContractAddress, parsedAuction.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedBuyoutAmount = await normalizePriceValue(this.contractWrapper.getProvider(), parsedAuction.buyoutBidAmount, parsedAuction.currencyContractAddress);
    const normalizedMinBidAmount = await normalizePriceValue(this.contractWrapper.getProvider(), parsedAuction.minimumBidAmount, parsedAuction.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedAuction.startTimestamp.lt(blockTime)) {
      parsedAuction.startTimestamp = BigNumber.from(blockTime);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createAuction",
      args: [{
        assetContract: parsedAuction.assetContractAddress,
        tokenId: parsedAuction.tokenId,
        quantity: parsedAuction.quantity,
        currency: cleanCurrencyAddress(parsedAuction.currencyContractAddress),
        minimumBidAmount: normalizedMinBidAmount,
        buyoutBidAmount: normalizedBuyoutAmount,
        timeBufferInSeconds: parsedAuction.timeBufferInSeconds,
        bidBufferBps: parsedAuction.bidBufferBps,
        startTimestamp: parsedAuction.startTimestamp,
        endTimestamp: parsedAuction.endTimestamp
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewAuction", receipt.logs)[0];
        return {
          id: event.args.auctionId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new auctions
   *
   * @remarks Create a batch of new auctions on the marketplace
   *
   * @example
   * ```javascript
   * const auctions = [...];
   * const tx = await contract.englishAuctions.createAuctionsBatch(auctions);
   * ```
   */
  createAuctionsBatch = /* @__PURE__ */buildTransactionFunction(async listings => {
    const data = (await Promise.all(listings.map(listing => this.createAuction.prepare(listing)))).map(tx => tx.encode());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("NewAuction", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.auctionId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Buyout an english auction
   *
   * @remarks Buy a specific auction from the marketplace.
   *
   * @example
   * ```javascript
   * // The auction ID you want to buy
   * const auctionId = 0;
   *
   * await contract.englishAuctions.buyoutAuction(auctionId);
   * ```
   * @param auctionId - the auction id
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  buyoutAuction = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const currencyMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), auction.currencyContractAddress);
    return this.makeBid.prepare(auctionId, formatUnits(auction.buyoutBidAmount, currencyMetadata.decimals));
  });

  /**
   * Bid on an english auction
   *
   * @remarks Make a bid on an auction
   *
   * @example
   * ```javascript
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   * @param auctionId - the auction id
   * @param bidAmount - the amount you are willing to bid
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  makeBid = /* @__PURE__ */buildTransactionFunction(async (auctionId, bidAmount) => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const normalizedBidAmount = await normalizePriceValue(this.contractWrapper.getProvider(), bidAmount, auction.currencyContractAddress);
    if (normalizedBidAmount.eq(BigNumber.from(0))) {
      throw new Error("Cannot make a bid with 0 value");
    }
    if (BigNumber.from(auction.buyoutBidAmount).gt(0) && normalizedBidAmount.gt(auction.buyoutBidAmount)) {
      throw new Error("Bid amount must be less than or equal to buyoutBidAmount");
    }
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      const isWinnner = await this.isWinningBid(auctionId, normalizedBidAmount);
      invariant(isWinnner, "Bid price is too low based on the current winning bid and the bid buffer");
    } else {
      const tokenPrice = normalizedBidAmount;
      const minimumBidAmount = BigNumber.from(auction.minimumBidAmount);
      invariant(tokenPrice.gte(minimumBidAmount), "Bid price is too low based on minimum bid amount");
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, normalizedBidAmount, auction.currencyContractAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "bidInAuction",
      args: [auctionId, normalizedBidAmount],
      overrides
    });
  });

  /**
   * Cancel an english auction
   *
   * @remarks Cancel an auction on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to cancel
   * const auctionId = "0";
   *
   * await contract.englishAuctions.cancelAuction(auctionId);
   * ```
   * @param auctionId - the auction id
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  cancelAuction = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      throw new Error(`Bids already made.`);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelAuction",
      args: [auctionId]
    });
  });

  /**
   * Close the english auction for the bidder
   *
   * @remarks Closes the Auction and executes the sale for the buyer.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.closeAuctionForBidder(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   * @param closeFor - optionally pass the winning bid offeror address to close the auction on their behalf
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  closeAuctionForBidder = /* @__PURE__ */buildTransactionFunction(async (auctionId, closeFor) => {
    if (!closeFor) {
      closeFor = await this.contractWrapper.getSignerAddress();
    }
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "collectAuctionTokens",
        args: [BigNumber.from(auctionId)]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Close the english auction for the seller
   *
   * @remarks Closes the Auction and executes the sale for the seller.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auctionId = "0";
   * await contract.englishAuctions.closeAuctionForSeller(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  closeAuctionForSeller = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "collectAuctionPayout",
        args: [BigNumber.from(auctionId)]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Close the english auction for both the seller and the bidder
   *
   * @remarks Closes the Auction and executes the sale for both parties.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.executeSale(auctionId);
   * ```
   *
   * @param auctionId - the auction to close
   * @returns The transaction result
   * @twfeature EnglishAuctions
   */
  executeSale = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      const winningBid = await this.getWinningBid(auctionId);
      invariant(winningBid, "No winning bid found");
      const closeForSeller = this.encoder.encode("collectAuctionPayout", [auctionId]);
      const closeForBuyer = this.encoder.encode("collectAuctionTokens", [auctionId]);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [[closeForSeller, closeForBuyer]]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Get the buffer for an english auction
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to get the buffer for
   * const auctionId = "0";
   * const buffer = await contract.englishAuctions.getBidBufferBps(auctionId);
   * ```
   *
   * @param auctionId - id of the auction
   * @returns The buffer in basis points
   * @twfeature EnglishAuctions
   */
  async getBidBufferBps(auctionId) {
    return (await this.getAuction(auctionId)).bidBufferBps;
  }

  /**
   * Get the minimum next bid for an english auction
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to get the minimum next bid for
   * const auctionId = "0";
   * const minimumNextBid = await contract.englishAuctions.getMinimumNextBid(auctionId);
   * ```
   *
   * @returns The minimum bid a user can place to outbid the previous highest bid
   * @param auctionId - id of the auction
   * @twfeature EnglishAuctions
   */
  async getMinimumNextBid(auctionId) {
    // we can fetch all of these at the same time using promise.all
    const [currentBidBufferBps, winningBid, auction] = await Promise.all([this.getBidBufferBps(auctionId), this.getWinningBid(auctionId), this.validateAuction(BigNumber.from(auctionId))]);
    const currentBidOrReservePrice = winningBid ?
    // if there is a winning bid use the value of it
    BigNumber.from(winningBid.bidAmount) :
    // if there is no winning bid use the reserve price
    BigNumber.from(auction.minimumBidAmount);
    const minimumNextBid = currentBidOrReservePrice.add(
    // the addition of the current bid and the buffer
    // (have to divide by 10000 to get the fraction of the buffer (since it's in basis points))
    currentBidOrReservePrice.mul(currentBidBufferBps).div(10000));

    // it's more useful to return a currency value here
    return fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currencyContractAddress, minimumNextBid);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if auction could not be found
   *
   * @param auctionId - Auction to check for
   */
  async validateAuction(auctionId) {
    try {
      return await this.getAuction(auctionId);
    } catch (err) {
      console.error(`Error getting the auction with id ${auctionId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction to the auction interface.
   *
   * @internal
   * @param auction - The auction to map, as returned from the contract.
   * @returns  The mapped interface.
   */
  async mapAuction(auction) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (auction.status) {
      case 1:
        status = BigNumber.from(auction.startTimestamp).gt(blockTime) ? Status.Created : BigNumber.from(auction.endTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      id: auction.auctionId.toString(),
      creatorAddress: auction.auctionCreator,
      assetContractAddress: auction.assetContract,
      tokenId: auction.tokenId.toString(),
      quantity: auction.quantity.toString(),
      currencyContractAddress: auction.currency,
      minimumBidAmount: auction.minimumBidAmount.toString(),
      minimumBidCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currency, auction.minimumBidAmount),
      buyoutBidAmount: auction.buyoutBidAmount.toString(),
      buyoutCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currency, auction.buyoutBidAmount),
      timeBufferInSeconds: BigNumber.from(auction.timeBufferInSeconds).toNumber(),
      bidBufferBps: BigNumber.from(auction.bidBufferBps).toNumber(),
      startTimeInSeconds: BigNumber.from(auction.startTimestamp).toNumber(),
      endTimeInSeconds: BigNumber.from(auction.endTimestamp).toNumber(),
      asset: await fetchTokenMetadataForContract(auction.assetContract, this.contractWrapper.getProvider(), auction.tokenId, this.storage),
      status: status
    };
  }

  /**
   * Maps an auction-bid to the strict interface
   *
   * @internal
   * @param bid - The bid to map, as returned from the contract.
   * @returns  A `Bid` object
   */
  async mapBid(auctionId, bidderAddress, currencyContractAddress, bidAmount) {
    const resolvedBidderAddress = await resolveAddress(bidderAddress);
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    return {
      auctionId,
      bidderAddress: resolvedBidderAddress,
      currencyContractAddress: resolvedCurrencyAddress,
      bidAmount,
      bidAmountCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedCurrencyAddress, bidAmount)
    };
  }
  async applyFilter(auctions, filter) {
    let rawAuctions = [...auctions];
    if (filter) {
      if (filter.seller) {
        const resolvedSeller = await resolveAddress(filter.seller);
        rawAuctions = rawAuctions.filter(seller => seller.auctionCreator.toString().toLowerCase() === resolvedSeller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawAuctions.length ? rawAuctions.slice(0, filter.count) : rawAuctions;
  }
}

/**
 * @internal
 */
const OfferInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being sought.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to buy.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency offered for the NFTs.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The total offer amount for the NFTs.
   */
  totalPrice: AmountSchema,
  /**
   * The end time of the offer.
   */
  endTimestamp: EndDateSchema
}))();

/**
 * @public
 */

/**
 * Handles marketplace offers
 * @public
 */
class MarketplaceV3Offers {
  featureName = FEATURE_OFFERS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of offers
   *
   * @returns Returns the total number of offers created.
   * @public
   *
   * @example
   * ```javascript
   * const totalOffers = await contract.offers.getTotalCount();
   * ```
   * @twfeature Offers
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalOffers", []);
  }

  /**
   * Get all offers
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Offer object array
   * @twfeature Offers
   */
  async getAll(filter) {
    const totalOffers = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllOffers", [startId, endId]));
    rawOffers = batches.flat();
    const filteredOffers = await this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get all valid offers
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns The Offer object array
   * @twfeature Offers
   */
  async getAllValid(filter) {
    const totalOffers = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidOffers", [startId, endId]));
    rawOffers = batches.flat();
    const filteredOffers = await this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get a single offer
   *
   * @example
   * ```javascript
   * const offerId = 0;
   * const offer = await contract.offers.getOffer(offerId);
   * ```
   *
   * @param offerId - the listing id
   * @returns The Direct listing object
   * @twfeature Offers
   */
  async getOffer(offerId) {
    const offer = await this.contractWrapper.read("getOffer", [offerId]);
    return await this.mapOffer(offer);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Make an offer
   *
   * @remarks Make an offer on the marketplace for an asset.
   *
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   * ```
   * @param offer - the offer data
   * @returns The transaction receipt and the id of the newly created offer
   * @twfeature Offers
   */
  makeOffer = /* @__PURE__ */buildTransactionFunction(async offer => {
    const parsedOffer = await OfferInputParamsSchema.parseAsync(offer);
    const chainId = await this.contractWrapper.getChainID();
    const currency = isNativeToken(parsedOffer.currencyContractAddress) ? NATIVE_TOKENS[chainId].wrapped.address : parsedOffer.currencyContractAddress;
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), parsedOffer.totalPrice, currency);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, normalizedTotalPrice, currency, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "makeOffer",
      args: [{
        assetContract: parsedOffer.assetContractAddress,
        tokenId: parsedOffer.tokenId,
        quantity: parsedOffer.quantity,
        currency: currency,
        totalPrice: normalizedTotalPrice,
        expirationTimestamp: parsedOffer.endTimestamp
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewOffer", receipt?.logs);
        return {
          id: event[0].args.offerId,
          receipt
        };
      }
    });
  });

  /**
   * Cancel an offer
   *
   * @remarks Cancel an offer on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to cancel
   * const offerId = "0";
   *
   * await contract.offers.cancelOffer(offerId);
   * ```
   * @param offerId - the offer id
   * @returns The transaction receipt
   * @twfeature Offers
   */
  cancelOffer = /* @__PURE__ */buildTransactionFunction(async offerId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelOffer",
      args: [offerId]
    });
  });

  /**
   * Accept an offer
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to accept
   * const offerId = 0;
   *
   * await contract.offers.acceptOffer(offerId);
   * ```
   *
   * @param offerId - The offer id
   * @returns The transaction receipt
   * @twfeature Offers
   */
  acceptOffer = /* @__PURE__ */buildTransactionFunction(async offerId => {
    const offer = await this.validateOffer(BigNumber.from(offerId));
    const {
      valid,
      error
    } = await this.isStillValidOffer(offer);
    if (!valid) {
      throw new Error(`Offer ${offerId} is no longer valid. ${error}`);
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await handleTokenApproval(this.contractWrapper, this.getAddress(), offer.assetContractAddress, offer.tokenId, await this.contractWrapper.getSignerAddress());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "acceptOffer",
      args: [offerId],
      overrides
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if offer could not be found
   *
   * @param offerId - offer to check for
   */
  async validateOffer(offerId) {
    try {
      return await this.getOffer(offerId);
    } catch (err) {
      console.error(`Error getting the offer with id ${offerId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the offer to the offer interface.
   *
   * @internal
   * @param offer - The offer to map, as returned from the contract.
   * @returns  The mapped interface.
   */
  async mapOffer(offer) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (offer.status) {
      case 1:
        status = BigNumber.from(offer.expirationTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      id: offer.offerId.toString(),
      offerorAddress: offer.offeror,
      assetContractAddress: offer.assetContract,
      currencyContractAddress: offer.currency,
      tokenId: offer.tokenId.toString(),
      quantity: offer.quantity.toString(),
      totalPrice: offer.totalPrice.toString(),
      currencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), offer.currency, offer.totalPrice),
      asset: await fetchTokenMetadataForContract(offer.assetContract, this.contractWrapper.getProvider(), offer.tokenId, this.storage),
      endTimeInSeconds: BigNumber.from(offer.expirationTimestamp).toNumber(),
      status: status
    };
  }

  /**
   * Use this method to check if an offer is still valid.
   *
   * Ways an offer can become invalid:
   * 1. The offer has expired
   * 2. The offeror doesn't have enough balance of currency tokens
   * 3. The offeror removed the approval of currency tokens on the marketplace
   *
   * @internal
   * @param offer - The offer to check.
   * @returns  True if the offer is valid, false otherwise.
   */
  async isStillValidOffer(offer) {
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    if (now.gt(offer.endTimeInSeconds)) {
      return {
        valid: false,
        error: `Offer with ID ${offer.id} has expired`
      };
    }
    const chainId = await this.contractWrapper.getChainID();
    const currency = isNativeToken(offer.currencyContractAddress) ? NATIVE_TOKENS[chainId].wrapped.address : offer.currencyContractAddress;
    const provider = this.contractWrapper.getProvider();
    const ERC20Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
    const erc20 = new ContractWrapper(provider, currency, ERC20Abi, {}, this.storage);
    const offerorBalance = await erc20.read("balanceOf", [offer.offerorAddress]);
    if (offerorBalance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} doesn't have enough balance of token ${currency}`
      };
    }
    const offerorAllowance = await erc20.read("allowance", [offer.offerorAddress, this.getAddress()]);
    if (offerorAllowance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} hasn't approved enough amount of token ${currency}`
      };
    }
    return {
      valid: true,
      error: ""
    };
  }
  async applyFilter(offers, filter) {
    let rawOffers = [...offers];
    if (filter) {
      if (filter.offeror) {
        const resolvedOfferor = await resolveAddress(filter.offeror);
        rawOffers = rawOffers.filter(offeror => offeror.offeror.toString().toLowerCase() === resolvedOfferor?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawOffers = rawOffers.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawOffers = rawOffers.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawOffers.length ? rawOffers.slice(0, filter.count) : rawOffers;
  }
}

export { MarketplaceV3DirectListings as M, MarketplaceV3EnglishAuctions as a, MarketplaceV3Offers as b };
//# sourceMappingURL=marketplacev3-offers-91e2a1eb.esm-5b4e1a66.js.map