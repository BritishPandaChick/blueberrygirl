(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},o={"posts-table":0},a=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["aioseopjsonp"]=window["aioseopjsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([10,"chunk-vendors","chunk-common"]),i()})({10:function(t,e,i){t.exports=i("7ca8")},4380:function(t,e,i){},"78a7":function(t,e,i){},"7ca8":function(t,e,i){"use strict";i.r(e);i("99af"),i("4160"),i("159b"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("a026"),o=(i("1725"),i("75b9"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aioseo-meta-options",class:{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}},[i("div",["edit"===this.$root._data.screen.base&&!t.isWooCommerceProduct&&t.showTruSeo&&this.$allowed("aioseo_page_analysis")&&!t.isSpecialPage?i("div",{staticClass:"edit-row"},[i("core-score-button",{attrs:{score:this.post.value,postId:t.postId}})],1):t._e(),this.$allowed("aioseo_page_general_settings")?i("div",{staticClass:"edit-row edit-title"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editTitle(e)}}}),i("strong",[t._v(t._s(t.strings.title)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]):t._e(),t.showEditTitle?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),this.$allowed("aioseo_page_general_settings")?i("div",{staticClass:"edit-row edit-description"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editDescription(e)}}}),i("strong",[t._v(t._s(t.strings.description)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]):t._e(),t.showEditDescription?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postDescription,expression:"postDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.postDescription},on:{input:function(e){e.target.composing||(t.postDescription=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),"upload"===this.$root._data.screen.base&&t.post.showMedia?i("div",{staticClass:"edit-row edit-image-title"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editImageTitle(e)}}}),i("strong",[t._v(t._s(t.strings.imageTitle)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.imageTitle)}})]):t._e(),t.showEditImageTitle?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageTitle,expression:"imageTitle"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageTitle},on:{input:function(e){e.target.composing||(t.imageTitle=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.saveImage(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),"upload"===this.$root._data.screen.base&&t.post.showMedia?i("div",{staticClass:"edit-row edit-image-alt"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editImageAlt(e)}}}),i("strong",[t._v(t._s(t.strings.imageAltTag)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.imageAltTag)}})]):t._e(),t.showEditImageAltTag?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageAltTag,expression:"imageAltTag"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageAltTag},on:{input:function(e){e.target.composing||(t.imageAltTag=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.saveImage(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()])])}),a=[],n=(i("a4d3"),i("e01a"),i("96cf"),i("1da1")),r=i("5530"),c=i("bfad"),l=i("4245"),d=i.n(l),u=i("2f62"),p=i("9c0e"),h={mixins:[p["m"],p["n"]],props:{post:Object,restUrl:String},data:function(){return{postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),imageTitle:this.$t.__("Image Title:",this.$td),imageAltTag:this.$t.__("Image Alt Tag:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:Object(r["a"])(Object(r["a"])({},Object(u["e"])(["options","currentPost"])),{},{isWooCommerceProduct:function(){return!(!window.aioseo.data.isWooCommerceActive||"product"!==this.$root._data.screen.postType)}}),methods:{save:function(){var t=this;this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,this.$http.post("".concat(this.restUrl,"aioseo/v1/postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then((function(e){t.titleParsed=e.body.title,t.descriptionParsed=e.body.description,"upload"!==t.$root._data.screen.base&&t.runAnalysis(t.post.id)})).catch((function(e){console.error("Unable to update post with ID ".concat(t.post.id,": ").concat(e))}))},saveImage:function(){var t=this;this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,this.$http.post("".concat(this.restUrl,"aioseo/v1/postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then((function(){})).catch((function(e){console.error("Unable to update attachment with ID ".concat(t.post.id,": ").concat(e))}))},cancel:function(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle:function(){this.showEditTitle=!0},editDescription:function(){this.showEditDescription=!0},editImageTitle:function(){this.showEditImageTitle=!0},editImageAlt:function(){this.showEditImageAltTag=!0},updatePostTitle:function(t,e){var i=document.getElementById("post-".concat(t));if(i){var s=i.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(s){var o=s.getElementsByTagName("span")[0];s.innerText=e,s.prepend(o)}}}},mounted:function(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,s,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])(t.$http);case 2:i=e.sent,s=i.options,o=i.currentPost,a=i.tags,t.$set(t.$store.state,"options",d()(Object(r["a"])({},t.$store.state.options),Object(r["a"])({},s))),t.$set(t.$store.state,"currentPost",d()(Object(r["a"])({},t.$store.state.currentPost),Object(r["a"])({},o))),t.$set(t.$store.state,"tags",d()(Object(r["a"])({},t.$store.state.tags),Object(r["a"])({},a))),t.showTruSeo=t.options.advanced.truSeo;case 10:case"end":return e.stop()}}),e)})))()}},m=h,g=(i("801e"),i("2877")),v=Object(g["a"])(m,o,a,!1,null,null,null),f=v.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aioseo-meta-options",class:{editing:t.showEditTitle||t.showEditDescription}},[i("div",[i("div",{staticClass:"edit-row edit-title"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editTitle(e)}}}),i("strong",[t._v(t._s(t.strings.title)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]),t.showEditTitle?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),i("div",{staticClass:"edit-row edit-description"},[i("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editDescription(e)}}}),i("strong",[t._v(t._s(t.strings.description)+" ")]),i("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]),t.showEditDescription?i("div",{staticClass:"edit-row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.termDescription,expression:"termDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.termDescription},on:{input:function(e){e.target.composing||(t.termDescription=e.target.value)}}}),t._v(" "),i("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[i("svg-circle-check",{attrs:{width:"20"}})],1),i("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[i("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()])])},_=[],T={mixins:[p["m"],p["n"]],props:{term:Object,restUrl:String},data:function(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:Object(r["a"])({},Object(u["e"])(["options","currentPost"])),methods:{save:function(){var t=this;this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.$http.post("".concat(this.restUrl,"aioseo/v1/termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then((function(e){t.titleParsed=e.body.title,t.descriptionParsed=e.body.description})).catch((function(e){console.error("Unable to update term with ID ".concat(t.term.id,": ").concat(e))}))},cancel:function(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle:function(){this.showEditTitle=!0},editDescription:function(){this.showEditDescription=!0}},mounted:function(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,s,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])(t.$http);case 2:i=e.sent,s=i.options,o=i.currentPost,a=i.tags,t.$set(t.$store.state,"options",d()(Object(r["a"])({},t.$store.state.options),Object(r["a"])({},s))),t.$set(t.$store.state,"currentPost",d()(Object(r["a"])({},t.$store.state.currentPost),Object(r["a"])({},o))),t.$set(t.$store.state,"tags",d()(Object(r["a"])({},t.$store.state.tags),Object(r["a"])({},a))),t.showTruSeo=t.options.advanced.truSeo;case 10:case"end":return e.stop()}}),e)})))()}},$=T,b=(i("dcf0"),Object(g["a"])($,w,_,!1,null,null,null)),P=b.exports,D=i("cf27");i("2d26");s["default"].config.productionTip=!1,window.aioseo.posts&&window.aioseo.posts.forEach((function(t){new s["default"]({store:D["a"],data:{screen:window.aioseo.screen},render:function(e){return e(f,{props:{post:t,restUrl:window.aioseo.urls.restUrl}})}}).$mount("#".concat(t.columnName,"-").concat(t.id))})),window.aioseo.terms&&0===window.aioseo.posts.length&&window.aioseo.terms.forEach((function(t){new s["default"]({store:D["a"],data:{screen:window.aioseo.screen},render:function(e){return e(P,{props:{term:t,restUrl:window.aioseo.urls.restUrl}})}}).$mount("#".concat(t.columnName,"-").concat(t.id))}))},"801e":function(t,e,i){"use strict";var s=i("4380"),o=i.n(s);o.a},dcf0:function(t,e,i){"use strict";var s=i("78a7"),o=i.n(s);o.a}});