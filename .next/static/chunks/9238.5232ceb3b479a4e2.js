"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9238],{9238:function(e,t,s){s.r(t);var c=s(5893),i=s(1664),l=s.n(i),o=s(3391),a=s.n(o),r=s(7294),n=s(2806),d=s(9781);let m=e=>{let{projects:t,layout:s,cols:i,sideFilter:o,masonry:m,galleryMode:x}=e,j=(0,r.useRef)(),[h,f]=(0,r.useState)("*");(0,r.useEffect)(()=>{setTimeout(()=>{j.current=new(a())(".website-co-portfolio-items",{itemSelector:".website-co-portfolio-col",percentPosition:!0,masonry:{columnWidth:".website-co-portfolio-col"},animationOptions:{duration:750,easing:"linear",queue:!1}})},1e3),document.querySelectorAll(".website-co-filter-nav-active").forEach(e=>{e.style.width=e.parentNode.querySelector(".item--active").parentNode.offsetWidth+6+"px"})},[]),(0,r.useEffect)(()=>{j.current&&("*"===h?j.current.arrange({filter:"*"}):j.current.arrange({filter:".".concat(h)}))},[h]);let b=e=>()=>{f(e);let t=document.querySelectorAll(".js-website-co-filter li");t.forEach(t=>{let s=t.querySelector("button").getAttribute("data-filter");s==e?t.querySelector("button").classList.add("item--active"):t.querySelector("button").classList.remove("item--active")});let s=document.querySelector(".website-co-filter.filter--default .item--active"),c=document.querySelector(".website-co-filter.filter--default .website-co-filter-nav-active");if(void 0!=c){let e=s.parentNode.offsetLeft,t=s.parentNode.offsetWidth;c.style.width=t+6+"px",c.style.left=e-3+"px"}},p="";switch(i){case"1":p="col-xs-12 col-sm-12 col-md-12 col-lg-12";break;case"2":default:p="col-xs-12 col-sm-12 col-md-6 col-lg-6";break;case"3":p="col-xs-12 col-sm-12 col-md-6 col-lg-4"}return"list"==s&&(p="col-xs-12 col-sm-12 col-md-12 col-lg-12"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("section",{className:"website-co-section gap-top-140",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:o?"website-co-portfolio portfolio--side":"website-co-portfolio",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:o?"col-xs-12 col-sm-12 col-md-12 col-lg-3":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,c.jsx)("div",{className:"website-co-filter-container",children:(0,c.jsxs)("div",{className:o?"website-co-filter js-website-co-filter":"website-co-filter js-website-co-filter filter--default",children:[!o&&(0,c.jsx)("div",{className:"website-co-filter-nav-active"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:b("*"),className:"website-co-filter-item item--active",type:"button","data-filter":"*",children:(0,c.jsx)("span",{children:"All Projects"})})},"categories-item-first"),n.Xd.cn.b.map((e,t)=>(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:b(e.slug),className:"website-co-filter-item",type:"button","data-filter":e.slug,children:(0,c.jsx)("span",{children:e.label})})},"categories-item-".concat(t)))]})]})})}),(0,c.jsx)("div",{className:o?"col-xs-12 col-sm-12 col-md-12 col-lg-9":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,c.jsx)("div",{className:"row website-co-portfolio-items",children:t.map((e,t)=>(0,c.jsxs)("div",{className:"".concat(p," website-co-portfolio-col ").concat(e.category_slug),children:["grid"==s&&(0,c.jsxs)("div",{className:"website-co-portfolio-item",children:[(0,c.jsx)("div",{className:m?"image":"image image-square","data-website-co-overlay":!0,"data-website-co-scroll":!0,children:(0,c.jsx)(l(),{href:x?e.image:"/projects/".concat(e.id),className:"website-co-hover-3",children:(0,c.jsx)("img",{src:e.image,alt:e.title})})}),(0,c.jsxs)("div",{className:"desc",children:[(0,c.jsx)("h5",{className:"title",children:(0,c.jsx)(l(),{className:"website-co-lnk",href:x?e.image:"/projects/".concat(e.id),children:(0,c.jsx)("span",{"data-splitting":!0,"data-website-co-scroll":!0,children:e.title})})}),(0,c.jsx)("div",{className:"text",children:(0,c.jsx)("div",{"data-splitting":!0,"data-website-co-scroll":!0,children:(0,c.jsx)("span",{children:e.category})})})]})]}),"list"==s&&(0,c.jsxs)("div",{className:"website-co-portfolio-item website-co-portfolio-item-list",children:[(0,c.jsx)("div",{className:"image","data-website-co-overlay":!0,"data-website-co-scroll":!0,children:(0,c.jsx)(l(),{href:"/projects/".concat(e.id),className:"website-co-hover-3",children:(0,c.jsx)("img",{src:e.image,alt:e.title})})}),(0,c.jsxs)("div",{className:"desc",children:[(0,c.jsx)("div",{className:"text",children:(0,c.jsx)("div",{"data-splitting":!0,"data-website-co-scroll":!0,children:(0,c.jsx)("span",{children:e.category})})}),(0,c.jsx)("h5",{className:"title",children:(0,c.jsx)(l(),{className:"website-co-lnk",href:"/projects/".concat(e.id),children:(0,c.jsx)("span",{"data-splitting":!0,"data-website-co-scroll":!0,children:e.title})})}),(0,c.jsx)("div",{className:"website-co-text",children:(0,c.jsx)("div",{children:(0,c.jsxs)("ul",{"data-splitting":"","data-website-co-scroll":"",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Project Type"}),(0,c.jsx)("br",{})," ",e.type]},"projects-list-item-".concat(t,"-attr-1")),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Team"}),(0,c.jsx)("br",{})," ",e.team]},"projects-list-item-".concat(t,"-attr-2")),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Date"}),(0,c.jsx)("br",{})," ",e.date]},"projects-list-item-".concat(t,"-attr-3"))]})})})]})]})]},"projects-item-".concat(t)))})})]})})})}),(0,c.jsx)(d.Z,{})]})};t.default=m}}]);