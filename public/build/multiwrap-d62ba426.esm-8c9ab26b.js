import { b3 as MULTIWRAP_CONTRACT_ROLES, r as ContractWrapper, s as AbiSchema, b4 as MultiwrapContractSchema, t as ContractEncoder, aL as fetchCurrencyMetadata, J as formatUnits, y as buildTransactionFunction, Q as resolveAddress, T as Transaction, a0 as normalizePriceValue } from './App-40ca2dcc.js';
import { h as hasERC20Allowance } from './hasERC20Allowance-65f8230f.esm-61a2d5df.js';
import { a as isTokenApprovedForTransfer } from './marketplace-302aa6cf.esm-b6b89b14.js';
import { b as uploadOrExtractURI } from './QueryParams-fc338c68.esm-688d9d17.js';
import { C as ContractMetadata, a as ContractAppURI, G as GasCostEstimator, b as ContractEvents } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { C as ContractRoyalty, a as ContractOwner } from './contract-owner-9927b217.esm-6d4d11af.js';
import { C as ContractRoles } from './contract-roles-107ca68a.esm-c3cfe3db.js';
import { S as StandardErc721 } from './erc-721-standard-ea5aa41f.esm-cd0f49d7.js';
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
import './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import './index-6571f75f.js';
import './assertEnabled-1fa10adb.esm-79af49b9.js';
import './erc-721-ec9e393b.esm-3814a273.js';
import './drop-claim-conditions-81dea1f0.esm-7343e592.js';

/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */
// TODO create extension wrappers for this
class Multiwrap extends StandardErc721 {
  static contractRoles = MULTIWRAP_CONTRACT_ROLES;

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

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, MultiwrapContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Multiwrap.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.owner = new ContractOwner(this.contractWrapper);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */
  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.read("getWrappedContents", [wrappedTokenId]);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];
    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0:
          {
            const tokenMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), token.assetContract);
            erc20Tokens.push({
              contractAddress: token.assetContract,
              quantity: formatUnits(token.totalAmount, tokenMetadata.decimals)
            });
            break;
          }
        case 1:
          {
            erc721Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId
            });
            break;
          }
        case 2:
          {
            erc1155Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId,
              quantity: token.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
   * @example
   * ```javascript
   * const tx = await contract.wrap({
   *   erc20Tokens: [{
   *     contractAddress: "0x...",
   *     quantity: "0.8"
   *   }],
   *   erc721Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "0"
   *   }],
   *   erc1155Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "1",
   *     quantity: "2"
   *   }]
   * }, {
   *     name: "Wrapped bundle",
   *     description: "This is a wrapped bundle of tokens and NFTs",
   *     image: "ipfs://...",
   * });
   * const receipt = tx.receipt(); // the transaction receipt
   * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
   * ```
   * @param contents - the contents to wrap
   * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the wrapped token bundle to
   */
  wrap = /* @__PURE__ */buildTransactionFunction(async (contents, wrappedTokenMetadata, recipientAddress) => {
    const [uri, tokens, recipient] = await Promise.all([uploadOrExtractURI(wrappedTokenMetadata, this.storage), this.toTokenStructList(contents), resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress())]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "wrap",
      args: [tokens, uri, recipient],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensWrapped", receipt?.logs);
        if (event.length === 0) {
          throw new Error("TokensWrapped event not found");
        }
        const tokenId = event[0].args.tokenIdOfWrappedToken;
        return {
          id: tokenId,
          receipt,
          data: () => this.get(tokenId)
        };
      }
    });
  });

  /**
   * Unwrap a wrapped token bundle, and retrieve its contents
   * @example
   * ```javascript
   * await contract.unwrap(wrappedTokenId);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the unwrapped tokens to
   */
  unwrap = /* @__PURE__ */buildTransactionFunction(async (wrappedTokenId, recipientAddress) => {
    const recipient = await resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "unwrap",
      args: [wrappedTokenId, recipient]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await normalizePriceValue(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await hasERC20Allowance(this.contractWrapper, erc20.contractAddress, normalizedQuantity);
        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});\n\n`);
        }
        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }
    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
        }
        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }
    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
        }
        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }
    return tokens;
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

export { Multiwrap };
//# sourceMappingURL=multiwrap-d62ba426.esm-8c9ab26b.js.map
