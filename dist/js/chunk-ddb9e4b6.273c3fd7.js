(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddb9e4b6"],{"09bc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contain"}},[n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),n("el-breadcrumb-item",[t._v("审批管理")]),n("el-breadcrumb-item",[t._v("科研成果")])],1)],1),n("el-main",[n("div",{attrs:{id:"main"}},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"待审核成果","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"btn1",attrs:{type:"text"},on:{click:function(n){return t.forMore(e.row)}}},[t._v(t._s(e.row.waiting))])]}}])}),n("el-table-column",{attrs:{label:"成果负责人",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),n("el-table-column",{attrs:{label:"时间",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])})],1),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.passAll()}}},[t._v("批量通过")]),n("el-button",{attrs:{type:"warning",round:""},on:{click:function(e){return t.toggleSelection()}}},[t._v("取消选中")])],1)],1)])],1)],1)},i=[],o=(n("4160"),n("b0c0"),n("159b"),n("4328")),a=n.n(o),c={data:function(){return{tableData:[],multipleSelection:[]}},methods:{toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},passAll:function(){for(var t=this,e=this.multipleSelection,n=this,r=[],i=0;i<e.length;i++)r.push(e[i].id);console.log(r),this.$http.get("boss/sciapproval?"+a.a.stringify({Ids:r},{arrayFormat:"repeat"})).then((function(e){e&&(n.multipleSelection=[],n.$message({message:"审核通过成功",type:"success"}),t.$router.go(0))})).catch((function(t){console.log(t)}))},forMore:function(t){this.$router.push({name:"more",params:{sincereId:t.id}})},getDataList:function(){var t=this,e={},n=[];this.$http.get("boss/scis").then((function(r){console.log(r),n=r.data.data.scis;for(var i=n.length,o=0;o<i;o++)e.date=n[o].time,e.name=n[o].uploads,e.waiting=n[o].entryname,e.id=n[o].id,t.tableData.push(e),e={}}))}},mounted:function(){this.getDataList()}},s=c,l=(n("5dc3"),n("2877")),u=Object(l["a"])(s,r,i,!1,null,"2342c164",null);e["default"]=u.exports},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),a=n("9112");for(var c in i){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"5dc3":function(t,e,n){"use strict";var r=n("69f9"),i=n.n(r);i.a},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f9":function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:s,f=o(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,u,f)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,p,b,m){for(var v,S,g=o(h),y=i(g),L=r(p,b,3),w=a(y.length),E=0,T=m||c,_=e?T(h,w):n?T(h,0):void 0;w>E;E++)if((d||E in y)&&(v=y[E],S=L(v,E,g),t))if(e)_[E]=S;else if(S)switch(t){case 3:return!0;case 5:return v;case 6:return E;case 2:s.call(_,v)}else if(u)return!1;return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-ddb9e4b6.273c3fd7.js.map