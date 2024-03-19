import { cA as n, cB as getDefaultProvider, cC as o, p as Signer, cD as defineReadOnly, C as Connector, a as _defineProperty, w as walletIds, _ as _classPrivateFieldInitSpec, e as getAddress, n as normalizeChainId, b as _classPrivateFieldSet, c as _classPrivateFieldGet } from './App-40ca2dcc.js';
import 'events';
import 'os';
import 'fs';
import 'util';
import 'path';
import 'worker_threads';
import 'module';
import 'url';
import 'buffer';
import 'assert';
import 'crypto';
import 'stream';
import 'http';
import 'punycode';
import 'https';
import 'zlib';

var z=Object.defineProperty,q=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(s,e,t)=>e in s?z(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,u=(s,e)=>{for(var t in e||(e={}))$.call(e,t)&&k(s,t,e[t]);if(x)for(var t of x(e))B.call(e,t)&&k(s,t,e[t]);return s},y=(s,e)=>q(s,Z(e));var i=(s,e,t)=>new Promise((r,a)=>{var o=l=>{try{d(t.next(l));}catch(p){a(p);}},n=l=>{try{d(t.throw(l));}catch(p){a(p);}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,n);d((t=t.apply(s,e)).next());});var E="/sdk/2022-08-12/embedded-wallet",J=s=>`paperEwsWalletUserDetails-${s}`,L=s=>`paperEwsWalletUserId-${s}`,K="walletToken",I=s=>`${K}-${s}`,Q="a",W=(s,e)=>`${Q}-${s}-${e}`,X=s=>`${Q}-${s}`;var w=(t=>(t.USER_MANAGED="USER_MANAGED",t.AWS_MANAGED="AWS_MANAGED",t))(w||{}),Y=(n=>(n.PAPER_EMAIL_OTP="PaperEmailOTP",n.GOOGLE="Google",n.TWITTER="Twitter",n.COGNITO="Cognito",n.AUTH0="Auth0",n.CUSTOM_JWT="CustomJWT",n))(Y||{});var H=(t=>(t.LOGGED_OUT="Logged Out",t.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",t))(H||{}),P=(a=>(a.LOGGED_OUT="Logged Out",a.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",a.LOGGED_IN_NEW_DEVICE="Logged In, New Device",a.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",a))(P||{});var F=new Map,h=class{constructor({clientId:e}){this.isSupported=typeof window!="undefined"&&!!window.localStorage,this.clientId=e;}getItem(e){return i(this,null,function*(){var t;return this.isSupported?window.localStorage.getItem(e):(t=F.get(e))!=null?t:null})}setItem(e,t){return i(this,null,function*(){if(this.isSupported)return window.localStorage.setItem(e,t);F.set(e,t);})}removeItem(e){return i(this,null,function*(){let t=yield this.getItem(e);return this.isSupported&&t?(window.localStorage.removeItem(e),!0):!1})}saveAuthCookie(e){return i(this,null,function*(){yield this.setItem(I(this.clientId),e);})}getAuthCookie(){return i(this,null,function*(){return this.getItem(I(this.clientId))})}removeAuthCookie(){return i(this,null,function*(){return this.removeItem(I(this.clientId))})}saveDeviceShare(e,t){return i(this,null,function*(){yield this.saveWalletUserId(t),yield this.setItem(W(this.clientId,t),e);})}getDeviceShare(){return i(this,null,function*(){let e=yield this.getWalletUserId();return e?this.getItem(W(this.clientId,e)):null})}removeDeviceShare(){return i(this,null,function*(){let e=yield this.getWalletUserId();return e?this.removeItem(W(this.clientId,e)):!1})}getWalletUserId(){return i(this,null,function*(){return this.getItem(L(this.clientId))})}saveWalletUserId(e){return i(this,null,function*(){yield this.setItem(L(this.clientId),e);})}removeWalletUserId(){return i(this,null,function*(){return this.removeItem(L(this.clientId))})}};function v(s){return new Promise(e=>{setTimeout(e,s*1e3);})}var ee={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},G=new Map,f=class{constructor({link:e,iframeId:t,container:r=document.body,iframeStyles:a,onIframeInitialize:o}){this.POLLING_INTERVAL_SECONDS=1.4;this.POST_LOAD_BUFFER_SECONDS=1;let n=document.getElementById(t),d=new URL(e),l="1.2.5";if(d.searchParams.set("sdkVersion",l),!n||n.src!=d.href){if(!n){n=document.createElement("iframe");let p=u(u({},ee),a);Object.assign(n.style,p),n.setAttribute("id",t),n.setAttribute("fetchpriority","high"),r.appendChild(n);}n.src=d.href,n.setAttribute("data-version",l),n.onload=this.onIframeLoadHandler(n,this.POST_LOAD_BUFFER_SECONDS,o);}this.iframe=n;}onIframeLoadedInitVariables(){return i(this,null,function*(){return {}})}onIframeLoadHandler(e,t,r){return ()=>i(this,null,function*(){yield new Promise((o,n$1)=>i(this,null,function*(){var p;let d=new MessageChannel;d.port1.onmessage=m=>{let{data:c}=m;return d.port1.close(),c.success?(G.set(e.src,!0),r&&r(),o(!0)):n$1(new Error(c.error))},yield v(t);let l="initIframe";(p=e==null?void 0:e.contentWindow)==null||p.postMessage({eventType:l,data:yield this.onIframeLoadedInitVariables()},`${n()}${E}`,[d.port2]);}));})}call(o){return i(this,arguments,function*({procedureName:e,params:t,showIframe:r=!1,injectRecoveryCode:a={isInjectRecoveryCode:!1}}){for(;!G.get(this.iframe.src);)yield v(this.POLLING_INTERVAL_SECONDS);return r&&(this.iframe.style.display="block",yield v(.005)),new Promise((d,l)=>{var m;if(a.isInjectRecoveryCode){let c=g=>i(this,null,function*(){var U,b;if(g.origin!==n()||g.data.type!=="paper_getRecoveryCode"||typeof g.data.userWalletId!="string")return;let V=yield (U=a.getRecoveryCode)==null?void 0:U.call(a,g.data.userWalletId);(b=this.iframe.contentWindow)==null||b.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:V},n()),window.removeEventListener("message",c);});window.addEventListener("message",c);}let p=new MessageChannel;p.port1.onmessage=c=>i(this,null,function*(){let{data:g}=c;p.port1.close(),r&&(yield v(.1),this.iframe.style.display="none"),g.success?d(g.data):l(new Error(g.error));}),(m=this.iframe.contentWindow)==null||m.postMessage({eventType:e,data:t},`${n()}${E}`,[p.port2]);})})}destroy(){G.delete(this.iframe.src);}};var _=class extends f{constructor({clientId:t,customizationOptions:r}){super({iframeId:ie,link:re({clientId:t,path:E,queryParams:r}).href,container:document.body});this.clientId=t;}onIframeLoadedInitVariables(){return i(this,null,function*(){let t=new h({clientId:this.clientId});return {authCookie:yield t.getAuthCookie(),deviceShareStored:yield t.getDeviceShare(),walletUserId:yield t.getWalletUserId(),clientId:this.clientId}})}};function re({clientId:s,path:e,queryParams:t}){var a;let r=new URL(e,n());if(t)for(let o of Object.keys(t))r.searchParams.set(o,((a=t[o])==null?void 0:a.toString())||"");return r.searchParams.set("clientId",s),r}var ie="paper-embedded-wallet-iframe";var A=class{constructor({querier:e,preLogin:t,postLogin:r,clientId:a}){this.LoginQuerier=e,this.preLogin=t,this.postLogin=r,this.clientId=a;}sendPaperEmailLoginOtp(r){return i(this,arguments,function*({email:e,recoveryShareManagement:t}){yield this.preLogin();let{isNewUser:a,isNewDevice:o,recoveryShareManagement:n}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:e,recoveryShareManagement:t}});return {isNewUser:a,isNewDevice:o,recoveryShareManagement:n}})}};var C=class extends A{constructor(){super(...arguments);this.closeWindow=({isWindowOpenedByFn:t,win:r,closeOpenedWindow:a})=>{t?r==null||r.close():r&&a?a(r):r&&r.close();};}loginWithPaperModal(){return i(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(t)})}getGoogleLoginUrl(){return i(this,null,function*(){return yield this.LoginQuerier.call({procedureName:"getHeadlessGoogleLoginLink",params:void 0})})}loginWithGoogle(t){return i(this,null,function*(){yield this.preLogin();let r=t==null?void 0:t.openedWindow,a=!1;if(r||(r=window.open("","Login","width=350, height=500"),a=!0),!r)throw new Error("Something went wrong opening pop-up");yield this.preLogin();let{loginLink:o}=yield this.getGoogleLoginUrl();r.location.href=o;let n$1=yield new Promise((d,l)=>{let p=window.setInterval(()=>i(this,null,function*(){r&&r.closed&&(clearInterval(p),window.removeEventListener("message",m),l(new Error("User closed login window")));}),1e3),m=c=>i(this,null,function*(){if(c.origin===n()){if(typeof c.data!="object"){l(new Error("Invalid event data"));return}switch(c.data.eventType){case"userLoginSuccess":{window.removeEventListener("message",m),clearInterval(p),this.closeWindow({isWindowOpenedByFn:a,win:r,closeOpenedWindow:t==null?void 0:t.closeOpenedWindow}),c.data.authResult&&d(c.data.authResult);break}case"userLoginFailed":{window.removeEventListener("message",m),clearInterval(p),this.closeWindow({isWindowOpenedByFn:a,win:r,closeOpenedWindow:t==null?void 0:t.closeOpenedWindow}),l(new Error(c.data.error));break}case"injectDeveloperClientId":{r==null||r.postMessage({eventType:"injectDeveloperClientIdResult",developerClientId:this.clientId},n());break}}}});window.addEventListener("message",m);});return this.postLogin({storedToken:y(u({},n$1.storedToken),{shouldStoreCookieString:!0}),walletDetails:y(u({},n$1.walletDetails),{isIframeStorageEnabled:!1})})})}loginWithPaperEmailOtp(r){return i(this,arguments,function*({email:t}){yield this.preLogin();let a=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:t,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(a)})}verifyPaperEmailLoginOtp(a){return i(this,arguments,function*({email:t,otp:r}){let o=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:t,otp:r,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(o)})}};var D=class extends A{loginWithPaperModal(e){return i(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:e==null?void 0:e.getRecoveryCode}});return this.postLogin(t)})}loginWithGoogle(e){return i(this,null,function*(){throw new Error("loginWithGoogle is not yet supported in the RecoveryShareManagement.USER_MANAGED flow. Please use RecoveryShareManagement.AWS_MANAGED instead.")})}loginWithPaperEmailOtp(r){return i(this,arguments,function*({email:e,recoveryCode:t}){yield this.preLogin();let a=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryCode:t},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(a)})}verifyPaperEmailLoginOtp(a){return i(this,arguments,function*({email:e,otp:t,recoveryCode:r}){let o=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryCode:r},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(o)})}};var M=class{constructor({clientId:e,advancedOptions:t,querier:r,onAuthSuccess:a}){var o;this.clientId=e,this.advancedOptions={recoveryShareManagement:(o=t==null?void 0:t.recoveryShareManagement)!=null?o:"AWS_MANAGED"},this.AuthQuerier=r,this.localStorage=new h({clientId:e}),this.onAuthSuccess=a,this.userManagedLogin=new D({postLogin:n=>i(this,null,function*(){return this.postLogin(n)}),preLogin:()=>i(this,null,function*(){yield this.preLogin();}),querier:r,clientId:e}),this.awsManagedLogin=new C({postLogin:n=>i(this,null,function*(){return this.postLogin(n)}),preLogin:()=>i(this,null,function*(){yield this.preLogin();}),querier:r,clientId:e});}preLogin(){return i(this,null,function*(){yield this.logout();})}postLogin(r){return i(this,arguments,function*({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(e.cookieString)),yield this.onAuthSuccess({storedToken:e,walletDetails:t})})}loginWithJwtAuth(a){return i(this,arguments,function*({token:e,authProvider:t,recoveryCode:r}){yield this.preLogin();let o=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:e,authProvider:t,recoveryCode:r}});return this.postLogin(o)})}loginWithPaperModal(e){return i(this,null,function*(){return yield this.preLogin(),this.advancedOptions.recoveryShareManagement==="AWS_MANAGED"?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)})}loginWithPaperEmailOtp(e){return i(this,null,function*(){return this.advancedOptions.recoveryShareManagement==="AWS_MANAGED"?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)})}loginWithGoogle(e){return i(this,null,function*(){return this.advancedOptions.recoveryShareManagement==="AWS_MANAGED"?this.awsManagedLogin.loginWithGoogle(e):this.userManagedLogin.loginWithGoogle()})}sendPaperEmailLoginOtp(t){return i(this,arguments,function*({email:e}){return this.advancedOptions.recoveryShareManagement==="AWS_MANAGED"?this.awsManagedLogin.sendPaperEmailLoginOtp({email:e,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:e})})}verifyPaperEmailLoginOtp(e){return i(this,null,function*(){return this.advancedOptions.recoveryShareManagement==="AWS_MANAGED"?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)})}logout(){return i(this,null,function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),r=yield this.localStorage.removeWalletUserId();return {success:e||t||r}})}};var R=class{constructor({chain:e,clientId:t,querier:r}){this.chain=e,this.clientId=t,this.gaslessTransactionQuerier=r;}callContract(a){return i(this,arguments,function*({contractAddress:e,methodArgs:t,methodInterface:r}){return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:e,method:{args:t,stub:r}}})})}};var T=class extends Signer{constructor({provider:t,clientId:r,querier:a}){var o;super();this.DEFAULT_ETHEREUM_CHAIN_ID=5;this.clientId=r,this.querier=a,this.endpoint=(o=t.connection)==null?void 0:o.url,defineReadOnly(this,"provider",t);}getAddress(){return i(this,null,function*(){let{address:t}=yield this.querier.call({procedureName:"getAddress",params:void 0});return t})}signMessage(t){return i(this,null,function*(){var o,n,d,l;let r=yield (o=this.provider)==null?void 0:o.getNetwork();r&&r._defaultProvider;let{signedMessage:a}=yield this.querier.call({procedureName:"signMessage",params:{message:t,chainId:(l=(d=yield (n=this.provider)==null?void 0:n.getNetwork())==null?void 0:d.chainId)!=null?l:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a})}signTransaction(t){return i(this,null,function*(){var a,o,n;let{signedTransaction:r}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:t,chainId:(n=(o=yield (a=this.provider)==null?void 0:a.getNetwork())==null?void 0:o.chainId)!=null?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return r})}_signTypedData(t,r,a){return i(this,null,function*(){var n,d,l;let{signedTypedData:o}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:t,types:r,message:a,chainId:(l=(d=yield (n=this.provider)==null?void 0:n.getNetwork())==null?void 0:d.chainId)!=null?l:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return o})}connect(t){return new T({clientId:this.clientId,provider:t,querier:this.querier})}};var O=class{constructor({clientId:e,chain:t,querier:r}){this.clientId=e,this.chain=t,this.walletManagerQuerier=r,this.gasless=new R({chain:t,clientId:e,querier:r}),this.localStorage=new h({clientId:e});}postWalletSetUp(o){return i(this,arguments,function*({deviceShareStored:e,walletAddress:t,isIframeStorageEnabled:r,walletUserId:a}){return r||(yield this.localStorage.saveDeviceShare(e,a)),{walletAddress:t}})}getUserWalletStatus(){return i(this,null,function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return e.status==="Logged In, Wallet Initialized"?{status:"Logged In, Wallet Initialized",user:y(u({},e.user),{wallet:this})}:e})}setChain(t){return i(this,arguments,function*({chain:e}){this.chain=e,this.gasless=new R({chain:e,clientId:this.clientId,querier:this.walletManagerQuerier});})}getEthersJsSigner(e){return i(this,null,function*(){var r;return new T({clientId:this.clientId,provider:getDefaultProvider((r=e==null?void 0:e.rpcEndpoint)!=null?r:o[this.chain]),querier:this.walletManagerQuerier})})}};var N=class{constructor({clientId:e,chain:t,styles:r,advancedOptions:a,onAuthSuccess:o}){this.clientId=e,this.querier=new _({clientId:e,customizationOptions:r}),this.wallet=new O({clientId:e,chain:t,querier:this.querier}),this.auth=new M({clientId:e,advancedOptions:u({recoveryShareManagement:"USER_MANAGED"},a!=null?a:{}),querier:this.querier,onAuthSuccess:n=>i(this,null,function*(){return yield this.wallet.postWalletSetUp(y(u({},n.walletDetails),{walletUserId:n.storedToken.authDetails.userWalletId})),yield this.querier.call({procedureName:"initIframe",params:{deviceShareStored:n.walletDetails.deviceShareStored,clientId:this.clientId,walletUserId:n.storedToken.authDetails.userWalletId,authCookie:n.storedToken.cookieString}}),o==null||o(n),{user:{status:"Logged In, Wallet Initialized",authDetails:n.storedToken.authDetails,wallet:this.wallet,walletAddress:n.walletDetails.walletAddress}}})});}getUser(){return i(this,null,function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return {status:"Logged Out"};case"Logged In, Wallet Initialized":return u({status:"Logged In, Wallet Initialized"},e.user)}})}};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AUTH_TOKEN_LOCAL_STORAGE_NAME: I,
  AuthProvider: Y,
  DEVICE_SHARE_LOCAL_STORAGE_NAME: W,
  DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED: X,
  PaperEmbeddedWalletSdk: N,
  RecoveryShareManagement: w,
  UserStatus: H,
  UserWalletStatus: P,
  WALLET_USER_DETAILS_LOCAL_STORAGE_NAME: J,
  WALLET_USER_ID_LOCAL_STORAGE_NAME: L
});

var _signer = /*#__PURE__*/new WeakMap();
class PaperWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", walletIds.paper);
    _defineProperty(this, "name", "Paper Wallet");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "user", null);
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        await this.onDisconnect();
      } else {
        this.emit("change", {
          account: getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.options.chains.findIndex(c => c.chainId === id) === -1;
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", async () => {
      this.emit("disconnect");
    });
    this.options = options;
  }
  getPaperSDK() {
    if (!this.paper) {
      this.paper = new Promise(async (resolve, reject) => {
        const recoveryMethod = this.options.advancedOptions?.recoveryShareManagement;
        try {
          const {
            PaperEmbeddedWalletSdk
          } = await Promise.resolve().then(function () { return index; });
          const methodToEnum = {
            AWS_MANAGED: w.AWS_MANAGED,
            USER_MANAGED: w.USER_MANAGED
          };
          const recoveryShareManagement = recoveryMethod ? methodToEnum[recoveryMethod] : undefined;
          resolve(new PaperEmbeddedWalletSdk({
            advancedOptions: {
              recoveryShareManagement
            },
            clientId: this.options.clientId,
            chain: "Ethereum",
            styles: this.options.styles,
            onAuthSuccess: this.options.onAuthSuccess
          }));
        } catch (err) {
          reject(err);
        }
      });
    }
    return this.paper;
  }
  async connect(options) {
    const paperSDK = await this.getPaperSDK();
    if (!paperSDK) {
      throw new Error("Paper SDK not initialized");
    }
    const user = await paperSDK.getUser();
    switch (user.status) {
      case H.LOGGED_OUT:
        {
          let authResult;

          // Show Google popup
          if (options?.googleLogin) {
            const arg = options.googleLogin;
            authResult = await paperSDK.auth.loginWithGoogle(typeof arg === "object" ? arg : undefined);
          }

          // Headless
          else if (options?.email && options?.otp) {
            authResult = await paperSDK.auth.verifyPaperEmailLoginOtp({
              email: options.email,
              otp: options.otp,
              recoveryCode: options.recoveryCode
            });
          }

          // Show OTP modal
          else if (options?.email) {
            authResult = await paperSDK.auth.loginWithPaperEmailOtp({
              email: options.email
            });
          }

          // Show Full Modal
          else {
            authResult = await paperSDK.auth.loginWithPaperModal();
          }
          this.user = authResult.user;
          break;
        }
      case H.LOGGED_IN_WALLET_INITIALIZED:
        {
          if (typeof options?.googleLogin === "object") {
            if (options.googleLogin.closeOpenedWindow && options.googleLogin.openedWindow) {
              options.googleLogin.closeOpenedWindow(options.googleLogin.openedWindow);
            }
          }
          this.user = user;
          break;
        }
    }
    if (!this.user) {
      throw new Error("Error connecting User");
    }
    if (options?.chainId) {
      this.switchChain(options.chainId);
    }
    this.setupListeners();
    return this.getAddress();
  }
  async disconnect() {
    const paper = await this.paper;
    await paper?.auth.logout();
    _classPrivateFieldSet(this, _signer, undefined);
    this.user = null;
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch (e) {
      return false;
    }
  }
  async getProvider() {
    const signer = await this.getSigner();
    if (!signer.provider) {
      throw new Error("Provider not found");
    }
    return signer.provider;
  }
  async getSigner() {
    if (_classPrivateFieldGet(this, _signer)) {
      return _classPrivateFieldGet(this, _signer);
    }
    if (!this.user) {
      const paperSDK = await this.getPaperSDK();
      const user = await paperSDK.getUser();
      switch (user.status) {
        case H.LOGGED_IN_WALLET_INITIALIZED:
          {
            this.user = user;
            break;
          }
      }
    }
    const signer = await this.user?.wallet.getEthersJsSigner({
      rpcEndpoint: this.options.chain.rpc[0] || "" // TODO: handle chain.rpc being empty array
    });
    if (!signer) {
      throw new Error("Signer not found");
    }
    _classPrivateFieldSet(this, _signer, signer);
    return signer;
  }
  async isAuthorized() {
    return false;
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not configured");
    }

    // update chain in wallet
    await this.user?.wallet.setChain({
      chain: "Ethereum"
    }); // just pass Ethereum no matter what chain we are going to connect

    // update signer
    _classPrivateFieldSet(this, _signer, await this.user?.wallet.getEthersJsSigner({
      rpcEndpoint: chain.rpc[0] || "" // TODO: handle chain.rpc being empty array
    }));
    this.emit("change", {
      chain: {
        id: chainId,
        unsupported: false
      }
    });
  }

  // private getUser() {
  //   if (!this.user) {
  //     throw new Error("User not found");
  //   }
  //   return this.user;
  // }

  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  updateChains(chains) {
    this.options.chains = chains;
  }
  async getEmail() {
    await this.getProvider();
    if (!this.user) {
      throw new Error("No user found, Paper Wallet is not connected");
    }
    return this.user.authDetails.email;
  }
}

export { PaperWalletConnector };
//# sourceMappingURL=thirdweb-dev-wallets-evm-connectors-paper.esm-37dada72.js.map
