"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 5434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/team2.json
const team2_namespaceObject = JSON.parse('{"TN":"Our Team is The Difference. <br/>Our Chemistry is The Spark.","Oc":"Meet Our Company Family","jX":5,"LI":{"p":"/team"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Team2.jsx



const Team2Section = ({ team  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row gap-row align-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-11 col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "website-co-heading align-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "website-co-subtitle-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: team2_namespaceObject.Oc
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "website-co-title-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: team2_namespaceObject.TN
                                            }
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-1 col-lg-1"
                        }),
                        team.slice(0, team2_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-team-two",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "website-co-team-two-item",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "image website-co-hover-3 website-co-hover-black-30",
                                                "data-website-co-overlay": true,
                                                "data-website-co-scroll": true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: `/team/${item.id}`,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: item.image,
                                                            alt: item.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "website-co-social-2",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            children: item.social.map((social, social_key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        className: "website-co-social-link website-co-hover-2",
                                                                        href: social.link,
                                                                        title: social.title,
                                                                        target: "_blank",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            "aria-hidden": "true",
                                                                            className: social.icon
                                                                        })
                                                                    })
                                                                }, `team2-item-${key}-social-${social_key}`))
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: `/team/${item.id}`,
                                                            className: "website-co-lnk",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                "data-splitting": true,
                                                                "data-website-co-scroll": true,
                                                                children: item.name
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "website-co-subtitle-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-website-co-scroll": true,
                                                            children: item.role
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, `team2-item-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "website-co-btn-circle website-co-hover-2",
                                href: team2_namespaceObject.LI.p,
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "arrow",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Team2 = (Team2Section);


/***/ })

};
;