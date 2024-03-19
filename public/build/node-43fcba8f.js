import { aB as commonjsGlobal, bQ as getAugmentedNamespace, aA as getDefaultExportFromCjs } from './App-40ca2dcc.js';
import require$$0 from 'events';
import require$$3 from 'net';
import require$$1$1 from 'https';
import require$$1$2 from 'http';
import require$$4 from 'tls';
import require$$0$1 from 'crypto';
import Stream from 'stream';
import Url from 'url';
import zlib$1 from 'zlib';
import { r as requireNodeGypBuild } from './index-612ded02.js';
import require$$0$2 from 'os';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

const getProtocol = location => {
  if (location === 'injected') return 'injected'
  if (location.endsWith('.ipc')) return 'ipc'
  if (location.startsWith('wss://') || location.startsWith('ws://')) return 'ws'
  if (location.startsWith('https://') || location.startsWith('http://')) return 'http'
  return ''
};

var resolve$1 = (targets, presets) => {
  return [].concat(...[].concat(targets).map(provider => {
    if (presets[provider]) {
      return presets[provider].map(location => ({ type: provider, location, protocol: getProtocol(location) }))
    } else {
      return { type: 'custom', location: provider, protocol: getProtocol(provider) }
    }
  })).filter(provider => {
    if (provider.protocol || provider.type === 'injected') {
      return true
    } else {
      console.log('eth-provider | Invalid provider preset/location: "' + provider.location + '"');
      return false
    }
  })
};

var dist$1 = {};

var payload = {};

Object.defineProperty(payload, "__esModule", { value: true });
payload.create = void 0;
function create(method, params = [], id, targetChain) {
    const payload = {
        id, method, params, jsonrpc: '2.0'
    };
    if (targetChain) {
        payload.chainId = targetChain;
    }
    if (payload.method === 'eth_sendTransaction') {
        const mismatchedChain = isChainMismatch(payload);
        if (mismatchedChain) {
            throw new Error(`Payload chainId (${mismatchedChain}) inconsistent with specified target chainId: ${targetChain}`);
        }
        return updatePayloadChain(payload);
    }
    return payload;
}
payload.create = create;
function isChainMismatch(payload) {
    if (payload.method !== 'eth_sendTransaction')
        return false;
    const tx = payload.params[0] || {};
    const chainId = tx.chainId;
    return ('chainId' in tx) && parseInt(chainId) !== parseInt(payload.chainId || chainId);
}
function updatePayloadChain(payload) {
    const tx = payload.params[0] || {};
    return { ...payload, params: [{ ...tx, chainId: tx.chainId || payload.chainId }, ...payload.params.slice(1)] };
}

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(dist$1, "__esModule", { value: true });
const events_1 = __importDefault(require$$0);
const payload_1 = payload;
class Provider extends events_1.default {
    constructor(connection) {
        super();
        this.promises = {};
        this.attemptedSubscriptions = new Set();
        this.subscriptions = [];
        this.checkConnectionRunning = false;
        this.nextId = 1;
        this.connected = false;
        this.accounts = [];
        this.selectedAddress = undefined;
        this.coinbase = undefined;
        this.enable = this.enable.bind(this);
        this.doSend = this.doSend.bind(this);
        this.send = this.send.bind(this);
        this.sendBatch = this.sendBatch.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.resumeSubscriptions = this.resumeSubscriptions.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this.sendAsyncBatch = this.sendAsyncBatch.bind(this);
        this.isConnected = this.isConnected.bind(this);
        this.close = this.close.bind(this);
        this.request = this.request.bind(this);
        this.connection = connection;
        this.on('connect', this.resumeSubscriptions);
        this.connection.on('connect', () => this.checkConnection(1000));
        this.connection.on('close', () => {
            this.connected = false;
            this.attemptedSubscriptions.clear();
            this.emit('close');
            this.emit('disconnect');
        });
        this.connection.on('payload', payload => {
            const { id, method, error, result } = payload;
            if (typeof id !== 'undefined') {
                if (this.promises[id]) { // Fulfill promise
                    const requestMethod = this.promises[id].method;
                    if (requestMethod && ['eth_accounts', 'eth_requestAccounts'].includes(requestMethod)) {
                        const accounts = result || [];
                        this.accounts = accounts;
                        this.selectedAddress = accounts[0];
                        this.coinbase = accounts[0];
                    }
                    payload.error ? this.promises[id].reject(error) : this.promises[id].resolve(result);
                    delete this.promises[id];
                }
            }
            else if (method && method.indexOf('_subscription') > -1) { // Emit subscription result
                // Events: connect, disconnect, chainChanged, chainsChanged, accountsChanged, assetsChanged, message
                this.emit(payload.params.subscription, payload.params.result);
                this.emit(method, payload.params); // Older EIP-1193
                this.emit('message', {
                    type: payload.method,
                    data: {
                        subscription: payload.params.subscription,
                        result: payload.params.result
                    }
                });
                this.emit('data', payload); // Backwards Compatibility
            }
        });
        this.on('newListener', event => {
            if (Object.keys(this.eventHandlers).includes(event)) {
                if (!this.attemptedSubscription(event) && this.connected) {
                    this.startSubscription(event);
                    if (event === 'networkChanged') {
                        console.warn('The networkChanged event is being deprecated, use chainChanged instead');
                    }
                }
            }
        });
        this.eventHandlers = {
            networkChanged: netId => {
                this.networkVersion = (typeof netId === 'string') ? parseInt(netId) : netId;
                this.emit('networkChanged', this.networkVersion);
            },
            chainChanged: chainId => {
                this.providerChainId = chainId;
                if (!this.manualChainId) {
                    this.emit('chainChanged', chainId);
                }
            },
            chainsChanged: chains => {
                this.emit('chainsChanged', chains);
            },
            accountsChanged: (accounts) => {
                this.selectedAddress = accounts[0];
                this.emit('accountsChanged', accounts);
            },
            assetsChanged: assets => {
                this.emit('assetsChanged', assets);
            }
        };
    }
    get chainId() {
        return this.manualChainId || this.providerChainId;
    }
    async checkConnection(retryTimeout = 4000) {
        if (this.checkConnectionRunning || this.connected)
            return;
        clearTimeout(this.checkConnectionTimer);
        this.checkConnectionTimer = undefined;
        this.checkConnectionRunning = true;
        try {
            this.networkVersion = await this.doSend('net_version', [], undefined, false);
            this.providerChainId = await this.doSend('eth_chainId', [], undefined, false);
            this.connected = true;
        }
        catch (e) {
            this.checkConnectionTimer = setTimeout(() => this.checkConnection(), retryTimeout);
            this.connected = false;
        }
        finally {
            this.checkConnectionRunning = false;
            if (this.connected) {
                this.emit('connect', { chainId: this.providerChainId });
            }
        }
    }
    attemptedSubscription(event) {
        return this.attemptedSubscriptions.has(event);
    }
    setSubscriptionAttempted(event) {
        this.attemptedSubscriptions.add(event);
    }
    async startSubscription(event) {
        console.debug(`starting subscription for ${event} events`);
        this.setSubscriptionAttempted(event);
        try {
            const eventId = await (this.subscribe('eth_subscribe', event));
            this.on(eventId, this.eventHandlers[event]);
        }
        catch (e) {
            console.warn(`Unable to subscribe to ${event}`, e);
        }
    }
    resumeSubscriptions() {
        Object.keys(this.eventHandlers).forEach(event => {
            if (this.listenerCount(event) && !this.attemptedSubscription(event))
                this.startSubscription(event);
        });
    }
    async enable() {
        const accounts = await this.doSend('eth_accounts');
        if (accounts.length > 0) {
            this.accounts = accounts;
            this.selectedAddress = accounts[0];
            this.coinbase = accounts[0];
            this.emit('enable');
            return accounts;
        }
        else {
            const err = new Error('User Denied Full Provider');
            err.code = '4001';
            throw err;
        }
    }
    doSend(rawPayload, rawParams = [], targetChain = this.manualChainId, waitForConnection = true) {
        const sendFn = (resolve, reject) => {
            const method = (typeof rawPayload === 'object') ? rawPayload.method : rawPayload;
            const params = (typeof rawPayload === 'object') ? rawPayload.params : rawParams;
            const chainTarget = ((typeof rawPayload === 'object') && rawPayload.chainId) || targetChain;
            if (!method) {
                return reject(new Error('Method is not a valid string.'));
            }
            try {
                const payload = (0, payload_1.create)(method, params, this.nextId++, chainTarget);
                this.promises[payload.id] = {
                    resolve: (result) => resolve(result),
                    reject,
                    method: payload.method
                };
                this.connection.send(payload);
            }
            catch (e) {
                reject(e);
            }
        };
        if (this.connected || !waitForConnection) {
            return new Promise(sendFn);
        }
        return new Promise((resolve, reject) => {
            const resolveSend = () => {
                clearTimeout(disconnectTimer);
                return resolve(new Promise(sendFn));
            };
            const disconnectTimer = setTimeout(() => {
                this.off('connect', resolveSend);
                reject(new Error('Not connected'));
            }, 5000);
            this.once('connect', resolveSend);
        });
    }
    async send(methodOrPayload, callbackOrArgs) {
        if (typeof methodOrPayload === 'string' &&
            (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
            const params = callbackOrArgs;
            return this.doSend(methodOrPayload, params);
        }
        if (methodOrPayload &&
            typeof methodOrPayload === 'object' &&
            typeof callbackOrArgs === 'function') {
            // a callback was passed to send(), forward everything to sendAsync()
            const cb = callbackOrArgs;
            return this.sendAsync(methodOrPayload, cb);
        }
        return this.request(methodOrPayload);
    }
    sendBatch(requests) {
        return Promise.all(requests.map(payload => {
            return this.doSend(payload.method, payload.params);
        }));
    }
    async subscribe(type, method, params = []) {
        const id = await this.doSend(type, [method, ...params]);
        this.subscriptions.push(id);
        return id;
    }
    async unsubscribe(type, id) {
        const success = await this.doSend(type, [id]);
        if (success) {
            this.subscriptions = this.subscriptions.filter(_id => _id !== id); // Remove subscription
            this.removeAllListeners(id); // Remove listeners
            return success;
        }
    }
    async sendAsync(rawPayload, cb) {
        if (!cb || typeof cb !== 'function')
            return new Error('Invalid or undefined callback provided to sendAsync');
        if (!rawPayload)
            return cb(new Error('Invalid Payload'));
        // sendAsync can be called with an array for batch requests used by web3.js 0.x
        // this is not part of EIP-1193's backwards compatibility but we still want to support it
        if (Array.isArray(rawPayload)) {
            const payloads = rawPayload.map(p => ({ ...p, jsonrpc: '2.0' }));
            const callback = cb;
            return this.sendAsyncBatch(payloads, callback);
        }
        else {
            const payload = { ...rawPayload, jsonrpc: '2.0' };
            const callback = cb;
            try {
                const result = await this.doSend(payload.method, payload.params);
                callback(null, { id: payload.id, jsonrpc: payload.jsonrpc, result });
            }
            catch (e) {
                callback(e);
            }
        }
    }
    async sendAsyncBatch(payloads, cb) {
        try {
            const results = await this.sendBatch(payloads);
            const result = results.map((entry, index) => {
                return { id: payloads[index].id, jsonrpc: payloads[index].jsonrpc, result: entry };
            });
            cb(null, result);
        }
        catch (e) {
            cb(e);
        }
    }
    isConnected() {
        return this.connected;
    }
    close() {
        if (this.connection && this.connection.close)
            this.connection.close();
        this.off('connect', this.resumeSubscriptions);
        this.connected = false;
        const error = new Error('Provider closed, subscription lost, please subscribe again.');
        this.subscriptions.forEach(id => this.emit(id, error)); // Send Error objects to any open subscriptions
        this.subscriptions = []; // Clear subscriptions
        this.manualChainId = undefined;
        this.providerChainId = undefined;
        this.networkVersion = undefined;
        this.selectedAddress = undefined;
        this.coinbase = undefined;
    }
    async request(payload) {
        return this.doSend(payload.method, payload.params, payload.chainId);
    }
    setChain(chainId) {
        if (typeof chainId === 'number')
            chainId = '0x' + chainId.toString(16);
        const chainChanged = (chainId !== this.chainId);
        this.manualChainId = chainId;
        if (chainChanged) {
            this.emit('chainChanged', this.chainId);
        }
    }
}
dist$1.default = Provider;

const EventEmitter$7 = require$$0;

class ConnectionManager$1 extends EventEmitter$7 {
  constructor (connections, targets, options) {
    super();
    this.targets = targets;
    this.options = options;
    this.connections = connections;
    this.connected = false;
    this.status = 'loading';
    this.interval = options.interval || 5000;
    this.name = options.name || 'default';
    this.inSetup = true;
    this.connect();
  }

  connect (index = 0) {

    if (this.connection && this.connection.status === 'connected' && index >= this.connection.index) ; else if (this.targets.length === 0) ; else {
      const { protocol, location } = this.targets[index];
      this.connection = this.connections[protocol](location, this.options);

      const connectionErrorHandler = (err) => this.connectionError(index, err);

      this.connection.once('error', connectionErrorHandler);

      this.connection.on('connect', () => {
        this.connection.off('error', connectionErrorHandler);
        this.connection.once('error', (err) => this.onError(err));

        this.connection.once('close', () => {
          this.connected = false;
          this.emitClose();
          if (!this.closing) this.refresh();
        });

        this.connection.target = this.targets[index];
        this.connection.index = index;
        this.targets[index].status = this.connection.status;
        this.connected = true;
        this.inSetup = false;
        this.emit('connect');
      });

      this.connection.on('data', data => this.emit('data', data));
      this.connection.on('payload', payload => this.emit('payload', payload));
    }
  }

  onError (err) {
    if (this.listenerCount('error')) return this.emit('error', err)
    console.warn('[eth-provider] Uncaught connection error: ' + err.message);
  }

  refresh (interval = this.interval) {
    clearTimeout(this.connectTimer);
    this.connectTimer = setTimeout(() => this.connect(), interval);
  }

  connectionError (index, err) {
    if (this.connection && this.connection.close) this.connection.close();

    this.targets[index].status = err;
    if (this.targets.length - 1 === index) {
      this.inSetup = false;
      this.refresh();
    } else { // Not last target, move on the next connection option
      this.connect(++index);
    }
  }

  emitClose () {
    this.emit('close');
  }

  close () {
    this.closing = true;
    if (this.connection && this.connection.close && !this.connection.closed) {
      this.connection.close(); // Let event bubble from here
    } else {
      this.emit('close');
    }
    clearTimeout(this.connectTimer);
    clearTimeout(this.setupTimer);
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } });
  }

  send (payload) {
    if (this.inSetup) {
      this.setupTimer = setTimeout(() => this.send(payload), 100);
    } else if (this.connection.closed) {
      this.error(payload, 'Not connected', 4900);
    } else {
      this.connection.send(payload);
    }
  }
}

var ConnectionManager_1 = ConnectionManager$1;

const EventEmitter$6 = require$$0;
const EthereumProvider = dist$1.default;
const ConnectionManager = ConnectionManager_1;

const monitor = provider => {
  function update (status) {
    provider.status = status;
    if (provider instanceof EventEmitter$6) provider.emit('status', status);
  }

  async function checkSyncing () {
    try {
      if (await provider.send('eth_syncing')) {
        update('syncing');
      }
    } catch (e) {
      // don't do anything if it can't be determined whether the node is syncing or not
    }
  }

  async function checkConnected () {
    if (provider.inSetup) return setTimeout(checkConnected, 1000)

    try {
      await provider.send('eth_chainId');
      update('connected');

      setTimeout(checkSyncing, 500);
    } catch (e) {
      update('disconnected');
    }
  }

  update('loading');
  checkConnected();
  provider.on('connect', () => checkConnected());
  provider.on('close', () => update('disconnected'));
  return provider
};

var provider$1 = (connections, targets, options) => {
  // If window.ethereum and injected is a target in any priority, return ethereum provider
  if (connections.injected.__isProvider && targets.map(t => t.type).indexOf('injected') > -1) {
    delete connections.injected.__isProvider;
    return monitor(connections.injected)
  }
  const provider = new EthereumProvider(new ConnectionManager(connections, targets, options));
  provider.setMaxListeners(128);
  return monitor(provider)
};

var presets$1 = (options = {}) => {
  return {
    injected: ['injected'],
    frame: ['ws://127.0.0.1:1248', 'http://127.0.0.1:1248'],
    direct: ['ws://127.0.0.1:8546', 'http://127.0.0.1:8545'], // IPC paths will be prepended in Node/Electron
    infura: [`wss://mainnet.infura.io/ws/v3/${options.infuraId}`, `https://mainnet.infura.io/v3/${options.infuraId}`],
    alchemy: [`wss://eth-mainnet.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-mainnet.alchemyapi.io/v2/${options.alchemyId}`],
    infuraGoerli: [`wss://goerli.infura.io/ws/v3/${options.infuraId}`, `https://goerli.infura.io/v3/${options.infuraId}`],
    alchemyGoerli: [`wss://eth-goerli.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-goerli.alchemyapi.io/v2/${options.alchemyId}`],
    infuraPolygon: [`https://polygon-mainnet.infura.io/v3/${options.infuraId}`],
    infuraArbitrum: [`https://arbitrum-mainnet.infura.io/v3/${options.infuraId}`],
    infuraOptimism: [`https://optimism-mainnet.infura.io/v3/${options.infuraId}`],
    infuraSepolia: [`wss://sepolia.infura.io/ws/v3/${options.infuraId}`, `https://sepolia.infura.io/v3/${options.infuraId}`],
    gnosis: ['https://rpc.gnosischain.com'],
    optimism: ['https://mainnet.optimism.io']
  }
};

var bufferUtil$1 = {exports: {}};

var constants = {
  BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
  kListener: Symbol('kListener'),
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  NOOP: () => {}
};

var bufferutil = {exports: {}};

var fallback$1;
var hasRequiredFallback$1;

function requireFallback$1 () {
	if (hasRequiredFallback$1) return fallback$1;
	hasRequiredFallback$1 = 1;

	/**
	 * Masks a buffer using the given mask.
	 *
	 * @param {Buffer} source The buffer to mask
	 * @param {Buffer} mask The mask to use
	 * @param {Buffer} output The buffer where to store the result
	 * @param {Number} offset The offset at which to start writing
	 * @param {Number} length The number of bytes to mask.
	 * @public
	 */
	const mask = (source, mask, output, offset, length) => {
	  for (var i = 0; i < length; i++) {
	    output[offset + i] = source[i] ^ mask[i & 3];
	  }
	};

	/**
	 * Unmasks a buffer using the given mask.
	 *
	 * @param {Buffer} buffer The buffer to unmask
	 * @param {Buffer} mask The mask to use
	 * @public
	 */
	const unmask = (buffer, mask) => {
	  // Required until https://github.com/nodejs/node/issues/9006 is resolved.
	  const length = buffer.length;
	  for (var i = 0; i < length; i++) {
	    buffer[i] ^= mask[i & 3];
	  }
	};

	fallback$1 = { mask, unmask };
	return fallback$1;
}

var hasRequiredBufferutil;

function requireBufferutil () {
	if (hasRequiredBufferutil) return bufferutil.exports;
	hasRequiredBufferutil = 1;

	try {
	  bufferutil.exports = requireNodeGypBuild()(__dirname);
	} catch (e) {
	  bufferutil.exports = requireFallback$1();
	}
	return bufferutil.exports;
}

var unmask$1;
var mask;

const { EMPTY_BUFFER: EMPTY_BUFFER$3 } = constants;

/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */
function concat$1(list, totalLength) {
  if (list.length === 0) return EMPTY_BUFFER$3;
  if (list.length === 1) return list[0];

  const target = Buffer.allocUnsafe(totalLength);
  let offset = 0;

  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    target.set(buf, offset);
    offset += buf.length;
  }

  if (offset < totalLength) return target.slice(0, offset);

  return target;
}

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */
function _mask(source, mask, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
}

/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */
function _unmask(buffer, mask) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= mask[i & 3];
  }
}

/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */
function toArrayBuffer$1(buf) {
  if (buf.byteLength === buf.buffer.byteLength) {
    return buf.buffer;
  }

  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */
function toBuffer$2(data) {
  toBuffer$2.readOnly = true;

  if (Buffer.isBuffer(data)) return data;

  let buf;

  if (data instanceof ArrayBuffer) {
    buf = Buffer.from(data);
  } else if (ArrayBuffer.isView(data)) {
    buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  } else {
    buf = Buffer.from(data);
    toBuffer$2.readOnly = false;
  }

  return buf;
}

bufferUtil$1.exports = {
  concat: concat$1,
  mask: _mask,
  toArrayBuffer: toArrayBuffer$1,
  toBuffer: toBuffer$2,
  unmask: _unmask
};

/* istanbul ignore else  */
if (!process.env.WS_NO_BUFFER_UTIL) {
  try {
    const bufferUtil = requireBufferutil();

    mask = bufferUtil$1.exports.mask = function (source, mask, output, offset, length) {
      if (length < 48) _mask(source, mask, output, offset, length);
      else bufferUtil.mask(source, mask, output, offset, length);
    };

    unmask$1 = bufferUtil$1.exports.unmask = function (buffer, mask) {
      if (buffer.length < 32) _unmask(buffer, mask);
      else bufferUtil.unmask(buffer, mask);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}

var bufferUtilExports = bufferUtil$1.exports;

const kDone = Symbol('kDone');
const kRun = Symbol('kRun');

/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */
class Limiter$1 {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(concurrency) {
    this[kDone] = () => {
      this.pending--;
      this[kRun]();
    };
    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }

  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(job) {
    this.jobs.push(job);
    this[kRun]();
  }

  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [kRun]() {
    if (this.pending === this.concurrency) return;

    if (this.jobs.length) {
      const job = this.jobs.shift();

      this.pending++;
      job(this[kDone]);
    }
  }
}

var limiter = Limiter$1;

const zlib = zlib$1;

const bufferUtil = bufferUtilExports;
const Limiter = limiter;
const { kStatusCode: kStatusCode$2 } = constants;

const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError$1 = Symbol('error');

//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;

/**
 * permessage-deflate implementation.
 */
class PerMessageDeflate$4 {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(options, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold =
      this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      const concurrency =
        this._options.concurrencyLimit !== undefined
          ? this._options.concurrencyLimit
          : 10;
      zlibLimiter = new Limiter(concurrency);
    }
  }

  /**
   * @type {String}
   */
  static get extensionName() {
    return 'permessage-deflate';
  }

  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const params = {};

    if (this._options.serverNoContextTakeover) {
      params.server_no_context_takeover = true;
    }
    if (this._options.clientNoContextTakeover) {
      params.client_no_context_takeover = true;
    }
    if (this._options.serverMaxWindowBits) {
      params.server_max_window_bits = this._options.serverMaxWindowBits;
    }
    if (this._options.clientMaxWindowBits) {
      params.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (this._options.clientMaxWindowBits == null) {
      params.client_max_window_bits = true;
    }

    return params;
  }

  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(configurations) {
    configurations = this.normalizeParams(configurations);

    this.params = this._isServer
      ? this.acceptAsServer(configurations)
      : this.acceptAsClient(configurations);

    return this.params;
  }

  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate) {
      this._inflate.close();
      this._inflate = null;
    }

    if (this._deflate) {
      const callback = this._deflate[kCallback];

      this._deflate.close();
      this._deflate = null;

      if (callback) {
        callback(
          new Error(
            'The deflate stream was closed while data was being processed'
          )
        );
      }
    }
  }

  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(offers) {
    const opts = this._options;
    const accepted = offers.find((params) => {
      if (
        (opts.serverNoContextTakeover === false &&
          params.server_no_context_takeover) ||
        (params.server_max_window_bits &&
          (opts.serverMaxWindowBits === false ||
            (typeof opts.serverMaxWindowBits === 'number' &&
              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
        (typeof opts.clientMaxWindowBits === 'number' &&
          !params.client_max_window_bits)
      ) {
        return false;
      }

      return true;
    });

    if (!accepted) {
      throw new Error('None of the extension offers can be accepted');
    }

    if (opts.serverNoContextTakeover) {
      accepted.server_no_context_takeover = true;
    }
    if (opts.clientNoContextTakeover) {
      accepted.client_no_context_takeover = true;
    }
    if (typeof opts.serverMaxWindowBits === 'number') {
      accepted.server_max_window_bits = opts.serverMaxWindowBits;
    }
    if (typeof opts.clientMaxWindowBits === 'number') {
      accepted.client_max_window_bits = opts.clientMaxWindowBits;
    } else if (
      accepted.client_max_window_bits === true ||
      opts.clientMaxWindowBits === false
    ) {
      delete accepted.client_max_window_bits;
    }

    return accepted;
  }

  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(response) {
    const params = response[0];

    if (
      this._options.clientNoContextTakeover === false &&
      params.client_no_context_takeover
    ) {
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    }

    if (!params.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === 'number') {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      }
    } else if (
      this._options.clientMaxWindowBits === false ||
      (typeof this._options.clientMaxWindowBits === 'number' &&
        params.client_max_window_bits > this._options.clientMaxWindowBits)
    ) {
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    }

    return params;
  }

  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        let value = params[key];

        if (value.length > 1) {
          throw new Error(`Parameter "${key}" must have only a single value`);
        }

        value = value[0];

        if (key === 'client_max_window_bits') {
          if (value !== true) {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
            value = num;
          } else if (!this._isServer) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else if (key === 'server_max_window_bits') {
          const num = +value;
          if (!Number.isInteger(num) || num < 8 || num > 15) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
          value = num;
        } else if (
          key === 'client_no_context_takeover' ||
          key === 'server_no_context_takeover'
        ) {
          if (value !== true) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else {
          throw new Error(`Unknown parameter "${key}"`);
        }

        params[key] = value;
      });
    });

    return configurations;
  }

  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._compress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(data, fin, callback) {
    const endpoint = this._isServer ? 'client' : 'server';

    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._inflate = zlib.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits
      });
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on('error', inflateOnError);
      this._inflate.on('data', inflateOnData);
    }

    this._inflate[kCallback] = callback;

    this._inflate.write(data);
    if (fin) this._inflate.write(TRAILER);

    this._inflate.flush(() => {
      const err = this._inflate[kError$1];

      if (err) {
        this._inflate.close();
        this._inflate = null;
        callback(err);
        return;
      }

      const data = bufferUtil.concat(
        this._inflate[kBuffers],
        this._inflate[kTotalLength]
      );

      if (this._inflate._readableState.endEmitted) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];

        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._inflate.reset();
        }
      }

      callback(null, data);
    });
  }

  /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(data, fin, callback) {
    const endpoint = this._isServer ? 'server' : 'client';

    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._deflate = zlib.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits
      });

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      this._deflate.on('data', deflateOnData);
    }

    this._deflate[kCallback] = callback;

    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      if (!this._deflate) {
        //
        // The deflate stream was closed while data was being processed.
        //
        return;
      }

      let data = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );

      if (fin) data = data.slice(0, data.length - 4);

      //
      // Ensure that the callback will not be called again in
      // `PerMessageDeflate#cleanup()`.
      //
      this._deflate[kCallback] = null;

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
        this._deflate.reset();
      }

      callback(null, data);
    });
  }
}

var permessageDeflate = PerMessageDeflate$4;

/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}

/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;

  if (
    this[kPerMessageDeflate]._maxPayload < 1 ||
    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
  ) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError$1] = new RangeError('Max payload size exceeded');
  this[kError$1].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
  this[kError$1][kStatusCode$2] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}

/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */
function inflateOnError(err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode$2] = 1007;
  this[kCallback](err);
}

var validation = {exports: {}};

var utf8Validate = {exports: {}};

var fallback;
var hasRequiredFallback;

function requireFallback () {
	if (hasRequiredFallback) return fallback;
	hasRequiredFallback = 1;

	/**
	 * Checks if a given buffer contains only correct UTF-8.
	 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
	 * Markus Kuhn.
	 *
	 * @param {Buffer} buf The buffer to check
	 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
	 * @public
	 */
	function isValidUTF8(buf) {
	  const len = buf.length;
	  let i = 0;

	  while (i < len) {
	    if ((buf[i] & 0x80) === 0x00) {  // 0xxxxxxx
	      i++;
	    } else if ((buf[i] & 0xe0) === 0xc0) {  // 110xxxxx 10xxxxxx
	      if (
	        i + 1 === len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i] & 0xfe) === 0xc0  // overlong
	      ) {
	        return false;
	      }

	      i += 2;
	    } else if ((buf[i] & 0xf0) === 0xe0) {  // 1110xxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 2 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 ||  // overlong
	        buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0  // surrogate (U+D800 - U+DFFF)
	      ) {
	        return false;
	      }

	      i += 3;
	    } else if ((buf[i] & 0xf8) === 0xf0) {  // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 3 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i + 3] & 0xc0) !== 0x80 ||
	        buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 ||  // overlong
	        buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4  // > U+10FFFF
	      ) {
	        return false;
	      }

	      i += 4;
	    } else {
	      return false;
	    }
	  }

	  return true;
	}

	fallback = isValidUTF8;
	return fallback;
}

var hasRequiredUtf8Validate;

function requireUtf8Validate () {
	if (hasRequiredUtf8Validate) return utf8Validate.exports;
	hasRequiredUtf8Validate = 1;

	try {
	  utf8Validate.exports = requireNodeGypBuild()(__dirname);
	} catch (e) {
	  utf8Validate.exports = requireFallback();
	}
	return utf8Validate.exports;
}

var isValidUTF8_1;

//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars$2 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
];

/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */
function isValidStatusCode$2(code) {
  return (
    (code >= 1000 &&
      code <= 1014 &&
      code !== 1004 &&
      code !== 1005 &&
      code !== 1006) ||
    (code >= 3000 && code <= 4999)
  );
}

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */
function _isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;

  while (i < len) {
    if ((buf[i] & 0x80) === 0) {
      // 0xxxxxxx
      i++;
    } else if ((buf[i] & 0xe0) === 0xc0) {
      // 110xxxxx 10xxxxxx
      if (
        i + 1 === len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i] & 0xfe) === 0xc0 // Overlong
      ) {
        return false;
      }

      i += 2;
    } else if ((buf[i] & 0xf0) === 0xe0) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      if (
        i + 2 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
      ) {
        return false;
      }

      i += 3;
    } else if ((buf[i] & 0xf8) === 0xf0) {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      if (
        i + 3 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i + 3] & 0xc0) !== 0x80 ||
        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
        buf[i] > 0xf4 // > U+10FFFF
      ) {
        return false;
      }

      i += 4;
    } else {
      return false;
    }
  }

  return true;
}

validation.exports = {
  isValidStatusCode: isValidStatusCode$2,
  isValidUTF8: _isValidUTF8,
  tokenChars: tokenChars$2
};

/* istanbul ignore else  */
if (!process.env.WS_NO_UTF_8_VALIDATE) {
  try {
    const isValidUTF8 = requireUtf8Validate();

    isValidUTF8_1 = validation.exports.isValidUTF8 = function (buf) {
      return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}

var validationExports = validation.exports;

const { Writable } = Stream;

const PerMessageDeflate$3 = permessageDeflate;
const {
  BINARY_TYPES: BINARY_TYPES$1,
  EMPTY_BUFFER: EMPTY_BUFFER$2,
  kStatusCode: kStatusCode$1,
  kWebSocket: kWebSocket$2
} = constants;
const { concat, toArrayBuffer, unmask } = bufferUtilExports;
const { isValidStatusCode: isValidStatusCode$1, isValidUTF8 } = validationExports;

const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;

/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */
class Receiver$1 extends Writable {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  constructor(options = {}) {
    super();

    this._binaryType = options.binaryType || BINARY_TYPES$1[0];
    this._extensions = options.extensions || {};
    this._isServer = !!options.isServer;
    this._maxPayload = options.maxPayload | 0;
    this._skipUTF8Validation = !!options.skipUTF8Validation;
    this[kWebSocket$2] = undefined;

    this._bufferedBytes = 0;
    this._buffers = [];

    this._compressed = false;
    this._payloadLength = 0;
    this._mask = undefined;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._opcode = 0;

    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];

    this._state = GET_INFO;
    this._loop = false;
  }

  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(chunk, encoding, cb) {
    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

    this._bufferedBytes += chunk.length;
    this._buffers.push(chunk);
    this.startLoop(cb);
  }

  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(n) {
    this._bufferedBytes -= n;

    if (n === this._buffers[0].length) return this._buffers.shift();

    if (n < this._buffers[0].length) {
      const buf = this._buffers[0];
      this._buffers[0] = buf.slice(n);
      return buf.slice(0, n);
    }

    const dst = Buffer.allocUnsafe(n);

    do {
      const buf = this._buffers[0];
      const offset = dst.length - n;

      if (n >= buf.length) {
        dst.set(this._buffers.shift(), offset);
      } else {
        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
        this._buffers[0] = buf.slice(n);
      }

      n -= buf.length;
    } while (n > 0);

    return dst;
  }

  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(cb) {
    let err;
    this._loop = true;

    do {
      switch (this._state) {
        case GET_INFO:
          err = this.getInfo();
          break;
        case GET_PAYLOAD_LENGTH_16:
          err = this.getPayloadLength16();
          break;
        case GET_PAYLOAD_LENGTH_64:
          err = this.getPayloadLength64();
          break;
        case GET_MASK:
          this.getMask();
          break;
        case GET_DATA:
          err = this.getData(cb);
          break;
        default:
          // `INFLATING`
          this._loop = false;
          return;
      }
    } while (this._loop);

    cb(err);
  }

  /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getInfo() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    const buf = this.consume(2);

    if ((buf[0] & 0x30) !== 0x00) {
      this._loop = false;
      return error(
        RangeError,
        'RSV2 and RSV3 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_2_3'
      );
    }

    const compressed = (buf[0] & 0x40) === 0x40;

    if (compressed && !this._extensions[PerMessageDeflate$3.extensionName]) {
      this._loop = false;
      return error(
        RangeError,
        'RSV1 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_1'
      );
    }

    this._fin = (buf[0] & 0x80) === 0x80;
    this._opcode = buf[0] & 0x0f;
    this._payloadLength = buf[1] & 0x7f;

    if (this._opcode === 0x00) {
      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (!this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          'invalid opcode 0',
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._opcode = this._fragmented;
    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
      if (this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._compressed = compressed;
    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
      if (!this._fin) {
        this._loop = false;
        return error(
          RangeError,
          'FIN must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_FIN'
        );
      }

      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (this._payloadLength > 0x7d) {
        this._loop = false;
        return error(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      }
    } else {
      this._loop = false;
      return error(
        RangeError,
        `invalid opcode ${this._opcode}`,
        true,
        1002,
        'WS_ERR_INVALID_OPCODE'
      );
    }

    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    this._masked = (buf[1] & 0x80) === 0x80;

    if (this._isServer) {
      if (!this._masked) {
        this._loop = false;
        return error(
          RangeError,
          'MASK must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_MASK'
        );
      }
    } else if (this._masked) {
      this._loop = false;
      return error(
        RangeError,
        'MASK must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_MASK'
      );
    }

    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
    else return this.haveLength();
  }

  /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength16() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    this._payloadLength = this.consume(2).readUInt16BE(0);
    return this.haveLength();
  }

  /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength64() {
    if (this._bufferedBytes < 8) {
      this._loop = false;
      return;
    }

    const buf = this.consume(8);
    const num = buf.readUInt32BE(0);

    //
    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
    // if payload length is greater than this number.
    //
    if (num > Math.pow(2, 53 - 32) - 1) {
      this._loop = false;
      return error(
        RangeError,
        'Unsupported WebSocket frame: payload length > 2^53 - 1',
        false,
        1009,
        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
      );
    }

    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
    return this.haveLength();
  }

  /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  haveLength() {
    if (this._payloadLength && this._opcode < 0x08) {
      this._totalPayloadLength += this._payloadLength;
      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
        this._loop = false;
        return error(
          RangeError,
          'Max payload size exceeded',
          false,
          1009,
          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
        );
      }
    }

    if (this._masked) this._state = GET_MASK;
    else this._state = GET_DATA;
  }

  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = false;
      return;
    }

    this._mask = this.consume(4);
    this._state = GET_DATA;
  }

  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  getData(cb) {
    let data = EMPTY_BUFFER$2;

    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = false;
        return;
      }

      data = this.consume(this._payloadLength);

      if (
        this._masked &&
        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
      ) {
        unmask(data, this._mask);
      }
    }

    if (this._opcode > 0x07) return this.controlMessage(data);

    if (this._compressed) {
      this._state = INFLATING;
      this.decompress(data, cb);
      return;
    }

    if (data.length) {
      //
      // This message is not compressed so its length is the sum of the payload
      // length of all fragments.
      //
      this._messageLength = this._totalPayloadLength;
      this._fragments.push(data);
    }

    return this.dataMessage();
  }

  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(data, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate$3.extensionName];

    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
      if (err) return cb(err);

      if (buf.length) {
        this._messageLength += buf.length;
        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
          return cb(
            error(
              RangeError,
              'Max payload size exceeded',
              false,
              1009,
              'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
            )
          );
        }

        this._fragments.push(buf);
      }

      const er = this.dataMessage();
      if (er) return cb(er);

      this.startLoop(cb);
    });
  }

  /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */
  dataMessage() {
    if (this._fin) {
      const messageLength = this._messageLength;
      const fragments = this._fragments;

      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];

      if (this._opcode === 2) {
        let data;

        if (this._binaryType === 'nodebuffer') {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === 'arraybuffer') {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else {
          data = fragments;
        }

        this.emit('message', data, true);
      } else {
        const buf = concat(fragments, messageLength);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          this._loop = false;
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('message', buf, false);
      }
    }

    this._state = GET_INFO;
  }

  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(data) {
    if (this._opcode === 0x08) {
      this._loop = false;

      if (data.length === 0) {
        this.emit('conclude', 1005, EMPTY_BUFFER$2);
        this.end();
      } else if (data.length === 1) {
        return error(
          RangeError,
          'invalid payload length 1',
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      } else {
        const code = data.readUInt16BE(0);

        if (!isValidStatusCode$1(code)) {
          return error(
            RangeError,
            `invalid status code ${code}`,
            true,
            1002,
            'WS_ERR_INVALID_CLOSE_CODE'
          );
        }

        const buf = data.slice(2);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('conclude', code, buf);
        this.end();
      }
    } else if (this._opcode === 0x09) {
      this.emit('ping', data);
    } else {
      this.emit('pong', data);
    }

    this._state = GET_INFO;
  }
}

var receiver = Receiver$1;

/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */
function error(ErrorCtor, message, prefix, statusCode, errorCode) {
  const err = new ErrorCtor(
    prefix ? `Invalid WebSocket frame: ${message}` : message
  );

  Error.captureStackTrace(err, error);
  err.code = errorCode;
  err[kStatusCode$1] = statusCode;
  return err;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */
const { randomFillSync } = require$$0$1;

const PerMessageDeflate$2 = permessageDeflate;
const { EMPTY_BUFFER: EMPTY_BUFFER$1 } = constants;
const { isValidStatusCode } = validationExports;
const { mask: applyMask, toBuffer: toBuffer$1 } = bufferUtilExports;

const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);

/**
 * HyBi Sender implementation.
 */
class Sender$1 {
  /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  constructor(socket, extensions, generateMask) {
    this._extensions = extensions || {};

    if (generateMask) {
      this._generateMask = generateMask;
      this._maskBuffer = Buffer.alloc(4);
    }

    this._socket = socket;

    this._firstFragment = true;
    this._compress = false;

    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];
  }

  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */
  static frame(data, options) {
    let mask;
    let merge = false;
    let offset = 2;
    let skipMasking = false;

    if (options.mask) {
      mask = options.maskBuffer || maskBuffer;

      if (options.generateMask) {
        options.generateMask(mask);
      } else {
        randomFillSync(mask, 0, 4);
      }

      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
      offset = 6;
    }

    let dataLength;

    if (typeof data === 'string') {
      if (
        (!options.mask || skipMasking) &&
        options[kByteLength] !== undefined
      ) {
        dataLength = options[kByteLength];
      } else {
        data = Buffer.from(data);
        dataLength = data.length;
      }
    } else {
      dataLength = data.length;
      merge = options.mask && options.readOnly && !skipMasking;
    }

    let payloadLength = dataLength;

    if (dataLength >= 65536) {
      offset += 8;
      payloadLength = 127;
    } else if (dataLength > 125) {
      offset += 2;
      payloadLength = 126;
    }

    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
    if (options.rsv1) target[0] |= 0x40;

    target[1] = payloadLength;

    if (payloadLength === 126) {
      target.writeUInt16BE(dataLength, 2);
    } else if (payloadLength === 127) {
      target[2] = target[3] = 0;
      target.writeUIntBE(dataLength, 4, 6);
    }

    if (!options.mask) return [target, data];

    target[1] |= 0x80;
    target[offset - 4] = mask[0];
    target[offset - 3] = mask[1];
    target[offset - 2] = mask[2];
    target[offset - 1] = mask[3];

    if (skipMasking) return [target, data];

    if (merge) {
      applyMask(data, mask, target, offset, dataLength);
      return [target];
    }

    applyMask(data, mask, data, 0, dataLength);
    return [target, data];
  }

  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(code, data, mask, cb) {
    let buf;

    if (code === undefined) {
      buf = EMPTY_BUFFER$1;
    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
      throw new TypeError('First argument must be a valid error code number');
    } else if (data === undefined || !data.length) {
      buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(code, 0);
    } else {
      const length = Buffer.byteLength(data);

      if (length > 123) {
        throw new RangeError('The message must not be greater than 123 bytes');
      }

      buf = Buffer.allocUnsafe(2 + length);
      buf.writeUInt16BE(code, 0);

      if (typeof data === 'string') {
        buf.write(data, 2);
      } else {
        buf.set(data, 2);
      }
    }

    const options = {
      [kByteLength]: buf.length,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x08,
      readOnly: false,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, buf, false, options, cb]);
    } else {
      this.sendFrame(Sender$1.frame(buf, options), cb);
    }
  }

  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x09,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender$1.frame(data, options), cb);
    }
  }

  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x0a,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender$1.frame(data, options), cb);
    }
  }

  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(data, options, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
    let opcode = options.binary ? 2 : 1;
    let rsv1 = options.compress;

    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }

    if (this._firstFragment) {
      this._firstFragment = false;
      if (
        rsv1 &&
        perMessageDeflate &&
        perMessageDeflate.params[
          perMessageDeflate._isServer
            ? 'server_no_context_takeover'
            : 'client_no_context_takeover'
        ]
      ) {
        rsv1 = byteLength >= perMessageDeflate._threshold;
      }
      this._compress = rsv1;
    } else {
      rsv1 = false;
      opcode = 0;
    }

    if (options.fin) this._firstFragment = true;

    if (perMessageDeflate) {
      const opts = {
        [kByteLength]: byteLength,
        fin: options.fin,
        generateMask: this._generateMask,
        mask: options.mask,
        maskBuffer: this._maskBuffer,
        opcode,
        readOnly,
        rsv1
      };

      if (this._deflating) {
        this.enqueue([this.dispatch, data, this._compress, opts, cb]);
      } else {
        this.dispatch(data, this._compress, opts, cb);
      }
    } else {
      this.sendFrame(
        Sender$1.frame(data, {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1: false
        }),
        cb
      );
    }
  }

  /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(data, compress, options, cb) {
    if (!compress) {
      this.sendFrame(Sender$1.frame(data, options), cb);
      return;
    }

    const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];

    this._bufferedBytes += options[kByteLength];
    this._deflating = true;
    perMessageDeflate.compress(data, options.fin, (_, buf) => {
      if (this._socket.destroyed) {
        const err = new Error(
          'The socket was closed while data was being compressed'
        );

        if (typeof cb === 'function') cb(err);

        for (let i = 0; i < this._queue.length; i++) {
          const params = this._queue[i];
          const callback = params[params.length - 1];

          if (typeof callback === 'function') callback(err);
        }

        return;
      }

      this._bufferedBytes -= options[kByteLength];
      this._deflating = false;
      options.readOnly = false;
      this.sendFrame(Sender$1.frame(buf, options), cb);
      this.dequeue();
    });
  }

  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    while (!this._deflating && this._queue.length) {
      const params = this._queue.shift();

      this._bufferedBytes -= params[3][kByteLength];
      Reflect.apply(params[0], this, params.slice(1));
    }
  }

  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(params) {
    this._bufferedBytes += params[3][kByteLength];
    this._queue.push(params);
  }

  /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(list, cb) {
    if (list.length === 2) {
      this._socket.cork();
      this._socket.write(list[0]);
      this._socket.write(list[1], cb);
      this._socket.uncork();
    } else {
      this._socket.write(list[0], cb);
    }
  }
}

var sender = Sender$1;

const { kForOnEventAttribute: kForOnEventAttribute$1, kListener: kListener$1 } = constants;

const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');

/**
 * Class representing an event.
 */
class Event {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  constructor(type) {
    this[kTarget] = null;
    this[kType] = type;
  }

  /**
   * @type {*}
   */
  get target() {
    return this[kTarget];
  }

  /**
   * @type {String}
   */
  get type() {
    return this[kType];
  }
}

Object.defineProperty(Event.prototype, 'target', { enumerable: true });
Object.defineProperty(Event.prototype, 'type', { enumerable: true });

/**
 * Class representing a close event.
 *
 * @extends Event
 */
class CloseEvent extends Event {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  constructor(type, options = {}) {
    super(type);

    this[kCode] = options.code === undefined ? 0 : options.code;
    this[kReason] = options.reason === undefined ? '' : options.reason;
    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
  }

  /**
   * @type {Number}
   */
  get code() {
    return this[kCode];
  }

  /**
   * @type {String}
   */
  get reason() {
    return this[kReason];
  }

  /**
   * @type {Boolean}
   */
  get wasClean() {
    return this[kWasClean];
  }
}

Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

/**
 * Class representing an error event.
 *
 * @extends Event
 */
class ErrorEvent extends Event {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  constructor(type, options = {}) {
    super(type);

    this[kError] = options.error === undefined ? null : options.error;
    this[kMessage] = options.message === undefined ? '' : options.message;
  }

  /**
   * @type {*}
   */
  get error() {
    return this[kError];
  }

  /**
   * @type {String}
   */
  get message() {
    return this[kMessage];
  }
}

Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

/**
 * Class representing a message event.
 *
 * @extends Event
 */
class MessageEvent extends Event {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  constructor(type, options = {}) {
    super(type);

    this[kData] = options.data === undefined ? null : options.data;
  }

  /**
   * @type {*}
   */
  get data() {
    return this[kData];
  }
}

Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */
const EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(type, listener, options = {}) {
    let wrapper;

    if (type === 'message') {
      wrapper = function onMessage(data, isBinary) {
        const event = new MessageEvent('message', {
          data: isBinary ? data : data.toString()
        });

        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'close') {
      wrapper = function onClose(code, message) {
        const event = new CloseEvent('close', {
          code,
          reason: message.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });

        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'error') {
      wrapper = function onError(error) {
        const event = new ErrorEvent('error', {
          error,
          message: error.message
        });

        event[kTarget] = this;
        listener.call(this, event);
      };
    } else if (type === 'open') {
      wrapper = function onOpen() {
        const event = new Event('open');

        event[kTarget] = this;
        listener.call(this, event);
      };
    } else {
      return;
    }

    wrapper[kForOnEventAttribute$1] = !!options[kForOnEventAttribute$1];
    wrapper[kListener$1] = listener;

    if (options.once) {
      this.once(type, wrapper);
    } else {
      this.on(type, wrapper);
    }
  },

  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {Function} handler The listener to remove
   * @public
   */
  removeEventListener(type, handler) {
    for (const listener of this.listeners(type)) {
      if (listener[kListener$1] === handler && !listener[kForOnEventAttribute$1]) {
        this.removeListener(type, listener);
        break;
      }
    }
  }
};

var eventTarget = {
  CloseEvent,
  ErrorEvent,
  Event,
  EventTarget,
  MessageEvent
};

const { tokenChars: tokenChars$1 } = validationExports;

/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */
function push(dest, name, elem) {
  if (dest[name] === undefined) dest[name] = [elem];
  else dest[name].push(elem);
}

/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */
function parse$6(header) {
  const offers = Object.create(null);
  let params = Object.create(null);
  let mustUnescape = false;
  let isEscaping = false;
  let inQuotes = false;
  let extensionName;
  let paramName;
  let start = -1;
  let code = -1;
  let end = -1;
  let i = 0;

  for (; i < header.length; i++) {
    code = header.charCodeAt(i);

    if (extensionName === undefined) {
      if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (
        i !== 0 &&
        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
      ) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        const name = header.slice(start, end);
        if (code === 0x2c) {
          push(offers, name, params);
          params = Object.create(null);
        } else {
          extensionName = name;
        }

        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else if (paramName === undefined) {
      if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 || code === 0x09) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        push(params, header.slice(start, end), true);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        start = end = -1;
      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else {
      //
      // The value of a quoted-string after unescaping must conform to the
      // token ABNF, so only token characters are valid.
      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
      //
      if (isEscaping) {
        if (tokenChars$1[code] !== 1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (start === -1) start = i;
        else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars$1[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x22 /* '"' */ && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 0x5c /* '\' */) {
          isEscaping = true;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
        inQuotes = true;
      } else if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
        if (end === -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        let value = header.slice(start, end);
        if (mustUnescape) {
          value = value.replace(/\\/g, '');
          mustUnescape = false;
        }
        push(params, paramName, value);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        paramName = undefined;
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
  }

  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
    throw new SyntaxError('Unexpected end of input');
  }

  if (end === -1) end = i;
  const token = header.slice(start, end);
  if (extensionName === undefined) {
    push(offers, token, params);
  } else {
    if (paramName === undefined) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ''));
    } else {
      push(params, paramName, token);
    }
    push(offers, extensionName, params);
  }

  return offers;
}

/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */
function format$1(extensions) {
  return Object.keys(extensions)
    .map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations)) configurations = [configurations];
      return configurations
        .map((params) => {
          return [extension]
            .concat(
              Object.keys(params).map((k) => {
                let values = params[k];
                if (!Array.isArray(values)) values = [values];
                return values
                  .map((v) => (v === true ? k : `${k}=${v}`))
                  .join('; ');
              })
            )
            .join('; ');
        })
        .join(', ');
    })
    .join(', ');
}

var extension$1 = { format: format$1, parse: parse$6 };

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */

const EventEmitter$5 = require$$0;
const https$1 = require$$1$1;
const http$3 = require$$1$2;
const net$2 = require$$3;
const tls = require$$4;
const { randomBytes, createHash: createHash$1 } = require$$0$1;
const { URL: URL$1 } = Url;

const PerMessageDeflate$1 = permessageDeflate;
const Receiver = receiver;
const Sender = sender;
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  GUID: GUID$1,
  kForOnEventAttribute,
  kListener,
  kStatusCode,
  kWebSocket: kWebSocket$1,
  NOOP
} = constants;
const {
  EventTarget: { addEventListener, removeEventListener }
} = eventTarget;
const { format, parse: parse$5 } = extension$1;
const { toBuffer } = bufferUtilExports;

const closeTimeout = 30 * 1000;
const kAborted = Symbol('kAborted');
const protocolVersions = [8, 13];
const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */
class WebSocket$3 extends EventEmitter$5 {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(address, protocols, options) {
    super();

    this._binaryType = BINARY_TYPES[0];
    this._closeCode = 1006;
    this._closeFrameReceived = false;
    this._closeFrameSent = false;
    this._closeMessage = EMPTY_BUFFER;
    this._closeTimer = null;
    this._extensions = {};
    this._paused = false;
    this._protocol = '';
    this._readyState = WebSocket$3.CONNECTING;
    this._receiver = null;
    this._sender = null;
    this._socket = null;

    if (address !== null) {
      this._bufferedAmount = 0;
      this._isServer = false;
      this._redirects = 0;

      if (protocols === undefined) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        if (typeof protocols === 'object' && protocols !== null) {
          options = protocols;
          protocols = [];
        } else {
          protocols = [protocols];
        }
      }

      initAsClient(this, address, protocols, options);
    } else {
      this._isServer = true;
    }
  }

  /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }

  set binaryType(type) {
    if (!BINARY_TYPES.includes(type)) return;

    this._binaryType = type;

    //
    // Allow to change `binaryType` on the fly.
    //
    if (this._receiver) this._receiver._binaryType = type;
  }

  /**
   * @type {Number}
   */
  get bufferedAmount() {
    if (!this._socket) return this._bufferedAmount;

    return this._socket._writableState.length + this._sender._bufferedBytes;
  }

  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }

  /**
   * @type {Boolean}
   */
  get isPaused() {
    return this._paused;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return null;
  }

  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }

  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }

  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }

  /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  setSocket(socket, head, options) {
    const receiver = new Receiver({
      binaryType: this.binaryType,
      extensions: this._extensions,
      isServer: this._isServer,
      maxPayload: options.maxPayload,
      skipUTF8Validation: options.skipUTF8Validation
    });

    this._sender = new Sender(socket, this._extensions, options.generateMask);
    this._receiver = receiver;
    this._socket = socket;

    receiver[kWebSocket$1] = this;
    socket[kWebSocket$1] = this;

    receiver.on('conclude', receiverOnConclude);
    receiver.on('drain', receiverOnDrain);
    receiver.on('error', receiverOnError);
    receiver.on('message', receiverOnMessage);
    receiver.on('ping', receiverOnPing);
    receiver.on('pong', receiverOnPong);

    socket.setTimeout(0);
    socket.setNoDelay();

    if (head.length > 0) socket.unshift(head);

    socket.on('close', socketOnClose);
    socket.on('data', socketOnData);
    socket.on('end', socketOnEnd);
    socket.on('error', socketOnError$1);

    this._readyState = WebSocket$3.OPEN;
    this.emit('open');
  }

  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = WebSocket$3.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
      return;
    }

    if (this._extensions[PerMessageDeflate$1.extensionName]) {
      this._extensions[PerMessageDeflate$1.extensionName].cleanup();
    }

    this._receiver.removeAllListeners();
    this._readyState = WebSocket$3.CLOSED;
    this.emit('close', this._closeCode, this._closeMessage);
  }

  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */
  close(code, data) {
    if (this.readyState === WebSocket$3.CLOSED) return;
    if (this.readyState === WebSocket$3.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake$1(this, this._req, msg);
    }

    if (this.readyState === WebSocket$3.CLOSING) {
      if (
        this._closeFrameSent &&
        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
      ) {
        this._socket.end();
      }

      return;
    }

    this._readyState = WebSocket$3.CLOSING;
    this._sender.close(code, data, !this._isServer, (err) => {
      //
      // This error is handled by the `'error'` listener on the socket. We only
      // want to know if the close frame has been sent here.
      //
      if (err) return;

      this._closeFrameSent = true;

      if (
        this._closeFrameReceived ||
        this._receiver._writableState.errorEmitted
      ) {
        this._socket.end();
      }
    });

    //
    // Specify a timeout for the closing handshake to complete.
    //
    this._closeTimer = setTimeout(
      this._socket.destroy.bind(this._socket),
      closeTimeout
    );
  }

  /**
   * Pause the socket.
   *
   * @public
   */
  pause() {
    if (
      this.readyState === WebSocket$3.CONNECTING ||
      this.readyState === WebSocket$3.CLOSED
    ) {
      return;
    }

    this._paused = true;
    this._socket.pause();
  }

  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(data, mask, cb) {
    if (this.readyState === WebSocket$3.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket$3.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(data, mask, cb) {
    if (this.readyState === WebSocket$3.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket$3.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Resume the socket.
   *
   * @public
   */
  resume() {
    if (
      this.readyState === WebSocket$3.CONNECTING ||
      this.readyState === WebSocket$3.CLOSED
    ) {
      return;
    }

    this._paused = false;
    if (!this._receiver._writableState.needDrain) this._socket.resume();
  }

  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(data, options, cb) {
    if (this.readyState === WebSocket$3.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket$3.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    const opts = {
      binary: typeof data !== 'string',
      mask: !this._isServer,
      compress: true,
      fin: true,
      ...options
    };

    if (!this._extensions[PerMessageDeflate$1.extensionName]) {
      opts.compress = false;
    }

    this._sender.send(data || EMPTY_BUFFER, opts, cb);
  }

  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState === WebSocket$3.CLOSED) return;
    if (this.readyState === WebSocket$3.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake$1(this, this._req, msg);
    }

    if (this._socket) {
      this._readyState = WebSocket$3.CLOSING;
      this._socket.destroy();
    }
  }
}

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket$3, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket$3.prototype, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket$3, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket$3.prototype, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket$3, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket$3.prototype, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket$3, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket$3.prototype, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

[
  'binaryType',
  'bufferedAmount',
  'extensions',
  'isPaused',
  'protocol',
  'readyState',
  'url'
].forEach((property) => {
  Object.defineProperty(WebSocket$3.prototype, property, { enumerable: true });
});

//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
['open', 'error', 'close', 'message'].forEach((method) => {
  Object.defineProperty(WebSocket$3.prototype, `on${method}`, {
    enumerable: true,
    get() {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) return listener[kListener];
      }

      return null;
    },
    set(handler) {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) {
          this.removeListener(method, listener);
          break;
        }
      }

      if (typeof handler !== 'function') return;

      this.addEventListener(method, handler, {
        [kForOnEventAttribute]: true
      });
    }
  });
});

WebSocket$3.prototype.addEventListener = addEventListener;
WebSocket$3.prototype.removeEventListener = removeEventListener;

var websocket = WebSocket$3;

/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */
function initAsClient(websocket, address, protocols, options) {
  const opts = {
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    skipUTF8Validation: false,
    perMessageDeflate: true,
    followRedirects: false,
    maxRedirects: 10,
    ...options,
    createConnection: undefined,
    socketPath: undefined,
    hostname: undefined,
    protocol: undefined,
    timeout: undefined,
    method: 'GET',
    host: undefined,
    path: undefined,
    port: undefined
  };

  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError(
      `Unsupported protocol version: ${opts.protocolVersion} ` +
        `(supported versions: ${protocolVersions.join(', ')})`
    );
  }

  let parsedUrl;

  if (address instanceof URL$1) {
    parsedUrl = address;
    websocket._url = address.href;
  } else {
    try {
      parsedUrl = new URL$1(address);
    } catch (e) {
      throw new SyntaxError(`Invalid URL: ${address}`);
    }

    websocket._url = address;
  }

  const isSecure = parsedUrl.protocol === 'wss:';
  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
  let invalidUrlMessage;

  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
    invalidUrlMessage =
      'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
  } else if (isIpcUrl && !parsedUrl.pathname) {
    invalidUrlMessage = "The URL's pathname is empty";
  } else if (parsedUrl.hash) {
    invalidUrlMessage = 'The URL contains a fragment identifier';
  }

  if (invalidUrlMessage) {
    const err = new SyntaxError(invalidUrlMessage);

    if (websocket._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket, err);
      return;
    }
  }

  const defaultPort = isSecure ? 443 : 80;
  const key = randomBytes(16).toString('base64');
  const request = isSecure ? https$1.request : http$3.request;
  const protocolSet = new Set();
  let perMessageDeflate;

  opts.createConnection = isSecure ? tlsConnect : netConnect;
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith('[')
    ? parsedUrl.hostname.slice(1, -1)
    : parsedUrl.hostname;
  opts.headers = {
    ...opts.headers,
    'Sec-WebSocket-Version': opts.protocolVersion,
    'Sec-WebSocket-Key': key,
    Connection: 'Upgrade',
    Upgrade: 'websocket'
  };
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;

  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate$1(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers['Sec-WebSocket-Extensions'] = format({
      [PerMessageDeflate$1.extensionName]: perMessageDeflate.offer()
    });
  }
  if (protocols.length) {
    for (const protocol of protocols) {
      if (
        typeof protocol !== 'string' ||
        !subprotocolRegex.test(protocol) ||
        protocolSet.has(protocol)
      ) {
        throw new SyntaxError(
          'An invalid or duplicated subprotocol was specified'
        );
      }

      protocolSet.add(protocol);
    }

    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
  }
  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }
  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
  }

  if (isIpcUrl) {
    const parts = opts.path.split(':');

    opts.socketPath = parts[0];
    opts.path = parts[1];
  }

  let req;

  if (opts.followRedirects) {
    if (websocket._redirects === 0) {
      websocket._originalIpc = isIpcUrl;
      websocket._originalSecure = isSecure;
      websocket._originalHostOrSocketPath = isIpcUrl
        ? opts.socketPath
        : parsedUrl.host;

      const headers = options && options.headers;

      //
      // Shallow copy the user provided options so that headers can be changed
      // without mutating the original object.
      //
      options = { ...options, headers: {} };

      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          options.headers[key.toLowerCase()] = value;
        }
      }
    } else if (websocket.listenerCount('redirect') === 0) {
      const isSameHost = isIpcUrl
        ? websocket._originalIpc
          ? opts.socketPath === websocket._originalHostOrSocketPath
          : false
        : websocket._originalIpc
        ? false
        : parsedUrl.host === websocket._originalHostOrSocketPath;

      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
        //
        // Match curl 7.77.0 behavior and drop the following headers. These
        // headers are also dropped when following a redirect to a subdomain.
        //
        delete opts.headers.authorization;
        delete opts.headers.cookie;

        if (!isSameHost) delete opts.headers.host;

        opts.auth = undefined;
      }
    }

    //
    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
    // If the `Authorization` header is set, then there is nothing to do as it
    // will take precedence.
    //
    if (opts.auth && !options.headers.authorization) {
      options.headers.authorization =
        'Basic ' + Buffer.from(opts.auth).toString('base64');
    }

    req = websocket._req = request(opts);

    if (websocket._redirects) {
      //
      // Unlike what is done for the `'upgrade'` event, no early exit is
      // triggered here if the user calls `websocket.close()` or
      // `websocket.terminate()` from a listener of the `'redirect'` event. This
      // is because the user can also call `request.destroy()` with an error
      // before calling `websocket.close()` or `websocket.terminate()` and this
      // would result in an error being emitted on the `request` object with no
      // `'error'` event listeners attached.
      //
      websocket.emit('redirect', websocket.url, req);
    }
  } else {
    req = websocket._req = request(opts);
  }

  if (opts.timeout) {
    req.on('timeout', () => {
      abortHandshake$1(websocket, req, 'Opening handshake has timed out');
    });
  }

  req.on('error', (err) => {
    if (req === null || req[kAborted]) return;

    req = websocket._req = null;
    emitErrorAndClose(websocket, err);
  });

  req.on('response', (res) => {
    const location = res.headers.location;
    const statusCode = res.statusCode;

    if (
      location &&
      opts.followRedirects &&
      statusCode >= 300 &&
      statusCode < 400
    ) {
      if (++websocket._redirects > opts.maxRedirects) {
        abortHandshake$1(websocket, req, 'Maximum redirects exceeded');
        return;
      }

      req.abort();

      let addr;

      try {
        addr = new URL$1(location, address);
      } catch (e) {
        const err = new SyntaxError(`Invalid URL: ${location}`);
        emitErrorAndClose(websocket, err);
        return;
      }

      initAsClient(websocket, addr, protocols, options);
    } else if (!websocket.emit('unexpected-response', req, res)) {
      abortHandshake$1(
        websocket,
        req,
        `Unexpected server response: ${res.statusCode}`
      );
    }
  });

  req.on('upgrade', (res, socket, head) => {
    websocket.emit('upgrade', res);

    //
    // The user may have closed the connection from a listener of the
    // `'upgrade'` event.
    //
    if (websocket.readyState !== WebSocket$3.CONNECTING) return;

    req = websocket._req = null;

    if (res.headers.upgrade.toLowerCase() !== 'websocket') {
      abortHandshake$1(websocket, socket, 'Invalid Upgrade header');
      return;
    }

    const digest = createHash$1('sha1')
      .update(key + GUID$1)
      .digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      abortHandshake$1(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
      return;
    }

    const serverProt = res.headers['sec-websocket-protocol'];
    let protError;

    if (serverProt !== undefined) {
      if (!protocolSet.size) {
        protError = 'Server sent a subprotocol but none was requested';
      } else if (!protocolSet.has(serverProt)) {
        protError = 'Server sent an invalid subprotocol';
      }
    } else if (protocolSet.size) {
      protError = 'Server sent no subprotocol';
    }

    if (protError) {
      abortHandshake$1(websocket, socket, protError);
      return;
    }

    if (serverProt) websocket._protocol = serverProt;

    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

    if (secWebSocketExtensions !== undefined) {
      if (!perMessageDeflate) {
        const message =
          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
          'was requested';
        abortHandshake$1(websocket, socket, message);
        return;
      }

      let extensions;

      try {
        extensions = parse$5(secWebSocketExtensions);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake$1(websocket, socket, message);
        return;
      }

      const extensionNames = Object.keys(extensions);

      if (
        extensionNames.length !== 1 ||
        extensionNames[0] !== PerMessageDeflate$1.extensionName
      ) {
        const message = 'Server indicated an extension that was not requested';
        abortHandshake$1(websocket, socket, message);
        return;
      }

      try {
        perMessageDeflate.accept(extensions[PerMessageDeflate$1.extensionName]);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake$1(websocket, socket, message);
        return;
      }

      websocket._extensions[PerMessageDeflate$1.extensionName] =
        perMessageDeflate;
    }

    websocket.setSocket(socket, head, {
      generateMask: opts.generateMask,
      maxPayload: opts.maxPayload,
      skipUTF8Validation: opts.skipUTF8Validation
    });
  });

  req.end();
}

/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */
function emitErrorAndClose(websocket, err) {
  websocket._readyState = WebSocket$3.CLOSING;
  websocket.emit('error', err);
  websocket.emitClose();
}

/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */
function netConnect(options) {
  options.path = options.socketPath;
  return net$2.connect(options);
}

/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */
function tlsConnect(options) {
  options.path = undefined;

  if (!options.servername && options.servername !== '') {
    options.servername = net$2.isIP(options.host) ? '' : options.host;
  }

  return tls.connect(options);
}

/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */
function abortHandshake$1(websocket, stream, message) {
  websocket._readyState = WebSocket$3.CLOSING;

  const err = new Error(message);
  Error.captureStackTrace(err, abortHandshake$1);

  if (stream.setHeader) {
    stream[kAborted] = true;
    stream.abort();

    if (stream.socket && !stream.socket.destroyed) {
      //
      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
      // called after the request completed. See
      // https://github.com/websockets/ws/issues/1869.
      //
      stream.socket.destroy();
    }

    process.nextTick(emitErrorAndClose, websocket, err);
  } else {
    stream.destroy(err);
    stream.once('error', websocket.emit.bind(websocket, 'error'));
    stream.once('close', websocket.emitClose.bind(websocket));
  }
}

/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */
function sendAfterClose(websocket, data, cb) {
  if (data) {
    const length = toBuffer(data).length;

    //
    // The `_bufferedAmount` property is used only when the peer is a client and
    // the opening handshake fails. Under these circumstances, in fact, the
    // `setSocket()` method is not called, so the `_socket` and `_sender`
    // properties are set to `null`.
    //
    if (websocket._socket) websocket._sender._bufferedBytes += length;
    else websocket._bufferedAmount += length;
  }

  if (cb) {
    const err = new Error(
      `WebSocket is not open: readyState ${websocket.readyState} ` +
        `(${readyStates[websocket.readyState]})`
    );
    cb(err);
  }
}

/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */
function receiverOnConclude(code, reason) {
  const websocket = this[kWebSocket$1];

  websocket._closeFrameReceived = true;
  websocket._closeMessage = reason;
  websocket._closeCode = code;

  if (websocket._socket[kWebSocket$1] === undefined) return;

  websocket._socket.removeListener('data', socketOnData);
  process.nextTick(resume, websocket._socket);

  if (code === 1005) websocket.close();
  else websocket.close(code, reason);
}

/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */
function receiverOnDrain() {
  const websocket = this[kWebSocket$1];

  if (!websocket.isPaused) websocket._socket.resume();
}

/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */
function receiverOnError(err) {
  const websocket = this[kWebSocket$1];

  if (websocket._socket[kWebSocket$1] !== undefined) {
    websocket._socket.removeListener('data', socketOnData);

    //
    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
    // https://github.com/websockets/ws/issues/1940.
    //
    process.nextTick(resume, websocket._socket);

    websocket.close(err[kStatusCode]);
  }

  websocket.emit('error', err);
}

/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */
function receiverOnFinish() {
  this[kWebSocket$1].emitClose();
}

/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */
function receiverOnMessage(data, isBinary) {
  this[kWebSocket$1].emit('message', data, isBinary);
}

/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */
function receiverOnPing(data) {
  const websocket = this[kWebSocket$1];

  websocket.pong(data, !websocket._isServer, NOOP);
  websocket.emit('ping', data);
}

/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */
function receiverOnPong(data) {
  this[kWebSocket$1].emit('pong', data);
}

/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */
function resume(stream) {
  stream.resume();
}

/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */
function socketOnClose() {
  const websocket = this[kWebSocket$1];

  this.removeListener('close', socketOnClose);
  this.removeListener('data', socketOnData);
  this.removeListener('end', socketOnEnd);

  websocket._readyState = WebSocket$3.CLOSING;

  let chunk;

  //
  // The close frame might not have been received or the `'end'` event emitted,
  // for example, if the socket was destroyed due to an error. Ensure that the
  // `receiver` stream is closed after writing any remaining buffered data to
  // it. If the readable side of the socket is in flowing mode then there is no
  // buffered data as everything has been already written and `readable.read()`
  // will return `null`. If instead, the socket is paused, any possible buffered
  // data will be read as a single chunk.
  //
  if (
    !this._readableState.endEmitted &&
    !websocket._closeFrameReceived &&
    !websocket._receiver._writableState.errorEmitted &&
    (chunk = websocket._socket.read()) !== null
  ) {
    websocket._receiver.write(chunk);
  }

  websocket._receiver.end();

  this[kWebSocket$1] = undefined;

  clearTimeout(websocket._closeTimer);

  if (
    websocket._receiver._writableState.finished ||
    websocket._receiver._writableState.errorEmitted
  ) {
    websocket.emitClose();
  } else {
    websocket._receiver.on('error', receiverOnFinish);
    websocket._receiver.on('finish', receiverOnFinish);
  }
}

/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function socketOnData(chunk) {
  if (!this[kWebSocket$1]._receiver.write(chunk)) {
    this.pause();
  }
}

/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */
function socketOnEnd() {
  const websocket = this[kWebSocket$1];

  websocket._readyState = WebSocket$3.CLOSING;
  websocket._receiver.end();
  this.end();
}

/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */
function socketOnError$1() {
  const websocket = this[kWebSocket$1];

  this.removeListener('error', socketOnError$1);
  this.on('error', NOOP);

  if (websocket) {
    websocket._readyState = WebSocket$3.CLOSING;
    this.destroy();
  }
}

const { Duplex } = Stream;

/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */
function emitClose$1(stream) {
  stream.emit('close');
}

/**
 * The listener of the `'end'` event.
 *
 * @private
 */
function duplexOnEnd() {
  if (!this.destroyed && this._writableState.finished) {
    this.destroy();
  }
}

/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */
function duplexOnError(err) {
  this.removeListener('error', duplexOnError);
  this.destroy();
  if (this.listenerCount('error') === 0) {
    // Do not suppress the throwing behavior.
    this.emit('error', err);
  }
}

/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */
function createWebSocketStream(ws, options) {
  let terminateOnDestroy = true;

  const duplex = new Duplex({
    ...options,
    autoDestroy: false,
    emitClose: false,
    objectMode: false,
    writableObjectMode: false
  });

  ws.on('message', function message(msg, isBinary) {
    const data =
      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

    if (!duplex.push(data)) ws.pause();
  });

  ws.once('error', function error(err) {
    if (duplex.destroyed) return;

    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
    //
    // - If the `'error'` event is emitted before the `'open'` event, then
    //   `ws.terminate()` is a noop as no socket is assigned.
    // - Otherwise, the error is re-emitted by the listener of the `'error'`
    //   event of the `Receiver` object. The listener already closes the
    //   connection by calling `ws.close()`. This allows a close frame to be
    //   sent to the other peer. If `ws.terminate()` is called right after this,
    //   then the close frame might not be sent.
    terminateOnDestroy = false;
    duplex.destroy(err);
  });

  ws.once('close', function close() {
    if (duplex.destroyed) return;

    duplex.push(null);
  });

  duplex._destroy = function (err, callback) {
    if (ws.readyState === ws.CLOSED) {
      callback(err);
      process.nextTick(emitClose$1, duplex);
      return;
    }

    let called = false;

    ws.once('error', function error(err) {
      called = true;
      callback(err);
    });

    ws.once('close', function close() {
      if (!called) callback(err);
      process.nextTick(emitClose$1, duplex);
    });

    if (terminateOnDestroy) ws.terminate();
  };

  duplex._final = function (callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._final(callback);
      });
      return;
    }

    // If the value of the `_socket` property is `null` it means that `ws` is a
    // client websocket and the handshake failed. In fact, when this happens, a
    // socket is never assigned to the websocket. Wait for the `'error'` event
    // that will be emitted by the websocket.
    if (ws._socket === null) return;

    if (ws._socket._writableState.finished) {
      callback();
      if (duplex._readableState.endEmitted) duplex.destroy();
    } else {
      ws._socket.once('finish', function finish() {
        // `duplex` is not destroyed here because the `'end'` event will be
        // emitted on `duplex` after this `'finish'` event. The EOF signaling
        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
        callback();
      });
      ws.close();
    }
  };

  duplex._read = function () {
    if (ws.isPaused) ws.resume();
  };

  duplex._write = function (chunk, encoding, callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._write(chunk, encoding, callback);
      });
      return;
    }

    ws.send(chunk, callback);
  };

  duplex.on('end', duplexOnEnd);
  duplex.on('error', duplexOnError);
  return duplex;
}

var stream = createWebSocketStream;

const { tokenChars } = validationExports;

/**
 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
 *
 * @param {String} header The field value of the header
 * @return {Set} The subprotocol names
 * @public
 */
function parse$4(header) {
  const protocols = new Set();
  let start = -1;
  let end = -1;
  let i = 0;

  for (i; i < header.length; i++) {
    const code = header.charCodeAt(i);

    if (end === -1 && tokenChars[code] === 1) {
      if (start === -1) start = i;
    } else if (
      i !== 0 &&
      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
    ) {
      if (end === -1 && start !== -1) end = i;
    } else if (code === 0x2c /* ',' */) {
      if (start === -1) {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }

      if (end === -1) end = i;

      const protocol = header.slice(start, end);

      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }

      protocols.add(protocol);
      start = end = -1;
    } else {
      throw new SyntaxError(`Unexpected character at index ${i}`);
    }
  }

  if (start === -1 || end !== -1) {
    throw new SyntaxError('Unexpected end of input');
  }

  const protocol = header.slice(start, i);

  if (protocols.has(protocol)) {
    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
  }

  protocols.add(protocol);
  return protocols;
}

var subprotocol$1 = { parse: parse$4 };

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */

const EventEmitter$4 = require$$0;
const http$2 = require$$1$2;
const { createHash } = require$$0$1;

const extension = extension$1;
const PerMessageDeflate = permessageDeflate;
const subprotocol = subprotocol$1;
const WebSocket$2 = websocket;
const { GUID, kWebSocket } = constants;

const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;

/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */
class WebSocketServer extends EventEmitter$4 {
  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */
  constructor(options, callback) {
    super();

    options = {
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null, // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      WebSocket: WebSocket$2,
      ...options
    };

    if (
      (options.port == null && !options.server && !options.noServer) ||
      (options.port != null && (options.server || options.noServer)) ||
      (options.server && options.noServer)
    ) {
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options ' +
          'must be specified'
      );
    }

    if (options.port != null) {
      this._server = http$2.createServer((req, res) => {
        const body = http$2.STATUS_CODES[426];

        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });
      this._server.listen(
        options.port,
        options.host,
        options.backlog,
        callback
      );
    } else if (options.server) {
      this._server = options.server;
    }

    if (this._server) {
      const emitConnection = this.emit.bind(this, 'connection');

      this._removeListeners = addListeners(this._server, {
        listening: this.emit.bind(this, 'listening'),
        error: this.emit.bind(this, 'error'),
        upgrade: (req, socket, head) => {
          this.handleUpgrade(req, socket, head, emitConnection);
        }
      });
    }

    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
    if (options.clientTracking) {
      this.clients = new Set();
      this._shouldEmitClose = false;
    }

    this.options = options;
    this._state = RUNNING;
  }

  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */
  address() {
    if (this.options.noServer) {
      throw new Error('The server is operating in "noServer" mode');
    }

    if (!this._server) return null;
    return this._server.address();
  }

  /**
   * Stop the server from accepting new connections and emit the `'close'` event
   * when all existing connections are closed.
   *
   * @param {Function} [cb] A one-time listener for the `'close'` event
   * @public
   */
  close(cb) {
    if (this._state === CLOSED) {
      if (cb) {
        this.once('close', () => {
          cb(new Error('The server is not running'));
        });
      }

      process.nextTick(emitClose, this);
      return;
    }

    if (cb) this.once('close', cb);

    if (this._state === CLOSING) return;
    this._state = CLOSING;

    if (this.options.noServer || this.options.server) {
      if (this._server) {
        this._removeListeners();
        this._removeListeners = this._server = null;
      }

      if (this.clients) {
        if (!this.clients.size) {
          process.nextTick(emitClose, this);
        } else {
          this._shouldEmitClose = true;
        }
      } else {
        process.nextTick(emitClose, this);
      }
    } else {
      const server = this._server;

      this._removeListeners();
      this._removeListeners = this._server = null;

      //
      // The HTTP/S server was created internally. Close it, and rely on its
      // `'close'` event.
      //
      server.close(() => {
        emitClose(this);
      });
    }
  }

  /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
  shouldHandle(req) {
    if (this.options.path) {
      const index = req.url.indexOf('?');
      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

      if (pathname !== this.options.path) return false;
    }

    return true;
  }

  /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */
  handleUpgrade(req, socket, head, cb) {
    socket.on('error', socketOnError);

    const key = req.headers['sec-websocket-key'];
    const version = +req.headers['sec-websocket-version'];

    if (req.method !== 'GET') {
      const message = 'Invalid HTTP method';
      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
      return;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      const message = 'Invalid Upgrade header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!key || !keyRegex.test(key)) {
      const message = 'Missing or invalid Sec-WebSocket-Key header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (version !== 8 && version !== 13) {
      const message = 'Missing or invalid Sec-WebSocket-Version header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!this.shouldHandle(req)) {
      abortHandshake(socket, 400);
      return;
    }

    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
    let protocols = new Set();

    if (secWebSocketProtocol !== undefined) {
      try {
        protocols = subprotocol.parse(secWebSocketProtocol);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Protocol header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
    const extensions = {};

    if (
      this.options.perMessageDeflate &&
      secWebSocketExtensions !== undefined
    ) {
      const perMessageDeflate = new PerMessageDeflate(
        this.options.perMessageDeflate,
        true,
        this.options.maxPayload
      );

      try {
        const offers = extension.parse(secWebSocketExtensions);

        if (offers[PerMessageDeflate.extensionName]) {
          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
      } catch (err) {
        const message =
          'Invalid or unacceptable Sec-WebSocket-Extensions header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    //
    // Optionally call external client verification handler.
    //
    if (this.options.verifyClient) {
      const info = {
        origin:
          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
        secure: !!(req.socket.authorized || req.socket.encrypted),
        req
      };

      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(info, (verified, code, message, headers) => {
          if (!verified) {
            return abortHandshake(socket, code || 401, message, headers);
          }

          this.completeUpgrade(
            extensions,
            key,
            protocols,
            req,
            socket,
            head,
            cb
          );
        });
        return;
      }

      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
    }

    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
  }

  /**
   * Upgrade the connection to WebSocket.
   *
   * @param {Object} extensions The accepted extensions
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Set} protocols The subprotocols
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */
  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
    //
    // Destroy the socket if the client has already sent a FIN packet.
    //
    if (!socket.readable || !socket.writable) return socket.destroy();

    if (socket[kWebSocket]) {
      throw new Error(
        'server.handleUpgrade() was called more than once with the same ' +
          'socket, possibly due to a misconfiguration'
      );
    }

    if (this._state > RUNNING) return abortHandshake(socket, 503);

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    const headers = [
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${digest}`
    ];

    const ws = new this.options.WebSocket(null);

    if (protocols.size) {
      //
      // Optionally call external protocol selection handler.
      //
      const protocol = this.options.handleProtocols
        ? this.options.handleProtocols(protocols, req)
        : protocols.values().next().value;

      if (protocol) {
        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
        ws._protocol = protocol;
      }
    }

    if (extensions[PerMessageDeflate.extensionName]) {
      const params = extensions[PerMessageDeflate.extensionName].params;
      const value = extension.format({
        [PerMessageDeflate.extensionName]: [params]
      });
      headers.push(`Sec-WebSocket-Extensions: ${value}`);
      ws._extensions = extensions;
    }

    //
    // Allow external modification/inspection of handshake headers.
    //
    this.emit('headers', headers, req);

    socket.write(headers.concat('\r\n').join('\r\n'));
    socket.removeListener('error', socketOnError);

    ws.setSocket(socket, head, {
      maxPayload: this.options.maxPayload,
      skipUTF8Validation: this.options.skipUTF8Validation
    });

    if (this.clients) {
      this.clients.add(ws);
      ws.on('close', () => {
        this.clients.delete(ws);

        if (this._shouldEmitClose && !this.clients.size) {
          process.nextTick(emitClose, this);
        }
      });
    }

    cb(ws, req);
  }
}

var websocketServer = WebSocketServer;

/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */
function addListeners(server, map) {
  for (const event of Object.keys(map)) server.on(event, map[event]);

  return function removeListeners() {
    for (const event of Object.keys(map)) {
      server.removeListener(event, map[event]);
    }
  };
}

/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */
function emitClose(server) {
  server._state = CLOSED;
  server.emit('close');
}

/**
 * Handle socket errors.
 *
 * @private
 */
function socketOnError() {
  this.destroy();
}

/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */
function abortHandshake(socket, code, message, headers) {
  //
  // The socket is writable unless the user destroyed or ended it before calling
  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
  // error. Handling this does not make much sense as the worst that can happen
  // is that some of the data written by the user might be discarded due to the
  // call to `socket.end()` below, which triggers an `'error'` event that in
  // turn causes the socket to be destroyed.
  //
  message = message || http$2.STATUS_CODES[code];
  headers = {
    Connection: 'close',
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(message),
    ...headers
  };

  socket.once('finish', socket.destroy);

  socket.end(
    `HTTP/1.1 ${code} ${http$2.STATUS_CODES[code]}\r\n` +
      Object.keys(headers)
        .map((h) => `${h}: ${headers[h]}`)
        .join('\r\n') +
      '\r\n\r\n' +
      message
  );
}

/**
 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
 * one listener for it, otherwise call `abortHandshake()`.
 *
 * @param {WebSocketServer} server The WebSocket server
 * @param {http.IncomingMessage} req The request object
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} message The HTTP response body
 * @private
 */
function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
  if (server.listenerCount('wsClientError')) {
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

    server.emit('wsClientError', err, socket, req);
  } else {
    abortHandshake(socket, code, message);
  }
}

const WebSocket$1 = websocket;

WebSocket$1.createWebSocketStream = stream;
WebSocket$1.Server = websocketServer;
WebSocket$1.Receiver = receiver;
WebSocket$1.Sender = sender;

WebSocket$1.WebSocket = WebSocket$1;
WebSocket$1.WebSocketServer = WebSocket$1.Server;

var ws$2 = WebSocket$1;

var dist = {};

var xmlHttpRequest = {};

var progressEvent = {};

Object.defineProperty(progressEvent, "__esModule", { value: true });
var ProgressEvent = /** @class */ (function () {
    function ProgressEvent(type) {
        this.type = type;
        this.bubbles = false;
        this.cancelable = false;
        this.loaded = 0;
        this.lengthComputable = false;
        this.total = 0;
    }
    return ProgressEvent;
}());
progressEvent.ProgressEvent = ProgressEvent;

var errors = {};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(errors, "__esModule", { value: true });
var SecurityError = /** @class */ (function (_super) {
    __extends$2(SecurityError, _super);
    function SecurityError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SecurityError;
}(Error));
errors.SecurityError = SecurityError;
var InvalidStateError = /** @class */ (function (_super) {
    __extends$2(InvalidStateError, _super);
    function InvalidStateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidStateError;
}(Error));
errors.InvalidStateError = InvalidStateError;
var NetworkError = /** @class */ (function (_super) {
    __extends$2(NetworkError, _super);
    function NetworkError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NetworkError;
}(Error));
errors.NetworkError = NetworkError;
var SyntaxError$1 = /** @class */ (function (_super) {
    __extends$2(SyntaxError, _super);
    function SyntaxError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SyntaxError;
}(Error));
errors.SyntaxError = SyntaxError$1;

var xmlHttpRequestEventTarget = {};

Object.defineProperty(xmlHttpRequestEventTarget, "__esModule", { value: true });
var XMLHttpRequestEventTarget = /** @class */ (function () {
    function XMLHttpRequestEventTarget() {
        this.listeners = {};
    }
    XMLHttpRequestEventTarget.prototype.addEventListener = function (eventType, listener) {
        eventType = eventType.toLowerCase();
        this.listeners[eventType] = this.listeners[eventType] || [];
        this.listeners[eventType].push(listener.handleEvent || listener);
    };
    XMLHttpRequestEventTarget.prototype.removeEventListener = function (eventType, listener) {
        eventType = eventType.toLowerCase();
        if (!this.listeners[eventType]) {
            return;
        }
        var index = this.listeners[eventType].indexOf(listener.handleEvent || listener);
        if (index < 0) {
            return;
        }
        this.listeners[eventType].splice(index, 1);
    };
    XMLHttpRequestEventTarget.prototype.dispatchEvent = function (event) {
        var eventType = event.type.toLowerCase();
        event.target = this; // TODO: set event.currentTarget?
        if (this.listeners[eventType]) {
            for (var _i = 0, _a = this.listeners[eventType]; _i < _a.length; _i++) {
                var listener_1 = _a[_i];
                listener_1.call(this, event);
            }
        }
        var listener = this["on" + eventType];
        if (listener) {
            listener.call(this, event);
        }
        return true;
    };
    return XMLHttpRequestEventTarget;
}());
xmlHttpRequestEventTarget.XMLHttpRequestEventTarget = XMLHttpRequestEventTarget;

var xmlHttpRequestUpload = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(xmlHttpRequestUpload, "__esModule", { value: true });
var xml_http_request_event_target_1$1 = xmlHttpRequestEventTarget;
var XMLHttpRequestUpload = /** @class */ (function (_super) {
    __extends$1(XMLHttpRequestUpload, _super);
    function XMLHttpRequestUpload() {
        var _this = _super.call(this) || this;
        _this._contentType = null;
        _this._body = null;
        _this._reset();
        return _this;
    }
    XMLHttpRequestUpload.prototype._reset = function () {
        this._contentType = null;
        this._body = null;
    };
    XMLHttpRequestUpload.prototype._setData = function (data) {
        if (data == null) {
            return;
        }
        if (typeof data === 'string') {
            if (data.length !== 0) {
                this._contentType = 'text/plain;charset=UTF-8';
            }
            this._body = new Buffer(data, 'utf-8');
        }
        else if (Buffer.isBuffer(data)) {
            this._body = data;
        }
        else if (data instanceof ArrayBuffer) {
            var body = new Buffer(data.byteLength);
            var view = new Uint8Array(data);
            for (var i = 0; i < data.byteLength; i++) {
                body[i] = view[i];
            }
            this._body = body;
        }
        else if (data.buffer && data.buffer instanceof ArrayBuffer) {
            var body = new Buffer(data.byteLength);
            var offset = data.byteOffset;
            var view = new Uint8Array(data.buffer);
            for (var i = 0; i < data.byteLength; i++) {
                body[i] = view[i + offset];
            }
            this._body = body;
        }
        else {
            throw new Error("Unsupported send() data " + data);
        }
    };
    XMLHttpRequestUpload.prototype._finalizeHeaders = function (headers, loweredHeaders) {
        if (this._contentType && !loweredHeaders['content-type']) {
            headers['Content-Type'] = this._contentType;
        }
        if (this._body) {
            headers['Content-Length'] = this._body.length.toString();
        }
    };
    XMLHttpRequestUpload.prototype._startUpload = function (request) {
        if (this._body) {
            request.write(this._body);
        }
        request.end();
    };
    return XMLHttpRequestUpload;
}(xml_http_request_event_target_1$1.XMLHttpRequestEventTarget));
xmlHttpRequestUpload.XMLHttpRequestUpload = XMLHttpRequestUpload;

var cookiejar = {};

/* jshint node: true */
(function () {

    function CookieAccessInfo(domain, path, secure, script) {
        if (this instanceof CookieAccessInfo) {
            this.domain = domain || undefined;
            this.path = path || "/";
            this.secure = !!secure;
            this.script = !!script;
            return this;
        }
        return new CookieAccessInfo(domain, path, secure, script);
    }
    CookieAccessInfo.All = Object.freeze(Object.create(null));
    cookiejar.CookieAccessInfo = CookieAccessInfo;

    function Cookie(cookiestr, request_domain, request_path) {
        if (cookiestr instanceof Cookie) {
            return cookiestr;
        }
        if (this instanceof Cookie) {
            this.name = null;
            this.value = null;
            this.expiration_date = Infinity;
            this.path = String(request_path || "/");
            this.explicit_path = false;
            this.domain = request_domain || null;
            this.explicit_domain = false;
            this.secure = false; //how to define default?
            this.noscript = false; //httponly
            if (cookiestr) {
                this.parse(cookiestr, request_domain, request_path);
            }
            return this;
        }
        return new Cookie(cookiestr, request_domain, request_path);
    }
    cookiejar.Cookie = Cookie;

    Cookie.prototype.toString = function toString() {
        var str = [this.name + "=" + this.value];
        if (this.expiration_date !== Infinity) {
            str.push("expires=" + (new Date(this.expiration_date)).toGMTString());
        }
        if (this.domain) {
            str.push("domain=" + this.domain);
        }
        if (this.path) {
            str.push("path=" + this.path);
        }
        if (this.secure) {
            str.push("secure");
        }
        if (this.noscript) {
            str.push("httponly");
        }
        return str.join("; ");
    };

    Cookie.prototype.toValueString = function toValueString() {
        return this.name + "=" + this.value;
    };

    var cookie_str_splitter = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
    Cookie.prototype.parse = function parse(str, request_domain, request_path) {
        if (this instanceof Cookie) {
            if ( str.length > 32768 ) {
                console.warn("Cookie too long for parsing (>32768 characters)");
                return;
            }
    
            var parts = str.split(";").filter(function (value) {
                    return !!value;
                });
            var i;

            var pair = parts[0].match(/([^=]+)=([\s\S]*)/);
            if (!pair) {
                console.warn("Invalid cookie header encountered. Header: '"+str+"'");
                return;
            }

            var key = pair[1];
            var value = pair[2];
            if ( typeof key !== 'string' || key.length === 0 || typeof value !== 'string' ) {
                console.warn("Unable to extract values from cookie header. Cookie: '"+str+"'");
                return;
            }

            this.name = key;
            this.value = value;

            for (i = 1; i < parts.length; i += 1) {
                pair = parts[i].match(/([^=]+)(?:=([\s\S]*))?/);
                key = pair[1].trim().toLowerCase();
                value = pair[2];
                switch (key) {
                case "httponly":
                    this.noscript = true;
                    break;
                case "expires":
                    this.expiration_date = value ?
                            Number(Date.parse(value)) :
                            Infinity;
                    break;
                case "path":
                    this.path = value ?
                            value.trim() :
                            "";
                    this.explicit_path = true;
                    break;
                case "domain":
                    this.domain = value ?
                            value.trim() :
                            "";
                    this.explicit_domain = !!this.domain;
                    break;
                case "secure":
                    this.secure = true;
                    break;
                }
            }

            if (!this.explicit_path) {
               this.path = request_path || "/";
            }
            if (!this.explicit_domain) {
               this.domain = request_domain;
            }

            return this;
        }
        return new Cookie().parse(str, request_domain, request_path);
    };

    Cookie.prototype.matches = function matches(access_info) {
        if (access_info === CookieAccessInfo.All) {
          return true;
        }
        if (this.noscript && access_info.script ||
                this.secure && !access_info.secure ||
                !this.collidesWith(access_info)) {
            return false;
        }
        return true;
    };

    Cookie.prototype.collidesWith = function collidesWith(access_info) {
        if ((this.path && !access_info.path) || (this.domain && !access_info.domain)) {
            return false;
        }
        if (this.path && access_info.path.indexOf(this.path) !== 0) {
            return false;
        }
        if (this.explicit_path && access_info.path.indexOf( this.path ) !== 0) {
           return false;
        }
        var access_domain = access_info.domain && access_info.domain.replace(/^[\.]/,'');
        var cookie_domain = this.domain && this.domain.replace(/^[\.]/,'');
        if (cookie_domain === access_domain) {
            return true;
        }
        if (cookie_domain) {
            if (!this.explicit_domain) {
                return false; // we already checked if the domains were exactly the same
            }
            var wildcard = access_domain.indexOf(cookie_domain);
            if (wildcard === -1 || wildcard !== access_domain.length - cookie_domain.length) {
                return false;
            }
            return true;
        }
        return true;
    };

    function CookieJar() {
        var cookies, cookies_list, collidable_cookie;
        if (this instanceof CookieJar) {
            cookies = Object.create(null); //name: [Cookie]

            this.setCookie = function setCookie(cookie, request_domain, request_path) {
                var remove, i;
                cookie = new Cookie(cookie, request_domain, request_path);
                //Delete the cookie if the set is past the current time
                remove = cookie.expiration_date <= Date.now();
                if (cookies[cookie.name] !== undefined) {
                    cookies_list = cookies[cookie.name];
                    for (i = 0; i < cookies_list.length; i += 1) {
                        collidable_cookie = cookies_list[i];
                        if (collidable_cookie.collidesWith(cookie)) {
                            if (remove) {
                                cookies_list.splice(i, 1);
                                if (cookies_list.length === 0) {
                                    delete cookies[cookie.name];
                                }
                                return false;
                            }
                            cookies_list[i] = cookie;
                            return cookie;
                        }
                    }
                    if (remove) {
                        return false;
                    }
                    cookies_list.push(cookie);
                    return cookie;
                }
                if (remove) {
                    return false;
                }
                cookies[cookie.name] = [cookie];
                return cookies[cookie.name];
            };
            //returns a cookie
            this.getCookie = function getCookie(cookie_name, access_info) {
                var cookie, i;
                cookies_list = cookies[cookie_name];
                if (!cookies_list) {
                    return;
                }
                for (i = 0; i < cookies_list.length; i += 1) {
                    cookie = cookies_list[i];
                    if (cookie.expiration_date <= Date.now()) {
                        if (cookies_list.length === 0) {
                            delete cookies[cookie.name];
                        }
                        continue;
                    }

                    if (cookie.matches(access_info)) {
                        return cookie;
                    }
                }
            };
            //returns a list of cookies
            this.getCookies = function getCookies(access_info) {
                var matches = [], cookie_name, cookie;
                for (cookie_name in cookies) {
                    cookie = this.getCookie(cookie_name, access_info);
                    if (cookie) {
                        matches.push(cookie);
                    }
                }
                matches.toString = function toString() {
                    return matches.join(":");
                };
                matches.toValueString = function toValueString() {
                    return matches.map(function (c) {
                        return c.toValueString();
                    }).join('; ');
                };
                return matches;
            };

            return this;
        }
        return new CookieJar();
    }
    cookiejar.CookieJar = CookieJar;

    //returns list of cookies that were set correctly. Cookies that are expired and removed are not returned.
    CookieJar.prototype.setCookies = function setCookies(cookies, request_domain, request_path) {
        cookies = Array.isArray(cookies) ?
                cookies :
                cookies.split(cookie_str_splitter);
        var successful = [],
            i,
            cookie;
        cookies = cookies.map(function(item){
            return new Cookie(item, request_domain, request_path);
        });
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i];
            if (this.setCookie(cookie, request_domain, request_path)) {
                successful.push(cookie);
            }
        }
        return successful;
    };
}());

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(xmlHttpRequest, "__esModule", { value: true });
var http$1 = require$$1$2;
var https = require$$1$1;
var os = require$$0$2;
var url = Url;
var progress_event_1 = progressEvent;
var errors_1 = errors;
var xml_http_request_event_target_1 = xmlHttpRequestEventTarget;
var xml_http_request_upload_1 = xmlHttpRequestUpload;
var Cookie = cookiejar;
var XMLHttpRequest = /** @class */ (function (_super) {
    __extends(XMLHttpRequest, _super);
    function XMLHttpRequest(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.UNSENT = XMLHttpRequest.UNSENT;
        _this.OPENED = XMLHttpRequest.OPENED;
        _this.HEADERS_RECEIVED = XMLHttpRequest.HEADERS_RECEIVED;
        _this.LOADING = XMLHttpRequest.LOADING;
        _this.DONE = XMLHttpRequest.DONE;
        _this.onreadystatechange = null;
        _this.readyState = XMLHttpRequest.UNSENT;
        _this.response = null;
        _this.responseText = '';
        _this.responseType = '';
        _this.status = 0; // TODO: UNSENT?
        _this.statusText = '';
        _this.timeout = 0;
        _this.upload = new xml_http_request_upload_1.XMLHttpRequestUpload();
        _this.responseUrl = '';
        _this.withCredentials = false;
        _this._method = null;
        _this._url = null;
        _this._sync = false;
        _this._headers = {};
        _this._loweredHeaders = {};
        _this._mimeOverride = null; // TODO: is type right?
        _this._request = null;
        _this._response = null;
        _this._responseParts = null;
        _this._responseHeaders = null;
        _this._aborting = null; // TODO: type?
        _this._error = null; // TODO: type?
        _this._loadedBytes = 0;
        _this._totalBytes = 0;
        _this._lengthComputable = false;
        _this._restrictedMethods = { CONNECT: true, TRACE: true, TRACK: true };
        _this._restrictedHeaders = {
            'accept-charset': true,
            'accept-encoding': true,
            'access-control-request-headers': true,
            'access-control-request-method': true,
            connection: true,
            'content-length': true,
            cookie: true,
            cookie2: true,
            date: true,
            dnt: true,
            expect: true,
            host: true,
            'keep-alive': true,
            origin: true,
            referer: true,
            te: true,
            trailer: true,
            'transfer-encoding': true,
            upgrade: true,
            'user-agent': true,
            via: true
        };
        _this._privateHeaders = { 'set-cookie': true, 'set-cookie2': true };
        _this._userAgent = "Mozilla/5.0 (" + os.type() + " " + os.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8;
        _this._anonymous = options.anon || false;
        return _this;
    }
    XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
        if (async === void 0) { async = true; }
        method = method.toUpperCase();
        if (this._restrictedMethods[method]) {
            throw new XMLHttpRequest.SecurityError("HTTP method " + method + " is not allowed in XHR");
        }
        var xhrUrl = this._parseUrl(url, user, password);
        if (this.readyState === XMLHttpRequest.HEADERS_RECEIVED || this.readyState === XMLHttpRequest.LOADING) ;
        this._method = method;
        this._url = xhrUrl;
        this._sync = !async;
        this._headers = {};
        this._loweredHeaders = {};
        this._mimeOverride = null;
        this._setReadyState(XMLHttpRequest.OPENED);
        this._request = null;
        this._response = null;
        this.status = 0;
        this.statusText = '';
        this._responseParts = [];
        this._responseHeaders = null;
        this._loadedBytes = 0;
        this._totalBytes = 0;
        this._lengthComputable = false;
    };
    XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
        if (this.readyState !== XMLHttpRequest.OPENED) {
            throw new XMLHttpRequest.InvalidStateError('XHR readyState must be OPENED');
        }
        var loweredName = name.toLowerCase();
        if (this._restrictedHeaders[loweredName] || /^sec-/.test(loweredName) || /^proxy-/.test(loweredName)) {
            console.warn("Refused to set unsafe header \"" + name + "\"");
            return;
        }
        value = value.toString();
        if (this._loweredHeaders[loweredName] != null) {
            name = this._loweredHeaders[loweredName];
            this._headers[name] = this._headers[name] + ", " + value;
        }
        else {
            this._loweredHeaders[loweredName] = name;
            this._headers[name] = value;
        }
    };
    XMLHttpRequest.prototype.send = function (data) {
        if (this.readyState !== XMLHttpRequest.OPENED) {
            throw new XMLHttpRequest.InvalidStateError('XHR readyState must be OPENED');
        }
        if (this._request) {
            throw new XMLHttpRequest.InvalidStateError('send() already called');
        }
        switch (this._url.protocol) {
            case 'file:':
                return this._sendFile(data);
            case 'http:':
            case 'https:':
                return this._sendHttp(data);
            default:
                throw new XMLHttpRequest.NetworkError("Unsupported protocol " + this._url.protocol);
        }
    };
    XMLHttpRequest.prototype.abort = function () {
        if (this._request == null) {
            return;
        }
        this._request.abort();
        this._setError();
        this._dispatchProgress('abort');
        this._dispatchProgress('loadend');
    };
    XMLHttpRequest.prototype.getResponseHeader = function (name) {
        if (this._responseHeaders == null || name == null) {
            return null;
        }
        var loweredName = name.toLowerCase();
        return this._responseHeaders.hasOwnProperty(loweredName)
            ? this._responseHeaders[name.toLowerCase()]
            : null;
    };
    XMLHttpRequest.prototype.getAllResponseHeaders = function () {
        var _this = this;
        if (this._responseHeaders == null) {
            return '';
        }
        return Object.keys(this._responseHeaders).map(function (key) { return key + ": " + _this._responseHeaders[key]; }).join('\r\n');
    };
    XMLHttpRequest.prototype.overrideMimeType = function (mimeType) {
        if (this.readyState === XMLHttpRequest.LOADING || this.readyState === XMLHttpRequest.DONE) {
            throw new XMLHttpRequest.InvalidStateError('overrideMimeType() not allowed in LOADING or DONE');
        }
        this._mimeOverride = mimeType.toLowerCase();
    };
    XMLHttpRequest.prototype.nodejsSet = function (options) {
        this.nodejsHttpAgent = options.httpAgent || this.nodejsHttpAgent;
        this.nodejsHttpsAgent = options.httpsAgent || this.nodejsHttpsAgent;
        if (options.hasOwnProperty('baseUrl')) {
            if (options.baseUrl != null) {
                var parsedUrl = url.parse(options.baseUrl, false, true);
                if (!parsedUrl.protocol) {
                    throw new XMLHttpRequest.SyntaxError("baseUrl must be an absolute URL");
                }
            }
            this.nodejsBaseUrl = options.baseUrl;
        }
    };
    XMLHttpRequest.nodejsSet = function (options) {
        XMLHttpRequest.prototype.nodejsSet(options);
    };
    XMLHttpRequest.prototype._setReadyState = function (readyState) {
        this.readyState = readyState;
        this.dispatchEvent(new progress_event_1.ProgressEvent('readystatechange'));
    };
    XMLHttpRequest.prototype._sendFile = function (data) {
        // TODO
        throw new Error('Protocol file: not implemented');
    };
    XMLHttpRequest.prototype._sendHttp = function (data) {
        if (this._sync) {
            throw new Error('Synchronous XHR processing not implemented');
        }
        if (data && (this._method === 'GET' || this._method === 'HEAD')) {
            console.warn("Discarding entity body for " + this._method + " requests");
            data = null;
        }
        else {
            data = data || '';
        }
        this.upload._setData(data);
        this._finalizeHeaders();
        this._sendHxxpRequest();
    };
    XMLHttpRequest.prototype._sendHxxpRequest = function () {
        var _this = this;
        if (this.withCredentials) {
            var cookie = XMLHttpRequest.cookieJar
                .getCookies(Cookie.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === 'https:')).toValueString();
            this._headers.cookie = this._headers.cookie2 = cookie;
        }
        var _a = this._url.protocol === 'http:' ? [http$1, this.nodejsHttpAgent] : [https, this.nodejsHttpsAgent], hxxp = _a[0], agent = _a[1];
        var requestMethod = hxxp.request.bind(hxxp);
        var request = requestMethod({
            hostname: this._url.hostname,
            port: +this._url.port,
            path: this._url.path,
            auth: this._url.auth,
            method: this._method,
            headers: this._headers,
            agent: agent
        });
        this._request = request;
        if (this.timeout) {
            request.setTimeout(this.timeout, function () { return _this._onHttpTimeout(request); });
        }
        request.on('response', function (response) { return _this._onHttpResponse(request, response); });
        request.on('error', function (error) { return _this._onHttpRequestError(request, error); });
        this.upload._startUpload(request);
        if (this._request === request) {
            this._dispatchProgress('loadstart');
        }
    };
    XMLHttpRequest.prototype._finalizeHeaders = function () {
        this._headers = __assign({}, this._headers, { Connection: 'keep-alive', Host: this._url.host, 'User-Agent': this._userAgent }, this._anonymous ? { Referer: 'about:blank' } : {});
        this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
    };
    XMLHttpRequest.prototype._onHttpResponse = function (request, response) {
        var _this = this;
        if (this._request !== request) {
            return;
        }
        if (this.withCredentials && (response.headers['set-cookie'] || response.headers['set-cookie2'])) {
            XMLHttpRequest.cookieJar
                .setCookies(response.headers['set-cookie'] || response.headers['set-cookie2']);
        }
        if ([301, 302, 303, 307, 308].indexOf(response.statusCode) >= 0) {
            this._url = this._parseUrl(response.headers.location);
            this._method = 'GET';
            if (this._loweredHeaders['content-type']) {
                delete this._headers[this._loweredHeaders['content-type']];
                delete this._loweredHeaders['content-type'];
            }
            if (this._headers['Content-Type'] != null) {
                delete this._headers['Content-Type'];
            }
            delete this._headers['Content-Length'];
            this.upload._reset();
            this._finalizeHeaders();
            this._sendHxxpRequest();
            return;
        }
        this._response = response;
        this._response.on('data', function (data) { return _this._onHttpResponseData(response, data); });
        this._response.on('end', function () { return _this._onHttpResponseEnd(response); });
        this._response.on('close', function () { return _this._onHttpResponseClose(response); });
        this.responseUrl = this._url.href.split('#')[0];
        this.status = response.statusCode;
        this.statusText = http$1.STATUS_CODES[this.status];
        this._parseResponseHeaders(response);
        var lengthString = this._responseHeaders['content-length'] || '';
        this._totalBytes = +lengthString;
        this._lengthComputable = !!lengthString;
        this._setReadyState(XMLHttpRequest.HEADERS_RECEIVED);
    };
    XMLHttpRequest.prototype._onHttpResponseData = function (response, data) {
        if (this._response !== response) {
            return;
        }
        this._responseParts.push(new Buffer(data));
        this._loadedBytes += data.length;
        if (this.readyState !== XMLHttpRequest.LOADING) {
            this._setReadyState(XMLHttpRequest.LOADING);
        }
        this._dispatchProgress('progress');
    };
    XMLHttpRequest.prototype._onHttpResponseEnd = function (response) {
        if (this._response !== response) {
            return;
        }
        this._parseResponse();
        this._request = null;
        this._response = null;
        this._setReadyState(XMLHttpRequest.DONE);
        this._dispatchProgress('load');
        this._dispatchProgress('loadend');
    };
    XMLHttpRequest.prototype._onHttpResponseClose = function (response) {
        if (this._response !== response) {
            return;
        }
        var request = this._request;
        this._setError();
        request.abort();
        this._setReadyState(XMLHttpRequest.DONE);
        this._dispatchProgress('error');
        this._dispatchProgress('loadend');
    };
    XMLHttpRequest.prototype._onHttpTimeout = function (request) {
        if (this._request !== request) {
            return;
        }
        this._setError();
        request.abort();
        this._setReadyState(XMLHttpRequest.DONE);
        this._dispatchProgress('timeout');
        this._dispatchProgress('loadend');
    };
    XMLHttpRequest.prototype._onHttpRequestError = function (request, error) {
        if (this._request !== request) {
            return;
        }
        this._setError();
        request.abort();
        this._setReadyState(XMLHttpRequest.DONE);
        this._dispatchProgress('error');
        this._dispatchProgress('loadend');
    };
    XMLHttpRequest.prototype._dispatchProgress = function (eventType) {
        var event = new XMLHttpRequest.ProgressEvent(eventType);
        event.lengthComputable = this._lengthComputable;
        event.loaded = this._loadedBytes;
        event.total = this._totalBytes;
        this.dispatchEvent(event);
    };
    XMLHttpRequest.prototype._setError = function () {
        this._request = null;
        this._response = null;
        this._responseHeaders = null;
        this._responseParts = null;
    };
    XMLHttpRequest.prototype._parseUrl = function (urlString, user, password) {
        var absoluteUrl = this.nodejsBaseUrl == null ? urlString : url.resolve(this.nodejsBaseUrl, urlString);
        var xhrUrl = url.parse(absoluteUrl, false, true);
        xhrUrl.hash = null;
        var _a = (xhrUrl.auth || '').split(':'), xhrUser = _a[0], xhrPassword = _a[1];
        if (xhrUser || xhrPassword || user || password) {
            xhrUrl.auth = (user || xhrUser || '') + ":" + (password || xhrPassword || '');
        }
        return xhrUrl;
    };
    XMLHttpRequest.prototype._parseResponseHeaders = function (response) {
        this._responseHeaders = {};
        for (var name_1 in response.headers) {
            var loweredName = name_1.toLowerCase();
            if (this._privateHeaders[loweredName]) {
                continue;
            }
            this._responseHeaders[loweredName] = response.headers[name_1];
        }
        if (this._mimeOverride != null) {
            this._responseHeaders['content-type'] = this._mimeOverride;
        }
    };
    XMLHttpRequest.prototype._parseResponse = function () {
        var buffer = Buffer.concat(this._responseParts);
        this._responseParts = null;
        switch (this.responseType) {
            case 'json':
                this.responseText = null;
                try {
                    this.response = JSON.parse(buffer.toString('utf-8'));
                }
                catch (_a) {
                    this.response = null;
                }
                return;
            case 'buffer':
                this.responseText = null;
                this.response = buffer;
                return;
            case 'arraybuffer':
                this.responseText = null;
                var arrayBuffer = new ArrayBuffer(buffer.length);
                var view = new Uint8Array(arrayBuffer);
                for (var i = 0; i < buffer.length; i++) {
                    view[i] = buffer[i];
                }
                this.response = arrayBuffer;
                return;
            case 'text':
            default:
                try {
                    this.responseText = buffer.toString(this._parseResponseEncoding());
                }
                catch (_b) {
                    this.responseText = buffer.toString('binary');
                }
                this.response = this.responseText;
        }
    };
    XMLHttpRequest.prototype._parseResponseEncoding = function () {
        return /;\s*charset=(.*)$/.exec(this._responseHeaders['content-type'] || '')[1] || 'utf-8';
    };
    XMLHttpRequest.ProgressEvent = progress_event_1.ProgressEvent;
    XMLHttpRequest.InvalidStateError = errors_1.InvalidStateError;
    XMLHttpRequest.NetworkError = errors_1.NetworkError;
    XMLHttpRequest.SecurityError = errors_1.SecurityError;
    XMLHttpRequest.SyntaxError = errors_1.SyntaxError;
    XMLHttpRequest.XMLHttpRequestUpload = xml_http_request_upload_1.XMLHttpRequestUpload;
    XMLHttpRequest.UNSENT = 0;
    XMLHttpRequest.OPENED = 1;
    XMLHttpRequest.HEADERS_RECEIVED = 2;
    XMLHttpRequest.LOADING = 3;
    XMLHttpRequest.DONE = 4;
    XMLHttpRequest.cookieJar = Cookie.CookieJar();
    return XMLHttpRequest;
}(xml_http_request_event_target_1.XMLHttpRequestEventTarget));
xmlHttpRequest.XMLHttpRequest = XMLHttpRequest;
XMLHttpRequest.prototype.nodejsHttpAgent = http$1.globalAgent;
XMLHttpRequest.prototype.nodejsHttpsAgent = https.globalAgent;
XMLHttpRequest.prototype.nodejsBaseUrl = null;

(function (exports) {
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(xmlHttpRequest);
	var xml_http_request_event_target_1 = xmlHttpRequestEventTarget;
	exports.XMLHttpRequestEventTarget = xml_http_request_event_target_1.XMLHttpRequestEventTarget;
	
} (dist));

const EventEmitter$3 = require$$0;

class UnavailableConnection extends EventEmitter$3 {
  constructor (message) {
    super();
    setTimeout(() => this.onError(new Error(message)), 0);
  }

  onError (err) {
    if (this.listenerCount('error')) this.emit('error', err);
  }
}

var unavailable = message => () => new UnavailableConnection(message);

var oboeNode = {exports: {}};

/*!
 * v2.1.4-104-gc868b3a
 * 
 */
oboeNode.exports;

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 8);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return partialComplete; });
	/* unused harmony export compose */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compose2; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return attr; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return lazyUnion; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apply; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return varArgs; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return flip; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return lazyIntersection; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return noop; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return always; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return functor; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);


	/**
	 * Partially complete a function.
	 *
	 *  var add3 = partialComplete( function add(a,b){return a+b}, 3 );
	 *
	 *  add3(4) // gives 7
	 *
	 *  function wrap(left, right, cen){return left + " " + cen + " " + right;}
	 *
	 *  var pirateGreeting = partialComplete( wrap , "I'm", ", a mighty pirate!" );
	 *
	 *  pirateGreeting("Guybrush Threepwood");
	 *  // gives "I'm Guybrush Threepwood, a mighty pirate!"
	 */
	var partialComplete = varArgs(function (fn, args) {
	  // this isn't the shortest way to write this but it does
	  // avoid creating a new array each time to pass to fn.apply,
	  // otherwise could just call boundArgs.concat(callArgs)

	  var numBoundArgs = args.length;

	  return varArgs(function (callArgs) {
	    for (var i = 0; i < callArgs.length; i++) {
	      args[numBoundArgs + i] = callArgs[i];
	    }

	    args.length = numBoundArgs + callArgs.length;

	    return fn.apply(this, args)
	  })
	});

	/**
	* Compose zero or more functions:
	*
	*    compose(f1, f2, f3)(x) = f1(f2(f3(x))))
	*
	* The last (inner-most) function may take more than one parameter:
	*
	*    compose(f1, f2, f3)(x,y) = f1(f2(f3(x,y))))
	*/
	varArgs(function (fns) {
	  var fnsList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["c" /* arrayAsList */])(fns);

	  function next (params, curFn) {
	    return [apply(params, curFn)]
	  }

	  return varArgs(function (startParams) {
	    return Object(__WEBPACK_IMPORTED_MODULE_0__lists__["f" /* foldR */])(next, startParams, fnsList)[0]
	  })
	});

	/**
	* A more optimised version of compose that takes exactly two functions
	* @param f1
	* @param f2
	*/
	function compose2 (f1, f2) {
	  return function () {
	    return f1.call(this, f2.apply(this, arguments))
	  }
	}

	/**
	* Generic form for a function to get a property from an object
	*
	*    var o = {
	*       foo:'bar'
	*    }
	*
	*    var getFoo = attr('foo')
	*
	*    fetFoo(o) // returns 'bar'
	*
	* @param {String} key the property name
	*/
	function attr (key) {
	  return function (o) { return o[key] }
	}

	/**
	* Call a list of functions with the same args until one returns a
	* truthy result. Similar to the || operator.
	*
	* So:
	*      lazyUnion([f1,f2,f3 ... fn])( p1, p2 ... pn )
	*
	* Is equivalent to:
	*      apply([p1, p2 ... pn], f1) ||
	*      apply([p1, p2 ... pn], f2) ||
	*      apply([p1, p2 ... pn], f3) ... apply(fn, [p1, p2 ... pn])
	*
	* @returns the first return value that is given that is truthy.
	*/
	var lazyUnion = varArgs(function (fns) {
	  return varArgs(function (params) {
	    var maybeValue;

	    for (var i = 0; i < attr('length')(fns); i++) {
	      maybeValue = apply(params, fns[i]);

	      if (maybeValue) {
	        return maybeValue
	      }
	    }
	  })
	});

	/**
	* This file declares various pieces of functional programming.
	*
	* This isn't a general purpose functional library, to keep things small it
	* has just the parts useful for Oboe.js.
	*/

	/**
	* Call a single function with the given arguments array.
	* Basically, a functional-style version of the OO-style Function#apply for
	* when we don't care about the context ('this') of the call.
	*
	* The order of arguments allows partial completion of the arguments array
	*/
	function apply (args, fn) {
	  return fn.apply(undefined, args)
	}

	/**
	* Define variable argument functions but cut out all that tedious messing about
	* with the arguments object. Delivers the variable-length part of the arguments
	* list as an array.
	*
	* Eg:
	*
	* var myFunction = varArgs(
	*    function( fixedArgument, otherFixedArgument, variableNumberOfArguments ){
	*       console.log( variableNumberOfArguments );
	*    }
	* )
	*
	* myFunction('a', 'b', 1, 2, 3); // logs [1,2,3]
	*
	* var myOtherFunction = varArgs(function( variableNumberOfArguments ){
	*    console.log( variableNumberOfArguments );
	* })
	*
	* myFunction(1, 2, 3); // logs [1,2,3]
	*
	*/
	function varArgs (fn) {
	  var numberOfFixedArguments = fn.length - 1;
	  var slice = Array.prototype.slice;

	  if (numberOfFixedArguments === 0) {
	    // an optimised case for when there are no fixed args:

	    return function () {
	      return fn.call(this, slice.call(arguments))
	    }
	  } else if (numberOfFixedArguments === 1) {
	    // an optimised case for when there are is one fixed args:

	    return function () {
	      return fn.call(this, arguments[0], slice.call(arguments, 1))
	    }
	  }

	  // general case

	  // we know how many arguments fn will always take. Create a
	  // fixed-size array to hold that many, to be re-used on
	  // every call to the returned function
	  var argsHolder = Array(fn.length);

	  return function () {
	    for (var i = 0; i < numberOfFixedArguments; i++) {
	      argsHolder[i] = arguments[i];
	    }

	    argsHolder[numberOfFixedArguments] =
	      slice.call(arguments, numberOfFixedArguments);

	    return fn.apply(this, argsHolder)
	  }
	}

	/**
	* Swap the order of parameters to a binary function
	*
	* A bit like this flip: http://zvon.org/other/haskell/Outputprelude/flip_f.html
	*/
	function flip (fn) {
	  return function (a, b) {
	    return fn(b, a)
	  }
	}

	/**
	* Create a function which is the intersection of two other functions.
	*
	* Like the && operator, if the first is truthy, the second is never called,
	* otherwise the return value from the second is returned.
	*/
	function lazyIntersection (fn1, fn2) {
	  return function (param) {
	    return fn1(param) && fn2(param)
	  }
	}

	/**
	* A function which does nothing
	*/
	function noop () { }

	/**
	* A function which is always happy
	*/
	function always () { return true }

	/**
	* Create a function which always returns the same
	* value
	*
	* var return3 = functor(3);
	*
	* return3() // gives 3
	* return3() // still gives 3
	* return3() // will always give 3
	*/
	function functor (val) {
	  return function () {
	    return val
	  }
	}




	/***/ }),
	/* 1 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cons; });
	/* unused harmony export emptyList */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return head; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return tail; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return arrayAsList; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return list; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return listAsArray; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return map; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return foldR; });
	/* unused harmony export foldR1 */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return without; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return all; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applyEach; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return reverseList; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return first; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);


	/**
	 * Like cons in Lisp
	 */
	function cons (x, xs) {
	  /* Internally lists are linked 2-element Javascript arrays.

	      Ideally the return here would be Object.freeze([x,xs])
	      so that bugs related to mutation are found fast.
	      However, cons is right on the critical path for
	      performance and this slows oboe-mark down by
	      ~25%. Under theoretical future JS engines that freeze more
	      efficiently (possibly even use immutability to
	      run faster) this should be considered for
	      restoration.
	   */

	  return [x, xs]
	}

	/**
	 * The empty list
	 */
	var emptyList = null;

	/**
	 * Get the head of a list.
	 *
	 * Ie, head(cons(a,b)) = a
	 */
	var head = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["c" /* attr */])(0);

	/**
	 * Get the tail of a list.
	 *
	 * Ie, tail(cons(a,b)) = b
	 */
	var tail = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["c" /* attr */])(1);

	/**
	 * Converts an array to a list
	 *
	 *    asList([a,b,c])
	 *
	 * is equivalent to:
	 *
	 *    cons(a, cons(b, cons(c, emptyList)))
	 **/
	function arrayAsList (inputArray) {
	  return reverseList(
	    inputArray.reduce(
	      Object(__WEBPACK_IMPORTED_MODULE_0__functional__["e" /* flip */])(cons),
	      emptyList
	    )
	  )
	}

	/**
	 * A varargs version of arrayAsList. Works a bit like list
	 * in LISP.
	 *
	 *    list(a,b,c)
	 *
	 * is equivalent to:
	 *
	 *    cons(a, cons(b, cons(c, emptyList)))
	 */
	var list = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["k" /* varArgs */])(arrayAsList);

	/**
	 * Convert a list back to a js native array
	 */
	function listAsArray (list) {
	  return foldR(function (arraySoFar, listItem) {
	    arraySoFar.unshift(listItem);
	    return arraySoFar
	  }, [], list)
	}

	/**
	 * Map a function over a list
	 */
	function map (fn, list) {
	  return list
	    ? cons(fn(head(list)), map(fn, tail(list)))
	    : emptyList
	}

	/**
	 * foldR implementation. Reduce a list down to a single value.
	 *
	 * @pram {Function} fn     (rightEval, curVal) -> result
	 */
	function foldR (fn, startValue, list) {
	  return list
	    ? fn(foldR(fn, startValue, tail(list)), head(list))
	    : startValue
	}

	/**
	 * Return a list like the one given but with the first instance equal
	 * to item removed
	 */
	function without (list, test, removedFn) {
	  return withoutInner(list, removedFn || __WEBPACK_IMPORTED_MODULE_0__functional__["i" /* noop */])

	  function withoutInner (subList, removedFn) {
	    return subList
	      ? (test(head(subList))
	        ? (removedFn(head(subList)), tail(subList))
	        : cons(head(subList), withoutInner(tail(subList), removedFn))
	      )
	      : emptyList
	  }
	}

	/**
	 * Returns true if the given function holds for every item in
	 * the list, false otherwise
	 */
	function all (fn, list) {
	  return !list ||
	    (fn(head(list)) && all(fn, tail(list)))
	}

	/**
	 * Call every function in a list of functions with the same arguments
	 *
	 * This doesn't make any sense if we're doing pure functional because
	 * it doesn't return anything. Hence, this is only really useful if the
	 * functions being called have side-effects.
	 */
	function applyEach (fnList, args) {
	  if (fnList) {
	    head(fnList).apply(null, args);

	    applyEach(tail(fnList), args);
	  }
	}

	/**
	 * Reverse the order of a list
	 */
	function reverseList (list) {
	  // js re-implementation of 3rd solution from:
	  //    http://www.haskell.org/haskellwiki/99_questions/Solutions/5
	  function reverseInner (list, reversedAlready) {
	    if (!list) {
	      return reversedAlready
	    }

	    return reverseInner(tail(list), cons(head(list), reversedAlready))
	  }

	  return reverseInner(list, emptyList)
	}

	function first (test, list) {
	  return list &&
	    (test(head(list))
	      ? head(list)
	      : first(test, tail(list)))
	}




	/***/ }),
	/* 2 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isOfType; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return len; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isString; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defined; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasAllProperties; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);



	/**
	 * This file defines some loosely associated syntactic sugar for
	 * Javascript programming
	 */

	/**
	 * Returns true if the given candidate is of type T
	 */
	function isOfType (T, maybeSomething) {
	  return maybeSomething && maybeSomething.constructor === T
	}

	var len = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["c" /* attr */])('length');
	var isString = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(isOfType, String);

	/**
	 * I don't like saying this:
	 *
	 *    foo !=== undefined
	 *
	 * because of the double-negative. I find this:
	 *
	 *    defined(foo)
	 *
	 * easier to read.
	 */
	function defined (value) {
	  return value !== undefined
	}

	/**
	 * Returns true if object o has a key named like every property in
	 * the properties array. Will give false if any are missing, or if o
	 * is not an object.
	 */
	function hasAllProperties (fieldList, o) {
	  return (o instanceof Object) &&
	    Object(__WEBPACK_IMPORTED_MODULE_0__lists__["a" /* all */])(function (field) {
	      return (field in o)
	    }, fieldList)
	}




	/***/ }),
	/* 3 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NODE_OPENED; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NODE_CLOSED; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NODE_SWAP; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NODE_DROP; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FAIL_EVENT; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ROOT_NODE_FOUND; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ROOT_PATH_FOUND; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HTTP_START; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return STREAM_DATA; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return STREAM_END; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABORTING; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SAX_KEY; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SAX_VALUE_OPEN; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SAX_VALUE_CLOSE; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return errorReport; });
	/**
	 * This file declares some constants to use as names for event types.
	 */

	// the events which are never exported are kept as
	// the smallest possible representation, in numbers:
	var _S = 1;

	// fired whenever a new node starts in the JSON stream:
	var NODE_OPENED = _S++;

	// fired whenever a node closes in the JSON stream:
	var NODE_CLOSED = _S++;

	// called if a .node callback returns a value -
	var NODE_SWAP = _S++;
	var NODE_DROP = _S++;

	var FAIL_EVENT = 'fail';

	var ROOT_NODE_FOUND = _S++;
	var ROOT_PATH_FOUND = _S++;

	var HTTP_START = 'start';
	var STREAM_DATA = 'data';
	var STREAM_END = 'end';
	var ABORTING = _S++;

	// SAX events butchered from Clarinet
	var SAX_KEY = _S++;
	var SAX_VALUE_OPEN = _S++;
	var SAX_VALUE_CLOSE = _S++;

	function errorReport (statusCode, body, error) {
	  try {
	    var jsonBody = JSON.parse(body);
	  } catch (e) { }

	  return {
	    statusCode: statusCode,
	    body: body,
	    jsonBody: jsonBody,
	    thrown: error
	  }
	}




	/***/ }),
	/* 4 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return namedNode; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyOf; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nodeOf; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);


	/**
	 * Get a new key->node mapping
	 *
	 * @param {String|Number} key
	 * @param {Object|Array|String|Number|null} node a value found in the json
	 */
	function namedNode (key, node) {
	  return {key: key, node: node}
	}

	/** get the key of a namedNode */
	var keyOf = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["c" /* attr */])('key');

	/** get the node from a namedNode */
	var nodeOf = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["c" /* attr */])('node');




	/***/ }),
	/* 5 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return oboe; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaults__ = __webpack_require__(9);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wire__ = __webpack_require__(10);






	// export public API
	function oboe (arg1) {
	  // We use duck-typing to detect if the parameter given is a stream, with the
	  // below list of parameters.
	  // Unpipe and unshift would normally be present on a stream but this breaks
	  // compatibility with Request streams.
	  // See https://github.com/jimhigson/oboe.js/issues/65

	  var nodeStreamMethodNames = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["h" /* list */])('resume', 'pause', 'pipe');
	  var isStream = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(
	    __WEBPACK_IMPORTED_MODULE_2__util__["b" /* hasAllProperties */],
	    nodeStreamMethodNames
	  );

	  if (arg1) {
	    if (isStream(arg1) || Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* isString */])(arg1)) {
	      //  simple version for GETs. Signature is:
	      //    oboe( url )
	      //  or, under node:
	      //    oboe( readableStream )
	      return Object(__WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* applyDefaults */])(
	        __WEBPACK_IMPORTED_MODULE_4__wire__["a" /* wire */],
	        arg1 // url
	      )
	    } else {
	      // method signature is:
	      //    oboe({method:m, url:u, body:b, headers:{...}})

	      return Object(__WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* applyDefaults */])(
	        __WEBPACK_IMPORTED_MODULE_4__wire__["a" /* wire */],
	        arg1.url,
	        arg1.method,
	        arg1.body,
	        arg1.headers,
	        arg1.withCredentials,
	        arg1.cached
	      )
	    }
	  } else {
	    // wire up a no-AJAX, no-stream Oboe. Will have to have content
	    // fed in externally and using .emit.
	    return Object(__WEBPACK_IMPORTED_MODULE_4__wire__["a" /* wire */])()
	  }
	}

	/* oboe.drop is a special value. If a node callback returns this value the
	   parsed node is deleted from the JSON
	 */
	oboe.drop = function () {
	  return oboe.drop
	};




	/***/ }),
	/* 6 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return incrementalContentBuilder; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT_PATH; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascent__ = __webpack_require__(4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists__ = __webpack_require__(1);





	/**
	 * This file provides various listeners which can be used to build up
	 * a changing ascent based on the callbacks provided by Clarinet. It listens
	 * to the low-level events from Clarinet and emits higher-level ones.
	 *
	 * The building up is stateless so to track a JSON file
	 * ascentManager.js is required to store the ascent state
	 * between calls.
	 */

	/**
	 * A special value to use in the path list to represent the path 'to' a root
	 * object (which doesn't really have any path). This prevents the need for
	 * special-casing detection of the root object and allows it to be treated
	 * like any other object. We might think of this as being similar to the
	 * 'unnamed root' domain ".", eg if I go to
	 * http://en.wikipedia.org./wiki/En/Main_page the dot after 'org' deliminates
	 * the unnamed root of the DNS.
	 *
	 * This is kept as an object to take advantage that in Javascript's OO objects
	 * are guaranteed to be distinct, therefore no other object can possibly clash
	 * with this one. Strings, numbers etc provide no such guarantee.
	 **/
	var ROOT_PATH = {};

	/**
	 * Create a new set of handlers for clarinet's events, bound to the emit
	 * function given.
	 */
	function incrementalContentBuilder (oboeBus) {
	  var emitNodeOpened = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["f" /* NODE_OPENED */]).emit;
	  var emitNodeClosed = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["d" /* NODE_CLOSED */]).emit;
	  var emitRootOpened = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["i" /* ROOT_PATH_FOUND */]).emit;
	  var emitRootClosed = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["h" /* ROOT_NODE_FOUND */]).emit;

	  function arrayIndicesAreKeys (possiblyInconsistentAscent, newDeepestNode) {
	    /* for values in arrays we aren't pre-warned of the coming paths
	         (Clarinet gives no call to onkey like it does for values in objects)
	         so if we are in an array we need to create this path ourselves. The
	         key will be len(parentNode) because array keys are always sequential
	         numbers. */

	    var parentNode = Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["c" /* nodeOf */])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__["g" /* head */])(possiblyInconsistentAscent));

	    return Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* isOfType */])(Array, parentNode)
	      ? keyFound(possiblyInconsistentAscent,
	        Object(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* len */])(parentNode),
	        newDeepestNode
	      )
	      // nothing needed, return unchanged
	      : possiblyInconsistentAscent
	  }

	  function nodeOpened (ascent, newDeepestNode) {
	    if (!ascent) {
	      // we discovered the root node,
	      emitRootOpened(newDeepestNode);

	      return keyFound(ascent, ROOT_PATH, newDeepestNode)
	    }

	    // we discovered a non-root node

	    var arrayConsistentAscent = arrayIndicesAreKeys(ascent, newDeepestNode);
	    var ancestorBranches = Object(__WEBPACK_IMPORTED_MODULE_3__lists__["l" /* tail */])(arrayConsistentAscent);
	    var previouslyUnmappedName = Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["a" /* keyOf */])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__["g" /* head */])(arrayConsistentAscent));

	    appendBuiltContent(
	      ancestorBranches,
	      previouslyUnmappedName,
	      newDeepestNode
	    );

	    return Object(__WEBPACK_IMPORTED_MODULE_3__lists__["d" /* cons */])(
	      Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["b" /* namedNode */])(previouslyUnmappedName, newDeepestNode),
	      ancestorBranches
	    )
	  }

	  /**
	    * Add a new value to the object we are building up to represent the
	    * parsed JSON
	    */
	  function appendBuiltContent (ancestorBranches, key, node) {
	    Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["c" /* nodeOf */])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__["g" /* head */])(ancestorBranches))[key] = node;
	  }

	  /**
	    * For when we find a new key in the json.
	    *
	    * @param {String|Number|Object} newDeepestName the key. If we are in an
	    *    array will be a number, otherwise a string. May take the special
	    *    value ROOT_PATH if the root node has just been found
	    *
	    * @param {String|Number|Object|Array|Null|undefined} [maybeNewDeepestNode]
	    *    usually this won't be known so can be undefined. Can't use null
	    *    to represent unknown because null is a valid value in JSON
	    **/
	  function keyFound (ascent, newDeepestName, maybeNewDeepestNode) {
	    if (ascent) { // if not root
	      // If we have the key but (unless adding to an array) no known value
	      // yet. Put that key in the output but against no defined value:
	      appendBuiltContent(ascent, newDeepestName, maybeNewDeepestNode);
	    }

	    var ascentWithNewPath = Object(__WEBPACK_IMPORTED_MODULE_3__lists__["d" /* cons */])(
	      Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["b" /* namedNode */])(newDeepestName,
	        maybeNewDeepestNode),
	      ascent
	    );

	    emitNodeOpened(ascentWithNewPath);

	    return ascentWithNewPath
	  }

	  /**
	    * For when the current node ends.
	    */
	  function nodeClosed (ascent) {
	    emitNodeClosed(ascent);

	    return Object(__WEBPACK_IMPORTED_MODULE_3__lists__["l" /* tail */])(ascent) ||
	      // If there are no nodes left in the ascent the root node
	      // just closed. Emit a special event for this:
	      emitRootClosed(Object(__WEBPACK_IMPORTED_MODULE_1__ascent__["c" /* nodeOf */])(Object(__WEBPACK_IMPORTED_MODULE_3__lists__["g" /* head */])(ascent)))
	  }

	  var contentBuilderHandlers = {};
	  contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__["l" /* SAX_VALUE_OPEN */]] = nodeOpened;
	  contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__["k" /* SAX_VALUE_CLOSE */]] = nodeClosed;
	  contentBuilderHandlers[__WEBPACK_IMPORTED_MODULE_0__events__["j" /* SAX_KEY */]] = keyFound;
	  return contentBuilderHandlers
	}




	/***/ }),
	/* 7 */
	/***/ (function(module, exports) {

	module.exports = Url;

	/***/ }),
	/* 8 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publicApi__ = __webpack_require__(5);


	/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__publicApi__["a" /* oboe */]);


	/***/ }),
	/* 9 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyDefaults; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);


	function applyDefaults (passthrough, url, httpMethodName, body, headers, withCredentials, cached) {
	  headers = headers
	    // Shallow-clone the headers array. This allows it to be
	    // modified without side effects to the caller. We don't
	    // want to change objects that the user passes in.
	    ? JSON.parse(JSON.stringify(headers))
	    : {};

	  if (body) {
	    if (!Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* isString */])(body)) {
	      // If the body is not a string, stringify it. This allows objects to
	      // be given which will be sent as JSON.
	      body = JSON.stringify(body);

	      // Default Content-Type to JSON unless given otherwise.
	      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
	    }
	    headers['Content-Length'] = headers['Content-Length'] || body.length;
	  } else {
	    body = null;
	  }

	  // support cache busting like jQuery.ajax({cache:false})
	  function modifiedUrl (baseUrl, cached) {
	    if (cached === false) {
	      if (baseUrl.indexOf('?') === -1) {
	        baseUrl += '?';
	      } else {
	        baseUrl += '&';
	      }

	      baseUrl += '_=' + new Date().getTime();
	    }
	    return baseUrl
	  }

	  return passthrough(httpMethodName || 'GET', modifiedUrl(url, cached), body, headers, withCredentials || false)
	}




	/***/ }),
	/* 10 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wire; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pubSub__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascentManager__ = __webpack_require__(13);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incrementalContentBuilder__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patternAdapter__ = __webpack_require__(14);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonPath__ = __webpack_require__(15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instanceApi__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_clarinet__ = __webpack_require__(18);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__ = __webpack_require__(19);










	/**
	 * This file sits just behind the API which is used to attain a new
	 * Oboe instance. It creates the new components that are required
	 * and introduces them to each other.
	 */

	function wire (httpMethodName, contentSource, body, headers, withCredentials) {
	  var oboeBus = Object(__WEBPACK_IMPORTED_MODULE_0__pubSub__["a" /* pubSub */])();

	  // Wire the input stream in if we are given a content source.
	  // This will usually be the case. If not, the instance created
	  // will have to be passed content from an external source.

	  if (contentSource) {
	    Object(__WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__["b" /* streamingHttp */])(oboeBus,
	      Object(__WEBPACK_IMPORTED_MODULE_7__streamingHttp_node__["a" /* httpTransport */])(),
	      httpMethodName,
	      contentSource,
	      body,
	      headers,
	      withCredentials
	    );
	  }

	  Object(__WEBPACK_IMPORTED_MODULE_6__libs_clarinet__["a" /* clarinet */])(oboeBus);

	  Object(__WEBPACK_IMPORTED_MODULE_1__ascentManager__["a" /* ascentManager */])(oboeBus, Object(__WEBPACK_IMPORTED_MODULE_2__incrementalContentBuilder__["b" /* incrementalContentBuilder */])(oboeBus));

	  Object(__WEBPACK_IMPORTED_MODULE_3__patternAdapter__["a" /* patternAdapter */])(oboeBus, __WEBPACK_IMPORTED_MODULE_4__jsonPath__["a" /* jsonPathCompiler */]);

	  return Object(__WEBPACK_IMPORTED_MODULE_5__instanceApi__["a" /* instanceApi */])(oboeBus, contentSource)
	}




	/***/ }),
	/* 11 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pubSub; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__singleEventPubSub__ = __webpack_require__(12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);



	/**
	 * pubSub is a curried interface for listening to and emitting
	 * events.
	 *
	 * If we get a bus:
	 *
	 *    var bus = pubSub();
	 *
	 * We can listen to event 'foo' like:
	 *
	 *    bus('foo').on(myCallback)
	 *
	 * And emit event foo like:
	 *
	 *    bus('foo').emit()
	 *
	 * or, with a parameter:
	 *
	 *    bus('foo').emit('bar')
	 *
	 * All functions can be cached and don't need to be
	 * bound. Ie:
	 *
	 *    var fooEmitter = bus('foo').emit
	 *    fooEmitter('bar');  // emit an event
	 *    fooEmitter('baz');  // emit another
	 *
	 * There's also an uncurried[1] shortcut for .emit and .on:
	 *
	 *    bus.on('foo', callback)
	 *    bus.emit('foo', 'bar')
	 *
	 * [1]: http://zvon.org/other/haskell/Outputprelude/uncurry_f.html
	 */
	function pubSub () {
	  var singles = {};
	  var newListener = newSingle('newListener');
	  var removeListener = newSingle('removeListener');

	  function newSingle (eventName) {
	    singles[eventName] = Object(__WEBPACK_IMPORTED_MODULE_0__singleEventPubSub__["a" /* singleEventPubSub */])(
	      eventName,
	      newListener,
	      removeListener
	    );
	    return singles[eventName]
	  }

	  /** pubSub instances are functions */
	  function pubSubInstance (eventName) {
	    return singles[eventName] || newSingle(eventName)
	  }

	  // add convenience EventEmitter-style uncurried form of 'emit' and 'on'
	  ['emit', 'on', 'un'].forEach(function (methodName) {
	    pubSubInstance[methodName] = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["k" /* varArgs */])(function (eventName, parameters) {
	      Object(__WEBPACK_IMPORTED_MODULE_1__functional__["b" /* apply */])(parameters, pubSubInstance(eventName)[methodName]);
	    });
	  });

	  return pubSubInstance
	}




	/***/ }),
	/* 12 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return singleEventPubSub; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lists__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functional__ = __webpack_require__(0);




	/**
	 * A pub/sub which is responsible for a single event type. A
	 * multi-event type event bus is created by pubSub by collecting
	 * several of these.
	 *
	 * @param {String} eventType
	 *    the name of the events managed by this singleEventPubSub
	 * @param {singleEventPubSub} [newListener]
	 *    place to notify of new listeners
	 * @param {singleEventPubSub} [removeListener]
	 *    place to notify of when listeners are removed
	 */
	function singleEventPubSub (eventType, newListener, removeListener) {
	  /** we are optimised for emitting events over firing them.
	   *  As well as the tuple list which stores event ids and
	   *  listeners there is a list with just the listeners which
	   *  can be iterated more quickly when we are emitting
	   */
	  var listenerTupleList,
	    listenerList;

	  function hasId (id) {
	    return function (tuple) {
	      return tuple.id === id
	    }
	  }

	  return {

	    /**
	     * @param {Function} listener
	     * @param {*} listenerId
	     *    an id that this listener can later by removed by.
	     *    Can be of any type, to be compared to other ids using ==
	     */
	    on: function (listener, listenerId) {
	      var tuple = {
	        listener: listener,
	        id: listenerId || listener // when no id is given use the
	        // listener function as the id
	      };

	      if (newListener) {
	        newListener.emit(eventType, listener, tuple.id);
	      }

	      listenerTupleList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["d" /* cons */])(tuple, listenerTupleList);
	      listenerList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["d" /* cons */])(listener, listenerList);

	      return this // chaining
	    },

	    emit: function () {
	      Object(__WEBPACK_IMPORTED_MODULE_0__lists__["b" /* applyEach */])(listenerList, arguments);
	    },

	    un: function (listenerId) {
	      var removed;

	      listenerTupleList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["m" /* without */])(
	        listenerTupleList,
	        hasId(listenerId),
	        function (tuple) {
	          removed = tuple;
	        }
	      );

	      if (removed) {
	        listenerList = Object(__WEBPACK_IMPORTED_MODULE_0__lists__["m" /* without */])(listenerList, function (listener) {
	          return listener === removed.listener
	        });

	        if (removeListener) {
	          removeListener.emit(eventType, removed.listener, removed.id);
	        }
	      }
	    },

	    listeners: function () {
	      // differs from Node EventEmitter: returns list, not array
	      return listenerList
	    },

	    hasListener: function (listenerId) {
	      var test = listenerId ? hasId(listenerId) : __WEBPACK_IMPORTED_MODULE_2__functional__["a" /* always */];

	      return Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* defined */])(Object(__WEBPACK_IMPORTED_MODULE_0__lists__["e" /* first */])(test, listenerTupleList))
	    }
	  }
	}




	/***/ }),
	/* 13 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ascentManager; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascent__ = __webpack_require__(4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists__ = __webpack_require__(1);



	/**
	 * A bridge used to assign stateless functions to listen to clarinet.
	 *
	 * As well as the parameter from clarinet, each callback will also be passed
	 * the result of the last callback.
	 *
	 * This may also be used to clear all listeners by assigning zero handlers:
	 *
	 *    ascentManager( clarinet, {} )
	 */
	function ascentManager (oboeBus, handlers) {

	  var listenerId = {};
	  var ascent;

	  function stateAfter (handler) {
	    return function (param) {
	      ascent = handler(ascent, param);
	    }
	  }

	  for (var eventName in handlers) {
	    oboeBus(eventName).on(stateAfter(handlers[eventName]), listenerId);
	  }

	  oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__["g" /* NODE_SWAP */]).on(function (newNode) {
	    var oldHead = Object(__WEBPACK_IMPORTED_MODULE_2__lists__["g" /* head */])(ascent);
	    var key = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__["a" /* keyOf */])(oldHead);
	    var ancestors = Object(__WEBPACK_IMPORTED_MODULE_2__lists__["l" /* tail */])(ascent);
	    var parentNode;

	    if (ancestors) {
	      parentNode = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__["c" /* nodeOf */])(Object(__WEBPACK_IMPORTED_MODULE_2__lists__["g" /* head */])(ancestors));
	      parentNode[key] = newNode;
	    }
	  });

	  oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__["e" /* NODE_DROP */]).on(function () {
	    var oldHead = Object(__WEBPACK_IMPORTED_MODULE_2__lists__["g" /* head */])(ascent);
	    var key = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__["a" /* keyOf */])(oldHead);
	    var ancestors = Object(__WEBPACK_IMPORTED_MODULE_2__lists__["l" /* tail */])(ascent);
	    var parentNode;

	    if (ancestors) {
	      parentNode = Object(__WEBPACK_IMPORTED_MODULE_0__ascent__["c" /* nodeOf */])(Object(__WEBPACK_IMPORTED_MODULE_2__lists__["g" /* head */])(ancestors));

	      delete parentNode[key];
	    }
	  });

	  oboeBus(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* ABORTING */]).on(function () {
	    for (var eventName in handlers) {
	      oboeBus(eventName).un(listenerId);
	    }
	  });
	}




	/***/ }),
	/* 14 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patternAdapter; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lists__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascent__ = __webpack_require__(4);




	/**
	 *  The pattern adaptor listens for newListener and removeListener
	 *  events. When patterns are added or removed it compiles the JSONPath
	 *  and wires them up.
	 *
	 *  When nodes and paths are found it emits the fully-qualified match
	 *  events with parameters ready to ship to the outside world
	 */

	function patternAdapter (oboeBus, jsonPathCompiler) {
	  var predicateEventMap = {
	    node: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["d" /* NODE_CLOSED */]),
	    path: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["f" /* NODE_OPENED */])
	  };

	  function emitMatchingNode (emitMatch, node, ascent) {
	    /*
	         We're now calling to the outside world where Lisp-style
	         lists will not be familiar. Convert to standard arrays.

	         Also, reverse the order because it is more common to
	         list paths "root to leaf" than "leaf to root"  */
	    var descent = Object(__WEBPACK_IMPORTED_MODULE_1__lists__["k" /* reverseList */])(ascent);

	    emitMatch(
	      node,

	      // To make a path, strip off the last item which is the special
	      // ROOT_PATH token for the 'path' to the root node
	      Object(__WEBPACK_IMPORTED_MODULE_1__lists__["i" /* listAsArray */])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__["l" /* tail */])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__["j" /* map */])(__WEBPACK_IMPORTED_MODULE_2__ascent__["a" /* keyOf */], descent))), // path
	      Object(__WEBPACK_IMPORTED_MODULE_1__lists__["i" /* listAsArray */])(Object(__WEBPACK_IMPORTED_MODULE_1__lists__["j" /* map */])(__WEBPACK_IMPORTED_MODULE_2__ascent__["c" /* nodeOf */], descent)) // ancestors
	    );
	  }

	  /*
	    * Set up the catching of events such as NODE_CLOSED and NODE_OPENED and, if
	    * matching the specified pattern, propagate to pattern-match events such as
	    * oboeBus('node:!')
	    *
	    *
	    *
	    * @param {Function} predicateEvent
	    *          either oboeBus(NODE_CLOSED) or oboeBus(NODE_OPENED).
	    * @param {Function} compiledJsonPath
	    */
	  function addUnderlyingListener (fullEventName, predicateEvent, compiledJsonPath) {
	    var emitMatch = oboeBus(fullEventName).emit;

	    predicateEvent.on(function (ascent) {
	      var maybeMatchingMapping = compiledJsonPath(ascent);

	      /* Possible values for maybeMatchingMapping are now:

	          false:
	          we did not match

	          an object/array/string/number/null:
	          we matched and have the node that matched.
	          Because nulls are valid json values this can be null.

	          undefined:
	          we matched but don't have the matching node yet.
	          ie, we know there is an upcoming node that matches but we
	          can't say anything else about it.
	          */
	      if (maybeMatchingMapping !== false) {
	        emitMatchingNode(
	          emitMatch,
	          Object(__WEBPACK_IMPORTED_MODULE_2__ascent__["c" /* nodeOf */])(maybeMatchingMapping),
	          ascent
	        );
	      }
	    }, fullEventName);

	    oboeBus('removeListener').on(function (removedEventName) {
	      // if the fully qualified match event listener is later removed, clean up
	      // by removing the underlying listener if it was the last using that pattern:

	      if (removedEventName === fullEventName) {
	        if (!oboeBus(removedEventName).listeners()) {
	          predicateEvent.un(fullEventName);
	        }
	      }
	    });
	  }

	  oboeBus('newListener').on(function (fullEventName) {
	    var match = /(node|path):(.*)/.exec(fullEventName);

	    if (match) {
	      var predicateEvent = predicateEventMap[match[1]];

	      if (!predicateEvent.hasListener(fullEventName)) {
	        addUnderlyingListener(
	          fullEventName,
	          predicateEvent,
	          jsonPathCompiler(match[2])
	        );
	      }
	    }
	  });
	}




	/***/ }),
	/* 15 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jsonPathCompiler; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lists__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascent__ = __webpack_require__(4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonPathSyntax__ = __webpack_require__(16);







	/**
	 * The jsonPath evaluator compiler used for Oboe.js.
	 *
	 * One function is exposed. This function takes a String JSONPath spec and
	 * returns a function to test candidate ascents for matches.
	 *
	 *  String jsonPath -> (List ascent) -> Boolean|Object
	 *
	 * This file is coded in a pure functional style. That is, no function has
	 * side effects, every function evaluates to the same value for the same
	 * arguments and no variables are reassigned.
	 */
	// the call to jsonPathSyntax injects the token syntaxes that are needed
	// inside the compiler
	var jsonPathCompiler = Object(__WEBPACK_IMPORTED_MODULE_5__jsonPathSyntax__["a" /* jsonPathSyntax */])(function (pathNodeSyntax,
	  doubleDotSyntax,
	  dotSyntax,
	  bangSyntax,
	  emptySyntax) {
	  var CAPTURING_INDEX = 1;
	  var NAME_INDEX = 2;
	  var FIELD_LIST_INDEX = 3;

	  var headKey = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["d" /* compose2 */])(__WEBPACK_IMPORTED_MODULE_2__ascent__["a" /* keyOf */], __WEBPACK_IMPORTED_MODULE_1__lists__["g" /* head */]);
	  var headNode = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["d" /* compose2 */])(__WEBPACK_IMPORTED_MODULE_2__ascent__["c" /* nodeOf */], __WEBPACK_IMPORTED_MODULE_1__lists__["g" /* head */]);

	  /**
	    * Create an evaluator function for a named path node, expressed in the
	    * JSONPath like:
	    *    foo
	    *    ["bar"]
	    *    [2]
	    */
	  function nameClause (previousExpr, detection) {
	    var name = detection[NAME_INDEX];

	    var matchesName = (!name || name === '*')
	      ? __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */]
	      : function (ascent) { return String(headKey(ascent)) === name };

	    return Object(__WEBPACK_IMPORTED_MODULE_0__functional__["g" /* lazyIntersection */])(matchesName, previousExpr)
	  }

	  /**
	    * Create an evaluator function for a a duck-typed node, expressed like:
	    *
	    *    {spin, taste, colour}
	    *    .particle{spin, taste, colour}
	    *    *{spin, taste, colour}
	    */
	  function duckTypeClause (previousExpr, detection) {
	    var fieldListStr = detection[FIELD_LIST_INDEX];

	    if (!fieldListStr) { return previousExpr } // don't wrap at all, return given expr as-is

	    var hasAllrequiredFields = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["j" /* partialComplete */])(
	      __WEBPACK_IMPORTED_MODULE_3__util__["b" /* hasAllProperties */],
	      Object(__WEBPACK_IMPORTED_MODULE_1__lists__["c" /* arrayAsList */])(fieldListStr.split(/\W+/))
	    );

	    var isMatch = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["d" /* compose2 */])(
	      hasAllrequiredFields,
	      headNode
	    );

	    return Object(__WEBPACK_IMPORTED_MODULE_0__functional__["g" /* lazyIntersection */])(isMatch, previousExpr)
	  }

	  /**
	    * Expression for $, returns the evaluator function
	    */
	  function capture (previousExpr, detection) {
	    // extract meaning from the detection
	    var capturing = !!detection[CAPTURING_INDEX];

	    if (!capturing) { return previousExpr } // don't wrap at all, return given expr as-is

	    return Object(__WEBPACK_IMPORTED_MODULE_0__functional__["g" /* lazyIntersection */])(previousExpr, __WEBPACK_IMPORTED_MODULE_1__lists__["g" /* head */])
	  }

	  /**
	    * Create an evaluator function that moves onto the next item on the
	    * lists. This function is the place where the logic to move up a
	    * level in the ascent exists.
	    *
	    * Eg, for JSONPath ".foo" we need skip1(nameClause(always, [,'foo']))
	    */
	  function skip1 (previousExpr) {
	    if (previousExpr === __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */]) {
	      /* If there is no previous expression this consume command
	            is at the start of the jsonPath.
	            Since JSONPath specifies what we'd like to find but not
	            necessarily everything leading down to it, when running
	            out of JSONPath to check against we default to true */
	      return __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */]
	    }

	    /** return true if the ascent we have contains only the JSON root,
	       *  false otherwise
	       */
	    function notAtRoot (ascent) {
	      return headKey(ascent) !== __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__["a" /* ROOT_PATH */]
	    }

	    return Object(__WEBPACK_IMPORTED_MODULE_0__functional__["g" /* lazyIntersection */])(
	      /* If we're already at the root but there are more
	                  expressions to satisfy, can't consume any more. No match.

	                  This check is why none of the other exprs have to be able
	                  to handle empty lists; skip1 is the only evaluator that
	                  moves onto the next token and it refuses to do so once it
	                  reaches the last item in the list. */
	      notAtRoot,

	      /* We are not at the root of the ascent yet.
	                  Move to the next level of the ascent by handing only
	                  the tail to the previous expression */
	      Object(__WEBPACK_IMPORTED_MODULE_0__functional__["d" /* compose2 */])(previousExpr, __WEBPACK_IMPORTED_MODULE_1__lists__["l" /* tail */])
	    )
	  }

	  /**
	    * Create an evaluator function for the .. (double dot) token. Consumes
	    * zero or more levels of the ascent, the fewest that are required to find
	    * a match when given to previousExpr.
	    */
	  function skipMany (previousExpr) {
	    if (previousExpr === __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */]) {
	      /* If there is no previous expression this consume command
	            is at the start of the jsonPath.
	            Since JSONPath specifies what we'd like to find but not
	            necessarily everything leading down to it, when running
	            out of JSONPath to check against we default to true */
	      return __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */]
	    }

	    // In JSONPath .. is equivalent to !.. so if .. reaches the root
	    // the match has succeeded. Ie, we might write ..foo or !..foo
	    // and both should match identically.
	    var terminalCaseWhenArrivingAtRoot = rootExpr();
	    var terminalCaseWhenPreviousExpressionIsSatisfied = previousExpr;
	    var recursiveCase = skip1(function (ascent) {
	      return cases(ascent)
	    });

	    var cases = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["h" /* lazyUnion */])(
	      terminalCaseWhenArrivingAtRoot
	      , terminalCaseWhenPreviousExpressionIsSatisfied
	      , recursiveCase
	    );

	    return cases
	  }

	  /**
	    * Generate an evaluator for ! - matches only the root element of the json
	    * and ignores any previous expressions since nothing may precede !.
	    */
	  function rootExpr () {
	    return function (ascent) {
	      return headKey(ascent) === __WEBPACK_IMPORTED_MODULE_4__incrementalContentBuilder__["a" /* ROOT_PATH */]
	    }
	  }

	  /**
	    * Generate a statement wrapper to sit around the outermost
	    * clause evaluator.
	    *
	    * Handles the case where the capturing is implicit because the JSONPath
	    * did not contain a '$' by returning the last node.
	    */
	  function statementExpr (lastClause) {
	    return function (ascent) {
	      // kick off the evaluation by passing through to the last clause
	      var exprMatch = lastClause(ascent);

	      return exprMatch === true ? Object(__WEBPACK_IMPORTED_MODULE_1__lists__["g" /* head */])(ascent) : exprMatch
	    }
	  }

	  /**
	    * For when a token has been found in the JSONPath input.
	    * Compiles the parser for that token and returns in combination with the
	    * parser already generated.
	    *
	    * @param {Function} exprs  a list of the clause evaluator generators for
	    *                          the token that was found
	    * @param {Function} parserGeneratedSoFar the parser already found
	    * @param {Array} detection the match given by the regex engine when
	    *                          the feature was found
	    */
	  function expressionsReader (exprs, parserGeneratedSoFar, detection) {
	    // if exprs is zero-length foldR will pass back the
	    // parserGeneratedSoFar as-is so we don't need to treat
	    // this as a special case

	    return Object(__WEBPACK_IMPORTED_MODULE_1__lists__["f" /* foldR */])(
	      function (parserGeneratedSoFar, expr) {
	        return expr(parserGeneratedSoFar, detection)
	      },
	      parserGeneratedSoFar,
	      exprs
	    )
	  }

	  /**
	    *  If jsonPath matches the given detector function, creates a function which
	    *  evaluates against every clause in the clauseEvaluatorGenerators. The
	    *  created function is propagated to the onSuccess function, along with
	    *  the remaining unparsed JSONPath substring.
	    *
	    *  The intended use is to create a clauseMatcher by filling in
	    *  the first two arguments, thus providing a function that knows
	    *  some syntax to match and what kind of generator to create if it
	    *  finds it. The parameter list once completed is:
	    *
	    *    (jsonPath, parserGeneratedSoFar, onSuccess)
	    *
	    *  onSuccess may be compileJsonPathToFunction, to recursively continue
	    *  parsing after finding a match or returnFoundParser to stop here.
	    */
	  function generateClauseReaderIfTokenFound (

	    tokenDetector, clauseEvaluatorGenerators,

	    jsonPath, parserGeneratedSoFar, onSuccess) {
	    var detected = tokenDetector(jsonPath);

	    if (detected) {
	      var compiledParser = expressionsReader(
	        clauseEvaluatorGenerators,
	        parserGeneratedSoFar,
	        detected
	      );

	      var remainingUnparsedJsonPath = jsonPath.substr(Object(__WEBPACK_IMPORTED_MODULE_3__util__["e" /* len */])(detected[0]));

	      return onSuccess(remainingUnparsedJsonPath, compiledParser)
	    }
	  }

	  /**
	    * Partially completes generateClauseReaderIfTokenFound above.
	    */
	  function clauseMatcher (tokenDetector, exprs) {
	    return Object(__WEBPACK_IMPORTED_MODULE_0__functional__["j" /* partialComplete */])(
	      generateClauseReaderIfTokenFound,
	      tokenDetector,
	      exprs
	    )
	  }

	  /**
	    * clauseForJsonPath is a function which attempts to match against
	    * several clause matchers in order until one matches. If non match the
	    * jsonPath expression is invalid and an error is thrown.
	    *
	    * The parameter list is the same as a single clauseMatcher:
	    *
	    *    (jsonPath, parserGeneratedSoFar, onSuccess)
	    */
	  var clauseForJsonPath = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["h" /* lazyUnion */])(

	    clauseMatcher(pathNodeSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__["h" /* list */])(capture,
	      duckTypeClause,
	      nameClause,
	      skip1))

	    , clauseMatcher(doubleDotSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__["h" /* list */])(skipMany))

	    // dot is a separator only (like whitespace in other languages) but
	    // rather than make it a special case, use an empty list of
	    // expressions when this token is found
	    , clauseMatcher(dotSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__["h" /* list */])())

	    , clauseMatcher(bangSyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__["h" /* list */])(capture,
	      rootExpr))

	    , clauseMatcher(emptySyntax, Object(__WEBPACK_IMPORTED_MODULE_1__lists__["h" /* list */])(statementExpr))

	    , function (jsonPath) {
	      throw Error('"' + jsonPath + '" could not be tokenised')
	    }
	  );

	  /**
	    * One of two possible values for the onSuccess argument of
	    * generateClauseReaderIfTokenFound.
	    *
	    * When this function is used, generateClauseReaderIfTokenFound simply
	    * returns the compiledParser that it made, regardless of if there is
	    * any remaining jsonPath to be compiled.
	    */
	  function returnFoundParser (_remainingJsonPath, compiledParser) {
	    return compiledParser
	  }

	  /**
	    * Recursively compile a JSONPath expression.
	    *
	    * This function serves as one of two possible values for the onSuccess
	    * argument of generateClauseReaderIfTokenFound, meaning continue to
	    * recursively compile. Otherwise, returnFoundParser is given and
	    * compilation terminates.
	    */
	  function compileJsonPathToFunction (uncompiledJsonPath,
	    parserGeneratedSoFar) {
	    /**
	       * On finding a match, if there is remaining text to be compiled
	       * we want to either continue parsing using a recursive call to
	       * compileJsonPathToFunction. Otherwise, we want to stop and return
	       * the parser that we have found so far.
	       */
	    var onFind = uncompiledJsonPath
	      ? compileJsonPathToFunction
	      : returnFoundParser;

	    return clauseForJsonPath(
	      uncompiledJsonPath,
	      parserGeneratedSoFar,
	      onFind
	    )
	  }

	  /**
	    * This is the function that we expose to the rest of the library.
	    */
	  return function (jsonPath) {
	    try {
	      // Kick off the recursive parsing of the jsonPath
	      return compileJsonPathToFunction(jsonPath, __WEBPACK_IMPORTED_MODULE_0__functional__["a" /* always */])
	    } catch (e) {
	      throw Error('Could not compile "' + jsonPath +
	        '" because ' + e.message
	      )
	    }
	  }
	});




	/***/ }),
	/* 16 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jsonPathSyntax; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functional__ = __webpack_require__(0);


	var jsonPathSyntax = (function () {
	  /**
	  * Export a regular expression as a simple function by exposing just
	  * the Regex#exec. This allows regex tests to be used under the same
	  * interface as differently implemented tests, or for a user of the
	  * tests to not concern themselves with their implementation as regular
	  * expressions.
	  *
	  * This could also be expressed point-free as:
	  *   Function.prototype.bind.bind(RegExp.prototype.exec),
	  *
	  * But that's far too confusing! (and not even smaller once minified
	  * and gzipped)
	  */
	  var regexDescriptor = function regexDescriptor (regex) {
	    return regex.exec.bind(regex)
	  };

	  /**
	  * Join several regular expressions and express as a function.
	  * This allows the token patterns to reuse component regular expressions
	  * instead of being expressed in full using huge and confusing regular
	  * expressions.
	  */
	  var jsonPathClause = Object(__WEBPACK_IMPORTED_MODULE_0__functional__["k" /* varArgs */])(function (componentRegexes) {
	    // The regular expressions all start with ^ because we
	    // only want to find matches at the start of the
	    // JSONPath fragment we are inspecting
	    componentRegexes.unshift(/^/);

	    return regexDescriptor(
	      RegExp(
	        componentRegexes.map(Object(__WEBPACK_IMPORTED_MODULE_0__functional__["c" /* attr */])('source')).join('')
	      )
	    )
	  });

	  var possiblyCapturing = /(\$?)/;
	  var namedNode = /([\w-_]+|\*)/;
	  var namePlaceholder = /()/;
	  var nodeInArrayNotation = /\["([^"]+)"\]/;
	  var numberedNodeInArrayNotation = /\[(\d+|\*)\]/;
	  var fieldList = /{([\w ]*?)}/;
	  var optionalFieldList = /(?:{([\w ]*?)})?/;

	  //   foo or *
	  var jsonPathNamedNodeInObjectNotation = jsonPathClause(
	    possiblyCapturing,
	    namedNode,
	    optionalFieldList
	  );

	  //   ["foo"]
	  var jsonPathNamedNodeInArrayNotation = jsonPathClause(
	    possiblyCapturing,
	    nodeInArrayNotation,
	    optionalFieldList
	  );

	  //   [2] or [*]
	  var jsonPathNumberedNodeInArrayNotation = jsonPathClause(
	    possiblyCapturing,
	    numberedNodeInArrayNotation,
	    optionalFieldList
	  );

	  //   {a b c}
	  var jsonPathPureDuckTyping = jsonPathClause(
	    possiblyCapturing,
	    namePlaceholder,
	    fieldList
	  );

	  //   ..
	  var jsonPathDoubleDot = jsonPathClause(/\.\./);

	  //   .
	  var jsonPathDot = jsonPathClause(/\./);

	  //   !
	  var jsonPathBang = jsonPathClause(
	    possiblyCapturing,
	    /!/
	  );

	  //   nada!
	  var emptyString = jsonPathClause(/$/);

	  /* We export only a single function. When called, this function injects
	      into another function the descriptors from above.
	    */
	  return function (fn) {
	    return fn(
	      Object(__WEBPACK_IMPORTED_MODULE_0__functional__["h" /* lazyUnion */])(
	        jsonPathNamedNodeInObjectNotation
	        , jsonPathNamedNodeInArrayNotation
	        , jsonPathNumberedNodeInArrayNotation
	        , jsonPathPureDuckTyping
	      )
	      , jsonPathDoubleDot
	      , jsonPathDot
	      , jsonPathBang
	      , emptyString
	    )
	  }
	}());




	/***/ }),
	/* 17 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instanceApi; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publicApi__ = __webpack_require__(5);





	/**
	 * The instance API is the thing that is returned when oboe() is called.
	 * it allows:
	 *
	 *    - listeners for various events to be added and removed
	 *    - the http response header/headers to be read
	 */
	function instanceApi (oboeBus, contentSource) {
	  var oboeApi;
	  var fullyQualifiedNamePattern = /^(node|path):./;
	  var rootNodeFinishedEvent = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["h" /* ROOT_NODE_FOUND */]);
	  var emitNodeDrop = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["e" /* NODE_DROP */]).emit;
	  var emitNodeSwap = oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["g" /* NODE_SWAP */]).emit;

	  /**
	       * Add any kind of listener that the instance api exposes
	       */
	  var addListener = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["k" /* varArgs */])(function (eventId, parameters) {
	    if (oboeApi[eventId]) {
	      // for events added as .on(event, callback), if there is a
	      // .event() equivalent with special behaviour , pass through
	      // to that:
	      Object(__WEBPACK_IMPORTED_MODULE_1__functional__["b" /* apply */])(parameters, oboeApi[eventId]);
	    } else {
	      // we have a standard Node.js EventEmitter 2-argument call.
	      // The first parameter is the listener.
	      var event = oboeBus(eventId);
	      var listener = parameters[0];

	      if (fullyQualifiedNamePattern.test(eventId)) {
	        // allow fully-qualified node/path listeners
	        // to be added
	        addForgettableCallback(event, wrapCallbackToSwapNodeIfSomethingReturned(listener));
	      } else {
	        // the event has no special handling, pass through
	        // directly onto the event bus:
	        event.on(listener);
	      }
	    }

	    return oboeApi // chaining
	  });

	  /**
	       * Remove any kind of listener that the instance api exposes
	       */
	  var removeListener = function (eventId, p2, p3) {
	    if (eventId === 'done') {
	      rootNodeFinishedEvent.un(p2);
	    } else if (eventId === 'node' || eventId === 'path') {
	      // allow removal of node and path
	      oboeBus.un(eventId + ':' + p2, p3);
	    } else {
	      // we have a standard Node.js EventEmitter 2-argument call.
	      // The second parameter is the listener. This may be a call
	      // to remove a fully-qualified node/path listener but requires
	      // no special handling
	      var listener = p2;

	      oboeBus(eventId).un(listener);
	    }

	    return oboeApi // chaining
	  };

	  /**
	   * Add a callback, wrapped in a try/catch so as to not break the
	   * execution of Oboe if an exception is thrown (fail events are
	   * fired instead)
	   *
	   * The callback is used as the listener id so that it can later be
	   * removed using .un(callback)
	   */
	  function addProtectedCallback (eventName, callback) {
	    oboeBus(eventName).on(protectedCallback(callback), callback);
	    return oboeApi // chaining
	  }

	  /**
	   * Add a callback where, if .forget() is called during the callback's
	   * execution, the callback will be de-registered
	   */
	  function addForgettableCallback (event, callback, listenerId) {
	    // listenerId is optional and if not given, the original
	    // callback will be used
	    listenerId = listenerId || callback;

	    var safeCallback = protectedCallback(callback);

	    event.on(function () {
	      var discard = false;

	      oboeApi.forget = function () {
	        discard = true;
	      };

	      Object(__WEBPACK_IMPORTED_MODULE_1__functional__["b" /* apply */])(arguments, safeCallback);

	      delete oboeApi.forget;

	      if (discard) {
	        event.un(listenerId);
	      }
	    }, listenerId);

	    return oboeApi // chaining
	  }

	  /**
	   *  wrap a callback so that if it throws, Oboe.js doesn't crash but instead
	   *  throw the error in another event loop
	   */
	  function protectedCallback (callback) {
	    return function () {
	      try {
	        return callback.apply(oboeApi, arguments)
	      } catch (e) {
	        setTimeout(function () {
	          throw new Error(e.message)
	        });
	      }
	    }
	  }

	  /**
	   * Return the fully qualified event for when a pattern matches
	   * either a node or a path
	   *
	   * @param type {String} either 'node' or 'path'
	   */
	  function fullyQualifiedPatternMatchEvent (type, pattern) {
	    return oboeBus(type + ':' + pattern)
	  }

	  function wrapCallbackToSwapNodeIfSomethingReturned (callback) {
	    return function () {
	      var returnValueFromCallback = callback.apply(this, arguments);

	      if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* defined */])(returnValueFromCallback)) {
	        if (returnValueFromCallback === __WEBPACK_IMPORTED_MODULE_3__publicApi__["a" /* oboe */].drop) {
	          emitNodeDrop();
	        } else {
	          emitNodeSwap(returnValueFromCallback);
	        }
	      }
	    }
	  }

	  function addSingleNodeOrPathListener (eventId, pattern, callback) {
	    var effectiveCallback;

	    if (eventId === 'node') {
	      effectiveCallback = wrapCallbackToSwapNodeIfSomethingReturned(callback);
	    } else {
	      effectiveCallback = callback;
	    }

	    addForgettableCallback(
	      fullyQualifiedPatternMatchEvent(eventId, pattern),
	      effectiveCallback,
	      callback
	    );
	  }

	  /**
	   * Add several listeners at a time, from a map
	   */
	  function addMultipleNodeOrPathListeners (eventId, listenerMap) {
	    for (var pattern in listenerMap) {
	      addSingleNodeOrPathListener(eventId, pattern, listenerMap[pattern]);
	    }
	  }

	  /**
	   * implementation behind .onPath() and .onNode()
	   */
	  function addNodeOrPathListenerApi (eventId, jsonPathOrListenerMap, callback) {
	    if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* isString */])(jsonPathOrListenerMap)) {
	      addSingleNodeOrPathListener(eventId, jsonPathOrListenerMap, callback);
	    } else {
	      addMultipleNodeOrPathListeners(eventId, jsonPathOrListenerMap);
	    }

	    return oboeApi // chaining
	  }

	  // some interface methods are only filled in after we receive
	  // values and are noops before that:
	  oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["i" /* ROOT_PATH_FOUND */]).on(function (rootNode) {
	    oboeApi.root = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["f" /* functor */])(rootNode);
	  });

	  /**
	   * When content starts make the headers readable through the
	   * instance API
	   */
	  oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["c" /* HTTP_START */]).on(function (_statusCode, headers) {
	    oboeApi.header = function (name) {
	      return name ? headers[name]
	        : headers
	    };
	  });

	  /**
	   * Construct and return the public API of the Oboe instance to be
	   * returned to the calling application
	   */
	  oboeApi = {
	    on: addListener,
	    addListener: addListener,
	    removeListener: removeListener,
	    emit: oboeBus.emit,

	    node: Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(addNodeOrPathListenerApi, 'node'),
	    path: Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(addNodeOrPathListenerApi, 'path'),

	    done: Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(addForgettableCallback, rootNodeFinishedEvent),
	    start: Object(__WEBPACK_IMPORTED_MODULE_1__functional__["j" /* partialComplete */])(addProtectedCallback, __WEBPACK_IMPORTED_MODULE_0__events__["c" /* HTTP_START */]),

	    // fail doesn't use protectedCallback because
	    // could lead to non-terminating loops
	    fail: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["b" /* FAIL_EVENT */]).on,

	    // public api calling abort fires the ABORTING event
	    abort: oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* ABORTING */]).emit,

	    // initially return nothing for header and root
	    header: __WEBPACK_IMPORTED_MODULE_1__functional__["i" /* noop */],
	    root: __WEBPACK_IMPORTED_MODULE_1__functional__["i" /* noop */],

	    source: contentSource
	  };

	  return oboeApi
	}




	/***/ }),
	/* 18 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clarinet; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);


	/*
	   This is a slightly hacked-up browser only version of clarinet

	      *  some features removed to help keep browser Oboe under
	         the 5k micro-library limit
	      *  plug directly into event bus

	   For the original go here:
	      https://github.com/dscape/clarinet

	   We receive the events:
	      STREAM_DATA
	      STREAM_END

	   We emit the events:
	      SAX_KEY
	      SAX_VALUE_OPEN
	      SAX_VALUE_CLOSE
	      FAIL_EVENT
	 */

	function clarinet (eventBus) {

	  // shortcut some events on the bus
	  var emitSaxKey = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["j" /* SAX_KEY */]).emit;
	  var emitValueOpen = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["l" /* SAX_VALUE_OPEN */]).emit;
	  var emitValueClose = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["k" /* SAX_VALUE_CLOSE */]).emit;
	  var emitFail = eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["b" /* FAIL_EVENT */]).emit;

	  var MAX_BUFFER_LENGTH = 64 * 1024;
	  var stringTokenPattern = /[\\"\n]/g;
	  var _n = 0;

	  // states
	  var BEGIN = _n++;
	  var VALUE = _n++; // general stuff
	  var OPEN_OBJECT = _n++; // {
	  var CLOSE_OBJECT = _n++; // }
	  var OPEN_ARRAY = _n++; // [
	  var CLOSE_ARRAY = _n++; // ]
	  var STRING = _n++; // ""
	  var OPEN_KEY = _n++; // , "a"
	  var CLOSE_KEY = _n++; // :
	  var TRUE = _n++; // r
	  var TRUE2 = _n++; // u
	  var TRUE3 = _n++; // e
	  var FALSE = _n++; // a
	  var FALSE2 = _n++; // l
	  var FALSE3 = _n++; // s
	  var FALSE4 = _n++; // e
	  var NULL = _n++; // u
	  var NULL2 = _n++; // l
	  var NULL3 = _n++; // l
	  var NUMBER_DECIMAL_POINT = _n++; // .
	  var NUMBER_DIGIT = _n; // [0-9]

	  // setup initial parser values
	  var bufferCheckPosition = MAX_BUFFER_LENGTH;
	  var latestError;
	  var c;
	  var p;
	  var textNode;
	  var numberNode = '';
	  var slashed = false;
	  var closed = false;
	  var state = BEGIN;
	  var stack = [];
	  var unicodeS = null;
	  var unicodeI = 0;
	  var depth = 0;
	  var position = 0;
	  var column = 0; // mostly for error reporting
	  var line = 1;

	  function checkBufferLength () {
	    var maxActual = 0;

	    if (textNode !== undefined && textNode.length > MAX_BUFFER_LENGTH) {
	      emitError('Max buffer length exceeded: textNode');
	      maxActual = Math.max(maxActual, textNode.length);
	    }
	    if (numberNode.length > MAX_BUFFER_LENGTH) {
	      emitError('Max buffer length exceeded: numberNode');
	      maxActual = Math.max(maxActual, numberNode.length);
	    }

	    bufferCheckPosition = (MAX_BUFFER_LENGTH - maxActual) +
	      position;
	  }

	  eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["m" /* STREAM_DATA */]).on(handleData);

	  /* At the end of the http content close the clarinet
	    This will provide an error if the total content provided was not
	    valid json, ie if not all arrays, objects and Strings closed properly */
	  eventBus(__WEBPACK_IMPORTED_MODULE_0__events__["n" /* STREAM_END */]).on(handleStreamEnd);

	  function emitError (errorString) {
	    if (textNode !== undefined) {
	      emitValueOpen(textNode);
	      emitValueClose();
	      textNode = undefined;
	    }

	    latestError = Error(errorString + '\nLn: ' + line +
	      '\nCol: ' + column +
	      '\nChr: ' + c);

	    emitFail(Object(__WEBPACK_IMPORTED_MODULE_0__events__["o" /* errorReport */])(undefined, undefined, latestError));
	  }

	  function handleStreamEnd () {
	    if (state === BEGIN) {
	      // Handle the case where the stream closes without ever receiving
	      // any input. This isn't an error - response bodies can be blank,
	      // particularly for 204 http responses

	      // Because of how Oboe is currently implemented, we parse a
	      // completely empty stream as containing an empty object.
	      // This is because Oboe's done event is only fired when the
	      // root object of the JSON stream closes.

	      // This should be decoupled and attached instead to the input stream
	      // from the http (or whatever) resource ending.
	      // If this decoupling could happen the SAX parser could simply emit
	      // zero events on a completely empty input.
	      emitValueOpen({});
	      emitValueClose();

	      closed = true;
	      return
	    }

	    if (state !== VALUE || depth !== 0) { emitError('Unexpected end'); }

	    if (textNode !== undefined) {
	      emitValueOpen(textNode);
	      emitValueClose();
	      textNode = undefined;
	    }

	    closed = true;
	  }

	  function whitespace (c) {
	    return c === '\r' || c === '\n' || c === ' ' || c === '\t'
	  }

	  function handleData (chunk) {
	    // this used to throw the error but inside Oboe we will have already
	    // gotten the error when it was emitted. The important thing is to
	    // not continue with the parse.
	    if (latestError) { return }

	    if (closed) {
	      return emitError('Cannot write after close')
	    }

	    var i = 0;
	    c = chunk[0];

	    while (c) {
	      if (i > 0) {
	        p = c;
	      }
	      c = chunk[i++];
	      if (!c) break

	      position++;
	      if (c === '\n') {
	        line++;
	        column = 0;
	      } else column++;
	      switch (state) {
	        case BEGIN:
	          if (c === '{') state = OPEN_OBJECT;
	          else if (c === '[') state = OPEN_ARRAY;
	          else if (!whitespace(c)) { return emitError('Non-whitespace before {[.') }
	          continue

	        case OPEN_KEY:
	        case OPEN_OBJECT:
	          if (whitespace(c)) continue
	          if (state === OPEN_KEY) stack.push(CLOSE_KEY);
	          else {
	            if (c === '}') {
	              emitValueOpen({});
	              emitValueClose();
	              state = stack.pop() || VALUE;
	              continue
	            } else stack.push(CLOSE_OBJECT);
	          }
	          if (c === '"') { state = STRING; } else { return emitError('Malformed object key should start with " ') }
	          continue

	        case CLOSE_KEY:
	        case CLOSE_OBJECT:
	          if (whitespace(c)) continue

	          if (c === ':') {
	            if (state === CLOSE_OBJECT) {
	              stack.push(CLOSE_OBJECT);

	              if (textNode !== undefined) {
	                // was previously (in upstream Clarinet) one event
	                //  - object open came with the text of the first
	                emitValueOpen({});
	                emitSaxKey(textNode);
	                textNode = undefined;
	              }
	              depth++;
	            } else {
	              if (textNode !== undefined) {
	                emitSaxKey(textNode);
	                textNode = undefined;
	              }
	            }
	            state = VALUE;
	          } else if (c === '}') {
	            if (textNode !== undefined) {
	              emitValueOpen(textNode);
	              emitValueClose();
	              textNode = undefined;
	            }
	            emitValueClose();
	            depth--;
	            state = stack.pop() || VALUE;
	          } else if (c === ',') {
	            if (state === CLOSE_OBJECT) { stack.push(CLOSE_OBJECT); }
	            if (textNode !== undefined) {
	              emitValueOpen(textNode);
	              emitValueClose();
	              textNode = undefined;
	            }
	            state = OPEN_KEY;
	          } else { return emitError('Bad object') }
	          continue

	        case OPEN_ARRAY: // after an array there always a value
	        case VALUE:
	          if (whitespace(c)) continue
	          if (state === OPEN_ARRAY) {
	            emitValueOpen([]);
	            depth++;
	            state = VALUE;
	            if (c === ']') {
	              emitValueClose();
	              depth--;
	              state = stack.pop() || VALUE;
	              continue
	            } else {
	              stack.push(CLOSE_ARRAY);
	            }
	          }
	          if (c === '"') state = STRING;
	          else if (c === '{') state = OPEN_OBJECT;
	          else if (c === '[') state = OPEN_ARRAY;
	          else if (c === 't') state = TRUE;
	          else if (c === 'f') state = FALSE;
	          else if (c === 'n') state = NULL;
	          else if (c === '-') { // keep and continue
	            numberNode += c;
	          } else if (c === '0') {
	            numberNode += c;
	            state = NUMBER_DIGIT;
	          } else if ('123456789'.indexOf(c) !== -1) {
	            numberNode += c;
	            state = NUMBER_DIGIT;
	          } else { return emitError('Bad value') }
	          continue

	        case CLOSE_ARRAY:
	          if (c === ',') {
	            stack.push(CLOSE_ARRAY);
	            if (textNode !== undefined) {
	              emitValueOpen(textNode);
	              emitValueClose();
	              textNode = undefined;
	            }
	            state = VALUE;
	          } else if (c === ']') {
	            if (textNode !== undefined) {
	              emitValueOpen(textNode);
	              emitValueClose();
	              textNode = undefined;
	            }
	            emitValueClose();
	            depth--;
	            state = stack.pop() || VALUE;
	          } else if (whitespace(c)) { continue } else { return emitError('Bad array') }
	          continue

	        case STRING:
	          if (textNode === undefined) {
	            textNode = '';
	          }

	          // thanks thejh, this is an about 50% performance improvement.
	          var starti = i - 1;

	          // eslint-disable-next-line no-labels
	          STRING_BIGLOOP: while (true) {
	            // zero means "no unicode active". 1-4 mean "parse some more". end after 4.
	            while (unicodeI > 0) {
	              unicodeS += c;
	              c = chunk.charAt(i++);
	              if (unicodeI === 4) {
	                // TODO this might be slow? well, probably not used too often anyway
	                textNode += String.fromCharCode(parseInt(unicodeS, 16));
	                unicodeI = 0;
	                starti = i - 1;
	              } else {
	                unicodeI++;
	              }
	              // we can just break here: no stuff we skipped that still has to be sliced out or so
	              // eslint-disable-next-line no-labels
	              if (!c) break STRING_BIGLOOP
	            }
	            if (c === '"' && !slashed) {
	              state = stack.pop() || VALUE;
	              textNode += chunk.substring(starti, i - 1);
	              break
	            }
	            if (c === '\\' && !slashed) {
	              slashed = true;
	              textNode += chunk.substring(starti, i - 1);
	              c = chunk.charAt(i++);
	              if (!c) break
	            }
	            if (slashed) {
	              slashed = false;
	              if (c === 'n') { textNode += '\n'; } else if (c === 'r') { textNode += '\r'; } else if (c === 't') { textNode += '\t'; } else if (c === 'f') { textNode += '\f'; } else if (c === 'b') { textNode += '\b'; } else if (c === 'u') {
	                // \uxxxx. meh!
	                unicodeI = 1;
	                unicodeS = '';
	              } else {
	                textNode += c;
	              }
	              c = chunk.charAt(i++);
	              starti = i - 1;
	              if (!c) break
	              else continue
	            }

	            stringTokenPattern.lastIndex = i;
	            var reResult = stringTokenPattern.exec(chunk);
	            if (!reResult) {
	              i = chunk.length + 1;
	              textNode += chunk.substring(starti, i - 1);
	              break
	            }
	            i = reResult.index + 1;
	            c = chunk.charAt(reResult.index);
	            if (!c) {
	              textNode += chunk.substring(starti, i - 1);
	              break
	            }
	          }
	          continue

	        case TRUE:
	          if (!c) continue // strange buffers
	          if (c === 'r') state = TRUE2;
	          else { return emitError('Invalid true started with t' + c) }
	          continue

	        case TRUE2:
	          if (!c) continue
	          if (c === 'u') state = TRUE3;
	          else { return emitError('Invalid true started with tr' + c) }
	          continue

	        case TRUE3:
	          if (!c) continue
	          if (c === 'e') {
	            emitValueOpen(true);
	            emitValueClose();
	            state = stack.pop() || VALUE;
	          } else { return emitError('Invalid true started with tru' + c) }
	          continue

	        case FALSE:
	          if (!c) continue
	          if (c === 'a') state = FALSE2;
	          else { return emitError('Invalid false started with f' + c) }
	          continue

	        case FALSE2:
	          if (!c) continue
	          if (c === 'l') state = FALSE3;
	          else { return emitError('Invalid false started with fa' + c) }
	          continue

	        case FALSE3:
	          if (!c) continue
	          if (c === 's') state = FALSE4;
	          else { return emitError('Invalid false started with fal' + c) }
	          continue

	        case FALSE4:
	          if (!c) continue
	          if (c === 'e') {
	            emitValueOpen(false);
	            emitValueClose();
	            state = stack.pop() || VALUE;
	          } else { return emitError('Invalid false started with fals' + c) }
	          continue

	        case NULL:
	          if (!c) continue
	          if (c === 'u') state = NULL2;
	          else { return emitError('Invalid null started with n' + c) }
	          continue

	        case NULL2:
	          if (!c) continue
	          if (c === 'l') state = NULL3;
	          else { return emitError('Invalid null started with nu' + c) }
	          continue

	        case NULL3:
	          if (!c) continue
	          if (c === 'l') {
	            emitValueOpen(null);
	            emitValueClose();
	            state = stack.pop() || VALUE;
	          } else { return emitError('Invalid null started with nul' + c) }
	          continue

	        case NUMBER_DECIMAL_POINT:
	          if (c === '.') {
	            numberNode += c;
	            state = NUMBER_DIGIT;
	          } else { return emitError('Leading zero not followed by .') }
	          continue

	        case NUMBER_DIGIT:
	          if ('0123456789'.indexOf(c) !== -1) numberNode += c;
	          else if (c === '.') {
	            if (numberNode.indexOf('.') !== -1) { return emitError('Invalid number has two dots') }
	            numberNode += c;
	          } else if (c === 'e' || c === 'E') {
	            if (numberNode.indexOf('e') !== -1 ||
	              numberNode.indexOf('E') !== -1) { return emitError('Invalid number has two exponential') }
	            numberNode += c;
	          } else if (c === '+' || c === '-') {
	            if (!(p === 'e' || p === 'E')) { return emitError('Invalid symbol in number') }
	            numberNode += c;
	          } else {
	            if (numberNode) {
	              emitValueOpen(parseFloat(numberNode));
	              emitValueClose();
	              numberNode = '';
	            }
	            i--; // go back one
	            state = stack.pop() || VALUE;
	          }
	          continue

	        default:
	          return emitError('Unknown state: ' + state)
	      }
	    }
	    if (position >= bufferCheckPosition) { checkBufferLength(); }
	  }
	}




	/***/ }),
	/* 19 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpTransport; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return streamingHttp; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functional__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);




	var httpTransport = Object(__WEBPACK_IMPORTED_MODULE_1__functional__["f" /* functor */])(__webpack_require__(20));

	/**
	 * A wrapper around the browser XmlHttpRequest object that raises an
	 * event whenever a new part of the response is available.
	 *
	 * In older browsers progressive reading is impossible so all the
	 * content is given in a single call. For newer ones several events
	 * should be raised, allowing progressive interpretation of the response.
	 *
	 * @param {Function} oboeBus an event bus local to this Oboe instance
	 * @param {XMLHttpRequest} transport the http implementation to use as the transport. Under normal
	 *          operation, will have been created using httpTransport() above
	 *          and therefore be Node's http
	 *          but for tests a stub may be provided instead.
	 * @param {String} method one of 'GET' 'POST' 'PUT' 'PATCH' 'DELETE'
	 * @param {String} contentSource the url to make a request to, or a stream to read from
	 * @param {String|Null} data some content to be sent with the request.
	 *                      Only valid if method is POST or PUT.
	 * @param {Object} [headers] the http request headers to send
	 */
	function streamingHttp (oboeBus, transport, method, contentSource, data, headers) {

	  /* receiving data after calling .abort on Node's http has been observed in the
	      wild. Keep aborted as state so that if the request has been aborted we
	      can ignore new data from that point on */
	  var aborted = false;

	  function readStreamToEventBus (readableStream) {
	    // use stream in flowing mode
	    readableStream.on('data', function (chunk) {
	      // avoid reading the stream after aborting the request
	      if (!aborted) {
	        oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["m" /* STREAM_DATA */]).emit(chunk.toString());
	      }
	    });

	    readableStream.on('end', function () {
	      // avoid reading the stream after aborting the request
	      if (!aborted) {
	        oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["n" /* STREAM_END */]).emit();
	      }
	    });
	  }

	  function readStreamToEnd (readableStream, callback) {
	    var content = '';

	    readableStream.on('data', function (chunk) {
	      content += chunk.toString();
	    });

	    readableStream.on('end', function () {
	      callback(content);
	    });
	  }

	  function openUrlAsStream (url) {
	    var parsedUrl = __webpack_require__(7).parse(url);

	    return transport.request({
	      hostname: parsedUrl.hostname,
	      port: parsedUrl.port,
	      path: parsedUrl.path,
	      method: method,
	      headers: headers,
	      protocol: parsedUrl.protocol
	    })
	  }

	  function fetchUrl () {
	    if (!contentSource.match(/https?:\/\//)) {
	      throw new Error(
	        'Supported protocols when passing a URL into Oboe are http and https. ' +
	            'If you wish to use another protocol, please pass a ReadableStream ' +
	            '(http://nodejs.org/api/stream.html#stream_class_stream_readable) like ' +
	            'oboe(fs.createReadStream("my_file")). I was given the URL: ' +
	            contentSource
	      )
	    }

	    var req = openUrlAsStream(contentSource);

	    req.on('response', function (res) {
	      var statusCode = res.statusCode;
	      var successful = String(statusCode)[0] === '2';

	      oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["c" /* HTTP_START */]).emit(res.statusCode, res.headers);

	      if (successful) {
	        readStreamToEventBus(res);
	      } else {
	        readStreamToEnd(res, function (errorBody) {
	          oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["b" /* FAIL_EVENT */]).emit(
	            Object(__WEBPACK_IMPORTED_MODULE_0__events__["o" /* errorReport */])(statusCode, errorBody)
	          );
	        });
	      }
	    });

	    req.on('error', function (e) {
	      oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["b" /* FAIL_EVENT */]).emit(
	        Object(__WEBPACK_IMPORTED_MODULE_0__events__["o" /* errorReport */])(undefined, undefined, e)
	      );
	    });

	    oboeBus(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* ABORTING */]).on(function () {
	      aborted = true;
	      req.abort();
	    });

	    if (data) {
	      req.write(data);
	    }

	    req.end();
	  }

	  if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* isString */])(contentSource)) {
	    fetchUrl();
	  } else {
	    // contentsource is a stream
	    readStreamToEventBus(contentSource);
	  }
	}




	/***/ }),
	/* 20 */
	/***/ (function(module, exports, __webpack_require__) {

	var http = exports.http = __webpack_require__(21);
	var https = exports.https = __webpack_require__(22);
	var url = __webpack_require__(7);

	exports.get = function(opt, cb) {
	  return getMod(opt).get(opt, cb)
	};

	exports.request = function(opt, cb) {
	  return getMod(opt).request(opt, cb)
	};

	exports.getModule = getMod;
	function getMod(opt) {
	  if (typeof opt === 'string')
	    opt = url.parse(opt);

	  return opt.protocol === 'https:' ? https : http
	}


	/***/ }),
	/* 21 */
	/***/ (function(module, exports) {

	module.exports = require$$1$2;

	/***/ }),
	/* 22 */
	/***/ (function(module, exports) {

	module.exports = require$$1$1;

	/***/ })
	/******/ ])["default"];
	}); 
} (oboeNode, oboeNode.exports));

var oboeNodeExports = oboeNode.exports;

let last, timeout;

var parse$3 = (res, cb) => {
  const values = [];
  res
    .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|')
    .forEach(data => {
      if (last) data = last + data; // prepend the last chunk
      let result;
      try {
        result = JSON.parse(data);
      } catch (e) {
        last = data;
        clearTimeout(timeout); // restart timeout
        timeout = setTimeout(() => cb(new Error('Parse response timeout')), 15 * 1000);
        return
      }
      clearTimeout(timeout);
      last = null;
      if (result) values.push(result);
    });
  cb(null, values);
};

const EventEmitter$2 = require$$0;
const oboe = oboeNodeExports;
const parse$2 = parse$3;

let net$1;

class IPCConnection extends EventEmitter$2 {
  constructor (_net, path, options) {
    super();
    net$1 = _net;
    setTimeout(() => this.create(path, options), 0);
  }

  create (path, options) {
    if (!net$1) return this.onError(new Error('No IPC transport'))
    this.socket = net$1.connect({ path });
    this.socket.on('connect', () => {
      this.emit('connect');
      this.socket.on('close', () => {
        if (this.socket) this.socket.destroy();
        this.onClose();
      });
      if (net$1.constructor.name === 'Socket') {
        oboe(this.socket).done(payloads => this.emitPayloads(payloads));
      } else {
        this.socket.on('data', data => parse$2(data.toString(), (err, payloads) => { if (!err) this.emitPayloads(payloads); }));
      }
    });
    this.socket.on('error', err => this.onError(err));
  }

  onError (err) {
    if (this.listenerCount('error')) this.emit('error', err);
  }

  onClose () {
    this.socket = null;
    this.closed = true;
    this.emit('close');
    this.removeAllListeners();
  }

  close () {
    if (this.socket) {
      this.socket.destroy();
    } else {
      this.onClose();
    }
  }

  emitPayloads (payloads) {
    payloads.forEach(load => {
      if (Array.isArray(load)) return load.forEach(payload => this.emit('payload', payload))
      this.emit('payload', load);
    });
  }

  error (payload, message, code = -1) {
    this.emit('payload', Object.assign(payload, { error: { message, code } }));
  }

  send (payload) {
    if (!this.socket || !this.socket.writable) {
      this.error(payload, 'Not connected');
    } else {
      try {
        this.socket.write(JSON.stringify(Object.assign({}, payload)));
      } catch (e) {
        this.error(payload, e.message);
      }
    }
  }
}

var ipc$1 = net => (path, options) => new IPCConnection(net, path, options);

const EventEmitter$1 = require$$0;
const parse$1 = parse$3;

let WebSocket;

class WebSocketConnection extends EventEmitter$1 {
  constructor (_WebSocket, url, options) {
    super();
    this.socketListeners = [];
    WebSocket = _WebSocket;
    setTimeout(() => this.create(url, options), 0);
  }

  create (url, options) {
    if (!WebSocket) return this.onError(new Error('No WebSocket transport available'))
    try {
      this.socket = new WebSocket(url, [], { origin: options.origin });
    } catch (e) {
      return this.onError(e)
    }

    this.addSocketListener('error', this.onError.bind(this));
    this.addSocketListener('open', this.onOpen.bind(this));
    this.addSocketListener('close', this.onClose.bind(this));
  }

  addSocketListener (event, handler) {
    this.socket.addEventListener(event, handler);
    this.socketListeners.push({ event, handler });
  }

  removeAllSocketListeners () {
    this.socketListeners.forEach(({ event, handler }) => {
      this.socket.removeEventListener(event, handler);
    });
    this.socketListeners = [];
  }

  onOpen () {
    this.emit('connect');
    this.addSocketListener('message', this.onMessage.bind(this));
  }

  onMessage (message) {
    const data = typeof message.data === 'string' ? message.data : '';
    parse$1(data, (err, payloads) => {
      if (err) return //
      payloads.forEach(load => {
        if (Array.isArray(load)) {
          load.forEach(payload => this.emit('payload', payload));
        } else {
          this.emit('payload', load);
        }
      });
    });
  }

  onError (err) {
    if (this.listenerCount('error')) this.emit('error', err);
  }

  onClose (e) {
    // onClose should only be called as a result of the socket's close event
    // OR when close() is called manually and the socket either doesn't exist or is already in a closed state
    ({
      reason: e ? e.reason : 'unknown',
      code: e ? e.code : 'unknown'
    });

    if (this.socket) {
      this.removeAllSocketListeners();
      this.socket = null;
    }

    this.closed = true;

    this.emit('close');
    this.removeAllListeners();
  }

  close () {
    if (this.socket && WebSocket && this.socket.readyState !== WebSocket.CLOSED) {
      this.removeAllSocketListeners();
      this.addSocketListener('error', () => {});
      this.addSocketListener('close', this.onClose.bind(this));
      if (this.socket.terminate) {
        this.socket.terminate();
      } else {
        this.socket.close();
      }
    } else {
      this.onClose();
    }
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } });
  }

  send (payload) {
    try {
      if (this.socket && this.socket.readyState === this.socket.CONNECTING) {
        setTimeout(_ => this.send(payload), 10);
      } else if (!this.socket || this.socket.readyState > 1) {
        this.connected = false;
        this.error(payload, 'Not connected');
      } else {
        this.socket.send(JSON.stringify(payload));
      }
    } catch (e) {

      this.error(payload, e.message);
    }
  }
}

var ws$1 = WebSocket => (url, cb) => new WebSocketConnection(WebSocket, url, cb);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || unsafeStringify(b);
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

const v3 = v35('v3', 0x30, md5);
var v3$1 = v3;

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

const v5 = v35('v5', 0x50, sha1);
var v5$1 = v5;

var nil = '00000000-0000-0000-0000-000000000000';

function version(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var esmBrowser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  v1: v1,
  v3: v3$1,
  v4: v4,
  v5: v5$1,
  NIL: nil,
  version: version,
  validate: validate,
  stringify: stringify,
  parse: parse
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(esmBrowser);

const EventEmitter = require$$0;
const { v4: uuid } = require$$1;

let XHR$1;

class HTTPConnection extends EventEmitter {
  constructor (_XHR, url, options) {
    super();
    XHR$1 = _XHR;
    this.options = options;
    this.connected = false;
    this.subscriptions = false;
    this.status = 'loading';
    this.url = url;
    this.pollId = uuid();
    setTimeout(() => this.create(), 0);
    this._emit = (...args) => !this.closed ? this.emit(...args) : null;
  }

  onError (err) {
    if (!this.closed && this.listenerCount('error')) this.emit('error', err);
  }

  create () {
    if (!XHR$1) return this.onError(new Error('No HTTP transport available'))
    this.on('error', () => { if (this.connected) this.close(); });
    this.init();
  }

  init () {
    this.send({ jsonrpc: '2.0', method: 'net_version', params: [], id: 1 }, (err, response) => {
      if (err) return this.onError(err)
      this.connected = true;
      this._emit('connect');
      this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId, 'immediate'] }, (err, response) => {
        if (!err) {
          this.subscriptions = true;
          this.pollSubscriptions();
        }
      });
    });
  }

  pollSubscriptions () {
    this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId] }, (err, result) => {
      if (err) {
        this.subscriptionTimeout = setTimeout(() => this.pollSubscriptions(), 10000);
        return this.onError(err)
      } else {
        if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions();
        if (result) {
          result.map(p => {
            let parse;
            try { parse = JSON.parse(p); } catch (e) { parse = false; }
            return parse
          }).filter(n => n).forEach(p => this._emit('payload', p));
        }
      }
    });
  }

  close () {

    clearTimeout(this.subscriptionTimeout);

    this._emit('close');
    this.closed = true;
    this.removeAllListeners();
  }

  filterStatus (res) {
    if (res.status >= 200 && res.status < 300) return res
    const error = new Error(res.statusText);
    error.res = res;
    throw error.message
  }

  error (payload, message, code = -1) {
    this._emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } });
  }

  send (payload, internal) {
    if (this.closed) return this.error(payload, 'Not connected')
    if (payload.method === 'eth_subscribe') {
      if (this.subscriptions) {
        payload.pollId = this.pollId;
      } else {
        return this.error(payload, 'Subscriptions are not supported by this HTTP endpoint')
      }
    }

    const xhr = new XHR$1();
    let responded = false;
    const res = (err, result) => {
      if (!responded) {
        xhr.abort();
        responded = true;
        if (internal) {
          internal(err, result);
        } else {
          const { id, jsonrpc } = payload;
          const load = err ? { id, jsonrpc, error: { message: err.message, code: err.code } } : { id, jsonrpc, result };
          this._emit('payload', load);
        }
      }
    };

    try {
      xhr.open('POST', this.url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      // Below not working becasue XHR lib blocks it claiming "restricted header"
      // if (this.options.origin) xhr.setRequestHeader('Origin', this.options.origin)
      xhr.timeout = 60 * 1000;
      xhr.onerror = res;
      xhr.ontimeout = res;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          try {
            const response = JSON.parse(xhr.responseText);
            res(response.error, response.result);
          } catch (e) {
            res(e);
          }
        }
      };
      xhr.send(JSON.stringify(payload));
    } catch (e) {

      res({ message: e.message, code: -1 });
    }
  }
}

var http = XHR => (url, options) => new HTTPConnection(XHR, url, options);

const resolve = resolve$1;
const provider = provider$1;
const presets = presets$1;

const net = require$$3;
const ws = ws$2;
const XHR = dist.XMLHttpRequest;

const home = require$$0$2.homedir();

let ipc = [];
if (process.platform === 'darwin') {
  ipc = [`${home}/Library/Ethereum/geth.ipc`, `${home}/Library/Ethereum/sepolia/geth.ipc`];
} else if (process.platform === 'freebsd' || process.platform === 'linux' || process.platform === 'sunos') {
  ipc = [`${home}/.ethereum/geth.ipc`, `${home}/.ethereum/sepolia/geth.ipc`];
} else if (process.platform === 'win32') {
  ipc = ['\\\\.\\pipe\\geth.ipc'];
}

const connections = {
  injected: unavailable('Injected connections are unavliable in Node/Electron'),
  ipc: ipc$1(net),
  ws: ws$1(ws),
  http: http(XHR)
};

var node = (targets, options) => {
  if (targets && !Array.isArray(targets) && typeof targets === 'object' && !options) {
    options = targets;
    targets = undefined;
  }
  if (!targets) targets = ['injected', 'frame'];
  if (!options) options = {};

  targets = [].concat(targets);

  targets.forEach(t => {
    if (t.startsWith('alchemy') && !options.alchemyId) throw new Error('Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: \'123abc\' }')
    if (t.startsWith('infura') && !options.infuraId) throw new Error('Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: \'123abc\' }')
  });

  const sets = presets(options);
  sets.direct = ipc.concat(sets.direct);

  return provider(connections, resolve(targets, sets), options)
};

var node$1 = /*@__PURE__*/getDefaultExportFromCjs(node);

var node$2 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': node$1
}, [node]);

export { node$2 as n };
//# sourceMappingURL=node-43fcba8f.js.map
