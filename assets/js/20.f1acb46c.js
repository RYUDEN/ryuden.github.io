(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{2777:function(t,e,s){},"353c":function(t,e,s){},"516d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"present"},[a("ul",{staticClass:"routes"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),a("li",[a("router-link",{attrs:{to:"/money"}},[t._v("我的余额")])],1),a("li",[a("router-link",{attrs:{to:"/money/exchange"}},[t._v("卡券兑换")])],1)]),1===t.step?a("div",{staticClass:"step step-1"},[a("div",{staticClass:"step-form"},[a("h2",{staticClass:"ac bold"},[t._v("卡券兑换")]),a("form",[a("table",{staticClass:"row clearfix"},[a("tr",{staticClass:"row col-12"},[a("td",{staticClass:"t-tile col-2"},[t._v("卡    号：")]),a("td",{staticClass:"t-content col-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{placeholder:"充值卡卡号",type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),a("tr",{staticClass:"row col-12"},[a("td",{staticClass:"t-tile col-2"},[t._v("密    码：")]),a("td",{staticClass:"t-content col-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{placeholder:"请输入充值卡密码",type:"text"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])]),a("tr",{staticClass:"row col-12"},[a("td",{staticClass:"t-tile col-2"},[t._v("验证码：")]),a("td",{staticClass:"t-content col-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sms_code,expression:"sms_code"}],staticClass:"account-input",attrs:{type:"text",placeholder:"请验证手机验证码"},domProps:{value:t.sms_code},on:{input:function(e){e.target.composing||(t.sms_code=e.target.value)}}}),t.cardcheck?a("a",{staticClass:"button ac"},[a("Coder",{attrs:{phone:t.userinfo.mobile}})],1):a("a",{staticClass:"button ac cursor"},[t._v("\n                                获取验证码\n                            ")])])]),a("tr",{staticClass:"row col-12"},[a("td",{staticClass:"t-tile col-2"},[t._v("  ")]),a("td",{staticClass:"t-content col-10"},[a("div",{staticClass:"net-step bold ac cursor",class:{disabled:!t.allInput},on:{click:t.CheckUserInfo}},[t._v("下一步")])])])])])])]):t._e(),2===t.step?a("div",{staticClass:"step step-3"},[a("img",{attrs:{src:s("7893"),alt:""}}),a("p",{staticClass:"bold",staticStyle:{color:"black"}},[t._v("恭喜您，您的卡券兑换成功，福分已存入您的账户")]),a("div",{staticClass:"clearfix ac"},[a("div",{staticClass:"step-3-btn fl ac bold cursor"},[a("router-link",{attrs:{to:"/money"}},[t._v("查看我的福分")])],1),a("div",{staticClass:"step-3-btn fl ac bold cursor"},[a("router-link",{attrs:{to:"/"}},[t._v("返回个人中心")])],1)])]):t._e()])},i=[],c=(s("cadf"),s("551c"),s("097d"),s("675d")),n={showRecommend:!1,nav:"hidden",header:"fault"},o={name:"exchange",metaInfo:{title:"积分卡兑换-个人中心",meta:[{name:"福分通",content:"专注企业员工福利"}]},created:function(){this.$store.dispatch("layout/Change",n),this.storage.hasItem("FFT")&&this.getMemberInfo()},components:{Coder:c["a"]},data:function(){return{step:1,account:"",pwd:"",sms_code:"",type:0,userinfo:{}}},mounted:function(){var t=this;window.onpopstate=function(){t.back()}},computed:{cardcheck:function(){return!(!this.account||!this.pwd)},allInput:function(){return!!(this.account&&this.pwd&&this.sms_code)}},methods:{back:function(){1!==this.step&&(this.step-=1)},getMemberInfo:function(){var t=this;this.yum("api/member/getMemberInfo").then(function(e){200===e.data.status&&(t.userinfo=e.data.data)})},CheckUserInfo:function(){var t=this;if(this.account||this.bus.$emit("notice","请检查卡号是否有误?"),this.pwd||this.bus.$emit("notice","请检查密码是否有误?"),this.account&&this.pwd&&this.sms_code){var e={account:this.account,password:this.pwd,search:0};this.yum("api/member/cardCharge",e).then(function(e){200===e.data.status?(t.bus.$emit("notice",e.data.msg),t.$router.go(-1)):t.bus.$emit("notice",e.data.msg)})}}}},r=o,l=(s("89fa"),s("2877")),d=Object(l["a"])(r,a,i,!1,null,"3f111c8b",null);d.options.__file="exchange.vue";e["default"]=d.exports},"675d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"verify-sms"},[t.btn?s("div",{staticClass:"coder",on:{click:t.SendVerifyCode}},[t._v(" "+t._s(t.msg))]):s("div",{staticClass:"coder disabled"},[t._v(" "+t._s(t.msg))])])},i=[],c=(s("cadf"),s("551c"),s("097d"),{name:"VerifyCode",data:function(){return{msg:"获取验证码",btn:!0}},props:{phone:{default:"",type:String}},methods:{SendVerifyCode:function(){var t=this,e={phone:this.phone};this.yum("api/verify/sendSms",e).then(function(e){200===e.data.status?(t.Countdown(),t.bus.$emit("notice",e.data.msg)):t.bus.$emit("notice",e.data.msg)})},Countdown:function(){var t=this,e=60;this.btn=!1;var s=setInterval(function(){e-=1,t.msg="请等待".concat(e,"秒"),0===e&&(clearInterval(s),t.btn=!0,t.msg="获取验证码")},1e3)}}}),n=c,o=(s("8cff"),s("2877")),r=Object(o["a"])(n,a,i,!1,null,"4e32575c",null);r.options.__file="VerifyCode.vue";e["a"]=r.exports},7893:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFENDBBODMxRDI4NzExRThCOTFCRDNBODY3NDI5RTMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFENDBBODMyRDI4NzExRThCOTFCRDNBODY3NDI5RTMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQ0MEE4MkZEMjg3MTFFOEI5MUJEM0E4Njc0MjlFMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ0MEE4MzBEMjg3MTFFOEI5MUJEM0E4Njc0MjlFMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qu8gkAAAIS0lEQVR42uyd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"},"89fa":function(t,e,s){"use strict";var a=s("353c"),i=s.n(a);i.a},"8cff":function(t,e,s){"use strict";var a=s("2777"),i=s.n(a);i.a}}]);
//# sourceMappingURL=20.f1acb46c.js.map