// import React from "react";
// import {
//   ThirdwebProvider,
//   ConnectWallet,
//   metamaskWallet,
//   coinbaseWallet,
//   walletConnect,
//   safeWallet,
//   trustWallet,
//   zerionWallet,
//   bloctoWallet,
//   frameWallet,
//   phantomWallet,
// } from "@thirdweb-dev/react";

// const App = () => {
//   return (
//         <ThirdwebProvider
//           activeChain="mumbai"
//           clientId="use your client id here"
//           supportedWallets={[
//             metamaskWallet(),
//             coinbaseWallet(),
//             walletConnect(),
//             safeWallet({
//               personalWallets: [
//                 metamaskWallet(),
//                 coinbaseWallet(),
//                 walletConnect(),
//                 trustWallet(),
//                 zerionWallet(),
//                 bloctoWallet(),
//                 frameWallet(),
//                 phantomWallet(),
//               ],
//             }),
//             trustWallet(),
//             zerionWallet(),
//             bloctoWallet(),
//             frameWallet(),
//             phantomWallet(),
//           ]}
//         >
//           <ConnectWallet theme={"dark"} modalSize={"compact"} />
//         </ThirdwebProvider>
//   );
// };

// export default App;
