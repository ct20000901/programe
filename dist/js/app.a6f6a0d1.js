(function(e){function n(n){for(var r,a,o=n[0],s=n[1],i=n[2],l=0,h=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&h.push(u[a][0]),u[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(h.length)h.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-12a1ec00":"243abb03","chunk-075a058c":"25789804","chunk-7f2e9294":"e031bce0","chunk-610959ca":"71cdf8ea","chunk-7464859d":"8a58d213","chunk-796c995f":"b827226d","chunk-96f619d6":"f1f2e906","chunk-15169002":"5b3bf595","chunk-1ff19f7d":"e93c8760","chunk-29447ef6":"157d82fa","chunk-855ae9ca":"9834dae8","chunk-ab14b720":"193ef68a","chunk-c2e7b46e":"7bcc0cc3","chunk-d30bde04":"003a5e2d","chunk-dee9be56":"31d5b9fd"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-075a058c":1,"chunk-7f2e9294":1,"chunk-610959ca":1,"chunk-7464859d":1,"chunk-796c995f":1,"chunk-96f619d6":1,"chunk-15169002":1,"chunk-1ff19f7d":1,"chunk-29447ef6":1,"chunk-855ae9ca":1,"chunk-ab14b720":1,"chunk-c2e7b46e":1,"chunk-d30bde04":1,"chunk-dee9be56":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-12a1ec00":"31d6cfe0","chunk-075a058c":"b8d25998","chunk-7f2e9294":"8cab2e5f","chunk-610959ca":"fabc40c1","chunk-7464859d":"f4fe59ca","chunk-796c995f":"c93dd478","chunk-96f619d6":"a48a7cc1","chunk-15169002":"c8c72618","chunk-1ff19f7d":"dc6aff83","chunk-29447ef6":"6f191f33","chunk-855ae9ca":"72ce51c0","chunk-ab14b720":"b8bc726e","chunk-c2e7b46e":"3968634a","chunk-d30bde04":"501d6cee","chunk-dee9be56":"4b398a7d"}[e]+".css",u=s.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){i=h[o],l=i.getAttribute("data-href");if(l===r||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),t(c)},f.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var h=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,t[1](h)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],c={name:"App",components:{},created:function(){var e=this;window.addEventListener("beforeunload",(function(){sessionStorage.setItem("messageStore",JSON.stringify(e.$store.state))})),sessionStorage.getItem("messageStore")&&this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(sessionStorage.getItem("messageStore"))))}},o=c,s=t("2877"),i=Object(s["a"])(o,a,u,!1,null,null,null),l=i.exports,h=t("8c4f"),f=(t("d3b7"),{path:"/manager",component:function(){return t.e("chunk-7464859d").then(t.bind(null,"5a75"))},meta:{requiresAuth:!0,roles:["manager"]},children:[{name:"userlist",path:"userlist",component:function(){return t.e("chunk-dee9be56").then(t.bind(null,"2e4a"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"rolelist",path:"rolelist",component:function(){return t.e("chunk-610959ca").then(t.bind(null,"8b7c"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"permission",path:"permission",component:function(){return t.e("chunk-c2e7b46e").then(t.bind(null,"7338"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"newsmanage",path:"newsmanage",component:function(){return t.e("chunk-796c995f").then(t.bind(null,"0e7c"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"addnews",path:"addnews",component:function(){return Promise.all([t.e("chunk-96f619d6"),t.e("chunk-855ae9ca")]).then(t.bind(null,"002c"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"notice",path:"notice",component:function(){return Promise.all([t.e("chunk-96f619d6"),t.e("chunk-15169002")]).then(t.bind(null,"a085"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"sincere",path:"sincere",component:function(){return Promise.all([t.e("chunk-12a1ec00"),t.e("chunk-7f2e9294")]).then(t.bind(null,"09bc"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"company",path:"company",component:function(){return Promise.all([t.e("chunk-12a1ec00"),t.e("chunk-075a058c")]).then(t.bind(null,"eb2d"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"more",path:"more",component:function(){return t.e("chunk-d30bde04").then(t.bind(null,"a3e6"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"announces",path:"announces",component:function(){return t.e("chunk-ab14b720").then(t.bind(null,"a02a"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"updateNotice",path:"updatenotice",component:function(){return Promise.all([t.e("chunk-96f619d6"),t.e("chunk-29447ef6")]).then(t.bind(null,"4751"))},meta:{requiresAuth:!0,roles:["manager"]}},{name:"updateNews",path:"updatenews",component:function(){return Promise.all([t.e("chunk-96f619d6"),t.e("chunk-1ff19f7d")]).then(t.bind(null,"c49e"))},meta:{requiresAuth:!0,roles:["manager"]}}]});r["default"].use(h["a"]);var d=[f],m=new h["a"]({mode:"history",base:"/",routes:d});m.beforeEach((function(e,n,t){var r=sessionStorage.getItem("userToken"),a=sessionStorage.getItem("role");if(e.meta.requireAuth)if(r)if(0!==e.meta.roles.length)for(var u=0;u<e.meta.roles.length;u++){if(a===e.meta.roles[u]){t();break}u===e.meta.roles.length-1&&t({path:"/Error"})}else t();else t({path:"/Login"});else t();"/login"===e.fullPath&&(r?t("university"===a?{path:"/university/demandst/机械"}:"company"===a?{path:"/company/researchst/机械"}:{path:n.fullPath}):t())}));var p=m,b=t("2f62");r["default"].use(b["a"]);var k=new b["a"].Store({state:{username:"",account:""},mutations:{handleUserName:function(e,n){e.username=n,sessionStorage.setItem("username",n)},handleAccount:function(e,n){e.account=n,sessionStorage.setItem("account",n)},logout:function(e){sessionStorage.clear(),e.username="",e.account=""}},actions:{},modules:{}}),g=t("5c96"),v=t.n(g),y=(t("0fae"),t("bc3a")),w=t.n(y);t("f698");w.a.defaults.baseURL="/",r["default"].config.productionTip=!1,r["default"].use(v.a),w.a.defaults.crossDomain=!0,w.a.defaults.withCredentials=!0,r["default"].prototype.$http=w.a,new r["default"]({router:p,store:k,render:function(e){return e(l)}}).$mount("#app")},f698:function(e,n,t){}});
//# sourceMappingURL=app.a6f6a0d1.js.map