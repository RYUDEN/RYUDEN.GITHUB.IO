webpackJsonp([0],{"1ulz":function(t,n){},"7NnY":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={name:"index",data:function(){return{Curtainshow:!1,LoadMoreStatus:"more",LoadMoreValues:["查看更多详情","正在加载，请稍等...","抱歉，没有找到资源"],ActionSheetStatus:!1,ActionSheetTitle:"actionsheet动作组件"}},methods:{curtainClose:function(){this.Curtainshow=!1},curtainDisplay:function(){this.Curtainshow=!0},loadMore:function(){var t=this;this.LoadMoreStatus="loading",setTimeout(function(){t.LoadMoreStatus="nomore"},1500)},ActionSheetOn:function(){this.ActionSheetStatus=!0},ActionSheetOff:function(){this.ActionSheetStatus=!1},ActionSheetClick:function(){console.log("ActionSheetClick")},Modalon:function(){this.$modal({title:"标题",content:"<h1>这里使用了HTML片段<h1><h2>这里使用了HTML片段<h2>",UseHTMLString:!0,onCancel:function(){console.log("取消了")},onConfirm:function(){console.log("确认了")}})},Toaston:function(){this.$toast({value:"toast轻提示",icon:"smile",mask:!0})}}},o={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("h1",{staticClass:"ac lg"},[t._v("om-ui")]),t._v(" "),i("div",{staticClass:"container index-container"},[i("p",{staticClass:"title"},[t._v("基础组件:")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"button"}},[t._v("按钮")])],1),t._v(" "),i("div",{staticClass:"container index-container"},[i("p",{staticClass:"title"},[t._v("视图组件:")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"badge"}},[t._v("徽标")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"loadmore"}},[t._v("加载更多")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"curtain"}},[t._v("幕帘")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"tag"}},[t._v("标签")])],1),t._v(" "),i("div",{staticClass:"container index-container"},[i("p",{staticClass:"title"},[t._v("操作反馈:")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"action"}},[t._v("动作面板")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"modal"}},[t._v("模态框")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"toast"}},[t._v("轻提示")]),t._v(" "),i("router-link",{staticClass:"link",attrs:{to:"message"}},[t._v("消息提示")])],1)])},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("1ulz")},null,null);n.default=a.exports}});
//# sourceMappingURL=0.3f130ab748ebed602032.js.map