(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5561],{4184:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0!==(n=(function(){return o}).apply(e,[]))&&(t.exports=n)}()},163:function(t,e,n){"use strict";var r=n(5893),o=n(9008),i=n.n(o),a=n(1664),c=n.n(a),s=n(2806),l=n(1163);let u=t=>{let{pageTitle:e,pageDesc:n}=t,o="".concat(s.Xd.aD," - ").concat(e),{asPath:a}=(0,l.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:o})}),(0,r.jsx)("section",{className:"website-co-section website-co-intro intro--black",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("h1",{className:"website-co-title-1  website-co-text-white",children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{className:"website-co-sep word",children:(0,r.jsx)("i",{className:"sep-img",style:{backgroundImage:"url(/images/title_icon.svg)"}})})]}),""!=n&&(0,r.jsx)("div",{className:"website-co-subtitle-2  website-co-text-white",children:(0,r.jsx)("span",{children:n})}),(0,r.jsx)("div",{className:"website-co-breadcrums",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/",children:"Home"})}),-1!=a.indexOf("/blog/")&&(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/blog",children:"Blog"})}),-1!=a.indexOf("/projects/")&&(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/projects",children:"Projects"})}),-1!=a.indexOf("/services/")&&(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/services",children:"Services"})}),-1!=a.indexOf("/team/")&&(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/team",children:"Team"})}),(0,r.jsx)("li",{className:"current",children:(0,r.jsx)("span",{children:e})})]})})]})})]})};e.Z=u},1163:function(t,e,n){t.exports=n(6885)},6573:function(t,e,n){"use strict";var r=n(5456),o=n(6459),i=(0,n(9075).Z)("facebook",function(t,e){var n=e.quote,i=e.hashtag;return(0,r.Z)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:t,quote:n,hashtag:i})},function(t){return{quote:t.quote,hashtag:t.hashtag}},{windowWidth:550,windowHeight:400});e.Z=i},3597:function(t,e,n){"use strict";var r=n(5456),o=n(6459),i=(0,n(9075).Z)("linkedin",function(t,e){var n=e.title,i=e.summary,a=e.source;return(0,r.Z)(t,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:t,mini:"true",title:n,summary:i,source:a})},function(t){return{title:t.title,summary:t.summary,source:t.source}},{windowWidth:750,windowHeight:600});e.Z=i},1366:function(t,e,n){"use strict";var r=n(5456),o=n(6459),i=(0,n(9075).Z)("pinterest",function(t,e){var n=e.media,i=e.description;return(0,r.Z)(t,"pinterest.url"),(0,r.Z)(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+(0,o.Z)({url:t,media:n,description:i})},function(t){return{media:t.media,description:t.description}},{windowWidth:1e3,windowHeight:730});e.Z=i},5341:function(t,e,n){"use strict";var r=n(5456),o=n(6459),i=(0,n(9075).Z)("reddit",function(t,e){var n=e.title;return(0,r.Z)(t,"reddit.url"),"https://www.reddit.com/submit"+(0,o.Z)({url:t,title:n})},function(t){return{title:t.title}},{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});e.Z=i},6616:function(t,e,n){"use strict";var r=n(5456),o=n(6459),i=(0,n(9075).Z)("twitter",function(t,e){var n=e.title,i=e.via,a=e.hashtags,c=void 0===a?[]:a,s=e.related,l=void 0===s?[]:s;return(0,r.Z)(t,"twitter.url"),(0,r.Z)(Array.isArray(c),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:t,text:n,via:i,hashtags:c.length>0?c.join(","):void 0,related:l.length>0?l.join(","):void 0})},function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}},{windowWidth:550,windowHeight:400});e.Z=i},9075:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r,o=n(7294),i=n(4184),a=n.n(i),c=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=n.windowWidth,l=void 0===c?550:c;!function(t,e,n){var r=s({height:e.height,width:e.width,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},u(e,["height","width"])),o=window.open(t,"",Object.keys(r).map(function(t){return"".concat(t,"=").concat(r[t])}).join(", "));if(n)var i=window.setInterval(function(){try{(null===o||o.closed)&&(window.clearInterval(i),n(o))}catch(t){console.error(t)}},1e3)}(t,s({height:i,width:l},"windowCenter"===(void 0===a?"windowCenter":a)?{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-l/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-i/2}:{top:(window.screen.height-i)/2,left:(window.screen.width-l)/2}),r)},e.handleClick=function(t){var n,r,o;return n=void 0,r=void 0,o=function(){var e,n,r,o,i,a,c,s,u;return l(this,function(l){switch(l.label){case 0:var d;if(n=(e=this.props).beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,s=o(a,e.opts),r)return[2];if(t.preventDefault(),!n||!((d=u=n())&&("object"==typeof d||"function"==typeof d)&&"function"==typeof d.then))return[3,2];return[4,u];case 1:l.sent(),l.label=2;case 2:return c&&this.openShareDialog(s),i&&i(t,s),[2]}})},new(r||(r=Promise))(function(t,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(e){var n;e.done?t(e.value):((n=e.value)instanceof r?n:new r(function(t){t(n)})).then(a,c)}s((o=o.apply(e,n||[])).next())})},e}return c(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,i=t.disabledStyle,c=t.forwardedRef,l=(t.networkLink,t.networkName),d=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),h=t.style,f=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,u(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=a()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),w=d?s(s({backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"},h),r&&i):s(s({},h),r&&i);return o.createElement("button",s({},f,{"aria-label":f["aria-label"]||l,className:p,onClick:this.handleClick,ref:c,style:w}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(o.Component),h=function(){return(h=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t,e,n,r){function i(i,a){var c=n(i),s=h({},i);return Object.keys(c).forEach(function(t){delete s[t]}),o.createElement(d,h({},r,s,{forwardedRef:a,networkName:t,networkLink:e,opts:n(i)}))}return i.displayName="ShareButton-".concat(t),(0,o.forwardRef)(i)}},5456:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r,o=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return o(e,t),e}(Error);function a(t,e){if(!t)throw new i(e)}},6459:function(t,e,n){"use strict";function r(t){var e=Object.entries(t).filter(function(t){return null!=t[1]}).map(function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))});return e.length>0?"?".concat(e.join("&")):""}n.d(e,{Z:function(){return r}})}}]);