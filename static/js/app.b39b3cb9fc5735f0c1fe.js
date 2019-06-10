webpackJsonp([9],{SrUm:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router"})],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},a,!1,function(t){e("rKTb")},null,null).exports,s={name:"Icon",props:{value:String}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["iconfont","icon-"+this.value]})},staticRenderFns:[]},c=e("VU/8")(s,l,!1,null,null,null).exports;c.install=function(t){t.component(c.name,c)};var r=c,d={name:"Loading",props:{size:String,dark:Boolean}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["om-loading",t.size?"om-loading--"+t.size:""]},[e("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),e("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),e("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]})])},staticRenderFns:[]},m=e("VU/8")(d,u,!1,null,null,null).exports,h={name:"OMButton",props:{type:{type:String,default:"primary"},outline:Boolean,size:String,circle:Boolean,full:Boolean,loading:Boolean,disabled:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:m}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"om-button",class:[t.type?"om-button--"+t.type:"",t.size?"om-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-circle":t.circle,"is-full":t.full,outline:t.outline}],attrs:{disabled:t.disabled||t.loading},on:{click:t.handleClick}},[t.loading?e("Loading",{attrs:{size:t.size,dark:t.outline}}):t._e(),t._v(" "),t.$slots.default?e("span",[t._t("default")],2):t._e()],1)},staticRenderFns:[]},f=e("VU/8")(h,v,!1,null,null,null).exports;f.install=function(t){f.component(f.name,f)};var p=f,_={name:"OMCurtain",props:{show:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},C={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"fade"}},[this.show?n("div",{staticClass:"om-curtain"},[n("div",{staticClass:"om-mask"}),this._v(" "),n("div",{staticClass:"om-curtain--container"},[n("div",{staticClass:"om-curtain--main"},[this._t("default")],2),this._v(" "),n("i",{staticClass:"iconfont icon-close-circle om-curtain--close",on:{click:this.handleClose}})])]):this._e()])},staticRenderFns:[]},g=e("VU/8")(_,C,!1,null,null,null).exports;g.install=function(t){t.component(g.name,g)};var b=g,k={name:"OMbadge",props:{value:String,max:{type:String,default:"99"},min:{type:String,default:"0"},isdot:Boolean},computed:{STR:function(){var t=parseInt(this.value),n=this.max,e=this.min;return t>n?"· · ·":!(t<e)&&this.value}}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.STR?e("div",{staticClass:"om-badge"},[t._t("default"),t._v(" "),t.isdot?e("span",{class:["om-badge-ico",t.isdot&&"isdot"]}):e("span",{staticClass:"om-badge-ico"},[t._v(t._s(t.STR))])],2):t._e()},staticRenderFns:[]},$=e("VU/8")(k,y,!1,null,null,null).exports;$.install=function(t){t.component($.name,$)};var w=$;m.install=function(t){t.component(m.name,m)};var x=m,S={name:"OMLoadmore",props:{value:{type:Array,default:function(){return["查看更多","加载中","没有更多"]}},status:{type:String,default:"more"}},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:m}},L={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["om-loadmore",t.status?"om-loadmore-"+t.status:""],on:{click:t.handleClick}},["loading"==t.status?e("Loading",{attrs:{dark:""}}):t._e(),t._v(" "),"more"==t.status?e("span",[t._v(t._s(t.value[0]))]):t._e(),t._v(" "),"loading"==t.status?e("span",[t._v(t._s(t.value[1]))]):t._e(),t._v(" "),"nomore"==t.status?e("span",[t._v(t._s(t.value[2]))]):t._e()],1)},staticRenderFns:[]},R=e("VU/8")(S,L,!1,null,null,null).exports;R.install=function(t){t.component(R.name,R)};var U=R,V={name:"ActionSheet",props:{title:String,cancelText:String,status:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},z={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.status?e("div",{staticClass:"om-action-sheet"},[e("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),e("div",{staticClass:"om-action-sheet--container"},[t.title?e("div",{staticClass:"om-action-sheet--title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?e("div",{staticClass:"om-action-sheet--body"},[t._t("default")],2):t._e(),t._v(" "),e("div",{staticClass:"om-action-sheet--cancel",on:{click:t.handleClose}},[t._v(t._s(t.cancelText?t.cancelText:"取消"))])])]):t._e()])},staticRenderFns:[]},B=e("VU/8")(V,z,!1,null,null,null).exports,E={render:function(){var t=this.$createElement,n=this._self._c||t;return this.$slots.default?n("div",{staticClass:"om-action-sheet--item",on:{click:this.handleClick}},[this._t("default")],2):this._e()},staticRenderFns:[]},T=e("VU/8")({name:"ActionSheetItem",methods:{handleClick:function(t){this.$emit("click",t)}}},E,!1,null,null,null).exports;B.install=function(t){t.component(B.name,B)},T.install=function(t){t.component(T.name,T)};var A={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"em-modal"},[e("div",{staticClass:"om-mask"}),t._v(" "),e("div",{staticClass:"em-modal--container"},[e("div",{staticClass:"em-modal--header"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"em-modal--body"},[t._t("default",[t.UseHTMLString?e("p",{domProps:{innerHTML:t._s(t.content)}}):e("p",[t._v(t._s(t.content))])])],2),t._v(" "),e("div",{staticClass:"em-modal--footer"},[t.showCancel?e("div",{staticClass:"em-modal--footer__btn cancel",on:{click:t.close}},[t._v("取消")]):t._e(),t._v(" "),e("div",{staticClass:"em-modal--footer__btn confirm",on:{click:t.confirm}},[t._v("确定")])])])])])},staticRenderFns:[]},F=e("VU/8")({name:"Modal",data:function(){return{visible:!0,title:"标题",content:"officemate\r\n",onCancel:null,onConfirm:null,showCancel:!0,closed:!1,UseHTMLString:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onCancel&&this.onCancel(this)},confirm:function(){this.closed=!0,"function"==typeof this.onConfirm&&this.onConfirm(this)}}},A,!1,null,null,null).exports;const M=Object.prototype.hasOwnProperty;const O=function(t){return null!==t&&"object"==typeof t&&(n=t,e="componentOptions",M.call(n,e));var n,e};let I,N=o.a.extend(F);const j=function(t){"string"==typeof(t=t||{})&&(t={content:t});let n=t.onCancel;return t.onCancel=function(){j.close(n)},I=new N({data:t}),O(I.content)&&(I.$slots.default=[I.content],I.content=null),I.visible=!0,I.$mount(),document.body.appendChild(I.$el),I};j.close=function(t){t(I)};var H=j,K={name:"Toast",data:function(){return{visible:!0,closed:!1,value:"",icon:"",duration:2e3,mask:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0},masktouch:function(t){console.log(t)}}},P={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"om-toast"},[t.mask?e("div",{staticClass:"om-toast--mask",on:{touchmove:function(n){return n.preventDefault(),t.masktouch(n)}}}):t._e(),t._v(" "),e("div",{staticClass:"om-toast--body"},[t.icon?e("div",{staticClass:"om-toast--img"},[e("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),e("p",{staticClass:"om-toast--content"},[t._v(t._s(t.value))])])])])},staticRenderFns:[]},J=e("VU/8")(K,P,!1,null,null,null).exports;let Q,Y=o.a.extend(J);const q=function(t){"string"==typeof(t=t||{})&&(t={content:t});let n=t.onCancel;return t.onCancel=function(){q.close(n)},Q=new Y({data:t}),O(Q.content)&&(Q.$slots.default=[Q.content],Q.content=null),Q.visible=!0,Q.$mount(),document.body.appendChild(Q.$el),Q};q.close=function(t){t(Q)};var D=q,W=[r,p,b,w,x,U,B,T],X=function(t){W.forEach(function(n){t.component(n.name,n)}),t.prototype.$modal=H,t.prototype.$toast=D};"undefined"!=typeof window&&window.Vue&&X(window.Vue);var G={version:"2.9.1",Icon:r,Button:p,Curtain:b,Badge:w,Loading:x,Loadmore:U,ActionSheet:B,ActionSheetItem:T,Modal:H,install:X},Z=(e("f0Iy"),e("3XdE")),tt=e("hKoQ");e.n(tt).a.polyfill(),o.a.use(Z.a);var nt=new Z.a({mode:"hash",scrollBehavior:(t,n,e)=>({x:0,y:0}),routes:[{path:"/",name:"index",component:()=>e.e(0).then(e.bind(null,"7NnY"))},{path:"/button",name:"button",component:()=>e.e(6).then(e.bind(null,"tx1y"))},{path:"/curtain",name:"curtain",component:()=>e.e(5).then(e.bind(null,"qsfE"))},{path:"/badge",name:"badge",component:()=>e.e(1).then(e.bind(null,"+CRV"))},{path:"/loadmore",name:"loadmore",component:()=>e.e(4).then(e.bind(null,"lVJQ"))},{path:"/action",name:"action",component:()=>e.e(7).then(e.bind(null,"YO7r"))},{path:"/toast",name:"toast",component:()=>e.e(2).then(e.bind(null,"yB4N"))},{path:"/modal",name:"modal",component:()=>e.e(3).then(e.bind(null,"k4CC"))}]});o.a.config.productionTip=!1,o.a.use(G),new o.a({el:"#app",router:nt,components:{App:i},template:"<App/>"})},f0Iy:function(t,n){},rKTb:function(t,n){}},["SrUm"]);
//# sourceMappingURL=app.b39b3cb9fc5735f0c1fe.js.map