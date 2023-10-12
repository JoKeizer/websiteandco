"use strict";
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 4957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action-2.json
const call_to_action_2_namespaceObject = JSON.parse('{"TN":"Let\'s make your <br>brand brilliant","Oc":"Have ideas for your business?","fL":"<p>Then let us know about it and we can see what we can do to help. Fill in this very quick enquiry.</p><p><a href=\\"tel:+02078523587\\">+ (020) 7852 3587</a></p>","Md":"/images/bg_map.jpg","xs":[{"link":"https://twitter.com/","icon":"fab fa-twitter","title":"Twitter"},{"link":"https://linkedin.com/","icon":"fab fa-linkedin-in","title":"LinkedIn"},{"link":"https://facebook.com/","icon":"fab fa-behance","title":"Behance"}]}');
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
;// CONCATENATED MODULE: ./src/components/sections/CallToAction2.jsx




const CallToAction2Section = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "website-co-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                style: {
                    "backgroundImage": "url(" + call_to_action_2_namespaceObject.Md + ")",
                    "backgroundPosition": "65% 0%",
                    "backgroundRepeat": "no-repeat",
                    "backgroundSize": "contain"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center gap-bottom-40",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "website-co-heading gap-bottom-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "website-co-subtitle-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: call_to_action_2_namespaceObject.Oc
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "website-co-title-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: call_to_action_2_namespaceObject.TN
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-cta-2-text",
                                    dangerouslySetInnerHTML: {
                                        __html: call_to_action_2_namespaceObject.fL
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "website-co-social-1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        children: call_to_action_2_namespaceObject.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: "website-co-social-link website-co-hover-2",
                                                    href: item.link,
                                                    title: item.title,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: item.icon
                                                    })
                                                })
                                            }, `cta-social-item-${key}`))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "website-co-form-box website-co-text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: "Send Us A Message"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Feel some love, to see what we can do...t!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Formik, {
                                        initialValues: {
                                            email: "",
                                            name: "",
                                            tel: "",
                                            message: ""
                                        },
                                        validate: (values)=>{
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = "Required";
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                errors.email = "Invalid email address";
                                            }
                                            return errors;
                                        },
                                        onSubmit: (values, { setSubmitting  })=>{
                                            const form = document.getElementById("contactForm");
                                            const status = document.getElementById("contactFormStatus");
                                            const data = new FormData();
                                            data.append("name", values.name);
                                            data.append("tel", values.tel);
                                            data.append("email", values.email);
                                            data.append("message", values.message);
                                            fetch(form.action, {
                                                method: "POST",
                                                body: data,
                                                headers: {
                                                    "Accept": "application/json"
                                                }
                                            }).then((response)=>{
                                                if (response.ok) {
                                                    status.innerHTML = "Thanks for your submission!";
                                                    form.reset();
                                                } else {
                                                    response.json().then((data)=>{
                                                        if (Object.hasOwn(data, "errors")) {
                                                            status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                                                        } else {
                                                            status.innerHTML = "Oops! There was a problem submitting your form";
                                                        }
                                                    });
                                                }
                                            }).catch((error)=>{
                                                status.innerHTML = "Oops! There was a problem submitting your form";
                                            });
                                            setSubmitting(false);
                                        },
                                        children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                onSubmit: handleSubmit,
                                                id: "contactForm",
                                                action: app/* settings.formspreeURL */.Xd.Tb,
                                                className: "cform",
                                                method: "post",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        size: "40",
                                                                        placeholder: "Full Name",
                                                                        type: "text",
                                                                        name: "name",
                                                                        required: "required",
                                                                        onChange: handleChange,
                                                                        onBlur: handleBlur,
                                                                        value: values.name
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        size: "40",
                                                                        placeholder: "Email Address",
                                                                        type: "email",
                                                                        name: "email",
                                                                        required: "required",
                                                                        onChange: handleChange,
                                                                        onBlur: handleBlur,
                                                                        value: values.email
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        size: "40",
                                                                        placeholder: "Phone",
                                                                        type: "tel",
                                                                        name: "tel",
                                                                        required: "required",
                                                                        onChange: handleChange,
                                                                        onBlur: handleBlur,
                                                                        value: values.tel
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                        cols: "40",
                                                                        rows: "10",
                                                                        placeholder: "Message",
                                                                        name: "message",
                                                                        required: "required",
                                                                        onChange: handleChange,
                                                                        onBlur: handleBlur,
                                                                        value: values.message
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        type: "submit",
                                                                        className: "website-co-btn website-co-hover-btn btn--active",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            children: "Send Message"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form-status alert-success",
                                                        id: "contactFormStatus"
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CallToAction2 = (CallToAction2Section);


/***/ })

};
;