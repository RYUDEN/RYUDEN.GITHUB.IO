(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"0dbf":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("paragraph")],1)},n=[],r=e("be94"),c=e("8577"),s=e("203d"),o=e("2f62"),l={name:"return",metaInfo:{title:"帮助中心",meta:[{name:"keywords",content:"福分通"},{name:"description",content:"专注企业员工福利"}]},data:function(){return{}},computed:Object(r["a"])({},Object(o["b"])("article",["selectItem"])),components:{layout:c["a"],paragraph:s["a"]}},u=l,d=(e("f5e6"),e("2877")),p=Object(d["a"])(u,i,n,!1,null,"37a4957f",null);p.options.__file="page.vue";a["default"]=p.exports},"203d":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paragraph fl"},[t.paragraph?e("div",[e("div",{staticClass:"paragraph-title bold"},[t._v("\n            "+t._s(t.main.title)+"\n        ")]),e("div",{staticClass:"paragraph-content",attrs:{id:"paragraph"},domProps:{innerHTML:t._s(t.main.content)}})]):e("div",[e("div",{staticClass:"paragraph-title bold"},[t._v("\n            问题列表\n        ")]),e("div",{staticClass:"paragraph-content"},[e("ul",[t._l(t.artlist,function(a,i){return t.selectCid&&a.cid!==t.selectCid?t._e():e("li",{staticClass:"title"},[e("a",{on:{click:function(e){t.toArticle(a.id,a.title)}}},[t._v(t._s(a.title))])])}),0===t.artlist.length?e("li",[t._v("什么都没有")]):t._e()],2)])])])},n=[],r=e("be94"),c=(e("cadf"),e("551c"),e("097d"),e("2f62")),s={name:"paragraph",data:function(){return{main:{}}},computed:Object(r["a"])({},Object(c["b"])("article",["artlist","selectCid"]),{paragraph:function(){return!!this.$route.params.aid}}),mounted:function(){this.$route.params.aid?this.getArticle(this.$route.params.aid):this.$store.dispatch("article/chooesedName",null)},methods:{getArticle:function(t){var a=this;this.yum("api/article/getArticle",{articleId:t}).then(function(t){200===t.data.status&&(a.main=t.data.data[0])})},toArticle:function(t,a){this.$store.dispatch("article/chooesedName",a),this.getArticle(t),this.$router.push("/".concat(t))}}},o=s,l=(e("53ed"),e("2877")),u=Object(l["a"])(o,i,n,!1,null,"6e336eb2",null);u.options.__file="paragraph.vue";a["a"]=u.exports},"53ed":function(t,a,e){"use strict";var i=e("b87f"),n=e.n(i);n.a},b87f:function(t,a,e){},ebba:function(t,a,e){},f5e6:function(t,a,e){"use strict";var i=e("ebba"),n=e.n(i);n.a}}]);
//# sourceMappingURL=24.fc587be6.js.map