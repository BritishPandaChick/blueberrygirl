import{m as y,u as h,l as E}from"./index.ba51ghj9.js";import{R as A,a as T,G as U,b as v}from"./constants.hcfrsngk.js";import{C as w}from"./Index.j04s6syt.js";import{C as P}from"./Blur.mu93d3e2.js";import{C as B}from"./Card.0q0mr1wq.js";import{C as D}from"./Table.bzjzsap0.js";import"./translations.b896ab1m.js";import{_ as b}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as e,a as L}from"./default-i18n.hohxoesu.js";import{v as i,o as d,c as x,k as C,l,C as s,b as R,x as g,t as f,G}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{C as I}from"./Index.jq0lth54.js";import{R as M}from"./RequiredPlans.fcb8z72b.js";const o="all-in-one-seo-pack",N={components:{CoreAddRedirection:w,CoreBlur:P,CoreCard:B,CoreWpTable:D},props:{noCoreCard:Boolean},data(){return{REDIRECT_TYPES:A,REDIRECT_QUERY_PARAMS:T,strings:{addNewRedirection:e("Add New Redirection",o),searchUrls:e("Search URLs",o)},bulkOptions:[{label:"",value:""}]}},computed:{columns(){return[{slug:"source_url",label:e("Source URL",o)},{slug:"target_url",label:e("Target URL",o)},{slug:"hits",label:e("Hits",o),width:"97px"},{slug:"type",label:e("Type",o),width:"100px"},{slug:"group",label:e("Group",o),width:"150px"},{slug:"enabled",label:U.enabled,width:"80px"}]},additionalFilters(){return[{label:e("Filter by Group",o),name:"group",options:[{label:e("All Groups",o),value:"all"}].concat(v)}]}}},q={class:"aioseo-redirects-blur"};function F(m,S,t,a,r,p){const u=i("core-add-redirection"),c=i("core-blur"),_=i("core-card"),k=i("core-wp-table");return d(),x("div",q,[t.noCoreCard?R("",!0):(d(),C(_,{key:0,slug:"addNewRedirection","header-text":r.strings.addNewRedirection,noSlide:!0},{default:l(()=>[s(c,null,{default:l(()=>[s(u,{type:r.REDIRECT_TYPES[0].value,query:r.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})]),_:1},8,["header-text"])),t.noCoreCard?(d(),C(c,{key:1},{default:l(()=>[s(u,{type:r.REDIRECT_TYPES[0].value,query:r.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})):R("",!0),s(c,null,{default:l(()=>[s(k,{filters:[],totals:{total:0,pages:0,page:1},columns:p.columns,rows:[],"search-label":r.strings.searchUrls,"bulk-options":r.bulkOptions,"additional-filters":p.additionalFilters},null,8,["columns","search-label","bulk-options","additional-filters"])]),_:1})])}const O=b(N,[["render",F]]),n="all-in-one-seo-pack",Y={setup(){return{licenseStore:y(),rootStore:h(),links:E}},components:{Blur:O,Cta:I,RequiredPlans:M},props:{noCoreCard:Boolean,parentComponentContext:String},data(){return{strings:{ctaButtonText:e("Unlock Redirects",n),ctaHeader:L(e("Redirects is a %1$s Feature",n),"PRO"),serverRedirects:e("Fast Server Redirects",n),automaticRedirects:e("Automatic Redirects",n),redirectMonitoring:e("Redirect Monitoring",n),monitoring404:e("404 Monitoring",n),fullSiteRedirects:e("Full Site Redirects",n),siteAliases:e("Site Aliases",n),redirectsDescription:e("Our Redirection Manager lets you easily create and manage redirects for broken links to avoid confusing search engines and users and prevents losing backlinks.",n)}}}};function H(m,S,t,a,r,p){const u=i("blur"),c=i("required-plans"),_=i("cta");return d(),x("div",{class:G({"aioseo-redirects":!0,"core-card":!t.noCoreCard})},[s(u,{noCoreCard:t.noCoreCard},null,8,["noCoreCard"]),s(_,{"cta-link":a.links.getPricingUrl("redirects","redirects-upsell",t.parentComponentContext?t.parentComponentContext:null),"button-text":r.strings.ctaButtonText,"learn-more-link":a.links.getUpsellUrl("redirects",t.parentComponentContext?t.parentComponentContext:null,a.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":[r.strings.serverRedirects,r.strings.automaticRedirects,r.strings.redirectMonitoring,r.strings.monitoring404,r.strings.fullSiteRedirects,r.strings.siteAliases],"hide-bonus":!a.licenseStore.isUnlicensed},{"header-text":l(()=>[g(f(r.strings.ctaHeader),1)]),description:l(()=>[s(c,{addon:"aioseo-redirects"}),g(" "+f(r.strings.redirectsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])],2)}const te=b(Y,[["render",H]]);export{te as L};