import{m as v,d as N}from"./vuex.esm-bundler.8589b2dd.js";import{d as D,c as z}from"./WpTable.4d19dc46.js";import"./default-i18n.ab92175e.js";import"./constants.7044c894.js";import{_ as B,r as l,o as n,c as m,d as a,w as o,h,e as c,t as r,a as d,f as g,F as M,i as x,g as O,n as w}from"./_plugin-vue_export-helper.2d9794a3.js";import"./index.02a5ed9a.js";import"./SaveChanges.bc66cd69.js";import{C as R}from"./Card.24f1a534.js";import{B as I}from"./Checkbox.b4e8b6fc.js";import{C as E}from"./index.fd0fcee8.js";import{C as H}from"./Index.1fd8fc42.js";import{C}from"./SettingsRow.09a16661.js";import{G as Y,a as j}from"./Row.5e452de4.js";import{S as F}from"./Caret.42a820e0.js";import{S as G}from"./Checkmark.c5326878.js";import{C as P}from"./Blur.a27209d0.js";import{C as q}from"./Index.a5b2ee90.js";import"./helpers.de7566d0.js";import"./RequiresUpdate.52f5acf2.js";import"./postContent.bb42e0a8.js";import"./cleanForSlug.62b08993.js";import"./isArrayLikeObject.c492f682.js";import"./html.14f2a8b9.js";import"./_commonjsHelpers.f84db168.js";import"./Tooltip.ae0bcccb.js";import"./Slide.cd756e61.js";const J={components:{BaseCheckbox:I,CoreAlert:E,CoreModal:H,CoreSettingsRow:C,GridColumn:Y,GridRow:j,SvgClose:F},mixins:[D],props:{site:Object},data(){return{showSuccess:!1,showModal:!1,loading:!1,options:{},strings:{selectSettings:this.$t.__("Select Settings",this.$td),selectSettingsToReset:this.$t.__("Select settings that you would like to reset:",this.$td),resetSelectedSettings:this.$t.__("Reset Selected Settings to Default",this.$td),resetSuccess:this.$t.__("Your settings have been reset successfully!",this.$td),areYouSureReset:this.$t.__("Are you sure you want to reset the selected settings to default?",this.$td),actionCannotBeUndone:this.$t.sprintf(this.$t.__("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",this.$td),"<strong>","</strong>"),yesIHaveBackup:this.$t.__("Yes, I have a backup and want to reset the settings",this.$td),noBackup:this.$t.__("No, I need to make a backup",this.$td),allSettings:this.$t.sprintf(this.$t.__("All %1$s Settings",this.$td),"AIOSEO")}}},computed:{canReset(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const e=[];return Object.keys(this.options).forEach(s=>{e.push(this.options[s])}),!e.some(s=>s)}},methods:{...v(["resetSettings"]),processResetSettings(){const e=[];this.options.all?this.toolsSettings.filter(s=>s.value!=="all").forEach(s=>{e.push(s.value)}):Object.keys(this.options).forEach(s=>{this.options[s]&&e.push(s)}),this.loading=!0,this.resetSettings({payload:e,siteId:this.site?this.site.blog_id:null}).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})}}},K={class:"aioseo-core-reset-settings"},Q={class:"reset-settings"},W=g("br",null,null,-1),X=g("br",null,null,-1),Z={class:"aioseo-modal-body"},ee=["innerHTML"];function te(e,s,$,y,t,i){const b=l("core-alert"),u=l("base-checkbox"),f=l("grid-column"),L=l("grid-row"),p=l("base-button"),k=l("core-settings-row"),S=l("svg-close"),A=l("core-modal");return n(),m("div",K,[a(k,{name:t.strings.selectSettings,class:"no-border"},{content:o(()=>[t.showSuccess?(n(),h(b,{key:0,class:"reset-success",type:"green"},{default:o(()=>[c(r(t.strings.resetSuccess),1)]),_:1})):d("",!0),g("div",Q,[c(r(t.strings.selectSettingsToReset)+" ",1),W,X,a(L,{class:"settings"},{default:o(()=>[a(f,null,{default:o(()=>[a(u,{size:"medium",modelValue:t.options.all,"onUpdate:modelValue":s[0]||(s[0]=_=>t.options.all=_),disabled:e.$aioseo.data.isNetworkAdmin&&!$.site},{default:o(()=>[c(r(t.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(n(!0),m(M,null,x(e.toolsSettings,(_,U)=>(n(),h(f,{key:U,xl:"3",md:"4",sm:"6"},{default:o(()=>[t.options.all?d("",!0):(n(),h(u,{key:0,size:"medium",modelValue:t.options[_.value],"onUpdate:modelValue":V=>t.options[_.value]=V,disabled:e.$aioseo.data.isNetworkAdmin&&!$.site},{default:o(()=>[c(r(_.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),_.value!=="all"&&t.options.all?(n(),h(u,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[c(r(_.label),1)]),_:2},1024)):d("",!0)]),_:2},1024))),128))]),_:1}),a(p,{type:"gray",size:"medium",onClick:s[1]||(s[1]=_=>t.showModal=!0),disabled:i.canReset},{default:o(()=>[c(r(t.strings.resetSelectedSettings),1)]),_:1},8,["disabled"])])]),_:1},8,["name"]),t.showModal?(n(),h(A,{key:0,"no-header":"",onClose:s[5]||(s[5]=_=>t.showModal=!1)},{body:o(()=>[g("div",Z,[g("button",{class:"close",onClick:s[3]||(s[3]=O(_=>t.showModal=!1,["stop"]))},[a(S,{onClick:s[2]||(s[2]=_=>t.showModal=!1)})]),g("h3",null,r(t.strings.areYouSureReset),1),g("div",{class:"reset-description",innerHTML:t.strings.actionCannotBeUndone},null,8,ee),a(p,{type:"blue",size:"medium",onClick:i.processResetSettings,loading:t.loading},{default:o(()=>[c(r(t.strings.yesIHaveBackup),1)]),_:1},8,["onClick","loading"]),a(p,{type:"gray",size:"medium",onClick:s[4]||(s[4]=_=>t.showModal=!1)},{default:o(()=>[c(r(t.strings.noBackup),1)]),_:1})])]),_:1})):d("",!0)])}const T=B(J,[["render",te]]);const se={mixins:[z],components:{CoreCard:R,CoreResetSettings:T,CoreSettingsRow:C,SvgCheckmark:G},data(){return{site:null,selectedSite:null,clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},loadingLog:null,strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td)}}},watch:{site(e){this.selectedSite=this.$aioseo.data.network.sites.sites.find(s=>this.getUniqueSiteId(s)===e.value)}},computed:{canReset(){const e=[];return Object.keys(this.options).forEach(s=>{e.push(this.options[s])}),!e.some(s=>s)},showLogs(){return!this.$aioseo.data.isNetworkAdmin&&(this.showBadBotBlockerLogs||this.$aioseo.data.logSizes.redirectLogs||this.$aioseo.data.logSizes.logs404)},showBadBotBlockerLogs(){return window.aioseo.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")},sites(){return this.getSites.filter(e=>!e.parentDomain).map(e=>({value:this.getUniqueSiteId(e),label:`${e.domain}${e.path}`}))}},methods:{...v(["clearLog"]),getSizeClass(e){let s="green";return 262144e3<e?s="orange":1073741274<e&&(s="red"),s},processClearLog(e){this.loadingLog=e,this.clearLog(e).then(()=>{this.loadingLog=null,this.clearedLogs[e]=!0})},disabledLog(e){return!this.$aioseo.data.logSizes[e].original||this.clearedLogs[e]}}},oe={class:"aioseo-tools-database-tools"},ie={key:0},ne={key:1},ae={class:"log-size"},le={key:0},re={key:1},de={class:"log-size"},ce={key:0},ge={key:1},ue={class:"log-size"};function _e(e,s,$,y,t,i){const b=l("base-select"),u=l("core-settings-row"),f=l("core-reset-settings"),L=l("core-card"),p=l("svg-checkmark"),k=l("base-button");return n(),m("div",oe,[a(L,{slug:"databaseTools","header-text":t.strings.resetRestoreSettings},{default:o(()=>[e.$aioseo.data.isNetworkAdmin?(n(),h(u,{key:0,name:t.strings.selectSite},{content:o(()=>[a(b,{size:"medium",modelValue:t.site,"onUpdate:modelValue":s[0]||(s[0]=S=>t.site=S),options:i.sites},null,8,["modelValue","options"])]),_:1},8,["name"])):d("",!0),a(f,{site:t.selectedSite},null,8,["site"])]),_:1},8,["header-text"]),i.showLogs?(n(),h(L,{key:0,slug:"databaseToolsLogs","header-text":t.strings.logs},{tooltip:o(()=>[c(r(t.strings.logsTooltip),1)]),default:o(()=>[e.$aioseo.data.logSizes.logs404?(n(),h(u,{key:0,name:t.strings.logs404,align:""},{content:o(()=>[a(k,{class:"clear-log",type:"gray",size:"medium",loading:t.loadingLog==="logs404",disabled:i.disabledLog("logs404"),onClick:s[1]||(s[1]=S=>i.processClearLog("logs404"))},{default:o(()=>[i.disabledLog("logs404")?(n(),m("span",ie,[a(p),c(" "+r(t.strings.cleared),1)])):d("",!0),i.disabledLog("logs404")?d("",!0):(n(),m("span",ne,r(t.strings.clear404Logs),1))]),_:1},8,["loading","disabled"]),g("div",ae,[g("span",{class:w(["size-dot",i.getSizeClass(e.$aioseo.data.logSizes.logs404.original)])},null,2),c(" "+r(e.$aioseo.data.logSizes.logs404.readable),1)])]),_:1},8,["name"])):d("",!0),e.$aioseo.data.logSizes.redirectLogs?(n(),h(u,{key:1,name:t.strings.redirectLogs,align:""},{content:o(()=>[a(k,{class:"clear-log",type:"gray",size:"medium",loading:t.loadingLog==="redirectLogs",disabled:i.disabledLog("redirectLogs"),onClick:s[2]||(s[2]=S=>i.processClearLog("redirectLogs"))},{default:o(()=>[i.disabledLog("redirectLogs")?(n(),m("span",le,[a(p),c(" "+r(t.strings.cleared),1)])):d("",!0),i.disabledLog("redirectLogs")?d("",!0):(n(),m("span",re,r(t.strings.clearRedirectLogs),1))]),_:1},8,["loading","disabled"]),g("div",de,[g("span",{class:w(["size-dot",i.getSizeClass(e.$aioseo.data.logSizes.redirectLogs.original)])},null,2),c(" "+r(e.$aioseo.data.logSizes.redirectLogs.readable),1)])]),_:1},8,["name"])):d("",!0),i.showBadBotBlockerLogs?(n(),h(u,{key:2,name:t.strings.badBotBlockerLogs,align:""},{content:o(()=>[a(k,{class:"clear-log",type:"gray",size:"medium",loading:t.loadingLog==="badBotBlockerLog",disabled:i.disabledLog("badBotBlockerLog"),onClick:s[3]||(s[3]=S=>i.processClearLog("badBotBlockerLog"))},{default:o(()=>[i.disabledLog("badBotBlockerLog")?(n(),m("span",ce,[a(p),c(" "+r(t.strings.cleared),1)])):d("",!0),i.disabledLog("badBotBlockerLog")?d("",!0):(n(),m("span",ge,r(t.strings.clearBadBotBlockerLogs),1))]),_:1},8,["loading","disabled"]),g("div",ue,[g("span",{class:w(["size-dot",i.getSizeClass(e.$aioseo.data.logSizes.badBotBlockerLog.original)])},null,2),c(" "+r(e.$aioseo.data.logSizes.badBotBlockerLog.readable),1)])]),_:1},8,["name"])):d("",!0)]),_:1},8,["header-text"])):d("",!0)])}const he=B(se,[["render",_e]]);const me={mixins:[z],components:{CoreBlur:P,CoreCard:R,CoreResetSettings:T,CoreSettingsRow:C,Cta:q},data(){return{strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td),ctaHeader:this.$t.sprintf(this.$t.__("This feature is not available in your current plan.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade Your Plan and Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},pe={class:"aioseo-tools-database-tools"};function be(e,s,$,y,t,i){const b=l("base-select"),u=l("core-settings-row"),f=l("core-reset-settings"),L=l("core-blur"),p=l("cta"),k=l("core-card");return n(),m("div",pe,[a(k,{slug:"databaseTools","header-text":t.strings.resetRestoreSettings},{default:o(()=>[a(L,null,{default:o(()=>[a(u,{name:t.strings.selectSite},{content:o(()=>[a(b,{size:"medium",modelValue:{value:"",label:""},options:[]})]),_:1},8,["name"]),a(f)]),_:1}),a(p,{"cta-link":e.$links.getPricingUrl("network-tools","database-tools"),"button-text":t.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("network-tools","database-tools","home")},{"header-text":o(()=>[c(r(t.strings.ctaHeader),1)]),description:o(()=>[c(r(t.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])]),_:1},8,["header-text"])])}const ke=B(me,[["render",be]]),fe={components:{DatabaseTools:he,LiteDatabaseTools:ke},computed:{...N(["isUnlicensed"])}};function Le(e,s,$,y,t,i){const b=l("database-tools",!0),u=l("lite-database-tools");return n(),m("div",null,[!e.$aioseo.data.isNetworkAdmin||!e.isUnlicensed&&e.$license.hasCoreFeature(e.$aioseo,"tools","network-tools-database")?(n(),h(b,{key:0})):d("",!0),e.$aioseo.data.isNetworkAdmin&&(e.isUnlicensed||!e.$license.hasCoreFeature(e.$aioseo,"tools","network-tools-database"))?(n(),h(u,{key:1})):d("",!0)])}const qe=B(fe,[["render",Le]]);export{qe as default};
