(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"57a0":function(e,t,n){},"7d21":function(e,t,n){"use strict";var i=n("57a0"),a=n.n(i);a.a},d683:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register container"},[n("div",{staticClass:"info"},[n("Tile",{attrs:{display:!0}}),n("Step",{attrs:{step:"3"}}),n("div",{staticClass:"form"},[n("table",[n("tr",[e._m(0),n("td",{staticClass:"input"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.company_name,expression:"form.company_name"}],attrs:{type:"text",placeholder:"请输入企业全称"},domProps:{value:e.form.company_name},on:{input:function(t){t.target.composing||e.$set(e.form,"company_name",t.target.value)}}})])])]),n("tr",[e._m(1),n("td",{staticClass:"input"},[n("div",{staticClass:"hack-input",class:{focus:e.set_trade},on:{click:function(t){if(t.target!==t.currentTarget)return null;e.setTrade()}}},[e._v("\n                            "+e._s(e.form.trade)+"\n                            "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.set_trade,expression:"set_trade"}],staticClass:"choose-trade row"},[n("div",{staticClass:"col-4"},[n("ul",e._l(e.industry,function(t,i){return n("li",{key:i,on:{click:function(t){e.seletOne(i)}}},[e._v(e._s(t.name))])}))]),n("div",{staticClass:"col-4"},[n("ul",e._l(e.industry[e.selet_one].child,function(t,i){return n("li",{on:{click:function(t){e.seletTwo(i)}}},[e._v("\n                                            "+e._s(t.name)+"\n                                        ")])}))]),n("div",{staticClass:"col-4"},[n("ul",e._l(e.industry[e.selet_one].child[e.selet_two].child,function(t,i){return n("li",{on:{click:function(n){e.insertIndustry(t)}}},[e._v(e._s(t)+"\n                                        ")])}))])])])])]),n("tr",[e._m(2),n("td",{staticClass:"input"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.employee_num,expression:"form.employee_num"}],attrs:{type:"text",placeholder:"企业规模大小"},domProps:{value:e.form.employee_num},on:{input:function(t){t.target.composing||e.$set(e.form,"employee_num",t.target.value)}}})])])]),n("tr",[e._m(3),n("td",{staticClass:"input"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact,expression:"form.contact"}],attrs:{type:"text",placeholder:"请输入联系人姓名"},domProps:{value:e.form.contact},on:{input:function(t){t.target.composing||e.$set(e.form,"contact",t.target.value)}}})])])]),n("tr",[e._m(4),n("td",{staticClass:"input"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.job,expression:"form.job"}],attrs:{type:"text",placeholder:"请输入联系人职位"},domProps:{value:e.form.job},on:{input:function(t){t.target.composing||e.$set(e.form,"job",t.target.value)}}})])])])]),n("div",{staticClass:"btn",on:{click:e.sign}},[e._v("\n                立即注册\n            ")])])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"tile"},[n("p",[e._v("企业名称"),n("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"tile"},[n("p",[e._v("所属行业"),n("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"tile"},[n("p",[e._v("企业规模"),n("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"tile"},[n("p",[e._v("联系人"),n("span",{staticStyle:{width:"100%",display:"inline-block"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"tile"},[n("p",[e._v("职位"),n("span",{staticStyle:{width:"100%",display:"inline-block"}})])])}],l=n("be94"),c=n("fe64"),s=n("11de"),m=n("2f62"),d=[{name:"农、林、牧、渔业",child:[{name:"农、林、牧、渔服务业",child:["畜牧服务业","林业服务业","农业服务业","渔业服务业"]},{name:"农业",child:["豆类、油料和薯类种植","谷物种植","坚果、含油果、香料和饮料作物种植","棉、麻、糖、烟草种植","其他农业","蔬菜、食用菌及园艺作物种植","水果种植","中药材种植"]},{name:"渔业",child:["水产捕捞","水产养殖"]},{name:"林业",child:["林产品采集","林木育种和育苗","木材和竹材采运","森林经营和管护","造林和更新"]},{name:"畜牧业",child:["家禽饲养","其他畜牧业","牲畜饲养","狩猎和捕捉动物"]}]},{name:"金融业",child:[{name:"保险业",child:["保险监管服务","保险经纪与代理服务","财产保险","其他保险活动","人身保险","养老金","再保险"]},{name:"资本市场服务",child:["期货市场服务","其他资本市场服务","证券期货监管服务","证券市场服务","资本投资服务"]},{name:"其他金融业",child:["非金融机构支付服务","金融信托与管理服务","金融信息服务","控股公司服务","其他未列明金融业"]},{name:"货币金融服务",child:["非货币银行服务","货币银行服务","银行监管服务","中央银行服务"]}]},{name:"居民服务、修理和其他服务业",child:[{name:"居民服务业",child:["保健服务","殡葬服务","婚姻服务","家庭服务","理发及美容服务","其他居民服务业","托儿所服务","洗染服务","洗浴服务"]},{name:"机动车、电子产品和日用产品修理业",child:["计算机和办公设备维修","家用电器修理","其他日用产品修理业","汽车、摩托车修理与维护"]},{name:"其他服务业",child:["其他未列明服务业","清洁服务"]}]},{name:"建筑业",child:[{name:"房屋建筑业",child:["房屋建筑业"]},{name:"建筑装饰和其他建筑业",child:["工程准备活动","建筑装饰业","其他未列明建筑业","提供施工设备服务"]},{name:"建筑安装业",child:["电气安装","管道和设备安装","其他建筑安装业"]},{name:"土木工程建筑业",child:["工矿工程建筑","海洋工程建筑","架线和管道工程建筑","其他土木工程建筑","水利和内河港口工程建筑","铁路、道路、隧道和桥梁工程建筑"]}]},{name:"批发和零售业",child:[{name:"零售业",child:["纺织、服装及日用品专门零售","货摊、无店铺及其他零售业","家用电器及电子产品专门零售","汽车、摩托车、燃料及零配件专门零售","食品、饮料及烟草制品专门零售","文化、体育用品及器材专门零售","五金、家具及室内装饰材料专门零售","医药及医疗器材专门零售","综合零售"]},{name:"批发业",child:["纺织、服装及家庭用品批发","机械设备、五金产品及电子产品批发","矿产品、建材及化工产品批发","贸易经纪与代理","农、林、牧产品批发","其他批发业","食品、饮料及烟草制品批发","文化、体育用品及器材批发","医药及医疗器材批发"]}]},{name:"科学研究和技术服务业",child:[{name:"专业技术服务业",child:["测绘服务","地震服务","地质勘查","工程技术","海洋服务","环境与生态监测","其他专业技术服务业","气象服务","质检技术服务"]},{name:"科技推广和应用服务业",child:["技术推广服务","科技中介服务","其他科技推广和应用服务业"]},{name:"研究和试验发展",child:["工程和技术研究和试验发展","农业科学研究和试验发展","社会人文科学研究","医学研究和试验发展","自然科学研究和试验发展"]}]},{name:"电力、热力、燃气及水生产和供应业",child:[{name:"电力、热力生产和供应业",child:["电力供应","电力生产","热力生产和供应"]},{name:"燃气生产和供应业",child:["燃气生产和供应业"]},{name:"水的生产和供应业",child:["其他水的处理、利用与分配","污水处理及其再生利用","自来水生产和供应"]}]},{name:"水利、环境和公共设施管理业",child:[{name:"生态保护和环境治理业",child:["环境治理业","生态保护"]},{name:"公共设施管理业",child:["城乡市容管理","公园和游览景区管理","环境卫生管理","绿化管理","市政设施管理"]},{name:"水利管理业",child:["防洪除涝设施管理","其他水利管理业","水文服务","水资源管理","天然水收集与分配"]}]},{name:"采矿业",child:[{name:"非金属矿采选业",child:["采盐","化学矿开采","石棉及其他非金属矿采选","土砂石开采"]},{name:"黑色金属矿采选业",child:["锰矿、铬矿采选","其他黑色金属矿采选","铁矿采选"]},{name:"开采辅助活动",child:["煤炭开采和洗选辅助活动","其他开采辅助活动","石油和天然气开采辅助活动"]},{name:"石油和天然气开采业",child:["石油开采","天然气开采"]},{name:"煤炭开采和洗选业",child:["褐煤开采洗选","其他煤炭采选","烟煤和无烟煤开采洗选"]},{name:"有色金属矿采选业",child:["常用有色金属矿采选","贵金属矿采选","稀有稀土金属矿采选"]},{name:"其他采矿业",child:["其他采矿业"]}]},{name:"教育",child:[{name:"教育",child:["初等教育","高等教育","技能培训、教育辅助及其他教育","特殊教育","学前教育","中等教育"]}]},{name:"公共管理、社会保障和社会组织",child:[{name:"国家机构",child:["国家行政机构","国家权力机构","其他国家机构","人民法院和人民检察院"]},{name:"中国共产党机关",child:["中国共产党机关"]},{name:"群众团体、社会团体和其他成员组织",child:["基金会","群众团体","社会团体","宗教组织"]},{name:"社会保障",child:["社会保障"]},{name:"基层群众自治组织",child:["村民自治组织","社区自治组织"]},{name:"人民政协、民主党派",child:["民主党派","人民政协"]}]},{name:"制造业",child:[{name:"文教、工美、体育和娱乐用品制造业",child:["工艺美术品制造","乐器制造","体育用品制造","玩具制造","文教办公用品制造","游艺器材及娱乐用品制造"]},{name:"化学原料和化学制品制造业",child:["肥料制造","合成材料制造","基础化学原料制造","农药制造","日用化学产品制造","涂料、油墨、颜料及类似产品制造","炸药、火工及焰火产品制造","专用化学产品制造"]},{name:"其他制造业",child:["核辐射加工","煤制品制造","其他未列明制造业","日用杂品制造"]},{name:"电气机械和器材制造业",child:["电池制造","电机制造","电线、电缆、光缆及电工器材制造","非电力家用器具制造","家用电力器具制造","其他电气机械及器材制造","输配电及控制设备制造","照明器具制造"]},{name:"铁路、船舶、航空航天和其他运输设备制造业",child:["城市轨道交通设备制造","船舶及相关装置制造","非公路休闲车及零配件制造","航空、航天器及设备制造","摩托车制造","潜水救捞及其他未列明运输设备制造","铁路运输设备制造","自行车制造"]},{name:"废弃资源综合利用业",child:["非金属废料和碎屑加工处理","金属废料和碎屑加工处理"]},{name:"食品制造业",child:["焙烤食品制造","方便食品制造","罐头食品制造","其他食品制造","乳制品制造","糖果、巧克力及蜜饯制造","调味品、发酵制品制造"]},{name:"纺织服装、服饰业",child:["服饰制造","机织服装制造","针织或钩针编织服装制造"]},{name:"金属制品、机械和设备修理业",child:["电气设备修理","金属制品修理","其他机械和设备修理业","铁路、船舶、航空航天等运输设备修理","通用设备修理","仪器仪表修理","专用设备修理"]},{name:"家具制造业",child:["金属家具制造","木质家具制造","其他家具制造","塑料家具制造","竹、藤家具制造"]},{name:"通用设备制造业",child:["泵、阀门、压缩机及类似机械制造","锅炉及原动设备制造","烘炉、风机、衡器、包装等设备制造","金属加工机械制造","其他通用设备制造业","通用零部件制造","文化、办公用机械制造","物料搬运设备制造","轴承、齿轮和传动部件制造"]},{name:"农副食品加工业",child:["谷物磨制","其他农副食品加工","蔬菜、水果和坚果加工","水产品加工","饲料加工","屠宰及肉类加工","植物油加工","制糖业"]},{name:"造纸和纸制品业",child:["造纸","纸浆制造","纸制品制造"]},{name:"专用设备制造业",child:["采矿、冶金、建筑专用设备制造","电子和电工机械专用设备制造","纺织、服装和皮革加工专用设备制造","化工、木材、非金属加工专用设备制造","环保、社会公共服务及其他专用设备制造","农、林、牧、渔专用机械制造","食品、饮料、烟草及饲料生产专用设备制造","医疗仪器设备及器械制造","印刷、制药、日化及日用品生产专用设备制造"]},{name:"酒、饮料和精制茶制造业",child:["精制茶加工","酒的制造","饮料制造"]},{name:"有色金属冶炼和压延加工业",child:["常用有色金属冶炼","贵金属冶炼","稀有稀土金属冶炼","有色金属合金制造","有色金属压延加工","有色金属铸造"]},{name:"皮革、毛皮、羽毛及其制品和制鞋业",child:["毛皮鞣制及制品加工","皮革鞣制加工","皮革制品制造","羽毛(绒)加工及制品制造","制鞋业"]},{name:"橡胶和塑料制品业",child:["塑料制品业","橡胶制品业"]},{name:"金属制品业",child:["集装箱及金属包装容器制造","建筑、安全用金属制品制造","结构性金属制品制造","金属表面处理及热处理加工","金属工具制造","金属丝绳及其制品制造","金属制日用品制造","其他金属制品制造","搪瓷制品制造"]},{name:"仪器仪表制造业",child:["光学仪器及眼镜制造","其他仪器仪表制造业","通用仪器仪表制造","钟表与计时仪器制造","专用仪器仪表制造"]},{name:"纺织业",child:["非家用纺织制成品制造","化纤织造及印染精加工","家用纺织制成品制造","麻纺织及染整精加工","毛纺织及染整精加工","棉纺织及印染精加工","丝绢纺织及印染精加工","针织或钩针编织物及其制品制造"]},{name:"石油加工、炼焦和核燃料加工业",child:["核燃料加工","精炼石油产品制造","炼焦"]},{name:"计算机、通信和其他电子设备制造业",child:["电子器件制造","电子元件制造","广播电视设备制造","计算机制造","雷达及配套设备制造","其他电子设备制造","视听设备制造","通信设备制造"]},{name:"医药制造业",child:["化学药品原料药制造","化学药品制剂制造","生物药品制造","兽用药品制造","卫生材料及医药用品制造","中成药生产","中药饮片加工"]},{name:"汽车制造业",child:["低速载货汽车制造","电车制造","改装汽车制造","汽车车身、挂车制造","汽车零部件及配件制造","汽车整车制造"]},{name:"非金属矿物制品业",child:["玻璃纤维和玻璃纤维增强塑料制品制造","玻璃制品制造","玻璃制造","耐火材料制品制造","石膏、水泥制品及类似制品制造","石墨及其他非金属矿物制品制造","水泥、石灰和石膏制造","陶瓷制品制造","砖瓦、石材等建筑材料制造"]},{name:"木材加工和木、竹、藤、棕、草制品业",child:["木材加工","木制品制造","人造板制造","竹、藤、棕、草等制品制造"]},{name:"印刷和记录媒介复制业",child:["记录媒介复制","印刷","装订及印刷相关服务"]},{name:"烟草制品业",child:["卷烟制造","其他烟草制品制造","烟叶复烤"]},{name:"化学纤维制造业",child:["合成纤维制造","纤维素纤维原料及纤维制造"]},{name:"黑色金属冶炼和压延加工业",child:["钢压延加工","黑色金属铸造","炼钢","炼铁","铁合金冶炼"]}]},{name:"军队",child:[{name:"军队",child:["中华人民共和国中央军事委员会","中国人民解放军陆军","中国人民解放军空军","中国人民解放军海军","中国人民解放军火箭军","中国人民解放军联勤保障部队","中国人民解放军战略支援部队","中国人民武装警察部队","军队院校"]}]},{name:"租赁和商务服务业",child:[{name:"商务服务业",child:["安全保护服务","法律服务","广告业","旅行社及相关服务","其他商务服务业","企业管理服务","人力资源服务","知识产权服务","咨询与调查"]},{name:"租赁业",child:["机械设备租赁","文化及日用品出租"]}]},{name:"信息传输、软件和信息技术服务业",child:[{name:"软件和信息技术服务业",child:["集成电路设计","其他信息技术服务业","软件开发","数据处理和存储服务","信息技术咨询服务","信息系统集成服务"]},{name:"互联网和相关服务",child:["互联网接入及相关服务","互联网信息服务","其他互联网服务"]},{name:"电信、广播电视和卫星传输服务",child:["电信","广播电视传输服务","卫星传输服务"]}]},{name:"房地产业",child:[{name:"房地产业",child:["房地产开发经营","房地产中介服务","其他房地产业","物业管理","自有房地产经营活动"]}]},{name:"文化、体育和娱乐业",child:[{name:"文化艺术业",child:["博物馆","烈士陵园、纪念馆","其他文化艺术业","群众文化活动","图书馆与档案馆","文物及非物质文化遗产保护","文艺创作与表演","艺术表演场馆"]},{name:"广播、电视、电影和影视录音制作业",child:["电视","电影放映","电影和影视节目发行","电影和影视节目制作","广播","录音制作"]},{name:"体育",child:["其他体育","体育场馆","体育组织","休闲健身活动"]},{name:"娱乐业",child:["彩票活动","其他娱乐业","室内娱乐活动","文化、娱乐、体育经纪代理","游乐园"]},{name:"新闻和出版业",child:["出版业","新闻业"]}]},{name:"交通运输、仓储和邮政业",child:[{name:"仓储业",child:["谷物、棉花等农产品仓储","其他仓储业"]},{name:"航空运输业",child:["航空客货运输","航空运输辅助活动","通用航空服务"]},{name:"道路运输业",child:["城市公共交通运输","道路货物运输","道路运输辅助活动","公路旅客运输"]},{name:"邮政业",child:["快递服务","邮政基本服务"]},{name:"管道运输业",child:["管道运输业"]},{name:"装卸搬运和运输代理业",child:["运输代理业","装卸搬运"]},{name:"铁路运输业",child:["铁路货物运输","铁路旅客运输","铁路运输辅助活动"]},{name:"水上运输业",child:["水上货物运输","水上旅客运输","水上运输辅助活动"]}]},{name:"住宿和餐饮业",child:[{name:"住宿业",child:["旅游饭店","其他住宿业","一般旅馆"]},{name:"餐饮业",child:["快餐服务","其他餐饮业","饮料及冷饮服务","正餐服务"]}]},{name:"卫生和社会工作",child:[{name:"社会工作",child:["不提供住宿社会工作","提供住宿社会工作"]},{name:"卫生",child:["妇幼保健院（所、站）","疾病预防控制中心","计划生育技术服务活动","门诊部（所）","其他卫生活动","社区医疗与卫生院","医院","专科疾病防治院（所、站）"]}]}],r={name:"step-two",components:{Tile:c["a"],Step:s["a"]},data:function(){return{set_trade:!1,set_employee:!1,form:{company_name:"",trade:"请选择行业",employee_num:"",contact:"",job:""},industry:d,selet_one:0,selet_two:0,selet_three:0}},created:function(){3!==this.register.step&&this.$router.push("/")},methods:{setTrade:function(){this.set_trade=!this.set_trade},seletOne:function(e){this.selet_two=0,this.selet_three=0,this.selet_one=e},seletTwo:function(e){this.selet_three=0,this.selet_two=e},insertIndustry:function(e){this.form.trade=e,this.set_trade=!1},sign:function(){var e=this,t={};for(var n in t.phone=this.register.phone,t.pawrd=this.register.password,t.username=this.register.user,t.business_name=this.form.company_name,t.extra=JSON.stringify(this.form),t)if(""==t[n])switch(n){case"phone":return void this.bus.$emit("notice","手机号不正确");case"pawrd":return void this.bus.$emit("notice","密码未设置");case"username":return void this.bus.$emit("notice","用户名未设置");case"business_name":return void this.bus.$emit("notice","企业名称未填写");case"extra":return void this.bus.$emit("notice","其他字段未填写")}this.yum("company/login/register",t).then(function(t){200===t.data.status?e.$router.push("/success"):alert(t.data.msg)})}},computed:Object(l["a"])({},Object(m["b"])("register",["register"]))},h=r,o=(n("7d21"),n("2877")),u=Object(o["a"])(h,i,a,!1,null,"62803174",null);u.options.__file="step-san.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=41.27c731b5.js.map