webpackJsonp([1],{"+sRT":function(t,s){},"0D1/":function(t,s){},"3m3e":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),i.d(s,"MAIN",function(){return r}),i.d(s,"state",function(){return o}),i.d(s,"mutations",function(){return l}),i.d(s,"actions",function(){return v});var a=i("bOdI"),e=i.n(a),n=i("woOf"),c=i.n(n),r="MAIN",o=function(){return{selectedCity:{name:"重庆市",id:"22"}}},l=e()({},r,function(t,s){t=c()(t,s)}),v={setMain:function(t,s){(0,t.commit)(r,s)}}},GB4C:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={name:"top",data:function(){return{cityInput:"",show:!1,hot:[],result:[]}},created:function(){var t=this;this.$watch("cityInput",t.debounce(function(s){t.getAnswer(s)},800)),this.hotCity()},methods:{go:function(t){this.city=t.name,this.id=t.id;var s=this.$route.path;this.show=!1;var i={name:t.name,id:t.id};this.storage.addStorage("city",i),this.$store.dispatch("main/setMain",i),this.$router.push({path:s,query:{id:t.id}}),window.location.reload()},hotCity:function(){var t=this;this.http("api/index/hotCity").then(function(s){t.hot=s.data.data})},getAnswer:function(){var t=this,s={short_name:this.cityInput};this.http("api/index/searchCity",s).then(function(s){t.result=s.data.data})},debounce:function(t,s){var i;return function(){i&&clearTimeout(i),i=setTimeout(function(){t()},s)}}},computed:{town:function(){return this.storage.getStorage("city").name}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"top",attrs:{id:"city"}},[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"selec",staticStyle:{float:"right"}},[i("a",{staticClass:"selectCity",class:{hover:t.show},on:{mouseover:function(s){t.show=!0}}},[i("span",[t._v(t._s(t.town))]),i("span",{staticStyle:{transform:"rotate(90deg)",display:"inline-block","margin-left":"10px"}},[t._v(">")])]),t._v(" "),t.show?i("div",{staticClass:"city",on:{mouseleave:function(s){t.show=!1}}},[i("h5",[t._v("热门城市：")]),t._v(" "),i("table",{staticStyle:{"margin-top":"16px","margin-bottom":"26px"},attrs:{border:"0",cellspacing:"0"}},[i("tr",{staticStyle:{width:"350px",display:"block"}},t._l(t.hot,function(s){return i("td",{staticStyle:{width:"50px"}},[i("a",{on:{click:function(i){t.go(s)}}},[t._v(t._s(s.name))])])}))]),t._v(" "),i("h5",[t._v("全部城市：")]),t._v(" "),i("table",{staticClass:"search",staticStyle:{"margin-top":"16px"},attrs:{border:"0",cellspacing:"0"}},[i("tr",[i("td",[i("div",{},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cityInput,expression:"cityInput"}],attrs:{autocomplete:"off",id:"search",type:"text",placeholder:"输入城市名称（例如：重庆/cq）"},domProps:{value:t.cityInput},on:{input:function(s){s.target.composing||(t.cityInput=s.target.value)}}})])])]),t._v(" "),i("tr",[i("td",[t.result.length>0?i("ul",{staticClass:"label"},t._l(t.result,function(s){return i("li",{on:{click:function(i){t.go(s)}}},[i("span",{staticClass:"name"},[t._v(t._s(s.name))]),i("span",{staticClass:"pinyin"},[t._v(t._s(s.py))])])})):t._e()])])])]):t._e(),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",[s("span",[this._v("欢迎来到增值通服务平台")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:""}},[s("span",[this._v("登陆/注册")])])}]};var c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav"},[i("div",{staticClass:"full-width"},[i("div",{staticClass:"container"},[i("ul",{staticClass:"nav-box"},[i("li",[i("a",{on:{click:function(s){t.$router.push({path:"/",query:{id:t.storage.getStorage("city").id}})}}},[t._v("首页")])]),t._v(" "),i("li",[i("a",{class:{active:"/services"===t.$route.path||"detail"===t.$route.name},on:{click:function(s){t.$router.push({path:"/services",query:t.storage.getStorage("city")})}}},[t._v("全部服务")])]),t._v(" "),i("li",[i("a",{on:{click:function(s){t.$router.push({path:"/business",query:t.storage.getStorage("city")})}}},[t._v("招商中心")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("li",[i("a",{on:{click:function(s){t.$router.push({path:"/about",query:t.storage.getStorage("city")})}}},[t._v("关于我们")])])]),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",[this._v("行业动态")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",[this._v("解决方案")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"phone"},[s("span",[this._v("400-678-8616")])])}]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"foot"},[i("div",{staticClass:"container"},[i("ul",{staticClass:"row"},[i("li",{staticClass:"co1"},[i("p",[t._v("网站导航")]),t._v(" "),i("a",[t._v("全部服务")]),t._v(" "),i("a",[t._v("招商中心")]),t._v(" "),i("a",[t._v("关于我们")])]),t._v(" "),i("li",{staticClass:"co2"},[i("p",[t._v("热门服务")]),t._v(" "),i("a",[t._v("企业彩铃")]),t._v(" "),i("a",[t._v("企业短视频")]),t._v(" "),i("a",[t._v("绿植租赁")])]),t._v(" "),i("li",{staticClass:"co3"},[i("p",[t._v("友情链接")]),t._v(" "),i("a",[t._v("officemate办公伙伴")]),t._v(" "),i("a",[t._v("福分通")]),t._v(" "),i("a",[t._v("维修通")])]),t._v(" "),i("li",{staticClass:"co4"},[i("p",[t._v("联系我们")]),t._v(" "),i("a",[t._v("咨询热线：400-678-8616转6")]),t._v(" "),i("a",[t._v("商务合作：wanggui@officemate.cn")])]),t._v(" "),i("li",{staticClass:"co5"},[i("img",{attrs:{width:"100px",height:"100px",alt:"",src:"/static/index/pic/qc.jpg"}}),t._v(" "),i("p",{staticStyle:{"font-size":"14px","font-weight":"bold","text-align":"center","margin-top":"11px"}},[t._v("增值通公众号")])])]),t._v(" "),i("p",{staticStyle:{"font-size":"14px","text-align":"center",color:"#bbb","margin-bottom":"0","margin-top":"50px"}},[t._v("版权所有 © CopyRight 2007-2018 欧菲斯办公伙伴控股有限公司 渝ICP备14006025号-1")])])])}]};var o={name:"App",components:{top:i("VU/8")(e,n,!1,function(t){i("0D1/")},"data-v-26b195e1",null).exports,navigation:i("VU/8")({name:"navigation"},c,!1,function(t){i("+sRT")},"data-v-0612bc24",null).exports,foot:i("VU/8")({name:"foot"},r,!1,function(t){i("yqeg")},"data-v-15e713d9",null).exports}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("top"),this._v(" "),s("navigation"),this._v(" "),s("router-view"),this._v(" "),s("foot")],1)},staticRenderFns:[]};var v=i("VU/8")(o,l,!1,function(t){i("cGth")},null,null).exports,d=i("/ocq"),u={name:"index",data:function(){return{banner_active:0,items:["办公后勤","员工福利","人事服务","财税服务","知识产权","法律服务","商务办公","企业用车","更多服务"],navIcon:["static/index/icon/index-nav-work.png","static/index/icon/index-nav-welfare.png","static/index/icon/index-nav-person.png","static/index/icon/index-nav-money.png","static/index/icon/index-nav-knowledge.png","static/index/icon/index-nav-law.png","static/index/icon/index-nav-business.png","static/index/icon/index-nav-car.png","static/index/icon/index-nav-more.png"],banner:["static/index/pic/banner1.jpg","static/index/pic/banner2.JPG","static/index/pic/banner3.jpg","static/index/pic/banner4.jpg"]}},created:function(){this.delay(),this.getMenu()},destroyed:function(){clearInterval(this.time)},methods:{link:function(t){var s=t,i=this.$route.query;this.$router.push({path:s,query:i})},getMenu:function(){var t=this;this.http("api/index/getCategory").then(function(s){200===s.data.status&&(t.items=s.data.data)})},delay:function(){var t=this;setInterval(function(){t.banner_active<t.banner.length-1?t.banner_active+=1:t.banner_active=0},5e3)},changeBanner:function(t){console.log(t),this.banner_active=t}},computed:{banneractive:function(){}}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"index"}},[i("div",{staticClass:"container"},[i("ul",{staticClass:"sideNav"},[t._m(0),t._v(" "),t._l(t.items,function(s,a){return i("li",{staticClass:"sideNavItem"},[i("div",{staticClass:"ti"},[i("img",{staticClass:"nav-icon",attrs:{src:t.navIcon[a],alt:""}}),t._v(" "),i("span",[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"menu"},t._l(s.children,function(s){return i("div",{staticClass:"menu-item"},[i("a",[t._v(t._s(s.name))])])}))])}),t._v(" "),i("li",{staticClass:"sideNavItem",on:{click:function(s){t.link("/services")}}},[i("div",{staticClass:"ti"},[i("img",{staticClass:"nav-icon",attrs:{src:t.navIcon[8],alt:""}}),t._v(" "),i("span",[t._v("更多服务")])])])],2)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("transition-group",{staticClass:"bannerList",attrs:{id:"banner",tag:"ul",name:"fade"}},t._l(t.banner,function(s,a){return a===t.banner_active?i("li",{key:a,staticClass:"banner",style:{backgroundImage:"url("+s+")"}}):t._e()}))],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"tcenter"},[s("p",[this._v("服务类别")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"full-width centerBar"},[s("div",{staticClass:"container "},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 centerBarItem"},[s("img",{staticStyle:{"margin-right":"35px"},attrs:{src:"static/index/icon/index-icon-standard.png",alt:""}}),this._v("规范齐全 高效便捷\n        ")]),this._v(" "),s("div",{staticClass:"col-3 centerBarItem"},[s("img",{staticStyle:{"margin-right":"35px"},attrs:{src:"static/index/icon/index-icon-shop.png",alt:""}}),this._v("阳光采购 质优价廉\n        ")]),this._v(" "),s("div",{staticClass:"col-3 centerBarItem"},[s("img",{staticStyle:{"margin-right":"35px"},attrs:{src:"static/index/icon/index-icon-control.png",alt:""}}),this._v("严选管控 专业放心\n        ")]),this._v(" "),s("div",{staticClass:"col-3 centerBarItem"},[s("img",{staticStyle:{"margin-right":"35px"},attrs:{src:"static/index/icon/index-icon-customized.png",alt:""}}),this._v("专属定制 管家服务\n        ")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container hot"},[i("h2",[t._v("热门服务")]),t._v(" "),i("h2",{staticClass:"hot-service"},[t._v("\n      HOT SERVICE\n    ")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 img-detail"},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:"static/index/pic/index-photo1.jpg",alt:""}}),t._v(" "),i("div",{staticClass:"img-box-p"},[i("p",[t._v("预先设置好您企业的专属彩铃，电话每响1次，您的品牌就传播1次。商务彩铃，让营销更简单！更高效 ")])])])]),t._v(" "),i("div",{staticClass:"col-6 art-detail"},[i("div",{staticClass:"art-box"},[i("p",[i("span",{staticClass:"art-title"},[t._v("企业彩铃")]),i("span",{staticClass:"art-title-eng"},[t._v("ENTERPRISE COLOR BELL")])]),t._v(" "),i("p",[t._v("企业的有声名片，独一无二的铃声彰显您的企业形象")])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 art-detail"},[i("div",{staticClass:"art-box"},[i("p",[i("span",{staticClass:"art-title"},[t._v("企业短视频")]),i("span",{staticClass:"art-title-eng"},[t._v("ENTERPRISE SHORT VIDEO")])]),t._v(" "),i("p",[t._v("多应用场景，开创视频营销新时代")])])]),t._v(" "),i("div",{staticClass:"col-6 img-detail"},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:"static/index/pic/index-photo2.jpg",alt:""}}),t._v(" "),i("div",{staticClass:"img-box-p"},[i("p",[t._v("覆盖48个行业，涉及品牌宣传、年会、产品推广、招聘、招商、培训等视频应用场景，提供个性化定制服务，开创视频营销新时代 ")])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 img-detail"},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:"static/index/pic/index-photo3.jpg",alt:""}}),t._v(" "),i("div",{staticClass:"img-box-p"},[i("p",[t._v("提供个性化设计方案，涵盖品类丰富的绿植，为您打造清新的绿色工作环境")])])])]),t._v(" "),i("div",{staticClass:"col-6 art-detail"},[i("div",{staticClass:"art-box"},[i("p",[i("span",{staticClass:"art-title"},[t._v("绿植租赁")]),i("span",{staticClass:"art-title-eng"},[t._v("GREEN PLANTING LEASE")])]),t._v(" "),i("p",[t._v("绿色清新空气，优享轻松工作之旅")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container hot"},[s("h2",[this._v("服务客户")]),this._v(" "),s("h2",{staticClass:"hot-service"},[this._v("\n      CUSTOMER SERVICE\n    ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"full-width customer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/国家电网.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/中国石油.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/工商银行.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/中国银行.jpg",alt:""}})])]),this._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"19px"}},[s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/福特.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/太平洋.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/中国一汽.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"static/index/pic/重庆轨道交通.jpg",alt:""}})])])])])}]};var p=i("VU/8")(u,_,!1,function(t){i("gYE+")},"data-v-094e0f87",null).exports,m=i("woOf"),f=i.n(m),h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"service-item"},[i("div",{staticClass:"img-box"},[i("router-link",{attrs:{to:"/details/1"}},[i("img",{attrs:{src:"",alt:""}})])],1),t._v(" "),i("div",{staticClass:"detail-box"},[i("p",{staticClass:"detail-jiage"},[i("span",[t._v("￥"+t._s(t.indent.end_price))]),i("em",{directives:[{name:"show",rawName:"v-show",value:(t.num+1)%3==0,expression:"(num+1)%3===0"}],staticStyle:{"font-size":"12px",color:"#fe7405"}},[t._v("起")]),t._v(" "),i("em",{staticStyle:{"font-size":"12px",float:"right",display:"inline-block"}},[t._v("咨询量：50")])]),t._v(" "),i("p",{staticClass:"detail-title"},[i("a",{attrs:{href:""}},[t._v(t._s(t.indent.name))])]),t._v(" "),i("p",{staticClass:"detail-company"},[i("a",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap",width:"190px"},attrs:{href:"/introduce"},domProps:{innerHTML:t._s(t.indent.business_name)}})]),t._v(" "),i("a",{staticClass:"btn",class:{active:2===t.num},attrs:{href:""}},[t._v("提交需求")])])])},staticRenderFns:[]};var g=i("VU/8")({name:"service-item",props:["indent","num"],data:function(){return{city:""}}},h,!1,function(t){i("jBpy")},"data-v-153f32be",null).exports,C={name:"services",components:{ServiceItem:g},created:function(){this.recommendService(),this.businessService()},filters:{type:function(t){return 1===t?"成交量":2===t?"好评率":void 0}},data:function(){return{recommend:[],business:"",options:{page:1,parent_id:0,child_id:0,type:1,order:"asc"}}},methods:{recommendService:function(){var t=this;this.http("api/service/recommendService").then(function(s){t.recommend=s.data.data})},businessService:function(t){var s=this,i=this.options;t&&(i=f()(i,t)),this.http("api/service/businessService",i).then(function(t){200===t.data.status&&(s.business=t.data.data)}),this.options=i}}},b={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"container main"},[i("div",{staticClass:"mainl"},[i("div",{staticClass:"classify"},[i("div",{staticClass:"tr"},[i("div",{staticClass:"td-title"},[t._v("\n              服务类别:\n            ")]),t._v(" "),i("div",{staticClass:"td"},[i("div",{staticClass:"td-item"},[i("a",{class:{select:0===t.options.parent_id},on:{click:function(s){t.businessService({parent_id:0,child_id:0})}}},[t._v("不限")])]),t._v(" "),t._l(t.business.fatherCate,function(s){return i("div",{staticClass:"td-item"},[i("a",{class:{select:s.id===t.options.parent_id},on:{click:function(i){t.businessService({parent_id:s.id,child_id:0})}}},[t._v(t._s(s.name))])])})],2)]),t._v(" "),i("div",{staticClass:"tr"},[i("div",{staticClass:"td-title"},[t._v("\n              服务项目:\n            ")]),t._v(" "),i("div",{staticClass:"td"},[i("div",{staticClass:"td-item"},[i("a",{class:{select:0===t.options.child_id},on:{click:function(s){t.businessService({child_id:0})}}},[t._v("不限")])]),t._v(" "),t._l(t.business.childCate,function(s){return i("div",{staticClass:"td-item"},[i("a",{class:{select:t.options.child_id===s.id},on:{click:function(i){t.businessService({child_id:s.id})}}},[t._v(t._s(s.name))])])})],2)]),t._v(" "),i("div",{staticClass:"tr"},[i("div",{staticClass:"td-title"},[t._v("\n              排序方式:\n            ")]),t._v(" "),i("div",{staticClass:"td"},t._l(2,function(s){return i("div",{staticClass:"td-item"},[i("a",{class:{select:t.options.type===s},on:{click:function(i){t.businessService({type:s})}}},[t._v(t._s(t._f("type")(s)))])])}))])]),t._v(" "),i("div",{staticClass:"service"},t._l(t.business.serviceData,function(t,s){return i("service-item",{key:s,class:{margin0:(s+1)%3==0},attrs:{indent:t,num:s}})})),t._v(" "),t.business.countPage>1?i("div",{staticClass:"page"},[i("ul",{staticClass:"page-control"},[t.business.page>1?i("li",{staticClass:"page-item page-up",on:{click:function(s){t.businessService({page:parseInt(t.business.page)-1})}}},[t._v("上一页")]):t._e(),t._v(" "),t._l(5,function(s){return i("li",{staticClass:"page-item",class:[{"more-page":4===s},{active:s===t.options.page}]},[i("span",4!=s?[t._v(t._s(s))]:[t._v("···")])])}),t._v(" "),i("li",{staticClass:"page-item page-down",on:{click:function(s){t.businessService({page:parseInt(t.business.page)+1})}}},[t._v("下一页")])],2),t._v(" "),t._m(0)]):t._e()]),t._v(" "),i("div",{staticClass:"mainr"},[i("p",{staticStyle:{"margin-bottom":"20px","font-weight":"bold","font-size":"16px"}},[t._v("优秀企业推荐")]),t._v(" "),t._l(t.recommend,function(s){return i("div",{staticClass:"good-company"},[t._m(1,!0),t._v(" "),i("div",{staticClass:"company-detail"},[i("p",{staticClass:"company-title",domProps:{innerHTML:t._s(s.name)}}),t._v(" "),t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),i("p",{staticClass:"sm-font company-operation"},[t._v("\n              擅长领域：音乐制作\n            ")])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-jump"},[s("span",[this._v("到第")]),this._v(" "),s("input",{attrs:{type:"text"}}),this._v(" "),s("span",[this._v("页")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"company-img"},[s("img",{attrs:{src:"",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"sm-font company-add"},[s("span",{staticClass:"add-province"},[this._v("省份：四川")]),this._v(" "),s("span",{staticClass:"add-city"},[this._v("城市：成都")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"sm-font company-sale"},[s("span",{staticClass:"company-count"},[this._v("销量：66")]),this._v(" "),s("span",{staticClass:"company-odds"},[this._v("好评率：86%")])])}]};var y=i("VU/8")(C,b,!1,function(t){i("wJYD")},"data-v-3d9e6610",null).exports,x={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"full-width demand"},[i("div",{staticClass:"container"},[i("div",{staticClass:"table"},[i("div",{staticClass:"table-box table-select"},[i("div",{staticClass:"tr"},[t._v("您的选择:")]),t._v(" "),i("div",{staticClass:"td row"},t._l(t.selected,function(s,a){return i("div",{key:a,staticClass:"td-select",on:{click:function(s){t.del(a)}}},[t._v("\n            "+t._s(s.name)+"\n          ")])}))]),t._v(" "),i("div",{staticClass:"table-box table-service"},[i("div",{staticClass:"tr"},[t._v("选择服务:")]),t._v(" "),i("div",{staticClass:"td row"},t._l(t.Category,function(s){return i("div",{staticStyle:{"margin-bottom":"25px"}},[i("div",{staticClass:"td-tile"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"td-box"},t._l(s.children,function(s){return i("div",{staticClass:"td-item",class:{select:s},on:{click:function(i){t.selec(s)}}},[t._v(t._s(s.name))])}))])}))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("a",{staticClass:"btn",attrs:{href:""}},[t._v("提交需求")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-box table-desc"},[s("div",{staticClass:"tr"},[this._v("需求描述：")]),this._v(" "),s("div",{staticClass:"td row"},[s("textarea",{attrs:{name:"describe",cols:"30",rows:"10"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-box msg"},[s("div",{staticClass:"tr"},[this._v("电话号码：")]),this._v(" "),s("div",{staticClass:"td row"},[s("input",{staticClass:"phone2",attrs:{name:"phone",placeholder:"请输入手机号码",cols:"30",rows:"10"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-box code"},[s("div",{staticClass:"tr"},[this._v("验证码：")]),this._v(" "),s("div",{staticClass:"td row"},[s("input",{attrs:{name:"code",id:"code",placeholder:"请输入手机验证码",cols:"30",rows:"10"}}),this._v(" "),s("label",{attrs:{id:"codelabel",for:"code",autocomplete:"none"}},[this._v("发送验证码")])])])}]};var w=i("VU/8")({name:"demand",data:function(){return{selected:[],Category:[]}},created:function(){this.getCategory()},methods:{getCategory:function(){var t=this;this.http("api/index/getCategory").then(function(s){200===s.data.status&&(t.Category=s.data.data)})},selec:function(t){this.selected.push(t)},del:function(t){this.selected.splice(t,1)}}},x,!1,function(t){i("QecB")},"data-v-2c8c8314",null).exports,S={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"about"},[i("div",{staticClass:"full-width business-banner",style:{backgroundImage:"url("+t.img+")"}}),t._v(" "),i("div",{staticClass:"container crumbs"},[t._v("\n    您当前的位置 ：关于我们  >>  "+t._s(t.tab[t.tabActive])+"\n  ")]),t._v(" "),i("div",{staticClass:"full-width tab"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row",staticStyle:{width:"600px"}},t._l(t.tab,function(s,a){return i("div",{staticClass:"row-item"},[i("a",{class:{active:t.tabActive===a},on:{click:function(s){t.tabActive=a}}},[t._v(t._s(s))])])}))])]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.tabActive?i("div",{staticClass:"full-width company-des"},[i("div",{staticClass:"container"},[i("div",{staticClass:"le"},[i("div",{staticClass:"cont"},[i("p",[t._v("欧菲斯办公伙伴控股有限公司是全国最大的一站式办公整体解决方案提供商之一，拥有办公行业成熟且先进的服务标准，覆盖全国的高效服务网络。")]),t._v(" "),i("P",[t._v("集团以O2O电商平台及创新现代服务业商业模式，实现行业核心资源的全面整合，通过打造全新政企需求生态链，以领先的5线3通电商化解决方案，满足客户从办公物资到办公非物资的全方位需求。")]),t._v(" "),i("P",[t._v("25年发展历程未曾改变服务基因，一直秉承“您专心工作，琐事我来做”的服务理念，愿为更多客户带去最后一公里有温度的服务。")])],1),t._v(" "),i("div",{staticClass:"le-row"},[i("img",{staticStyle:{"margin-right":"20px"},attrs:{src:"/static/about/aboutUs-company-1.png",alt:""}}),t._v(" "),i("img",{attrs:{src:"/static/about/aboutUs-company-2.png",alt:""}})])]),t._v(" "),i("div",{staticClass:"ri"},[i("img",{attrs:{src:"/static/about/aboutUs-company-3.png",alt:""}})])])]):t._e(),t._v(" "),1===t.tabActive?i("div",{staticClass:"full-width  company-cha"},[i("div",{staticClass:"container"},[i("img",{attrs:{src:"/static/about/aboutus.jpg",alt:""}})])]):t._e(),t._v(" "),2===t.tabActive?i("div",{staticClass:"full-width company-len"},[i("div",{staticClass:"container"},[i("div",{staticClass:"detail-box"},t._l(t.info,function(s){return i("div",{staticClass:"ph-item"},[i("img",{attrs:{src:s.ico,alt:""}}),t._v(" "),i("p",{staticClass:"name"},[t._v(t._s(s.ti))]),t._v(" "),i("p",[t._v(t._s(s.ph))])])})),t._v(" "),i("div",{staticClass:"qc-code"},[i("img",{attrs:{src:"/static/about/aboutUs-ewm.png",alt:""}}),t._v(" "),i("p",[t._v("增值通公众号")])])])]):t._e()])],1)},staticRenderFns:[]};var E=i("VU/8")({name:"about",data:function(){return{tabActive:0,img:"/static/detail/3.png",tab:["公司介绍","发展历程","联系我们"],info:[{ti:"咨询热线",ph:"400-678-8616",ico:"/static/about/aboutUs-contactUs-icon-phone.png"},{ti:"市场合作",ph:"wanggui@officemate.cn",ico:"/static/about/aboutUs-contactUs-icon-cooperation.png"},{ti:"招商加盟",ph:"wanggui@officemate.cn",ico:"/static/about/aboutUs-contactUs-icon-jion.png"},{ti:"公司地址",ph:"重庆市渝中区经纬大道333号2幢13A层",ico:"/static/about/aboutUs-contactUs-icon-address.png"}]}}},S,!1,function(t){i("foDX")},"data-v-ef412342",null).exports,k={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail-main"},t._l(t.html,function(s,a){return t.active===a?i("div",{staticClass:"container detail-info"},[t._v("\n    "+t._s(s)+"\n  ")]):t._e()}))},staticRenderFns:[]};var $={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail-case"},[i("div",{staticClass:"full-width case-banner"},[i("div",{staticClass:"container casebox"},t._l(4,function(s){return i("div",{staticClass:"case-itm"},[t._m(0,!0),t._v(" "),i("p",{staticClass:"case-title"},[t._v("科大讯飞")])])}))]),t._v(" "),i("div",{staticClass:"container case-b"},[i("div",{staticClass:"case-info",domProps:{innerHTML:t._s(t.html)}}),t._v(" "),i("div",{staticClass:"case-product"},t._l(5,function(s){return i("div",{staticClass:"good-company"},[t._m(1,!0),t._v(" "),t._m(2,!0)])}))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"case-img"},[s("img",{attrs:{src:"",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"company-img"},[s("img",{attrs:{src:"",alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"company-detail"},[i("p",{staticClass:"company-title"},[t._v("Gox原创音乐工作室")]),t._v(" "),i("p",{staticClass:"sm-font company-add"},[i("span",{staticClass:"add-province"},[t._v("省份：四川")]),t._v(" "),i("span",{staticClass:"add-city"},[t._v("城市：成都")])]),t._v(" "),i("p",{staticClass:"sm-font company-sale"},[i("span",{staticClass:"company-count"},[t._v("销量：66")]),t._v(" "),i("span",{staticClass:"company-odds"},[t._v("好评率：86%")])]),t._v(" "),i("p",{staticClass:"sm-font company-operation"},[t._v("\n                擅长领域：音乐制作\n              ")])])}]};var I={name:"detail",components:{DetailMain:i("VU/8")({name:"detailmain",props:{html:"",active:""}},k,!1,function(t){i("ZKle")},"data-v-1ee32865",null).exports,DetailCase:i("VU/8")({name:"detailcase",props:{html:""}},$,!1,function(t){i("te58")},"data-v-493eebac",null).exports},data:function(){return{tabActive:0,img:"/static/detail/3.png",tab:["服务内容","服务流程","公司介绍","合作案例","服务区域"]}}},A={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("div",{staticClass:"full-width details-banner",style:{backgroundImage:"url("+t.img+")"}},[t._m(0)]),t._v(" "),i("div",{staticClass:"container crumbs"},[t._v("\n    您当前的位置:您当前的位置 ：全部服务  >>  日常保洁   >>  服务流程\n  ")]),t._v(" "),i("div",{staticClass:"full-width tab"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row",staticStyle:{width:"780px"}},t._l(t.tab,function(s,a){return i("div",{staticClass:"row-item"},[i("a",{class:{active:t.tabActive===a},on:{click:function(s){t.tabActive=a}}},[t._v(t._s(s))])])}))])]),t._v(" "),i("div",{staticClass:"full-width"},[3===t.tabActive?i("detail-case",{attrs:{html:t.tab[3]}}):i("detail-main",{attrs:{html:t.tab,active:t.tabActive}})],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"info"},[i("p",{staticClass:"info-title"},[t._v("日常保洁")]),t._v(" "),i("p",{staticClass:"info-co"},[t._v("为企业或公寓提供驻场式\n          "),i("br"),t._v("\n          全天固定人员保洁服务")]),t._v(" "),i("p",{staticClass:"info-n"},[t._v("*暂不接待单次服务订单")]),t._v(" "),i("a",{staticClass:"btn"},[t._v("提交需求")])])])}]};var j=i("VU/8")(I,A,!1,function(t){i("rMBT")},"data-v-77e1abf4",null).exports,R={name:"introduce",components:{ServiceItem:g},data:function(){return{banner:"static/index/pic/banner3.jpg"}}},U={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"introduce"},[i("div",{staticClass:"full-width intro_banner",style:{backgroundImage:"url("+t.banner+")"}}),t._v(" "),i("div",{staticClass:"container crumbs"},[t._v("\n    您当前的位置:您当前的位置 ：全部服务  >>  日常保洁   >>  服务流程\n  ")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"container service-introduce"},[i("h1",[t._v("\n      服务项目\n    ")]),t._v(" "),i("div",{staticClass:"row"},t._l(8,function(t,s){return i("service-item",{key:s,class:{margin0:(s+1)%4==0},attrs:{indent:t,num:s}})}))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container company-introduce"},[s("h1",[this._v("\n      公司介绍\n    ")]),this._v(" "),s("div",{staticClass:"row introduce-main"})])}]};var O=i("VU/8")(R,U,!1,function(t){i("GB4C")},"data-v-58c3b286",null).exports,V={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"business"},[i("div",{staticClass:"full-width business-banner",style:{backgroundImage:"url("+t.img+")"}}),t._v(" "),i("div",{staticClass:"container crumbs"},[t._v("\n    您当前的位置 ：招商中心  >>  "+t._s(t.tab[t.tabActive])+"\n  ")]),t._v(" "),i("div",{staticClass:"full-width tab"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row",staticStyle:{width:"600px"}},t._l(t.tab,function(s,a){return i("div",{staticClass:"row-item"},[i("a",{class:{active:t.tabActive===a},on:{click:function(s){t.tabActive=a}}},[t._v(t._s(s))])])}))])]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.tabActive?i("div",{key:"1",staticClass:"full-width card"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},t._l(t.card,function(s){return i("div",{staticClass:"business-card"},[i("div",{staticClass:"blue-card"},[i("span",[t._v(t._s(s.tile))]),t._v(" "),i("img",{attrs:{src:"/static/business/business-CooperativeAdvantage-bg.png",alt:""}})]),t._v(" "),i("img",{staticClass:"icon_off",attrs:{src:s.icon_off,alt:""}}),t._v(" "),i("img",{staticClass:"icon_on",attrs:{src:s.icon_on}}),t._v(" "),i("img",{staticClass:"bg",attrs:{src:s.img,alt:""}}),t._v(" "),i("div",{staticClass:"mask"},[i("span",[t._v(t._s(s.content))])])])}))])]):t._e(),t._v(" "),1===t.tabActive?i("div",{key:"2",staticClass:"full-width",staticStyle:{"background-color":"#f2f2f2"}},[i("div",{staticClass:"container advantage"},t._l(t.advantage,function(s,a){return i("div",{staticClass:"adv-l",class:{reverse:1===a}},[i("img",{staticClass:"ico",attrs:{src:s.ico,alt:""}}),t._v(" "),i("div",{staticClass:"adv-inf"},[i("span",{staticClass:"tile"},[t._v(t._s(s.tile))]),t._v(" "),t._l(s.adv,function(s){return i("div",{staticClass:"adv"},[t._v("\n              "+t._s(s)+"\n            ")])})],2),t._v(" "),i("img",{staticClass:"big",attrs:{src:s.big,alt:""}})])}))]):t._e(),t._v(" "),2===t.tabActive?i("div",{key:"3",staticClass:"full-width",staticStyle:{"background-color":"#f2f2f2"}},[i("div",{staticClass:"container join"},[i("div",{staticClass:"join-bg"},[i("img",{attrs:{src:"/static/business/business-join-photo1.png",alt:""}})]),t._v(" "),i("form",{staticClass:"join-form"},[i("table",{attrs:{cellspacing:"0",cellpadding:"0",width:"528"}},[i("tr",[i("td",{staticClass:"tile"},[t._v("公司全称:")]),t._v(" "),i("td",{staticClass:"input"},[i("input",{attrs:{type:"text",placeholder:"请输入公司全称"}})])]),t._v(" "),i("tr",[i("td",{staticClass:"tile",staticStyle:{"vertical-align":"top"}},[t._v("公司地址:")]),t._v(" "),i("td",{staticClass:"input"},[i("div",{staticClass:"address-select"},[i("select",{attrs:{name:"province",id:"province"}},[i("option",{attrs:{value:""}},[t._v("四川")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("湖北")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("陕西")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("湖南")])]),t._v(" "),i("select",{attrs:{name:"city",id:"city"}},[i("option",{attrs:{value:""}},[t._v("成都")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("重庆")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("苏州")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("北京")])]),t._v(" "),i("select",{attrs:{name:"town",id:"town"}},[i("option",{attrs:{value:""}},[t._v("沙坪坝")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("九龙坡")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("渝北")]),t._v(" "),i("option",{attrs:{value:""}},[t._v("江北")])])]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"请输入详细地址"}})])]),t._v(" "),i("tr",[i("td",{staticClass:"tile"},[t._v("您的姓名：")]),t._v(" "),i("td",{staticClass:"input"},[i("input",{attrs:{type:"text",placeholder:"请输入您的姓名"}})])]),t._v(" "),i("tr",[i("td",{staticClass:"tile"},[t._v("您的电话：")]),t._v(" "),i("td",{staticClass:"input"},[i("input",{attrs:{type:"text",placeholder:"请输入您的姓名"}})])]),t._v(" "),i("tr",[i("td",{staticClass:"tile",staticStyle:{"vertical-align":"top"}},[t._v("留言:")]),t._v(" "),i("td",{staticClass:"input"},[i("textarea",{attrs:{id:"",cols:"30",rows:"10"}})])]),t._v(" "),i("tr",[i("td",{staticClass:"tile"}),t._v(" "),i("td",{staticClass:"input"},[i("a",{staticClass:"btn"},[t._v("提交申请")])])])])])])]):t._e()])],1)},staticRenderFns:[]};var B=i("VU/8")({name:"business",data:function(){return{tabActive:0,img:"/static/detail/3.png",tab:["合作优势","我们的优势","加入我们"],card:[{img:"/static/business/business-CooperativeAdvantage-photo1.png",tile:"零投入 高回报",icon_off:"/static/business/business-CooperativeAdvantage-icon1-default.png",icon_on:"/static/business/business-CooperativeAdvantage-icon1-hover.png",content:"无合作门槛，0推广费用，借助officemate的客户资源，提供服务，获取回报"},{img:"/static/business/business-CooperativeAdvantage-photo2.png",tile:"优质资源 稳定收益",icon_off:"/static/business/business-CooperativeAdvantage-icon2-default.png",icon_on:"/static/business/business-CooperativeAdvantage-icon2-hover.png",content:"officemate从业多年，累计服务政府及企业30万+，获得了大量优质高粘性客户"},{img:"/static/business/business-CooperativeAdvantage-photo3.png",tile:"品牌塑造 增强实力",icon_off:"/static/business/business-CooperativeAdvantage-icon3-default.png",icon_on:"/static/business/business-CooperativeAdvantage-icon3-hover.png",content:"服务于大型知名企业，提升自身企业的知名度，不断提升服务能力，增强企业实力"},{img:"/static/business/business-CooperativeAdvantage-photo4.png",tile:"公平公正 良性竞争",icon_off:"/static/business/business-CooperativeAdvantage-icon4-default.png",icon_on:"/static/business/business-CooperativeAdvantage-icon4-hover.png",content:"限量筛选行业优质服务商，保证资源充分匹配，抵制同质化的低价竞争"}],advantage:[{ico:"/static/business/business-advantage-icon1.png",big:"/static/business/business-advantage-photo1.png",tile:"海量客户资源",adv:["集团客户300000+","合作伙伴1000+","加盟商客户200+"]},{ico:"/static/business/business-advantage-icon2.png",big:"/static/business/business-advantage-photo2.png",tile:"立体化营销体系",adv:["五线三通，客户共享","全国布局，深耕行业"]},{ico:"/static/business/business-advantage-icon3.png",big:"/static/business/business-advantage-photo3.png",tile:"塑造品牌价值",adv:["精准直达，提升曝光","品牌备述，增强实力"]}]}}},V,!1,function(t){i("kesi")},"data-v-69de74d2",null).exports;a.a.use(d.a);var F=new d.a({mode:"history",scrollBehavior:function(t,s,i){return{x:0,y:0}},routes:[{path:"/",name:"index",component:p},{path:"/services",name:"services",component:y},{path:"/demand",name:"demand",component:w},{path:"/about",name:"about",component:E},{path:"/details/:id",name:"detail",component:j},{path:"/introduce",name:"introduce",component:O},{path:"/business",name:"business",component:B}]}),M=i("mtWM"),N=i.n(M),T=i("mw3O"),P=i.n(T),q=i("mvHQ"),D=i.n(q),L={hasItem:function(t){return!!window.localStorage.getItem(t)},addStorage:function(t,s){window.localStorage.setItem(t,D()(s))},getStorage:function(t){return JSON.parse(window.localStorage.getItem(t))},removeStorage:function(t){window.localStorage.removeItem(t)}},z=i("hKoQ"),G=i.n(z),H=i("BO1k"),Q=i.n(H),J=i("NYxO");a.a.use(J.a);var Y=i("QD23"),K=Y.keys(),W={},X=!0,Z=!1,tt=void 0;try{for(var st,it=Q()(K);!(X=(st=it.next()).done);X=!0){var at=st.value;if("./index.js"===at){W=pt(at);break}}}catch(t){Z=!0,tt=t}finally{try{!X&&it.return&&it.return()}finally{if(Z)throw tt}}if("function"!=typeof W){W.modules=W.modules||{};var et=!0,nt=!1,ct=void 0;try{for(var rt,ot=Q()(K);!(et=(rt=ot.next()).done);et=!0){var lt=rt.value;if("./index.js"!==lt){var vt=lt.replace(/^\.\//,"").replace(/\.js$/,""),dt=vt.split("/"),ut=mt(W,dt);ut[vt=dt.pop()]=pt(lt),ut[vt].namespaced=!0}}}catch(t){nt=!0,ct=t}finally{try{!et&&ot.return&&ot.return()}finally{if(nt)throw ct}}}var _t=W instanceof Function?W:function(){return new J.a.Store(f()({},W,{state:W.state instanceof Function?W.state():{}}))};function pt(t){var s=Y(t),i=s.default||s;if(i.commit)throw new Error("store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(i.state&&"function"!=typeof i.state)throw new Error("state should be a function in store/"+t.replace("./",""));return i}function mt(t,s){if(1===s.length)return t.modules;var i=s.shift(),a=t.modules[i]=t.modules[i]||{};return a.namespaced=!0,a.modules=a.modules||{},mt(a,s)}G.a.polyfill();_t();var ft=0;L.hasItem("city")&&(ft=L.getStorage("city").id);if(a.a.config.productionTip=!1,a.a.prototype.storage=L,L.hasItem("city"));else{L.addStorage("city",{name:"全国",id:0})}a.a.prototype.http=function(t,s,i){var a="http://api.zengzhitong.com/"+t,e={city_id:ft};return s&&(e=f()(s,e)),e=P.a.stringify(e),"get"===i?N.a.get(a,e):N.a.post(a,e)};var ht=_t();new a.a({el:"#app",router:F,store:ht,components:{App:v},template:"<App/>"})},QD23:function(t,s,i){var a={"./main.js":"3m3e"};function e(t){return i(n(t))}function n(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}e.keys=function(){return Object.keys(a)},e.resolve=n,t.exports=e,e.id="QD23"},QecB:function(t,s){},ZKle:function(t,s){},cGth:function(t,s){},foDX:function(t,s){},"gYE+":function(t,s){},jBpy:function(t,s){},kesi:function(t,s){},rMBT:function(t,s){},te58:function(t,s){},wJYD:function(t,s){},yqeg:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.40296edf87de800e3e9f.js.map