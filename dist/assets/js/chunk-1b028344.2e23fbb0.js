(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b028344"],{"1d40":function(t,e,n){},4751:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("div",{staticClass:"header"},[n("el-input",{staticClass:"title",attrs:{placeholder:"公告标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("el-input",{staticClass:"publisher",attrs:{placeholder:"发布者"},model:{value:t.publisher,callback:function(e){t.publisher=e},expression:"publisher"}}),n("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.publish()}}},[t._v("确认修改")]),n("input",{attrs:{accept:"*.pdf,*.txt,*.doc",type:"file",name:"image"},on:{change:function(e){return t.getFile(e)}}})],1),n("div",{staticClass:"write"},[n("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"790px",width:"1300px",margin:"20px auto",padding:"0px",background:"white"},attrs:{"max-height":"800"},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},a=[],o=n("953d"),l=(n("a753"),n("8096"),n("14e1"),{data:function(){return{content:null,title:"",publisher:"",url:"",file:null}},methods:{onEditorChange:function(t){var e=t.html;this.content=e},getFile:function(t){this.file=t.target.files[0]},publish:function(){var t=this;this.$confirm("是否确认发表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){var e=new FormData;e.append("File",t.file),t.$http.post("boss/upload",e).then((function(e){t.url=e.data.data}));var n={id:t.$route.params.announceId,title:t.title,publisher:t.publisher,content:t.content,fileurl:t.url};t.$http.post("boss/updateannounce",{Announce:n}).then((function(){t.$message({type:"success",message:"提交成功!"}),t.content=null,t.$router.go(-1)}))})).catch((function(){t.$message({type:"warning",message:"发布失败"})}))},getData:function(){var t=this;this.$http.get("boss/getannounce",{params:{id:this.$route.params.announceId}}).then((function(e){var n=e.data.data;t.title=n.title,t.publisher=n.publisher,t.content=n.content,t.url=n.fileURL}))}},components:{quillEditor:o["quillEditor"]},mounted:function(){this.getData()}}),s=l,u=(n("9400"),n("2877")),c=Object(u["a"])(s,i,a,!1,null,"53e436c3",null);e["default"]=c.exports},9400:function(t,e,n){"use strict";var i=n("1d40"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-1b028344.2e23fbb0.js.map