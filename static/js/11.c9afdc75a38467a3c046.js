webpackJsonp([11],{HkyE:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"ominput",data:function(){return{value:"",error:""}},methods:{print:function(){console.log(this.value)},handleRequire:function(){this.value?this.error="":this.error="请填写"}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("OMInput",{attrs:{placeholder:"OM输入框",title:"姓名",error:e.error,max:"10",clear:""},on:{require:e.handleRequire},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[r("OMButton",{attrs:{size:"small",outline:""}},[r("Icon",{attrs:{value:"send"}}),e._v("发送")],1)],1),e._v(" "),r("OMButton",{staticStyle:{"margin-top":"20px"},on:{click:e.print}},[e._v("打印输入框内容")])],1)},staticRenderFns:[]},a=r("VU/8")(n,l,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=11.c9afdc75a38467a3c046.js.map