import{a as b}from"./links.4c32e7b9.js";import{J as v}from"./JsonValues.870a4901.js";import{B as O,S as k}from"./Caret.da0d1a59.js";import{b as C}from"./index.df267eaa.js";import{S as $}from"./AddPlus.330aff9f.js";import{S}from"./External.b6186288.js";import{r as c,o as T,c as B,d as a,w as r,D as _,t as o,a as n,I as d}from"./vue.runtime.esm-bundler.ba5c08e0.js";import{_ as V}from"./_plugin-vue_export-helper.80405f63.js";const L={setup(){return{optionsStore:b()}},components:{BaseButton:O,BaseSelect:C,SvgAddPlus:$,SvgClose:k,SvgExternal:S},mixins:[v],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{excludeOptions:[],strings:{typeToSearch:this.$t.__("Type to search...",this.$td),noOptionsPosts:this.$t.__("Begin typing a post ID, title or slug to search...",this.$td),noOptionsTerms:this.$t.__("Begin typing a term ID or name to search...",this.$td),noResult:this.$t.__("No results found for your search. Try again!",this.$td),clear:this.$t.__("Clear",this.$td),id:this.$t.__("ID",this.$td),type:this.$t.__("Type",this.$td)}}},computed:{optionName:{get(){return this.type==="posts"?this.options.excludePosts:this.options.excludeTerms},set(e){if(this.type==="posts"){this.options.excludePosts=e;return}this.options.excludeTerms=e}},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{processGetObjects(e){return this.optionsStore.getObjects({query:e,type:this.type}).then(s=>{this.excludeOptions=s.body.objects})},getOptionTitle(e,s){e=e.replace(/<\/?[^>]+(>|$)/g,""),s=s.replace(/<\/?[^>]+(>|$)/g,"");const p=new RegExp(`(${s})`,"gi");return e.replace(p,'<span class="search-term">$1</span>')},searchableLabel({value:e,label:s,slug:p}){return`${e} ${s} ${p}`}}},N={class:"aioseo-exclude-posts"},P={class:"option"},j=["innerHTML"],w={class:"option-details"},D=["href","onClick"],E={class:"multiselect__tag"},R={class:"multiselect__tag-value"},A=["onClick"];function I(e,s,p,J,l,i){const h=c("svg-add-plus"),m=c("base-button"),g=c("svg-external"),y=c("svg-close"),x=c("base-select");return T(),B("div",N,[a(x,{options:l.excludeOptions,"ajax-search":i.processGetObjects,customLabel:i.searchableLabel,size:"medium",multiple:"",modelValue:e.getJsonValues(i.optionName),"onUpdate:modelValue":s[0]||(s[0]=t=>i.optionName=e.setJsonValues(t)),placeholder:l.strings.typeToSearch},{noOptions:r(()=>[_(o(i.noOptions),1)]),noResult:r(()=>[_(o(l.strings.noResult),1)]),caret:r(({toggle:t})=>[a(m,{class:"multiselect-toggle",style:{padding:"10px 13px",width:"40px",position:"absolute",height:"36px",right:"2px",top:"2px","text-align":"center",transition:"transform .2s ease"},type:"gray",onClick:t},{default:r(()=>[a(h,{style:{width:"14px",height:"14px",color:"black"}})]),_:2},1032,["onClick"])]),option:r(({option:t,search:u})=>[n("div",P,[n("div",{class:"option-title",innerHTML:i.getOptionTitle(t.label,u)},null,8,j),n("div",w,[n("span",null,o(l.strings.id)+": #"+o(t.value),1),n("span",null,o(l.strings.type)+": "+o(t.type),1)])]),n("a",{class:"option-permalink",href:t.link,target:"_blank",onClick:d(()=>{},["stop"])},[a(g)],8,D)]),tag:r(({option:t,remove:u})=>[n("div",E,[n("div",R,o(t.label)+" - #"+o(t.value),1),n("div",{class:"multiselect__tag-remove",onClick:d(f=>u(t),["stop"])},[a(y,{onClick:d(f=>u(t),["stop"])},null,8,["onClick"])],8,A)])]),_:1},8,["options","ajax-search","customLabel","modelValue","placeholder"]),a(m,{type:"gray",size:"medium",onClick:s[1]||(s[1]=t=>i.optionName=[])},{default:r(()=>[_(o(l.strings.clear),1)]),_:1})])}const Q=V(L,[["render",I]]);export{Q as C};
