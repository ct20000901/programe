(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bede0d2"],{"2e4a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"contain"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("用户管理")]),a("el-breadcrumb-item",[e._v("用户列表")])],1)],1),a("el-main",[a("div",{staticClass:"top"},[a("search",{staticClass:"search",on:{callback:e.forsearch}}),a("el-button",{staticClass:"btn",attrs:{round:""},on:{click:function(t){return e.newone()}}},[e._v("添加")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isshow,expression:"isshow"}],staticClass:"newone"},[a("div",{staticStyle:{margin:"20px"}}),a("el-form",{ref:"formLabelAlign",attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"账号",required:""}},[a("el-input",{model:{value:e.formLabelAlign.username,callback:function(t){e.$set(e.formLabelAlign,"username",t)},expression:"formLabelAlign.username"}})],1),a("el-form-item",{attrs:{label:"密码",required:""}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.formLabelAlign.pass,callback:function(t){e.$set(e.formLabelAlign,"pass",t)},expression:"formLabelAlign.pass"}})],1),a("el-form-item",{attrs:{label:"确认密码"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.formLabelAlign.checkPass,callback:function(t){e.$set(e.formLabelAlign,"checkPass",t)},expression:"formLabelAlign.checkPass"}})],1),a("el-form-item",{attrs:{label:"手机号",prop:"phone_number",required:""}},[a("el-input",{model:{value:e.formLabelAlign.tel,callback:function(t){e.$set(e.formLabelAlign,"tel",t)},expression:"formLabelAlign.tel"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email",required:""}},[a("el-input",{model:{value:e.formLabelAlign.mail,callback:function(t){e.$set(e.formLabelAlign,"mail",t)},expression:"formLabelAlign.mail"}})],1),a("el-form-item",{attrs:{label:"是否启用"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.whether,callback:function(t){e.$set(e.formLabelAlign,"whether",t)},expression:"formLabelAlign.whether"}},e._l(e.options2,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"用户角色"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.role,callback:function(t){e.$set(e.formLabelAlign,"role",t)},expression:"formLabelAlign.role"}},e._l(e.options1,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("div",{staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.PageSize,e.currentPage*e.PageSize),border:""}},[a("el-table-column",{attrs:{label:"id",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.id))])]}}])}),a("el-table-column",{attrs:{label:"用户名",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.username))])]}}])}),a("el-table-column",{attrs:{label:"邮箱地址",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.mail))])]}}])}),a("el-table-column",{attrs:{label:"电话",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.tel))])]}}])}),a("el-table-column",{attrs:{label:"状态",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return e.situationOnchange(t.row)}},model:{value:t.row.whether,callback:function(a){e.$set(t.row,"whether",a)},expression:"scope.row.whether"}})],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{ref:"popover4",attrs:{placement:"right",width:"400",trigger:"click"}},[a("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.edit}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"必填"},model:{value:e.edit.name,callback:function(t){e.$set(e.edit,"name",t)},expression:"edit.name"}})],1),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{attrs:{placeholder:"必填"},model:{value:e.edit.tel,callback:function(t){e.$set(e.edit,"tel",t)},expression:"edit.tel"}})],1),a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{attrs:{placeholder:"必填"},model:{value:e.edit.mail,callback:function(t){e.$set(e.edit,"mail",t)},expression:"edit.mail"}})],1)],1),a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){return e.edits(t.$index,t.row)}}},[e._v("提交")])],1),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover4",arg:"popover4"}],staticClass:"edit_btn",attrs:{size:"mini"}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]),a("el-popover",{ref:"popover3",attrs:{placement:"right",width:"300",trigger:"click"}},[a("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"权限"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options1,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){return e.submit_permission(t.$index,t.row)}}},[e._v("提交")])],1),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover3",arg:"popover3"}],staticClass:"fenpeiquanxian",attrs:{size:"mini"}},[e._v("分配权限")]),a("el-button",{staticClass:"edit_btn",attrs:{size:"mini"},on:{click:function(a){return e.reSetpassword(t.row)}}},[e._v("重置密码")])]}}])})],1),a("div",{staticClass:"tabListPage"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},n=[],r=(a("b0c0"),a("a9e3"),a("8ba4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search_input"},[a("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:e.searching,callback:function(t){e.searching=t},expression:"searching"}})],1)}),i=[],o={name:"Search",props:[],data:function(){return{searching:""}}},s=o,c=a("2877"),u=Object(c["a"])(s,r,i,!1,null,null,null),p=u.exports,f={data:function(){return{tableData:[],ifcould:[],currentPage:1,totalCount:3,pageSizes:[1,5,10],PageSize:10,isshow:!1,labelPosition:"middle",formLabelAlign:{username:"",pass:"",checkPass:"",mail:"",role:"",tel:"",whether:""},edit:{name:"",mail:"",tel:""},options1:[{value:"company",label:"企业"},{value:"university",label:"高校"}],options2:[{value:"是",label:"是"},{value:"否",label:"否"}],value:""}},computed:{for_whether:function(e){return"是"===this.tableData[e].whether}},methods:{handleDelete:function(e){var t=this;console.log(e),this.$http.get("boss/deleteuser",{params:{id:e.id}}).then((function(){"管理员"===e.role?alert("该账号是管理员，删除失败！"):(console.log(123),t.$router.go(0))}))},forsearch:function(e){console.log(e)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1},handleCurrentChange:function(e){this.currentPage=e},getDataList:function(){var e=this,t={},a=[];this.$http.get("boss/alluser").then((function(l){console.log(l),e.totalCount=l.data.data.users.length,a=l.data.data.users;for(var n=0;n<e.totalCount;n++)t.id=a[n].id,t.username=a[n].username,t.password=a[n].password,t.mail=a[n].mail,t.tel=a[n].tel,t.role=a[n].role,"是"===a[n].whether?t.whether=!0:t.whether=!1,e.tableData.push(t),t={}}))},newone:function(){this.isshow=!this.isshow},submit:function(){var e=this,t=/^1[3|4|5|7|8][0-9]{9}$/,a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(this.formLabelAlign.pass==this.formLabelAlign.checkPass){var l=this.formLabelAlign;if(console.log(l),a.test(l.mail))if(t.test(l.tel)){var n={username:l.username,password:l.pass,mail:l.mail,tel:l.tel,whether:l.whether,role:l.role};this.$http.post("boss/adduser",n).then((function(t){t&&(e.isshow=!e.isshow)})).then((function(){e.$router.go(0)}))}else this.$notify({title:"警告",message:"请输入正确的电话号码",type:"warning",position:"top-left"});else this.$notify({title:"警告",message:"请输入符合规范的邮箱",type:"warning",position:"top-left"})}else alert("两次密码不相同")},edits:function(e,t){var a=this;this.$http.post("boss/updateUser",{id:t.id,username:this.edit.name,mail:this.edit.mail,tel:this.edit.tel}).then((function(e){console.log(e),a.$router.go(0),alert("修改成功")})),this.edit={name:"",mail:"",tel:""},this.getDataList()},situationOnchange:function(e){var t="";t=!0===e.whether?"是":"否",this.$http.post("boss/updateUser",{id:e.id,whether:t}).then((function(e){console.log(e)}))},submit_permission:function(e,t){var a=this;this.$http.post("boss/updateUser",{id:t.id,role:this.value}).then((function(e){console.log(e),a.value="",alert("设置成功")}))},reSetpassword:function(e){this.$http.get("boss/resetPwd",{params:{id:e.id}}).then((function(e){e&&alert("重置成功")}))}},components:{search:p},mounted:function(){this.getDataList()}},m=f,h=(a("7601"),Object(c["a"])(m,l,n,!1,null,"4126fada",null));t["default"]=h.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var l=a("1d80"),n=a("5899"),r="["+n+"]",i=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(e){return function(t){var a=String(l(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(o,"")),a}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5e89":function(e,t,a){var l=a("861d"),n=Math.floor;e.exports=function(e){return!l(e)&&isFinite(e)&&n(e)===e}},7156:function(e,t,a){var l=a("861d"),n=a("d2bb");e.exports=function(e,t,a){var r,i;return n&&"function"==typeof(r=t.constructor)&&r!==a&&l(i=r.prototype)&&i!==a.prototype&&n(e,i),e}},7601:function(e,t,a){"use strict";var l=a("8645"),n=a.n(l);n.a},8645:function(e,t,a){},"8ba4":function(e,t,a){var l=a("23e7"),n=a("5e89");l({target:"Number",stat:!0},{isInteger:n})},a9e3:function(e,t,a){"use strict";var l=a("83ab"),n=a("da84"),r=a("94ca"),i=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("c04e"),p=a("d039"),f=a("7c73"),m=a("241c").f,h=a("06cf").f,d=a("9bf2").f,b=a("58a8").trim,g="Number",v=n[g],w=v.prototype,_=s(f(w))==g,k=function(e){var t,a,l,n,r,i,o,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+c}for(r=c.slice(2),i=r.length,o=0;o<i;o++)if(s=r.charCodeAt(o),s<48||s>n)return NaN;return parseInt(r,l)}return+c};if(r(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,A=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof A&&(_?p((function(){w.valueOf.call(a)})):s(a)!=g)?c(new v(k(t)),a,A):k(t)},y=l?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;y.length>L;L++)o(v,x=y[L])&&!o(A,x)&&d(A,x,h(v,x));A.prototype=w,w.constructor=A,i(n,g,A)}}}]);
//# sourceMappingURL=chunk-1bede0d2.c36b5cf2.js.map