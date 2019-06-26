webpackJsonp([19],{"1kE9":function(t,e){},SrUm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"router"})],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(t){n("1kE9")},null,null).exports,o={name:"Icon",props:{value:String}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["iconfont","icon-"+this.value]})},staticRenderFns:[]},r=n("VU/8")(o,l,!1,null,null,null).exports;r.install=function(t){t.component(r.name,r)};var c=r,u={name:"Loading",props:{size:String,dark:Boolean}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loading",t.size?"om-loading--"+t.size:""]},[n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]}),t._v(" "),n("div",{class:["om-loading__ring",t.size?"om-loading--"+t.size+"__ring":"",t.dark?"om-loading--light":"om-loading--dark"]})])},staticRenderFns:[]},h=n("VU/8")(u,d,!1,null,null,null).exports,m={name:"OMButton",props:{type:{type:String,default:"primary"},outline:Boolean,size:String,circle:Boolean,full:Boolean,loading:Boolean,disabled:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:h}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"om-button",class:[t.type?"om-button--"+t.type:"",t.size?"om-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-circle":t.circle,"is-full":t.full,outline:t.outline}],attrs:{disabled:t.disabled||t.loading},on:{click:t.handleClick}},[t.loading?n("Loading",{attrs:{size:t.size,dark:t.outline}}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()],1)},staticRenderFns:[]},v=n("VU/8")(m,p,!1,null,null,null).exports;v.install=function(t){v.component(v.name,v)};var f=v,_={name:"OMCurtain",props:{show:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.show?e("div",{staticClass:"om-curtain"},[e("div",{staticClass:"om-mask"}),this._v(" "),e("div",{staticClass:"om-curtain--container"},[e("div",{staticClass:"om-curtain--main"},[this._t("default")],2),this._v(" "),e("i",{staticClass:"iconfont icon-close-circle om-curtain--close",on:{click:this.handleClose}})])]):this._e()])},staticRenderFns:[]},C=n("VU/8")(_,g,!1,null,null,null).exports;C.install=function(t){t.component(C.name,C)};var b=C,y={name:"OMbadge",props:{value:String,max:{type:String,default:"99"},min:{type:String,default:"0"},isdot:Boolean},computed:{STR:function(){var t=parseInt(this.value),e=this.max,n=this.min;return t>e?e+"+":!(t<n)&&this.value}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.STR?n("div",{staticClass:"om-badge"},[t._t("default"),t._v(" "),t.isdot?n("span",{class:["om-badge-ico",t.isdot&&"isdot"]}):n("span",{staticClass:"om-badge-ico"},[t._v(t._s(t.STR))])],2):t._e()},staticRenderFns:[]},$=n("VU/8")(y,k,!1,null,null,null).exports;$.install=function(t){t.component($.name,$)};var x=$;h.install=function(t){t.component(h.name,h)};var w=h,S={name:"OMLoadmore",props:{value:{type:Array,default:function(){return["查看更多","加载中","没有更多"]}},status:{type:String,default:"more"}},methods:{handleClick:function(t){this.$emit("click",t)}},components:{Loading:h}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["om-loadmore",t.status?"om-loadmore-"+t.status:""],on:{click:t.handleClick}},["loading"==t.status?n("Loading",{attrs:{dark:""}}):t._e(),t._v(" "),"more"==t.status?n("span",[t._v(t._s(t.value[0]))]):t._e(),t._v(" "),"loading"==t.status?n("span",[t._v(t._s(t.value[1]))]):t._e(),t._v(" "),"nomore"==t.status?n("span",[t._v(t._s(t.value[2]))]):t._e()],1)},staticRenderFns:[]},E=n("VU/8")(S,I,!1,null,null,null).exports;E.install=function(t){t.component(E.name,E)};var T=E,M={name:"ActionSheet",props:{title:String,cancelText:String,status:Boolean},methods:{handleClose:function(t){this.$emit("close",t)}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.status?n("div",{staticClass:"om-action-sheet"},[n("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),n("div",{staticClass:"om-action-sheet--container"},[t.title?n("div",{staticClass:"om-action-sheet--title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"om-action-sheet--body"},[t._t("default")],2):t._e(),t._v(" "),n("div",{staticClass:"om-action-sheet--cancel",on:{click:t.handleClose}},[t._v(t._s(t.cancelText?t.cancelText:"取消"))])])]):t._e()])},staticRenderFns:[]},L=n("VU/8")(M,R,!1,null,null,null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return this.$slots.default?e("div",{staticClass:"om-action-sheet--item",on:{click:this.handleClick}},[this._t("default")],2):this._e()},staticRenderFns:[]},V=n("VU/8")({name:"ActionSheetItem",methods:{handleClick:function(t){this.$emit("click",t)}}},U,!1,null,null,null).exports;L.install=function(t){t.component(L.name,L)},V.install=function(t){t.component(V.name,V)};var F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"em-modal"},[n("div",{staticClass:"om-mask"}),t._v(" "),n("div",{staticClass:"em-modal--container"},[n("div",{staticClass:"em-modal--header"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"em-modal--body"},[t._t("default",[t.UseHTMLString?n("p",{domProps:{innerHTML:t._s(t.content)}}):n("p",[t._v(t._s(t.content))])])],2),t._v(" "),n("div",{staticClass:"em-modal--footer"},[t.showCancel?n("div",{staticClass:"em-modal--footer__btn cancel",on:{click:t.close}},[t._v("取消")]):t._e(),t._v(" "),n("div",{staticClass:"em-modal--footer__btn confirm",on:{click:t.confirm}},[t._v("确定")])])])])])},staticRenderFns:[]},B=n("VU/8")({name:"Modal",data:function(){return{visible:!0,title:"标题",content:"officemate\r\n",onCancel:null,onConfirm:null,showCancel:!0,closed:!1,UseHTMLString:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onCancel&&this.onCancel(this)},confirm:function(){this.closed=!0,"function"==typeof this.onConfirm&&this.onConfirm(this)}}},F,!1,null,null,null).exports;const Y=Object.prototype.hasOwnProperty;const z=function(t){return null!==t&&"object"==typeof t&&(e=t,n="componentOptions",Y.call(e,n));var e,n};let N,O=i.a.extend(B);const P=function(t){"string"==typeof(t=t||{})&&(t={content:t});let e=t.onCancel;return t.onCancel=function(){P.close(e)},N=new O({data:t}),z(N.content)&&(N.$slots.default=[N.content],N.content=null),N.visible=!0,N.$mount(),document.body.appendChild(N.$el),N};P.close=function(t){t(N)};var A=P,W={name:"Toast",data:function(){return{visible:!0,closed:!1,value:"",icon:"",duration:2e3,mask:!1}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0},masktouch:function(t){console.log(t)}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"om-toast"},[t.mask?n("div",{staticClass:"om-toast--mask",on:{touchmove:function(e){return e.preventDefault(),t.masktouch(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"om-toast--body"},[t.icon?n("div",{staticClass:"om-toast--img"},[n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),n("p",{staticClass:"om-toast--content"},[t._v(t._s(t.value))])])])])},staticRenderFns:[]},D=n("VU/8")(W,X,!1,null,null,null).exports;let q,H=i.a.extend(D);const J=function(t){"string"==typeof(t=t||{})&&(t={content:t});let e=t.onCancel;return t.onCancel=function(){J.close(e)},q=new H({data:t}),z(q.content)&&(q.$slots.default=[q.content],q.content=null),q.visible=!0,q.$mount(),document.body.appendChild(q.$el),q};J.close=function(t){t(q)};var j=J,G={name:"EmTag",props:{value:String,checked:Boolean,cycle:Boolean,primary:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}}},Q={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["em-tag",this.checked?"em-tag__checked":"",this.cycle?"em-tag__cycle":"",this.primary?"em-tag__primary":""],on:{click:this.handleClick}},[this._v(this._s(this.value))])},staticRenderFns:[]},K=n("VU/8")(G,Q,!1,null,null,null).exports;K.install=function(t){t.component(K.name,K)};var Z=K,tt={name:"Message",data:function(){return{visible:!0,closed:!1,type:"",value:"",icon:"",duration:2e3}},watch:{closed:function(t){t&&(this.visible=!1)}},mounted:function(){var t=this;setTimeout(function(){t.close()},this.duration)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"Slide-down"},on:{"after-leave":t.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],class:["om-message",t.type?"om-message__"+t.type:""]},[t.icon?n("i",{class:["iconfont",t.icon?"icon-"+t.icon:""]}):t._e(),t._v(" "),n("span",[t._v(t._s(t.value))])])])},staticRenderFns:[]},nt=n("VU/8")(tt,et,!1,null,null,null).exports;let it,st=i.a.extend(nt);const at=function(t){"string"==typeof(t=t||{})&&(t={value:t});let e=t.onCancel;return t.onCancel=function(){at.close(e)},(it=new st({data:t})).visible=!0,it.$mount(),document.body.appendChild(it.$el),it};at.close=function(t){t(it)};var ot=at,lt={name:"Swiper",data:function(){return{start:0,move:0,end:0,clientWidth:0,currentItem:0,ItemLength:0,dura:500,timer:null}},props:{dots:Boolean,autoplay:Boolean,interval:{default:5e3,type:Number},duration:{default:500,type:Number},current:{default:0,type:Number}},created:function(){this.dura=this.duration},mounted:function(){this.ItemLength=this.$children.length,this.clientWidth=this.$refs.wraper.clientWidth,this.autoplay&&this.autoplayItem()},methods:{autoplayItem:function(){var t=this;this.timer=setInterval(function(){t.currentItem+1==t.ItemLength?t.currentItem=0:t.currentItem+=1},this.interval)},onChange:function(t){this.$emit("onChange",t)},handleStart:function(t){this.autoplay&&clearInterval(this.timer),this.start=t.changedTouches[0].clientX,this.dura=0},hanldeMove:function(t){this.move=t.changedTouches[0].clientX-this.start},handleEnd:function(t){this.autoplay&&this.autoplayItem(),this.end=t.changedTouches[0].clientX,this.move=0,this.dura=this.duration,this.end-this.start>50?0==this.currentItem?this.currentItem=0:this.currentItem-=1:this.end-this.start<-50&&(this.currentItem+1==this.ItemLength?this.currentItem=this.ItemLength-1:this.currentItem+=1),this.onChange(this.currentItem)},handleDot:function(t){this.currentItem=t-1,this.onChange(this.currentItem)}},computed:{transform:function(){return"translate3d("+-(this.clientWidth*this.currentItem-this.move)+"px, 0, 0)"},transformDur:function(){return"all cubic-bezier(.36,.66,.04,1) "+this.dura+"ms"}}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-swiper"},[n("div",{ref:"wraper",staticClass:"om-swiper-wrapper",style:{transform:t.transform,transition:t.transformDur},on:{touchstart:function(e){return e.stopPropagation(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),t.hanldeMove(e)},touchend:function(e){return e.stopPropagation(),t.handleEnd(e)}}},[t._t("default")],2),t._v(" "),t.dots?n("div",{staticClass:"om-swiper-dots"},t._l(t.ItemLength,function(e){return n("div",{key:e,class:["om-swiper-dot",e===t.currentItem+1?"dot-active":""],on:{click:function(n){return t.handleDot(e)}}})}),0):t._e()])},staticRenderFns:[]},ct=n("VU/8")(lt,rt,!1,null,null,null).exports,ut={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"om-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},dt=n("VU/8")({name:"SwiperItem"},ut,!1,null,null,null).exports;ct.install=function(t){t.component(ct.name,ct)},dt.install=function(t){t.component(dt.name,dt)};var ht={name:"OMDivider",props:{content:{default:"分割线",type:String},fontColor:String,lineColor:String}},mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-divider"},[n("div",{staticClass:"om-divider__content",style:{color:t.fontColor}},[t.$slots.default?[t._t("default")]:[t._v("\n    "+t._s(t.content)+"\n    ")]],2),t._v(" "),n("div",{staticClass:"om-divider__line",style:{backgroundColor:t.lineColor}})])},staticRenderFns:[]},pt=n("VU/8")(ht,mt,!1,null,null,null).exports;pt.install=function(t){t.component(pt.name,pt)};var vt=pt,ft={name:"OMInput",data:function(){return{value:""}},props:{placeholder:String,type:{default:"text",type:String},error:{default:"",type:String},clear:Boolean,title:{default:"",type:String},max:String},methods:{handleInput:function(t){t.target.value.length>parseInt(this.max)?t.target.value=this.value:(this.value=t.target.value,this.$emit("input",t.target.value),this.$emit("require"))},clearInput:function(){this.value="",this.$emit("input","")},handleRequire:function(){this.$emit("require")}}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-input"},[t.title?n("div",{staticClass:"om-input__title",style:{color:t.error?"red":""}},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"om-input--main"},[n("div",{staticClass:"om-input--main__error"},[t._v(t._s(t.error))]),t._v(" "),n("input",{staticClass:"om-input--main__main",attrs:{type:t.type,placeholder:t.error?"":t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,blur:t.handleRequire}}),t._v(" "),t.clear?n("div",{staticClass:"om-input--main__clear",on:{click:t.clearInput}},[n("i",{staticClass:"iconfont icon-close-circle"})]):t._e()]),t._v(" "),t.$slots.default?n("div",{staticClass:"om-input__child"},[t._t("default")],2):t._e()])},staticRenderFns:[]},gt=n("VU/8")(ft,_t,!1,null,null,null).exports;gt.install=function(t){t.component(gt.name,gt)};var Ct=gt,bt={name:"OMSlider",props:{max:{default:100,type:Number},min:{default:0,type:Number},step:{default:1,type:Number},content:{default:0,type:Number}},data:function(){return{value:0,start:0,move:0,end:0,clientWidth:0}},created:function(){this.value=this.content},computed:{track:function(){var t=this.step,e=this.value,n=this.max,i=this.min,s=this.clientWidth,a=this.move,o=s/((n-i)/t),l=e-i;return l/t*o+a<=0?"0px":l/t*o+a>=s?s+"px":l/t*o+a+"px"}},methods:{handleStart:function(t){this.start=t.changedTouches[0].clientX},handleMove:function(t){var e=this.step,n=this.value,i=this.max,s=this.min,a=this.clientWidth,o=(this.start,a/(i-s)*e),l=t.changedTouches[0].clientX-this.start,r=n-s;r/e*o+l>=a&&l-this.move>0||r/e*o+l<=0&&l-this.move<0||(this.move=l)},handleEnd:function(t){var e=this.step,n=this.value,i=this.max,s=this.min,a=this.clientWidth,o=this.start,l=a/(i-s)*e,r=t.changedTouches[0].clientX-o,c=n-s;c/e*l+r>=a?this.value=i:c/e*l+r<=0?this.value=s:this.value+=Math.round(r/l)*e,this.$emit("input",this.value),this.start=0,this.move=0}},mounted:function(){this.clientWidth=this.$refs.full.clientWidth,console.log(this.track)}},yt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-slider"},[n("div",{staticClass:"om-slider__inner"},[n("div",{staticClass:"om-slider__inner--box"},[n("div",{ref:"full",staticClass:"om-slider__full"},[n("div",{ref:"track",staticClass:"om-slider__track",style:{width:t.track}}),t._v(" "),n("div",{staticClass:"om-slider__handler",style:{left:t.track},on:{touchstart:t.handleStart,touchmove:t.handleMove,touchend:t.handleEnd}})])])]),t._v(" "),n("div",{staticClass:"om-slider__text"},[t._v(t._s(t.value))])])},staticRenderFns:[]},kt=n("VU/8")(bt,yt,!1,null,null,null).exports;kt.install=function(t){t.component(kt.name,kt)};var $t=kt,xt={name:"OMSwitch",props:{checked:Boolean},methods:{handleInput:function(t){this.$emit("input",t.target.checked)}}},wt={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"om-switch",attrs:{type:"checkbox"},domProps:{checked:this.checked},on:{change:this.handleInput}})},staticRenderFns:[]},St=n("VU/8")(xt,wt,!1,null,null,null).exports;St.install=function(t){t.component(St.name,St)};var It=St,Et={name:"Rate",props:{value:Number,max:Number,size:String,margin:String,read:Boolean},methods:{handleClick:function(t){this.read||this.$emit("input",t)}}},Tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-rate"},t._l(t.max,function(e,i){return n("i",{key:i,class:["iconfont","icon-star-fill",t.size,e<=t.value&&"active"],style:{"margin-right":t.margin+"px"},on:{click:function(n){return t.handleClick(e)}}})}),0)},staticRenderFns:[]},Mt=n("VU/8")(Et,Tt,!1,null,null,null).exports;Mt.install=function(t){t.component(Mt.name,Mt)};var Rt=Mt,Lt={name:"Picker",data:function(){return{status:!1,index:0,dura:300,start:0,end:0,move:0}},props:{placeholder:{default:"请选择",type:String},list:{default:function(){return[]},type:Array},label:{type:String,default:"label"},value:{type:String,default:"value"}},methods:{handleClose:function(t){this.status=!1},handleOpen:function(){this.status=!0},handleChange:function(){this.$emit("input",this.selected)},handleStart:function(t){this.start=t.changedTouches[0].clientY,this.dura=0},handleMove:function(t){this.move=t.changedTouches[0].clientY-this.start},handleEnd:function(t){var e=30*this.index-this.move;this.end=t.changedTouches[0].clientY,this.move=0,this.dura=300,e>0?(Math.round(e/30)>this.list.length-1?this.index=this.list.length-1:this.index=Math.round(e/30),this.dura=300):(this.dura=300,this.index=0),this.handleChange()}},computed:{transformY:function(){return"translate3d(0,"+-(30*this.index-this.move)+"px,0)"},duration:function(){return this.dura+"ms"},selected:function(){return this.list[this.index]}}},Ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-picker"},[n("div",{staticClass:"om-picker-label",on:{click:t.handleOpen}},[t._v("\n    "+t._s(t.placeholder)+"\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.status?n("div",{staticClass:"om-picker-sheet"},[n("div",{staticClass:"om-mask",on:{click:t.handleClose}}),t._v(" "),n("div",{staticClass:"om-picker-sheet--container"},[n("div",{staticClass:"om-picker-sheet--title"},[n("span",[t._v("取消")]),t._v(" "),n("span",[t._v("确认")])]),t._v(" "),n("div",{staticClass:"om-picker-sheet--body"},[n("div",{staticClass:"om-picker-sheet--preview"},[n("div",{staticClass:"om-picker-sheet--list",style:{transform:t.transformY,transition:t.duration},on:{touchstart:function(e){return e.stopPropagation(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),t.handleMove(e)},touchend:function(e){return e.stopPropagation(),t.handleEnd(e)}}},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"om-picker-sheet--list__item"},[t._v("\n                                "+t._s(t.label?e[t.label]:e)+"\n                            ")])}),0)])])])]):t._e()])],1)},staticRenderFns:[]},Vt=n("VU/8")(Lt,Ut,!1,null,null,null).exports;Vt.install=function(t){t.component(Vt.name,Vt)};var Ft=Vt,Bt={name:"OMTabs",props:{value:String},data:function(){return{start:0,startY:0,move:0,moveY:0,end:0,clientWidth:0,current:0,tabs:[],ItemLength:0,dura:500,vertical:!1}},methods:{changeTab:function(t){this.current=t},handleStart:function(t){this.start=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY,this.dura=0},handleEnd:function(t){this.end=t.changedTouches[0].clientX,this.move=0,this.moveY=0,this.dura=500,this.end-this.start>100&&this.moveY<50?0==this.current?this.current=0:this.current-=1:this.end-this.start<-100&&this.moveY<50&&(this.current+1==this.ItemLength?this.current=this.ItemLength-1:this.current+=1),this.vertical=""},hanldeMove:function(t){this.moveY=t.changedTouches[0].clientY-this.startY,this.move=t.changedTouches[0].clientX-this.start,"vertical"===this.vertical?(this.move=0,this.end=this.start):"standard"===this.vertical?this.move=t.changedTouches[0].clientX-this.start:(Math.abs(this.move)>30||Math.abs(this.moveY)>30)&&(Math.abs(this.moveY/this.move)>1.25?this.vertical="vertical":this.vertical="standard")}},mounted:function(){this.tabs=this.$children.map(function(t,e){return t.$attrs.name}),this.ItemLength=this.tabs.length,this.clientWidth=this.$refs.paneGroup.clientWidth},computed:{transform:function(){return Math.abs(this.move)>30&&this.moveY<50?"translate3d("+-(this.clientWidth*this.current-this.move)+"px, 0, 0)":"translate3d("+-this.clientWidth*this.current+"px, 0, 0)"},transformDur:function(){return"all cubic-bezier(.36,.66,.04,1) "+this.dura+"ms"}}},Yt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"om-tabs"},[n("div",{staticClass:"om-tabs-switch"},[n("div",{staticClass:"om-tabs-switch-container"},t._l(t.tabs,function(e,i){return n("div",{key:i,class:["om-tabs-switch-item",i===t.current?"om-tabs-switch-item__active":""],on:{click:function(e){return t.changeTab(i)}}},[t._v(t._s(e))])}),0)]),t._v(" "),n("div",{staticClass:"om-pane-view"},[n("div",{ref:"paneGroup",staticClass:"om-pane-group",style:{transform:t.transform,transition:t.transformDur},on:{touchstart:function(e){return e.stopPropagation(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),t.hanldeMove(e)},touchend:function(e){return e.stopPropagation(),t.handleEnd(e)}}},[t._t("default")],2)])])},staticRenderFns:[]},zt=n("VU/8")(Bt,Yt,!1,null,null,null).exports,Nt={name:"OMTabpane",props:{value:String}},Ot={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"om-tab-pane"},[this._t("default")],2)},staticRenderFns:[]},Pt=n("VU/8")(Nt,Ot,!1,null,null,null).exports;zt.install=function(t){t.component(zt.name,zt)},Pt.install=function(t){t.component(Pt.name,Pt)};var At=[c,f,b,x,w,T,L,V,Z,ct,dt,vt,Ct,$t,zt,Pt,Rt,Ft,It],Wt=function(t){At.forEach(function(e){t.component(e.name,e)}),t.prototype.$modal=A,t.prototype.$toast=j,t.prototype.$message=ot};"undefined"!=typeof window&&window.Vue&&Wt(window.Vue);var Xt={version:"2.9.1",Icon:c,Button:f,Curtain:b,Badge:x,Loading:w,Loadmore:T,ActionSheet:L,ActionSheetItem:V,Modal:A,Tag:Z,Message:ot,Swiper:ct,SwiperItem:dt,Divider:vt,Input:Ct,Slider:$t,Tabs:zt,Tabpane:Pt,OMSwitch:It,Rate:Rt,Picker:Ft,install:Wt},Dt=(n("f0Iy"),n("3XdE")),qt=n("hKoQ");n.n(qt).a.polyfill(),i.a.use(Dt.a);var Ht=new Dt.a({mode:"hash",scrollBehavior:(t,e,n)=>({x:0,y:0}),routes:[{path:"/",name:"index",component:()=>n.e(0).then(n.bind(null,"7NnY"))},{path:"/button",name:"button",component:()=>n.e(16).then(n.bind(null,"tx1y"))},{path:"/curtain",name:"curtain",component:()=>n.e(15).then(n.bind(null,"qsfE"))},{path:"/badge",name:"badge",component:()=>n.e(2).then(n.bind(null,"+CRV"))},{path:"/loadmore",name:"loadmore",component:()=>n.e(13).then(n.bind(null,"lVJQ"))},{path:"/action",name:"action",component:()=>n.e(17).then(n.bind(null,"YO7r"))},{path:"/toast",name:"toast",component:()=>n.e(7).then(n.bind(null,"yB4N"))},{path:"/modal",name:"modal",component:()=>n.e(12).then(n.bind(null,"k4CC"))},{path:"/tag",name:"tag",component:()=>n.e(4).then(n.bind(null,"INmq"))},{path:"/message",name:"message",component:()=>n.e(1).then(n.bind(null,"X6al"))},{path:"/swiper",name:"swiper",component:()=>n.e(3).then(n.bind(null,"sbgJ"))},{path:"/divider",name:"divider",component:()=>n.e(14).then(n.bind(null,"41P9"))},{path:"/omInput",name:"omInput",component:()=>n.e(11).then(n.bind(null,"HkyE"))},{path:"/slider",name:"slider",component:()=>n.e(8).then(n.bind(null,"3Um8"))},{path:"/tabs",name:"tabs",component:()=>n.e(5).then(n.bind(null,"PwLJ"))},{path:"/rate",name:"rate",component:()=>n.e(9).then(n.bind(null,"m/LA"))},{path:"/picker",name:"picker",component:()=>n.e(10).then(n.bind(null,"p9oh"))},{path:"/Switch",name:"pageSwitch",component:()=>n.e(6).then(n.bind(null,"TMiY"))}]});i.a.config.productionTip=!1,i.a.use(Xt),new i.a({el:"#app",router:Ht,components:{App:a},template:"<App/>"})},f0Iy:function(t,e){}},["SrUm"]);
//# sourceMappingURL=app.142afef191f9dee49d0b.js.map