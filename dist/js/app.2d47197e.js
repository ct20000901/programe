(function(e){function n(n){for(var r,o,c=n[0],l=n[1],s=n[2],i=0,d=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-13aeb4fc":"63256d53","chunk-31e18be5":"e8cd6e93","chunk-4e996ad8":"4a905ce7","chunk-5c0135d3":"fc2855cf","chunk-610959ca":"71cdf8ea","chunk-69c65446":"65df1bdf","chunk-79e0b656":"ff404383","chunk-d30bde04":"003a5e2d","chunk-ddb9e4b6":"273c3fd7","chunk-df1c263e":"a49555c4"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-13aeb4fc":1,"chunk-31e18be5":1,"chunk-4e996ad8":1,"chunk-5c0135d3":1,"chunk-610959ca":1,"chunk-69c65446":1,"chunk-79e0b656":1,"chunk-d30bde04":1,"chunk-ddb9e4b6":1,"chunk-df1c263e":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-13aeb4fc":"a301298c","chunk-31e18be5":"4b398a7d","chunk-4e996ad8":"0ffde82a","chunk-5c0135d3":"b8d25998","chunk-610959ca":"fabc40c1","chunk-69c65446":"1bca5da3","chunk-79e0b656":"23982f2d","chunk-d30bde04":"501d6cee","chunk-ddb9e4b6":"8cab2e5f","chunk-df1c263e":"715ed808"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===a))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],i=s.getAttribute("data-href");if(i===r||i===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),t(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var d=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={name:"App",components:{}},c=u,l=t("2877"),s=Object(l["a"])(c,o,a,!1,null,null,null),i=s.exports,d=t("8c4f"),f=(t("d3b7"),{path:"/manager",component:function(){return t.e("chunk-13aeb4fc").then(t.bind(null,"5a75"))},children:[{name:"userlist",path:"userlist",component:function(){return t.e("chunk-31e18be5").then(t.bind(null,"2e4a"))},meta:{requiresAuth:!0}},{name:"rolelist",path:"rolelist",component:function(){return t.e("chunk-610959ca").then(t.bind(null,"8b7c"))}},{name:"permission",path:"permission",component:function(){return t.e("chunk-69c65446").then(t.bind(null,"7338"))}},{name:"newsmanage",path:"newsmanage",component:function(){return t.e("chunk-79e0b656").then(t.bind(null,"0e7c"))}},{name:"addnews",path:"addnews",component:function(){return t.e("chunk-df1c263e").then(t.bind(null,"002c"))}},{name:"notise",path:"notise",component:function(){return t.e("chunk-4e996ad8").then(t.bind(null,"a085"))}},{name:"sincere",path:"sincere",component:function(){return t.e("chunk-ddb9e4b6").then(t.bind(null,"09bc"))}},{name:"company",path:"company",component:function(){return t.e("chunk-5c0135d3").then(t.bind(null,"eb2d"))}},{name:"more",path:"more",component:function(){return t.e("chunk-d30bde04").then(t.bind(null,"a3e6"))}}]}),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"contain"},[t("div",{staticClass:"box"},[t("div",{staticClass:"logo"},[e._v(" 靖江市科技镇长团管理系统 ")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"","label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:e.ruleForm.username,callback:function(n){e.$set(e.ruleForm,"username",n)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.pass,callback:function(n){e.$set(e.ruleForm,"pass",n)},expression:"ruleForm.pass"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.submitForm()}}},[e._v("提交")]),t("el-button",{on:{click:function(n){return e.resetForm()}}},[e._v("重置")])],1)],1)],1)])},m=[],h=(t("b0c0"),t("4328")),b=t.n(h),g={data:function(){return{ruleForm:{username:"",pass:""}}},methods:{submitForm:function(){var e=this,n=this;this.$refs.ruleForm.validate((function(t){t&&e.$http.post("/user/login",b.a.stringify({username:n.ruleForm.username,password:n.ruleForm.pass}),{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((function(n){console.log(n),"用户名不存在"!==n.data.msg?"密码错误"!==n.data.msg?(localStorage.setItem("Token",123),localStorage.setItem("islogin",!0),e.$router.push("../manager/userlist")):alert("密码错误,请重新输入"):alert("用户名不存在,请重新输入")}))}))},resetForm:function(){this.ruleForm={username:"",pass:""}}},beforeRouteLeave:function(e,n,t){console.log(e),"userlist"===e.name&&(localStorage.getItem("Token")&&localStorage.getItem("islogin")?t():t(!1))}},k=g,v=(t("f375"),Object(l["a"])(k,p,m,!1,null,"0157506b",null)),y=v.exports;r["default"].use(d["a"]);var w=[f,{path:"/",redirect:"/login"},{name:"login",path:"/login",component:y}],F=new d["a"]({mode:"hash",base:"/",routes:w}),_=F,x=t("2f62");r["default"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=t("5c96"),j=t.n(S),C=(t("0fae"),t("bc3a")),E=t.n(C);t("f698");E.a.defaults.baseURL="/",r["default"].config.productionTip=!1,r["default"].use(j.a),E.a.defaults.crossDomain=!0,E.a.defaults.withCredentials=!0,r["default"].prototype.$http=E.a,new r["default"]({router:_,store:O,render:function(e){return e(i)}}).$mount("#app")},"9d49":function(e,n,t){},f375:function(e,n,t){"use strict";var r=t("9d49"),o=t.n(r);o.a},f698:function(e,n,t){}});
//# sourceMappingURL=app.2d47197e.js.map