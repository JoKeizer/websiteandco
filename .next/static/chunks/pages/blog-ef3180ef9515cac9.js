(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{538:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return i(2243)}])},163:function(e,s,i){"use strict";var n=i(5893),t=i(9008),c=i.n(t),r=i(1664),a=i.n(r),l=i(2806),o=i(1163);let d=e=>{let{pageTitle:s,pageDesc:i}=e,t="".concat(l.Xd.aD," - ").concat(s),{asPath:r}=(0,o.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:t})}),(0,n.jsx)("section",{className:"website-co-section website-co-intro intro--black",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("h1",{className:"website-co-title-1  website-co-text-white",children:[(0,n.jsx)("span",{children:s}),(0,n.jsx)("span",{className:"website-co-sep word",children:(0,n.jsx)("i",{className:"sep-img",style:{backgroundImage:"url(/images/title_icon.svg)"}})})]}),""!=i&&(0,n.jsx)("div",{className:"website-co-subtitle-2  website-co-text-white",children:(0,n.jsx)("span",{children:i})}),(0,n.jsx)("div",{className:"website-co-breadcrums",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})}),-1!=r.indexOf("/blog/")&&(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/blog",children:"Blog"})}),-1!=r.indexOf("/projects/")&&(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/projects",children:"Projects"})}),-1!=r.indexOf("/services/")&&(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/services",children:"Services"})}),-1!=r.indexOf("/team/")&&(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/team",children:"Team"})}),(0,n.jsx)("li",{className:"current",children:(0,n.jsx)("span",{children:s})})]})})]})})]})};s.Z=d},9925:function(e,s,i){"use strict";var n=i(5893),t=i(1664),c=i.n(t),r=i(3265);let a=e=>{let{items:s}=e;return(0,n.jsx)(n.Fragment,{children:s.map((e,s)=>(0,n.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4",children:(0,n.jsxs)("div",{className:"website-co-blog-item",children:[(0,n.jsx)("div",{className:"image","data-website-co-overlay":!0,"data-website-co-scroll":!0,children:(0,n.jsx)(c(),{href:"/blog/".concat(e.id),children:(0,n.jsx)("img",{src:e.image,alt:e.title})})}),(0,n.jsxs)("div",{className:"desc",children:[(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("div",{className:"date",children:(0,n.jsx)(r.Z,{dateString:e.date})}),e.category]}),(0,n.jsx)("h5",{className:"title",children:(0,n.jsx)(c(),{href:"/blog/".concat(e.id),children:(0,n.jsx)("span",{children:e.title})})}),(0,n.jsx)("div",{className:"website-co-text",children:(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:[e.short," ",(0,n.jsx)("br",{}),(0,n.jsx)(c(),{href:"/blog/".concat(e.id),className:"website-co-btn website-co-hover-btn",children:(0,n.jsx)("span",{children:"Read more"})})]})})})]})]})},"post-".concat(s)))})};s.Z=a},520:function(e,s,i){"use strict";i.d(s,{Z:function(){return o},D:function(){return a}});var n=i(5893),t=i(1664),c=i.n(t);let r=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:e},(e,i)=>i+s)},a="...",l=e=>{let{currentPage:s,totalItems:i,perPage:t,renderPageLink:l}=e,o=function(e,s,i){let n=Math.ceil(e/i);return n<=5?r(n):s<=3?[1,2,3,4,a,n]:s<n-2?[1,a,s-1,s,s+1,a,n]:[1,a,...r(4,n-3)]}(i,s,t);return(0,n.jsxs)("div",{className:"pager",children:[s>1&&(0,n.jsx)(c(),{href:s>1?l(s-1):l(s),className:"prev page-numbers website-co-prev website-co-hover-2",children:(0,n.jsx)("i",{className:"icon-arrow"})},"pagination-item-prev"),o.map((e,i)=>e===a?(0,n.jsx)("span",{className:"page-numbers",children:e},"pagination-item-".concat(i)):(0,n.jsx)(c(),{href:l(e),className:"".concat(e===s?"current":""," page-numbers"),style:{marginLeft:"2px",marginRight:"2px"},children:e},"pagination-item-".concat(i))),s<o.length&&(0,n.jsx)(c(),{href:s<o.length?l(s+1):l(s),className:"next page-numbers website-co-next website-co-hover-2",children:(0,n.jsx)("i",{className:"icon-arrow"})},"pagination-item-next")]})};var o=l},3265:function(e,s,i){"use strict";i.d(s,{Z:function(){return r}});var n=i(5893),t=i(8420),c=i(4900);function r(e){let{dateString:s}=e,i=(0,t.Z)(s);return(0,n.jsx)("time",{dateTime:s,children:(0,c.Z)(i,"LLLL d, yyyy")})}},2243:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSG:function(){return d}});var n=i(5893),t=i(6699),c=i(9925),r=i(520),a=i(163),l=i(47);let o=e=>{let{posts:s,totalPosts:i,currentPage:o}=e;return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(a.Z,{pageTitle:"Nieuws & Blog",pageDesc:"Inzichten, Gedachten, Industrietrends, Marketingtips"}),(0,n.jsx)("div",{className:"website-co-blog gap-top-140",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(c.Z,{items:s})}),(0,n.jsx)(r.Z,{currentPage:o,totalItems:i,perPage:t.PER_PAGE,renderPageLink:e=>"/blog/page/".concat(e)})]})})]})};var d=!0;s.default=o},6699:function(e,s,i){"use strict";i.r(s),i.d(s,{PER_PAGE:function(){return o},__N_SSG:function(){return l}});var n=i(5893),t=i(9925),c=i(520),r=i(163),a=i(47),l=!0;let o=9,d=e=>{let{posts:s,currentPage:i,totalPosts:l}=e;return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(r.Z,{pageTitle:"Nieuws & Blog",pageDesc:"Inzichten, Gedachten, Industrietrends, Marketingtips"}),(0,n.jsx)("div",{className:"website-co-blog gap-top-140",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(t.Z,{items:s})}),(0,n.jsx)(c.Z,{currentPage:i,totalItems:l,perPage:o,renderPageLink:e=>"/blog/page/".concat(e)})]})})]})};s.default=d},1163:function(e,s,i){e.exports=i(6885)}},function(e){e.O(0,[7142,3790,47,9774,2888,179],function(){return e(e.s=538)}),_N_E=e.O()}]);