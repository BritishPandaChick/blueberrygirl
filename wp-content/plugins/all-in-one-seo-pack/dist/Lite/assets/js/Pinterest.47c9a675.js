import{b as _}from"./links.d8ef3c22.js";import{r as n,c as d,d as s,w as p,o as f,a as e,g,t as c}from"./vue.runtime.esm-bundler.0bc3eabf.js";import{_ as h}from"./_plugin-vue_export-helper.8823f7c1.js";import"./index.888aa896.js";import"./Caret.11ded1aa.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.3881921e.js";import"./constants.d0e2b74f.js";import{M as y}from"./MetaTag.c9df5338.js";import"./TruSeoHighlighter.f41d03f0.js";/* empty css                                              */import{C as b}from"./Card.a96d9a32.js";import{C as w}from"./SettingsRow.aa479f88.js";import"./isArrayLikeObject.10b615a9.js";import"./postContent.5b10ed83.js";import"./cleanForSlug.a67f7e84.js";import"./_stringToArray.a4422725.js";import"./Ellipse.e18bc40f.js";import"./toFinite.c2274946.js";import"./Tooltip.eebec260.js";import"./Slide.c3dfb2b1.js";import"./Row.7b93a0cf.js";const k={setup(){return{optionsStore:_()}},components:{CoreCard:b,CoreSettingsRow:w},mixins:[y],data(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}}},C={class:"aioseo-pinterest"},P={class:"aioseo-settings-row aioseo-section-description"},V=["innerHTML"],T=e("br",null,null,-1),x=e("br",null,null,-1);function S(r,o,$,i,t,L){const l=n("base-input"),u=n("core-settings-row"),m=n("core-card");return f(),d("div",C,[s(m,{slug:"pinterest","header-text":t.strings.pinterest},{default:p(()=>[e("div",P,[g(c(t.strings.description)+" ",1),e("span",{innerHTML:r.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0)},null,8,V),T,x,e("strong",null,c(t.strings.skipStep),1)]),s(u,{name:t.strings.pinterestVerificationCode,align:""},{content:p(()=>[s(l,{size:"medium",modelValue:i.optionsStore.options.webmasterTools.pinterest,"onUpdate:modelValue":o[0]||(o[0]=a=>i.optionsStore.options.webmasterTools.pinterest=a),onBlur:o[1]||(o[1]=a=>r.maybeUpdateId("pinterest"))},null,8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const Z=h(k,[["render",S]]);export{Z as default};