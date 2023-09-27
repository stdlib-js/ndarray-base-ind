// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r,t){if("clamp"===t)return function(n,r){return n<0?0:n>r?r:n}(n,r);if("wrap"===t)return function(n,r){var t=r+1;return n<0?((n+=t)<0&&0!=(n%=t)&&(n+=t),n):n>r?((n-=t)>r&&(n%=t),n):n}(n,r);if(n<0||n>r)throw new RangeError(function(){var n,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)t+="&arg[]="+encodeURIComponent(r[n]);return t}("invalid argument. Index must be on the interval: [0, %d]. Value: `%d`.",r,n));return n}export{n as default};
//# sourceMappingURL=mod.js.map
