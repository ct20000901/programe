(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f981988"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=k.prototype=E.prototype=Object.create(y);L.prototype=w.constructor=k,k.constructor=L,k[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[c]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,n){var o=new O(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=j(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function L(){}function k(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),a)}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=F(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function F(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"98d2":function(t,e,r){},c49e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"contain"}},[r("div",{staticClass:"header"},[r("div",{staticClass:"Input"},[r("el-input",{staticClass:"title",attrs:{placeholder:"题目",maxlength:"30","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("el-input",{staticClass:"publisher",attrs:{placeholder:"发布者",maxlength:"15"},model:{value:t.publisher,callback:function(e){t.publisher=e},expression:"publisher"}})],1),r("div",{staticClass:"publish"},[r("input",{attrs:{accept:"*.pdf,*.txt,*.doc",type:"file",name:"image"},on:{change:function(e){return t.getFile(e)}}}),r("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.publish()}}},[t._v("确认修改")])],1)]),r("div",{staticClass:"write"},[r("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"750px",width:"1300px",margin:"20px auto"},attrs:{"max-height":"800",options:t.editorOption},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},o=[],i=(r("96cf"),r("1da1")),a=r("953d"),c=(r("a753"),r("8096"),r("14e1"),{data:function(){return{content:null,title:"",publisher:"",url:"",editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"][{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]}],[{align:[]}],["link","image"],["sourceEditor"]]}}}},methods:{onEditorChange:function(t){var e=t.html;this.content=e},getFile:function(t){this.file=t.target.files[0]},publish:function(){var t=this;null!==this.content?""!==this.publisher?""!==this.title?this.$confirm("是否确认发表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("File",t.file),e.next=4,t.$http.post("boss/upload",n).then((function(e){r=e.data.data;var n={id:t.$route.params.newsId,title:t.title,publisher:t.publisher,context:t.content,fileURL:r};t.$http.post("/boss/updatenews",{news:n}).then((function(){t.$message({type:"success",message:"提交成功!"}),t.content=null,t.$router.push("/manager/newsmanage")}))}));case 4:case"end":return e.stop()}}),e)})))).catch((function(){t.$message({type:"warning",message:"发布失败"})})):alert("标题不能为空！"):alert("发布者不能为空！"):alert("内容不能为空！")},getData:function(){var t=this;this.$http.get("boss/readNews",{params:{id:this.$route.params.newsId}}).then((function(e){var r=e.data.data;t.title=r.title,t.publisher=r.publisher,t.content=r.context}))}},components:{quillEditor:a["quillEditor"]},mounted:function(){this.getData()}}),s=c,u=(r("fb48"),r("2877")),l=Object(u["a"])(s,n,o,!1,null,"2e810345",null);e["default"]=l.exports},fb48:function(t,e,r){"use strict";var n=r("98d2"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-8f981988.1b6e066b.js.map