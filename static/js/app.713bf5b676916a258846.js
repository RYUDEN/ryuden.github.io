webpackJsonp([15],{"0d6F":function(t,e){},SrUm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xd7I"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"router"})],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},a,!1,function(t){n("0d6F")},null,null).exports,o={name:"Icon",props:{value:String}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["iconfont","icon-"+this.value]})},staticRenderFns:[]},r=n("C7Lr")(o,l,!1,null,null,null).exports;r.install=function(t){t.component(r.name,r)};var c=r,u={name:"Loading",props:{size:String,dark:Boolean}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loading",t.size?"om-loading--"+t.size:""]},[n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]})])},staticRenderFns:[]},m=n("C7Lr")(u,d,!1,null,null,null).exports,h={name:"OMButton",props:{type:{type:String,default:"primary"},outline:Boolean,size:String,circle:Boolean,full:Boolean,loading:Boolean,disabled:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:m}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"om-button",class:[t.type?"om-button--"+t.type:"",t.size?"om-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-circle":t.circle,"is-full":t.full,outline:t.outline}],attrs:{disabled:t.disabled||t.loading},on:{click:t.handleClick}},[t.loading?n("Loading",{attrs:{size:t.size,dark:t.outline}}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()],1)},staticRenderFns:[]},p=n("C7Lr")(h,v,!1,null,null,null).exports;p.install=function(t){p.component(p.name,p)};var f=p,_={name:"OMCurtain",props:{show:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.show?e("div",{staticClass:"om-curtain"},[e("div",{staticClass:"om-mask"}),this._v(" "),e("div",{staticClass:"om-curtain--container"},[e("div",{staticClass:"om-curtain--main"},[this._t("default")],2),this._v(" "),e("i",{staticClass:"iconfont icon-close-circle om-curtain--close",on:{click:this.handleClose}})])]):this._e()])},staticRenderFns:[]},g=n("C7Lr")(_,C,!1,null,null,null).exports;g.install=function(t){t.component(g.name,g)};var y=g,b={name:"OMbadge",props:{value:String,max:{type:String,default:"99"},min:{type:String,default:"0"},isdot:Boolean},computed:{STR:function(){var t=parseInt(this.value),e=this.max,n=this.min;return t>e?e+"+":!(t<n)&&this.value}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.STR?n("div",{staticClass:"om-badge"},[t._t("default"),t._v(" "),t.isdot?n("span",{class:["om-badge-ico",t.isdot&&"isdot"]}):n("span",{staticClass:"om-badge-ico"},[t._v(t._s(t.STR))])],2):t._e()},staticRenderFns:[]},k=n("C7Lr")(b,$,!1,null,null,null).exports;k.install=function(t){t.component(k.name,k)};var w=k;m.install=function(t){t.component(m.name,m)};var x=m,I={name:"OMLoadmore",props:{value:{type:Array,default:function(){return["查看更多","加载中","没有更多"]}},status:{type:String,default:"more"}},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:m}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loadmore",t.status?"om-loadmore-"+t.status:""],on:{click:t.handleClick}},["loading"==t.status?n("Loading",{attrs:{dark:""}}):t._e(),t._v(" "),"more"==t.status?n("span",[t._v(t._s(t.value[0]))]):t._e(),t._v(" "),"loading"==t.status?n("span",[t._v(t._s(t.value[1]))]):t._e(),t._v(" "),"nomore"==t.status?n("span",[t._v(t._s(t.value[2]))]):t._e()],1)},staticRenderFns:[]},S=n("C7Lr")(I,L,!1,null,null,null).exports;S.install=function(t){t.component(S.name,S)};var E=S,R={name:"ActionSheet",props:{title:String,cancelText:String,status:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.status?n("div",{staticClass:"om-action-sheet"},[n("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),n("div",{staticClass:"om-action-sheet--container"},[t.title?n("div",{staticClass:"om-action-sheet--title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"om-action-sheet--body"},[t._t("default")],2):t._e(),t._v(" "),n("div",{staticClass:"om-action-sheet--cancel",on:{click:t.handleClose}},[t._v(t._s(t.cancelText?t.cancelText:"取消"))])])]):t._e()])},staticRenderFns:[]},B=n("C7Lr")(R,T,!1,null,null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return this.$slots.default?e("div",{staticClass:"om-action-sheet--item",on:{click:this.handleClick}},[this._t("default")],2):this._e()},staticRenderFns:[]},M=n("C7Lr")({name:"ActionSheetItem",methods:{handleClick:function(t){this.$emit("click",t)}}},F,!1,null,null,null).exports;B.install=function(t){t.component(B.name,B)},M.install=function(t){t.component(M.name,M)};var N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"em-modal"},[n("div",{staticClass:"om-mask"}),t._v(" "),n("div",{staticClass:"em-modal--container"},[n("div",{staticClass:"em-modal--header"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"em-modal--body"},[t._t("default",[t.UseHTMLString?n("p",{domProps:{innerHTML:t._s(t.content)}}):n("p",[t._v(t._s(t.content))])])],2),t._v(" "),n("div",{staticClass:"em-modal--footer"},[t.showCancel?n("div",{staticClass:"em-modal--footer__btn cancel",on:{click:t.close}},[t._v("取消")]):t._e(),t._v(" "),n("div",{staticClass:"em-modal--footer__btn confirm",on:{click:t.confirm}},[t._v("确定")])])])])])},staticRenderFns:[]},z=n("C7Lr")({name:"Modal",data:function(){return{visible:!0,title:"标题",content:"officemate\r\n",onCancel:null,onConfirm:null,showCancel:!0,closed:!1,UseHTMLString:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onCancel&&this.onCancel(this)},confirm:function(){this.closed=!0,"function"==typeof this.onConfirm&&this.onConfirm(this)}}},N,!1,null,null,null).exports;const A=Object.prototype.hasOwnProperty;const O=function(t){return null!==t&&"object"==typeof t&&(e=t,n="componentOptions",A.call(e,n));var e,n};let W,X=i.a.extend(z);const D=function(t){"string"==typeof(t=t||{})&&(t={content:t});let e=t.onCancel;return t.onCancel=function(){D.close(e)},W=new X({data:t}),O(W.content)&&(W.$slots.default=[W.content],W.content=null),W.visible=!0,W.$mount(),document.body.appendChild(W.$el),W};D.close=function(t){t(W)};var q=D,P={name:"Toast",data:function(){return{visible:!0,closed:!1,value:"",icon:"",duration:2e3,mask:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0},masktouch:function(t){console.log(t)}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"om-toast"},[t.mask?n("div",{staticClass:"om-toast--mask",on:{touchmove:function(e){return e.preventDefault(),t.masktouch(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"om-toast--body"},[t.icon?n("div",{staticClass:"om-toast--img"},[n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),n("p",{staticClass:"om-toast--content"},[t._v(t._s(t.value))])])])])},staticRenderFns:[]},H=n("C7Lr")(P,U,!1,null,null,null).exports;let V,j=i.a.extend(H);const J=function(t){"string"==typeof(t=t||{})&&(t={content:t});let e=t.onCancel;return t.onCancel=function(){J.close(e)},V=new j({data:t}),O(V.content)&&(V.$slots.default=[V.content],V.content=null),V.visible=!0,V.$mount(),document.body.appendChild(V.$el),V};J.close=function(t){t(V)};var Y=J,Q={name:"EmTag",props:{value:String,checked:Boolean,cycle:Boolean,primary:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}}},G={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["em-tag",this.checked?"em-tag__checked":"",this.cycle?"em-tag__cycle":"",this.primary?"em-tag__primary":""],on:{click:this.handleClick}},[this._v(this._s(this.value))])},staticRenderFns:[]},K=n("C7Lr")(Q,G,!1,null,null,null).exports;K.install=function(t){t.component(K.name,K)};var Z=K,tt={name:"Message",data:function(){return{visible:!0,closed:!1,type:"",value:"",icon:"",duration:2e3}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"Slide-down"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],class:["om-message",t.type?"om-message__"+t.type:""]},[t.icon?n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]}):t._e(),t._v(" "),n("span",[t._v(t._s(t.value))])])])},staticRenderFns:[]},nt=n("C7Lr")(tt,et,!1,null,null,null).exports;let it,at=i.a.extend(nt);const st=function(t){"string"==typeof(t=t||{})&&(t={value:t});let e=t.onCancel;return t.onCancel=function(){st.close(e)},(it=new at({data:t})).visible=!0,it.$mount(),document.body.appendChild(it.$el),it};st.close=function(t){t(it)};var ot=st,lt={name:"Swiper",data:function(){return{start:0,move:0,end:0,clientWidth:0,currentItem:0,ItemLength:0,dura:500,timer:null}},props:{dots:Boolean,autoplay:Boolean,interval:{default:5e3,type:Number},duration:{default:500,type:Number},current:{default:0,type:Number}},created:function(){this.dura=this.duration},mounted:function(){this.ItemLength=this.$children.length,this.clientWidth=this.$refs.wraper.clientWidth,this.autoplay&&this.autoplayItem()},methods:{autoplayItem:function(){var t=this;this.timer=setInterval(function(){t.currentItem+1==t.ItemLength?t.currentItem=0:t.currentItem+=1},this.interval)},onChange:function(t){this.$emit("onChange",t)},handleStart:function(t){this.autoplay&&clearInterval(this.timer),this.start=t.changedTouches[0].clientX,this.dura=0},handleEnd:function(t){this.autoplay&&this.autoplayItem(),this.end=t.changedTouches[0].clientX,this.move=0,this.dura=this.duration,this.end-this.start>50?0==this.currentItem?this.currentItem=0:this.currentItem-=1:this.end-this.start<-50&&(this.currentItem+1==this.ItemLength?this.currentItem=this.ItemLength-1:this.currentItem+=1),this.onChange(this.currentItem)},hanldeMove:function(t){this.move=t.changedTouches[0].clientX-this.start},handleDot:function(t){this.currentItem=t-1,this.onChange(this.currentItem)}},computed:{transform:function(){return"translate3d("+-(this.clientWidth*this.currentItem-this.move)+"px, 0, 0)"},transformDur:function(){return"all cubic-bezier(.36,.66,.04,1) "+this.dura+"ms"}}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-swiper"},[n("div",{ref:"wraper",staticClass:"om-swiper-wrapper",style:{transform:t.transform,transition:t.transformDur},on:{touchstart:t.handleStart,touchmove:t.hanldeMove,touchend:t.handleEnd}},[t._t("default")],2),t._v(" "),t.dots?n("div",{staticClass:"om-swiper-dots"},t._l(t.ItemLength,function(e){return n("div",{key:e,class:["om-swiper-dot",e===t.currentItem+1?"dot-active":""],on:{click:function(n){return t.handleDot(e)}}})}),0):t._e()])},staticRenderFns:[]},ct=n("C7Lr")(lt,rt,!1,null,null,null).exports,ut={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"om-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},dt=n("C7Lr")({name:"SwiperItem"},ut,!1,null,null,null).exports;ct.install=function(t){t.component(ct.name,ct)},dt.install=function(t){t.component(dt.name,dt)};var mt={name:"OMDivider",props:{content:{default:"分割线",type:String},fontColor:String,lineColor:String}},ht={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-divider"},[n("div",{staticClass:"om-divider__content",style:{color:t.fontColor}},[t.$slots.default?[t._t("default")]:[t._v("\n    "+t._s(t.content)+"\n    ")]],2),t._v(" "),n("div",{staticClass:"om-divider__line",style:{backgroundColor:t.lineColor}})])},staticRenderFns:[]},vt=n("C7Lr")(mt,ht,!1,null,null,null).exports;vt.install=function(t){t.component(vt.name,vt)};var pt=vt,ft={name:"OMInput",data:function(){return{value:""}},props:{placeholder:String,type:{default:"text",type:String},error:{default:"",type:String},clear:Boolean,title:{default:"",type:String},max:String},methods:{handleInput:function(t){t.target.value.length>parseInt(this.max)?t.target.value=this.value:(this.value=t.target.value,this.$emit("input",t.target.value),this.$emit("require"))},clearInput:function(){this.value="",this.$emit("input","")},handleRequire:function(){this.$emit("require")}}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-input"},[t.title?n("div",{staticClass:"om-input__title",style:{color:t.error?"red":""}},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"om-input--main"},[n("div",{staticClass:"om-input--main__error"},[t._v(t._s(t.error))]),t._v(" "),n("input",{staticClass:"om-input--main__main",attrs:{type:t.type,placeholder:t.error?"":t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,blur:t.handleRequire}}),t._v(" "),t.clear?n("div",{staticClass:"om-input--main__clear",on:{click:t.clearInput}},[n("i",{staticClass:"iconfont icon-close-circle"})]):t._e()]),t._v(" "),t.$slots.default?n("div",{staticClass:"om-input__child"},[t._t("default")],2):t._e()])},staticRenderFns:[]},Ct=n("C7Lr")(ft,_t,!1,null,null,null).exports;Ct.install=function(t){t.component(Ct.name,Ct)};var gt=Ct,yt={name:"OMSlider",props:{max:{default:100,type:Number},min:{default:0,type:Number},step:{default:1,type:Number},content:{default:0,type:Number}},data:function(){return{value:0,start:0,move:0,end:0,clientWidth:0}},created:function(){this.value=this.content},computed:{track:function(){var t=this.step,e=this.value,n=this.max,i=this.min,a=this.clientWidth,s=this.move,o=a/((n-i)/t),l=e-i;return l/t*o+s<=0?"0px":l/t*o+s>=a?a+"px":l/t*o+s+"px"}},methods:{handleStart:function(t){this.start=t.changedTouches[0].clientX},handleMove:function(t){var e=this.step,n=this.value,i=this.max,a=this.min,s=this.clientWidth,o=(this.start,s/(i-a)*e),l=t.changedTouches[0].clientX-this.start,r=n-a;r/e*o+l>=s&&l-this.move>0||r/e*o+l<=0&&l-this.move<0||(this.move=l)},handleEnd:function(t){var e=this.step,n=this.value,i=this.max,a=this.min,s=this.clientWidth,o=this.start,l=s/(i-a)*e,r=t.changedTouches[0].clientX-o,c=n-a;c/e*l+r>=s?this.value=i:c/e*l+r<=0?this.value=a:this.value+=Math.round(r/l)*e,this.$emit("input",this.value),this.start=0,this.move=0}},mounted:function(){this.clientWidth=this.$refs.full.clientWidth,console.log(this.track)}},bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-slider"},[n("div",{staticClass:"om-slider__inner"},[n("div",{staticClass:"om-slider__inner--box"},[n("div",{ref:"full",staticClass:"om-slider__full"},[n("div",{ref:"track",staticClass:"om-slider__track",style:{width:t.track}}),t._v(" "),n("div",{staticClass:"om-slider__handler",style:{left:t.track},on:{touchstart:t.handleStart,touchmove:t.handleMove,touchend:t.handleEnd}})])])]),t._v(" "),n("div",{staticClass:"om-slider__text"},[t._v(t._s(t.value))])])},staticRenderFns:[]},$t=n("C7Lr")(yt,bt,!1,null,null,null).exports;$t.install=function(t){t.component($t.name,$t)};var kt=$t,wt=[c,f,y,w,x,E,B,M,Z,ct,dt,pt,gt,kt],xt=function(t){wt.forEach(function(e){t.component(e.name,e)}),t.prototype.$modal=q,t.prototype.$toast=Y,t.prototype.$message=ot};"undefined"!=typeof window&&window.Vue&&xt(window.Vue);var It={version:"2.9.1",Icon:c,Button:f,Curtain:y,Badge:w,Loading:x,Loadmore:E,ActionSheet:B,ActionSheetItem:M,Modal:q,Tag:Z,Message:ot,Swiper:ct,SwiperItem:dt,Divider:pt,Input:gt,Slider:kt,install:xt},Lt=(n("f0Iy"),n("3XdE")),St=n("r6k1");n.n(St).a.polyfill(),i.a.use(Lt.a);var Et=new Lt.a({mode:"hash",scrollBehavior:(t,e,n)=>({x:0,y:0}),routes:[{path:"/",name:"index",component:()=>n.e(4).then(n.bind(null,"7NnY"))},{path:"/button",name:"button",component:()=>n.e(12).then(n.bind(null,"tx1y"))},{path:"/curtain",name:"curtain",component:()=>n.e(11).then(n.bind(null,"qsfE"))},{path:"/badge",name:"badge",component:()=>n.e(1).then(n.bind(null,"+CRV"))},{path:"/loadmore",name:"loadmore",component:()=>n.e(9).then(n.bind(null,"lVJQ"))},{path:"/action",name:"action",component:()=>n.e(13).then(n.bind(null,"YO7r"))},{path:"/toast",name:"toast",component:()=>n.e(5).then(n.bind(null,"yB4N"))},{path:"/modal",name:"modal",component:()=>n.e(8).then(n.bind(null,"k4CC"))},{path:"/tag",name:"tag",component:()=>n.e(3).then(n.bind(null,"INmq"))},{path:"/message",name:"message",component:()=>n.e(0).then(n.bind(null,"X6al"))},{path:"/swiper",name:"swiper",component:()=>n.e(2).then(n.bind(null,"sbgJ"))},{path:"/divider",name:"divider",component:()=>n.e(10).then(n.bind(null,"41P9"))},{path:"/omInput",name:"omInput",component:()=>n.e(7).then(n.bind(null,"HkyE"))},{path:"/slider",name:"slider",component:()=>n.e(6).then(n.bind(null,"3Um8"))}]});i.a.config.productionTip=!1,i.a.use(It),new i.a({el:"#app",router:Et,components:{App:s},template:"<App/>"})},f0Iy:function(t,e){}},["SrUm"]);
//# sourceMappingURL=app.713bf5b676916a258846.js.map