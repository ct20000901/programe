(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1aa4b0"],{"2e2d":function(t,e,n){},"81a7":function(t,e,n){"use strict";var a=n("2e2d"),i=n.n(a);i.a},eb2d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),n("el-breadcrumb-item",[t._v("审批管理")]),n("el-breadcrumb-item",[t._v("企业需求")])],1)],1),n("el-main",[n("div",{attrs:{id:"main"}},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:t.label,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"btn1",attrs:{type:"text"},on:{click:function(n){return t.forMore(e.row)}}},[t._v(t._s(e.row.waiting))])]}}])}),n("el-table-column",{attrs:{label:"时间",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),n("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t.isshow?n("el-table-column",{attrs:{label:"操作",width:"150px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,3778300450)}):t._e()],1),n("div",{staticStyle:{"margin-top":"20px"}},[t.isshow?t._e():n("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.passAll()}}},[t._v("批量通过")]),t.isshow?t._e():n("el-button",{attrs:{type:"warning",round:""},on:{click:function(e){return t.toggleSelection()}}},[t._v("取消选中")]),n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){return t.passed()}}},[t._v(t._s(t.ispassed))])],1)],1)])],1)],1)},i=[],s=(n("4160"),n("b0c0"),n("159b"),n("4328")),l=n.n(s),o={data:function(){return{tableData:[],multipleSelection:[],ispassed:"已通过",isshow:!1,label:"待审核结果"}},methods:{handleDelete:function(t,e){var n=this;this.$http.get("boss/deleteEnter",{params:{id:e.id}}).then((function(){n.$router.go(0)}))},passed:function(){var t=this,e={},n=[];"已通过"===this.ispassed?(this.ispassed="未通过",this.label="已审核结果",this.tableData=[],this.$http.get("boss/entryhistory").then((function(a){n=a.data.data.enterpriseneeds;for(var i=n.length,s=0;s<i;s++)e.date=n[s].time,e.name=n[s].publisher,e.waiting=n[s].title,e.id=n[s].id,t.tableData.push(e),e={}})),this.isshow=!0):(this.ispassed="已通过",this.label="待审核结果",this.getDataList(),this.isshow=!1)},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},passAll:function(){for(var t=this,e=this.multipleSelection,n=this,a=[],i=0;i<e.length;i++)a.push(e[i].id);this.$http.get("boss/enterapproval?"+l.a.stringify({Ids:a},{arrayFormat:"repeat"})).then((function(e){e&&(n.multipleSelection=[],n.$message({message:"审核通过成功",type:"success"}),t.$router.go(0))})).catch((function(t){console.log(t)}))},forMore:function(t){this.$router.push({name:"more",params:{companyId:t.id,ispassed:this.isshow}})},getDataList:function(){var t=this,e={},n=[];this.tableData=[],this.$http.get("boss/enters").then((function(a){n=a.data.data.enterpriseneeds;for(var i=n.length,s=0;s<i;s++)e.date=n[s].time,e.name=n[s].publisher,e.waiting=n[s].title,e.id=n[s].id,t.tableData.push(e),e={}}))}},mounted:function(){this.getDataList()}},r=o,c=(n("81a7"),n("2877")),u=Object(c["a"])(r,a,i,!1,null,"69cf570f",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4a1aa4b0.879077c4.js.map