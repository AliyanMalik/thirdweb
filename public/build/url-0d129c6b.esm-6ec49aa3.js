import { l as getValidChainRPCs } from './App-40ca2dcc.js';

function isTwUrl(url) {
  const host = new URL(url).hostname;
  return host.endsWith(".thirdweb.com") || host.endsWith(".thirdweb-dev.com") || host === "localhost" || host === "0.0.0.0";
}
function getValidPublicRPCUrl(chain) {
  return getValidChainRPCs(chain).map(rpc => {
    try {
      const url = new URL(rpc);
      // remove client id from url
      if (url.hostname.endsWith(".thirdweb.com")) {
        url.pathname = "";
        url.search = "";
      }
      return url.toString();
    } catch (e) {
      return rpc;
    }
  });
}

export { getValidPublicRPCUrl as g, isTwUrl as i };
//# sourceMappingURL=url-0d129c6b.esm-6ec49aa3.js.map
