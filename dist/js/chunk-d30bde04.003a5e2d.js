(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d30bde04"],{a3e6:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"contain"}},[e("div",{staticClass:"header"},[t._v(t._s(t.logo))]),1===t.flag?e("ul",{staticClass:"about"},[e("li",[t._v(" 负责人："+t._s(t.sic.charge)+" ")]),e("li",[t._v(" 个人联系方式："+t._s(t.sic.information)+" ")]),e("li",[t._v(" 联系方式："+t._s(t.sic.contacts)+" ")]),e("li",[t._v(" 联系人电话："+t._s(t.sic.tel)+" ")]),e("li",[t._v(" 联系邮箱："+t._s(t.sic.mail)+" ")]),e("li",[t._v(" 学科类型："+t._s(t.sic.confic)+" ")]),e("el-link",{staticStyle:{"margin-left":"0%"},attrs:{target:"_blank",href:t.URL,underline:!1}},[e("el-button",{attrs:{size:"mini",type:"success"}},[t._v("文件下载")])],1)],1):e("ul",{staticClass:"about"},[e("li",[t._v(" 联系人："+t._s(t.cop.contacts)+" ")]),e("li",[t._v(" 联系邮箱："+t._s(t.cop.mail)+" ")]),e("li",[t._v(" 需求学科："+t._s(t.cop.needs)+" ")]),e("el-link",{staticStyle:{"margin-left":"0%"},attrs:{target:"_blank",href:t.URL,underline:!1}},[e("el-button",{attrs:{size:"mini",type:"success"}},[t._v("文件下载")])],1)],1),e("div",{staticClass:"main"},[1===t.flag?e("ul",{staticClass:"show_part"},[e("li",[t._v("科研成果介绍："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.results)}})]),e("li",[t._v("科技创新："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.tecNew)}})]),e("li",[t._v("未来展望："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.future)}})])]):e("ul",{staticClass:"show_part"},[e("li",[t._v("项目介绍："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.intro)}})]),e("li",[t._v("预算："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.budget)}})]),e("li",[t._v("需求："),e("br"),e("div",{domProps:{innerHTML:t._s(t.content.document)}})])])]),e("el-button",{attrs:{type:"success",round:""},on:{click:function(s){return t.pass()}}},[t._v("通过审核")]),e("el-button",{attrs:{type:"warning",round:""},on:{click:function(s){return t.notPass()}}},[t._v("未通过")])],1)},i=[],o={data:function(){return{id:"",content:{},logo:"",charge:"",selfintro:"",contacts:"",mail:"",flag:0,URL:"",sic:{},cop:{}}},methods:{getId:function(){this.$route.params.sincereId?(this.logo="",this.id=-1,this.id=this.$route.params.sincereId,this.logo="科学成果审核",console.log(this.id),this.flag=1):(this.logo="",this.id=-1,this.id=this.$route.params.companyId,this.logo="企业需求审核",console.log(this.id),this.flag=2)},getHTML_sci:function(t){var s=this;this.$http.get("boss/readSci",{params:{id:t}}).then((function(t){var e=t.data.data.Sci;s.content.results=e.results,s.content.tecNew=e.tecNew,s.content.future=e.future,s.sic.charge=e.charge,s.sic.contacts=e.contacts,s.sic.mail=e.mail,s.sic.information=e.information,s.sic.tel=e.tel,s.sic.confic=e.confic,s.URL=e.fileurl}))},getHTML_company:function(t){var s=this;this.$http.get("boss/readEnter",{params:{id:t}}).then((function(t){var e=t.data.data.enterpriseneeds;s.content.intro=e.intro,s.content.budget=e.budget,s.content.document=e.document,s.cop.contacts=e.contacts,s.cop.needs=e.needs,s.cop.mail=e.mail,s.URL=e.fileurl}))},pass:function(){var t,s=this;t=1===this.flag?"boss/sciapproval":"boss/enterapproval",this.$confirm("设否通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){s.$http.get(t,{params:{Ids:s.id}}).then((function(){s.$message({type:"success",message:"提交成功!"}),s.$router.go(-1)}))})).catch((function(){s.$message({type:"warning",message:"已取消"})}))},notPass:function(){var t,s=this;t=1===this.flag?"/scireject":"/entereject",this.$prompt("请输入不通过原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var n=e.value;s.$http.post(t,{id:s.id,problem:n}).then((function(){s.$message({type:"success",message:"提交成功"}),s.$router.go(-1)})),console.log(n)})).catch((function(){s.$message({type:"info",message:"发送失败"})}))}},mounted:function(){this.getId(),1===this.flag?this.getHTML_sci(this.id):this.getHTML_company(this.id)}},c=o,a=(e("ee91"),e("2877")),r=Object(a["a"])(c,n,i,!1,null,"addba7f4",null);s["default"]=r.exports},b057:function(t,s,e){},ee91:function(t,s,e){"use strict";var n=e("b057"),i=e.n(n);i.a}}]);
//# sourceMappingURL=chunk-d30bde04.003a5e2d.js.map