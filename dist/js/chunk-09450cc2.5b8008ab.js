(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09450cc2"],{"002c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("div",{staticClass:"header"},[n("el-input",{staticClass:"title",attrs:{placeholder:"题目"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("el-input",{staticClass:"publisher",attrs:{placeholder:"发布者"},model:{value:t.publisher,callback:function(e){t.publisher=e},expression:"publisher"}}),n("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.publish()}}},[t._v("发布")])],1),n("div",{staticClass:"write"},[n("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"800px",width:"1300px",margin:"20px auto"},attrs:{"max-height":"950"},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},s=[],c=n("953d"),o=(n("a753"),n("8096"),n("14e1"),{data:function(){return{content:null,title:"",publisher:""}},methods:{onEditorChange:function(t){var e=t.html;console.log("editor change!",e),this.content=e},publish:function(){var t=this,e={};this.$confirm("是否确认发表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){e={title:t.title,publisher:t.publisher,context:t.content},t.$http.post("boss/addNews",{news:e}).then((function(){t.$message({type:"success",message:"提交成功!"}),t.content=null,t.$router.go(0)}))})).catch((function(){t.$message({type:"warning",message:"发布失败"})}))}},components:{quillEditor:c["quillEditor"]}}),l=o,a=(n("ca07"),n("2877")),u=Object(a["a"])(l,i,s,!1,null,"5348b81c",null);e["default"]=u.exports},"201b":function(t,e,n){},ca07:function(t,e,n){"use strict";var i=n("201b"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-09450cc2.5b8008ab.js.map