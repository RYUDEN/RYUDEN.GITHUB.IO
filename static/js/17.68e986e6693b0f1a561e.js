webpackJsonp([17],{YO7r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"action",data:function(){return{Curtainshow:!1,LoadMoreStatus:"more",LoadMoreValues:["查看更多详情","正在加载，请稍等...","抱歉，没有找到资源"],ActionSheetStatus:!1,ActionSheetTitle:"actionsheet动作组件"}},methods:{curtainClose:function(){this.Curtainshow=!1},curtainDisplay:function(){this.Curtainshow=!0},loadMore:function(){var t=this;this.LoadMoreStatus="loading",setTimeout(function(){t.LoadMoreStatus="nomore"},1500)},ActionSheetOn:function(){this.ActionSheetStatus=!0},ActionSheetOff:function(){this.ActionSheetStatus=!1},ActionSheetClick:function(){console.log("ActionSheetClick")},Modalon:function(){this.$modal({title:"标题",content:"<h1>这里使用了HTML片段<h1><h2>这里使用了HTML片段<h2>",UseHTMLString:!0,onCancel:function(){console.log("取消了")},onConfirm:function(){console.log("确认了")}})},Toaston:function(){this.$toast({value:"toast轻提示",icon:"smile",mask:!0})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"ac lg"},[t._v("om-ui")]),t._v(" "),n("div",{staticClass:"container"},[n("p",[t._v("actionsheet动作面板")]),t._v(" "),n("OMButton",{on:{click:t.ActionSheetOn}},[t._v("打开动作面吧")]),t._v(" "),n("ActionSheet",{attrs:{status:t.ActionSheetStatus,title:t.ActionSheetTitle},on:{close:t.ActionSheetOff}},[n("ActionSheetItem",{on:{click:t.ActionSheetClick}},[t._v("选项一")]),t._v(" "),n("ActionSheetItem",{on:{click:t.ActionSheetClick}},[t._v("选项二")]),t._v(" "),n("ActionSheetItem",{on:{click:t.ActionSheetClick}},[t._v("选项三")])],1)],1)])},staticRenderFns:[]},c=n("VU/8")(o,i,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=17.68e986e6693b0f1a561e.js.map