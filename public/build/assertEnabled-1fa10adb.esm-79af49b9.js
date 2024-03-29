import { G as ExtensionNotImplementedError, ak as z, B as BigNumber } from './App-40ca2dcc.js';

const RawDateSchema = /* @__PURE__ */(() => z.union([z.date().transform(i => {
  return BigNumber.from(Math.floor(i.getTime() / 1000));
}), z.number().transform(i => {
  return BigNumber.from(i);
})]))();

/**
 * Default to now
 */
const StartDateSchema = /* @__PURE__ */(() => RawDateSchema.default(new Date(0)))();

/**
 * Default to 10 years from now
 */
const EndDateSchema = /* @__PURE__ */(() => RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10)))();

/**
 * Checks whether the given DetectableFeature is defined
 * @internal
 * @param namespace - The namespace to check
 * @param feature - The corresponding feature
 */
function assertEnabled(namespace, feature) {
  if (!namespace) {
    throw new ExtensionNotImplementedError(feature);
  }
  return namespace;
}

export { EndDateSchema as E, RawDateSchema as R, StartDateSchema as S, assertEnabled as a };
//# sourceMappingURL=assertEnabled-1fa10adb.esm-79af49b9.js.map
