(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e0b656"],{"0e7c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contain"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("基本信息管理")]),a("el-breadcrumb-item",[t._v("新闻列表")])],1)],1),a("el-main",[a("div",{attrs:{id:"main"}},[a("el-button",{staticClass:"btn1",attrs:{round:""},on:{click:function(e){return t.goAddNews()}}},[t._v("发布新闻")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"title",label:"新闻列表"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",width:"220"}}),a("el-table-column",{attrs:{prop:"publisher",label:"发布者",width:"120"}}),a("el-table-column",{attrs:{label:"操作",width:"200px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])],1)],1)},i=[],l={data:function(){return{tableData:[],totalCount:0}},methods:{handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){var a=this;this.$http.get("boss/deletenews",{params:{id:e.id}}).then((function(){a.$router.go(0)})),console.log("成功")},goAddNews:function(){this.$router.push("/manager/addnews")},getDataList:function(){var t=this,e={};this.$http.get("boss/news").then((function(a){for(var n=a.data.data,i=n.length,l=0;l<i;l++)e.title=n[l].title,e.id=n[l].id,e.publisher=n[l].publisher,e.time=n[l].time,t.tableData.push(e),e={};console.log(t.tableData)}))}},mounted:function(){this.getDataList()}},r=l,o=(a("8c47"),a("2877")),s=Object(o["a"])(r,n,i,!1,null,"25c734da",null);e["default"]=s.exports},"7e7d":function(t,e,a){},"8c47":function(t,e,a){"use strict";var n=a("7e7d"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-79e0b656.ff404383.js.map