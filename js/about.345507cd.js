(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0160":function(t,e,i){},1974:function(t,e,i){"use strict";i("377e")},"377e":function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"half-bg"},[i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("AboutCard",{attrs:{userData:t.userData}})],1)],1),i("v-row",[i("v-col",{staticClass:"grey lighten-4 my-5",attrs:{cols:"12"}},[i("TechStack")],1)],1),i("v-row",[i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("EducationTimeline")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{staticClass:"py-10 px-8 rounded-lg",attrs:{outlined:"",flat:"",rounded:""}},[i("v-row",[i("v-card-title",{staticClass:"py-0 pl-0 font-weight-medium headline text--secondary"},[t._v(" About ")])],1),i("v-row",[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"12",lg:"4"}},[i("v-img",{staticClass:"rounded-lg",attrs:{src:"https://raw.githubusercontent.com/kartikderasari/Portfolio-Assets/main/Profile/Cover-Image.svg?token=AJSPHONSK4ENTBWRBGVL2M3AK6VR4",lazy:""}})],1),i("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"8"}},[i("v-card-text",{staticClass:"pl-0 ml-0"},[i("h3",{staticClass:"py-0 font-weight-medium title text--secondary teal--text"},[t._v(" Hello, I'm "+t._s(t.userData.name)+"! ")]),t._v(" "+t._s(t.userData.about)+" ")]),i("v-card-actions",{staticClass:"pl-0 py-0"},[i("v-btn",{staticClass:"purple white--text px-2 px-sm-5 px-md-5 px-lg-5",attrs:{to:"workspace"}},[t._v("See Work")]),i("v-btn",{staticClass:"px-2 px-sm-5 px-md-5 px-lg-5",attrs:{outlined:"",color:"purple",href:"mailto:"+t.userData.email}},[t._v("Contact "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-open-in-new ")])],1)],1)],1)],1)],1)],1)},l=[],r={props:["userData"]},o=r,c=i("2877"),d=i("6544"),m=i.n(d),u=i("8336"),v=i("b0af"),h=i("99d9"),p=i("62ad"),f=i("a523"),g=i("132d"),C=i("adda"),_=i("0fd9"),x=Object(c["a"])(o,n,l,!1,null,null,null),b=x.exports;m()(x,{VBtn:u["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:f["a"],VIcon:g["a"],VImg:C["a"],VRow:_["a"]});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[t.loading?i("v-progress-circular",{staticClass:"mx-auto my-10",attrs:{size:40,color:"primary",indeterminate:""}}):t._e()],1),t.loading?t._e():i("v-card",{staticClass:"py-5 px-8",attrs:{color:"transparent",flat:""}},[i("v-row",[i("v-card-title",{staticClass:"font-weight-medium pl-0 headline text--secondary"},[t._v("Tech-Stack")]),i("v-card-text",{staticClass:"d-flex justify-center flex-wrap align-center"},t._l(t.skills,(function(t,e){return i("div",{key:e},[i("v-img",{staticClass:"ma-2",attrs:{src:t.skillLogoURL,width:"6vh",lazy:""}})],1)})),0)],1)],1)],1)},w=[],y=(i("159b"),i("d940")),k={data:function(){return{skills:null,loading:!1}},methods:{readSkillsData:function(){var t=this;this.loading=!0,this.skills=[],y["a"].firestore().collection("skills").get().then((function(e){return e.forEach((function(e){return t.skills.push(e.data())}))})).then((function(){return t.loading=!1}))}},mounted:function(){this.readSkillsData()}},D=k,T=i("490a"),E=Object(c["a"])(D,V,w,!1,null,null,null),$=E.exports;m()(E,{VCard:v["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:f["a"],VImg:C["a"],VProgressCircular:T["a"],VRow:_["a"]});var B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{attrs:{flat:""}},[i("v-row",[i("v-card-title",{staticClass:"pl-8 font-weight-medium headline text--secondary"},[t._v(" Education ")])],1),i("v-row",[i("v-col",[i("v-timeline",{staticClass:"pt-0",attrs:{dense:"","align-top":""}},[i("v-timeline-item",{attrs:{small:"",color:"blue"}},[i("v-card-title",{staticClass:"h4 pa-0"},[t._v("Computer Engineering")]),i("v-card-text",{staticClass:"ma-0 pa-0"},[t._v(" Silver Oak College of Engineering and Technology, "),i("br"),t._v("Gujarat Technological University ")]),i("small",[t._v("2017 - Present")])],1),i("v-timeline-item",{staticClass:"pb-0",attrs:{small:"",color:"blue"}},[i("v-card-title",{staticClass:"h4 pa-0"},[t._v("Higher Secondary")]),i("v-card-text",{staticClass:"ma-0 pa-0"},[t._v(" Navkar Public School ")]),i("small",[t._v("2016 - 2017")])],1)],1)],1)],1)],1)],1)},S=[],O=i("5530"),j=(i("0160"),i("58df")),I=i("7560"),A=Object(j["a"])(I["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(O["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),R=(i("c96a"),i("9d26")),P=i("a9ad"),z=Object(j["a"])(P["a"],I["a"]),H=z.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(R["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(O["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(O["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),J={},L=Object(c["a"])(J,B,S,!1,null,null,null),N=L.exports;m()(L,{VCard:v["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:f["a"],VRow:_["a"],VTimeline:A,VTimelineItem:H});var G={components:{AboutCard:b,TechStack:$,EducationTimeline:N},props:["userData"]},K=G,U=(i("1974"),Object(c["a"])(K,a,s,!1,null,"efb4e298",null));e["default"]=U.exports;m()(U,{VCol:p["a"],VContainer:f["a"],VRow:_["a"]})}}]);