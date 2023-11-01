// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-clamp-index@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-wrap-index@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function n(n,s,d){if("clamp"===d)return r(n,s);if("wrap"===d)return e(n,s);if(n<0||n>s)throw new RangeError(t("invalid argument. Index must be on the interval: [0, %d]. Value: `%d`.",s,n));return n}export{n as default};
//# sourceMappingURL=index.mjs.map
