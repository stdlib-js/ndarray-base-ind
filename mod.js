// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,n,t){if("clamp"===t)return function(r,n){return r<0?0:r>n?n:r}(r,n);if("wrap"===t)return function(r,n){var t=n+1;return r<0?((r+=t)<0&&0!=(r%=t)&&(r+=t),r):r>n?((r-=t)>n&&(r%=t),r):r}(r,n);if(r<0||r>n)throw new RangeError(function(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}("0il5I,L7",n,r));return r}export{r as default};
//# sourceMappingURL=mod.js.map
