"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(f,t){
var i=require('@stdlib/ndarray-base-clamp-index/dist'),s=require('@stdlib/ndarray-base-wrap-index/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e,r,n){if(n==="clamp")return i(e,r);if(n==="wrap")return s(e,r);if(e<0||e>r)throw new RangeError(o("invalid argument. Index must be on the interval: [0, %d]. Value: `%d`.",r,e));return e}t.exports=p
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
