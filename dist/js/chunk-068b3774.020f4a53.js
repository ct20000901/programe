(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068b3774"],{"32bf":function(t,e,n){},"429c":function(t,e,n){"use strict";var a=n("32bf"),i=n.n(a);i.a},a02a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),n("el-breadcrumb-item",[t._v("基本信息管理")]),n("el-breadcrumb-item",[t._v("通知公告")])],1)],1),n("el-main",[n("div",{attrs:{id:"main"}},[n("el-button",{staticClass:"btn1",attrs:{round:""},on:{click:function(e){return t.goAddNotice()}}},[t._v("发布公告")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"title",label:"公告列表"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"btn2",attrs:{type:"text"},on:{click:function(n){return t.forMore(e.row)}}},[t._v(t._s(e.row.title))])]}}])}),n("el-table-column",{attrs:{prop:"time",label:"时间",width:"245"}}),n("el-table-column",{attrs:{prop:"publisher",label:"发布者",width:"140"}}),n("el-table-column",{attrs:{label:"操作",width:"200px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])],1)],1)},i=[],o={data:function(){return{tableData:[],totalCount:0}},methods:{handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){var n=this;this.$http.get("boss/deleteannounce",{params:{id:e.id}}).then((function(){n.$router.go(0)})),console.log("成功")},forMore:function(t){this.$router.push({name:"updateNotice",params:{announceId:t.id}})},goAddNotice:function(){this.$router.push("/manager/notice")},getDataList:function(){var t=this,e={};this.$http.get("boss/announces").then((function(n){for(var a=n.data.data,i=a.length,o=0;o<i;o++)e.title=a[o].title,e.id=a[o].id,e.publisher=a[o].publisher,e.time=a[o].time,t.tableData.push(e),e={};console.log(t.tableData)}))}},mounted:function(){this.getDataList()}},r=o,l=(n("429c"),n("2877")),s=Object(l["a"])(r,a,i,!1,null,"ebb1ddd8",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-068b3774.020f4a53.js.map