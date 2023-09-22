"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(c,t){
var i=require('@stdlib/ndarray-base-clamp-index/dist'),f=require('@stdlib/ndarray-base-wrap-index/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e,r,n){if(n==="clamp")return i(e,r);if(n==="wrap")return f(e,r);if(e<0||e>r)throw new RangeError(s('0il5I',r,e));return e}t.exports=o
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
