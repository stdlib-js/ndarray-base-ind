// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-clamp-index@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-wrap-index@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(n,s,i){if("clamp"===i)return r(n,s);if("wrap"===i)return e(n,s);if(n<0||n>s)throw new RangeError(t("invalid argument. Index must be on the interval: [0, %f]. Value: `%f`.",s,n));return n}export{n as default};
//# sourceMappingURL=index.mjs.map
