import { Component, h } from "@stencil/core";
import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "@coinbase/wallet-sdk";


declare global {
  interface Window {
    ethereum?: any;
  }
}

@Component({
  tag: "my-thirdweb-component",
  styleUrl: "my-thirdweb-component.css",
  shadow: true,
})

export class MyThirdwebComponent {
  async createWallet() {
    const web3 = new Web3();
    const wallet = web3.eth.accounts.create();
    const walletAddress = wallet.address;
    const privateKey = wallet.privateKey;
    console.log("Your Wallet Address is :", walletAddress);
    console.log("Your PrivateKey is: ", privateKey);
  }

  async connectMetaMask() {
    if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        console.log("MetaMask is connected.");
        const accounts = await web3.eth.getAccounts();
        console.log("Connected accounts:", accounts);
      } catch (error) {
        alert("User denied account connection");
      }
    } else {
      alert("MetaMask is not installed. Please consider installing it to use it");
    }
  }

  // async  connectWalletConnect() {
  //   // Initialize WalletConnect Provider
  //   const provider = new WalletConnectProvider({
  //     rpc: "https://data-seed-prebsc-1-s2.bnbchain.org:8545", // Replace with your Infura project ID
  //     // You can specify other provider options here.
  //   });


  //   try {
  //     // Enable session (this will trigger the QR Code modal)
  //     await provider.enable();


  //     // Create a Web3 instance with the WalletConnect provider
  //     const web3 = new Web3(provider);


  //     // Now you can use the Web3 instance for blockchain interactions
  //     console.log("WalletConnect connected.");


  //     // Example: Fetch connected accounts
  //     const accounts = await web3.eth.getAccounts();
  //     console.log("Connected accounts:", accounts);
  //   } catch (error) {
  //     console.error("Failed to connect with WalletConnect:", error);
  //   }
  // }



 async  connectCoinbaseWallet() {
    const APP_NAME = "PanxPan";
    const APP_LOGO_URL = "panxpan_logo_here.png";
    /* This is a testnet RPC. In production we need to replace it with the actual mainet (Polygon Mainet) RPC */
    const ETH_JSONRPC_URL = "https://data-seed-prebsc-1-s2.bnbchain.org:8545";


    /*This is a tesnet chain Id.
    In Production we need to replace it with actual polygon mainent id which is 137 */
    const CHAIN_ID = 97;


    // Initialize WalletLink
    const walletLink = new WalletLink({
      appName: APP_NAME,
      appLogoUrl: APP_LOGO_URL,
      darkMode: true,
    });


    // Create a Web3 Provider with WalletLink
    const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID);


    // Create a Web3 instance
    const web3 = new Web3(ethereum);


    try {
      // Request account access
      await ethereum.enable();


      /*Get the user's Accounts
        We can store the wallet address into database againest user's registred Email address
      */
      const accounts = await web3.eth.getAccounts();
      console.log("Connected accounts:", accounts);


      // debugging codeline
      console.log("Coinbase Wallet is connected.");


      // Add any additional web3 interactions here
    } catch (error) {
      console.error("User denied account connection:", error);
    }
  }


  async connectTrustWallet() {
    // Check if Trust Wallet or another Ethereum provider is injected into the window
    if (window.ethereum && window.ethereum.isTrust) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });


        // If access is granted, create a new instance of Web3 with the injected provider
        const web3 = new Web3(window.ethereum);


        // Now Trust wallet is connected
        console.log("Trust Wallet extension is connected.");


        //Get the list of accounts
        const accounts = await web3.eth.getAccounts();
        console.log("Accounts:", accounts);
      } catch (error) {
        // User denied account access
        console.error("User denied account connection:", error);
      }
    } else {
      console.log("Trust Wallet extension not found. Please Install to use it");
      // Fall back to WalletConnect or another connection method here
    }
  }


  render() {
    return (
      <div>
        <h1>Panxpan Wallet Integration</h1>
        <button onClick={() => this.createWallet()}>Create Panxpan Wallet</button>
        <button onClick={() => this.connectMetaMask()}>Connect with MetaMask</button>
        {/* <button onClick={() => this.connectWalletConnect()}>Connect with WalletConnect</button> */}
        <button onClick={() => this.connectCoinbaseWallet()}>Connect with Coinbase Wallet</button>
        <button onClick={() => this.connectTrustWallet()}>Connect with Trust Wallet</button>
      </div>
    );
  }
}
