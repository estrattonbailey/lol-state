var e=[];function t(t,r,n){for(var o,s=f(t,t.children[0],r,n);o=e.pop();o());return s}function r(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function n(t,r){if("string"==typeof t)var s=document.createTextNode(t);else{s=(r=r||"svg"===t.type)?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type);t.props&&t.props.oncreate&&e.push(function(){t.props.oncreate(s)});for(var i=0;i<t.children.length;i++)s.appendChild(n(t.children[i],r));for(var i in t.props)o(s,i,t.props[i])}return s}function o(e,t,n,o){if("key"===t);else if("style"===t)for(var t in r(o,n=n||{}))e.style[t]=n[t]||"";else{try{e[t]=n}catch(e){}"function"!=typeof n&&(n?e.setAttribute(t,n):e.removeAttribute(t))}}function s(t,n,s){for(var i in r(n,s)){var p=s[i],f="value"===i||"checked"===i?t[i]:n[i];p!==f&&o(t,i,p,f)}s&&s.onupdate&&e.push(function(){s.onupdate(t,n)})}function i(e,t,r){function n(){e.removeChild(t)}r&&r.onremove&&"function"==typeof(r=r.onremove(t))?r(n):n()}function p(e){if(e&&e.props)return e.props.key}function f(e,t,r,o,u,l){if(null==r)t=e.insertBefore(n(o,u),t);else if(null!=o.type&&o.type===r.type){s(t,r.props,o.props),u=u||"svg"===o.type;for(var a=o.children.length,c=r.children.length,h={},d=[],v={},y=0;y<c;y++){var m=d[y]=t.childNodes[y];null!=(w=p(_=r.children[y]))&&(h[w]=[m,_])}y=0;for(var g=0;g<a;){m=d[y];var _=r.children[y],x=o.children[g];if(v[w=p(_)])y++;else{var N=p(x),b=h[N]||[];null==N?(null==w&&(f(t,m,_,x,u),g++),y++):(w===N?(f(t,b[0],b[1],x,u),y++):b[0]?(t.insertBefore(b[0],m),f(t,b[0],b[1],x,u)):f(t,m,null,x,u),g++,v[N]=x)}}for(;y<c;){var w;null==(w=p(_=r.children[y]))&&i(t,d[y],_.props),y++}for(var y in h){var k=(b=h[y])[1];v[k.props.key]||i(t,b[0],k.props)}}else t&&o!==t.nodeValue&&("string"==typeof o&&"string"==typeof r?t.nodeValue=o:(t=e.insertBefore(n(o,u),l=t),i(e,l,r.props)));return t}var u=function(e){Object.assign(this,e),this.state||(this.state={}),this._proxy=document.createElement("div")};function l(e){var t=new u(e),r=t.state||{};return function(e){t._self||(t.props=e,t.init(e),t._self=t.render(t.props,t.state),Object.assign(t._self.props,{oncreate:function(e){t.ref=e,t.mount&&t.mount()},ondestroy:function(){t.state=r,t.ref=null,t.unmount&&t.unmount()}}));for(var n in e)e[n]!==t.props[n]&&(t.props=e,t.update&&!t.update(e,t.state)||t._render());return t._self}}u.prototype.setState=function(e){Object.assign(this.state,"function"==typeof e?e(this.state):e),this._render()},u.prototype._render=function(){this._proxy.appendChild(this.ref.cloneNode(!0)),t(this._proxy,this._self,this._self=this.render(this.props,this.state));var e=this._proxy.childNodes[0];this.ref.parentNode.replaceChild(e,this.ref),this.ref=e},module.exports=l;
//# sourceMappingURL=loll-component.js.map
