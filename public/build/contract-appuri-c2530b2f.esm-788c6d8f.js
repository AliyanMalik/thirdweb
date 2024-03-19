import { z as isExtensionEnabled, F as FEATURE_METADATA, E as fetchContractMetadataFromAddress, y as buildTransactionFunction, T as Transaction, G as ExtensionNotImplementedError, H as EventType, I as formatEther, J as formatUnits, K as FEATURE_APPURI, L as replaceGatewayUrlWithScheme } from './App-40ca2dcc.js';

/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper - The contract wrapper to check
 * @param featureName - The feature name to check
 */
function detectContractFeature(contractWrapper, featureName) {
  const b = isExtensionEnabled(contractWrapper.abi, featureName, contractWrapper.extensions);
  return b;
}

/**
 * @internal
 * @param contractWrapper - The contract wrapper to check
 * @param functionName - The function name to check
 */
function hasFunction(functionName, contractWrapper) {
  return functionName in contractWrapper.readContract.functions;
}

/**
 * @internal
 */

/**
 * Handles metadata for a Contract
 * @remarks Read and update metadata for this contract
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const metadata = await contract.metadata.get();
 * await contract.metadata.set({
 *   name: "My Contract",
 *   description: "My contract description"
 * })
 * ```
 * @contract
 * @public
 */
class ContractMetadata {
  featureName = FEATURE_METADATA.name;
  constructor(contractWrapper, schema, storage) {
    this.contractWrapper = contractWrapper;
    this.schema = schema;
    this.storage = storage;
  }
  /**
   * @internal
   */
  parseOutputMetadata(metadata) {
    return this.schema.output.parseAsync(metadata);
  }

  /**
   * @internal
   */
  parseInputMetadata(metadata) {
    return this.schema.input.parseAsync(metadata);
  }
  /**
   * Get the metadata of this contract
   * @remarks Get the metadata of a contract
   * @example
   * ```javascript
   * const metadata = await contract.metadata.get();
   * console.log(metadata);
   * ```
   * @public
   * @returns The metadata of the given contract
   * @twfeature ContractMetadata
   */
  async get() {
    let data;
    if (this.supportsContractMetadata(this.contractWrapper)) {
      const uri = await this.contractWrapper.read("contractURI", []);
      if (uri && uri.includes("://")) {
        data = await this.storage.downloadJSON(uri);
      }
    }
    if (!data) {
      try {
        // try fetching metadata from bytecode and / or contract itself
        let contractName;
        try {
          if (hasFunction("name", this.contractWrapper)) {
            contractName = await this.contractWrapper.read("name", []);
          }
        } catch (err) {
          // no-op
        }
        let contractSymbol;
        try {
          if (hasFunction("symbol", this.contractWrapper)) {
            contractSymbol = await this.contractWrapper.read("symbol", []);
          }
        } catch (err) {
          // no-op
        }
        let publishedMetadata;
        try {
          publishedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.address, this.contractWrapper.getProvider(), this.storage, this.contractWrapper.options);
        } catch (err) {}
        data = {
          name: contractName || publishedMetadata?.name,
          symbol: contractSymbol,
          description: publishedMetadata?.info.title
        };
      } catch (e) {
        throw new Error("Could not fetch contract metadata");
      }
    }
    return this.parseOutputMetadata(data);
  }

  /**
   * Set the metadata of this contract
   * @remarks OVERWRITE the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.set({
   *   name: "My Contract",
   *   description: "My contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to set
   * @twfeature ContractMetadata
   */
  set = /* @__PURE__ */buildTransactionFunction(async metadata => {
    const uri = await this._parseAndUploadMetadata(metadata);
    const wrapper = this.contractWrapper;
    if (this.supportsContractMetadata(wrapper)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setContractURI",
        args: [uri],
        parse: receipt => {
          return {
            receipt,
            data: this.get
          };
        }
      });
    } else {
      throw new ExtensionNotImplementedError(FEATURE_METADATA);
    }
  });

  /**
   * Update the metadata of a contract
   * @remarks Update the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.update({
   *   description: "My new contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to update
   * @twfeature ContractMetadata
   * */
  update = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return await this.set.prepare({
      ...(await this.get()),
      ...metadata
    });
  });

  /**
   *
   * @internal
   * @param metadata - the metadata to set
   * @returns
   */
  async _parseAndUploadMetadata(metadata) {
    const parsedMetadata = await this.parseInputMetadata(metadata);
    return this.storage.upload(parsedMetadata);
  }
  supportsContractMetadata(contractWrapper) {
    return detectContractFeature(contractWrapper, "ContractMetadata");
  }
}

/**
 * Listen to Contract events in real time
 * @contract
 * @public
 */
class ContractEvents {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Subscribe to transactions in this contract.
   * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
   * @example
   * ```javascript
   * contract.events.addTransactionListener((event) => {
   *   console.log(event);
   * }
   * ```
   * @param listener - the callback function that will be called on every transaction
   * @public
   */
  addTransactionListener(listener) {
    this.contractWrapper.addListener(EventType.Transaction, listener);
  }

  /**
   * Remove a transaction listener
   * @remarks Remove a listener that was added with addTransactionListener
   * @example
   * ```javascript
   * contract.events.removeTransactionListener((event) => {
   *  console.log(event);
   * }
   * ```
   * @param listener - the callback function to remove
   * @public
   */
  removeTransactionListener(listener) {
    this.contractWrapper.off(EventType.Transaction, listener);
  }

  /**
   * Subscribe to contract events
   * @remarks You can add a listener for any contract event to run a function when
   * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
   * you could do the following:
   * @example
   * ```javascript
   * contract.events.addEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the callback function that will be called on every new event
   * @returns A function to un-subscribe from the event
   */
  addEventListener(
  // eslint-disable-next-line @typescript-eslint/ban-types
  eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    const address = this.contractWrapper.address;
    const filter = {
      address,
      topics: [this.contractWrapper.readContract.interface.getEventTopic(event)]
    };
    const wrappedListener = log => {
      const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
      listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
    };
    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Listen to all events emitted from this contract
   *
   * @example
   * ```javascript
   * contract.events.listenToAllEvents((event) => {
   *   console.log(event.eventName) // the name of the emitted event
   *   console.log(event.data) // event payload
   * }
   * ```
   * @public
   * @param listener - the callback function that will be called on every new event
   * @returns A function that can be called to stop listening to events
   */
  listenToAllEvents(listener) {
    const address = this.contractWrapper.address;
    const filter = {
      address
    };
    const wrappedListener = log => {
      try {
        const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
        listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
      } catch (e) {
        console.error("Could not parse event:", log, e);
      }
    };
    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Remove an event listener from this contract
   * @remarks Remove a listener that was added with addEventListener
   * @example
   * ```javascript
   * contract.events.removeEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the listener to unregister
   */
  removeEventListener(
  // eslint-disable-next-line @typescript-eslint/ban-types
  eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    this.contractWrapper.readContract.off(event.name, listener);
  }

  /**
   * Remove all listeners on this contract
   * @remarks Remove all listeners from a contract
   * @example
   * ```javascript
   * contract.events.removeAllListeners();
   * ```
   * @public
   */
  removeAllListeners() {
    this.contractWrapper.readContract.removeAllListeners();
    const address = this.contractWrapper.address;
    const filter = {
      address
    };
    this.contractWrapper.getProvider().removeAllListeners(filter);
  }

  /**
   * Get All Events
   * @remarks Get a list of all the events emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getAllEvents(filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
   * @returns The event objects of the events emitted with event names and data for each event
   */
  async getAllEvents() {
    let filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const events = await this.contractWrapper.readContract.queryFilter({}, filters.fromBlock, filters.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }

  /**
   * Get Events
   * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // The name of the event to get logs for
   * const eventName = "Transfer";
   *
   * // Optionally pass in options to limit the blocks from which events are retrieved
   * const options = {
   *   fromBlock: 0,
   *   toBlock: 1000000, // can also pass "latest"
   *   order: "desc",
   *   // Configure event filters (filter on indexed event parameters)
   *   filters: {
   *     from: "0x...",
   *     to: "0x..."
   *   }
   * };
   *
   * const events = await contract.events.getEvents(eventName, options);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param eventName - The name of the event to get logs for
   * @param options - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryOptions
   * @returns The requested event objects with event data
   */
  async getEvents(eventName) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const eventInterface = this.contractWrapper.readContract.interface.getEvent(eventName);
    const args = options.filters ? eventInterface.inputs.map(e => options.filters[e.name]) : [];
    const filter = this.contractWrapper.readContract.filters[eventInterface.name](...args);
    const events = await this.contractWrapper.readContract.queryFilter(filter, options.fromBlock, options.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return options.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }
  parseEvents(events) {
    return events.map(e => {
      const transaction = Object.fromEntries(Object.entries(e).filter(a => typeof a[1] !== "function" && a[0] !== "args"));
      if (e.args) {
        const entries = Object.entries(e.args);
        const args = entries.slice(entries.length / 2, entries.length);
        const data = {};
        for (const [key, value] of args) {
          data[key] = value;
        }
        return {
          eventName: e.event || "",
          data: data,
          transaction
        };
      }
      return {
        eventName: e.event || "",
        data: {},
        transaction
      };
    });
  }
  toContractEvent(event, args, rawLog) {
    const transaction = Object.fromEntries(Object.entries(rawLog).filter(a => typeof a[1] !== "function" && a[0] !== "args"));
    const results = {};
    event.inputs.forEach((param, index) => {
      if (Array.isArray(args[index])) {
        const components = param.components;
        if (components) {
          const arr = args[index];
          if (param.type === "tuple[]") {
            // tuple[]
            const objArray = [];
            for (let i = 0; i < arr.length; i++) {
              const tuple = arr[i];
              const obj = {};
              for (let j = 0; j < components.length; j++) {
                const name = components[j].name;
                obj[name] = tuple[j];
              }
              objArray.push(obj);
            }
            results[param.name] = objArray;
          } else {
            // simple tuple
            const obj = {};
            for (let i = 0; i < components.length; i++) {
              const name = components[i].name;
              obj[name] = arr[i];
            }
            results[param.name] = obj;
          }
        }
      } else {
        results[param.name] = args[index];
      }
    });
    return {
      eventName: event.name,
      data: results,
      transaction
    };
  }
}

/**
 * Estimates the gas cost of Contract calls
 * @public
 */
class GasCostEstimator {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Estimates the cost of gas in native token of the current chain
   * Pass in the same parameters as the contract's function.
   * @remarks Estimate the cost of gas in native token of the current chain
   * @example
   * ```javascript
   * const costOfClaim = await nftDrop?.estimator.gasCostOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns The estimated price in native currency (ETH, MATIC, etc) of calling this function
   * @public
   */
  async gasCostOf(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn, args) {
    const [price, gasUnits] = await Promise.all([this.contractWrapper.getProvider().getGasPrice(), this.contractWrapper.estimateGas(fn, args)]);
    return formatEther(gasUnits.mul(price));
  }

  /**
   * Estimates the gas limit of a transaction
   * Pass in the same parameters as the contract's function.
   * @remarks Estimates the gas limit of a transaction
   * @example
   * ```javascript
   * const gasLimitOfClaim = await nftDrop?.estimator.gasLimitOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns The estimated gas limit of the transaction
   * @public
   */
  async gasLimitOf(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn, args) {
    return this.contractWrapper.estimateGas(fn, args);
  }

  /**
   * Returns the current gas price in gwei
   * @remarks Get the current gas price in gwei
   * @example
   * ```javascript
   * const gasCostInGwei = await contract.estimator.currentGasPriceInGwei();
   * ```
   * @returns The current gas price in gwei
   * @public
   */
  async currentGasPriceInGwei() {
    const price = await this.contractWrapper.getProvider().getGasPrice();
    return formatUnits(price, "gwei");
  }
}

/**
 * Have an official Application URI for this contract.
 * @remarks Configure an official Application URI for this contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const appURI = await contract.app.get();
 * appURI = "ipfs://some_ipfs_hash";
 *
 * await contract.app.set(appURI)
 * ```
 * @public
 */
class ContractAppURI {
  featureName = FEATURE_APPURI.name;
  constructor(contractWrapper, metadata, storage) {
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
    this.storage = storage;
  }

  /**
   * Get App URI
   * @returns The appURI (typically an IPFS hash)
   * @example
   * ```javascript
   * const appURI = await contract.app.get();
   * console.log(appURI) // "ipfs://some_ipfs_hash";
   * ```
   * @twfeature AppURI
   */
  async get() {
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return await this.contractWrapper.read("appURI", []);
    }
    return replaceGatewayUrlWithScheme((await this.metadata.get()).app_uri || "", this.storage.getGatewayUrls());
  }

  /**
   * Set App URI
   * @param appURI - the uri to set (typically an IPFS hash)
   * @example
   * ```javascript
   * const appURI = "ipfs://some_ipfs_hash";
   * await contract.app.set(appURI);
   * ```
   * @twfeature AppURI
   */
  set = /* @__PURE__ */buildTransactionFunction(async appURI => {
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setAppURI",
        args: [appURI]
      });
    }
    return await this.metadata.update.prepare({
      app_uri: appURI
    });
  });
}

export { ContractMetadata as C, GasCostEstimator as G, ContractAppURI as a, ContractEvents as b, detectContractFeature as d, hasFunction as h };
//# sourceMappingURL=contract-appuri-c2530b2f.esm-788c6d8f.js.map