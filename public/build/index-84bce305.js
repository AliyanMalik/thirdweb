import { bX as inheritsExports, aB as commonjsGlobal, bV as bnExports, bQ as getAugmentedNamespace, dg as __extends$1, aA as getDefaultExportFromCjs } from './App-40ca2dcc.js';
import require$$0$2 from 'events';
import { b as safeBufferExports, j as js, r as requireSrc, c as semver$1, d as compare_1, e as reExports, f as requireRange, g as gt_1, h as requireComparator, s as satisfies_1, l as lt_1, i as lte_1, k as gte_1, m as constants$3, n as identifiers$1, o as eq_1, p as neq_1, q as cmp_1 } from './js-fc8e7a63.js';
import require$$0$3 from 'util';

function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
        e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
            if (k !== 'default' && !(k in n)) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    });
    return Object.freeze(n);
}

var dist$5 = {};

var CoinbaseWalletSDK$1 = {};

var walletLogo$1 = {};

Object.defineProperty(walletLogo$1, "__esModule", { value: true });
walletLogo$1.walletLogo = void 0;
const walletLogo = (type, width) => {
    let height;
    switch (type) {
        case "standard":
            height = width;
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
            height = width;
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
            height = (0.1 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
            height = (0.25 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
            height = (0.1 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
            height = (0.25 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
            height = width;
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    }
};
walletLogo$1.walletLogo = walletLogo;

var constants$2 = {};

Object.defineProperty(constants$2, "__esModule", { value: true });
constants$2.LINK_API_URL = void 0;
constants$2.LINK_API_URL = "https://www.walletlink.org";

var ScopedLocalStorage$1 = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(ScopedLocalStorage$1, "__esModule", { value: true });
ScopedLocalStorage$1.ScopedLocalStorage = void 0;
class ScopedLocalStorage {
    constructor(scope) {
        this.scope = scope;
    }
    setItem(key, value) {
        localStorage.setItem(this.scopedKey(key), value);
    }
    getItem(key) {
        return localStorage.getItem(this.scopedKey(key));
    }
    removeItem(key) {
        localStorage.removeItem(this.scopedKey(key));
    }
    clear() {
        const prefix = this.scopedKey("");
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (typeof key === "string" && key.startsWith(prefix)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
    }
    scopedKey(key) {
        return `${this.scope}:${key}`;
    }
}
ScopedLocalStorage$1.ScopedLocalStorage = ScopedLocalStorage;

var CoinbaseWalletProvider$1 = {};

var safeEventEmitter = {};

Object.defineProperty(safeEventEmitter, "__esModule", { value: true });
const events_1 = require$$0$2;
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    }
    catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(() => {
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for (let i = 0; i < n; i += 1) {
        copy[i] = arr[i];
    }
    return copy;
}
class SafeEventEmitter$2 extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) {
            doError = doError && events.error === undefined;
        }
        else if (!doError) {
            return false;
        }
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) {
                [er] = args;
            }
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) {
            return false;
        }
        if (typeof handler === 'function') {
            safeApply(handler, this, args);
        }
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for (let i = 0; i < len; i += 1) {
                safeApply(listeners[i], this, args);
            }
        }
        return true;
    }
}
safeEventEmitter.default = SafeEventEmitter$2;

var DiagnosticLogger = {};

// DiagnosticLogger for debugging purposes only
Object.defineProperty(DiagnosticLogger, "__esModule", { value: true });
DiagnosticLogger.EVENTS = void 0;
DiagnosticLogger.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered",
};

var errors$1 = {};

var dist$4 = {};

var classes = {};

var fastSafeStringify = stringify$2;
stringify$2.default = stringify$2;
stringify$2.stable = deterministicStringify;
stringify$2.stableStringify = deterministicStringify;

var LIMIT_REPLACE_NODE = '[...]';
var CIRCULAR_REPLACE_NODE = '[Circular]';

var arr = [];
var replacerStack = [];

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify$2 (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions();
  }

  decirc(obj, '', 0, [], undefined, 0, options);
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer);
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace });
      arr.push([parent, k, val, propertyDescriptor]);
    } else {
      replacerStack.push([val, k, replace]);
    }
  } else {
    parent[k] = replace;
    arr.push([parent, k, val]);
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return
    }

    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      var keys = Object.keys(val);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, i, stack, val, depth, options);
      }
    }
    stack.pop();
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions();
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj;
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer);
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent);
      return
    }

    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, i, stack, val, depth, options);
        tmp[key] = val[key];
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp
      }
    }
    stack.pop();
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      };
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];
        if (part[1] === key && part[0] === val) {
          val = part[2];
          replacerStack.splice(i, 1);
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}

Object.defineProperty(classes, "__esModule", { value: true });
classes.EthereumProviderError = classes.EthereumRpcError = void 0;
const fast_safe_stringify_1 = fastSafeStringify;
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const serialized = {
            code: this.code,
            message: this.message,
        };
        if (this.data !== undefined) {
            serialized.data = this.data;
        }
        if (this.stack) {
            serialized.stack = this.stack;
        }
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
classes.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
classes.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') {
        return undefined;
    }
    return value;
}

var utils$3 = {};

var errorConstants = {};

Object.defineProperty(errorConstants, "__esModule", { value: true });
errorConstants.errorValues = errorConstants.errorCodes = void 0;
errorConstants.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
    },
};
errorConstants.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
	const error_constants_1 = errorConstants;
	const classes_1 = classes;
	const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
	const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
	const FALLBACK_ERROR = {
	    code: FALLBACK_ERROR_CODE,
	    message: getMessageFromCode(FALLBACK_ERROR_CODE),
	};
	exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
	/**
	 * Gets the message for a given code, or a fallback message if the code has
	 * no corresponding message.
	 */
	function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
	    if (Number.isInteger(code)) {
	        const codeString = code.toString();
	        if (hasKey(error_constants_1.errorValues, codeString)) {
	            return error_constants_1.errorValues[codeString].message;
	        }
	        if (isJsonRpcServerError(code)) {
	            return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
	        }
	    }
	    return fallbackMessage;
	}
	exports.getMessageFromCode = getMessageFromCode;
	/**
	 * Returns whether the given code is valid.
	 * A code is only valid if it has a message.
	 */
	function isValidCode(code) {
	    if (!Number.isInteger(code)) {
	        return false;
	    }
	    const codeString = code.toString();
	    if (error_constants_1.errorValues[codeString]) {
	        return true;
	    }
	    if (isJsonRpcServerError(code)) {
	        return true;
	    }
	    return false;
	}
	exports.isValidCode = isValidCode;
	/**
	 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
	 * Merely copies the given error's values if it is already compatible.
	 * If the given error is not fully compatible, it will be preserved on the
	 * returned object's data.originalError property.
	 */
	function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false, } = {}) {
	    var _a, _b;
	    if (!fallbackError ||
	        !Number.isInteger(fallbackError.code) ||
	        typeof fallbackError.message !== 'string') {
	        throw new Error('Must provide fallback error with integer number code and string message.');
	    }
	    if (error instanceof classes_1.EthereumRpcError) {
	        return error.serialize();
	    }
	    const serialized = {};
	    if (error &&
	        typeof error === 'object' &&
	        !Array.isArray(error) &&
	        hasKey(error, 'code') &&
	        isValidCode(error.code)) {
	        const _error = error;
	        serialized.code = _error.code;
	        if (_error.message && typeof _error.message === 'string') {
	            serialized.message = _error.message;
	            if (hasKey(_error, 'data')) {
	                serialized.data = _error.data;
	            }
	        }
	        else {
	            serialized.message = getMessageFromCode(serialized.code);
	            serialized.data = { originalError: assignOriginalError(error) };
	        }
	    }
	    else {
	        serialized.code = fallbackError.code;
	        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
	        serialized.message = (message && typeof message === 'string'
	            ? message
	            : fallbackError.message);
	        serialized.data = { originalError: assignOriginalError(error) };
	    }
	    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
	    if (shouldIncludeStack && error && stack && typeof stack === 'string') {
	        serialized.stack = stack;
	    }
	    return serialized;
	}
	exports.serializeError = serializeError;
	// Internal
	function isJsonRpcServerError(code) {
	    return code >= -32099 && code <= -32000;
	}
	function assignOriginalError(error) {
	    if (error && typeof error === 'object' && !Array.isArray(error)) {
	        return Object.assign({}, error);
	    }
	    return error;
	}
	function hasKey(obj, key) {
	    return Object.prototype.hasOwnProperty.call(obj, key);
	}
	
} (utils$3));

var errors = {};

Object.defineProperty(errors, "__esModule", { value: true });
errors.ethErrors = void 0;
const classes_1 = classes;
const utils_1 = utils$3;
const error_constants_1 = errorConstants;
errors.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (arg) => {
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new classes_1.EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
	const classes_1 = classes;
	Object.defineProperty(exports, "EthereumRpcError", { enumerable: true, get: function () { return classes_1.EthereumRpcError; } });
	Object.defineProperty(exports, "EthereumProviderError", { enumerable: true, get: function () { return classes_1.EthereumProviderError; } });
	const utils_1 = utils$3;
	Object.defineProperty(exports, "serializeError", { enumerable: true, get: function () { return utils_1.serializeError; } });
	Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function () { return utils_1.getMessageFromCode; } });
	const errors_1 = errors;
	Object.defineProperty(exports, "ethErrors", { enumerable: true, get: function () { return errors_1.ethErrors; } });
	const error_constants_1 = errorConstants;
	Object.defineProperty(exports, "errorCodes", { enumerable: true, get: function () { return error_constants_1.errorCodes; } });
	
} (dist$4));

var Web3Response = {};

var Web3Method = {};

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Web3Method = void 0;
	(function (Web3Method) {
	    Web3Method["requestEthereumAccounts"] = "requestEthereumAccounts";
	    Web3Method["signEthereumMessage"] = "signEthereumMessage";
	    Web3Method["signEthereumTransaction"] = "signEthereumTransaction";
	    Web3Method["submitEthereumTransaction"] = "submitEthereumTransaction";
	    Web3Method["ethereumAddressFromSignedMessage"] = "ethereumAddressFromSignedMessage";
	    Web3Method["scanQRCode"] = "scanQRCode";
	    Web3Method["generic"] = "generic";
	    Web3Method["childRequestEthereumAccounts"] = "childRequestEthereumAccounts";
	    Web3Method["addEthereumChain"] = "addEthereumChain";
	    Web3Method["switchEthereumChain"] = "switchEthereumChain";
	    Web3Method["makeEthereumJSONRPCRequest"] = "makeEthereumJSONRPCRequest";
	    Web3Method["watchAsset"] = "watchAsset";
	    Web3Method["selectProvider"] = "selectProvider";
	})(exports.Web3Method || (exports.Web3Method = {})); 
} (Web3Method));

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(Web3Response, "__esModule", { value: true });
Web3Response.EthereumAddressFromSignedMessageResponse = Web3Response.SubmitEthereumTransactionResponse = Web3Response.SignEthereumTransactionResponse = Web3Response.SignEthereumMessageResponse = Web3Response.isRequestEthereumAccountsResponse = Web3Response.SelectProviderResponse = Web3Response.WatchAssetReponse = Web3Response.RequestEthereumAccountsResponse = Web3Response.SwitchEthereumChainResponse = Web3Response.AddEthereumChainResponse = Web3Response.isErrorResponse = void 0;
const Web3Method_1$2 = Web3Method;
function isErrorResponse(response) {
    var _a, _b;
    return (((_a = response) === null || _a === void 0 ? void 0 : _a.method) !== undefined &&
        ((_b = response) === null || _b === void 0 ? void 0 : _b.errorMessage) !== undefined);
}
Web3Response.isErrorResponse = isErrorResponse;
function AddEthereumChainResponse(addResponse) {
    return {
        method: Web3Method_1$2.Web3Method.addEthereumChain,
        result: addResponse,
    };
}
Web3Response.AddEthereumChainResponse = AddEthereumChainResponse;
function SwitchEthereumChainResponse(switchResponse) {
    return {
        method: Web3Method_1$2.Web3Method.switchEthereumChain,
        result: switchResponse,
    };
}
Web3Response.SwitchEthereumChainResponse = SwitchEthereumChainResponse;
function RequestEthereumAccountsResponse(addresses) {
    return { method: Web3Method_1$2.Web3Method.requestEthereumAccounts, result: addresses };
}
Web3Response.RequestEthereumAccountsResponse = RequestEthereumAccountsResponse;
function WatchAssetReponse(success) {
    return { method: Web3Method_1$2.Web3Method.watchAsset, result: success };
}
Web3Response.WatchAssetReponse = WatchAssetReponse;
function SelectProviderResponse(selectedProviderKey) {
    return { method: Web3Method_1$2.Web3Method.selectProvider, result: selectedProviderKey };
}
Web3Response.SelectProviderResponse = SelectProviderResponse;
function isRequestEthereumAccountsResponse(res) {
    return res && res.method === Web3Method_1$2.Web3Method.requestEthereumAccounts;
}
Web3Response.isRequestEthereumAccountsResponse = isRequestEthereumAccountsResponse;
function SignEthereumMessageResponse(signature) {
    return { method: Web3Method_1$2.Web3Method.signEthereumMessage, result: signature };
}
Web3Response.SignEthereumMessageResponse = SignEthereumMessageResponse;
function SignEthereumTransactionResponse(signedData) {
    return { method: Web3Method_1$2.Web3Method.signEthereumTransaction, result: signedData };
}
Web3Response.SignEthereumTransactionResponse = SignEthereumTransactionResponse;
function SubmitEthereumTransactionResponse(txHash) {
    return { method: Web3Method_1$2.Web3Method.submitEthereumTransaction, result: txHash };
}
Web3Response.SubmitEthereumTransactionResponse = SubmitEthereumTransactionResponse;
function EthereumAddressFromSignedMessageResponse(address) {
    return {
        method: Web3Method_1$2.Web3Method.ethereumAddressFromSignedMessage,
        result: address,
    };
}
Web3Response.EthereumAddressFromSignedMessageResponse = EthereumAddressFromSignedMessageResponse;

var version = {};

Object.defineProperty(version, "__esModule", { value: true });
version.LIB_VERSION = void 0;
version.LIB_VERSION = "3.7.2";

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getErrorCode = exports.serializeError = exports.standardErrors = exports.standardErrorMessage = exports.standardErrorCodes = void 0;
	// eslint-disable-next-line no-restricted-imports
	const eth_rpc_errors_1 = dist$4;
	const Web3Response_1 = Web3Response;
	const version_1 = version;
	exports.standardErrorCodes = Object.freeze(Object.assign(Object.assign({}, eth_rpc_errors_1.errorCodes), { provider: Object.freeze(Object.assign(Object.assign({}, eth_rpc_errors_1.errorCodes.provider), { unsupportedChain: 4902 })) }));
	function standardErrorMessage(code) {
	    return code !== undefined ? (0, eth_rpc_errors_1.getMessageFromCode)(code) : "Unknown error";
	}
	exports.standardErrorMessage = standardErrorMessage;
	exports.standardErrors = Object.freeze(Object.assign(Object.assign({}, eth_rpc_errors_1.ethErrors), { provider: Object.freeze(Object.assign(Object.assign({}, eth_rpc_errors_1.ethErrors.provider), { unsupportedChain: (chainId = "") => eth_rpc_errors_1.ethErrors.provider.custom({
	            code: exports.standardErrorCodes.provider.unsupportedChain,
	            message: `Unrecognized chain ID ${chainId}. Try adding the chain using wallet_addEthereumChain first.`,
	        }) })) }));
	/**
	 * Serializes an error to a format that is compatible with the Ethereum JSON RPC error format.
	 * See https://docs.cloud.coinbase.com/wallet-sdk/docs/errors
	 * for more information.
	 */
	function serializeError(error, requestOrMethod) {
	    const serialized = (0, eth_rpc_errors_1.serializeError)(getErrorObject(error), {
	        shouldIncludeStack: true,
	    });
	    const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
	    docUrl.searchParams.set("version", version_1.LIB_VERSION);
	    docUrl.searchParams.set("code", serialized.code.toString());
	    const method = getMethod(serialized.data, requestOrMethod);
	    if (method) {
	        docUrl.searchParams.set("method", method);
	    }
	    docUrl.searchParams.set("message", serialized.message);
	    return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
	}
	exports.serializeError = serializeError;
	/**
	 * Converts an error to a serializable object.
	 */
	function getErrorObject(error) {
	    if (typeof error === "string") {
	        return {
	            message: error,
	            code: exports.standardErrorCodes.rpc.internal,
	        };
	    }
	    else if ((0, Web3Response_1.isErrorResponse)(error)) {
	        return Object.assign(Object.assign({}, error), { message: error.errorMessage, code: error.errorCode, data: { method: error.method, result: error.result } });
	    }
	    else {
	        return error;
	    }
	}
	/**
	 * Gets the method name from the serialized data or the request.
	 */
	function getMethod(serializedData, request) {
	    var _a;
	    const methodInData = (_a = serializedData) === null || _a === void 0 ? void 0 : _a.method;
	    if (methodInData) {
	        return methodInData;
	    }
	    if (request === undefined) {
	        return undefined;
	    }
	    else if (typeof request === "string") {
	        return request;
	    }
	    else if (!Array.isArray(request)) {
	        return request.method;
	    }
	    else if (request.length > 0) {
	        return request[0].method;
	    }
	    else {
	        return undefined;
	    }
	}
	// ----------------- getErrorCode -----------------
	/**
	 * Returns the error code from an error object.
	 */
	function getErrorCode(error) {
	    var _a;
	    if (typeof error === "number") {
	        return error;
	    }
	    else if (isErrorWithCode(error)) {
	        return (_a = error.code) !== null && _a !== void 0 ? _a : error.errorCode;
	    }
	    return undefined;
	}
	exports.getErrorCode = getErrorCode;
	function isErrorWithCode(error) {
	    return (typeof error === "object" &&
	        error !== null &&
	        (typeof error.code === "number" ||
	            typeof error.errorCode === "number"));
	} 
} (errors$1));

var Session$1 = {};

var sha_js = {exports: {}};

var Buffer$7 = safeBufferExports.Buffer;

// prototype class for hash functions
function Hash$6 (blockSize, finalSize) {
  this._block = Buffer$7.alloc(blockSize);
  this._finalSize = finalSize;
  this._blockSize = blockSize;
  this._len = 0;
}

Hash$6.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8';
    data = Buffer$7.from(data, enc);
  }

  var block = this._block;
  var blockSize = this._blockSize;
  var length = data.length;
  var accum = this._len;

  for (var offset = 0; offset < length;) {
    var assigned = accum % blockSize;
    var remainder = Math.min(length - offset, blockSize - assigned);

    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i];
    }

    accum += remainder;
    offset += remainder;

    if ((accum % blockSize) === 0) {
      this._update(block);
    }
  }

  this._len += length;
  return this
};

Hash$6.prototype.digest = function (enc) {
  var rem = this._len % this._blockSize;

  this._block[rem] = 0x80;

  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
  this._block.fill(0, rem + 1);

  if (rem >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }

  var bits = this._len * 8;

  // uint32
  if (bits <= 0xffffffff) {
    this._block.writeUInt32BE(bits, this._blockSize - 4);

  // uint64
  } else {
    var lowBits = (bits & 0xffffffff) >>> 0;
    var highBits = (bits - lowBits) / 0x100000000;

    this._block.writeUInt32BE(highBits, this._blockSize - 8);
    this._block.writeUInt32BE(lowBits, this._blockSize - 4);
  }

  this._update(this._block);
  var hash = this._hash();

  return enc ? hash.toString(enc) : hash
};

Hash$6.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
};

var hash = Hash$6;

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits$5 = inheritsExports;
var Hash$5 = hash;
var Buffer$6 = safeBufferExports.Buffer;

var K$3 = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
];

var W$5 = new Array(80);

function Sha () {
  this.init();
  this._w = W$5;

  Hash$5.call(this, 64, 56);
}

inherits$5(Sha, Hash$5);

Sha.prototype.init = function () {
  this._a = 0x67452301;
  this._b = 0xefcdab89;
  this._c = 0x98badcfe;
  this._d = 0x10325476;
  this._e = 0xc3d2e1f0;

  return this
};

function rotl5$1 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30$1 (num) {
  return (num << 30) | (num >>> 2)
}

function ft$1 (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha.prototype._update = function (M) {
  var W = this._w;

  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
  for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20);
    var t = (rotl5$1(a) + ft$1(s, b, c, d) + e + W[j] + K$3[s]) | 0;

    e = d;
    d = c;
    c = rotl30$1(b);
    b = a;
    a = t;
  }

  this._a = (a + this._a) | 0;
  this._b = (b + this._b) | 0;
  this._c = (c + this._c) | 0;
  this._d = (d + this._d) | 0;
  this._e = (e + this._e) | 0;
};

Sha.prototype._hash = function () {
  var H = Buffer$6.allocUnsafe(20);

  H.writeInt32BE(this._a | 0, 0);
  H.writeInt32BE(this._b | 0, 4);
  H.writeInt32BE(this._c | 0, 8);
  H.writeInt32BE(this._d | 0, 12);
  H.writeInt32BE(this._e | 0, 16);

  return H
};

var sha = Sha;

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits$4 = inheritsExports;
var Hash$4 = hash;
var Buffer$5 = safeBufferExports.Buffer;

var K$2 = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
];

var W$4 = new Array(80);

function Sha1 () {
  this.init();
  this._w = W$4;

  Hash$4.call(this, 64, 56);
}

inherits$4(Sha1, Hash$4);

Sha1.prototype.init = function () {
  this._a = 0x67452301;
  this._b = 0xefcdab89;
  this._c = 0x98badcfe;
  this._d = 0x10325476;
  this._e = 0xc3d2e1f0;

  return this
};

function rotl1 (num) {
  return (num << 1) | (num >>> 31)
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha1.prototype._update = function (M) {
  var W = this._w;

  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
  for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20);
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K$2[s]) | 0;

    e = d;
    d = c;
    c = rotl30(b);
    b = a;
    a = t;
  }

  this._a = (a + this._a) | 0;
  this._b = (b + this._b) | 0;
  this._c = (c + this._c) | 0;
  this._d = (d + this._d) | 0;
  this._e = (e + this._e) | 0;
};

Sha1.prototype._hash = function () {
  var H = Buffer$5.allocUnsafe(20);

  H.writeInt32BE(this._a | 0, 0);
  H.writeInt32BE(this._b | 0, 4);
  H.writeInt32BE(this._c | 0, 8);
  H.writeInt32BE(this._d | 0, 12);
  H.writeInt32BE(this._e | 0, 16);

  return H
};

var sha1 = Sha1;

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits$3 = inheritsExports;
var Hash$3 = hash;
var Buffer$4 = safeBufferExports.Buffer;

var K$1 = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
];

var W$3 = new Array(64);

function Sha256$1 () {
  this.init();

  this._w = W$3; // new Array(64)

  Hash$3.call(this, 64, 56);
}

inherits$3(Sha256$1, Hash$3);

Sha256$1.prototype.init = function () {
  this._a = 0x6a09e667;
  this._b = 0xbb67ae85;
  this._c = 0x3c6ef372;
  this._d = 0xa54ff53a;
  this._e = 0x510e527f;
  this._f = 0x9b05688c;
  this._g = 0x1f83d9ab;
  this._h = 0x5be0cd19;

  return this
};

function ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj$1 (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0$1 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function sigma1$1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256$1.prototype._update = function (M) {
  var W = this._w;

  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;
  var f = this._f | 0;
  var g = this._g | 0;
  var h = this._h | 0;

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;

  for (var j = 0; j < 64; ++j) {
    var T1 = (h + sigma1$1(e) + ch(e, f, g) + K$1[j] + W[j]) | 0;
    var T2 = (sigma0$1(a) + maj$1(a, b, c)) | 0;

    h = g;
    g = f;
    f = e;
    e = (d + T1) | 0;
    d = c;
    c = b;
    b = a;
    a = (T1 + T2) | 0;
  }

  this._a = (a + this._a) | 0;
  this._b = (b + this._b) | 0;
  this._c = (c + this._c) | 0;
  this._d = (d + this._d) | 0;
  this._e = (e + this._e) | 0;
  this._f = (f + this._f) | 0;
  this._g = (g + this._g) | 0;
  this._h = (h + this._h) | 0;
};

Sha256$1.prototype._hash = function () {
  var H = Buffer$4.allocUnsafe(32);

  H.writeInt32BE(this._a, 0);
  H.writeInt32BE(this._b, 4);
  H.writeInt32BE(this._c, 8);
  H.writeInt32BE(this._d, 12);
  H.writeInt32BE(this._e, 16);
  H.writeInt32BE(this._f, 20);
  H.writeInt32BE(this._g, 24);
  H.writeInt32BE(this._h, 28);

  return H
};

var sha256 = Sha256$1;

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits$2 = inheritsExports;
var Sha256 = sha256;
var Hash$2 = hash;
var Buffer$3 = safeBufferExports.Buffer;

var W$2 = new Array(64);

function Sha224 () {
  this.init();

  this._w = W$2; // new Array(64)

  Hash$2.call(this, 64, 56);
}

inherits$2(Sha224, Sha256);

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8;
  this._b = 0x367cd507;
  this._c = 0x3070dd17;
  this._d = 0xf70e5939;
  this._e = 0xffc00b31;
  this._f = 0x68581511;
  this._g = 0x64f98fa7;
  this._h = 0xbefa4fa4;

  return this
};

Sha224.prototype._hash = function () {
  var H = Buffer$3.allocUnsafe(28);

  H.writeInt32BE(this._a, 0);
  H.writeInt32BE(this._b, 4);
  H.writeInt32BE(this._c, 8);
  H.writeInt32BE(this._d, 12);
  H.writeInt32BE(this._e, 16);
  H.writeInt32BE(this._f, 20);
  H.writeInt32BE(this._g, 24);

  return H
};

var sha224 = Sha224;

var inherits$1 = inheritsExports;
var Hash$1 = hash;
var Buffer$2 = safeBufferExports.Buffer;

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

var W$1 = new Array(160);

function Sha512 () {
  this.init();
  this._w = W$1;

  Hash$1.call(this, 128, 112);
}

inherits$1(Sha512, Hash$1);

Sha512.prototype.init = function () {
  this._ah = 0x6a09e667;
  this._bh = 0xbb67ae85;
  this._ch = 0x3c6ef372;
  this._dh = 0xa54ff53a;
  this._eh = 0x510e527f;
  this._fh = 0x9b05688c;
  this._gh = 0x1f83d9ab;
  this._hh = 0x5be0cd19;

  this._al = 0xf3bcc908;
  this._bl = 0x84caa73b;
  this._cl = 0xfe94f82b;
  this._dl = 0x5f1d36f1;
  this._el = 0xade682d1;
  this._fl = 0x2b3e6c1f;
  this._gl = 0xfb41bd6b;
  this._hl = 0x137e2179;

  return this
};

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
}

function sigma1 (x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
}

function Gamma0 (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
}

function Gamma0l (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
}

function Gamma1 (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
}

function Gamma1l (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
}

function getCarry (a, b) {
  return (a >>> 0) < (b >>> 0) ? 1 : 0
}

Sha512.prototype._update = function (M) {
  var W = this._w;

  var ah = this._ah | 0;
  var bh = this._bh | 0;
  var ch = this._ch | 0;
  var dh = this._dh | 0;
  var eh = this._eh | 0;
  var fh = this._fh | 0;
  var gh = this._gh | 0;
  var hh = this._hh | 0;

  var al = this._al | 0;
  var bl = this._bl | 0;
  var cl = this._cl | 0;
  var dl = this._dl | 0;
  var el = this._el | 0;
  var fl = this._fl | 0;
  var gl = this._gl | 0;
  var hl = this._hl | 0;

  for (var i = 0; i < 32; i += 2) {
    W[i] = M.readInt32BE(i * 4);
    W[i + 1] = M.readInt32BE(i * 4 + 4);
  }
  for (; i < 160; i += 2) {
    var xh = W[i - 15 * 2];
    var xl = W[i - 15 * 2 + 1];
    var gamma0 = Gamma0(xh, xl);
    var gamma0l = Gamma0l(xl, xh);

    xh = W[i - 2 * 2];
    xl = W[i - 2 * 2 + 1];
    var gamma1 = Gamma1(xh, xl);
    var gamma1l = Gamma1l(xl, xh);

    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    var Wi7h = W[i - 7 * 2];
    var Wi7l = W[i - 7 * 2 + 1];

    var Wi16h = W[i - 16 * 2];
    var Wi16l = W[i - 16 * 2 + 1];

    var Wil = (gamma0l + Wi7l) | 0;
    var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0;
    Wil = (Wil + gamma1l) | 0;
    Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0;
    Wil = (Wil + Wi16l) | 0;
    Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0;

    W[i] = Wih;
    W[i + 1] = Wil;
  }

  for (var j = 0; j < 160; j += 2) {
    Wih = W[j];
    Wil = W[j + 1];

    var majh = maj(ah, bh, ch);
    var majl = maj(al, bl, cl);

    var sigma0h = sigma0(ah, al);
    var sigma0l = sigma0(al, ah);
    var sigma1h = sigma1(eh, el);
    var sigma1l = sigma1(el, eh);

    // t1 = h + sigma1 + ch + K[j] + W[j]
    var Kih = K[j];
    var Kil = K[j + 1];

    var chh = Ch(eh, fh, gh);
    var chl = Ch(el, fl, gl);

    var t1l = (hl + sigma1l) | 0;
    var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0;
    t1l = (t1l + chl) | 0;
    t1h = (t1h + chh + getCarry(t1l, chl)) | 0;
    t1l = (t1l + Kil) | 0;
    t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0;
    t1l = (t1l + Wil) | 0;
    t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0;

    // t2 = sigma0 + maj
    var t2l = (sigma0l + majl) | 0;
    var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0;

    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    el = (dl + t1l) | 0;
    eh = (dh + t1h + getCarry(el, dl)) | 0;
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah;
    bl = al;
    al = (t1l + t2l) | 0;
    ah = (t1h + t2h + getCarry(al, t1l)) | 0;
  }

  this._al = (this._al + al) | 0;
  this._bl = (this._bl + bl) | 0;
  this._cl = (this._cl + cl) | 0;
  this._dl = (this._dl + dl) | 0;
  this._el = (this._el + el) | 0;
  this._fl = (this._fl + fl) | 0;
  this._gl = (this._gl + gl) | 0;
  this._hl = (this._hl + hl) | 0;

  this._ah = (this._ah + ah + getCarry(this._al, al)) | 0;
  this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0;
  this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0;
  this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0;
  this._eh = (this._eh + eh + getCarry(this._el, el)) | 0;
  this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0;
  this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0;
  this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0;
};

Sha512.prototype._hash = function () {
  var H = Buffer$2.allocUnsafe(64);

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset);
    H.writeInt32BE(l, offset + 4);
  }

  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  writeInt64BE(this._gh, this._gl, 48);
  writeInt64BE(this._hh, this._hl, 56);

  return H
};

var sha512 = Sha512;

var inherits = inheritsExports;
var SHA512 = sha512;
var Hash = hash;
var Buffer$1 = safeBufferExports.Buffer;

var W = new Array(160);

function Sha384 () {
  this.init();
  this._w = W;

  Hash.call(this, 128, 112);
}

inherits(Sha384, SHA512);

Sha384.prototype.init = function () {
  this._ah = 0xcbbb9d5d;
  this._bh = 0x629a292a;
  this._ch = 0x9159015a;
  this._dh = 0x152fecd8;
  this._eh = 0x67332667;
  this._fh = 0x8eb44a87;
  this._gh = 0xdb0c2e0d;
  this._hh = 0x47b5481d;

  this._al = 0xc1059ed8;
  this._bl = 0x367cd507;
  this._cl = 0x3070dd17;
  this._dl = 0xf70e5939;
  this._el = 0xffc00b31;
  this._fl = 0x68581511;
  this._gl = 0x64f98fa7;
  this._hl = 0xbefa4fa4;

  return this
};

Sha384.prototype._hash = function () {
  var H = Buffer$1.allocUnsafe(48);

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset);
    H.writeInt32BE(l, offset + 4);
  }

  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);

  return H
};

var sha384 = Sha384;

var exports = sha_js.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase();

  var Algorithm = exports[algorithm];
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
};

exports.sha = sha;
exports.sha1 = sha1;
exports.sha224 = sha224;
exports.sha256 = sha256;
exports.sha384 = sha384;
exports.sha512 = sha512;

var sha_jsExports = sha_js.exports;

var util$3 = {};

/** @type {import('.')} */
var esErrors = Error;

/** @type {import('./eval')} */
var _eval = EvalError;

/** @type {import('./range')} */
var range$2 = RangeError;

/** @type {import('./ref')} */
var ref = ReferenceError;

/** @type {import('./syntax')} */
var syntax = SyntaxError;

/** @type {import('./type')} */
var type$1 = TypeError;

/** @type {import('./uri')} */
var uri = URIError;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams;

var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

var test = {
	__proto__: null,
	foo: {}
};

var $Object = Object;

/** @type {import('.')} */
var hasProto$1 = function hasProto() {
	// @ts-expect-error: TS errors on an inherited property for some reason
	return { __proto__: test }.foo === test.foo
		&& !(test instanceof $Object);
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr$1 = Object.prototype.toString;
var max$2 = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max$2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var implementation = implementation$1;

var functionBind = Function.prototype.bind || implementation;

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$2 = functionBind;

/** @type {import('.')} */
var hasown = bind$2.call(call, $hasOwn);

var undefined$1;

var $Error = esErrors;
var $EvalError = _eval;
var $RangeError = range$2;
var $ReferenceError = ref;
var $SyntaxError$1 = syntax;
var $TypeError$3 = type$1;
var $URIError = uri;

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
	try {
		$gOPD$1({}, '');
	} catch (e) {
		$gOPD$1 = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$3();
};
var ThrowTypeError = $gOPD$1
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD$1(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = hasSymbols$1();
var hasProto = hasProto$1();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError$1,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$3,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind$1 = functionBind;
var hasOwn$1 = hasown;
var $concat$1 = bind$1.call(Function.call, Array.prototype.concat);
var $spliceApply = bind$1.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind$1.call(Function.call, String.prototype.replace);
var $strSlice = bind$1.call(Function.call, String.prototype.slice);
var $exec = bind$1.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError$1('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError$1('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace$1(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn$1(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$3('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError$1('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$3('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$3('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError$1('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat$1([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError$1('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$3('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD$1 && (i + 1) >= parts.length) {
				var desc = $gOPD$1(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn$1(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind$1 = {exports: {}};

var esDefineProperty;
var hasRequiredEsDefineProperty;

function requireEsDefineProperty () {
	if (hasRequiredEsDefineProperty) return esDefineProperty;
	hasRequiredEsDefineProperty = 1;

	var GetIntrinsic = getIntrinsic;

	/** @type {import('.')} */
	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	esDefineProperty = $defineProperty;
	return esDefineProperty;
}

var GetIntrinsic$3 = getIntrinsic;

var $gOPD = GetIntrinsic$3('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

var gopd$1 = $gOPD;

var $defineProperty$1 = requireEsDefineProperty();

var $SyntaxError = syntax;
var $TypeError$2 = type$1;

var gopd = gopd$1;

/** @type {import('.')} */
var defineDataProperty = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError$2('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError$2('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError$2('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError$2('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError$2('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError$2('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty$1) {
		$defineProperty$1(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};

var $defineProperty = requireEsDefineProperty();

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

var hasPropertyDescriptors_1 = hasPropertyDescriptors;

var GetIntrinsic$2 = getIntrinsic;
var define$1 = defineDataProperty;
var hasDescriptors = hasPropertyDescriptors_1();
var gOPD = gopd$1;

var $TypeError$1 = type$1;
var $floor$1 = GetIntrinsic$2('%Math.floor%');

/** @typedef {(...args: unknown[]) => unknown} Func */

/** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */
var setFunctionLength = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError$1('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor$1(length) !== length) {
		throw new $TypeError$1('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define$1(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define$1(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};

callBind$1.exports;

(function (module) {

	var bind = functionBind;
	var GetIntrinsic = getIntrinsic;
	var setFunctionLength$1 = setFunctionLength;

	var $TypeError = type$1;
	var $apply = GetIntrinsic('%Function.prototype.apply%');
	var $call = GetIntrinsic('%Function.prototype.call%');
	var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

	var $defineProperty = requireEsDefineProperty();
	var $max = GetIntrinsic('%Math.max%');

	module.exports = function callBind(originalFunction) {
		if (typeof originalFunction !== 'function') {
			throw new $TypeError('a function is required');
		}
		var func = $reflectApply(bind, $call, arguments);
		return setFunctionLength$1(
			func,
			1 + $max(0, originalFunction.length - (arguments.length - 1)),
			true
		);
	};

	var applyBind = function applyBind() {
		return $reflectApply(bind, $apply, arguments);
	};

	if ($defineProperty) {
		$defineProperty(module.exports, 'apply', { value: applyBind });
	} else {
		module.exports.apply = applyBind;
	} 
} (callBind$1));

var callBindExports = callBind$1.exports;

var GetIntrinsic$1 = getIntrinsic;

var callBind = callBindExports;

var $indexOf = callBind(GetIntrinsic$1('String.prototype.indexOf'));

var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic$1(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var util_inspect = require$$0$3.inspect;

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = util_inspect;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has$3(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has$3(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray$5(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp$1(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray$5(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */
    if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
    if (obj === commonjsGlobal) {
        return '{ [object globalThis] }';
    }
    if (!isDate$1(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray$5(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate$1(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp$1(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has$3(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray$5(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has$3(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

var GetIntrinsic = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;

var $TypeError = type$1;
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.
*/
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

var sideChannel = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats$3 = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var formats$2 = formats$3;

var has$2 = Object.prototype.hasOwnProperty;
var isArray$4 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$4(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge$2 = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$4(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$4(target) && !isArray$4(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$4(target) && isArray$4(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign$1 = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats$2.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$4(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign$1,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge$2
};

var getSideChannel = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$3 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray$3(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats$1['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$1.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify$1 = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$3(obj)) {
        obj = utils$1.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$3(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils$1.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray$3(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray$3(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$3(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray$3(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats$1['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats$1.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];

    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$3(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$3(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify$1(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var utils = utils$2;

var has = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };

    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray$2(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var parse$8 = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

var stringify = stringify_1;
var parse$7 = parse$8;
var formats = formats$3;

var lib$1 = {
    formats: formats,
    parse: parse$7,
    stringify: stringify
};

var types$1 = {};

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProviderType = exports.RegExpString = exports.IntNumber = exports.BigIntString = exports.AddressString = exports.HexString = exports.OpaqueType = void 0;
	function OpaqueType() {
	    return (value) => value;
	}
	exports.OpaqueType = OpaqueType;
	exports.HexString = OpaqueType();
	exports.AddressString = OpaqueType();
	exports.BigIntString = OpaqueType();
	function IntNumber(num) {
	    return Math.floor(num);
	}
	exports.IntNumber = IntNumber;
	exports.RegExpString = OpaqueType();
	(function (ProviderType) {
	    ProviderType["CoinbaseWallet"] = "CoinbaseWallet";
	    ProviderType["MetaMask"] = "MetaMask";
	    ProviderType["Unselected"] = "";
	})(exports.ProviderType || (exports.ProviderType = {})); 
} (types$1));

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$e = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(util$3, "__esModule", { value: true });
util$3.isInIFrame = util$3.createQrUrl = util$3.getFavicon = util$3.range = util$3.isBigNumber = util$3.ensureParsedJSONObject = util$3.ensureBN = util$3.ensureRegExpString = util$3.ensureIntNumber = util$3.ensureBuffer = util$3.ensureAddressString = util$3.ensureEvenLengthHexString = util$3.ensureHexString = util$3.isHexString = util$3.prepend0x = util$3.strip0x = util$3.has0xPrefix = util$3.hexStringFromIntNumber = util$3.intNumberFromHexString = util$3.bigIntStringFromBN = util$3.hexStringFromBuffer = util$3.hexStringToUint8Array = util$3.uint8ArrayToHex = util$3.randomBytesHex = void 0;
const bn_js_1$1 = __importDefault$e(bnExports);
const qs_1 = lib$1;
const errors_1$3 = errors$1;
const types_1$3 = types$1;
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */
function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
util$3.randomBytesHex = randomBytesHex;
function uint8ArrayToHex(value) {
    return [...value].map(b => b.toString(16).padStart(2, "0")).join("");
}
util$3.uint8ArrayToHex = uint8ArrayToHex;
function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}
util$3.hexStringToUint8Array = hexStringToUint8Array;
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString("hex");
    return (0, types_1$3.HexString)(includePrefix ? "0x" + hex : hex);
}
util$3.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBN(bn) {
    return (0, types_1$3.BigIntString)(bn.toString(10));
}
util$3.bigIntStringFromBN = bigIntStringFromBN;
function intNumberFromHexString(hex) {
    return (0, types_1$3.IntNumber)(new bn_js_1$1.default(ensureEvenLengthHexString(hex, false), 16).toNumber());
}
util$3.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
    return (0, types_1$3.HexString)("0x" + new bn_js_1$1.default(num).toString(16));
}
util$3.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
    return str.startsWith("0x") || str.startsWith("0X");
}
util$3.has0xPrefix = has0xPrefix;
function strip0x(hex) {
    if (has0xPrefix(hex)) {
        return hex.slice(2);
    }
    return hex;
}
util$3.strip0x = strip0x;
function prepend0x(hex) {
    if (has0xPrefix(hex)) {
        return "0x" + hex.slice(2);
    }
    return "0x" + hex;
}
util$3.prepend0x = prepend0x;
function isHexString$1(hex) {
    if (typeof hex !== "string") {
        return false;
    }
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
util$3.isHexString = isHexString$1;
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === "string") {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) {
            return (0, types_1$3.HexString)(includePrefix ? "0x" + s : s);
        }
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
util$3.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) {
        h = (0, types_1$3.HexString)("0" + h);
    }
    return includePrefix ? (0, types_1$3.HexString)("0x" + h) : h;
}
util$3.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
    if (typeof str === "string") {
        const s = strip0x(str).toLowerCase();
        if (isHexString$1(s) && s.length === 40) {
            return (0, types_1$3.AddressString)(prepend0x(s));
        }
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
util$3.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) {
        return str;
    }
    if (typeof str === "string") {
        if (isHexString$1(str)) {
            const s = ensureEvenLengthHexString(str, false);
            return Buffer.from(s, "hex");
        }
        else {
            return Buffer.from(str, "utf8");
        }
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
util$3.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
    if (typeof num === "number" && Number.isInteger(num)) {
        return (0, types_1$3.IntNumber)(num);
    }
    if (typeof num === "string") {
        if (INT_STRING_REGEX.test(num)) {
            return (0, types_1$3.IntNumber)(Number(num));
        }
        if (isHexString$1(num)) {
            return (0, types_1$3.IntNumber)(new bn_js_1$1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
        }
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
util$3.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
        return (0, types_1$3.RegExpString)(regExp.toString());
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
}
util$3.ensureRegExpString = ensureRegExpString;
function ensureBN(val) {
    if (val !== null && (bn_js_1$1.default.isBN(val) || isBigNumber(val))) {
        return new bn_js_1$1.default(val.toString(10), 10);
    }
    if (typeof val === "number") {
        return new bn_js_1$1.default(ensureIntNumber(val));
    }
    if (typeof val === "string") {
        if (INT_STRING_REGEX.test(val)) {
            return new bn_js_1$1.default(val, 10);
        }
        if (isHexString$1(val)) {
            return new bn_js_1$1.default(ensureEvenLengthHexString(val, false), 16);
        }
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
util$3.ensureBN = ensureBN;
function ensureParsedJSONObject(val) {
    if (typeof val === "string") {
        return JSON.parse(val);
    }
    if (typeof val === "object") {
        return val;
    }
    throw errors_1$3.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
util$3.ensureParsedJSONObject = ensureParsedJSONObject;
function isBigNumber(val) {
    if (val == null || typeof val.constructor !== "function") {
        return false;
    }
    const { constructor } = val;
    return (typeof constructor.config === "function" &&
        typeof constructor.EUCLID === "number");
}
util$3.isBigNumber = isBigNumber;
function range$1(start, stop) {
    return Array.from({ length: stop - start }, (_, i) => start + i);
}
util$3.range = range$1;
function getFavicon() {
    const el = document.querySelector('link[sizes="192x192"]') ||
        document.querySelector('link[sizes="180x180"]') ||
        document.querySelector('link[rel="icon"]') ||
        document.querySelector('link[rel="shortcut icon"]');
    const { protocol, host } = document.location;
    const href = el ? el.getAttribute("href") : null;
    if (!href || href.startsWith("javascript:")) {
        return null;
    }
    if (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("data:")) {
        return href;
    }
    if (href.startsWith("//")) {
        return protocol + href;
    }
    return `${protocol}//${host}${href}`;
}
util$3.getFavicon = getFavicon;
function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version, chainId) {
    const sessionIdKey = isParentConnection ? "parent-id" : "id";
    const query = (0, qs_1.stringify)({
        [sessionIdKey]: sessionId,
        secret: sessionSecret,
        server: serverUrl,
        v: version,
        chainId,
    });
    const qrUrl = `${serverUrl}/#/link?${query}`;
    return qrUrl;
}
util$3.createQrUrl = createQrUrl;
function isInIFrame() {
    try {
        return window.frameElement !== null;
    }
    catch (e) {
        return false;
    }
}
util$3.isInIFrame = isInIFrame;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(Session$1, "__esModule", { value: true });
Session$1.Session = void 0;
const sha_js_1 = sha_jsExports;
const util_1$7 = util$3;
const STORAGE_KEY_SESSION_ID = "session:id";
const STORAGE_KEY_SESSION_SECRET = "session:secret";
const STORAGE_KEY_SESSION_LINKED = "session:linked";
class Session {
    constructor(storage, id, secret, linked) {
        this._storage = storage;
        this._id = id || (0, util_1$7.randomBytesHex)(16);
        this._secret = secret || (0, util_1$7.randomBytesHex)(32);
        this._key = new sha_js_1.sha256()
            .update(`${this._id}, ${this._secret} WalletLink`) // ensure old sessions stay connected
            .digest("hex");
        this._linked = !!linked;
    }
    static load(storage) {
        const id = storage.getItem(STORAGE_KEY_SESSION_ID);
        const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
        const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
        if (id && secret) {
            return new Session(storage, id, secret, linked === "1");
        }
        return null;
    }
    /**
     * Takes in a session ID and returns the sha256 hash of it.
     * @param sessionId session ID
     */
    static hash(sessionId) {
        return new sha_js_1.sha256().update(sessionId).digest("hex");
    }
    get id() {
        return this._id;
    }
    get secret() {
        return this._secret;
    }
    get key() {
        return this._key;
    }
    get linked() {
        return this._linked;
    }
    set linked(val) {
        this._linked = val;
        this.persistLinked();
    }
    save() {
        this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
        this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
        this.persistLinked();
        return this;
    }
    persistLinked() {
        this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
    }
}
Session$1.Session = Session;

var WalletSDKRelayAbstract$1 = {};

Object.defineProperty(WalletSDKRelayAbstract$1, "__esModule", { value: true });
WalletSDKRelayAbstract$1.WalletSDKRelayAbstract = WalletSDKRelayAbstract$1.APP_VERSION_KEY = WalletSDKRelayAbstract$1.LOCAL_STORAGE_ADDRESSES_KEY = WalletSDKRelayAbstract$1.WALLET_USER_NAME_KEY = void 0;
const errors_1$2 = errors$1;
WalletSDKRelayAbstract$1.WALLET_USER_NAME_KEY = "walletUsername";
WalletSDKRelayAbstract$1.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
WalletSDKRelayAbstract$1.APP_VERSION_KEY = "AppVersion";
class WalletSDKRelayAbstract {
    async makeEthereumJSONRPCRequest(request, jsonRpcUrl) {
        if (!jsonRpcUrl)
            throw new Error("Error: No jsonRpcUrl provided");
        return window
            .fetch(jsonRpcUrl, {
            method: "POST",
            body: JSON.stringify(request),
            mode: "cors",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(json => {
            if (!json) {
                throw errors_1$2.standardErrors.rpc.parse({});
            }
            const response = json;
            const { error } = response;
            if (error) {
                throw (0, errors_1$2.serializeError)(error, request.method);
            }
            return response;
        });
    }
}
WalletSDKRelayAbstract$1.WalletSDKRelayAbstract = WalletSDKRelayAbstract;

// Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
// Original code licensed under the Mozilla Public License Version 2.0

const createKeccakHash = js;
const BN$1 = bnExports;

/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */
function zeros (bytes) {
  return Buffer.allocUnsafe(bytes).fill(0)
}

/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method setLength
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */
function setLength (msg, length, right) {
  const buf = zeros(length);
  msg = toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf
    }
    return msg.slice(0, length)
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf
    }
    return msg.slice(-length)
  }
}

/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */
function setLengthRight (msg, length) {
  return setLength(msg, length, true)
}

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v);
    } else if (typeof v === 'string') {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex');
      } else {
        v = Buffer.from(v);
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v);
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0);
    } else if (BN$1.isBN(v)) {
      v = v.toArrayLike(Buffer);
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = Buffer.from(v.toArray());
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
function bufferToHex (buf) {
  buf = toBuffer(buf);
  return '0x' + buf.toString('hex')
}

/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
function keccak (a, bits) {
  a = toBuffer(a);
  if (!bits) bits = 256;

  return createKeccakHash('keccak' + bits).update(a).digest()
}

function padToEven (str) {
  return str.length % 2 ? '0' + str : str
}

function isHexString (str) {
  return typeof str === 'string' && str.match(/^0x[0-9A-Fa-f]*$/)
}

function stripHexPrefix (str) {
  if (typeof str === 'string' && str.startsWith('0x')) {
    return str.slice(2)
  }
  return str
}

var util$2 = {
  zeros,
  setLength,
  setLengthRight,
  isHexString,
  stripHexPrefix,
  toBuffer,
  bufferToHex,
  keccak
};

// Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
// Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi

const util$1 = util$2;
const BN = bnExports;

// Convert from short to canonical names
// FIXME: optimise or make this nicer?
function elementaryName (name) {
  if (name.startsWith('int[')) {
    return 'int256' + name.slice(3)
  } else if (name === 'int') {
    return 'int256'
  } else if (name.startsWith('uint[')) {
    return 'uint256' + name.slice(4)
  } else if (name === 'uint') {
    return 'uint256'
  } else if (name.startsWith('fixed[')) {
    return 'fixed128x128' + name.slice(5)
  } else if (name === 'fixed') {
    return 'fixed128x128'
  } else if (name.startsWith('ufixed[')) {
    return 'ufixed128x128' + name.slice(6)
  } else if (name === 'ufixed') {
    return 'ufixed128x128'
  }
  return name
}

// Parse N from type<N>
function parseTypeN (type) {
  return parseInt(/^\D+(\d+)$/.exec(type)[1], 10)
}

// Parse N,M from type<N>x<M>
function parseTypeNxM (type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
  return [ parseInt(tmp[1], 10), parseInt(tmp[2], 10) ]
}

// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray (type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/);
  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10)
  }
  return null
}

function parseNumber (arg) {
  var type = typeof arg;
  if (type === 'string') {
    if (util$1.isHexString(arg)) {
      return new BN(util$1.stripHexPrefix(arg), 16)
    } else {
      return new BN(arg, 10)
    }
  } else if (type === 'number') {
    return new BN(arg)
  } else if (arg.toArray) {
    // assume this is a BN for the moment, replace with BN.isBN soon
    return arg
  } else {
    throw new Error('Argument is not a number')
  }
}

// Encodes a single item (can be dynamic array)
// @returns: Buffer
function encodeSingle (type, arg) {
  var size, num, ret, i;

  if (type === 'address') {
    return encodeSingle('uint160', parseNumber(arg))
  } else if (type === 'bool') {
    return encodeSingle('uint8', arg ? 1 : 0)
  } else if (type === 'string') {
    return encodeSingle('bytes', new Buffer(arg, 'utf8'))
  } else if (isArray$1(type)) {
    // this part handles fixed-length ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    if (typeof arg.length === 'undefined') {
      throw new Error('Not an array?')
    }
    size = parseTypeArray(type);
    if (size !== 'dynamic' && size !== 0 && arg.length > size) {
      throw new Error('Elements exceed array size: ' + size)
    }
    ret = [];
    type = type.slice(0, type.lastIndexOf('['));
    if (typeof arg === 'string') {
      arg = JSON.parse(arg);
    }
    for (i in arg) {
      ret.push(encodeSingle(type, arg[i]));
    }
    if (size === 'dynamic') {
      var length = encodeSingle('uint256', arg.length);
      ret.unshift(length);
    }
    return Buffer.concat(ret)
  } else if (type === 'bytes') {
    arg = new Buffer(arg);

    ret = Buffer.concat([ encodeSingle('uint256', arg.length), arg ]);

    if ((arg.length % 32) !== 0) {
      ret = Buffer.concat([ ret, util$1.zeros(32 - (arg.length % 32)) ]);
    }

    return ret
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type);
    if (size < 1 || size > 32) {
      throw new Error('Invalid bytes<N> width: ' + size)
    }

    return util$1.setLengthRight(arg, 32)
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type);
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid uint<N> width: ' + size)
    }

    num = parseNumber(arg);
    if (num.bitLength() > size) {
      throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    if (num < 0) {
      throw new Error('Supplied uint is negative')
    }

    return num.toArrayLike(Buffer, 'be', 32)
  } else if (type.startsWith('int')) {
    size = parseTypeN(type);
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid int<N> width: ' + size)
    }

    num = parseNumber(arg);
    if (num.bitLength() > size) {
      throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    return num.toTwos(256).toArrayLike(Buffer, 'be', 32)
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type);

    num = parseNumber(arg);

    if (num < 0) {
      throw new Error('Supplied ufixed is negative')
    }

    return encodeSingle('uint256', num.mul(new BN(2).pow(new BN(size[1]))))
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type);

    return encodeSingle('int256', parseNumber(arg).mul(new BN(2).pow(new BN(size[1]))))
  }

  throw new Error('Unsupported or invalid type: ' + type)
}

// Is a type dynamic?
function isDynamic (type) {
  // FIXME: handle all types? I don't think anything is missing now
  return (type === 'string') || (type === 'bytes') || (parseTypeArray(type) === 'dynamic')
}

// Is a type an array?
function isArray$1 (type) {
  return type.lastIndexOf(']') === type.length - 1
}

// Encode a method/event with arguments
// @types an array of string type names
// @args  an array of the appropriate values
function rawEncode (types, values) {
  var output = [];
  var data = [];

  var headLength = 32 * types.length;

  for (var i in types) {
    var type = elementaryName(types[i]);
    var value = values[i];
    var cur = encodeSingle(type, value);

    // Use the head/tail method for storing dynamic data
    if (isDynamic(type)) {
      output.push(encodeSingle('uint256', headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output.push(cur);
    }
  }

  return Buffer.concat(output.concat(data))
}

function solidityPack (types, values) {
  if (types.length !== values.length) {
    throw new Error('Number of types are not matching the values')
  }

  var size, num;
  var ret = [];

  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i]);
    var value = values[i];

    if (type === 'bytes') {
      ret.push(value);
    } else if (type === 'string') {
      ret.push(new Buffer(value, 'utf8'));
    } else if (type === 'bool') {
      ret.push(new Buffer(value ? '01' : '00', 'hex'));
    } else if (type === 'address') {
      ret.push(util$1.setLength(value, 20));
    } else if (type.startsWith('bytes')) {
      size = parseTypeN(type);
      if (size < 1 || size > 32) {
        throw new Error('Invalid bytes<N> width: ' + size)
      }

      ret.push(util$1.setLengthRight(value, size));
    } else if (type.startsWith('uint')) {
      size = parseTypeN(type);
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid uint<N> width: ' + size)
      }

      num = parseNumber(value);
      if (num.bitLength() > size) {
        throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength())
      }

      ret.push(num.toArrayLike(Buffer, 'be', size / 8));
    } else if (type.startsWith('int')) {
      size = parseTypeN(type);
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid int<N> width: ' + size)
      }

      num = parseNumber(value);
      if (num.bitLength() > size) {
        throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength())
      }

      ret.push(num.toTwos(size).toArrayLike(Buffer, 'be', size / 8));
    } else {
      // FIXME: support all other types
      throw new Error('Unsupported or invalid type: ' + type)
    }
  }

  return Buffer.concat(ret)
}

function soliditySHA3 (types, values) {
  return util$1.keccak(solidityPack(types, values))
}

var abi$1 = {
  rawEncode,
  solidityPack,
  soliditySHA3
};

const util = util$2;
const abi = abi$1;

const TYPED_MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    types: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {type: 'string'},
            type: {type: 'string'},
          },
          required: ['name', 'type'],
        },
      },
    },
    primaryType: {type: 'string'},
    domain: {type: 'object'},
    message: {type: 'object'},
  },
  required: ['types', 'primaryType', 'domain', 'message'],
};

/**
 * A collection of utility functions used for signing typed data
 */
const TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData (primaryType, data, types, useV4 = true) {
    const encodedTypes = ['bytes32'];
    const encodedValues = [this.hashType(primaryType, types)];

    if(useV4) {
      const encodeField = (name, type, value) => {
        if (types[type] !== undefined) {
          return ['bytes32', value == null ?
            '0x0000000000000000000000000000000000000000000000000000000000000000' :
            util.keccak(this.encodeData(type, value, types, useV4))]
        }

        if(value === undefined)
          throw new Error(`missing value for field ${name} of type ${type}`)

        if (type === 'bytes') {
          return ['bytes32', util.keccak(value)]
        }

        if (type === 'string') {
          // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
          if (typeof value === 'string') {
            value = Buffer.from(value, 'utf8');
          }
          return ['bytes32', util.keccak(value)]
        }

        if (type.lastIndexOf(']') === type.length - 1) {
          const parsedType = type.slice(0, type.lastIndexOf('['));
          const typeValuePairs = value.map(item =>
            encodeField(name, parsedType, item));
          return ['bytes32', util.keccak(abi.rawEncode(
            typeValuePairs.map(([type]) => type),
            typeValuePairs.map(([, value]) => value),
          ))]
        }

        return [type, value]
      };

      for (const field of types[primaryType]) {
        const [type, value] = encodeField(field.name, field.type, data[field.name]);
        encodedTypes.push(type);
        encodedValues.push(value);
      }
    } else {
      for (const field of types[primaryType]) {
        let value = data[field.name];
        if (value !== undefined) {
          if (field.type === 'bytes') {
            encodedTypes.push('bytes32');
            value = util.keccak(value);
            encodedValues.push(value);
          } else if (field.type === 'string') {
            encodedTypes.push('bytes32');
            // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
            if (typeof value === 'string') {
              value = Buffer.from(value, 'utf8');
            }
            value = util.keccak(value);
            encodedValues.push(value);
          } else if (types[field.type] !== undefined) {
            encodedTypes.push('bytes32');
            value = util.keccak(this.encodeData(field.type, value, types, useV4));
            encodedValues.push(value);
          } else if (field.type.lastIndexOf(']') === field.type.length - 1) {
            throw new Error('Arrays currently unimplemented in encodeData')
          } else {
            encodedTypes.push(field.type);
            encodedValues.push(value);
          }
        }
      }
    }

    return abi.rawEncode(encodedTypes, encodedValues)
  },

  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType (primaryType, types) {
    let result = '';
    let deps = this.findTypeDependencies(primaryType, types).filter(dep => dep !== primaryType);
    deps = [primaryType].concat(deps.sort());
    for (const type of deps) {
      const children = types[type];
      if (!children) {
        throw new Error('No type definition specified: ' + type)
      }
      result += type + '(' + types[type].map(({ name, type }) => type + ' ' + name).join(',') + ')';
    }
    return result
  },

  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies (primaryType, types, results = []) {
    primaryType = primaryType.match(/^\w*/)[0];
    if (results.includes(primaryType) || types[primaryType] === undefined) { return results }
    results.push(primaryType);
    for (const field of types[primaryType]) {
      for (const dep of this.findTypeDependencies(field.type, types, results)) {
        !results.includes(dep) && results.push(dep);
      }
    }
    return results
  },

  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct (primaryType, data, types, useV4 = true) {
    return util.keccak(this.encodeData(primaryType, data, types, useV4))
  },

  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType (primaryType, types) {
    return util.keccak(this.encodeType(primaryType, types))
  },

  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData (data) {
    const sanitizedData = {};
    for (const key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key]);
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
    }
    return sanitizedData
  },

  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash (typedData, useV4 = true) {
    const sanitizedData = this.sanitizeData(typedData);
    const parts = [Buffer.from('1901', 'hex')];
    parts.push(this.hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, useV4));
    if (sanitizedData.primaryType !== 'EIP712Domain') {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
    }
    return util.keccak(Buffer.concat(parts))
  },
};

var ethEip712Util = {
  TYPED_MESSAGE_SCHEMA,
  TypedDataUtils,

  hashForSignTypedDataLegacy: function (msgParams) {
    return typedSignatureHashLegacy(msgParams.data)
  },

  hashForSignTypedData_v3: function (msgParams) {
    return TypedDataUtils.hash(msgParams.data, false)
  },

  hashForSignTypedData_v4: function (msgParams) {
    return TypedDataUtils.hash(msgParams.data)
  },
};

/**
 * @param typedData - Array of data along with types, as per EIP712.
 * @returns Buffer
 */
function typedSignatureHashLegacy(typedData) {
  const error = new Error('Expect argument to be non-empty array');
  if (typeof typedData !== 'object' || !typedData.length) throw error

  const data = typedData.map(function (e) {
    return e.type === 'bytes' ? util.toBuffer(e.value) : e.value
  });
  const types = typedData.map(function (e) { return e.type });
  const schema = typedData.map(function (e) {
    if (!e.name) throw error
    return e.type + ' ' + e.name
  });

  return abi.soliditySHA3(
    ['bytes32', 'bytes32'],
    [
      abi.soliditySHA3(new Array(typedData.length).fill('string'), schema),
      abi.soliditySHA3(types, data)
    ]
  )
}

var FilterPolyfill$1 = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(FilterPolyfill$1, "__esModule", { value: true });
FilterPolyfill$1.filterFromParam = FilterPolyfill$1.FilterPolyfill = void 0;
const types_1$2 = types$1;
const util_1$6 = util$3;
const TIMEOUT = 5 * 60 * 1000; // 5 minutes
const JSONRPC_TEMPLATE = {
    jsonrpc: "2.0",
    id: 0,
};
class FilterPolyfill {
    constructor(provider) {
        this.logFilters = new Map(); // <id, filter>
        this.blockFilters = new Set(); // <id>
        this.pendingTransactionFilters = new Set(); // <id, true>
        this.cursors = new Map(); // <id, cursor>
        this.timeouts = new Map(); // <id, setTimeout id>
        this.nextFilterId = (0, types_1$2.IntNumber)(1);
        this.provider = provider;
    }
    async newFilter(param) {
        const filter = filterFromParam(param);
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, filter.fromBlock);
        console.log(`Installing new log filter(${id}):`, filter, "initial cursor position:", cursor);
        this.logFilters.set(id, filter);
        this.setFilterTimeout(id);
        return (0, util_1$6.hexStringFromIntNumber)(id);
    }
    async newBlockFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.blockFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1$6.hexStringFromIntNumber)(id);
    }
    async newPendingTransactionFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.pendingTransactionFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1$6.hexStringFromIntNumber)(id);
    }
    uninstallFilter(filterId) {
        const id = (0, util_1$6.intNumberFromHexString)(filterId);
        console.log(`Uninstalling filter (${id})`);
        this.deleteFilter(id);
        return true;
    }
    getFilterChanges(filterId) {
        const id = (0, util_1$6.intNumberFromHexString)(filterId);
        if (this.timeouts.has(id)) {
            // extend timeout
            this.setFilterTimeout(id);
        }
        if (this.logFilters.has(id)) {
            return this.getLogFilterChanges(id);
        }
        else if (this.blockFilters.has(id)) {
            return this.getBlockFilterChanges(id);
        }
        else if (this.pendingTransactionFilters.has(id)) {
            return this.getPendingTransactionFilterChanges(id);
        }
        return Promise.resolve(filterNotFoundError());
    }
    async getFilterLogs(filterId) {
        const id = (0, util_1$6.intNumberFromHexString)(filterId);
        const filter = this.logFilters.get(id);
        if (!filter) {
            return filterNotFoundError();
        }
        return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [paramFromFilter(filter)] }));
    }
    makeFilterId() {
        return (0, types_1$2.IntNumber)(++this.nextFilterId);
    }
    sendAsyncPromise(request) {
        return new Promise((resolve, reject) => {
            this.provider.sendAsync(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                if (Array.isArray(response) || response == null) {
                    return reject(new Error(`unexpected response received: ${JSON.stringify(response)}`));
                }
                resolve(response);
            });
        });
    }
    deleteFilter(id) {
        console.log(`Deleting filter (${id})`);
        this.logFilters.delete(id);
        this.blockFilters.delete(id);
        this.pendingTransactionFilters.delete(id);
        this.cursors.delete(id);
        this.timeouts.delete(id);
    }
    async getLogFilterChanges(id) {
        const filter = this.logFilters.get(id);
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition || !filter) {
            return filterNotFoundError();
        }
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const toBlock = filter.toBlock === "latest" ? currentBlockHeight : filter.toBlock;
        if (cursorPosition > currentBlockHeight) {
            return emptyResult();
        }
        if (cursorPosition > filter.toBlock) {
            return emptyResult();
        }
        console.log(`Fetching logs from ${cursorPosition} to ${toBlock} for filter ${id}`);
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [
                paramFromFilter(Object.assign(Object.assign({}, filter), { fromBlock: cursorPosition, toBlock })),
            ] }));
        if (Array.isArray(response.result)) {
            const blocks = response.result.map(log => (0, util_1$6.intNumberFromHexString)(log.blockNumber || "0x0"));
            const highestBlock = Math.max(...blocks);
            if (highestBlock && highestBlock > cursorPosition) {
                const newCursorPosition = (0, types_1$2.IntNumber)(highestBlock + 1);
                console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
                this.cursors.set(id, newCursorPosition);
            }
        }
        return response;
    }
    async getBlockFilterChanges(id) {
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition) {
            return filterNotFoundError();
        }
        const currentBlockHeight = await this.getCurrentBlockHeight();
        if (cursorPosition > currentBlockHeight) {
            return emptyResult();
        }
        console.log(`Fetching blocks from ${cursorPosition} to ${currentBlockHeight} for filter (${id})`);
        const blocks = (await Promise.all(
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        (0, util_1$6.range)(cursorPosition, currentBlockHeight + 1).map(i => this.getBlockHashByNumber((0, types_1$2.IntNumber)(i))))).filter(hash => !!hash);
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const newCursorPosition = (0, types_1$2.IntNumber)(cursorPosition + blocks.length);
        console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
        this.cursors.set(id, newCursorPosition);
        return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: blocks });
    }
    async getPendingTransactionFilterChanges(_id) {
        // pending transaction filters are not supported
        return Promise.resolve(emptyResult());
    }
    async setInitialCursorPosition(id, startBlock) {
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight
            ? startBlock
            : currentBlockHeight;
        this.cursors.set(id, initialCursorPosition);
        return initialCursorPosition;
    }
    setFilterTimeout(id) {
        const existing = this.timeouts.get(id);
        if (existing) {
            window.clearTimeout(existing);
        }
        const timeout = window.setTimeout(() => {
            console.log(`Filter (${id}) timed out`);
            this.deleteFilter(id);
        }, TIMEOUT);
        this.timeouts.set(id, timeout);
    }
    async getCurrentBlockHeight() {
        const { result } = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_blockNumber", params: [] }));
        return (0, util_1$6.intNumberFromHexString)((0, util_1$6.ensureHexString)(result));
    }
    async getBlockHashByNumber(blockNumber) {
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getBlockByNumber", params: [(0, util_1$6.hexStringFromIntNumber)(blockNumber), false] }));
        if (response.result && typeof response.result.hash === "string") {
            return (0, util_1$6.ensureHexString)(response.result.hash);
        }
        return null;
    }
}
FilterPolyfill$1.FilterPolyfill = FilterPolyfill;
function filterFromParam(param) {
    return {
        fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
        toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
        addresses: param.address === undefined
            ? null
            : Array.isArray(param.address)
                ? param.address
                : [param.address],
        topics: param.topics || [],
    };
}
FilterPolyfill$1.filterFromParam = filterFromParam;
function paramFromFilter(filter) {
    const param = {
        fromBlock: hexBlockHeightFromIntBlockHeight(filter.fromBlock),
        toBlock: hexBlockHeightFromIntBlockHeight(filter.toBlock),
        topics: filter.topics,
    };
    if (filter.addresses !== null) {
        param.address = filter.addresses;
    }
    return param;
}
function intBlockHeightFromHexBlockHeight(value) {
    if (value === undefined || value === "latest" || value === "pending") {
        return "latest";
    }
    else if (value === "earliest") {
        return (0, types_1$2.IntNumber)(0);
    }
    else if ((0, util_1$6.isHexString)(value)) {
        return (0, util_1$6.intNumberFromHexString)(value);
    }
    throw new Error(`Invalid block option: ${String(value)}`);
}
function hexBlockHeightFromIntBlockHeight(value) {
    if (value === "latest") {
        return value;
    }
    return (0, util_1$6.hexStringFromIntNumber)(value);
}
function filterNotFoundError() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { error: { code: -32000, message: "filter not found" } });
}
function emptyResult() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: [] });
}

var JSONRPC = {};

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.JSONRPCMethod = void 0;
	(function (JSONRPCMethod) {
	    // synchronous or asynchronous
	    JSONRPCMethod["eth_accounts"] = "eth_accounts";
	    JSONRPCMethod["eth_coinbase"] = "eth_coinbase";
	    JSONRPCMethod["net_version"] = "net_version";
	    JSONRPCMethod["eth_chainId"] = "eth_chainId";
	    JSONRPCMethod["eth_uninstallFilter"] = "eth_uninstallFilter";
	    // asynchronous only
	    JSONRPCMethod["eth_requestAccounts"] = "eth_requestAccounts";
	    JSONRPCMethod["eth_sign"] = "eth_sign";
	    JSONRPCMethod["eth_ecRecover"] = "eth_ecRecover";
	    JSONRPCMethod["personal_sign"] = "personal_sign";
	    JSONRPCMethod["personal_ecRecover"] = "personal_ecRecover";
	    JSONRPCMethod["eth_signTransaction"] = "eth_signTransaction";
	    JSONRPCMethod["eth_sendRawTransaction"] = "eth_sendRawTransaction";
	    JSONRPCMethod["eth_sendTransaction"] = "eth_sendTransaction";
	    JSONRPCMethod["eth_signTypedData_v1"] = "eth_signTypedData_v1";
	    JSONRPCMethod["eth_signTypedData_v2"] = "eth_signTypedData_v2";
	    JSONRPCMethod["eth_signTypedData_v3"] = "eth_signTypedData_v3";
	    JSONRPCMethod["eth_signTypedData_v4"] = "eth_signTypedData_v4";
	    JSONRPCMethod["eth_signTypedData"] = "eth_signTypedData";
	    JSONRPCMethod["cbWallet_arbitrary"] = "walletlink_arbitrary";
	    JSONRPCMethod["wallet_addEthereumChain"] = "wallet_addEthereumChain";
	    JSONRPCMethod["wallet_switchEthereumChain"] = "wallet_switchEthereumChain";
	    JSONRPCMethod["wallet_watchAsset"] = "wallet_watchAsset";
	    // asynchronous pub/sub
	    JSONRPCMethod["eth_subscribe"] = "eth_subscribe";
	    JSONRPCMethod["eth_unsubscribe"] = "eth_unsubscribe";
	    // asynchronous filter methods
	    JSONRPCMethod["eth_newFilter"] = "eth_newFilter";
	    JSONRPCMethod["eth_newBlockFilter"] = "eth_newBlockFilter";
	    JSONRPCMethod["eth_newPendingTransactionFilter"] = "eth_newPendingTransactionFilter";
	    JSONRPCMethod["eth_getFilterChanges"] = "eth_getFilterChanges";
	    JSONRPCMethod["eth_getFilterLogs"] = "eth_getFilterLogs";
	})(exports.JSONRPCMethod || (exports.JSONRPCMethod = {})); 
} (JSONRPC));

var SubscriptionManager$1 = {};

var dist$3 = {};

var PollingBlockTracker$1 = {};

var jsonRpcRandomId = IdIterator;

function IdIterator(opts){
  opts = opts || {};
  var max = opts.max || Number.MAX_SAFE_INTEGER;
  var idCounter = typeof opts.start !== 'undefined' ? opts.start : Math.floor(Math.random() * max);

  return function createRandomId () {
    idCounter = idCounter % max;
    return idCounter++
  }

}

const processFn$1 = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

var pify$2 = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn$1(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn$1(x, opts) : x;
	}

	return ret;
};

var BaseBlockTracker$1 = {};

var __importDefault$d = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(BaseBlockTracker$1, "__esModule", { value: true });
BaseBlockTracker$1.BaseBlockTracker = void 0;
const safe_event_emitter_1$2 = __importDefault$d(safeEventEmitter);
const sec$1 = 1000;
const calculateSum = (accumulator, currentValue) => accumulator + currentValue;
const blockTrackerEvents = ['sync', 'latest'];
class BaseBlockTracker extends safe_event_emitter_1$2.default {
    constructor(opts) {
        super();
        // config
        this._blockResetDuration = opts.blockResetDuration || 20 * sec$1;
        // state
        this._currentBlock = null;
        this._isRunning = false;
        // bind functions for internal use
        this._onNewListener = this._onNewListener.bind(this);
        this._onRemoveListener = this._onRemoveListener.bind(this);
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
        // listen for handler changes
        this._setupInternalEvents();
    }
    async destroy() {
        this._cancelBlockResetTimeout();
        await this._maybeEnd();
        super.removeAllListeners();
    }
    isRunning() {
        return this._isRunning;
    }
    getCurrentBlock() {
        return this._currentBlock;
    }
    async getLatestBlock() {
        // return if available
        if (this._currentBlock) {
            return this._currentBlock;
        }
        // wait for a new latest block
        const latestBlock = await new Promise((resolve) => this.once('latest', resolve));
        // return newly set current block
        return latestBlock;
    }
    // dont allow module consumer to remove our internal event listeners
    removeAllListeners(eventName) {
        // perform default behavior, preserve fn arity
        if (eventName) {
            super.removeAllListeners(eventName);
        }
        else {
            super.removeAllListeners();
        }
        // re-add internal events
        this._setupInternalEvents();
        // trigger stop check just in case
        this._onRemoveListener();
        return this;
    }
    _setupInternalEvents() {
        // first remove listeners for idempotence
        this.removeListener('newListener', this._onNewListener);
        this.removeListener('removeListener', this._onRemoveListener);
        // then add them
        this.on('newListener', this._onNewListener);
        this.on('removeListener', this._onRemoveListener);
    }
    _onNewListener(eventName) {
        // `newListener` is called *before* the listener is added
        if (blockTrackerEvents.includes(eventName)) {
            this._maybeStart();
        }
    }
    _onRemoveListener() {
        // `removeListener` is called *after* the listener is removed
        if (this._getBlockTrackerEventCount() > 0) {
            return;
        }
        this._maybeEnd();
    }
    async _maybeStart() {
        if (this._isRunning) {
            return;
        }
        this._isRunning = true;
        // cancel setting latest block to stale
        this._cancelBlockResetTimeout();
        await this._start();
        this.emit('_started');
    }
    async _maybeEnd() {
        if (!this._isRunning) {
            return;
        }
        this._isRunning = false;
        this._setupBlockResetTimeout();
        await this._end();
        this.emit('_ended');
    }
    _getBlockTrackerEventCount() {
        return blockTrackerEvents
            .map((eventName) => this.listenerCount(eventName))
            .reduce(calculateSum);
    }
    _newPotentialLatest(newBlock) {
        const currentBlock = this._currentBlock;
        // only update if blok number is higher
        if (currentBlock && hexToInt$4(newBlock) <= hexToInt$4(currentBlock)) {
            return;
        }
        this._setCurrentBlock(newBlock);
    }
    _setCurrentBlock(newBlock) {
        const oldBlock = this._currentBlock;
        this._currentBlock = newBlock;
        this.emit('latest', newBlock);
        this.emit('sync', { oldBlock, newBlock });
    }
    _setupBlockResetTimeout() {
        // clear any existing timeout
        this._cancelBlockResetTimeout();
        // clear latest block when stale
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration);
        // nodejs - dont hold process open
        if (this._blockResetTimeout.unref) {
            this._blockResetTimeout.unref();
        }
    }
    _cancelBlockResetTimeout() {
        if (this._blockResetTimeout) {
            clearTimeout(this._blockResetTimeout);
        }
    }
    _resetCurrentBlock() {
        this._currentBlock = null;
    }
}
BaseBlockTracker$1.BaseBlockTracker = BaseBlockTracker;
/**
 * Converts a number represented as a string in hexadecimal format into a native
 * number.
 *
 * @param hexInt - The hex string.
 * @returns The number.
 */
function hexToInt$4(hexInt) {
    return Number.parseInt(hexInt, 16);
}

var loggingUtils = {};

var dist$2 = {};

var assert$2 = {};

/**
 * A `StructFailure` represents a single specific failure in validation.
 */
/**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
class StructError extends TypeError {
    constructor(failure, failures) {
        let cached;
        const { message, explanation, ...rest } = failure;
        const { path } = failure;
        const msg = path.length === 0 ? message : `At path: ${path.join('.')} -- ${message}`;
        super(explanation ?? msg);
        if (explanation != null)
            this.cause = msg;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => {
            return (cached ?? (cached = [failure, ...failures()]));
        };
    }
}

/**
 * Check if a value is an iterator.
 */
function isIterable$1(x) {
    return isObject$1(x) && typeof x[Symbol.iterator] === 'function';
}
/**
 * Check if a value is a plain object.
 */
function isObject$1(x) {
    return typeof x === 'object' && x != null;
}
/**
 * Check if a value is a plain object.
 */
function isPlainObject(x) {
    if (Object.prototype.toString.call(x) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(x);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Return a value as a printable string.
 */
function print(value) {
    if (typeof value === 'symbol') {
        return value.toString();
    }
    return typeof value === 'string' ? JSON.stringify(value) : `${value}`;
}
/**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */
function shiftIterator(input) {
    const { done, value } = input.next();
    return done ? undefined : value;
}
/**
 * Convert a single validation result to a failure.
 */
function toFailure(result, context, struct, value) {
    if (result === true) {
        return;
    }
    else if (result === false) {
        result = {};
    }
    else if (typeof result === 'string') {
        result = { message: result };
    }
    const { path, branch } = context;
    const { type } = struct;
    const { refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ''}, but received: \`${print(value)}\``, } = result;
    return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message,
    };
}
/**
 * Convert a validation result to an iterable of failures.
 */
function* toFailures(result, context, struct, value) {
    if (!isIterable$1(result)) {
        result = [result];
    }
    for (const r of result) {
        const failure = toFailure(r, context, struct, value);
        if (failure) {
            yield failure;
        }
    }
}
/**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */
function* run(value, struct, options = {}) {
    const { path = [], branch = [value], coerce = false, mask = false } = options;
    const ctx = { path, branch };
    if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask &&
            struct.type !== 'type' &&
            isObject$1(struct.schema) &&
            isObject$1(value) &&
            !Array.isArray(value)) {
            for (const key in value) {
                if (struct.schema[key] === undefined) {
                    delete value[key];
                }
            }
        }
    }
    let status = 'valid';
    for (const failure of struct.validator(value, ctx)) {
        failure.explanation = options.message;
        status = 'not_valid';
        yield [failure, undefined];
    }
    for (let [k, v, s] of struct.entries(value, ctx)) {
        const ts = run(v, s, {
            path: k === undefined ? path : [...path, k],
            branch: k === undefined ? branch : [...branch, v],
            coerce,
            mask,
            message: options.message,
        });
        for (const t of ts) {
            if (t[0]) {
                status = t[0].refinement != null ? 'not_refined' : 'not_valid';
                yield [t[0], undefined];
            }
            else if (coerce) {
                v = t[1];
                if (k === undefined) {
                    value = v;
                }
                else if (value instanceof Map) {
                    value.set(k, v);
                }
                else if (value instanceof Set) {
                    value.add(v);
                }
                else if (isObject$1(value)) {
                    if (v !== undefined || k in value)
                        value[k] = v;
                }
            }
        }
    }
    if (status !== 'not_valid') {
        for (const failure of struct.refiner(value, ctx)) {
            failure.explanation = options.message;
            status = 'not_refined';
            yield [failure, undefined];
        }
    }
    if (status === 'valid') {
        yield [undefined, value];
    }
}

/**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */
class Struct {
    constructor(props) {
        const { type, schema, validator, refiner, coercer = (value) => value, entries = function* () { }, } = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) {
            this.validator = (value, context) => {
                const result = validator(value, context);
                return toFailures(result, context, this, value);
            };
        }
        else {
            this.validator = () => [];
        }
        if (refiner) {
            this.refiner = (value, context) => {
                const result = refiner(value, context);
                return toFailures(result, context, this, value);
            };
        }
        else {
            this.refiner = () => [];
        }
    }
    /**
     * Assert that a value passes the struct's validation, throwing if it doesn't.
     */
    assert(value, message) {
        return assert$1(value, this, message);
    }
    /**
     * Create a value with the struct's coercion logic, then validate it.
     */
    create(value, message) {
        return create(value, this, message);
    }
    /**
     * Check if a value passes the struct's validation.
     */
    is(value) {
        return is(value, this);
    }
    /**
     * Mask a value, coercing and validating it, but returning only the subset of
     * properties defined by the struct's schema.
     */
    mask(value, message) {
        return mask(value, this, message);
    }
    /**
     * Validate a value with the struct's validation logic, returning a tuple
     * representing the result.
     *
     * You may optionally pass `true` for the `withCoercion` argument to coerce
     * the value before attempting to validate it. If you do, the result will
     * contain the coerced result when successful.
     */
    validate(value, options = {}) {
        return validate(value, this, options);
    }
}
/**
 * Assert that a value passes a struct, throwing if it doesn't.
 */
function assert$1(value, struct, message) {
    const result = validate(value, struct, { message });
    if (result[0]) {
        throw result[0];
    }
}
/**
 * Create a value with the coercion logic of struct and validate it.
 */
function create(value, struct, message) {
    const result = validate(value, struct, { coerce: true, message });
    if (result[0]) {
        throw result[0];
    }
    else {
        return result[1];
    }
}
/**
 * Mask a value, returning only the subset of properties defined by a struct.
 */
function mask(value, struct, message) {
    const result = validate(value, struct, { coerce: true, mask: true, message });
    if (result[0]) {
        throw result[0];
    }
    else {
        return result[1];
    }
}
/**
 * Check if a value passes a struct.
 */
function is(value, struct) {
    const result = validate(value, struct);
    return !result[0];
}
/**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */
function validate(value, struct, options = {}) {
    const tuples = run(value, struct, options);
    const tuple = shiftIterator(tuples);
    if (tuple[0]) {
        const error = new StructError(tuple[0], function* () {
            for (const t of tuples) {
                if (t[0]) {
                    yield t[0];
                }
            }
        });
        return [error, undefined];
    }
    else {
        const v = tuple[1];
        return [undefined, v];
    }
}

function assign(...Structs) {
    const isType = Structs[0].type === 'type';
    const schemas = Structs.map((s) => s.schema);
    const schema = Object.assign({}, ...schemas);
    return isType ? type(schema) : object(schema);
}
/**
 * Define a new struct type with a custom validation function.
 */
function define(name, validator) {
    return new Struct({ type: name, schema: null, validator });
}
/**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */
function deprecated(struct, log) {
    return new Struct({
        ...struct,
        refiner: (value, ctx) => value === undefined || struct.refiner(value, ctx),
        validator(value, ctx) {
            if (value === undefined) {
                return true;
            }
            else {
                log(value, ctx);
                return struct.validator(value, ctx);
            }
        },
    });
}
/**
 * Create a struct with dynamic validation logic.
 *
 * The callback will receive the value currently being validated, and must
 * return a struct object to validate it with. This can be useful to model
 * validation logic that changes based on its input.
 */
function dynamic(fn) {
    return new Struct({
        type: 'dynamic',
        schema: null,
        *entries(value, ctx) {
            const struct = fn(value, ctx);
            yield* struct.entries(value, ctx);
        },
        validator(value, ctx) {
            const struct = fn(value, ctx);
            return struct.validator(value, ctx);
        },
        coercer(value, ctx) {
            const struct = fn(value, ctx);
            return struct.coercer(value, ctx);
        },
        refiner(value, ctx) {
            const struct = fn(value, ctx);
            return struct.refiner(value, ctx);
        },
    });
}
/**
 * Create a struct with lazily evaluated validation logic.
 *
 * The first time validation is run with the struct, the callback will be called
 * and must return a struct object to use. This is useful for cases where you
 * want to have self-referential structs for nested data structures to avoid a
 * circular definition problem.
 */
function lazy(fn) {
    let struct;
    return new Struct({
        type: 'lazy',
        schema: null,
        *entries(value, ctx) {
            struct ?? (struct = fn());
            yield* struct.entries(value, ctx);
        },
        validator(value, ctx) {
            struct ?? (struct = fn());
            return struct.validator(value, ctx);
        },
        coercer(value, ctx) {
            struct ?? (struct = fn());
            return struct.coercer(value, ctx);
        },
        refiner(value, ctx) {
            struct ?? (struct = fn());
            return struct.refiner(value, ctx);
        },
    });
}
/**
 * Create a new struct based on an existing object struct, but excluding
 * specific properties.
 *
 * Like TypeScript's `Omit` utility.
 */
function omit(struct, keys) {
    const { schema } = struct;
    const subschema = { ...schema };
    for (const key of keys) {
        delete subschema[key];
    }
    switch (struct.type) {
        case 'type':
            return type(subschema);
        default:
            return object(subschema);
    }
}
/**
 * Create a new struct based on an existing object struct, but with all of its
 * properties allowed to be `undefined`.
 *
 * Like TypeScript's `Partial` utility.
 */
function partial(struct) {
    const schema = struct instanceof Struct ? { ...struct.schema } : { ...struct };
    for (const key in schema) {
        schema[key] = optional(schema[key]);
    }
    return object(schema);
}
/**
 * Create a new struct based on an existing object struct, but only including
 * specific properties.
 *
 * Like TypeScript's `Pick` utility.
 */
function pick(struct, keys) {
    const { schema } = struct;
    const subschema = {};
    for (const key of keys) {
        subschema[key] = schema[key];
    }
    return object(subschema);
}
/**
 * Define a new struct type with a custom validation function.
 *
 * @deprecated This function has been renamed to `define`.
 */
function struct(name, validator) {
    console.warn('superstruct@0.11 - The `struct` helper has been renamed to `define`.');
    return define(name, validator);
}

/**
 * Ensure that any value passes validation.
 */
function any() {
    return define('any', () => true);
}
function array(Element) {
    return new Struct({
        type: 'array',
        schema: Element,
        *entries(value) {
            if (Element && Array.isArray(value)) {
                for (const [i, v] of value.entries()) {
                    yield [i, v, Element];
                }
            }
        },
        coercer(value) {
            return Array.isArray(value) ? value.slice() : value;
        },
        validator(value) {
            return (Array.isArray(value) ||
                `Expected an array value, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that a value is a bigint.
 */
function bigint() {
    return define('bigint', (value) => {
        return typeof value === 'bigint';
    });
}
/**
 * Ensure that a value is a boolean.
 */
function boolean() {
    return define('boolean', (value) => {
        return typeof value === 'boolean';
    });
}
/**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */
function date() {
    return define('date', (value) => {
        return ((value instanceof Date && !isNaN(value.getTime())) ||
            `Expected a valid \`Date\` object, but received: ${print(value)}`);
    });
}
function enums(values) {
    const schema = {};
    const description = values.map((v) => print(v)).join();
    for (const key of values) {
        schema[key] = key;
    }
    return new Struct({
        type: 'enums',
        schema,
        validator(value) {
            return (values.includes(value) ||
                `Expected one of \`${description}\`, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that a value is a function.
 */
function func() {
    return define('func', (value) => {
        return (typeof value === 'function' ||
            `Expected a function, but received: ${print(value)}`);
    });
}
/**
 * Ensure that a value is an instance of a specific class.
 */
function instance(Class) {
    return define('instance', (value) => {
        return (value instanceof Class ||
            `Expected a \`${Class.name}\` instance, but received: ${print(value)}`);
    });
}
/**
 * Ensure that a value is an integer.
 */
function integer() {
    return define('integer', (value) => {
        return ((typeof value === 'number' && !isNaN(value) && Number.isInteger(value)) ||
            `Expected an integer, but received: ${print(value)}`);
    });
}
/**
 * Ensure that a value matches all of a set of types.
 */
function intersection(Structs) {
    return new Struct({
        type: 'intersection',
        schema: null,
        *entries(value, ctx) {
            for (const S of Structs) {
                yield* S.entries(value, ctx);
            }
        },
        *validator(value, ctx) {
            for (const S of Structs) {
                yield* S.validator(value, ctx);
            }
        },
        *refiner(value, ctx) {
            for (const S of Structs) {
                yield* S.refiner(value, ctx);
            }
        },
    });
}
function literal(constant) {
    const description = print(constant);
    const t = typeof constant;
    return new Struct({
        type: 'literal',
        schema: t === 'string' || t === 'number' || t === 'boolean' ? constant : null,
        validator(value) {
            return (value === constant ||
                `Expected the literal \`${description}\`, but received: ${print(value)}`);
        },
    });
}
function map$1(Key, Value) {
    return new Struct({
        type: 'map',
        schema: null,
        *entries(value) {
            if (Key && Value && value instanceof Map) {
                for (const [k, v] of value.entries()) {
                    yield [k, k, Key];
                    yield [k, v, Value];
                }
            }
        },
        coercer(value) {
            return value instanceof Map ? new Map(value) : value;
        },
        validator(value) {
            return (value instanceof Map ||
                `Expected a \`Map\` object, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that no value ever passes validation.
 */
function never$1() {
    return define('never', () => false);
}
/**
 * Augment an existing struct to allow `null` values.
 */
function nullable(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx) => value === null || struct.validator(value, ctx),
        refiner: (value, ctx) => value === null || struct.refiner(value, ctx),
    });
}
/**
 * Ensure that a value is a number.
 */
function number$1() {
    return define('number', (value) => {
        return ((typeof value === 'number' && !isNaN(value)) ||
            `Expected a number, but received: ${print(value)}`);
    });
}
function object(schema) {
    const knowns = schema ? Object.keys(schema) : [];
    const Never = never$1();
    return new Struct({
        type: 'object',
        schema: schema ? schema : null,
        *entries(value) {
            if (schema && isObject$1(value)) {
                const unknowns = new Set(Object.keys(value));
                for (const key of knowns) {
                    unknowns.delete(key);
                    yield [key, value[key], schema[key]];
                }
                for (const key of unknowns) {
                    yield [key, value[key], Never];
                }
            }
        },
        validator(value) {
            return (isObject$1(value) || `Expected an object, but received: ${print(value)}`);
        },
        coercer(value) {
            return isObject$1(value) ? { ...value } : value;
        },
    });
}
/**
 * Augment a struct to allow `undefined` values.
 */
function optional(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx) => value === undefined || struct.validator(value, ctx),
        refiner: (value, ctx) => value === undefined || struct.refiner(value, ctx),
    });
}
/**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */
function record(Key, Value) {
    return new Struct({
        type: 'record',
        schema: null,
        *entries(value) {
            if (isObject$1(value)) {
                for (const k in value) {
                    const v = value[k];
                    yield [k, k, Key];
                    yield [k, v, Value];
                }
            }
        },
        validator(value) {
            return (isObject$1(value) || `Expected an object, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */
function regexp() {
    return define('regexp', (value) => {
        return value instanceof RegExp;
    });
}
function set(Element) {
    return new Struct({
        type: 'set',
        schema: null,
        *entries(value) {
            if (Element && value instanceof Set) {
                for (const v of value) {
                    yield [v, v, Element];
                }
            }
        },
        coercer(value) {
            return value instanceof Set ? new Set(value) : value;
        },
        validator(value) {
            return (value instanceof Set ||
                `Expected a \`Set\` object, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that a value is a string.
 */
function string() {
    return define('string', (value) => {
        return (typeof value === 'string' ||
            `Expected a string, but received: ${print(value)}`);
    });
}
/**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */
function tuple(Structs) {
    const Never = never$1();
    return new Struct({
        type: 'tuple',
        schema: null,
        *entries(value) {
            if (Array.isArray(value)) {
                const length = Math.max(Structs.length, value.length);
                for (let i = 0; i < length; i++) {
                    yield [i, value[i], Structs[i] || Never];
                }
            }
        },
        validator(value) {
            return (Array.isArray(value) ||
                `Expected an array, but received: ${print(value)}`);
        },
    });
}
/**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */
function type(schema) {
    const keys = Object.keys(schema);
    return new Struct({
        type: 'type',
        schema,
        *entries(value) {
            if (isObject$1(value)) {
                for (const k of keys) {
                    yield [k, value[k], schema[k]];
                }
            }
        },
        validator(value) {
            return (isObject$1(value) || `Expected an object, but received: ${print(value)}`);
        },
        coercer(value) {
            return isObject$1(value) ? { ...value } : value;
        },
    });
}
/**
 * Ensure that a value matches one of a set of types.
 */
function union(Structs) {
    const description = Structs.map((s) => s.type).join(' | ');
    return new Struct({
        type: 'union',
        schema: null,
        coercer(value) {
            for (const S of Structs) {
                const [error, coerced] = S.validate(value, { coerce: true });
                if (!error) {
                    return coerced;
                }
            }
            return value;
        },
        validator(value, ctx) {
            const failures = [];
            for (const S of Structs) {
                const [...tuples] = run(value, S, ctx);
                const [first] = tuples;
                if (!first[0]) {
                    return [];
                }
                else {
                    for (const [failure] of tuples) {
                        if (failure) {
                            failures.push(failure);
                        }
                    }
                }
            }
            return [
                `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`,
                ...failures,
            ];
        },
    });
}
/**
 * Ensure that any value passes validation, without widening its type to `any`.
 */
function unknown() {
    return define('unknown', () => true);
}

/**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */
function coerce$2(struct, condition, coercer) {
    return new Struct({
        ...struct,
        coercer: (value, ctx) => {
            return is(value, condition)
                ? struct.coercer(coercer(value, ctx), ctx)
                : struct.coercer(value, ctx);
        },
    });
}
/**
 * Augment a struct to replace `undefined` values with a default.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */
function defaulted(struct, fallback, options = {}) {
    return coerce$2(struct, unknown(), (x) => {
        const f = typeof fallback === 'function' ? fallback() : fallback;
        if (x === undefined) {
            return f;
        }
        if (!options.strict && isPlainObject(x) && isPlainObject(f)) {
            const ret = { ...x };
            let changed = false;
            for (const key in f) {
                if (ret[key] === undefined) {
                    ret[key] = f[key];
                    changed = true;
                }
            }
            if (changed) {
                return ret;
            }
        }
        return x;
    });
}
/**
 * Augment a struct to trim string inputs.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */
function trimmed(struct) {
    return coerce$2(struct, string(), (x) => x.trim());
}

/**
 * Ensure that a string, array, map, or set is empty.
 */
function empty$2(struct) {
    return refine(struct, 'empty', (value) => {
        const size = getSize(value);
        return (size === 0 ||
            `Expected an empty ${struct.type} but received one with a size of \`${size}\``);
    });
}
function getSize(value) {
    if (value instanceof Map || value instanceof Set) {
        return value.size;
    }
    else {
        return value.length;
    }
}
/**
 * Ensure that a number or date is below a threshold.
 */
function max$1(struct, threshold, options = {}) {
    const { exclusive } = options;
    return refine(struct, 'max', (value) => {
        return exclusive
            ? value < threshold
            : value <= threshold ||
                `Expected a ${struct.type} less than ${exclusive ? '' : 'or equal to '}${threshold} but received \`${value}\``;
    });
}
/**
 * Ensure that a number or date is above a threshold.
 */
function min$1(struct, threshold, options = {}) {
    const { exclusive } = options;
    return refine(struct, 'min', (value) => {
        return exclusive
            ? value > threshold
            : value >= threshold ||
                `Expected a ${struct.type} greater than ${exclusive ? '' : 'or equal to '}${threshold} but received \`${value}\``;
    });
}
/**
 * Ensure that a string, array, map or set is not empty.
 */
function nonempty(struct) {
    return refine(struct, 'nonempty', (value) => {
        const size = getSize(value);
        return (size > 0 || `Expected a nonempty ${struct.type} but received an empty one`);
    });
}
/**
 * Ensure that a string matches a regular expression.
 */
function pattern(struct, regexp) {
    return refine(struct, 'pattern', (value) => {
        return (regexp.test(value) ||
            `Expected a ${struct.type} matching \`/${regexp.source}/\` but received "${value}"`);
    });
}
/**
 * Ensure that a string, array, number, date, map, or set has a size (or length, or time) between `min` and `max`.
 */
function size(struct, min, max = min) {
    const expected = `Expected a ${struct.type}`;
    const of = min === max ? `of \`${min}\`` : `between \`${min}\` and \`${max}\``;
    return refine(struct, 'size', (value) => {
        if (typeof value === 'number' || value instanceof Date) {
            return ((min <= value && value <= max) ||
                `${expected} ${of} but received \`${value}\``);
        }
        else if (value instanceof Map || value instanceof Set) {
            const { size } = value;
            return ((min <= size && size <= max) ||
                `${expected} with a size ${of} but received one with a size of \`${size}\``);
        }
        else {
            const { length } = value;
            return ((min <= length && length <= max) ||
                `${expected} with a length ${of} but received one with a length of \`${length}\``);
        }
    });
}
/**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */
function refine(struct, name, refiner) {
    return new Struct({
        ...struct,
        *refiner(value, ctx) {
            yield* struct.refiner(value, ctx);
            const result = refiner(value, ctx);
            const failures = toFailures(result, ctx, struct, value);
            for (const failure of failures) {
                yield { ...failure, refinement: name };
            }
        },
    });
}

var dist$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Struct: Struct,
    StructError: StructError,
    any: any,
    array: array,
    assert: assert$1,
    assign: assign,
    bigint: bigint,
    boolean: boolean,
    coerce: coerce$2,
    create: create,
    date: date,
    defaulted: defaulted,
    define: define,
    deprecated: deprecated,
    dynamic: dynamic,
    empty: empty$2,
    enums: enums,
    func: func,
    instance: instance,
    integer: integer,
    intersection: intersection,
    is: is,
    lazy: lazy,
    literal: literal,
    map: map$1,
    mask: mask,
    max: max$1,
    min: min$1,
    never: never$1,
    nonempty: nonempty,
    nullable: nullable,
    number: number$1,
    object: object,
    omit: omit,
    optional: optional,
    partial: partial,
    pattern: pattern,
    pick: pick,
    record: record,
    refine: refine,
    regexp: regexp,
    set: set,
    size: size,
    string: string,
    struct: struct,
    trimmed: trimmed,
    tuple: tuple,
    type: type,
    union: union,
    unknown: unknown,
    validate: validate
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(dist$1);

Object.defineProperty(assert$2, "__esModule", { value: true });
assert$2.assertExhaustive = assert$2.assertStruct = assert$2.assert = assert$2.AssertionError = void 0;
const superstruct_1$3 = require$$1$1;
/**
 * Type guard for determining whether the given value is an error object with a
 * `message` property, such as an instance of Error.
 *
 * @param error - The object to check.
 * @returns True or false, depending on the result.
 */
function isErrorWithMessage(error) {
    return typeof error === 'object' && error !== null && 'message' in error;
}
/**
 * Check if a value is a constructor, i.e., a function that can be called with
 * the `new` keyword.
 *
 * @param fn - The value to check.
 * @returns `true` if the value is a constructor, or `false` otherwise.
 */
function isConstructable(fn) {
    var _a, _b;
    /* istanbul ignore next */
    return Boolean(typeof ((_b = (_a = fn === null || fn === void 0 ? void 0 : fn.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'string');
}
/**
 * Get the error message from an unknown error object. If the error object has
 * a `message` property, that property is returned. Otherwise, the stringified
 * error object is returned.
 *
 * @param error - The error object to get the message from.
 * @returns The error message.
 */
function getErrorMessage(error) {
    const message = isErrorWithMessage(error) ? error.message : String(error);
    // If the error ends with a period, remove it, as we'll add our own period.
    if (message.endsWith('.')) {
        return message.slice(0, -1);
    }
    return message;
}
/**
 * Initialise an {@link AssertionErrorConstructor} error.
 *
 * @param ErrorWrapper - The error class to use.
 * @param message - The error message.
 * @returns The error object.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getError(ErrorWrapper, message) {
    if (isConstructable(ErrorWrapper)) {
        return new ErrorWrapper({
            message,
        });
    }
    return ErrorWrapper({
        message,
    });
}
/**
 * The default error class that is thrown if an assertion fails.
 */
class AssertionError extends Error {
    constructor(options) {
        super(options.message);
        this.code = 'ERR_ASSERTION';
    }
}
assert$2.AssertionError = AssertionError;
/**
 * Same as Node.js assert.
 * If the value is falsy, throws an error, does nothing otherwise.
 *
 * @throws {@link AssertionError} If value is falsy.
 * @param value - The test that should be truthy to pass.
 * @param message - Message to be passed to {@link AssertionError} or an
 * {@link Error} instance to throw.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}. If a custom error class is provided for
 * the `message` argument, this argument is ignored.
 */
function assert(value, message = 'Assertion failed.', 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper = AssertionError) {
    if (!value) {
        if (message instanceof Error) {
            throw message;
        }
        throw getError(ErrorWrapper, message);
    }
}
assert$2.assert = assert;
/**
 * Assert a value against a Superstruct struct.
 *
 * @param value - The value to validate.
 * @param struct - The struct to validate against.
 * @param errorPrefix - A prefix to add to the error message. Defaults to
 * "Assertion failed".
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the value is not valid.
 */
function assertStruct(value, struct, errorPrefix = 'Assertion failed', 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper = AssertionError) {
    try {
        (0, superstruct_1$3.assert)(value, struct);
    }
    catch (error) {
        throw getError(ErrorWrapper, `${errorPrefix}: ${getErrorMessage(error)}.`);
    }
}
assert$2.assertStruct = assertStruct;
/**
 * Use in the default case of a switch that you want to be fully exhaustive.
 * Using this function forces the compiler to enforce exhaustivity during
 * compile-time.
 *
 * @example
 * ```
 * const number = 1;
 * switch (number) {
 *   case 0:
 *     ...
 *   case 1:
 *     ...
 *   default:
 *     assertExhaustive(snapPrefix);
 * }
 * ```
 * @param _object - The object on which the switch is being operated.
 */
function assertExhaustive(_object) {
    throw new Error('Invalid branch reached. Should be detected during compilation.');
}
assert$2.assertExhaustive = assertExhaustive;

var base64$1 = {};

Object.defineProperty(base64$1, "__esModule", { value: true });
base64$1.base64 = void 0;
const superstruct_1$2 = require$$1$1;
const assert_1$3 = assert$2;
/**
 * Ensure that a provided string-based struct is valid base64.
 *
 * @param struct - The string based struct.
 * @param options - Optional options to specialize base64 validation. See {@link Base64Options} documentation.
 * @returns A superstruct validating base64.
 */
const base64 = (struct, options = {}) => {
    var _a, _b;
    const paddingRequired = (_a = options.paddingRequired) !== null && _a !== void 0 ? _a : false;
    const characterSet = (_b = options.characterSet) !== null && _b !== void 0 ? _b : 'base64';
    let letters;
    if (characterSet === 'base64') {
        letters = String.raw `[A-Za-z0-9+\/]`;
    }
    else {
        (0, assert_1$3.assert)(characterSet === 'base64url');
        letters = String.raw `[-_A-Za-z0-9]`;
    }
    let re;
    if (paddingRequired) {
        re = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, 'u');
    }
    else {
        re = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, 'u');
    }
    return (0, superstruct_1$2.pattern)(struct, re);
};
base64$1.base64 = base64;

var bytes = {};

var hex = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.remove0x = exports.add0x = exports.assertIsStrictHexString = exports.assertIsHexString = exports.isStrictHexString = exports.isHexString = exports.StrictHexStruct = exports.HexStruct = void 0;
	const superstruct_1 = require$$1$1;
	const assert_1 = assert$2;
	exports.HexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^(?:0x)?[0-9a-f]+$/iu);
	exports.StrictHexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^0x[0-9a-f]+$/iu);
	/**
	 * Check if a string is a valid hex string.
	 *
	 * @param value - The value to check.
	 * @returns Whether the value is a valid hex string.
	 */
	function isHexString(value) {
	    return (0, superstruct_1.is)(value, exports.HexStruct);
	}
	exports.isHexString = isHexString;
	/**
	 * Strictly check if a string is a valid hex string. A valid hex string must
	 * start with the "0x"-prefix.
	 *
	 * @param value - The value to check.
	 * @returns Whether the value is a valid hex string.
	 */
	function isStrictHexString(value) {
	    return (0, superstruct_1.is)(value, exports.StrictHexStruct);
	}
	exports.isStrictHexString = isStrictHexString;
	/**
	 * Assert that a value is a valid hex string.
	 *
	 * @param value - The value to check.
	 * @throws If the value is not a valid hex string.
	 */
	function assertIsHexString(value) {
	    (0, assert_1.assert)(isHexString(value), 'Value must be a hexadecimal string.');
	}
	exports.assertIsHexString = assertIsHexString;
	/**
	 * Assert that a value is a valid hex string. A valid hex string must start with
	 * the "0x"-prefix.
	 *
	 * @param value - The value to check.
	 * @throws If the value is not a valid hex string.
	 */
	function assertIsStrictHexString(value) {
	    (0, assert_1.assert)(isStrictHexString(value), 'Value must be a hexadecimal string, starting with "0x".');
	}
	exports.assertIsStrictHexString = assertIsStrictHexString;
	/**
	 * Add the `0x`-prefix to a hexadecimal string. If the string already has the
	 * prefix, it is returned as-is.
	 *
	 * @param hexadecimal - The hexadecimal string to add the prefix to.
	 * @returns The prefixed hexadecimal string.
	 */
	function add0x(hexadecimal) {
	    if (hexadecimal.startsWith('0x')) {
	        return hexadecimal;
	    }
	    if (hexadecimal.startsWith('0X')) {
	        return `0x${hexadecimal.substring(2)}`;
	    }
	    return `0x${hexadecimal}`;
	}
	exports.add0x = add0x;
	/**
	 * Remove the `0x`-prefix from a hexadecimal string. If the string doesn't have
	 * the prefix, it is returned as-is.
	 *
	 * @param hexadecimal - The hexadecimal string to remove the prefix from.
	 * @returns The un-prefixed hexadecimal string.
	 */
	function remove0x(hexadecimal) {
	    if (hexadecimal.startsWith('0x') || hexadecimal.startsWith('0X')) {
	        return hexadecimal.substring(2);
	    }
	    return hexadecimal;
	}
	exports.remove0x = remove0x;
	
} (hex));

Object.defineProperty(bytes, "__esModule", { value: true });
bytes.createDataView = bytes.concatBytes = bytes.valueToBytes = bytes.stringToBytes = bytes.numberToBytes = bytes.signedBigIntToBytes = bytes.bigIntToBytes = bytes.hexToBytes = bytes.bytesToString = bytes.bytesToNumber = bytes.bytesToSignedBigInt = bytes.bytesToBigInt = bytes.bytesToHex = bytes.assertIsBytes = bytes.isBytes = void 0;
const assert_1$2 = assert$2;
const hex_1$2 = hex;
// '0'.charCodeAt(0) === 48
const HEX_MINIMUM_NUMBER_CHARACTER = 48;
// '9'.charCodeAt(0) === 57
const HEX_MAXIMUM_NUMBER_CHARACTER = 58;
const HEX_CHARACTER_OFFSET = 87;
/**
 * Memoized function that returns an array to be used as a lookup table for
 * converting bytes to hexadecimal values.
 *
 * The array is created lazily and then cached for future use. The benefit of
 * this approach is that the performance of converting bytes to hex is much
 * better than if we were to call `toString(16)` on each byte.
 *
 * The downside is that the array is created once and then never garbage
 * collected. This is not a problem in practice because the array is only 256
 * elements long.
 *
 * @returns A function that returns the lookup table.
 */
function getPrecomputedHexValuesBuilder() {
    // To avoid issues with tree shaking, we need to use a function to return the
    // array. This is because the array is only used in the `bytesToHex` function
    // and if we were to use a global variable, the array might be removed by the
    // tree shaker.
    const lookupTable = [];
    return () => {
        if (lookupTable.length === 0) {
            for (let i = 0; i < 256; i++) {
                lookupTable.push(i.toString(16).padStart(2, '0'));
            }
        }
        return lookupTable;
    };
}
/**
 * Function implementation of the {@link getPrecomputedHexValuesBuilder}
 * function.
 */
const getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
/**
 * Check if a value is a `Uint8Array`.
 *
 * @param value - The value to check.
 * @returns Whether the value is a `Uint8Array`.
 */
function isBytes(value) {
    return value instanceof Uint8Array;
}
bytes.isBytes = isBytes;
/**
 * Assert that a value is a `Uint8Array`.
 *
 * @param value - The value to check.
 * @throws If the value is not a `Uint8Array`.
 */
function assertIsBytes(value) {
    (0, assert_1$2.assert)(isBytes(value), 'Value must be a Uint8Array.');
}
bytes.assertIsBytes = assertIsBytes;
/**
 * Convert a `Uint8Array` to a hexadecimal string.
 *
 * @param bytes - The bytes to convert to a hexadecimal string.
 * @returns The hexadecimal string.
 */
function bytesToHex(bytes) {
    assertIsBytes(bytes);
    if (bytes.length === 0) {
        return '0x';
    }
    const lookupTable = getPrecomputedHexValues();
    const hexadecimal = new Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        hexadecimal[i] = lookupTable[bytes[i]];
    }
    return (0, hex_1$2.add0x)(hexadecimal.join(''));
}
bytes.bytesToHex = bytesToHex;
/**
 * Convert a `Uint8Array` to a `bigint`.
 *
 * To convert a `Uint8Array` to a `number` instead, use {@link bytesToNumber}.
 * To convert a two's complement encoded `Uint8Array` to a `bigint`, use
 * {@link bytesToSignedBigInt}.
 *
 * @param bytes - The bytes to convert to a `bigint`.
 * @returns The `bigint`.
 */
function bytesToBigInt(bytes) {
    assertIsBytes(bytes);
    const hexadecimal = bytesToHex(bytes);
    return BigInt(hexadecimal);
}
bytes.bytesToBigInt = bytesToBigInt;
/**
 * Convert a `Uint8Array` to a signed `bigint`. This assumes that the bytes are
 * encoded in two's complement.
 *
 * To convert a `Uint8Array` to an unsigned `bigint` instead, use
 * {@link bytesToBigInt}.
 *
 * @see https://en.wikipedia.org/wiki/Two%27s_complement
 * @param bytes - The bytes to convert to a signed `bigint`.
 * @returns The signed `bigint`.
 */
function bytesToSignedBigInt(bytes) {
    assertIsBytes(bytes);
    let value = BigInt(0);
    for (const byte of bytes) {
        // eslint-disable-next-line no-bitwise
        value = (value << BigInt(8)) + BigInt(byte);
    }
    return BigInt.asIntN(bytes.length * 8, value);
}
bytes.bytesToSignedBigInt = bytesToSignedBigInt;
/**
 * Convert a `Uint8Array` to a `number`.
 *
 * To convert a `Uint8Array` to a `bigint` instead, use {@link bytesToBigInt}.
 *
 * @param bytes - The bytes to convert to a number.
 * @returns The number.
 * @throws If the resulting number is not a safe integer.
 */
function bytesToNumber(bytes) {
    assertIsBytes(bytes);
    const bigint = bytesToBigInt(bytes);
    (0, assert_1$2.assert)(bigint <= BigInt(Number.MAX_SAFE_INTEGER), 'Number is not a safe integer. Use `bytesToBigInt` instead.');
    return Number(bigint);
}
bytes.bytesToNumber = bytesToNumber;
/**
 * Convert a UTF-8 encoded `Uint8Array` to a `string`.
 *
 * @param bytes - The bytes to convert to a string.
 * @returns The string.
 */
function bytesToString(bytes) {
    assertIsBytes(bytes);
    return new TextDecoder().decode(bytes);
}
bytes.bytesToString = bytesToString;
/**
 * Convert a hexadecimal string to a `Uint8Array`. The string can optionally be
 * prefixed with `0x`. It accepts even and odd length strings.
 *
 * If the value is "0x", an empty `Uint8Array` is returned.
 *
 * @param value - The hexadecimal string to convert to bytes.
 * @returns The bytes as `Uint8Array`.
 */
function hexToBytes(value) {
    var _a;
    // "0x" is often used as empty byte array.
    if (((_a = value === null || value === void 0 ? void 0 : value.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(value)) === '0x') {
        return new Uint8Array();
    }
    (0, hex_1$2.assertIsHexString)(value);
    // Remove the `0x` prefix if it exists, and pad the string to have an even
    // number of characters.
    const strippedValue = (0, hex_1$2.remove0x)(value).toLowerCase();
    const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
    const bytes = new Uint8Array(normalizedValue.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        // While this is not the prettiest way to convert a hexadecimal string to a
        // `Uint8Array`, it is a lot faster than using `parseInt` to convert each
        // character.
        const c1 = normalizedValue.charCodeAt(i * 2);
        const c2 = normalizedValue.charCodeAt(i * 2 + 1);
        const n1 = c1 -
            (c1 < HEX_MAXIMUM_NUMBER_CHARACTER
                ? HEX_MINIMUM_NUMBER_CHARACTER
                : HEX_CHARACTER_OFFSET);
        const n2 = c2 -
            (c2 < HEX_MAXIMUM_NUMBER_CHARACTER
                ? HEX_MINIMUM_NUMBER_CHARACTER
                : HEX_CHARACTER_OFFSET);
        bytes[i] = n1 * 16 + n2;
    }
    return bytes;
}
bytes.hexToBytes = hexToBytes;
/**
 * Convert a `bigint` to a `Uint8Array`.
 *
 * This assumes that the `bigint` is an unsigned integer. To convert a signed
 * `bigint` instead, use {@link signedBigIntToBytes}.
 *
 * @param value - The bigint to convert to bytes.
 * @returns The bytes as `Uint8Array`.
 */
function bigIntToBytes(value) {
    (0, assert_1$2.assert)(typeof value === 'bigint', 'Value must be a bigint.');
    (0, assert_1$2.assert)(value >= BigInt(0), 'Value must be a non-negative bigint.');
    const hexadecimal = value.toString(16);
    return hexToBytes(hexadecimal);
}
bytes.bigIntToBytes = bigIntToBytes;
/**
 * Check if a `bigint` fits in a certain number of bytes.
 *
 * @param value - The `bigint` to check.
 * @param bytes - The number of bytes.
 * @returns Whether the `bigint` fits in the number of bytes.
 */
function bigIntFits(value, bytes) {
    (0, assert_1$2.assert)(bytes > 0);
    /* eslint-disable no-bitwise */
    const mask = value >> BigInt(31);
    return !(((~value & mask) + (value & ~mask)) >> BigInt(bytes * 8 + ~0));
    /* eslint-enable no-bitwise */
}
/**
 * Convert a signed `bigint` to a `Uint8Array`. This uses two's complement
 * encoding to represent negative numbers.
 *
 * To convert an unsigned `bigint` to a `Uint8Array` instead, use
 * {@link bigIntToBytes}.
 *
 * @see https://en.wikipedia.org/wiki/Two%27s_complement
 * @param value - The number to convert to bytes.
 * @param byteLength - The length of the resulting `Uint8Array`. If the number
 * is larger than the maximum value that can be represented by the given length,
 * an error is thrown.
 * @returns The bytes as `Uint8Array`.
 */
function signedBigIntToBytes(value, byteLength) {
    (0, assert_1$2.assert)(typeof value === 'bigint', 'Value must be a bigint.');
    (0, assert_1$2.assert)(typeof byteLength === 'number', 'Byte length must be a number.');
    (0, assert_1$2.assert)(byteLength > 0, 'Byte length must be greater than 0.');
    (0, assert_1$2.assert)(bigIntFits(value, byteLength), 'Byte length is too small to represent the given value.');
    // ESLint doesn't like mutating function parameters, so to avoid having to
    // disable the rule, we create a new variable.
    let numberValue = value;
    const bytes = new Uint8Array(byteLength);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = Number(BigInt.asUintN(8, numberValue));
        // eslint-disable-next-line no-bitwise
        numberValue >>= BigInt(8);
    }
    return bytes.reverse();
}
bytes.signedBigIntToBytes = signedBigIntToBytes;
/**
 * Convert a `number` to a `Uint8Array`.
 *
 * @param value - The number to convert to bytes.
 * @returns The bytes as `Uint8Array`.
 * @throws If the number is not a safe integer.
 */
function numberToBytes(value) {
    (0, assert_1$2.assert)(typeof value === 'number', 'Value must be a number.');
    (0, assert_1$2.assert)(value >= 0, 'Value must be a non-negative number.');
    (0, assert_1$2.assert)(Number.isSafeInteger(value), 'Value is not a safe integer. Use `bigIntToBytes` instead.');
    const hexadecimal = value.toString(16);
    return hexToBytes(hexadecimal);
}
bytes.numberToBytes = numberToBytes;
/**
 * Convert a `string` to a UTF-8 encoded `Uint8Array`.
 *
 * @param value - The string to convert to bytes.
 * @returns The bytes as `Uint8Array`.
 */
function stringToBytes(value) {
    (0, assert_1$2.assert)(typeof value === 'string', 'Value must be a string.');
    return new TextEncoder().encode(value);
}
bytes.stringToBytes = stringToBytes;
/**
 * Convert a byte-like value to a `Uint8Array`. The value can be a `Uint8Array`,
 * a `bigint`, a `number`, or a `string`.
 *
 * This will attempt to guess the type of the value based on its type and
 * contents. For more control over the conversion, use the more specific
 * conversion functions, such as {@link hexToBytes} or {@link stringToBytes}.
 *
 * If the value is a `string`, and it is prefixed with `0x`, it will be
 * interpreted as a hexadecimal string. Otherwise, it will be interpreted as a
 * UTF-8 string. To convert a hexadecimal string to bytes without interpreting
 * it as a UTF-8 string, use {@link hexToBytes} instead.
 *
 * If the value is a `bigint`, it is assumed to be unsigned. To convert a signed
 * `bigint` to bytes, use {@link signedBigIntToBytes} instead.
 *
 * If the value is a `Uint8Array`, it will be returned as-is.
 *
 * @param value - The value to convert to bytes.
 * @returns The bytes as `Uint8Array`.
 */
function valueToBytes(value) {
    if (typeof value === 'bigint') {
        return bigIntToBytes(value);
    }
    if (typeof value === 'number') {
        return numberToBytes(value);
    }
    if (typeof value === 'string') {
        if (value.startsWith('0x')) {
            return hexToBytes(value);
        }
        return stringToBytes(value);
    }
    if (isBytes(value)) {
        return value;
    }
    throw new TypeError(`Unsupported value type: "${typeof value}".`);
}
bytes.valueToBytes = valueToBytes;
/**
 * Concatenate multiple byte-like values into a single `Uint8Array`. The values
 * can be `Uint8Array`, `bigint`, `number`, or `string`. This uses
 * {@link valueToBytes} under the hood to convert each value to bytes. Refer to
 * the documentation of that function for more information.
 *
 * @param values - The values to concatenate.
 * @returns The concatenated bytes as `Uint8Array`.
 */
function concatBytes(values) {
    const normalizedValues = new Array(values.length);
    let byteLength = 0;
    for (let i = 0; i < values.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const value = valueToBytes(values[i]);
        normalizedValues[i] = value;
        byteLength += value.length;
    }
    const bytes = new Uint8Array(byteLength);
    for (let i = 0, offset = 0; i < normalizedValues.length; i++) {
        // While we could simply spread the values into an array and use
        // `Uint8Array.from`, that is a lot slower than using `Uint8Array.set`.
        bytes.set(normalizedValues[i], offset);
        offset += normalizedValues[i].length;
    }
    return bytes;
}
bytes.concatBytes = concatBytes;
/**
 * Create a {@link DataView} from a {@link Uint8Array}. This is a convenience
 * function that avoids having to create a {@link DataView} manually, which
 * requires passing the `byteOffset` and `byteLength` parameters every time.
 *
 * Not passing the `byteOffset` and `byteLength` parameters can result in
 * unexpected behavior when the {@link Uint8Array} is a view of a larger
 * {@link ArrayBuffer}, e.g., when using {@link Uint8Array.subarray}.
 *
 * This function also supports Node.js {@link Buffer}s.
 *
 * @example
 * ```typescript
 * const bytes = new Uint8Array([1, 2, 3]);
 *
 * // This is equivalent to:
 * // const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
 * const dataView = createDataView(bytes);
 * ```
 * @param bytes - The bytes to create the {@link DataView} from.
 * @returns The {@link DataView}.
 */
function createDataView(bytes) {
    // To maintain compatibility with Node.js, we need to check if the bytes are
    // a Buffer. If so, we need to slice the buffer to get the underlying
    // ArrayBuffer.
    // eslint-disable-next-line no-restricted-globals
    if (typeof Buffer !== 'undefined' && bytes instanceof Buffer) {
        const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
        return new DataView(buffer);
    }
    return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}
bytes.createDataView = createDataView;

var checksum = {};

Object.defineProperty(checksum, "__esModule", { value: true });
checksum.ChecksumStruct = void 0;
const superstruct_1$1 = require$$1$1;
const base64_1 = base64$1;
checksum.ChecksumStruct = (0, superstruct_1$1.size)((0, base64_1.base64)((0, superstruct_1$1.string)(), { paddingRequired: true }), 44, 44);

var coercers = {};

Object.defineProperty(coercers, "__esModule", { value: true });
coercers.createHex = coercers.createBytes = coercers.createBigInt = coercers.createNumber = void 0;
const superstruct_1 = require$$1$1;
const assert_1$1 = assert$2;
const bytes_1 = bytes;
const hex_1$1 = hex;
const NumberLikeStruct = (0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.bigint)(), (0, superstruct_1.string)(), hex_1$1.StrictHexStruct]);
const NumberCoercer = (0, superstruct_1.coerce)((0, superstruct_1.number)(), NumberLikeStruct, Number);
const BigIntCoercer = (0, superstruct_1.coerce)((0, superstruct_1.bigint)(), NumberLikeStruct, BigInt);
(0, superstruct_1.union)([hex_1$1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array)]);
const BytesCoercer = (0, superstruct_1.coerce)((0, superstruct_1.instance)(Uint8Array), (0, superstruct_1.union)([hex_1$1.StrictHexStruct]), bytes_1.hexToBytes);
const HexCoercer = (0, superstruct_1.coerce)(hex_1$1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array), bytes_1.bytesToHex);
/**
 * Create a number from a number-like value.
 *
 * - If the value is a number, it is returned as-is.
 * - If the value is a `bigint`, it is converted to a number.
 * - If the value is a string, it is interpreted as a decimal number.
 * - If the value is a hex string (i.e., it starts with "0x"), it is
 * interpreted as a hexadecimal number.
 *
 * This validates that the value is a number-like value, and that the resulting
 * number is not `NaN` or `Infinity`.
 *
 * @example
 * ```typescript
 * const value = createNumber('0x010203');
 * console.log(value); // 66051
 *
 * const otherValue = createNumber(123n);
 * console.log(otherValue); // 123
 * ```
 * @param value - The value to create the number from.
 * @returns The created number.
 * @throws If the value is not a number-like value, or if the resulting number
 * is `NaN` or `Infinity`.
 */
function createNumber(value) {
    try {
        const result = (0, superstruct_1.create)(value, NumberCoercer);
        (0, assert_1$1.assert)(Number.isFinite(result), `Expected a number-like value, got "${value}".`);
        return result;
    }
    catch (error) {
        if (error instanceof superstruct_1.StructError) {
            throw new Error(`Expected a number-like value, got "${value}".`);
        }
        /* istanbul ignore next */
        throw error;
    }
}
coercers.createNumber = createNumber;
/**
 * Create a `bigint` from a number-like value.
 *
 * - If the value is a number, it is converted to a `bigint`.
 * - If the value is a `bigint`, it is returned as-is.
 * - If the value is a string, it is interpreted as a decimal number and
 * converted to a `bigint`.
 * - If the value is a hex string (i.e., it starts with "0x"), it is
 * interpreted as a hexadecimal number and converted to a `bigint`.
 *
 * @example
 * ```typescript
 * const value = createBigInt('0x010203');
 * console.log(value); // 16909060n
 *
 * const otherValue = createBigInt(123);
 * console.log(otherValue); // 123n
 * ```
 * @param value - The value to create the bigint from.
 * @returns The created bigint.
 * @throws If the value is not a number-like value.
 */
function createBigInt(value) {
    try {
        // The `BigInt` constructor throws if the value is not a number-like value.
        // There is no need to validate the value manually.
        return (0, superstruct_1.create)(value, BigIntCoercer);
    }
    catch (error) {
        if (error instanceof superstruct_1.StructError) {
            throw new Error(`Expected a number-like value, got "${String(error.value)}".`);
        }
        /* istanbul ignore next */
        throw error;
    }
}
coercers.createBigInt = createBigInt;
/**
 * Create a byte array from a bytes-like value.
 *
 * - If the value is a byte array, it is returned as-is.
 * - If the value is a hex string (i.e., it starts with "0x"), it is interpreted
 * as a hexadecimal number and converted to a byte array.
 *
 * @example
 * ```typescript
 * const value = createBytes('0x010203');
 * console.log(value); // Uint8Array [ 1, 2, 3 ]
 *
 * const otherValue = createBytes('0x010203');
 * console.log(otherValue); // Uint8Array [ 1, 2, 3 ]
 * ```
 * @param value - The value to create the byte array from.
 * @returns The created byte array.
 * @throws If the value is not a bytes-like value.
 */
function createBytes(value) {
    if (typeof value === 'string' && value.toLowerCase() === '0x') {
        return new Uint8Array();
    }
    try {
        return (0, superstruct_1.create)(value, BytesCoercer);
    }
    catch (error) {
        if (error instanceof superstruct_1.StructError) {
            throw new Error(`Expected a bytes-like value, got "${String(error.value)}".`);
        }
        /* istanbul ignore next */
        throw error;
    }
}
coercers.createBytes = createBytes;
/**
 * Create a hexadecimal string from a bytes-like value.
 *
 * - If the value is a hex string (i.e., it starts with "0x"), it is returned
 * as-is.
 * - If the value is a `Uint8Array`, it is converted to a hex string.
 *
 * @example
 * ```typescript
 * const value = createHex(new Uint8Array([1, 2, 3]));
 * console.log(value); // '0x010203'
 *
 * const otherValue = createHex('0x010203');
 * console.log(otherValue); // '0x010203'
 * ```
 * @param value - The value to create the hex string from.
 * @returns The created hex string.
 * @throws If the value is not a bytes-like value.
 */
function createHex(value) {
    if ((value instanceof Uint8Array && value.length === 0) ||
        (typeof value === 'string' && value.toLowerCase() === '0x')) {
        return '0x';
    }
    try {
        return (0, superstruct_1.create)(value, HexCoercer);
    }
    catch (error) {
        if (error instanceof superstruct_1.StructError) {
            throw new Error(`Expected a bytes-like value, got "${String(error.value)}".`);
        }
        /* istanbul ignore next */
        throw error;
    }
}
coercers.createHex = createHex;

var collections = {};

var __classPrivateFieldSet$1 = (commonjsGlobal && commonjsGlobal.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet$1 = (commonjsGlobal && commonjsGlobal.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FrozenMap_map, _FrozenSet_set;
Object.defineProperty(collections, "__esModule", { value: true });
collections.FrozenSet = collections.FrozenMap = void 0;
/**
 * A {@link ReadonlyMap} that cannot be modified after instantiation.
 * The implementation uses an inner map hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this map.
 */
class FrozenMap {
    constructor(entries) {
        _FrozenMap_map.set(this, void 0);
        __classPrivateFieldSet$1(this, _FrozenMap_map, new Map(entries), "f");
        Object.freeze(this);
    }
    get size() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").size;
    }
    [(_FrozenMap_map = new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f")[Symbol.iterator]();
    }
    entries() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").entries();
    }
    forEach(callbackfn, thisArg) {
        // We have to wrap the specified callback in order to prevent it from
        // receiving a reference to the inner map.
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
    }
    get(key) {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").get(key);
    }
    has(key) {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").has(key);
    }
    keys() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").keys();
    }
    values() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map, "f").values();
    }
    toString() {
        return `FrozenMap(${this.size}) {${this.size > 0
            ? ` ${[...this.entries()]
                .map(([key, value]) => `${String(key)} => ${String(value)}`)
                .join(', ')} `
            : ''}}`;
    }
}
collections.FrozenMap = FrozenMap;
/**
 * A {@link ReadonlySet} that cannot be modified after instantiation.
 * The implementation uses an inner set hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this set.
 */
class FrozenSet {
    constructor(values) {
        _FrozenSet_set.set(this, void 0);
        __classPrivateFieldSet$1(this, _FrozenSet_set, new Set(values), "f");
        Object.freeze(this);
    }
    get size() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").size;
    }
    [(_FrozenSet_set = new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f")[Symbol.iterator]();
    }
    entries() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").entries();
    }
    forEach(callbackfn, thisArg) {
        // We have to wrap the specified callback in order to prevent it from
        // receiving a reference to the inner set.
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
    }
    has(value) {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").has(value);
    }
    keys() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").keys();
    }
    values() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set, "f").values();
    }
    toString() {
        return `FrozenSet(${this.size}) {${this.size > 0
            ? ` ${[...this.values()].map((member) => String(member)).join(', ')} `
            : ''}}`;
    }
}
collections.FrozenSet = FrozenSet;
Object.freeze(FrozenMap);
Object.freeze(FrozenMap.prototype);
Object.freeze(FrozenSet);
Object.freeze(FrozenSet.prototype);

var json = {};

var misc = {};

(function (exports) {
	//
	// Types
	//
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.calculateNumberSize = exports.calculateStringSize = exports.isASCII = exports.isPlainObject = exports.ESCAPE_CHARACTERS_REGEXP = exports.JsonSize = exports.hasProperty = exports.isObject = exports.isNullOrUndefined = exports.isNonEmptyArray = void 0;
	//
	// Type Guards
	//
	/**
	 * A {@link NonEmptyArray} type guard.
	 *
	 * @template Element - The non-empty array member type.
	 * @param value - The value to check.
	 * @returns Whether the value is a non-empty array.
	 */
	function isNonEmptyArray(value) {
	    return Array.isArray(value) && value.length > 0;
	}
	exports.isNonEmptyArray = isNonEmptyArray;
	/**
	 * Type guard for "nullishness".
	 *
	 * @param value - Any value.
	 * @returns `true` if the value is null or undefined, `false` otherwise.
	 */
	function isNullOrUndefined(value) {
	    return value === null || value === undefined;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	/**
	 * A type guard for {@link RuntimeObject}.
	 *
	 * @param value - The value to check.
	 * @returns Whether the specified value has a runtime type of `object` and is
	 * neither `null` nor an `Array`.
	 */
	function isObject(value) {
	    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
	}
	exports.isObject = isObject;
	//
	// Other utility functions
	//
	/**
	 * A type guard for ensuring an object has a property.
	 *
	 * @param objectToCheck - The object to check.
	 * @param name - The property name to check for.
	 * @returns Whether the specified object has an own property with the specified
	 * name, regardless of whether it is enumerable or not.
	 */
	const hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
	exports.hasProperty = hasProperty;
	(function (JsonSize) {
	    JsonSize[JsonSize["Null"] = 4] = "Null";
	    JsonSize[JsonSize["Comma"] = 1] = "Comma";
	    JsonSize[JsonSize["Wrapper"] = 1] = "Wrapper";
	    JsonSize[JsonSize["True"] = 4] = "True";
	    JsonSize[JsonSize["False"] = 5] = "False";
	    JsonSize[JsonSize["Quote"] = 1] = "Quote";
	    JsonSize[JsonSize["Colon"] = 1] = "Colon";
	    // eslint-disable-next-line @typescript-eslint/no-shadow
	    JsonSize[JsonSize["Date"] = 24] = "Date";
	})(exports.JsonSize || (exports.JsonSize = {}));
	/**
	 * Regular expression with pattern matching for (special) escaped characters.
	 */
	exports.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
	/**
	 * Check if the value is plain object.
	 *
	 * @param value - Value to be checked.
	 * @returns True if an object is the plain JavaScript object,
	 * false if the object is not plain (e.g. function).
	 */
	function isPlainObject(value) {
	    if (typeof value !== 'object' || value === null) {
	        return false;
	    }
	    try {
	        let proto = value;
	        while (Object.getPrototypeOf(proto) !== null) {
	            proto = Object.getPrototypeOf(proto);
	        }
	        return Object.getPrototypeOf(value) === proto;
	    }
	    catch (_) {
	        return false;
	    }
	}
	exports.isPlainObject = isPlainObject;
	/**
	 * Check if character is ASCII.
	 *
	 * @param character - Character.
	 * @returns True if a character code is ASCII, false if not.
	 */
	function isASCII(character) {
	    return character.charCodeAt(0) <= 127;
	}
	exports.isASCII = isASCII;
	/**
	 * Calculate string size.
	 *
	 * @param value - String value to calculate size.
	 * @returns Number of bytes used to store whole string value.
	 */
	function calculateStringSize(value) {
	    var _a;
	    const size = value.split('').reduce((total, character) => {
	        if (isASCII(character)) {
	            return total + 1;
	        }
	        return total + 2;
	    }, 0);
	    // Also detect characters that need backslash escape
	    return size + ((_a = value.match(exports.ESCAPE_CHARACTERS_REGEXP)) !== null && _a !== void 0 ? _a : []).length;
	}
	exports.calculateStringSize = calculateStringSize;
	/**
	 * Calculate size of a number ofter JSON serialization.
	 *
	 * @param value - Number value to calculate size.
	 * @returns Number of bytes used to store whole number in JSON.
	 */
	function calculateNumberSize(value) {
	    return value.toString().length;
	}
	exports.calculateNumberSize = calculateNumberSize;
	
} (misc));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.validateJsonAndGetSize = exports.getJsonRpcIdValidator = exports.assertIsJsonRpcError = exports.isJsonRpcError = exports.assertIsJsonRpcFailure = exports.isJsonRpcFailure = exports.assertIsJsonRpcSuccess = exports.isJsonRpcSuccess = exports.assertIsJsonRpcResponse = exports.isJsonRpcResponse = exports.assertIsPendingJsonRpcResponse = exports.isPendingJsonRpcResponse = exports.JsonRpcResponseStruct = exports.JsonRpcFailureStruct = exports.JsonRpcSuccessStruct = exports.PendingJsonRpcResponseStruct = exports.assertIsJsonRpcRequest = exports.isJsonRpcRequest = exports.assertIsJsonRpcNotification = exports.isJsonRpcNotification = exports.JsonRpcNotificationStruct = exports.JsonRpcRequestStruct = exports.JsonRpcParamsStruct = exports.JsonRpcErrorStruct = exports.JsonRpcIdStruct = exports.JsonRpcVersionStruct = exports.jsonrpc2 = exports.isValidJson = exports.JsonStruct = void 0;
	const superstruct_1 = require$$1$1;
	const assert_1 = assert$2;
	const misc_1 = misc;
	exports.JsonStruct = (0, superstruct_1.define)('Json', (value) => {
	    const [isValid] = validateJsonAndGetSize(value, true);
	    if (!isValid) {
	        return 'Expected a valid JSON-serializable value';
	    }
	    return true;
	});
	/**
	 * Check if the given value is a valid {@link Json} value, i.e., a value that is
	 * serializable to JSON.
	 *
	 * @param value - The value to check.
	 * @returns Whether the value is a valid {@link Json} value.
	 */
	function isValidJson(value) {
	    return (0, superstruct_1.is)(value, exports.JsonStruct);
	}
	exports.isValidJson = isValidJson;
	/**
	 * The string '2.0'.
	 */
	exports.jsonrpc2 = '2.0';
	exports.JsonRpcVersionStruct = (0, superstruct_1.literal)(exports.jsonrpc2);
	exports.JsonRpcIdStruct = (0, superstruct_1.nullable)((0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.string)()]));
	exports.JsonRpcErrorStruct = (0, superstruct_1.object)({
	    code: (0, superstruct_1.integer)(),
	    message: (0, superstruct_1.string)(),
	    data: (0, superstruct_1.optional)(exports.JsonStruct),
	    stack: (0, superstruct_1.optional)((0, superstruct_1.string)()),
	});
	exports.JsonRpcParamsStruct = (0, superstruct_1.optional)((0, superstruct_1.union)([(0, superstruct_1.record)((0, superstruct_1.string)(), exports.JsonStruct), (0, superstruct_1.array)(exports.JsonStruct)]));
	exports.JsonRpcRequestStruct = (0, superstruct_1.object)({
	    id: exports.JsonRpcIdStruct,
	    jsonrpc: exports.JsonRpcVersionStruct,
	    method: (0, superstruct_1.string)(),
	    params: exports.JsonRpcParamsStruct,
	});
	exports.JsonRpcNotificationStruct = (0, superstruct_1.omit)(exports.JsonRpcRequestStruct, ['id']);
	/**
	 * Check if the given value is a valid {@link JsonRpcNotification} object.
	 *
	 * @param value - The value to check.
	 * @returns Whether the given value is a valid {@link JsonRpcNotification}
	 * object.
	 */
	function isJsonRpcNotification(value) {
	    return (0, superstruct_1.is)(value, exports.JsonRpcNotificationStruct);
	}
	exports.isJsonRpcNotification = isJsonRpcNotification;
	/**
	 * Assert that the given value is a valid {@link JsonRpcNotification} object.
	 *
	 * @param value - The value to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcNotification} object.
	 */
	function assertIsJsonRpcNotification(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcNotificationStruct, 'Invalid JSON-RPC notification', ErrorWrapper);
	}
	exports.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
	/**
	 * Check if the given value is a valid {@link JsonRpcRequest} object.
	 *
	 * @param value - The value to check.
	 * @returns Whether the given value is a valid {@link JsonRpcRequest} object.
	 */
	function isJsonRpcRequest(value) {
	    return (0, superstruct_1.is)(value, exports.JsonRpcRequestStruct);
	}
	exports.isJsonRpcRequest = isJsonRpcRequest;
	/**
	 * Assert that the given value is a valid {@link JsonRpcRequest} object.
	 *
	 * @param value - The JSON-RPC request or notification to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcRequest} object.
	 */
	function assertIsJsonRpcRequest(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcRequestStruct, 'Invalid JSON-RPC request', ErrorWrapper);
	}
	exports.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
	exports.PendingJsonRpcResponseStruct = (0, superstruct_1.object)({
	    id: exports.JsonRpcIdStruct,
	    jsonrpc: exports.JsonRpcVersionStruct,
	    result: (0, superstruct_1.optional)((0, superstruct_1.unknown)()),
	    error: (0, superstruct_1.optional)(exports.JsonRpcErrorStruct),
	});
	exports.JsonRpcSuccessStruct = (0, superstruct_1.object)({
	    id: exports.JsonRpcIdStruct,
	    jsonrpc: exports.JsonRpcVersionStruct,
	    result: exports.JsonStruct,
	});
	exports.JsonRpcFailureStruct = (0, superstruct_1.object)({
	    id: exports.JsonRpcIdStruct,
	    jsonrpc: exports.JsonRpcVersionStruct,
	    error: exports.JsonRpcErrorStruct,
	});
	exports.JsonRpcResponseStruct = (0, superstruct_1.union)([
	    exports.JsonRpcSuccessStruct,
	    exports.JsonRpcFailureStruct,
	]);
	/**
	 * Type guard to check whether specified JSON-RPC response is a
	 * {@link PendingJsonRpcResponse}.
	 *
	 * @param response - The JSON-RPC response to check.
	 * @returns Whether the specified JSON-RPC response is pending.
	 */
	function isPendingJsonRpcResponse(response) {
	    return (0, superstruct_1.is)(response, exports.PendingJsonRpcResponseStruct);
	}
	exports.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
	/**
	 * Assert that the given value is a valid {@link PendingJsonRpcResponse} object.
	 *
	 * @param response - The JSON-RPC response to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link PendingJsonRpcResponse}
	 * object.
	 */
	function assertIsPendingJsonRpcResponse(response, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(response, exports.PendingJsonRpcResponseStruct, 'Invalid pending JSON-RPC response', ErrorWrapper);
	}
	exports.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
	/**
	 * Type guard to check if a value is a {@link JsonRpcResponse}.
	 *
	 * @param response - The object to check.
	 * @returns Whether the object is a JsonRpcResponse.
	 */
	function isJsonRpcResponse(response) {
	    return (0, superstruct_1.is)(response, exports.JsonRpcResponseStruct);
	}
	exports.isJsonRpcResponse = isJsonRpcResponse;
	/**
	 * Assert that the given value is a valid {@link JsonRpcResponse} object.
	 *
	 * @param value - The value to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcResponse} object.
	 */
	function assertIsJsonRpcResponse(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcResponseStruct, 'Invalid JSON-RPC response', ErrorWrapper);
	}
	exports.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
	/**
	 * Check if the given value is a valid {@link JsonRpcSuccess} object.
	 *
	 * @param value - The value to check.
	 * @returns Whether the given value is a valid {@link JsonRpcSuccess} object.
	 */
	function isJsonRpcSuccess(value) {
	    return (0, superstruct_1.is)(value, exports.JsonRpcSuccessStruct);
	}
	exports.isJsonRpcSuccess = isJsonRpcSuccess;
	/**
	 * Assert that the given value is a valid {@link JsonRpcSuccess} object.
	 *
	 * @param value - The value to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcSuccess} object.
	 */
	function assertIsJsonRpcSuccess(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcSuccessStruct, 'Invalid JSON-RPC success response', ErrorWrapper);
	}
	exports.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
	/**
	 * Check if the given value is a valid {@link JsonRpcFailure} object.
	 *
	 * @param value - The value to check.
	 * @returns Whether the given value is a valid {@link JsonRpcFailure} object.
	 */
	function isJsonRpcFailure(value) {
	    return (0, superstruct_1.is)(value, exports.JsonRpcFailureStruct);
	}
	exports.isJsonRpcFailure = isJsonRpcFailure;
	/**
	 * Assert that the given value is a valid {@link JsonRpcFailure} object.
	 *
	 * @param value - The value to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcFailure} object.
	 */
	function assertIsJsonRpcFailure(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcFailureStruct, 'Invalid JSON-RPC failure response', ErrorWrapper);
	}
	exports.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
	/**
	 * Check if the given value is a valid {@link JsonRpcError} object.
	 *
	 * @param value - The value to check.
	 * @returns Whether the given value is a valid {@link JsonRpcError} object.
	 */
	function isJsonRpcError(value) {
	    return (0, superstruct_1.is)(value, exports.JsonRpcErrorStruct);
	}
	exports.isJsonRpcError = isJsonRpcError;
	/**
	 * Assert that the given value is a valid {@link JsonRpcError} object.
	 *
	 * @param value - The value to check.
	 * @param ErrorWrapper - The error class to throw if the assertion fails.
	 * Defaults to {@link AssertionError}.
	 * @throws If the given value is not a valid {@link JsonRpcError} object.
	 */
	function assertIsJsonRpcError(value, 
	// eslint-disable-next-line @typescript-eslint/naming-convention
	ErrorWrapper) {
	    (0, assert_1.assertStruct)(value, exports.JsonRpcErrorStruct, 'Invalid JSON-RPC error', ErrorWrapper);
	}
	exports.assertIsJsonRpcError = assertIsJsonRpcError;
	/**
	 * Gets a function for validating JSON-RPC request / response `id` values.
	 *
	 * By manipulating the options of this factory, you can control the behavior
	 * of the resulting validator for some edge cases. This is useful because e.g.
	 * `null` should sometimes but not always be permitted.
	 *
	 * Note that the empty string (`''`) is always permitted by the JSON-RPC
	 * specification, but that kind of sucks and you may want to forbid it in some
	 * instances anyway.
	 *
	 * For more details, see the
	 * [JSON-RPC Specification](https://www.jsonrpc.org/specification).
	 *
	 * @param options - An options object.
	 * @param options.permitEmptyString - Whether the empty string (i.e. `''`)
	 * should be treated as a valid ID. Default: `true`
	 * @param options.permitFractions - Whether fractional numbers (e.g. `1.2`)
	 * should be treated as valid IDs. Default: `false`
	 * @param options.permitNull - Whether `null` should be treated as a valid ID.
	 * Default: `true`
	 * @returns The JSON-RPC ID validator function.
	 */
	function getJsonRpcIdValidator(options) {
	    const { permitEmptyString, permitFractions, permitNull } = Object.assign({ permitEmptyString: true, permitFractions: false, permitNull: true }, options);
	    /**
	     * Type guard for {@link JsonRpcId}.
	     *
	     * @param id - The JSON-RPC ID value to check.
	     * @returns Whether the given ID is valid per the options given to the
	     * factory.
	     */
	    const isValidJsonRpcId = (id) => {
	        return Boolean((typeof id === 'number' && (permitFractions || Number.isInteger(id))) ||
	            (typeof id === 'string' && (permitEmptyString || id.length > 0)) ||
	            (permitNull && id === null));
	    };
	    return isValidJsonRpcId;
	}
	exports.getJsonRpcIdValidator = getJsonRpcIdValidator;
	/**
	 * Checks whether a value is JSON serializable and counts the total number
	 * of bytes needed to store the serialized version of the value.
	 *
	 * @param jsObject - Potential JSON serializable object.
	 * @param skipSizingProcess - Skip JSON size calculation (default: false).
	 * @returns Tuple [isValid, plainTextSizeInBytes] containing a boolean that signals whether
	 * the value was serializable and a number of bytes that it will use when serialized to JSON.
	 */
	function validateJsonAndGetSize(jsObject, skipSizingProcess = false) {
	    const seenObjects = new Set();
	    /**
	     * Checks whether a value is JSON serializable and counts the total number
	     * of bytes needed to store the serialized version of the value.
	     *
	     * This function assumes the encoding of the JSON is done in UTF-8.
	     *
	     * @param value - Potential JSON serializable value.
	     * @param skipSizing - Skip JSON size calculation (default: false).
	     * @returns Tuple [isValid, plainTextSizeInBytes] containing a boolean that signals whether
	     * the value was serializable and a number of bytes that it will use when serialized to JSON.
	     */
	    function getJsonSerializableInfo(value, skipSizing) {
	        if (value === undefined) {
	            return [false, 0];
	        }
	        else if (value === null) {
	            // Return already specified constant size for null (special object)
	            return [true, skipSizing ? 0 : misc_1.JsonSize.Null];
	        }
	        // Check and calculate sizes for basic (and some special) types
	        const typeOfValue = typeof value;
	        try {
	            if (typeOfValue === 'function') {
	                return [false, 0];
	            }
	            else if (typeOfValue === 'string' || value instanceof String) {
	                return [
	                    true,
	                    skipSizing
	                        ? 0
	                        : (0, misc_1.calculateStringSize)(value) + misc_1.JsonSize.Quote * 2,
	                ];
	            }
	            else if (typeOfValue === 'boolean' || value instanceof Boolean) {
	                if (skipSizing) {
	                    return [true, 0];
	                }
	                // eslint-disable-next-line eqeqeq
	                return [true, value == true ? misc_1.JsonSize.True : misc_1.JsonSize.False];
	            }
	            else if (typeOfValue === 'number' || value instanceof Number) {
	                if (skipSizing) {
	                    return [true, 0];
	                }
	                return [true, (0, misc_1.calculateNumberSize)(value)];
	            }
	            else if (value instanceof Date) {
	                if (skipSizing) {
	                    return [true, 0];
	                }
	                return [
	                    true,
	                    // Note: Invalid dates will serialize to null
	                    isNaN(value.getDate())
	                        ? misc_1.JsonSize.Null
	                        : misc_1.JsonSize.Date + misc_1.JsonSize.Quote * 2,
	                ];
	            }
	        }
	        catch (_) {
	            return [false, 0];
	        }
	        // If object is not plain and cannot be serialized properly,
	        // stop here and return false for serialization
	        if (!(0, misc_1.isPlainObject)(value) && !Array.isArray(value)) {
	            return [false, 0];
	        }
	        // Circular object detection (handling)
	        // Check if the same object already exists
	        if (seenObjects.has(value)) {
	            return [false, 0];
	        }
	        // Add new object to the seen objects set
	        // Only the plain objects should be added (Primitive types are skipped)
	        seenObjects.add(value);
	        // Continue object decomposition
	        try {
	            return [
	                true,
	                Object.entries(value).reduce((sum, [key, nestedValue], idx, arr) => {
	                    // Recursively process next nested object or primitive type
	                    // eslint-disable-next-line prefer-const
	                    let [valid, size] = getJsonSerializableInfo(nestedValue, skipSizing);
	                    if (!valid) {
	                        throw new Error('JSON validation did not pass. Validation process stopped.');
	                    }
	                    // Circular object detection
	                    // Once a child node is visited and processed remove it from the set.
	                    // This will prevent false positives with the same adjacent objects.
	                    seenObjects.delete(value);
	                    if (skipSizing) {
	                        return 0;
	                    }
	                    // Objects will have be serialized with "key": value,
	                    // therefore we include the key in the calculation here
	                    const keySize = Array.isArray(value)
	                        ? 0
	                        : key.length + misc_1.JsonSize.Comma + misc_1.JsonSize.Colon * 2;
	                    const separator = idx < arr.length - 1 ? misc_1.JsonSize.Comma : 0;
	                    return sum + keySize + size + separator;
	                }, 
	                // Starts at 2 because the serialized JSON string data (plain text)
	                // will minimally contain {}/[]
	                skipSizing ? 0 : misc_1.JsonSize.Wrapper * 2),
	            ];
	        }
	        catch (_) {
	            return [false, 0];
	        }
	    }
	    return getJsonSerializableInfo(jsObject, skipSizingProcess);
	}
	exports.validateJsonAndGetSize = validateJsonAndGetSize;
	
} (json));

var logging = {};

var __importDefault$c = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(logging, "__esModule", { value: true });
logging.createModuleLogger = logging.createProjectLogger = void 0;
const debug_1 = __importDefault$c(requireSrc());
const globalLogger = (0, debug_1.default)('metamask');
/**
 * Creates a logger via the `debug` library whose log messages will be tagged
 * using the name of your project. By default, such messages will be
 * suppressed, but you can reveal them by setting the `DEBUG` environment
 * variable to `metamask:<projectName>`. You can also set this variable to
 * `metamask:*` if you want to see log messages from all MetaMask projects that
 * are also using this function to create their loggers.
 *
 * @param projectName - The name of your project. This should be the name of
 * your NPM package if you're developing one.
 * @returns An instance of `debug`.
 */
function createProjectLogger(projectName) {
    return globalLogger.extend(projectName);
}
logging.createProjectLogger = createProjectLogger;
/**
 * Creates a logger via the `debug` library which is derived from the logger for
 * the whole project whose log messages will be tagged using the name of your
 * module. By default, such messages will be suppressed, but you can reveal them
 * by setting the `DEBUG` environment variable to
 * `metamask:<projectName>:<moduleName>`. You can also set this variable to
 * `metamask:<projectName>:*` if you want to see log messages from the project,
 * or `metamask:*` if you want to see log messages from all MetaMask projects.
 *
 * @param projectLogger - The logger created via {@link createProjectLogger}.
 * @param moduleName - The name of your module. You could use the name of the
 * file where you're using this logger or some other name.
 * @returns An instance of `debug`.
 */
function createModuleLogger(projectLogger, moduleName) {
    return projectLogger.extend(moduleName);
}
logging.createModuleLogger = createModuleLogger;

var number = {};

Object.defineProperty(number, "__esModule", { value: true });
number.hexToBigInt = number.hexToNumber = number.bigIntToHex = number.numberToHex = void 0;
const assert_1 = assert$2;
const hex_1 = hex;
/**
 * Convert a number to a hexadecimal string. This verifies that the number is a
 * non-negative safe integer.
 *
 * To convert a `bigint` to a hexadecimal string instead, use
 * {@link bigIntToHex}.
 *
 * @example
 * ```typescript
 * numberToHex(0); // '0x0'
 * numberToHex(1); // '0x1'
 * numberToHex(16); // '0x10'
 * ```
 * @param value - The number to convert to a hexadecimal string.
 * @returns The hexadecimal string, with the "0x"-prefix.
 * @throws If the number is not a non-negative safe integer.
 */
const numberToHex = (value) => {
    (0, assert_1.assert)(typeof value === 'number', 'Value must be a number.');
    (0, assert_1.assert)(value >= 0, 'Value must be a non-negative number.');
    (0, assert_1.assert)(Number.isSafeInteger(value), 'Value is not a safe integer. Use `bigIntToHex` instead.');
    return (0, hex_1.add0x)(value.toString(16));
};
number.numberToHex = numberToHex;
/**
 * Convert a `bigint` to a hexadecimal string. This verifies that the `bigint`
 * is a non-negative integer.
 *
 * To convert a number to a hexadecimal string instead, use {@link numberToHex}.
 *
 * @example
 * ```typescript
 * bigIntToHex(0n); // '0x0'
 * bigIntToHex(1n); // '0x1'
 * bigIntToHex(16n); // '0x10'
 * ```
 * @param value - The `bigint` to convert to a hexadecimal string.
 * @returns The hexadecimal string, with the "0x"-prefix.
 * @throws If the `bigint` is not a non-negative integer.
 */
const bigIntToHex = (value) => {
    (0, assert_1.assert)(typeof value === 'bigint', 'Value must be a bigint.');
    (0, assert_1.assert)(value >= 0, 'Value must be a non-negative bigint.');
    return (0, hex_1.add0x)(value.toString(16));
};
number.bigIntToHex = bigIntToHex;
/**
 * Convert a hexadecimal string to a number. This verifies that the string is a
 * valid hex string, and that the resulting number is a safe integer. Both
 * "0x"-prefixed and unprefixed strings are supported.
 *
 * To convert a hexadecimal string to a `bigint` instead, use
 * {@link hexToBigInt}.
 *
 * @example
 * ```typescript
 * hexToNumber('0x0'); // 0
 * hexToNumber('0x1'); // 1
 * hexToNumber('0x10'); // 16
 * ```
 * @param value - The hexadecimal string to convert to a number.
 * @returns The number.
 * @throws If the value is not a valid hexadecimal string, or if the resulting
 * number is not a safe integer.
 */
const hexToNumber = (value) => {
    (0, hex_1.assertIsHexString)(value);
    // `parseInt` accepts values without the "0x"-prefix, whereas `Number` does
    // not. Using this is slightly faster than `Number(add0x(value))`.
    const numberValue = parseInt(value, 16);
    (0, assert_1.assert)(Number.isSafeInteger(numberValue), 'Value is not a safe integer. Use `hexToBigInt` instead.');
    return numberValue;
};
number.hexToNumber = hexToNumber;
/**
 * Convert a hexadecimal string to a `bigint`. This verifies that the string is
 * a valid hex string. Both "0x"-prefixed and unprefixed strings are supported.
 *
 * To convert a hexadecimal string to a number instead, use {@link hexToNumber}.
 *
 * @example
 * ```typescript
 * hexToBigInt('0x0'); // 0n
 * hexToBigInt('0x1'); // 1n
 * hexToBigInt('0x10'); // 16n
 * ```
 * @param value - The hexadecimal string to convert to a `bigint`.
 * @returns The `bigint`.
 * @throws If the value is not a valid hexadecimal string.
 */
const hexToBigInt = (value) => {
    (0, hex_1.assertIsHexString)(value);
    // The `BigInt` constructor requires the "0x"-prefix to parse a hex string.
    return BigInt((0, hex_1.add0x)(value));
};
number.hexToBigInt = hexToBigInt;

var opaque = {};

Object.defineProperty(opaque, "__esModule", { value: true });

var time = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timeSince = exports.inMilliseconds = exports.Duration = void 0;
	(function (Duration) {
	    /**
	     * A millisecond.
	     */
	    Duration[Duration["Millisecond"] = 1] = "Millisecond";
	    /**
	     * A second, in milliseconds.
	     */
	    Duration[Duration["Second"] = 1000] = "Second";
	    /**
	     * A minute, in milliseconds.
	     */
	    Duration[Duration["Minute"] = 60000] = "Minute";
	    /**
	     * An hour, in milliseconds.
	     */
	    Duration[Duration["Hour"] = 3600000] = "Hour";
	    /**
	     * A day, in milliseconds.
	     */
	    Duration[Duration["Day"] = 86400000] = "Day";
	    /**
	     * A week, in milliseconds.
	     */
	    Duration[Duration["Week"] = 604800000] = "Week";
	    /**
	     * A year, in milliseconds.
	     */
	    Duration[Duration["Year"] = 31536000000] = "Year";
	})(exports.Duration || (exports.Duration = {}));
	const isNonNegativeInteger = (number) => Number.isInteger(number) && number >= 0;
	const assertIsNonNegativeInteger = (number, name) => {
	    if (!isNonNegativeInteger(number)) {
	        throw new Error(`"${name}" must be a non-negative integer. Received: "${number}".`);
	    }
	};
	/**
	 * Calculates the millisecond value of the specified number of units of time.
	 *
	 * @param count - The number of units of time.
	 * @param duration - The unit of time to count.
	 * @returns The count multiplied by the specified duration.
	 */
	function inMilliseconds(count, duration) {
	    assertIsNonNegativeInteger(count, 'count');
	    return count * duration;
	}
	exports.inMilliseconds = inMilliseconds;
	/**
	 * Gets the milliseconds since a particular Unix epoch timestamp.
	 *
	 * @param timestamp - A Unix millisecond timestamp.
	 * @returns The number of milliseconds elapsed since the specified timestamp.
	 */
	function timeSince(timestamp) {
	    assertIsNonNegativeInteger(timestamp, 'timestamp');
	    return Date.now() - timestamp;
	}
	exports.timeSince = timeSince;
	
} (time));

var versions = {};

const SemVer$b = semver$1;
const parse$6 = (version, options, throwErrors = false) => {
  if (version instanceof SemVer$b) {
    return version
  }
  try {
    return new SemVer$b(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
};

var parse_1 = parse$6;

const parse$5 = parse_1;
const valid$2 = (version, options) => {
  const v = parse$5(version, options);
  return v ? v.version : null
};
var valid_1 = valid$2;

const parse$4 = parse_1;
const clean$1 = (version, options) => {
  const s = parse$4(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null
};
var clean_1 = clean$1;

const SemVer$a = semver$1;

const inc$1 = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier;
    identifier = options;
    options = undefined;
  }

  try {
    return new SemVer$a(
      version instanceof SemVer$a ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
};
var inc_1 = inc$1;

const parse$3 = parse_1;

const diff$1 = (version1, version2) => {
  const v1 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v1.compare(v2);

  if (comparison === 0) {
    return null
  }

  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;

  if (lowHasPre && !highHasPre) {
    // Going from prerelease -> no prerelease requires some special casing

    // If the low version has only a major, then it will always be a major
    // Some examples:
    // 1.0.0-1 -> 1.0.0
    // 1.0.0-1 -> 1.1.1
    // 1.0.0-1 -> 2.0.0
    if (!lowVersion.patch && !lowVersion.minor) {
      return 'major'
    }

    // Otherwise it can be determined by checking the high version

    if (highVersion.patch) {
      // anything higher than a patch bump would result in the wrong version
      return 'patch'
    }

    if (highVersion.minor) {
      // anything higher than a minor bump would result in the wrong version
      return 'minor'
    }

    // bumping major/minor/patch all have same result
    return 'major'
  }

  // add the `pre` prefix if we are going to a prerelease version
  const prefix = highHasPre ? 'pre' : '';

  if (v1.major !== v2.major) {
    return prefix + 'major'
  }

  if (v1.minor !== v2.minor) {
    return prefix + 'minor'
  }

  if (v1.patch !== v2.patch) {
    return prefix + 'patch'
  }

  // high and low are preleases
  return 'prerelease'
};

var diff_1 = diff$1;

const SemVer$9 = semver$1;
const major$1 = (a, loose) => new SemVer$9(a, loose).major;
var major_1 = major$1;

const SemVer$8 = semver$1;
const minor$1 = (a, loose) => new SemVer$8(a, loose).minor;
var minor_1 = minor$1;

const SemVer$7 = semver$1;
const patch$1 = (a, loose) => new SemVer$7(a, loose).patch;
var patch_1 = patch$1;

const parse$2 = parse_1;
const prerelease$1 = (version, options) => {
  const parsed = parse$2(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
};
var prerelease_1 = prerelease$1;

const compare$4 = compare_1;
const rcompare$1 = (a, b, loose) => compare$4(b, a, loose);
var rcompare_1 = rcompare$1;

const compare$3 = compare_1;
const compareLoose$1 = (a, b) => compare$3(a, b, true);
var compareLoose_1 = compareLoose$1;

const SemVer$6 = semver$1;
const compareBuild$3 = (a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
};
var compareBuild_1 = compareBuild$3;

const compareBuild$2 = compareBuild_1;
const sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose));
var sort_1 = sort$1;

const compareBuild$1 = compareBuild_1;
const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose));
var rsort_1 = rsort$1;

const SemVer$5 = semver$1;
const parse$1 = parse_1;
const { safeRe: re, t: t$2 } = reExports;

const coerce$1 = (version, options) => {
  if (version instanceof SemVer$5) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {};

  let match = null;
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t$2.COERCEFULL] : re[t$2.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    const coerceRtlRegex = options.includePrerelease ? re[t$2.COERCERTLFULL] : re[t$2.COERCERTL];
    let next;
    while ((next = coerceRtlRegex.exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
    }
    // leave it in a clean state
    coerceRtlRegex.lastIndex = -1;
  }

  if (match === null) {
    return null
  }

  const major = match[2];
  const minor = match[3] || '0';
  const patch = match[4] || '0';
  const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';

  return parse$1(`${major}.${minor}.${patch}${prerelease}${build}`, options)
};
var coerce_1 = coerce$1;

const Range$8 = requireRange();

// Mostly just for testing and legacy API reasons
const toComparators$1 = (range, options) =>
  new Range$8(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

var toComparators_1 = toComparators$1;

const SemVer$4 = semver$1;
const Range$7 = requireRange();

const maxSatisfying$1 = (versions, range, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer$4(max, options);
      }
    }
  });
  return max
};
var maxSatisfying_1 = maxSatisfying$1;

const SemVer$3 = semver$1;
const Range$6 = requireRange();
const minSatisfying$1 = (versions, range, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min
};
var minSatisfying_1 = minSatisfying$1;

const SemVer$2 = semver$1;
const Range$5 = requireRange();
const gt$2 = gt_1;

const minVersion$1 = (range, loose) => {
  range = new Range$5(range, loose);

  let minver = new SemVer$2('0.0.0');
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer$2('0.0.0-0');
  if (range.test(minver)) {
    return minver
  }

  minver = null;
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];

    let setMin = null;
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer$2(comparator.semver.version);
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
};
var minVersion_1 = minVersion$1;

const Range$4 = requireRange();
const validRange$1 = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range$4(range, options).range || '*'
  } catch (er) {
    return null
  }
};
var valid$1 = validRange$1;

const SemVer$1 = semver$1;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;

const outside$3 = (version, range, hilo, options) => {
  version = new SemVer$1(version, options);
  range = new Range$3(range, options);

  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = '>';
      ecomp = '>=';
      break
    case '<':
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = '<';
      ecomp = '<=';
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies$3(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];

    let high = null;
    let low = null;

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY$1) {
        comparator = new Comparator$2('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
};

var outside_1 = outside$3;

// Determine if version is greater than all the versions possible in the range.
const outside$2 = outside_1;
const gtr$1 = (version, range, options) => outside$2(version, range, '>', options);
var gtr_1 = gtr$1;

const outside$1 = outside_1;
// Determine if version is less than all the versions possible in the range
const ltr$1 = (version, range, options) => outside$1(version, range, '<', options);
var ltr_1 = ltr$1;

const Range$2 = requireRange();
const intersects$1 = (r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options)
};
var intersects_1 = intersects$1;

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = (versions, range, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$2(a, b, options));
  for (const version of v) {
    const included = satisfies$2(version, range, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }

  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push('*');
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range
};

const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
};

const minimumVersionWithPreRelease = [new Comparator$1('>=0.0.0-0')];
const minimumVersion = [new Comparator$1('>=0.0.0')];

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = minimumVersion;
    }
  }

  const eqSet = new Set();
  let gt, lt;
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options);
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp;
  if (gt && lt) {
    gtltComp = compare$1(gt.semver, lt.semver, options);
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies$1(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies$1(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies$1(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower;
  let hasDomLT, hasDomGT;
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false;
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies$1(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies$1(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
};

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
};

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
};

var subset_1 = subset$1;

// just pre-load all the stuff that index.js lazily exports
const internalRe = reExports;
const constants$1 = constants$3;
const SemVer = semver$1;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants$1.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants$1.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.satisfiesVersionRange = exports.gtRange = exports.gtVersion = exports.assertIsSemVerRange = exports.assertIsSemVerVersion = exports.isValidSemVerRange = exports.isValidSemVerVersion = exports.VersionRangeStruct = exports.VersionStruct = void 0;
	const semver_1 = semver;
	const superstruct_1 = require$$1$1;
	const assert_1 = assert$2;
	/**
	 * A struct for validating a version string.
	 */
	exports.VersionStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), 'Version', (value) => {
	    if ((0, semver_1.valid)(value) === null) {
	        return `Expected SemVer version, got "${value}"`;
	    }
	    return true;
	});
	exports.VersionRangeStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), 'Version range', (value) => {
	    if ((0, semver_1.validRange)(value) === null) {
	        return `Expected SemVer range, got "${value}"`;
	    }
	    return true;
	});
	/**
	 * Checks whether a SemVer version is valid.
	 *
	 * @param version - A potential version.
	 * @returns `true` if the version is valid, and `false` otherwise.
	 */
	function isValidSemVerVersion(version) {
	    return (0, superstruct_1.is)(version, exports.VersionStruct);
	}
	exports.isValidSemVerVersion = isValidSemVerVersion;
	/**
	 * Checks whether a SemVer version range is valid.
	 *
	 * @param versionRange - A potential version range.
	 * @returns `true` if the version range is valid, and `false` otherwise.
	 */
	function isValidSemVerRange(versionRange) {
	    return (0, superstruct_1.is)(versionRange, exports.VersionRangeStruct);
	}
	exports.isValidSemVerRange = isValidSemVerRange;
	/**
	 * Asserts that a value is a valid concrete SemVer version.
	 *
	 * @param version - A potential SemVer concrete version.
	 */
	function assertIsSemVerVersion(version) {
	    (0, assert_1.assertStruct)(version, exports.VersionStruct);
	}
	exports.assertIsSemVerVersion = assertIsSemVerVersion;
	/**
	 * Asserts that a value is a valid SemVer range.
	 *
	 * @param range - A potential SemVer range.
	 */
	function assertIsSemVerRange(range) {
	    (0, assert_1.assertStruct)(range, exports.VersionRangeStruct);
	}
	exports.assertIsSemVerRange = assertIsSemVerRange;
	/**
	 * Checks whether a SemVer version is greater than another.
	 *
	 * @param version1 - The left-hand version.
	 * @param version2 - The right-hand version.
	 * @returns `version1 > version2`.
	 */
	function gtVersion(version1, version2) {
	    return (0, semver_1.gt)(version1, version2);
	}
	exports.gtVersion = gtVersion;
	/**
	 * Checks whether a SemVer version is greater than all possibilities in a range.
	 *
	 * @param version - A SemvVer version.
	 * @param range - The range to check against.
	 * @returns `version > range`.
	 */
	function gtRange(version, range) {
	    return (0, semver_1.gtr)(version, range);
	}
	exports.gtRange = gtRange;
	/**
	 * Returns whether a SemVer version satisfies a SemVer range.
	 *
	 * @param version - The SemVer version to check.
	 * @param versionRange - The SemVer version range to check against.
	 * @returns Whether the version satisfied the version range.
	 */
	function satisfiesVersionRange(version, versionRange) {
	    return (0, semver_1.satisfies)(version, versionRange, {
	        includePrerelease: true,
	    });
	}
	exports.satisfiesVersionRange = satisfiesVersionRange;
	
} (versions));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(assert$2, exports);
	__exportStar(base64$1, exports);
	__exportStar(bytes, exports);
	__exportStar(checksum, exports);
	__exportStar(coercers, exports);
	__exportStar(collections, exports);
	__exportStar(hex, exports);
	__exportStar(json, exports);
	__exportStar(logging, exports);
	__exportStar(misc, exports);
	__exportStar(number, exports);
	__exportStar(opaque, exports);
	__exportStar(time, exports);
	__exportStar(versions, exports);
	
} (dist$2));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createModuleLogger = exports.projectLogger = void 0;
	const utils_1 = dist$2;
	Object.defineProperty(exports, "createModuleLogger", { enumerable: true, get: function () { return utils_1.createModuleLogger; } });
	exports.projectLogger = (0, utils_1.createProjectLogger)('eth-block-tracker');
	
} (loggingUtils));

var __importDefault$b = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(PollingBlockTracker$1, "__esModule", { value: true });
PollingBlockTracker$1.PollingBlockTracker = void 0;
const json_rpc_random_id_1$1 = __importDefault$b(jsonRpcRandomId);
const pify_1 = __importDefault$b(pify$2);
const BaseBlockTracker_1$1 = BaseBlockTracker$1;
const logging_utils_1 = loggingUtils;
const log = (0, logging_utils_1.createModuleLogger)(logging_utils_1.projectLogger, 'polling-block-tracker');
const createRandomId$2 = (0, json_rpc_random_id_1$1.default)();
const sec = 1000;
class PollingBlockTracker extends BaseBlockTracker_1$1.BaseBlockTracker {
    constructor(opts = {}) {
        var _a;
        // parse + validate args
        if (!opts.provider) {
            throw new Error('PollingBlockTracker - no provider specified.');
        }
        super({
            blockResetDuration: (_a = opts.blockResetDuration) !== null && _a !== void 0 ? _a : opts.pollingInterval,
        });
        // config
        this._provider = opts.provider;
        this._pollingInterval = opts.pollingInterval || 20 * sec;
        this._retryTimeout = opts.retryTimeout || this._pollingInterval / 10;
        this._keepEventLoopActive =
            opts.keepEventLoopActive === undefined ? true : opts.keepEventLoopActive;
        this._setSkipCacheFlag = opts.setSkipCacheFlag || false;
    }
    // trigger block polling
    async checkForLatestBlock() {
        await this._updateLatestBlock();
        return await this.getLatestBlock();
    }
    async _start() {
        this._synchronize();
    }
    async _end() {
        // No-op
    }
    async _synchronize() {
        var _a;
        while (this._isRunning) {
            try {
                await this._updateLatestBlock();
                const promise = timeout$1(this._pollingInterval, !this._keepEventLoopActive);
                this.emit('_waitingForNextIteration');
                await promise;
            }
            catch (err) {
                const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${(_a = err.stack) !== null && _a !== void 0 ? _a : err}`);
                try {
                    this.emit('error', newErr);
                }
                catch (emitErr) {
                    console.error(newErr);
                }
                const promise = timeout$1(this._retryTimeout, !this._keepEventLoopActive);
                this.emit('_waitingForNextIteration');
                await promise;
            }
        }
    }
    async _updateLatestBlock() {
        // fetch + set latest block
        const latestBlock = await this._fetchLatestBlock();
        this._newPotentialLatest(latestBlock);
    }
    async _fetchLatestBlock() {
        const req = {
            jsonrpc: '2.0',
            id: createRandomId$2(),
            method: 'eth_blockNumber',
            params: [],
        };
        if (this._setSkipCacheFlag) {
            req.skipCache = true;
        }
        log('Making request', req);
        const res = await (0, pify_1.default)((cb) => this._provider.sendAsync(req, cb))();
        log('Got response', res);
        if (res.error) {
            throw new Error(`PollingBlockTracker - encountered error fetching block:\n${res.error.message}`);
        }
        return res.result;
    }
}
PollingBlockTracker$1.PollingBlockTracker = PollingBlockTracker;
/**
 * Waits for the specified amount of time.
 *
 * @param duration - The amount of time in milliseconds.
 * @param unref - Assuming this function is run in a Node context, governs
 * whether Node should wait before the `setTimeout` has completed before ending
 * the process (true for no, false for yes). Defaults to false.
 * @returns A promise that can be used to wait.
 */
function timeout$1(duration, unref) {
    return new Promise((resolve) => {
        const timeoutRef = setTimeout(resolve, duration);
        // don't keep process open
        if (timeoutRef.unref && unref) {
            timeoutRef.unref();
        }
    });
}

var SubscribeBlockTracker$1 = {};

var __importDefault$a = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(SubscribeBlockTracker$1, "__esModule", { value: true });
SubscribeBlockTracker$1.SubscribeBlockTracker = void 0;
const json_rpc_random_id_1 = __importDefault$a(jsonRpcRandomId);
const BaseBlockTracker_1 = BaseBlockTracker$1;
const createRandomId$1 = (0, json_rpc_random_id_1.default)();
class SubscribeBlockTracker extends BaseBlockTracker_1.BaseBlockTracker {
    constructor(opts = {}) {
        // parse + validate args
        if (!opts.provider) {
            throw new Error('SubscribeBlockTracker - no provider specified.');
        }
        // BaseBlockTracker constructor
        super(opts);
        // config
        this._provider = opts.provider;
        this._subscriptionId = null;
    }
    async checkForLatestBlock() {
        return await this.getLatestBlock();
    }
    async _start() {
        if (this._subscriptionId === undefined || this._subscriptionId === null) {
            try {
                const blockNumber = (await this._call('eth_blockNumber'));
                this._subscriptionId = (await this._call('eth_subscribe', 'newHeads'));
                this._provider.on('data', this._handleSubData.bind(this));
                this._newPotentialLatest(blockNumber);
            }
            catch (e) {
                this.emit('error', e);
            }
        }
    }
    async _end() {
        if (this._subscriptionId !== null && this._subscriptionId !== undefined) {
            try {
                await this._call('eth_unsubscribe', this._subscriptionId);
                this._subscriptionId = null;
            }
            catch (e) {
                this.emit('error', e);
            }
        }
    }
    _call(method, ...params) {
        return new Promise((resolve, reject) => {
            this._provider.sendAsync({
                id: createRandomId$1(),
                method,
                params,
                jsonrpc: '2.0',
            }, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.result);
                }
            });
        });
    }
    _handleSubData(_, response) {
        var _a;
        if (response.method === 'eth_subscription' &&
            ((_a = response.params) === null || _a === void 0 ? void 0 : _a.subscription) === this._subscriptionId) {
            this._newPotentialLatest(response.params.result.number);
        }
    }
}
SubscribeBlockTracker$1.SubscribeBlockTracker = SubscribeBlockTracker;

var types = {};

Object.defineProperty(types, "__esModule", { value: true });

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(PollingBlockTracker$1, exports);
	__exportStar(SubscribeBlockTracker$1, exports);
	__exportStar(types, exports);
	
} (dist$3));

var dist = {};

var idRemapMiddleware = {};

var getUniqueId$1 = {};

Object.defineProperty(getUniqueId$1, "__esModule", { value: true });
getUniqueId$1.getUniqueId = void 0;
// uint32 (two's complement) max
// more conservative than Number.MAX_SAFE_INTEGER
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
getUniqueId$1.getUniqueId = getUniqueId;

Object.defineProperty(idRemapMiddleware, "__esModule", { value: true });
idRemapMiddleware.createIdRemapMiddleware = void 0;
const getUniqueId_1 = getUniqueId$1;
function createIdRemapMiddleware() {
    return (req, res, next, _end) => {
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done) => {
            req.id = originalId;
            res.id = originalId;
            done();
        });
    };
}
idRemapMiddleware.createIdRemapMiddleware = createIdRemapMiddleware;

var createAsyncMiddleware$3 = {};

Object.defineProperty(createAsyncMiddleware$3, "__esModule", { value: true });
createAsyncMiddleware$3.createAsyncMiddleware = void 0;
/**
 * JsonRpcEngine only accepts callback-based middleware directly.
 * createAsyncMiddleware exists to enable consumers to pass in async middleware
 * functions.
 *
 * Async middleware have no "end" function. Instead, they "end" if they return
 * without calling "next". Rather than passing in explicit return handlers,
 * async middleware can simply await "next", and perform operations on the
 * response object when execution resumes.
 *
 * To accomplish this, createAsyncMiddleware passes the async middleware a
 * wrapped "next" function. That function calls the internal JsonRpcEngine
 * "next" function with a return handler that resolves a promise when called.
 *
 * The return handler will always be called. Its resolution of the promise
 * enables the control flow described above.
 */
function createAsyncMiddleware$2(asyncMiddleware) {
    return async (req, res, next, end) => {
        // nextPromise is the key to the implementation
        // it is resolved by the return handler passed to the
        // "next" function
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
            resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        // This will be called by the consumer's async middleware.
        const asyncNext = async () => {
            nextWasCalled = true;
            // We pass a return handler to next(). When it is called by the engine,
            // the consumer's async middleware will resume executing.
            // eslint-disable-next-line node/callback-return
            next((runReturnHandlersCallback) => {
                // This callback comes from JsonRpcEngine._runReturnHandlers
                returnHandlerCallback = runReturnHandlersCallback;
                resolveNextPromise();
            });
            await nextPromise;
        };
        try {
            await asyncMiddleware(req, res, asyncNext);
            if (nextWasCalled) {
                await nextPromise; // we must wait until the return handler is called
                returnHandlerCallback(null);
            }
            else {
                end(null);
            }
        }
        catch (error) {
            if (returnHandlerCallback) {
                returnHandlerCallback(error);
            }
            else {
                end(error);
            }
        }
    };
}
createAsyncMiddleware$3.createAsyncMiddleware = createAsyncMiddleware$2;

var createScaffoldMiddleware$3 = {};

Object.defineProperty(createScaffoldMiddleware$3, "__esModule", { value: true });
createScaffoldMiddleware$3.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware$2(handlers) {
    return (req, res, next, end) => {
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) {
            return next();
        }
        // if handler is fn, call as middleware
        if (typeof handler === 'function') {
            return handler(req, res, next, end);
        }
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
}
createScaffoldMiddleware$3.createScaffoldMiddleware = createScaffoldMiddleware$2;

var JsonRpcEngine$1 = {};

var __importDefault$9 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(JsonRpcEngine$1, "__esModule", { value: true });
JsonRpcEngine$1.JsonRpcEngine = void 0;
const safe_event_emitter_1$1 = __importDefault$9(safeEventEmitter);
const eth_rpc_errors_1 = dist$4;
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
class JsonRpcEngine extends safe_event_emitter_1$1.default {
    constructor() {
        super();
        this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(middleware) {
        this._middleware.push(middleware);
    }
    handle(req, cb) {
        if (cb && typeof cb !== 'function') {
            throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
            if (cb) {
                return this._handleBatch(req, cb);
            }
            return this._handleBatch(req);
        }
        if (cb) {
            return this._handle(req, cb);
        }
        return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
        return async (req, res, next, end) => {
            try {
                const [middlewareError, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
                if (isComplete) {
                    await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    return end(middlewareError);
                }
                return next(async (handlerCallback) => {
                    try {
                        await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    }
                    catch (error) {
                        return handlerCallback(error);
                    }
                    return handlerCallback();
                });
            }
            catch (error) {
                return end(error);
            }
        };
    }
    async _handleBatch(reqs, cb) {
        // The order here is important
        try {
            // 2. Wait for all requests to finish, or throw on some kind of fatal
            // error
            const responses = await Promise.all(
            // 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this)));
            // 3. Return batch response
            if (cb) {
                return cb(null, responses);
            }
            return responses;
        }
        catch (error) {
            if (cb) {
                return cb(error);
            }
            throw error;
        }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(req) {
        return new Promise((resolve) => {
            this._handle(req, (_err, res) => {
                // There will always be a response, and it will always have any error
                // that is caught and propagated.
                resolve(res);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(callerReq, cb) {
        if (!callerReq ||
            Array.isArray(callerReq) ||
            typeof callerReq !== 'object') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
            return cb(error, { id: undefined, jsonrpc: '2.0', error });
        }
        if (typeof callerReq.method !== 'string') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
            return cb(error, { id: callerReq.id, jsonrpc: '2.0', error });
        }
        const req = Object.assign({}, callerReq);
        const res = {
            id: req.id,
            jsonrpc: req.jsonrpc,
        };
        let error = null;
        try {
            await this._processRequest(req, res);
        }
        catch (_error) {
            // A request handler error, a re-thrown middleware error, or something
            // unexpected.
            error = _error;
        }
        if (error) {
            // Ensure no result is present on an errored response
            delete res.result;
            if (!res.error) {
                res.error = eth_rpc_errors_1.serializeError(error);
            }
        }
        return cb(error, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(req, res) {
        const [error, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        // Throw if "end" was not called, or if the response has neither a result
        // nor an error.
        JsonRpcEngine._checkForCompletion(req, res, isComplete);
        // The return handlers should run even if an error was encountered during
        // middleware processing.
        await JsonRpcEngine._runReturnHandlers(returnHandlers);
        // Now we re-throw the middleware processing error, if any, to catch it
        // further up the call chain.
        if (error) {
            throw error;
        }
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        // Go down stack of middleware, call and collect optional returnHandlers
        for (const middleware of middlewareStack) {
            [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
            if (isComplete) {
                break;
            }
        }
        return [error, isComplete, returnHandlers.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve) => {
            const end = (err) => {
                const error = err || res.error;
                if (error) {
                    res.error = eth_rpc_errors_1.serializeError(error);
                }
                // True indicates that the request should end
                resolve([error, true]);
            };
            const next = (returnHandler) => {
                if (res.error) {
                    end(res.error);
                }
                else {
                    if (returnHandler) {
                        if (typeof returnHandler !== 'function') {
                            end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. ` +
                                `Received "${typeof returnHandler}" for request:\n${jsonify(req)}`, { request: req }));
                        }
                        returnHandlers.push(returnHandler);
                    }
                    // False indicates that the request should not end
                    resolve([null, false]);
                }
            };
            try {
                middleware(req, res, next, end);
            }
            catch (error) {
                end(error);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(handlers) {
        for (const handler of handlers) {
            await new Promise((resolve, reject) => {
                handler((err) => (err ? reject(err) : resolve()));
            });
        }
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(req, res, isComplete) {
        if (!('result' in res) && !('error' in res)) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${jsonify(req)}`, { request: req });
        }
        if (!isComplete) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${jsonify(req)}`, { request: req });
        }
    }
}
JsonRpcEngine$1.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
    return JSON.stringify(request, null, 2);
}

var mergeMiddleware$1 = {};

Object.defineProperty(mergeMiddleware$1, "__esModule", { value: true });
mergeMiddleware$1.mergeMiddleware = void 0;
const JsonRpcEngine_1 = JsonRpcEngine$1;
function mergeMiddleware(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware) => engine.push(middleware));
    return engine.asMiddleware();
}
mergeMiddleware$1.mergeMiddleware = mergeMiddleware;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(idRemapMiddleware, exports);
	__exportStar(createAsyncMiddleware$3, exports);
	__exportStar(createScaffoldMiddleware$3, exports);
	__exportStar(getUniqueId$1, exports);
	__exportStar(JsonRpcEngine$1, exports);
	__exportStar(mergeMiddleware$1, exports);
	
} (dist));

var lib = {};

var Mutex$2 = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate$1(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding$1 = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding$1(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
}
var __setModuleDefault$1 = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar$1(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  __setModuleDefault$1(result, mod);
  return result;
}

function __importDefault$8(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

var tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate: __decorate$1,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding: __createBinding$1,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar: __importStar$1,
  __importDefault: __importDefault$8,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
};

var tslib_es6$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __extends: __extends,
    get __assign () { return __assign; },
    __rest: __rest,
    __decorate: __decorate$1,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding$1,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar$1,
    __importDefault: __importDefault$8,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    'default': tslib_es6
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

var Semaphore$1 = {};

Object.defineProperty(Semaphore$1, "__esModule", { value: true });
var tslib_1$2 = require$$0$1;
var Semaphore = /** @class */ (function () {
    function Semaphore(_maxConcurrency) {
        this._maxConcurrency = _maxConcurrency;
        this._queue = [];
        if (_maxConcurrency <= 0) {
            throw new Error('semaphore must be initialized to a positive value');
        }
        this._value = _maxConcurrency;
    }
    Semaphore.prototype.acquire = function () {
        var _this = this;
        var locked = this.isLocked();
        var ticket = new Promise(function (r) { return _this._queue.push(r); });
        if (!locked)
            this._dispatch();
        return ticket;
    };
    Semaphore.prototype.runExclusive = function (callback) {
        return tslib_1$2.__awaiter(this, void 0, void 0, function () {
            var _a, value, release;
            return tslib_1$2.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.acquire()];
                    case 1:
                        _a = _b.sent(), value = _a[0], release = _a[1];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, callback(value)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Semaphore.prototype.isLocked = function () {
        return this._value <= 0;
    };
    Semaphore.prototype.release = function () {
        if (this._maxConcurrency > 1) {
            throw new Error('this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        }
        if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = undefined;
            releaser();
        }
    };
    Semaphore.prototype._dispatch = function () {
        var _this = this;
        var nextConsumer = this._queue.shift();
        if (!nextConsumer)
            return;
        var released = false;
        this._currentReleaser = function () {
            if (released)
                return;
            released = true;
            _this._value++;
            _this._dispatch();
        };
        nextConsumer([this._value--, this._currentReleaser]);
    };
    return Semaphore;
}());
Semaphore$1.default = Semaphore;

Object.defineProperty(Mutex$2, "__esModule", { value: true });
var tslib_1$1 = require$$0$1;
var Semaphore_1 = Semaphore$1;
var Mutex$1 = /** @class */ (function () {
    function Mutex() {
        this._semaphore = new Semaphore_1.default(1);
    }
    Mutex.prototype.acquire = function () {
        return tslib_1$1.__awaiter(this, void 0, void 0, function () {
            var _a, releaser;
            return tslib_1$1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._semaphore.acquire()];
                    case 1:
                        _a = _b.sent(), releaser = _a[1];
                        return [2 /*return*/, releaser];
                }
            });
        });
    };
    Mutex.prototype.runExclusive = function (callback) {
        return this._semaphore.runExclusive(function () { return callback(); });
    };
    Mutex.prototype.isLocked = function () {
        return this._semaphore.isLocked();
    };
    Mutex.prototype.release = function () {
        this._semaphore.release();
    };
    return Mutex;
}());
Mutex$2.default = Mutex$1;

var withTimeout$1 = {};

Object.defineProperty(withTimeout$1, "__esModule", { value: true });
withTimeout$1.withTimeout = void 0;
var tslib_1 = require$$0$1;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function withTimeout(sync, timeout, timeoutError) {
    var _this = this;
    if (timeoutError === void 0) { timeoutError = new Error('timeout'); }
    return {
        acquire: function () {
            return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var isTimeout, ticket, release;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isTimeout = false;
                            setTimeout(function () {
                                isTimeout = true;
                                reject(timeoutError);
                            }, timeout);
                            return [4 /*yield*/, sync.acquire()];
                        case 1:
                            ticket = _a.sent();
                            if (isTimeout) {
                                release = Array.isArray(ticket) ? ticket[1] : ticket;
                                release();
                            }
                            else {
                                resolve(ticket);
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        },
        runExclusive: function (callback) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var release, ticket;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            release = function () { return undefined; };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 7, 8]);
                            return [4 /*yield*/, this.acquire()];
                        case 2:
                            ticket = _a.sent();
                            if (!Array.isArray(ticket)) return [3 /*break*/, 4];
                            release = ticket[1];
                            return [4 /*yield*/, callback(ticket[0])];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            release = ticket;
                            return [4 /*yield*/, callback()];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            release();
                            return [7 /*endfinally*/];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        },
        release: function () {
            sync.release();
        },
        isLocked: function () { return sync.isLocked(); },
    };
}
withTimeout$1.withTimeout = withTimeout;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
	var Mutex_1 = Mutex$2;
	Object.defineProperty(exports, "Mutex", { enumerable: true, get: function () { return Mutex_1.default; } });
	var Semaphore_1 = Semaphore$1;
	Object.defineProperty(exports, "Semaphore", { enumerable: true, get: function () { return Semaphore_1.default; } });
	var withTimeout_1 = withTimeout$1;
	Object.defineProperty(exports, "withTimeout", { enumerable: true, get: function () { return withTimeout_1.withTimeout; } }); 
} (lib));

var immutable = extend$1;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend$1() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target
}

const extend = immutable;
const createRandomId = jsonRpcRandomId();

var ethQuery = EthQuery$1;


function EthQuery$1(provider){
  const self = this;
  self.currentProvider = provider;
}

//
// base queries
//

// default block
EthQuery$1.prototype.getBalance =                          generateFnWithDefaultBlockFor(2, 'eth_getBalance');
EthQuery$1.prototype.getCode =                             generateFnWithDefaultBlockFor(2, 'eth_getCode');
EthQuery$1.prototype.getTransactionCount =                 generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount');
EthQuery$1.prototype.getStorageAt =                        generateFnWithDefaultBlockFor(3, 'eth_getStorageAt');
EthQuery$1.prototype.call =                                generateFnWithDefaultBlockFor(2, 'eth_call');
// standard
EthQuery$1.prototype.protocolVersion =                     generateFnFor('eth_protocolVersion');
EthQuery$1.prototype.syncing =                             generateFnFor('eth_syncing');
EthQuery$1.prototype.coinbase =                            generateFnFor('eth_coinbase');
EthQuery$1.prototype.mining =                              generateFnFor('eth_mining');
EthQuery$1.prototype.hashrate =                            generateFnFor('eth_hashrate');
EthQuery$1.prototype.gasPrice =                            generateFnFor('eth_gasPrice');
EthQuery$1.prototype.accounts =                            generateFnFor('eth_accounts');
EthQuery$1.prototype.blockNumber =                         generateFnFor('eth_blockNumber');
EthQuery$1.prototype.getBlockTransactionCountByHash =      generateFnFor('eth_getBlockTransactionCountByHash');
EthQuery$1.prototype.getBlockTransactionCountByNumber =    generateFnFor('eth_getBlockTransactionCountByNumber');
EthQuery$1.prototype.getUncleCountByBlockHash =            generateFnFor('eth_getUncleCountByBlockHash');
EthQuery$1.prototype.getUncleCountByBlockNumber =          generateFnFor('eth_getUncleCountByBlockNumber');
EthQuery$1.prototype.sign =                                generateFnFor('eth_sign');
EthQuery$1.prototype.sendTransaction =                     generateFnFor('eth_sendTransaction');
EthQuery$1.prototype.sendRawTransaction =                  generateFnFor('eth_sendRawTransaction');
EthQuery$1.prototype.estimateGas =                         generateFnFor('eth_estimateGas');
EthQuery$1.prototype.getBlockByHash =                      generateFnFor('eth_getBlockByHash');
EthQuery$1.prototype.getBlockByNumber =                    generateFnFor('eth_getBlockByNumber');
EthQuery$1.prototype.getTransactionByHash =                generateFnFor('eth_getTransactionByHash');
EthQuery$1.prototype.getTransactionByBlockHashAndIndex =   generateFnFor('eth_getTransactionByBlockHashAndIndex');
EthQuery$1.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex');
EthQuery$1.prototype.getTransactionReceipt =               generateFnFor('eth_getTransactionReceipt');
EthQuery$1.prototype.getUncleByBlockHashAndIndex =         generateFnFor('eth_getUncleByBlockHashAndIndex');
EthQuery$1.prototype.getUncleByBlockNumberAndIndex =       generateFnFor('eth_getUncleByBlockNumberAndIndex');
EthQuery$1.prototype.getCompilers =                        generateFnFor('eth_getCompilers');
EthQuery$1.prototype.compileLLL =                          generateFnFor('eth_compileLLL');
EthQuery$1.prototype.compileSolidity =                     generateFnFor('eth_compileSolidity');
EthQuery$1.prototype.compileSerpent =                      generateFnFor('eth_compileSerpent');
EthQuery$1.prototype.newFilter =                           generateFnFor('eth_newFilter');
EthQuery$1.prototype.newBlockFilter =                      generateFnFor('eth_newBlockFilter');
EthQuery$1.prototype.newPendingTransactionFilter =         generateFnFor('eth_newPendingTransactionFilter');
EthQuery$1.prototype.uninstallFilter =                     generateFnFor('eth_uninstallFilter');
EthQuery$1.prototype.getFilterChanges =                    generateFnFor('eth_getFilterChanges');
EthQuery$1.prototype.getFilterLogs =                       generateFnFor('eth_getFilterLogs');
EthQuery$1.prototype.getLogs =                             generateFnFor('eth_getLogs');
EthQuery$1.prototype.getWork =                             generateFnFor('eth_getWork');
EthQuery$1.prototype.submitWork =                          generateFnFor('eth_submitWork');
EthQuery$1.prototype.submitHashrate =                      generateFnFor('eth_submitHashrate');

// network level

EthQuery$1.prototype.sendAsync = function(opts, cb){
  const self = this;
  self.currentProvider.sendAsync(createPayload(opts), function(err, response){
    if (!err && response.error) err = new Error('EthQuery - RPC Error - '+response.error.message);
    if (err) return cb(err)
    cb(null, response.result);
  });
};

// util

function generateFnFor(methodName){
  return function(){
    const self = this;
    var args = [].slice.call(arguments);
    var cb = args.pop();
    self.sendAsync({
      method: methodName,
      params: args,
    }, cb);
  }
}

function generateFnWithDefaultBlockFor(argCount, methodName){
  return function(){
    const self = this;
    var args = [].slice.call(arguments);
    var cb = args.pop();
    // set optional default block param
    if (args.length < argCount) args.push('latest');
    self.sendAsync({
      method: methodName,
      params: args,
    }, cb);
  }
}

function createPayload(data){
  return extend({
    // defaults
    id: createRandomId(),
    jsonrpc: '2.0',
    params: [],
    // user-specified
  }, data)
}

const processFn = (fn, options, proxy, unwrapped) => function (...arguments_) {
	const P = options.promiseModule;

	return new P((resolve, reject) => {
		if (options.multiArgs) {
			arguments_.push((...result) => {
				if (options.errorFirst) {
					if (result[0]) {
						reject(result);
					} else {
						result.shift();
						resolve(result);
					}
				} else {
					resolve(result);
				}
			});
		} else if (options.errorFirst) {
			arguments_.push((error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		} else {
			arguments_.push(resolve);
		}

		const self = this === proxy ? unwrapped : this;
		Reflect.apply(fn, self, arguments_);
	});
};

const filterCache = new WeakMap();

var pify$1 = (input, options) => {
	options = {
		exclude: [/.+(?:Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise,
		...options
	};

	const objectType = typeof input;
	if (!(input !== null && (objectType === 'object' || objectType === 'function'))) {
		throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? 'null' : objectType}\``);
	}

	const filter = (target, key) => {
		let cached = filterCache.get(target);

		if (!cached) {
			cached = {};
			filterCache.set(target, cached);
		}

		if (key in cached) {
			return cached[key];
		}

		const match = pattern => (typeof pattern === 'string' || typeof key === 'symbol') ? key === pattern : pattern.test(key);
		const desc = Reflect.getOwnPropertyDescriptor(target, key);
		const writableOrConfigurableOwn = (desc === undefined || desc.writable || desc.configurable);
		const included = options.include ? options.include.some(match) : !options.exclude.some(match);
		const shouldFilter = included && writableOrConfigurableOwn;
		cached[key] = shouldFilter;
		return shouldFilter;
	};

	const cache = new WeakMap();

	const proxy = new Proxy(input, {
		apply(target, thisArg, args) {
			const cached = cache.get(target);

			if (cached) {
				return Reflect.apply(cached, thisArg, args);
			}

			const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
			cache.set(target, pified);
			return Reflect.apply(pified, thisArg, args);
		},

		get(target, key) {
			const property = target[key];

			// eslint-disable-next-line no-use-extend-native/no-use-extend-native
			if (!filter(target, key) || property === Function.prototype[key]) {
				return property;
			}

			const cached = cache.get(property);

			if (cached) {
				return cached;
			}

			if (typeof property === 'function') {
				const pified = processFn(property, options, proxy, target);
				cache.set(property, pified);
				return pified;
			}

			return property;
		}
	});

	return proxy;
};

const SafeEventEmitter$1 = safeEventEmitter.default;

class BaseFilter$3 extends SafeEventEmitter$1 {

  constructor () {
    super();
    this.updates = [];
  }

  async initialize () {}

  async update () {
    throw new Error('BaseFilter - no update method specified')
  }

  addResults (newResults) {
    this.updates = this.updates.concat(newResults);
    newResults.forEach(result => this.emit('update', result));
  }

  addInitialResults (newResults) {}

  getChangesAndClear () {
    const updates = this.updates;
    this.updates = [];
    return updates
  }
  
}

var baseFilter = BaseFilter$3;

const BaseFilter$2 = baseFilter;

// tracks all results ever recorded
class BaseFilterWithHistory$1 extends BaseFilter$2 {

  constructor () {
    super();
    this.allResults = [];
  }

  async update () {
    throw new Error('BaseFilterWithHistory - no update method specified')
  }

  addResults (newResults) {
    this.allResults = this.allResults.concat(newResults);
    super.addResults(newResults);
  }

  addInitialResults (newResults) {
    this.allResults = this.allResults.concat(newResults);
    super.addInitialResults(newResults);
  }

  getAllResults () {
    return this.allResults
  }

}

var baseFilterHistory = BaseFilterWithHistory$1;

var hexUtils = {
  minBlockRef: minBlockRef$1,
  maxBlockRef,
  sortBlockRefs,
  bnToHex: bnToHex$1,
  blockRefIsNumber: blockRefIsNumber$1,
  hexToInt: hexToInt$3,
  incrementHexInt: incrementHexInt$4,
  intToHex: intToHex$2,
  unsafeRandomBytes: unsafeRandomBytes$1,
};

function minBlockRef$1(...refs) {
  const sortedRefs = sortBlockRefs(refs);
  return sortedRefs[0]
}

function maxBlockRef(...refs) {
  const sortedRefs = sortBlockRefs(refs);
  return sortedRefs[sortedRefs.length-1]
}

function sortBlockRefs(refs) {
  return refs.sort((refA, refB) => {
    if (refA === 'latest' || refB === 'earliest') return 1
    if (refB === 'latest' || refA === 'earliest') return -1
    return hexToInt$3(refA) - hexToInt$3(refB)
  })
}

function bnToHex$1(bn) {
  return '0x' + bn.toString(16)
}

function blockRefIsNumber$1(blockRef){
  return blockRef && !['earliest', 'latest', 'pending'].includes(blockRef)
}

function hexToInt$3(hexString) {
  if (hexString === undefined || hexString === null) return hexString
  return Number.parseInt(hexString, 16)
}

function incrementHexInt$4(hexString){
  if (hexString === undefined || hexString === null) return hexString
  const value = hexToInt$3(hexString);
  return intToHex$2(value + 1)
}

function intToHex$2(int) {
  if (int === undefined || int === null) return int
  let hexString = int.toString(16);
  const needsLeftPad = hexString.length % 2;
  if (needsLeftPad) hexString = '0' + hexString;
  return '0x' + hexString
}

function unsafeRandomBytes$1(byteCount) {
  let result = '0x';
  for (let i = 0; i < byteCount; i++) {
    result += unsafeRandomNibble();
    result += unsafeRandomNibble();
  }
  return result
}

function unsafeRandomNibble() {
  return Math.floor(Math.random() * 16).toString(16)
}

const EthQuery = ethQuery;
const pify = pify$1;
const BaseFilterWithHistory = baseFilterHistory;
const { bnToHex, hexToInt: hexToInt$2, incrementHexInt: incrementHexInt$3, minBlockRef, blockRefIsNumber } = hexUtils;

class LogFilter$1 extends BaseFilterWithHistory {

  constructor ({ provider, params }) {
    super();
    this.type = 'log';
    this.ethQuery = new EthQuery(provider);
    this.params = Object.assign({
      fromBlock: 'latest',
      toBlock: 'latest',
      address: undefined,
      topics: [],
    }, params);
    // normalize address parameter
    if (this.params.address) {
      // ensure array
      if (!Array.isArray(this.params.address)) {
        this.params.address = [this.params.address];
      }
      // ensure lowercase
      this.params.address = this.params.address.map(address => address.toLowerCase());
    }
  }

  async initialize({ currentBlock }) {
    // resolve params.fromBlock
    let fromBlock = this.params.fromBlock;
    if (['latest', 'pending'].includes(fromBlock)) fromBlock = currentBlock;
    if ('earliest' === fromBlock) fromBlock = '0x0';
    this.params.fromBlock = fromBlock;
    // set toBlock for initial lookup
    const toBlock = minBlockRef(this.params.toBlock, currentBlock);
    const params = Object.assign({}, this.params, { toBlock });
    // fetch logs and add to results
    const newLogs = await this._fetchLogs(params);
    this.addInitialResults(newLogs);
  }

  async update ({ oldBlock, newBlock }) {
    // configure params for this update
    const toBlock = newBlock;
    let fromBlock;
    // oldBlock is empty on first sync
    if (oldBlock) {
      fromBlock = incrementHexInt$3(oldBlock);
    } else {
      fromBlock = newBlock;
    }
    // fetch logs
    const params = Object.assign({}, this.params, { fromBlock, toBlock });
    const newLogs = await this._fetchLogs(params);
    const matchingLogs = newLogs.filter(log => this.matchLog(log));

    // add to results
    this.addResults(matchingLogs);
  }

  async _fetchLogs (params) {
    const newLogs = await pify(cb => this.ethQuery.getLogs(params, cb))();
    // add to results
    return newLogs
  }

  matchLog(log) {
    // check if block number in bounds:
    if (hexToInt$2(this.params.fromBlock) >= hexToInt$2(log.blockNumber)) return false
    if (blockRefIsNumber(this.params.toBlock) && hexToInt$2(this.params.toBlock) <= hexToInt$2(log.blockNumber)) return false

    // address is correct:
    const normalizedLogAddress = log.address && log.address.toLowerCase();
    if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress)) return false

    // topics match:
    // topics are position-dependant
    // topics can be nested to represent `or` [[a || b], c]
    // topics can be null, representing a wild card for that position
    const topicsMatch = this.params.topics.every((topicPattern, index) => {
      // pattern is longer than actual topics
      let logTopic = log.topics[index];
      if (!logTopic) return false
      logTopic = logTopic.toLowerCase();
      // normalize subTopics
      let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern];
      // check for wild card
      const subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
      if (subtopicsIncludeWildcard) return true
      subtopicsToMatch = subtopicsToMatch.map(topic => topic.toLowerCase());
      // check each possible matching topic
      const topicDoesMatch = subtopicsToMatch.includes(logTopic);
      return topicDoesMatch
    });

    return topicsMatch
  }

}

var logFilter = LogFilter$1;

var getBlocksForRange_1 = getBlocksForRange$3;

async function getBlocksForRange$3({ provider, fromBlock, toBlock }) {
  if (!fromBlock) fromBlock = toBlock;

  const fromBlockNumber = hexToInt$1(fromBlock);
  const toBlockNumber = hexToInt$1(toBlock);
  const blockCountToQuery = toBlockNumber - fromBlockNumber + 1;
  // load all blocks from old to new (inclusive)
  const missingBlockNumbers = Array(blockCountToQuery).fill()
                              .map((_,index) => fromBlockNumber + index)
                              .map(intToHex$1);
  const blockBodies = await Promise.all(
    missingBlockNumbers.map(blockNum => query(provider, 'eth_getBlockByNumber', [blockNum, false]))
  );
  return blockBodies
}

function hexToInt$1(hexString) {
  if (hexString === undefined || hexString === null) return hexString
  return Number.parseInt(hexString, 16)
}

function intToHex$1(int) {
  if (int === undefined || int === null) return int
  const hexString = int.toString(16);
  return '0x' + hexString
}

function sendAsync(provider, request) {
  return new Promise((resolve, reject) => {
    provider.sendAsync(request, (error, response) => {
      if (error) {
        reject(error);
      } else if (response.error) {
        reject(response.error);
      } else if (response.result) {
        resolve(response.result);
      } else {
        reject(new Error("Result was empty"));
      }
    });
  });
}

async function query(provider, method, params) {
  for (let i = 0; i < 3; i++) {
    try {
      return await sendAsync(provider, {
        id: 1,
        jsonrpc: "2.0",
        method,
        params,
      });
    } catch (error) {
      console.error(
        `provider.sendAsync failed: ${error.stack || error.message || error}`
      );
    }
  }
  throw new Error(`Block not found for params: ${JSON.stringify(params)}`);
}

const BaseFilter$1 = baseFilter;
const getBlocksForRange$2 = getBlocksForRange_1;
const { incrementHexInt: incrementHexInt$2 } = hexUtils;

class BlockFilter$1 extends BaseFilter$1 {

  constructor ({ provider, params }) {
    super();
    this.type = 'block';
    this.provider = provider;
  }

  async update ({ oldBlock, newBlock }) {
    const toBlock = newBlock;
    const fromBlock = incrementHexInt$2(oldBlock);
    const blockBodies = await getBlocksForRange$2({ provider: this.provider, fromBlock, toBlock });
    const blockHashes = blockBodies.map((block) => block.hash);
    this.addResults(blockHashes);
  }

}

var blockFilter = BlockFilter$1;

const BaseFilter = baseFilter;
const getBlocksForRange$1 = getBlocksForRange_1;
const { incrementHexInt: incrementHexInt$1 } = hexUtils;

class TxFilter$1 extends BaseFilter {

  constructor ({ provider }) {
    super();
    this.type = 'tx';
    this.provider = provider;
  }

  async update ({ oldBlock }) {
    const toBlock = oldBlock;
    const fromBlock = incrementHexInt$1(oldBlock);
    const blocks = await getBlocksForRange$1({ provider: this.provider, fromBlock, toBlock });
    const blockTxHashes = [];
    for (const block of blocks) {
      blockTxHashes.push(...block.transactions);
    }
    // add to results
    this.addResults(blockTxHashes);
  }

}

var txFilter = TxFilter$1;

const Mutex = lib.Mutex;
const { createAsyncMiddleware: createAsyncMiddleware$1, createScaffoldMiddleware: createScaffoldMiddleware$1 } = dist;
const LogFilter = logFilter;
const BlockFilter = blockFilter;
const TxFilter = txFilter;
const { intToHex, hexToInt } = hexUtils;

var ethJsonRpcFilters = createEthFilterMiddleware;

function createEthFilterMiddleware({ blockTracker, provider }) {

  // create filter collection
  let filterIndex = 0;
  let filters = {};
  // create update mutex
  const mutex = new Mutex();
  const waitForFree = mutexMiddlewareWrapper({ mutex });

  const middleware = createScaffoldMiddleware$1({
    // install filters
    eth_newFilter:                   waitForFree(toFilterCreationMiddleware(newLogFilter)),
    eth_newBlockFilter:              waitForFree(toFilterCreationMiddleware(newBlockFilter)),
    eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
    // uninstall filters
    eth_uninstallFilter:             waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
    // checking filter changes
    eth_getFilterChanges:            waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
    eth_getFilterLogs:               waitForFree(toAsyncRpcMiddleware(getFilterLogs)),
  });

  // setup filter updating and destroy handler
  const filterUpdater = async ({ oldBlock, newBlock }) => {
    if (filters.length === 0) return
    // lock update reads
    const releaseLock = await mutex.acquire();
    try {
      // process all filters in parallel
      await Promise.all(objValues(filters).map(async (filter) => {
        try {
         await filter.update({ oldBlock, newBlock });
        } catch (err) {
          // handle each error individually so filter update errors don't affect other filters
          console.error(err);
        }
      }));
    } catch (err) {
      // log error so we don't skip the releaseLock
      console.error(err);
    }
    // unlock update reads
    releaseLock();
  };

  // expose filter methods directly
  middleware.newLogFilter = newLogFilter;
  middleware.newBlockFilter = newBlockFilter;
  middleware.newPendingTransactionFilter = newPendingTransactionFilter;
  middleware.uninstallFilter = uninstallFilterHandler;
  middleware.getFilterChanges = getFilterChanges;
  middleware.getFilterLogs = getFilterLogs;

  // expose destroy method for cleanup
  middleware.destroy = () => {
    uninstallAllFilters();
  };

  return middleware

  //
  // new filters
  //

  async function newLogFilter(params) {
    const filter = new LogFilter({ provider, params });
    await installFilter(filter);
    return filter
  }

  async function newBlockFilter() {
    const filter = new BlockFilter({ provider });
    await installFilter(filter);
    return filter
  }

  async function newPendingTransactionFilter() {
    const filter = new TxFilter({ provider });
    await installFilter(filter);
    return filter
  }

  //
  // get filter changes
  //

  async function getFilterChanges(filterIndexHex) {
    const filterIndex = hexToInt(filterIndexHex);
    const filter = filters[filterIndex];
    if (!filter) {
      throw new Error(`No filter for index "${filterIndex}"`)
    }
    const results = filter.getChangesAndClear();
    return results
  }

  async function getFilterLogs(filterIndexHex) {
    const filterIndex = hexToInt(filterIndexHex);
    const filter = filters[filterIndex];
    if (!filter) {
      throw new Error(`No filter for index "${filterIndex}"`)
    }
    // only return results for log filters
    let results = [];
    if (filter.type === 'log') {
      results = filter.getAllResults();
    }
    return results
  }


  //
  // remove filters
  //


  async function uninstallFilterHandler(filterIndexHex) {
    // check filter exists
    const filterIndex = hexToInt(filterIndexHex);
    const filter = filters[filterIndex];
    const result = Boolean(filter);
    // uninstall filter
    if (result) {
      await uninstallFilter(filterIndex);
    }
    return result
  }

  //
  // utils
  //

  async function installFilter(filter) {
    const prevFilterCount = objValues(filters).length;
    // install filter
    const currentBlock = await blockTracker.getLatestBlock();
    await filter.initialize({ currentBlock });
    filterIndex++;
    filters[filterIndex] = filter;
    filter.id = filterIndex;
    filter.idHex = intToHex(filterIndex);
    // update block tracker subs
    const newFilterCount = objValues(filters).length;
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
    return filterIndex
  }

  async function uninstallFilter(filterIndex) {
    const prevFilterCount = objValues(filters).length;
    delete filters[filterIndex];
    // update block tracker subs
    const newFilterCount = objValues(filters).length;
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
  }

  async function uninstallAllFilters() {
    const prevFilterCount = objValues(filters).length;
    filters = {};
    // update block tracker subs
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount: 0 });
  }

  function updateBlockTrackerSubs({ prevFilterCount, newFilterCount }) {
    // subscribe
    if (prevFilterCount === 0 && newFilterCount > 0) {
      blockTracker.on('sync', filterUpdater);
      return
    }
    // unsubscribe
    if (prevFilterCount > 0 && newFilterCount === 0) {
      blockTracker.removeListener('sync', filterUpdater);
      return
    }
  }

}

// helper for turning filter constructors into rpc middleware
function toFilterCreationMiddleware(createFilterFn) {
  return toAsyncRpcMiddleware(async (...args) => {
    const filter = await createFilterFn(...args);
    const result = intToHex(filter.id);
    return result
  })
}

// helper for pulling out req.params and setting res.result
function toAsyncRpcMiddleware(asyncFn) {
  return createAsyncMiddleware$1(async (req, res) => {
    const result = await asyncFn.apply(null, req.params);
    res.result = result;
  })
}

function mutexMiddlewareWrapper({ mutex }) {
  return (middleware) => {
    return async (req, res, next, end) => {
      // wait for mutex available
      // we can release immediately because
      // we just need to make sure updates aren't active
      const releaseLock = await mutex.acquire();
      releaseLock();
      middleware(req, res, next, end);
    }
  }
}

function objValues(obj, fn){
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values
}

const SafeEventEmitter = safeEventEmitter.default;
const { createAsyncMiddleware, createScaffoldMiddleware } = dist;
const createFilterMiddleware = ethJsonRpcFilters;
const { unsafeRandomBytes, incrementHexInt } = hexUtils;
const getBlocksForRange = getBlocksForRange_1;

var subscriptionManager = createSubscriptionMiddleware;


function createSubscriptionMiddleware({ blockTracker, provider }) {
  // state and utilities for handling subscriptions
  const subscriptions = {};
  const filterManager = createFilterMiddleware({ blockTracker, provider });

  // internal flag
  let isDestroyed = false;

  // create subscriptionManager api object
  const events = new SafeEventEmitter();
  const middleware = createScaffoldMiddleware({
    eth_subscribe: createAsyncMiddleware(subscribe),
    eth_unsubscribe: createAsyncMiddleware(unsubscribe),
  });
  middleware.destroy = destroy;
  return { events, middleware }

  async function subscribe(req, res) {

    if (isDestroyed) throw new Error(
      'SubscriptionManager - attempting to use after destroying'
    )

    const subscriptionType = req.params[0];
    // subId is 16 byte hex string
    const subId = unsafeRandomBytes(16);

    // create sub
    let sub;
    switch (subscriptionType) {
      case 'newHeads':
        sub = createSubNewHeads({ subId });
        break
      case 'logs':
        const filterParams = req.params[1];
        const filter = await filterManager.newLogFilter(filterParams);
        sub = createSubFromFilter({ subId, filter });
        break
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`)

    }
    subscriptions[subId] = sub;

    res.result = subId;
    return

    function createSubNewHeads({ subId }) {
      const sub = {
        type: subscriptionType,
        destroy: async () => {
          blockTracker.removeListener('sync', sub.update);
        },
        update: async ({ oldBlock, newBlock }) => {
          // for newHeads
          const toBlock = newBlock;
          const fromBlock = incrementHexInt(oldBlock);
          const rawBlocks = await getBlocksForRange({ provider, fromBlock, toBlock });
          const results = rawBlocks.map(normalizeBlock).filter(block => block !== null);
          results.forEach((value) => {
            _emitSubscriptionResult(subId, value);
          });
        }
      };
      // check for subscription updates on new block
      blockTracker.on('sync', sub.update);
      return sub
    }

    function createSubFromFilter({ subId, filter }) {
      filter.on('update', result => _emitSubscriptionResult(subId, result));
      const sub = {
        type: subscriptionType,
        destroy: async () => {
          return await filterManager.uninstallFilter(filter.idHex)
        },
      };
      return sub
    }
  }

  async function unsubscribe(req, res) {

    if (isDestroyed) throw new Error(
      'SubscriptionManager - attempting to use after destroying'
    )

    const id = req.params[0];
    const subscription = subscriptions[id];
    // if missing, return "false" to indicate it was not removed
    if (!subscription) {
      res.result = false;
      return
    }
    // cleanup subscription
    delete subscriptions[id];
    await subscription.destroy();
    res.result = true;
  }

  function _emitSubscriptionResult(filterIdHex, value) {
    events.emit('notification', {
      jsonrpc: '2.0',
      method: 'eth_subscription',
      params: {
        subscription: filterIdHex,
        result: value,
      },
    });
  }

  function destroy() {
    events.removeAllListeners();
    for (const id in subscriptions) {
      subscriptions[id].destroy();
      delete subscriptions[id];
    }
    isDestroyed = true;
  }
}

function normalizeBlock(block) {
  if (block === null || block === undefined) {
    return null;
  }
  return {
    hash: block.hash,
    parentHash: block.parentHash,
    sha3Uncles: block.sha3Uncles,
    miner: block.miner,
    stateRoot: block.stateRoot,
    transactionsRoot: block.transactionsRoot,
    receiptsRoot: block.receiptsRoot,
    logsBloom: block.logsBloom,
    difficulty: block.difficulty,
    number: block.number,
    gasLimit: block.gasLimit,
    gasUsed: block.gasUsed,
    nonce: block.nonce,
    mixHash: block.mixHash,
    timestamp: block.timestamp,
    extraData: block.extraData,
  }
}

Object.defineProperty(SubscriptionManager$1, "__esModule", { value: true });
SubscriptionManager$1.SubscriptionManager = void 0;
const eth_block_tracker_1 = dist$3;
const createSubscriptionManager = subscriptionManager;
const noop$1 = () => { };
class SubscriptionManager {
    constructor(provider) {
        const blockTracker = new eth_block_tracker_1.PollingBlockTracker({
            provider: provider,
            pollingInterval: 15 * 1000,
            setSkipCacheFlag: true,
        });
        const { events, middleware } = createSubscriptionManager({
            blockTracker,
            provider,
        });
        this.events = events;
        this.subscriptionMiddleware = middleware;
    }
    async handleRequest(request) {
        const result = {};
        await this.subscriptionMiddleware(request, result, noop$1, noop$1);
        return result;
    }
    destroy() {
        this.subscriptionMiddleware.destroy();
    }
}
SubscriptionManager$1.SubscriptionManager = SubscriptionManager;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$7 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(CoinbaseWalletProvider$1, "__esModule", { value: true });
CoinbaseWalletProvider$1.CoinbaseWalletProvider = void 0;
const safe_event_emitter_1 = __importDefault$7(safeEventEmitter);
const bn_js_1 = __importDefault$7(bnExports);
const DiagnosticLogger_1$2 = DiagnosticLogger;
const errors_1$1 = errors$1;
const Session_1$2 = Session$1;
const WalletSDKRelayAbstract_1$1 = WalletSDKRelayAbstract$1;
const Web3Method_1$1 = Web3Method;
const Web3Response_1$1 = Web3Response;
const util_1$5 = util$3;
const eth_eip712_util_1 = __importDefault$7(ethEip712Util);
const FilterPolyfill_1 = FilterPolyfill$1;
const JSONRPC_1 = JSONRPC;
const SubscriptionManager_1 = SubscriptionManager$1;
const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
class CoinbaseWalletProvider extends safe_event_emitter_1.default {
    constructor(options) {
        var _a, _b;
        super();
        this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
        this._subscriptionManager = new SubscriptionManager_1.SubscriptionManager(this);
        this._relay = null;
        this._addresses = [];
        this.hasMadeFirstChainChangedEmission = false;
        this.setProviderInfo = this.setProviderInfo.bind(this);
        this.updateProviderInfo = this.updateProviderInfo.bind(this);
        this.getChainId = this.getChainId.bind(this);
        this.setAppInfo = this.setAppInfo.bind(this);
        this.enable = this.enable.bind(this);
        this.close = this.close.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this.request = this.request.bind(this);
        this._setAddresses = this._setAddresses.bind(this);
        this.scanQRCode = this.scanQRCode.bind(this);
        this.genericRequest = this.genericRequest.bind(this);
        this._chainIdFromOpts = options.chainId;
        this._jsonRpcUrlFromOpts = options.jsonRpcUrl;
        this._overrideIsMetaMask = options.overrideIsMetaMask;
        this._relayProvider = options.relayProvider;
        this._storage = options.storage;
        this._relayEventManager = options.relayEventManager;
        this.diagnostic = options.diagnosticLogger;
        this.reloadOnDisconnect = true;
        this.isCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
        this.isCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
        this.qrUrl = options.qrUrl;
        const chainId = this.getChainId();
        const chainIdStr = (0, util_1$5.prepend0x)(chainId.toString(16));
        // indicate that we've connected, for EIP-1193 compliance
        this.emit("connect", { chainIdStr });
        const cachedAddresses = this._storage.getItem(WalletSDKRelayAbstract_1$1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
            const addresses = cachedAddresses.split(" ");
            if (addresses[0] !== "") {
                this._addresses = addresses.map(address => (0, util_1$5.ensureAddressString)(address));
                this.emit("accountsChanged", addresses);
            }
        }
        this._subscriptionManager.events.on("notification", (notification) => {
            this.emit("message", {
                type: notification.method,
                data: notification.params,
            });
        });
        if (this._isAuthorized()) {
            void this.initializeRelay();
        }
        window.addEventListener("message", event => {
            var _a;
            // Used to verify the source and window are correct before proceeding
            if (event.origin !== location.origin || event.source !== window) {
                return;
            }
            if (event.data.type !== "walletLinkMessage")
                return; // compatibility with CBW extension
            if (event.data.data.action === "dappChainSwitched") {
                const _chainId = event.data.data.chainId;
                const jsonRpcUrl = (_a = event.data.data.jsonRpcUrl) !== null && _a !== void 0 ? _a : this.jsonRpcUrl;
                this.updateProviderInfo(jsonRpcUrl, Number(_chainId));
            }
            if (event.data.data.action === "addressChanged") {
                this._setAddresses([event.data.data.address]);
            }
        });
    }
    /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
    get selectedAddress() {
        return this._addresses[0] || undefined;
    }
    /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
    get networkVersion() {
        return this.getChainId().toString(10);
    }
    /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
    get chainId() {
        return (0, util_1$5.prepend0x)(this.getChainId().toString(16));
    }
    get isWalletLink() {
        // backward compatibility
        return true;
    }
    /**
     * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
     * true for this method.
     */
    get isMetaMask() {
        return this._overrideIsMetaMask;
    }
    get host() {
        return this.jsonRpcUrl;
    }
    get connected() {
        return true;
    }
    isConnected() {
        return true;
    }
    get jsonRpcUrl() {
        var _a;
        return ((_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts);
    }
    set jsonRpcUrl(value) {
        this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
    }
    disableReloadOnDisconnect() {
        this.reloadOnDisconnect = false;
    }
    setProviderInfo(jsonRpcUrl, chainId) {
        if (!this.isCoinbaseBrowser) {
            this._chainIdFromOpts = chainId;
            this._jsonRpcUrlFromOpts = jsonRpcUrl;
        }
        this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
    }
    updateProviderInfo(jsonRpcUrl, chainId) {
        this.jsonRpcUrl = jsonRpcUrl;
        // emit chainChanged event if necessary
        const originalChainId = this.getChainId();
        this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
        const chainChanged = (0, util_1$5.ensureIntNumber)(chainId) !== originalChainId;
        if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
            this.emit("chainChanged", this.getChainId());
            this.hasMadeFirstChainChangedEmission = true;
        }
    }
    async watchAsset(type, address, symbol, decimals, image, chainId) {
        const relay = await this.initializeRelay();
        const result = await relay.watchAsset(type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString()).promise;
        return !!result.result;
    }
    async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
        var _a, _b;
        if ((0, util_1$5.ensureIntNumber)(chainId) === this.getChainId()) {
            return false;
        }
        const relay = await this.initializeRelay();
        const isWhitelistedNetworkOrStandalone = relay.inlineAddEthereumChain(chainId.toString());
        if (!this._isAuthorized() && !isWhitelistedNetworkOrStandalone) {
            await relay.requestEthereumAccounts().promise;
        }
        const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency).promise;
        if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
            this.updateProviderInfo(rpcUrls[0], chainId);
        }
        return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
    }
    async switchEthereumChain(chainId) {
        const relay = await this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || undefined).promise;
        // backward compatibility
        if ((0, Web3Response_1$1.isErrorResponse)(res) && res.errorCode) {
            if (res.errorCode === errors_1$1.standardErrorCodes.provider.unsupportedChain) {
                throw errors_1$1.standardErrors.provider.unsupportedChain(chainId);
            }
            else {
                throw errors_1$1.standardErrors.provider.custom({
                    message: res.errorMessage,
                    code: res.errorCode,
                });
            }
        }
        const switchResponse = res.result;
        if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
            this.updateProviderInfo(switchResponse.rpcUrl, chainId);
        }
    }
    setAppInfo(appName, appLogoUrl) {
        void this.initializeRelay().then(relay => relay.setAppInfo(appName, appLogoUrl));
    }
    /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
    async enable() {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay
                ? Session_1$2.Session.hash(this._relay.session.id)
                : undefined,
        });
        if (this._isAuthorized()) {
            return [...this._addresses];
        }
        return await this.send(JSONRPC_1.JSONRPCMethod.eth_requestAccounts);
    }
    async close() {
        const relay = await this.initializeRelay();
        relay.resetAndReload();
    }
    send(requestOrMethod, callbackOrParams) {
        // send<T>(method, params): Promise<T>
        try {
            const result = this._send(requestOrMethod, callbackOrParams);
            if (result instanceof Promise) {
                return result.catch(error => {
                    throw (0, errors_1$1.serializeError)(error, requestOrMethod);
                });
            }
        }
        catch (error) {
            throw (0, errors_1$1.serializeError)(error, requestOrMethod);
        }
    }
    _send(requestOrMethod, callbackOrParams) {
        if (typeof requestOrMethod === "string") {
            const method = requestOrMethod;
            const params = Array.isArray(callbackOrParams)
                ? callbackOrParams
                : callbackOrParams !== undefined
                    ? [callbackOrParams]
                    : [];
            const request = {
                jsonrpc: "2.0",
                id: 0,
                method,
                params,
            };
            return this._sendRequestAsync(request).then(res => res.result);
        }
        // send(JSONRPCRequest | JSONRPCRequest[], callback): void
        if (typeof callbackOrParams === "function") {
            const request = requestOrMethod;
            const callback = callbackOrParams;
            return this._sendAsync(request, callback);
        }
        // send(JSONRPCRequest[]): JSONRPCResponse[]
        if (Array.isArray(requestOrMethod)) {
            const requests = requestOrMethod;
            return requests.map(r => this._sendRequest(r));
        }
        // send(JSONRPCRequest): JSONRPCResponse
        const req = requestOrMethod;
        return this._sendRequest(req);
    }
    async sendAsync(request, callback) {
        try {
            return this._sendAsync(request, callback).catch(error => {
                throw (0, errors_1$1.serializeError)(error, request);
            });
        }
        catch (error) {
            return Promise.reject((0, errors_1$1.serializeError)(error, request));
        }
    }
    async _sendAsync(request, callback) {
        if (typeof callback !== "function") {
            throw new Error("callback is required");
        }
        // send(JSONRPCRequest[], callback): void
        if (Array.isArray(request)) {
            const arrayCb = callback;
            this._sendMultipleRequestsAsync(request)
                .then(responses => arrayCb(null, responses))
                .catch(err => arrayCb(err, null));
            return;
        }
        // send(JSONRPCRequest, callback): void
        const cb = callback;
        return this._sendRequestAsync(request)
            .then(response => cb(null, response))
            .catch(err => cb(err, null));
    }
    async request(args) {
        try {
            return this._request(args).catch(error => {
                throw (0, errors_1$1.serializeError)(error, args.method);
            });
        }
        catch (error) {
            return Promise.reject((0, errors_1$1.serializeError)(error, args.method));
        }
    }
    async _request(args) {
        if (!args || typeof args !== "object" || Array.isArray(args)) {
            throw errors_1$1.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: args,
            });
        }
        const { method, params } = args;
        if (typeof method !== "string" || method.length === 0) {
            throw errors_1$1.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: args,
            });
        }
        if (params !== undefined &&
            !Array.isArray(params) &&
            (typeof params !== "object" || params === null)) {
            throw errors_1$1.standardErrors.rpc.invalidRequest({
                message: "'args.params' must be an object or array if provided.",
                data: args,
            });
        }
        const newParams = params === undefined ? [] : params;
        // Coinbase Wallet Requests
        const id = this._relayEventManager.makeRequestId();
        const result = await this._sendRequestAsync({
            method,
            params: newParams,
            jsonrpc: "2.0",
            id,
        });
        return result.result;
    }
    async scanQRCode(match) {
        var _a;
        const relay = await this.initializeRelay();
        const res = await relay.scanQRCode((0, util_1$5.ensureRegExpString)(match)).promise;
        if (typeof res.result !== "string") {
            throw (0, errors_1$1.serializeError)((_a = res.errorMessage) !== null && _a !== void 0 ? _a : "result was not a string", Web3Method_1$1.Web3Method.scanQRCode);
        }
        return res.result;
    }
    async genericRequest(data, action) {
        var _a;
        const relay = await this.initializeRelay();
        const res = await relay.genericRequest(data, action).promise;
        if (typeof res.result !== "string") {
            throw (0, errors_1$1.serializeError)((_a = res.errorMessage) !== null && _a !== void 0 ? _a : "result was not a string", Web3Method_1$1.Web3Method.generic);
        }
        return res.result;
    }
    async selectProvider(providerOptions) {
        var _a;
        const relay = await this.initializeRelay();
        const res = await relay.selectProvider(providerOptions).promise;
        if (typeof res.result !== "string") {
            throw (0, errors_1$1.serializeError)((_a = res.errorMessage) !== null && _a !== void 0 ? _a : "result was not a string", Web3Method_1$1.Web3Method.selectProvider);
        }
        return res.result;
    }
    supportsSubscriptions() {
        return false;
    }
    subscribe() {
        throw new Error("Subscriptions are not supported");
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported");
    }
    disconnect() {
        return true;
    }
    _sendRequest(request) {
        const response = {
            jsonrpc: "2.0",
            id: request.id,
        };
        const { method } = request;
        response.result = this._handleSynchronousMethods(request);
        if (response.result === undefined) {
            throw new Error(`Coinbase Wallet does not support calling ${method} synchronously without ` +
                `a callback. Please provide a callback parameter to call ${method} ` +
                `asynchronously.`);
        }
        return response;
    }
    _setAddresses(addresses, _) {
        if (!Array.isArray(addresses)) {
            throw new Error("addresses is not an array");
        }
        const newAddresses = addresses.map(address => (0, util_1$5.ensureAddressString)(address));
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
            return;
        }
        this._addresses = newAddresses;
        this.emit("accountsChanged", this._addresses);
        this._storage.setItem(WalletSDKRelayAbstract_1$1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
    }
    _sendRequestAsync(request) {
        return new Promise((resolve, reject) => {
            try {
                const syncResult = this._handleSynchronousMethods(request);
                if (syncResult !== undefined) {
                    return resolve({
                        jsonrpc: "2.0",
                        id: request.id,
                        result: syncResult,
                    });
                }
                const filterPromise = this._handleAsynchronousFilterMethods(request);
                if (filterPromise !== undefined) {
                    filterPromise
                        .then(res => resolve(Object.assign(Object.assign({}, res), { id: request.id })))
                        .catch(err => reject(err));
                    return;
                }
                const subscriptionPromise = this._handleSubscriptionMethods(request);
                if (subscriptionPromise !== undefined) {
                    subscriptionPromise
                        .then(res => resolve({
                        jsonrpc: "2.0",
                        id: request.id,
                        result: res.result,
                    }))
                        .catch(err => reject(err));
                    return;
                }
            }
            catch (err) {
                return reject(err);
            }
            this._handleAsynchronousMethods(request)
                .then(res => res && resolve(Object.assign(Object.assign({}, res), { id: request.id })))
                .catch(err => reject(err));
        });
    }
    _sendMultipleRequestsAsync(requests) {
        return Promise.all(requests.map(r => this._sendRequestAsync(r)));
    }
    _handleSynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
            case JSONRPC_1.JSONRPCMethod.eth_accounts:
                return this._eth_accounts();
            case JSONRPC_1.JSONRPCMethod.eth_coinbase:
                return this._eth_coinbase();
            case JSONRPC_1.JSONRPCMethod.eth_uninstallFilter:
                return this._eth_uninstallFilter(params);
            case JSONRPC_1.JSONRPCMethod.net_version:
                return this._net_version();
            case JSONRPC_1.JSONRPCMethod.eth_chainId:
                return this._eth_chainId();
            default:
                return undefined;
        }
    }
    async _handleAsynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
            case JSONRPC_1.JSONRPCMethod.eth_requestAccounts:
                return this._eth_requestAccounts();
            case JSONRPC_1.JSONRPCMethod.eth_sign:
                return this._eth_sign(params);
            case JSONRPC_1.JSONRPCMethod.eth_ecRecover:
                return this._eth_ecRecover(params);
            case JSONRPC_1.JSONRPCMethod.personal_sign:
                return this._personal_sign(params);
            case JSONRPC_1.JSONRPCMethod.personal_ecRecover:
                return this._personal_ecRecover(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTransaction:
                return this._eth_signTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_sendRawTransaction:
                return this._eth_sendRawTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_sendTransaction:
                return this._eth_sendTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v1:
                return this._eth_signTypedData_v1(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v2:
                return this._throwUnsupportedMethodError();
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v3:
                return this._eth_signTypedData_v3(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v4:
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData:
                return this._eth_signTypedData_v4(params);
            case JSONRPC_1.JSONRPCMethod.cbWallet_arbitrary:
                return this._cbwallet_arbitrary(params);
            case JSONRPC_1.JSONRPCMethod.wallet_addEthereumChain:
                return this._wallet_addEthereumChain(params);
            case JSONRPC_1.JSONRPCMethod.wallet_switchEthereumChain:
                return this._wallet_switchEthereumChain(params);
            case JSONRPC_1.JSONRPCMethod.wallet_watchAsset:
                return this._wallet_watchAsset(params);
        }
        const relay = await this.initializeRelay();
        return relay.makeEthereumJSONRPCRequest(request, this.jsonRpcUrl);
    }
    _handleAsynchronousFilterMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
            case JSONRPC_1.JSONRPCMethod.eth_newFilter:
                return this._eth_newFilter(params);
            case JSONRPC_1.JSONRPCMethod.eth_newBlockFilter:
                return this._eth_newBlockFilter();
            case JSONRPC_1.JSONRPCMethod.eth_newPendingTransactionFilter:
                return this._eth_newPendingTransactionFilter();
            case JSONRPC_1.JSONRPCMethod.eth_getFilterChanges:
                return this._eth_getFilterChanges(params);
            case JSONRPC_1.JSONRPCMethod.eth_getFilterLogs:
                return this._eth_getFilterLogs(params);
        }
        return undefined;
    }
    _handleSubscriptionMethods(request) {
        switch (request.method) {
            case JSONRPC_1.JSONRPCMethod.eth_subscribe:
            case JSONRPC_1.JSONRPCMethod.eth_unsubscribe:
                return this._subscriptionManager.handleRequest(request);
        }
        return undefined;
    }
    _isKnownAddress(addressString) {
        try {
            const addressStr = (0, util_1$5.ensureAddressString)(addressString);
            const lowercaseAddresses = this._addresses.map(address => (0, util_1$5.ensureAddressString)(address));
            return lowercaseAddresses.includes(addressStr);
        }
        catch (_a) { }
        return false;
    }
    _ensureKnownAddress(addressString) {
        var _a;
        if (!this._isKnownAddress(addressString)) {
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED);
            throw new Error("Unknown Ethereum address");
        }
    }
    _prepareTransactionParams(tx) {
        const fromAddress = tx.from
            ? (0, util_1$5.ensureAddressString)(tx.from)
            : this.selectedAddress;
        if (!fromAddress) {
            throw new Error("Ethereum address is unavailable");
        }
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? (0, util_1$5.ensureAddressString)(tx.to) : null;
        const weiValue = tx.value != null ? (0, util_1$5.ensureBN)(tx.value) : new bn_js_1.default(0);
        const data = tx.data ? (0, util_1$5.ensureBuffer)(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? (0, util_1$5.ensureIntNumber)(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? (0, util_1$5.ensureBN)(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1$5.ensureBN)(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null
            ? (0, util_1$5.ensureBN)(tx.maxPriorityFeePerGas)
            : null;
        const gasLimit = tx.gas != null ? (0, util_1$5.ensureBN)(tx.gas) : null;
        const chainId = this.getChainId();
        return {
            fromAddress,
            toAddress,
            weiValue,
            data,
            nonce,
            gasPriceInWei,
            maxFeePerGas,
            maxPriorityFeePerGas,
            gasLimit,
            chainId,
        };
    }
    _isAuthorized() {
        return this._addresses.length > 0;
    }
    _requireAuthorization() {
        if (!this._isAuthorized()) {
            throw errors_1$1.standardErrors.provider.unauthorized({});
        }
    }
    _throwUnsupportedMethodError() {
        throw errors_1$1.standardErrors.provider.unsupportedMethod({});
    }
    async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
        this._ensureKnownAddress(address);
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson).promise;
            return { jsonrpc: "2.0", id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === "string" &&
                err.message.match(/(denied|rejected)/i)) {
                throw errors_1$1.standardErrors.provider.userRejectedRequest("User denied message signature");
            }
            throw err;
        }
    }
    async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        const relay = await this.initializeRelay();
        const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix).promise;
        return { jsonrpc: "2.0", id: 0, result: res.result };
    }
    _eth_accounts() {
        return [...this._addresses];
    }
    _eth_coinbase() {
        return this.selectedAddress || null;
    }
    _net_version() {
        return this.getChainId().toString(10);
    }
    _eth_chainId() {
        return (0, util_1$5.hexStringFromIntNumber)(this.getChainId());
    }
    getChainId() {
        const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (!chainIdStr) {
            return (0, util_1$5.ensureIntNumber)(this._chainIdFromOpts);
        }
        const chainId = parseInt(chainIdStr, 10);
        return (0, util_1$5.ensureIntNumber)(chainId);
    }
    async _eth_requestAccounts() {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::_eth_requestAccounts",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay
                ? Session_1$2.Session.hash(this._relay.session.id)
                : undefined,
        });
        if (this._isAuthorized()) {
            return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses,
            });
        }
        let res;
        try {
            const relay = await this.initializeRelay();
            res = await relay.requestEthereumAccounts().promise;
        }
        catch (err) {
            if (typeof err.message === "string" &&
                err.message.match(/(denied|rejected)/i)) {
                throw errors_1$1.standardErrors.provider.userRejectedRequest("User denied account authorization");
            }
            throw err;
        }
        if (!res.result) {
            throw new Error("accounts received is empty");
        }
        this._setAddresses(res.result);
        if (!this.isCoinbaseBrowser) {
            await this.switchEthereumChain(this.getChainId());
        }
        return { jsonrpc: "2.0", id: 0, result: this._addresses };
    }
    _eth_sign(params) {
        this._requireAuthorization();
        const address = (0, util_1$5.ensureAddressString)(params[0]);
        const message = (0, util_1$5.ensureBuffer)(params[1]);
        return this._signEthereumMessage(message, address, false);
    }
    _eth_ecRecover(params) {
        const message = (0, util_1$5.ensureBuffer)(params[0]);
        const signature = (0, util_1$5.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, false);
    }
    _personal_sign(params) {
        this._requireAuthorization();
        const message = (0, util_1$5.ensureBuffer)(params[0]);
        const address = (0, util_1$5.ensureAddressString)(params[1]);
        return this._signEthereumMessage(message, address, true);
    }
    _personal_ecRecover(params) {
        const message = (0, util_1$5.ensureBuffer)(params[0]);
        const signature = (0, util_1$5.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, true);
    }
    async _eth_signTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signEthereumTransaction(tx).promise;
            return { jsonrpc: "2.0", id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === "string" &&
                err.message.match(/(denied|rejected)/i)) {
                throw errors_1$1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
            }
            throw err;
        }
    }
    async _eth_sendRawTransaction(params) {
        const signedTransaction = (0, util_1$5.ensureBuffer)(params[0]);
        const relay = await this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId()).promise;
        return { jsonrpc: "2.0", id: 0, result: res.result };
    }
    async _eth_sendTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signAndSubmitEthereumTransaction(tx).promise;
            return { jsonrpc: "2.0", id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === "string" &&
                err.message.match(/(denied|rejected)/i)) {
                throw errors_1$1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
            }
            throw err;
        }
    }
    async _eth_signTypedData_v1(params) {
        this._requireAuthorization();
        const typedData = (0, util_1$5.ensureParsedJSONObject)(params[0]);
        const address = (0, util_1$5.ensureAddressString)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v3(params) {
        this._requireAuthorization();
        const address = (0, util_1$5.ensureAddressString)(params[0]);
        const typedData = (0, util_1$5.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v4(params) {
        this._requireAuthorization();
        const address = (0, util_1$5.ensureAddressString)(params[0]);
        const typedData = (0, util_1$5.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    /** @deprecated */
    async _cbwallet_arbitrary(params) {
        const action = params[0];
        const data = params[1];
        if (typeof data !== "string") {
            throw new Error("parameter must be a string");
        }
        if (typeof action !== "object" || action === null) {
            throw new Error("parameter must be an object");
        }
        const result = await this.genericRequest(action, data);
        return { jsonrpc: "2.0", id: 0, result };
    }
    async _wallet_addEthereumChain(params) {
        var _a, _b, _c, _d;
        const request = params[0];
        if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: `please pass in at least 1 rpcUrl` },
            };
        }
        if (!request.chainName || request.chainName.trim() === "") {
            throw errors_1$1.standardErrors.rpc.invalidParams("chainName is a required field");
        }
        if (!request.nativeCurrency) {
            throw errors_1$1.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        }
        const chainIdNumber = parseInt(request.chainId, 16);
        const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
        if (success) {
            return { jsonrpc: "2.0", id: 0, result: null };
        }
        else {
            return {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: `unable to add ethereum chain` },
            };
        }
    }
    async _wallet_switchEthereumChain(params) {
        const request = params[0];
        await this.switchEthereumChain(parseInt(request.chainId, 16));
        return { jsonrpc: "2.0", id: 0, result: null };
    }
    async _wallet_watchAsset(params) {
        const request = (Array.isArray(params) ? params[0] : params);
        if (!request.type) {
            throw errors_1$1.standardErrors.rpc.invalidParams("Type is required");
        }
        if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
            throw errors_1$1.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
        }
        if (!(request === null || request === void 0 ? void 0 : request.options)) {
            throw errors_1$1.standardErrors.rpc.invalidParams("Options are required");
        }
        if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
            throw errors_1$1.standardErrors.rpc.invalidParams("Address is required");
        }
        const chainId = this.getChainId();
        const { address, symbol, image, decimals } = request.options;
        const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
        return { jsonrpc: "2.0", id: 0, result: res };
    }
    _eth_uninstallFilter(params) {
        const filterId = (0, util_1$5.ensureHexString)(params[0]);
        return this._filterPolyfill.uninstallFilter(filterId);
    }
    async _eth_newFilter(params) {
        const param = params[0];
        const filterId = await this._filterPolyfill.newFilter(param);
        return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    async _eth_newBlockFilter() {
        const filterId = await this._filterPolyfill.newBlockFilter();
        return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    async _eth_newPendingTransactionFilter() {
        const filterId = await this._filterPolyfill.newPendingTransactionFilter();
        return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    _eth_getFilterChanges(params) {
        const filterId = (0, util_1$5.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterChanges(filterId);
    }
    _eth_getFilterLogs(params) {
        const filterId = (0, util_1$5.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterLogs(filterId);
    }
    initializeRelay() {
        if (this._relay) {
            return Promise.resolve(this._relay);
        }
        return this._relayProvider().then(relay => {
            relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
            relay.setChainCallback((chainId, jsonRpcUrl) => {
                this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
            });
            relay.setDappDefaultChainCallback(this._chainIdFromOpts);
            this._relay = relay;
            return relay;
        });
    }
}
CoinbaseWalletProvider$1.CoinbaseWalletProvider = CoinbaseWalletProvider;

var WalletSDKUI$1 = {};

var LinkFlow$1 = {};

var preact = {};

var n$1,l$1,t$1,u$1,i$2,o$1,r$2,f$1,e$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,p$1=Array.isArray;function h$1(n,l){for(var t in l)n[t]=l[t];return n}function v$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,t,u){var i,o,r,f={};for(r in t)"key"==r?i=t[r]:"ref"==r?o=t[r]:f[r]=t[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):u),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,u,i,o,r){var f={type:n,props:u,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++t$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function _$1(n){return n.children}function x$1(n,l){this.props=n,this.context=l;}function g(n,l){if(null==l)return n.__?g(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return "function"==typeof n.type?g(n):null}function b$1(n,t,u){var i,o=n.__v,r=o.__e,f=n.__P;if(f)return (i=h$1({},o)).__v=o.__v+1,l$1.vnode&&l$1.vnode(i),D(f,i,o,n.__n,void 0!==f.ownerSVGElement,32&o.__u?[r]:null,t,null==r?g(o):r,!!(32&o.__u),u),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&w(i),i}function w(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return w(n)}}function k(n){(!n.__d&&(n.__d=!0)&&i$2.push(n)&&!m$1.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$2)(m$1);}function m$1(){var n,t,u,o=[],r=[];for(i$2.sort(f$1);n=i$2.shift();)n.__d&&(u=i$2.length,t=b$1(n,o,r)||t,0===u||i$2.length>u?(L(o,t,r),r.length=o.length=0,t=void 0,i$2.sort(f$1)):t&&l$1.__c&&l$1.__c(t,s$1));t&&L(o,t,r),m$1.__r=0;}function P$1(n,l,t,u,i,o,r,f,e,a,p){var h,v,y,d,_,x=u&&u.__k||s$1,g=l.length;for(t.__d=e,S(t,l,x),e=t.__d,h=0;h<g;h++)null!=(y=t.__k[h])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?c$1:x[y.__i]||c$1,y.__i=h,D(n,y,v,i,o,r,f,e,a,p),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&j(v.ref,null,y),p.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||v.__k===y.__k?e=$(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);t.__d=e,t.__e=_;}function S(n,l,t){var u,i,o,r,f,e=l.length,c=t.length,s=c,a=0;for(n.__k=[],u=0;u<e;u++)r=u+a,null!=(i=n.__k[u]=null==(i=l[u])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,null):p$1(i)?d$1(_$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=C(i,t,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=t[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==u+a&&(i.__u|=65536))):(o=t[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=g(o)),z(o,o,!1),t[r]=null,s--);if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=g(o)),z(o,o));}function $(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=$(u[i],l,t));return l}n.__e!=l&&(t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function C(n,l,t,u){var i=n.key,o=n.type,r=t-1,f=t+1,e=l[t];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return t;if(u>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function H(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||a$1.test(l)?t:t+"px";}function I(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else {if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||H(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||H(n.style,l,t[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=Date.now(),n.addEventListener(l,o?A$1:T$1,o)):n.removeEventListener(l,o?A$1:T$1,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,t));}}function T$1(n){if(this.l){var t=this.l[n.type+!1];if(n.u){if(n.u<=t.t)return}else n.u=Date.now();return t(l$1.event?l$1.event(n):n)}}function A$1(n){if(this.l)return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function D(n,t,u,i,o,r,f,e,c,s){var a,v,y,d,g,b,w,k,m,S,$,C,H,I,T,A=t.type;if(void 0!==t.constructor)return null;128&u.__u&&(c=!!(32&u.__u),r=[e=t.__e=u.__e]),(a=l$1.__b)&&a(t);n:if("function"==typeof A)try{if(k=t.props,m=(a=A.contextType)&&i[a.__c],S=a?m?m.props.value:a.__:i,u.__c?w=(v=t.__c=u.__c).__=v.__E:("prototype"in A&&A.prototype.render?t.__c=v=new A(k,S):(t.__c=v=new x$1(k,S),v.constructor=A,v.render=N),m&&m.sub(v),v.props=k,v.state||(v.state={}),v.context=S,v.__n=i,y=v.__d=!0,v.__h=[],v._sb=[]),null==v.__s&&(v.__s=v.state),null!=A.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=h$1({},v.__s)),h$1(v.__s,A.getDerivedStateFromProps(k,v.__s))),d=v.props,g=v.state,v.__v=t,y)null==A.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==A.getDerivedStateFromProps&&k!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,S),!v.__e&&(null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,S)||t.__v===u.__v)){for(t.__v!==u.__v&&(v.props=k,v.state=v.__s,v.__d=!1),t.__e=u.__e,t.__k=u.__k,t.__k.forEach(function(n){n&&(n.__=t);}),$=0;$<v._sb.length;$++)v.__h.push(v._sb[$]);v._sb=[],v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,S),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,g,b);});}if(v.context=S,v.props=k,v.__P=n,v.__e=!1,C=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(v.state=v.__s,v.__d=!1,C&&C(t),a=v.render(v.props,v.state,v.context),I=0;I<v._sb.length;I++)v.__h.push(v._sb[I]);v._sb=[];}else do{v.__d=!1,C&&C(t),a=v.render(v.props,v.state,v.context),v.state=v.__s;}while(v.__d&&++H<25);v.state=v.__s,null!=v.getChildContext&&(i=h$1(h$1({},i),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(b=v.getSnapshotBeforeUpdate(d,g)),P$1(n,p$1(T=null!=a&&a.type===_$1&&null==a.key?a.props.children:a)?T:[T],t,u,i,o,r,f,e,c,s),v.base=t.__e,t.__u&=-161,v.__h.length&&f.push(v),w&&(v.__E=v.__=null);}catch(n){t.__v=null,c||null!=r?(t.__e=e,t.__u|=c?160:32,r[r.indexOf(e)]=null):(t.__e=u.__e,t.__k=u.__k),l$1.__e(n,t,u);}else null==r&&t.__v===u.__v?(t.__k=u.__k,t.__e=u.__e):t.__e=M(u.__e,t,u,i,o,r,f,c,s);(a=l$1.diffed)&&a(t);}function L(n,t,u){for(var i=0;i<u.length;i++)j(u[i],u[++i],u[++i]);l$1.__c&&l$1.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(n){n.call(t);});}catch(n){l$1.__e(n,t.__v);}});}function M(l,t,u,i,o,r,f,e,s){var a,h,y,d,_,x,b,w=u.props,k=t.props,m=t.type;if("svg"===m&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!m&&(m?_.localName===m:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===m)return document.createTextNode(k);l=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,k.is&&k),r=null,e=!1;}if(null===m)w===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),w=u.props||c$1,!e&&null!=r)for(w={},a=0;a<l.attributes.length;a++)w[(_=l.attributes[a]).name]=_.value;for(a in w)_=w[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in k||I(l,a,null,_,o));for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?h=_:"value"==a?x=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||w[a]===_||I(l,a,_,w[a],o);if(h)e||y&&(h.__html===y.__html||h.__html===l.innerHTML)||(l.innerHTML=h.__html),t.__k=[];else if(y&&(l.innerHTML=""),P$1(l,p$1(d)?d:[d],t,u,i,o&&"foreignObject"!==m,r,f,r?r[0]:u.__k&&g(u,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&v$1(r[a]);e||(a="value",void 0!==x&&(x!==l[a]||"progress"===m&&!x||"option"===m&&x!==w[a])&&I(l,a,x,w[a],!1),a="checked",void 0!==b&&b!==l[a]&&I(l,a,b,w[a],!1));}return l}function j(n,t,u){try{"function"==typeof n?n(t):n.current=t;}catch(n){l$1.__e(n,u);}}function z(n,t,u){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||j(i,null,t)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,t);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&z(i[o],t,u||"function"!=typeof n.type);u||null==n.__e||v$1(n.__e),n.__=n.__e=n.__d=void 0;}function N(n,l,t){return this.constructor(n,t)}function O(t,u,i){var o,r,f,e;l$1.__&&l$1.__(t,u),r=(o="function"==typeof i)?null:i&&i.__k||u.__k,f=[],e=[],D(u,t=(!o&&i||u).__k=y$1(_$1,null,[t]),r||c$1,c$1,void 0!==u.ownerSVGElement,!o&&i?[i]:r?null:u.firstChild?n$1.call(u.childNodes):null,f,!o&&i?i:r?r.__e:u.firstChild,o,e),t.__d=void 0,L(f,t,e);}n$1=s$1.slice,l$1={__e:function(n,l,t,u){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},t$1=0,u$1=function(n){return null!=n&&null==n.constructor},x$1.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h$1({},this.state),"function"==typeof n&&(n=n(h$1({},t),this.props)),n&&h$1(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),k(this));},x$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},x$1.prototype.render=_$1,i$2=[],r$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},m$1.__r=0,e$1=0,preact.Component=x$1,preact.Fragment=_$1,preact.cloneElement=function(l,t,u){var i,o,r,f,e=h$1({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),t)"key"==r?i=t[r]:"ref"==r?o=t[r]:e[r]=void 0===t[r]&&void 0!==f?f[r]:t[r];return arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):u),d$1(l.type,e,i||l.key,o||l.ref,null)},preact.createContext=function(n,l){var t={__c:l="__cC"+e$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=[],(u={})[l]=this,this.getChildContext=function(){return u},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some(function(n){n.__e=!0,k(n);});},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n);};}),n.children}};return t.Provider.__=t.Consumer.contextType=t},preact.createElement=y$1,preact.createRef=function(){return {current:null}},preact.h=y$1,preact.hydrate=function n(l,t){O(l,t,n);},preact.isValidElement=u$1,preact.options=l$1,preact.render=O,preact.toChildArray=function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(p$1(l)?l.some(function(l){n(l,t);}):t.push(l)),t};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty$1 = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty$1;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty$1;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty$1) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty$1);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends$1(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));
var Subject = /*@__PURE__*/ (function (_super) {
    __extends$1(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends$1(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    __extends$1(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount()(this);
    };
    return ConnectableObservable;
}(Observable));
var connectableObservableDescriptor = /*@__PURE__*/ (function () {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(SubjectSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    __extends$1(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable));
var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    __extends$1(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    __extends$1(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject));

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/ (function (_super) {
    __extends$1(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        return this;
    };
    return Action;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends$1(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action));

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction = /*@__PURE__*/ (function (_super) {
    __extends$1(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction));

var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends$1(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler = /*@__PURE__*/ (function (_super) {
    __extends$1(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler));

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queueScheduler = /*@__PURE__*/ new QueueScheduler(QueueAction);
var queue = queueScheduler;

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}

/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray(args);
    }
}

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable(function (subscriber) { return scheduler.schedule(dispatch$7, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch$7(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of(this.value);
            case 'E':
                return throwError(this.error);
            case 'C':
                return empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber));
var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject = /*@__PURE__*/ (function (_super) {
    __extends$1(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject));
var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());

/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
var AsyncSubject = /*@__PURE__*/ (function (_super) {
    __extends$1(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ (function () { return /*@__PURE__*/ Promise.resolve(); })();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};

/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
var AsapAction = /*@__PURE__*/ (function (_super) {
    __extends$1(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction));

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler = /*@__PURE__*/ (function (_super) {
    __extends$1(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler));

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asapScheduler = /*@__PURE__*/ new AsapScheduler(AsapAction);
var asap = asapScheduler;

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var asyncScheduler = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    __extends$1(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction));

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    __extends$1(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler));

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrameScheduler = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);
var animationFrame = animationFrameScheduler;

/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    __extends$1(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler));
var VirtualAction = /*@__PURE__*/ (function (_super) {
    __extends$1(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function isObservable(obj) {
    return !!obj && (obj instanceof Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var EmptyErrorImpl = /*@__PURE__*/ (function () {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
var EmptyError = EmptyErrorImpl;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var TimeoutErrorImpl = /*@__PURE__*/ (function () {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
var TimeoutError = TimeoutErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch$6, 0, state);
            }
        });
    };
}
function dispatch$6(state) {
    var _this = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext$3, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext$3(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch$5, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch$5(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext$2, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext$2(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    };
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator$1 = iterable[iterator]();
        do {
            var item = void 0;
            try {
                item = iterator$1.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator$1.return === 'function') {
            subscriber.add(function () {
                if (iterator$1.return) {
                    iterator$1.return();
                }
            });
        }
        return subscriber;
    };
};

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function (result) {
    if (!!result && typeof result[observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
}

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};
function combineLatest$1() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = undefined;
    var scheduler = undefined;
    if (isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
function scheduleObservable(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            var observable$1 = input[observable]();
            sub.add(observable$1.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function schedulePromise(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var iterator$1;
        sub.add(function () {
            if (iterator$1 && typeof iterator$1.return === 'function') {
                iterator$1.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator$1 = input[iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator$1.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
function isInteropObservable(input) {
    return input && typeof input[observable] === 'function';
}

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
function isIterable(input) {
    return input && typeof input[iterator] === 'function';
}

/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        else if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        else if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        else if (isIterable(input) || typeof input === 'string') {
            return scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}

/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable) {
            return input;
        }
        return new Observable(subscribeTo(input));
    }
    else {
        return scheduled(input, scheduler);
    }
}

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */
var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber));
var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber));
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    var subscription;
    try {
        subscription = subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}

/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());
var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(SimpleOuterSubscriber));
var flatMap = mergeMap;

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return mergeMap(identity, concurrent);
}

/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
function concatAll() {
    return mergeAll(1);
}

/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
function concat$1() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return concatAll()(of.apply(void 0, observables));
}

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function defer(observableFactory) {
    return new Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from(input) : empty();
        return source.subscribe(subscriber);
    });
}

/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (isArray(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if (isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && isArray(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(map(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new Observable(function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = from(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}

/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch$4, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch$4(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = EMPTY;
    }
    if (falseResult === void 0) {
        falseResult = EMPTY;
    }
    return defer(function () { return condition() ? trueResult : falseResult; });
}

/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
function isNumeric(val) {
    return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
}

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = async;
    }
    if (!isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async;
    }
    return new Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch$3, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch$3(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge$1() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray(observables, scheduler));
}

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER = /*@__PURE__*/ new Observable(noop);
function never() {
    return NEVER;
}

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext$1() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray(first)) {
        return onErrorResumeNext$1.apply(void 0, first);
    }
    return new Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext$1.apply(void 0, remainder).subscribe(subscriber)); };
        return from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription();
            subscription.add(scheduler.schedule(dispatch$2, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch$2(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */
function partition$1(source, predicate, thisArg) {
    return [
        filter(predicate, thisArg)(new Observable(subscribeTo(source))),
        filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))
    ];
}

/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function race$1() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult(this, observable, undefined, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new Observable(function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch$1, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch$1(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler(scheduler)) {
        scheduler = async;
    }
    return new Observable(function (subscriber) {
        var due = isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function using(resourceFactory, observableFactory) {
    return new Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from(result) : EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}

/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_.._internal_symbol_iterator,_innerSubscribe PURE_IMPORTS_END */
function zip$1() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());
var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber));
var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    __extends$1(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function () {
        return innerSubscribe(this.observable, new SimpleInnerSubscriber(this));
    };
    return ZipBufferIterator;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */

var _esm5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Observable: Observable,
    ConnectableObservable: ConnectableObservable,
    GroupedObservable: GroupedObservable,
    observable: observable,
    Subject: Subject,
    BehaviorSubject: BehaviorSubject,
    ReplaySubject: ReplaySubject,
    AsyncSubject: AsyncSubject,
    asap: asap,
    asapScheduler: asapScheduler,
    async: async,
    asyncScheduler: asyncScheduler,
    queue: queue,
    queueScheduler: queueScheduler,
    animationFrame: animationFrame,
    animationFrameScheduler: animationFrameScheduler,
    VirtualTimeScheduler: VirtualTimeScheduler,
    VirtualAction: VirtualAction,
    Scheduler: Scheduler,
    Subscription: Subscription,
    Subscriber: Subscriber,
    Notification: Notification,
    get NotificationKind () { return NotificationKind; },
    pipe: pipe,
    noop: noop,
    identity: identity,
    isObservable: isObservable,
    ArgumentOutOfRangeError: ArgumentOutOfRangeError,
    EmptyError: EmptyError,
    ObjectUnsubscribedError: ObjectUnsubscribedError,
    UnsubscriptionError: UnsubscriptionError,
    TimeoutError: TimeoutError,
    bindCallback: bindCallback,
    bindNodeCallback: bindNodeCallback,
    combineLatest: combineLatest$1,
    concat: concat$1,
    defer: defer,
    empty: empty,
    forkJoin: forkJoin,
    from: from,
    fromEvent: fromEvent,
    fromEventPattern: fromEventPattern,
    generate: generate,
    iif: iif,
    interval: interval,
    merge: merge$1,
    never: never,
    of: of,
    onErrorResumeNext: onErrorResumeNext$1,
    pairs: pairs,
    partition: partition$1,
    race: race$1,
    range: range,
    throwError: throwError,
    timer: timer,
    using: using,
    zip: zip$1,
    scheduled: scheduled,
    EMPTY: EMPTY,
    NEVER: NEVER,
    config: config
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_esm5);

var ConnectDialog$1 = {};

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

var clsx_m = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clsx: clsx,
    'default': clsx
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(clsx_m);

var hooks = {};

var n,t,r,u,o=preact,i$1=0,f=[],c=[],e=o.options,a=e.__b,v=e.__r,s=e.diffed,l=e.__c,p=e.unmount,x=e.__;function d(n,r){e.__h&&e.__h(t,n,i$1||r),i$1=0;var u=t.__H||(t.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function m(n){return i$1=1,h(b,n)}function h(r,u,o){var i=d(n++,2);if(i.t=r,!i.__c&&(i.__=[o?o(u):b(void 0,u),function(n){var t=i.__N?i.__N[0]:i.__[0],r=i.t(t,n);t!==r&&(i.__N=[r,i.__[1]],i.__c.setState({}));}],i.__c=t,!t.u)){var f=function(n,t,r){if(!i.__c.__H)return !0;var u=i.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var o=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0);}}),!(!o&&i.__c.props===n)&&(!c||c.call(this,n,t,r))};t.u=!0;var c=t.shouldComponentUpdate,e=t.componentWillUpdate;t.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},t.shouldComponentUpdate=f;}return i.__N||i.__}function y(r,u){var o=d(n++,4);!e.__s&&V(o.__H,u)&&(o.__=r,o.o=u,t.__h.push(o));}function _(t,r){var u=d(n++,7);return V(u.__H,r)?(u.__V=t(),u.o=r,u.__h=t,u.__V):u.__}function q(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(T),n.__H.__h.forEach(P),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){t=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),x&&x(n,t);},e.__r=function(u){v&&v(u),n=0;var o=(t=u.__c).__H;o&&(r===t?(o.__h=[],t.__h=[],o.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.o=void 0;})):(o.__h.forEach(T),o.__h.forEach(P),o.__h=[],n=0)),r=t;},e.diffed=function(n){s&&s(n);var o=n.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&u===e.requestAnimationFrame||((u=e.requestAnimationFrame)||F)(q)),o.__H.__.forEach(function(n){n.o&&(n.__H=n.o),n.__V!==c&&(n.__=n.__V),n.o=void 0,n.__V=c;})),r=t=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(n){return !n.__||P(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),l&&l(n,t);},e.unmount=function(n){p&&p(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{T(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var A="function"==typeof requestAnimationFrame;function F(n){var t,r=function(){clearTimeout(u),A&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);A&&(t=requestAnimationFrame(r));}function T(n){var r=t,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),t=r;}function P(n){var r=t;n.__c=n.__(),t=r;}function V(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function b(n,t){return "function"==typeof t?t(n):t}hooks.useCallback=function(n,t){return i$1=8,_(function(){return n},t)},hooks.useContext=function(r){var u=t.context[r.__c],o=d(n++,9);return o.c=r,u?(null==o.__&&(o.__=!0,u.sub(t)),u.props.value):r.__},hooks.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n);},hooks.useEffect=function(r,u){var o=d(n++,3);!e.__s&&V(o.__H,u)&&(o.__=r,o.o=u,t.__H.__h.push(o));},hooks.useErrorBoundary=function(r){var u=d(n++,10),o=m();return u.__=r,t.componentDidCatch||(t.componentDidCatch=function(n,t){u.__&&u.__(n,t),o[1](n);}),[o[0],function(){o[1](void 0);}]},hooks.useId=function(){var r=d(n++,11);if(!r.__){for(var u=t.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var o=u.__m||(u.__m=[0,0]);r.__="P"+o[0]+"-"+o[1]++;}return r.__},hooks.useImperativeHandle=function(n,t,r){i$1=6,y(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));},hooks.useLayoutEffect=y,hooks.useMemo=_,hooks.useReducer=h,hooks.useRef=function(n){return i$1=5,_(function(){return {current:n}},[])},hooks.useState=m;

var ConnectContent$1 = {};

var CloseIcon$1 = {};

Object.defineProperty(CloseIcon$1, "__esModule", { value: true });
CloseIcon$1.CloseIcon = void 0;
const preact_1$b = preact;
function CloseIcon(props) {
    return ((0, preact_1$b.h)("svg", Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$b.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })));
}
CloseIcon$1.CloseIcon = CloseIcon;

var coinbaseRoundSvg = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(coinbaseRoundSvg, "__esModule", { value: true });
coinbaseRoundSvg.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=`;

var coinbaseWalletRoundSvg = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(coinbaseWalletRoundSvg, "__esModule", { value: true });
coinbaseWalletRoundSvg.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==`;

var QRCodeIcon$1 = {};

Object.defineProperty(QRCodeIcon$1, "__esModule", { value: true });
QRCodeIcon$1.QRCodeIcon = void 0;
const preact_1$a = preact;
function QRCodeIcon(props) {
    return ((0, preact_1$a.h)("svg", Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$a.h)("path", { d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z" }),
        (0, preact_1$a.h)("path", { d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z" }),
        (0, preact_1$a.h)("path", { d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z" }),
        (0, preact_1$a.h)("path", { d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z" }),
        (0, preact_1$a.h)("path", { d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z" }),
        (0, preact_1$a.h)("path", { d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z" }),
        (0, preact_1$a.h)("path", { d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z" }),
        (0, preact_1$a.h)("path", { d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z" }),
        (0, preact_1$a.h)("path", { d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z" })));
}
QRCodeIcon$1.QRCodeIcon = QRCodeIcon;

var QRLogoCoinbase = {};

Object.defineProperty(QRLogoCoinbase, "__esModule", { value: true });
const svg = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
QRLogoCoinbase.default = svg;

var QRLogoWallet = {};

Object.defineProperty(QRLogoWallet, "__esModule", { value: true });
QRLogoWallet.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;

var StatusDotIcon$1 = {};

Object.defineProperty(StatusDotIcon$1, "__esModule", { value: true });
StatusDotIcon$1.StatusDotIcon = void 0;
const preact_1$9 = preact;
function StatusDotIcon(props) {
    return ((0, preact_1$9.h)("svg", Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$9.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z" })));
}
StatusDotIcon$1.StatusDotIcon = StatusDotIcon;

var QRCode$2 = {};

/**
 * @fileoverview
 * - modified davidshimjs/qrcodejs library for use in node.js
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @version 0.9.1 (2016-02-12)
 * @author davidshimjs, papnkukn
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
 */

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
  this.parsedData = [];

  // Added to support UTF-8 Characters
  for (var i = 0, l = this.data.length; i < l; i++) {
    var byteArray = [];
    var code = this.data.charCodeAt(i);

    if (code > 0x10000) {
      byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
      byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
      byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
      byteArray[3] = 0x80 | (code & 0x3F);
    } else if (code > 0x800) {
      byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
      byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
      byteArray[2] = 0x80 | (code & 0x3F);
    } else if (code > 0x80) {
      byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
      byteArray[1] = 0x80 | (code & 0x3F);
    } else {
      byteArray[0] = code;
    }

    this.parsedData.push(byteArray);
  }

  this.parsedData = Array.prototype.concat.apply([], this.parsedData);

  if (this.parsedData.length != this.data.length) {
    this.parsedData.unshift(191);
    this.parsedData.unshift(187);
    this.parsedData.unshift(239);
  }
}

QR8bitByte.prototype = {
  getLength: function (buffer) {
    return this.parsedData.length;
  },
  write: function (buffer) {
    for (var i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  }
};

function QRCodeModel(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}

QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else {this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
this.modules[r][6]=(r%2==0);}
for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else {this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else {this.modules[this.moduleCount-15+i][8]=mod;}}
for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else {this.modules[8][15-i-1]=mod;}}
this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
+buffer.getLengthInBits()
+">"
+totalDataCount*8
+")");}
if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
buffer.put(QRCodeModel.PAD1,8);}
return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
return ((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
return (data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return (i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return (i+j)%3==0;case QRMaskPattern.PATTERN100:return (Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return (i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return ((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return ((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else {throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
if(r==0&&c==0){continue;}
if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
while(n>=256){n-=255;}
return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return ((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];


/** Constructor */
function QRCode$1(options) {

  //Default options
  this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image:{
      svg:"",
      width:0,
      height:0
    }
  };

  //In case the options is string
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }

  //Merge options
  if (options) {
    for (var i in options) {
      this.options[i] = options[i];
    }
  }

  if (typeof this.options.content !== 'string') {
    throw new Error("Expected 'content' as string!");
  }

  if (this.options.content.length === 0 /* || this.options.content.length > 7089 */) {
    throw new Error("Expected 'content' to be non-empty!");
  }

  if (!(this.options.padding >= 0)) {
    throw new Error("Expected 'padding' value to be non-negative!");
  }

  if (!(this.options.width > 0) || !(this.options.height > 0)) {
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  }

  //Gets the error correction level
  function _getErrorCorrectLevel(ecl) {
    switch (ecl) {
        case "L":
          return QRErrorCorrectLevel.L;

        case "M":
          return QRErrorCorrectLevel.M;

        case "Q":
          return QRErrorCorrectLevel.Q;

        case "H":
          return QRErrorCorrectLevel.H;

        default:
          throw new Error("Unknwon error correction level: " + ecl);
      }
  }

  //Get type number
  function _getTypeNumber(content, ecl) {
    var length = _getUTF8Length(content);

    var type = 1;
    var limit = 0;
    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
      var table = QRCodeLimitLength[i];
      if (!table) {
        throw new Error("Content too long: expected " + limit + " but got " + length);
      }

      switch (ecl) {
        case "L":
          limit = table[0];
          break;

        case "M":
          limit = table[1];
          break;

        case "Q":
          limit = table[2];
          break;

        case "H":
          limit = table[3];
          break;

        default:
          throw new Error("Unknwon error correction level: " + ecl);
      }

      if (length <= limit) {
        break;
      }

      type++;
    }

    if (type > QRCodeLimitLength.length) {
      throw new Error("Content too long");
    }

    return type;
  }

  //Gets text length
  function _getUTF8Length(content) {
    var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
    return result.length + (result.length != content ? 3 : 0);
  }

  //Generate QR Code matrix
  var content = this.options.content;
  var type = _getTypeNumber(content, this.options.ecl);
  var ecl = _getErrorCorrectLevel(this.options.ecl);
  this.qrcode = new QRCodeModel(type, ecl);
  this.qrcode.addData(content);
  this.qrcode.make();
}

/** Generates QR Code as SVG image */
QRCode$1.prototype.svg = function(opt) {
  var options = this.options || { };
  var modules = this.qrcode.modules;

  if (typeof opt == "undefined") {
    opt = { container: options.container || "svg" };
  }

  //Apply new lines and indents in SVG?
  var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;

  var indent = pretty ? '  ' : '';
  var EOL = pretty ? '\r\n' : '';
  var width = options.width;
  var height = options.height;
  var length = modules.length;
  var xsize = width / (length + 2 * options.padding);
  var ysize = height / (length + 2 * options.padding);

  //Join (union, merge) rectangles into one shape?
  var join = typeof options.join != "undefined" ? !!options.join : false;

  //Swap the X and Y modules, pull request #2
  var swap = typeof options.swap != "undefined" ? !!options.swap : false;

  //Apply <?xml...?> declaration in SVG?
  var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;

  //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko
  var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
  var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + ' v' + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : '';

  //Background rectangle
  var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;

  //Rectangles representing modules
  var modrect = '';
  var pathdata = '';

  for (var y = 0; y < length; y++) {
    for (var x = 0; x < length; x++) {
      var module = modules[x][y];
      if (module) {

        var px = (x * xsize + options.padding * xsize);
        var py = (y * ysize + options.padding * ysize);

        //Some users have had issues with the QR Code, thanks to @danioso for the solution
        if (swap) {
          var t = px;
          px = py;
          py = t;
        }

        if (join) {
          //Module as a part of svg path data, thanks to @danioso
          var w = xsize + px;
          var h = ysize + py;

          px = (Number.isInteger(px))? Number(px): px.toFixed(2);
          py = (Number.isInteger(py))? Number(py): py.toFixed(2);
          w = (Number.isInteger(w))? Number(w): w.toFixed(2);
          h = (Number.isInteger(h))? Number(h): h.toFixed(2);

          pathdata += ('M' + px + ',' + py + ' V' + h + ' H' + w + ' V' + py + ' H' + px + ' Z ');
        }
        else if (predefined) {
          //Module as a predefined shape, thanks to @kkocdko
          modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
        }
        else {
          //Module as rectangle element
          modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
        }
      }
    }
  }

  if (join) {
    modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
  }
  let imgSvg = "";
  if(this.options.image !== undefined && this.options.image.svg){
    const imgWidth = width * this.options.image.width / 100;
    const imgHeight = height * this.options.image.height / 100;
    const imgX = (width/2) - imgWidth/2;
    const imgY = (height/2) - imgHeight/2;
    imgSvg += `<svg x="${imgX}" y="${imgY}" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`;
    imgSvg += this.options.image.svg + EOL;
    imgSvg += '</svg>';
  }

  var svg = "";
  switch (opt.container) {
    //Wrapped in SVG document
    case "svg":
      if (xmlDeclaration) {
        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += imgSvg;
      svg += '</svg>';
      break;

    //Viewbox for responsive use in a browser, thanks to @danioso
    case "svg-viewbox":
      if (xmlDeclaration) {
        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + ' ' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += imgSvg;
      svg += '</svg>';
      break;


    //Wrapped in group element
    case "g":
      svg += '<g width="' + width + '" height="' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += imgSvg;
      svg += '</g>';

      break;

    //Without a container
    default:
      svg += (defs + bgrect + modrect + imgSvg).replace(/^\s+/, ""); //Clear indents on each line
      break;
  }

  return svg;
};

var qrcodeSvg = QRCode$1;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$6 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(QRCode$2, "__esModule", { value: true });
QRCode$2.QRCode = void 0;
const preact_1$8 = preact;
const hooks_1$3 = hooks;
const qrcode_svg_1 = __importDefault$6(qrcodeSvg);
const QRCode = props => {
    const [svg, setSvg] = (0, hooks_1$3.useState)("");
    (0, hooks_1$3.useEffect)(() => {
        var _a, _b;
        const qrcode = new qrcode_svg_1.default({
            content: props.content,
            background: props.bgColor || "#ffffff",
            color: props.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
            height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
            padding: 0,
            image: props.image,
        });
        const base64 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
        setSvg(`data:image/svg+xml;base64,${base64}`);
    });
    return svg ? (0, preact_1$8.h)("img", { src: svg, alt: "QR Code" }) : null;
};
QRCode$2.QRCode = QRCode;

var Spinner$1 = {};

var SpinnerCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(SpinnerCss, "__esModule", { value: true });
SpinnerCss.default = `.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}`;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$5 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(Spinner$1, "__esModule", { value: true });
Spinner$1.Spinner = void 0;
const preact_1$7 = preact;
const Spinner_css_1 = __importDefault$5(SpinnerCss);
const Spinner = props => {
    var _a;
    const size = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
    const color = props.color || "#000";
    return ((0, preact_1$7.h)("div", { class: "-cbwsdk-spinner" },
        (0, preact_1$7.h)("style", null, Spinner_css_1.default),
        (0, preact_1$7.h)("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: size, height: size } },
            (0, preact_1$7.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: color } }))));
};
Spinner$1.Spinner = Spinner;

var ConnectContentCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(ConnectContentCss, "__esModule", { value: true });
ConnectContentCss.default = `.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}`;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(ConnectContent$1, "__esModule", { value: true });
ConnectContent$1.CoinbaseAppSteps = ConnectContent$1.CoinbaseWalletSteps = ConnectContent$1.ConnectItem = ConnectContent$1.ConnectContent = void 0;
const clsx_1$2 = __importDefault$4(require$$0);
const preact_1$6 = preact;
const hooks_1$2 = hooks;
const util_1$4 = util$3;
const version_1$1 = version;
const CloseIcon_1 = CloseIcon$1;
const coinbase_round_svg_1 = __importDefault$4(coinbaseRoundSvg);
const coinbase_wallet_round_svg_1 = __importDefault$4(coinbaseWalletRoundSvg);
const QRCodeIcon_1 = QRCodeIcon$1;
const QRLogoCoinbase_1 = __importDefault$4(QRLogoCoinbase);
const QRLogoWallet_1 = __importDefault$4(QRLogoWallet);
const StatusDotIcon_1 = StatusDotIcon$1;
const QRCode_1 = QRCode$2;
const Spinner_1 = Spinner$1;
const ConnectContent_css_1 = __importDefault$4(ConnectContentCss);
const wallets = {
    "coinbase-wallet-app": {
        title: "Coinbase Wallet app",
        description: "Connect with your self-custody wallet",
        icon: coinbase_wallet_round_svg_1.default,
        steps: CoinbaseWalletSteps,
    },
    "coinbase-app": {
        title: "Coinbase app",
        description: "Connect with your Coinbase account",
        icon: coinbase_round_svg_1.default,
        steps: CoinbaseAppSteps,
    },
};
const makeQrCodeImage = (app) => {
    switch (app) {
        case "coinbase-app":
            return QRLogoCoinbase_1.default;
        case "coinbase-wallet-app":
        default:
            return QRLogoWallet_1.default;
    }
};
const makeIconColor = (theme) => {
    return theme === "light" ? "#FFFFFF" : "#0A0B0D";
};
function ConnectContent(props) {
    const { theme } = props;
    const [selected, setSelected] = (0, hooks_1$2.useState)("coinbase-wallet-app");
    const handleSelect = (0, hooks_1$2.useCallback)((id) => {
        setSelected(id);
    }, []);
    const qrUrl = (0, util_1$4.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection, props.version, props.chainId);
    const wallet = wallets[selected];
    if (!selected) {
        return null;
    }
    const WalletSteps = wallet.steps;
    const coinbaseApp = selected === "coinbase-app";
    return ((0, preact_1$6.h)("div", { "data-testid": "connect-content", class: (0, clsx_1$2.default)("-cbwsdk-connect-content", theme) },
        (0, preact_1$6.h)("style", null, ConnectContent_css_1.default),
        (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-content-header" },
            (0, preact_1$6.h)("h2", { class: (0, clsx_1$2.default)("-cbwsdk-connect-content-heading", theme) }, "Scan to connect with one of our mobile apps"),
            props.onCancel && ((0, preact_1$6.h)("button", { type: "button", class: "-cbwsdk-cancel-button", onClick: props.onCancel },
                (0, preact_1$6.h)(CloseIcon_1.CloseIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })))),
        (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-content-layout" },
            (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-content-column-left" },
                (0, preact_1$6.h)("div", null, Object.entries(wallets).map(([key, value]) => {
                    return ((0, preact_1$6.h)(ConnectItem, { key: key, title: value.title, description: value.description, icon: value.icon, selected: selected === key, onClick: () => handleSelect(key), theme: theme }));
                })),
                coinbaseApp && ((0, preact_1$6.h)("div", { class: (0, clsx_1$2.default)("-cbwsdk-connect-content-update-app", theme) },
                    "Don\u2019t see a ",
                    (0, preact_1$6.h)("strong", null, "Scan"),
                    " option? Update your Coinbase app to the latest version and try again."))),
            (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-content-column-right" },
                (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-content-qr-wrapper" },
                    (0, preact_1$6.h)(QRCode_1.QRCode, { content: qrUrl, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
                            svg: makeQrCodeImage(selected),
                            width: 25,
                            height: 25,
                        } }),
                    (0, preact_1$6.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: version_1$1.LIB_VERSION }),
                    (0, preact_1$6.h)("input", { type: "hidden", value: qrUrl })),
                (0, preact_1$6.h)(WalletSteps, { theme: theme }),
                !props.isConnected && ((0, preact_1$6.h)("div", { "data-testid": "connecting-spinner", class: (0, clsx_1$2.default)("-cbwsdk-connect-content-qr-connecting", theme) },
                    (0, preact_1$6.h)(Spinner_1.Spinner, { size: 36, color: theme === "dark" ? "#FFF" : "#000" }),
                    (0, preact_1$6.h)("p", null, "Connecting...")))))));
}
ConnectContent$1.ConnectContent = ConnectContent;
function ConnectItem({ title, description, icon, selected, theme, onClick, }) {
    return ((0, preact_1$6.h)("div", { onClick: onClick, class: (0, clsx_1$2.default)("-cbwsdk-connect-item", theme, { selected }) },
        (0, preact_1$6.h)("div", null,
            (0, preact_1$6.h)("img", { src: icon, alt: title })),
        (0, preact_1$6.h)("div", { class: "-cbwsdk-connect-item-copy-wrapper" },
            (0, preact_1$6.h)("h3", { class: "-cbwsdk-connect-item-title" }, title),
            (0, preact_1$6.h)("p", { class: "-cbwsdk-connect-item-description" }, description))));
}
ConnectContent$1.ConnectItem = ConnectItem;
function CoinbaseWalletSteps({ theme }) {
    return ((0, preact_1$6.h)("ol", { class: "-cbwsdk-wallet-steps" },
        (0, preact_1$6.h)("li", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")),
        (0, preact_1$6.h)("li", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" },
                (0, preact_1$6.h)("span", null,
                    "Tap ",
                    (0, preact_1$6.h)("strong", null, "Scan"),
                    " "),
                (0, preact_1$6.h)("span", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1$6.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) }))))));
}
ConnectContent$1.CoinbaseWalletSteps = CoinbaseWalletSteps;
function CoinbaseAppSteps({ theme }) {
    return ((0, preact_1$6.h)("ol", { class: "-cbwsdk-wallet-steps" },
        (0, preact_1$6.h)("li", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")),
        (0, preact_1$6.h)("li", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" },
                (0, preact_1$6.h)("span", null,
                    "Tap ",
                    (0, preact_1$6.h)("strong", null, "More")),
                (0, preact_1$6.h)("span", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1$6.h)(StatusDotIcon_1.StatusDotIcon, { fill: makeIconColor(theme) })),
                (0, preact_1$6.h)("span", { class: "-cbwsdk-wallet-steps-pad-left" },
                    "then ",
                    (0, preact_1$6.h)("strong", null, "Scan")),
                (0, preact_1$6.h)("span", { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1$6.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) }))))));
}
ConnectContent$1.CoinbaseAppSteps = CoinbaseAppSteps;

var TryExtensionContent$1 = {};

var ArrowLeftIcon$1 = {};

Object.defineProperty(ArrowLeftIcon$1, "__esModule", { value: true });
ArrowLeftIcon$1.ArrowLeftIcon = void 0;
const preact_1$5 = preact;
function ArrowLeftIcon(props) {
    return ((0, preact_1$5.h)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$5.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })));
}
ArrowLeftIcon$1.ArrowLeftIcon = ArrowLeftIcon;

var LaptopIcon$1 = {};

Object.defineProperty(LaptopIcon$1, "__esModule", { value: true });
LaptopIcon$1.LaptopIcon = void 0;
const preact_1$4 = preact;
function LaptopIcon(props) {
    return ((0, preact_1$4.h)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$4.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
        (0, preact_1$4.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })));
}
LaptopIcon$1.LaptopIcon = LaptopIcon;

var SafeIcon$1 = {};

Object.defineProperty(SafeIcon$1, "__esModule", { value: true });
SafeIcon$1.SafeIcon = void 0;
const preact_1$3 = preact;
function SafeIcon(props) {
    return ((0, preact_1$3.h)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1$3.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })));
}
SafeIcon$1.SafeIcon = SafeIcon;

var TryExtensionContentCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(TryExtensionContentCss, "__esModule", { value: true });
TryExtensionContentCss.default = `.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}`;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(TryExtensionContent$1, "__esModule", { value: true });
TryExtensionContent$1.TryExtensionContent = void 0;
const clsx_1$1 = __importDefault$3(require$$0);
const preact_1$2 = preact;
const hooks_1$1 = hooks;
const ArrowLeftIcon_1 = ArrowLeftIcon$1;
const LaptopIcon_1 = LaptopIcon$1;
const SafeIcon_1 = SafeIcon$1;
const TryExtensionContent_css_1 = __importDefault$3(TryExtensionContentCss);
function TryExtensionContent({ theme }) {
    const [clicked, setClicked] = (0, hooks_1$1.useState)(false);
    const handleInstallClick = (0, hooks_1$1.useCallback)(() => {
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
    }, []);
    const handleClick = (0, hooks_1$1.useCallback)(() => {
        if (clicked) {
            window.location.reload();
        }
        else {
            handleInstallClick();
            setClicked(true);
        }
    }, [handleInstallClick, clicked]);
    return ((0, preact_1$2.h)("div", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension", theme) },
        (0, preact_1$2.h)("style", null, TryExtensionContent_css_1.default),
        (0, preact_1$2.h)("div", { class: "-cbwsdk-try-extension-column-half" },
            (0, preact_1$2.h)("h3", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-heading", theme) }, "Or try the Coinbase Wallet browser extension"),
            (0, preact_1$2.h)("div", { class: "-cbwsdk-try-extension-cta-wrapper" },
                (0, preact_1$2.h)("button", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-cta", theme), onClick: handleClick }, clicked ? "Refresh" : "Install"),
                (0, preact_1$2.h)("div", null, !clicked && ((0, preact_1$2.h)(ArrowLeftIcon_1.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: theme === "light" ? "#0052FF" : "#588AF5" }))))),
        (0, preact_1$2.h)("div", { class: "-cbwsdk-try-extension-column-half" },
            (0, preact_1$2.h)("ul", { class: "-cbwsdk-try-extension-list" },
                (0, preact_1$2.h)("li", { class: "-cbwsdk-try-extension-list-item" },
                    (0, preact_1$2.h)("div", { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                        (0, preact_1$2.h)("span", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                            (0, preact_1$2.h)(LaptopIcon_1.LaptopIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" }))),
                    (0, preact_1$2.h)("div", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Connect with dapps with just one click on your desktop browser")),
                (0, preact_1$2.h)("li", { class: "-cbwsdk-try-extension-list-item" },
                    (0, preact_1$2.h)("div", { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                        (0, preact_1$2.h)("span", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                            (0, preact_1$2.h)(SafeIcon_1.SafeIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" }))),
                    (0, preact_1$2.h)("div", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Add an additional layer of security by using a supported Ledger hardware wallet"))))));
}
TryExtensionContent$1.TryExtensionContent = TryExtensionContent;

var ConnectDialogCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(ConnectDialogCss, "__esModule", { value: true });
ConnectDialogCss.default = `.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}`;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(ConnectDialog$1, "__esModule", { value: true });
ConnectDialog$1.ConnectDialog = void 0;
const clsx_1 = __importDefault$2(require$$0);
const preact_1$1 = preact;
const hooks_1 = hooks;
const ConnectContent_1 = ConnectContent$1;
const TryExtensionContent_1 = TryExtensionContent$1;
const ConnectDialog_css_1 = __importDefault$2(ConnectDialogCss);
const ConnectDialog = (props) => {
    const { isOpen, darkMode } = props;
    const [containerHidden, setContainerHidden] = (0, hooks_1.useState)(!isOpen);
    const [dialogHidden, setDialogHidden] = (0, hooks_1.useState)(!isOpen);
    (0, hooks_1.useEffect)(() => {
        const timers = [
            window.setTimeout(() => {
                setDialogHidden(!isOpen);
            }, 10),
        ];
        if (isOpen) {
            setContainerHidden(false);
        }
        else {
            timers.push(window.setTimeout(() => {
                setContainerHidden(true);
            }, 360));
        }
        return () => {
            timers.forEach(window.clearTimeout);
        };
    }, [props.isOpen]);
    const theme = darkMode ? "dark" : "light";
    return ((0, preact_1$1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-container", containerHidden && "-cbwsdk-connect-dialog-container-hidden") },
        (0, preact_1$1.h)("style", null, ConnectDialog_css_1.default),
        (0, preact_1$1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-backdrop", theme, dialogHidden && "-cbwsdk-connect-dialog-backdrop-hidden") }),
        (0, preact_1$1.h)("div", { class: "-cbwsdk-connect-dialog" },
            (0, preact_1$1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-box", dialogHidden && "-cbwsdk-connect-dialog-box-hidden") },
                !props.connectDisabled ? ((0, preact_1$1.h)(ConnectContent_1.ConnectContent, { theme: theme, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, linkAPIUrl: props.linkAPIUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection, chainId: props.chainId, onCancel: props.onCancel })) : null,
                (0, preact_1$1.h)(TryExtensionContent_1.TryExtensionContent, { theme: theme })))));
};
ConnectDialog$1.ConnectDialog = ConnectDialog;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(LinkFlow$1, "__esModule", { value: true });
LinkFlow$1.LinkFlow = void 0;
const preact_1 = preact;
const rxjs_1$2 = require$$1;
const ConnectDialog_1 = ConnectDialog$1;
class LinkFlow {
    constructor(options) {
        this.extensionUI$ = new rxjs_1$2.BehaviorSubject({});
        this.subscriptions = new rxjs_1$2.Subscription();
        this.isConnected = false;
        this.chainId = 1;
        this.isOpen = false;
        this.onCancel = null;
        this.root = null;
        // if true, hide QR code in LinkFlow (which happens if no jsonRpcUrl is provided)
        this.connectDisabled = false;
        this.darkMode = options.darkMode;
        this.version = options.version;
        this.sessionId = options.sessionId;
        this.sessionSecret = options.sessionSecret;
        this.linkAPIUrl = options.linkAPIUrl;
        this.isParentConnection = options.isParentConnection;
        this.connected$ = options.connected$;
        this.chainId$ = options.chainId$;
    }
    attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-link-flow-root";
        el.appendChild(this.root);
        this.render();
        this.subscriptions.add(this.connected$.subscribe(v => {
            if (this.isConnected !== v) {
                this.isConnected = v;
                this.render();
            }
        }));
        this.subscriptions.add(this.chainId$.subscribe(chainId => {
            if (this.chainId !== chainId) {
                this.chainId = chainId;
                this.render();
            }
        }));
    }
    detach() {
        var _a;
        if (!this.root) {
            return;
        }
        this.subscriptions.unsubscribe();
        (0, preact_1.render)(null, this.root);
        (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
    }
    setConnectDisabled(connectDisabled) {
        this.connectDisabled = connectDisabled;
    }
    open(options) {
        this.isOpen = true;
        this.onCancel = options.onCancel;
        this.render();
    }
    close() {
        this.isOpen = false;
        this.onCancel = null;
        this.render();
    }
    render() {
        if (!this.root) {
            return;
        }
        const subscription = this.extensionUI$.subscribe(() => {
            if (!this.root) {
                return;
            }
            (0, preact_1.render)((0, preact_1.h)(ConnectDialog_1.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
        });
        this.subscriptions.add(subscription);
    }
}
LinkFlow$1.LinkFlow = LinkFlow;

var Snackbar = {};

var SnackbarCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(SnackbarCss, "__esModule", { value: true });
SnackbarCss.default = `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`;

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
	const clsx_1 = __importDefault(require$$0);
	const preact_1 = preact;
	const hooks_1 = hooks;
	const Snackbar_css_1 = __importDefault(SnackbarCss);
	const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
	function makeSnackbarIcon(appSrc) {
	    switch (appSrc) {
	        case "coinbase-app":
	            return `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+`;
	        case "coinbase-wallet-app":
	        default:
	            return `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
	    }
	}
	class Snackbar {
	    constructor(options) {
	        this.items = new Map();
	        this.nextItemKey = 0;
	        this.root = null;
	        this.darkMode = options.darkMode;
	    }
	    attach(el) {
	        this.root = document.createElement("div");
	        this.root.className = "-cbwsdk-snackbar-root";
	        el.appendChild(this.root);
	        this.render();
	    }
	    presentItem(itemProps) {
	        const key = this.nextItemKey++;
	        this.items.set(key, itemProps);
	        this.render();
	        return () => {
	            this.items.delete(key);
	            this.render();
	        };
	    }
	    clear() {
	        this.items.clear();
	        this.render();
	    }
	    render() {
	        if (!this.root) {
	            return;
	        }
	        (0, preact_1.render)((0, preact_1.h)("div", null,
	            (0, preact_1.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => ((0, preact_1.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key: key })))))), this.root);
	    }
	}
	exports.Snackbar = Snackbar;
	const SnackbarContainer = props => ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-snackbar-container") },
	    (0, preact_1.h)("style", null, Snackbar_css_1.default),
	    (0, preact_1.h)("div", { class: "-cbwsdk-snackbar" }, props.children)));
	exports.SnackbarContainer = SnackbarContainer;
	const SnackbarInstance = ({ autoExpand, message, menuItems, appSrc, }) => {
	    const [hidden, setHidden] = (0, hooks_1.useState)(true);
	    const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
	    (0, hooks_1.useEffect)(() => {
	        const timers = [
	            window.setTimeout(() => {
	                setHidden(false);
	            }, 1),
	            window.setTimeout(() => {
	                setExpanded(true);
	            }, 10000),
	        ];
	        return () => {
	            timers.forEach(window.clearTimeout);
	        };
	    });
	    const toggleExpanded = () => {
	        setExpanded(!expanded);
	    };
	    return ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
	        (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
	            (0, preact_1.h)("img", { src: makeSnackbarIcon(appSrc), class: "-cbwsdk-snackbar-instance-header-cblogo" }),
	            (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
	            (0, preact_1.h)("div", { class: "-gear-container" },
	                !expanded && ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
	                    (0, preact_1.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" }))),
	                (0, preact_1.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" }))),
	        menuItems && menuItems.length > 0 && ((0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i) => ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i },
	            (0, preact_1.h)("svg", { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
	                (0, preact_1.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })),
	            (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed &&
	                    "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info))))))));
	};
	exports.SnackbarInstance = SnackbarInstance; 
} (Snackbar));

var cssReset = {};

var cssResetCss = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(cssResetCss, "__esModule", { value: true });
cssResetCss.default = `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(cssReset, "__esModule", { value: true });
cssReset.injectCssReset = void 0;
const cssReset_css_1 = __importDefault$1(cssResetCss);
function injectCssReset() {
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
    document.documentElement.appendChild(styleEl);
}
cssReset.injectCssReset = injectCssReset;

Object.defineProperty(WalletSDKUI$1, "__esModule", { value: true });
WalletSDKUI$1.WalletSDKUI = void 0;
const LinkFlow_1 = LinkFlow$1;
const Snackbar_1 = Snackbar;
const cssReset_1 = cssReset;
class WalletSDKUI {
    constructor(options) {
        this.standalone = null;
        this.attached = false;
        this.appSrc = null;
        this.snackbar = new Snackbar_1.Snackbar({
            darkMode: options.darkMode,
        });
        this.linkFlow = new LinkFlow_1.LinkFlow({
            darkMode: options.darkMode,
            version: options.version,
            sessionId: options.session.id,
            sessionSecret: options.session.secret,
            linkAPIUrl: options.linkAPIUrl,
            connected$: options.connected$,
            chainId$: options.chainId$,
            isParentConnection: false,
        });
    }
    attach() {
        if (this.attached) {
            throw new Error("Coinbase Wallet SDK UI is already attached");
        }
        const el = document.documentElement;
        const container = document.createElement("div");
        container.className = "-cbwsdk-css-reset";
        el.appendChild(container);
        this.linkFlow.attach(container);
        this.snackbar.attach(container);
        this.attached = true;
        (0, cssReset_1.injectCssReset)();
    }
    setConnectDisabled(connectDisabled) {
        this.linkFlow.setConnectDisabled(connectDisabled);
    }
    /* istanbul ignore next */
    addEthereumChain(_options) {
        // no-op
    }
    /* istanbul ignore next */
    watchAsset(_options) {
        // no-op
    }
    /* istanbul ignore next */
    switchEthereumChain(_options) {
        // no-op
    }
    requestEthereumAccounts(options) {
        this.linkFlow.open({ onCancel: options.onCancel });
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close();
    }
    /* istanbul ignore next */
    signEthereumMessage(_) {
        // No-op
    }
    /* istanbul ignore next */
    signEthereumTransaction(_) {
        // No-op
    }
    /* istanbul ignore next */
    submitEthereumTransaction(_) {
        // No-op
    }
    /* istanbul ignore next */
    ethereumAddressFromSignedMessage(_) {
        // No-op
    }
    showConnecting(options) {
        let snackbarProps;
        if (options.isUnlinkedErrorState) {
            snackbarProps = {
                autoExpand: true,
                message: "Connection lost",
                appSrc: this.appSrc,
                menuItems: [
                    {
                        isRed: false,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: options.onResetConnection,
                    },
                ],
            };
        }
        else {
            snackbarProps = {
                message: "Confirm on phone",
                appSrc: this.appSrc,
                menuItems: [
                    {
                        isRed: true,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: options.onCancel,
                    },
                    {
                        isRed: false,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: options.onResetConnection,
                    },
                ],
            };
        }
        return this.snackbar.presentItem(snackbarProps);
    }
    /* istanbul ignore next */
    setAppSrc(appSrc) {
        this.appSrc = appSrc;
    }
    /* istanbul ignore next */
    reloadUI() {
        document.location.reload();
    }
    /* istanbul ignore next */
    inlineAccountsResponse() {
        return false;
    }
    /* istanbul ignore next */
    inlineAddEthereumChain(_chainId) {
        return false;
    }
    /* istanbul ignore next */
    inlineWatchAsset() {
        return false;
    }
    /* istanbul ignore next */
    inlineSwitchEthereumChain() {
        return false;
    }
    /* istanbul ignore next */
    setStandalone(status) {
        this.standalone = status;
    }
    /* istanbul ignore next */
    isStandalone() {
        var _a;
        return (_a = this.standalone) !== null && _a !== void 0 ? _a : false;
    }
}
WalletSDKUI$1.WalletSDKUI = WalletSDKUI;

var WalletSDKRelay$1 = {};

var bindDecorator = {};

Object.defineProperty(bindDecorator, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
bindDecorator.bind = bind;
bindDecorator.default = bind;

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
var AuditOperator = /*@__PURE__*/ (function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
var AuditSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = void 0;
            try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            var innerSubscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function () {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return audit(function () { return timer(duration, scheduler); });
}

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
var BufferOperator = /*@__PURE__*/ (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
var BufferSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(_this)));
        return _this;
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function () {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator = /*@__PURE__*/ (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
var BufferCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.buffer = [];
        return _this;
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber));
var BufferSkipCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.startBufferEvery = startBufferEvery;
        _this.buffers = [];
        _this.count = 0;
        return _this;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async;
    if (isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator = /*@__PURE__*/ (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = /*@__PURE__*/ (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
var BufferTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: _this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context_1 = contexts[i];
            var buffer = context_1.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context_1;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context_2 = contexts.shift();
            destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}

/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
var BufferToggleOperator = /*@__PURE__*/ (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
var BufferToggleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(subscribeToResult(_this, openings));
        return _this;
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context_1 = contexts.shift();
            context_1.subscription.unsubscribe();
            context_1.buffer = null;
            context_1.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context_2 = contexts.shift();
            this.destination.next(context_2.buffer);
            context_2.subscription.unsubscribe();
            context_2.buffer = null;
            context_2.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscription,_innerSubscribe PURE_IMPORTS_END */
function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
var BufferWhenOperator = /*@__PURE__*/ (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
var BufferWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.subscribing = false;
        _this.openBuffer();
        return _this;
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = undefined;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function () {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        }
        catch (err) {
            return this.error(err);
        }
        closingSubscription = new Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
        this.subscribing = false;
    };
    return BufferWhenSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
var CatchOperator = /*@__PURE__*/ (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
var CatchSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
    }
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            var innerSubscriber = new SimpleInnerSubscriber(this);
            this.add(innerSubscriber);
            var innerSubscription = innerSubscribe(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                this.add(innerSubscription);
            }
        }
    };
    return CatchSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */
function combineAll(project) {
    return function (source) { return source.lift(new CombineLatestOperator(project)); };
}

/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(from([source].concat(observables)), new CombineLatestOperator(project)); };
}

/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(concat$1.apply(void 0, [source].concat(observables))); };
}

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function concatMap(project, resultSelector) {
    return mergeMap(project, resultSelector, 1);
}

/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */
function concatMapTo(innerObservable, resultSelector) {
    return concatMap(function () { return innerObservable; }, resultSelector);
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function count(predicate) {
    return function (source) { return source.lift(new CountOperator(predicate, source)); };
}
var CountOperator = /*@__PURE__*/ (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
var CountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.count = 0;
        _this.index = 0;
        return _this;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function debounce(durationSelector) {
    return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
}
var DebounceOperator = /*@__PURE__*/ (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
var DebounceSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
        if (subscription && !subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = undefined;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = undefined;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$1, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber));
function dispatchNext$1(subscriber) {
    subscriber.debouncedNext();
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    var absoluteDelay = isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
}
var DelayOperator = /*@__PURE__*/ (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
var DelaySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.delay = delay;
        _this.scheduler = scheduler;
        _this.queue = [];
        _this.active = false;
        _this.errored = false;
        return _this;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        var destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification.createComplete());
        this.unsubscribe();
    };
    return DelaySubscriber;
}(Subscriber));
var DelayMessage = /*@__PURE__*/ (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
var DelayWhenOperator = /*@__PURE__*/ (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
var DelayWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        var index = this.index++;
        try {
            var delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            var destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber));
var SubscriptionDelayObservable = /*@__PURE__*/ (function (_super) {
    __extends$1(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable));
var SubscriptionDelaySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.unsubscribe();
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
var DeMaterializeOperator = /*@__PURE__*/ (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
var DeMaterializeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function distinct(keySelector, flushes) {
    return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
}
var DistinctOperator = /*@__PURE__*/ (function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
var DistinctSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.values = new Set();
        if (flushes) {
            _this.add(innerSubscribe(flushes, new SimpleInnerSubscriber(_this)));
        }
        return _this;
    }
    DistinctSubscriber.prototype.notifyNext = function () {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}

/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
    }
    return function (source) {
        return source.lift(new ThrowIfEmptyOperator(errorFactory));
    };
}
var ThrowIfEmptyOperator = /*@__PURE__*/ (function () {
    function ThrowIfEmptyOperator(errorFactory) {
        this.errorFactory = errorFactory;
    }
    ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
    };
    return ThrowIfEmptyOperator;
}());
var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ThrowIfEmptySubscriber, _super);
    function ThrowIfEmptySubscriber(destination, errorFactory) {
        var _this = _super.call(this, destination) || this;
        _this.errorFactory = errorFactory;
        _this.hasValue = false;
        return _this;
    }
    ThrowIfEmptySubscriber.prototype._next = function (value) {
        this.hasValue = true;
        this.destination.next(value);
    };
    ThrowIfEmptySubscriber.prototype._complete = function () {
        if (!this.hasValue) {
            var err = void 0;
            try {
                err = this.errorFactory();
            }
            catch (e) {
                err = e;
            }
            this.destination.error(err);
        }
        else {
            return this.destination.complete();
        }
    };
    return ThrowIfEmptySubscriber;
}(Subscriber));
function defaultErrorFactory() {
    return new EmptyError();
}

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function take(count) {
    return function (source) {
        if (count === 0) {
            return empty();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
var TakeOperator = /*@__PURE__*/ (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
var TakeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(filter(function (v, i) { return i === index; }), take(1), hasDefaultValue
            ? defaultIfEmpty(defaultValue)
            : throwIfEmpty(function () { return new ArgumentOutOfRangeError(); }));
    };
}

/** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */
function endWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return function (source) { return concat$1(source, of.apply(void 0, array)); };
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function every(predicate, thisArg) {
    return function (source) { return source.lift(new EveryOperator(predicate, thisArg, source)); };
}
var EveryOperator = /*@__PURE__*/ (function () {
    function EveryOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator.prototype.call = function (observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
}());
var EverySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.source = source;
        _this.index = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber.prototype._next = function (value) {
        var result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) {
            this.notifyComplete(false);
        }
    };
    EverySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return EverySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function exhaust() {
    return function (source) { return source.lift(new SwitchFirstOperator()); };
}
var SwitchFirstOperator = /*@__PURE__*/ (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
var SwitchFirstSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasCompleted = false;
        _this.hasSubscription = false;
        return _this;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(innerSubscribe(value, new SimpleInnerSubscriber(this)));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function () {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function (source) { return source.pipe(exhaustMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) {
        return source.lift(new ExhaustMapOperator(project));
    };
}
var ExhaustMapOperator = /*@__PURE__*/ (function () {
    function ExhaustMapOperator(project) {
        this.project = project;
    }
    ExhaustMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    };
    return ExhaustMapOperator;
}());
var ExhaustMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ExhaustMapSubscriber, _super);
    function ExhaustMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.hasSubscription = false;
        _this.hasCompleted = false;
        _this.index = 0;
        return _this;
    }
    ExhaustMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    ExhaustMapSubscriber.prototype.tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    };
    ExhaustMapSubscriber.prototype._innerSub = function (result) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    ExhaustMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    ExhaustMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    ExhaustMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    ExhaustMapSubscriber.prototype.notifyComplete = function () {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return ExhaustMapSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
}
var ExpandOperator = /*@__PURE__*/ (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
var ExpandSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.scheduler = scheduler;
        _this.index = 0;
        _this.active = 0;
        _this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            _this.buffer = [];
        }
        return _this;
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                var project = this.project;
                var result = project(value, index);
                if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                }
                else {
                    var state = { subscriber: this, result: result, value: value, index: index };
                    var destination_1 = this.destination;
                    destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            }
            catch (e) {
                destination.error(e);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        var destination = this.destination;
        destination.add(innerSubscribe(result, new SimpleInnerSubscriber(this)));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    ExpandSubscriber.prototype.notifyNext = function (innerValue) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
function finalize(callback) {
    return function (source) { return source.lift(new FinallyOperator(callback)); };
}
var FinallyOperator = /*@__PURE__*/ (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
var FinallySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new Subscription(callback));
        return _this;
    }
    return FinallySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
}
var FindValueOperator = /*@__PURE__*/ (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
var FindValueSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.yieldIndex = yieldIndex;
        _this.thisArg = thisArg;
        _this.index = 0;
        return _this;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */
function findIndex(predicate, thisArg) {
    return function (source) { return source.lift(new FindValueOperator(predicate, source, true, thisArg)); };
}

/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
var IgnoreElementsOperator = /*@__PURE__*/ (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
var IgnoreElementsSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
    };
    return IgnoreElementsSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function isEmpty() {
    return function (source) { return source.lift(new IsEmptyOperator()); };
}
var IsEmptyOperator = /*@__PURE__*/ (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
var IsEmptySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
var TakeLastOperator = /*@__PURE__*/ (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
var MapToOperator = /*@__PURE__*/ (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
var MapToSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
var MaterializeOperator = /*@__PURE__*/ (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
var MaterializeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = /*@__PURE__*/ (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
            hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe(scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast(1))(source);
    };
}

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return reduce(max);
}

/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(merge$1.apply(void 0, [source].concat(observables))); };
}

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap(function () { return innerObservable; }, concurrent);
}

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
}
var MergeScanOperator = /*@__PURE__*/ (function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
var MergeScanSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this.acc = acc;
        _this.concurrent = concurrent;
        _this.hasValue = false;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var destination = this.destination;
            var ish = void 0;
            try {
                var accumulator = this.accumulator;
                ish = accumulator(this.acc, value, index);
            }
            catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeScanSubscriber.prototype.notifyNext = function (innerValue) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return reduce(min);
}

/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */
function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        var connectable = Object.create(source, connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
var MulticastOperator = /*@__PURE__*/ (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());

/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_innerSubscribe PURE_IMPORTS_END */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
}
var OnErrorResumeNextOperator = /*@__PURE__*/ (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.nextSources = nextSources;
        return _this;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (!!next) {
            var innerSubscriber = new SimpleInnerSubscriber(this);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = innerSubscribe(next, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                destination.add(innerSubscription);
            }
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function pairwise() {
    return function (source) { return source.lift(new PairwiseOperator()); };
}
var PairwiseOperator = /*@__PURE__*/ (function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
var PairwiseSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasPrev = false;
        return _this;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        var pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    };
    return PairwiseSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */
function partition(predicate, thisArg) {
    return function (source) {
        return [
            filter(predicate, thisArg)(source),
            filter(not(predicate, thisArg))(source)
        ];
    };
}

/** PURE_IMPORTS_START _map PURE_IMPORTS_END */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return map(plucker(properties, length))(source); };
}
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp != null ? currentProp[props[i]] : undefined;
            if (p !== void 0) {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}

/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */
function publish(selector) {
    return selector ?
        multicast(function () { return new Subject(); }, selector) :
        multicast(new Subject());
}

/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */
function publishBehavior(value) {
    return function (source) { return multicast(new BehaviorSubject(value))(source); };
}

/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */
function publishLast() {
    return function (source) { return multicast(new AsyncSubject())(source); };
}

/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new ReplaySubject(bufferSize, windowTime, scheduler);
    return function (source) { return multicast(function () { return subject; }, selector)(source); };
}

/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(race$1.apply(void 0, [source].concat(observables)));
    };
}

/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) {
        if (count === 0) {
            return empty();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
var RepeatOperator = /*@__PURE__*/ (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
var RepeatSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */
function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
var RepeatWhenOperator = /*@__PURE__*/ (function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
var RepeatWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function () {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function () {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next(undefined);
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new Subject();
        var retries;
        try {
            var notifier = this.notifier;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
    };
    return RepeatWhenSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
var RetryOperator = /*@__PURE__*/ (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
var RetrySubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */
function retryWhen(notifier) {
    return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
}
var RetryWhenOperator = /*@__PURE__*/ (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
var RetryWhenSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        return _this;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject();
                try {
                    var notifier = this.notifier;
                    retries = notifier(errors);
                }
                catch (e) {
                    return _super.prototype.error.call(this, e);
                }
                retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
            }
            else {
                this.errors = undefined;
                this.retriesSubscription = undefined;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RetryWhenSubscriber.prototype.notifyNext = function () {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function sample(notifier) {
    return function (source) { return source.lift(new SampleOperator(notifier)); };
}
var SampleOperator = /*@__PURE__*/ (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(innerSubscribe(this.notifier, new SimpleInnerSubscriber(sampleSubscriber)));
        return subscription;
    };
    return SampleOperator;
}());
var SampleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SampleSubscriber, _super);
    function SampleSubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasValue = false;
        return _this;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
}
var SampleTimeOperator = /*@__PURE__*/ (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
var SampleTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.period = period;
        _this.scheduler = scheduler;
        _this.hasValue = false;
        _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
        return _this;
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function sequenceEqual(compareTo, comparator) {
    return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparator)); };
}
var SequenceEqualOperator = /*@__PURE__*/ (function () {
    function SequenceEqualOperator(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
    };
    return SequenceEqualOperator;
}());
var SequenceEqualSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparator) {
        var _this = _super.call(this, destination) || this;
        _this.compareTo = compareTo;
        _this.comparator = comparator;
        _this._a = [];
        _this._b = [];
        _this._oneComplete = false;
        _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
        return _this;
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
        this.unsubscribe();
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            }
            catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype.completeB = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber));
var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        return _this;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
        this.unsubscribe();
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent.completeB();
        this.unsubscribe();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */
function shareSubjectFactory() {
    return new Subject();
}
function share() {
    return function (source) { return refCount()(multicast(shareSubjectFactory)(source)); };
}

/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime: windowTime,
            refCount: false,
            scheduler: scheduler,
        };
    }
    return function (source) { return source.lift(shareReplayOperator(config)); };
}
function shareReplayOperator(_a) {
    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        var innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next: function (value) {
                    subject.next(value);
                },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                },
            });
            if (isComplete) {
                subscription = undefined;
            }
        }
        else {
            innerSub = subject.subscribe(this);
        }
        this.add(function () {
            refCount--;
            innerSub.unsubscribe();
            innerSub = undefined;
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}

/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */
function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
var SingleOperator = /*@__PURE__*/ (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
var SingleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
var SkipOperator = /*@__PURE__*/ (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
var SkipSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */
function skipLast(count) {
    return function (source) { return source.lift(new SkipLastOperator(count)); };
}
var SkipLastOperator = /*@__PURE__*/ (function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            return source.subscribe(new Subscriber(subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
var SkipLastSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        var _this = _super.call(this, destination) || this;
        _this._skipCount = _skipCount;
        _this._count = 0;
        _this._ring = new Array(_skipCount);
        return _this;
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function skipUntil(notifier) {
    return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
}
var SkipUntilOperator = /*@__PURE__*/ (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
    };
    return SkipUntilOperator;
}());
var SkipUntilSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        var _this = _super.call(this, destination) || this;
        _this.hasValue = false;
        var innerSubscriber = new SimpleInnerSubscriber(_this);
        _this.add(innerSubscriber);
        _this.innerSubscription = innerSubscriber;
        var innerSubscription = innerSubscribe(notifier, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            _this.add(innerSubscription);
            _this.innerSubscription = innerSubscription;
        }
        return _this;
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function () {
        this.hasValue = true;
        if (this.innerSubscription) {
            this.innerSubscription.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
    };
    return SkipUntilSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skipWhile(predicate) {
    return function (source) { return source.lift(new SkipWhileOperator(predicate)); };
}
var SkipWhileOperator = /*@__PURE__*/ (function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
var SkipWhileSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.skipping = true;
        _this.index = 0;
        return _this;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler(scheduler)) {
        array.pop();
        return function (source) { return concat$1(array, source, scheduler); };
    }
    else {
        return function (source) { return concat$1(array, source); };
    }
}

/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */
var SubscribeOnObservable = /*@__PURE__*/ (function (_super) {
    __extends$1(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = asap;
        }
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.delayTime = delayTime;
        _this.scheduler = scheduler;
        if (!isNumeric(delayTime) || delayTime < 0) {
            _this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            _this.scheduler = asap;
        }
        return _this;
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = asap;
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable));

/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());

/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(switchMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) { return source.lift(new SwitchMapOperator(project)); };
}
var SwitchMapOperator = /*@__PURE__*/ (function () {
    function SwitchMapOperator(project) {
        this.project = project;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    };
    return SwitchMapOperator;
}());
var SwitchMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = innerSubscribe(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
            destination.add(this.innerSubscription);
        }
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
        this.unsubscribe();
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = undefined;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function () {
        this.innerSubscription = undefined;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */
function switchAll() {
    return switchMap(identity);
}

/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */
function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? switchMap(function () { return innerObservable; }, resultSelector) : switchMap(function () { return innerObservable; });
}

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
var TakeUntilOperator = /*@__PURE__*/ (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = innerSubscribe(this.notifier, new SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function () {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return function (source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ (function () {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}());
var TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
var TapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = noop;
        _this._tapError = noop;
        _this._tapComplete = noop;
        _this._tapError = error || noop;
        _this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || noop;
            _this._tapError = observerOrNext.error || noop;
            _this._tapComplete = observerOrNext.complete || noop;
        }
        return _this;
    }
    TapSubscriber.prototype._next = function (value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function (err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function () {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing)); };
}
var ThrottleOperator = /*@__PURE__*/ (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = undefined;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = innerSubscribe(duration, new SimpleInnerSubscriber(this)));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = undefined;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function () {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var ThrottleTimeOperator = /*@__PURE__*/ (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}

/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) {
        return defer(function () {
            return source.pipe(scan(function (_a, value) {
                var current = _a.current;
                return ({ value: value, current: scheduler.now(), last: current });
            }, { current: scheduler.now(), value: undefined, last: undefined }), map(function (_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = /*@__PURE__*/ (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_innerSubscribe PURE_IMPORTS_END */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) {
        var absoluteTimeout = isDate(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator = /*@__PURE__*/ (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
var TimeoutWithSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.absoluteTimeout = absoluteTimeout;
        _this.waitFor = waitFor;
        _this.withObservable = withObservable;
        _this.scheduler = scheduler;
        _this.scheduleTimeout();
        return _this;
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(innerSubscribe(withObservable, new SimpleInnerSubscriber(subscriber)));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = undefined;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}

/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return map(function (value) { return new Timestamp(value, scheduler.now()); });
}
var Timestamp = /*@__PURE__*/ (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return reduce(toArrayReducer, []);
}

/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */
function window$1(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator$1(windowBoundaries));
    };
}
var WindowOperator$1 = /*@__PURE__*/ (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber$1(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(innerSubscribe(this.windowBoundaries, new SimpleInnerSubscriber(windowSubscriber)));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
var WindowSubscriber$1 = /*@__PURE__*/ (function (_super) {
    __extends$1(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.window = new Subject();
        destination.next(_this.window);
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function () {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function () {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(SimpleOuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
var WindowCountOperator = /*@__PURE__*/ (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
var WindowCountSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowSize = windowSize;
        _this.startWindowEvery = startWindowEvery;
        _this.windows = [new Subject()];
        _this.count = 0;
        destination.next(_this.windows[0]);
        return _this;
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function windowTime(windowTimeSpan) {
    var scheduler = async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric(arguments[2])) {
        maxWindowSize = Number(arguments[2]);
    }
    if (isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric(arguments[1])) {
        windowCreationInterval = Number(arguments[1]);
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator = /*@__PURE__*/ (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = /*@__PURE__*/ (function (_super) {
    __extends$1(CountedSubject, _super);
    function CountedSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numberOfNextedValues = 0;
        return _this;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(Subject));
var WindowTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowTimeSpan = windowTimeSpan;
        _this.windowCreationInterval = windowCreationInterval;
        _this.maxWindowSize = maxWindowSize;
        _this.scheduler = scheduler;
        _this.windows = [];
        var window = _this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: _this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
            _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
            _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
        return _this;
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}

/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowToggle(openings, closingSelector) {
    return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
}
var WindowToggleOperator = /*@__PURE__*/ (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
var WindowToggleSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
        return _this;
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_1 = contexts[index];
                context_1.window.error(err);
                context_1.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_2 = contexts[index];
                context_2.window.complete();
                context_2.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context_3 = contexts[index];
                context_3.window.unsubscribe();
                context_3.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingNotifier = void 0;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector(innerValue);
            }
            catch (e) {
                return this.error(e);
            }
            var window_1 = new Subject();
            var subscription = new Subscription();
            var context_4 = { window: window_1, subscription: subscription };
            this.contexts.push(context_4);
            var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
            if (innerSubscription.closed) {
                this.closeWindow(this.contexts.length - 1);
            }
            else {
                innerSubscription.context = context_4;
                subscription.add(innerSubscription);
            }
            this.destination.next(window_1);
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
var WindowOperator = /*@__PURE__*/ (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
var WindowSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.closingSelector = closingSelector;
        _this.openWindow();
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function (_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) {
            innerSub = null;
        }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject();
        this.destination.next(window);
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        }
        catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
    };
    return WindowSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
    __extends$1(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            _this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            _this.add(subscribeToResult(_this, observable, undefined, i));
        }
        return _this;
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber));

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zip$1.apply(void 0, [source].concat(observables)));
    };
}

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zipAll(project) {
    return function (source) { return source.lift(new ZipOperator(project)); };
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */

var operators = /*#__PURE__*/Object.freeze({
    __proto__: null,
    audit: audit,
    auditTime: auditTime,
    buffer: buffer,
    bufferCount: bufferCount,
    bufferTime: bufferTime,
    bufferToggle: bufferToggle,
    bufferWhen: bufferWhen,
    catchError: catchError,
    combineAll: combineAll,
    combineLatest: combineLatest,
    concat: concat,
    concatAll: concatAll,
    concatMap: concatMap,
    concatMapTo: concatMapTo,
    count: count,
    debounce: debounce,
    debounceTime: debounceTime,
    defaultIfEmpty: defaultIfEmpty,
    delay: delay,
    delayWhen: delayWhen,
    dematerialize: dematerialize,
    distinct: distinct,
    distinctUntilChanged: distinctUntilChanged,
    distinctUntilKeyChanged: distinctUntilKeyChanged,
    elementAt: elementAt,
    endWith: endWith,
    every: every,
    exhaust: exhaust,
    exhaustMap: exhaustMap,
    expand: expand,
    filter: filter,
    finalize: finalize,
    find: find,
    findIndex: findIndex,
    first: first,
    groupBy: groupBy,
    ignoreElements: ignoreElements,
    isEmpty: isEmpty,
    last: last,
    map: map,
    mapTo: mapTo,
    materialize: materialize,
    max: max,
    merge: merge,
    mergeAll: mergeAll,
    mergeMap: mergeMap,
    flatMap: flatMap,
    mergeMapTo: mergeMapTo,
    mergeScan: mergeScan,
    min: min,
    multicast: multicast,
    observeOn: observeOn,
    onErrorResumeNext: onErrorResumeNext,
    pairwise: pairwise,
    partition: partition,
    pluck: pluck,
    publish: publish,
    publishBehavior: publishBehavior,
    publishLast: publishLast,
    publishReplay: publishReplay,
    race: race,
    reduce: reduce,
    repeat: repeat,
    repeatWhen: repeatWhen,
    retry: retry,
    retryWhen: retryWhen,
    refCount: refCount,
    sample: sample,
    sampleTime: sampleTime,
    scan: scan,
    sequenceEqual: sequenceEqual,
    share: share,
    shareReplay: shareReplay,
    single: single,
    skip: skip,
    skipLast: skipLast,
    skipUntil: skipUntil,
    skipWhile: skipWhile,
    startWith: startWith,
    subscribeOn: subscribeOn,
    switchAll: switchAll,
    switchMap: switchMap,
    switchMapTo: switchMapTo,
    take: take,
    takeLast: takeLast,
    takeUntil: takeUntil,
    takeWhile: takeWhile,
    tap: tap,
    throttle: throttle,
    throttleTime: throttleTime,
    throwIfEmpty: throwIfEmpty,
    timeInterval: timeInterval,
    timeout: timeout,
    timeoutWith: timeoutWith,
    timestamp: timestamp,
    toArray: toArray,
    window: window$1,
    windowCount: windowCount,
    windowTime: windowTime,
    windowToggle: windowToggle,
    windowWhen: windowWhen,
    withLatestFrom: withLatestFrom,
    zip: zip,
    zipAll: zipAll
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(operators);

var WalletSDKConnection$1 = {};

var ClientMessage = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(ClientMessage, "__esModule", { value: true });
ClientMessage.ClientMessagePublishEvent = ClientMessage.ClientMessageSetSessionConfig = ClientMessage.ClientMessageGetSessionConfig = ClientMessage.ClientMessageIsLinked = ClientMessage.ClientMessageHostSession = void 0;
function ClientMessageHostSession(params) {
    return Object.assign({ type: "HostSession" }, params);
}
ClientMessage.ClientMessageHostSession = ClientMessageHostSession;
function ClientMessageIsLinked(params) {
    return Object.assign({ type: "IsLinked" }, params);
}
ClientMessage.ClientMessageIsLinked = ClientMessageIsLinked;
function ClientMessageGetSessionConfig(params) {
    return Object.assign({ type: "GetSessionConfig" }, params);
}
ClientMessage.ClientMessageGetSessionConfig = ClientMessageGetSessionConfig;
function ClientMessageSetSessionConfig(params) {
    return Object.assign({ type: "SetSessionConfig" }, params);
}
ClientMessage.ClientMessageSetSessionConfig = ClientMessageSetSessionConfig;
function ClientMessagePublishEvent(params) {
    return Object.assign({ type: "PublishEvent" }, params);
}
ClientMessage.ClientMessagePublishEvent = ClientMessagePublishEvent;

var RxWebSocket = {};

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RxWebSocket = exports.ConnectionState = void 0;
	const rxjs_1 = require$$1;
	const operators_1 = require$$2;
	var ConnectionState;
	(function (ConnectionState) {
	    ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
	    ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
	    ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
	})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
	/**
	 * Rx-ified WebSocket
	 */
	class RxWebSocket {
	    /**
	     * Constructor
	     * @param url WebSocket server URL
	     * @param [WebSocketClass] Custom WebSocket implementation
	     */
	    constructor(url, WebSocketClass = WebSocket) {
	        this.WebSocketClass = WebSocketClass;
	        this.webSocket = null;
	        this.connectionStateSubject = new rxjs_1.BehaviorSubject(ConnectionState.DISCONNECTED);
	        this.incomingDataSubject = new rxjs_1.Subject();
	        this.url = url.replace(/^http/, "ws");
	    }
	    /**
	     * Make a websocket connection
	     * @returns an Observable that completes when connected
	     */
	    connect() {
	        if (this.webSocket) {
	            return (0, rxjs_1.throwError)(new Error("webSocket object is not null"));
	        }
	        return new rxjs_1.Observable(obs => {
	            let webSocket;
	            try {
	                this.webSocket = webSocket = new this.WebSocketClass(this.url);
	            }
	            catch (err) {
	                obs.error(err);
	                return;
	            }
	            this.connectionStateSubject.next(ConnectionState.CONNECTING);
	            webSocket.onclose = evt => {
	                this.clearWebSocket();
	                obs.error(new Error(`websocket error ${evt.code}: ${evt.reason}`));
	                this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
	            };
	            webSocket.onopen = _ => {
	                obs.next();
	                obs.complete();
	                this.connectionStateSubject.next(ConnectionState.CONNECTED);
	            };
	            webSocket.onmessage = evt => {
	                this.incomingDataSubject.next(evt.data);
	            };
	        }).pipe((0, operators_1.take)(1));
	    }
	    /**
	     * Disconnect from server
	     */
	    disconnect() {
	        const { webSocket } = this;
	        if (!webSocket) {
	            return;
	        }
	        this.clearWebSocket();
	        this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
	        try {
	            webSocket.close();
	        }
	        catch (_a) { }
	    }
	    /**
	     * Emit current connection state and subsequent changes
	     * @returns an Observable for the connection state
	     */
	    get connectionState$() {
	        return this.connectionStateSubject.asObservable();
	    }
	    /**
	     * Emit incoming data from server
	     * @returns an Observable for the data received
	     */
	    get incomingData$() {
	        return this.incomingDataSubject.asObservable();
	    }
	    /**
	     * Emit incoming JSON data from server. non-JSON data are ignored
	     * @returns an Observable for parsed JSON data
	     */
	    get incomingJSONData$() {
	        return this.incomingData$.pipe((0, operators_1.flatMap)(m => {
	            let j;
	            try {
	                j = JSON.parse(m);
	            }
	            catch (err) {
	                return (0, rxjs_1.empty)();
	            }
	            return (0, rxjs_1.of)(j);
	        }));
	    }
	    /**
	     * Send data to server
	     * @param data text to send
	     */
	    sendData(data) {
	        const { webSocket } = this;
	        if (!webSocket) {
	            throw new Error("websocket is not connected");
	        }
	        webSocket.send(data);
	    }
	    clearWebSocket() {
	        const { webSocket } = this;
	        if (!webSocket) {
	            return;
	        }
	        this.webSocket = null;
	        webSocket.onclose = null;
	        webSocket.onerror = null;
	        webSocket.onmessage = null;
	        webSocket.onopen = null;
	    }
	}
	exports.RxWebSocket = RxWebSocket; 
} (RxWebSocket));

var ServerMessage = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(ServerMessage, "__esModule", { value: true });
ServerMessage.isServerMessageFail = void 0;
function isServerMessageFail(msg) {
    return (msg &&
        msg.type === "Fail" &&
        typeof msg.id === "number" &&
        typeof msg.sessionId === "string" &&
        typeof msg.error === "string");
}
ServerMessage.isServerMessageFail = isServerMessageFail;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(WalletSDKConnection$1, "__esModule", { value: true });
WalletSDKConnection$1.WalletSDKConnection = void 0;
const rxjs_1$1 = require$$1;
const operators_1$1 = require$$2;
const Session_1$1 = Session$1;
const types_1$1 = types$1;
const ClientMessage_1 = ClientMessage;
const DiagnosticLogger_1$1 = DiagnosticLogger;
const RxWebSocket_1 = RxWebSocket;
const ServerMessage_1 = ServerMessage;
const HEARTBEAT_INTERVAL = 10000;
const REQUEST_TIMEOUT = 60000;
/**
 * Coinbase Wallet Connection
 */
class WalletSDKConnection {
    /**
     * Constructor
     * @param sessionId Session ID
     * @param sessionKey Session Key
     * @param linkAPIUrl Coinbase Wallet link server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(sessionId, sessionKey, linkAPIUrl, diagnostic, WebSocketClass = WebSocket) {
        this.sessionId = sessionId;
        this.sessionKey = sessionKey;
        this.diagnostic = diagnostic;
        this.subscriptions = new rxjs_1$1.Subscription();
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = (0, types_1$1.IntNumber)(1);
        this.connectedSubject = new rxjs_1$1.BehaviorSubject(false);
        this.linkedSubject = new rxjs_1$1.BehaviorSubject(false);
        this.sessionConfigSubject = new rxjs_1$1.ReplaySubject(1);
        const ws = new RxWebSocket_1.RxWebSocket(linkAPIUrl + "/rpc", WebSocketClass);
        this.ws = ws;
        // attempt to reconnect every 5 seconds when disconnected
        this.subscriptions.add(ws.connectionState$
            .pipe((0, operators_1$1.tap)(state => {
            var _a;
            return (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.CONNECTED_STATE_CHANGE, {
                state,
                sessionIdHash: Session_1$1.Session.hash(sessionId),
            });
        }), 
        // ignore initial DISCONNECTED state
        (0, operators_1$1.skip)(1), 
        // if DISCONNECTED and not destroyed
        (0, operators_1$1.filter)(cs => cs === RxWebSocket_1.ConnectionState.DISCONNECTED && !this.destroyed), 
        // wait 5 seconds
        (0, operators_1$1.delay)(5000), 
        // check whether it's destroyed again
        (0, operators_1$1.filter)(_ => !this.destroyed), 
        // reconnect
        (0, operators_1$1.flatMap)(_ => ws.connect()), (0, operators_1$1.retry)())
            .subscribe());
        // perform authentication upon connection
        this.subscriptions.add(ws.connectionState$
            .pipe(
        // ignore initial DISCONNECTED and CONNECTING states
        (0, operators_1$1.skip)(2), (0, operators_1$1.switchMap)(cs => (0, rxjs_1$1.iif)(() => cs === RxWebSocket_1.ConnectionState.CONNECTED, 
        // if CONNECTED, authenticate, and then check link status
        this.authenticate().pipe((0, operators_1$1.tap)(_ => this.sendIsLinked()), (0, operators_1$1.tap)(_ => this.sendGetSessionConfig()), (0, operators_1$1.map)(_ => true)), 
        // if not CONNECTED, emit false immediately
        (0, rxjs_1$1.of)(false))), (0, operators_1$1.distinctUntilChanged)(), (0, operators_1$1.catchError)(_ => (0, rxjs_1$1.of)(false)))
            .subscribe(connected => this.connectedSubject.next(connected)));
        // send heartbeat every n seconds while connected
        this.subscriptions.add(ws.connectionState$
            .pipe(
        // ignore initial DISCONNECTED state
        (0, operators_1$1.skip)(1), (0, operators_1$1.switchMap)(cs => (0, rxjs_1$1.iif)(() => cs === RxWebSocket_1.ConnectionState.CONNECTED, 
        // if CONNECTED, start the heartbeat timer
        (0, rxjs_1$1.timer)(0, HEARTBEAT_INTERVAL))))
            .subscribe(i => 
        // first timer event updates lastHeartbeat timestamp
        // subsequent calls send heartbeat message
        i === 0 ? this.updateLastHeartbeat() : this.heartbeat()));
        // handle server's heartbeat responses
        this.subscriptions.add(ws.incomingData$
            .pipe((0, operators_1$1.filter)(m => m === "h"))
            .subscribe(_ => this.updateLastHeartbeat()));
        // handle link status updates
        this.subscriptions.add(ws.incomingJSONData$
            .pipe((0, operators_1$1.filter)(m => ["IsLinkedOK", "Linked"].includes(m.type)))
            .subscribe(m => {
            var _a;
            const msg = m;
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.LINKED, {
                sessionIdHash: Session_1$1.Session.hash(sessionId),
                linked: msg.linked,
                type: m.type,
                onlineGuests: msg.onlineGuests,
            });
            this.linkedSubject.next(msg.linked || msg.onlineGuests > 0);
        }));
        // handle session config updates
        this.subscriptions.add(ws.incomingJSONData$
            .pipe((0, operators_1$1.filter)(m => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(m.type)))
            .subscribe(m => {
            var _a;
            const msg = m;
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Session_1$1.Session.hash(sessionId),
                metadata_keys: msg && msg.metadata ? Object.keys(msg.metadata) : undefined,
            });
            this.sessionConfigSubject.next({
                webhookId: msg.webhookId,
                webhookUrl: msg.webhookUrl,
                metadata: msg.metadata,
            });
        }));
    }
    /**
     * Make a connection to the server
     */
    connect() {
        var _a;
        if (this.destroyed) {
            throw new Error("instance is destroyed");
        }
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Session_1$1.Session.hash(this.sessionId),
        });
        this.ws.connect().subscribe();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletSDKConnection
     */
    destroy() {
        var _a;
        this.subscriptions.unsubscribe();
        this.ws.disconnect();
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.DISCONNECTED, {
            sessionIdHash: Session_1$1.Session.hash(this.sessionId),
        });
        this.destroyed = true;
    }
    get isDestroyed() {
        return this.destroyed;
    }
    /**
     * Emit true if connected and authenticated, else false
     * @returns an Observable
     */
    get connected$() {
        return this.connectedSubject.asObservable();
    }
    /**
     * Emit once connected
     * @returns an Observable
     */
    get onceConnected$() {
        return this.connected$.pipe((0, operators_1$1.filter)(v => v), (0, operators_1$1.take)(1), (0, operators_1$1.map)(() => void 0));
    }
    /**
     * Emit true if linked (a guest has joined before)
     * @returns an Observable
     */
    get linked$() {
        return this.linkedSubject.asObservable();
    }
    /**
     * Emit once when linked
     * @returns an Observable
     */
    get onceLinked$() {
        return this.linked$.pipe((0, operators_1$1.filter)(v => v), (0, operators_1$1.take)(1), (0, operators_1$1.map)(() => void 0));
    }
    /**
     * Emit current session config if available, and subsequent updates
     * @returns an Observable for the session config
     */
    get sessionConfig$() {
        return this.sessionConfigSubject.asObservable();
    }
    /**
     * Emit incoming Event messages
     * @returns an Observable for the messages
     */
    get incomingEvent$() {
        return this.ws.incomingJSONData$.pipe((0, operators_1$1.filter)(m => {
            if (m.type !== "Event") {
                return false;
            }
            const sme = m;
            return (typeof sme.sessionId === "string" &&
                typeof sme.eventId === "string" &&
                typeof sme.event === "string" &&
                typeof sme.data === "string");
        }), (0, operators_1$1.map)(m => m));
    }
    /**
     * Set session metadata in SessionConfig object
     * @param key
     * @param value
     * @returns an Observable that completes when successful
     */
    setSessionMetadata(key, value) {
        const message = (0, ClientMessage_1.ClientMessageSetSessionConfig)({
            id: (0, types_1$1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            metadata: { [key]: value },
        });
        return this.onceConnected$.pipe((0, operators_1$1.flatMap)(_ => this.makeRequest(message)), (0, operators_1$1.map)(res => {
            if ((0, ServerMessage_1.isServerMessageFail)(res)) {
                throw new Error(res.error || "failed to set session metadata");
            }
        }));
    }
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param data event data
     * @param callWebhook whether the webhook should be invoked
     * @returns an Observable that emits event ID when successful
     */
    publishEvent(event, data, callWebhook = false) {
        const message = (0, ClientMessage_1.ClientMessagePublishEvent)({
            id: (0, types_1$1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            event,
            data,
            callWebhook,
        });
        return this.onceLinked$.pipe((0, operators_1$1.flatMap)(_ => this.makeRequest(message)), (0, operators_1$1.map)(res => {
            if ((0, ServerMessage_1.isServerMessageFail)(res)) {
                throw new Error(res.error || "failed to publish event");
            }
            return res.eventId;
        }));
    }
    sendData(message) {
        this.ws.sendData(JSON.stringify(message));
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
            this.ws.disconnect();
            return;
        }
        try {
            this.ws.sendData("h");
        }
        catch (_a) { }
    }
    makeRequest(message, timeout = REQUEST_TIMEOUT) {
        const reqId = message.id;
        try {
            this.sendData(message);
        }
        catch (err) {
            return (0, rxjs_1$1.throwError)(err);
        }
        // await server message with corresponding id
        return this.ws.incomingJSONData$.pipe((0, operators_1$1.timeoutWith)(timeout, (0, rxjs_1$1.throwError)(new Error(`request ${reqId} timed out`))), (0, operators_1$1.filter)(m => m.id === reqId), (0, operators_1$1.take)(1));
    }
    authenticate() {
        const msg = (0, ClientMessage_1.ClientMessageHostSession)({
            id: (0, types_1$1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            sessionKey: this.sessionKey,
        });
        return this.makeRequest(msg).pipe((0, operators_1$1.map)(res => {
            if ((0, ServerMessage_1.isServerMessageFail)(res)) {
                throw new Error(res.error || "failed to authentcate");
            }
        }));
    }
    sendIsLinked() {
        const msg = (0, ClientMessage_1.ClientMessageIsLinked)({
            id: (0, types_1$1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
        });
        this.sendData(msg);
    }
    sendGetSessionConfig() {
        const msg = (0, ClientMessage_1.ClientMessageGetSessionConfig)({
            id: (0, types_1$1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
        });
        this.sendData(msg);
    }
}
WalletSDKConnection$1.WalletSDKConnection = WalletSDKConnection;

var aes256gcm$1 = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(aes256gcm$1, "__esModule", { value: true });
aes256gcm$1.decrypt = aes256gcm$1.encrypt = void 0;
const util_1$3 = util$3;
/**
 *
 * @param plainText string to be encrypted
 * @param secret hex representation of 32-byte secret
 * returns hex string representation of bytes in the order: initialization vector (iv),
 * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
 * encrypted plainText.
 */
async function encrypt(plainText, secret) {
    if (secret.length !== 64)
        throw Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", (0, util_1$3.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
    const enc = new TextEncoder();
    // Will return encrypted plainText with auth tag (ie MAC or checksum) appended at the end
    const encryptedResult = await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: ivBytes,
    }, secretKey, enc.encode(plainText));
    const tagLength = 16;
    const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    const authTagBytes = new Uint8Array(authTag);
    const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    const concatted = new Uint8Array([
        ...ivBytes,
        ...authTagBytes,
        ...encryptedPlaintextBytes,
    ]);
    return (0, util_1$3.uint8ArrayToHex)(concatted);
}
aes256gcm$1.encrypt = encrypt;
/**
 *
 * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
 * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
 * @param secret hex string representation of 32-byte secret
 */
function decrypt(cipherText, secret) {
    if (secret.length !== 64)
        throw Error(`secret must be 256 bits`);
    return new Promise((resolve, reject) => {
        void (async function () {
            const secretKey = await crypto.subtle.importKey("raw", (0, util_1$3.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
            const encrypted = (0, util_1$3.hexStringToUint8Array)(cipherText);
            const ivBytes = encrypted.slice(0, 12);
            const authTagBytes = encrypted.slice(12, 28);
            const encryptedPlaintextBytes = encrypted.slice(28);
            const concattedBytes = new Uint8Array([
                ...encryptedPlaintextBytes,
                ...authTagBytes,
            ]);
            const algo = {
                name: "AES-GCM",
                iv: new Uint8Array(ivBytes),
            };
            try {
                const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
                const decoder = new TextDecoder();
                resolve(decoder.decode(decrypted));
            }
            catch (err) {
                reject(err);
            }
        })();
    });
}
aes256gcm$1.decrypt = decrypt;

var Web3RequestCanceledMessage$1 = {};

var RelayMessage = {};

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RelayMessageType = void 0;
	(function (RelayMessageType) {
	    RelayMessageType["SESSION_ID_REQUEST"] = "SESSION_ID_REQUEST";
	    RelayMessageType["SESSION_ID_RESPONSE"] = "SESSION_ID_RESPONSE";
	    RelayMessageType["LINKED"] = "LINKED";
	    RelayMessageType["UNLINKED"] = "UNLINKED";
	    RelayMessageType["WEB3_REQUEST"] = "WEB3_REQUEST";
	    RelayMessageType["WEB3_REQUEST_CANCELED"] = "WEB3_REQUEST_CANCELED";
	    RelayMessageType["WEB3_RESPONSE"] = "WEB3_RESPONSE";
	})(exports.RelayMessageType || (exports.RelayMessageType = {})); 
} (RelayMessage));

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(Web3RequestCanceledMessage$1, "__esModule", { value: true });
Web3RequestCanceledMessage$1.Web3RequestCanceledMessage = void 0;
const RelayMessage_1$2 = RelayMessage;
function Web3RequestCanceledMessage(id) {
    return { type: RelayMessage_1$2.RelayMessageType.WEB3_REQUEST_CANCELED, id };
}
Web3RequestCanceledMessage$1.Web3RequestCanceledMessage = Web3RequestCanceledMessage;

var Web3RequestMessage$1 = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(Web3RequestMessage$1, "__esModule", { value: true });
Web3RequestMessage$1.Web3RequestMessage = void 0;
const RelayMessage_1$1 = RelayMessage;
function Web3RequestMessage(params) {
    return Object.assign({ type: RelayMessage_1$1.RelayMessageType.WEB3_REQUEST }, params);
}
Web3RequestMessage$1.Web3RequestMessage = Web3RequestMessage;

var Web3ResponseMessage$1 = {};

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(Web3ResponseMessage$1, "__esModule", { value: true });
Web3ResponseMessage$1.isWeb3ResponseMessage = Web3ResponseMessage$1.Web3ResponseMessage = void 0;
const RelayMessage_1 = RelayMessage;
function Web3ResponseMessage(params) {
    return Object.assign({ type: RelayMessage_1.RelayMessageType.WEB3_RESPONSE }, params);
}
Web3ResponseMessage$1.Web3ResponseMessage = Web3ResponseMessage;
function isWeb3ResponseMessage(msg) {
    return msg && msg.type === RelayMessage_1.RelayMessageType.WEB3_RESPONSE;
}
Web3ResponseMessage$1.isWeb3ResponseMessage = isWeb3ResponseMessage;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(WalletSDKRelay$1, "__esModule", { value: true });
WalletSDKRelay$1.WalletSDKRelay = void 0;
const bind_decorator_1 = __importDefault(bindDecorator);
const rxjs_1 = require$$1;
const operators_1 = require$$2;
const DiagnosticLogger_1 = DiagnosticLogger;
const WalletSDKConnection_1 = WalletSDKConnection$1;
const errors_1 = errors$1;
const types_1 = types$1;
const util_1$2 = util$3;
const aes256gcm = __importStar(aes256gcm$1);
const Session_1 = Session$1;
const WalletSDKRelayAbstract_1 = WalletSDKRelayAbstract$1;
const Web3Method_1 = Web3Method;
const Web3RequestCanceledMessage_1 = Web3RequestCanceledMessage$1;
const Web3RequestMessage_1 = Web3RequestMessage$1;
const Web3Response_1 = Web3Response;
const Web3ResponseMessage_1 = Web3ResponseMessage$1;
class WalletSDKRelay extends WalletSDKRelayAbstract_1.WalletSDKRelayAbstract {
    constructor(options) {
        var _a;
        super();
        this.accountsCallback = null;
        this.chainCallback = null;
        this.dappDefaultChainSubject = new rxjs_1.BehaviorSubject(1);
        this.dappDefaultChain = 1;
        this.appName = "";
        this.appLogoUrl = null;
        this.subscriptions = new rxjs_1.Subscription();
        this.linkAPIUrl = options.linkAPIUrl;
        this.storage = options.storage;
        this.options = options;
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.relayEventManager = options.relayEventManager;
        if (options.diagnosticLogger && options.eventListener) {
            throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
        }
        if (options.eventListener) {
            this.diagnostic = {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                log: options.eventListener.onEvent,
            };
        }
        else {
            this.diagnostic = options.diagnosticLogger;
        }
        this._reloadOnDisconnect = (_a = options.reloadOnDisconnect) !== null && _a !== void 0 ? _a : true;
        this.ui = ui;
    }
    subscribe() {
        this.subscriptions.add(this.dappDefaultChainSubject.subscribe(chainId => {
            if (this.dappDefaultChain !== chainId) {
                this.dappDefaultChain = chainId;
            }
        }));
        const session = Session_1.Session.load(this.storage) || new Session_1.Session(this.storage).save();
        const connection = new WalletSDKConnection_1.WalletSDKConnection(session.id, session.key, this.linkAPIUrl, this.diagnostic);
        this.subscriptions.add(connection.sessionConfig$.subscribe({
            next: sessionConfig => {
                this.onSessionConfigChanged(sessionConfig);
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "error while invoking session config callback",
                });
            },
        }));
        this.subscriptions.add(connection.incomingEvent$
            .pipe((0, operators_1.filter)(m => m.event === "Web3Response"))
            .subscribe({ next: this.handleIncomingEvent }));
        this.subscriptions.add(connection.linked$
            .pipe((0, operators_1.skip)(1), (0, operators_1.tap)((linked) => {
            var _a;
            this.isLinked = linked;
            const cachedAddresses = this.storage.getItem(WalletSDKRelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
            if (linked) {
                // Only set linked session variable one way
                this.session.linked = linked;
            }
            this.isUnlinkedErrorState = false;
            if (cachedAddresses) {
                const addresses = cachedAddresses.split(" ");
                const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
                if (addresses[0] !== "" &&
                    !linked &&
                    this.session.linked &&
                    !wasConnectedViaStandalone) {
                    this.isUnlinkedErrorState = true;
                    const sessionIdHash = this.getSessionIdHash();
                    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash,
                    });
                }
            }
        }))
            .subscribe());
        // if session is marked destroyed, reset and reload
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => !!c.metadata && c.metadata.__destroyed === "1"))
            .subscribe(() => {
            var _a;
            const alreadyDestroyed = connection.isDestroyed;
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed,
                sessionIdHash: this.getSessionIdHash(),
            });
            return this.resetAndReload();
        }));
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => c.metadata && c.metadata.WalletUsername !== undefined))
            .pipe((0, operators_1.mergeMap)(c => aes256gcm.decrypt(c.metadata.WalletUsername, session.secret)))
            .subscribe({
            next: walletUsername => {
                this.storage.setItem(WalletSDKRelayAbstract_1.WALLET_USER_NAME_KEY, walletUsername);
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "username",
                });
            },
        }));
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => c.metadata && c.metadata.AppVersion !== undefined))
            .pipe((0, operators_1.mergeMap)(c => aes256gcm.decrypt(c.metadata.AppVersion, session.secret)))
            .subscribe({
            next: appVersion => {
                this.storage.setItem(WalletSDKRelayAbstract_1.APP_VERSION_KEY, appVersion);
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "appversion",
                });
            },
        }));
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => c.metadata &&
            c.metadata.ChainId !== undefined &&
            c.metadata.JsonRpcUrl !== undefined))
            .pipe((0, operators_1.mergeMap)(c => (0, rxjs_1.zip)(aes256gcm.decrypt(c.metadata.ChainId, session.secret), aes256gcm.decrypt(c.metadata.JsonRpcUrl, session.secret))))
            .pipe((0, operators_1.distinctUntilChanged)())
            .subscribe({
            next: ([chainId, jsonRpcUrl]) => {
                if (this.chainCallback) {
                    this.chainCallback(chainId, jsonRpcUrl);
                }
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "chainId|jsonRpcUrl",
                });
            },
        }));
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => c.metadata && c.metadata.EthereumAddress !== undefined))
            .pipe((0, operators_1.mergeMap)(c => aes256gcm.decrypt(c.metadata.EthereumAddress, session.secret)))
            .subscribe({
            next: selectedAddress => {
                if (this.accountsCallback) {
                    this.accountsCallback([selectedAddress]);
                }
                if (WalletSDKRelay.accountRequestCallbackIds.size > 0) {
                    // We get the ethereum address from the metadata.  If for whatever
                    // reason we don't get a response via an explicit web3 message
                    // we can still fulfill the eip1102 request.
                    Array.from(WalletSDKRelay.accountRequestCallbackIds.values()).forEach(id => {
                        const message = (0, Web3ResponseMessage_1.Web3ResponseMessage)({
                            id,
                            response: (0, Web3Response_1.RequestEthereumAccountsResponse)([
                                selectedAddress,
                            ]),
                        });
                        this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
                    });
                    WalletSDKRelay.accountRequestCallbackIds.clear();
                }
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "selectedAddress",
                });
            },
        }));
        this.subscriptions.add(connection.sessionConfig$
            .pipe((0, operators_1.filter)(c => c.metadata && c.metadata.AppSrc !== undefined))
            .pipe((0, operators_1.mergeMap)(c => aes256gcm.decrypt(c.metadata.AppSrc, session.secret)))
            .subscribe({
            next: appSrc => {
                this.ui.setAppSrc(appSrc);
            },
            error: () => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "appSrc",
                });
            },
        }));
        const ui = this.options.uiConstructor({
            linkAPIUrl: this.options.linkAPIUrl,
            version: this.options.version,
            darkMode: this.options.darkMode,
            session,
            connected$: connection.connected$,
            chainId$: this.dappDefaultChainSubject,
        });
        connection.connect();
        return { session, ui, connection };
    }
    attachUI() {
        this.ui.attach();
    }
    resetAndReload() {
        this.connection
            .setSessionMetadata("__destroyed", "1")
            .pipe((0, operators_1.timeout)(1000), (0, operators_1.catchError)(_ => (0, rxjs_1.of)(null)))
            .subscribe(_ => {
            var _a, _b, _c;
            const isStandalone = this.ui.isStandalone();
            try {
                this.subscriptions.unsubscribe();
            }
            catch (err) {
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error unsubscribing",
                });
            }
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: this.getSessionIdHash(),
            });
            this.connection.destroy();
            /**
             * Only clear storage if the session id we have in memory matches the one on disk
             * Otherwise, in the case where we have 2 tabs, another tab might have cleared
             * storage already.  In that case if we clear storage again, the user will be in
             * a state where the first tab allows the user to connect but the session that
             * was used isn't persisted.  This leaves the user in a state where they aren't
             * connected to the mobile app.
             */
            const storedSession = Session_1.Session.load(this.storage);
            if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
                this.storage.clear();
            }
            else if (storedSession) {
                (_c = this.diagnostic) === null || _c === void 0 ? void 0 : _c.log(DiagnosticLogger_1.EVENTS.SKIPPED_CLEARING_SESSION, {
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: Session_1.Session.hash(storedSession.id),
                });
            }
            if (this._reloadOnDisconnect) {
                this.ui.reloadUI();
                return;
            }
            if (this.accountsCallback) {
                this.accountsCallback([], true);
            }
            this.subscriptions = new rxjs_1.Subscription();
            const { session, ui, connection } = this.subscribe();
            this._session = session;
            this.connection = connection;
            this.ui = ui;
            if (isStandalone && this.ui.setStandalone)
                this.ui.setStandalone(true);
            this.attachUI();
        }, (err) => {
            var _a;
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `failed to reset and reload with ${err}`,
                sessionIdHash: this.getSessionIdHash(),
            });
        });
    }
    setAppInfo(appName, appLogoUrl) {
        this.appName = appName;
        this.appLogoUrl = appLogoUrl;
    }
    getStorageItem(key) {
        return this.storage.getItem(key);
    }
    get session() {
        return this._session;
    }
    setStorageItem(key, value) {
        this.storage.setItem(key, value);
    }
    signEthereumMessage(message, address, addPrefix, typedDataJson) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumMessage,
            params: {
                message: (0, util_1$2.hexStringFromBuffer)(message, true),
                address,
                addPrefix,
                typedDataJson: typedDataJson || null,
            },
        });
    }
    ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.ethereumAddressFromSignedMessage,
            params: {
                message: (0, util_1$2.hexStringFromBuffer)(message, true),
                signature: (0, util_1$2.hexStringFromBuffer)(signature, true),
                addPrefix,
            },
        });
    }
    signEthereumTransaction(params) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_1$2.bigIntStringFromBN)(params.weiValue),
                data: (0, util_1$2.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei
                    ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei)
                    : null,
                maxFeePerGas: params.gasPriceInWei
                    ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei)
                    : null,
                maxPriorityFeePerGas: params.gasPriceInWei
                    ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei)
                    : null,
                gasLimit: params.gasLimit ? (0, util_1$2.bigIntStringFromBN)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: false,
            },
        });
    }
    signAndSubmitEthereumTransaction(params) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_1$2.bigIntStringFromBN)(params.weiValue),
                data: (0, util_1$2.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei
                    ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei)
                    : null,
                maxFeePerGas: params.maxFeePerGas
                    ? (0, util_1$2.bigIntStringFromBN)(params.maxFeePerGas)
                    : null,
                maxPriorityFeePerGas: params.maxPriorityFeePerGas
                    ? (0, util_1$2.bigIntStringFromBN)(params.maxPriorityFeePerGas)
                    : null,
                gasLimit: params.gasLimit ? (0, util_1$2.bigIntStringFromBN)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: true,
            },
        });
    }
    submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.submitEthereumTransaction,
            params: {
                signedTransaction: (0, util_1$2.hexStringFromBuffer)(signedTransaction, true),
                chainId,
            },
        });
    }
    scanQRCode(regExp) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.scanQRCode,
            params: { regExp },
        });
    }
    getQRCodeUrl() {
        return (0, util_1$2.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, false, this.options.version, this.dappDefaultChain);
    }
    genericRequest(data, action) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.generic,
            params: {
                action,
                data,
            },
        });
    }
    sendGenericMessage(request) {
        return this.sendRequest(request);
    }
    sendRequest(request) {
        let hideSnackbarItem = null;
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        const promise = new Promise((resolve, reject) => {
            if (!this.ui.isStandalone()) {
                hideSnackbarItem = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: cancel,
                    onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
                });
            }
            this.relayEventManager.callbacks.set(id, response => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            if (this.ui.isStandalone()) {
                this.sendRequestStandalone(id, request);
            }
            else {
                this.publishWeb3RequestEvent(id, request);
            }
        });
        return { promise, cancel };
    }
    setConnectDisabled(disabled) {
        this.ui.setConnectDisabled(disabled);
    }
    setAccountsCallback(accountsCallback) {
        this.accountsCallback = accountsCallback;
    }
    setChainCallback(chainCallback) {
        this.chainCallback = chainCallback;
    }
    setDappDefaultChainCallback(chainId) {
        this.dappDefaultChainSubject.next(chainId);
    }
    publishWeb3RequestEvent(id, request) {
        var _a;
        const message = (0, Web3RequestMessage_1.Web3RequestMessage)({ id, request });
        const storedSession = Session_1.Session.load(this.storage);
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST, {
            eventId: message.id,
            method: `relay::${message.request.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
            isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString(),
        });
        this.subscriptions.add(this.publishEvent("Web3Request", message, true).subscribe({
            next: _ => {
                var _a;
                (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST_PUBLISHED, {
                    eventId: message.id,
                    method: `relay::${message.request.method}`,
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: storedSession
                        ? Session_1.Session.hash(storedSession.id)
                        : "",
                    isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString(),
                });
            },
            error: err => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id: message.id,
                    response: {
                        method: message.request.method,
                        errorMessage: err.message,
                    },
                }));
            },
        }));
    }
    publishWeb3RequestCanceledEvent(id) {
        const message = (0, Web3RequestCanceledMessage_1.Web3RequestCanceledMessage)(id);
        this.subscriptions.add(this.publishEvent("Web3RequestCanceled", message, false).subscribe());
    }
    publishEvent(event, message, callWebhook) {
        const secret = this.session.secret;
        return new rxjs_1.Observable(subscriber => {
            void aes256gcm
                .encrypt(JSON.stringify(Object.assign(Object.assign({}, message), { origin: location.origin })), secret)
                .then((encrypted) => {
                subscriber.next(encrypted);
                subscriber.complete();
            });
        }).pipe((0, operators_1.mergeMap)((encrypted) => {
            return this.connection.publishEvent(event, encrypted, callWebhook);
        }));
    }
    handleIncomingEvent(event) {
        try {
            this.subscriptions.add((0, rxjs_1.from)(aes256gcm.decrypt(event.data, this.session.secret))
                .pipe((0, operators_1.map)(c => JSON.parse(c)))
                .subscribe({
                next: json => {
                    const message = (0, Web3ResponseMessage_1.isWeb3ResponseMessage)(json) ? json : null;
                    if (!message) {
                        return;
                    }
                    this.handleWeb3ResponseMessage(message);
                },
                error: () => {
                    var _a;
                    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "incomingEvent",
                    });
                },
            }));
        }
        catch (_a) {
            return;
        }
    }
    handleWeb3ResponseMessage(message) {
        var _a;
        const { response } = message;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_RESPONSE, {
            eventId: message.id,
            method: `relay::${response.method}`,
            sessionIdHash: this.getSessionIdHash(),
        });
        if ((0, Web3Response_1.isRequestEthereumAccountsResponse)(response)) {
            WalletSDKRelay.accountRequestCallbackIds.forEach(id => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
            WalletSDKRelay.accountRequestCallbackIds.clear();
            return;
        }
        this.invokeCallback(message);
    }
    handleErrorResponse(id, method, error, errorCode) {
        var _a;
        const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : (0, errors_1.standardErrorMessage)(errorCode);
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
            id,
            response: {
                method,
                errorMessage,
                errorCode,
            },
        }));
    }
    invokeCallback(message) {
        const callback = this.relayEventManager.callbacks.get(message.id);
        if (callback) {
            callback(message.response);
            this.relayEventManager.callbacks.delete(message.id);
        }
    }
    requestEthereumAccounts() {
        const request = {
            method: Web3Method_1.Web3Method.requestEthereumAccounts,
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
            },
        };
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
        };
        const promise = new Promise((resolve, reject) => {
            var _a;
            this.relayEventManager.callbacks.set(id, response => {
                this.ui.hideRequestEthereumAccounts();
                if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            const userAgent = ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) || null;
            if (userAgent &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                let location;
                try {
                    if ((0, util_1$2.isInIFrame)() && window.top) {
                        location = window.top.location;
                    }
                    else {
                        location = window.location;
                    }
                }
                catch (e) {
                    location = window.location;
                }
                location.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(location.href)}`;
                return;
            }
            if (this.ui.inlineAccountsResponse()) {
                const onAccounts = (accounts) => {
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: (0, Web3Response_1.RequestEthereumAccountsResponse)(accounts),
                    }));
                };
                this.ui.requestEthereumAccounts({
                    onCancel: cancel,
                    onAccounts,
                });
            }
            else {
                // Error if user closes TryExtensionLinkDialog without connecting
                const err = errors_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
                this.ui.requestEthereumAccounts({
                    onCancel: () => cancel(err),
                });
            }
            WalletSDKRelay.accountRequestCallbackIds.add(id);
            if (!this.ui.inlineAccountsResponse() && !this.ui.isStandalone()) {
                this.publishWeb3RequestEvent(id, request);
            }
        });
        return { promise, cancel };
    }
    selectProvider(providerOptions) {
        const request = {
            method: Web3Method_1.Web3Method.selectProvider,
            params: {
                providerOptions,
            },
        };
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
        };
        const promise = new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, response => {
                if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            const _cancel = (_error) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.SelectProviderResponse)(types_1.ProviderType.Unselected),
                }));
            };
            const approve = (selectedProviderKey) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.SelectProviderResponse)(selectedProviderKey),
                }));
            };
            if (this.ui.selectProvider)
                this.ui.selectProvider({
                    onApprove: approve,
                    onCancel: _cancel,
                    providerOptions,
                });
        });
        return { cancel, promise };
    }
    watchAsset(type, address, symbol, decimals, image, chainId) {
        const request = {
            method: Web3Method_1.Web3Method.watchAsset,
            params: {
                type,
                options: {
                    address,
                    symbol,
                    decimals,
                    image,
                },
                chainId,
            },
        };
        let hideSnackbarItem = null;
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        if (!this.ui.inlineWatchAsset()) {
            hideSnackbarItem = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: cancel,
                onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
            });
        }
        const promise = new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, response => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            const _cancel = (_error) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.WatchAssetReponse)(false),
                }));
            };
            const approve = () => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.WatchAssetReponse)(true),
                }));
            };
            if (this.ui.inlineWatchAsset()) {
                this.ui.watchAsset({
                    onApprove: approve,
                    onCancel: _cancel,
                    type,
                    address,
                    symbol,
                    decimals,
                    image,
                    chainId,
                });
            }
            if (!this.ui.inlineWatchAsset() && !this.ui.isStandalone()) {
                this.publishWeb3RequestEvent(id, request);
            }
        });
        return { cancel, promise };
    }
    addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
        const request = {
            method: Web3Method_1.Web3Method.addEthereumChain,
            params: {
                chainId,
                rpcUrls,
                blockExplorerUrls,
                chainName,
                iconUrls,
                nativeCurrency,
            },
        };
        let hideSnackbarItem = null;
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        if (!this.ui.inlineAddEthereumChain(chainId)) {
            hideSnackbarItem = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: cancel,
                onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
            });
        }
        const promise = new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, response => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            const _cancel = (_error) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.AddEthereumChainResponse)({
                        isApproved: false,
                        rpcUrl: "",
                    }),
                }));
            };
            const approve = (rpcUrl) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.AddEthereumChainResponse)({ isApproved: true, rpcUrl }),
                }));
            };
            if (this.ui.inlineAddEthereumChain(chainId)) {
                this.ui.addEthereumChain({
                    onCancel: _cancel,
                    onApprove: approve,
                    chainId: request.params.chainId,
                    rpcUrls: request.params.rpcUrls,
                    blockExplorerUrls: request.params.blockExplorerUrls,
                    chainName: request.params.chainName,
                    iconUrls: request.params.iconUrls,
                    nativeCurrency: request.params.nativeCurrency,
                });
            }
            if (!this.ui.inlineAddEthereumChain(chainId) && !this.ui.isStandalone()) {
                this.publishWeb3RequestEvent(id, request);
            }
        });
        return { promise, cancel };
    }
    switchEthereumChain(chainId, address) {
        const request = {
            method: Web3Method_1.Web3Method.switchEthereumChain,
            params: Object.assign({ chainId }, { address }),
        };
        const id = (0, util_1$2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
        };
        const promise = new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, response => {
                if ((0, Web3Response_1.isErrorResponse)(response) && response.errorCode) {
                    return reject(errors_1.standardErrors.provider.custom({
                        code: response.errorCode,
                        message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`,
                    }));
                }
                else if (response.errorMessage) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            const _cancel = (error) => {
                var _a;
                if (error) {
                    // backward compatibility
                    const errorCode = (_a = (0, errors_1.getErrorCode)(error)) !== null && _a !== void 0 ? _a : errors_1.standardErrorCodes.provider.unsupportedChain;
                    this.handleErrorResponse(id, Web3Method_1.Web3Method.switchEthereumChain, error instanceof Error
                        ? error
                        : errors_1.standardErrors.provider.unsupportedChain(chainId), errorCode);
                }
                else {
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: (0, Web3Response_1.SwitchEthereumChainResponse)({
                            isApproved: false,
                            rpcUrl: "",
                        }),
                    }));
                }
            };
            const approve = (rpcUrl) => {
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id,
                    response: (0, Web3Response_1.SwitchEthereumChainResponse)({
                        isApproved: true,
                        rpcUrl,
                    }),
                }));
            };
            this.ui.switchEthereumChain({
                onCancel: _cancel,
                onApprove: approve,
                chainId: request.params.chainId,
                address: request.params.address,
            });
            if (!this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone()) {
                this.publishWeb3RequestEvent(id, request);
            }
        });
        return { promise, cancel };
    }
    inlineAddEthereumChain(chainId) {
        return this.ui.inlineAddEthereumChain(chainId);
    }
    getSessionIdHash() {
        return Session_1.Session.hash(this._session.id);
    }
    sendRequestStandalone(id, request) {
        const _cancel = (error) => {
            this.handleErrorResponse(id, request.method, error);
        };
        const onSuccess = (response) => {
            this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                id,
                response,
            }));
        };
        switch (request.method) {
            case Web3Method_1.Web3Method.signEthereumMessage:
                this.ui.signEthereumMessage({
                    request,
                    onSuccess,
                    onCancel: _cancel,
                });
                break;
            case Web3Method_1.Web3Method.signEthereumTransaction:
                this.ui.signEthereumTransaction({
                    request,
                    onSuccess,
                    onCancel: _cancel,
                });
                break;
            case Web3Method_1.Web3Method.submitEthereumTransaction:
                this.ui.submitEthereumTransaction({
                    request,
                    onSuccess,
                    onCancel: _cancel,
                });
                break;
            case Web3Method_1.Web3Method.ethereumAddressFromSignedMessage:
                this.ui.ethereumAddressFromSignedMessage({
                    request,
                    onSuccess,
                });
                break;
            default:
                _cancel();
                break;
        }
    }
    onSessionConfigChanged(_nextSessionConfig) { }
}
WalletSDKRelay.accountRequestCallbackIds = new Set();
__decorate([
    bind_decorator_1.default
], WalletSDKRelay.prototype, "resetAndReload", null);
__decorate([
    bind_decorator_1.default
], WalletSDKRelay.prototype, "handleIncomingEvent", null);
WalletSDKRelay$1.WalletSDKRelay = WalletSDKRelay;

var WalletSDKRelayEventManager$1 = {};

Object.defineProperty(WalletSDKRelayEventManager$1, "__esModule", { value: true });
WalletSDKRelayEventManager$1.WalletSDKRelayEventManager = void 0;
const util_1$1 = util$3;
class WalletSDKRelayEventManager {
    constructor() {
        this._nextRequestId = 0;
        this.callbacks = new Map();
    }
    makeRequestId() {
        // max nextId == max int32 for compatibility with mobile
        this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
        const id = this._nextRequestId;
        const idStr = (0, util_1$1.prepend0x)(id.toString(16));
        // unlikely that this will ever be an issue, but just to be safe
        const callback = this.callbacks.get(idStr);
        if (callback) {
            this.callbacks.delete(idStr);
        }
        return id;
    }
}
WalletSDKRelayEventManager$1.WalletSDKRelayEventManager = WalletSDKRelayEventManager;

// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(CoinbaseWalletSDK$1, "__esModule", { value: true });
CoinbaseWalletSDK$1.CoinbaseWalletSDK = void 0;
const wallet_logo_1 = walletLogo$1;
const constants_1 = constants$2;
const ScopedLocalStorage_1 = ScopedLocalStorage$1;
const CoinbaseWalletProvider_1 = CoinbaseWalletProvider$1;
const WalletSDKUI_1 = WalletSDKUI$1;
const WalletSDKRelay_1 = WalletSDKRelay$1;
const WalletSDKRelayEventManager_1 = WalletSDKRelayEventManager$1;
const util_1 = util$3;
const version_1 = version;
class CoinbaseWalletSDK {
    /**
     * Constructor
     * @param options Coinbase Wallet SDK constructor options
     */
    constructor(options) {
        var _a, _b, _c;
        this._appName = "";
        this._appLogoUrl = null;
        this._relay = null;
        this._relayEventManager = null;
        const linkAPIUrl = options.linkAPIUrl || constants_1.LINK_API_URL;
        let uiConstructor;
        if (!options.uiConstructor) {
            uiConstructor = opts => new WalletSDKUI_1.WalletSDKUI(opts);
        }
        else {
            uiConstructor = options.uiConstructor;
        }
        if (typeof options.overrideIsMetaMask === "undefined") {
            this._overrideIsMetaMask = false;
        }
        else {
            this._overrideIsMetaMask = options.overrideIsMetaMask;
        }
        this._overrideIsCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
        this._overrideIsCoinbaseBrowser =
            (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
        if (options.diagnosticLogger && options.eventListener) {
            throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
        }
        if (options.eventListener) {
            this._diagnosticLogger = {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                log: options.eventListener.onEvent,
            };
        }
        else {
            this._diagnosticLogger = options.diagnosticLogger;
        }
        this._reloadOnDisconnect = (_c = options.reloadOnDisconnect) !== null && _c !== void 0 ? _c : true;
        const url = new URL(linkAPIUrl);
        const origin = `${url.protocol}//${url.host}`;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${origin}`); // needs migration to preserve local states
        this._storage.setItem("version", CoinbaseWalletSDK.VERSION);
        if (this.walletExtension || this.coinbaseBrowser) {
            return;
        }
        this._relayEventManager = new WalletSDKRelayEventManager_1.WalletSDKRelayEventManager();
        this._relay = new WalletSDKRelay_1.WalletSDKRelay({
            linkAPIUrl,
            version: version_1.LIB_VERSION,
            darkMode: !!options.darkMode,
            uiConstructor,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            diagnosticLogger: this._diagnosticLogger,
            reloadOnDisconnect: this._reloadOnDisconnect,
        });
        this.setAppInfo(options.appName, options.appLogoUrl);
        if (!!options.headlessMode)
            return;
        this._relay.attachUI();
    }
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
        const extension = this.walletExtension;
        if (extension) {
            if (!this.isCipherProvider(extension)) {
                extension.setProviderInfo(jsonRpcUrl, chainId);
            }
            if (this._reloadOnDisconnect === false &&
                typeof extension.disableReloadOnDisconnect === "function")
                extension.disableReloadOnDisconnect();
            return extension;
        }
        const dappBrowser = this.coinbaseBrowser;
        if (dappBrowser) {
            return dappBrowser;
        }
        const relay = this._relay;
        if (!relay || !this._relayEventManager || !this._storage) {
            throw new Error("Relay not initialized, should never happen");
        }
        if (!jsonRpcUrl)
            relay.setConnectDisabled(true);
        return new CoinbaseWalletProvider_1.CoinbaseWalletProvider({
            relayProvider: () => Promise.resolve(relay),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl,
            chainId,
            qrUrl: this.getQrUrl(),
            diagnosticLogger: this._diagnosticLogger,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
            overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
        });
    }
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(appName, appLogoUrl) {
        var _a;
        this._appName = appName || "DApp";
        this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
        const extension = this.walletExtension;
        if (extension) {
            if (!this.isCipherProvider(extension)) {
                extension.setAppInfo(this._appName, this._appLogoUrl);
            }
        }
        else {
            (_a = this._relay) === null || _a === void 0 ? void 0 : _a.setAppInfo(this._appName, this._appLogoUrl);
        }
    }
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect() {
        var _a;
        const extension = this.walletExtension;
        if (extension) {
            void extension.close();
        }
        else {
            (_a = this._relay) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        }
    }
    /**
     * Return QR URL for mobile wallet connection, will return null if extension is installed
     */
    getQrUrl() {
        var _a, _b;
        return (_b = (_a = this._relay) === null || _a === void 0 ? void 0 : _a.getQRCodeUrl()) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
    getCoinbaseWalletLogo(type, width = 240) {
        return (0, wallet_logo_1.walletLogo)(type, width);
    }
    get walletExtension() {
        var _a;
        return (_a = window.coinbaseWalletExtension) !== null && _a !== void 0 ? _a : window.walletLinkExtension;
    }
    get coinbaseBrowser() {
        var _a, _b;
        try {
            // Coinbase DApp browser does not inject into iframes so grab provider from top frame if it exists
            const ethereum = (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
            if (!ethereum) {
                return undefined;
            }
            if ("isCoinbaseBrowser" in ethereum && ethereum.isCoinbaseBrowser) {
                return ethereum;
            }
            else {
                return undefined;
            }
        }
        catch (e) {
            return undefined;
        }
    }
    isCipherProvider(provider) {
        // @ts-expect-error isCipher walletlink property
        return typeof provider.isCipher === "boolean" && provider.isCipher;
    }
}
CoinbaseWalletSDK$1.CoinbaseWalletSDK = CoinbaseWalletSDK;
CoinbaseWalletSDK.VERSION = version_1.LIB_VERSION;

(function (exports) {
	// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
	// Licensed under the Apache License, version 2.0
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CoinbaseWalletProvider = exports.CoinbaseWalletSDK = void 0;
	const CoinbaseWalletSDK_1 = CoinbaseWalletSDK$1;
	const CoinbaseWalletProvider_1 = CoinbaseWalletProvider$1;
	var CoinbaseWalletSDK_2 = CoinbaseWalletSDK$1;
	Object.defineProperty(exports, "CoinbaseWalletSDK", { enumerable: true, get: function () { return CoinbaseWalletSDK_2.CoinbaseWalletSDK; } });
	var CoinbaseWalletProvider_2 = CoinbaseWalletProvider$1;
	Object.defineProperty(exports, "CoinbaseWalletProvider", { enumerable: true, get: function () { return CoinbaseWalletProvider_2.CoinbaseWalletProvider; } });
	exports.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
	if (typeof window !== "undefined") {
	    window.CoinbaseWalletSDK = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
	    window.CoinbaseWalletProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
	    /**
	     * @deprecated Use `window.CoinbaseWalletSDK`
	     */
	    window.WalletLink = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
	    /**
	     * @deprecated Use `window.CoinbaseWalletProvider`
	     */
	    window.WalletLinkProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
	} 
} (dist$5));

var index = /*@__PURE__*/getDefaultExportFromCjs(dist$5);

var index$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': index
}, [dist$5]);

export { index$1 as i };
//# sourceMappingURL=index-84bce305.js.map
