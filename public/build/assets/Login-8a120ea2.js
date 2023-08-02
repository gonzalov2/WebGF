import{v as w,e as d,b as o,u as s,w as m,F as b,o as i,G as h,t as x,f as u,a as t,c as k,g as c,j as y,n as v,i as V}from"./app-5f32efd2.js";import{A as $}from"./AuthenticationCard-f98479e3.js";import{_ as B}from"./AuthenticationCardLogo-bfb1ded7.js";import{_ as C}from"./Checkbox-3161bd09.js";import{_ as f,a as p}from"./TextInput-05e9587b.js";import{_}from"./InputLabel-4a6f844a.js";import{_ as F}from"./PrimaryButton-2cd9078f.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],q={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},H={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,a)=>(i(),d(b,null,[o(s(h),{title:"Log in"}),o($,null,{logo:m(()=>[o(B)]),default:m(()=>[l.status?(i(),d("div",N,x(l.status),1)):u("",!0),t("form",{onSubmit:V(g,["prevent"])},[t("div",null,[o(_,{for:"email",value:"Email"}),o(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",q,[o(_,{for:"password",value:"Password"}),o(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",L,[t("label",P,[o(C,{checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),t("div",U,[l.canResetPassword?(i(),k(s(y),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),o(F,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],40,S)]),_:1})],64))}};export{H as default};
