import { W as WagmiConnector, m as _classPrivateMethodInitSpec, a as _defineProperty, w as walletIds, _ as _classPrivateFieldInitSpec, b as _classPrivateFieldSet, e as getAddress, o as _classPrivateMethodGet, U as UserRejectedRequestError, n as normalizeChainId, c as _classPrivateFieldGet, d as ConnectorNotFoundError, h as Web3Provider, i as hexValue, S as SwitchChainError } from './App-40ca2dcc.js';
import { g as getValidPublicRPCUrl } from './url-0d129c6b.esm-6ec49aa3.js';
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

/* Version: 0.5.5 - August 14, 2023 10:23:52 */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// instead invariant from package, since all error will throw on production
function invariant(condition, format) {
    if (!condition) {
        throw new Error(format);
    }
}

// local storage version naming rule: [milestone].[patch]
var KEY_SESSION;
(function (KEY_SESSION) {
    KEY_SESSION["prod"] = "BLOCTO_SDK";
    KEY_SESSION["dev"] = "BLOCTO_SDK_DEV";
    KEY_SESSION["staging"] = "BLOCTO_SDK_STAGING";
})(KEY_SESSION || (KEY_SESSION = {}));
var CHAIN;
(function (CHAIN) {
    CHAIN["ETHEREUM"] = "ethereum";
    CHAIN["SOLANA"] = "solana";
    CHAIN["APTOS"] = "aptos";
})(CHAIN || (CHAIN = {}));

class MemoryStorage {
    constructor() {
        this.storage = {};
    }
    getItem(key) {
        return this[key] || null;
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
    removeItem(key) {
        delete this.storage[key];
    }
}
const memoryStorage = typeof window !== 'undefined' ? window.memoryStorage : new MemoryStorage();

const isSupported = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    try {
        window.sessionStorage.setItem('local_storage_supported', '1');
        const result = window.sessionStorage.getItem('local_storage_supported');
        window.sessionStorage.removeItem('local_storage_supported');
        return result === '1';
    }
    catch (error) {
        return false;
    }
};
const storage = isSupported() ? window.sessionStorage : memoryStorage;
const getItem = (key, defaultValue = null) => {
    const value = storage.getItem(key);
    try {
        return (value && JSON.parse(value)) || defaultValue;
    }
    catch (SyntaxError) {
        return value || defaultValue;
    }
};
const setItem = (key, value) => storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
const removeItem = (key) => {
    setItem(key, ''); // Due to some versions of browser bug can't removeItem correctly.
    storage.removeItem(key);
};
/**
 * @param {keys.KEY_SESSION} key - key to retrieve the data
 * @returns {ProviderSession | null} ProviderSession | null
 * @description
 * Get ProviderSession from storage.
 * If the data is expired, will remove the data and return null
 */
const getAccountStorage = (key) => {
    const rawAccountStorage = getItem(key, null);
    if (!rawAccountStorage)
        return null;
    // compare the expiry time of the item with the current time
    if (new Date().getTime() > rawAccountStorage.expiry ||
        rawAccountStorage.v !== SDK_VERSION) {
        removeItem(key);
        return null;
    }
    return rawAccountStorage === null || rawAccountStorage === void 0 ? void 0 : rawAccountStorage.data;
};
/**
  @param {keys.KEY_SESSION} key - key to store the data
  @param {ProviderSession} data - Only the part of ProviderSession that needs to be updated
  {
    connected?: boolean;
    code?: string | null;
    accounts: Record<string, string[] | undefined>;
  }
  @param {number} expiry - expiry time of the data
*/
const setAccountStorage = (key, data, expiry) => {
    var _a, _b, _c;
    const rawAccountStorage = getItem(key);
    const newAccountStorage = {
        data: {
            code: (data === null || data === void 0 ? void 0 : data.code) || ((_a = rawAccountStorage === null || rawAccountStorage === void 0 ? void 0 : rawAccountStorage.data) === null || _a === void 0 ? void 0 : _a.code),
            connected: !!((data === null || data === void 0 ? void 0 : data.code) || ((_b = rawAccountStorage === null || rawAccountStorage === void 0 ? void 0 : rawAccountStorage.data) === null || _b === void 0 ? void 0 : _b.code)),
            accounts: Object.assign(Object.assign({}, (_c = rawAccountStorage === null || rawAccountStorage === void 0 ? void 0 : rawAccountStorage.data) === null || _c === void 0 ? void 0 : _c.accounts), data === null || data === void 0 ? void 0 : data.accounts),
        },
        expiry: expiry ||
            (rawAccountStorage === null || rawAccountStorage === void 0 ? void 0 : rawAccountStorage.expiry) ||
            new Date().getTime() + LOGIN_PERSISTING_TIME,
        v: SDK_VERSION,
    };
    setItem(key, newAccountStorage);
    return;
};
const getChainAddress = (key, chain) => {
    var _a, _b;
    if (!((_a = getAccountStorage(key)) === null || _a === void 0 ? void 0 : _a.code)) {
        removeItem(key);
        return null;
    }
    return ((_b = getAccountStorage(key)) === null || _b === void 0 ? void 0 : _b.accounts[chain]) || null;
};
const setChainAddress = (key, chain, account) => {
    setAccountStorage(key, { accounts: { [chain]: account } });
    return;
};
const removeChainAddress = (key, chain) => {
    setAccountStorage(key, { accounts: { [chain]: undefined } });
    return;
};

/* eth series constants begin */
const ETH_RPC_LIST = {
    // This is the list of public RPC endpoints that we known to be working
    // Used to help developers did not set up their own RPC endpoints
    // BSC mainnet
    56: 'https://bsc-dataseed1.binance.org',
    // BSC testnet
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    // Polygon Mainnet
    137: 'https://rpc-mainnet.maticvigil.com/',
    // Polygon Testnet
    80001: 'https://rpc-mumbai.matic.today/',
    // Avalanche Mainnet
    43114: 'https://api.avax.network/ext/bc/C/rpc',
    // Avalanche Fuji Testnet
    43113: 'https://api.avax-test.network/ext/bc/C/rpc',
    // Arbitrum Mainnet
    42161: 'https://arb1.arbitrum.io/rpc',
    // Arbitrum Testnet
    421613: 'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
    // Optimism Mainnet
    10: 'https://mainnet.optimism.io',
    // Optimism Goerli Testnet
    420: 'https://goerli.optimism.io',
};
const ETH_ENV_WALLET_SERVER_MAPPING = {
    prod: 'https://wallet-v2.blocto.app',
    staging: 'https://wallet-v2-staging.blocto.app',
    dev: 'https://wallet-v2-dev.blocto.app',
};
const ETH_SESSION_KEY_MAPPING = {
    prod: KEY_SESSION.prod,
    staging: KEY_SESSION.staging,
    dev: KEY_SESSION.dev,
};
/* eth series constants end */
/* sol constants begin */
const SOL_NET = {
    MainnetBeta: 'mainnet-beta',
    Testnet: 'testnet',
    Devnet: 'devnet',
};
const SOL_NET_SERVER_MAPPING = {
    [SOL_NET.MainnetBeta]: 'https://wallet-v2.blocto.app',
    [SOL_NET.Devnet]: 'https://wallet-v2-dev.blocto.app',
    [SOL_NET.Testnet]: 'https://wallet-v2-dev.blocto.app',
};
const SOL_SESSION_KEY_MAPPING = {
    [SOL_NET.MainnetBeta]: KEY_SESSION.prod,
    [SOL_NET.Devnet]: KEY_SESSION.dev,
    [SOL_NET.Testnet]: KEY_SESSION.dev,
};
/* sol constants end */
/* aptos constants begin */
const APT_SESSION_KEY_MAPPING = {
    1: KEY_SESSION.prod,
    2: KEY_SESSION.dev,
    3: KEY_SESSION.dev,
    4: KEY_SESSION.dev,
    5: KEY_SESSION.staging,
};
const APT_CHAIN_ID_SERVER_MAPPING = {
    // MAINNET
    1: 'https://wallet-v2.blocto.app',
    // TESTNET
    2: 'https://wallet-v2-dev.blocto.app',
    // DEVNET
    3: 'https://wallet-v2-dev.blocto.app',
    // TESTING
    4: 'https://wallet-v2-dev.blocto.app',
    // PREMAINNET
    5: 'https://wallet-v2-staging.blocto.app',
};
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Mainnet"] = "mainnet";
    WalletAdapterNetwork["Testnet"] = "testnet";
    WalletAdapterNetwork["Devnet"] = "devnet";
    WalletAdapterNetwork["Testing"] = "testing";
    WalletAdapterNetwork["Premainnet"] = "premainnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
const APT_CHAIN_ID_NAME_MAPPING = {
    1: WalletAdapterNetwork.Mainnet,
    2: WalletAdapterNetwork.Testnet,
    3: WalletAdapterNetwork.Devnet,
    4: WalletAdapterNetwork.Testing,
    5: WalletAdapterNetwork.Premainnet,
};
const APT_CHAIN_ID_RPC_MAPPING = {
    1: 'https://fullnode.mainnet.aptoslabs.com/v1',
    2: 'https://fullnode.testnet.aptoslabs.com/v1',
    3: 'https://fullnode.devnet.aptoslabs.com/v1',
    4: '',
    5: 'https://premainnet.aptosdev.com/v1',
};
/* aptos constants end */
const EIP1193_EVENTS = [
    'connect',
    'disconnect',
    'message',
    'chainChanged',
    'accountsChanged',
];
// Preserve login for 1 day
const LOGIN_PERSISTING_TIME = 86400 * 1000;
const DEFAULT_APP_ID = '00000000-0000-0000-0000-000000000000';
// Will inject the version of the SDK by rollup versionInjector during build time
const SDK_VERSION = '0.5.5';

// The root class for all providers
class BloctoProvider {
    constructor() {
        this.isBlocto = true;
        this.isConnecting = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.eventListeners = {};
        // alias removeListener
        this.off = this.removeListener;
        // init event listeners
        EIP1193_EVENTS.forEach((event) => {
            this.eventListeners[event] = [];
        });
        this.appId = DEFAULT_APP_ID;
    }
    // implement by children
    // eslint-disable-next-line
    request(payload) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    on(event, listener) {
        if (!EIP1193_EVENTS.includes(event))
            return;
        this.eventListeners[event].push(listener);
    }
    // @todo: implement it
    // eslint-disable-next-line
    once() { }
    removeListener(event, listener) {
        const listeners = this.eventListeners[event];
        const index = listeners.findIndex((item) => item === listener);
        if (index !== -1) {
            this.eventListeners[event].splice(index, 1);
        }
    }
}

const IFRAME_STYLE = 'width:100vw;height:100%;position:fixed;top:0;left:0;z-index:2147483646;border:none;box-sizing:border-box;color-scheme:light;inset:0px;display:block;pointer-events:auto;';
function createFrame(url) {
    const frame = document.createElement('iframe');
    frame.setAttribute('src', url);
    frame.setAttribute('style', IFRAME_STYLE);
    return frame;
}
function attachFrame(frame) {
    document.body.appendChild(frame);
}
function detatchFrame(frame) {
    const parentNode = frame && frame.parentNode;
    if (parentNode && parentNode.removeChild instanceof Function) {
        parentNode.removeChild(frame);
    }
}

var addSelfRemovableHandler = (eventType, handler, target = window) => {
    function listener(e) {
        const removeEventListener = () => target.removeEventListener(eventType, listener);
        handler(e, removeEventListener);
    }
    target.addEventListener(eventType, listener);
};

function responseSessionGuard(response, key, disconnectHandler) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response.status === 403 || response.status === 401) {
            if (disconnectHandler) {
                disconnectHandler();
            }
            removeItem(key);
        }
        if (!response.ok) {
            const data = yield response.json();
            const e = new Error((data === null || data === void 0 ? void 0 : data.message) || 'unknown error');
            e.error_code = data === null || data === void 0 ? void 0 : data.error_code;
            throw e;
        }
        return response.json();
    });
}

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
const isValidTransaction = (transaction) => (typeof transaction === 'object' && transaction !== null && 'from' in transaction);
const isValidTransactions = (transactions) => (Array.isArray(transactions) && transactions.every(tx => isValidTransaction(tx)));

function getEvmSupport() {
    return __awaiter(this, void 0, void 0, function* () {
        const { networks } = yield fetch('https://api.blocto.app/networks/evm').then((response) => response.json());
        const evmSupportMap = networks.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.chain_id]: v })), {});
        return evmSupportMap;
    });
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist = {};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

var classes = {};

var fastSafeStringify = stringify;
stringify["default"] = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = '[...]';
var CIRCULAR_REPLACE_NODE = '[Circular]';
var arr = [];
var replacerStack = [];
function defaultOptions() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}

// Regular stringify
function stringify(obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions();
  }
  decirc(obj, '', 0, [], undefined, 0, options);
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer);
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res;
}
function setReplace(replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, {
        value: replace
      });
      arr.push([parent, k, val, propertyDescriptor]);
    } else {
      replacerStack.push([val, k, replace]);
    }
  } else {
    parent[k] = replace;
    arr.push([parent, k, val]);
  }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (_typeof(val) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
        return;
      }
    }
    if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return;
    }
    if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return;
    }
    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      var keys = Object.keys(val);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, i, stack, val, depth, options);
      }
    }
    stack.pop();
  }
}

// Stable-stringify
function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions();
  }
  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj;
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer);
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (_typeof(val) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
        return;
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return;
      }
    } catch (_) {
      return;
    }
    if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return;
    }
    if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return;
    }
    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, i, stack, val, depth, options);
        tmp[key] = val[key];
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp;
      }
    }
    stack.pop();
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
  replacer = typeof replacer !== 'undefined' ? replacer : function (k, v) {
    return v;
  };
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];
        if (part[1] === key && part[0] === val) {
          val = part[2];
          replacerStack.splice(i, 1);
          break;
        }
      }
    }
    return replacer.call(this, key, val);
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
Object.defineProperty(classes, "__esModule", {
  value: true
});
classes.EthereumProviderError = classes.EthereumRpcError = void 0;
var fast_safe_stringify_1 = fastSafeStringify;
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */
var EthereumRpcError = /*#__PURE__*/function (_Error) {
  _inherits(EthereumRpcError, _Error);
  var _super = _createSuper(EthereumRpcError);
  function EthereumRpcError(code, message, data) {
    var _this;
    _classCallCheck(this, EthereumRpcError);
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== 'string') {
      throw new Error('"message" must be a nonempty string.');
    }
    _this = _super.call(this, message);
    _this.code = code;
    if (data !== undefined) {
      _this.data = data;
    }
    return _this;
  }
  /**
   * Returns a plain object with all public class properties.
   */
  _createClass(EthereumRpcError, [{
    key: "serialize",
    value: function serialize() {
      var serialized = {
        code: this.code,
        message: this.message
      };
      if (this.data !== undefined) {
        serialized.data = this.data;
      }
      if (this.stack) {
        serialized.stack = this.stack;
      }
      return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
  }, {
    key: "toString",
    value: function toString() {
      return fast_safe_stringify_1["default"](this.serialize(), stringifyReplacer, 2);
    }
  }]);
  return EthereumRpcError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
classes.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
var EthereumProviderError = /*#__PURE__*/function (_EthereumRpcError) {
  _inherits(EthereumProviderError, _EthereumRpcError);
  var _super2 = _createSuper(EthereumProviderError);
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  function EthereumProviderError(code, message, data) {
    _classCallCheck(this, EthereumProviderError);
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    return _super2.call(this, code, message, data);
  }
  return _createClass(EthereumProviderError);
}(EthereumRpcError);
classes.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
  if (value === '[Circular]') {
    return undefined;
  }
  return value;
}

var utils = {};

var errorConstants = {};

Object.defineProperty(errorConstants, "__esModule", {
  value: true
});
errorConstants.errorValues = errorConstants.errorCodes = void 0;
errorConstants.errorCodes = {
  rpc: {
    invalidInput: -32000,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
errorConstants.errorValues = {
  '-32700': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
  },
  '-32600': {
    standard: 'JSON RPC 2.0',
    message: 'The JSON sent is not a valid Request object.'
  },
  '-32601': {
    standard: 'JSON RPC 2.0',
    message: 'The method does not exist / is not available.'
  },
  '-32602': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid method parameter(s).'
  },
  '-32603': {
    standard: 'JSON RPC 2.0',
    message: 'Internal JSON-RPC error.'
  },
  '-32000': {
    standard: 'EIP-1474',
    message: 'Invalid input.'
  },
  '-32001': {
    standard: 'EIP-1474',
    message: 'Resource not found.'
  },
  '-32002': {
    standard: 'EIP-1474',
    message: 'Resource unavailable.'
  },
  '-32003': {
    standard: 'EIP-1474',
    message: 'Transaction rejected.'
  },
  '-32004': {
    standard: 'EIP-1474',
    message: 'Method not supported.'
  },
  '-32005': {
    standard: 'EIP-1474',
    message: 'Request limit exceeded.'
  },
  '4001': {
    standard: 'EIP-1193',
    message: 'User rejected the request.'
  },
  '4100': {
    standard: 'EIP-1193',
    message: 'The requested account and/or method has not been authorized by the user.'
  },
  '4200': {
    standard: 'EIP-1193',
    message: 'The requested method is not supported by this Ethereum provider.'
  },
  '4900': {
    standard: 'EIP-1193',
    message: 'The provider is disconnected from all chains.'
  },
  '4901': {
    standard: 'EIP-1193',
    message: 'The provider is disconnected from the specified chain.'
  }
};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  var error_constants_1 = errorConstants;
  var classes_1 = classes;
  var FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
  var FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
  var FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE)
  };
  exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
  /**
   * Gets the message for a given code, or a fallback message if the code has
   * no corresponding message.
   */
  function getMessageFromCode(code) {
    var fallbackMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_MESSAGE;
    if (Number.isInteger(code)) {
      var codeString = code.toString();
      if (hasKey(error_constants_1.errorValues, codeString)) {
        return error_constants_1.errorValues[codeString].message;
      }
      if (isJsonRpcServerError(code)) {
        return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
      }
    }
    return fallbackMessage;
  }
  exports.getMessageFromCode = getMessageFromCode;
  /**
   * Returns whether the given code is valid.
   * A code is only valid if it has a message.
   */
  function isValidCode(code) {
    if (!Number.isInteger(code)) {
      return false;
    }
    var codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) {
      return true;
    }
    if (isJsonRpcServerError(code)) {
      return true;
    }
    return false;
  }
  exports.isValidCode = isValidCode;
  /**
   * Serializes the given error to an Ethereum JSON RPC-compatible error object.
   * Merely copies the given error's values if it is already compatible.
   * If the given error is not fully compatible, it will be preserved on the
   * returned object's data.originalError property.
   */
  function serializeError(error) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$fallbackError = _ref.fallbackError,
      fallbackError = _ref$fallbackError === void 0 ? FALLBACK_ERROR : _ref$fallbackError,
      _ref$shouldIncludeSta = _ref.shouldIncludeStack,
      shouldIncludeStack = _ref$shouldIncludeSta === void 0 ? false : _ref$shouldIncludeSta;
    var _a, _b;
    if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== 'string') {
      throw new Error('Must provide fallback error with integer number code and string message.');
    }
    if (error instanceof classes_1.EthereumRpcError) {
      return error.serialize();
    }
    var serialized = {};
    if (error && _typeof(error) === 'object' && !Array.isArray(error) && hasKey(error, 'code') && isValidCode(error.code)) {
      var _error = error;
      serialized.code = _error.code;
      if (_error.message && typeof _error.message === 'string') {
        serialized.message = _error.message;
        if (hasKey(_error, 'data')) {
          serialized.data = _error.data;
        }
      } else {
        serialized.message = getMessageFromCode(serialized.code);
        serialized.data = {
          originalError: assignOriginalError(error)
        };
      }
    } else {
      serialized.code = fallbackError.code;
      var message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
      serialized.message = message && typeof message === 'string' ? message : fallbackError.message;
      serialized.data = {
        originalError: assignOriginalError(error)
      };
    }
    var stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') {
      serialized.stack = stack;
    }
    return serialized;
  }
  exports.serializeError = serializeError;
  // Internal
  function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
  }
  function assignOriginalError(error) {
    if (error && _typeof(error) === 'object' && !Array.isArray(error)) {
      return Object.assign({}, error);
    }
    return error;
  }
  function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
})(utils);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var errors = {};

Object.defineProperty(errors, "__esModule", {
  value: true
});
errors.ethErrors = void 0;
var classes_1 = classes;
var utils_1 = utils;
var error_constants_1 = errorConstants;
errors.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: function parse(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg);
    },
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: function invalidRequest(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg);
    },
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: function invalidParams(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg);
    },
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: function methodNotFound(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg);
    },
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: function internal(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg);
    },
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: function server(opts) {
      if (!opts || _typeof(opts) !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum RPC Server errors must provide single object argument.');
      }
      var code = opts.code;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: function invalidInput(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg);
    },
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: function resourceNotFound(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg);
    },
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: function resourceUnavailable(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg);
    },
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: function transactionRejected(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg);
    },
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: function methodNotSupported(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg);
    },
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: function limitExceeded(arg) {
      return getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg);
    }
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: function userRejectedRequest(arg) {
      return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
    },
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: function unauthorized(arg) {
      return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
    },
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: function unsupportedMethod(arg) {
      return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
    },
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: function disconnected(arg) {
      return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
    },
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: function chainDisconnected(arg) {
      return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
    },
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: function custom(opts) {
      if (!opts || _typeof(opts) !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum Provider custom errors must provide single object argument.');
      }
      var code = opts.code,
        message = opts.message,
        data = opts.data;
      if (!message || typeof message !== 'string') {
        throw new Error('"message" must be a nonempty string');
      }
      return new classes_1.EthereumProviderError(code, message, data);
    }
  }
};
// Internal
function getEthJsonRpcError(code, arg) {
  var _parseOpts = parseOpts(arg),
    _parseOpts2 = _slicedToArray(_parseOpts, 2),
    message = _parseOpts2[0],
    data = _parseOpts2[1];
  return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  var _parseOpts3 = parseOpts(arg),
    _parseOpts4 = _slicedToArray(_parseOpts3, 2),
    message = _parseOpts4[0],
    data = _parseOpts4[1];
  return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === 'string') {
      return [arg];
    } else if (_typeof(arg) === 'object' && !Array.isArray(arg)) {
      var message = arg.message,
        data = arg.data;
      if (message && typeof message !== 'string') {
        throw new Error('Must specify string message.');
      }
      return [message || undefined, data];
    }
  }
  return [];
}

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
  var classes_1 = classes;
  Object.defineProperty(exports, "EthereumRpcError", {
    enumerable: true,
    get: function get() {
      return classes_1.EthereumRpcError;
    }
  });
  Object.defineProperty(exports, "EthereumProviderError", {
    enumerable: true,
    get: function get() {
      return classes_1.EthereumProviderError;
    }
  });
  var utils_1 = utils;
  Object.defineProperty(exports, "serializeError", {
    enumerable: true,
    get: function get() {
      return utils_1.serializeError;
    }
  });
  Object.defineProperty(exports, "getMessageFromCode", {
    enumerable: true,
    get: function get() {
      return utils_1.getMessageFromCode;
    }
  });
  var errors_1 = errors;
  Object.defineProperty(exports, "ethErrors", {
    enumerable: true,
    get: function get() {
      return errors_1.ethErrors;
    }
  });
  var error_constants_1 = errorConstants;
  Object.defineProperty(exports, "errorCodes", {
    enumerable: true,
    get: function get() {
      return error_constants_1.errorCodes;
    }
  });
})(dist);

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

const isHexString = (hex) => typeof hex === 'string' && /^0x[0-9A-Fa-f]*$/.test(hex);
const utf8ToHex = (str) => {
    return Buffer.from(str, 'utf8').toString('hex');
};

var _EthereumProvider_instances, _EthereumProvider_getBloctoProperties, _EthereumProvider_addToSwitchable, _EthereumProvider_checkNetworkMatched;
function parseChainId(chainId) {
    if (!chainId) {
        return 1;
    }
    if (typeof chainId === 'number') {
        return chainId;
    }
    else if (chainId.startsWith('0x')) {
        return parseInt(chainId, 16);
    }
    return parseInt(chainId, 10);
}
class EthereumProvider extends BloctoProvider {
    constructor({ chainId, rpc, walletServer, appId }) {
        super();
        _EthereumProvider_instances.add(this);
        this.networkVersion = '1'; // same as chainId but in decimal
        // setup chainId
        invariant(chainId, "'chainId' is required");
        this.networkVersion = `${parseChainId(chainId)}`;
        this.chainId = `0x${parseChainId(chainId).toString(16)}`;
        // setup rpc
        this.rpc = rpc || ETH_RPC_LIST[this.networkVersion];
        invariant(this.rpc, "'rpc' is required");
        // setup injectedWalletServer
        this.injectedWalletServer = walletServer;
        // NOTE: _blocto is not fully initialized yet at this point
        // Any function should call #getBloctoProperties() to get the full _blocto properties
        this._blocto = {
            sessionKey: KEY_SESSION.prod,
            walletServer: this.injectedWalletServer || '',
            blockchainName: '',
            networkType: '',
            supportNetworkList: {},
            switchableNetwork: {},
        };
        this.appId = appId || DEFAULT_APP_ID;
    }
    // DEPRECATED API: see https://docs.metamask.io/guide/ethereum-provider.html#ethereum-send-deprecated
    send(methodOrPayload, paramsOrCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (true) {
                // signature type 1: arg1 - JSON-RPC payload, arg2 - callback;
                // ethereum.send(payload: JsonRpcRequest, callback: JsonRpcCallback): void;
                // This signature is exactly like ethereum.sendAsync()
                case paramsOrCallback instanceof Function:
                    return this.sendAsync(methodOrPayload, paramsOrCallback);
                // signature type 2: arg1 - JSON-RPC method name, arg2 - params array;
                // ethereum.send(method: string, params?: Array<unknown>): Promise<JsonRpcResponse>;
                // This signature is like an async ethereum.sendAsync() with method and params as arguments,
                // instead of a JSON-RPC payload and callback
                case typeof methodOrPayload === 'string' &&
                    Array.isArray(paramsOrCallback):
                    return this.sendAsync({
                        jsonrpc: '2.0',
                        method: methodOrPayload,
                        params: paramsOrCallback,
                    });
                // signature type 3: arg1 - JSON-RPC payload(should be synchronous methods)
                // ethereum.send(payload: JsonRpcRequest): unknown;
                // This signature enables you to call some type of RPC methods synchronously
                default:
                    return this.sendAsync(methodOrPayload);
            }
        });
    }
    // DEPRECATED API: see https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods implementation
    // web3 v1.x BatchRequest still depends on it so we need to implement anyway ¯\_(ツ)_/¯
    sendAsync(payload, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const handleRequest = new Promise((resolve) => {
                // web3 v1.x concat batched JSON-RPC requests to an array, handle it here
                if (Array.isArray(payload)) {
                    // collect transactions and send batch with custom method
                    const transactions = payload
                        .filter((request) => request.method === 'eth_sendTransaction')
                        .map((request) => { var _a; return (_a = request.params) === null || _a === void 0 ? void 0 : _a[0]; });
                    const idBase = Math.floor(Math.random() * 10000);
                    const batchedRequestPayload = {
                        method: 'blocto_sendBatchTransaction',
                        params: transactions,
                    };
                    const batchResponsePromise = this.request(batchedRequestPayload);
                    const requests = payload.map(({ method, params }, index) => method === 'eth_sendTransaction'
                        ? batchResponsePromise
                        : this.request({
                            id: idBase + index + 1,
                            jsonrpc: '2.0',
                            method,
                            params,
                        }));
                    // resolve response when all request are executed
                    Promise.allSettled(requests)
                        .then((responses) => resolve(responses.map((response, index) => {
                        return {
                            id: String(idBase + index + 1),
                            jsonrpc: '2.0',
                            method: payload[index].method,
                            result: response.status === 'fulfilled'
                                ? response.value
                                : undefined,
                            error: response.status !== 'fulfilled'
                                ? response.reason
                                : undefined,
                        };
                    })))
                        .catch((error) => {
                        throw dist.ethErrors.rpc.internal(error === null || error === void 0 ? void 0 : error.message);
                    });
                }
                else {
                    this.request(Object.assign(Object.assign({}, payload), { id: Number(payload.id) })).then(resolve);
                }
            });
            // execute callback or return promise, depdends on callback arg given or not
            if (callback) {
                handleRequest
                    .then((data) => callback(null, data))
                    .catch((error) => callback(error));
            }
            else {
                return handleRequest;
            }
        });
    }
    /**
     * Sending userOperation using Blocto SDK.
     * @param {IUserOperation} userOp - userOperation object
     * @remarks No need to include nonce, initCode, and signature as parameters when using BloctoSDK to send userOperation.
     * These parameters will be ignored.
     * @returns {Promise<string>} - userOperation hash
     */
    sendUserOperation(userOp) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: 'eth_sendUserOperation',
                params: [userOp],
            });
        });
    }
    request(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function* () {
            if (!(payload === null || payload === void 0 ? void 0 : payload.method))
                throw dist.ethErrors.rpc.invalidRequest();
            const existedSDK = window.ethereum;
            if (existedSDK && existedSDK.isBlocto) {
                if (payload.method === 'wallet_switchEthereumChain') {
                    if (!((_b = (_a = payload === null || payload === void 0 ? void 0 : payload.params) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.chainId)) {
                        throw dist.ethErrors.rpc.invalidParams();
                    }
                    return existedSDK.request(payload).then(() => {
                        var _a, _b, _c;
                        this.networkVersion = `${parseChainId((_a = payload === null || payload === void 0 ? void 0 : payload.params) === null || _a === void 0 ? void 0 : _a[0].chainId)}`;
                        this.chainId = `0x${parseChainId((_b = payload === null || payload === void 0 ? void 0 : payload.params) === null || _b === void 0 ? void 0 : _b[0].chainId).toString(16)}`;
                        this.rpc = (_c = switchableNetwork === null || switchableNetwork === void 0 ? void 0 : switchableNetwork[this.networkVersion]) === null || _c === void 0 ? void 0 : _c.rpc_url;
                        return null;
                    });
                }
                return existedSDK.request(payload);
            }
            const { blockchainName, switchableNetwork, sessionKey } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            // method that doesn't require user to be connected
            switch (payload.method) {
                case 'eth_chainId': {
                    return this.chainId;
                }
                case 'net_version': {
                    return this.networkVersion;
                }
                case 'wallet_addEthereumChain': {
                    return this.loadSwitchableNetwork((payload === null || payload === void 0 ? void 0 : payload.params) || []);
                }
                case 'eth_call': {
                    const response = yield this.handleReadRequests(payload);
                    if (!response || (response && !response.result && response.error)) {
                        const errorMessage = ((_c = response === null || response === void 0 ? void 0 : response.error) === null || _c === void 0 ? void 0 : _c.message)
                            ? response.error.message
                            : 'Request failed';
                        throw dist.ethErrors.rpc.internal(errorMessage);
                    }
                    return response.result;
                }
                case 'wallet_switchEthereumChain': {
                    if (!((_e = (_d = payload === null || payload === void 0 ? void 0 : payload.params) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.chainId))
                        throw dist.ethErrors.rpc.invalidParams();
                    const newChainId = payload.params[0].chainId;
                    if (!getChainAddress(sessionKey, blockchainName)) {
                        // directly switch network if user is not connected
                        // TODO: add a confirm switch network dialog
                        const phasedChainId = parseChainId(newChainId);
                        if (!switchableNetwork[phasedChainId]) {
                            throw dist.ethErrors.provider.custom({
                                code: 4902,
                                message: `Unrecognized chain ID "${newChainId}". Try adding the chain using wallet_addEthereumChain first.`,
                            });
                        }
                        this.networkVersion = `${phasedChainId}`;
                        this.chainId = `0x${phasedChainId.toString(16)}`;
                        this.rpc = switchableNetwork[phasedChainId].rpc_url;
                        this.eventListeners.chainChanged.forEach((listener) => listener(this.chainId));
                        return null;
                    }
                    break;
                }
            }
            // Method that requires user to be connected
            if (!getChainAddress(sessionKey, blockchainName)) {
                const email = (_f = payload === null || payload === void 0 ? void 0 : payload.params) === null || _f === void 0 ? void 0 : _f[0];
                if (payload.method === 'eth_requestAccounts' && isEmail(email)) {
                    yield this.enable(email);
                }
                else {
                    yield this.enable();
                }
            }
            try {
                let response = null;
                let result = null;
                switch (payload.method) {
                    case 'eth_requestAccounts':
                        yield this.fetchAccounts();
                    // eslint-disable-next-line
                    case 'eth_accounts':
                        result = getChainAddress(sessionKey, blockchainName);
                        break;
                    case 'eth_coinbase': {
                        result = (_g = getChainAddress(sessionKey, blockchainName)) === null || _g === void 0 ? void 0 : _g[0];
                        break;
                    }
                    case 'eth_signTypedData_v3':
                    case 'eth_signTypedData':
                    case 'eth_signTypedData_v4':
                    case 'personal_sign':
                    case 'eth_sign': {
                        result = yield this.handleSign(payload);
                        break;
                    }
                    case 'wallet_disconnect': {
                        this.handleDisconnect();
                        result = null;
                        break;
                    }
                    case 'eth_sendTransaction':
                        result = yield this.handleSendTransaction(payload);
                        break;
                    case 'blocto_sendBatchTransaction':
                        result = yield this.handleSendBatchTransaction(payload);
                        break;
                    case 'eth_signTransaction':
                    case 'eth_sendRawTransaction': {
                        throw dist.ethErrors.rpc.methodNotSupported('Method Not Supported: ' + payload.method);
                    }
                    case 'eth_sendUserOperation':
                        result = yield this.handleSendUserOperation(payload);
                        break;
                    case 'wallet_switchEthereumChain': {
                        if (!((_j = (_h = payload === null || payload === void 0 ? void 0 : payload.params) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.chainId)) {
                            throw dist.ethErrors.rpc.invalidParams();
                        }
                        const oldAccount = (_k = getChainAddress(sessionKey, blockchainName)) === null || _k === void 0 ? void 0 : _k[0];
                        const oldChainId = this.chainId;
                        const newChainId = payload.params[0].chainId;
                        if (!switchableNetwork[parseChainId(newChainId)]) {
                            throw dist.ethErrors.provider.custom({
                                code: 4902,
                                message: `Unrecognized chain ID "${parseChainId(payload.params[0].chainId)}". Try adding the chain using wallet_addEthereumChain first.`,
                            });
                        }
                        this.networkVersion = `${parseChainId(newChainId)}`;
                        this.chainId = `0x${parseChainId(newChainId).toString(16)}`;
                        this.rpc = switchableNetwork[this.networkVersion].rpc_url;
                        yield this.enable()
                            .then(([newAccount]) => {
                            var _a;
                            if (newAccount !== oldAccount) {
                                (_a = this.eventListeners) === null || _a === void 0 ? void 0 : _a.accountsChanged.forEach((listener) => listener([newAccount]));
                            }
                            this.eventListeners.chainChanged.forEach((listener) => listener(this.chainId));
                            result = null;
                        })
                            .catch((error) => {
                            this.networkVersion = `${parseChainId(oldChainId)}`;
                            this.chainId = `0x${parseChainId(oldChainId).toString(16)}`;
                            this.rpc = switchableNetwork[this.networkVersion].rpc_url;
                            throw error;
                        });
                        break;
                    }
                    case 'eth_estimateUserOperationGas':
                    case 'eth_getUserOperationByHash':
                    case 'eth_getUserOperationReceipt':
                    case 'eth_supportedEntryPoints':
                        result = yield this.handleBundler(payload);
                        break;
                    default:
                        response = yield this.handleReadRequests(payload);
                }
                if (response && !response.result && response.error) {
                    const errorMessage = response.error.message
                        ? response.error.message
                        : 'Request failed';
                    throw dist.ethErrors.rpc.internal(errorMessage);
                }
                if (response)
                    return response.result;
                return result;
            }
            catch (error) {
                throw dist.ethErrors.rpc.internal(error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
    bloctoApi(url, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { walletServer, blockchainName, sessionKey } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            const sessionId = ((_a = getAccountStorage(sessionKey)) === null || _a === void 0 ? void 0 : _a.code) || '';
            if (!sessionId) {
                throw dist.ethErrors.provider.unauthorized();
            }
            return fetch(`${walletServer}/api/${blockchainName}${url}`, Object.assign({ headers: {
                    'Content-Type': 'application/json',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Session-Identifier': sessionId,
                } }, options))
                .then((response) => responseSessionGuard(response, sessionKey, () => {
                var _a;
                (_a = this.eventListeners) === null || _a === void 0 ? void 0 : _a.disconnect.forEach((listener) => listener(dist.ethErrors.provider.disconnected()));
            }))
                .catch((e) => {
                if ((e === null || e === void 0 ? void 0 : e.error_code) === 'unsupported_method') {
                    throw dist.ethErrors.rpc.methodNotSupported('Method Not Supported: ' + e.message);
                }
                else {
                    throw dist.ethErrors.rpc.server({
                        code: -32005,
                        message: `Blocto server error: ${e.message}`,
                    });
                }
            });
        });
    }
    responseListener(frame, objectKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const { walletServer } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            return new Promise((resolve, reject) => addSelfRemovableHandler('message', (event, removeEventListener) => {
                const e = event;
                if (e.origin === walletServer &&
                    e.data.type === 'ETH:FRAME:RESPONSE') {
                    if (e.data.status === 'APPROVED') {
                        removeEventListener();
                        detatchFrame(frame);
                        resolve(e.data[objectKey]);
                    }
                    if (e.data.status === 'DECLINED') {
                        removeEventListener();
                        detatchFrame(frame);
                        if (e.data.errorCode === 'incorrect_session_id') {
                            this.handleDisconnect();
                        }
                        reject(dist.ethErrors.provider.userRejectedRequest(e.data.errorMessage));
                    }
                }
                if (e.data.type === 'ETH:FRAME:CLOSE') {
                    removeEventListener();
                    detatchFrame(frame);
                    reject(dist.ethErrors.provider.userRejectedRequest('User declined the request'));
                }
            }));
        });
    }
    setIframe(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                throw dist.ethErrors.provider.custom({
                    code: 1001,
                    message: 'Blocto SDK only works in browser environment',
                });
            }
            const { walletServer, blockchainName } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            const frame = createFrame(`${walletServer}/${this.appId}/${blockchainName}${url}`);
            attachFrame(frame);
            return frame;
        });
    }
    // eip-1102 alias
    // DEPRECATED API: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md
    enable(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const { walletServer, blockchainName, sessionKey } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            const existedSDK = window.ethereum;
            if (existedSDK && existedSDK.isBlocto) {
                if (existedSDK.chainId !== this.chainId) {
                    yield existedSDK.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: this.chainId }],
                    });
                    yield existedSDK.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: this.chainId }],
                    });
                    setChainAddress(sessionKey, blockchainName, [existedSDK.address]);
                }
                return new Promise((resolve, reject) => 
                // add a small delay to make sure the network has been switched
                setTimeout(() => existedSDK.enable().then(resolve).catch(reject), 10));
            }
            const address = getChainAddress(sessionKey, blockchainName);
            if (address) {
                return new Promise((resolve) => {
                    resolve(address);
                });
            }
            const params = new URLSearchParams();
            params.set('l6n', window.location.origin);
            params.set('v', SDK_VERSION);
            const emailParam = email && isEmail(email) ? `/${email}` : '';
            const loginFrame = yield this.setIframe(`/authn${emailParam}?${params.toString()}`);
            return new Promise((resolve, reject) => {
                addSelfRemovableHandler('message', (event, removeListener) => {
                    var _a;
                    const e = event;
                    if (e.origin === walletServer) {
                        if (e.data.type === 'ETH:FRAME:RESPONSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            (_a = this.eventListeners) === null || _a === void 0 ? void 0 : _a.connect.forEach((listener) => listener({ chainId: this.chainId }));
                            setAccountStorage(sessionKey, {
                                code: e.data.code,
                                connected: true,
                                accounts: {
                                    [blockchainName]: [e.data.addr],
                                },
                            }, e.data.exp);
                            resolve([e.data.addr]);
                        }
                        if (e.data.type === 'ETH:FRAME:CLOSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            reject(dist.ethErrors.provider.userRejectedRequest());
                        }
                    }
                });
            });
        });
    }
    fetchAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            const { blockchainName, sessionKey } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            const { accounts } = yield this.bloctoApi(`/accounts`);
            setChainAddress(sessionKey, blockchainName, accounts);
            return accounts;
        });
    }
    handleReadRequests(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            return fetch(this.rpc, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.assign({ id: 1, jsonrpc: '2.0' }, payload)),
            })
                .then((response) => response.json())
                .catch((e) => {
                throw dist.ethErrors.rpc.internal(e);
            });
        });
    }
    handleSign({ method, params }) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = '';
            if (Array.isArray(params)) {
                if (method === 'eth_sign') {
                    message = isHexString(params[1])
                        ? params[1].slice(2)
                        : utf8ToHex(params[1]);
                }
                else if (method === 'personal_sign') {
                    message = isHexString(params[0])
                        ? params[0].slice(2)
                        : utf8ToHex(params[0]);
                }
                else if ([
                    'eth_signTypedData',
                    'eth_signTypedData_v3',
                    'eth_signTypedData_v4',
                ].includes(method)) {
                    message = params[1];
                    const { domain } = JSON.parse(message);
                    if (isHexString(domain.chainId)) {
                        throw dist.ethErrors.rpc.invalidParams(`Provided chainId "${domain.chainId}" must be a number`);
                    }
                    if (parseChainId(domain.chainId) !== parseChainId(this.chainId)) {
                        throw dist.ethErrors.rpc.invalidParams(`Provided chainId "${domain.chainId}" must match the active chainId "${parseChainId(this.chainId)}"`);
                    }
                }
            }
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            const { signatureId } = yield this.bloctoApi(`/user-signature`, { method: 'POST', body: JSON.stringify({ method, message }) });
            const signFrame = yield this.setIframe(`/user-signature/${signatureId}`);
            return this.responseListener(signFrame, 'signature');
        });
    }
    handleSendTransaction(payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            if (!isValidTransaction((_a = payload.params) === null || _a === void 0 ? void 0 : _a[0])) {
                throw dist.ethErrors.rpc.invalidParams();
            }
            const { authorizationId } = yield this.bloctoApi(`/authz`, { method: 'POST', body: JSON.stringify(payload.params) });
            const authzFrame = yield this.setIframe(`/authz/${authorizationId}`);
            return this.responseListener(authzFrame, 'txHash');
        });
    }
    handleSendBatchTransaction(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            const extractParams = (params) => params.map((param) => 'params' in param
                ? param.params[0] // handle passing web3.eth.sendTransaction.request(...) as a parameter with params
                : param);
            const formatParams = extractParams(payload.params);
            const copyPayload = Object.assign(Object.assign({}, payload), { params: formatParams });
            if (!isValidTransactions(copyPayload.params)) {
                throw dist.ethErrors.rpc.invalidParams();
            }
            return this.handleSendTransaction(copyPayload);
        });
    }
    handleSendUserOperation(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            const { authorizationId } = yield this.bloctoApi(`/user-operation`, {
                method: 'POST',
                body: JSON.stringify(payload.params),
            });
            const userOPFrame = yield this.setIframe(`/user-operation/${authorizationId}`);
            return this.responseListener(userOPFrame, 'userOpHash');
        });
    }
    handleBundler(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_checkNetworkMatched).call(this);
            return this.bloctoApi(`/rpc/bundler`, {
                method: 'POST',
                body: JSON.stringify(Object.assign({ id: 1, jsonrpc: '2.0' }, payload)),
            });
        });
    }
    handleDisconnect() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.ethereum;
            if (existedSDK && existedSDK.isBlocto) {
                return existedSDK.disconnect();
            }
            const { sessionKey, blockchainName } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
            removeChainAddress(sessionKey, blockchainName);
            (_a = this.eventListeners) === null || _a === void 0 ? void 0 : _a.disconnect.forEach((listener) => listener(dist.ethErrors.provider.disconnected()));
        });
    }
    loadSwitchableNetwork(networkList) {
        return __awaiter(this, void 0, void 0, function* () {
            // setup switchable list if user set networkList
            if (networkList === null || networkList === void 0 ? void 0 : networkList.length) {
                const listToAdd = networkList.map(({ chainId, rpcUrls }) => {
                    if (!chainId)
                        throw dist.ethErrors.rpc.invalidParams('Empty chainId');
                    if (!(rpcUrls === null || rpcUrls === void 0 ? void 0 : rpcUrls.length))
                        throw dist.ethErrors.rpc.invalidParams('Empty rpcUrls');
                    return __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_addToSwitchable).call(this, {
                        chainId: `${parseChainId(chainId)}`,
                        rpcUrls,
                    });
                });
                return Promise.all(listToAdd).then(() => null);
            }
            else {
                throw dist.ethErrors.rpc.invalidParams('Empty networkList');
            }
        });
    }
}
_EthereumProvider_instances = new WeakSet(), _EthereumProvider_getBloctoProperties = function _EthereumProvider_getBloctoProperties() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!Object.keys(this._blocto.supportNetworkList).length) {
            yield getEvmSupport()
                .then((result) => (this._blocto.supportNetworkList = result))
                .catch((e) => {
                throw dist.ethErrors.provider.custom({
                    code: 1001,
                    message: `Get blocto server failed: ${e.message}`,
                });
            });
        }
        const { chain_id, name, network_type, blocto_service_environment, display_name, } = this._blocto.supportNetworkList[this.networkVersion];
        if (!chain_id)
            throw dist.ethErrors.provider.unsupportedMethod(`Get support chain failed: ${this.networkVersion} might not be supported yet.`);
        this._blocto = Object.assign(Object.assign({}, this._blocto), { sessionKey: ETH_SESSION_KEY_MAPPING[blocto_service_environment], walletServer: this.injectedWalletServer ||
                ETH_ENV_WALLET_SERVER_MAPPING[blocto_service_environment], blockchainName: name, networkType: network_type, switchableNetwork: Object.assign(Object.assign({}, this._blocto.switchableNetwork), { [chain_id]: {
                    name,
                    display_name,
                    network_type,
                    wallet_web_url: this._blocto.walletServer,
                    rpc_url: this.rpc,
                } }) });
        return this._blocto;
    });
}, _EthereumProvider_addToSwitchable = function _EthereumProvider_addToSwitchable({ chainId, rpcUrls, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { supportNetworkList } = yield __classPrivateFieldGet(this, _EthereumProvider_instances, "m", _EthereumProvider_getBloctoProperties).call(this);
        const { chain_id, name, display_name, network_type, blocto_service_environment, } = supportNetworkList[chainId];
        const wallet_web_url = ETH_ENV_WALLET_SERVER_MAPPING[blocto_service_environment];
        this._blocto.switchableNetwork[chain_id] = {
            name,
            display_name,
            network_type,
            wallet_web_url,
            rpc_url: rpcUrls[0],
        };
    });
}, _EthereumProvider_checkNetworkMatched = function _EthereumProvider_checkNetworkMatched() {
    const existedSDK = window.ethereum;
    if (existedSDK &&
        existedSDK.isBlocto &&
        parseChainId(existedSDK.chainId) !== parseChainId(this.chainId)) {
        throw dist.ethErrors.provider.chainDisconnected();
    }
};

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) ; else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0;
    var b58 = new Uint8Array(size);
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0;
        b58[it1] = (carry % BASE) >>> 0;
        carry = (carry / BASE) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      pbegin++;
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]); }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0;
        // Skip and count leading '1's.
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0; // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size);
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
      if (carry === 255) { return }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0;
        b256[it3] = (carry % 256) >>> 0;
        carry = (carry / 256) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      psz++;
    }
        // Skip leading zeroes in b256.
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string);
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
var src = base;

const basex = src;
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

var bs58 = basex(ALPHABET);

var bs58$1 = /*@__PURE__*/getDefaultExportFromCjs(bs58);

let Solana;
try {
    Solana = require('@solana/web3.js');
}
catch (_a) {
    // prevent crash if there is no @solana/web3.js.
}
class SolanaProvider extends BloctoProvider {
    constructor({ net = 'mainnet-beta', server, appId, rpc, }) {
        super();
        invariant(net, "'net' is required");
        invariant(Object.values(SOL_NET).includes(net), 'unsupported net');
        this.net = net;
        this.rpc =
            rpc ||
                (net === 'mainnet-beta'
                    ? 'https://free.rpcpool.com'
                    : `https://api.${net}.solana.com`);
        this.server = server || SOL_NET_SERVER_MAPPING[this.net] || '';
        this.appId = appId || DEFAULT_APP_ID;
        this.sessionKey = SOL_SESSION_KEY_MAPPING[this.net];
        if (!Solana) {
            throw new Error('No @solana/web3.js installed. Please install it to interact with Solana.');
        }
    }
    request(payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.solana;
            if (existedSDK && existedSDK.isBlocto) {
                return existedSDK.request(payload);
            }
            if (!getChainAddress(this.sessionKey, CHAIN.SOLANA)) {
                yield this.connect();
            }
            try {
                let response = null;
                let result = null;
                switch (payload.method) {
                    case 'connect':
                        result = yield this.fetchAccounts();
                        break;
                    case 'disconnect':
                        this.disconnect();
                        break;
                    case 'getAccounts':
                        result = ((_a = getChainAddress(this.sessionKey, CHAIN.SOLANA)) === null || _a === void 0 ? void 0 : _a.length)
                            ? getChainAddress(this.sessionKey, CHAIN.SOLANA)
                            : yield this.fetchAccounts();
                        break;
                    case 'getAccountInfo': {
                        // Format the data as the same format returning from Connection.getAccountInfo from @solana/web3.js
                        // ref: https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getAccountInfo
                        const accountInfo = yield this.handleReadRequests(payload);
                        const [bufferData, encoding] = accountInfo.result.value.data;
                        result = Object.assign(Object.assign({}, accountInfo.result.value), { data: Buffer.from(bufferData, encoding), owner: new Solana.PublicKey(accountInfo.result.value.owner) });
                        break;
                    }
                    // custom JSON-RPC method
                    case 'convertToProgramWalletTransaction':
                        result = yield this.handleConvertTransaction(payload);
                        break;
                    // custom JSON-RPC method
                    case 'signAndSendTransaction':
                        result = yield this.handleSignAndSendTransaction(payload);
                        break;
                    // block user from using traditional methods
                    case 'signTransaction':
                    case 'signAllTransactions':
                        throw new Error(`Blocto is program wallet, which doesn't support ${payload.method}. Use signAndSendTransaction instead.`);
                    default:
                        response = yield this.handleReadRequests(payload);
                }
                if (response && !response.result && response.error) {
                    const errorMessage = response.error.message
                        ? response.error.message
                        : 'Request failed';
                    throw new Error(errorMessage);
                }
                if (response)
                    return response.result;
                return result;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.solana;
            if (existedSDK && existedSDK.isBlocto) {
                return new Promise((resolve) => {
                    existedSDK.on('connect', () => {
                        setChainAddress(this.sessionKey, CHAIN.SOLANA, [
                            existedSDK.publicKey.toBase58(),
                        ]);
                        resolve();
                    });
                    existedSDK.connect();
                });
            }
            return new Promise((resolve, reject) => {
                if (typeof window === 'undefined') {
                    return reject('Currently only supported in browser');
                }
                if (getChainAddress(this.sessionKey, CHAIN.SOLANA)) {
                    return resolve();
                }
                const location = encodeURIComponent(window.location.origin);
                const loginFrame = createFrame(`${this.server}/${this.appId}/solana/authn?l6n=${location}&v=${SDK_VERSION}`);
                attachFrame(loginFrame);
                addSelfRemovableHandler('message', (event, removeListener) => {
                    const e = event;
                    if (e.origin === this.server) {
                        if (e.data.type === 'SOL:FRAME:RESPONSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            this.eventListeners.connect.forEach((listener) => listener(this.net));
                            setAccountStorage(this.sessionKey, {
                                code: e.data.code,
                                connected: true,
                                accounts: {
                                    [CHAIN.SOLANA]: [e.data.addr],
                                },
                            }, e.data.exp);
                            resolve();
                        }
                        if (e.data.type === 'SOL:FRAME:CLOSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            reject(new Error('User declined the login request'));
                        }
                    }
                });
            });
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.solana;
            if (existedSDK && existedSDK.isBlocto) {
                yield existedSDK.disconnect();
                return;
            }
            this.eventListeners.disconnect.forEach((listener) => listener(null));
            removeChainAddress(this.sessionKey, CHAIN.SOLANA);
        });
    }
    fetchAccounts() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = ((_a = getAccountStorage(this.sessionKey)) === null || _a === void 0 ? void 0 : _a.code) || '';
            const { accounts } = yield fetch(`${this.server}/api/solana/accounts`, {
                headers: {
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
            }).then((response) => responseSessionGuard(response, this.sessionKey));
            setChainAddress(this.sessionKey, CHAIN.SOLANA, accounts);
            return accounts;
        });
    }
    handleReadRequests(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(this.rpc, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.assign({ id: 1, jsonrpc: '2.0' }, payload)),
            }).then((response) => response.json());
        });
    }
    // solana web3 utility
    convertToProgramWalletTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.solana;
            if (existedSDK && existedSDK.isBlocto) {
                return existedSDK.convertToProgramWalletTransaction(transaction);
            }
            const message = yield this.request({
                method: 'convertToProgramWalletTransaction',
                params: {
                    message: transaction.serializeMessage().toString('hex'),
                },
            });
            return this.toTransaction(message, []);
        });
    }
    // solana web3 utility
    signAndSendTransaction(transaction, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.solana;
            if (existedSDK && existedSDK.isBlocto) {
                return existedSDK.signAndSendTransaction(transaction);
            }
            const extra = {};
            if (connection) {
                if (connection.commitment)
                    extra.commitment = connection.commitment;
                // if the connection object passed-in has different rpc endpoint, reconnect to it
                // eslint-disable-next-line no-underscore-dangle
                const rpc = connection ? connection._rpcEndpoint : null;
                if (rpc && rpc !== this.rpc) {
                    this.rpc = rpc;
                    this.disconnect();
                    yield this.connect();
                }
            }
            return this.request({
                method: 'signAndSendTransaction',
                params: Object.assign({ signatures: yield this.collectSignatures(transaction), message: transaction.serializeMessage().toString('hex') }, extra),
            });
        });
    }
    // solana web3 utility
    // eslint-disable-next-line class-methods-use-this
    toTransaction(raw, signatures) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = Solana.Message.from(Buffer.from(raw, 'hex'));
            const transaction = new Solana.Transaction();
            transaction.recentBlockhash = message.recentBlockhash;
            if (message.header.numRequiredSignatures > 0) {
                transaction.feePayer = message.accountKeys[0];
            }
            signatures.forEach((signature, index) => {
                const sigPubkeyPair = {
                    signature: signature === Solana.PublicKey.default.toBase58()
                        ? null
                        : bs58$1.decode(signature),
                    publicKey: message.accountKeys[index],
                };
                transaction.signatures.push(sigPubkeyPair);
            });
            message.instructions.forEach((instruction) => {
                const keys = instruction.accounts.map((account) => {
                    const pubkey = message.accountKeys[account];
                    return {
                        pubkey,
                        isSigner: account < message.header.numRequiredSignatures,
                        isWritable: message.isAccountWritable(account),
                    };
                });
                transaction.instructions.push(new Solana.TransactionInstruction({
                    keys,
                    programId: message.accountKeys[instruction.programIdIndex],
                    data: bs58$1.decode(instruction.data),
                }));
            });
            return transaction;
        });
    }
    // solana web3 utility
    // eslint-disable-next-line class-methods-use-this
    collectSignatures(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return transaction.signatures.reduce((acc, cur) => {
                if (cur.signature) {
                    acc[cur.publicKey.toBase58()] = cur.signature.toString('hex');
                }
                return acc;
            }, {});
        });
    }
    handleConvertTransaction(payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = ((_a = getAccountStorage(this.sessionKey)) === null || _a === void 0 ? void 0 : _a.code) || '';
            return fetch(`${this.server}/api/solana/convertToWalletTx`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
                body: JSON.stringify(payload.params),
            }).then((response) => responseSessionGuard(response, this.sessionKey));
        });
    }
    handleSignAndSendTransaction(payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = ((_a = getAccountStorage(this.sessionKey)) === null || _a === void 0 ? void 0 : _a.code) || '';
            const { authorizationId } = yield fetch(`${this.server}/api/solana/authz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
                body: JSON.stringify(payload.params),
            }).then((response) => responseSessionGuard(response, this.sessionKey));
            if (typeof window === 'undefined') {
                throw new Error('Currently only supported in browser');
            }
            const authzFrame = createFrame(`${this.server}/${this.appId}/solana/authz/${authorizationId}`);
            attachFrame(authzFrame);
            return new Promise((resolve, reject) => addSelfRemovableHandler('message', (event, removeEventListener) => {
                const e = event;
                if (e.origin === this.server &&
                    e.data.type === 'SOL:FRAME:RESPONSE') {
                    if (e.data.status === 'APPROVED') {
                        removeEventListener();
                        detatchFrame(authzFrame);
                        resolve(e.data.txHash);
                    }
                    if (e.data.status === 'DECLINED') {
                        removeEventListener();
                        detatchFrame(authzFrame);
                        if (e.data.errorCode === 'incorrect_session_id') {
                            this.disconnect();
                        }
                        reject(new Error(e.data.errorMessage));
                    }
                }
            }));
        });
    }
}

const checkMessagePayloadFormat = (payload) => {
    var _a, _b;
    const formattedPayload = Object.assign({}, payload);
    const { message, nonce, address, application, chainId } = payload;
    if (typeof message !== 'string') {
        formattedPayload.message = (_a = String(message)) !== null && _a !== void 0 ? _a : '';
    }
    if (typeof nonce !== 'string') {
        formattedPayload.nonce = (_b = String(nonce)) !== null && _b !== void 0 ? _b : '';
    }
    if (address && typeof address !== 'boolean') {
        formattedPayload.address = !!address;
    }
    if (application && typeof application !== 'boolean') {
        formattedPayload.application = !!application;
    }
    if (chainId && typeof chainId !== 'boolean') {
        formattedPayload.chainId = !!chainId;
    }
    return formattedPayload;
};
class AptosProvider extends BloctoProvider {
    constructor({ chainId, server, appId }) {
        super();
        this.publicKey = [];
        this.authKey = '';
        invariant(chainId, "'chainId' is required");
        invariant(appId, 'It is necessary to interact with Blocto wallet via your app id. Please visit https://developers.blocto.app for more details.');
        this.chainId = chainId;
        this.networkName = APT_CHAIN_ID_NAME_MAPPING[chainId];
        this.api = APT_CHAIN_ID_RPC_MAPPING[chainId];
        this.sessionKey = APT_SESSION_KEY_MAPPING[chainId];
        const defaultServer = APT_CHAIN_ID_SERVER_MAPPING[chainId];
        this.appId = appId || DEFAULT_APP_ID;
        this.server = server || defaultServer || '';
    }
    get publicAccount() {
        var _a;
        return {
            address: ((_a = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _a === void 0 ? void 0 : _a[0]) || null,
            publicKey: this.publicKey.length ? this.publicKey : null,
            // @todo: provide authkey
            authKey: null,
            minKeysRequired: 2,
        };
    }
    network() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                name: this.networkName,
                api: this.api,
                chainId: this.chainId.toString(),
            };
        });
    }
    isConnected() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return !!((_a = getAccountStorage(this.sessionKey)) === null || _a === void 0 ? void 0 : _a.code);
        });
    }
    signTransaction(transaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.bloctoAptos;
            if (existedSDK) {
                return existedSDK.signTransaction(transaction);
            }
            const hasConnected = yield this.isConnected();
            if (!hasConnected) {
                yield this.connect();
            }
            if (!((_a = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Fail to get account');
            }
            throw new Error('signTransaction method not supported.');
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.bloctoAptos;
            if (existedSDK) {
                yield existedSDK.disconnect();
                return;
            }
            removeChainAddress(this.sessionKey, CHAIN.APTOS);
        });
    }
    signAndSubmitTransaction(transaction, txOptions = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.bloctoAptos;
            if (existedSDK) {
                return existedSDK.signAndSubmitTransaction(transaction, txOptions);
            }
            const hasConnected = yield this.isConnected();
            if (!hasConnected) {
                yield this.connect();
            }
            if (!((_a = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Fail to get account');
            }
            const sessionId = ((_b = getAccountStorage(this.sessionKey)) === null || _b === void 0 ? void 0 : _b.code) || '';
            const { authorizationId } = yield fetch(`${this.server}/api/aptos/authz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
                body: JSON.stringify(Object.assign(Object.assign({}, transaction), txOptions)),
            }).then((response) => responseSessionGuard(response, this.sessionKey));
            if (typeof window === 'undefined') {
                throw new Error('Currently only supported in browser');
            }
            const authzFrame = createFrame(`${this.server}/${this.appId}/aptos/authz/${authorizationId}`);
            attachFrame(authzFrame);
            return new Promise((resolve, reject) => addSelfRemovableHandler('message', (event, removeEventListener) => {
                const e = event;
                if (e.origin === this.server &&
                    e.data.type === 'APTOS:FRAME:RESPONSE') {
                    if (e.data.status === 'APPROVED') {
                        removeEventListener();
                        detatchFrame(authzFrame);
                        resolve({ hash: e.data.txHash });
                    }
                    if (e.data.status === 'DECLINED') {
                        removeEventListener();
                        detatchFrame(authzFrame);
                        if (e.data.errorCode === 'incorrect_session_id') {
                            this.disconnect();
                        }
                        reject(new Error(e.data.errorMessage));
                    }
                }
            }));
        });
    }
    signMessage(payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.bloctoAptos;
            const formattedPayload = checkMessagePayloadFormat(payload);
            if (existedSDK) {
                return existedSDK.signMessage(formattedPayload);
            }
            const hasConnected = yield this.isConnected();
            if (!hasConnected) {
                yield this.connect();
            }
            if (!((_a = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Fail to get account');
            }
            if (typeof window === 'undefined') {
                throw new Error('Currently only supported in browser');
            }
            const sessionId = ((_b = getAccountStorage(this.sessionKey)) === null || _b === void 0 ? void 0 : _b.code) || '';
            const { signatureId } = yield fetch(`${this.server}/api/aptos/user-signature`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
                body: JSON.stringify(formattedPayload),
            }).then((response) => responseSessionGuard(response, this.sessionKey));
            const url = `${this.server}/${this.appId}/aptos/user-signature/${signatureId}`;
            const signFrame = createFrame(url);
            attachFrame(signFrame);
            return new Promise((resolve, reject) => addSelfRemovableHandler('message', (event, removeEventListener) => {
                const e = event;
                if (e.origin === this.server &&
                    e.data.type === 'APTOS:FRAME:RESPONSE') {
                    if (e.data.status === 'APPROVED') {
                        removeEventListener();
                        detatchFrame(signFrame);
                        resolve(e.data);
                    }
                    if (e.data.status === 'DECLINED') {
                        removeEventListener();
                        detatchFrame(signFrame);
                        if (e.data.errorCode === 'incorrect_session_id') {
                            this.disconnect();
                        }
                        reject(new Error(e.data.errorMessage));
                    }
                }
            }));
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const existedSDK = window.bloctoAptos;
            if (existedSDK) {
                return new Promise((resolve, reject) => 
                // add a small delay to make sure the network has been switched
                setTimeout(() => existedSDK.connect().then(resolve).catch(reject), 10));
            }
            return new Promise((resolve, reject) => {
                var _a, _b;
                if (typeof window === 'undefined') {
                    return reject('Currently only supported in browser');
                }
                if ((_a = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _a === void 0 ? void 0 : _a.length) {
                    return resolve({
                        address: ((_b = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _b === void 0 ? void 0 : _b[0]) || null,
                        publicKey: this.publicKey,
                        authKey: null,
                        minKeysRequired: 2,
                    });
                }
                const location = encodeURIComponent(window.location.origin);
                const loginFrame = createFrame(`${this.server}/${this.appId}/aptos/authn?l6n=${location}&v=${SDK_VERSION}}`);
                attachFrame(loginFrame);
                addSelfRemovableHandler('message', (event, removeListener) => __awaiter(this, void 0, void 0, function* () {
                    var _c, _d, _e;
                    const e = event;
                    if (e.origin === this.server) {
                        if (e.data.type === 'APTOS:FRAME:RESPONSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            setAccountStorage(this.sessionKey, {
                                code: e.data.code,
                                connected: true,
                                accounts: {
                                    [CHAIN.APTOS]: [e.data.addr],
                                },
                            }, e.data.exp);
                            if ((_c = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _c === void 0 ? void 0 : _c.length) {
                                try {
                                    const { public_keys: publicKeys } = yield fetch(`${this.server}/blocto/aptos/accounts/${(_d = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _d === void 0 ? void 0 : _d[0]}`).then((response) => response.json());
                                    this.publicKey = publicKeys || [];
                                    resolve({
                                        address: ((_e = getChainAddress(this.sessionKey, CHAIN.APTOS)) === null || _e === void 0 ? void 0 : _e[0]) || '',
                                        publicKey: this.publicKey,
                                        authKey: null,
                                        minKeysRequired: 2,
                                    });
                                }
                                catch (err) {
                                    return reject(e);
                                }
                            }
                            else {
                                // @todo: better error
                                return reject();
                            }
                        }
                        if (e.data.type === 'APTOS:FRAME:CLOSE') {
                            removeListener();
                            detatchFrame(loginFrame);
                            reject(new Error('User declined the login request'));
                        }
                    }
                }));
            });
        });
    }
    fetchAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = ((_a = getAccountStorage(this.sessionKey)) === null || _a === void 0 ? void 0 : _a.code) || '';
            const { accounts } = yield fetch(`${this.server}/api/aptos/accounts`, {
                headers: {
                    // We already check the existence in the constructor
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'Blocto-Application-Identifier': this.appId,
                    'Blocto-Session-Identifier': sessionId,
                },
            }).then((response) => responseSessionGuard(response, this.sessionKey));
            setChainAddress(this.sessionKey, CHAIN.APTOS, accounts);
            return (accounts === null || accounts === void 0 ? void 0 : accounts[0]) || '';
        });
    }
}

class BloctoSDK {
    constructor({ appId, ethereum, solana, aptos }) {
        if (ethereum) {
            this.ethereum = new EthereumProvider(Object.assign(Object.assign({}, ethereum), { appId }));
        }
        if (solana) {
            this.solana = new SolanaProvider(Object.assign(Object.assign({}, solana), { appId }));
        }
        if (aptos) {
            this.aptos = new AptosProvider(Object.assign(Object.assign({}, aptos), { appId }));
        }
    }
}

var _provider = /*#__PURE__*/new WeakMap();
var _onAccountsChangedBind = /*#__PURE__*/new WeakMap();
var _onChainChangedBind = /*#__PURE__*/new WeakMap();
var _onDisconnectBind = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
var _handleConnectReset = /*#__PURE__*/new WeakSet();
class BloctoConnector extends WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options = {}
    } = _ref;
    super({
      chains,
      options
    });
    _classPrivateMethodInitSpec(this, _handleConnectReset);
    _classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    _defineProperty(this, "id", walletIds.blocto);
    _defineProperty(this, "name", "Blocto");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onAccountsChangedBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onChainChangedBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onDisconnectBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _onAccountsChangedBind, this.onAccountsChanged.bind(this));
    _classPrivateFieldSet(this, _onChainChangedBind, this.onChainChanged.bind(this));
    _classPrivateFieldSet(this, _onDisconnectBind, this.onDisconnect.bind(this));
  }
  async connect(config) {
    try {
      const provider = await this.getProvider(config);
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider
      };
    } catch (error) {
      _classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
      if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_disconnect"
    });
    this.removeListeners();
    _classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    const [address] = accounts || [];
    if (!address) {
      throw new Error("No accounts found");
    }
    return address;
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId(chainId);
  }
  getProvider() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!_classPrivateFieldGet(this, _provider)) {
      const _chainId = chainId ?? this.options.chainId ?? this.chains[0]?.chainId ?? 1;
      const _rpc = this.chains.find(x => x.chainId === _chainId)?.rpc[0];
      _classPrivateFieldSet(this, _provider, new BloctoSDK({
        ethereum: {
          chainId: _chainId,
          rpc: _rpc
        },
        appId: this.options.appId
      })?.ethereum);
    }
    if (!_classPrivateFieldGet(this, _provider)) {
      throw new ConnectorNotFoundError();
    }
    return Promise.resolve(_classPrivateFieldGet(this, _provider));
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    return !!_classPrivateFieldGet(this, _provider)?._blocto?.sessionKey ?? false;
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = hexValue(chainId);
    const chain = this.chains.find(x => x.chainId === chainId);
    if (!chain) {
      throw new SwitchChainError(new Error("chain not found on connector."));
    }
    const isBloctoSupportChain = provider._blocto.supportNetworkList[`${chainId}`];
    if (!isBloctoSupportChain) {
      throw new SwitchChainError(new Error(`Blocto unsupported chain: ${id}`));
    }
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: id,
          rpcUrls: getValidPublicRPCUrl(chain) // no client id on purpose here
        }]
      });
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return chain;
    } catch (error) {
      if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
  onAccountsChanged() {
    // not supported yet
  }
  async onChainChanged(chain) {
    const id = normalizeChainId(chain);
    const unsupported = this.isChainUnsupported(id);
    const account = await this.getAccount();
    this.emit("change", {
      chain: {
        id,
        unsupported
      },
      account
    });
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", _classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.on("chainChanged", _classPrivateFieldGet(this, _onChainChangedBind));
    provider.on("disconnect", _classPrivateFieldGet(this, _onDisconnectBind));
  }
  async removeListeners() {
    const provider = await this.getProvider();
    provider.off("accountsChanged", _classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.off("chainChanged", _classPrivateFieldGet(this, _onChainChangedBind));
    provider.off("disconnect", _classPrivateFieldGet(this, _onDisconnectBind));
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}
function _handleConnectReset2() {
  _classPrivateFieldSet(this, _provider, undefined);
}

export { BloctoConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-blocto.esm-04c619e7.js.map
