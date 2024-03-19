import { a7 as FEATURE_PRIMARY_SALE, y as buildTransactionFunction, T as Transaction } from './App-40ca2dcc.js';

/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.sales.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
class ContractPrimarySale {
  featureName = FEATURE_PRIMARY_SALE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the primary sale recipient
   * @returns The wallet address.
   * @example
   * ```javascript
   * const salesRecipient = await contract.sales.getRecipient();
   * ```
   * @public
   * @twfeature PrimarySale
   */
  async getRecipient() {
    const result = await this.contractWrapper.read("primarySaleRecipient", []);
    return result;
  }

  /**
   * Set the primary sale recipient
   * @param recipient - the wallet address
   * @example
   * ```javascript
   * await contract.sales.setRecipient(recipientWalletAddress);
   * ```
   * @public
   * @twfeature PrimarySale
   */
  setRecipient = /* @__PURE__ */buildTransactionFunction(async recipient => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPrimarySaleRecipient",
      args: [recipient]
    });
  });
}

export { ContractPrimarySale as C };
//# sourceMappingURL=contract-sales-c64cd670.esm-d409be9d.js.map
