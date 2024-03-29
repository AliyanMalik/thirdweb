import { b5 as FEATURE_NFT, x as AddressZero, Q as resolveAddress, y as buildTransactionFunction, T as Transaction, b6 as FEATURE_NFT_SUPPLY, B as BigNumber, b7 as FEATURE_NFT_MINTABLE, b8 as FEATURE_NFT_BATCH_MINTABLE, b9 as FEATURE_NFT_BURNABLE, ba as FEATURE_NFT_LOYALTY_CARD, bb as FEATURE_NFT_LAZY_MINTABLE, bc as FEATURE_NFT_UPDATABLE_METADATA, G as ExtensionNotImplementedError, bd as FEATURE_NFT_CLAIM_CUSTOM, be as FEATURE_NFT_CLAIM_CONDITIONS_V2, bf as FEATURE_NFT_TIERED_DROP, bg as FEATURE_NFT_SIGNATURE_MINTABLE_V2, bh as FEATURE_NFT_REVEALABLE, bi as FEATURE_NFT_SHARED_METADATA, aj as NotFoundError, al as CustomContractSchema, bj as FEATURE_NFT_CLAIM_ZORA, V as toUtf8Bytes, bk as isFileOrBuffer, X as keccak256, Y as defaultAbiCoder, a5 as invariant, a0 as normalizePriceValue, t as ContractEncoder, bl as parseEther, au as AmountSchema, bm as FEATURE_NFT_ENUMERABLE, bn as FEATURE_NFT_QUERYABLE, ak as z, at as AddressOrEnsSchema, aK as BasisPointsSchema, aE as BigNumberSchema } from './App-40ca2dcc.js';
import { a as assertEnabled } from './assertEnabled-1fa10adb.esm-79af49b9.js';
import { h as hasFunction, d as detectContractFeature, C as ContractMetadata } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { F as FALLBACK_METADATA, a as fetchTokenMetadata, u as uploadOrExtractURIs, g as getBaseUriFromBatch, b as uploadOrExtractURI, D as DEFAULT_QUERY_ALL_COUNT } from './QueryParams-fc338c68.esm-688d9d17.js';
import { D as DropClaimConditions } from './drop-claim-conditions-81dea1f0.esm-7343e592.js';
import { c as calculateClaimCost, D as DelayedReveal } from './contract-owner-9927b217.esm-6d4d11af.js';
import { B as BasicNFTInput, C as CommonNFTInput, s as setErc20Allowance } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import { j as Signature721WithQuantityInput, k as Signature721WithQuantityOutput, m as MintRequest721, o as MintRequest721withQuantity, B as BaseSignaturePayloadInput } from './index-6571f75f.js';

class Erc721Burnable {
  featureName = FEATURE_NFT_BURNABLE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Burn NFTs
   *
   * @remarks Burn NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to burn
   * const tokenId = 0;
   *
   * await contract.nft.burn.token(tokenId);
   * ```
   */
  token = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [tokenId]
    });
  });
}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(quantity);
 * await contract.erc721.claimConditions.getActive();
 * ```
 */

class Erc721ClaimableWithConditions {
  featureName = FEATURE_NFT_CLAIM_CONDITIONS_V2.name;

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
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   */

  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
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
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * const claimedTokenId = tx[0].id; // the id of the first NFT claimed
   * const claimedNFT = await tx[0].data(); // (optional) get the first claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - (optional) Options to configure the claim
   * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO: Transaction Sequence Pattern
    const tx = await this.conditions.getClaimTransaction(destinationAddress, quantity, options);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
}

function toWei(amount) {
  return parseEther(AmountSchema.parse(amount));
}

/**
 * Claim ERC721 NFTs from a Zora Drop
 * @remarks Purchase NFTs on a Zora Drop
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */
class Erc721ClaimableZora {
  featureName = FEATURE_NFT_CLAIM_ZORA.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Claim NFT
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to, needs to be the connected wallet address
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Not applicable
   *
   * @returns  Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO validation on destinationAddr / options
    const signerAddress = await this.contractWrapper.getSigner()?.getAddress();
    if (destinationAddress !== signerAddress) {
      throw new Error("Zora Drop: Destination address must match connected wallet address");
    }
    if (options?.pricePerToken) {
      throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");
    }
    const saleDetails = await this.getSaleDetails();
    const price = saleDetails.publicSalePrice;
    const zoraFee = toWei("0.000777");
    const totalPrice = BigNumber.from(price).add(zoraFee).mul(quantity);
    const tx = Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "purchase",
      args: [quantity],
      overrides: {
        value: totalPrice
      }
    });
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("Sale", receipt?.logs);
      const startingIndex = event[0].args.firstPurchasedTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
  async getSaleDetails() {
    return this.contractWrapper.read("saleDetails", []);
  }
}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */

class Erc721Claimable {
  featureName = FEATURE_NFT_CLAIM_CUSTOM.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    // TODO: Transaction Sequence Pattern
    let overrides = {};
    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: [destinationAddress, quantity],
      overrides
    });
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns  Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO: Transaction Sequence Pattern
    const tx = await this.getClaimTransaction(destinationAddress, quantity, options);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
}

/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim(quantity);
 * ```
 */

class Erc721LazyMintable {
  featureName = FEATURE_NFT_LAZY_MINTABLE.name;

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
   * await contract.nft.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   */

  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.revealer = this.detectErc721Revealable();
  }

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
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    // ensure baseUri is the same for the entire batch
    const baseUri = getBaseUriFromBatch(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, toUtf8Bytes("")],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args.startTokenId;
        const endingIndex = event[0].args.endTokenId;
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  detectErc721Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    }
    return undefined;
  }
}

class Erc721LoyaltyCard {
  featureName = FEATURE_NFT_LOYALTY_CARD.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Cancel loyalty card NFTs
   *
   * @remarks Cancel loyalty card NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to cancel
   * const tokenId = 0;
   *
   * await contract.nft.loyaltyCard.cancel(tokenId);
   * ```
   */
  cancel = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancel",
      args: [tokenId]
    });
  });

  /**
   * Revoke loyalty card NFTs
   *
   * @remarks Revoke loyalty card NFTs held by some owner.
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to revoke
   * const tokenId = 0;
   *
   * await contract.nft.loyaltyCard.revoke(tokenId);
   * ```
   */
  revoke = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "revoke",
      args: [tokenId]
    });
  });
}

class Erc721UpdatableMetadata {
  featureName = FEATURE_NFT_UPDATABLE_METADATA.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Update the metadata of an NFT
   *
   * @remarks Update the metadata of an NFT
   *
   * @example
   * ```javascript
   * // The token ID of the NFT whose metadata you want to update
   * const tokenId = 0;
   * // The new metadata
   * const metadata = { name: "My NFT", description: "My NFT description" }
   *
   * await contract.nft.metadata.update(tokenId, metadata);
   * ```
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, metadata) => {
    const uri = await uploadOrExtractURI(metadata, this.storage);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setTokenURI",
      args: [tokenId, uri]
    });
  });
}

/**
 * Mint Many ERC721 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */

class Erc721BatchMintable {
  featureName = FEATURE_NFT_BATCH_MINTABLE.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```typescript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mint.batch.to(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadatas) => {
    const [uris, resolvedAddress] = await Promise.all([uploadOrExtractURIs(metadatas, this.storage), resolveAddress(to)]);
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = uris.map(uri => contractEncoder.encode("mintTo", [resolvedAddress, uri]));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("TokensMinted", receipt.logs);
        if (events.length === 0 || events.length < metadatas.length) {
          throw new Error("TokenMinted event not found, minting failed");
        }
        return events.map(e => {
          const id = e.args.tokenIdMinted;
          return {
            id,
            receipt,
            data: () => this.erc721.get(id)
          };
        });
      }
    });
  });
}

/**
 * Mint ERC721 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc721Mintable {
  featureName = FEATURE_NFT_MINTABLE.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc721BatchMintable();
  }

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.nft.mint.to(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadata) => {
    const [uri, toAddress] = await Promise.all([uploadOrExtractURI(metadata, this.storage), resolveAddress(to)]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [toAddress, uri],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("Transfer", receipt?.logs);
        if (event.length === 0) {
          throw new Error("TransferEvent event not found");
        }
        const id = event[0].args.tokenId;
        return {
          id,
          receipt,
          data: () => this.erc721.get(id)
        };
      }
    });
  });

  /**
   * @deprecated Use `contract.erc721.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, metadata) {
    return this.to.prepare(await resolveAddress(to), metadata);
  }
  detectErc721BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721BatchMintable")) {
      return new Erc721BatchMintable(this.erc721, this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

/**
 * Set shared metadata for ERC721 NFTs (Open Edition)
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.sharedMetadata.set(metadata);
 * ```
 */
class Erc721SharedMetadata {
  featureName = FEATURE_NFT_SHARED_METADATA.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Get Shared Metadata
   *
   * @remarks Get the shared metadata for the Open Edition NFTs.
   *
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}");
   *
   * const tx = await contract.erc721.sharedMetadata.get();
   * ```
   *
   * @returns  The shared metadata for the Open Edition NFTs.
   */
  async get() {
    const metadata = await this.contractWrapper.read("sharedMetadata", []);
    if (metadata.every(value => value === "")) {
      return undefined;
    }
    return {
      name: metadata.name,
      description: metadata.description,
      image: metadata.imageURI,
      animation_url: metadata.animationURI
    };
  }

  /**
   * Set Shared Metadata
   *
   * @remarks Set the shared metadata for the Open Edition NFTs.
   *
   * @example
   * ```javascript
   * const metadata = {
   *  name: "My NFT",
   *  description: "This is my NFT",
   *  image: ...
   *  animation_url: ...
   * };
   *
   * const contract = await sdk.getContract("{{contract_address}}");
   *
   * const tx = await contract.erc721.sharedMetadata.set(metadata);
   * ```
   *
   * @param metadata - The metadata you want to set for the shared metadata.
   *
   * @returns  Receipt for the transaction
   */
  set = /* @__PURE__ */buildTransactionFunction(async metadata => {
    const parsedMetadata = BasicNFTInput.parse(metadata);
    // cleanup description
    parsedMetadata.description = this.sanitizeJSONString(parsedMetadata.description);

    // take the input and upload image and animation if it is not a URI already
    const batch = [];
    if (isFileOrBuffer(parsedMetadata.image)) {
      batch.push(this.storage.upload(parsedMetadata.image));
    } else if (typeof parsedMetadata.image === "string") {
      batch.push(Promise.resolve(parsedMetadata.image));
    } else {
      batch.push(Promise.resolve(undefined));
    }
    if (isFileOrBuffer(parsedMetadata.animation_url)) {
      batch.push(this.storage.upload(parsedMetadata.animation_url));
    } else if (typeof parsedMetadata.animation_url === "string") {
      batch.push(Promise.resolve(parsedMetadata.animation_url));
    } else {
      batch.push(Promise.resolve(undefined));
    }
    const [imageUri, animationUri] = await Promise.all(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setSharedMetadata",
      args: [{
        name: `${parsedMetadata.name || ""}`,
        description: parsedMetadata.description || "",
        imageURI: imageUri || "",
        animationURI: animationUri || ""
      }]
    });
  });
  sanitizeJSONString(val) {
    if (!val) {
      return val;
    }
    const sanitized = JSON.stringify(val);
    return sanitized.slice(1, sanitized.length - 1);
  }
}

/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */

class Erc721Enumerable {
  featureName = FEATURE_NFT_ENUMERABLE.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.nft.query.owned.all(address);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async all(walletAddress, queryParams) {
    let tokenIds = await this.tokenIds(walletAddress);
    if (queryParams) {
      const start = queryParams?.start || 0;
      const count = queryParams?.count || DEFAULT_QUERY_ALL_COUNT;
      tokenIds = tokenIds.slice(start, start + count);
    }
    return await Promise.all(tokenIds.map(tokenId => this.erc721.get(tokenId.toString())));
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async tokenIds(walletAddress) {
    const address = await resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress()));
    const balance = await this.contractWrapper.read("balanceOf", [address]);
    const indices = Array.from(Array(balance.toNumber()).keys());
    return await Promise.all(indices.map(i => this.contractWrapper.read("tokenOfOwnerByIndex", [address, i])));
  }
}

/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */

class Erc721AQueryable {
  featureName = FEATURE_NFT_QUERYABLE.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.nft.query.owned.all(address);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async all(walletAddress, queryParams) {
    let tokenIds = await this.tokenIds(walletAddress);
    if (queryParams) {
      const start = queryParams?.start || 0;
      const count = queryParams?.count || DEFAULT_QUERY_ALL_COUNT;
      tokenIds = tokenIds.slice(start, start + count);
    }
    return await Promise.all(tokenIds.map(tokenId => this.erc721.get(tokenId.toString())));
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async tokenIds(walletAddress) {
    const address = await resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress()));
    return await this.contractWrapper.read("tokensOfOwner", [address]);
  }
}

/**
 * List ERC721 NFTs
 * @remarks Easily list all the NFTs in a ERC721 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.nft.query.all();
 * ```
 * @public
 */

class Erc721Supply {
  featureName = FEATURE_NFT_SUPPLY.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.owned = this.detectErc721Owned();
  }

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.nft.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async all(queryParams) {
    let startTokenId = BigNumber.from(0);
    if (hasFunction("startTokenId", this.contractWrapper)) {
      startTokenId = await this.contractWrapper.read("startTokenId", []);
    }
    const start = BigNumber.from(queryParams?.start || 0).add(startTokenId).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxSupply = await this.erc721.nextTokenIdToMint();
    const maxId = Math.min(maxSupply.add(startTokenId).toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc721.get((start + i).toString())));
  }

  /**
   * Return all the owners of each token id in this contract
   * @returns
   */
  async allOwners(queryParams) {
    let totalCount;
    let startTokenId = BigNumber.from(0);
    if (hasFunction("startTokenId", this.contractWrapper)) {
      startTokenId = await this.contractWrapper.read("startTokenId", []);
    }
    try {
      totalCount = await this.erc721.totalClaimedSupply();
    } catch (e) {
      totalCount = await this.totalCount();
    }
    totalCount = totalCount.add(startTokenId);

    // TODO use multicall3 if available
    // TODO can't call toNumber() here, this can be a very large number
    let arr = [...new Array(totalCount.toNumber()).keys()];
    if (queryParams) {
      const start = queryParams?.start || 0;
      const count = queryParams?.count || DEFAULT_QUERY_ALL_COUNT;
      arr = arr.slice(start, start + count);
    }
    const owners = await Promise.all(arr.map(i => this.erc721.ownerOf(i).catch(() => AddressZero)));
    return arr.map(i => ({
      tokenId: i,
      owner: owners[i]
    })).filter(o => o.owner !== AddressZero);
  }

  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns The total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return await this.erc721.nextTokenIdToMint();
  }

  /**
   * Get the number of NFTs of this contract currently owned by end users
   * @returns The total number of NFTs of this contract in circulation (minted & not burned)
   * @public
   */
  async totalCirculatingSupply() {
    return await this.contractWrapper.read("totalSupply", []);
  }
  detectErc721Owned() {
    if (detectContractFeature(this.contractWrapper, "ERC721Enumerable")) {
      return new Erc721Enumerable(this.erc721, this.contractWrapper);
    } else if (detectContractFeature(this.contractWrapper, "ERC721AQueryable")) {
      return new Erc721AQueryable(this.erc721, this.contractWrapper);
    }
    return undefined;
  }
}

/**
 * @internal
 */
const TieredDropPayloadSchema = /* @__PURE__ */(() => BaseSignaturePayloadInput.extend({
  tierPriority: z.array(z.string()),
  royaltyRecipient: AddressOrEnsSchema.default(AddressZero),
  royaltyBps: BasisPointsSchema.default(0),
  quantity: BigNumberSchema.default(1)
}))();

/**
 * @public
 */

/**
 * @internal
 */

/**
 * @internal
 */

const GenericRequest = [{
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}, {
  name: "data",
  type: "bytes"
}];

class Erc721TieredDrop {
  featureName = FEATURE_NFT_TIERED_DROP.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  async getMetadataInTier(tier) {
    const tiers = await this.contractWrapper.read("getMetadataForAllTiers", []);
    const batches = tiers.find(t => t.tier === tier);
    if (!batches) {
      throw new Error("Tier not found in contract.");
    }
    const nfts = await Promise.all(batches.ranges.map((range, i) => {
      const nftsInRange = [];
      const baseUri = batches.baseURIs[i];
      for (let j = range.startIdInclusive.toNumber(); j < range.endIdNonInclusive.toNumber(); j++) {
        const uri = baseUri.endsWith("/") ? `${baseUri}${j}` : `${baseUri}/${j}`;
        const metadata = this.storage.downloadJSON(uri);
        nftsInRange.push(metadata);
      }
      return nftsInRange;
    }).flat());
    return nfts;
  }
  async getTokensInTier(tier) {
    const endIndex = await this.contractWrapper.read("getTokensInTierLen", []);
    if (endIndex.eq(0)) {
      return [];
    }
    const ranges = await this.contractWrapper.read("getTokensInTier", [tier, 0, endIndex]);
    const nfts = await Promise.all(ranges.map(range => {
      const nftsInRange = [];
      for (let i = range.startIdInclusive.toNumber(); i < range.endIdNonInclusive.toNumber(); i++) {
        nftsInRange.push(this.erc721.get(i));
      }
      return nftsInRange;
    }).flat());
    return nfts;
  }
  createBatchWithTier = /* @__PURE__ */buildTransactionFunction(async (metadatas, tier, options) => {
    // TODO: Change this to on extension
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    const baseUri = getBaseUriFromBatch(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, tier, toUtf8Bytes("")],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args[1];
        const endingIndex = event[0].args[2];
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });
  createDelayedRevealBatchWithTier = /* @__PURE__ */buildTransactionFunction(async (placeholder, metadatas, password, tier, options) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const placeholderUris = await this.storage.uploadBatch([CommonNFTInput.parse(placeholder)], {
      rewriteFileNames: {
        fileStartNumber: 0
      }
    });
    const placeholderUri = getBaseUriFromBatch(placeholderUris);
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const uris = await this.storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      onProgress: options?.onProgress,
      rewriteFileNames: {
        fileStartNumber: startFileNumber.toNumber()
      }
    });
    const baseUri = getBaseUriFromBatch(uris);
    const baseUriId = await this.contractWrapper.read("getBaseURICount", []);
    const chainId = await this.contractWrapper.getChainID();
    const hashedPassword = keccak256(["string", "uint256", "uint256", "address"], [password, chainId, baseUriId, this.contractWrapper.address]);
    const encryptedBaseUri = await this.contractWrapper.read("encryptDecrypt", [toUtf8Bytes(baseUri), hashedPassword]);
    const provenanceHash = keccak256(["bytes", "bytes", "uint256"], [toUtf8Bytes(baseUri), hashedPassword, chainId]);
    const data = defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, tier, data],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args[1];
        const endingIndex = event[0].args[2];
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });
  reveal = /* @__PURE__ */buildTransactionFunction(async (batchId, password) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const chainId = await this.contractWrapper.getChainID();
    const key = keccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchId, this.contractWrapper.address]);
    // performing the reveal locally to make sure it'd succeed before sending the transaction
    try {
      const decryptedUri = await this.contractWrapper.callStatic().reveal(batchId, key);
      // basic sanity check for making sure decryptedUri is valid
      // this is optional because invalid decryption key would result in non-utf8 bytes and
      // ethers would throw when trying to decode it
      if (!decryptedUri.includes("://") || !decryptedUri.endsWith("/")) {
        throw new Error("invalid password");
      }
    } catch (e) {
      throw new Error("invalid password");
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "reveal",
      args: [batchId, key]
    });
  });
  async generate(payloadToSign) {
    const [payload] = await this.generateBatch([payloadToSign]);
    return payload;
  }
  async generateBatch(payloadsToSign) {
    const parsedPayloads = await Promise.all(payloadsToSign.map(payload => TieredDropPayloadSchema.parseAsync(payload)));
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    return await Promise.all(parsedPayloads.map(async payload => {
      const signature = await this.contractWrapper.signTypedData(signer, {
        name: "SignatureAction",
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.address
      }, {
        GenericRequest: GenericRequest
      }, await this.mapPayloadToContractStruct(payload));
      return {
        payload,
        signature: signature.toString()
      };
    }));
  }
  async verify(signedPayload) {
    const message = await this.mapPayloadToContractStruct(signedPayload.payload);
    const verification = await this.contractWrapper.read("verify", [message, signedPayload.signature]);
    return verification[0];
  }
  async claimWithSignature(signedPayload) {
    const message = await this.mapPayloadToContractStruct(signedPayload.payload);
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), signedPayload.payload.price, signedPayload.payload.currencyAddress);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, normalizedTotalPrice, signedPayload.payload.currencyAddress, overrides);
    const receipt = await this.contractWrapper.sendTransaction("claimWithSignature", [message, signedPayload.signature], overrides);
    const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = startingIndex.add(event[0].args.quantityClaimed);
    const results = [];
    for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.get(id)
      });
    }
    return results;
  }
  async mapPayloadToContractStruct(payload) {
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), payload.price, payload.currencyAddress);
    const data = defaultAbiCoder.encode(["string[]", "address", "address", "uint256", "address", "uint256", "uint256", "address"], [payload.tierPriority, payload.to, payload.royaltyRecipient, payload.royaltyBps, payload.primarySaleRecipient, payload.quantity, normalizedTotalPrice, payload.currencyAddress]);
    return {
      uid: payload.uid,
      validityStartTimestamp: payload.mintStartTime,
      validityEndTimestamp: payload.mintEndTime,
      data
    };
  }
}

/**
 * Enables generating dynamic ERC721 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @erc721
 * @public
 */
class Erc721WithQuantitySignatureMintable {
  featureName = FEATURE_NFT_SIGNATURE_MINTABLE_V2.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc721.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc721WithQuantitySignatureMintable.generate}
   * @twfeature ERC721SignatureMint
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const overrides = await this.contractWrapper.getCallOverrides();
    const parse = receipt => {
      const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
      if (t.length === 0) {
        throw new Error("No MintWithSignature event found");
      }
      const id = t[0].args.tokenIdMinted;
      return {
        id,
        receipt
      };
    };
    if (await this.isLegacyNFTContract()) {
      const message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      const price = message.price;

      // TODO: Transaction Sequence Pattern
      await setErc20Allowance(this.contractWrapper, price, mintRequest.currencyAddress, overrides);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "mintWithSignature",
        args: [message, signature],
        overrides,
        parse
      });
    } else {
      const message = await this.mapPayloadToContractStruct(mintRequest);
      const price = message.pricePerToken.mul(message.quantity);

      // TODO: Transaction Sequence Pattern
      await setErc20Allowance(this.contractWrapper, price, mintRequest.currencyAddress, overrides);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "mintWithSignature",
        args: [message, signature],
        overrides,
        parse
      });
    }
  });

  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC721SignatureMint
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const contractPayloads = (await Promise.all(signedPayloads.map(s => isLegacyNFTContract ? this.mapLegacyPayloadToContractStruct(s.payload) : this.mapPayloadToContractStruct(s.payload)))).map((message, index) => {
      const s = signedPayloads[index];
      const signature = s.signature;
      const price = s.payload.price;
      if (BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }
      return {
        message,
        signature
      };
    });
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = contractPayloads.map(p => {
      if (isLegacyNFTContract) {
        return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
      } else {
        return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
      }
    });
    if (hasFunction("multicall", this.contractWrapper)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded],
        parse: receipt => {
          const events = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
          if (events.length === 0) {
            throw new Error("No MintWithSignature event found");
          }
          return events.map(log => ({
            id: log.args.tokenIdMinted,
            receipt
          }));
        }
      });
    } else {
      throw new Error("Multicall not available on this contract!");
    }
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC721SignatureMint
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc721.signature.generate(payload);
   * // Now you can verify if the signed payload is valid
   * const isValid = await contract.erc721.signature.verify(signedPayload);
   * ```
   */
  async verify(signedPayload) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    let message;
    let verification;
    if (isLegacyNFTContract) {
      message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      verification = await this.contractWrapper.read("verify", [message, signature]);
    } else {
      message = await this.mapPayloadToContractStruct(mintRequest);
      verification = await this.contractWrapper.read("verify", [message, signature]);
    }
    return verification[0];
  }

  /**
   * Generate a signature that can be used to mint a dynamic NFT
   *
   * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc721.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc721.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns The signed payload and the corresponding signature
   * @twfeature ERC721SignatureMint
   */
  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }

  /**
   * Genrate a batch of signatures that can be used to mint many dynamic NFTs.
   *
   * @remarks See {@link Erc721WithQuantitySignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns An array of payloads and signatures
   * @twfeature ERC721SignatureMint
   */
  async generateBatch(payloadsToSign) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const parsedRequests = await Promise.all(payloadsToSign.map(m => Signature721WithQuantityInput.parseAsync(m)));
    const metadatas = parsedRequests.map(r => r.metadata);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    return await Promise.all(parsedRequests.map(async (m, i) => {
      const uri = uris[i];
      const finalPayload = await Signature721WithQuantityOutput.parseAsync({
        ...m,
        uri
      });
      let signature;
      if (isLegacyNFTContract) {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "TokenERC721",
          version: "1",
          chainId,
          verifyingContract: this.contractWrapper.address
        }, {
          MintRequest: MintRequest721
        }, await this.mapLegacyPayloadToContractStruct(finalPayload));
      } else {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "SignatureMintERC721",
          version: "1",
          chainId,
          verifyingContract: await this.contractWrapper.address
        }, {
          MintRequest: MintRequest721withQuantity
        },
        // TYPEHASH
        await this.mapPayloadToContractStruct(finalPayload));
      }
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns  The mapped payload.
   */
  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid
    };
  }
  async mapLegacyPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      price: normalizedPricePerToken,
      uri: mintRequest.uri,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }
  async isLegacyNFTContract() {
    return detectContractFeature(this.contractWrapper, "ERC721SignatureMintV1");
  }
}

/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.transfer(walletAddress, tokenId);
 * ```
 * @erc721
 * @public
 */
class Erc721 {
  featureName = FEATURE_NFT.name;
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc721Enumerable();
    this.mintable = this.detectErc721Mintable();
    this.burnable = this.detectErc721Burnable();
    this.lazyMintable = this.detectErc721LazyMintable();
    this.tieredDropable = this.detectErc721TieredDrop();
    this.signatureMintable = this.detectErc721SignatureMintable();
    this.claimWithConditions = this.detectErc721ClaimableWithConditions();
    this.claimCustom = this.detectErc721Claimable();
    this.claimZora = this.detectErc721ClaimableZora();
    this.erc721SharedMetadata = this.detectErc721SharedMetadata();
    this.loyaltyCard = this.detectErc721LoyaltyCard();
    this.updatableMetadata = this.detectErc721UpdatableMetadata();
    this._chainId = chainId;
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

  ////// Standard ERC721 Extension //////

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc721.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC721
   */
  async get(tokenId) {
    const [owner, metadata] = await Promise.all([this.ownerOf(tokenId).catch(() => AddressZero), this.getTokenMetadata(tokenId).catch(() => ({
      id: tokenId.toString(),
      uri: "",
      ...FALLBACK_METADATA
    }))]);
    return {
      owner,
      metadata,
      type: "ERC721",
      supply: "1"
    };
  }

  /**
   * Get the current owner of an NFT
   *
   * @param tokenId - the tokenId of the NFT
   * @returns The address of the owner
   * @twfeature ERC721
   */
  async ownerOf(tokenId) {
    return await this.contractWrapper.read("ownerOf", [tokenId]);
  }

  /**
   * Get NFT balance of a specific wallet
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc721.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   * @twfeature ERC721
   */
  async balanceOf(address) {
    return await this.contractWrapper.read("balanceOf", [await resolveAddress(address)]);
  }

  /**
   * Get NFT balance for the currently connected wallet
   */
  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    const [_address, _operator] = await Promise.all([resolveAddress(address), resolveAddress(operator)]);
    return await this.contractWrapper.read("isApprovedForAll", [_address, _operator]);
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
   * await contract.erc721.transfer(walletAddress, tokenId);
   * ```
   * @twfeature ERC721
   */
  transfer = /* @__PURE__ */buildTransactionFunction(async (to, tokenId) => {
    const [from, _to] = await Promise.all([this.contractWrapper.getSignerAddress(), resolveAddress(to)]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom(address,address,uint256)",
      args: [from, _to, tokenId]
    });
  });

  /**
   * Transfer an NFT from a specific wallet
   *
   * @remarks Transfer an NFT from the given wallet to another wallet.
   *
   * @example
   * ```javascript
   * const fromWalletAddress = "{{wallet_address}}";
   * const toWalletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.transferFrom(fromWalletAddress, toWalletAddress, tokenId);
   * ```
   * @twfeature ERC721
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction(async (from, to, tokenId) => {
    const [fromAddress, toAddress] = await Promise.all([resolveAddress(from), resolveAddress(to)]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom(address,address,uint256)",
      args: [fromAddress, toAddress, tokenId]
    });
  });

  /**
   * Set approval for all NFTs
   * @remarks Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * await contract.erc721.setApprovalForAll(operator, true);
   * ```
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   * @twfeature ERC721
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setApprovalForAll",
      args: [await resolveAddress(operator), approved]
    });
  });

  /**
   * Set approval for a single NFT
   * @remarks Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.setApprovalForToken(operator, tokenId);
   * ```
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */
  setApprovalForToken = /* @__PURE__ */buildTransactionFunction(async (operator, tokenId) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approve",
      args: [await resolveAddress(operator), tokenId]
    });
  });

  ////// ERC721 Supply Extension //////

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc721.getAll();
   * console.log(nfts);
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).all(queryParams);
  }

  /**
   * Get all NFT owners
   * @example
   * ```javascript
   * const owners = await contract.erc721.getAllOwners();
   * console.log(owners);
   * ```
   * @returns An array of token ids and owners
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getAllOwners(queryParams) {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).allOwners(queryParams);
  }

  /**
   * Get the total number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   * @example
   * ```javascript
   * const count = await contract.erc721.totalCount();
   * console.log(count);
   * ```
   *
   * @returns The total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return this.nextTokenIdToMint();
  }

  /**
   * Get the total count NFTs minted in this contract
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async totalCirculatingSupply() {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).totalCirculatingSupply();
  }

  ////// ERC721 Enumerable Extension //////

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.erc721.getOwned(address);
   * console.log(nfts);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getOwned(walletAddress, queryParams) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    if (this.query?.owned) {
      return this.query.owned.all(walletAddress, queryParams);
    } else {
      const [address, allOwners] = await Promise.all([walletAddress || this.contractWrapper.getSignerAddress(), this.getAllOwners(queryParams)]);
      const ownedTokens = (allOwners || []).filter(i => address?.toLowerCase() === i.owner?.toLowerCase());
      return await Promise.all(ownedTokens.map(async i => this.get(i.tokenId)));
    }
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async getOwnedTokenIds(walletAddress) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    if (this.query?.owned) {
      return this.query.owned.tokenIds(walletAddress);
    } else {
      const [address, allOwners] = await Promise.all([walletAddress || this.contractWrapper.getSignerAddress(), this.getAllOwners()]);
      return (allOwners || []).filter(i => address?.toLowerCase() === i.owner?.toLowerCase()).map(i => BigNumber.from(i.tokenId));
    }
  }

  ////// ERC721 Mintable Extension //////

  /**
   * Mint an NFT
   *
   * @remarks Mint an NFT to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mint(metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), metadata);
  });

  /**
   * Mint an NFT to a specific wallet
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mintTo(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadata) => {
    return assertEnabled(this.mintable, FEATURE_NFT_MINTABLE).to.prepare(receiver, metadata);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.erc721.mint.prepare(...args)` instead
   * @twfeature ERC721Mintable
   */
  async getMintTransaction(receiver, metadata) {
    return this.mintTo.prepare(receiver, metadata);
  }

  ////// ERC721 Batch Mintable Extension //////

  /**
   * Mint many NFTs
   *
   * @remarks Mint many unique NFTs at once to the connected wallet
   *
   * @example
   * ```typescript
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatch(metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async metadatas => {
    return this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(), metadatas);
  });

  /**
   * Mint many NFTs to a specific wallet
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```typescript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadatas) => {
    return assertEnabled(this.mintable?.batch, FEATURE_NFT_BATCH_MINTABLE).to.prepare(receiver, metadatas);
  });

  ////// ERC721 Burnable Extension //////

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.erc721.burn(tokenId);
   * ```
   * @twfeature ERC721Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.burnable, FEATURE_NFT_BURNABLE).token.prepare(tokenId);
  });

  ////// ERC721 Loyalty Card Extension //////

  /**
   * Cancel loyalty card NFTs
   *
   * @remarks Cancel loyalty card NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to cancel
   * const tokenId = 0;
   *
   * const result = await contract.erc721.cancel(tokenId);
   * ```
   * @twfeature ERC721LoyaltyCard
   */
  cancel = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.loyaltyCard, FEATURE_NFT_LOYALTY_CARD).cancel.prepare(tokenId);
  });

  /**
   * Revoke loyalty card NFTs
   *
   * @remarks Revoke loyalty card NFTs held by some owner.
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to revoke
   * const tokenId = 0;
   *
   * const result = await contract.erc721.revoke(tokenId);
   * ```
   * @twfeature ERC721LoyaltyCard
   */
  revoke = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.loyaltyCard, FEATURE_NFT_LOYALTY_CARD).revoke.prepare(tokenId);
  });

  ////// ERC721 LazyMint Extension //////

  /**
   * Lazy mint NFTs
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
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC721LazyMintable
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    return assertEnabled(this.lazyMintable, FEATURE_NFT_LAZY_MINTABLE).lazyMint.prepare(metadatas, options);
  });

  ////// ERC721 Metadata Extension //////

  /**
   * Update the metadata of an NFT
   *
   * @remarks Update the metadata of an NFT
   *
   * @example
   * ```javascript
   * // The token ID of the NFT whose metadata you want to update
   * const tokenId = 0;
   * // The new metadata
   * const metadata = { name: "My NFT", description: "My NFT description" }
   *
   * await contract.erc721.update(tokenId, metadata);
   * ```
   * @twfeature ERC721UpdatableMetadata
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, metadata) => {
    return assertEnabled(this.updatableMetadata, FEATURE_NFT_UPDATABLE_METADATA).update.prepare(tokenId, metadata);
  });

  ////// ERC721 Claimable Extension //////

  /**
   * Claim NFTs
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claim(quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (quantity, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), quantity, options);
  });

  /**
   * Claim NFTs to a specific wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - optional claim options
   * @returns  an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    const claimZora = this.claimZora;
    if (claimWithConditions) {
      return claimWithConditions.to.prepare(destinationAddress, quantity, options);
    }
    if (claim) {
      return claim.to.prepare(destinationAddress, quantity, options);
    }
    if (claimZora) {
      return claimZora.to.prepare(destinationAddress, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIM_CUSTOM);
  });

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - optional claim options
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.conditions.getClaimTransaction(destinationAddress, quantity, options);
    }
    if (claim) {
      return claim.getClaimTransaction(destinationAddress, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIM_CUSTOM);
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed: ${claimedNFTCount}`);
   * ```
   * @returns The unclaimed supply
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async totalClaimedSupply() {
    const contract = this.contractWrapper;
    if (hasFunction("totalMinted", contract)) {
      return this.contractWrapper.read("totalMinted", []);
    }
    if (hasFunction("nextTokenIdToClaim", contract)) {
      return this.contractWrapper.read("nextTokenIdToClaim", []);
    }
    throw new Error("No function found on contract to get total claimed supply");
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
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async totalUnclaimedSupply() {
    const [nextTokenIdToMint, totalClaimedSupply] = await Promise.all([this.nextTokenIdToMint(), this.totalClaimedSupply()]);
    return nextTokenIdToMint.sub(totalClaimedSupply);
  }

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
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.claimWithConditions, FEATURE_NFT_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC721 Tiered Drop Extension //////

  /**
   * Tiered Drop
   * @remarks Drop lazy minted NFTs using a tiered drop mechanism.
   * @twfeature ERC721TieredDrop
   */
  get tieredDrop() {
    return assertEnabled(this.tieredDropable, FEATURE_NFT_TIERED_DROP);
  }

  ////// ERC721 SignatureMint Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
   * const signedPayload = await contract.erc721.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = await contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC721SignatureMintV1 | ERC721SignatureMintV2
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_NFT_SIGNATURE_MINTABLE_V2);
  }

  ////// ERC721 DelayedReveal Extension //////

  /**
   * Mint delayed reveal NFTs
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
   * await contract.erc721.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC721Revealable
   */
  get revealer() {
    return assertEnabled(this.lazyMintable?.revealer, FEATURE_NFT_REVEALABLE);
  }

  ////// ERC721 Shared Metadata Extension (Open Edition) //////

  /**
   * Set shared metadata for all NFTs
   * @remarks Set shared metadata for all NFTs in the collection. (Open Edition)
   * @example
   * ```javascript
   * // defiine the metadata
   * const metadata = {
   *  name: "Shared Metadata",
   *  description: "Every NFT in this collection will share this metadata."
   * };
   *
   *
   * const tx = contract.erc721.sharedMetadata.set(metadata);
   * ```
   * @twfeature ERC721SharedMetadata
   */
  get sharedMetadata() {
    return assertEnabled(this.erc721SharedMetadata, FEATURE_NFT_SHARED_METADATA);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   */
  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.read("tokenURI", [tokenId]);
    if (!tokenUri) {
      throw new NotFoundError();
    }
    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }

  /**
   * Return the next available token ID to mint
   * @internal
   */
  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      let nextTokenIdToMint = await this.contractWrapper.read("nextTokenIdToMint", []);
      // handle open editions and contracts with startTokenId
      if (hasFunction("startTokenId", this.contractWrapper)) {
        nextTokenIdToMint = nextTokenIdToMint.sub(await this.contractWrapper.read("startTokenId", []));
      }
      return nextTokenIdToMint;
    } else if (hasFunction("totalSupply", this.contractWrapper)) {
      return await this.contractWrapper.read("totalSupply", []);
    } else {
      throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint");
    }
  }
  detectErc721Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Supply") || hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return new Erc721Supply(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Mintable")) {
      return new Erc721Mintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Burnable")) {
      return new Erc721Burnable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc721LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721LazyMintable")) {
      return new Erc721LazyMintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721TieredDrop() {
    if (detectContractFeature(this.contractWrapper, "ERC721TieredDrop")) {
      return new Erc721TieredDrop(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721SignatureMintV1") || detectContractFeature(this.contractWrapper, "ERC721SignatureMintV2")) {
      return new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC721ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC721ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC721ClaimPhasesV2")) {
      return new Erc721ClaimableWithConditions(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimCustom")) {
      return new Erc721Claimable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721ClaimableZora() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimZora")) {
      return new Erc721ClaimableZora(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721SharedMetadata() {
    if (detectContractFeature(this.contractWrapper, "ERC721SharedMetadata")) {
      return new Erc721SharedMetadata(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721LoyaltyCard() {
    if (detectContractFeature(this.contractWrapper, "ERC721LoyaltyCard")) {
      return new Erc721LoyaltyCard(this.contractWrapper);
    }
    return undefined;
  }
  detectErc721UpdatableMetadata() {
    if (detectContractFeature(this.contractWrapper, "ERC721UpdatableMetadata")) {
      return new Erc721UpdatableMetadata(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

export { Erc721 as E, Erc721WithQuantitySignatureMintable as a };
//# sourceMappingURL=erc-721-ec9e393b.esm-3814a273.js.map
