function r(r){var t=r.split("/");return t.slice(""!==t[0]?0:1)}function t(t,e){return{parts:r(t),handler:e}}function e(t,e){var n=r(t),a={};r:for(var s=0,i=e;s<i.length;s+=1){var l=i[s];if(n.length===l.parts.length){for(var p=0;p<l.parts.length;p++)if(":"!==l.parts[p][0]){if(l.parts[p]!==n[p]){if("*"===l.parts[p])break;continue r}}else a[l.parts[p].slice(1)]=n[p];return l.handler(a)}if("*"==l.parts[0])return l.handler(a)}}exports.createRoute=t,exports.getRoute=e;
//# sourceMappingURL=loll-route-parser.js.map