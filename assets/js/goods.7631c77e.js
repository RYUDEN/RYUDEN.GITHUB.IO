(function(t){function i(i){for(var a,n,r=i[0],l=i[1],c=i[2],u=0,m=[];u<r.length;u++)n=r[u],s[n]&&m.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(i);while(m.length)m.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==s[l]&&(a=!1)}a&&(o.splice(i--,1),t=n(n.s=e[0]))}return t}var a={},s={5:0},o=[];function n(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)n.d(e,a,function(i){return t[i]}.bind(null,a));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push([2,1,0]),e()})({"08c0":function(t,i,e){},"0960":function(t,i,e){"use strict";var a=e("5f0a"),s=e.n(a);s.a},2:function(t,i,e){t.exports=e("f841")},"20bf":function(t,i,e){"use strict";var a=e("56cf"),s=e.n(a);s.a},"3f7d":function(t,i,e){"use strict";var a=e("08c0"),s=e.n(a);s.a},"56cf":function(t,i,e){},"5f0a":function(t,i,e){},"7d52":function(t,i){function e(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="7d52"},"955c":function(t,i,e){},b99a:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQUZGNzAxQjRFOTExRTg5NkU0OTk3MTZEQkVBMDgzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQUZGNzAyQjRFOTExRTg5NkU0OTk3MTZEQkVBMDgzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTFBRkY2RkZCNEU5MTFFODk2RTQ5OTcxNkRCRUEwODMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTFBRkY3MDBCNEU5MTFFODk2RTQ5OTcxNkRCRUEwODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+XEGwAAABoElEQVR42oyUvUsDQRDFd+NhZyB/QFS0uUoEewUT0SqVOcHOxliks7BVKwUh4AdqEOwUEu2DSRS/Giu7xEILFdsDsVEI5xt5J8txdzrw4+5md97Ozs6e9tSSCrFxMMNnL33P4BxUQDMYkAh82+ACbIE2yIEkydG3yTl2lNAYuOSKQ6AEWuCTtOiTsVNww5gfs4xMqmAWNFS8dcA2eGDMqGQqGWlwCFYjRAYiBOtghbFahDKgB+yGTJ4HjzFie4zNiJADDpjyX5YKiHYY61g84lJIJhKUNbbhCwkFUKavBooilAZPgVXXgGv4GpzjkqoxJv60xaP1jAGZOMinZLYP1o3FUoHsu/0+egspphtRozyLnzV8feBVMroDU+xaFSGY5/sIMzJLIaK3GndtEi8bYDji5CoU8K3MrYp1gXuwKBmdgQ+wAHZChJyYdigwtm6x0HPgittrqv/ZBFjmffP8S9tmHY6YWSJGQMaK4JgxcpmVDvyPbN6dJGtRY2HliPtZWGmJd+7i94B0yI9NM+1p3kNp2C/wAq7BCTvd7D31LcAAZ6tm/Y5jUkkAAAAASUVORK5CYII="},bf24:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExNjgyM0Q4QjRFOTExRTg5NERFRjEzNUEyRTRBMDdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExNjgyM0Q5QjRFOTExRTg5NERFRjEzNUEyRTRBMDdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTE2ODIzRDZCNEU5MTFFODk0REVGMTM1QTJFNEEwN0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTE2ODIzRDdCNEU5MTFFODk0REVGMTM1QTJFNEEwN0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DoEGZAAABoUlEQVR42pSUu0sDQRDG985gZyB/QFRSpRIh1go+0CqViWBnExXsLGzVThAEHygi2Cn46KO5KL4aIWCXWJhCxTYgNgoSv5HvZFg2UQd+5G5nZ/LtzM55dTNnHNYPxvjbzrVHcAYOQNEO8K33JDgHa6AC0iBK0lxb5Z5ko0R94IL/2AVWQBm8kzLXxHcMrhnzbRGl5BCMg8A0t0+wDu4Z0ytKRZEHdsGiSpIAgyo45khYAAuM9UTRAGgDm2pTBuRUYnkvgSpZ4voWmJYckigLdihZJwqoJKZUidKadUyJzfps8YlyypFSVJBSwTG+V60j5iWHJIpbzoz5n0ls3Gdr68pRshLXVG1c1hreoxfKD23b2hjWJtEgUQd4lmLfghHeWuNoeaDU5BxXQWp642HWhvGwDLpV5x5UgV3WQ38LuAOzougUvIEpsGFt/M0mGVuIsNAT4JLHK/4xyRCY57zVw6GtsO17VOY3SSC+GbDPGBlm41nfoyRnJ8ru5VloaXEnCysFf+UpfhrkOT5sHmWPcg7lwn6AJ3AFjjiw+u6ZLwEGAERsaPMoYh+EAAAAAElFTkSuQmCC"},c7f6:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVQ4jZ3Svy5EURAG8N9d/4JOIiIqDSIaOm/gDRQeYKmU1wtscTsK4RW8ghfQEY2IRqmQKNd/V4azcnezl41JJjkz55vvfDNzMjVWyidwlW6XM0W7H7JRR4AmZpI360B9FZTyUdxhKqUeMJspXgZVsIXxSjyecvUKSvkI5rGE43ixBxuKtnGN20zx+kVQyvexiWk84wMTfdRFvp3yY7jHSRC8Yaimlb/sPdh28fSP4qjZbWSKQ+wl+YNaYPeitvE9yeIArQFJAtNKNd3/oJSfY/UPgotMsdYJeic9N4CCLkz1H8RqOmv6zWKdk5nia/BV8CIeuzr67jc8zh0LzEK/FuIHdizYT7GSPM7VVf9ghyvJmxRfYidTnFXuNkr5Oo5ScWDBJy1BRN7gkRs8AAAAAElFTkSuQmCC"},d949:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1NjczRDE4REJFRDExRThCQUI4RDQ4OEZFMTQ1OTA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1NjczRDE5REJFRDExRThCQUI4RDQ4OEZFMTQ1OTA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzU2NzNEMTZEQkVEMTFFOEJBQjhENDg4RkUxNDU5MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzU2NzNEMTdEQkVEMTFFOEJBQjhENDg4RkUxNDU5MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7wnIjcAAABQUlEQVR42ozTrUtDURjH8TvxZchkxSIMdCAqmPSiIAzBahSDmAcGWRGLmAzqLIJB1GAVg1WjFsHgPzA33eaKRYwiWvw+8Dtw1XvmPfCBsz0vu/ecZ6kwDAPP6sW99lN4j0vqCPyriKYUfUmdnu+7sY5lfT7DMT6TPoEVtnArrUgz7xN0IY8xbGAtEtvFPt5QQQNfrsE2FjGEFzzgFJeRBrYfxypGMaCzuUhxC/ZeS7jCR5BspTGPczuDEg6QC5KvnGpK9gonOswbzOHxn+Jh5e5YrTvEI2RxjUm8eor7lXOomh/XWMYTCm1+vaCcsm8O7N3qbRrUf59VtEEPBnXPbmXFrYpy0nEN7H6fNa4ZbOmuG9pnFLOckbgGNoFVrKCmwbF/4bT2NcWqyv0zyhaYRR8WcBeJ2aTOYA8T2HSBbwEGAEToQJ4S5vftAAAAAElFTkSuQmCC"},f841:function(t,i,e){"use strict";e.r(i);e("a481"),e("cadf"),e("551c"),e("097d");var a=e("2b0e"),s=e("8c4f"),o=e("1368"),n=e.n(o),r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"detail "},[a("div",{staticClass:"routes full-width"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"path"},[t._m(0),t._l(t.GoodsCat,function(i,e){return a("li",[a("a",{attrs:{href:"/grade.html?limit=20&order=asc&type=3&page=1&token&cid="+e}},[t._v(t._s(i))])])})],2)])]),a("div",{staticClass:"good-info full-width"},[a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"good-default-imgs fl"},[a("div",{staticClass:"big-img"},[a("zoom",{attrs:{previewImg:t._f("img")(t.preview),zoomImg:t._f("img")(t.preview)}})],1),a("ul",{staticClass:"img-list"},t._l(t.details.product_images,function(i,e){return a("li",{class:{marginNo:(e+1)%5===0,active:t.preview===i},on:{click:function(e){t.changePreview(i)}}},[a("img",{attrs:{src:t._f("img")(i),alt:""}})])}))]),a("div",{staticClass:"good-default-info fl"},[a("p",{staticClass:"info-tile"},[t._v(t._s(t.details.product_name))]),a("div",{staticClass:"price-code"},[a("p",[a("span",{staticClass:"tile al"},[t._v(" 专 享 价  ： ")]),a("span",{staticClass:"price"},[t._v(t._s(t._f("exch")(t.details,t.ex)))]),t._v("  "+t._s(t.ex.unit))]),a("p",[a("span",{staticClass:"tile al"},[t._v("品牌名称：")]),t._v(t._s(t.details.brand_name))]),a("p",[a("span",{staticClass:"tile al"},[t._v("产品编号：")]),t._v(t._s(t.details.product_code))])]),a("div",{staticClass:"spec"},[a("div",{staticClass:"p clearfix"},[a("span",{staticClass:"tile ar fl"},[t._v("选择规格：")]),a("ul",{staticClass:"fl clearfix"},t._l(t.details.goodsSpec,function(i,e){return a("li",{staticClass:"fl cursor",class:{erabe:i.product_id===t.details.product_id},on:{click:function(e){t.returnTO(i.product_id)}}},[a("div",{staticClass:"a",attrs:{alt:i.colorname}},[a("img",{staticStyle:{"z-index":"-1"},attrs:{width:"50",height:"50",src:t._f("img")(i.default_img),alt:""}}),a("a",[t._v(t._s(i.colorname?i.colorname:"默认"))])])])}))])]),a("div",{staticClass:"number"},[a("div",{staticClass:"num p clearfix"},[a("span",{staticClass:"tile ar fl"},[t._v("选择数量：")]),a("input",{attrs:{type:"button",value:"-",disabled:t.num<2},on:{click:function(i){t.setNum(-1)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{type:"text"},domProps:{value:t.num},on:{input:function(i){i.target.composing||(t.num=i.target.value)}}}),a("input",{attrs:{type:"button",value:"+"},on:{click:function(i){t.setNum(1)}}})])]),a("div",{staticClass:"create-order"},[a("div",{staticClass:"order p"},[a("span",{staticClass:"tile ar fl"},[t._v("\n                                 \n                        ")]),a("a",{staticClass:"btn buy",attrs:{href:"usercenter.html#/order/Settlement?goods="+t.$route.params.id}},[t._v("立即购买")]),a("a",{staticClass:"btn cart",on:{click:t.addCart}},[t._v("加入购物车")]),a("a",{staticClass:"btn collect ac",on:{click:t.addCollect}},[1===t.details.isCollect?a("img",{attrs:{src:e("c7f6"),alt:""}}):a("img",{attrs:{src:e("d949"),alt:""}}),a("span",[t._v("收藏")])])])]),t._m(1)])])]),a("detail",{attrs:{detail:t.details.product_info}})],1)},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",[e("a",{attrs:{href:"/grade.html"}},[t._v("商品中心")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"promise"},[a("div",{staticClass:"goods-promise p"},[a("span",{staticClass:"tile ar fl"},[t._v("\n                                服务承诺：\n                        ")]),a("img",{attrs:{src:e("fe29"),alt:""}}),a("a",{staticClass:"promise-item"},[t._v("正品保障")]),a("img",{attrs:{src:e("b99a"),alt:""}}),a("a",{staticClass:"promise-item"},[t._v("7天无理由退换货")]),a("img",{attrs:{src:e("bf24"),alt:""}}),a("a",{staticClass:"promise-item"},[t._v("企业专享")])])])}],c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"magnify"},[e("div",{ref:"previewBox",staticClass:"preview-box",on:{mousemove:function(i){t.move(i)},mouseout:t.out}},[e("img",{attrs:{width:"100%",height:"100%",src:t.previewImg}}),e("div",{ref:"hoverBox",staticClass:"hover-box"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.zoomVisiable,expression:"zoomVisiable"}],ref:"zoomBox",staticClass:"zoom-box"},[e("img",{ref:"bigImg",attrs:{src:t.zoomImg}})])])},d=[];function u(t){var i=t.offsetTop,e=t.offsetLeft;while(t.offsetParent)t=t.offsetParent,i+=t.offsetTop,e+=t.offsetLeft;return{left:e,top:i}}var m={name:"magnify",props:{previewImg:{type:String,default:""},zoomImg:{type:String,default:""}},data:function(){return{zoomVisiable:!1,hoverVisiable:!1}},methods:{out:function(){this.zoomVisiable=!1},move:function(t){this.init();var i,e=t.clientX,a=t.clientY,s=u(this.oPreviewBox).left,o=u(this.oPreviewBox).top,n=e-s-this.houverWidth/2;i=this.scroll>0?a-o+this.scroll-this.houverHeight/2:a-o-this.houverHeight/2;var r=this.pWidth-this.houverWidth,l=this.pWidth-this.houverHeight;n=n<0?0:n>r?r:n,i=i<0?0:i>l?l:i;var c=n/r,d=i/l;this.oHoverBox.style.left=n+"px",this.oHoverBox.style.top=i+"px",this.oBigImg.style.left=c*(this.bWidth-this.imgWidth)+"px",this.oBigImg.style.top=d*(this.bHeight-this.imgHeight)+"px",this.$emit("move",t),this.zoomVisiable=!0},init:function(){this.oHoverBox=this.$refs.hoverBox,this.oPreviewBox=this.$refs.previewBox,this.oBigImg=this.$refs.bigImg,this.imgBox=this.$refs.zoomBox,this.houverWidth=this.oHoverBox.offsetWidth,this.houverHeight=this.oHoverBox.offsetHeight,this.pWidth=this.oPreviewBox.offsetWidth,this.pHeight=this.oPreviewBox.offsetHeight,this.imgWidth=this.oBigImg.offsetWidth,this.imgHeight=this.oBigImg.offsetHeight,this.bWidth=this.imgBox.offsetWidth,this.bHeight=this.imgBox.offsetHeight,this.scroll=document.documentElement.scrollTop||document.body.scrollTop}}},h=m,v=(e("3f7d"),e("2877")),p=Object(v["a"])(h,c,d,!1,null,"779d397e",null);p.options.__file="zoom.vue";var f=p.exports,g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail-main full-width"},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"le-detail fl"},[e("div",{staticClass:"le-tab-detail"},[e("ul",[e("li",{class:{active:0===t.active_tab},on:{click:function(i){t.active_tab=0}}},[t._v("商品详情")]),e("li",{class:{active:1===t.active_tab},on:{click:function(i){t.active_tab=1}}},[t._v("配送时间")]),e("li",{class:{active:2===t.active_tab},on:{click:function(i){t.active_tab=2}}},[t._v("退换货政策")])])]),0===t.active_tab?e("div",{staticClass:"le-box-detail",attrs:{id:"detail"},domProps:{innerHTML:t._s(t.details)}}):t._e(),1===t.active_tab?e("div",{staticClass:"le-box-detail",domProps:{innerHTML:t._s(t.ShipTime)}}):t._e(),2===t.active_tab?e("div",{staticClass:"le-box-detail",domProps:{innerHTML:t._s(t.returnGood)}}):t._e()]),t.SimilarGoods.length>1?e("div",{staticClass:"ri-recommend fl"},[e("p",{staticClass:"top-tile"},[t._v("猜你喜欢")]),t._l(t.SimilarGoods,function(i,a){return e("div",{key:a,staticClass:"cursor ri-recommend-item"},[e("a",{attrs:{target:"_blank",href:"goods.html#/"+i.product_id}},[e("img",{attrs:{src:t._f("img")(i.default_img),alt:""}})]),e("p",{staticClass:"tile"},[e("a",{attrs:{target:"_blank",href:"goods.html#/"+i.product_id}},[t._v(t._s(i.product_name))])]),e("p",{staticClass:"price bold"},[t._v(t._s(t._f("exch")(i,t.ex))+"  "),e("span",{staticStyle:{"font-size":"14px",color:"black"}},[t._v(t._s(t.ex.unit))])])])})],2):t._e()])])},A=[],b={name:"detail",props:{detail:String},data:function(){return{active_tab:0,SimilarGoods:[],ex:Object,ShipTime:"",returnGood:""}},mounted:function(){var t=this;this.getSimilarGoods(),this.getShipTime(),this.returnGoods(),setTimeout(function(){t.fixedDetailImg()},100)},computed:{details:function(){return this.detail.replace(/\/ueditor1_4_3\/upload\/images\//g,"http://mapi.fufentong.com/ueditor1_4_3/upload/images/")}},methods:{fixedDetailImg:function(){for(var t=document.getElementById("detail"),i=t.getElementsByTagName("img"),e=0;e<i.length;e++)i[e].style.width="100%"},getSimilarGoods:function(){var t=this,i=this.$route.params.id;this.yum("api/Product/getSimilarGoods",{product_id:i}).then(function(i){200===i.data.status&&(t.ex={exchange:i.data.exchange,has_custom_price:i.data.has_custom_price,unit:i.data.unit},t.SimilarGoods=i.data.data)})},getShipTime:function(){var t=this;this.yum("/api/article/getArticle",{articleId:14}).then(function(i){200===i.data.status&&(t.ShipTime=i.data.data[0].content)})},returnGoods:function(){var t=this;this.yum("/api/article/getArticle",{articleId:18}).then(function(i){200===i.data.status&&(t.returnGood=i.data.data[0].content)})}}},I=b,C=(e("20bf"),Object(v["a"])(I,g,A,!1,null,"50c7ea4c",null));C.options.__file="detail.vue";var E=C.exports,G={name:"index",components:{zoom:f,detail:E},data:function(){return{testUrl:/http:\/\//i,details:{product_info:""},ex:Object,num:1,GoodsCat:Object,preview:""}},created:function(){var t=this.$route.params.id;this.getGoodsInfo(t),this.getGoodsCat(t)},watch:{GoodsId:function(t,i){this.getGoodsInfo(t)}},computed:{GoodsId:{get:function(){return this.$route.params.id}}},methods:{getGoodsCat:function(t){var i=this;this.yum("api/Product/getGoodsCat",{product_id:t}).then(function(t){200===t.data.status&&(i.GoodsCat=t.data.data)})},setNum:function(t){this.num+=t},returnTO:function(t){this.$router.push("/".concat(t)),this.$router.go(0)},getGoodsInfo:function(t){var i=this;this.yum("api/Product/getGoodsInfo",{product_id:t}).then(function(t){200===t.data.status?(i.details=t.data.data[0],i.preview=t.data.data[0].default_img,i.ex={exchange:t.data.exchange,has_custom_price:t.data.has_custom_price,unit:t.data.unit}):alert("商品不存在")})},changePreview:function(t){this.preview=t},addCart:function(){var t=this,i={product_id:this.$route.params.id,status:1,nums:1};this.yum("api/member/addCart",i).then(function(i){200===i.data.status&&t.bus.$emit("cart_notice")})},addCollect:function(){var t=this;0===this.details.isCollect?this.yum("api/member/collect",{product_id:this.$route.params.id}).then(function(i){t.bus.$emit("collect_notice"),t.details.isCollect=1}):this.yum("api/member/delCollect",{product_id:this.$route.params.id}).then(function(i){t.details.isCollect=0})}}},R=G,N=(e("fc6d"),Object(v["a"])(R,r,l,!1,null,"070acfd2",null));N.options.__file="index.vue";var w=N.exports;n.a.polyfill(),a["default"].use(s["a"]);var x=new s["a"]({mode:"hash",scrollBehavior:function(t,i,e){return{x:0,y:0}},routes:[{path:"/:id",name:"details",component:w}]}),M=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods"},[e("FAlert"),e("FConfirm"),e("top"),e("sidebar"),e("navgator",{attrs:{active:"grade"}}),e("router-view"),e("footbar")],1)},T=[],y=e("1451"),B=e("3d01"),S=e("684d"),Z=e("77b9"),Y=e("6255"),O=e("b131"),U={data:function(){return{}},components:{top:y["a"],navgator:B["a"],sidebar:S["a"],footbar:Z["a"],FAlert:Y["a"],FConfirm:O["a"]},methods:{}},j=U,D=(e("0960"),Object(v["a"])(j,M,T,!1,null,null,null));D.options.__file="app.vue";var z=D.exports,k=e("2570"),W=e.n(k),_=(e("5143"),e("f751"),e("7f7f"),e("28a5"),e("ac4d"),e("8a81"),e("ac6a"),e("2f62"));a["default"].use(_["a"]);var F=e("7d52"),V=F.keys(),J={},H=!0,Q=!1,L=void 0;try{for(var P,X=V[Symbol.iterator]();!(H=(P=X.next()).done);H=!0){var K=P.value;if("./index.js"===K){J=lt(K);break}}}catch(vt){Q=!0,L=vt}finally{try{H||null==X.return||X.return()}finally{if(Q)throw L}}if("function"!==typeof J){J.modules=J.modules||{};var q=!0,$=!1,tt=void 0;try{for(var it,et=V[Symbol.iterator]();!(q=(it=et.next()).done);q=!0){var at=it.value;if("./index.js"!==at){var st=at.replace(/^\.\//,"").replace(/\.js$/,""),ot=st.split("/"),nt=ct(J,ot);st=ot.pop(),nt[st]=lt(at),nt[st].namespaced=!0}}}catch(vt){$=!0,tt=vt}finally{try{q||null==et.return||et.return()}finally{if($)throw tt}}}var rt=J instanceof Function?J:function(){return new _["a"].Store(Object.assign({},J,{state:J.state instanceof Function?J.state():{}}))};function lt(t){var i=F(t),e=i.default||i;if(e.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(e.state&&"function"!==typeof e.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return e}function ct(t,i){if(1===i.length)return t.modules;var e=i.shift(),a=t.modules[e]=t.modules[e]||{};return a.namespaced=!0,a.modules=a.modules||{},ct(a,i)}var dt=e("4a46"),ut=e("6050"),mt=e("8c7d");a["default"].prototype.bus=dt["a"],a["default"].prototype.storage=mt["a"],a["default"].filter("img",function(t){return/^http/.test(t)?t.replace("com/n0","com/img"):/^\/.{4}\//.test(t)?"http://admin.fufentong.com/media/upload"+t:"http://mapi.fufentong.com"+t}),a["default"].filter("exch",function(t,i){var e=t.jifen,a=i.exchange,s=parseInt(e)/parseInt(a),o=Math.round(100*s)/100;return 10==a?o.toFixed(2):o});var ht=rt;a["default"].use(W.a),a["default"].prototype.yum=ut["a"],new a["default"]({el:"#app",router:x,store:ht,render:function(t){return t(z)}})},fc6d:function(t,i,e){"use strict";var a=e("955c"),s=e.n(a);s.a},fe29:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFNkExMjFCQjRFOTExRThBMTI5QzFCMTdFNTNDREQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFNkExMjFDQjRFOTExRThBMTI5QzFCMTdFNTNDREQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU2QTEyMTlCNEU5MTFFOEExMjlDMUIxN0U1M0NERDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU2QTEyMUFCNEU5MTFFOEExMjlDMUIxN0U1M0NERDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4uA3wdAAABd0lEQVR42pyUvUrEQBSFkxjs3DdYFatUPoKCq2C1la5gJ8quhb2t+gKCCv4g2PgD/vSrcRX/Gl8ga2Oh4gOIjYLEc5YTGYdsCHvhY9k7OSd35s6NGzuLTkqMgCn99ir3Aq7AMWjYAs/6H4BrsA6aoAwKoqzcmp4J2hkNgxu9cRCsggh8iUg5rp2Be2la4RuVnIBpcOlkxw/YAE/SDLFSVuSCPbCSw8SMECxL69KoBHrApvFQnEFoPLclbYlGFbCrkpNwDWpWbszaJrUVTy0+Tymdbx/NscU6PWhUBM85BMnWqlae2qKv1sY5jNw2+e7kHr2DAafz6ANvNHoE48ZC1aiQHdpO6aQZPMcHGh2AWdClhR2ra2kkQc0c2KfRBfgE8x1sqyZt6KvUGXCroWzkNOF9WtK8xcnQ0mASHKoyL8OAawvgSJqo1VLrexRodgo6q7ruCVvcr4NlMz60i+bf3Uj5sCVjMKE55IX9Bq/gDpyqm/+69yvAAGGtXsIT3CZKAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=goods.7631c77e.js.map