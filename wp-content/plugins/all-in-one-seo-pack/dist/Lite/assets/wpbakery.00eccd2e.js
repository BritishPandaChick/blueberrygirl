import"./js/_plugin-vue_export-helper.5bcc150c.js";import{g as k,o as s,c,a as y,z as u,E as h,u as n,D as _,t as L,b as m,P as C,O as M,k as g,l as R,L as T,h as F}from"./js/vue.runtime.esm-bundler.308f2021.js";import{c as V,b as U}from"./js/vue-router.0a68dbda.js";import{e as P,l as x}from"./js/index.a56340a2.js";import{l as D}from"./js/index.fadde3df.js";import{b as f,s as j,l as A,F as q}from"./js/links.bbde6535.js";import{h as O,m as W,T as N}from"./js/postSlug.1266810a.js";import{d as w,a as z}from"./js/Caret.baea7fe0.js";import{i as I}from"./js/isEqual.7d26c821.js";import{_ as G}from"./js/default-i18n.3881921e.js";import{l as H}from"./js/index.0b123ab1.js";import{M as Q}from"./js/Modal.e6e927e4.js";import{_ as J}from"./js/ScoreButton.1a1b0390.js";import{S as b}from"./js/LogoGear.bbf4bd71.js";import"./js/translations.6e7b2383.js";import"./js/constants.b87c371e.js";import"./js/isArrayLikeObject.965a2149.js";import"./js/metabox.300d9f84.js";import"./js/cleanForSlug.b75b0ef4.js";import"./js/toString.1bb388e8.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/get.6473921f.js";import"./js/_baseIsEqual.6d74c894.js";import"./js/_getAllKeys.b784ed71.js";import"./js/_getTag.bac3dff1.js";import"./js/App.286c0ebd.js";/* empty css                */import"./js/allowed.3b6b8de0.js";import"./js/params.f0608262.js";import"./js/JsonValues.870a4901.js";import"./js/SettingsRow.42f6374c.js";import"./js/Row.16199427.js";import"./js/Checkbox.30500119.js";import"./js/Checkmark.85e83e8c.js";import"./js/ScrollAndHighlight.f8c86cd5.js";import"./js/Tabs.45282823.js";import"./js/TruSeoScore.b474bf15.js";import"./js/Ellipse.bae3329f.js";import"./js/Information.5dd0922d.js";import"./js/Slide.22dc72dc.js";import"./js/Index.15a8ee01.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tags.55c98ce0.js";import"./js/tags.8c7eead3.js";import"./js/regex.ebd490ab.js";import"./js/debounce.f818e6b5.js";import"./js/toNumber.94721d7b.js";import"./js/toFinite.13ea1aae.js";import"./js/Tooltip.432f1167.js";import"./js/Plus.43cee912.js";import"./js/Eye.8d5ab22f.js";import"./js/RadioToggle.3df41deb.js";import"./js/GoogleSearchPreview.d5453823.js";import"./js/HtmlTagsEditor.3f6db819.js";import"./js/Editor.678bc800.js";import"./js/UnfilteredHtml.825fcb93.js";import"./js/ProBadge.bf5a3f4e.js";import"./js/popup.6fe74774.js";import"./js/license.5bf5af6e.js";import"./js/upperFirst.56425447.js";import"./js/addons.c8e26c5a.js";import"./js/Blur.d6d433b6.js";import"./js/Index.6f50ed01.js";import"./js/WpTable.985eab8d.js";import"./js/Table.2b7bc4de.js";import"./js/numbers.c7cb4085.js";import"./js/PostTypes.e5795f0f.js";import"./js/InternalOutbound.035f267a.js";import"./js/RequiredPlans.8a901e64.js";import"./js/Image.eb8a789e.js";import"./js/FacebookPreview.170e654c.js";import"./js/Img.ae6a5b51.js";import"./js/Profile.7a6b8af7.js";import"./js/ImageUploader.a66d1cb3.js";import"./js/TwitterPreview.76929bea.js";import"./js/Book.e5451e3a.js";import"./js/Settings.7d0737c7.js";import"./js/Build.c4a01093.js";import"./js/Redirects.b55d98a4.js";import"./js/Index.9253ae87.js";import"./js/strings.811ec52c.js";import"./js/isString.f3256d10.js";import"./js/External.94230600.js";import"./js/Exclamation.a152bf23.js";import"./js/Gear.0eb3cd0c.js";import"./js/Card.3bd391bc.js";import"./js/Upsell.2c04edf9.js";let S={};const K=()=>{const o={...S},t=O();I(o,t)||(S=t,W())},X=()=>{const o=f();o.saveCurrentPost(o.currentPost).then(()=>{j().fetch()})},Y=()=>{var e;const{vc:o,vc_mode:t}=window;return t==="admin_frontend_editor"?o.builder.getContent():((e=document.querySelector("#content"))==null?void 0:e.value)||""},l=async()=>{f().processContent({content:Y()}).finally(()=>{K()})},Z=({vc:o})=>{l(),o.events.on("shortcodeView:updated",()=>{w(l,1e3)}),o.shortcodes.on("sync",()=>{w(l,1e3)}),["#vc_button-update","#vc_button-save-draft","#vc_button-save-as-pending"].forEach(t=>{var e;(e=document.querySelector(t))==null||e.addEventListener("click",X)})};const tt={class:"aioseo-limit-modified-date-wpbakery"},ot={key:0,class:"aioseo-limit-modified-date-wpbakery__options"},et=["onClick"],it={__name:"App",props:{buttonTitle:String,buttonEvent:String},setup(o){const t=o,e=k(!1),a=()=>{e.value=!1,P.emit(t.buttonEvent)};return(r,p)=>(s(),c("div",tt,[y("div",{class:"aioseo-limit-modified-date-wpbakery__toggle",onClick:p[0]||(p[0]=_(d=>e.value=!e.value,["prevent"]))},[u(n(z),{class:h({rotated:e.value})},null,8,["class"])]),e.value?(s(),c("div",ot,[y("div",{class:"aioseo-limit-modified-date-wpbakery__option",onClick:_(a,["prevent"])},L(t.buttonTitle),9,et)])):m("",!0)]))}},i={id:"aioseo-limit-modified-date-wpbakery",param:"aioseo_limit_modified_date",event:"save-limit-modified-date",title:G("Update (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},v=()=>document.getElementById("vc_button-update"),rt=()=>{if(document.getElementById(i.id))return;const o=document.createElement("div");o.id=i.id,v().insertAdjacentElement("afterend",o);let t=C({...it,name:"Standalone/WPBakery/LimitModifiedDate"},{buttonTitle:i.title,buttonEvent:i.event});t=x(t),t=D(t),t=H(t),A(t),t.mount(`#${i.id}`)},nt=o=>{o(document).on("ajaxSend",function(t,e,a){const r=new URLSearchParams(a.data);r.get("action")!=="vc_save"||!i.flag||(r.set(i.param,!0),a.data=r.toString())}),P.on(i.event,()=>{i.flag=!0,v().click(),setTimeout(()=>{i.flag=!1})})},st=({jQuery:o})=>{v()&&(rt(),nt(o))};const at={class:"aioseo-wpbakery-integration"},pt={key:2,class:"aioseo-gear-icon"},E={__name:"App",props:{isFrontendEditor:Boolean},setup(o){const t=k(!1),{currentPost:e}=q(f());return(a,r)=>{const p=M("scroll-to");return s(),c("div",at,[o.isFrontendEditor?(s(),g(n(J),{key:0,score:n(e).seo_score,class:h([t.value?"aioseo-score-button--active":""]),onClick:r[0]||(r[0]=_(d=>t.value=!t.value,["prevent"]))},{icon:R(()=>[u(n(b))]),_:1},8,["score","class"])):m("",!0),o.isFrontendEditor?(s(),g(Q,{key:1,score:n(e).seo_score,"is-open":t.value,"onUpdate:isOpen":r[1]||(r[1]=d=>t.value=d)},null,8,["score","is-open"])):m("",!0),o.isFrontendEditor?m("",!0):T((s(),c("div",pt,[u(n(b))])),[[p,{el:"#aioseo-settings",offset:-150}]])])}}},{vc:mt}=window,ct=()=>{const{vc_mode:o}=window,t=V({history:U(),routes:[{path:"/",component:E}]});let e=C({name:"Standalone/WPBakery",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>F(E)},{isFrontendEditor:o==="admin_frontend_editor"});e=x(e),e=D(e),e.use(t),t.app=e,A(e,t),e.config.globalProperties.$truSeo=new N,e.mount("#aioseo-wpbakery")},B=()=>{ct(),Z(window),st(window)};let $=!1;mt.events.on("app.render",()=>{B(),$=!0});window.addEventListener("load",()=>{$||B()});
