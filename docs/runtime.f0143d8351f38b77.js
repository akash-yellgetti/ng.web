(()=>{"use strict";var e,g={},v={};function r(e){var o=v[e];if(void 0!==o)return o.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(o,t,n,i)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,n,i]=e[f],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[c]))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(f--,1);var l=n();void 0!==l&&(o=l)}}return o}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,n,i]},(()=>{var o,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var f={};o=o||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~o.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>f[s]=()=>t[s]);return f.default=()=>t,r.d(i,f),i}})(),r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>(592===e?"common":e)+"."+{167:"b45074487fbbb7ca",474:"1f88aef03cc9ffff",482:"e3e0ed5fda87619f",494:"27647fd78f30ce46",503:"b28111a3e3a3b337",592:"9073e8c111b881ca",642:"71319921dbff08eb",712:"df7e524a5ec50c17",822:"f128804e943f03a7",882:"246a8b69e2464d72"}[e]+".js",r.miniCssF=e=>{},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="ngweb:";r.l=(t,n,i,f)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+i),a.src=r.tu(t)),e[t]=[n];var u=(m,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(y=>y(b)),m)return m(b)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(n,i)=>{var f=r.o(e,n)?e[n]:void 0;if(0!==f)if(f)i.push(f[2]);else if(666!=n){var a=new Promise((d,u)=>f=e[n]=[d,u]);i.push(f[2]=a);var s=r.p+r.u(n),c=new Error;r.l(s,d=>{if(r.o(e,n)&&(0!==(f=e[n])&&(e[n]=void 0),f)){var u=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+p+")",c.name="ChunkLoadError",c.type=u,c.request=p,f[1](c)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var o=(n,i)=>{var c,l,[f,a,s]=i,d=0;if(f.some(p=>0!==e[p])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(s)var u=s(r)}for(n&&n(i);d<f.length;d++)r.o(e,l=f[d])&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},t=self.webpackChunkngweb=self.webpackChunkngweb||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();