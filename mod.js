// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r,e){var t;if("clamp"===e)return function(n,r){return n<0?0:n>r?r:n}(n,r);if("wrap"===e)return function(n,r){var e=r+1;return n<0?((n+=e)<0&&0!=(n%=e)&&(n+=e),n):n>r?((n-=e)>r&&(n%=e),n):n}(n,r);if(t=n,"normalize"===e&&(t=function(n,r){return n<0?(n+=r+1)<0?-1:n:n>r?-1:n}(t,r)),t<0||t>r)throw new RangeError(function(){var n,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)e+="&arg[]="+encodeURIComponent(r[n]);return e}("invalid argument. Index must resolve to a value on the interval: [0, %d]. Value: `%d`.",r,n));return t}export{n as default};
//# sourceMappingURL=mod.js.map
