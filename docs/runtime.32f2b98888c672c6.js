(()=>{"use strict";var e,g={},v={};function r(e){var n=v[e];if(void 0!==n)return n.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,f,i]=e[o],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[c]))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(o--,1);var l=f();void 0!==l&&(n=l)}}return n}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var o={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>o[s]=()=>t[s]);return o.default=()=>t,r.d(i,o),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{17:"e860a1b2da30d653",311:"95ad4f3ceb16d778",415:"0df15971613c1d5b",466:"c4253efd42673391",489:"bb155ffdcaf15405",592:"e367d622e9895531",778:"ca8b5b843aa7c1ff",833:"8722466c8970b8b0",867:"f3b23b8a751c4680",891:"621310713f59fb5d",960:"4866d14c8a197be8"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="ngweb:";r.l=(t,f,i,o)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var u=(_,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(y=>y(b)),_)return _(b)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,i)=>{var o=r.o(e,f)?e[f]:void 0;if(0!==o)if(o)i.push(o[2]);else if(666!=f){var a=new Promise((d,u)=>o=e[f]=[d,u]);i.push(o[2]=a);var s=r.p+r.u(f),c=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(o=e[f])&&(e[f]=void 0),o)){var u=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;c.message="Loading chunk "+f+" failed.\n("+u+": "+p+")",c.name="ChunkLoadError",c.type=u,c.request=p,o[1](c)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var c,l,[o,a,s]=i,d=0;if(o.some(p=>0!==e[p])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(s)var u=s(r)}for(f&&f(i);d<o.length;d++)r.o(e,l=o[d])&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},t=self.webpackChunkngweb=self.webpackChunkngweb||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();