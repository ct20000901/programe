(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7740cf0"],{"57b5":function(t,s,n){},a3e6:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"contain"}},[n("div",{staticClass:"header"},[t._v(t._s(t.logo))]),1===t.flag?n("ul",{staticClass:"about"},[n("li",[t._v(" 负责人："+t._s(t.sic.charge)+" ")]),n("li",[t._v(" 个人联系方式："+t._s(t.sic.information)+" ")]),n("li",[t._v(" 联系方式："+t._s(t.sic.contacts)+" ")]),n("li",[t._v(" 联系人电话："+t._s(t.sic.tel)+" ")]),n("li",[t._v(" 联系邮箱："+t._s(t.sic.mail)+" ")]),n("li",[t._v(" 学科类型："+t._s(t.sic.confic)+" ")]),n("el-link",{staticStyle:{"margin-left":"0%"},attrs:{target:"_blank",href:t.URL,underline:!1}},[n("el-button",{attrs:{size:"mini",type:"success"}},[t._v("文件下载")])],1)],1):n("ul",{staticClass:"about"},[n("li",[t._v(" 联系人："+t._s(t.cop.contacts)+" ")]),n("li",[t._v(" 联系邮箱："+t._s(t.cop.mail)+" ")]),n("li",[t._v(" 需求学科："+t._s(t.cop.needs)+" ")]),n("el-link",{staticStyle:{"margin-left":"0%"},attrs:{target:"_blank",href:t.URL,underline:!1}},[n("el-button",{attrs:{size:"mini",type:"success"}},[t._v("文件下载")])],1)],1),n("div",{staticClass:"main"},[1===t.flag?n("ul",{staticClass:"show_part"},[n("li",[t._v("科研成果介绍："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.results)}})]),n("li",[t._v("科技创新："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.tecNew)}})]),n("li",[t._v("未来展望："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.future)}})])]):n("ul",{staticClass:"show_part"},[n("li",[t._v("项目介绍："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.intro)}})]),n("li",[t._v("预算："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.budget)}})]),n("li",[t._v("需求："),n("br"),n("div",{domProps:{innerHTML:t._s(t.content.document)}})])])]),n("div",{staticClass:"btns left"},[n("el-button",{attrs:{type:"success",round:""},on:{click:function(s){return t.pass()}}},[t._v("通过审核")]),n("el-button",{attrs:{type:"warning",round:""},on:{click:function(s){return t.notPass()}}},[t._v("未通过")])],1)])},i=[],c={data:function(){return{id:"",content:{},logo:"",charge:"",selfintro:"",contacts:"",mail:"",flag:0,URL:"",sic:{},cop:{}}},methods:{getId:function(){this.$route.params.sincereId?(this.logo="",this.id=-1,this.id=this.$route.params.sincereId,this.logo="科学成果审核",this.flag=1):(this.logo="",this.id=-1,this.id=this.$route.params.companyId,this.logo="企业需求审核",this.flag=2)},getHTML_sci:function(t){var s=this;this.$http.get("boss/readSci",{params:{id:t}}).then((function(t){var n=t.data.data.Sci;s.content.results=n.results,s.content.tecNew=n.tecNew,s.content.future=n.future,s.sic.charge=n.charge,s.sic.contacts=n.contacts,s.sic.mail=n.mail,s.sic.information=n.information,s.sic.tel=n.tel,s.sic.confic=n.confic,s.URL=n.fileurl}))},getHTML_company:function(t){var s=this;this.$http.get("boss/readEnter",{params:{id:t}}).then((function(t){var n=t.data.data.enterpriseneeds;s.content.intro=n.intro,s.content.budget=n.budget,s.content.document=n.document,s.cop.contacts=n.contacts,s.cop.needs=n.needs,s.cop.mail=n.mail,s.URL=n.fileurl}))},pass:function(){var t,s=this;t=1===this.flag?"boss/sciapproval":"boss/enterapproval",this.$confirm("设否通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){s.$http.get(t,{params:{Ids:s.id}}).then((function(){s.$message({type:"success",message:"提交成功!"}),s.$router.go(-1)}))})).catch((function(){s.$message({type:"warning",message:"已取消"})}))},notPass:function(){var t,s=this;t=1===this.flag?"/scireject":"/entereject",this.$prompt("请输入不通过原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){var e=n.value;s.$http.post(t,{id:s.id,problem:e}).then((function(){s.$message({type:"success",message:"提交成功"}),s.$router.go(-1)}))})).catch((function(){s.$message({type:"info",message:"发送失败"})}))}},mounted:function(){this.getId(),1===this.flag?this.getHTML_sci(this.id):this.getHTML_company(this.id)}},o=c,a=(n("fbb9"),n("2877")),r=Object(a["a"])(o,e,i,!1,null,"6faedb1c",null);s["default"]=r.exports},fbb9:function(t,s,n){"use strict";var e=n("57b5"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chunk-e7740cf0.d88945fe.js.map