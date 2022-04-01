// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-clamp-index@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-wrap-index@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=r,s=e,i=t;var a=function(r,e,t){if("clamp"===t)return n(r,e);if("wrap"===t)return s(r,e);if(r<0||r>e)throw new RangeError(i("invalid argument. Index must be on the interval: [0,%f]. Value: `%f`.",e,r));return r};export{a as default};
//# sourceMappingURL=index.mjs.map
