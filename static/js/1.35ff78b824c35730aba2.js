webpackJsonp([1],{"67wn":function(t,s){},"8Pvq":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"detail-imgs",data:function(){return{show:-1,fakeData:["王老吉","光头强","李二蛋","张麻瓜","孙大圣"]}},created:function(){var t=this;setInterval(function(){t.shuffle()},3e3)},methods:{shuffle:function(){this.show=Math.floor(Math.random()*this.fakeData.length)}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail-imgs"},[a("Swiper",{attrs:{duration:300,dots:"",autoplay:""}},[a("SwiperItem",{key:"0"},[a("div",{staticClass:"detail-imgs_img"},[t._v("\n            1\n            ")])]),t._v(" "),a("SwiperItem",{key:"1"},[a("div",{staticClass:"detail-imgs_img"},[t._v("\n            2\n            ")])]),t._v(" "),a("SwiperItem",{key:"2"},[a("div",{staticClass:"detail-imgs_img"},[t._v("\n            3\n            ")])])],1),t._v(" "),a("transition-group",{attrs:{name:"fake",mode:"out-in"}},[t._l(t.fakeData,function(s,e){return[t.show===e?a("div",{key:e,staticClass:"detail-imgs_fakedata"},[a("img",{staticClass:"detail-imgs_fakedata_avatar",attrs:{src:"http://mapi.fufentong.com/tmp/uploads/20190403/4ec7ca852438d82dd09dce0e0aab84a4.png"}}),t._v(" "),a("span",[t._v(t._s(s)+"刚刚下单成功")])]):t._e()]})],2)],1)},staticRenderFns:[]};var n=a("VU/8")(e,i,!1,function(t){a("UOya")},"data-v-74b2a838",null).exports,r={name:"flash-sale-bar",data:function(){return{time:{hours:"00",minutes:"00",seconds:"00"}}},props:{start:{default:15619392e5,type:Number},end:{default:15646176e5,type:Number}},created:function(){this.countDown()},computed:{flash_sale_status:function(){var t=Date.parse(new Date);return t>this.start&&t<this.end?"距结束":t>this.end?"已结束":"距开始"}},methods:{countDown:function(){var t=this,s=Date.parse(new Date),a=this.start,e=this.end,i=((a>s?a:e)-s)/1e3,n=setInterval(function(){var s=0,a=0,e=0,n=0;i>0&&(a=Math.floor(i/3600).toString(),e=(Math.floor(i/60)-24*s*60-60*a).toString(),n=(Math.floor(i)-24*s*60*60-60*a*60-60*e).toString()),s<=9&&(s="0"+s),a<=9&&(a="0"+a),e<=9&&(e="0"+e),n<=9&&(n="0"+n);var r={hours:a,minutes:e,seconds:n};t.time=r,i--},1e3);i<=0&&clearInterval(n)}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flash-sale-bar"},[t._m(0),t._v(" "),a("div",{staticClass:"flash-sale-bar_stock"},[t._m(1),t._v(" "),a("div",{staticClass:"flash-sale-bar_time"},[t._v(t._s(t.flash_sale_status)+":"+t._s(t.time.hours)+":"+t._s(t.time.minutes)+":"+t._s(t.time.seconds))])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flash-sale-bar_price"},[s("div",{staticClass:"flash-sale-bar_oprice"},[this._v("￥299")]),this._v(" "),s("div",{staticClass:"flash-sale-bar_cprice"},[this._v("￥"),s("span",[this._v("199")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flash-sale-bar_stocknum"},[this._v("全场仅剩"),s("span",[this._v("99")]),this._v("件")])}]};var l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flash-order-bar"},[t._m(0),t._v(" "),a("div",{staticClass:"flash-order-bar_buybtn",on:{click:t.buyNow}},[t._v("立即购买")]),t._v(" "),a("ActionSheet",{attrs:{status:t.ActionSheetStatus,hideCancel:""},on:{close:t.ActionSheetOff}},[a("div",{staticClass:"product_standard"},[a("div",{staticClass:"product_info"},[a("div",{staticClass:"product_info_img"},[a("img",{attrs:{src:"http://mapi.fufentong.com/tmp/uploads/20190418/d59a1649e550d19d34ea55418940794f.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"product_info_combine"},[a("span",{staticStyle:{"font-size":".32rem","margin-bottom":".2rem"}},[t._v("歌德小麦啤酒500ml*12歌德小麦啤酒500ml*12*12")]),t._v(" "),a("span",[t._v("已选:大瓶,500ml")])])]),t._v(" "),a("div",{staticClass:"product_format"},[a("div",{staticClass:"product_format_tag"},[t._v("规格")]),t._v(" "),a("div",{staticClass:"product_format_sort"},[a("div",{staticClass:"sort-item"},[t._v("粉色")]),t._v(" "),a("div",{staticClass:"sort-item"},[t._v("黄色")]),t._v(" "),a("div",{staticClass:"sort-item"},[t._v("灰色")])])]),t._v(" "),a("div",{staticClass:"product_buy",on:{click:t.goto}},[t._v("\n                立即购买\n            ")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flash-order-bar_home"},[s("i",{staticClass:"iconfont icon-home",staticStyle:{"font-size":".4rem"}}),this._v(" "),s("span",{staticStyle:{"font-size":"0.2rem"}},[this._v("首页")])])}]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"presale-bar"},[s("div",{staticClass:"presale-bar_deposit"},[s("span",{staticStyle:{"font-size":".32rem"}},[this._v("预付定金")]),this._v(" "),s("span",[this._v("6.16-6.30")])]),this._v(" "),s("div",{staticClass:"presale-bar_tail"},[s("span",{staticStyle:{"font-size":".32rem"}},[this._v("支付尾款")]),this._v(" "),s("span",[this._v("7.1-7.15")])])])}]};var _={name:"detail",metaInfo:function(){return{title:this.pageTitle}},components:{imgs:n,FlashSaleBar:a("VU/8")(r,c,!1,function(t){a("Kcli")},"data-v-31550eeb",null).exports,FlashOrderBar:a("VU/8")({name:"bar",methods:{buyNow:function(){this.ActionSheetStatus=!0},ActionSheetOff:function(){this.ActionSheetStatus=!1},goto:function(){this.$router.push({name:"table"})}},data:function(){return{ActionSheetStatus:!1}}},l,!1,function(t){a("67wn")},"data-v-2dc74a3e",null).exports,PresaleBar:a("VU/8")({name:"presale-bar"},o,!1,function(t){a("yq+U")},"data-v-4234fda8",null).exports},data:function(){return{product_type:0,step:1}},computed:{progressWidth:function(){return(1===this.step?"0%":2===this.step&&"50%")||3===this.step&&"100%"},pageTitle:function(){return"商品详情-福分通内购"}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-detail"},[a("imgs"),t._v(" "),1===t.product_type?[a("flash-sale-bar")]:0===t.product_type?[a("presale-bar")]:t._e(),t._v(" "),t._m(0),t._v(" "),0===t.product_type?a("div",{staticClass:"page-detail-deposit"},[t._v("\n        定金\n        "),a("span",[t._v("￥100")])]):t._e(),t._v(" "),0===t.product_type?a("div",{staticClass:"page-detail-stepline"},[a("div",{class:["page-detail-stepline_step",t.step>=1&&"active-step"]},[a("span",{staticClass:"deposit"},[t._v("￥100")]),t._v(" "),a("span",{staticClass:"maru maru_1"}),t._v(" "),a("span",{staticClass:"desc"},[t._v("定金")])]),t._v(" "),a("div",{class:["page-detail-stepline_step",t.step>=2&&"active-step"]},[a("span",{staticClass:"deposit"},[t._v("￥200")]),t._v(" "),a("span",{staticClass:"maru maru_2"}),t._v(" "),a("span",{staticClass:"desc"},[t._v("定金翻倍")])]),t._v(" "),a("div",{class:["page-detail-stepline_step",t.step>=3&&"active-step"]},[a("span",{staticClass:"deposit"},[t._v("￥1700")]),t._v(" "),a("span",{staticClass:"maru maru_3"}),t._v(" "),a("span",{staticClass:"desc"},[t._v("尾款")])]),t._v(" "),a("div",{staticClass:"page-detail-stepline_faultline"},[a("div",{staticClass:"progress",style:{width:t.progressWidth}})])]):t._e(),t._v(" "),a("flash-order-bar")],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-detail-title"},[s("div",[s("img",{attrs:{src:"/static/imgs/tag@2x.png",alt:""}})]),this._v(" "),s("div",{staticClass:"page-detail-title_name"},[this._v("\n            网易智造扫拖两用机网易智造扫拖两用机网易智造扫拖两用机网易智造扫拖两用机\n        ")])])}]};var v=a("VU/8")(_,d,!1,function(t){a("DFo/")},"data-v-4a20c267",null);s.default=v.exports},"DFo/":function(t,s){},Kcli:function(t,s){},UOya:function(t,s){},"yq+U":function(t,s){}});
//# sourceMappingURL=1.35ff78b824c35730aba2.js.map