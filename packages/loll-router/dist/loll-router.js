function r(r){var t=r.split("/");return t.slice(""!==t[0]?0:1)}function t(t,n){return{parts:r(t),handler:n}}function n(t,n){var e=r(t),a={};r:for(var i=0,u=n;i<u.length;i+=1){var o=u[i];if(e.length===o.parts.length){for(var s=0;s<o.parts.length;s++)if(":"!==o.parts[s][0]){if(o.parts[s]!==e[s]){if("*"===o.parts[s])break;continue r}}else a[o.parts[s].slice(1)]=e[s];return o.handler(a)}if("*"==o.parts[0])return o.handler(a);console.log(o)}}function e(r){var e=r.map(function(r){return t(r[0],r[1])});return{get:function(r){return n(r,e)},push:function(r){window.history.pushState({},document.title,r)}}}module.exports=e;
//# sourceMappingURL=loll-router.js.map
