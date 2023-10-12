"use strict";
(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 4619:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/awards.json
const awards_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/sections/Awards.jsx


const AwardsSection = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "website-co-section gap-bottom-140",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "website-co-heading",
                        children: /*#__PURE__*/ _jsx("h5", {
                            className: "website-co-subtitle-1",
                            children: /*#__PURE__*/ _jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: Data.subtitle
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row gap-row",
                        children: Data.items.map((item, key)=>/*#__PURE__*/ _jsxs("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                children: [
                                    /*#__PURE__*/ _jsx("p", {
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: item.image,
                                            alt: item.alt
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "website-co-title-1",
                                        children: item.value
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: item.label
                                        }
                                    })
                                ]
                            }, `awards-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Awards = ((/* unused pure expression or super */ null && (AwardsSection)));


/***/ }),

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services4)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/services-4.json
const services_4_namespaceObject = JSON.parse('{"Oc":"Gedreven door passie","TN":"Waar kan ik jou mee helpen?","jX":5}');
;// CONCATENATED MODULE: ./src/components/sections/Services4.jsx




const Services4Section = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "website-co-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "website-co-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.Oc
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "website-co-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.TN
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "website-co-services-list",
                        children: services.slice(0, services_4_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "website-co-service-item-list",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "website-co-service-item-list-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image website-co-hover-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "num",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    " 0",
                                                    key + 1,
                                                    ". "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "title",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: item.short
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    class: "cta-diensten-container",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        class: "website-co-btn website-co-hover-btn",
                                                        href: `/services/${item.id}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                class: "arrow",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Ja, ik wil dat!"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `services4-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services4 = (Services4Section);


/***/ }),

/***/ 3325:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6641);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(163);
/* harmony import */ var _components_sections_Team2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5434);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4759);
/* harmony import */ var _components_sections_Awards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4619);
/* harmony import */ var _components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__]);
([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const HistorySlider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "over-mij.jsx -> " + "@components/sliders/History"
        ]
    },
    ssr: false
});
const Testimonial2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "over-mij.jsx -> " + "@components/sliders/Testimonial2"
        ]
    },
    ssr: false
});
const About = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_12__/* .circleText */ .V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                pageTitle: "Over mij",
                pageDesc: "Ontdek hoe mijn passie en expertise een verschil kunnen maken voor jouw online aanwezigheid."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "website-co-section gap-top-140 gap-bottom-140",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "website-co-heading gap-bottom-60",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "website-co-subtitle-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: " Van Topsport naar Website & Co"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "website-co-title-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "Gedreven door passie ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "voor webdesign"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "website-co-text",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Hi, ik ben Jo, de creatieve kracht achter Website & Co. Mijn verhaal begint met een passie voor ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "topsport"
                                                        }),
                                                        " en een liefde voor webdesign. Laat me je meenemen op mijn reis van atletiek naar het bouwen van opvallende websites en unieke digitale ervaringen. "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/website-co-about-logo.png",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Mijn missie"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "Mijn missie is simpel: elke klant een unieke ervaring bieden. Bij Website & Co gaat het erom jouw visie tot leven te brengen met creatieve webdesigns en online oplossingen die zich onderscheiden."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-60",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Mijn doel"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "Mijn ultieme doel is om elke klant volledig tevreden en gelukkig te maken. Bij Website & Co draait het niet alleen om het cre\xebren van prachtige websites, maar ook om het leveren van oplossingen die de verwachtingen overtreffen en een glimlach op het gezicht van elke klant toveren"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/images/posts1.jpg",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/posts1-1024x683.jpg",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/images/posts2.jpg",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/posts2-1024x683.jpg",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            "π",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                services: props.services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HistorySlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Testimonial2Slider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
async function getStaticProps() {
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_4__/* .getSortedTeamData */ .n8)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getSortedServicesData */ .M9)();
    return {
        props: {
            team: allTeam,
            services: allServices
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,142,806,47,163,759,513,654,434], () => (__webpack_exec__(3325)));
module.exports = __webpack_exports__;

})();