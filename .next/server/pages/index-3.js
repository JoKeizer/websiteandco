"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services3)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/services-3.json
const services_3_namespaceObject = JSON.parse('{"Oc":"Welcome to website-co","TN":"We are a digital agency, <br>passionate about building <br>and designing brands","fL":"From the moment our company was founded, we have helped our clients find <strong>exceptional solutions for their businesses</strong>, creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience.","BH":{"H":"/images/website-co-about-logo.png","w":"image"},"oG":"What We Provide","LI":{"p":"/services","P":"View All Services"},"jX":5}');
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Services3.jsx




const Services3Section = ({ services  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* servShowcaseHover */.Jh)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section website-co-section-bg gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "website-co-heading gap-bottom-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-subtitle-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: services_3_namespaceObject.Oc
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "website-co-title-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: services_3_namespaceObject.TN
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-text",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: services_3_namespaceObject.fL
                                                }
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: services_3_namespaceObject.BH.H,
                                    alt: services_3_namespaceObject.BH.w
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "website-co-services-showcase",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-0 col-sm-0 col-md-0 col-lg-7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-subtitle-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: services_3_namespaceObject.oG
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "items",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "img-circle website-co-circle-move"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    children: services.slice(0, services_3_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "image",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "img",
                                                                        style: {
                                                                            "backgroundImage": "url(" + item.image + ")"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: `/services/${item.id}`,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "num",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    "data-splitting": true,
                                                                                    "data-website-co-scroll": true,
                                                                                    children: [
                                                                                        " 0",
                                                                                        key + 1,
                                                                                        ". "
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "name",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "website-co-lnk",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        "data-splitting": true,
                                                                                        "data-website-co-scroll": true,
                                                                                        children: item.title
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }, `services3-item-${key}`))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: services_3_namespaceObject.LI.p,
                                            className: "website-co-btn website-co-hover-btn btn--border",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "arrow",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: services_3_namespaceObject.LI.P
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services3 = (Services3Section);


/***/ }),

/***/ 3676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8654);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3513);
/* harmony import */ var _components_sections_Services3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4617);
/* harmony import */ var _components_sections_Team2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5434);
/* harmony import */ var _src_components_sections_Prijzen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9231);
/* harmony import */ var _components_sections_CallToAction2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4957);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_services__WEBPACK_IMPORTED_MODULE_6__, _library_team__WEBPACK_IMPORTED_MODULE_7__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_services__WEBPACK_IMPORTED_MODULE_6__, _library_team__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Hero3Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-3.jsx -> " + "@components/sliders/Hero3"
        ]
    },
    ssr: false
});
const Testimonial2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-3.jsx -> " + "@components/sliders/Testimonial2"
        ]
    },
    ssr: false
});
const HistorySlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-3.jsx -> " + "@components/sliders/History"
        ]
    },
    ssr: false
});
const LatestPostsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-3.jsx -> " + "@components/sliders/LatestPosts"
        ]
    },
    ssr: false
});
const Home3 = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        darkHeader: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hero3Slider, {
                    projects: props.projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services3__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    services: props.services
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Team2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    team: props.team
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Testimonial2Slider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HistorySlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_Prijzen__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LatestPostsSlider, {
                    posts: props.posts
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home3);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_6__/* .getSortedServicesData */ .M9)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_7__/* .getSortedTeamData */ .n8)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects,
            services: allServices,
            team: allTeam
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,142,806,47,374,759,745,513,654,231,434,957], () => (__webpack_exec__(3676)));
module.exports = __webpack_exports__;

})();