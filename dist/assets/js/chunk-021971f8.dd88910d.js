(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021971f8"],{"067e":function(e,t,n){"use strict";var a=n("1a0b"),r=n.n(a);r.a},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"1a0b":function(e,t,n){},"1dde":function(e,t,n){var a=n("d039"),r=n("b622"),i=n("2d00"),l=r("species");e.exports=function(e){return i>=51||!a((function(){var t=[],n=t.constructor={};return n[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2e4a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"contain"}},[n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),n("el-breadcrumb-item",[e._v("用户管理")]),n("el-breadcrumb-item",[e._v("用户列表")])],1)],1),n("el-main",[n("div",{staticClass:"top"},[n("el-input",{staticClass:"search",attrs:{placeholder:"请输入关键字","prefix-icon":"el-icon-search"},on:{change:e.filterTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("el-button",{staticClass:"btn",attrs:{round:""},on:{click:e.filterTable}},[e._v("搜索")]),n("el-button",{staticClass:"btn",attrs:{round:""},on:{click:function(t){return e.newone()}}},[e._v("添加")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isshow,expression:"isshow"}],staticClass:"newone"},[n("div",{staticStyle:{margin:"20px"}}),n("el-form",{ref:"formLabelAlign",attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.formLabelAlign,rules:e.rules}},[n("el-form-item",{attrs:{label:"用户名",required:""}},[n("el-input",{model:{value:e.formLabelAlign.username,callback:function(t){e.$set(e.formLabelAlign,"username",t)},expression:"formLabelAlign.username"}})],1),n("el-form-item",{attrs:{label:"账号",required:""}},[n("el-input",{attrs:{placeholder:"6~18位字符，只能包含英文字母、数字、下划线"},model:{value:e.formLabelAlign.account,callback:function(t){e.$set(e.formLabelAlign,"account",t)},expression:"formLabelAlign.account"}})],1),n("el-form-item",{attrs:{label:"密码",required:""}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.formLabelAlign.pass,callback:function(t){e.$set(e.formLabelAlign,"pass",t)},expression:"formLabelAlign.pass"}})],1),n("el-form-item",{attrs:{label:"确认密码"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.formLabelAlign.checkPass,callback:function(t){e.$set(e.formLabelAlign,"checkPass",t)},expression:"formLabelAlign.checkPass"}})],1),n("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[n("el-input",{model:{value:e.formLabelAlign.tel,callback:function(t){e.$set(e.formLabelAlign,"tel",t)},expression:"formLabelAlign.tel"}})],1),n("el-form-item",{attrs:{label:"邮箱",prop:"mail"}},[n("el-input",{model:{value:e.formLabelAlign.mail,callback:function(t){e.$set(e.formLabelAlign,"mail",t)},expression:"formLabelAlign.mail"}})],1),n("el-form-item",{attrs:{label:"是否启用"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.whether,callback:function(t){e.$set(e.formLabelAlign,"whether",t)},expression:"formLabelAlign.whether"}},e._l(e.options2,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"用户角色",required:""}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.role,callback:function(t){e.$set(e.formLabelAlign,"role",t)},expression:"formLabelAlign.role"}},e._l(e.options1,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),n("div",{staticStyle:{"margin-left":"20px"}},[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.PageSize,e.currentPage*e.PageSize),border:""}},[n("el-table-column",{attrs:{label:"id",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.id))])]}}])}),n("el-table-column",{attrs:{label:"用户名",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.username))])]}}])}),n("el-table-column",{attrs:{label:"邮箱地址",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.mail))])]}}])}),n("el-table-column",{attrs:{label:"电话",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.tel))])]}}])}),n("el-table-column",{attrs:{label:"状态",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(n){return e.situationOnchange(t.row)}},model:{value:t.row.whether,callback:function(n){e.$set(t.row,"whether",n)},expression:"scope.row.whether"}})],1)]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dialog",{attrs:{title:"信息编辑",visible:e.edit_show},on:{"update:visible":function(t){e.edit_show=t}}},[n("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.edit}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{attrs:{disabled:"true"},model:{value:e.edit.account,callback:function(t){e.$set(e.edit,"account",t)},expression:"edit.account"}})],1),n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"必填"},model:{value:e.edit.name,callback:function(t){e.$set(e.edit,"name",t)},expression:"edit.name"}})],1),n("el-form-item",{attrs:{label:"电话"}},[n("el-input",{attrs:{placeholder:"选填"},model:{value:e.edit.tel,callback:function(t){e.$set(e.edit,"tel",t)},expression:"edit.tel"}})],1),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{placeholder:"选填"},model:{value:e.edit.mail,callback:function(t){e.$set(e.edit,"mail",t)},expression:"edit.mail"}})],1)],1),n("div",{staticClass:"dialog-footer btn_color",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"mini",round:"",type:"primary"},on:{click:function(t){return e.edits()}}},[e._v("提交")]),n("el-button",{attrs:{size:"mini",round:"",type:"info"},on:{click:function(t){e.edit_show=!e.edit_show}}},[e._v(" 取消")])],1)],1),n("el-button",{staticClass:"edit_btn",attrs:{size:"mini"},on:{click:function(n){return e.open(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")]),n("el-popover",{ref:"popover3",attrs:{placement:"right",width:"300",trigger:"click"}},[n("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"权限"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options1,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),n("el-button",{attrs:{size:"mini",round:""},on:{click:function(n){return e.submit_permission(t.$index,t.row)}}},[e._v("提交")])],1),n("el-button",{directives:[{name:"popover",rawName:"v-popover:popover3",arg:"popover3"}],staticClass:"fenpeiquanxian",attrs:{size:"mini"}},[e._v("更换角色")]),n("el-button",{staticClass:"edit_btn",attrs:{size:"mini"},on:{click:function(n){return e.reSetpassword(t.row)}}},[e._v("重置密码")]),"manager"===t.row.role?n("el-button",{staticClass:"edit_btn",attrs:{size:"mini"},on:{click:function(n){return e.edit_password(t.row)}}},[e._v("修改密码")]):e._e()]}}])})],1),n("div",{staticClass:"tabListPage"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},r=[],i=(n("4de4"),n("c975"),n("b0c0"),n("ac1f"),n("841c"),{data:function(){var e=/^1[34578]\d{9}$/,t=/^\w+@\w+(\.\w+)+$/,n=function(e,n,a){return n?t.test(n)?a():void a(new Error("请输入合法邮箱")):a(new Error("邮箱不能为空"))},a=function(t,n,a){return n?e.test(n)?a():void a(new Error("请输入合法的手机号码")):a(new Error("电话号码不能为空"))};return{edit_show:!1,row:null,tableData:[],ifcould:[],currentPage:1,totalCount:3,pageSizes:[1,5,10],PageSize:10,isshow:!1,labelPosition:"middle",formLabelAlign:{username:"",account:"",pass:"",checkPass:"",mail:"",role:"",tel:"",whether:""},edit:{name:"",mail:"",tel:""},options1:[{value:"company",label:"企业"},{value:"university",label:"高校"}],options2:[{value:"是",label:"是"},{value:"否",label:"否"}],rules:{mail:[{validator:n,trigger:"blur"},{required:!0,message:"请输入联系人邮箱",trigger:"blur"}],tel:[{required:!0,message:"请输入联系人电话",trigger:"blur"},{validator:a,trigger:"blur"}]},value:"",search:""}},computed:{for_whether:function(e){return"是"===this.tableData[e].whether}},watch:{edit_show:function(e,t){!1===e&&e!==t&&(this.edit={name:"",mail:"",tel:""})},isshow:function(e,t){!1===e&&e!==t&&(this.formLabelAlign={})}},methods:{edit_password:function(e){var t=this;this.$prompt("请输入新密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){var a=n.value;t.$http.get("/boss/resetPwd1",{params:{id:e.id,pwd:a}}).then((function(){t.$message({type:"success",message:"你的新密码是: "+a})}))})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},handleDelete:function(e){var t=this;this.$confirm("此操作将删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.get("boss/deleteuser",{params:{id:e.id}}).then((function(){"管理员"===e.role?alert("该账号是管理员，删除失败！"):(t.$message({type:"success",message:"删除成功!"}),t.$router.go(0))}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},open:function(e){this.edit_show=!this.edit_show,!0===this.edit_show&&(this.edit={account:e.account,name:e.username,mail:e.mail,tel:e.tel}),this.row=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1},handleCurrentChange:function(e){this.currentPage=e},getDataList:function(){var e=this,t={},n=[];this.tableData=null,this.tableData=[],this.$http.get("boss/alluser").then((function(a){e.totalCount=a.data.data.users.length,n=a.data.data.users;for(var r=0;r<e.totalCount;r++)t.account=n[r].account,t.id=n[r].id,t.role=n[r].role,t.username=n[r].username,t.password=n[r].password,t.mail=n[r].mail,t.tel=n[r].tel,t.role=n[r].role,"是"===n[r].whether?t.whether=!0:t.whether=!1,e.tableData.push(t),t={}}))},newone:function(){this.isshow=!this.isshow},submit:function(){var e=this,t=this.formLabelAlign,n={username:t.username,password:t.pass,mail:t.mail,tel:t.tel,whether:t.whether,role:t.role,account:t.account};this.$http.post("boss/adduser",n).then((function(t){if(t){if(100===t.data.code)return void alert("账号被占用，请重新输入！");if(101===t.data.code)return void alert("用户名被占用，请重新输入！");200===t.data.code&&(e.getDataList(),e.isshow=!e.isshow)}}))},filterTable:function(){var e,t=this;""!=this.search&&this.tableData?(e=this.tableData.filter((function(e){return-1!=e.username.indexOf(t.search)})),this.tableData=e):this.getDataList()},edits:function(){var e=this,t=/^1[3|4|5|7|8][0-9]{9}$/,n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,a=this.edit;if(a.mail){if(!n.test(a.mail))return void this.$notify({title:"警告",message:"请输入符合规范的邮箱",type:"warning",position:"top-left"})}else a.mail=this.row.mail;if(a.tel){if(!t.test(a.tel))return void this.$notify({title:"警告",message:"请输入正确的电话号码",type:"warning",position:"top-left"})}else a.tel=this.row.tel;this.$http.post("boss/updateUser",{id:this.row.id,username:a.name,mail:a.mail,tel:a.tel}).then((function(){alert("修改成功"),e.edit={name:"",mail:"",tel:""},e.edit_show=!1,e.getDataList()}))},situationOnchange:function(e){var t="";t=!0===e.whether?"是":"否",this.$http.post("boss/updateUser",{id:e.id,whether:t})},submit_permission:function(e,t){var n=this;this.$http.post("boss/updateUser",{id:t.id,role:this.value}).then((function(){n.value="",alert("设置成功")}))},reSetpassword:function(e){this.$http.get("boss/resetPwd",{params:{id:e.id}}).then((function(e){e&&alert("重置成功")}))}},components:{},mounted:function(){this.getDataList()}}),l=i,o=(n("067e"),n("2877")),s=Object(o["a"])(l,a,r,!1,null,"33f1725a",null);t["default"]=s.exports},"4de4":function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").filter,i=n("1dde"),l=n("ae40"),o=i("filter"),s=l("filter");a({target:"Array",proto:!0,forced:!o||!s},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,n){var a=n("861d"),r=n("e8b5"),i=n("b622"),l=i("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[l],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"841c":function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),i=n("1d80"),l=n("129f"),o=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var i=r(e),s=String(this),c=i.lastIndex;l(c,0)||(i.lastIndex=0);var u=o(i,s);return l(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,l=String.prototype.replace,o=i,s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||c;f&&(o=function(e){var t,n,r,o,f=this,d=c&&f.sticky,p=a.call(f),h=f.source,m=0,b=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(h="(?: "+h+")",b=" "+b,m++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),s&&(t=f.lastIndex),r=i.call(d?n:f,b),d?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:s&&r&&(f.lastIndex=f.global?r.index+r[0].length:t),u&&r&&r.length>1&&l.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=o},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,n){"use strict";var a=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))}},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,n){var a=n("83ab"),r=n("d039"),i=n("5135"),l=Object.defineProperty,o={},s=function(e){throw e};e.exports=function(e,t){if(i(o,e))return o[e];t||(t={});var n=[][e],c=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:s,f=i(t,1)?t[1]:void 0;return o[e]=!!n&&!r((function(){if(c&&!a)return!0;var e={length:-1};c?l(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,f)}))}},b0c0:function(e,t,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,s="name";!a||s in i||r(i,s,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(e){return""}}})},b727:function(e,t,n){var a=n("0366"),r=n("44ad"),i=n("7b0b"),l=n("50c4"),o=n("65f0"),s=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,u=4==e,f=6==e,d=5==e||f;return function(p,h,m,b){for(var v,g,w=i(p),x=r(w),y=a(h,m,3),_=l(x.length),A=0,S=b||o,k=t?S(p,_):n?S(p,0):void 0;_>A;A++)if((d||A in x)&&(v=x[A],g=y(v,A,w),e))if(t)k[A]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return A;case 2:s.call(k,v)}else if(u)return!1;return f?-1:c||u?u:k}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},c975:function(e,t,n){"use strict";var a=n("23e7"),r=n("4d64").indexOf,i=n("a640"),l=n("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=l("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!c||!u},{indexOf:function(e){return s?o.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),l=n("9263"),o=n("9112"),s=i("species"),c=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var h=i(e),m=!r((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),b=m&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!m||!b||"replace"===e&&(!c||!u||d)||"split"===e&&!p){var v=/./[h],g=n(h,""[e],(function(e,t,n,a,r){return t.exec===l?m&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),w=g[0],x=g[1];a(String.prototype,e,w),a(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&o(RegExp.prototype[h],"sham",!0)}},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-021971f8.dd88910d.js.map