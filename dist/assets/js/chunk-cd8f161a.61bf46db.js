(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd8f161a"],{"1dde":function(t,e,i){var n=i("d039"),s=i("b622"),a=i("2d00"),r=s("species");t.exports=function(t){return a>=51||!n((function(){var e=[],i=e.constructor={};return i[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3639:function(t,e,i){"use strict";var n=i("5d4c"),s=i.n(n);s.a},"5d4c":function(t,e,i){},8418:function(t,e,i){"use strict";var n=i("c04e"),s=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var r=n(e);r in t?s.f(t,r,a(0,i)):t[r]=i}},a3e6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contain"},[i("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/manager/userlist"}}},[t._v("首页")]),i("el-breadcrumb-item",{attrs:{to:{path:"/manager/sincere"}}},[t._v("审批管理")]),i("el-breadcrumb-item",[t._v(t._s(t.dowhat))])],1)],1),i("div",{staticClass:"nimazhale"},[i("div",{staticClass:"head"},[i("div",{staticClass:"header"},[t._v(t._s(t.logo))])]),i("div",{staticClass:"main"},[1===t.flag?i("ul",{staticClass:"show_part"},[i("li",{staticStyle:{"margin-top":"10px"}},[t._v("科研成果介绍："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.results)}})]),t.content.tecNew?i("li",[t._v("技术创新点："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.tecNew)}})]):t._e(),t.content.future?i("li",[t._v("市场前景及展望："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.future)}})]):t._e(),t.needing?i("li",[t._v(" 学科类型： "),i("div",{staticStyle:{margin:"8px"}},[t._v(" "+t._s(t.needing)+" ")])]):t._e(),i("li",[t._v(" 技术成熟度： "),i("div",{staticStyle:{margin:"8px"}},[t._v(" "+t._s(t.sic.maturity)+" ")])]),i("li",[t._v(" 负责人： "),i("div",{staticStyle:{margin:"8px"}},[t._v(" "+t._s(t.sic.charge)+" ")])]),i("li",[t._v(" 负责人职称： "),i("div",{staticStyle:{margin:"8px"}},[t._v(" "+t._s(t.sic.position)+" ")])]),i("li",[t._v(" 联系方式 "),i("div",{staticStyle:{margin:"8px"}},[t._v(" 个人联系方式："+t._s(t.sic.information)),i("br"),t._v(" 联系方式："+t._s(t.sic.contacts)),i("br"),t._v(" 联系人电话："+t._s(t.sic.tel)),i("br"),t._v(" 联系邮箱："+t._s(t.sic.mail)+" ")])]),t.filename?i("li",{staticStyle:{border:"none"}},[t._v(" 文件下载 "),i("div",[i("a",{staticClass:"download",attrs:{href:t.URL,download:t.filename}})])]):t._e()]):i("ul",{staticClass:"show_part"},[i("li",[t._v("项目介绍："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.intro)}})]),i("li",[t._v("预算："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.budget)}})]),i("li",[t._v("需求："),i("br"),i("div",{staticStyle:{margin:"10px"},domProps:{innerHTML:t._s(t.content.document)}})]),i("li",[t._v(" 需求学科： "),i("div",{staticStyle:{margin:"8px"}},[t._v(" "+t._s(t.needing)+" ")])]),i("li",[t._v(" 联系方式 "),i("div",{staticStyle:{margin:"8px"}},[t._v(" 联系人："+t._s(t.cop.contacts)),i("br"),t._v(" 联系邮箱："+t._s(t.cop.mail)+" ")])])])]),i("div",{staticClass:"btns"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:!this.$route.params.ispassed,expression:"!this.$route.params.ispassed"}],attrs:{type:"success",round:"",size:"small"},on:{click:function(e){return t.pass()}}},[t._v("审核通过")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:!this.$route.params.ispassed,expression:"!this.$route.params.ispassed"}],attrs:{type:"warning",round:"",size:"small"},on:{click:function(e){return t.notPass()}}},[t._v("拒绝通过")])],1)])],1)},s=[],a=(i("c975"),i("fb6a"),{data:function(){return{id:"",content:{},logo:"",charge:"",selfintro:"",contacts:"",mail:"",flag:0,URL:"",sic:{},cop:{},filename:"",dowhat:"",needing:""}},methods:{getId:function(){this.$route.params.sincereId?(this.logo="",this.id=-1,this.id=this.$route.params.sincereId,this.dowhat="科研成果",this.flag=1):(this.logo="",this.id=-1,this.id=this.$route.params.companyId,this.dowhat="企业需求",this.flag=2)},bigger:function(){var t=document.querySelectorAll("img");t.addEventListener("click",(function(t){t=t||window;var e=t.target;e.style.height="900px",e.style.width="700px"}))},cut_img:function(){var t={},e="",i=0,n=this.content;for(var s in n){var a=n[s];if(-1!=a.indexOf("img")){while(-1!=a.indexOf("img")){var r=a.indexOf("img");e=e+a.slice(i,r+3)+' style="max-height:450px;max-width:550px"',i=r+3,a=a.slice(i),i=0}i=0,e+=a,t[s]=e}else t[s]=n[s]}this.content=t},getHTML_sci:function(t){var e=this;this.$http.get("boss/readSci",{params:{id:t}}).then((function(t){var i=t.data.data.Sci;e.logo=i.entryname,e.content.results=i.results,e.content.tecNew=i.tecNew,e.content.future=i.future,e.sic.maturity=i.maturity,e.sic.charge=i.charge,e.sic.contacts=i.contacts,e.sic.mail=i.mail,e.sic.information=i.information,e.sic.tel=i.tel,e.sic.confic=i.disciplines,e.sic.position=i.position,e.URL=i.fileurl,e.filename=i.filename,e.cut_img();for(var n=0;n<e.sic.confic.length;n++)e.needing+="  ",e.needing+=e.sic.confic[n].confic}))},getHTML_company:function(t){var e=this;this.$http.get("boss/readEnter",{params:{id:t}}).then((function(t){var i=t.data.data.enterpriseneeds;e.logo=i.title,e.content.intro=i.intro,e.content.budget=i.budget,e.content.document=i.document,e.cop.contacts=i.contacts,e.cop.needs=i.needs,e.cop.mail=i.mail,e.URL=i.fileurl,e.filename=i.filename;for(var n=0;n<e.cop.needs.length;n++)e.needing+="  ",e.needing+=e.cop.needs[n].needs}))},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},pass:function(){var t,e=this;t=1===this.flag?"boss/sciapproval":"boss/enterapproval",this.$confirm("设否通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){e.$http.get(t,{params:{Ids:e.id}}).then((function(){e.$message({type:"success",message:"提交成功!"}),e.$router.go(-1)}))})).catch((function(){e.$message({type:"warning",message:"已取消"})}))},notPass:function(){var t,e=this;t=1===this.flag?"boss/scireject":"boss/entereject",this.$prompt("请输入不通过原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(i){var n=i.value;e.$http.post(t,{id:e.id,problem:n}).then((function(){e.$message({type:"success",message:"提交成功"}),e.$router.go(-1)}))})).catch((function(){e.$message({type:"info",message:"发送失败"})}))}},mounted:function(){},created:function(){this.getId(),1===this.flag?this.getHTML_sci(this.id):this.getHTML_company(this.id)}}),r=a,c=(i("3639"),i("2877")),o=Object(c["a"])(r,n,s,!1,null,"93c10122",null);e["default"]=o.exports},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var n=i("83ab"),s=i("d039"),a=i("5135"),r=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var i=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,d=a(e,0)?e[0]:o,u=a(e,1)?e[1]:void 0;return c[t]=!!i&&!s((function(){if(l&&!n)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:o}):t[1]=1,i.call(t,d,u)}))}},c975:function(t,e,i){"use strict";var n=i("23e7"),s=i("4d64").indexOf,a=i("a640"),r=i("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:o||!l||!d},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),s=i("861d"),a=i("e8b5"),r=i("23cb"),c=i("50c4"),o=i("fc6a"),l=i("8418"),d=i("b622"),u=i("1dde"),f=i("ae40"),p=u("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,e){var i,n,d,u=o(this),f=c(u.length),p=r(t,f),m=r(void 0===e?f:e,f);if(a(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?s(i)&&(i=i[v],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return h.call(u,p,m);for(n=new(void 0===i?Array:i)(g(m-p,0)),d=0;p<m;p++,d++)p in u&&l(n,d,u[p]);return n.length=d,n}})}}]);
//# sourceMappingURL=chunk-cd8f161a.61bf46db.js.map