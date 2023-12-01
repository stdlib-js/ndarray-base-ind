"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=i(function(x,u){
var d=require('@stdlib/ndarray-base-clamp-index/dist'),f=require('@stdlib/ndarray-base-wrap-index/dist'),c=require('@stdlib/ndarray-base-normalize-index/dist'),w=require('@stdlib/ndarray-base-assert-is-index-mode/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist'),p={wrap:f,clamp:d,normalize:m,throw:q};function q(r,e){if(r<0||r>e)throw new RangeError(t('0ilFB',e,r));return r}function m(r,e){var n=c(r,e);if(n<0||n>e)throw new RangeError(t('0ilFB',e,r));return n}function I(r){if(!w(r))throw new TypeError(t('0ilFC',r));return p[r]}u.exports=I
});var l=i(function(B,v){
var g=require('@stdlib/ndarray-base-clamp-index/dist'),h=require('@stdlib/ndarray-base-wrap-index/dist'),z=require('@stdlib/ndarray-base-normalize-index/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function E(r,e,n){var a;if(n==="clamp")return g(r,e);if(n==="wrap")return h(r,e);if(a=r,n==="normalize"&&(a=z(a,e)),a<0||a>e)throw new RangeError(y('0ilFB',e,r));return a}v.exports=E
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=o(),s=l();R(s,"factory",V);module.exports=s;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
