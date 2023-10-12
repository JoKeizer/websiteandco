"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Partners)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/partners.json
const partners_namespaceObject = JSON.parse('{"Oc":"Exclusieve klanten","TN":"Met plezier hebben we samengewerkt met deze klanten","ev":[{"link":"https://tudormassagepraktijk.com","label":"Bekijk website","image":"/images/tudor-massagepraktijk-icon.jpg"},{"link":"https://balr.com","label":"Bekijk website","image":"/images/balr.jpg"},{"link":"https://fixables.com","label":"Bekijk website","image":"/images/fixables.jpg"},{"link":"https://anniekwintersacademy.nl","label":"Bekijk website","image":"/images/anniek-winters.jpg"},{"link":"https://wannhaves.com","label":"Bekijk website","image":"/images/wannahaves.jpg"},{"link":"https://alwayshealthyair.nl.com","label":"Bekijk website","image":"/images/always-healthy-air-icon.jpg"},{"link":"https://echoaanhetspaarne.nl","label":"Bekijk website","image":"/images/echo-aan-het-spaarne.jpg"},{"link":"","label":"Binnen kort online","image":"/images/m-verdegaal.jpg"}]}');
;// CONCATENATED MODULE: ./src/components/sections/Partners.jsx


const PartnersSection = ({ paddingTop  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: paddingTop ? "website-co-section gap-top-140" : "website-co-section",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "website-co-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "website-co-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: partners_namespaceObject.Oc
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "website-co-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: partners_namespaceObject.TN
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: partners_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-brands website-co-hover-3 website-co-hover-label",
                                    "data-website-co-overlay": true,
                                    "data-website-co-scroll": true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        target: "_blank",
                                        href: item.link,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "image",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    decoding: "async",
                                                    src: item.image,
                                                    width: "285",
                                                    height: "200",
                                                    alt: item.alt
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "label website-co-white-black",
                                                children: "Bekijk website"
                                            })
                                        ]
                                    })
                                })
                            }, `partners-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Partners = (PartnersSection);


/***/ })

};
;