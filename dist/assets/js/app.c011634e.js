(function(e){function n(n){for(var a,r,u=n[0],s=n[1],i=n[2],l=0,h=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(h.length)h.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(a=!1)}a&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return s.p+"assets/js/"+({}[e]||e)+"."+{"chunk-0f6f7c03":"7256133e","chunk-12a1ec00":"243abb03","chunk-4a1aa4b0":"879077c4","chunk-5b9b1c58":"14afb0e4","chunk-220fbfe1":"b6af1702","chunk-24e55838":"19250f2e","chunk-29912e19":"c2d65e96","chunk-49e69b7c":"3c347ca0","chunk-5b0f3479":"7643a2ef","chunk-cb583cae":"f09803a6","chunk-11ca921a":"1742f033","chunk-3aab7484":"c1b63c99","chunk-445474e3":"531138d7","chunk-be6b763e":"c9e2b8e4","chunk-cd8f161a":"61bf46db"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-0f6f7c03":1,"chunk-4a1aa4b0":1,"chunk-5b9b1c58":1,"chunk-220fbfe1":1,"chunk-24e55838":1,"chunk-29912e19":1,"chunk-49e69b7c":1,"chunk-5b0f3479":1,"chunk-cb583cae":1,"chunk-11ca921a":1,"chunk-3aab7484":1,"chunk-445474e3":1,"chunk-be6b763e":1,"chunk-cd8f161a":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-0f6f7c03":"600cbe4f","chunk-12a1ec00":"31d6cfe0","chunk-4a1aa4b0":"d0522d90","chunk-5b9b1c58":"799440d7","chunk-220fbfe1":"afaed215","chunk-24e55838":"e8cfe83c","chunk-29912e19":"9df96bb7","chunk-49e69b7c":"db6d62da","chunk-5b0f3479":"d3ded5d2","chunk-cb583cae":"1f0a25b2","chunk-11ca921a":"6b72c2bb","chunk-3aab7484":"69a5932c","chunk-445474e3":"1608644d","chunk-be6b763e":"0d72723a","chunk-cd8f161a":"c9455973"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],l=i.getAttribute("data-href");if(l===a||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var h=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,t[1](h)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/manager/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c={name:"App",components:{},created:function(){var e=this;window.addEventListener("beforeunload",(function(){sessionStorage.setItem("messageStore",JSON.stringify(e.$store.state))})),sessionStorage.getItem("messageStore")&&this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(sessionStorage.getItem("messageStore"))))}},u=c,s=t("2877"),i=Object(s["a"])(u,r,o,!1,null,null,null),l=i.exports,h=t("8c4f"),f={path:"/manager",component:function(){return t.e("chunk-5b0f3479").then(t.bind(null,"5a75"))},meta:{requireAuth:!0,roles:["manager"]},children:[{name:"userlist",path:"userlist",component:function(){return t.e("chunk-220fbfe1").then(t.bind(null,"2e4a"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"rolelist",path:"rolelist",component:function(){return t.e("chunk-49e69b7c").then(t.bind(null,"8b7c"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"permission",path:"permission",component:function(){return t.e("chunk-29912e19").then(t.bind(null,"7338"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"newsmanage",path:"newsmanage",component:function(){return t.e("chunk-24e55838").then(t.bind(null,"0e7c"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"addnews",path:"addnews",component:function(){return Promise.all([t.e("chunk-cb583cae"),t.e("chunk-be6b763e")]).then(t.bind(null,"002c"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"notice",path:"notice",component:function(){return Promise.all([t.e("chunk-cb583cae"),t.e("chunk-445474e3")]).then(t.bind(null,"a085"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"sincere",path:"sincere",component:function(){return Promise.all([t.e("chunk-12a1ec00"),t.e("chunk-5b9b1c58")]).then(t.bind(null,"09bc"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"company",path:"company",component:function(){return Promise.all([t.e("chunk-12a1ec00"),t.e("chunk-4a1aa4b0")]).then(t.bind(null,"eb2d"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"more",path:"more",component:function(){return t.e("chunk-cd8f161a").then(t.bind(null,"a3e6"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"announces",path:"announces",component:function(){return t.e("chunk-0f6f7c03").then(t.bind(null,"a02a"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"updateNotice",path:"updatenotice",component:function(){return Promise.all([t.e("chunk-cb583cae"),t.e("chunk-3aab7484")]).then(t.bind(null,"4751"))},meta:{requireAuth:!0,roles:["manager"]}},{name:"updateNews",path:"updatenews",component:function(){return Promise.all([t.e("chunk-cb583cae"),t.e("chunk-11ca921a")]).then(t.bind(null,"c49e"))},meta:{requireAuth:!0,roles:["manager"]}}]};a["default"].use(h["a"]);var d=[f,{path:"/",redirect:"/manager/userlist"}],m=new h["a"]({mode:"history",base:"/manager/",routes:d});m.beforeEach((function(e,n,t){var a=sessionStorage.getItem("userToken"),r=sessionStorage.getItem("role");if(e.meta.requireAuth)if(a)if(0!==e.meta.roles.length)for(var o=0;o<e.meta.roles.length;o++){if(r===e.meta.roles[o]){t();break}o===e.meta.roles.length-1&&t({path:"/Error"})}else t();else t({path:"/login"});else t()}));var p=m,b=t("2f62");a["default"].use(b["a"]);var g=new b["a"].Store({state:{username:"",account:""},mutations:{handleUserName:function(e,n){e.username=n,sessionStorage.setItem("username",n)},handleAccount:function(e,n){e.account=n,sessionStorage.setItem("account",n)},logout:function(e){sessionStorage.clear(),e.username="",e.account=""}},actions:{},modules:{}}),k=t("5c96"),v=t.n(k),y=(t("0fae"),t("bc3a")),w=t.n(y),S=(t("f698"),t("6944")),A=t.n(S);t("0808");w.a.defaults.baseURL="/",a["default"].config.productionTip=!1,a["default"].use(A.a),A.a.setDefaults({inline:!0,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,url:"data-source",ready:function(e){console.log(e.type,"组件以初始化")},show:function(e){console.log(e.type,"图片显示开始")},shown:function(e){console.log(e.type,"图片显示结束")},hide:function(e){console.log(e.type,"图片隐藏完成")},hidden:function(e){console.log(e.type,"图片隐藏结束")},view:function(e){console.log(e.type,"视图开始")},viewed:function(e){console.log(e.type,"视图结束"),1===e.detail.index&&this.viewer.rotate(20)},zoom:function(e){console.log(e.type,"图片缩放开始")},zoomed:function(e){console.log(e.type,"图片缩放结束")}}),a["default"].use(v.a),w.a.defaults.crossDomain=!0,w.a.defaults.withCredentials=!0,a["default"].prototype.$http=w.a,w.a.interceptors.response.use((function(e){if(e.data.code)switch(e.data.code){case 150:g.state.isLogin=!1,window.location.href="http://139.159.202.233/login"}return e}),(function(e){return Promise.reject(e.response.status)})),new a["default"]({router:p,store:g,render:function(e){return e(l)}}).$mount("#app")},f698:function(e,n,t){}});
//# sourceMappingURL=app.c011634e.js.map