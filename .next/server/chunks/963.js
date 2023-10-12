"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services-2.json
const services_2_namespaceObject = JSON.parse('{"Oc":"Welcome to website-co","TN":"Digital Creative Agency <br />with Breaking Ideas","fL":"From the moment our company was founded, we have helped our clients find <strong>exceptional solutions for their businesses</strong>, creating memorable brands and digital products. Our expertise grows with each year.","uF":{"B":"/images/signature.png","w":"signature"},"ev":[{"icon":"/images/serv-icon4.png","title":"Brand Creation","list":["Brand Strategy","Visual Identity","Naming","Toolkits","Guidelines"],"link":"/services/service-1"},{"icon":"/images/serv-icon5.png","title":"Web Campaigns","list":["Creative Strategy","Creative Direction","Concepts","Copywriting","Social Media"],"link":"/services/service-2"},{"icon":"/images/serv-icon6.png","title":"UX / UI Design","list":["Native and Web Apps","Campaign / Brand Sites","Machine Learning / AI","Brand Design","Product Animation Design"],"link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services2.jsx



const Services2Section = ({ introHidden , noPaddingBottom  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: noPaddingBottom ? "website-co-section gap-top-140" : "website-co-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    introHidden == undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "website-co-heading gap-bottom-40 align-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "website-co-subtitle-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: services_2_namespaceObject.Oc
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "website-co-title-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: services_2_namespaceObject.TN
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row gap-bottom-60",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3 align-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "website-co-text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: services_2_namespaceObject.fL
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: services_2_namespaceObject.uF.B,
                                                    alt: services_2_namespaceObject.uF.w
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: services_2_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "website-co-service-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-service-item-inner website-co-hover-3 website-co-hover-black",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-website-co-scroll": true,
                                                            children: item.title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "list",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: item.list.map((elem, key2)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    className: "website-co-lnk",
                                                                    href: item.link,
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        "data-splitting": true,
                                                                        "data-website-co-scroll": true,
                                                                        children: elem
                                                                    })
                                                                })
                                                            }, `services2-item-${key}-list-element-${key2}`))
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `services2-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services2 = (Services2Section);


/***/ })

};
;