import { a2 as FEATURE_PLATFORM_FEE, a3 as CommonPlatformFeeSchema, y as buildTransactionFunction, T as Transaction } from './App-40ca2dcc.js';

/**
 * Handle platform fees and recipients
 * @remarks Configure platform fees for a contract, which can be applied on certain paid transactions
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const feeInfo = await contract.platformFees.get();
 * await contract.platformFees.set({
 *   platform_fee_basis_points: 100, // 1% fee
 *   platform_fee_recipient: "0x..." // the fee recipient
 * })
 * ```
 * @public
 */
class ContractPlatformFee {
  featureName = FEATURE_PLATFORM_FEE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the platform fee recipient and basis points
   *
   * @example
   * ```javascript
   * const feeInfo = await contract.platformFees.get();
   * console.log(feeInfo.platform_fee_recipient);
   * console.log(feeInfo.platform_fee_basis_points);
   * ```
   * @twfeature PlatformFee
   */
  async get() {
    const [platformFeeRecipient, platformFeeBps] = await this.contractWrapper.read("getPlatformFeeInfo", []);
    return CommonPlatformFeeSchema.parseAsync({
      platform_fee_recipient: platformFeeRecipient,
      platform_fee_basis_points: platformFeeBps
    });
  }

  /**
   * Set the platform fee recipient and basis points
   *
   * @example
   * ```javascript
   * await contract.platformFees.set({
   *   platform_fee_basis_points: 100, // 1% fee
   *   platform_fee_recipient: "0x..." // the fee recipient
   * })
   * ```
   *
   * @param platformFeeInfo - the platform fee information
   * @twfeature PlatformFee
   */
  set = /* @__PURE__ */buildTransactionFunction(async platformFeeInfo => {
    const parsed = await CommonPlatformFeeSchema.parseAsync(platformFeeInfo);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPlatformFeeInfo",
      args: [parsed.platform_fee_recipient, parsed.platform_fee_basis_points]
    });
  });
}

export { ContractPlatformFee as C };
//# sourceMappingURL=contract-platform-fee-037b0cbb.esm-3f86947a.js.map
