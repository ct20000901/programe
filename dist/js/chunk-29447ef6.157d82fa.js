(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29447ef6"],{4751:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"contain"}},[e("div",{staticClass:"header"},[e("el-input",{staticClass:"title",attrs:{placeholder:"公告标题"},model:{value:t.title,callback:function(n){t.title=n},expression:"title"}}),e("el-input",{staticClass:"publisher",attrs:{placeholder:"发布者"},model:{value:t.publisher,callback:function(n){t.publisher=n},expression:"publisher"}}),e("el-button",{attrs:{type:"success",round:""},on:{click:function(n){return t.publish()}}},[t._v("发布")])],1),e("div",{staticClass:"write"},[e("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"750px",width:"1300px",margin:"20px auto"},attrs:{"max-height":"800"},on:{change:function(n){return t.onEditorChange(n)}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)])},o=[],a=e("953d"),s=(e("a753"),e("8096"),e("14e1"),{data:function(){return{content:null,title:"",publisher:"",url:""}},methods:{onEditorChange:function(t){var n=t.html;console.log("editor change!",n),this.content=n},publish:function(){var t=this;this.$confirm("是否确认发表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){var n={id:t.$route.params.announceId,title:t.title,publisher:t.publisher,content:t.content};t.$http.post("boss/updateannounce",{Announce:n}).then((function(){t.$message({type:"success",message:"提交成功!"}),t.content=null,t.$router.go(-1)}))})).catch((function(){t.$message({type:"warning",message:"发布失败"})}))},getData:function(){var t=this;this.$http.get("boss/getannounce",{params:{id:this.$route.params.announceId}}).then((function(n){console.log(n);var e=n.data.data;t.title=e.title,t.publisher=e.publisher,t.content=e.content,t.url=e.fileURL}))}},components:{quillEditor:a["quillEditor"]},mounted:function(){this.getData()}}),l=s,c=(e("8f1b"),e("2877")),u=Object(c["a"])(l,i,o,!1,null,"6fa1e261",null);n["default"]=u.exports},"8f1b":function(t,n,e){"use strict";var i=e("b2fa"),o=e.n(i);o.a},b2fa:function(t,n,e){}}]);
//# sourceMappingURL=chunk-29447ef6.157d82fa.js.map