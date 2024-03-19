import { ar as isNativeToken, r as ContractWrapper, ak as z, aw as FileOrBufferOrStringSchema, ax as HexColor, ay as BigNumberTransformSchema$1 } from './App-40ca2dcc.js';

const PropertiesInput = /* @__PURE__ */(() => z.object({}).catchall(z.union([BigNumberTransformSchema$1, z.unknown()])))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => z.union([z.array(PropertiesInput), PropertiesInput]).optional().nullable())();

/**
 * @internal
 */
const BasicNFTInput = /* @__PURE__ */(() => z.object({
  name: z.union([z.string(), z.number()]).optional().nullable(),
  description: z.string().nullable().optional().nullable(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional().nullable()
}))();

/**
 * @internal
 */
const CommonNFTInput = /* @__PURE__ */(() => BasicNFTInput.extend({
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  background_color: HexColor.optional().nullable(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(z.union([BigNumberTransformSchema$1, z.unknown()])))();

/**
 * @internal
 */
const NFTInputOrUriSchema = /* @__PURE__ */(() => z.union([CommonNFTInput, z.string()]))();

/**
 * @internal
 */
const CommonNFTOutput = /* @__PURE__ */(() => CommonNFTInput.extend({
  id: z.string(),
  uri: z.string(),
  image: z.string().nullable().optional(),
  external_url: z.string().nullable().optional(),
  animation_url: z.string().nullable().optional()
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
 * @internal
 */
async function setErc20Allowance(contractToApprove, value, currencyAddress, overrides) {
  if (isNativeToken(currencyAddress)) {
    overrides["value"] = value;
  } else {
    const ERC20Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
    const signer = contractToApprove.getSigner();
    const provider = contractToApprove.getProvider();
    const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi, contractToApprove.options, contractToApprove.storage);
    const owner = await contractToApprove.getSignerAddress();
    const spender = contractToApprove.address;
    const allowance = await erc20.read("allowance", [owner, spender]);
    if (allowance.lt(value)) {
      // approve overrides the previous allowance, set it to the minimum required for this tx
      await erc20.sendTransaction("approve", [spender, value]);
    }
    return overrides;
  }
}

export { BasicNFTInput as B, CommonNFTInput as C, NFTInputOrUriSchema as N, CommonNFTOutput as a, setErc20Allowance as s };
//# sourceMappingURL=setErc20Allowance-41d4cdc2.esm-dfce2b78.js.map