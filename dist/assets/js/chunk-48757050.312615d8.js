(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48757050"],{"6bf9":function(t,e,n){},c49e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("div",{staticClass:"header"},[n("el-input",{staticClass:"title",attrs:{placeholder:"新闻标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("el-input",{staticClass:"publisher",attrs:{placeholder:"发布者"},model:{value:t.publisher,callback:function(e){t.publisher=e},expression:"publisher"}}),n("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.publish()}}},[t._v("确认修改")]),n("input",{attrs:{accept:"*.pdf,*.txt,*.doc",type:"file",name:"image"},on:{change:function(e){return t.getFile(e)}}})],1),n("div",{staticClass:"write"},[n("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"750px",width:"1300px",margin:"20px auto"},attrs:{"max-height":"800"},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},a=[],s=n("953d"),o=(n("a753"),n("8096"),n("14e1"),{data:function(){return{content:null,title:"",publisher:"",url:""}},methods:{onEditorChange:function(t){var e=t.html;this.content=e},getFile:function(t){this.file=t.target.files[0]},publish:function(){var t=this;this.$confirm("是否确认发表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){var e,n=new FormData;n.append("File",t.file),t.$http.post("boss/upload",n).then((function(n){e=n.data.data;var i={id:t.$route.params.newsId,title:t.title,publisher:t.publisher,context:t.content,fileURL:e};t.$http.post("/boss/updatenews",{news:i}).then((function(){t.$message({type:"success",message:"提交成功!"}),t.content=null,t.$router.go(-1)}))}))})).catch((function(){t.$message({type:"warning",message:"发布失败"})}))},getData:function(){var t=this;this.$http.get("boss/readNews",{params:{id:this.$route.params.newsId}}).then((function(e){var n=e.data.data;t.title=n.title,t.publisher=n.publisher,t.content=n.context}))}},components:{quillEditor:s["quillEditor"]},mounted:function(){this.getData()}}),l=o,c=(n("f977"),n("2877")),r=Object(c["a"])(l,i,a,!1,null,"3bfe5358",null);e["default"]=r.exports},f977:function(t,e,n){"use strict";var i=n("6bf9"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-48757050.312615d8.js.map