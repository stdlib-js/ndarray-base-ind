// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-clamp-index@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-wrap-index@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var o={wrap:n,clamp:e,normalize:function(r,e){var n=t(r,e);if(n<0||n>e)throw new RangeError(s("0ilFB",e,r));return n},throw:function(r,e){if(r<0||r>e)throw new RangeError(s("0ilFB",e,r));return r}};function d(r){if(!i(r))throw new TypeError(s("0ilFC",r));return o[r]}function m(r,i,o){var d;if("clamp"===o)return e(r,i);if("wrap"===o)return n(r,i);if(d=r,"normalize"===o&&(d=t(d,i)),d<0||d>i)throw new RangeError(s("0ilFB",i,r));return d}r(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
