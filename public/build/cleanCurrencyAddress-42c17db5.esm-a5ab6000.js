import { ar as isNativeToken, a1 as NATIVE_TOKEN_ADDRESS } from './App-40ca2dcc.js';

/**
 * @internal
 */
function cleanCurrencyAddress(currencyAddress) {
  if (isNativeToken(currencyAddress)) {
    return NATIVE_TOKEN_ADDRESS;
  }
  return currencyAddress;
}

export { cleanCurrencyAddress as c };
//# sourceMappingURL=cleanCurrencyAddress-42c17db5.esm-a5ab6000.js.map
