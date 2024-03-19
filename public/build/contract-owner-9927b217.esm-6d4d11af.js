import { h as hasFunction } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { M as FEATURE_ROYALTY, O as CommonRoyaltySchema, y as buildTransactionFunction, t as ContractEncoder, T as Transaction, P as FEATURE_OWNER, Q as resolveAddress, V as toUtf8Bytes, X as keccak256, Y as defaultAbiCoder, Z as hexDataLength, B as BigNumber, $ as Contract, a0 as normalizePriceValue, a1 as NATIVE_TOKEN_ADDRESS } from './App-40ca2dcc.js';
import { C as CommonNFTInput } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import { g as getBaseUriFromBatch, f as fetchTokenMetadataForContract } from './QueryParams-fc338c68.esm-688d9d17.js';
import { a as approveErc20Allowance } from './index-6571f75f.js';

/**
 * Handle contract royalties
 * @remarks Configure royalties for an entire contract or a particular token.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
 * await contract.roles.setTokenRoyaltyInfo(tokenId, {
 *   seller_fee_basis_points: 100, // 1% royalty fee
 *   fee_recipient: "0x...", // the fee recipient
 * });
 * ```
 * @public
 */
class ContractRoyalty {
  featureName = FEATURE_ROYALTY.name;
  constructor(contractWrapper, metadata) {
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }

  /**
   * Get the royalty recipient and fee
   * @returns  The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getDefaultRoyaltyInfo() {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getDefaultRoyaltyInfo", []);
    // parse it on the way out to make sure we default things if they are not set
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }

  /**
   * Get the royalty recipient and fee of a particular token
   * @returns  The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getTokenRoyaltyInfo(tokenId) {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getRoyaltyInfoForToken", [tokenId]);
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }

  /**
   * Set the royalty recipient and fee
   * @param royaltyData - the royalty recipient and fee
   *  @example
   * ```javascript
   * await contract.roles.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */
  setDefaultRoyaltyInfo = /* @__PURE__ */buildTransactionFunction(async royaltyData => {
    // read the metadata from the contract
    const oldMetadata = await this.metadata.get();

    // update the metadata with the new royalty data
    // if one of the keys is "undefined" it will be ignored (which is the desired behavior)
    const mergedMetadata = await this.metadata.parseInputMetadata({
      ...oldMetadata,
      ...royaltyData
    });

    // why not use this.metadata.set()? - because that would end up sending it's own separate transaction to `setContractURI`
    // but we want to send both the `setRoyaltyInfo` and `setContractURI` in one transaction!
    const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);
    if (hasFunction("setContractURI", this.contractWrapper)) {
      const contractEncoder = new ContractEncoder(this.contractWrapper);
      // encode both the functions we want to send
      const encoded = [contractEncoder.encode("setDefaultRoyaltyInfo", [mergedMetadata.fee_recipient, mergedMetadata.seller_fee_basis_points]), contractEncoder.encode("setContractURI", [contractURI])];
      // actually send the transaction and return the receipt + a way to get the new royalty info

      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded],
        parse: receipt => ({
          receipt,
          data: () => this.getDefaultRoyaltyInfo()
        })
      });
    } else {
      throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.");
    }
  });

  /**
   * Set the royalty recipient and fee for a particular token
   * @param tokenId - the token id
   * @param royaltyData - the royalty recipient and fee
   * @example
   * ```javascript
   * const tokenId = 0;
   * await contract.roles.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */
  setTokenRoyaltyInfo = /* @__PURE__ */buildTransactionFunction(async (tokenId, royaltyData) => {
    const parsedRoyaltyData = CommonRoyaltySchema.parse(royaltyData);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setRoyaltyInfoForToken",
      args: [tokenId, parsedRoyaltyData.fee_recipient, parsedRoyaltyData.seller_fee_basis_points],
      parse: receipt => ({
        receipt,
        data: () => this.getDefaultRoyaltyInfo()
      })
    });
  });
}

/**
 * Handles delayed reveal logic
 * @public
 */
class DelayedReveal {
  constructor(contractWrapper, storage, featureName, nextTokenIdToMintFn) {
    this.featureName = featureName;
    this.nextTokenIdToMintFn = nextTokenIdToMintFn;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Create a batch of encrypted NFTs that can be revealed at a later time.
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until your reveal them!
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
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
   * ```
   * @public
   * @param placeholder - the placeholder NFT to show before the reveal
   * @param metadatas - the final NFTs that will be hidden
   * @param password - the password that will be used to reveal these NFTs
   * @param options - additional options like upload progress
   */
  createDelayedRevealBatch = /* @__PURE__ */buildTransactionFunction(async (placeholder, metadatas, password, options) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const placeholderUris = await this.storage.uploadBatch([CommonNFTInput.parse(placeholder)], {
      rewriteFileNames: {
        fileStartNumber: 0
      }
    });
    const placeholderUri = getBaseUriFromBatch(placeholderUris);
    const startFileNumber = await this.nextTokenIdToMintFn();
    const uris = await this.storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      onProgress: options?.onProgress,
      rewriteFileNames: {
        fileStartNumber: startFileNumber.toNumber()
      }
    });
    const baseUri = getBaseUriFromBatch(uris);
    const baseUriId = await this.contractWrapper.read("getBaseURICount", []);
    const hashedPassword = await this.hashDelayRevealPassword(baseUriId, password);
    const encryptedBaseUri = await this.contractWrapper.read("encryptDecrypt", [toUtf8Bytes(baseUri), hashedPassword]);
    let data;
    const legacyContract = await this.isLegacyContract();
    if (legacyContract) {
      data = encryptedBaseUri;
    } else {
      const chainId = await this.contractWrapper.getChainID();
      const provenanceHash = keccak256(["bytes", "bytes", "uint256"], [toUtf8Bytes(baseUri), hashedPassword, chainId]);
      data = defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = events[0].args.startTokenId;
        const endingIndex = events[0].args.endTokenId;
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt
          });
        }
        return results;
      }
    });
  });

  /**
   * Reveal a batch of hidden NFTs
   * @remarks Reveal the NFTs of a batch using the password.
   * @example
   * ```javascript
   * // the batch to reveal
   * const batchId = 0;
   * // reveal the batch
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   * @public
   * @param batchId - the id of the batch to reveal
   * @param password - the password
   */
  reveal = /* @__PURE__ */buildTransactionFunction(async (batchId, password) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const key = await this.hashDelayRevealPassword(batchId, password);
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

  /**
   * Gets the list of unrevealed NFT batches.
   * @remarks Gets the list of unrevealed NFT batches.
   * @example
   * ```javascript
   * const batches = await contract.revealer.getBatchesToReveal();
   * ```
   * @public
   */
  async getBatchesToReveal() {
    const count = await this.contractWrapper.read("getBaseURICount", []);
    if (count.isZero()) {
      return [];
    }
    const countRangeArray = Array.from(Array(count.toNumber()).keys());
    // map over to get the base uri indices, which should be the end token id of every batch
    const uriIndices = await Promise.all(countRangeArray.map(i => {
      if (hasFunction("getBatchIdAtIndex", this.contractWrapper)) {
        return this.contractWrapper.read("getBatchIdAtIndex", [i]);
      }
      if (hasFunction("baseURIIndices", this.contractWrapper)) {
        return this.contractWrapper.read("baseURIIndices", [i]);
      }
      throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.");
    }));

    // first batch always start from 0. don't need to fetch the last batch so pop it from the range array
    const uriIndicesWithZeroStart = uriIndices.slice(0, uriIndices.length - 1);

    // returns the token uri for each batches. first batch always starts from token id 0.
    const tokenMetadatas = await Promise.all(Array.from([0, ...uriIndicesWithZeroStart]).map(i => this.getNftMetadata(i.toString())));

    // index is the uri indices, which is end token id. different from uris
    const legacyContract = await this.isLegacyContract();
    const encryptedUriData = await Promise.all(Array.from([...uriIndices]).map(i => legacyContract ? this.getLegacyEncryptedData(i) : this.contractWrapper.read("encryptedData", [i])));
    const encryptedBaseUris = encryptedUriData.map(data => {
      if (hexDataLength(data) > 0) {
        if (legacyContract) {
          return data;
        }
        const result = defaultAbiCoder.decode(["bytes", "bytes32"], data);
        return result[0];
      } else {
        return data;
      }
    });
    return tokenMetadatas.map((meta, index) => ({
      batchId: BigNumber.from(index),
      batchUri: meta.uri,
      placeholderMetadata: meta
    })).filter((_, index) => hexDataLength(encryptedBaseUris[index]) > 0);
  }

  /**
   * Algorithm to hash delay reveal password, so we don't broadcast the input password on-chain.
   *
   * @internal
   */
  async hashDelayRevealPassword(batchTokenIndex, password) {
    const chainId = await this.contractWrapper.getChainID();
    const contractAddress = this.contractWrapper.address;
    return keccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchTokenIndex, contractAddress]);
  }
  async getNftMetadata(tokenId) {
    return fetchTokenMetadataForContract(this.contractWrapper.address, this.contractWrapper.getProvider(), tokenId, this.storage);
  }
  async isLegacyContract() {
    if (hasFunction("contractVersion", this.contractWrapper)) {
      try {
        const version = await this.contractWrapper.read("contractVersion", []);
        return version <= 2;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  async getLegacyEncryptedData(index) {
    const DeprecatedAbi = (await import('./IDelayedRevealDeprecated-1248f6c9.js')).default;
    const legacy = new Contract(this.contractWrapper.address, DeprecatedAbi, this.contractWrapper.getProvider());
    const result = await legacy.functions["encryptedBaseURI"](index);
    if (result.length > 0) {
      return result[0];
    } else {
      return "0x";
    }
  }
}

async function calculateClaimCost(contractWrapper, pricePerToken, quantity, currencyAddress, checkERC20Allowance) {
  let overrides = {};
  const currency = currencyAddress || NATIVE_TOKEN_ADDRESS;
  const normalizedPrice = await normalizePriceValue(contractWrapper.getProvider(), pricePerToken, currency);
  const totalCost = normalizedPrice.mul(quantity);
  if (totalCost.gt(0)) {
    if (currency === NATIVE_TOKEN_ADDRESS) {
      overrides = {
        value: totalCost
      };
    } else if (currency !== NATIVE_TOKEN_ADDRESS && checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currency, totalCost, quantity, 0);
    }
  }
  return overrides;
}

/**
 * Encodes and decodes Contract functions
 * @public
 */
class ContractOwner {
  featureName = FEATURE_OWNER.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the current owner of the contract
   * @example
   * ```javascript
   * await contract.owner.get();
   * console.log("Owner address: ", ownerAddress);
   * ```
   * @returns The owner address
   * @twfeature Ownable
   */
  async get() {
    return this.contractWrapper.read("owner", []);
  }

  /**
   * Set the new owner of the contract
   * @remarks Can only be called by the current owner.
   *
   * @param address - the address of the new owner
   *
   * @example
   * ```javascript
   * const newOwnerAddress = "{{wallet_address}}";
   * await contract.owner.set(newOwnerAddress);
   * ```
   * @twfeature Ownable
   */
  set = /* @__PURE__ */buildTransactionFunction(async address => {
    const resolvedAddress = await resolveAddress(address);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setOwner",
      args: [resolvedAddress]
    });
  });
}

export { ContractRoyalty as C, DelayedReveal as D, ContractOwner as a, calculateClaimCost as c };
//# sourceMappingURL=contract-owner-9927b217.esm-6d4d11af.js.map