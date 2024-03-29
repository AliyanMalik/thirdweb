import { aA as getDefaultExportFromCjs, aB as commonjsGlobal, aC as v4, aD as hexlify, V as toUtf8Bytes, au as AmountSchema, aE as BigNumberSchema, aF as BigNumberishSchema, am as MaxUint256, aG as parseUnits, aH as SnapshotSchema, r as ContractWrapper, B as BigNumber, as as hexZeroPad, x as AddressZero, a0 as normalizePriceValue, ar as isNativeToken, aI as fetchCurrencyValue, J as formatUnits, ak as z, at as AddressOrEnsSchema, aJ as AddressSchema, a1 as NATIVE_TOKEN_ADDRESS, aK as BasisPointsSchema, X as keccak256, aL as fetchCurrencyMetadata, aM as keccak256$1, aN as SnapshotEntryWithProofSchema, aO as QuantitySchema, aP as BytesLikeSchema, aQ as SnapshotInputSchema, aR as DuplicateLeafsError } from './App-40ca2dcc.js';
import { Buffer as Buffer$1 } from 'buffer';
import { S as StartDateSchema, E as EndDateSchema } from './assertEnabled-1fa10adb.esm-79af49b9.js';
import { N as NFTInputOrUriSchema } from './setErc20Allowance-41d4cdc2.esm-dfce2b78.js';

var bufferReverse = function reverse (src) {
  var buffer = new Buffer(src.length);

  for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
    buffer[i] = src[j];
    buffer[j] = src[i];
  }

  return buffer
};

var reverse = /*@__PURE__*/getDefaultExportFromCjs(bufferReverse);

var treeify = {exports: {}};

treeify.exports;

(function (module, exports) {
	//     treeify.js
	//     Luke Plaster <notatestuser@gmail.com>
	//     https://github.com/notatestuser/treeify.js

	// do the universal module definition dance
	(function (root, factory) {

	  {
	    module.exports = factory();
	  }

	}(commonjsGlobal, function() {

	  function makePrefix(key, last) {
	    var str = (last ? '└' : '├');
	    if (key) {
	      str += '─ ';
	    } else {
	      str += '──┐';
	    }
	    return str;
	  }

	  function filterKeys(obj, hideFunctions) {
	    var keys = [];
	    for (var branch in obj) {
	      // always exclude anything in the object's prototype
	      if (!obj.hasOwnProperty(branch)) {
	        continue;
	      }
	      // ... and hide any keys mapped to functions if we've been told to
	      if (hideFunctions && ((typeof obj[branch])==="function")) {
	        continue;
	      }
	      keys.push(branch);
	    }
	    return keys;
	  }

	  function growBranch(key, root, last, lastStates, showValues, hideFunctions, callback) {
	    var line = '', index = 0, lastKey, circular, lastStatesCopy = lastStates.slice(0);

	    if (lastStatesCopy.push([ root, last ]) && lastStates.length > 0) {
	      // based on the "was last element" states of whatever we're nested within,
	      // we need to append either blankness or a branch to our line
	      lastStates.forEach(function(lastState, idx) {
	        if (idx > 0) {
	          line += (lastState[1] ? ' ' : '│') + '  ';
	        }
	        if ( ! circular && lastState[0] === root) {
	          circular = true;
	        }
	      });

	      // the prefix varies based on whether the key contains something to show and
	      // whether we're dealing with the last element in this collection
	      line += makePrefix(key, last) + key;

	      // append values and the circular reference indicator
	      showValues && (typeof root !== 'object' || root instanceof Date) && (line += ': ' + root);
	      circular && (line += ' (circular ref.)');

	      callback(line);
	    }

	    // can we descend into the next item?
	    if ( ! circular && typeof root === 'object') {
	      var keys = filterKeys(root, hideFunctions);
	      keys.forEach(function(branch){
	        // the last key is always printed with a different prefix, so we'll need to know if we have it
	        lastKey = ++index === keys.length;

	        // hold your breath for recursive action
	        growBranch(branch, root[branch], lastKey, lastStatesCopy, showValues, hideFunctions, callback);
	      });
	    }
	  }
	  // --------------------

	  var Treeify = {};

	  // Treeify.asLines
	  // --------------------
	  // Outputs the tree line-by-line, calling the lineCallback when each one is available.

	  Treeify.asLines = function(obj, showValues, hideFunctions, lineCallback) {
	    /* hideFunctions and lineCallback are curried, which means we don't break apps using the older form */
	    var hideFunctionsArg = typeof hideFunctions !== 'function' ? hideFunctions : false;
	    growBranch('.', obj, false, [], showValues, hideFunctionsArg, lineCallback || hideFunctions);
	  };

	  // Treeify.asTree
	  // --------------------
	  // Outputs the entire tree, returning it as a string with line breaks.

	  Treeify.asTree = function(obj, showValues, hideFunctions) {
	    var tree = '';
	    growBranch('.', obj, false, [], showValues, hideFunctions, function(line) {
	      tree += line + '\n';
	    });
	    return tree;
	  };

	  // --------------------

	  return Treeify;

	})); 
} (treeify, treeify.exports));

var treeifyExports = treeify.exports;

// ADAPTED FROM https://github.com/merkletreejs/merkletreejs
class Base {
  /**
   * print
   * @desc Prints out a visual representation of the merkle tree.
   * @example
   *```js
   *tree.print()
   *```
   */
  print() {
    Base.print(this);
  }

  /**
   * bufferIndexOf
   * @desc Returns the first index of which given buffer is found in array.
   * @param {Buffer[]} haystack - Array of buffers.
   * @param {Buffer} needle - Buffer to find.
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.bufferIndexOf(haystack, needle)
   *```
   */
  bufferIndexOf(array, element) {
    let isSorted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (isSorted) {
      return this.binarySearch(array, element, Buffer$1.compare);
    }
    const eqChecker = (buffer1, buffer2) => buffer1.equals(buffer2);
    return this.linearSearch(array, element, eqChecker);
  }

  /**
   * binarySearch
   * @desc Returns the first index of which given item is found in array using binary search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} compareFunction
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = MerkleTree.binarySearch(array, element, Buffer.compare)
   *```
   */
  static binarySearch(array, element, compareFunction) {
    let start = 0;
    let end = array.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      const mid = Math.floor((start + end) / 2);

      // Check if the mid value is greater than, equal to, or less than search element.
      const ordering = compareFunction(array[mid], element);

      // If element is present at mid, start iterating for searching first appearance.
      if (ordering === 0) {
        // Linear reverse iteration until the first matching item index is found.
        for (let i = mid - 1; i >= 0; i--) {
          if (compareFunction(array[i], element) === 0) {
            continue;
          }
          return i + 1;
        }
        return 0;
      } /* Else look in left or right half accordingly */else if (ordering < 0) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }

  /**
   * binarySearch
   * @desc Returns the first index of which given item is found in array using binary search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} compareFunction
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.binarySearch(array, element, Buffer.compare)
   *```
   */
  binarySearch(array, element, compareFunction) {
    return Base.binarySearch(array, element, compareFunction);
  }

  /**
   * linearSearch
   * @desc Returns the first index of which given item is found in array using linear search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} eqChecker
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = MerkleTree.linearSearch(array, element, (a, b) => a === b)
   *```
   */
  static linearSearch(array, element, eqChecker) {
    for (let i = 0; i < array.length; i++) {
      if (eqChecker(array[i], element)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * linearSearch
   * @desc Returns the first index of which given item is found in array using linear search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} eqChecker
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.linearSearch(array, element, (a, b) => a === b)
   *```
   */
  linearSearch(array, element, eqChecker) {
    return Base.linearSearch(array, element, eqChecker);
  }

  /**
   * bufferify
   * @desc Returns a buffer type for the given value.
   * @param {String|Number|Object|Buffer|ArrayBuffer} value
   * @return {Buffer}
   *
   * @example
   * ```js
   *const buf = MerkleTree.bufferify('0x1234')
   *```
   */
  static bufferify(value) {
    if (!Buffer$1.isBuffer(value)) {
      // crypto-js support
      if (typeof value === "object" && value.words) {
        return Buffer$1.from(value.toString(convertWordsToBuffer), "hex");
      } else if (Base.isHexString(value)) {
        return Buffer$1.from(value.replace(/^0x/, ""), "hex");
      } else if (typeof value === "string") {
        return Buffer$1.from(value);
      } else if (typeof value === "bigint") {
        return Buffer$1.from(value.toString(16), "hex");
      } else if (value instanceof Uint8Array) {
        return Buffer$1.from(value.buffer);
      } else if (typeof value === "number") {
        let s = value.toString();
        if (s.length % 2) {
          s = `0${s}`;
        }
        return Buffer$1.from(s, "hex");
      } else if (ArrayBuffer.isView(value)) {
        return Buffer$1.from(value.buffer, value.byteOffset, value.byteLength);
      }
    }
    return value;
  }
  bigNumberify(value) {
    return Base.bigNumberify(value);
  }
  static bigNumberify(value) {
    if (typeof value === "bigint") {
      return value;
    }
    if (typeof value === "string") {
      if (value.startsWith("0x") && Base.isHexString(value)) {
        return BigInt("0x" + value.replace("0x", "").toString());
      }
      return BigInt(value);
    }
    if (Buffer$1.isBuffer(value)) {
      return BigInt("0x" + value.toString("hex"));
    }
    if (value instanceof Uint8Array) {
      return uint8ArrayToBigInt(value);
    }
    if (typeof value === "number") {
      return BigInt(value);
    }
    throw new Error("cannot bigNumberify");
  }

  /**
   * isHexString
   * @desc Returns true if value is a hex string.
   * @param {String} value
   * @return {Boolean}
   *
   * @example
   * ```js
   *console.log(MerkleTree.isHexString('0x1234'))
   *```
   */
  static isHexString(v) {
    return typeof v === "string" && /^(0x)?[0-9A-Fa-f]*$/.test(v);
  }

  /**
   * print
   * @desc Prints out a visual representation of the given merkle tree.
   * @param {Object} tree - Merkle tree instance.
   * @return {String}
   * @example
   *```js
   *MerkleTree.print(tree)
   *```
   */
  static print(tree) {
    console.log(tree.toString());
  }

  /**
   * bufferToHex
   * @desc Returns a hex string with 0x prefix for given buffer.
   * @param {Buffer} value
   * @return {String}
   * @example
   *```js
   *const hexStr = tree.bufferToHex(Buffer.from('A'))
   *```
   */
  bufferToHex(value) {
    let withPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Base.bufferToHex(value, withPrefix);
  }

  /**
   * bufferToHex
   * @desc Returns a hex string with 0x prefix for given buffer.
   * @param {Buffer} value
   * @return {String}
   * @example
   *```js
   *const hexStr = MerkleTree.bufferToHex(Buffer.from('A'))
   *```
   */
  static bufferToHex(value) {
    let withPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return `${withPrefix ? "0x" : ""}${(value || Buffer$1.alloc(0)).toString("hex")}`;
  }

  /**
   * bufferify
   * @desc Returns a buffer type for the given value.
   * @param {String|Number|Object|Buffer} value
   * @return {Buffer}
   *
   * @example
   * ```js
   *const buf = tree.bufferify('0x1234')
   *```
   */
  bufferify(value) {
    return Base.bufferify(value);
  }

  /**
   * bufferifyFn
   * @desc Returns a function that will bufferify the return value.
   * @param {Function}
   * @return {Function}
   *
   * @example
   * ```js
   *const fn = tree.bufferifyFn((value) => sha256(value))
   *```
   */
  bufferifyFn(f) {
    return value => {
      const v = f(value);
      if (Buffer$1.isBuffer(v)) {
        return v;
      }
      if (this.isHexString(v)) {
        return Buffer$1.from(v.replace("0x", ""), "hex");
      }
      if (typeof v === "string") {
        return Buffer$1.from(v);
      }
      if (typeof v === "bigint") {
        return Buffer$1.from(value.toString(16), "hex");
      }
      if (ArrayBuffer.isView(v)) {
        return Buffer$1.from(v.buffer, v.byteOffset, v.byteLength);
      }

      // crypto-js support
      const arrayBuffer = hexStringToArrayBuffer(value.toString("hex"));
      // Assuming f now works with ArrayBuffers
      const processedBuffer = f(arrayBuffer);
      const hexResult = arrayBufferToHexString(processedBuffer);
      return Buffer$1.from(hexResult, "hex");
    };
  }

  /**
   * isHexString
   * @desc Returns true if value is a hex string.
   * @param {String} value
   * @return {Boolean}
   *
   * @example
   * ```js
   *console.log(MerkleTree.isHexString('0x1234'))
   *```
   */
  isHexString(value) {
    return Base.isHexString(value);
  }

  /**
   * log2
   * @desc Returns the log2 of number.
   * @param {Number} value
   * @return {Number}
   */
  log2(n) {
    return n === 1 ? 0 : 1 + this.log2(n / 2 | 0);
  }

  /**
   * zip
   * @desc Returns true if value is a hex string.
   * @param {String[]|Number[]|Buffer[]} a - first array
   * @param {String[]|Number[]|Buffer[]} b -  second array
   * @return {String[][]|Number[][]|Buffer[][]}
   *
   * @example
   * ```js
   *const zipped = tree.zip(['a', 'b'],['A', 'B'])
   *console.log(zipped) // [ [ 'a', 'A' ], [ 'b', 'B' ] ]
   *```
   */
  zip(a, b) {
    return a.map((e, i) => [e, b[i]]);
  }
  static hexZeroPad(hexStr, length) {
    return "0x" + hexStr.replace("0x", "").padStart(length, "0");
  }
}
var Base$1 = Base;

// UTILS

// replaces CryptoJS.enc.Hex
function convertWordsToBuffer(value) {
  const wordArray = value.words;
  const arrayBuffer = new ArrayBuffer(wordArray.length * 4); // 4 bytes per word
  const uint8View = new Uint8Array(arrayBuffer);
  for (let i = 0; i < wordArray.length; i++) {
    uint8View[i * 4] = wordArray[i] >> 24 & 0xff;
    uint8View[i * 4 + 1] = wordArray[i] >> 16 & 0xff;
    uint8View[i * 4 + 2] = wordArray[i] >> 8 & 0xff;
    uint8View[i * 4 + 3] = wordArray[i] & 0xff;
  }
  return arrayBuffer;
}
function hexStringToArrayBuffer(hexString) {
  const buffer = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    buffer[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
  }
  return buffer.buffer;
}
function arrayBufferToHexString(arrayBuffer) {
  const uint8View = new Uint8Array(arrayBuffer);
  return Array.from(uint8View).map(byte => byte.toString(16).padStart(2, "0")).join("");
}
function uint8ArrayToBigInt(u8a) {
  const hex = Array.from(u8a).map(byte => byte.toString(16).padStart(2, "0")).join("");
  return BigInt(`0x${hex}`);
}

// ADAPTED FROM https://github.com/merkletreejs/merkletreejs

// TODO: Clean up and DRY up code
// Disclaimer: The multiproof code is unaudited and may possibly contain serious issues. It's in a hacky state as is and needs to be rewritten.
/**
 * Class reprensenting a Merkle Tree
 * @namespace MerkleTree
 */
class MerkleTree extends Base$1 {
  duplicateOdd = false;
  concatenator = Buffer$1.concat;
  hashLeaves = false;
  isBitcoinTree = false;
  leaves = [];
  layers = [];
  sortLeaves = false;
  sortPairs = false;
  sort = false;
  fillDefaultHash = null;
  complete = false;

  /**
   * @desc Constructs a Merkle Tree.
   * All nodes and leaves are stored as Buffers.
   * Lonely leaf nodes are promoted to the next level up without being hashed again.
   * @param {Buffer[]} leaves - Array of hashed leaves. Each leaf must be a Buffer.
   * @param {Function} hashFunction - Hash function to use for hashing leaves and nodes
   * @param {Object} options - Additional options
   * @example
   *```js
   *const MerkleTree = require('merkletreejs')
   *const crypto = require('crypto')
   *
   *function sha256(data) {
   *  // returns Buffer
   *  return crypto.createHash('sha256').update(data).digest()
   *}
   *
   *const leaves = ['a', 'b', 'c'].map(value => keccak(value))
   *
   *const tree = new MerkleTree(leaves, sha256)
   *```
   */
  constructor(leaves, hashFn) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super();
    if (options.complete) {
      if (options.isBitcoinTree) {
        throw new Error('option "complete" is incompatible with "isBitcoinTree"');
      }
      if (options.duplicateOdd) {
        throw new Error('option "complete" is incompatible with "duplicateOdd"');
      }
    }
    this.isBitcoinTree = !!options.isBitcoinTree;
    this.hashLeaves = !!options.hashLeaves;
    this.sortLeaves = !!options.sortLeaves;
    this.sortPairs = !!options.sortPairs;
    this.complete = !!options.complete;
    if (options.fillDefaultHash) {
      if (typeof options.fillDefaultHash === "function") {
        this.fillDefaultHash = options.fillDefaultHash;
      } else if (Buffer$1.isBuffer(options.fillDefaultHash) || typeof options.fillDefaultHash === "string") {
        this.fillDefaultHash = (idx, hashFn) => options.fillDefaultHash;
      } else {
        throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');
      }
    }
    this.sort = !!options.sort;
    if (this.sort) {
      this.sortLeaves = true;
      this.sortPairs = true;
    }
    this.duplicateOdd = !!options.duplicateOdd;
    if (options.concatenator) {
      this.concatenator = options.concatenator;
    }
    this.hashFn = this.bufferifyFn(hashFn);
    this.processLeaves(leaves);
  }
  getOptions() {
    return {
      complete: this.complete,
      isBitcoinTree: this.isBitcoinTree,
      hashLeaves: this.hashLeaves,
      sortLeaves: this.sortLeaves,
      sortPairs: this.sortPairs,
      sort: this.sort,
      fillDefaultHash: this.fillDefaultHash?.toString() ?? null,
      duplicateOdd: this.duplicateOdd
    };
  }
  processLeaves(leaves) {
    if (this.hashLeaves) {
      leaves = leaves.map(this.hashFn);
    }
    this.leaves = leaves.map(this.bufferify);
    if (this.sortLeaves) {
      this.leaves = this.leaves.sort(Buffer$1.compare);
    }
    if (this.fillDefaultHash) {
      for (let i = this.leaves.length; i < Math.pow(2, Math.ceil(Math.log2(this.leaves.length))); i++) {
        this.leaves.push(this.bufferify(this.fillDefaultHash(i, this.hashFn)));
      }
    }
    this.createHashes(this.leaves);
  }
  createHashes(nodes) {
    this.layers = [nodes];
    while (nodes.length > 1) {
      const layerIndex = this.layers.length;
      this.layers.push([]);
      const layerLimit = this.complete && layerIndex === 1 && !Number.isInteger(Math.log2(nodes.length)) ? 2 * nodes.length - 2 ** Math.ceil(Math.log2(nodes.length)) : nodes.length;
      for (let i = 0; i < nodes.length; i += 2) {
        if (i >= layerLimit) {
          this.layers[layerIndex].push(...nodes.slice(layerLimit));
          break;
        } else if (i + 1 === nodes.length) {
          if (nodes.length % 2 === 1) {
            const data = nodes[nodes.length - 1];
            let hash = data;

            // is bitcoin tree
            if (this.isBitcoinTree) {
              // Bitcoin method of duplicating the odd ending nodes
              hash = this.hashFn(this.concatenator([reverse(data), reverse(data)]));
              hash = reverse(this.hashFn(hash));
              this.layers[layerIndex].push(hash);
              continue;
            } else {
              if (this.duplicateOdd) ; else {
                // push copy of hash and continue iteration
                this.layers[layerIndex].push(nodes[i]);
                continue;
              }
            }
          }
        }
        const left = nodes[i];
        const right = i + 1 === nodes.length ? left : nodes[i + 1];
        let combined = null;
        if (this.isBitcoinTree) {
          combined = [reverse(left), reverse(right)];
        } else {
          combined = [left, right];
        }
        if (this.sortPairs) {
          combined.sort(Buffer$1.compare);
        }
        let hash = this.hashFn(this.concatenator(combined));

        // double hash if bitcoin tree
        if (this.isBitcoinTree) {
          hash = reverse(this.hashFn(hash));
        }
        this.layers[layerIndex].push(hash);
      }
      nodes = this.layers[layerIndex];
    }
  }

  /**
   * addLeaf
   * @desc Adds a leaf to the tree and re-calculates layers.
   * @param {String|Buffer} - Leaf
   * @param {Boolean} - Set to true if the leaf should be hashed before being added to tree.
   * @example
   *```js
   *tree.addLeaf(newLeaf)
   *```
   */
  addLeaf(leaf) {
    let shouldHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (shouldHash) {
      leaf = this.hashFn(leaf);
    }
    this.processLeaves(this.leaves.concat(leaf));
  }

  /**
   * addLeaves
   * @desc Adds multiple leaves to the tree and re-calculates layers.
   * @param {String[]|Buffer[]} - Array of leaves
   * @param {Boolean} - Set to true if the leaves should be hashed before being added to tree.
   * @example
   *```js
   *tree.addLeaves(newLeaves)
   *```
   */
  addLeaves(leaves) {
    let shouldHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (shouldHash) {
      leaves = leaves.map(this.hashFn);
    }
    this.processLeaves(this.leaves.concat(leaves));
  }

  /**
   * getLeaves
   * @desc Returns array of leaves of Merkle Tree.
   * @return {Buffer[]}
   * @example
   *```js
   *const leaves = tree.getLeaves()
   *```
   */
  getLeaves(values) {
    if (Array.isArray(values)) {
      if (this.hashLeaves) {
        values = values.map(this.hashFn);
        if (this.sortLeaves) {
          values = values.sort(Buffer$1.compare);
        }
      }
      return this.leaves.filter(
      // @ts-expect-error - issue from original code
      leaf => this.bufferIndexOf(values, leaf, this.sortLeaves) !== -1);
    }
    return this.leaves;
  }

  /**
   * getLeaf
   * @desc Returns the leaf at the given index.
   * @param {Number} - Index number
   * @return {Buffer}
   * @example
   *```js
   *const leaf = tree.getLeaf(1)
   *```
   */
  getLeaf(index) {
    if (index < 0 || index > this.leaves.length - 1) {
      return Buffer$1.from([]);
    }
    return this.leaves[index];
  }

  /**
   * getLeafIndex
   * @desc Returns the index of the given leaf, or -1 if the leaf is not found.
   * @param {String|Buffer} - Target leaf
   * @return {number}
   * @example
   *```js
   *const leaf = Buffer.from('abc')
   *const index = tree.getLeafIndex(leaf)
   *```
   */
  getLeafIndex(target) {
    target = this.bufferify(target);
    const leaves = this.getLeaves();
    for (let i = 0; i < leaves.length; i++) {
      const leaf = leaves[i];
      if (leaf.equals(target)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * getLeafCount
   * @desc Returns the total number of leaves.
   * @return {number}
   * @example
   *```js
   *const count = tree.getLeafCount()
   *```
   */
  getLeafCount() {
    return this.leaves.length;
  }

  /**
   * getHexLeaves
   * @desc Returns array of leaves of Merkle Tree as hex strings.
   * @return {String[]}
   * @example
   *```js
   *const leaves = tree.getHexLeaves()
   *```
   */
  getHexLeaves() {
    return this.leaves.map(leaf => this.bufferToHex(leaf));
  }

  /**
   * marshalLeaves
   * @desc Returns array of leaves of Merkle Tree as a JSON string.
   * @param {String[]|Buffer[]} - Merkle tree leaves
   * @return {String} - List of leaves as JSON string
   * @example
   *```js
   *const jsonStr = MerkleTree.marshalLeaves(leaves)
   *```
   */
  static marshalLeaves(leaves) {
    return JSON.stringify(leaves.map(leaf => MerkleTree.bufferToHex(leaf)), null, 2);
  }

  /**
   * unmarshalLeaves
   * @desc Returns array of leaves of Merkle Tree as a Buffers.
   * @param {String|Object} - JSON stringified leaves
   * @return {Buffer[]} - Unmarshalled list of leaves
   * @example
   *```js
   *const leaves = MerkleTree.unmarshalLeaves(jsonStr)
   *```
   */
  static unmarshalLeaves(jsonStr) {
    let parsed = null;
    if (typeof jsonStr === "string") {
      parsed = JSON.parse(jsonStr);
    } else if (jsonStr instanceof Object) {
      parsed = jsonStr;
    } else {
      throw new Error("Expected type of string or object");
    }
    if (!parsed) {
      return [];
    }
    if (!Array.isArray(parsed)) {
      throw new Error("Expected JSON string to be array");
    }
    return parsed.map(MerkleTree.bufferify);
  }

  /**
   * getLayers
   * @desc Returns multi-dimensional array of all layers of Merkle Tree, including leaves and root.
   * @return {Buffer[][]}
   * @example
   *```js
   *const layers = tree.getLayers()
   *```
   */
  getLayers() {
    return this.layers;
  }

  /**
   * getHexLayers
   * @desc Returns multi-dimensional array of all layers of Merkle Tree, including leaves and root as hex strings.
   * @return {String[][]}
   * @example
   *```js
   *const layers = tree.getHexLayers()
   *```
   */
  getHexLayers() {
    return this.layers.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(item.map(layer => this.bufferToHex(layer)));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  /**
   * getLayersFlat
   * @desc Returns single flat array of all layers of Merkle Tree, including leaves and root.
   * @return {Buffer[]}
   * @example
   *```js
   *const layers = tree.getLayersFlat()
   *```
   */
  getLayersFlat() {
    const layers = this.layers.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.unshift(...item);
      } else {
        acc.unshift(item);
      }
      return acc;
    }, []);
    layers.unshift(Buffer$1.from([0]));
    return layers;
  }

  /**
   * getHexLayersFlat
   * @desc Returns single flat array of all layers of Merkle Tree, including leaves and root as hex string.
   * @return {String[]}
   * @example
   *```js
   *const layers = tree.getHexLayersFlat()
   *```
   */
  getHexLayersFlat() {
    return this.getLayersFlat().map(layer => this.bufferToHex(layer));
  }

  /**
   * getLayerCount
   * @desc Returns the total number of layers.
   * @return {number}
   * @example
   *```js
   *const count = tree.getLayerCount()
   *```
   */
  getLayerCount() {
    return this.getLayers().length;
  }

  /**
   * getRoot
   * @desc Returns the Merkle root hash as a Buffer.
   * @return {Buffer}
   * @example
   *```js
   *const root = tree.getRoot()
   *```
   */
  getRoot() {
    if (this.layers.length === 0) {
      return Buffer$1.from([]);
    }
    return this.layers[this.layers.length - 1][0] || Buffer$1.from([]);
  }

  /**
   * getHexRoot
   * @desc Returns the Merkle root hash as a hex string.
   * @return {String}
   * @example
   *```js
   *const root = tree.getHexRoot()
   *```
   */
  getHexRoot() {
    return this.bufferToHex(this.getRoot());
  }

  /**
   * getProof
   * @desc Returns the proof for a target leaf.
   * @param {Buffer} leaf - Target leaf
   * @param {Number} [index] - Target leaf index in leaves array.
   * Use if there are leaves containing duplicate data in order to distinguish it.
   * @return {Object[]} - Array of objects containing a position property of type string
   * with values of 'left' or 'right' and a data property of type Buffer.
   * @example
   * ```js
   *const proof = tree.getProof(leaves[2])
   *```
   *
   * @example
   *```js
   *const leaves = ['a', 'b', 'a'].map(value => keccak(value))
   *const tree = new MerkleTree(leaves, keccak)
   *const proof = tree.getProof(leaves[2], 2)
   *```
   */
  getProof(leaf, index) {
    if (typeof leaf === "undefined") {
      throw new Error("leaf is required");
    }
    leaf = this.bufferify(leaf);
    const proof = [];
    if (!Number.isInteger(index)) {
      index = -1;
      for (let i = 0; i < this.leaves.length; i++) {
        if (Buffer$1.compare(leaf, this.leaves[i]) === 0) {
          index = i;
        }
      }
    }

    // @ts-expect-error - issue from original code
    if (index <= -1) {
      return [];
    }
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      // @ts-expect-error - issue from original code
      const isRightNode = index % 2;
      const pairIndex = isRightNode ?
      // @ts-expect-error - issue from original code
      index - 1 : this.isBitcoinTree && index === layer.length - 1 && i < this.layers.length - 1 ?
      // Proof Generation for Bitcoin Trees
      index :
      // Proof Generation for Non-Bitcoin Trees
      // @ts-expect-error - issue from original code
      index + 1;
      if (pairIndex < layer.length) {
        proof.push({
          position: isRightNode ? "left" : "right",
          data: layer[pairIndex]
        });
      }

      // set index to parent index
      // @ts-expect-error - issue from original code
      index = index / 2 | 0;
    }

    // @ts-expect-error - issue from original code
    return proof;
  }

  /**
   * getHexProof
   * @desc Returns the proof for a target leaf as hex strings.
   * @param {Buffer} leaf - Target leaf
   * @param {Number} [index] - Target leaf index in leaves array.
   * Use if there are leaves containing duplicate data in order to distinguish it.
   * @return {String[]} - Proof array as hex strings.
   * @example
   * ```js
   *const proof = tree.getHexProof(leaves[2])
   *```
   */
  getHexProof(leaf, index) {
    return this.getProof(leaf, index).map(item => this.bufferToHex(item.data));
  }

  /**
   * getProofs
   * @desc Returns the proofs for all leaves.
   * @return {Object[]} - Array of objects containing a position property of type string
   * with values of 'left' or 'right' and a data property of type Buffer for all leaves.
   * @example
   * ```js
   *const proofs = tree.getProofs()
   *```
   *
   * @example
   *```js
   *const leaves = ['a', 'b', 'a'].map(value => keccak(value))
   *const tree = new MerkleTree(leaves, keccak)
   *const proofs = tree.getProofs()
   *```
   */
  getProofs() {
    // @ts-expect-error - issue from original code
    const proof = [];
    // @ts-expect-error - issue from original code
    const proofs = [];

    // @ts-expect-error - issue from original code
    this.getProofsDFS(this.layers.length - 1, 0, proof, proofs);

    // @ts-expect-error - issue from original code
    return proofs;
  }

  /**
   * getProofsDFS
   * @desc Get all proofs through single traverse
   * @param {Number} currentLayer - Current layer index in traverse.
   * @param {Number} index - Current tarvese node index in traverse.
   * @param {Object[]} proof - Proof chain for single leaf.
   * @param {Object[]} proofs - Proofs for all leaves
   * @example
   * ```js
   *const layers = tree.getLayers()
   *const index = 0;
   *let proof = [];
   *let proofs = [];
   *const proof = tree.getProofsDFS(layers, index, proof, proofs)
   *```
   */
  // @ts-expect-error - issue from original code
  getProofsDFS(currentLayer, index, proof, proofs) {
    const isRightNode = index % 2;
    if (currentLayer === -1) {
      if (!isRightNode) {
        proofs.push([...proof].reverse());
      }
      // @ts-expect-error - issue from original code
      return;
    }
    if (index >= this.layers[currentLayer].length) {
      // @ts-expect-error - issue from original code
      return;
    }
    const layer = this.layers[currentLayer];
    const pairIndex = isRightNode ? index - 1 : index + 1;
    let pushed = false;
    if (pairIndex < layer.length) {
      pushed = true;
      proof.push({
        position: isRightNode ? "left" : "right",
        data: layer[pairIndex]
      });
    }
    const leftchildIndex = index * 2;
    const rightchildIndex = index * 2 + 1;
    this.getProofsDFS(currentLayer - 1, leftchildIndex, proof, proofs);
    this.getProofsDFS(currentLayer - 1, rightchildIndex, proof, proofs);
    if (pushed) {
      proof.splice(proof.length - 1, 1);
    }
  }

  /**
   * getHexProofs
   * @desc Returns the proofs for all leaves as hex strings.
   * @return {String[]} - Proofs array as hex strings.
   * @example
   * ```js
   *const proofs = tree.getHexProofs()
   *```
   */
  getHexProofs() {
    return this.getProofs().map(item => this.bufferToHex(item.data));
  }

  /**
   * getPositionalHexProof
   * @desc Returns the proof for a target leaf as hex strings and the position in binary (left == 0).
   * @param {Buffer} leaf - Target leaf
   * @param {Number} [index] - Target leaf index in leaves array.
   * Use if there are leaves containing duplicate data in order to distinguish it.
   * @return {(string | number)[][]} - Proof array as hex strings. position at index 0
   * @example
   * ```js
   *const proof = tree.getPositionalHexProof(leaves[2])
   *```
   */
  getPositionalHexProof(leaf, index) {
    return this.getProof(leaf, index).map(item => {
      return [item.position === "left" ? 0 : 1, this.bufferToHex(item.data)];
    });
  }

  /**
   * getProofIndices
   * @desc Returns the proof indices for given tree indices.
   * @param {Number[]} treeIndices - Tree indices
   * @param {Number} depth - Tree depth; number of layers.
   * @return {Number[]} - Proof indices
   * @example
   * ```js
   *const proofIndices = tree.getProofIndices([2,5,6], 4)
   *console.log(proofIndices) // [ 23, 20, 19, 8, 3 ]
   *```
   */
  getProofIndices(treeIndices, depth) {
    const leafCount = 2 ** depth;
    let maximalIndices = new Set();
    for (const index of treeIndices) {
      let x = leafCount + index;
      while (x > 1) {
        maximalIndices.add(x ^ 1);
        x = x / 2 | 0;
      }
    }
    const a = treeIndices.map(index => leafCount + index);
    const b = Array.from(maximalIndices).sort((x, y) => x - y).reverse();
    maximalIndices = a.concat(b);
    const redundantIndices = new Set();
    const proof = [];
    for (let index of maximalIndices) {
      if (!redundantIndices.has(index)) {
        proof.push(index);
        while (index > 1) {
          redundantIndices.add(index);
          if (!redundantIndices.has(index ^ 1)) {
            break;
          }
          index = index / 2 | 0;
        }
      }
    }
    return proof.filter(index => {
      return !treeIndices.includes(index - leafCount);
    });
  }
  getProofIndicesForUnevenTree(sortedLeafIndices, leavesCount) {
    const depth = Math.ceil(Math.log2(leavesCount));
    const unevenLayers = [];
    for (let index = 0; index < depth; index++) {
      const unevenLayer = leavesCount % 2 !== 0;
      if (unevenLayer) {
        unevenLayers.push({
          index,
          leavesCount
        });
      }
      leavesCount = Math.ceil(leavesCount / 2);
    }
    const proofIndices = [];
    let layerNodes = sortedLeafIndices;
    for (let layerIndex = 0; layerIndex < depth; layerIndex++) {
      const siblingIndices = layerNodes.map(index => {
        if (index % 2 === 0) {
          return index + 1;
        }
        return index - 1;
      });
      let proofNodeIndices = siblingIndices.filter(index => !layerNodes.includes(index));
      const unevenLayer = unevenLayers.find(_ref => {
        let {
          index
        } = _ref;
        return index === layerIndex;
      });
      if (unevenLayer && layerNodes.includes(unevenLayer.leavesCount - 1)) {
        proofNodeIndices = proofNodeIndices.slice(0, -1);
      }
      proofIndices.push(proofNodeIndices);
      layerNodes = [...new Set(layerNodes.map(index => {
        if (index % 2 === 0) {
          return index / 2;
        }
        if (index % 2 === 0) {
          return (index + 1) / 2;
        }
        return (index - 1) / 2;
      }))];
    }
    return proofIndices;
  }

  /**
   * getMultiProof
   * @desc Returns the multiproof for given tree indices.
   * @param {Number[]} indices - Tree indices.
   * @return {Buffer[]} - Multiproofs
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getMultiProof(indices)
   *```
   */
  getMultiProof(tree, indices) {
    if (!this.complete) {
      console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true");
    }
    if (!indices) {
      indices = tree;
      tree = this.getLayersFlat();
    }
    const isUneven = this.isUnevenTree();
    if (isUneven) {
      // @ts-expect-error - issue from original code
      if (indices.every(Number.isInteger)) {
        return this.getMultiProofForUnevenTree(indices);
      }
    }
    // @ts-expect-error - issue from original code
    if (!indices.every(Number.isInteger)) {
      let els = indices;
      if (this.sortPairs) {
        // @ts-expect-error - issue from original code
        els = els.sort(Buffer$1.compare);
      }

      // @ts-expect-error - issue from original code
      let ids = els.map(el => this.bufferIndexOf(this.leaves, el, this.sortLeaves)).sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
      if (!ids.every(idx => idx !== -1)) {
        throw new Error("Element does not exist in Merkle tree");
      }

      // @ts-expect-error - issue from original code
      const hashes = [];
      const proof = [];
      let nextIds = [];
      for (let i = 0; i < this.layers.length; i++) {
        const layer = this.layers[i];
        for (let j = 0; j < ids.length; j++) {
          const idx = ids[j];
          const pairElement = this.getPairNode(layer, idx);
          hashes.push(layer[idx]);
          if (pairElement) {
            proof.push(pairElement);
          }
          nextIds.push(idx / 2 | 0);
        }
        ids = nextIds.filter((value, j, self) => self.indexOf(value) === j);
        nextIds = [];
      }

      // @ts-expect-error - issue from original code
      return proof.filter(value => !hashes.includes(value));
    }

    // @ts-expect-error - issue from original code
    return this.getProofIndices(indices, Math.log2(tree.length / 2 | 0)).map(
    // @ts-expect-error - issue from original code
    index => tree[index]);
  }
  getMultiProofForUnevenTree(tree, indices) {
    if (!indices) {
      indices = tree;
      tree = this.getLayers();
    }
    let proofHashes = [];
    // @ts-expect-error - issue from original code
    let currentLayerIndices = indices;
    // @ts-expect-error - issue from original code
    for (const treeLayer of tree) {
      const siblings = [];
      for (const index of currentLayerIndices) {
        if (index % 2 === 0) {
          const idx = index + 1;
          if (!currentLayerIndices.includes(idx)) {
            if (treeLayer[idx]) {
              siblings.push(treeLayer[idx]);
              continue;
            }
          }
        }
        const idx = index - 1;
        if (!currentLayerIndices.includes(idx)) {
          if (treeLayer[idx]) {
            siblings.push(treeLayer[idx]);
            continue;
          }
        }
      }
      proofHashes = proofHashes.concat(siblings);
      const uniqueIndices = new Set();
      for (const index of currentLayerIndices) {
        if (index % 2 === 0) {
          uniqueIndices.add(index / 2);
          continue;
        }
        if (index % 2 === 0) {
          uniqueIndices.add((index + 1) / 2);
          continue;
        }
        uniqueIndices.add((index - 1) / 2);
      }
      currentLayerIndices = Array.from(uniqueIndices);
    }
    return proofHashes;
  }

  /**
   * getHexMultiProof
   * @desc Returns the multiproof for given tree indices as hex strings.
   * @param {Number[]} indices - Tree indices.
   * @return {String[]} - Multiproofs as hex strings.
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getHexMultiProof(indices)
   *```
   */
  getHexMultiProof(tree, indices) {
    return this.getMultiProof(tree, indices).map(x => this.bufferToHex(x));
  }

  /**
   * getProofFlags
   * @desc Returns list of booleans where proofs should be used instead of hashing.
   * Proof flags are used in the Solidity multiproof verifiers.
   * @param {Number[]|Buffer[]} leaves
   * @param {Buffer[]} proofs
   * @return {Boolean[]} - Boolean flags
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getMultiProof(indices)
   *const proofFlags = tree.getProofFlags(leaves, proof)
   *```
   */
  getProofFlags(leaves, proofs) {
    if (!Array.isArray(leaves) || leaves.length <= 0) {
      throw new Error("Invalid Inputs!");
    }
    let ids;
    if (leaves.every(Number.isInteger)) {
      ids = [...leaves].sort((a, b) => a === b ? 0 : a > b ? 1 : -1); // Indices where passed
    } else {
      ids = leaves.map(el => this.bufferIndexOf(this.leaves, el, this.sortLeaves)).sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    }
    if (!ids.every(idx => idx !== -1)) {
      throw new Error("Element does not exist in Merkle tree");
    }
    const _proofs = proofs.map(item => this.bufferify(item));

    // @ts-expect-error - issue from original code
    const tested = [];
    // @ts-expect-error - issue from original code
    const flags = [];
    for (let index = 0; index < this.layers.length; index++) {
      const layer = this.layers[index];
      ids = ids.reduce((ids_, idx) => {
        // @ts-expect-error - issue from original code
        const skipped = tested.includes(layer[idx]);
        if (!skipped) {
          const pairElement = this.getPairNode(layer, idx);
          const proofUsed = _proofs.includes(layer[idx]) || _proofs.includes(pairElement);
          // eslint-disable-next-line no-unused-expressions
          pairElement && flags.push(!proofUsed);
          tested.push(layer[idx]);
          tested.push(pairElement);
        }
        // @ts-expect-error - issue from original code
        ids_.push(idx / 2 | 0);
        return ids_;
      }, []);
    }

    // @ts-expect-error - issue from original code
    return flags;
  }

  /**
   * verify
   * @desc Returns true if the proof path (array of hashes) can connect the target node
   * to the Merkle root.
   * @param {Object[]} proof - Array of proof objects that should connect
   * target node to Merkle root.
   * @param {Buffer} targetNode - Target node Buffer
   * @param {Buffer} root - Merkle root Buffer
   * @return {Boolean}
   * @example
   *```js
   *const root = tree.getRoot()
   *const proof = tree.getProof(leaves[2])
   *const verified = tree.verify(proof, leaves[2], root)
   *```
   */
  verify(proof, targetNode, root) {
    let hash = this.bufferify(targetNode);
    root = this.bufferify(root);
    if (!Array.isArray(proof) || !targetNode || !root) {
      return false;
    }
    for (let i = 0; i < proof.length; i++) {
      const node = proof[i];
      let data = null;
      let isLeftNode = null;

      // case for when proof is hex values only
      if (typeof node === "string") {
        data = this.bufferify(node);
        isLeftNode = true;
      } else if (Array.isArray(node)) {
        isLeftNode = node[0] === 0;
        data = this.bufferify(node[1]);
      } else if (Buffer$1.isBuffer(node)) {
        data = node;
        isLeftNode = true;
      } else if (node instanceof Object) {
        data = this.bufferify(node.data);
        isLeftNode = node.position === "left";
      } else {
        throw new Error("Expected node to be of type string or object");
      }
      const buffers = [];
      if (this.isBitcoinTree) {
        buffers.push(reverse(hash));
        buffers[isLeftNode ? "unshift" : "push"](reverse(data));
        hash = this.hashFn(this.concatenator(buffers));
        hash = reverse(this.hashFn(hash));
      } else {
        if (this.sortPairs) {
          if (Buffer$1.compare(hash, data) === -1) {
            buffers.push(hash, data);
            hash = this.hashFn(this.concatenator(buffers));
          } else {
            buffers.push(data, hash);
            hash = this.hashFn(this.concatenator(buffers));
          }
        } else {
          buffers.push(hash);
          buffers[isLeftNode ? "unshift" : "push"](data);
          hash = this.hashFn(this.concatenator(buffers));
        }
      }
    }
    return Buffer$1.compare(hash, root) === 0;
  }

  /**
   * verifyMultiProof
   * @desc Returns true if the multiproofs can connect the leaves to the Merkle root.
   * @param {Buffer} root - Merkle tree root
   * @param {Number[]} proofIndices - Leave indices for proof
   * @param {Buffer[]} proofLeaves - Leaf values at indices for proof
   * @param {Number} leavesCount - Count of original leaves
   * @param {Buffer[]} proof - Multiproofs given indices
   * @return {Boolean}
   * @example
   *```js
   *const leaves = tree.getLeaves()
   *const root = tree.getRoot()
   *const treeFlat = tree.getLayersFlat()
   *const leavesCount = leaves.length
   *const proofIndices = [2, 5, 6]
   *const proofLeaves = proofIndices.map(i => leaves[i])
   *const proof = tree.getMultiProof(treeFlat, indices)
   *const verified = tree.verifyMultiProof(root, proofIndices, proofLeaves, leavesCount, proof)
   *```
   */
  verifyMultiProof(root, proofIndices, proofLeaves, leavesCount, proof) {
    const isUneven = this.isUnevenTree();
    if (isUneven) {
      // TODO: combine these functions and simplify
      return this.verifyMultiProofForUnevenTree(root, proofIndices, proofLeaves, leavesCount, proof);
    }
    const depth = Math.ceil(Math.log2(leavesCount));
    root = this.bufferify(root);
    proofLeaves = proofLeaves.map(leaf => this.bufferify(leaf));
    proof = proof.map(leaf => this.bufferify(leaf));
    const tree = {};
    for (const [index, leaf] of this.zip(proofIndices, proofLeaves)) {
      // @ts-expect-error - issue from original code
      tree[2 ** depth + index] = leaf;
    }
    for (const [index, proofitem] of this.zip(this.getProofIndices(proofIndices, depth), proof)) {
      // @ts-expect-error - issue from original code
      tree[index] = proofitem;
    }
    let indexqueue = Object.keys(tree).map(value => Number(value)).sort((a, b) => a - b);
    indexqueue = indexqueue.slice(0, indexqueue.length - 1);
    let i = 0;
    while (i < indexqueue.length) {
      const index = indexqueue[i];
      if (index >= 2 && {}.hasOwnProperty.call(tree, index ^ 1)) {
        // @ts-expect-error - issue from original code
        let pair = [tree[index - index % 2], tree[index - index % 2 + 1]];
        if (this.sortPairs) {
          pair = pair.sort(Buffer$1.compare);
        }
        const hash = pair[1] ? this.hashFn(this.concatenator(pair)) : pair[0];
        // @ts-expect-error - issue from original code
        tree[index / 2 | 0] = hash;
        indexqueue.push(index / 2 | 0);
      }
      i += 1;
    }
    return !proofIndices.length ||
    // @ts-expect-error - issue from original code
    {}.hasOwnProperty.call(tree, 1) && tree[1].equals(root);
  }
  verifyMultiProofWithFlags(root, leaves, proofs, proofFlag) {
    root = this.bufferify(root);
    leaves = leaves.map(this.bufferify);
    proofs = proofs.map(this.bufferify);
    const leavesLen = leaves.length;
    const totalHashes = proofFlag.length;
    const hashes = [];
    let leafPos = 0;
    let hashPos = 0;
    let proofPos = 0;
    for (let i = 0; i < totalHashes; i++) {
      const bufA = proofFlag[i] ? leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++] : proofs[proofPos++];
      const bufB = leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++];
      const buffers = [bufA, bufB].sort(Buffer$1.compare);
      hashes[i] = this.hashFn(this.concatenator(buffers));
    }
    return Buffer$1.compare(hashes[totalHashes - 1], root) === 0;
  }
  verifyMultiProofForUnevenTree(root, indices, leaves, leavesCount, proof) {
    root = this.bufferify(root);
    leaves = leaves.map(leaf => this.bufferify(leaf));
    proof = proof.map(leaf => this.bufferify(leaf));
    const computedRoot = this.calculateRootForUnevenTree(indices, leaves, leavesCount, proof);
    return root.equals(computedRoot);
  }

  /**
   * getDepth
   * @desc Returns the tree depth (number of layers)
   * @return {Number}
   * @example
   *```js
   *const depth = tree.getDepth()
   *```
   */
  getDepth() {
    return this.getLayers().length - 1;
  }

  /**
   * getLayersAsObject
   * @desc Returns the layers as nested objects instead of an array.
   * @example
   *```js
   *const layersObj = tree.getLayersAsObject()
   *```
   */
  getLayersAsObject() {
    const layers = this.getLayers().map(layer => layer.map(value => this.bufferToHex(value, false)));
    const objs = [];
    for (let i = 0; i < layers.length; i++) {
      const arr = [];
      for (let j = 0; j < layers[i].length; j++) {
        const obj = {
          [layers[i][j]]: null
        };
        if (objs.length) {
          // @ts-expect-error - issue from original code
          obj[layers[i][j]] = {};
          const a = objs.shift();
          // @ts-expect-error - issue from original code
          const akey = Object.keys(a)[0];
          // @ts-expect-error - issue from original code
          obj[layers[i][j]][akey] = a[akey];
          if (objs.length) {
            const b = objs.shift();
            // @ts-expect-error - issue from original code
            const bkey = Object.keys(b)[0];
            // @ts-expect-error - issue from original code
            obj[layers[i][j]][bkey] = b[bkey];
          }
        }
        arr.push(obj);
      }
      objs.push(...arr);
    }
    return objs[0];
  }

  /**
   * resetTree
   * @desc Resets the tree by clearing the leaves and layers.
   * @example
   *```js
   *tree.resetTree()
   *```
   */
  resetTree() {
    this.leaves = [];
    this.layers = [];
  }

  /**
   * getPairNode
   * @desc Returns the node at the index for given layer.
   * @param {Buffer[]} layer - Tree layer
   * @param {Number} index - Index at layer.
   * @return {Buffer} - Node
   *
   *@example
   * ```js
   *const node = tree.getPairNode(layer, index)
   *```
   */
  getPairNode(layer, idx) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      // @ts-expect-error - issue from original code
      return null;
    }
  }

  /**
   * toTreeString
   * @desc Returns a visual representation of the merkle tree as a string.
   * @return {String}
   * @example
   *```js
   *console.log(tree.toTreeString())
   *```
   */
  toTreeString() {
    const obj = this.getLayersAsObject();
    return treeifyExports.asTree(obj, true, false);
  }

  /**
   * toString
   * @desc Returns a visual representation of the merkle tree as a string.
   * @example
   *```js
   *console.log(tree.toString())
   *```
   */
  toString() {
    return this.toTreeString();
  }
  isUnevenTree(treeLayers) {
    const depth = treeLayers?.length || this.getDepth();
    return !this.isPowOf2(depth);
  }
  isPowOf2(v) {
    return v && !(v & v - 1);
  }
  calculateRootForUnevenTree(leafIndices, leafHashes, totalLeavesCount, proofHashes) {
    const leafTuples = this.zip(leafIndices, leafHashes).sort((_ref2, _ref3) => {
      let [indexA] = _ref2;
      let [indexB] = _ref3;
      return indexA - indexB;
    });
    const leafTupleIndices = leafTuples.map(_ref4 => {
      let [index] = _ref4;
      return index;
    });
    const proofIndices = this.getProofIndicesForUnevenTree(leafTupleIndices, totalLeavesCount);
    let nextSliceStart = 0;
    const proofTuplesByLayers = [];
    for (let i = 0; i < proofIndices.length; i++) {
      const indices = proofIndices[i];
      const sliceStart = nextSliceStart;
      nextSliceStart += indices.length;
      proofTuplesByLayers[i] = this.zip(indices, proofHashes.slice(sliceStart, nextSliceStart));
    }
    const tree = [leafTuples];
    for (let layerIndex = 0; layerIndex < proofTuplesByLayers.length; layerIndex++) {
      const currentLayer = proofTuplesByLayers[layerIndex].concat(tree[layerIndex])
      // @ts-expect-error - issue from original code
      .sort((_ref5, _ref6) => {
        let [indexA] = _ref5;
        let [indexB] = _ref6;
        return indexA - indexB;
      })
      // @ts-expect-error - issue from original code
      .map(_ref7 => {
        let [, hash] = _ref7;
        return hash;
      });
      const s = tree[layerIndex].map(_ref8 => {
        let [layerIndex_] = _ref8;
        return layerIndex_;
      });
      const parentIndices = [...new Set(s.map(index => {
        if (index % 2 === 0) {
          return index / 2;
        }
        if (index % 2 === 0) {
          return (index + 1) / 2;
        }
        return (index - 1) / 2;
      }))];
      const parentLayer = [];
      for (let i = 0; i < parentIndices.length; i++) {
        const parentNodeTreeIndex = parentIndices[i];
        const bufA = currentLayer[i * 2];
        const bufB = currentLayer[i * 2 + 1];
        const hash = bufB ? this.hashFn(this.concatenator([bufA, bufB])) : bufA;
        parentLayer.push([parentNodeTreeIndex, hash]);
      }
      tree.push(parentLayer);
    }
    return tree[tree.length - 1][0][1];
  }
}

function abstractContractModelToLegacy(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot,
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    quantityLimitPerTransaction: model.maxClaimablePerWallet,
    waitTimeInSecondsBetweenClaims: model.waitTimeInSecondsBetweenClaims || 0
  };
}

function abstractContractModelToNew(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot,
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    quantityLimitPerWallet: model.maxClaimablePerWallet,
    metadata: model.metadata || ""
  };
}

/**
 * @internal
 * @param quantity - The quantity to convert
 * @param tokenDecimals - The token decimals to use
 */
function convertQuantityToBigNumber(quantity, tokenDecimals) {
  if (quantity === "unlimited") {
    return MaxUint256;
  } else {
    return parseUnits(quantity, tokenDecimals);
  }
}

async function parseSnapshotInputs(inputs) {
  const chunkSize = 25000;
  const chunks = Array.from({
    length: Math.ceil(inputs.length / chunkSize)
  }, (_, i) => inputs.slice(i * chunkSize, i * chunkSize + chunkSize));
  const results = [];
  const parsedChunks = await Promise.all(chunks.map(chunk => SnapshotInputSchema.parseAsync(chunk)));
  for (const chunk of parsedChunks) {
    results.push(...chunk);
  }
  return results;
}

// shard using the first 2 hex character of the address
// this splits the merkle tree into 256 shards
// shard files will be 00.json, 01.json, 02.json, ..., ff.json
const SHARD_NYBBLES = 2;
let SnapshotFormatVersion = /*#__PURE__*/function (SnapshotFormatVersion) {
  SnapshotFormatVersion[SnapshotFormatVersion["V1"] = 1] = "V1";
  SnapshotFormatVersion[SnapshotFormatVersion["V2"] = 2] = "V2";
  return SnapshotFormatVersion;
}({}); // address, maxClaimable, price, currencyAddress
class ShardedMerkleTree {
  constructor(storage, baseUri, originalEntriesUri, shardNybbles, tokenDecimals) {
    this.storage = storage;
    this.shardNybbles = shardNybbles;
    this.baseUri = baseUri;
    this.originalEntriesUri = originalEntriesUri;
    this.tokenDecimals = tokenDecimals;
    this.shards = {};
    this.trees = {};
  }
  static async fromUri(uri, storage) {
    try {
      const shardedMerkleTreeInfo = await storage.downloadJSON(uri);
      if (shardedMerkleTreeInfo.isShardedMerkleTree) {
        return ShardedMerkleTree.fromShardedMerkleTreeInfo(shardedMerkleTreeInfo, storage);
      }
    } catch (e) {
      return undefined;
    }
  }
  static async fromShardedMerkleTreeInfo(info, storage) {
    return new ShardedMerkleTree(storage, info.baseUri, info.originalEntriesUri, info.shardNybbles, info.tokenDecimals);
  }
  static hashEntry(entry, tokenDecimals, currencyDecimals, snapshotFormatVersion) {
    switch (snapshotFormatVersion) {
      case SnapshotFormatVersion.V1:
        return keccak256(["address", "uint256"], [entry.address, convertQuantityToBigNumber(entry.maxClaimable, tokenDecimals)]);
      case SnapshotFormatVersion.V2:
        return keccak256(["address", "uint256", "uint256", "address"], [entry.address, convertQuantityToBigNumber(entry.maxClaimable, tokenDecimals), convertQuantityToBigNumber(entry.price || "unlimited", currencyDecimals), entry.currencyAddress || AddressZero]);
    }
  }
  static async fetchAndCacheDecimals(cache, provider, currencyAddress) {
    if (!currencyAddress) {
      return 18;
    }
    // cache decimals for each currency to avoid refetching for every address
    let currencyDecimals = cache[currencyAddress];
    if (currencyDecimals === undefined) {
      const currencyMetadata = await fetchCurrencyMetadata(provider, currencyAddress);
      currencyDecimals = currencyMetadata.decimals;
      cache[currencyAddress] = currencyDecimals;
    }
    return currencyDecimals;
  }
  static async buildAndUpload(snapshotInput, tokenDecimals, provider, storage, snapshotFormatVersion) {
    let shardNybbles = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : SHARD_NYBBLES;
    const inputs = await parseSnapshotInputs(snapshotInput);

    // TODO Could also derive shardNybbles from input size
    const shards = {};
    for (const snapshotEntry of inputs) {
      const shard = snapshotEntry.address.slice(2, 2 + shardNybbles).toLowerCase();
      if (shards[shard] === undefined) {
        shards[shard] = [];
      }
      shards[shard].push(snapshotEntry);
    }
    const currencyDecimalMap = {};
    // create shard => subtree root map
    const subTrees = await Promise.all(Object.entries(shards).map(async _ref => {
      let [shard, entries] = _ref;
      return [shard, new MerkleTree(await Promise.all(entries.map(async entry => {
        // cache decimals for each currency to avoid refetching for every address
        const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
        return ShardedMerkleTree.hashEntry(entry, tokenDecimals, currencyDecimals, snapshotFormatVersion);
      })), keccak256$1, {
        sort: true
      }).getHexRoot()];
    }));
    const roots = Object.fromEntries(subTrees);
    // create master tree from shard => subtree root map
    const tree = new MerkleTree(Object.values(roots), keccak256$1, {
      sort: true
    });
    const shardsToUpload = [];
    for (const [shardId, entries] of Object.entries(shards)) {
      const data = {
        proofs: tree.getProof(roots[shardId]).map(value => "0x" + value.data.toString("hex")),
        entries
      };
      shardsToUpload.push({
        data: JSON.stringify(data),
        name: `${shardId}.json`
      });
    }
    const uris = await storage.uploadBatch(shardsToUpload);
    const baseUri = uris[0].slice(0, uris[0].lastIndexOf("/"));
    const originalEntriesUri = await storage.upload(inputs);
    const shardedMerkleInfo = {
      merkleRoot: tree.getHexRoot(),
      baseUri,
      originalEntriesUri,
      shardNybbles,
      tokenDecimals,
      isShardedMerkleTree: true
    };
    const masterUri = await storage.upload(shardedMerkleInfo);
    return {
      shardedMerkleInfo,
      uri: masterUri
    };
  }
  async getProof(address, provider, snapshotFormatVersion) {
    const shardId = address.slice(2, 2 + this.shardNybbles).toLowerCase();
    let shard = this.shards[shardId];
    const currencyDecimalMap = {};
    if (shard === undefined) {
      try {
        const uri = this.baseUri.endsWith("/") ? this.baseUri : `${this.baseUri}/`;
        shard = this.shards[shardId] = await this.storage.downloadJSON(`${uri}${shardId}.json`);
        const hashedEntries = await Promise.all(shard.entries.map(async entry => {
          // cache decimals for each currency to avoid refetching for every address
          const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
          return ShardedMerkleTree.hashEntry(entry, this.tokenDecimals, currencyDecimals, snapshotFormatVersion);
        }));
        this.trees[shardId] = new MerkleTree(hashedEntries, keccak256$1, {
          sort: true
        });
      } catch (e) {
        return null;
      }
    }
    const entry = shard.entries.find(i => i.address.toLowerCase() === address.toLowerCase());
    if (!entry) {
      return null;
    }
    const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
    const leaf = ShardedMerkleTree.hashEntry(entry, this.tokenDecimals, currencyDecimals, snapshotFormatVersion);
    const proof = this.trees[shardId].getProof(leaf).map(i => "0x" + i.data.toString("hex"));
    return SnapshotEntryWithProofSchema.parseAsync({
      ...entry,
      proof: proof.concat(shard.proofs)
    });
  }
  async getAllEntries() {
    try {
      return await this.storage.downloadJSON(this.originalEntriesUri);
    } catch (e) {
      console.warn("Could not fetch original snapshot entries", e);
      return [];
    }
  }
}

/**
 * @internal
 */
async function fetchSnapshotEntryForAddress(address, merkleRoot, merkleMetadata, provider, storage, snapshotFormatVersion) {
  if (!merkleMetadata) {
    return null;
  }
  const snapshotUri = merkleMetadata[merkleRoot];
  if (snapshotUri) {
    const raw = await storage.downloadJSON(snapshotUri);
    if (raw.isShardedMerkleTree && raw.merkleRoot === merkleRoot) {
      const merkleTree = await ShardedMerkleTree.fromShardedMerkleTreeInfo(raw, storage);
      return await merkleTree.getProof(address, provider, snapshotFormatVersion);
    }
    // legacy non-sharded, just fetch it all and filter out
    const snapshotData = await SnapshotSchema.parseAsync(raw);
    if (merkleRoot === snapshotData.merkleRoot) {
      return snapshotData.claims.find(c => c.address.toLowerCase() === address.toLowerCase()) || null;
    }
  }
  return null;
}

function legacyContractModelToAbstract(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot.toString(),
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    maxClaimablePerWallet: model.quantityLimitPerTransaction,
    waitTimeInSecondsBetweenClaims: model.waitTimeInSecondsBetweenClaims
  };
}

function newContractModelToAbstract(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot.toString(),
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    maxClaimablePerWallet: model.quantityLimitPerWallet,
    waitTimeInSecondsBetweenClaims: 0,
    metadata: model.metadata
  };
}

/**
 * @internal
 */
async function approveErc20Allowance(contractToApprove, currencyAddress, price, quantity, tokenDecimals) {
  const signer = contractToApprove.getSigner();
  const provider = contractToApprove.getProvider();
  const ERC20Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
  const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi, contractToApprove.options, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  const totalPrice = BigNumber.from(price).mul(BigNumber.from(quantity)).div(parseUnits("1", tokenDecimals));
  if (allowance.lt(totalPrice)) {
    await erc20.sendTransaction("approve", [spender, allowance.add(totalPrice)]);
  }
}

/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns  `overrides` and `proofs` as an object.
 */
async function prepareClaim(addressToClaim, quantity, activeClaimCondition, merkleMetadataFetcher, tokenDecimals, contractWrapper, storage, checkERC20Allowance, snapshotFormatVersion) {
  let maxClaimable = convertQuantityToBigNumber(activeClaimCondition.maxClaimablePerWallet, tokenDecimals);
  let proofs = [hexZeroPad([0], 32)];
  let priceInProof = activeClaimCondition.price; // the price to send to the contract in claim proofs
  let currencyAddressInProof = activeClaimCondition.currencyAddress;
  try {
    if (!activeClaimCondition.merkleRootHash.toString().startsWith(AddressZero)) {
      const snapshotEntry = await fetchSnapshotEntryForAddress(addressToClaim, activeClaimCondition.merkleRootHash.toString(), await merkleMetadataFetcher(), contractWrapper.getProvider(), storage, snapshotFormatVersion);
      if (snapshotEntry) {
        proofs = snapshotEntry.proof;
        // override only if not default values (unlimited for quantity, zero addr for currency)
        maxClaimable = snapshotEntry.maxClaimable === "unlimited" ? MaxUint256 : parseUnits(snapshotEntry.maxClaimable, tokenDecimals);
        priceInProof = snapshotEntry.price === undefined || snapshotEntry.price === "unlimited" ? MaxUint256 : await normalizePriceValue(contractWrapper.getProvider(), snapshotEntry.price, snapshotEntry.currencyAddress || AddressZero);
        currencyAddressInProof = snapshotEntry.currencyAddress || AddressZero;
      } else {
        // if no snapshot entry, and it's a v1 format (exclusive allowlist) then address can't claim
        if (snapshotFormatVersion === SnapshotFormatVersion.V1) {
          throw new Error("No claim found for this address");
        }
        // but if its snapshot v2 (override list behavior) then address can still claim with default settings
      }
    }
  } catch (e) {
    // have to handle the valid error case that we *do* want to throw on
    if (e?.message === "No claim found for this address") {
      throw e;
    }
    // other errors we wanna ignore and try to continue
    console.warn("failed to check claim condition merkle root hash, continuing anyways", e);
  }
  const overrides = (await contractWrapper.getCallOverrides()) || {};
  // the actual price to check allowance against
  // if proof price is unlimited, then we use the price from the claim condition
  // this mimics the contract behavior
  const pricePerToken = priceInProof.toString() !== MaxUint256.toString() ? priceInProof : activeClaimCondition.price;
  // same for currency address
  const currencyAddress = currencyAddressInProof !== AddressZero ? currencyAddressInProof : activeClaimCondition.currencyAddress;
  if (pricePerToken.gt(0)) {
    if (isNativeToken(currencyAddress)) {
      overrides["value"] = BigNumber.from(pricePerToken).mul(quantity).div(parseUnits("1", tokenDecimals));
    } else if (checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currencyAddress, pricePerToken, quantity, tokenDecimals);
    }
  }
  return {
    overrides,
    proofs,
    maxClaimable,
    price: pricePerToken,
    currencyAddress: currencyAddress,
    priceInProof,
    currencyAddressInProof
  };
}

/**
 * @internal
 */
const CurrencySchema = /* @__PURE__ */(() => z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number()
}))();

/**
 * @internal
 */
const CurrencyValueSchema = /* @__PURE__ */(() => CurrencySchema.extend({
  value: BigNumberSchema,
  displayValue: z.string()
}))();

/**
 * @internal
 */
const ClaimConditionMetadataSchema = /* @__PURE__ */(() => z.object({
  name: z.string().optional()
}).catchall(z.unknown()))();

/**
 * @internal
 */
const ClaimConditionInputSchema = /* @__PURE__ */(() => z.object({
  startTime: StartDateSchema,
  currencyAddress: z.string().default(NATIVE_TOKEN_ADDRESS),
  price: AmountSchema.default(0),
  maxClaimableSupply: QuantitySchema,
  maxClaimablePerWallet: QuantitySchema,
  waitInSeconds: BigNumberishSchema.default(0),
  merkleRootHash: BytesLikeSchema.default(hexZeroPad([0], 32)),
  snapshot: z.optional(SnapshotInputSchema).nullable(),
  metadata: ClaimConditionMetadataSchema.optional()
}))();

/**
 * @internal
 */
const ClaimConditionInputArray = /* @__PURE__ */(() => z.array(ClaimConditionInputSchema))();

/**
 * @internal
 */
const ClaimConditionOutputSchema = /* @__PURE__ */(() => ClaimConditionInputSchema.extend({
  availableSupply: QuantitySchema,
  currentMintSupply: QuantitySchema,
  currencyMetadata: CurrencyValueSchema.default({
    value: BigNumber.from("0"),
    displayValue: "0",
    symbol: "",
    decimals: 18,
    name: ""
  }),
  price: BigNumberSchema,
  waitInSeconds: BigNumberSchema,
  startTime: BigNumberSchema.transform(n => new Date(n.toNumber() * 1000)),
  snapshot: SnapshotInputSchema.optional().nullable()
}))();

/**
 * Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS
 * @param snapshotInput - the list of addresses to hash
 * @param tokenDecimals - the token decimals
 * @param provider - the provider to use
 * @param storage - the storage to upload to
 * @param snapshotFormatVersion - the snapshot format version
 * @returns The generated snapshot and URI
 * @internal
 */
async function createSnapshot(snapshotInput, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const input = await parseSnapshotInputs(snapshotInput);
  const addresses = input.map(i => i.address);
  const hasDuplicates = new Set(addresses).size < addresses.length;
  if (hasDuplicates) {
    throw new DuplicateLeafsError();
  }
  const tree = await ShardedMerkleTree.buildAndUpload(input, tokenDecimals, provider, storage, snapshotFormatVersion);
  return {
    merkleRoot: tree.shardedMerkleInfo.merkleRoot,
    snapshotUri: tree.uri
  };
}

function compare(a, b) {
  const left = BigNumber.from(a);
  const right = BigNumber.from(b);
  if (left.eq(right)) {
    return 0;
  } else if (left.gt(right)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * @internal
 * Decorates claim conditions with merkle roots from snapshots if present
 * @param claimConditionInputs - The claim conditions to process
 * @param tokenDecimals - The token decimals to use
 * @param provider - The provider to use
 * @param storage - The storage to use
 * @param snapshotFormatVersion - The snapshot format version to use
 */
async function processSnapshotData(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const snapshotInfos = [];
  const inputsWithSnapshots = await Promise.all(claimConditionInputs.map(async conditionInput => {
    // check snapshots and upload if provided
    if (conditionInput.snapshot && conditionInput.snapshot.length > 0) {
      const snapshotInfo = await createSnapshot(conditionInput.snapshot, tokenDecimals, provider, storage, snapshotFormatVersion);
      snapshotInfos.push(snapshotInfo);
      conditionInput.merkleRootHash = snapshotInfo.merkleRoot;
    } else {
      // if no snapshot is passed or empty, reset the merkle root
      conditionInput.merkleRootHash = hexZeroPad([0], 32);
    }
    // fill condition with defaults values if not provided
    return conditionInput;
  }));
  return {
    inputsWithSnapshots,
    snapshotInfos
  };
}

/**
 * Converts a local SDK model to contract model
 * @param c - The condition input
 * @param tokenDecimals - The token decimals to use
 * @param provider - The provider to use
 * @param storage - The storage to use
 * @internal
 */
async function convertToContractModel(c, tokenDecimals, provider, storage) {
  const currency = c.currencyAddress === AddressZero ? NATIVE_TOKEN_ADDRESS : c.currencyAddress;
  const maxClaimableSupply = convertQuantityToBigNumber(c.maxClaimableSupply, tokenDecimals);
  const maxClaimablePerWallet = convertQuantityToBigNumber(c.maxClaimablePerWallet, tokenDecimals);
  let metadataOrUri;
  if (c.metadata) {
    if (typeof c.metadata === "string") {
      metadataOrUri = c.metadata;
    } else {
      metadataOrUri = await storage.upload(c.metadata);
    }
  }
  return {
    startTimestamp: c.startTime,
    maxClaimableSupply,
    supplyClaimed: 0,
    maxClaimablePerWallet,
    pricePerToken: await normalizePriceValue(provider, c.price, currency),
    currency,
    merkleRoot: c.merkleRootHash.toString(),
    waitTimeInSecondsBetweenClaims: c.waitInSeconds || 0,
    metadata: metadataOrUri
  };
}

/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs - The claim conditions to process
 * @param tokenDecimals - The token decimals to use
 * @param provider - The provider to use
 * @param storage - The storage to use
 * @param snapshotFormatVersion - The snapshot format version to use
 * @internal
 */
async function processClaimConditionInputs(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const {
    inputsWithSnapshots,
    snapshotInfos
  } = await processSnapshotData(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion);
  const parsedInputs = await ClaimConditionInputArray.parseAsync(inputsWithSnapshots);
  // Convert processed inputs to the format the contract expects, and sort by timestamp
  const sortedConditions = (await Promise.all(parsedInputs.map(c => convertToContractModel(c, tokenDecimals, provider, storage)))).sort((a, b) => {
    return compare(a.startTimestamp, b.startTimestamp);
  });
  return {
    snapshotInfos,
    sortedConditions
  };
}

/**
 * @internal
 * @param merkleRoot - The merkle root to fetch the snapshot for
 * @param merkleMetadata - The merkle metadata to use
 * @param storage - The storage to use
 */
async function fetchSnapshot(merkleRoot, merkleMetadata, storage) {
  if (!merkleMetadata) {
    return null;
  }
  const snapshotUri = merkleMetadata[merkleRoot];
  if (snapshotUri) {
    const raw = await storage.downloadJSON(snapshotUri);
    if (raw.isShardedMerkleTree && raw.merkleRoot === merkleRoot) {
      const smt = await ShardedMerkleTree.fromUri(snapshotUri, storage);
      return smt?.getAllEntries() || null;
    } else {
      const snapshotData = await SnapshotSchema.parseAsync(raw);
      if (merkleRoot === snapshotData.merkleRoot) {
        return snapshotData.claims.map(claim => ({
          address: claim.address,
          maxClaimable: claim.maxClaimable,
          price: claim.price,
          currencyAddress: claim.currencyAddress
        }));
      }
    }
  }
  return null;
}

/**
 * @internal
 * @param bn - The big number to convert
 * @param tokenDecimals - The token decimals to use
 */
function convertToReadableQuantity(bn, tokenDecimals) {
  if (bn.toString() === MaxUint256.toString()) {
    return "unlimited";
  } else {
    return formatUnits(bn, tokenDecimals);
  }
}

/**
 * Transforms a contract model to local model
 * @param pm - The contract model to transform
 * @param tokenDecimals - The token decimals to use
 * @param provider - The provider to use
 * @param merkleMetadata - The merkle metadata to use
 * @param storage - The storage to use
 * @param shouldDownloadSnapshot - Whether to download the snapshot
 * @internal
 */
async function transformResultToClaimCondition(pm, tokenDecimals, provider, merkleMetadata, storage, shouldDownloadSnapshot) {
  const cv = await fetchCurrencyValue(provider, pm.currency, pm.pricePerToken);
  const maxClaimableSupply = convertToReadableQuantity(pm.maxClaimableSupply, tokenDecimals);
  const maxClaimablePerWallet = convertToReadableQuantity(pm.maxClaimablePerWallet, tokenDecimals);
  const availableSupply = convertToReadableQuantity(BigNumber.from(pm.maxClaimableSupply).sub(pm.supplyClaimed), tokenDecimals);
  const currentMintSupply = convertToReadableQuantity(pm.supplyClaimed, tokenDecimals);
  let resolvedMetadata;
  if (pm.metadata) {
    resolvedMetadata = await storage.downloadJSON(pm.metadata);
  }
  return ClaimConditionOutputSchema.parseAsync({
    startTime: pm.startTimestamp,
    maxClaimableSupply,
    maxClaimablePerWallet,
    currentMintSupply,
    availableSupply,
    waitInSeconds: pm.waitTimeInSecondsBetweenClaims?.toString(),
    price: BigNumber.from(pm.pricePerToken),
    currency: pm.currency,
    currencyAddress: pm.currency,
    currencyMetadata: cv,
    merkleRootHash: pm.merkleRoot,
    snapshot: shouldDownloadSnapshot ? await fetchSnapshot(pm.merkleRoot, merkleMetadata, storage) : undefined,
    metadata: resolvedMetadata
  });
}

/**
 * @internal
 * @param index - The index of the condition to update
 * @param claimConditionInput - The input claim condition to update
 * @param existingConditions - The existing claim conditions
 */
async function updateExistingClaimConditions(index, claimConditionInput, existingConditions) {
  if (index >= existingConditions.length) {
    throw Error(`Index out of bounds - got index: ${index} with ${existingConditions.length} conditions`);
  }
  // merge input with existing claim condition
  const priceDecimals = existingConditions[index].currencyMetadata.decimals;
  const priceInWei = existingConditions[index].price;
  const priceInTokens = formatUnits(priceInWei, priceDecimals);

  // merge existing (output format) with incoming (input format)
  const newConditionParsed = await ClaimConditionInputSchema.parseAsync({
    ...existingConditions[index],
    price: priceInTokens,
    ...claimConditionInput
  });

  // convert to output claim condition
  const mergedConditionOutput = await ClaimConditionOutputSchema.parseAsync({
    ...newConditionParsed,
    price: priceInWei
  });
  return existingConditions.map((existingOutput, i) => {
    let newConditionAtIndex;
    if (i === index) {
      newConditionAtIndex = mergedConditionOutput;
    } else {
      newConditionAtIndex = existingOutput;
    }
    const formattedPrice = formatUnits(newConditionAtIndex.price, priceDecimals);
    return {
      ...newConditionAtIndex,
      price: formattedPrice // manually transform back to input price type
    };
  });
}

let ClaimEligibility = /*#__PURE__*/function (ClaimEligibility) {
  ClaimEligibility["NotEnoughSupply"] = "There is not enough supply to claim.";
  ClaimEligibility["AddressNotAllowed"] = "This address is not on the allowlist.";
  ClaimEligibility["WaitBeforeNextClaimTransaction"] = "Not enough time since last claim transaction. Please wait.";
  ClaimEligibility["ClaimPhaseNotStarted"] = "Claim phase has not started yet.";
  ClaimEligibility["AlreadyClaimed"] = "You have already claimed the token.";
  ClaimEligibility["WrongPriceOrCurrency"] = "Incorrect price or currency.";
  ClaimEligibility["OverMaxClaimablePerWallet"] = "Cannot claim more than maximum allowed quantity.";
  ClaimEligibility["NotEnoughTokens"] = "There are not enough tokens in the wallet to pay for the claim.";
  ClaimEligibility["NoActiveClaimPhase"] = "There is no active claim phase at the moment. Please check back in later.";
  ClaimEligibility["NoClaimConditionSet"] = "There is no claim condition set.";
  ClaimEligibility["NoWallet"] = "No wallet connected.";
  ClaimEligibility["Unknown"] = "No claim conditions found.";
  return ClaimEligibility;
}({});

function resolveOrGenerateId(requestUId) {
  if (requestUId === undefined) {
    const buffer = Buffer.alloc(16);
    v4({}, buffer);
    return hexlify(toUtf8Bytes(buffer.toString("hex")));
  } else {
    return hexlify(requestUId);
  }
}

/**
 * @internal
 */
const BaseSignaturePayloadInput = /* @__PURE__ */(() => z.object({
  to: AddressOrEnsSchema.refine(address => address.toLowerCase() !== AddressZero, {
    message: "Cannot create payload to mint to zero address"
  }),
  price: AmountSchema.default(0),
  currencyAddress: AddressSchema.default(NATIVE_TOKEN_ADDRESS),
  mintStartTime: StartDateSchema,
  mintEndTime: EndDateSchema,
  uid: z.string().optional().transform(arg => resolveOrGenerateId(arg)),
  primarySaleRecipient: AddressOrEnsSchema.default(AddressZero)
}))();

/**
 * @internal
 */
const Signature20PayloadInput = /* @__PURE__ */(() => BaseSignaturePayloadInput.extend({
  quantity: AmountSchema
}))();

/**
 * @internal
 */
const Signature20PayloadOutput = /* @__PURE__ */(() => Signature20PayloadInput.extend({
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
}))();

/**
 * @internal
 */
const Signature721PayloadInput = /* @__PURE__ */(() => BaseSignaturePayloadInput.extend({
  metadata: NFTInputOrUriSchema,
  royaltyRecipient: z.string().default(AddressZero),
  royaltyBps: BasisPointsSchema.default(0)
}))();

/**
 * @internal
 */
const Signature721PayloadOutput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  uri: z.string(),
  royaltyBps: BigNumberSchema,
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
}))();

/**
 * @internal
 */
const Signature1155PayloadInput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  quantity: BigNumberishSchema
}))();

/**
 * @internal
 */
const Signature1155PayloadInputWithTokenId = /* @__PURE__ */(() => Signature1155PayloadInput.extend({
  tokenId: BigNumberishSchema
}))();

/**
 * @internal
 */
const Signature1155PayloadOutput = /* @__PURE__ */(() => Signature721PayloadOutput.extend({
  tokenId: BigNumberSchema,
  quantity: BigNumberSchema
}))();

/**
 * @internal
 */
const Signature721WithQuantityInput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  quantity: BigNumberSchema.default(1)
}))();

/**
 * @internal
 */
const Signature721WithQuantityOutput = /* @__PURE__ */(() => Signature721PayloadOutput.extend({
  quantity: BigNumberSchema.default(1)
}))();

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

const MintRequest20 = [{
  name: "to",
  type: "address"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest1155 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "tokenId",
  type: "uint256"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721withQuantity = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var deepEqual = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

export { BaseSignaturePayloadInput as B, ClaimEligibility as C, MintRequest1155 as M, Signature1155PayloadInputWithTokenId as S, approveErc20Allowance as a, Signature1155PayloadOutput as b, convertQuantityToBigNumber as c, deepEqual as d, abstractContractModelToLegacy as e, fetchSnapshotEntryForAddress as f, abstractContractModelToNew as g, prepareClaim as h, SnapshotFormatVersion as i, Signature721WithQuantityInput as j, Signature721WithQuantityOutput as k, legacyContractModelToAbstract as l, MintRequest721 as m, newContractModelToAbstract as n, MintRequest721withQuantity as o, processClaimConditionInputs as p, Signature20PayloadInput as q, Signature20PayloadOutput as r, MintRequest20 as s, transformResultToClaimCondition as t, updateExistingClaimConditions as u, resolveOrGenerateId as v };
//# sourceMappingURL=index-6571f75f.js.map
