var ot=Object.defineProperty;var H=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var U=(t,e,n)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))it.call(e,n)&&U(t,n,e[n]);if(H)for(var n of H(e))st.call(e,n)&&U(t,n,e[n]);return t};import{f as at,d as rt}from"./index.a4161053.js";import{V as y}from"./vueComponentNormalizer.87056a83.js";import{s as o}from"./index.d328c175.js";import{c as A,g as w}from"./cleanForSlug.e9a761bb.js";const $=()=>{if(!window.aioseo.currentPost||!window.aioseo.currentPost.postType)return"";const t=window.aioseo.currentPost.postType,e=window.aioseo.dynamicOptions.searchAppearance.postTypes[t].customFields;if(!e||!$t)return"";const n=()=>{x(500)},s=e.replace(/\n/g,",").split(","),i=[],c=["INPUT","TEXTAREA","IMG"],r=a=>{try{document.createDocumentFragment().querySelector(a)}catch{return!1}return!0};s.forEach(a=>{a=a.trim();const l=r(`#${a}`)?document.querySelector(`#${a}`):!1,M=document.querySelectorAll("#the-list > tr"),Y=document.querySelectorAll(".acf-field");c.includes(l==null?void 0:l.tagName)&&!(l!=null&&l.closest(".acf-field"))?i.push(l):M.forEach(u=>{const m=u.querySelector(`#${u.id}-key`),T=u.querySelector(`#${u.id}-value`);c.includes(T==null?void 0:T.tagName)&&s.includes(m==null?void 0:m.value)&&i.push(T)}),Y.forEach(u=>{if(a!==u.dataset.name)return"";let m=u.querySelector(`[id^="acf"][name$="[${u.dataset.key}]"]`);if(u.dataset.type==="image"&&(m=u.querySelector(".has-value img")),u.dataset.type==="gallery"&&(m=u.querySelector(".acf-gallery-attachment img")),!m||m.type&&m.type==="hidden")return"";if(u.dataset.type==="wysiwyg"){const T=window.setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&(window.clearInterval(T),window.tinyMCE.activeEditor.on("keyup",function(){!window.tinyMCE.activeEditor.acf||x(500)}))},50),K=function(et){et.forEach(nt=>{var O;if(nt.attributeName==="class"&&u.querySelector(".wp-editor-wrap.tmce-active")&&((O=window.tinyMCE)==null?void 0:O.activeEditor)){window.tinyMCE.activeEditor.on("keyup",function(){x(500)});const I=u.querySelector(`[name="acf[${u.dataset.key}]"]`);I&&(I.addEventListener("keyup",()=>{x(500)}),I.addEventListener("paste",()=>{x(500)}))}})},tt=new MutationObserver(K),D=u.querySelector(".wp-editor-wrap");D&&tt.observe(D,{attributes:!0})}c.includes(m.tagName)&&i.push(m)})});let d="";return i.forEach(a=>{let l="";if(c.includes(a.tagName)&&a.addEventListener("keyup",n),a.value&&(l=a.value),a.tagName==="IMG"&&a.src){const M=a.alt?`alt="${a.alt}"`:"";l=`<img src="${a.src}" ${M}>`}a.value&&a.type&&a.type==="url"&&(l=`<a href="${l}">${l}</a>`),l&&(d+=`${l} `)}),d},Dt=(t,e=["INPUT","TEXTAREA","IMG"])=>{if(!t)return"";const n=document.querySelector(`#${t}`),s=document.querySelectorAll("#the-list > tr"),i=document.querySelectorAll(".acf-field");let c="";return n&&e.indexOf(n.tagName)!==-1&&(n.closest(".acf-field")||(c=n.tagName==="IMG"?n.getAttribute("src"):n.value)),s.length&&s.forEach(r=>{const d=r.querySelector(`#${r.id}-key`),a=r.querySelector(`#${r.id}-value`);a&&e.indexOf(a.tagName)!==-1&&d.value===t&&(c=a.tagName==="IMG"?a.getAttribute("src"):a.value)}),i.length&&i.forEach(r=>{if(t!==r.dataset.name)return;let d;e.forEach(a=>{const l=a.toLowerCase();d=r.querySelector(`[data-key="${r.dataset.key}"] ${l}`)||d}),d&&(c=d.tagName==="IMG"?d.getAttribute("src"):d.value)}),c};!window.wp.blockEditor&&window.wp.blocks&&window.wp.oldEditor&&(window.wp.blockEditor=window.wp.editor);const g=()=>document.body.classList.contains("block-editor-page")&&window.wp.data&&ct(),f=()=>!!(document.querySelector("#wp-content-wrap.tmce-active")||document.querySelector("#wp-content-wrap.html-active")),S=()=>!!(document.body.classList.contains("elementor-editor-active")&&window.elementor),C=()=>!!(document.body.classList.contains("et_pb_pagebuilder_layout")&&window.ET_Builder),k=()=>!!(document.body.classList.contains("seedprod-builder")&&window.seedprod_data),Ot=()=>window.aioseo.data.isWooCommerceActive&&window.aioseo.currentPost&&window.aioseo.currentPost.postType==="product",ct=()=>{const t=window.wp;return typeof t!="undefined"&&typeof t.blocks!="undefined"&&typeof t.blockEditor!="undefined"},j=(t,e="div")=>{const n=document.createElement(e);return n.innerHTML=t.trim(),n},N=t=>(typeof t=="string"&&(t=j(t.replace(/[\t|\n]/gm,""))),t.textContent||t.innerText||""),B=t=>(typeof t=="string"&&(t=j(t)),t.querySelectorAll("img")),lt=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((n,s)=>{let i=s.innerHTML.trim();i=i.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(N(i)===""&&B(i).length===0)&&e.push(i)}),e.join(" ")):""},b=()=>({content:lt(),title:window.elementor.settings.page.model.get("post_title"),excerpt:window.elementor.settings.page.model.get("post_excerpt")||"",slug:A(window.elementor.settings.page.model.get("post_title")),permalink:window.elementor.config.document.urls.permalink||""}),ut=()=>{const t=w(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");let e=t.contentWindow.document.querySelectorAll("#et-fb-app");return 1<e.length&&(e=[...e].filter(n=>n.classList.contains("et-fb-root-ancestor"))),e[0]||document.createElement("div")},dt=()=>{const t=[],e=ut().querySelectorAll(".et_pb_section"),n=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(let s=0;s<e.length;s++){let i=e[s].innerHTML;i=e[s].innerHTML.replace(n,""),i=i.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(N(i)===""&&B(i).length===0)&&t.push(i)}return t.join(" ")},pt=()=>{const t=new URL(w(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},_=()=>({content:dt(),title:w(ETBuilderBackendDynamic,"postTitle",""),excerpt:w(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:w(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:pt()}),mt=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const n=document.createElement("img");t.settings.altTxt&&n.setAttribute("alt",t.settings.altTxt),t.settings.src&&n.setAttribute("src",t.settings.src),t.settings.noFollow&&n.setAttribute("rel","nofollow"),e=n,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=n.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(s=>{const i=document.createElement("li");i.innerHTML=s.txt,e.appendChild(i)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},gt=()=>{const t=[];return JSON.parse(JSON.stringify(w(seedprod_data,"settings.document.sections",[]))).forEach(n=>{n.rows.forEach(s=>{s.cols.forEach(i=>{i.blocks.forEach(c=>{const r=mt(c);!r||N(r)===""&&B(r).length===0||t.push(r.outerHTML)})})})}),t.join(" ")},ft=()=>{const t=w(seedprod_data,"home_url",""),e=w(seedprod_data,"settings.post_name","");return`${t}/${e}/`},q=()=>({content:gt(),title:w(seedprod_data,"settings.post_title",""),excerpt:"",slug:w(seedprod_data,"settings.post_name",""),permalink:ft()}),W=()=>{let t="";return S()&&(t=b().permalink),C()&&(t=_().permalink),k()&&(t=q().permalink),t},wt=()=>{if(o.state["live-tags"].liveTags.permalink)return o.state["live-tags"].liveTags.permalink;let t;if(f()){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return g()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t&&o.commit("live-tags/updatePermalink",t),t},P=()=>{let t;if(f()){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return g()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t},yt=async(t=!0)=>{let e=wt();const n=P();e!==n&&(e=n,e&&(o.commit("live-tags/updatePermalink",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:h({},o.state.currentPost),content:E(),slug:P()})))},R=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,z=()=>{let t="";return S()&&(t=b().content),C()&&(t=_().content),k()&&(t=q().content),t},G=t=>{var s;if(!t.includes('<!-- wp:block {"ref":'))return t;const e=(s=window.wp.blocks)==null?void 0:s.rawHandler({HTML:t});return at(e).forEach(i=>{var c,r,d;if(i.name==="core/block"){const a=window.wp.data.select("core").getEntityRecord("postType","wp_block",(c=i.attributes)==null?void 0:c.ref);(r=a==null?void 0:a.content)!=null&&r.raw&&(t=t.replace(`<!-- wp:block {"ref":${(d=i.attributes)==null?void 0:d.ref}} /-->`,a.content.raw))}}),t},V=()=>{if(o.state["live-tags"].liveTags.post_content)return o.state["live-tags"].liveTags.post_content;let t="";if(f())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=L();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=L())},50)}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().content,t=G(t)),t||(t=z()),$()&&(t=t+$()),t=t.replace(R,""),t&&o.commit("live-tags/updatePostContent",t),t},E=()=>{let t="";if(f())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=L();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=L())},50)}return g()&&(t=window.wp.data.select("core/editor").getEditedPostContent(),t=G(t)),t||(t=z()),$()&&(t=t+$()),t=t.replace(R,""),t},vt=async(t=!0)=>{let e=V();const n=E();e!==n&&(e=n,o.commit("live-tags/updatePostContent",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:h({},o.state.currentPost),content:E(),slug:P()}))},L=()=>{let t="";const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:"raw"});else{const n=document.querySelector("textarea#content");t=n?n.value:""}return t},Z=()=>{let t="";return S()&&(t=b().title),C()&&(t=_().title),k()&&(t=q().title),t},Et=()=>{if(o.state["live-tags"].liveTags.post_title)return o.state["live-tags"].liveTags.post_title;let t;if(f()){const e=document.querySelector("#post input#title");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().title),t||(t=Z()),t&&o.commit("live-tags/updatePostTitle",t),t},Tt=()=>{let t;if(f()){const e=document.querySelector("#post input#title");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=Z()),t},ht=async(t=!0)=>{let e=Et();const n=Tt();e!==n&&(e=n,o.commit("live-tags/updatePostTitle",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:h({},o.state.currentPost),content:E(),slug:P()}))},J=t=>{if(!t)return"";const e=[/\[.*?\]/g,/<\/?[a-z][^>]*?>/gi,/<!--[\s\S]*?-->/g,/(\r\n|\n|\r)/g];return t=t.replaceAll(/\n\n/g," "),e.forEach(n=>{t=t.replace(n,"")}),t.trim()},X=()=>{let t="";return S()&&(t=b().excerpt),C()&&(t=_().excerpt),k()&&(t=q().excerpt),t},Pt=()=>{if(o.state["live-tags"].liveTags.post_excerpt)return o.state["live-tags"].liveTags.post_excerpt;let t;if(f()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().excerpt),t||(t=X()),t||(t=J(V())),t&&o.commit("live-tags/updatePostExcerpt",t),t},St=()=>{let t;if(f()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=X()),t||(t=J(E())),t},xt=async(t=!0)=>{let e=Pt();const n=St();e!==n&&(e=n,o.commit("live-tags/updatePostExcerpt",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:h({},o.state.currentPost),content:E(),slug:P()}))},F=()=>{let t="";return S()&&(t=b().slug),C()&&(t=_().slug),k()&&(t=q().slug),t},At=()=>{if(o.state["live-tags"].permalinkSlug)return o.state["live-tags"].permalinkSlug;let t="";if(f()){const e=document.querySelector("#post_name");e&&(t=A(e.value))}return g()&&(t=window.wp.data.select("core/editor").getCurrentPost().slug),t||(t=F()),t&&o.commit("live-tags/updatePermalinkSlug",t),t},Ct=()=>{let t="";if(f()){const e=document.querySelector("#post_name");e&&(t=A(e.value))}if(g()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),S()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=A(e))}return t||(t=F()),t},kt=async(t=!0)=>{let e=At();const n=Ct();e!==n&&(e=n,o.commit("live-tags/updatePermalinkSlug",e),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id,postData:h({},o.state.currentPost),content:E(),slug:P()}))};let p="",v="";const bt=(t=!0)=>{var e;if(f()){const n=document.querySelectorAll('#post input[name="post_category[]"]:checked');n.length?(p!==n[0].parentNode.innerText&&(p=n[0].parentNode.innerText,o.commit("live-tags/updateTaxonomyTitle",p)),v=Array.from(n).map(s=>s.parentNode.innerText).join(", "),o.commit("live-tags/updateCategories",v)):p!==""&&(p=v="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",v))}if(g()){let n=[],s=[];if((e=window.aioseo.user.data.allcaps)!=null&&e.manageCategories&&(n=window.wp.data.select("core").getEntityRecords("taxonomy","category"),s=window.wp.data.select("core/editor").getEditedPostAttribute("categories")),s&&s.length&&n){const i=n.find(c=>c.id===s[0]);i&&p!==i.name&&(p=i.name,o.commit("live-tags/updateTaxonomyTitle",p)),v=n.filter(c=>s.includes(c.id)).map(c=>c.name).join(", "),o.commit("live-tags/updateCategories",v)}else p!==""&&(p=v="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",v))}t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},_t=(t=!1)=>{if(o.state.currentPost.context!=="term")return;const e=document.querySelector("#edittag input#name");e&&(o.commit("live-tags/updateTaxonomyTitle",e.value),e.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyTitle",e.value)}));const n=document.querySelector("#edittag textarea#description");n&&(o.commit("live-tags/updateTaxonomyDescription",n.value),n.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyDescription",n.value)}));const s=document.querySelector("#edittag input#slug");if(s){const i=A(s.value);o.commit("live-tags/updatePermalinkSlug",i),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${i.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),s.addEventListener("input",()=>{o.commit("live-tags/updatePermalinkSlug",i),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${i.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}o.dispatch("savePostState"),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},qt=(t=!1)=>{if(o.state.currentPost.postType!=="attachment")return;const e=document.querySelector("textarea#attachment_caption");e&&(o.commit("live-tags/updateAttachmentCaption",e.value),e.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const n=document.querySelector("textarea#attachment-details-caption");n&&(o.commit("live-tags/updateAttachmentCaption",n.value),n.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const s=document.querySelector("textarea#attachment_content");s&&(o.commit("live-tags/updateAttachmentDescription",s.value),s.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentDescription",r.target.value)}));const i=document.querySelector("input#attachment_alt");i&&(o.commit("live-tags/updateAltTag",i.value),i.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)}));const c=document.querySelector("input#attachment-details-alt-text");c&&(o.commit("live-tags/updateAltTag",i.value),c.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)})),t&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},$t=()=>!window.aioseo.currentPost||!window.aioseo.currentPost.id?!1:window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&!window.aioseo.currentPost.isSpecialPage&&window.aioseo.currentPost.postType!=="attachment"&&Q(),Ht=()=>!window.aioseo.screen||!window.aioseo.screen.postType?!1:!!(window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&Q(window.aioseo.screen.postType)),Q=(t=null)=>{if(t)return!!(window.aioseo.dynamicOptions.searchAppearance.postTypes[t]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced.showMetaBox);if(!window.aioseo.currentPost||!window.aioseo.currentPost.id)return!1;const e=window.aioseo.currentPost.postType,n=window.aioseo.currentPost.termType,s=!!(e&&window.aioseo.currentPost.context==="post"&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced.showMetaBox),i=!!(n&&window.aioseo.currentPost.context==="term"&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n]&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced.showMetaBox);return s||i},x=async(t=900,e=!0)=>{rt(async()=>{await ht(!1),await vt(!1),await xt(!1),await kt(!1),await yt(!1),bt(!1),_t(!1),qt(!1),e&&y.prototype.$truSeo.runAnalysis({postId:o.state.currentPost.id})},t)};export{Ot as a,f as b,Ht as c,E as d,P as e,Tt as f,Ct as g,bt as h,g as i,_t as j,qt as k,Dt as l,x as m,ct as n,_ as o,b as p,Q as s,$t as t};
