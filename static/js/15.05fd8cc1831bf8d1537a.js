webpackJsonp([15],{BySi:function(e,a){},Sg6h:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"case",data:function(){var e=[{name:"北京",value:200},{name:"天津",value:0},{name:"上海",value:0},{name:"重庆",value:0},{name:"河北",value:0},{name:"河南",value:0},{name:"云南",value:31},{name:"辽宁",value:0},{name:"黑龙江",value:0},{name:"湖南",value:18},{name:"安徽",value:0},{name:"山东",value:0},{name:"新疆",value:0},{name:"江苏",value:0},{name:"浙江",value:0},{name:"江西",value:6},{name:"湖北",value:39},{name:"广西",value:25},{name:"甘肃",value:0},{name:"山西",value:0},{name:"内蒙古",value:0},{name:"陕西",value:0},{name:"吉林",value:0},{name:"福建",value:0},{name:"贵州",value:0},{name:"广东",value:163},{name:"青海",value:0},{name:"西藏",value:0},{name:"四川",value:86},{name:"宁夏",value:16},{name:"海南",value:10},{name:"台湾",value:0},{name:"香港",value:0},{name:"澳门",value:0},{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:"#10242b"}},emphasis:{opacity:0,label:{show:!1}}}}];return{mapData:e,item:{tooltip:{backgroundColor:"#eff8ff",borderColor:"#B8DBF7",borderWidth:1,textStyle:{color:"#0056bf"},position:["25%","75%"],padding:10,alwaysShowContent:!1,triggerOn:"none",enterable:!1,formatter:function(e){return'<div class="echart-tooltip"><i></i>'+e.data.name+"："+e.data.value+"所学校</div>"}},visualMap:{type:"piecewise",pieces:[{min:0,color:"#b1dbf2"},{value:0,color:"#E8F3F9"}],show:!1},series:[{name:"",type:"map",mapType:"china",roam:!1,itemStyle:{normal:{borderColor:"#fff"},emphasis:{label:{show:!0},areaColor:"#46a7f7"}},showLegendSymbol:!1,data:e}]}}},components:{hLayout:t("o9pg").a},computed:{schoolSum:function(){return this.mapData.reduce(function(e,a){return e+a.value},0)}},methods:{isShowTip:function(e){this.$refs.echart.dispatchAction({type:0==e.data.value?"hideTip":"showTip",seriesIndex:0,dataIndex:e.dataIndex})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h-layout",[t("div",{staticClass:"case"},[t("div",{staticClass:"case-info"},[t("div",{staticClass:"content"},[t("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[e._v("华亿教育已服务全国"+e._s(e.schoolSum)+"所中小学校、教育机构、教育管理部门，华亿教育提供的教育大数据服务方案、信息化整天解决方案，\n          正在逐渐构建国内完整的教育产业生态链，成为“教育+互联网”，为我国教育信息化的推进和“智慧教育”的实现、为“智慧城市”的建设做出新的贡献。\n\n        ")])])]),e._v(" "),t("div",{staticClass:"case-map"},[t("chart",{ref:"echart",staticStyle:{height:"682px",width:"100%"},attrs:{options:e.item,"auto-resize":!0},on:{mouseover:function(a){return e.isShowTip(a)}}})],1),e._v(" "),t("div",{staticClass:"case-comment"},[t("div",{staticClass:"content"},[t("div",{staticClass:"box"},[t("h3",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[e._v("感受真实的用户评价")]),e._v(" "),t("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{rotate:{y:-10}},expression:"{rotate:{y:-10}}",modifiers:{reset:!0}}]},[e._v("关注用户体验，用心提供服务，所有努力只为得到您的认可")])])])])])])},staticRenderFns:[]};var o=t("VU/8")(n,l,!1,function(e){t("BySi")},"data-v-b22ffdde",null);a.default=o.exports}});