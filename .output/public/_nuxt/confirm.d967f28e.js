import{_ as r}from"./Navigate.02ced215.js";import{_ as u}from"./AppButton.a0283b50.js";import{_ as h}from"./nuxt-link.e69ba546.js";import{u as f}from"./useContact.1a3a5cfd.js";import{n as x,u as N,o as g,c as b,b as c,a as s,t as a,q as t,w as v,F as k,p as w,e as I,_ as S}from"./entry.2ab7beed.js";import{I as y}from"./image.fd45a37f.js";const e=n=>(w("data-v-687e8ebd"),n=n(),I(),n),B={class:"contents"},C={class:"form-area"},A=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"お名前(保護者様)")],-1)),D={class:"input"},E=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"お名前(カタカナ)")],-1)),F={class:"input"},K=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"お名前(お子様)")],-1)),V={class:"input"},q=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"お名前(カタカナ)")],-1)),G={class:"input"},L=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"メールアドレス")],-1)),M={class:"input"},R=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"電話番号")],-1)),$={class:"input"},j=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"通われている学校")],-1)),z={class:"input"},H=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"学年")],-1)),J={class:"label-list"},O={class:"form-other-area"},P=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"学習状況や学習上の課題")],-1)),Q={class:"input"},T=e(()=>s("dt",{class:"item"},[s("span",{class:"title"},"資料請求に関して")],-1)),U={class:"input"},W={class:"button-area"},X=e(()=>s("p",{class:"text"},"戻る",-1)),Y=["src"],Z=x({__name:"confirm",setup(n){const{contactState:o,send:l}=f(),_=N(),i=async()=>{try{await l(),_.push("/completed")}catch{_.push("/details")}};return(ss,ts)=>{const d=r,p=u,m=h;return g(),b(k,null,[c(d,{from:"confirm"}),s("div",B,[s("dl",C,[A,s("dd",D,[s("p",null,a(t(o).parentName),1)]),E,s("dd",F,[s("p",null,a(t(o).parentNameKana),1)]),K,s("dd",V,[s("p",null,a(t(o).childName),1)]),q,s("dd",G,[s("p",null,a(t(o).childNameKana),1)]),L,s("dd",M,[s("p",null,a(t(o).email),1)]),R,s("dd",$,[s("p",null,a(t(o).phoneNumber),1)]),j,s("dd",z,[s("p",null,a(t(o).schoolName),1)]),H,s("dd",J,[s("p",null,a(t(o).grade)+" 年",1)])]),s("dl",O,[P,s("dd",Q,[s("p",null,a(t(o).messagAssignment),1)]),T,s("dd",U,[s("p",null,a(t(o).messageDocument),1)])])]),s("div",W,[c(p,{title:"送信する",onClick:i}),c(m,{class:"back",to:"/details"},{default:v(()=>[X,s("img",{class:"arrow",src:t(y).arrow},null,8,Y)]),_:1})])],64)}}});const ls=S(Z,[["__scopeId","data-v-687e8ebd"]]);export{ls as default};