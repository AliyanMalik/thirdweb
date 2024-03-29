import { C as Connector, g as getChainProvider, cI as ENTRYPOINT_ADDRESS, e as getAddress, cJ as resolveProperties, x as AddressZero, B as BigNumber, cK as ThirdwebSDK, V as toUtf8Bytes, cL as getGasPrice, I as formatEther, cM as dist, cN as LOCAL_NODE_PKEY, cO as ACCOUNT_CORE_ABI, cP as hexConcat, az as arrayify, cQ as setAnalyticsHeaders, cR as JsonRpcProvider, cS as BaseProvider, i as hexValue, a as _defineProperty, cT as getDynamicFeeData, cU as c42220, cV as c44787, cW as c62320, aM as keccak256, Y as defaultAbiCoder, p as Signer, cD as defineReadOnly, cX as concat } from './App-40ca2dcc.js';
import { i as isTwUrl } from './url-0d129c6b.esm-6ec49aa3.js';
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

async function hexlifyUserOp(op) {
  const userOp = await resolveProperties(op);
  return Object.keys(userOp).map(key => {
    let val = userOp[key];
    if (typeof val !== "string" || !val.startsWith("0x")) {
      val = hexValue(val);
    }
    return [key, val];
  }).reduce((set, _ref) => {
    let [k, v] = _ref;
    return {
      ...set,
      [k]: v
    };
  }, {});
}

// v0.6 userOpHash calculation
async function getUserOpHashV06(userOp, entryPoint, chainId) {
  const op = await resolveProperties(userOp);
  const hashedUserOp = {
    sender: op.sender,
    nonce: op.nonce,
    initCodeHash: keccak256(op.initCode),
    callDataHash: keccak256(op.callData),
    callGasLimit: op.callGasLimit,
    verificationGasLimit: op.verificationGasLimit,
    preVerificationGas: op.preVerificationGas,
    maxFeePerGas: op.maxFeePerGas,
    maxPriorityFeePerGas: op.maxPriorityFeePerGas,
    paymasterAndDataHash: keccak256(op.paymasterAndData)
  };
  const userOpType = {
    components: [{
      type: "address",
      name: "sender"
    }, {
      type: "uint256",
      name: "nonce"
    }, {
      type: "bytes32",
      name: "initCodeHash"
    }, {
      type: "bytes32",
      name: "callDataHash"
    }, {
      type: "uint256",
      name: "callGasLimit"
    }, {
      type: "uint256",
      name: "verificationGasLimit"
    }, {
      type: "uint256",
      name: "preVerificationGas"
    }, {
      type: "uint256",
      name: "maxFeePerGas"
    }, {
      type: "uint256",
      name: "maxPriorityFeePerGas"
    }, {
      type: "bytes32",
      name: "paymasterAndDataHash"
    }],
    name: "hashedUserOp",
    type: "tuple"
  };
  const encoded = defaultAbiCoder.encode([userOpType], [{
    ...hashedUserOp
  }]);
  // remove leading word (total length) and trailing word (zero-length signature)

  const userOpHash = keccak256(encoded);
  const enc = defaultAbiCoder.encode(["bytes32", "address", "uint256"], [userOpHash, entryPoint, chainId]);
  return keccak256(enc);
}
const generateRandomUint192 = () => {
  const rand1 = BigInt(Math.floor(Math.random() * 0x100000000));
  const rand2 = BigInt(Math.floor(Math.random() * 0x100000000));
  const rand3 = BigInt(Math.floor(Math.random() * 0x100000000));
  const rand4 = BigInt(Math.floor(Math.random() * 0x100000000));
  const rand5 = BigInt(Math.floor(Math.random() * 0x100000000));
  const rand6 = BigInt(Math.floor(Math.random() * 0x100000000));
  return rand1 << BigInt(160) | rand2 << BigInt(128) | rand3 << BigInt(96) | rand4 << BigInt(64) | rand5 << BigInt(32) | rand6;
};
const randomNonce = () => {
  let hexString = generateRandomUint192().toString(16);
  if (hexString.length % 2 !== 0) {
    hexString = "0" + hexString;
  }
  hexString = "0x" + hexString;
  return BigNumber.from(concat([hexString, "0x0000000000000000"]));
};

/**
 * an API to external a UserOperation with paymaster info
 */
class PaymasterAPI {}

class HttpRpcClient {
  constructor(bundlerUrl, entryPointAddress, chainId, clientId, secretKey) {
    this.bundlerUrl = bundlerUrl;
    this.entryPointAddress = entryPointAddress;
    this.chainId = chainId;
    const headers = {};
    if (isTwUrl(this.bundlerUrl)) {
      const bundleId = typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? globalThis.APP_BUNDLE_ID : undefined;
      if (secretKey) {
        headers["x-secret-key"] = secretKey;
      } else if (clientId) {
        headers["x-client-id"] = clientId;
        if (bundleId) {
          headers["x-bundle-id"] = bundleId;
        }
      }

      // Dashboard token
      if (typeof globalThis !== "undefined" && "TW_AUTH_TOKEN" in globalThis && typeof globalThis.TW_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_AUTH_TOKEN}`;
      }

      // CLI token
      if (typeof globalThis !== "undefined" && "TW_CLI_AUTH_TOKEN" in globalThis && typeof globalThis.TW_CLI_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`;
        headers["x-authorize-wallet"] = "true";
      }
      setAnalyticsHeaders(headers);
    }
    this.userOpJsonRpcProvider = new JsonRpcProvider({
      url: this.bundlerUrl,
      headers
    }, {
      name: "Connected bundler network",
      chainId
    });
    this.initializing = this.validateChainId();
  }
  async validateChainId() {
    // validate chainId is in sync with expected chainid
    const chain = await this.userOpJsonRpcProvider.send("eth_chainId", []);
    const bundlerChain = parseInt(chain);
    if (bundlerChain !== this.chainId) {
      throw new Error(`bundler ${this.bundlerUrl} is on chainId ${bundlerChain}, but provider is on chainId ${this.chainId}`);
    }
  }

  /**
   * send a UserOperation to the bundler
   * @param userOp1 - The UserOperation to send
   * @returns userOpHash the id of this operation, for getUserOperationTransaction
   */
  async sendUserOpToBundler(userOp1) {
    await this.initializing;
    const hexifiedUserOp = await hexlifyUserOp(userOp1);
    const jsonRequestData = [hexifiedUserOp, this.entryPointAddress];
    await this.printUserOperation("eth_sendUserOperation", jsonRequestData);
    return await this.userOpJsonRpcProvider.send("eth_sendUserOperation", [hexifiedUserOp, this.entryPointAddress]);
  }
  async estimateUserOpGas(userOp1) {
    await this.initializing;
    const hexifiedUserOp = await hexlifyUserOp(userOp1);
    const jsonRequestData = [hexifiedUserOp, this.entryPointAddress];
    await this.printUserOperation("eth_estimateUserOperationGas", jsonRequestData);
    return await this.userOpJsonRpcProvider.send("eth_estimateUserOperationGas", [hexifiedUserOp, this.entryPointAddress]);
  }
  async printUserOperation(method, _ref) {
    {
      return;
    }
  }
}

class VerifyingPaymasterAPI extends PaymasterAPI {
  constructor(paymasterUrl, entryPoint, clientId, secretKey) {
    super();
    this.paymasterUrl = paymasterUrl;
    this.entryPoint = entryPoint;
    this.clientId = clientId;
    this.secretKey = secretKey;
  }
  async getPaymasterAndData(userOp) {
    const headers = {
      "Content-Type": "application/json"
    };
    if (isTwUrl(this.paymasterUrl)) {
      if (this.secretKey && this.clientId) {
        throw new Error("Cannot use both secret key and client ID. Please use secretKey for server-side applications and clientId for client-side applications.");
      }
      if (this.secretKey) {
        headers["x-secret-key"] = this.secretKey;
      } else if (this.clientId) {
        headers["x-client-id"] = this.clientId;
        if (typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis) {
          headers["x-bundle-id"] = globalThis.APP_BUNDLE_ID;
        }
      }

      // Dashboard token.
      if (typeof globalThis !== "undefined" && "TW_AUTH_TOKEN" in globalThis && typeof globalThis.TW_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_AUTH_TOKEN}`;
      }

      // CLI token.
      if (typeof globalThis !== "undefined" && "TW_CLI_AUTH_TOKEN" in globalThis && typeof globalThis.TW_CLI_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`;
        headers["x-authorize-wallet"] = "true";
      }
      setAnalyticsHeaders(headers);
    }

    // Ask the paymaster to sign the transaction and return a valid paymasterAndData value.
    const response = await fetch(this.paymasterUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "pm_sponsorUserOperation",
        params: [await hexlifyUserOp(userOp), this.entryPoint]
      })
    });
    const res = await response.json();
    if (!response.ok) {
      const error = res.error || response.statusText;
      const code = res.code || "UNKNOWN";
      throw new Error(`Paymaster error: ${error}
Status: ${response.status}
Code: ${code}`);
    }
    if (res.result) {
      // some paymasters return a string, some return an object with more data
      if (typeof res.result === "string") {
        return {
          paymasterAndData: res.result
        };
      } else {
        return res.result;
      }
    } else {
      const error = res.error?.message || res.error || response.statusText || "unknown error";
      throw new Error(`Paymaster error from ${this.paymasterUrl}: ${error}`);
    }
  }
}
const getVerifyingPaymaster = (paymasterUrl, entryPoint, clientId, secretKey) => new VerifyingPaymasterAPI(paymasterUrl, entryPoint, clientId, secretKey);

/**
 * This class encapsulates Ethers.js listener function and necessary UserOperation details to
 * discover a TransactionReceipt for the operation.
 *
 * TODO refactor this to a simple event listener on the entry point
 */
class UserOperationEventListener {
  constructor(resolve, reject, entryPoint, sender, userOpHash, nonce, timeout) {
    this.resolve = resolve;
    this.reject = reject;
    this.entryPoint = entryPoint;
    this.sender = sender;
    this.userOpHash = userOpHash;
    this.nonce = nonce;
    this.timeout = timeout;
    _defineProperty(this, "resolved", false);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.boundLisener = this.listenerCallback.bind(this);
  }
  start() {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const filter = this.entryPoint.filters.UserOperationEvent(this.userOpHash);
    // listener takes time... first query directly:
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      const res = await this.entryPoint.queryFilter(filter, -10); // look at last 10 blocks
      if (res.length > 0) {
        void this.listenerCallback(res[0]);
      } else {
        this.entryPoint.once(filter, this.boundLisener);
      }
    }, 100);
  }
  stop() {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.entryPoint.off("UserOperationEvent", this.boundLisener);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async listenerCallback() {
    for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
      param[_key] = arguments[_key];
    }
    // TODO clean this up..
    // eslint-disable-next-line prefer-rest-params
    const event = arguments[arguments.length - 1];
    if (!event.args) {
      console.error("got event without args", event);
      return;
    }
    // TODO: can this happen? we register to event by userOpHash..
    if (event.args.userOpHash !== this.userOpHash) {
      console.log(`== event with wrong userOpHash: sender/nonce: event.${event.args.sender}@${event.args.nonce.toString()}!= userOp.${this.sender}@${parseInt(this.nonce?.toString())}`);
      return;
    }
    const transactionReceipt = await event.getTransactionReceipt();

    // before returning the receipt, update the status from the event.
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!event.args.success) {
      await this.extractFailureReason(transactionReceipt);
    }
    this.stop();
    this.resolve(transactionReceipt);
    this.resolved = true;
  }
  async extractFailureReason(receipt) {
    receipt.status = 0;
    const revertReasonEvents = await this.entryPoint.queryFilter(this.entryPoint.filters.UserOperationRevertReason(this.userOpHash, this.sender), receipt.blockHash);
    if (revertReasonEvents[0]) {
      let message = revertReasonEvents[0].args.revertReason;
      if (message.startsWith("0x08c379a0")) {
        // Error(string)
        message = defaultAbiCoder.decode(["string"], "0x" + message.substring(10)).toString();
      }
      this.reject(new Error(`UserOp failed with reason: ${message}`));
    }
  }
}

class ERC4337EthersSigner extends Signer {
  // TODO: we have 'erc4337provider', remove shared dependencies or avoid two-way reference
  constructor(config, originalSigner, erc4337provider, httpRpcClient, smartAccountAPI) {
    super();
    defineReadOnly(this, "provider", erc4337provider);
    this.config = config;
    this.originalSigner = originalSigner;
    this.erc4337provider = erc4337provider;
    this.httpRpcClient = httpRpcClient;
    this.smartAccountAPI = smartAccountAPI;
  }
  // This one is called by Contract. It signs the request and passes in to Provider to be sent.
  async sendTransaction(transaction, options) {
    const tx = await resolveProperties(transaction);
    await this.verifyAllNecessaryFields(tx);
    const multidimensionalNonce = randomNonce();
    const unsigned = await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient, {
      target: tx.to || "",
      data: tx.data?.toString() || "0x",
      value: tx.value,
      gasLimit: tx.gasLimit,
      nonce: multidimensionalNonce,
      maxFeePerGas: tx.maxFeePerGas,
      maxPriorityFeePerGas: tx.maxPriorityFeePerGas
    }, options);
    const userOperation = await this.smartAccountAPI.signUserOp(unsigned);
    const transactionResponse = await this.erc4337provider.constructUserOpTransactionResponse(userOperation);
    try {
      await this.httpRpcClient.sendUserOpToBundler(userOperation);
    } catch (error) {
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }
  unwrapError(errorIn) {
    try {
      let errorMsg = "Unknown Error";
      if (errorIn.error) {
        errorMsg = `The bundler has failed to include UserOperation in a batch: ${errorIn.error}`;
      } else if (errorIn.body && typeof errorIn.body === "string") {
        const errorBody = JSON.parse(errorIn.body);
        const errorStatus = errorIn.status || "UNKNOWN";
        const errorCode = errorBody?.code || "UNKNOWN";
        let failedOpMessage = errorBody?.error?.message || errorBody?.error?.data || errorBody?.error || errorIn.reason;
        if (failedOpMessage?.includes("FailedOp")) {
          let paymasterInfo = "";
          // TODO: better error extraction methods will be needed
          const matched = failedOpMessage.match(/FailedOp\((.*)\)/);
          if (matched) {
            const split = matched[1].split(",");
            paymasterInfo = `(paymaster address: ${split[1]})`;
            failedOpMessage = split[2];
          }
          errorMsg = `The bundler has failed to include UserOperation in a batch: ${failedOpMessage} ${paymasterInfo}`;
        } else {
          errorMsg = `RPC error: ${failedOpMessage}
Status: ${errorStatus}
Code: ${errorCode}`;
        }
      }
      const error = new Error(errorMsg);
      error.stack = errorIn.stack;
      return error;
    } catch (error) {}
    return errorIn;
  }
  async verifyAllNecessaryFields(transactionRequest) {
    if (!transactionRequest.to) {
      throw new Error("Missing call target");
    }
    if (!transactionRequest.data && !transactionRequest.value) {
      // TBD: banning no-op UserOps seems to make sense on provider level
      throw new Error("Missing call data or value");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connect(provider) {
    throw new Error("changing providers is not supported");
  }
  async getAddress() {
    if (!this.address) {
      this.address = await this.erc4337provider.getSenderAccountAddress();
    }
    return this.address;
  }
  async signMessage(message) {
    const isNotDeployed = await this.smartAccountAPI.checkAccountPhantom();
    if (isNotDeployed && this.config.deployOnSign) {
      console.log("Account contract not deployed yet. Deploying account before signing message");
      const tx = await this.sendTransaction({
        to: await this.getAddress(),
        data: "0x"
      });
      await tx.wait();
    }
    return await this.originalSigner.signMessage(message);
  }
  async signTransaction(transaction, options) {
    const tx = await resolveProperties(transaction);
    await this.verifyAllNecessaryFields(tx);
    const multidimensionalNonce = randomNonce();
    const unsigned = await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient, {
      target: tx.to || "",
      data: tx.data?.toString() || "0x",
      value: tx.value,
      gasLimit: tx.gasLimit,
      nonce: multidimensionalNonce
    }, options);
    const userOperation = await this.smartAccountAPI.signUserOp(unsigned);
    const userOpString = JSON.stringify(await hexlifyUserOp(userOperation));
    return userOpString;
  }
}

class ERC4337EthersProvider extends BaseProvider {
  constructor(chainId, config, originalSigner, originalProvider, httpRpcClient, entryPoint, smartAccountAPI) {
    super({
      name: "ERC-4337 Custom Network",
      chainId
    });
    this.chainId = chainId;
    this.config = config;
    this.originalSigner = originalSigner;
    this.originalProvider = originalProvider;
    this.httpRpcClient = httpRpcClient;
    this.entryPoint = entryPoint;
    this.smartAccountAPI = smartAccountAPI;
    this.signer = new ERC4337EthersSigner(config, originalSigner, this, httpRpcClient, smartAccountAPI);
  }
  getSigner() {
    return this.signer;
  }
  async perform(method, params) {
    if (method === "sendTransaction" || method === "getTransactionReceipt") {
      // TODO: do we need 'perform' method to be available at all?
      // there is nobody out there to use it for ERC-4337 methods yet, we have nothing to override in fact.
      throw new Error("Should not get here. Investigate.");
    }
    if (method === "estimateGas") {
      // gas estimation does nothing at this layer, sendTransaction will do the gas estimation for the userOp
      return BigNumber.from(500000);
    }
    return await this.originalProvider.perform(method, params);
  }
  async getTransaction(transactionHash) {
    // TODO
    return await super.getTransaction(transactionHash);
  }
  async getTransactionReceipt(transactionHash) {
    const userOpHash = await transactionHash;
    const sender = await this.getSenderAccountAddress();
    return await new Promise((resolve, reject) => {
      new UserOperationEventListener(resolve, reject, this.entryPoint, sender, userOpHash).start();
    });
  }
  async getSenderAccountAddress() {
    return await this.smartAccountAPI.getAccountAddress();
  }
  async waitForTransaction(transactionHash, confirmations, timeout) {
    const sender = await this.getSenderAccountAddress();
    return await new Promise((resolve, reject) => {
      const listener = new UserOperationEventListener(resolve, reject, this.entryPoint, sender, transactionHash, undefined, timeout);
      listener.start();
    });
  }

  // fabricate a response in a format usable by ethers users...
  async constructUserOpTransactionResponse(userOp1) {
    const userOp = await resolveProperties(userOp1);
    const userOpHash = await this.smartAccountAPI.getUserOpHash(userOp);
    const waitForUserOp = async () => await new Promise((resolve, reject) => {
      new UserOperationEventListener(resolve, reject, this.entryPoint, userOp.sender, userOpHash, userOp.nonce).start();
    });
    return {
      hash: userOpHash,
      confirmations: 0,
      from: userOp.sender,
      nonce: 0,
      // not the real nonce, but good enough for this purpose
      gasLimit: BigNumber.from(userOp.callGasLimit),
      // ??
      value: BigNumber.from(0),
      data: hexValue(userOp.callData),
      // should extract the actual called method from this "execFromEntryPoint()" call
      chainId: this.chainId,
      wait: async confirmations => {
        const transactionReceipt = await waitForUserOp();
        if (userOp.initCode.length !== 0) {
          // checking if the wallet has been deployed by the transaction; it must be if we are here
          await this.smartAccountAPI.checkAccountPhantom();
        }
        return transactionReceipt;
      }
    };
  }
  async detectNetwork() {
    return this.originalProvider.detectNetwork();
  }
}

/**
 * wrap an existing provider to tunnel requests through Account Abstraction.
 * @param originalProvider - The normal provider
 * @param config - see {@link ClientConfig} for more info
 * @param originalSigner - use this signer as the owner. of this wallet. By default, use the provider's signer
 */
function create4337Provider(config, accountApi, originalProvider, chainId) {
  const entryPoint = dist.EntryPoint__factory.connect(config.entryPointAddress, originalProvider);
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId, config.clientId, config.secretKey);
  return new ERC4337EthersProvider(chainId, config, config.localSigner, originalProvider, httpRpcClient, entryPoint, accountApi);
}

const DUMMY_SIGNATURE = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";

/**
 * Base class for all Smart Wallet ERC-4337 Clients to implement.
 * Subclass should inherit 5 methods to support a specific wallet contract:
 *
 * - getAccountInitCode - return the value to put into the "initCode" field, if the account is not yet deployed. should create the account instance using a factory contract.
 * - getNonce - return current account's nonce value
 * - encodeExecute - encode the call from entryPoint through our account to the target contract.
 * - signUserOpHash - sign the hash of a UserOp.
 *
 * The user can use the following APIs:
 * - createUnsignedUserOp - given "target" and "calldata", fill userOp to perform that operation from the account.
 * - createSignedUserOp - helper to call the above createUnsignedUserOp, and then extract the userOpHash and sign it
 */
class BaseAccountAPI {
  // entryPoint connected to "zero" address. allowed to make static calls (e.g. to getSenderAddress)

  /**
   * base constructor.
   * subclass SHOULD add parameters that define the owner (signer) of this wallet
   */
  constructor(params) {
    _defineProperty(this, "isPhantom", true);
    this.provider = params.provider;
    this.entryPointAddress = params.entryPointAddress;
    this.accountAddress = params.accountAddress;
    this.paymasterAPI = params.paymasterAPI;
    this.gasless = params.gasless;

    // factory "connect" define the contract address. the contract "connect" defines the "from" address.
    this.entryPointView = dist.EntryPoint__factory.connect(params.entryPointAddress, params.provider).connect(AddressZero);
  }

  /**
   * return the value to put into the "initCode" field, if the contract is not yet deployed.
   * this value holds the "factory" address, followed by this account's information
   */

  /**
   * return current account's nonce.
   */

  /**
   * encode the call from entryPoint through our account to the target contract.
   * @param target - The target contract address
   * @param value - The value to send to the target contract
   * @param data - The calldata to send to the target contract
   */

  /**
   * sign a userOp's hash (userOpHash).
   * @param userOpHash - The hash to sign
   */

  /**
   * calculate the account address even before it is deployed
   */

  /**
   * check if the contract is already deployed.
   */
  async checkAccountPhantom() {
    if (!this.isPhantom) {
      // already deployed. no need to check anymore.
      return this.isPhantom;
    }
    const senderAddressCode = await this.provider.getCode(this.getAccountAddress());
    if (senderAddressCode.length > 2) {
      this.isPhantom = false;
    }
    return this.isPhantom;
  }

  /**
   * return initCode value to into the UserOp.
   * (either deployment code, or empty hex if contract already deployed)
   */
  async getInitCode() {
    if (await this.checkAccountPhantom()) {
      return await this.getAccountInitCode();
    }
    return "0x";
  }

  /**
   * return maximum gas used for verification.
   * NOTE: createUnsignedUserOp will add to this value the cost of creation, if the contract is not yet created.
   */
  async getVerificationGasLimit() {
    return 100000;
  }

  /**
   * return userOpHash for signing.
   * This value matches entryPoint.getUserOpHash (calculated off-chain, to avoid a view call)
   * @param userOp - userOperation, (signature field ignored)
   */
  async getUserOpHash(userOp) {
    const chainId = await this.provider.getNetwork().then(net => net.chainId);
    return getUserOpHashV06(userOp, this.entryPointAddress, chainId);
  }

  /**
   * return the account's address.
   * this value is valid even before deploying the contract.
   */
  async getAccountAddress() {
    if (!this.senderAddress) {
      if (this.accountAddress) {
        this.senderAddress = this.accountAddress;
      } else {
        this.senderAddress = await this.getCounterFactualAddress();
      }
    }
    return this.senderAddress;
  }
  async estimateCreationGas(initCode) {
    if (!initCode || initCode === "0x") {
      return 0;
    }
    const deployerAddress = initCode.substring(0, 42);
    const deployerCallData = "0x" + initCode.substring(42);
    return await this.provider.estimateGas({
      to: deployerAddress,
      data: deployerCallData
    });
  }
  async createUnsignedUserOp(httpRpcClient, info, options) {
    // construct the userOp without gasLimit or preVerifictaionGas
    const initCode = await this.getInitCode();
    const value = parseNumber(info.value) ?? BigNumber.from(0);
    const callData = options?.batchData ? info.data : await this.prepareExecute(info.target, value, info.data).then(tx => tx.encode());
    let {
      maxFeePerGas,
      maxPriorityFeePerGas
    } = info;
    if (!maxFeePerGas || !maxPriorityFeePerGas) {
      const feeData = await getDynamicFeeData(this.provider);
      if (!maxPriorityFeePerGas) {
        maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? undefined;
      }
      if (!maxFeePerGas) {
        maxFeePerGas = feeData.maxFeePerGas ?? undefined;
        const network = await this.provider.getNetwork();
        const chainId = network.chainId;
        if (chainId === c42220.chainId || chainId === c44787.chainId || chainId === c62320.chainId) {
          maxPriorityFeePerGas = maxFeePerGas;
        }
      }
    }
    if (!maxFeePerGas || !maxPriorityFeePerGas) {
      throw new Error("maxFeePerGas or maxPriorityFeePerGas could not be calculated, please pass them explicitely");
    }
    const [sender, nonce] = await Promise.all([this.getAccountAddress(), info.nonce ? Promise.resolve(info.nonce) : this.getNonce()]);
    const partialOp = {
      sender,
      nonce,
      initCode,
      callData,
      maxFeePerGas,
      maxPriorityFeePerGas,
      callGasLimit: BigNumber.from(1000000),
      verificationGasLimit: BigNumber.from(1000000),
      preVerificationGas: BigNumber.from(1000000),
      paymasterAndData: "0x",
      signature: DUMMY_SIGNATURE
    };

    // paymaster data + maybe used for estimation as well
    const gasless = options?.gasless !== undefined ? options.gasless : this.gasless;
    if (gasless) {
      const paymasterResult = await this.paymasterAPI.getPaymasterAndData(partialOp);
      const paymasterAndData = paymasterResult.paymasterAndData;
      if (paymasterAndData && paymasterAndData !== "0x") {
        partialOp.paymasterAndData = paymasterAndData;
      }
      // paymaster can have the gas limits in the response
      if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas) {
        partialOp.callGasLimit = BigNumber.from(paymasterResult.callGasLimit);
        partialOp.verificationGasLimit = BigNumber.from(paymasterResult.verificationGasLimit);
        partialOp.preVerificationGas = BigNumber.from(paymasterResult.preVerificationGas);
      } else {
        // otherwise fallback to bundler for gas limits
        let estimates;
        try {
          estimates = await httpRpcClient.estimateUserOpGas(partialOp);
        } catch (error) {
          throw this.unwrapBundlerError(error);
        }
        partialOp.callGasLimit = BigNumber.from(estimates.callGasLimit);
        partialOp.verificationGasLimit = BigNumber.from(estimates.verificationGasLimit);
        partialOp.preVerificationGas = BigNumber.from(estimates.preVerificationGas);
        // need paymaster to re-sign after estimates
        if (paymasterAndData && paymasterAndData !== "0x") {
          const paymasterResult2 = await this.paymasterAPI.getPaymasterAndData(partialOp);
          if (paymasterResult2.paymasterAndData && paymasterResult2.paymasterAndData !== "0x") {
            partialOp.paymasterAndData = paymasterResult2.paymasterAndData;
          }
        }
      }
    } else {
      // query bundler for gas limits
      let estimates;
      try {
        estimates = await httpRpcClient.estimateUserOpGas(partialOp);
      } catch (error) {
        throw this.unwrapBundlerError(error);
      }
      partialOp.callGasLimit = BigNumber.from(estimates.callGasLimit);
      partialOp.verificationGasLimit = BigNumber.from(estimates.verificationGasLimit);
      partialOp.preVerificationGas = BigNumber.from(estimates.preVerificationGas);
    }
    return {
      ...partialOp,
      signature: ""
    };
  }

  /**
   * Sign the filled userOp.
   * @param userOp - The UserOperation to sign (with signature field ignored)
   */
  async signUserOp(userOp) {
    const userOpHash = await this.getUserOpHash(userOp);
    const signature = await this.signUserOpHash(userOpHash);
    return {
      ...userOp,
      signature
    };
  }

  /**
   * get the transaction that has this userOpHash mined, or null if not found
   * @param userOpHash - returned by sendUserOpToBundler (or by getUserOpHash..)
   * @param timeout - stop waiting after this timeout
   * @param interval - time to wait between polls.
   * @returns The transactionHash this userOp was mined, or null if not found.
   */
  async getUserOpReceipt(userOpHash) {
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;
    let interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
    const endtime = Date.now() + timeout;
    while (Date.now() < endtime) {
      const events = await this.entryPointView.queryFilter(this.entryPointView.filters.UserOperationEvent(userOpHash));
      if (events[0]) {
        return events[0].transactionHash;
      }
      await new Promise(resolve => setTimeout(resolve, interval));
    }
    return null;
  }
  unwrapBundlerError(error) {
    const message = error?.error?.message || error.error || error.message || error;
    return new Error(message);
  }
}
function parseNumber(a) {
  if (!a || a === "") {
    return null;
  }
  return BigNumber.from(a.toString());
}

class AccountAPI extends BaseAccountAPI {
  constructor(params, originalProvider) {
    super({
      ...params,
      provider: originalProvider
    });
    this.params = params;
    // Technically dont need the signer here, but we need to encode/estimate gas with it so a signer is required
    // We don't want to use the localSigner directly since it might be connected to another chain
    // so we just use the public hardhat pkey instead
    this.sdk = ThirdwebSDK.fromPrivateKey(LOCAL_NODE_PKEY, params.chain, {
      clientId: params.clientId,
      secretKey: params.secretKey,
      // @ts-expect-error expected chain type error
      supportedChains: typeof params.chain === "object" ? [params.chain] : undefined
    });
  }
  async getChainId() {
    return await this.provider.getNetwork().then(n => n.chainId);
  }
  async getAccountContract() {
    if (!this.accountContract) {
      if (this.params.accountInfo?.abi) {
        this.accountContract = await this.sdk.getContract(await this.getAccountAddress(), this.params.accountInfo.abi);
      } else {
        this.accountContract = await this.sdk.getContract(await this.getAccountAddress(), ACCOUNT_CORE_ABI);
      }
    }
    return this.accountContract;
  }
  async getAccountInitCode() {
    const factory = await this.getFactoryContract();
    console.log("Deploying smart wallet via factory");
    const localSigner = await this.params.localSigner.getAddress();
    const tx = await this.params.factoryInfo.createAccount(factory, localSigner);
    try {
      console.log("Cost to deploy smart wallet: ", (await tx.estimateGasCost()).ether, "ETH");
    } catch (e) {
      console.error("Cost to deploy smart wallet: unknown", e);
    }
    return hexConcat([factory.getAddress(), tx.encode()]);
  }
  async getFactoryContract() {
    if (this.factoryContract) {
      return this.factoryContract;
    }
    if (this.params.factoryInfo?.abi) {
      this.factoryContract = await this.sdk.getContract(this.params.factoryAddress, this.params.factoryInfo.abi);
    } else {
      this.factoryContract = await this.sdk.getContract(this.params.factoryAddress);
    }
    return this.factoryContract;
  }
  async getCounterFactualAddress() {
    if (this.params.accountAddress) {
      return this.params.accountAddress;
    }
    const factory = await this.getFactoryContract();
    const localSigner = await this.params.localSigner.getAddress();
    return this.params.factoryInfo.getAccountAddress(factory, localSigner);
  }
  async getNonce() {
    if (await this.checkAccountPhantom()) {
      return BigNumber.from(0);
    }
    const accountContract = await this.getAccountContract();
    return this.params.accountInfo.getNonce(accountContract);
  }
  async prepareExecute(target, value, data) {
    const accountContract = await this.getAccountContract();
    return this.params.accountInfo.execute(accountContract, target, value, data);
  }
  async prepareExecuteBatch(targets, values, datas) {
    const accountContract = await this.getAccountContract();
    return accountContract.prepare("executeBatch", [targets, values, datas]);
  }
  async signUserOpHash(userOpHash) {
    return await this.params.localSigner.signMessage(arrayify(userOpHash));
  }
  async isAcountDeployed() {
    return !(await this.checkAccountPhantom());
  }
}

class SmartWalletConnector extends Connector {
  constructor(config) {
    super();
    this.config = config;
  }
  async initialize(params) {
    const config = this.config;
    const originalProvider = getChainProvider(config.chain, {
      clientId: config.clientId,
      secretKey: config.secretKey
    });
    this.chainId = (await originalProvider.getNetwork()).chainId;
    const bundlerUrl = this.config.bundlerUrl || `https://${this.chainId}.bundler.thirdweb.com`;
    const paymasterUrl = this.config.paymasterUrl || `https://${this.chainId}.bundler.thirdweb.com/v2`;
    const entryPointAddress = config.entryPointAddress || ENTRYPOINT_ADDRESS;
    const deployOnSign = config.deployOnSign ?? true;
    const localSigner = await params.personalWallet.getSigner();
    const providerConfig = {
      chain: config.chain,
      localSigner,
      entryPointAddress,
      bundlerUrl,
      paymasterAPI: this.config.paymasterAPI ? this.config.paymasterAPI : getVerifyingPaymaster(paymasterUrl, entryPointAddress, this.config.clientId, this.config.secretKey),
      gasless: config.gasless,
      deployOnSign: deployOnSign,
      factoryAddress: config.factoryAddress,
      accountAddress: params.accountAddress,
      factoryInfo: config.factoryInfo || this.defaultFactoryInfo(),
      accountInfo: config.accountInfo || this.defaultAccountInfo(),
      clientId: config.clientId,
      secretKey: config.secretKey
    };
    this.personalWallet = params.personalWallet;
    const accountApi = new AccountAPI(providerConfig, originalProvider);
    this.aaProvider = create4337Provider(providerConfig, accountApi, originalProvider, this.chainId);
    this.accountApi = accountApi;
  }
  async connect(connectionArgs) {
    await this.initialize(connectionArgs);
    return await this.getAddress();
  }
  getProvider() {
    if (!this.aaProvider) {
      throw new Error("Personal wallet not connected");
    }
    return Promise.resolve(this.aaProvider);
  }
  async getSigner() {
    if (!this.aaProvider) {
      throw new Error("Personal wallet not connected");
    }
    return Promise.resolve(this.aaProvider.getSigner());
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }
  async isConnected() {
    try {
      const address = await this.getAddress();
      return !!address;
    } catch (e) {
      return false;
    }
  }
  async disconnect() {
    this.personalWallet = undefined;
    this.aaProvider = undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  async switchChain(chainId) {
    const provider = await this.getProvider();
    const currentChainId = (await provider.getNetwork()).chainId;
    if (currentChainId !== chainId) {
      // only throw if actually trying to switch chains
      throw new Error("Not supported.");
    }
  }
  setupListeners() {
    return Promise.resolve();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateChains(chains) {}

  /**
   * Check whether the connected signer can execute a given transaction using the smart wallet.
   * @param transaction - The transaction to execute using the smart wallet.
   * @returns whether the connected signer can execute the transaction using the smart wallet.
   */
  async hasPermissionToExecute(transaction) {
    const accountContract = await this.getAccountContract();
    const signer = await this.getSigner();
    const signerAddress = await signer.getAddress();
    const restrictions = (await accountContract.account.getAllSigners()).filter(item => getAddress(item.signer) === getAddress(signerAddress))[0]?.permissions;
    if (!restrictions) {
      return false;
    }
    return restrictions.approvedCallTargets.includes(transaction.getTarget());
  }

  /// PREPARED TRANSACTIONS

  /**
   * Send a single transaction without waiting for confirmations
   * @param transaction - the transaction to send
   * @param config - optional the transaction configuration
   * @returns The awaitable transaction
   */
  async send(transaction, options) {
    const signer = await this.getSigner();
    return signer.sendTransaction({
      to: transaction.getTarget(),
      data: transaction.encode(),
      value: await transaction.getValue()
    }, options);
  }

  /**
   * Execute a single transaction (waiting for confirmations)
   * @param transaction - The transaction to execute
   * @returns The transaction receipt
   */
  async execute(transaction, options) {
    const tx = await this.send(transaction, options);
    const receipt = await tx.wait();
    return {
      receipt
    };
  }
  async sendBatch(transactions, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    const {
      tx,
      batchData
    } = await this.prepareBatchTx(transactions);
    return await signer.sendTransaction({
      to: await signer.getAddress(),
      data: tx.encode(),
      value: 0
    }, {
      ...options,
      batchData
    });
  }

  /**
   * Execute multiple transactions in a single batch
   * @param transactions - The transactions to execute
   * @returns The transaction receipt
   */
  async executeBatch(transactions, options) {
    const tx = await this.sendBatch(transactions, options);
    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /// RAW TRANSACTIONS

  async sendRaw(transaction, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    return signer.sendTransaction(transaction, options);
  }
  async executeRaw(transaction, options) {
    const tx = await this.sendRaw(transaction, options);
    const receipt = await tx.wait();
    return {
      receipt
    };
  }
  async sendBatchRaw(transactions, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    const batch = await this.prepareBatchRaw(transactions);
    return signer.sendTransaction({
      to: await signer.getAddress(),
      data: batch.tx.encode(),
      value: 0
    }, {
      ...options,
      batchData: batch.batchData // batched tx flag
    });
  }
  async executeBatchRaw(transactions, options) {
    const tx = await this.sendBatchRaw(transactions, options);
    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /// ESTIMATION

  async estimate(transaction, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    return this.estimateTx({
      target: transaction.getTarget(),
      data: transaction.encode(),
      value: await transaction.getValue(),
      gasLimit: await transaction.getOverrides().gasLimit,
      maxFeePerGas: await transaction.getOverrides().maxFeePerGas,
      maxPriorityFeePerGas: await transaction.getOverrides().maxPriorityFeePerGas,
      nonce: await transaction.getOverrides().nonce
    }, options);
  }
  async estimateRaw(transaction, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const tx = await resolveProperties(transaction);
    return this.estimateTx({
      target: tx.to || AddressZero,
      data: tx.data?.toString() || "",
      value: tx.value || BigNumber.from(0),
      gasLimit: tx.gasLimit,
      maxFeePerGas: tx.maxFeePerGas,
      maxPriorityFeePerGas: tx.maxPriorityFeePerGas,
      nonce: tx.nonce
    }, options);
  }
  async estimateBatch(transactions, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const {
      tx,
      batchData
    } = await this.prepareBatchTx(transactions);
    return this.estimateTx({
      target: tx.getTarget(),
      data: tx.encode(),
      value: await tx.getValue(),
      gasLimit: await tx.getOverrides().gasLimit,
      maxFeePerGas: await tx.getOverrides().maxFeePerGas,
      maxPriorityFeePerGas: await tx.getOverrides().maxPriorityFeePerGas,
      nonce: await tx.getOverrides().nonce
    }, {
      ...options,
      batchData
    });
  }
  async estimateBatchRaw(transactions, options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const {
      tx,
      batchData
    } = await this.prepareBatchRaw(transactions);
    return this.estimateTx({
      target: tx.getTarget(),
      data: tx.encode(),
      value: await tx.getValue(),
      gasLimit: await tx.getOverrides().gasLimit,
      maxFeePerGas: await tx.getOverrides().maxFeePerGas,
      maxPriorityFeePerGas: await tx.getOverrides().maxPriorityFeePerGas,
      nonce: await tx.getOverrides().nonce
    }, {
      ...options,
      batchData
    });
  }

  //// DEPLOYMENT

  /**
   * Manually deploy the smart wallet contract. If already deployed this will throw an error.
   * Note that this is not necessary as the smart wallet will be deployed automatically on the first transaction the user makes.
   * @returns The transaction receipt
   */
  async deploy(options) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    const tx = await signer.sendTransaction({
      to: await signer.getAddress(),
      data: "0x"
    }, {
      ...options,
      batchData: {
        targets: [],
        data: [],
        values: []
      } // batched tx flag to avoid hitting the Router fallback method
    });
    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /**
   * Check if the smart wallet contract is deployed
   * @returns true if the smart wallet contract is deployed
   */
  async isDeployed() {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    return await this.accountApi.isAcountDeployed();
  }
  async deployIfNeeded(options) {
    const isDeployed = await this.isDeployed();
    if (!isDeployed) {
      await this.deploy(options);
    }
  }

  //// PERMISSIONS

  async grantPermissions(target, permissions) {
    await this.deployIfNeeded();
    const accountContract = await this.getAccountContract();
    return accountContract.account.grantPermissions(target, permissions);
  }
  async revokePermissions(target) {
    await this.deployIfNeeded();
    const accountContract = await this.getAccountContract();
    return accountContract.account.revokeAccess(target);
  }
  async addAdmin(target) {
    await this.deployIfNeeded();
    const accountContract = await this.getAccountContract();
    return accountContract.account.grantAdminPermissions(target);
  }
  async removeAdmin(target) {
    await this.deployIfNeeded();
    const accountContract = await this.getAccountContract();
    return accountContract.account.revokeAdminPermissions(target);
  }
  async getAllActiveSigners() {
    const isDeployed = await this.isDeployed();
    if (isDeployed) {
      const accountContract = await this.getAccountContract();
      return accountContract.account.getAllAdminsAndSigners();
    } else {
      const personalWallet = await this.personalWallet?.getSigner();
      if (!personalWallet) {
        throw new Error("Personal wallet not connected");
      }
      return [{
        isAdmin: true,
        signer: await personalWallet.getAddress(),
        permissions: {
          startDate: new Date(0),
          expirationDate: new Date(0),
          nativeTokenLimitPerTransaction: BigNumber.from(0),
          approvedCallTargets: []
        }
      }];
    }
  }

  /**
   * Get the underlying account contract of the smart wallet.
   * @returns The account contract of the smart wallet.
   */
  async getAccountContract() {
    const isDeployed = await this.isDeployed();
    if (!isDeployed) {
      throw new Error("Account contract is not deployed yet. You can deploy it manually using SmartWallet.deploy(), or by executing a transaction from this wallet.");
    }
    // getting a new instance everytime
    // to avoid caching issues pre/post deployment
    const sdk = ThirdwebSDK.fromSigner(await this.getSigner(), this.config.chain, {
      clientId: this.config.clientId,
      secretKey: this.config.secretKey
    });
    if (this.config.accountInfo?.abi) {
      return sdk.getContract(await this.getAddress(), this.config.accountInfo.abi);
    } else {
      return sdk.getContract(await this.getAddress());
    }
  }

  /**
   * Get the underlying account factory contract of the smart wallet.
   * @returns The account factory contract.
   */
  async getFactoryContract() {
    const sdk = ThirdwebSDK.fromSigner(await this.getSigner(), this.config.chain, {
      clientId: this.config.clientId,
      secretKey: this.config.secretKey
    });
    if (this.config.factoryInfo?.abi) {
      return sdk.getContract(this.config.factoryAddress, this.config.factoryInfo.abi);
    }
    return sdk.getContract(this.config.factoryAddress);
  }
  defaultFactoryInfo() {
    return {
      createAccount: async (factory, owner) => {
        return factory.prepare("createAccount", [owner, toUtf8Bytes("")]);
      },
      getAccountAddress: async (factory, owner) => {
        return await factory.call("getAddress", [owner, toUtf8Bytes("")]);
      }
    };
  }
  defaultAccountInfo() {
    return {
      execute: async (account, target, value, data) => {
        return account.prepare("execute", [target, value, data]);
      },
      getNonce: async account => {
        return account.call("getNonce", []);
      }
    };
  }

  /// PRIVATE METHODS

  async estimateTx(tx, options) {
    if (!this.accountApi || !this.aaProvider) {
      throw new Error("Personal wallet not connected");
    }
    let deployGasLimit = BigNumber.from(0);
    const [provider, isDeployed] = await Promise.all([this.getProvider(), this.isDeployed()]);
    if (!isDeployed) {
      deployGasLimit = await this.estimateDeploymentGasLimit();
    }
    const [userOp, gasPrice] = await Promise.all([this.accountApi.createUnsignedUserOp(this.aaProvider.httpRpcClient, tx, options), getGasPrice(provider)]);
    const resolved = await resolveProperties(userOp);
    const transactionGasLimit = BigNumber.from(resolved.callGasLimit);
    const transactionCost = transactionGasLimit.mul(gasPrice);
    const deployCost = deployGasLimit.mul(gasPrice);
    const totalCost = deployCost.add(transactionCost);
    return {
      ether: formatEther(totalCost),
      wei: totalCost,
      details: {
        deployGasLimit,
        transactionGasLimit,
        gasPrice,
        transactionCost,
        deployCost,
        totalCost
      }
    };
  }
  async estimateDeploymentGasLimit() {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const initCode = await this.accountApi.getInitCode();
    const [initGas, verificationGasLimit] = await Promise.all([this.accountApi.estimateCreationGas(initCode), this.accountApi.getVerificationGasLimit()]);
    return BigNumber.from(verificationGasLimit).add(initGas);
  }
  async prepareBatchRaw(transactions) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const resolvedTxs = await Promise.all(transactions.map(transaction => resolveProperties(transaction)));
    const targets = resolvedTxs.map(tx => tx.to || AddressZero);
    const data = resolvedTxs.map(tx => tx.data || "0x");
    const values = resolvedTxs.map(tx => tx.value || BigNumber.from(0));
    return {
      tx: await this.accountApi.prepareExecuteBatch(targets, values, data),
      batchData: {
        targets,
        data,
        values
      }
    };
  }
  async prepareBatchTx(transactions) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const targets = transactions.map(tx => tx.getTarget());
    const data = transactions.map(tx => tx.encode());
    const values = await Promise.all(transactions.map(tx => tx.getValue()));
    return {
      tx: await this.accountApi.prepareExecuteBatch(targets, values, data),
      batchData: {
        targets,
        data,
        values
      }
    };
  }
}

export { SmartWalletConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-smart-wallet.esm-60658135.js.map
