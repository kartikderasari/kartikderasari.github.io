import{p as K,l as N,m as F,u as E,n as O,q as W,r as v,s as q,v as A,x as Q,a as e,y as X,_ as w,o as l,c as f,w as t,z as M,A as z,V as b,e as _,B as y,F as $,C as P,b as x,i as r,t as d,j as n,f as R,g as S,d as J,h as Y,D as Z,E as ee}from"./index-CB877yVy.js";import{a as u,V as k,b as i}from"./VRow-CsvM2vNe.js";import{m as te,V as B,a as ae,b as se}from"./VDialog-CxWq0A9d.js";import{V as ne}from"./VDivider-BaoKBsre.js";const oe=K({id:String,text:String,...N(te({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),U=F()({name:"VTooltip",props:oe(),emits:{"update:modelValue":a=>!0},setup(a,c){let{slots:s}=c;const m=E(a,"modelValue"),{scopeId:g}=O(),h=W(),o=v(()=>a.id||`v-tooltip-${h}`),p=q(),L=v(()=>a.location.split(" ").length>1?a.location:a.location+" center"),I=v(()=>a.origin==="auto"||a.origin==="overlap"||a.origin.split(" ").length>1||a.location.split(" ").length>1?a.origin:a.origin+" center"),D=v(()=>a.transition?a.transition:m.value?"scale-transition":"fade-transition"),j=v(()=>A({"aria-describedby":o.value},a.activatorProps));return Q(()=>{const G=B.filterProps(a);return e(B,A({ref:p,class:["v-tooltip",a.class],style:a.style,id:o.value},G,{modelValue:m.value,"onUpdate:modelValue":V=>m.value=V,transition:D.value,absolute:!0,location:L.value,origin:I.value,persistent:!0,role:"tooltip",activatorProps:j.value,_disableGlobalStack:!0},g),{activator:s.activator,default:function(){var H;for(var V=arguments.length,T=new Array(V),C=0;C<V;C++)T[C]=arguments[C];return((H=s.default)==null?void 0:H.call(s,...T))??a.text}})}),X({},p)}}),le={data:()=>({loading:!1}),props:["certificates"]},ie=n("p",{class:"mb-4 pl-4",style:{"font-size":"1.8rem"}},"Certifications",-1);function re(a,c,s,m,g,h){return l(),f(k,{fluid:""},{default:t(()=>[e(u,null,{default:t(()=>[a.loading?(l(),f(M,{key:0,class:"mx-auto my-10",size:40,color:"primary",indeterminate:""})):z("",!0)]),_:1}),a.loading?z("",!0):(l(),f(b,{key:0,class:"py-3 px-8",color:"transparent",flat:""},{default:t(()=>[e(u,null,{default:t(()=>[ie,e(_,{class:"d-flex align-center justify-center flex-wrap align-end text-center"},{default:t(()=>[(l(!0),y($,null,P(s.certificates,(o,p)=>(l(),y("div",{class:"d-flex flex-column justify-start mb-4",key:p},[e(x,{class:"mx-4 mb-4",src:o.certificateImage,width:"9vw",height:"auto",lazy:""},{default:t(()=>[e(U,{activator:"parent",location:"top"},{default:t(()=>[r(d(o.certificate),1)]),_:2},1024)]),_:2},1032,["src"])]))),128))]),_:1})]),_:1})]),_:1}))]),_:1})}const ce=w(le,[["render",re]]),de={data:()=>({skills:null,loading:!1}),props:["techStack"]},ue=n("p",{class:"mb-4 pl-4",style:{"font-size":"1.8rem"}},"Technologies",-1),fe={class:"code-font",style:{"font-size":"1.1rem"}};function me(a,c,s,m,g,h){return l(),f(k,{fluid:""},{default:t(()=>[e(u,null,{default:t(()=>[a.loading?(l(),f(M,{key:0,class:"mx-auto my-10",size:40,color:"primary",indeterminate:""})):z("",!0)]),_:1}),a.loading?z("",!0):(l(),f(b,{key:0,class:"py-5 px-8",color:"transparent",flat:""},{default:t(()=>[e(u,null,{default:t(()=>[ue,e(_,{class:"d-flex align-center justify-center flex-wrap align-end text-center"},{default:t(()=>[(l(!0),y($,null,P(s.techStack,(o,p)=>(l(),y("div",{class:"d-flex flex-column justify-start mb-3",key:p},[e(x,{class:"mx-8 mb-4",src:o.skillLogoURL,"lazy-src":o.skillLogoURL,width:"5vw",height:"auto",lazy:""},{default:t(()=>[e(U,{activator:"parent",location:"top"},{default:t(()=>[r(d(o.skill),1)]),_:2},1024)]),_:2},1032,["src","lazy-src"]),n("span",fe,d(o.skill),1)]))),128))]),_:1})]),_:1})]),_:1}))]),_:1})}const pe=w(de,[["render",me]]),_e={data:()=>({dialog:!1}),props:["experience"]},ge={class:"text-truncate",style:{"font-size":"1.1rem"}},he={class:"my-0 text-truncate",style:{"font-size":"1.1rem"}},ye={class:"my-0"},xe={class:"title",style:{"font-size":"1.1rem"}},ve={class:"my-0",style:{"font-size":"1.1rem"}},be={class:"my-0"};function ke(a,c,s,m,g,h){return l(),y($,null,[e(b,{class:"rounded-lg border",onClick:c[0]||(c[0]=o=>a.dialog=!0),color:"#f2f2f0",elevation:"2"},{default:t(()=>[e(_,null,{default:t(()=>[e(u,{class:"my-auto",justify:"center"},{default:t(()=>[e(i,{cols:"4",align:"center"},{default:t(()=>[e(x,{class:"rounded-xl",src:s.experience.companyLogoURL,"max-width":"120","max-height":"120",lazy:""},null,8,["src"])]),_:1}),e(i,{cols:"8",class:"d-flex flex-column justify-center"},{default:t(()=>[n("h5",ge,d(s.experience.designation),1),n("p",he,d(s.experience.companyName),1),n("p",ye,d(s.experience.start)+" - "+d(s.experience.end),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(se,{modelValue:a.dialog,"onUpdate:modelValue":c[2]||(c[2]=o=>a.dialog=o),width:"800",s:""},{default:t(()=>[e(b,null,{default:t(()=>[e(_,{class:"py-0"},{default:t(()=>[e(u,{class:"d-flex align-center pt-4"},{default:t(()=>[e(i,{cols:"3",align:"center"},{default:t(()=>[e(x,{class:"rounded-xl",src:s.experience.companyLogoURL,"max-width":"120"},null,8,["src"])]),_:1}),e(i,{cols:"9"},{default:t(()=>[n("h5",xe,d(s.experience.designation),1),n("p",ve,d(s.experience.companyName),1),n("p",be,d(s.experience.start)+" - "+d(s.experience.end),1)]),_:1})]),_:1})]),_:1}),e(_,{innerHTML:s.experience.brief},null,8,["innerHTML"]),e(ne),e(R,null,{default:t(()=>[e(ae),e(S,{color:"primary",variant:"flat",href:s.experience.companyWebsiteURL,target:"_blank"},{default:t(()=>[r(" Learn More ")]),_:1},8,["href"]),e(S,{color:"primary",variant:"tonal",onClick:c[1]||(c[1]=o=>a.dialog=!1)},{default:t(()=>[r(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const we=w(_e,[["render",ke],["__scopeId","data-v-176f2181"]]),Ve="/assets/Kartik_IIM-QnF-F9_M.jpeg",Ce="/assets/Kartik_Derasari_CloudNext-BIvuPdSb.gif",ze={props:["userData"]},Se=n("span",{class:"my-0 content"},[r(" Kartik Derasari is a technical consultant with a passion for technology and innovation. As a 6X Google Cloud Certified Professional, he has extensive experience in application development and analytics projects as a full-stack engineer. "),n("br"),n("br"),r(" In addition to his professional work, Kartik is an advocate for the use of technology to drive business growth and innovation. He is the leader of the Google Developers Group for Cloud professionals for Ahmedabad, where he shares his expertise with the wider community. He has been recognized as a Google Cloud Champion Innovator for Serverless App Development, a testament to his dedication and commitment to the field. "),n("br"),n("br"),r(" Kartik is a prolific speaker and has delivered over 100 technical sessions at conferences and events around the world. He has hosted more than 150 developer-focused events and conferences, helping to build and support the community of technology professionals. He has been a Google Developer Student Clubs Lead and an ML Facilitator of Google AI's Explore ML Program, helping to inspire and educate the next generation of technology innovators. "),n("br"),n("br")],-1),$e=n("span",{class:"my-0 content"},[r(" With his wealth of experience and expertise, Kartik is a sought-after speaker and mentor in the technology industry. His passion for technology and his dedication to innovation make him a valuable resource for anyone looking to stay ahead of the curve in the fast-paced world of technology. "),n("br"),n("br"),r(" Connecting people over a purpose to collaborate will always lead to growth. This started making sense when Kartik started volunteering as a Community Leader. He's a young enthusiast who believes in creating impacts on students and developers under the aegis of tech. "),n("br"),n("br"),r(" Having something on your mind? He's just a ping away.")],-1);function Le(a,c,s,m,g,h){return l(),f(k,{fluid:""},{default:t(()=>[e(b,{class:"py-10 px-8 rounded-lg mx-auto border","max-width":"83%",outlined:"",rounded:"",elevation:"2",style:{"background-color":"#f2f2f0"}},{default:t(()=>[e(u,null,{default:t(()=>[e(J,{class:"py-0 pl-3 pb-2",style:{"font-size":"1.8rem"}},{default:t(()=>[r(" About ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{cols:"12",sm:"12",md:"12",lg:"4",class:"d-flex align-center"},{default:t(()=>[e(x,{class:"rounded-lg",src:Ve,lazy:""})]),_:1}),e(i,{class:"align-content-center",cols:"12",sm:"12",md:"12",lg:"8"},{default:t(()=>[e(_,{class:"pl-0 ml-0 text-justify",style:{"text-align":"justify","font-size":"1.1rem"}},{default:t(()=>[Se]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",md:"12",lg:"7"},{default:t(()=>[e(_,{class:"pl-0 ml-0 text-justify",style:{"text-align":"justify","font-size":"1.1rem"}},{default:t(()=>[$e]),_:1}),e(R,{class:"pl-0 py-0"},{default:t(()=>[e(S,{variant:"flat",color:"primary",class:"mr-2 white--text px-2 px-sm-5 px-md-5 px-lg-5",to:"workspace"},{default:t(()=>[e(Y,{icon:"mdi-briefcase",start:""}),r(" See Work")]),_:1}),e(S,{variant:"outlined",color:"primary",class:"px-2 px-sm-5 px-md-5 px-lg-5",href:"mailto:"+s.userData.email,"append-icon":"mdi-open-in-new"},{default:t(()=>[r("Contact ")]),_:1},8,["href"])]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",md:"12",lg:"5",class:"d-flex align-center"},{default:t(()=>[e(x,{class:"rounded-lg",src:Ce,lazy:""})]),_:1})]),_:1})]),_:1})]),_:1})}const Ie=w(ze,[["render",Le]]),De={props:["userData","techStack","education","experiences","certificates"]},je=a=>(Z("data-v-24977d8e"),a=a(),ee(),a),Pe=je(()=>n("p",{class:"py-4",style:{"font-size":"1.8rem"}},"Experience",-1));function Te(a,c,s,m,g,h){const o=Ie,p=we,L=pe,I=ce;return l(),f(k,{fluid:""},{default:t(()=>[e(u,{class:"half-bg"},{default:t(()=>[e(i,{class:"my-5 mx-auto",cols:"12",md:"12",sm:"12",lg:"12",xl:"12"},{default:t(()=>[e(o,{userData:s.userData},null,8,["userData"])]),_:1})]),_:1}),e(k,{fluid:""},{default:t(()=>[e(u,{class:"mx-auto",style:{"max-width":"80%"}},{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[Pe]),_:1}),(l(!0),y($,null,P(s.experiences,(D,j)=>(l(),f(i,{cols:"12",sm:"6",md:"6",lg:"4",key:j},{default:t(()=>[e(p,{experience:D},null,8,["experience"])]),_:2},1024))),128))]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{class:"my-5 mx-auto",cols:"12",md:"12",sm:"12",lg:"10",xl:"10"},{default:t(()=>[e(L,{techStack:s.techStack},null,8,["techStack"])]),_:1}),e(i,{class:"mx-auto",cols:"12",md:"12",sm:"12",lg:"10",xl:"10"},{default:t(()=>[e(I,{certificates:s.certificates},null,8,["certificates"])]),_:1})]),_:1})]),_:1})}const Re=w(De,[["render",Te],["__scopeId","data-v-24977d8e"]]);export{Re as default};
