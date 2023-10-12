"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/counters.json
const counters_namespaceObject = JSON.parse('{"e":[{"value":"23","label":"Team members","after":""},{"value":"99","label":"Completed projects","after":"+"},{"value":"12","label":"Lines of code","after":"M"}]}');
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/sections/Counters.jsx



const CountersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: counters_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "website-co-counter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num website-co-text-white js-counter",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_countup_default()), {
                                            end: item.value,
                                            duration: 7,
                                            enableScrollSpy: true,
                                            scrollSpyOnce: true
                                        })
                                    }),
                                    item.after != "" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num-after website-co-text-white",
                                        children: item.after
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label",
                                        children: item.label
                                    })
                                ]
                            })
                        }, `counters-item-${key}`))
                })
            })
        })
    });
};
/* harmony default export */ const Counters = (CountersSection);


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Video)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/video.json
const video_namespaceObject = JSON.parse('{"PS":"Play Video - Play Video - Play Video -","lX":"Gu6z6kIukgg","Md":"/images/posts1.jpg"}');
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Video.jsx




const VideoSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* circleText */.V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "website-co-video",
                    "data-website-co-overlay": true,
                    "data-website-co-scroll": true,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "image",
                            onClick: (e)=>clickedVideoButton(e),
                            style: {
                                "backgroundImage": "url(" + video_namespaceObject.Md + ")"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                            className: "js-video-iframe",
                            "data-src": "https://www.youtube.com/embed/" + video_namespaceObject.lX + "?showinfo=0&rel=0&autoplay=1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "play website-co-circle-text",
                            onClick: (e)=>clickedVideoButton(e),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "arrow"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "label website-co-text-black website-co-circle-text-label",
                                    children: video_namespaceObject.PS
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Video = (VideoSection);


/***/ })

};
;