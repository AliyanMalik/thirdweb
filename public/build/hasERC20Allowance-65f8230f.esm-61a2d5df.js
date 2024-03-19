import { r as ContractWrapper } from './App-40ca2dcc.js';

/**
 * @internal
 */
async function hasERC20Allowance(contractToApprove, currencyAddress, value) {
  const provider = contractToApprove.getProvider();
  const ERC20Abi = (await import('./App-40ca2dcc.js').then(function (n) { return n.dj; })).default;
  const erc20 = new ContractWrapper(provider, currencyAddress, ERC20Abi, {}, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  return allowance.gte(value);
}

export { hasERC20Allowance as h };
//# sourceMappingURL=hasERC20Allowance-65f8230f.esm-61a2d5df.js.map
