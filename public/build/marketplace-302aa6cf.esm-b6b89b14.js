import { $ as Contract, r as ContractWrapper, aI as fetchCurrencyValue, a5 as invariant, B as BigNumber, a$ as MAX_BPS } from './App-40ca2dcc.js';
import { I as InterfaceId_IERC721, c as InterfaceId_IERC1155, D as DEFAULT_QUERY_ALL_COUNT } from './QueryParams-fc338c68.esm-688d9d17.js';

/**
 * This method checks if the given token is approved for the transferrerContractAddress contract.
 * This is particularly useful for contracts that need to transfer NFTs on the users' behalf
 *
 * @internal
 * @param provider - The connected provider
 * @param transferrerContractAddress - The address of the marketplace contract
 * @param assetContract - The address of the asset contract.
 * @param tokenId - The token id of the token.
 * @param owner - The address of the account that owns the token.
 * @returns  True if the transferrerContractAddress is approved on the token, false otherwise.
 */
async function isTokenApprovedForTransfer(provider, transferrerContractAddress, assetContract, tokenId, owner) {
  try {
    const ERC165Abi = (await import('./IERC165-d67b8364.js')).default;
    const erc165 = new Contract(assetContract, ERC165Abi, provider);
    const [isERC721, isERC1155] = await Promise.all([erc165.supportsInterface(InterfaceId_IERC721), erc165.supportsInterface(InterfaceId_IERC1155)]);
    if (isERC721) {
      const ERC721Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dk; })).default;
      const asset = new Contract(assetContract, ERC721Abi, provider);
      const approved = await asset.isApprovedForAll(owner, transferrerContractAddress);
      if (approved) {
        return true;
      }

      // Handle reverts in case of non-existent tokens
      let approvedAddress;
      try {
        approvedAddress = await asset.getApproved(tokenId);
      } catch (e) {}
      return approvedAddress?.toLowerCase() === transferrerContractAddress.toLowerCase();
    } else if (isERC1155) {
      const ERC1155Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dm; })).default;
      const asset = new Contract(assetContract, ERC1155Abi, provider);
      return await asset.isApprovedForAll(owner, transferrerContractAddress);
    } else {
      console.error("Contract does not implement ERC 1155 or ERC 721.");
      return false;
    }
  } catch (err) {
    console.error("Failed to check if token is approved", err);
    return false;
  }
}

/**
 * Checks if the marketplace is approved to make transfers on the assetContract
 * If not, it tries to set the approval.
 * @param contractWrapper - The contract wrapper to use
 * @param marketplaceAddress - The address of the marketplace contract
 * @param assetContract - The address of the asset contract.
 * @param tokenId - The token id of the token.
 * @param from - The address of the account that owns the token.
 */
async function handleTokenApproval(contractWrapper, marketplaceAddress, assetContract, tokenId, from) {
  const ERC165Abi = (await import('./IERC165-d67b8364.js')).default;
  const erc165 = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC165Abi, contractWrapper.options, contractWrapper.storage);
  const [isERC721, isERC1155] = await Promise.all([erc165.read("supportsInterface", [InterfaceId_IERC721]), erc165.read("supportsInterface", [InterfaceId_IERC1155])]);
  // check for token approval
  if (isERC721) {
    const ERC721Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dk; })).default;
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC721Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      const isTokenApproved = (await asset.read("getApproved", [tokenId])).toLowerCase() === marketplaceAddress.toLowerCase();
      if (!isTokenApproved) {
        await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
      }
    }
  } else if (isERC1155) {
    const ERC1155Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dm; })).default;
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC1155Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
    }
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
}

/**
 * Used to verify fields in new listing.
 * @internal
 */
// TODO this should be done in zod
function validateNewListingParam(param) {
  invariant(param.assetContractAddress !== undefined && param.assetContractAddress !== null, "Asset contract address is required");
  invariant(param.buyoutPricePerToken !== undefined && param.buyoutPricePerToken !== null, "Buyout price is required");
  invariant(param.listingDurationInSeconds !== undefined && param.listingDurationInSeconds !== null, "Listing duration is required");
  invariant(param.startTimestamp !== undefined && param.startTimestamp !== null, "Start time is required");
  invariant(param.tokenId !== undefined && param.tokenId !== null, "Token ID is required");
  invariant(param.quantity !== undefined && param.quantity !== null, "Quantity is required");
  switch (param.type) {
    case "NewAuctionListing":
      {
        invariant(param.reservePricePerToken !== undefined && param.reservePricePerToken !== null, "Reserve price is required");
      }
  }
}

/**
 * Maps a contract offer to the strict interface
 *
 * @internal
 * @param offer - The offer to map
 * @returns  An `Offer` object
 */
async function mapOffer(provider, listingId, offer) {
  return {
    quantity: offer.quantityDesired,
    pricePerToken: offer.pricePerToken,
    currencyContractAddress: offer.currency,
    buyerAddress: offer.offeror,
    quantityDesired: offer.quantityWanted,
    currencyValue: await fetchCurrencyValue(provider, offer.currency, offer.quantityWanted.mul(offer.pricePerToken)),
    listingId
  };
}
function isWinningBid(winningPrice, newBidPrice, bidBuffer) {
  bidBuffer = BigNumber.from(bidBuffer);
  winningPrice = BigNumber.from(winningPrice);
  newBidPrice = BigNumber.from(newBidPrice);
  if (winningPrice.eq(BigNumber.from(0))) {
    return false;
  }
  const buffer = newBidPrice.sub(winningPrice).mul(MAX_BPS).div(winningPrice);
  return buffer.gte(bidBuffer);
}
async function getAllInBatches(start, end, fn) {
  const batches = [];
  while (end - start > DEFAULT_QUERY_ALL_COUNT) {
    batches.push(fn(start, start + DEFAULT_QUERY_ALL_COUNT - 1));
    start += DEFAULT_QUERY_ALL_COUNT;
  }
  batches.push(fn(start, end - 1));
  return await Promise.all(batches);
}

export { isTokenApprovedForTransfer as a, getAllInBatches as g, handleTokenApproval as h, isWinningBid as i, mapOffer as m, validateNewListingParam as v };
//# sourceMappingURL=marketplace-302aa6cf.esm-b6b89b14.js.map