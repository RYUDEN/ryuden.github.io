webpackJsonp([6],{GY1l:function(t,e,n){var i={"./goods.js":"VhcQ","./layout.js":"gyFC"};function s(t){return n(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="GY1l"},Hoey:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("NYxO"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.showNav?n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-container"},[n("div",{class:["nav-item","index"===t.Path?"nav-item__active":""],on:{click:function(e){return t.LinkTo("/")}}},[n("i",{staticClass:"navicon iconfont icon-home"}),t._v(" "),n("span",[t._v("首页")])]),t._v(" "),n("div",{class:["nav-item","user"===t.Path?"nav-item__active":""],on:{click:function(e){return t.LinkTo("/user")}}},[n("i",{staticClass:"navicon iconfont icon-user"}),t._v(" "),n("span",[t._v("我的")])])])]):t._e()])},staticRenderFns:[]};var o=n("VU/8")({name:"navbar",methods:{LinkTo:function(t){this.$router.push(t)}},computed:{showNav:function(){var t=this.$route.name;return["index","user"].indexOf(t)>-1},Path:function(){return this.$route.name}}},a,!1,function(t){n("Rfqw")},"data-v-0651673d",null).exports,r={name:"backTop",data:function(){return{show:!1}},beforeCreate:function(){var t=this;this.bus.$on("backtop",function(e){"index"===t.$route.name&&(t.show=e)})},methods:{BackTopFunc:function(){document.documentElement.scrollIntoView({behavior:"smooth"})}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"backtop",on:{click:this.BackTopFunc}},[e("i",{staticClass:"iconfont icon-verticalright backtop_icon"})])])},staticRenderFns:[]};var c=n("VU/8")(r,l,!1,function(t){n("jmgz")},"data-v-6f38f728",null).exports,u=n("Xxa5"),d=n.n(u),h=n("exGp"),m=n.n(h),v=n("mtWM"),p=n.n(v),f=n("mw3O"),_=n.n(f),g={name:"Icon",props:{value:String}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["iconfont","icon-"+this.value]})},staticRenderFns:[]},b=n("VU/8")(g,C,!1,null,null,null).exports;b.install=function(t){t.component(b.name,b)};var k=b,y={name:"Loading",props:{size:String,dark:Boolean}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loading",t.size?"om-loading--"+t.size:""]},[n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]})])},staticRenderFns:[]},x=n("VU/8")(y,w,!1,null,null,null).exports,$={name:"OMButton",props:{type:{type:String,default:"primary"},outline:Boolean,size:String,circle:Boolean,full:Boolean,loading:Boolean,disabled:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:x}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"om-button",class:[t.type?"om-button--"+t.type:"",t.size?"om-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-circle":t.circle,"is-full":t.full,outline:t.outline}],attrs:{disabled:t.disabled||t.loading},on:{click:t.handleClick}},[t.loading?n("Loading",{attrs:{size:t.size,dark:t.outline}}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()],1)},staticRenderFns:[]},T=n("VU/8")($,S,!1,null,null,null).exports;T.install=function(t){T.component(T.name,T)};var I=T,O={name:"OMCurtain",props:{show:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.show?e("div",{staticClass:"om-curtain"},[e("div",{staticClass:"om-mask"}),this._v(" "),e("div",{staticClass:"om-curtain--container"},[e("div",{staticClass:"om-curtain--main"},[this._t("default")],2),this._v(" "),e("i",{staticClass:"iconfont icon-close-circle om-curtain--close",on:{click:this.handleClose}})])]):this._e()])},staticRenderFns:[]},M=n("VU/8")(O,E,!1,null,null,null).exports;M.install=function(t){t.component(M.name,M)};var R=M,V={name:"OMbadge",props:{value:String,max:{type:String,default:"99"},min:{type:String,default:"0"},isdot:Boolean},computed:{STR:function(){var t=parseInt(this.value),e=this.max,n=this.min;return t>e?e+"+":!(t<n)&&this.value}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.STR?n("div",{staticClass:"om-badge"},[t._t("default"),t._v(" "),t.isdot?n("span",{class:["om-badge-ico",t.isdot&&"isdot"]}):n("span",{staticClass:"om-badge-ico"},[t._v(t._s(t.STR))])],2):t._e()},staticRenderFns:[]},L=n("VU/8")(V,F,!1,null,null,null).exports;L.install=function(t){t.component(L.name,L)};var N=L;x.install=function(t){t.component(x.name,x)};var P=x,B={name:"OMLoadmore",props:{value:{type:Array,default:function(){return["查看更多","加载中","没有更多"]}},status:{type:String,default:"more"}},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:x}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loadmore",t.status?"om-loadmore-"+t.status:""],on:{click:t.handleClick}},["loading"==t.status?n("Loading",{attrs:{dark:""}}):t._e(),t._v(" "),"more"==t.status?n("span",[t._v(t._s(t.value[0]))]):t._e(),t._v(" "),"loading"==t.status?n("span",[t._v(t._s(t.value[1]))]):t._e(),t._v(" "),"nomore"==t.status?n("span",[t._v(t._s(t.value[2]))]):t._e()],1)},staticRenderFns:[]},j=n("VU/8")(B,U,!1,null,null,null).exports;j.install=function(t){t.component(j.name,j)};var A=j,z={name:"ActionSheet",props:{title:String,cancelText:String,status:Boolean,hideCancel:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.status?n("div",{staticClass:"om-action-sheet"},[n("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),n("div",{staticClass:"om-action-sheet--container"},[t.title?n("div",{staticClass:"om-action-sheet--title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"om-action-sheet--body"},[t._t("default")],2):t._e(),t._v(" "),t.hideCancel?t._e():n("div",{staticClass:"om-action-sheet--cancel",on:{click:t.handleClose}},[t._v(t._s(t.cancelText?t.cancelText:"取消"))])])]):t._e()])},staticRenderFns:[]},D=n("VU/8")(z,Y,!1,null,null,null).exports,W={render:function(){var t=this.$createElement,e=this._self._c||t;return this.$slots.default?e("div",{staticClass:"om-action-sheet--item",on:{click:this.handleClick}},[this._t("default")],2):this._e()},staticRenderFns:[]},q=n("VU/8")({name:"ActionSheetItem",methods:{handleClick:function(t){this.$emit("click",t)}}},W,!1,null,null,null).exports;D.install=function(t){t.component(D.name,D)},q.install=function(t){t.component(q.name,q)};var X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"em-modal"},[n("div",{staticClass:"om-mask"}),t._v(" "),n("div",{staticClass:"em-modal--container"},[n("div",{staticClass:"em-modal--header"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"em-modal--body"},[t._t("default",[t.UseHTMLString?n("p",{domProps:{innerHTML:t._s(t.content)}}):n("p",[t._v(t._s(t.content))])])],2),t._v(" "),n("div",{staticClass:"em-modal--footer"},[t.showCancel?n("div",{staticClass:"em-modal--footer__btn cancel",on:{click:t.close}},[t._v("取消")]):t._e(),t._v(" "),n("div",{staticClass:"em-modal--footer__btn confirm",on:{click:t.confirm}},[t._v("确定")])])])])])},staticRenderFns:[]},H=n("VU/8")({name:"Modal",data:function(){return{visible:!0,title:"标题",content:"officemate\r\n",onCancel:null,onConfirm:null,showCancel:!0,closed:!1,UseHTMLString:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onCancel&&this.onCancel(this)},confirm:function(){this.closed=!0,"function"==typeof this.onConfirm&&this.onConfirm(this)}}},X,!1,null,null,null).exports;const G=Object.prototype.hasOwnProperty;const J=function(t){return null!==t&&"object"==typeof t&&(e=t,n="componentOptions",G.call(e,n));var e,n};let Q,K=i.a.extend(H);const Z=function(t){"string"==typeof(t=t||{})&&(t={content:t});let e=t.onCancel;return t.onCancel=function(){Z.close(e)},Q=new K({data:t}),J(Q.content)&&(Q.$slots.default=[Q.content],Q.content=null),Q.visible=!0,Q.$mount(),document.body.appendChild(Q.$el),Q};Z.close=function(t){t(Q)};var tt=Z,et={name:"Toast",data:function(){return{visible:!0,closed:!1,value:"",icon:"",duration:2e3,mask:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0},masktouch:function(t){console.log(t)}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"om-toast"},[t.mask?n("div",{staticClass:"om-toast--mask",on:{touchmove:function(e){return e.preventDefault(),t.masktouch(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"om-toast--body"},[t.icon?n("div",{staticClass:"om-toast--img"},[n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),n("p",{staticClass:"om-toast--content"},[t._v(t._s(t.value))])])])])},staticRenderFns:[]},it=n("VU/8")(et,nt,!1,null,null,null).exports;let st,at=i.a.extend(it);const ot=function(t){"string"==typeof(t=t||{})&&(t={value:t});let e=t.onCancel;return t.onCancel=function(){ot.close(e)},st=new at({data:t}),J(st.content)&&(st.$slots.default=[st.content],st.content=null),st.visible=!0,st.$mount(),document.body.appendChild(st.$el),st};ot.close=function(t){t(st)};var rt=ot,lt={name:"EmTag",props:{value:String,checked:Boolean,cycle:Boolean,primary:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}}},ct={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["em-tag",this.checked?"em-tag__checked":"",this.cycle?"em-tag__cycle":"",this.primary?"em-tag__primary":""],on:{click:this.handleClick}},[this._v(this._s(this.value))])},staticRenderFns:[]},ut=n("VU/8")(lt,ct,!1,null,null,null).exports;ut.install=function(t){t.component(ut.name,ut)};var dt=ut,ht={name:"Message",data:function(){return{visible:!0,closed:!1,type:"",value:"",icon:"",duration:2e3}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0}}},mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"Slide-down"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],class:["om-message",t.type?"om-message__"+t.type:""]},[t.icon?n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]}):t._e(),t._v(" "),n("span",[t._v(t._s(t.value))])])])},staticRenderFns:[]},vt=n("VU/8")(ht,mt,!1,null,null,null).exports;let pt,ft=i.a.extend(vt);const _t=function(t){"string"==typeof(t=t||{})&&(t={value:t});let e=t.onCancel;return t.onCancel=function(){_t.close(e)},(pt=new ft({data:t})).visible=!0,pt.$mount(),document.body.appendChild(pt.$el),pt};_t.close=function(t){t(pt)};var gt=_t,Ct={name:"Swiper",data:function(){return{start:0,move:0,end:0,clientWidth:0,currentItem:0,ItemLength:0,dura:500,timer:null}},props:{dots:Boolean,autoplay:Boolean,interval:{default:5e3,type:Number},duration:{default:500,type:Number},current:{default:0,type:Number},activeDotColor:{default:"#fff",type:String},deactiveDotColor:{default:"#fff",type:String}},created:function(){this.dura=this.duration},mounted:function(){this.ItemLength=this.$children.length,this.clientWidth=this.$children[0].$refs.wraper.clientWidth,this.autoplay&&this.autoplayItem()},methods:{autoplayItem:function(){var t=this;this.timer=setInterval(function(){t.currentItem+1==t.ItemLength?t.currentItem=0:t.currentItem+=1},this.interval)},onChange:function(t){this.$emit("onChange",t)},handleStart:function(t){this.autoplay&&clearInterval(this.timer),this.start=t.changedTouches[0].clientX,this.dura=0},hanldeMove:function(t){this.move=t.changedTouches[0].clientX-this.start},handleEnd:function(t){this.autoplay&&this.autoplayItem(),this.end=t.changedTouches[0].clientX,this.move=0,this.dura=this.duration,this.end-this.start>50?0==this.currentItem?this.currentItem=0:this.currentItem-=1:this.end-this.start<-50&&(this.currentItem+1==this.ItemLength?this.currentItem=this.ItemLength-1:this.currentItem+=1),this.onChange(this.currentItem)},handleDot:function(t){this.currentItem=t-1,this.onChange(this.currentItem)}},computed:{transform:function(){return"translate3d("+-(this.clientWidth*this.currentItem-this.move)+"px, 0, 0)"},transformDur:function(){return"all cubic-bezier(.36,.66,.04,1) "+this.dura+"ms"}}},bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-swiper"},[n("div",{staticClass:"om-swiper-wrapper",style:{transform:t.transform,transition:t.transformDur},on:{touchstart:function(e){return e.stopPropagation(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),t.hanldeMove(e)},touchend:function(e){return e.stopPropagation(),t.handleEnd(e)}}},[t._t("default")],2),t._v(" "),t.dots?n("div",{staticClass:"om-swiper-dots"},t._l(t.ItemLength,function(e){return n("div",{key:e,class:["om-swiper-dot",e===t.currentItem+1?"dot-active":""],style:{background:e===t.currentItem+1?t.activeDotColor:t.deactiveDotColor},on:{click:function(n){return t.handleDot(e)}}})}),0):t._e()])},staticRenderFns:[]},kt=n("VU/8")(Ct,bt,!1,null,null,null).exports,yt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wraper",staticClass:"om-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},wt=n("VU/8")({name:"SwiperItem"},yt,!1,null,null,null).exports;kt.install=function(t){t.component(kt.name,kt)},wt.install=function(t){t.component(wt.name,wt)};var xt={name:"OMDivider",props:{content:{default:"分割线",type:String},fontColor:String,lineColor:String}},$t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-divider"},[n("div",{staticClass:"om-divider__content",style:{color:t.fontColor}},[t.$slots.default?[t._t("default")]:[t._v("\n    "+t._s(t.content)+"\n    ")]],2),t._v(" "),n("div",{staticClass:"om-divider__line",style:{backgroundColor:t.lineColor}})])},staticRenderFns:[]},St=n("VU/8")(xt,$t,!1,null,null,null).exports;St.install=function(t){t.component(St.name,St)};var Tt=St,It={name:"OMInput",data:function(){return{value:""}},props:{placeholder:String,type:{default:"text",type:String},error:{default:"",type:String},clear:Boolean,title:{default:"",type:String},max:String},methods:{handleInput:function(t){t.target.value.length>parseInt(this.max)?t.target.value=this.value:(this.value=t.target.value,this.$emit("input",t.target.value),this.$emit("require"))},clearInput:function(){this.value="",this.$emit("input","")},handleRequire:function(){this.$emit("require")}}},Ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-input"},[t.title?n("div",{staticClass:"om-input__title",style:{color:t.error?"red":""}},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"om-input--main"},[n("div",{staticClass:"om-input--main__error"},[t._v(t._s(t.error))]),t._v(" "),n("input",{staticClass:"om-input--main__main",attrs:{type:t.type,placeholder:t.error?"":t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,blur:t.handleRequire}}),t._v(" "),t.clear?n("div",{staticClass:"om-input--main__clear",on:{click:t.clearInput}},[n("i",{staticClass:"iconfont icon-close-circle"})]):t._e()]),t._v(" "),t.$slots.default?n("div",{staticClass:"om-input__child"},[t._t("default")],2):t._e()])},staticRenderFns:[]},Et=n("VU/8")(It,Ot,!1,null,null,null).exports;Et.install=function(t){t.component(Et.name,Et)};var Mt=Et,Rt={name:"OMSlider",props:{max:{default:100,type:Number},min:{default:0,type:Number},step:{default:1,type:Number},content:{default:0,type:Number}},data:function(){return{value:0,start:0,move:0,end:0,clientWidth:0}},created:function(){this.value=this.content},computed:{track:function(){var t=this.step,e=this.value,n=this.max,i=this.min,s=this.clientWidth,a=this.move,o=s/((n-i)/t),r=e-i;return r/t*o+a<=0?"0px":r/t*o+a>=s?s+"px":r/t*o+a+"px"}},methods:{handleStart:function(t){this.start=t.changedTouches[0].clientX},handleMove:function(t){var e=this.step,n=this.value,i=this.max,s=this.min,a=this.clientWidth,o=(this.start,a/(i-s)*e),r=t.changedTouches[0].clientX-this.start,l=n-s;l/e*o+r>=a&&r-this.move>0||l/e*o+r<=0&&r-this.move<0||(this.move=r)},handleEnd:function(t){var e=this.step,n=this.value,i=this.max,s=this.min,a=this.clientWidth,o=this.start,r=a/(i-s)*e,l=t.changedTouches[0].clientX-o,c=n-s;c/e*r+l>=a?this.value=i:c/e*r+l<=0?this.value=s:this.value+=Math.round(l/r)*e,this.$emit("input",this.value),this.start=0,this.move=0}},mounted:function(){this.clientWidth=this.$refs.full.clientWidth,console.log(this.track)}},Vt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-slider"},[n("div",{staticClass:"om-slider__inner"},[n("div",{staticClass:"om-slider__inner--box"},[n("div",{ref:"full",staticClass:"om-slider__full"},[n("div",{ref:"track",staticClass:"om-slider__track",style:{width:t.track}}),t._v(" "),n("div",{staticClass:"om-slider__handler",style:{left:t.track},on:{touchstart:t.handleStart,touchmove:t.handleMove,touchend:t.handleEnd}})])])]),t._v(" "),n("div",{staticClass:"om-slider__text"},[t._v(t._s(t.value))])])},staticRenderFns:[]},Ft=n("VU/8")(Rt,Vt,!1,null,null,null).exports;Ft.install=function(t){t.component(Ft.name,Ft)};var Lt=Ft,Nt={name:"OMSwitch",props:{checked:Boolean},methods:{handleInput:function(t){this.$emit("input",t.target.checked)}}},Pt={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"om-switch",attrs:{type:"checkbox"},domProps:{checked:this.checked},on:{change:this.handleInput}})},staticRenderFns:[]},Bt=n("VU/8")(Nt,Pt,!1,null,null,null).exports;Bt.install=function(t){t.component(Bt.name,Bt)};var Ut=Bt,jt={name:"Rate",props:{value:Number,max:Number,size:String,margin:String,read:Boolean},methods:{handleClick:function(t){this.read||this.$emit("input",t)}}},At={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-rate"},t._l(t.max,function(e,i){return n("i",{key:i,class:["iconfont","icon-star-fill",t.size,e<=t.value&&"active"],style:{"margin-right":t.margin+"px"},on:{click:function(n){return t.handleClick(e)}}})}),0)},staticRenderFns:[]},zt=n("VU/8")(jt,At,!1,null,null,null).exports;zt.install=function(t){t.component(zt.name,zt)};var Yt=zt,Dt={name:"Picker",data:function(){return{status:!1,index:[0],dura:300,start:0,startTime:0,end:0,move:[0]}},props:{placeholder:{default:"请选择",type:String},list:{default:function(){return[]},type:Array},label:{type:String,default:"label"},value:{type:String,default:"value"},select:{default:function(){return[0]},type:Array}},created:function(){this.index=this.select},methods:{handleClose:function(t){this.status=!1},handleOpen:function(){this.status=!0},handleColChange:function(t,e){this.$emit("columeChange",this.list[t][e],t)},handleChange:function(){for(var t=[],e=0;e<this.list.length;e++)t.push(this.list[e][this.index[e]]);this.$emit("change",t),this.status=!1},handleStart:function(t){this.startTime=+new Date,this.start=t.changedTouches[0].clientY,this.dura=0},handleMove:function(t,e){this.$set(this.move,t,e.changedTouches[0].clientY-this.start)},handleEnd:function(t,e){var n=+new Date,i=void 0;if(n-this.startTime<100){var s=this.move[t]/(n-this.startTime);i=30*this.index[t]-(this.move[t]+150*s)}else i=30*this.index[t]-this.move[t];i>0?(Math.round(i/30)>this.list[t].length-1?this.index[t]=this.list[t].length-1:this.index[t]=Math.round(i/30),this.move[t]=0,this.dura=300):(this.move[t]=0,this.dura=300,this.index[t]=0),this.handleColChange(t,this.index[t])},transformY:function(t){return"translate3d(0,"+-(30*this.index[t]-this.move[t])+"px,0)"},prevent:function(){}},computed:{duration:function(){return this.dura+"ms"}}},Wt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-picker"},[n("div",{staticClass:"om-picker-label",on:{click:t.handleOpen}},[t._v("\n    "+t._s(t.placeholder)+"\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.status?n("div",{staticClass:"om-picker-sheet",on:{touchmove:function(e){return e.preventDefault(),t.prevent(e)}}},[n("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),n("div",{staticClass:"om-picker-sheet--container"},[n("div",{staticClass:"om-picker-sheet--title"},[n("span",{on:{click:t.handleClose}},[t._v("取消")]),t._v(" "),n("span",{on:{click:t.handleChange}},[t._v("确认")])]),t._v(" "),n("div",{staticClass:"om-picker-sheet--body"},[n("div",{staticClass:"om-picker-sheet--preview"},t._l(t.index,function(e,i){return n("div",{key:i,staticClass:"om-picker-sheet--list",style:{transform:t.transformY(i),transition:t.duration},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.handleMove(i,e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.handleEnd(i,e)}}},t._l(t.list[i],function(e,i){return n("div",{key:"kk_"+i,staticClass:"om-picker-sheet--list__item"},[t._v("\n                                "+t._s(t.label?e[t.label]:e)+"\n                            ")])}),0)}),0)])])]):t._e()])],1)},staticRenderFns:[]},qt=n("VU/8")(Dt,Wt,!1,null,null,null).exports;qt.install=function(t){t.component(qt.name,qt)};var Xt=qt,Ht={name:"OMTabs",props:{value:String},data:function(){return{start:0,startY:0,move:0,moveY:0,end:0,clientWidth:0,current:0,tabs:[],ItemLength:0,dura:500,vertical:!1}},methods:{changeTab:function(t){this.current=t,this.$emit("change",t),this.$nextTick(function(){document.querySelector(".om-tabs-switch-item__active").scrollIntoView({behavior:"smooth",block:"center"})})},handleStart:function(t){this.start=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY,this.dura=0},handleEnd:function(t){this.end=t.changedTouches[0].clientX,this.move=0,this.moveY=0,this.dura=500,this.end-this.start>100&&this.moveY<50?0==this.current?this.current=0:(this.current-=1,this.changeTab(this.current)):this.end-this.start<-100&&this.moveY<50&&(this.current+1==this.ItemLength?this.current=this.ItemLength-1:(this.current+=1,this.changeTab(this.current))),this.vertical=""},hanldeMove:function(t){this.moveY=t.changedTouches[0].clientY-this.startY,this.move=t.changedTouches[0].clientX-this.start,"vertical"===this.vertical?(this.move=0,this.end=this.start):"standard"===this.vertical?this.move=t.changedTouches[0].clientX-this.start:(Math.abs(this.move)>30||Math.abs(this.moveY)>30)&&(Math.abs(this.moveY/this.move)>1.25?this.vertical="vertical":this.vertical="standard")}},mounted:function(){this.tabs=this.$children.map(function(t,e){return t.$attrs.name}),this.ItemLength=this.tabs.length,this.clientWidth=this.$refs.paneGroup.clientWidth},computed:{transform:function(){return Math.abs(this.move)>30&&this.moveY<50?"translate3d("+-(this.clientWidth*this.current-this.move)+"px, 0, 0)":"translate3d("+-this.clientWidth*this.current+"px, 0, 0)"},transformDur:function(){return"all cubic-bezier(.36,.66,.04,1) "+this.dura+"ms"}}},Gt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-tabs"},[n("div",{staticClass:"om-tabs-switch"},[n("div",{staticClass:"om-tabs-switch-container"},t._l(t.tabs,function(e,i){return n("div",{key:i,ref:"tab_"+i,refInFor:!0,class:["om-tabs-switch-item",i===t.current?"om-tabs-switch-item__active":""],on:{click:function(e){return t.changeTab(i)}}},[t._v(t._s(e))])}),0)]),t._v(" "),n("div",{staticClass:"om-pane-view"},[n("div",{ref:"paneGroup",staticClass:"om-pane-group",style:{transform:t.transform,transition:t.transformDur},on:{touchstart:function(e){return e.stopPropagation(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),t.hanldeMove(e)},touchend:function(e){return e.stopPropagation(),t.handleEnd(e)}}},[t._t("default")],2)])])},staticRenderFns:[]},Jt=n("VU/8")(Ht,Gt,!1,null,null,null).exports,Qt={name:"OMTabpane",props:{value:Number,current:Number}},Kt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["om-tab-pane",this.current!==this.value?"om-tab-pane__deactive":""]},[this._t("default")],2)},staticRenderFns:[]},Zt=n("VU/8")(Qt,Kt,!1,null,null,null).exports;Jt.install=function(t){t.component(Jt.name,Jt)},Zt.install=function(t){t.component(Zt.name,Zt)},window.localStorage||Object.defineProperty(window,"localStorage",new function(){var t=[],e={};Object.defineProperty(e,"getItem",{value:function(t){return t?this[t]:null},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(e,"key",{value:function(e){return t[e]},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(e,"setItem",{value:function(t,e){t&&(document.cookie=escape(t)+"="+escape(e)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(e,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),Object.defineProperty(e,"removeItem",{value:function(t){t&&(document.cookie=escape(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")},writable:!1,configurable:!1,enumerable:!1}),this.get=function(){var n;for(var i in e)-1===(n=t.indexOf(i))?e.setItem(i,e[i]):t.splice(n,1),delete e[i];for(;t.length>0;t.splice(0,1))e.removeItem(t[0]);for(var s,a,o=0,r=document.cookie.split(/\s*;\s*/);o<r.length;o++)(s=r[o].split(/\s*=\s*/)).length>1&&(e[a=unescape(s[0])]=unescape(s[1]),t.push(a));return e},this.configurable=!1,this.enumerable=!0});var te=(t,e)=>{window.localStorage.setItem(t,JSON.stringify({data:e}))},ee=t=>{return window.localStorage.getItem(t)&&JSON.parse(window.localStorage.getItem(t)).data},ne=t=>{window.localStorage.removeItem(t)},ie=[k,I,R,N,P,A,D,q,dt,kt,wt,Tt,Mt,Lt,Jt,Zt,Yt,Xt,Ut],se=function(t){ie.forEach(function(e){t.component(e.name,e)}),t.prototype.$modal=tt,t.prototype.$toast=rt,t.prototype.$message=gt,t.prototype.$add=te,t.prototype.$get=ee,t.prototype.$remove=ne};"undefined"!=typeof window&&window.Vue&&se(window.Vue);var ae={version:"2.9.1",Icon:k,Button:I,Curtain:R,Badge:N,Loading:P,Loadmore:A,ActionSheet:D,ActionSheetItem:q,Modal:tt,Tag:dt,Message:gt,Toast:rt,Swiper:kt,SwiperItem:wt,Divider:Tt,Input:Mt,Slider:Lt,Tabs:Jt,Tabpane:Zt,OMSwitch:Ut,Rate:Yt,Picker:Xt,add:te,get:ee,remove:ne,install:se};const{Toast:oe,get:re}=ae,le=p.a.create({baseURL:"https://mapi.fufentong.com/master/",timeout:0});le.interceptors.request.use(t=>{let e={token:re("fft-react")?re("fft-react").token:null};return"get"===t.method?t.params=Object.assign(e,t.params):t.data=_.a.stringify(Object.assign(e,t.data)),t.headers["Content-Type"]="application/x-www-form-urlencoded",t},t=>{oe(t),Promise.reject(t)}),le.interceptors.response.use(t=>200===t.data.status?t.data:(t.data.status,oe(t.data.msg),t.data),t=>{if(t){oe("网络异常，请重试")}return Promise.reject(t)});var ce={name:"checkphone",data:function(){return{show:!1,count:60,focus:!1,step:1,phone:"",sms:"",testPhone:/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/}},created:function(){var t=this;this.bus.$on("checkphone",function(e){t.show=e})},watch:{sms:function(){this.sms.length>6&&(this.sms=this.sms.substr(0,6))}},methods:{nextStep:function(){var t=this;return m()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.testPhone.test(t.phone)?(t.step=2,t.TimeOut()):t.$toast({value:"请检查手机号",icon:"frown",mask:!0});case 1:case"end":return e.stop()}},e,t)}))()},TimeOut:function(){var t=this;this.count=60;var e=setInterval(function(){t.count-=1,0===t.count&&clearInterval(e)},1e3)}}},ue={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("OMCurtain",{attrs:{show:t.show},on:{close:function(e){t.show=!1}}},[n("div",{staticClass:"check-phone"},[n("div",{staticClass:"check-phone_title"},[t._v("验证手机号")]),t._v(" "),n("div",{staticClass:"check-phone_notice"},[t._v(t._s(1===t.step?"为了您的信息安全，请验证手机号":"验证码已发送至"+t.phone))]),t._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[1===t.step?n("div",{key:"phone",staticClass:"check-phone_form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"check-phone_input",attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("OMButton",{attrs:{size:"large",full:""},on:{click:t.nextStep}},[t._v("下一步")])],1):t._e(),t._v(" "),2===t.step?n("div",{key:"sms",staticClass:"check-phone_form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sms,expression:"sms"}],staticClass:"check-phone_input",staticStyle:{opacity:"0"},attrs:{type:"number",placeholder:"请输入验证码",id:"smscode",autofocus:""},domProps:{value:t.sms},on:{focus:function(e){t.focus=!0},blur:function(e){t.focus=!1},input:function(e){e.target.composing||(t.sms=e.target.value)}}}),t._v(" "),n("label",{staticClass:"check-phone_smscode",attrs:{for:"smscode"}},t._l(6,function(e,i){return n("span",{key:i,class:["smscode-input",i===t.sms.length&&t.focus&&"smscode-input_active"]},[t._v(t._s(t.sms[i]))])}),0)]),t._v(" "),t.count>0?n("div",{staticClass:"smscodestatus"},[t._v("验证码已经发出，"+t._s(t.count)+"秒以后重新获取")]):t._e(),t._v(" "),0===t.count?n("div",{staticClass:"smscodestatus"},[n("span",{on:{click:t.TimeOut}},[t._v("重新获取验证短信")]),t._v(" "),n("span",{on:{click:t.TimeOut}},[t._v("获取语音验证")])]):t._e(),t._v(" "),n("OMButton",{attrs:{size:"large",full:""}},[t._v("登录")])],1):t._e()])],1)])},staticRenderFns:[]};var de={name:"App",components:{navbar:o,BackTop:c,CheckPhone:n("VU/8")(ce,ue,!1,function(t){n("Oboq")},"data-v-42c6907e",null).exports},data:function(){return{transitionName:"forward"}},mounted:function(){var t=this;window.addEventListener("scroll",function(){window.document.documentElement.scrollTop>240?t.bus.$emit("backtop",!0):t.bus.$emit("backtop",!1)})},watch:{$route:function(t,e){var n=t.path.split("/").length,i=e.path.split("/").length;this.transitionName=n<i?"back":"forward"}}},he={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("check-phone"),this._v(" "),e("transition",{attrs:{name:this.transitionName,mode:"out-in"}},[e("keep-alive",{attrs:{include:"index"}},[e("router-view",{staticClass:"router"})],1)],1),this._v(" "),e("navbar"),this._v(" "),e("BackTop")],1)},staticRenderFns:[]};var me=n("VU/8")(de,he,!1,function(t){n("woBR")},null,null).exports,ve=n("5K15"),pe=n.n(ve),fe=(n("f0Iy"),n("/ocq")),_e=n("hKoQ");n.n(_e).a.polyfill(),i.a.use(fe.a);var ge=new fe.a({mode:"history",scrollBehavior:(t,e,n)=>({x:0,y:0}),routes:[{name:"index",path:"/",component:()=>n.e(0).then(n.bind(null,"XOc2"))},{name:"detail",path:"/detail/:id",component:()=>n.e(1).then(n.bind(null,"8Pvq"))},{name:"user",path:"/user",component:()=>n.e(3).then(n.bind(null,"xab/"))},{name:"table",path:"/order-table",component:()=>n.e(2).then(n.bind(null,"4pxN"))},{name:"404",path:"*",component:()=>n.e(4).then(n.bind(null,"hhDc"))}]}),Ce=new i.a,be=n("R3Tg");let ke,ye=i.a.extend(be.a);var we=function(t){return(ke=new ye({data:t=t||{title:"活动规则"}})).Curtainshow=!0,ke.$mount(),document.body.appendChild(ke.$el),ke};i.a.use(s.a);const xe=n("GY1l"),$e=xe.keys();let Se={};for(let t of $e)if("./index.js"===t){Se=Te(t);break}if("function"!=typeof Se){Se.modules=Se.modules||{};for(let t of $e){if("./index.js"===t)continue;let e=t.replace(/^\.\//,"").replace(/\.js$/,""),n=e.split("/"),i=Ie(Se,n);i[e=n.pop()]=Te(t),i[e].namespaced=!0}}function Te(t){const e=xe(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function Ie(t,e){if(1===e.length)return t.modules;let n=e.shift(),i=t.modules[n]=t.modules[n]||{};return i.namespaced=!0,i.modules=i.modules||{},Ie(i,e)}const Oe=Se instanceof Function?Se:()=>new s.a.Store(Object.assign({},Se,{state:Se.state instanceof Function?Se.state():{}}));i.a.config.productionTip=!1,i.a.use(ae),i.a.use(pe.a),i.a.prototype.bus=Ce,i.a.prototype.$rules=we,new i.a({el:"#app",router:ge,store:Oe,components:{App:me},template:"<App/>"})},Oboq:function(t,e){},R3Tg:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("OMCurtain",{attrs:{show:t.Curtainshow},on:{close:t.curtainClose}},[n("div",{staticClass:"rules"},[n("div",{staticClass:"rules-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"rules-content"},t._l(t.rules,function(e,i){return n("p",{key:i,staticClass:"rules-detail"},[t._v("\n                "+t._s(e)+"\n            ")])}),0)])])},staticRenderFns:[]};var s=n("VU/8")({name:"flashsalerule",data:function(){return{Curtainshow:!0,rules:[],title:"活动规则"}},methods:{curtainClose:function(){this.Curtainshow=!1,this.rules=[],this.title="活动规则",this.$el.parentNode.removeChild(this.$el)}}},i,!1,function(t){n("jRnb")},"data-v-70db04a6",null);e.a=s.exports},Rfqw:function(t,e){},VhcQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FLASHSALE="FLASHSALE";e.state=(()=>({flashSale:{}}));e.actions={}},f0Iy:function(t,e){},gyFC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SHOWNAV="SHOWNAV";e.state=(()=>({showNav:!0}));const i={SET_NAV({state:t},e){t.showNav=e}};e.actions=i},jRnb:function(t,e){},jmgz:function(t,e){},woBR:function(t,e){}},["Hoey"]);
//# sourceMappingURL=app.4d06bab7bfe791d4d55f.js.map