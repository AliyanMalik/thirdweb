import { a8 as FEATURE_EDITION, B as BigNumber, x as AddressZero, G as ExtensionNotImplementedError, a9 as FEATURE_EDITION_SUPPLY, Q as resolveAddress, y as buildTransactionFunction, T as Transaction, t as ContractEncoder, aa as FEATURE_EDITION_ENUMERABLE, ab as FEATURE_EDITION_MINTABLE, ac as FEATURE_EDITION_BATCH_MINTABLE, ad as FEATURE_EDITION_BURNABLE, ae as FEATURE_EDITION_LAZY_MINTABLE_V2, af as FEATURE_EDITION_CLAIM_CUSTOM, ag as FEATURE_EDITION_CLAIM_CONDITIONS_V2, ah as FEATURE_EDITION_SIGNATURE_MINTABLE, ai as FEATURE_EDITION_REVEALABLE, aj as NotFoundError, ak as z, al as CustomContractSchema, am as MaxUint256, a5 as invariant, an as getPrebuiltInfo, a0 as normalizePriceValue, V as toUtf8Bytes, ao as includesErrorMessage, ap as stripZeros, aq as isNode, ar as isNativeToken, r as ContractWrapper, as as hexZeroPad, at as AddressOrEnsSchema, au as AmountSchema } from './App-40ca2dcc.js';
import { a as assertEnabled } from './assertEnabled-1fa10adb.esm-79af49b9.js';
import { d as detectContractFeature, h as hasFunction, C as ContractMetadata } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { F as FALLBACK_METADATA, a as fetchTokenMetadata, u as uploadOrExtractURIs, D as DEFAULT_QUERY_ALL_COUNT, b as uploadOrExtractURI } from './QueryParams-fc338c68.esm-688d9d17.js';
import { c as calculateClaimCost, D as DelayedReveal } from './contract-owner-9927b217.esm-6d4d11af.js';
import { S as Signature1155PayloadInputWithTokenId, b as Signature1155PayloadOutput, M as MintRequest1155, t as transformResultToClaimCondition, l as legacyContractModelToAbstract, n as newContractModelToAbstract, C as ClaimEligibility, c as convertQuantityToBigNumber, f as fetchSnapshotEntryForAddress, p as processClaimConditionInputs, d as deepEqual, e as abstractContractModelToLegacy, g as abstractContractModelToNew, u as updateExistingClaimConditions, h as prepareClaim, i as SnapshotFormatVersion } from './index-6571f75f.js';
import { s as setErc20Allowance } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';

/**
 * Manages claim conditions for Edition Drop contracts
 * @erc1155
 * @public
 */
class DropErc1155ClaimConditions {
  constructor(contractWrapper, metadata, storage) {
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }

  /** ***************************************
   * READ FUNCTIONS
   *****************************************/

  /**
   * Get the currently active claim condition
   *
   * @returns The claim condition metadata
   */
  async getActive(tokenId, options) {
    const mc = await this.get(tokenId);
    const metadata = await this.metadata.get();
    return await transformResultToClaimCondition(mc, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage, options?.withAllowList || false);
  }
  async get(tokenId, conditionId) {
    if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", [tokenId]);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [tokenId, id]);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", [tokenId]);
      return newContractModelToAbstract(contractModel);
    } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [tokenId, id]);
      return newContractModelToAbstract(contractModel);
    } else {
      throw new Error("Contract does not support claim conditions");
    }
  }

  /**
   * Get all the claim conditions
   *
   * @returns The claim conditions metadata
   */
  async getAll(tokenId, options) {
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      const claimCondition = await this.contractWrapper.read("claimCondition", [tokenId]);
      const startId = claimCondition.currentStartId.toNumber();
      const count = claimCondition.count.toNumber();
      const conditions = [];
      for (let i = startId; i < startId + count; i++) {
        conditions.push(await this.get(tokenId, i));
      }
      const metadata = await this.metadata.get();
      return Promise.all(conditions.map(c => transformResultToClaimCondition(c, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage, options?.withAllowList || false)));
    } else {
      return [await this.getActive(tokenId, options)];
    }
  }

  /**
   * Can Claim
   *
   * @remarks Check if a particular NFT can currently be claimed by a given user.
   *
   * @example
   * ```javascript
   * // Quantity of tokens to check claimability of
   * const quantity = 1;
   * const canClaim = await contract.canClaim(quantity);
   * ```
   */
  async canClaim(tokenId, quantity, addressToCheck) {
    // TODO switch to use verifyClaim
    if (addressToCheck) {
      addressToCheck = await resolveAddress(addressToCheck);
    }
    return (await this.getClaimIneligibilityReasons(tokenId, quantity, addressToCheck)).length === 0;
  }

  /**
   * For any claim conditions that a particular wallet is violating,
   * this function returns human-readable information about the
   * breaks in the condition that can be used to inform the user.
   *
   * @param tokenId - the token id to check
   * @param quantity - The desired quantity that would be claimed.
   * @param addressToCheck - The wallet address, defaults to the connected wallet.
   *
   */
  async getClaimIneligibilityReasons(tokenId, quantity, addressToCheck) {
    const reasons = [];
    let activeConditionIndex;
    let claimCondition;
    if (addressToCheck === undefined) {
      try {
        addressToCheck = await this.contractWrapper.getSignerAddress();
      } catch (err) {
        console.warn("failed to get signer address", err);
      }
    }

    // if we have been unable to get a signer address, we can't check eligibility, so return a NoWallet error reason
    if (!addressToCheck) {
      return [ClaimEligibility.NoWallet];
    }
    const resolvedAddress = await resolveAddress(addressToCheck);
    try {
      claimCondition = await this.getActive(tokenId);
    } catch (err) {
      if (includesErrorMessage(err, "!CONDITION") || includesErrorMessage(err, "no active mint condition")) {
        reasons.push(ClaimEligibility.NoClaimConditionSet);
        return reasons;
      }
      reasons.push(ClaimEligibility.Unknown);
      return reasons;
    }
    if (claimCondition.availableSupply !== "unlimited") {
      if (BigNumber.from(claimCondition.availableSupply).lt(quantity)) {
        reasons.push(ClaimEligibility.NotEnoughSupply);
        return reasons;
      }
    }

    // check for merkle root inclusion
    const merkleRootArray = stripZeros(claimCondition.merkleRootHash);
    const hasAllowList = merkleRootArray.length > 0;
    let allowListEntry = null;
    if (hasAllowList) {
      allowListEntry = await this.getClaimerProofs(tokenId, resolvedAddress);
      if (!allowListEntry && (this.isLegacySinglePhaseDrop(this.contractWrapper) || this.isLegacyMultiPhaseDrop(this.contractWrapper))) {
        // exclusive allowlist behavior
        reasons.push(ClaimEligibility.AddressNotAllowed);
        return reasons;
      }
      if (allowListEntry) {
        try {
          const claimVerification = await this.prepareClaim(tokenId, quantity, false, resolvedAddress);
          let validMerkleProof;
          if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
            // legacy verifyClaimerMerkleProofs function
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [activeConditionIndex, resolvedAddress, tokenId, quantity, claimVerification.proofs, claimVerification.maxClaimable]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [tokenId, resolvedAddress, quantity, {
              proof: claimVerification.proofs,
              maxQuantityInAllowlist: claimVerification.maxClaimable
            }]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
            await this.contractWrapper.read("verifyClaim", [tokenId, resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
            await this.contractWrapper.read("verifyClaim", [activeConditionIndex, resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          }
        } catch (e) {
          console.warn("Merkle proof verification failed:", "reason" in e ? e.reason : e);
          const reason = e.reason;
          switch (reason) {
            case "!Qty":
              reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
              break;
            case "!PriceOrCurrency":
              reasons.push(ClaimEligibility.WrongPriceOrCurrency);
              break;
            case "!MaxSupply":
              reasons.push(ClaimEligibility.NotEnoughSupply);
              break;
            case "cant claim yet":
              reasons.push(ClaimEligibility.ClaimPhaseNotStarted);
              break;
            default:
              {
                reasons.push(ClaimEligibility.AddressNotAllowed);
                break;
              }
          }
          return reasons;
        }
      }
    }
    if (this.isNewSinglePhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      let claimedSupply = BigNumber.from(0);
      let maxClaimable = convertQuantityToBigNumber(claimCondition.maxClaimablePerWallet, 0);
      try {
        claimedSupply = await this.getSupplyClaimedByWallet(tokenId, resolvedAddress);
      } catch (e) {
        // no-op
      }
      if (allowListEntry) {
        maxClaimable = convertQuantityToBigNumber(allowListEntry.maxClaimable, 0);
      }
      if (maxClaimable.gt(0) && maxClaimable.lt(claimedSupply.add(quantity))) {
        reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
        return reasons;
      }

      // if there is no allowlist, or if there is an allowlist and the address is not in it
      // if maxClaimable is 0, we consider it as the address is not allowed
      if (!hasAllowList || hasAllowList && !allowListEntry) {
        if (maxClaimable.lte(claimedSupply) || maxClaimable.eq(0)) {
          reasons.push(ClaimEligibility.AddressNotAllowed);
          return reasons;
        }
      }
    }

    // check for claim timestamp between claims
    let [lastClaimedTimestamp, timestampForNextClaim] = [BigNumber.from(0), BigNumber.from(0)];
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [tokenId, activeConditionIndex, resolvedAddress]);
    } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [tokenId, resolvedAddress]);
    }
    const now = BigNumber.from(Date.now()).div(1000);
    if (lastClaimedTimestamp.gt(0) && now.lt(timestampForNextClaim)) {
      // contract will return MaxUint256 if user has already claimed and cannot claim again
      if (timestampForNextClaim.eq(MaxUint256)) {
        reasons.push(ClaimEligibility.AlreadyClaimed);
      } else {
        reasons.push(ClaimEligibility.WaitBeforeNextClaimTransaction);
      }
      return reasons;
    }

    // if not within a browser conetext, check for wallet balance.
    // In browser context, let the wallet do that job
    if (claimCondition.price.gt(0) && isNode()) {
      const totalPrice = claimCondition.price.mul(quantity);
      const provider = this.contractWrapper.getProvider();
      if (isNativeToken(claimCondition.currencyAddress)) {
        const balance = await provider.getBalance(resolvedAddress);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      } else {
        const IERC20ABI = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
        const erc20 = new ContractWrapper(provider, claimCondition.currencyAddress, IERC20ABI, {}, this.storage);
        const balance = await erc20.read("balanceOf", [resolvedAddress]);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      }
    }
    return reasons;
  }

  /**
   * Returns allow list information and merkle proofs for the given address.
   * @param tokenId - the token ID to check
   * @param claimerAddress - the claimer address
   * @param claimConditionId - optional the claim condition id to get the proofs for
   */
  async getClaimerProofs(tokenId, claimerAddress, claimConditionId) {
    const claimCondition = await this.get(tokenId, claimConditionId);
    const merkleRoot = claimCondition.merkleRoot;
    const merkleRootArray = stripZeros(merkleRoot);
    if (merkleRootArray.length > 0) {
      const metadata = await this.metadata.get();
      const resolvedAddress = await resolveAddress(claimerAddress);
      return await fetchSnapshotEntryForAddress(resolvedAddress, merkleRoot.toString(), metadata.merkle, this.contractWrapper.getProvider(), this.storage, this.getSnapshotFormatVersion());
    } else {
      return null;
    }
  }

  /**
   * Get the total supply claimed by a specific wallet
   * @param walletAddress - the wallet address to check
   * @returns The total supply claimed
   */
  async getSupplyClaimedByWallet(tokenId, walletAddress) {
    const resolvedAddress = await resolveAddress(walletAddress);
    if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [tokenId, resolvedAddress]);
    }
    if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const activeClaimConditionId = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [tokenId, activeClaimConditionId, resolvedAddress]);
    }
    throw new Error("This contract does not support the getSupplyClaimedByWallet function");
  }

  /** ***************************************
   * WRITE FUNCTIONS
   *****************************************/

  /**
   * Set claim conditions on a single NFT
   *
   * @remarks Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this contract.
   *
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   *
   * // Optionally specify addresses that can claim
   * const snapshots = ['0x...', '0x...']
   *
   * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
   * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
   *
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: snapshots, // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await dropContract.claimConditions.set(tokenId, claimConditions);
   * ```
   *
   * @param tokenId - The id of the NFT to set the claim conditions on
   * @param claimConditionInputs - The claim conditions
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */
  set = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (tokenId, claimConditionInputs) {
      let resetClaimEligibilityForAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return _this.setBatch.prepare([{
        tokenId,
        claimConditions: claimConditionInputs
      }], resetClaimEligibilityForAll);
    };
  })());

  /**
   * Set claim conditions on multiple NFTs at once
   *
   * @remarks Sets the claim conditions that need to be fulfilled by users to claim the given NFTs in this contract.
   *
   * @example
   * ```javascript
   * const claimConditionsForTokens = [
   *   {
   *     tokenId: 0,
   *     claimConditions: [{
   *       startTime: new Date(), // start the claim phase now
   *       maxClaimableSupply: 2, // limit how many mints for this tokenId
   *       price: 0.01, // price for this tokenId
   *       snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *     }]
   *   },
   *   {
   *     tokenId: 1,
   *     claimConditions: [{
   *       startTime: new Date(),
   *       price: 0.08, // different price for this tokenId
   *     }]
   *   },
   * ];
   *
   * await dropContract.claimConditions.setBatch(claimConditionsForTokens);
   * ```
   *
   * @param claimConditionsForToken - The claim conditions for each NFT
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */
  setBatch = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (claimConditionsForToken) {
      let resetClaimEligibilityForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      const merkleInfo = {};
      const processedClaimConditions = await Promise.all(claimConditionsForToken.map(async _ref => {
        let {
          tokenId,
          claimConditions
        } = _ref;
        // sanitize for single phase deletions
        let claimConditionsProcessed = claimConditions;
        if (_this2.isLegacySinglePhaseDrop(_this2.contractWrapper)) {
          resetClaimEligibilityForAll = true;
          if (claimConditions.length === 0) {
            claimConditionsProcessed = [{
              startTime: new Date(0),
              currencyAddress: AddressZero,
              price: 0,
              maxClaimableSupply: 0,
              maxClaimablePerWallet: 0,
              waitInSeconds: 0,
              merkleRootHash: hexZeroPad([0], 32),
              snapshot: []
            }];
          } else if (claimConditions.length > 1) {
            throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");
          }
        }
        // if using new snapshot format, make sure that maxClaimablePerWallet is set if allowlist is set as well
        if (_this2.isNewSinglePhaseDrop(_this2.contractWrapper) || _this2.isNewMultiphaseDrop(_this2.contractWrapper)) {
          claimConditionsProcessed.forEach(cc => {
            if (cc.snapshot && cc.snapshot.length > 0 && (cc.maxClaimablePerWallet === undefined || cc.maxClaimablePerWallet === "unlimited")) {
              throw new Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\n" + "Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist." + "\n\nex:\n" + "contract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");
            }
            if (cc.snapshot && cc.snapshot.length > 0 && cc.maxClaimablePerWallet?.toString() === "0" && cc.snapshot.map(s => {
              if (typeof s === "string") {
                return 0;
              } else {
                return Number(s.maxClaimable?.toString() || 0);
              }
            }).reduce((acc, current) => {
              return acc + current;
            }, 0) === 0) {
              throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.");
            }
          });
        }
        // process inputs
        const {
          snapshotInfos,
          sortedConditions
        } = await processClaimConditionInputs(claimConditionsProcessed, 0, _this2.contractWrapper.getProvider(), _this2.storage, _this2.getSnapshotFormatVersion());
        snapshotInfos.forEach(s => {
          merkleInfo[s.merkleRoot] = s.snapshotUri;
        });
        return {
          tokenId,
          sortedConditions
        };
      }));
      const metadata = await _this2.metadata.get();
      const encoded = [];

      // keep the old merkle roots from other tokenIds
      for (const key of Object.keys(metadata.merkle || {})) {
        merkleInfo[key] = metadata.merkle[key];
      }

      // upload new merkle roots to snapshot URIs if updated
      if (!deepEqual(metadata.merkle, merkleInfo)) {
        const mergedMetadata = await _this2.metadata.parseInputMetadata({
          ...metadata,
          merkle: merkleInfo
        });
        // using internal method to just upload, avoids one contract call
        const contractURI = await _this2.metadata._parseAndUploadMetadata(mergedMetadata);
        if (hasFunction("setContractURI", _this2.contractWrapper)) {
          const contractEncoder = new ContractEncoder(_this2.contractWrapper);
          encoded.push(contractEncoder.encode("setContractURI", [contractURI]));
        } else {
          throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");
        }
      }
      processedClaimConditions.forEach(_ref2 => {
        let {
          tokenId,
          sortedConditions
        } = _ref2;
        const baseContractEncoder = new ContractEncoder(_this2.contractWrapper);
        if (_this2.isLegacySinglePhaseDrop(_this2.contractWrapper)) {
          const legacyContractEncoder = new ContractEncoder(_this2.contractWrapper);
          encoded.push(legacyContractEncoder.encode("setClaimConditions", [tokenId, abstractContractModelToLegacy(sortedConditions[0]), resetClaimEligibilityForAll]));
        } else if (_this2.isLegacyMultiPhaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, sortedConditions.map(abstractContractModelToLegacy), resetClaimEligibilityForAll]));
        } else if (_this2.isNewSinglePhaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, abstractContractModelToNew(sortedConditions[0]), resetClaimEligibilityForAll]));
        } else if (_this2.isNewMultiphaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, sortedConditions.map(abstractContractModelToNew), resetClaimEligibilityForAll]));
        } else {
          throw new Error("Contract does not support claim conditions");
        }
      });
      if (hasFunction("multicall", _this2.contractWrapper)) {
        return Transaction.fromContractWrapper({
          contractWrapper: _this2.contractWrapper,
          method: "multicall",
          args: [encoded]
        });
      }
      throw new Error("Contract does not support multicall");
    };
  })());

  /**
   * Update a single claim condition with new data.
   * @param tokenId - the token id to update
   * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
   * @param claimConditionInput - the new data to update, previous data will be retained
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, index, claimConditionInput) => {
    const existingConditions = await this.getAll(tokenId);
    const newConditionInputs = await updateExistingClaimConditions(index, claimConditionInput, existingConditions);
    return await this.set.prepare(tokenId, newConditionInputs);
  });

  /**
   * Returns proofs and the overrides required for the transaction.
   *
   * @returns  `overrides` and `proofs` as an object.
   */
  async prepareClaim(tokenId, quantity, checkERC20Allowance, address) {
    const addressToClaim = await resolveAddress(address ? address : await this.contractWrapper.getSignerAddress());
    return prepareClaim(addressToClaim, quantity, await this.getActive(tokenId), async () => (await this.metadata.get()).merkle, 0, this.contractWrapper, this.storage, checkERC20Allowance, this.getSnapshotFormatVersion());
  }
  async getClaimArguments(tokenId, destinationAddress, quantity, claimVerification) {
    const resolvedAddress = await resolveAddress(destinationAddress);
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxClaimable];
    } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
        proof: claimVerification.proofs,
        maxQuantityInAllowlist: claimVerification.maxClaimable
      }, toUtf8Bytes("")];
    }
    return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
      proof: claimVerification.proofs,
      quantityLimitPerWallet: claimVerification.maxClaimable,
      pricePerToken: claimVerification.priceInProof,
      currency: claimVerification.currencyAddressInProof
    }, toUtf8Bytes("")];
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    if (options?.pricePerToken) {
      throw new Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");
    }
    const claimVerification = await this.prepareClaim(tokenId, quantity, options?.checkERC20Allowance || true);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: await this.getClaimArguments(tokenId, destinationAddress, quantity, claimVerification),
      overrides: claimVerification.overrides
    });
  }
  isNewSinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimConditionsV2");
  }
  isNewMultiphaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimPhasesV2");
  }
  isLegacySinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimConditionsV1");
  }
  isLegacyMultiPhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimPhasesV1");
  }
  getSnapshotFormatVersion() {
    return this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isLegacySinglePhaseDrop(this.contractWrapper) ? SnapshotFormatVersion.V1 : SnapshotFormatVersion.V2;
  }
}

/**
 * @internal
 */
const AirdropAddressInput = /* @__PURE__ */(() => z.object({
  address: AddressOrEnsSchema,
  quantity: AmountSchema.default(1)
}))();

/**
 * @internal
 */
const AirdropInputSchema = /* @__PURE__ */(() => z.union([z.array(z.string()).transform(async strings => await Promise.all(strings.map(address => AirdropAddressInput.parseAsync({
  address
})))), z.array(AirdropAddressInput)]))();

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.drop.claim.to("0x...", tokenId, quantity);
 * ```
 */
class ERC1155Claimable {
  featureName = FEATURE_EDITION_CLAIM_CUSTOM.name;
  constructor(contractWrapper) {
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
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    let overrides = {};
    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: [await resolveAddress(destinationAddress), tokenId, quantity],
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
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns  Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    return await this.getClaimTransaction(destinationAddress, tokenId, quantity, options);
  });
}

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.claim(tokenId, quantity);
 * await contract.erc1155.claimConditions.getActive(tokenId);
 * ```
 */
class Erc1155ClaimableWithConditions {
  featureName = FEATURE_EDITION_CLAIM_CONDITIONS_V2.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropErc1155ClaimConditions(contractWrapper, metadata, this.storage);
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns  Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    return await this.conditions.getClaimTransaction(destinationAddress, tokenId, quantity, options);
  });
}

/**
 * Enables generating dynamic ERC1155 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @erc1155
 * @public
 */
class Erc1155SignatureMintable {
  featureName = FEATURE_EDITION_SIGNATURE_MINTABLE.name;
  constructor(contractWrapper, storage, roles) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.roles = roles;
  }

  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc1155.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc1155SignatureMintable.generate}
   * @twfeature ERC1155SignatureMintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const [message, overrides] = await Promise.all([this.mapPayloadToContractStruct(mintRequest), this.contractWrapper.getCallOverrides()]);
    // TODO: Transaction Sequence Pattern
    await setErc20Allowance(this.contractWrapper, message.pricePerToken.mul(message.quantity), mintRequest.currencyAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintWithSignature",
      args: [message, signature],
      overrides,
      parse: receipt => {
        const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
        if (t.length === 0) {
          throw new Error("No MintWithSignature event found");
        }
        const id = t[0].args.tokenIdMinted;
        return {
          id,
          receipt
        };
      }
    });
  });

  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   *
   * @example
   * ```javascript
   * // see how to craft a batch of payloads to sign in the `generateBatch()` documentation
   * const signedPayloads = contract.erc1155.signature.generateBatch(payloads);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mintBatch(signedPayloads);
   * ```
   *
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC1155SignatureMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const contractStructs = await Promise.all(signedPayloads.map(s => this.mapPayloadToContractStruct(s.payload)));
    const contractPayloads = signedPayloads.map((s, index) => {
      const message = contractStructs[index];
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
      return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
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
      throw new Error("Multicall not supported on this contract!");
    }
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC1155SignatureMintable
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
   * const signedPayload = contract.erc1155.signature.generate(payload);
   * // Now you can verify that the payload is valid
   * const isValid = await contract.erc1155.signature.verify(signedPayload);
   * ```
   */
  async verify(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const verification = await this.contractWrapper.read("verify", [message, signature]);
    return verification[0];
  }

  /**
   * Generate a signature that can be used to mint an NFT dynamically.
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
   * const signedPayload = await contract.erc1155.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns The signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */
  async generate(payloadToSign) {
    const payload = {
      ...payloadToSign,
      tokenId: MaxUint256
    };
    return this.generateFromTokenId(payload);
  }

  /**
   * Generate a signature that can be used to mint additionally supply to an existing NFT.
   *
   * @remarks Takes in a payload with the token ID of an existing NFT, and signs it with your private key. The generated signature can then be used to mint additional supply to the NFT using the exact payload and signature generated.
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
   *   tokenId: 0, // Instead of metadata, we specify the token ID of the NFT to mint supply to
   *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
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
   * const signedPayload = await contract.erc1155.signature.generateFromTokenId(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns The signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */
  async generateFromTokenId(payloadToSign) {
    const payloads = await this.generateBatchFromTokenIds([payloadToSign]);
    return payloads[0];
  }

  /**
   * Generate a batch of signatures that can be used to mint many new NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns An array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */
  async generateBatch(payloadsToSign) {
    const payloads = payloadsToSign.map(payload => ({
      ...payload,
      tokenId: MaxUint256
    }));
    return this.generateBatchFromTokenIds(payloads);
  }

  /**
   * Generate a batch of signatures that can be used to mint new NFTs or additionally supply to existing NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generateFromTokenId}
   *
   * @param payloadsToSign - the payloads to sign with tokenIds specified
   * @returns An array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */
  async generateBatchFromTokenIds(payloadsToSign) {
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    await this.roles?.verify(["minter"], await signer.getAddress());
    const parsedRequests = await Promise.all(payloadsToSign.map(m => Signature1155PayloadInputWithTokenId.parseAsync(m)));
    const metadatas = parsedRequests.map(r => r.metadata);
    const [uris, chainId, contractInfo] = await Promise.all([uploadOrExtractURIs(metadatas, this.storage), this.contractWrapper.getChainID(), getPrebuiltInfo(this.contractWrapper.address, this.contractWrapper.getProvider())]);
    const finalPayloads = await Promise.all(parsedRequests.map((m, i) => Signature1155PayloadOutput.parseAsync({
      ...m,
      uri: uris[i]
    })));
    const contractStructs = await Promise.all(finalPayloads.map(finalPayload => this.mapPayloadToContractStruct(finalPayload)));
    const isLegacyContract = contractInfo?.type === "TokenERC1155";
    const signatures = await Promise.all(contractStructs.map(contractStruct => this.contractWrapper.signTypedData(signer, {
      name: isLegacyContract ? "TokenERC1155" : "SignatureMintERC1155",
      version: "1",
      chainId,
      verifyingContract: this.contractWrapper.address
    }, {
      MintRequest: MintRequest1155
    },
    // TYPEHASH
    contractStruct)));
    return signatures.map((signature, index) => ({
      payload: finalPayloads[index],
      signature: signature.toString()
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
      tokenId: mintRequest.tokenId,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }
}

class Erc1155Burnable {
  featureName = FEATURE_EDITION_BURNABLE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.tokens(tokenId, amount);
   * ```
   */
  tokens = /* @__PURE__ */buildTransactionFunction(async (tokenId, amount) => {
    const account = await this.contractWrapper.getSignerAddress();
    return this.from.prepare(account, tokenId, amount);
  });

  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.from(account, tokenId, amount);
   * ```
   */
  from = /* @__PURE__ */buildTransactionFunction(async (account, tokenId, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [await resolveAddress(account), tokenId, amount]
    });
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batch(tokenIds, amounts);
   * ```
   */
  batch = /* @__PURE__ */buildTransactionFunction(async (tokenIds, amounts) => {
    const account = await this.contractWrapper.getSignerAddress();
    return this.batchFrom.prepare(account, tokenIds, amounts);
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batchFrom(account, tokenIds, amounts);
   * ```
   */
  batchFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenIds, amounts) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burnBatch",
      args: [await resolveAddress(account), tokenIds, amounts]
    });
  });
}

/**
 * List ERC1155 NFTs
 * @remarks Easily list all the NFTs in a ERC1155 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.edition.query.all();
 * ```
 * @public
 */

class Erc1155Enumerable {
  featureName = FEATURE_EDITION_ENUMERABLE.name;
  constructor(erc1155, contractWrapper) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get All NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.edition.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async all(queryParams) {
    const start = BigNumber.from(queryParams?.start || 0).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.totalCount()).toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc1155.get((start + i).toString())));
  }

  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns The total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return await this.contractWrapper.read("nextTokenIdToMint", []);
  }

  /**
   * Get the supply of token for a given tokenId.
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns The total number of NFTs minted in this contract
   * @public
   */
  async totalCirculatingSupply(tokenId) {
    return await this.contractWrapper.read("totalSupply", [tokenId]);
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
   * const nfts = await contract.edition.query.owned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async owned(walletAddress, queryParams) {
    const [address, maxId] = await Promise.all([resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress())), this.contractWrapper.read("nextTokenIdToMint", [])]);
    const balances = await this.contractWrapper.read("balanceOfBatch", [Array(maxId.toNumber()).fill(address), Array.from(Array(maxId.toNumber()).keys())]);
    let ownedBalances = balances.map((b, i) => {
      return {
        tokenId: i,
        balance: b
      };
    }).filter(b => b.balance.gt(0));
    if (queryParams) {
      const start = queryParams?.start || 0;
      const count = queryParams?.count || DEFAULT_QUERY_ALL_COUNT;
      ownedBalances = ownedBalances.slice(start, start + count);
    }
    const nfts = (await Promise.all(ownedBalances.map(item => this.erc1155.get(item.tokenId.toString())))).map((editionMetadata, index) => ({
      ...editionMetadata,
      owner: address,
      quantityOwned: ownedBalances[index].balance.toString()
    }));
    return nfts;
  }
}

class Erc1155LazyMintable {
  featureName = FEATURE_EDITION_LAZY_MINTABLE_V2.name;

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
   * await contract.edition.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.edition.drop.revealer.reveal(batchId, "my secret password");
   * ```
   */

  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.revealer = this.detectErc1155Revealable();
  }

  /**
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
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
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    const startFileNumber = await this.erc1155.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    // ensure baseUri is the same for the entire batch
    const baseUri = batch[0].substring(0, batch[0].lastIndexOf("/"));
    for (let i = 0; i < batch.length; i++) {
      const uri = batch[i].substring(0, batch[i].lastIndexOf("/"));
      if (baseUri !== uri) {
        throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
      }
    }
    const parse = receipt => {
      const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = event[0].args.endTokenId;
      const results = [];
      for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc1155.getTokenMetadata(id)
        });
      }
      return results;
    };
    const prebuiltInfo = await getPrebuiltInfo(this.contractWrapper.address, this.contractWrapper.getProvider());
    if (this.isLegacyEditionDropContract(this.contractWrapper, prebuiltInfo)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "lazyMint",
        args: [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`],
        parse
      });
    } else {
      // new contracts/extensions have support for delayed reveal that adds an extra parameter to lazyMint
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "lazyMint",
        args: [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`, toUtf8Bytes("")],
        parse
      });
    }
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  detectErc1155Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_EDITION_REVEALABLE.name, () => this.erc1155.nextTokenIdToMint());
    }
    return undefined;
  }
  isLegacyEditionDropContract(contractWrapper, info) {
    return info && info.type === "DropERC1155" && info.version < 3 || false;
  }
}

/**
 * Mint Many ERC1155 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
 * ```
 * @public
 */

class Erc1155BatchMintable {
  featureName = FEATURE_EDITION_BATCH_MINTABLE.name;
  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.edition.mint.batch.to(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadataWithSupply) => {
    const metadatas = metadataWithSupply.map(a => a.metadata);
    const supplies = metadataWithSupply.map(a => a.supply);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const resolvedAddress = await resolveAddress(to);
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = await Promise.all(uris.map(async (uri, index) => contractEncoder.encode("mintTo", [resolvedAddress, MaxUint256, uri, supplies[index]])));
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
            data: () => this.erc1155.get(id)
          };
        });
      }
    });
  });
}

/**
 * Mint ERC1155 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc1155Mintable {
  featureName = FEATURE_EDITION_MINTABLE.name;

  /**
   * Batch mint Tokens to many addresses
   */

  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc1155BatchMintable();
  }

  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.edition.mint.to(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   *
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadataWithSupply) => {
    const tx = await this.getMintTransaction(to, metadataWithSupply);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TransferSingle", receipt?.logs);
      if (event.length === 0) {
        throw new Error("TransferSingleEvent event not found");
      }
      const id = event[0].args.id;
      return {
        id,
        receipt,
        data: () => this.erc1155.get(id.toString())
      };
    });
    return tx;
  });

  /**
   * @deprecated Use `contract.erc1155.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, metadataWithSupply) {
    const uri = await uploadOrExtractURI(metadataWithSupply.metadata, this.storage);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [await resolveAddress(to), MaxUint256, uri, metadataWithSupply.supply]
    });
  }

  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   * const tokenId = 0;
   * const additionalSupply = 1000;
   *
   * const tx = await contract.edition.mint.additionalSupplyTo(toAddress, tokenId, additionalSupply);
   * ```
   */
  additionalSupplyTo = /* @__PURE__ */buildTransactionFunction(async (to, tokenId, additionalSupply) => {
    const metadata = await this.erc1155.getTokenMetadata(tokenId);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [await resolveAddress(to), tokenId, metadata.uri, additionalSupply],
      parse: receipt => {
        return {
          id: BigNumber.from(tokenId),
          receipt,
          data: () => this.erc1155.get(tokenId)
        };
      }
    });
  });
  detectErc1155BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155BatchMintable")) {
      return new Erc1155BatchMintable(this.erc1155, this.contractWrapper, this.storage);
    }
  }
}

/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.transfer(walletAddress, tokenId, quantity);
 * ```
 * @erc1155
 * @public
 */
class Erc1155 {
  featureName = FEATURE_EDITION.name;
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc1155Enumerable();
    this.mintable = this.detectErc1155Mintable();
    this.burnable = this.detectErc1155Burnable();
    this.lazyMintable = this.detectErc1155LazyMintable();
    this.signatureMintable = this.detectErc1155SignatureMintable();
    this.claimCustom = this.detectErc1155Claimable();
    this.claimWithConditions = this.detectErc1155ClaimableWithConditions();
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

  ////// Standard ERC1155 functions //////

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc1155.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC1155
   */
  async get(tokenId) {
    const [supply, metadata] = await Promise.all([this.contractWrapper.read("totalSupply", [tokenId]).catch(() => BigNumber.from(0)), this.getTokenMetadata(tokenId).catch(() => ({
      id: tokenId.toString(),
      uri: "",
      ...FALLBACK_METADATA
    }))]);
    return {
      owner: AddressZero,
      metadata,
      type: "ERC1155",
      supply: supply.toString()
    };
  }

  /**
   * Get the total supply of a specific token
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc1155.totalSupply(tokenId);
   * ```
   * @param tokenId - The token ID to get the total supply of
   * @returns The total supply
   * @twfeature ERC1155
   */
  async totalSupply(tokenId) {
    if (detectContractFeature(this.contractWrapper, "ERC1155Supply")) {
      return await this.contractWrapper.read("totalSupply", [tokenId]);
    } else {
      throw new ExtensionNotImplementedError(FEATURE_EDITION_SUPPLY);
    }
  }

  /**
   * Get NFT balance of a specific wallet
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * // Address of the wallet to check NFT balance
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0; // Id of the NFT to check
   * const balance = await contract.erc1155.balanceOf(walletAddress, tokenId);
   * ```
   * @twfeature ERC1155
   */
  async balanceOf(address, tokenId) {
    return await this.contractWrapper.read("balanceOf", [await resolveAddress(address), tokenId]);
  }

  /**
   * Get NFT balance for the currently connected wallet
   */
  async balance(tokenId) {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress(), tokenId);
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return await this.contractWrapper.read("isApprovedForAll", [await resolveAddress(address), await resolveAddress(operator)]);
  }

  /**
   * Transfer an NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.erc1155.transfer(toAddress, tokenId, amount);
   * ```
   * @twfeature ERC1155
   */
  transfer = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (to, tokenId, amount) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      const from = await _this.contractWrapper.getSignerAddress();
      return Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "safeTransferFrom",
        args: [from, await resolveAddress(to), tokenId, amount, data]
      });
    };
  })());

  /**
   * Transfer multiple NFTs
   *
   * @remarks Transfer multiple NFTs from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * // The token IDs of the NFTs you want to send
   * const tokenIds = [0, 1, 2];
   * // How many copies of the NFTs to transfer
   * const amounts = [1, 2, 3];
   * await contract.erc1155.transferBatch(toAddress, tokenIds, amounts);
   * ```
   *
   * @twfeature ERC1155BatchTransferable
   */
  transferBatch = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (to, tokenIds, amounts, fromAddress) {
      let data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0];
      const from = fromAddress ? await resolveAddress(fromAddress) : await _this2.contractWrapper.getSignerAddress();
      return Transaction.fromContractWrapper({
        contractWrapper: _this2.contractWrapper,
        method: "safeBatchTransferFrom",
        args: [from, await resolveAddress(to), tokenIds, amounts, data]
      });
    };
  })());

  /**
   * Transfer an NFT from a specific wallet
   *
   * @remarks Transfer an NFT from a specific wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.erc1155.transfer(toAddress, tokenId, amount);
   * ```
   * @twfeature ERC1155
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction((() => {
    var _this3 = this;
    return async function (from, to, tokenId, amount) {
      let data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0];
      return Transaction.fromContractWrapper({
        contractWrapper: _this3.contractWrapper,
        method: "safeTransferFrom",
        args: [await resolveAddress(from), await resolveAddress(to), tokenId, amount, data]
      });
    };
  })());

  /**
   * Set approval for all NFTs
   * @remarks Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * await contract.erc1155.setApprovalForAll(operator, true);
   * ```
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   * @twfeature ERC1155
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setApprovalForAll",
      args: [operator, approved]
    });
  });

  /**
   * Airdrop multiple NFTs
   *
   * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to airdrop
   * const tokenId = "0";
   * // Array of objects of addresses and quantities to airdrop NFTs to
   * const addresses = [
   *  {
   *    address: "0x...",
   *    quantity: 2,
   *  },
   *  {
   *   address: "0x...",
   *    quantity: 3,
   *  },
   * ];
   * await contract.erc1155.airdrop(tokenId, addresses);
   *
   * // You can also pass an array of addresses, it will airdrop 1 NFT per address
   * const tokenId = "0";
   * const addresses = [
   *  "0x...", "0x...", "0x...",
   * ]
   * await contract.erc1155.airdrop(tokenId, addresses);
   * ```
   * @twfeature ERC1155BatchTransferable
   */
  airdrop = /* @__PURE__ */buildTransactionFunction((() => {
    var _this4 = this;
    return async function (tokenId, addresses, fromAddress) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      const from = fromAddress ? await resolveAddress(fromAddress) : await _this4.contractWrapper.getSignerAddress();
      const balanceOf = await _this4.balanceOf(from, tokenId);
      const input = await AirdropInputSchema.parseAsync(addresses);
      const totalToAirdrop = input.reduce((prev, curr) => {
        return BigNumber.from(prev).add(BigNumber.from(curr?.quantity || 1));
      }, BigNumber.from(0));
      if (balanceOf.lt(BigNumber.from(totalToAirdrop))) {
        throw new Error(`The caller owns ${balanceOf.toString()} NFTs, but wants to airdrop ${totalToAirdrop.toString()} NFTs.`);
      }
      const contractEncoder = new ContractEncoder(_this4.contractWrapper);
      const encoded = input.map(_ref => {
        let {
          address: to,
          quantity
        } = _ref;
        return contractEncoder.encode("safeTransferFrom", [from, to, tokenId, quantity, data]);
      });
      return Transaction.fromContractWrapper({
        contractWrapper: _this4.contractWrapper,
        method: "multicall",
        args: [encoded]
      });
    };
  })());

  /**
   * Return the next available token ID to mint
   * @internal
   */
  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return await this.contractWrapper.read("nextTokenIdToMint", []);
    } else {
      throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint");
    }
  }

  ////// ERC1155 Enumerable Extension //////

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc1155.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC1155Enumerable
   */
  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).all(queryParams);
  }

  /**
   * Get the total number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   * @example
   * ```javascript
   * const count = await contract.erc1155.totalCount();
   * console.log(count);
   * ```
   * @returns The total number of NFTs minted in this contract
   * @public
   * @twfeature ERC1155Enumerable
   */
  async totalCount() {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCount();
  }

  /**
   * Get the total supply of a specific NFT
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns The total number of NFTs minted in this contract
   * @public
   * @twfeature ERC1155Enumerable
   */
  async totalCirculatingSupply(tokenId) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCirculatingSupply(tokenId);
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
   * const nfts = await contract.erc1155.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC1155Enumerable
   */
  async getOwned(walletAddress, queryParams) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).owned(walletAddress, queryParams);
  }

  ////// ERC1155 Mintable Extension //////

  /**
   * Mint an NFT
   *
   * @remarks Mint an NFT with a limited supply to the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mint(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async metadataWithSupply => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  });

  /**
   * Mint an NFT to a specific wallet
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mintTo(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadataWithSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).to.prepare(receiver, metadataWithSupply);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadataWithSupply - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.erc1155.mint.prepare(...args)` instead
   * @twfeature ERC1155Mintable
   */
  async getMintTransaction(receiver, metadataWithSupply) {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).getMintTransaction(receiver, metadataWithSupply);
  }

  /**
   * Increase the supply of an existing NFT
   * @remarks Increase the supply of an existing NFT and mint it to the connected wallet address
   * @example
   * ```javascript
   * const tokenId = 0;
   * const additionalSupply = 1000;
   * await contract.erc1155.mintAdditionalSupply(tokenId, additionalSupply);
   * ```
   *
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   * @twfeature ERC1155Mintable
   */
  mintAdditionalSupply = /* @__PURE__ */buildTransactionFunction(async (tokenId, additionalSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(), tokenId, additionalSupply);
  });

  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   * @twfeature ERC1155Mintable
   */
  mintAdditionalSupplyTo = /* @__PURE__ */buildTransactionFunction(async (receiver, tokenId, additionalSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo.prepare(receiver, tokenId, additionalSupply);
  });

  ////// ERC1155 BatchMintable Extension //////

  /**
   * Mint multiple NFTs at once
   *
   * @remarks Mint multiple different NFTs with limited supplies to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatch(metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async metadataWithSupply => {
    return this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  });

  /**
   * Mint multiple NFTs at once to a specific wallet
   *
   * @remarks Mint multiple different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatchTo(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadataWithSupply) => {
    return assertEnabled(this.mintable?.batch, FEATURE_EDITION_BATCH_MINTABLE).to.prepare(receiver, metadataWithSupply);
  });

  ////// ERC1155 Burnable Extension //////

  /**
   * Burn NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burn(tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async (tokenId, amount) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).tokens.prepare(tokenId, amount);
  });

  /**
   * Burn NFTs from a specific wallet
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burnFrom(account, tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenId, amount) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).from.prepare(account, tokenId, amount);
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatch(tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnBatch = /* @__PURE__ */buildTransactionFunction(async (tokenIds, amounts) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batch.prepare(tokenIds, amounts);
  });

  /**
   * Burn a batch of NFTs from a specific wallet
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatchFrom(account, tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnBatchFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenIds, amounts) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batchFrom.prepare(account, tokenIds, amounts);
  });

  ////// ERC721 LazyMint Extension //////

  /**
   * Lazy mint NFTs
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
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
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC1155LazyMintableV1 | ERC1155LazyMintableV2
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    return assertEnabled(this.lazyMintable, FEATURE_EDITION_LAZY_MINTABLE_V2).lazyMint.prepare(metadatas, options);
  });

  ////// ERC1155 Claimable Extension //////

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.conditions.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }
    if (claim) {
      return claim.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIM_CUSTOM);
  }

  /**
   * Claim NFTs
   *
   * @remarks Let the connected wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claim(tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns  Receipt for the transaction
   * @twfeature ERC1155ClaimCustom | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (tokenId, quantity, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), tokenId, quantity, options);
  });

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns  Receipt for the transaction
   * @twfeature ERC1155ClaimCustom | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.to.prepare(destinationAddress, tokenId, quantity, options);
    }
    if (claim) {
      return claim.to.prepare(destinationAddress, tokenId, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIM_CUSTOM);
  });

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
   * await contract.erc1155.claimConditions.set(tokenId, claimConditions);
   * ```
   * @twfeature ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.claimWithConditions, FEATURE_EDITION_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC1155 SignatureMintable Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc1155.signature.generate()` documentation
   * const signedPayload = contract.erc1155.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC1155SignatureMintable
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_EDITION_SIGNATURE_MINTABLE);
  }

  ////// ERC1155 DelayedReveal Extension //////

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
   * await contract.erc1155.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc1155.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC1155Revealable
   */
  get revealer() {
    return assertEnabled(this.lazyMintable?.revealer, FEATURE_EDITION_REVEALABLE);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   * @param tokenId - the token Id to fetch
   */
  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.read("uri", [tokenId]);
    if (!tokenUri) {
      throw new NotFoundError();
    }
    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }
  detectErc1155Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Enumerable")) {
      return new Erc1155Enumerable(this, this.contractWrapper);
    }
  }
  detectErc1155Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Mintable")) {
      return new Erc1155Mintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Burnable")) {
      return new Erc1155Burnable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc1155LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155LazyMintableV1") || detectContractFeature(this.contractWrapper, "ERC1155LazyMintableV2")) {
      return new Erc1155LazyMintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155SignatureMintable")) {
      return new Erc1155SignatureMintable(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155ClaimCustom")) {
      return new ERC1155Claimable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc1155ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC1155ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC1155ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC1155ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC1155ClaimPhasesV2")) {
      return new Erc1155ClaimableWithConditions(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

export { DropErc1155ClaimConditions as D, Erc1155 as E, Erc1155SignatureMintable as a };
//# sourceMappingURL=erc-1155-103c8d30.esm-2b10b909.js.map
