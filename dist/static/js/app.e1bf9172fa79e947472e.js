webpackJsonp([1],{110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t,r){var n=r(5)(r(59),r(120),null,null,null);e.exports=n.exports},115:function(e,t,r){function n(e){r(111)}var i=r(5)(r(60),r(122),n,null,null);e.exports=i.exports},116:function(e,t,r){function n(e){r(113)}var i=r(5)(r(61),r(124),n,null,null);e.exports=i.exports},117:function(e,t,r){var n=r(5)(r(62),r(119),null,null,null);e.exports=n.exports},118:function(e,t,r){function n(e){r(110)}var i=r(5)(r(63),r(121),n,null,null);e.exports=i.exports},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("个人信息")]),e._v(" "),r("el-form",{attrs:{model:e.profile}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.profile.name,callback:function(t){e.profile.name=t},expression:"profile.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市"}},[r("el-input",{model:{value:e.profile.city,callback:function(t){e.profile.city=t},expression:"profile.city"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出生"}},[r("el-input",{model:{value:e.profile.birth,callback:function(t){e.profile.birth=t},expression:"profile.birth"}})],1)],1)],1)},staticRenderFns:[]}},120:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.title))]),e._v(" "),r("el-form",[e._l(e.items,function(t,n){return r("div",{key:n,staticClass:"container"},[e._l(e.keys,function(n){return r("el-form-item",{key:n,attrs:{label:e.labels[n]||n}},[r("el-input",{model:{value:t[n],callback:function(r){e.$set(t,n,r)},expression:"work[key]"}})],1)}),e._v(" "),r("i",{staticClass:"el-icon-delete",on:{click:function(t){e.removeWorkHistory(n)}}}),e._v(" "),r("hr")],2)}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addWorkHistory}},[e._v("添加一项")])],2)],1)},staticRenderFns:[]}},121:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"topbar"}},[r("div",{staticClass:"logo"},[e._v("\n        VueResumer\n    ")]),e._v(" "),r("div",{staticClass:"actions"},[r("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),r("el-button",[e._v("登录")]),e._v(" "),r("el-button",{on:{click:e.preview}},[e._v("预览")])],1)])},staticRenderFns:[]}},122:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"editor"}},[r("nav",[r("ol",e._l([0,1,2,3,4,5],function(t){return r("li",{key:t,class:{active:e.currentTab===t},on:{click:function(r){e.currentTab=t}}},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),r("ol",{staticClass:"panes"},[r("li",{class:{active:0===e.currentTab}},[r("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),r("li",{class:{active:1===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.workHistory,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),r("li",{class:{active:2===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学位"},title:"学习经历"}})],1),e._v(" "),r("li",{class:{active:3===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.projects,labels:{name:"项目名称",content:"工作内容"},title:"项目经历"}})],1),e._v(" "),r("li",{class:{active:4===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.awards,labels:{name:"获奖名称"},title:"获奖情况"}})],1),e._v(" "),r("li",{class:{active:5===e.currentTab}},[r("h2",[e._v("联系方式")]),e._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{model:{value:e.resume.contacts.email,callback:function(t){e.resume.contacts.email=t},expression:"resume.contacts.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机"}},[r("el-input",{model:{value:e.resume.contacts.phone,callback:function(t){e.resume.contacts.phone=t},expression:"resume.contacts.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"qq"}},[r("el-input",{model:{value:e.resume.contacts.qq,callback:function(t){e.resume.contacts.qq=t},expression:"resume.contacts.qq"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信"}},[r("el-input",{model:{value:e.resume.contacts.wechat,callback:function(t){e.resume.contacts.wechat=t},expression:"resume.contacts.wechat"}})],1)],1)],1)])])},staticRenderFns:[]}},123:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[r("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),r("main",[r("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),r("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),r("el-button",{attrs:{id:"exitPreview"},on:{click:e.exitPreview}},[e._v("退出预览")])],1)},staticRenderFns:[]}},124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"preview"}},[r("h1",[e._v(e._s(e.resume.profile.name||"姓名"))]),e._v(" "),r("p",[e._v(e._s(e.resume.profile.city||"城市")+" | "+e._s(e.resume.profile.birth||"出生年月"))]),e._v(" "),r("hr"),e._v(" "),e.filter(e.resume.projects).length>0?r("section",[r("h2",[e._v("项目")]),e._v(" "),r("ul",e._l(e.filter(e.resume.projects),function(t){return r("li",{key:t.name},[e._v("\n               "+e._s(t.name)+" \n               "+e._s(t.content)+"\n           ")])}))]):e._e(),e._v(" "),e.filter(e.resume.workHistory).length>0?r("section",[r("h2",[e._v("工作经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.workHistory),function(t){return r("li",{key:t.company},[e._v("\n               "+e._s(t.company)+" \n               "+e._s(t.content)+"\n           ")])}))]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?r("section",[r("h2",[e._v("学习经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.studyHistory),function(t){return r("li",{key:t.school},[e._v("\n               "+e._s(t.school)+" \n               "+e._s(t.duration)+"\n               "+e._s(t.degree)+"\n           ")])}))]):e._e(),e._v(" "),e.filter(e.resume.awards).length>0?r("section",[r("h2",[e._v("获奖情况")]),e._v(" "),r("ul",e._l(e.filter(e.resume.awards),function(t){return r("li",{key:t.name},[e._v("\n               "+e._s(t.name)+" \n           ")])}))]):e._e(),e._v(" "),r("section",[r("h2",[e._v("联系方式")]),e._v(" "),r("ul",[r("li",[e._v("\n               邮箱:"+e._s(e.resume.contacts.email)+" \n               电话:"+e._s(e.resume.contacts.phone)+" \n               qq:"+e._s(e.resume.contacts.qq)+" \n               微信:"+e._s(e.resume.contacts.wechat)+" \n           ")])])])])},staticRenderFns:[]}},32:function(e,t){},33:function(e,t){},34:function(e,t){},35:function(e,t,r){function n(e){r(112)}var i=r(5)(r(58),r(123),n,null,null);e.exports=i.exports},58:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(118),i=r.n(n),s=r(115),o=r.n(s),l=r(116),a=r.n(l);t.default={name:"app",data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},workHistory:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projects:[{name:"",content:""}],awards:[{name:""}],contacts:{email:"",phone:"",qq:"",wechat:""}}}},components:{Topbar:i.a,Editor:o.a,Preview:a.a},methods:{preview:function(){this.previewMode=!0},exitPreview:function(){this.previewMode=!1}}}},59:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(65),i=r.n(n);t.default={props:["items","labels","title"],computed:{keys:function(){return i()(this.items[0])}},methods:{addWorkHistory:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeWorkHistory:function(e){this.items.splice(e,1)}}}},60:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(117),i=r.n(n),s=r(114),o=r.n(s);t.default={props:["resume"],components:{ProfileEditor:i.a,ArrayEditor:o.a},data:function(){return{currentTab:0,icons:["shenfenzheng","work","book","project","jiangbei","phone"]}},methods:{}}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var r in e)if(e[r]){t=!1;break}return t}}}},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["profile"]}},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{preview:function(){this.$emit("preview")}}}},64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),i=r(35),s=r.n(i),o=r(33),l=(r.n(o),r(34)),a=(r.n(l),r(31)),c=r.n(a),u=r(32);r.n(u);n.default.use(c.a),n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App/>",components:{App:s.a}})}},[64]);
//# sourceMappingURL=app.e1bf9172fa79e947472e.js.map