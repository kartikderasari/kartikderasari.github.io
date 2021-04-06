(function(t){function e(e){for(var r,n,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({about:"about",workspace:"workspace"}[t]||t)+"."+{about:"345507cd",workspace:"9ebbd5db"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,workspace:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about",workspace:"workspace"}[t]||t)+"."+{about:"5d8dbde3",workspace:"db60cdb2"}[t]+".css",o=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],p.parentNode.removeChild(p),a(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"29e7":function(t,e,a){},5155:function(t,e,a){"use strict";a("29e7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.loading?t._e():a("Navbar",{attrs:{userData:t.userData}}),t.loading?t._e():a("v-main",[a("router-view",{attrs:{userData:t.userData}})],1),t.loading||"/"==this.$route.path?t._e():a("Footer",{attrs:{userData:t.userData}}),a("BottomNav"),t.loading?a("v-progress-circular",{staticClass:"mx-auto my-15 py-15",attrs:{size:50,color:"primary",indeterminate:""}}):t._e()],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"white","elevate-on-scroll":"",dense:""}},[a("div",{staticClass:"headline text-no-wrap pt-1",staticStyle:{width:"250px"}},[a("router-link",{staticClass:"font-weight-medium text--secondary text-decoration-none",staticStyle:{width:"250px"},attrs:{to:"/"}},[t._v(" "+t._s(t.userData.name)+" ")])],1),this.$vuetify.breakpoint.width>600?a("v-tabs",{attrs:{right:""}},[a("v-tab",{attrs:{to:"/"}},[t._v("Home")]),a("v-tab",{attrs:{to:"about"}},[t._v("About")]),a("v-tab",{attrs:{to:"workspace"}},[t._v("Workspace")])],1):t._e()],1)},i=[],l={props:["userData"]},c=l,u=a("2877"),d=a("6544"),p=a.n(d),m=a("40dc"),v=a("71a3"),b=a("fe57"),f=Object(u["a"])(c,s,i,!1,null,null,null),g=f.exports;p()(f,{VAppBar:m["a"],VTab:v["a"],VTabs:b["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"grey lighten-4",attrs:{padless:"",app:"",absolute:""}},[a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"text-center text-sm-center text-md-start text-lg-start",attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[a("span",{staticClass:"title font-weight-medium text--secondary"},[t._v(" "+t._s(t.userData.name)+" ")])]),a("v-col",{staticClass:"text-center text-sm-center text-md-end text-lg-end",attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[a("v-btn",{attrs:{icon:"",href:"mailto:"+t.userData.email,target:"_blank",rel:"noreferrer noopener","aria-label":"Mail"}},[a("v-icon",[t._v("mdi-email")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Facebook,target:"_blank",rel:"noreferrer noopener","aria-label":"Facebook"}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Instagram,target:"_blank",rel:"noreferrer noopener","aria-label":"Instagram"}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.LinkedIn,target:"_blank",rel:"noreferrer noopener","aria-label":"LinkedIn"}},[a("v-icon",[t._v("mdi-linkedin")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.GitHub,target:"_blank",rel:"noreferrer noopener","aria-label":"GitHub"}},[a("v-icon",[t._v("mdi-github")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Twitter,target:"_blank",rel:"noreferrer noopener","aria-label":"Twitter"}},[a("v-icon",[t._v("mdi-twitter")])],1)],1),a("v-col",{staticClass:"text-center font-weight-medium text--secondary",attrs:{cols:"12"}},[a("v-divider",{staticClass:"pb-2"}),a("strong",[t._v("© Created by "),a("a",{staticClass:"text-decoration-none purple--text",attrs:{href:"https://github.com/kartikderasari/",target:"_blank",rel:"noreferrer noopener"}},[t._v("Kartik Derasari")])])],1)],1)],1)],1)},_=[],x={props:["userData"]},w=x,k=a("8336"),y=a("62ad"),C=a("a523"),D=a("ce7e"),V=a("553a"),I=a("132d"),j=a("0fd9"),O=Object(u["a"])(w,h,_,!1,null,null,null),T=O.exports;p()(O,{VBtn:k["a"],VCol:y["a"],VContainer:C["a"],VDivider:D["a"],VFooter:V["a"],VIcon:I["a"],VRow:j["a"]});var A=a("d940"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$vuetify.breakpoint.width<600?a("v-bottom-navigation",{attrs:{app:"",grow:"",color:"blue"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-btn",{attrs:{value:"home",to:"/"}},[a("span",[t._v("Home")]),a("v-icon",[t._v("mdi-home")])],1),a("v-btn",{attrs:{value:"about",to:"about"}},[a("span",[t._v("About")]),a("v-icon",[t._v("mdi-human-greeting")])],1),a("v-btn",{attrs:{value:"workspace",to:"workspace"}},[a("span",[t._v("Workspace")]),a("v-icon",[t._v("mdi-folder-account")])],1)],1):t._e()},E=[],B={data:function(){return{value:"home"}}},P=B,H=a("b81c"),N=Object(u["a"])(P,S,E,!1,null,null,null),F=N.exports;p()(N,{VBottomNavigation:H["a"],VBtn:k["a"],VIcon:I["a"]});var L={name:"App",components:{Navbar:g,Footer:T,BottomNav:F},data:function(){return{userData:null,loading:!1}},methods:{readUserInfoData:function(){var t=this;this.loading=!0,A["a"].firestore().collection("userInfo").doc("data").get().then((function(e){return t.userData=e.data()})).then((function(){return t.loading=!1}))}},created:function(){this.readUserInfoData()}},$=L,M=a("7496"),z=a("f6c4"),G=a("490a"),R=Object(u["a"])($,n,o,!1,null,null,null),U=R.exports;p()(R,{VApp:M["a"],VMain:z["a"],VProgressCircular:G["a"]});a("d3b7"),a("3ca3"),a("ddb0");var W=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HomeCard",{attrs:{userData:t.userData}})},J=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mt-15 mb-15 mb-sm-15 mb-md-15 mb-lg-15 bg-overlay bg-overlay2",staticStyle:{position:"relative","z-index":"1"}},[a("v-container",{staticClass:"mt-0 mt-lg-5 mt-md-10"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"my-lg-10 my-md-10 pt-10 pt-15 mx-sm-auto mx-md-start mx-lg-start mx-auto",attrs:{cols:"11",xl:"8",lg:"8",md:"6",sm:"8",order:"2","order-sm":"2","order-md":"1","order-lg":"1"}},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"py-0 title text--secondary font-weight-normal"},[t._v(" Hello, I'm "+t._s(t.userData.name)+"! "),a("br"),t._v(" Talk to me about ")]),a("v-card-title",{staticClass:"py-0 font-weight-medium headline text--secondary text--darken-2"},[a("span",{staticClass:"text-truncate",staticStyle:{"border-bottom":"6px solid #64b5f6"}},[t._v(" Web & Community Building! ")])]),a("v-card-text",{staticClass:"pb-0 pt-2 font-weight-medium subtitle-2",staticStyle:{"max-width":"700px"}},[t._v(" "+t._s(t.userData.shortBio)+" ")]),a("v-card-actions",{staticClass:"d-flex align-center py-0"},[a("v-btn",{attrs:{icon:"",href:"mailto:"+t.userData.email,target:"_blank",rel:"noreferrer noopener","aria-label":"Mail"}},[a("v-icon",[t._v("mdi-email")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Facebook,target:"_blank",rel:"noreferrer noopener","aria-label":"Facebook"}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Instagram,target:"_blank",rel:"noreferrer noopener","aria-label":"Instagram"}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.LinkedIn,target:"_blank",rel:"noreferrer noopener","aria-label":"LinkedIn"}},[a("v-icon",[t._v("mdi-linkedin")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.GitHub,target:"_blank",rel:"noreferrer noopener","aria-label":"GitHub"}},[a("v-icon",[t._v("mdi-github")])],1),a("v-btn",{attrs:{icon:"",href:t.userData.Twitter,target:"_blank",rel:"noreferrer noopener","aria-label":"Twitter"}},[a("v-icon",[t._v("mdi-twitter")])],1)],1),a("v-card-actions",{staticClass:"ml-2"},[a("v-btn",{staticClass:"blue mr-2 white--text px-2 px-sm-5 px-md-5 px-lg-5",attrs:{to:"/about"}},[t._v("About")]),a("v-btn",{staticClass:"blue--text px-2 px-sm-5 px-md-5 px-lg-5",attrs:{outlined:"",to:"/workspace"}},[t._v("See work")])],1)],1)],1),a("v-col",{staticClass:"mx-sm-auto mx-md-start mx-lg-start mx-auto",attrs:{cols:"10",lg:"3",md:"6",sm:"6",order:"1","order-sm":"1","order-md":"2","order-lg":"2"}},[a("v-img",{staticClass:"rounded-circle",attrs:{src:t.userData.profilePhotoURL,"max-width":"250",height:"auto"}})],1)],1)],1)],1)],1)},Q=[],X={data:function(){return{bgClass:null,loading:!1}},props:["userData"]},Z=X,Y=(a("5155"),a("b0af")),tt=a("99d9"),et=a("adda"),at=Object(u["a"])(Z,K,Q,!1,null,null,null),rt=at.exports;p()(at,{VBtn:k["a"],VCard:Y["a"],VCardActions:tt["a"],VCardText:tt["b"],VCardTitle:tt["c"],VCol:y["a"],VContainer:C["a"],VIcon:I["a"],VImg:et["a"],VRow:j["a"]});var nt={components:{HomeCard:rt},props:["userData"]},ot=nt,st=Object(u["a"])(ot,q,J,!1,null,null,null),it=st.exports;r["a"].use(W["a"]);var lt=[{path:"/",name:"Home",component:it},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/workspace",name:"Workspace",component:function(){return a.e("workspace").then(a.bind(null,"20b0"))}}],ct=new W["a"]({mode:"history",base:"/",routes:lt}),ut=ct,dt=a("f309");r["a"].use(dt["a"]);var pt=new dt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ut,vuetify:pt,render:function(t){return t(U)}}).$mount("#app")},d940:function(t,e,a){"use strict";var r=a("260b"),n=(a("ea7b"),a("e71f"),{apiKey:"AIzaSyDTQswqPtzG6cZFEiNXRlJ983QjFcVAz6o",authDomain:"portfolio-89383.firebaseapp.com",projectId:"portfolio-89383",storageBucket:"portfolio-89383.appspot.com",messagingSenderId:"558205635702",appId:"1:558205635702:web:0eac07a015de22bd2fa357"}),o=n;r["a"].initializeApp(o);e["a"]={auth:r["a"].auth,firestore:r["a"].firestore,firebase:r["a"]}}});