// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-clamp-index@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-wrap-index@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function s(s,n,i){if("clamp"===i)return r(s,n);if("wrap"===i)return e(s,n);if(s<0||s>n)throw new RangeError(t("0il5I,L7",n,s));return s}export{s as default};
//# sourceMappingURL=index.mjs.map
