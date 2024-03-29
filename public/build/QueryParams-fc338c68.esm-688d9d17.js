import { a as CommonNFTOutput, C as CommonNFTInput } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import { az as arrayify, B as BigNumber, as as hexZeroPad, $ as Contract } from './App-40ca2dcc.js';

/**
 * @internal
 */

/**
 * @internal
 */
const InterfaceId_IERC721 = /* @__PURE__ */(() => arrayify("0x80ac58cd"))();

/**
 * @internal
 */
const InterfaceId_IERC1155 = /* @__PURE__ */(() => arrayify("0xd9b67a26"))();

const FALLBACK_METADATA = {
  name: "Failed to load NFT metadata"
};

/**
 * fetches the token metadata
 * @param tokenId - the id (to get it back in the output)
 * @param tokenUri - the uri to fetch
 * @param storage - which storage to fetch from
 *
 * @internal
 */
async function fetchTokenMetadata(tokenId, tokenUri, storage) {
  // check for base64 encoded JSON
  if (tokenUri.startsWith("data:application/json;base64") && typeof Buffer !== "undefined") {
    const base64 = tokenUri.split(",")[1];
    const jsonMetadata = JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
    return CommonNFTOutput.parse({
      ...jsonMetadata,
      id: BigNumber.from(tokenId).toString(),
      uri: tokenUri
    });
  }
  // handle dynamic id URIs (2 possible formats)
  const parsedUri = tokenUri.replace("{id}", hexZeroPad(BigNumber.from(tokenId).toHexString(), 32).slice(2));
  let jsonMetadata;
  try {
    jsonMetadata = await storage.downloadJSON(parsedUri);
  } catch (err) {
    const unparsedTokenIdUri = tokenUri.replace("{id}", BigNumber.from(tokenId).toString());
    try {
      jsonMetadata = await storage.downloadJSON(unparsedTokenIdUri);
    } catch (e) {
      console.warn(`failed to get token metadata: ${JSON.stringify({
        tokenId: tokenId.toString(),
        tokenUri
      })} -- falling back to default metadata`);
      jsonMetadata = FALLBACK_METADATA;
    }
  }
  return CommonNFTOutput.parse({
    ...jsonMetadata,
    id: BigNumber.from(tokenId).toString(),
    uri: tokenUri
  });
}

// Used for marketplace to fetch NFT metadata from contract address + tokenId
/**
 * @internal
 * @param contractAddress - the contract address
 * @param provider - the provider to use
 * @param tokenId - the token id
 * @param storage - the storage to use
 */
async function fetchTokenMetadataForContract(contractAddress, provider, tokenId, storage) {
  let uri;
  const ERC165MetadataAbi = (await import('./IERC165-d67b8364.js')).default;
  const erc165 = new Contract(contractAddress, ERC165MetadataAbi, provider);
  const [isERC721, isERC1155] = await Promise.all([erc165.supportsInterface(InterfaceId_IERC721), erc165.supportsInterface(InterfaceId_IERC1155)]);
  if (isERC721) {
    const ERC721MetadataAbi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dl; })).default;
    const erc721 = new Contract(contractAddress, ERC721MetadataAbi, provider);
    uri = await erc721.tokenURI(tokenId);
  } else if (isERC1155) {
    const ERC1155MetadataAbi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dn; })).default;
    const erc1155 = new Contract(contractAddress, ERC1155MetadataAbi, provider);
    uri = await erc1155.uri(tokenId);
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
  if (!uri) {
    // no uri found, return fallback metadata
    return CommonNFTOutput.parse({
      ...FALLBACK_METADATA,
      id: BigNumber.from(tokenId).toString(),
      uri: ""
    });
  }
  return fetchTokenMetadata(tokenId, uri, storage);
}

/**
 * @internal
 * @param metadata - the metadata to upload
 * @param storage - the storage to use
 */
async function uploadOrExtractURI(metadata, storage) {
  if (typeof metadata === "string") {
    return metadata;
  } else {
    return await storage.upload(CommonNFTInput.parse(metadata));
  }
}

/**
 * @internal
 * @param metadatas - the metadata to upload
 * @param storage - the storage to use
 * @param startNumber - the number to start the file names at
 * @param contractAddress - the contract address
 * @param signerAddress - the signer address
 * @param options - options
 */
async function uploadOrExtractURIs(metadatas, storage, startNumber, options) {
  if (isUriList(metadatas)) {
    return metadatas;
  } else if (isMetadataList(metadatas)) {
    const uris = await storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      rewriteFileNames: {
        fileStartNumber: startNumber || 0
      },
      onProgress: options?.onProgress
    });
    return uris;
  } else {
    throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)");
  }
}
function getBaseUriFromBatch(uris) {
  const baseUri = uris[0].substring(0, uris[0].lastIndexOf("/"));
  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i].substring(0, uris[i].lastIndexOf("/"));
    if (baseUri !== uri) {
      throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
    }
  }

  // Ensure that baseUri ends with trailing slash
  return baseUri.replace(/\/$/, "") + "/";
}
function isUriList(metadatas) {
  return metadatas.find(m => typeof m !== "string") === undefined;
}
function isMetadataList(metadatas) {
  return metadatas.find(m => typeof m !== "object") === undefined;
}

/**
 * @internal
 */
const DEFAULT_QUERY_ALL_COUNT = 100;

export { DEFAULT_QUERY_ALL_COUNT as D, FALLBACK_METADATA as F, InterfaceId_IERC721 as I, fetchTokenMetadata as a, uploadOrExtractURI as b, InterfaceId_IERC1155 as c, fetchTokenMetadataForContract as f, getBaseUriFromBatch as g, uploadOrExtractURIs as u };
//# sourceMappingURL=QueryParams-fc338c68.esm-688d9d17.js.map
