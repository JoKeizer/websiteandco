"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Go": () => (/* binding */ headerSticky),
/* harmony export */   "Jh": () => (/* binding */ servShowcaseHover),
/* harmony export */   "V0": () => (/* binding */ circleText),
/* harmony export */   "Zo": () => (/* binding */ footerSticky),
/* harmony export */   "dO": () => (/* binding */ showcaseHover),
/* harmony export */   "jx": () => (/* binding */ servicesHover)
/* harmony export */ });
/* unused harmony exports wordsWrap, overlayAnim */
// Header Sticky
const headerSticky = ()=>{
    let new_scroll_position = 0;
    let last_scroll_position;
    const header = document.querySelector(".website-co-header");
    window.addEventListener("scroll", function(e) {
        last_scroll_position = window.scrollY;
        // Scrolling down
        if (new_scroll_position < last_scroll_position && last_scroll_position > 50) {
            header.classList.remove("slideDown");
            header.classList.add("slideUp");
            header.classList.add("sticky");
        } else if (last_scroll_position < 50) {
            header.classList.remove("slideDown");
            header.classList.remove("sticky");
        } else if (new_scroll_position > last_scroll_position) {
            header.classList.remove("slideUp");
            header.classList.add("slideDown");
            header.classList.add("sticky");
        }
        new_scroll_position = last_scroll_position;
    });
};
// Footer Sticky
const footerSticky = ()=>{
    const footerFixed = document.querySelector(".footer--fixed .website-co-footer");
    const wrapper = document.querySelector(".wrapper");
    let footerHeight = footerFixed.offsetHeight;
    wrapper.style.marginBottom = footerHeight + "px";
};
// Services Hover
const servicesHover = ()=>{
    const items = document.querySelectorAll(".website-co-service-grid-item");
    const itemActive = document.querySelector(".website-co-service-grid-item.active--default");
    items.forEach((item)=>{
        item.addEventListener("mouseover", (e)=>{
            items.forEach((item)=>{
                item.classList.remove("active");
            });
            item.classList.add("active");
        });
        item.addEventListener("mouseleave", (e)=>{
            items.forEach((item)=>{
                item.classList.remove("active");
            });
            itemActive.classList.add("active");
        });
    });
};
// Circle Text
const circleText = ()=>{
    const labels = document.querySelectorAll(".website-co-circle-text .label");
    labels.forEach((item)=>{
        if (!item.classList.contains("loaded")) {
            let itemText = item.innerHTML;
            item.innerHTML = itemText.split("").map((char, i)=>`<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`).join("");
            item.classList.add("loaded");
        }
    });
};
// Portfolio Showcase Hover
const showcaseHover = ()=>{
    let firstItem = document.querySelector(".website-co-showcase-item:first-child");
    firstItem.classList.add("hover");
    let items = document.querySelectorAll(".website-co-showcase-item");
    items.forEach((item)=>{
        item.addEventListener("mouseenter", (e)=>{
            items.forEach((item)=>{
                item.classList.remove("hover");
            });
            item.classList.add("hover");
        });
    });
};
// Services Showcase Hover
const servShowcaseHover = ()=>{
    let firstItem = document.querySelector(".website-co-services-showcase .items ul li:first-child");
    firstItem.classList.add("hover");
    let items = document.querySelectorAll(".website-co-services-showcase .items ul li");
    items.forEach((item)=>{
        item.addEventListener("mouseenter", (e)=>{
            items.forEach((item)=>{
                item.classList.remove("hover");
            });
            item.classList.add("hover");
        });
    });
};
// Words Wrap
const wordsWrap = ()=>{
    const allWrap = document.querySelectorAll(".word");
    allWrap.forEach((item)=>{
        if (!item.parentNode.classList.contains("span")) {
            let wrapper = document.createElement("span");
            wrapper.classList.add("span");
            item.parentNode.insertBefore(wrapper, item);
            wrapper.appendChild(item);
        }
    });
};
// Overlay Animation
const overlayAnim = ()=>{
    const allOverlays = document.querySelectorAll("[data-website-co-overlay]");
    allOverlays.forEach((item)=>{
        let overlay = document.createElement("div");
        overlay.classList.add("website-co-overlay");
        item.appendChild(overlay);
    });
};


/***/ }),

/***/ 9781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ImageView)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const common_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.jsx



const ImgViews = ({ close , src  })=>{
    let domNode = common_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("img/") || a.href.includes("images/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);


/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/ImageView.jsx + 1 modules
var ImageView = __webpack_require__(9781);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/layouts/footers/DefaultFooter.js






const DefaultFooter = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* footerSticky */.Zo)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "website-co-footer footer--dark",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "footer--default",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-text website-co-text-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Website & Co"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    style: {
                                                        "opacity": "0.6"
                                                    },
                                                    children: [
                                                        "Niet alleen in de ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                            children: "topsport"
                                                        }),
                                                        ", maar ook in het bedrijfsleven is een winnaarsmentaliteit essentieel. Bij Website & Co delen we die topsportmentaliteit en staan we altijd klaar om jouw business naar de overwinning te leiden. Samen bouwen we aan online succes!"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-text website-co-text-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Contact"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    style: {
                                                        "opacity": "0.6"
                                                    },
                                                    children: [
                                                        "Clingenburg 13, 2135 CA ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "Hoofddorp "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    style: {
                                                        "opacity": "0.6"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "tel:+31641522043",
                                                            className: "website-co-lnk lnk--white",
                                                            target: "_blank",
                                                            children: "+31 641 522 043"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "mailto:jo@websiteandco.nl",
                                                            className: "website-co-lnk lnk--white",
                                                            target: "_blank",
                                                            children: "jo@websiteandco.nl"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row",
                                            children: app/* footer.gallery.map */.Mv.lj.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                        className: "gallery-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: item.image,
                                                            title: item.title,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: item.image,
                                                                alt: item.alt
                                                            })
                                                        })
                                                    })
                                                }, `fgallery-item-${key}`))
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "separator"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "copyright website-co-text-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: app/* footer.copy */.Mv.JG
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-social-1 website-co-social-active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            className: "website-co-social-link website-co-hover-2",
                                                            href: item.link,
                                                            title: item.title,
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: item.icon
                                                            })
                                                        })
                                                    }, `fsocial-item-${key}`))
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ImageView/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const footers_DefaultFooter = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/Footer2.js






const Footer2 = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* footerSticky */.Zo)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "website-co-footer footer--white",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "footer--default",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row gap-bottom-40",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "website-co-heading",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "website-co-title-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "Let’s Chat! Let’s Build Something ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "Awesome Together"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact",
                                                    className: "website-co-footer-lnk website-co-lnk lnk--revert",
                                                    children: "Lets Start Project"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row gap-bottom-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-f-logo gap-bottom-40",
                                            style: {
                                                "maxWidth": "70px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: app/* footer.logo.image */.Mv.jY.B,
                                                    alt: app/* footer.logo.alt */.Mv.jY.w
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-text",
                                            children: [
                                                "From the moment our company was founded, we have helped our clients find exceptional solutions ",
                                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                    children: "for their businesses"
                                                }),
                                                "."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-text",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "website-co-footer-menu",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/services/service-1",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "website-co-lnk",
                                                                children: "Branding & logo"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/services/service-2",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "website-co-lnk",
                                                                children: "Web design"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/services/service-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "website-co-lnk",
                                                                children: "Development Services"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/blog",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "website-co-lnk",
                                                                children: "Publications"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "website-co-text",
                                            children: [
                                                "Baird House, 15-17 St Cross St ",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "London EC1N 8UW",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            className: "website-co-lnk",
                                                            href: "tel:+4402074302973",
                                                            target: "blank",
                                                            children: "+44 (0) 20 7430 2973"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            className: "website-co-lnk",
                                                            href: "mailto:username@domain.com",
                                                            target: "blank",
                                                            children: "username@domain.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "copyright",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: app/* footer.copy */.Mv.JG
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-social-1 website-co-social-active",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            className: "website-co-social-link website-co-hover-2",
                                                            href: item.link,
                                                            title: item.title,
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: item.icon
                                                            })
                                                        })
                                                    }, `fsocial-item-${key}`))
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ImageView/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const footers_Footer2 = (Footer2);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js



const Footer = ({ footer  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
        case 2:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_Footer2, {});
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
    }
};
/* harmony default export */ const Index = (Footer);

;// CONCATENATED MODULE: ./src/layouts/headers/DefaultHeader.js





const DefaultHeader = ({ darkHeader , cartButton  })=>{
    const navItems = [];
    app/* header.menu.forEach */.Fs.GI.forEach((item, index)=>{
        let s_class1 = "dropdown-link";
        if (item.children != 0) {
            s_class1 += "menu-item-has-children";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    const [desktopMenu, desktopMenuToggle] = (0,external_react_.useState)(false);
    const clickedDesktopMenu = (e)=>{
        e.preventDefault();
        desktopMenuToggle(!desktopMenu);
        const menuPopup = document.querySelector(".website-co-menu-popup");
        const menuContainer = document.querySelector(".website-co-menu-container");
        const menuBody = document.querySelector("body");
        const menuHeader = document.querySelector(".website-co-header");
        const menuButton = document.querySelector(".website-co-menu-btn");
        if (desktopMenu) {
            menuBody.classList.remove("website-co--noscroll");
            menuHeader.classList.remove("header--active");
            menuPopup.classList.remove("menu--ready");
            menuContainer.classList.add("website-co--noscroll");
            menuButton.parentNode.classList.add("website-co--notouch");
            let timer1 = setTimeout(function() {
                menuPopup.classList.remove("menu--open");
            }, 300);
            let timer2 = setTimeout(function() {
                menuButton.parentNode.classList.remove("website-co--notouch");
                menuPopup.classList.remove("menu--visible");
            }, 1600);
        } else {
            menuBody.classList.add("website-co--noscroll");
            menuHeader.classList.add("header--active");
            menuPopup.classList.add("menu--visible");
            menuPopup.classList.add("menu--open");
            menuButton.parentNode.classList.add("website-co--notouch");
            let timer3 = setTimeout(function() {
                menuButton.parentNode.classList.remove("website-co--notouch");
                menuContainer.classList.remove("website-co--noscroll");
                menuPopup.classList.add("menu--ready");
            }, 600);
        }
    };
    const clickedMobileMenuItemParent = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.toggle("opened");
    };
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* headerSticky */.Go)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            className: darkHeader ? "website-co-header" : "website-co-header header--white",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header--builder",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-logo-image",
                                    style: {
                                        "maxWidth": "70px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: app/* header.logo.image */.Fs.jY.BH,
                                                alt: app/* header.logo.alt */.Fs.jY.wp
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                className: "logo--white",
                                                src: app/* header.logo.image_white */.Fs.jY.gB,
                                                alt: app/* header.logo.alt */.Fs.jY.wp
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-6 align-self-center align-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        className: desktopMenu ? "website-co-menu-btn btn--active" : "website-co-menu-btn",
                                        onClick: (e)=>clickedDesktopMenu(e),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "website-co-menu-popup align-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-overlay"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-overlay-after"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-container website-co--noscroll",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "container",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "website-co-menu",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: "website-co-menu-nav",
                                                            children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                    className: item.classes,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            className: item.children ? "website-co-lnk lnk--active website-co-dropdown-toggle" : "website-co-lnk lnk--active",
                                                                            onClick: item.children != 0 ? (e)=>clickedMobileMenuItemParent(e) : "",
                                                                            href: item.link,
                                                                            children: item.label
                                                                        }),
                                                                        item.children && /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "icon fas fa-chevron-down"
                                                                        }),
                                                                        item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                            className: "sub-menu",
                                                                            children: item.children.map((subitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        className: "website-co-lnk lnk--active",
                                                                                        href: subitem.link,
                                                                                        children: subitem.label
                                                                                    })
                                                                                }, `header-nav-sub-item-${key}`))
                                                                        })
                                                                    ]
                                                                }, `header-nav-item-${key}`))
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "website-co-head-btn website-co-hover-btn",
                                    href: app/* header.button.link */.Fs.LI.p,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "website-co-lnk lnk--active",
                                                children: app/* header.button.label */.Fs.LI.P
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "arrow",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const headers_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Header2.js





const Header2 = ({ darkHeader , cartButton  })=>{
    const navItems = [];
    app/* header.menu.forEach */.Fs.GI.forEach((item, index)=>{
        let s_class1 = "dropdown-link";
        if (item.children != 0) {
            s_class1 += "menu-item-has-children";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    const [desktopMenu, desktopMenuToggle] = (0,external_react_.useState)(false);
    const clickedDesktopMenu = (e)=>{
        e.preventDefault();
        desktopMenuToggle(!desktopMenu);
        const menuPopup = document.querySelector(".website-co-menu-popup");
        const menuContainer = document.querySelector(".website-co-menu-container");
        const menuBody = document.querySelector("body");
        const menuHeader = document.querySelector(".website-co-header");
        const menuButton = document.querySelector(".website-co-menu-btn");
        if (desktopMenu) {
            menuBody.classList.remove("website-co--noscroll");
            menuHeader.classList.remove("header--active");
            menuPopup.classList.remove("menu--ready");
            menuContainer.classList.add("website-co--noscroll");
            menuButton.parentNode.classList.add("website-co--notouch");
            let timer1 = setTimeout(function() {
                menuPopup.classList.remove("menu--open");
            }, 300);
            let timer2 = setTimeout(function() {
                menuButton.parentNode.classList.remove("website-co--notouch");
                menuPopup.classList.remove("menu--visible");
            }, 1600);
        } else {
            menuBody.classList.add("website-co--noscroll");
            menuHeader.classList.add("header--active");
            menuPopup.classList.add("menu--visible");
            menuPopup.classList.add("menu--open");
            menuButton.parentNode.classList.add("website-co--notouch");
            let timer3 = setTimeout(function() {
                menuButton.parentNode.classList.remove("website-co--notouch");
                menuContainer.classList.remove("website-co--noscroll");
                menuPopup.classList.add("menu--ready");
            }, 600);
        }
    };
    const clickedMobileMenuItemParent = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.toggle("opened");
    };
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* headerSticky */.Go)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            className: "website-co-header header--white",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header--builder",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-logo-image",
                                    style: {
                                        "maxWidth": "70px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: app/* header.logo.image */.Fs.jY.BH,
                                                alt: app/* header.logo.alt */.Fs.jY.wp
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                className: "logo--white",
                                                src: app/* header.logo.image_white */.Fs.jY.gB,
                                                alt: app/* header.logo.alt */.Fs.jY.wp
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-8 col-xs-8 col-sm-8 col-md-4 col-lg-6 align-self-center align-center m-align-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "website-co-menu-horizontal",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            className: "website-co-menu-nav",
                                            children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: item.classes,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            className: item.children ? "website-co-lnk lnk--active website-co-dropdown-toggle" : "website-co-lnk lnk--active",
                                                            onClick: item.children != 0 ? (e)=>clickedMobileMenuItemParent(e) : "",
                                                            href: item.link,
                                                            children: item.label
                                                        }),
                                                        item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "icon fas fa-chevron-down"
                                                        }),
                                                        item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: "sub-menu",
                                                            children: item.children.map((subitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        className: "website-co-lnk lnk--active",
                                                                        href: subitem.link,
                                                                        children: subitem.label
                                                                    })
                                                                }, `header-nav-sub-item-${key}`))
                                                        })
                                                    ]
                                                }, `header-nav-item-${key}`))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        className: "website-co-menu-btn",
                                        style: {
                                            "display": "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "website-co-menu-popup align-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-overlay"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-overlay-after"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "website-co-menu-container website-co--noscroll",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "container",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "website-co-menu",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: "website-co-menu-nav",
                                                            children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                    className: item.classes,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            className: item.children ? "website-co-lnk lnk--active website-co-dropdown-toggle" : "website-co-lnk lnk--active",
                                                                            onClick: item.children != 0 ? (e)=>clickedMobileMenuItemParent(e) : "",
                                                                            href: item.link,
                                                                            children: item.label
                                                                        }),
                                                                        item.children && /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "icon fas fa-chevron-down"
                                                                        }),
                                                                        item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                            className: "sub-menu",
                                                                            children: item.children.map((subitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        className: "website-co-lnk lnk--active",
                                                                                        href: subitem.link,
                                                                                        children: subitem.label
                                                                                    })
                                                                                }, `header-nav-sub-item-${key}`))
                                                                        })
                                                                    ]
                                                                }, `header-nav-item-${key}`))
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right hide-on-mobile-extra",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "website-co-btn website-co-hover-btn btn--active",
                                    href: app/* header.button2.link */.Fs.NK.p,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: app/* header.button2.label */.Fs.NK.P
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const headers_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js



const Header = ({ header , darkHeader , cartButton  })=>{
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                darkHeader: darkHeader,
                cartButton: cartButton
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_Header2, {
                darkHeader: darkHeader,
                cartButton: cartButton
            });
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                darkHeader: darkHeader,
                cartButton: cartButton
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

;// CONCATENATED MODULE: ./src/layouts/Preloader.jsx


const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "preloader",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "preloader__spinner",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "preloader__double-bounce"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "preloader__double-bounce preloader__double-bounce--delay"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layouts_Preloader = (Preloader);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/layouts/Layouts.js







const SplitScrollAnimation = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../layouts/Layouts.js -> " + "@components/SplitScrollAnimation"
        ]
    },
    ssr: false
});
const Layouts = ({ children , header , footer , noHeader , noFooter , darkHeader , cartButton  })=>{
    (0,external_react_.useEffect)(()=>{
        // preloader
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: noFooter ? "website-co-page" : `website-co-page footer--fixed`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(layouts_Preloader, {}),
                !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                    header: header,
                    darkHeader: darkHeader,
                    cartButton: cartButton
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "wrapper",
                    children: children
                }),
                !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                    footer: footer
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SplitScrollAnimation, {})
            ]
        })
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;