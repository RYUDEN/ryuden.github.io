(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"2db4":function(s,e){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJCRjAzRkI1QUZEQzExRTg4MzUwOUQ4Mzc4MDM1RDEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJCRjAzRkI2QUZEQzExRTg4MzUwOUQ4Mzc4MDM1RDEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkJGMDNGQjNBRkRDMTFFODgzNTA5RDgzNzgwMzVEMTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkJGMDNGQjRBRkRDMTFFODgzNTA5RDgzNzgwMzVEMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TapV5AAABSklEQVR42mIMvqTLgASYgDgciCOB2AKIRYH4NRCfAOLlQLwSiP8hK4YBJSA+BcTLgNgXqpEBSvtCxU9B1aFoBgkcB2JjBvzAGKpOCaaZCeocMQIaGZgYwXaJQdUzgXgRQGxCSKMshzJDv+p6Bi5mHgao+giQ5lhiNNYpzmJY9XI6w7e/X2DCsUzotvKxCGJorFeczbDgWTfD0Y87kKX0QZpFYDyQk3pV1zAY8tqgaJz/rAtdIwgIM2tliueA9IF4v///Yrjx7TxDkVwPw5//vxkyZepxaQSBVyCbzyCL3P52maHjYS5DmHgGPo0gcJERmMKigIyl6DKcTDwM3/99wReO0SCbV6DbDgIENILUr2CCplVQXL9iIA68gqr/B0ued4HYCojPEtB4FqruLnrGAAmYATEoDDYD8TMg/gXEz6H8aKj8XZgGgAADANb1XkPUhosNAAAAAElFTkSuQmCC"},"6d84":function(s,e,t){"use strict";var a=t("c06d"),i=t.n(a);i.a},c06d:function(s,e,t){},f574:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"register container"},[a("div",{staticClass:"info"},[a("Tile",{attrs:{display:!0}}),a("Step",{attrs:{step:"2"}}),a("div",{staticClass:"form"},[a("table",[a("tr",[s._m(0),a("td",{staticClass:"input"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:s.user,expression:"user"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:s.user},on:{input:function(e){e.target.composing||(s.user=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!1===s.access_user,expression:"access_user === false"}],staticClass:"fail"},[s._v("用户名已被注册")]),a("img",{directives:[{name:"show",rawName:"v-show",value:s.access_user,expression:"access_user"}],staticClass:"access",attrs:{src:t("2db4"),alt:""}})])])]),a("tr",[s._m(1),a("td",{staticClass:"input"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"密码需为6-20位字母、数字，至少包含字母和数字"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!1===s.access,expression:"access === false"}],staticClass:"fail"},[s._v("两次输入的密码不相同！")]),a("img",{directives:[{name:"show",rawName:"v-show",value:s.access,expression:"access"}],staticClass:"access",attrs:{src:t("2db4"),alt:""}})])])]),a("tr",[s._m(2),a("td",{staticClass:"input"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:s.checkPassword,expression:"checkPassword"}],attrs:{type:"password",placeholder:"请再次确认刚才输入的密码"},domProps:{value:s.checkPassword},on:{blur:s.check,input:function(e){e.target.composing||(s.checkPassword=e.target.value)}}})])])])]),a("div",{staticClass:"btn",on:{click:s.nextStep}},[s._v("\n                下一步\n            ")])])],1)])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("td",{staticClass:"tile"},[t("p",[s._v("用户名"),t("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("td",{staticClass:"tile"},[t("p",[s._v("密 码"),t("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("td",{staticClass:"tile"},[t("p",[s._v("确认密码"),t("span",{staticStyle:{width:"100%",display:"inline-block"}})])])}],c=t("be94"),r=t("fe64"),n=t("11de"),l=t("2f62"),o={name:"step-two",components:{Tile:r["a"],Step:n["a"]},created:function(){2!==this.register.step&&this.$router.push("/")},data:function(){return{access:"",access_user:"",user:"",password:"",checkPassword:""}},methods:{check:function(){this.password===this.checkPassword?this.access=!0:this.access=!1},nextStep:function(){if(!0===this.access){var s={register:{step:3,phone:this.register.phone,user:this.user,password:this.password}};this.$store.dispatch("register/setRegister",s),this.$router.push("/sann")}}},computed:Object(c["a"])({},Object(l["b"])("register",["register"]))},p=o,d=(t("6d84"),t("2877")),u=Object(d["a"])(p,a,i,!1,null,"248dcd76",null);u.options.__file="step-two.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=34.6229fe34.js.map