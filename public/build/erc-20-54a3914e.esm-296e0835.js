import { bv as FEATURE_TOKEN, aL as fetchCurrencyMetadata, Q as resolveAddress, y as buildTransactionFunction, T as Transaction, t as ContractEncoder, bw as FEATURE_TOKEN_MINTABLE, bx as FEATURE_TOKEN_BATCH_MINTABLE, by as FEATURE_TOKEN_BURNABLE, bz as FEATURE_TOKEN_CLAIM_CONDITIONS_V2, bA as FEATURE_TOKEN_SIGNATURE_MINTABLE, aI as fetchCurrencyValue, B as BigNumber, aG as parseUnits, au as AmountSchema, a5 as invariant, a0 as normalizePriceValue, al as CustomContractSchema } from './App-40ca2dcc.js';
import { a as assertEnabled } from './assertEnabled-1fa10adb.esm-79af49b9.js';
import { d as detectContractFeature, C as ContractMetadata } from './contract-appuri-c2530b2f.esm-788c6d8f.js';
import { D as DropClaimConditions } from './drop-claim-conditions-81dea1f0.esm-7343e592.js';
import { s as setErc20Allowance } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';
import { q as Signature20PayloadInput, r as Signature20PayloadOutput, s as MintRequest20 } from './index-6571f75f.js';

/**
 * @internal
 */
async function normalizeAmount(contractWrapper, amount) {
  const decimals = await contractWrapper.read("decimals", []);
  return parseUnits(AmountSchema.parse(amount), decimals);
}

/**
 * @internal
 */
class Erc20Burnable {
  featureName = FEATURE_TOKEN_BURNABLE.name;
  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
  }

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
   * await contract.token.burn.tokens(amount);
   * ```
   */
  tokens = /* @__PURE__ */buildTransactionFunction(async amount => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [await this.erc20.normalizeAmount(amount)]
    });
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
   * await contract.token.burn.from(holderAddress, amount);
   * ```
   */
  from = /* @__PURE__ */buildTransactionFunction(async (holder, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burnFrom",
      args: await Promise.all([resolveAddress(holder), this.erc20.normalizeAmount(amount)])
    });
  });
}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */

class Erc20ClaimableWithConditions {
  featureName = FEATURE_TOKEN_CLAIM_CONDITIONS_V2.name;
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
   * await contract.token.drop.claim.conditions.set(claimConditions);
   * ```
   */

  constructor(erc20, contractWrapper, storage) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
  }

  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.token.drop.claim.to(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional, data to pass to the claim function
   * @returns  The transaction receipt
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, amount, options) => {
    const quantity = await this.erc20.normalizeAmount(amount);
    return await this.conditions.getClaimTransaction(destinationAddress, quantity, options);
  });
}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */

class Erc20Droppable {
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
   * await contract.nft.drop.claim.conditions.set(claimConditions);
   * ```
   */

  constructor(erc20, contractWrapper, storage) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.claim = new Erc20ClaimableWithConditions(this.erc20, this.contractWrapper, this.storage);
  }
}

/**
 * Mint Many ERC20 Tokens at once
 * @remarks Token batch minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @internal
 */
class Erc20BatchMintable {
  featureName = FEATURE_TOKEN_BATCH_MINTABLE.name;
  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
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
   * await contract.token.mint.batch(data);
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async args => {
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const _items = await Promise.all(args.map(item => Promise.all([resolveAddress(item.toAddress), this.erc20.normalizeAmount(item.amount)])));
    const encoded = _items.map(_ref => {
      let [address, amount] = _ref;
      return contractEncoder.encode("mintTo", [address, amount]);
    });
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });
}

/**
 * Mint ERC20 Tokens
 * @remarks Token minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc20Mintable {
  featureName = FEATURE_TOKEN_MINTABLE.name;

  /**
   * Batch mint Tokens to many addresses
   */

  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.batch = this.detectErc20BatchMintable();
  }

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.token.mint.to(toAddress, amount);
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, amount) => {
    return await this.getMintTransaction(to, amount);
  });

  /**
   * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: await Promise.all([resolveAddress(to), this.erc20.normalizeAmount(amount)])
    });
  }
  detectErc20BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20BatchMintable")) {
      return new Erc20BatchMintable(this.erc20, this.contractWrapper);
    }
    return undefined;
  }
}

/**
 * Enables generating ERC20 Tokens with rules and an associated signature, which can then be minted by anyone securely
 * @erc20
 * @public
 */
// TODO consolidate into a single class

class Erc20SignatureMintable {
  featureName = FEATURE_TOKEN_SIGNATURE_MINTABLE.name;
  constructor(contractWrapper, roles) {
    this.contractWrapper = contractWrapper;
    this.roles = roles;
  }

  /**
   * Mint tokens from a signature
   *
   * @remarks Mint a certain amount of tokens from a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc20.signature.generate(payload);
   *
   * // Use the signed payload to mint the tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc20SignatureMintable.generate}
   * @twfeature ERC20SignatureMintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const [message, overrides] = await Promise.all([this.mapPayloadToContractStruct(mintRequest), this.contractWrapper.getCallOverrides()]);
    // TODO: Transaction Sequence Pattern
    await setErc20Allowance(this.contractWrapper, BigNumber.from(message.price), mintRequest.currencyAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintWithSignature",
      args: [message, signature],
      overrides
    });
  });

  /**
   * Mint any number of generated tokens signatures at once
   * @remarks Mint multiple token signatures in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC20SignatureMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const messages = await Promise.all(signedPayloads.map(s => this.mapPayloadToContractStruct(s.payload)));
    const contractPayloads = signedPayloads.map((s, index) => {
      const message = messages[index];
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
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC20SignatureMintable
   *
   * ```javascript
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   quantity: 4.2, // The quantity of tokens to be minted
   *   to: {{wallet_address}}, // Who will receive the tokens
   *   price: 0.5, // the price to pay for minting those tokens
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now,
   *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
   * };
   *
   * const signedPayload = await contract.erc20.signature.generate(payload);
   * // Now you can verify if the signed payload is valid
   * const isValid = await contract.erc20.signature.verify(signedPayload);
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
   * Generate a signature that can be used to mint a certain amount of tokens
   *
   * @remarks Takes in a quantity of tokens, some conditions for how it can be minted and signs it with your private key. The generated signature can then be used to mint those tokens using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   quantity: 4.2, // The quantity of tokens to be minted
   *   to: {{wallet_address}}, // Who will receive the tokens
   *   price: 0.5, // the price to pay for minting those tokens
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now,
   *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
   * };
   *
   * const signedPayload = await contract.erc20.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc20.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns The signed payload and the corresponding signature
   * @twfeature ERC20SignatureMintable
   */
  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }

  /**
   * Generate a batch of signatures that can be used to mint many token signatures.
   *
   * @remarks See {@link Erc20SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns An array of payloads and signatures
   * @twfeature ERC20SignatureMintable
   */
  async generateBatch(payloadsToSign) {
    await this.roles?.verify(["minter"], await this.contractWrapper.getSignerAddress());
    const [chainId, name, parsedRequests] = await Promise.all([this.contractWrapper.getChainID(), this.contractWrapper.read("name", []),
    // ERC20Permit (EIP-712) spec differs from signature mint 721, 1155.
    Promise.all(payloadsToSign.map(m => Signature20PayloadInput.parseAsync(m)))]);
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    const finalPayloads = await Promise.all(parsedRequests.map(m => Signature20PayloadOutput.parseAsync(m)));
    const contractStructs = await Promise.all(finalPayloads.map(payload => this.mapPayloadToContractStruct(payload)));
    const signatures = await Promise.all(contractStructs.map(struct => this.contractWrapper.signTypedData(signer, {
      name,
      version: "1",
      chainId,
      verifyingContract: this.contractWrapper.address
    }, {
      MintRequest: MintRequest20
    }, struct)));
    return parsedRequests.map((m, index) => {
      const finalPayload = finalPayloads[index];
      const signature = signatures[index];
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    });
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
    const [normalizedPrice, decimals] = await Promise.all([normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress), this.contractWrapper.read("decimals", [])]);
    const amountWithDecimals = parseUnits(mintRequest.quantity, decimals);
    return {
      to: mintRequest.to,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      quantity: amountWithDecimals,
      price: normalizedPrice,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid
    };
  }
}

/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc20.transfer(walletAddress, amount);
 * ```
 * @erc20
 * @public
 */
class Erc20 {
  featureName = FEATURE_TOKEN.name;
  /**
   * Mint tokens
   */

  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.mintable = this.detectErc20Mintable();
    this.burnable = this.detectErc20Burnable();
    this.droppable = this.detectErc20Droppable();
    this.signatureMintable = this.detectErc20SignatureMintable();
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  ////// Standard ERC20 Extension //////

  /**
   * Get the token metadata
   * @remarks name, symbol, etc...
   * @example
   * ```javascript
   * const token = await contract.erc20.get();
   * ```
   * @returns The token metadata
   * @twfeature ERC20
   */
  async get() {
    return await fetchCurrencyMetadata(this.contractWrapper.getProvider(), this.getAddress());
  }

  /**
   * Get token balance for the currently connected wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const balance = await contract.erc20.balance();
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */
  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get token balance for a specific wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc20.balanceOf(walletAddress);
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */
  async balanceOf(address) {
    return this.getValue(await this.contractWrapper.read("balanceOf", [await resolveAddress(address)]));
  }

  /**
   * Get the total supply for this token
   * @remarks Get how much supply has been minted
   * @example
   * ```javascript
   * const balance = await contract.erc20.totalSupply();
   * ```
   * @twfeature ERC20
   */
  async totalSupply() {
    return await this.getValue(await this.contractWrapper.read("totalSupply", []));
  }

  /**
   * Get token allowance
   *
   * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token allowance
   * const spenderAddress = "0x...";
   * const allowance = await contract.erc20.allowance(spenderAddress);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */
  async allowance(spender) {
    const [owner, spenderAddress] = await Promise.all([this.contractWrapper.getSignerAddress(), resolveAddress(spender)]);
    return await this.allowanceOf(owner, spenderAddress);
  }

  /**
   * Get token allowance of a specific wallet
   *
   * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet who owns the funds
   * const owner = "{{wallet_address}}";
   * // Address of the wallet to check token allowance
   * const spender = "0x...";
   * const allowance = await contract.erc20.allowanceOf(owner, spender);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */
  async allowanceOf(owner, spender) {
    const args = await Promise.all([resolveAddress(owner), resolveAddress(spender)]);
    return await this.getValue(await this.contractWrapper.read("allowance", args));
  }

  /**
   * Transfer tokens
   *
   * @remarks Transfer tokens from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The amount of tokens you want to send
   * const amount = 0.1;
   * await contract.erc20.transfer(toAddress, amount);
   * ```
   * @twfeature ERC20
   */
  transfer = /* @__PURE__ */buildTransactionFunction(async (to, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transfer",
      args: await Promise.all([resolveAddress(to), this.normalizeAmount(amount)])
    });
  });

  /**
   * Transfer tokens from a specific address
   *
   * @remarks Transfer tokens from one wallet to another
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const fromAddress = "{{wallet_address}}";
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The number of tokens you want to send
   * const amount = 1.2
   * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
   * await contract.erc20.transferFrom(fromAddress, toAddress, amount);
   * ```
   * @twfeature ERC20
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction(async (from, to, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom",
      args: await Promise.all([resolveAddress(from), resolveAddress(to), this.normalizeAmount(amount)])
    });
  });

  /**
   * Set token allowance
   * @remarks Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
   * @example
   * ```javascript
   * // Address of the wallet to allow transfers from
   * const spenderAddress = "0x...";
   * // The number of tokens to give as allowance
   * const amount = 100
   * await contract.erc20.setAllowance(spenderAddress, amount);
   * ```
   * @twfeature ERC20
   */
  setAllowance = /* @__PURE__ */buildTransactionFunction(async (spender, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approve",
      args: await Promise.all([resolveAddress(spender), this.normalizeAmount(amount)])
    });
  });

  /**
   * Transfer tokens to many wallets
   *
   * @remarks Mint tokens from the connected wallet to many wallets
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 100, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 100,
   *  }
   * ]
   *
   * await contract.erc20.transferBatch(data);
   * ```
   */
  transferBatch = /* @__PURE__ */buildTransactionFunction(async args => {
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = (await Promise.all(args.map(arg => Promise.all([this.normalizeAmount(arg.amount), resolveAddress(arg.toAddress)])))).map(_ref => {
      let [amountWithDecimals, address] = _ref;
      return contractEncoder.encode("transfer", [address, amountWithDecimals]);
    });
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  ////// ERC20 Mintable Extension //////

  /**
   * Mint tokens
   *
   * @remarks Mint tokens to the connected wallet.
   *
   * @example
   * ```javascript
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mint(amount);
   * ```
   * @twfeature ERC20Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async amount => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), amount);
  });

  /**
   * Mint tokens to a specific wallet
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mintTo(toAddress, amount);
   * ```
   * @twfeature ERC20Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, amount) => {
    return assertEnabled(this.mintable, FEATURE_TOKEN_MINTABLE).to.prepare(receiver, amount);
  });

  /**
   * Construct a mint transaction without executing it
   * @remarks This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
   * @twfeature ERC20Mintable
   */
  async getMintTransaction(receiver, amount) {
    return assertEnabled(this.mintable, FEATURE_TOKEN_MINTABLE).getMintTransaction(receiver, amount);
  }

  ////// ERC20 BatchMintable Extension //////

  /**
   * Mint tokens to many wallets
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
   * @twfeature ERC20BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async args => {
    return assertEnabled(this.mintable?.batch, FEATURE_TOKEN_BATCH_MINTABLE).to.prepare(args);
  });

  ////// ERC20 Burnable Extension //////

  /**
   * Burn tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.erc20.burn(amount);
   * ```
   * @twfeature ERC20Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async amount => {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).tokens.prepare(amount);
  });

  /**
   * Burn tokens from a specific wallet
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
   * await contract.erc20.burnFrom(holderAddress, amount);
   * ```
   * @twfeature ERC20Burnable
   */
  burnFrom = /* @__PURE__ */buildTransactionFunction(async (holder, amount) => {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).from.prepare(holder, amount);
  });

  ////// ERC20 Claimable Extension //////

  /**
   * Claim tokens
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional, claim data
   * @returns  The transaction receipt
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (amount, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), amount, options);
  });

  /**
   * Claim tokens to a specific wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional, claim data
   * @returns  The transaction receipt
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, amount, options) => {
    return assertEnabled(this.droppable?.claim, FEATURE_TOKEN_CLAIM_CONDITIONS_V2).to.prepare(destinationAddress, amount, options);
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
   * await contract.erc20.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.droppable?.claim, FEATURE_TOKEN_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC20 SignatureMint Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic tokens with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc20.signature.generate()` documentation
   * const signedPayload = contract.erc20.signature().generate(payload);
   *
   * // now the payload can be used to mint tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @twfeature ERC20SignatureMintable
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_TOKEN_SIGNATURE_MINTABLE);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * returns the wei amount from a token amount
   * @internal
   * @param amount - The token amount
   */
  async normalizeAmount(amount) {
    return normalizeAmount(this.contractWrapper, amount);
  }

  /**
   * @internal
   */
  async getValue(value) {
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), this.getAddress(), BigNumber.from(value));
  }
  detectErc20Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20Mintable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc20Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC20Burnable")) {
      return new Erc20Burnable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc20Droppable() {
    if (detectContractFeature(this.contractWrapper, "ERC20ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC20ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC20ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC20ClaimPhasesV2")) {
      return new Erc20Droppable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc20SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20SignatureMintable")) {
      return new Erc20SignatureMintable(this.contractWrapper);
    }
    return undefined;
  }
}

export { Erc20 as E, Erc20SignatureMintable as a };
//# sourceMappingURL=erc-20-54a3914e.esm-296e0835.js.map
