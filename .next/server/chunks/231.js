"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 9231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Prijzen)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/prijzen.json
const prijzen_namespaceObject = JSON.parse('{"Oc":"Prijzen","TN":"Maak jouw keuze voor jouw online succes","ev":[{"active":0,"title":"Onepage website","subtitle":"Eenmalig","price":"€599","icon":"fas fa-rocket","list":[{"label":"Brainstormsessie voor het beste resultaat","included":1},{"label":"Website wordt ingezet als marketing tool","included":1},{"label":"Premium template 1 pagina (One Page)","included":1},{"label":"Wordpress CMS","included":1},{"label":"Blog functie","included":1},{"label":"Contact formulier","included":1},{"label":"Basic SEO Optimalisatie","included":1},{"label":"Salespagina om meer leads te generen","included":0}],"button":{"label":"Ja, ik wil dat!","link":"/contact"}},{"active":1,"title":"Pro Website","subtitle":"Eenmalig","price":"€999","icon":"fas fa-crown","list":[{"label":"Brainstormsessie voor het beste resultaat","included":1},{"label":"Website wordt ingezet als marketing tool","included":1},{"label":"Premium template ","included":1},{"label":"6 pagina\'s ","included":1},{"label":"Wordpress CMS","included":1},{"label":"Blog functie","included":1},{"label":"Contact formulier","included":1},{"label":"Basic SEO Optimalisatie","included":1},{"label":"Salespagina om meer leads te generen","included":0}],"button":{"label":"Ja, ik wil dat!","link":"/contact"}},{"active":0,"title":"Maatwerk website","subtitle":"Eenmalig","price":" v.a. €1599","icon":"fas fa-city","list":[{"label":"Brainstormsessie voor het beste resultaat","included":1},{"label":"Website wordt ingezet als marketing tool","included":1},{"label":"Premium template","included":1},{"label":"12 pagina\'s ","included":1},{"label":"Wordpress CMS","included":1},{"label":"Blog functie","included":1},{"label":"Contact formulier","included":1},{"label":"Basic SEO Optimalisatie","included":1},{"label":"Salespagina om meer leads te generen","included":1}],"button":{"label":"Ja, ik wil dat!","link":"/contact"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Prijzen.jsx



const PricingSection = ({ bg , hiddenHeading  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: `website-co-section website-co-section-${bg} gap-top-140 gap-bottom-140`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    hiddenHeading == undefined && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "website-co-heading gap-bottom-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-subtitle-1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: prijzen_namespaceObject.Oc
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "website-co-title-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: prijzen_namespaceObject.TN
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: prijzen_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-pricing",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: item.active == 1 ? "website-co-pricing-item active--default" : "website-co-pricing-item",
                                        children: [
                                            item.active == 1 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "pricing--badge website-co-text-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Recommended"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "title",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "name",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "subname",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.subtitle
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "price",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.price
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "pricing--overlay website-co-hover-3 website-co-hover-black"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "image website-co-text-white",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            "aria-hidden": "true",
                                                            className: item.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "list",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                children: item.list.map((element, element_key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        style: {
                                                                            "textDecoration": element.included == 0 ? "line-through" : "none"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "far fa-check-square"
                                                                            }),
                                                                            element.label
                                                                        ]
                                                                    }, `pricinglist${key}-item-${element_key}`))
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "website-co-btn website-co-hover-btn btn--border btn--full btn--color",
                                                        href: item.button.link,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.button.label
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, `pricing-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Prijzen = (PricingSection);


/***/ })

};
;