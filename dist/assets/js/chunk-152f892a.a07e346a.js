(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-152f892a"],{"4a49":function(t,e,n){"use strict";var i=n("94bf"),o=n.n(i);o.a},"5a75":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"header"}},[n("div",{staticClass:"logo"},[t._v(" 靖江市科技镇长团管理后台 ")]),n("div",{staticClass:"quit"},[n("el-button",{attrs:{type:"info"},on:{click:function(e){return t.quit()}}},[t._v("退出")])],1)]),n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)",height:"100%"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-openeds":t.actives,"background-color":"rgb(21, 27, 39)","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[t._v("用户管理")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.goUserList()}}},[t._v("用户列表")])],1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("审批管理")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){return t.goSincere()}}},[t._v("科研成果")]),n("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){return t.goCompany()}}},[t._v("企业需求")])],1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[t._v("基本信息管理")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"3-1"},on:{click:function(e){return t.goNewsManage()}}},[t._v("新闻管理")]),n("el-menu-item",{attrs:{index:"3-2"},on:{click:function(e){return t.goNoticePublish()}}},[t._v("通知公告")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[t._v("权限管理")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"4-1"},on:{click:function(e){return t.goRoleList()}}},[t._v("角色列表")]),n("el-menu-item",{attrs:{index:"4-2"},on:{click:function(e){return t.goPermissionList()}}},[t._v("权限列表")])],1)],2)],1)],1),n("el-container",[n("router-view")],1)],1)],1)},o=[],s=(n("b0c0"),{data:function(){return{name:"",actives:[]}},methods:{handleOpen:function(t){this.actives=[t],sessionStorage.setItem("actives",this.actives)},goUserList:function(){this.$router.push("/manager/userlist"),this.name="userlist"},quit:function(){sessionStorage.clear(),this.$router.push("/"),this.$store.commit("logout"),"Login"!==this.$router.name&&this.$router.push("/login")},active:function(t){this.actives=[t]},goRoleList:function(){this.$router.push("/manager/rolelist")},goPermissionList:function(){this.$router.push("/manager/permission")},goNewsManage:function(){this.$router.push("/manager/newsmanage")},goNoticePublish:function(){this.$router.push("/manager/announces")},goSincere:function(){this.$router.push("/manager/sincere")},goCompany:function(){this.$router.push("/manager/company")}},mounted:function(){sessionStorage.getItem("active")&&(this.actives=sessionStorage.getItem("active"))}}),r=s,u=(n("4a49"),n("2877")),a=Object(u["a"])(r,i,o,!1,null,"c00fadea",null);e["default"]=a.exports},"94bf":function(t,e,n){},b0c0:function(t,e,n){var i=n("83ab"),o=n("9bf2").f,s=Function.prototype,r=s.toString,u=/^\s*function ([^ (]*)/,a="name";!i||a in s||o(s,a,{configurable:!0,get:function(){try{return r.call(this).match(u)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-152f892a.a07e346a.js.map