webpackJsonp([5],{k4CC:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i={name:"modal",data:function(){return{Curtainshow:!1,LoadMoreStatus:"more",LoadMoreValues:["查看更多详情","正在加载，请稍等...","抱歉，没有找到资源"],ActionSheetStatus:!1,ActionSheetTitle:"actionsheet动作组件"}},methods:{curtainClose:function(){this.Curtainshow=!1},curtainDisplay:function(){this.Curtainshow=!0},loadMore:function(){var t=this;this.LoadMoreStatus="loading",setTimeout(function(){t.LoadMoreStatus="nomore"},1500)},ActionSheetOn:function(){this.ActionSheetStatus=!0},ActionSheetOff:function(){this.ActionSheetStatus=!1},ActionSheetClick:function(){console.log("ActionSheetClick")},Modalon:function(){this.$modal({title:"标题",content:"<h1>这里使用了HTML片段<h1><h2>这里使用了HTML片段<h2>",UseHTMLString:!0,onCancel:function(){console.log("取消了")},onConfirm:function(){console.log("确认了")}})},Toaston:function(){this.$toast({value:"toast轻提示",icon:"smile",mask:!0})}}},e={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("h1",{staticClass:"ac lg"},[this._v("om-ui")]),this._v(" "),o("div",{staticClass:"container"},[o("p",[this._v("modal模态框")]),this._v(" "),o("OMButton",{on:{click:this.Modalon}},[this._v("打开模态框吧")])],1)])},staticRenderFns:[]},s=n("VU/8")(i,e,!1,null,null,null);o.default=s.exports}});
//# sourceMappingURL=5.4351252f8f18851cfc26.js.map