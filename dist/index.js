"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(q,i){
var v=require('@stdlib/ndarray-base-clamp-index/dist'),l=require('@stdlib/ndarray-base-wrap-index/dist'),o=require('@stdlib/ndarray-base-normalize-index/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r,a){var n;if(a==="clamp")return v(e,r);if(a==="wrap")return l(e,r);if(n=e,a==="normalize"&&(n=o(n,r)),n<0||n>r)throw new RangeError(s("invalid argument. Index must resolve to a value on the interval: [0, %d]. Value: `%d`.",r,e));return n}i.exports=f
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
