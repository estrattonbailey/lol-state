!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){var e=require("nanohref"),n=require("picodom").patch,t=require("mitt"),r=require("@loll/route-parser"),o=r.createRoute,i=r.getRoute;function u(e){return void 0===e&&(e=window.location),e.href.replace(e.origin,"")}module.exports=function(r){void 0===r&&(r=[]);var f,c=r.map(function(e){return o(e[0],e[1])});function d(e){return Promise.resolve(i(e,c))}return"undefined"!=typeof window?function(r,o){var i=t.default?t.default():t();function c(e){return void 0===e&&(e=u()),i.emit("navigate",e),d(e).then(function(e){return requestAnimationFrame(function(){n(r,f,f=e),i.emit("render")})}).then(function(){return window.history.pushState({},document.title,e)})}return e(function(e){return c(u(e))}),window.onpopstate=function(e){return c(u(e.target.location))},c().then(o),Object.assign(i,{render:c})}:d}});
//# sourceMappingURL=loll-router.umd.js.map