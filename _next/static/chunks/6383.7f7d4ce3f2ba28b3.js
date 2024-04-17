"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6383], {
        60546: function(e, t, n) {
            n.d(t, {
                OC: function() {
                    return d
                }
            });
            var i = n(85893),
                o = n(67294),
                c = n(62246),
                l = n(4433),
                r = [{
                    id: "slantLeft",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L-0 ").concat(t)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e, " ").concat(t)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, t) {
                        return "M0 0".concat(t, "L").concat(e / 2, " 0L").concat(e, " ").concat(t, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 2, " ").concat(t, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, t) {
                        return "M0 0 C".concat(e / 2, " ").concat(t, " ").concat(e - e / 2, " ").concat(t, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, t) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(t, " ").concat(.3333 * e, " ").concat(t, "C").concat(.4681 * e, " ").concat(t, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(t, " ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(t, " ").concat(.666 * e, " ").concat(t, "C").concat(.547 * e, " ").concat(t, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(t, " -0.00012207 ").concat(t)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 3, " ").concat(t, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(t)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(t, "L").concat(e / 3, " 0L0 ").concat(t)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " ").concat(t, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "H").concat(e)
                    }
                }],
                a = function(e) {
                    var t = e.width,
                        n = e.shape,
                        o = e.strokeWidth,
                        c = e.strokeColor,
                        a = e.strokeType,
                        d = r.find((function(e) {
                            return e.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        s = Math.floor(t),
                        u = "none" === d.id ? Math.floor(o) : Math.floor(s / l.c8),
                        v = d.getPath(s, u);
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, i.jsx)("path", {
                            d: v,
                            stroke: c,
                            strokeWidth: o,
                            strokeDasharray: "dashed" === a ? "40 20" : void 0
                        })
                    })
                },
                d = function(e) {
                    var t = e.contentRef,
                        n = e.border,
                        l = e.sectionDivider,
                        r = n || {},
                        d = r.type,
                        s = r.width,
                        u = r.color,
                        v = (0, o.useState)(0),
                        f = v[0],
                        g = v[1],
                        h = (0, o.useCallback)((function() {
                            var e;
                            g(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [t]);
                    return (0, c.Z)(h, n ? t : null), n ? (0, i.jsx)(a, {
                        width: f,
                        shape: l,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        76383: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n(26042),
                o = n(85893),
                c = n(69623),
                l = n(29260),
                r = n.n(l),
                a = n(52077),
                d = n(399),
                s = n(67294),
                u = n(21123),
                v = n(4433),
                f = n(60546),
                g = n(41370);

            function h(e) {
                var t, n, l = e.id,
                    h = e.block,
                    m = e.website,
                    x = e.previousBlock,
                    w = e.stickyHeaderOffsetStyle,
                    b = null === h || void 0 === h ? void 0 : h.content,
                    p = null === h || void 0 === h ? void 0 : h.align,
                    j = null === h || void 0 === h ? void 0 : h.image,
                    y = null === h || void 0 === h ? void 0 : h.button,
                    k = null === h || void 0 === h ? void 0 : h.animation,
                    C = null === m || void 0 === m ? void 0 : m.animation,
                    L = null === h || void 0 === h ? void 0 : h.divider,
                    P = null === h || void 0 === h ? void 0 : h.border,
                    M = (0, s.useRef)(null),
                    N = (0, s.useState)("#FFFFFF"),
                    A = N[0],
                    H = N[1],
                    R = (0, s.useState)({
                        top: 0,
                        bottom: 0
                    }),
                    F = R[0],
                    K = R[1],
                    Z = ["left", "right"].includes(null === h || void 0 === h || null === (t = h.image) || void 0 === t ? void 0 : t.align) && (null === h || void 0 === h || null === (n = h.mobile) || void 0 === n ? void 0 : n.reverseOrder),
                    z = (0, d.Z)(h).minHeight,
                    S = function() {
                        var e;
                        switch (null === h || void 0 === h || null === (e = h.image) || void 0 === e ? void 0 : e.align) {
                            case "left":
                                return "".concat(Z ? "flex-col" : "flex-col-reverse", " lg:flex-row-reverse");
                            case "top":
                                return Z ? "flex-col" : "flex-col-reverse";
                            case "bottom":
                                return Z ? "flex-col-reverse" : "flex-col";
                            default:
                                return "".concat(Z ? "flex-col-reverse" : "flex-col", " lg:flex-row")
                        }
                    },
                    W = function() {
                        switch (p) {
                            case "left":
                                return "justify-start";
                            case "center":
                                return "justify-center";
                            case "right":
                                return "justify-end";
                            case "middle":
                                return (null === j || void 0 === j ? void 0 : j.borderless) ? "justify-center" : "items-center";
                            case "bottom":
                                return (null === j || void 0 === j ? void 0 : j.borderless) ? "justify-end" : "items-end";
                            case "top":
                                return (null === j || void 0 === j ? void 0 : j.borderless) ? "justify-start" : "items-start"
                        }
                    },
                    D = function(e) {
                        return (0, c.QW)(null === j || void 0 === j ? void 0 : j.media) ? (0, o.jsx)("div", {
                            className: (0, c.AK)("flex-shrink-0 relative w-full h-full mx-auto", (0, c.n3)(j.aspectRatio)),
                            children: (0, o.jsx)(r(), {
                                sizes: "200vw",
                                quality: 90,
                                onContextMenu: function(e) {
                                    e.preventDefault()
                                },
                                priority: (null === h || void 0 === h ? void 0 : h.idx) <= 1,
                                src: (0, c.QW)(null === j || void 0 === j ? void 0 : j.media),
                                objectFit: e || !j.imageFit ? "cover" : j.imageFit,
                                objectPosition: "".concat(j.imagePositionX || "center", " ").concat(j.imagePositionY || "center"),
                                layout: "fill",
                                alt: j.altText || j.media.description || j.media.author,
                                title: j.altText,
                                className: e ? "" : (0, c.yW)(null === j || void 0 === j ? void 0 : j.cornerRadius, null === m || void 0 === m ? void 0 : m.cornerRadius)
                            })
                        }) : null
                    },
                    E = function() {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: "rich-text-block",
                                style: {
                                    color: A
                                },
                                dangerouslySetInnerHTML: {
                                    __html: b
                                }
                            }), y && (0, o.jsx)(a.Z, {
                                button: y,
                                block: h,
                                website: m,
                                className: "lg mt-6 lg:mt-8 w-full md:w-max"
                            })]
                        })
                    };
                return (0, o.jsxs)("section", {
                    className: "relative",
                    children: [(null === j || void 0 === j ? void 0 : j.borderless) ? (0, o.jsxs)("div", {
                        ref: M,
                        id: l,
                        className: (0, c.AK)("relative flex break-word", S()),
                        style: (0, i.Z)({
                            minHeight: z
                        }, (0, v.$h)(h), w),
                        children: [(0, o.jsxs)("div", {
                            className: (0, c.AK)("flex-1 relative"),
                            style: (null === j || void 0 === j ? void 0 : j.borderless) && ("right" === (null === j || void 0 === j ? void 0 : j.align) && !Z || "left" === (null === j || void 0 === j ? void 0 : j.align) && Z) ? {
                                paddingTop: (null === F || void 0 === F ? void 0 : F.top) || 0,
                                paddingBottom: (null === F || void 0 === F ? void 0 : F.bottom) || 0
                            } : {},
                            children: [(0, o.jsx)(u.Z, {
                                block: h,
                                website: m,
                                setTextColor: H
                            }), (0, o.jsx)("div", {
                                className: (0, c.AK)("relative z-10 container flex flex-col h-full mx-auto px-5 md:px-6 lg:px-20", W(), (0, c.A2)(null === h || void 0 === h ? void 0 : h.verticalAlign, !0)),
                                children: (0, o.jsx)(g.Z, {
                                    settings: k,
                                    globalSettings: C,
                                    children: (0, o.jsx)("div", {
                                        className: (0, c.AK)("flex flex-col w-full lg:max-w-[512px] xl:max-w-screen-sm 2xl:max-w-screen-md", "left" === (null === j || void 0 === j ? void 0 : j.align) ? "lg:mr-auto lg:ml-0" : "lg:mr-0 lg:ml-auto", (0, c.bG)(null === h || void 0 === h ? void 0 : h.spacing)),
                                        children: E()
                                    })
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: "lg:flex-1 relative",
                            children: D(!0)
                        }), (0, o.jsx)(v.iz, {
                            contentRef: M,
                            divider: L,
                            previousDivider: null === x || void 0 === x ? void 0 : x.divider,
                            border: P,
                            previousBorder: null === x || void 0 === x ? void 0 : x.border,
                            dividerUniqueId: "".concat(l, "-").concat(L),
                            noPadding: !0,
                            onPaddingChange: K
                        })]
                    }) : (0, o.jsxs)("div", {
                        ref: M,
                        id: l,
                        className: (0, c.AK)("flex flex-none flex-shrink-0 relative break-word", (0, c.A2)(null === h || void 0 === h ? void 0 : h.verticalAlign)),
                        style: (0, i.Z)({
                            minHeight: z
                        }, (0, v.$h)(h)),
                        children: [(0, o.jsx)(u.Z, {
                            block: h,
                            website: m,
                            setTextColor: H
                        }), (0, o.jsx)("div", {
                            className: (0, c.AK)("relative z-10 container mx-auto", (0, c.bG)(null === h || void 0 === h ? void 0 : h.spacing)),
                            children: (0, o.jsxs)(g.Z, {
                                settings: k,
                                globalSettings: C,
                                className: (0, c.AK)("flex w-full gap-10 lg:gap-20", S(), W()),
                                children: [(0, o.jsx)("div", {
                                    className: (0, c.AK)("flex-1 flex flex-col max-w-240", function() {
                                        var e;
                                        if (["left", "right"].includes(null === h || void 0 === h || null === (e = h.image) || void 0 === e ? void 0 : e.align)) return "items-start";
                                        switch (p) {
                                            case "left":
                                                return "items-start";
                                            case "center":
                                                return "items-center text-center mx-auto";
                                            case "right":
                                                return "items-end text-right ml-auto"
                                        }
                                    }()),
                                    children: E()
                                }), (0, o.jsx)("div", {
                                    className: (0, c.AK)("flex-1 flex w-full h-full", function() {
                                        var e;
                                        if (["left", "right"].includes(null === h || void 0 === h || null === (e = h.image) || void 0 === e ? void 0 : e.align)) return "left" === p ? "justify-end" : "justify-center lg:justify-start";
                                        switch (p) {
                                            case "left":
                                                return "items-start lg:max-w-1/2";
                                            case "center":
                                                return "items-center lg:max-w-1/2 mx-auto text-center";
                                            case "right":
                                                return "items-end lg:max-w-1/2 ml-auto text-right"
                                        }
                                    }()),
                                    children: D(!1)
                                })]
                            })
                        }), (0, o.jsx)(v.iz, {
                            contentRef: M,
                            divider: L,
                            previousDivider: null === x || void 0 === x ? void 0 : x.divider,
                            border: P,
                            previousBorder: null === x || void 0 === x ? void 0 : x.border,
                            dividerUniqueId: "".concat(l, "-").concat(L)
                        })]
                    }), P && (0, o.jsx)(f.OC, {
                        contentRef: M,
                        border: P,
                        sectionDivider: L
                    })]
                })
            }
        },
        399: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var i = n(67294),
                o = "website-header";

            function c(e) {
                var t;
                return e && 1 === e.idx ? (null === (t = null === document || void 0 === document ? void 0 : document.getElementById(o)) || void 0 === t ? void 0 : t.offsetHeight) || 80 : 0
            }

            function l(e) {
                var t, n, o = (0, i.useState)(0),
                    l = o[0],
                    r = o[1],
                    a = (0, i.useState)([0, 0]),
                    d = a[0],
                    s = a[1];
                return (0, i.useEffect)((function() {
                    var t, n = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var i = document.getElementById("website-header");
                        t = new ResizeObserver((function() {
                            e && r(c(e))
                        })), i && t.observe(i)
                    } catch (o) {}
                    return window.addEventListener("resize", n), n(),
                        function() {
                            window.removeEventListener("resize", n), t && t.disconnect()
                        }
                }), []), (0, i.useEffect)((function() {
                    e && r(c(e))
                }), [e, d]), {
                    minHeight: (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : l, "px)") : "134px",
                    headerHeight: l
                }
            }
        }
    }
]);