"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8654], {
        60546: function(t, e, n) {
            n.d(e, {
                OC: function() {
                    return r
                }
            });
            var o = n(85893),
                i = n(67294),
                l = n(62246),
                c = n(4433),
                d = [{
                    id: "slantLeft",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L-0 ").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t, " ").concat(e)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(t, e) {
                        return "M0 0".concat(e, "L").concat(t / 2, " 0L").concat(t, " ").concat(e, "L").concat(1.5 * t, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 2, " ").concat(e, "L").concat(t, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(t, e) {
                        return "M0 0 C".concat(t / 2, " ").concat(e, " ").concat(t - t / 2, " ").concat(e, " ").concat(t, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(t, e) {
                        return "M0 0C0 0 ".concat(.2023 * t, " ").concat(e, " ").concat(.3333 * t, " ").concat(e, "C").concat(.4681 * t, " ").concat(e, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(e, " ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(e, " ").concat(.666 * t, " ").concat(e, "C").concat(.547 * t, " ").concat(e, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(e, " -0.00012207 ").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 3, " ").concat(e, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(e)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(e, "L").concat(t / 3, " 0L0 ").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " ").concat(e, "C").concat(t / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "H").concat(t)
                    }
                }],
                a = function(t) {
                    var e = t.width,
                        n = t.shape,
                        i = t.strokeWidth,
                        l = t.strokeColor,
                        a = t.strokeType,
                        r = d.find((function(t) {
                            return t.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        s = Math.floor(e),
                        u = "none" === r.id ? Math.floor(i) : Math.floor(s / c.c8),
                        v = r.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: l,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === a ? "40 20" : void 0
                        })
                    })
                },
                r = function(t) {
                    var e = t.contentRef,
                        n = t.border,
                        c = t.sectionDivider,
                        d = n || {},
                        r = d.type,
                        s = d.width,
                        u = d.color,
                        v = (0, i.useState)(0),
                        f = v[0],
                        m = v[1],
                        h = (0, i.useCallback)((function() {
                            var t;
                            m(null !== (t = e.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [e]);
                    return (0, l.Z)(h, n ? e : null), n ? (0, o.jsx)(a, {
                        width: f,
                        shape: c,
                        strokeType: r,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        28654: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var o = n(26042),
                i = n(85893),
                l = n(67294),
                c = n(69623),
                d = n(29260),
                a = n.n(d),
                r = n(399),
                s = n(52077),
                u = n(21123),
                v = n(41370),
                f = n(4433),
                m = n(60546),
                h = n(69396),
                g = (0, l.forwardRef)((function(t, e) {
                    var n = t.children,
                        l = t.block,
                        d = t.textColor,
                        a = t.headerHeight,
                        r = t.stickyHeaderOffsetStyle,
                        s = t.id,
                        u = t.noPadding,
                        v = t.minHeight,
                        g = t.border,
                        x = t.divider,
                        b = 1 === (null === l || void 0 === l ? void 0 : l.idx) && (null === l || void 0 === l ? void 0 : l.combineWithHeader);
                    return (0, i.jsxs)("section", {
                        className: "relative",
                        children: [(0, i.jsx)("div", {
                            ref: e,
                            id: s,
                            "data-text-color": d,
                            className: (0, c.AK)("flex relative break-word", u ? "" : (0, c.A2)(null === l || void 0 === l ? void 0 : l.verticalAlign)),
                            style: (0, h.Z)((0, o.Z)({}, (null === l || void 0 === l ? void 0 : l.combineWithHeader) ? {
                                marginTop: "-".concat(a, "px"),
                                paddingTop: u ? "" : "".concat(a, "px")
                            } : {}, (0, f.$h)(l), r), {
                                minHeight: v
                            }),
                            "data-combine-with-header": b,
                            children: n
                        }), g && (0, i.jsx)(m.OC, {
                            contentRef: e,
                            border: g,
                            sectionDivider: x
                        })]
                    })
                }));

            function x(t) {
                var e, n, d, m, h, x = t.id,
                    b = t.block,
                    p = t.website,
                    w = t.previousBlock,
                    j = (t.isSeoHeadline, t.stickyHeaderOffsetStyle),
                    y = (0, l.useState)({
                        top: 0,
                        bottom: 0
                    }),
                    k = y[0],
                    H = y[1],
                    N = (0, l.useState)("#FFFFFF"),
                    A = N[0],
                    C = N[1],
                    P = (0, r.Z)(b).minHeight,
                    L = null === b || void 0 === b ? void 0 : b.headline,
                    M = null === b || void 0 === b ? void 0 : b.content,
                    K = (null === b || void 0 === b || null === (e = b.buttons) || void 0 === e ? void 0 : e.items) || [b.button],
                    S = (null === b || void 0 === b || null === (n = b.buttons) || void 0 === n ? void 0 : n.items) ? null === b || void 0 === b || null === (d = b.buttons) || void 0 === d ? void 0 : d.enabled : !!b.button,
                    F = !!(null === b || void 0 === b || null === (m = b.image) || void 0 === m ? void 0 : m.enabled),
                    R = F ? null === b || void 0 === b ? void 0 : b.image : null,
                    Z = (null === b || void 0 === b ? void 0 : b.align) || "center",
                    T = null === b || void 0 === b ? void 0 : b.animation,
                    W = null === p || void 0 === p ? void 0 : p.animation,
                    z = null === b || void 0 === b ? void 0 : b.divider,
                    E = null === b || void 0 === b ? void 0 : b.border,
                    O = (0, r.Z)(b).headerHeight,
                    B = 1 === (null === b || void 0 === b ? void 0 : b.idx) && !!(null === b || void 0 === b ? void 0 : b.combineWithHeader),
                    D = ["left", "right"].includes(null === R || void 0 === R ? void 0 : R.align) && (null === b || void 0 === b || null === (h = b.mobile) || void 0 === h ? void 0 : h.reverseOrder),
                    _ = (0, l.useRef)(null),
                    I = function(t) {
                        var e, n, o = {
                                none: {
                                    top: "pt-0",
                                    bottom: "pb-0"
                                },
                                small: {
                                    top: "pt-8 lg:pt-32",
                                    bottom: "pb-8 lg:pb-32"
                                },
                                medium: {
                                    top: "pt-12 lg:pt-40",
                                    bottom: "pb-12 lg:pb-40"
                                },
                                large: {
                                    top: "pt-20 lg:pt-48",
                                    bottom: "pb-20 lg:pb-48"
                                },
                                default: {
                                    top: "pt-12 lg:pt-32 xl:pt-40",
                                    bottom: "pb-12 lg:pb-32 xl:pb-40"
                                }
                            },
                            i = (null === (e = o[null === t || void 0 === t ? void 0 : t.top]) || void 0 === e ? void 0 : e.top) || o.default.top,
                            l = (null === (n = o[null === t || void 0 === t ? void 0 : t.bottom]) || void 0 === n ? void 0 : n.bottom) || o.default.bottom;
                        return "".concat(i, " ").concat(l)
                    },
                    U = function() {
                        switch (null === R || void 0 === R ? void 0 : R.align) {
                            case "left":
                                return "".concat(D ? "flex-col" : "flex-col-reverse", " lg:flex-row-reverse");
                            case "top":
                                return D ? "flex-col" : "flex-col-reverse";
                            case "bottom":
                                return D ? "flex-col-reverse" : "flex-col";
                            default:
                                return "".concat(D ? "flex-col-reverse" : "flex-col", " lg:flex-row")
                        }
                    },
                    V = function() {
                        switch (Z) {
                            case "left":
                                return "justify-start";
                            case "center":
                                return "justify-center";
                            case "right":
                                return "justify-end";
                            case "middle":
                                return (null === R || void 0 === R ? void 0 : R.borderless) ? "justify-center" : "items-center";
                            case "bottom":
                                return (null === R || void 0 === R ? void 0 : R.borderless) ? "justify-end" : "items-end";
                            case "top":
                                return (null === R || void 0 === R ? void 0 : R.borderless) ? "justify-start" : "items-start"
                        }
                    },
                    q = function() {
                        var t = (0, c.QW)(null === R || void 0 === R ? void 0 : R.media);
                        return t ? (0, i.jsx)(i.Fragment, {
                            children: (null === R || void 0 === R ? void 0 : R.media) ? (0, i.jsx)("div", {
                                className: (0, c.AK)("flex-shrink-0 relative mx-auto w-full h-full transition-all duration-300", (0, c.n3)(null === R || void 0 === R ? void 0 : R.aspectRatio)),
                                children: (0, i.jsx)(a(), {
                                    unoptimized: !0,
                                    layout: "fill",
                                    className: (0, c.AK)("transition-all duration-300", (0, c.yW)((null === R || void 0 === R ? void 0 : R.borderless) ? "no-rounded" : null === R || void 0 === R ? void 0 : R.cornerRadius, null === p || void 0 === p ? void 0 : p.cornerRadius)),
                                    src: t,
                                    objectFit: (null === R || void 0 === R ? void 0 : R.borderless) || !(null === R || void 0 === R ? void 0 : R.imageFit) ? "cover" : null === R || void 0 === R ? void 0 : R.imageFit,
                                    objectPosition: "".concat((null === R || void 0 === R ? void 0 : R.imagePositionX) || "center", " ").concat((null === R || void 0 === R ? void 0 : R.imagePositionY) || "center"),
                                    alt: R.altText || R.media.description || R.media.author,
                                    title: R.altText
                                })
                            }) : (0, i.jsx)("div", {
                                className: (0, c.AK)("flex-shrink-0 bg-gray-100 transition-all duration-300", (0, c.n3)(null === R || void 0 === R ? void 0 : R.aspectRatio))
                            })
                        }) : null
                    },
                    Q = function() {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(i.Fragment, {
                                children: [L && (0, i.jsx)("h2", {
                                    className: (0, c.AK)("mb-6 break-word transition-all duration-300", "text-".concat(Z), (0, c.Ae)(null === b || void 0 === b ? void 0 : b.headingTextStyle)),
                                    style: (0, o.Z)({
                                        color: A
                                    }, (0, c.j2)(p)),
                                    children: L
                                }), M && (0, i.jsx)("p", {
                                    className: (0, c.AK)("transition-all duration-300", (0, c.e0)((null === b || void 0 === b ? void 0 : b.bodyTextStyle) || (null === b || void 0 === b ? void 0 : b.subtextTextStyle))),
                                    style: (0, o.Z)({
                                        color: A
                                    }, (0, c.SV)(p)),
                                    children: M
                                })]
                            }), (null === K || void 0 === K ? void 0 : K.length) > 0 && S && (0, i.jsx)("div", {
                                className: "flex md:inline-flex flex-col md:flex-row md:gap-4 w-full md:w-max",
                                children: null === K || void 0 === K ? void 0 : K.map((function(t, e) {
                                    return (0, i.jsx)(s.Z, {
                                        button: t,
                                        block: b,
                                        website: p,
                                        className: (0, c.AK)("xl w-full md:w-max", L || M ? "mt-6 lg:mt-8" : "")
                                    }, "banner-button-".concat(e))
                                }))
                            })]
                        })
                    };
                return (0, i.jsxs)(g, {
                    ref: _,
                    block: b,
                    textColor: A,
                    headerHeight: O,
                    noPadding: null === R || void 0 === R ? void 0 : R.borderless,
                    id: x,
                    minHeight: P,
                    stickyHeaderOffsetStyle: j,
                    divider: z,
                    border: E,
                    children: [(0, i.jsx)("div", {
                        className: (0, c.AK)("w-full flex break-word transition-all duration-300", (null === R || void 0 === R ? void 0 : R.borderless) ? U() : (0, c.A2)(null === b || void 0 === b ? void 0 : b.verticalAlign)),
                        children: (null === R || void 0 === R ? void 0 : R.borderless) ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: (0, c.AK)("flex-1 relative"),
                                style: (null === R || void 0 === R ? void 0 : R.borderless) && ("right" === (null === R || void 0 === R ? void 0 : R.align) && !D || "left" === (null === R || void 0 === R ? void 0 : R.align) && D) ? {
                                    paddingTop: (null === k || void 0 === k ? void 0 : k.top) || 0,
                                    paddingBottom: (null === k || void 0 === k ? void 0 : k.bottom) || 0
                                } : {},
                                children: [(0, i.jsx)(u.Z, {
                                    block: b,
                                    website: p,
                                    setTextColor: C
                                }), (0, i.jsx)(v.Z, {
                                    settings: T,
                                    globalSettings: W,
                                    className: "relative z-10 w-full h-full",
                                    children: (0, i.jsx)("div", {
                                        className: (0, c.AK)("relative z-10 container flex flex-col h-full mx-auto px-5 md:px-6 lg:px-20", (null === R || void 0 === R ? void 0 : R.borderless) ? V() : (0, c.A2)(null === b || void 0 === b ? void 0 : b.verticalAlign, !0)),
                                        children: (0, i.jsx)("div", {
                                            className: (0, c.AK)("flex flex-col w-full max-w-3xl", "left" === (null === R || void 0 === R ? void 0 : R.align) ? "lg:mr-auto lg:ml-0" : "lg:mr-0 lg:ml-auto", I(null === b || void 0 === b ? void 0 : b.spacing)),
                                            children: Q()
                                        })
                                    })
                                })]
                            }), F && (0, i.jsx)("div", {
                                className: "lg:flex-1 relative",
                                children: q()
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(u.Z, {
                                block: b,
                                website: p,
                                setTextColor: C
                            }), (0, i.jsx)("div", {
                                className: (0, c.AK)("relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300", I(null === b || void 0 === b ? void 0 : b.spacing)),
                                children: (0, i.jsx)(v.Z, {
                                    settings: T,
                                    globalSettings: W,
                                    className: "relative z-10 w-full h-full",
                                    children: (0, i.jsxs)("div", {
                                        className: (0, c.AK)("flex w-full gap-10 lg:gap-20 transition-all duration-300", U(), V()),
                                        children: [(0, i.jsx)("div", {
                                            className: (0, c.AK)("flex-1 flex flex-col w-full max-w-3xl", function() {
                                                if (["left", "right"].includes(null === R || void 0 === R ? void 0 : R.align)) return "items-start";
                                                switch (Z) {
                                                    case "left":
                                                        return "items-start";
                                                    case "center":
                                                        return "items-center text-center mx-auto";
                                                    case "right":
                                                        return "items-end text-right ml-auto"
                                                }
                                            }()),
                                            children: Q()
                                        }), F && (0, i.jsx)("div", {
                                            className: (0, c.AK)("flex-1 flex w-full lg:max-w-1/2 h-full transition-all duration-300", function() {
                                                if (["left", "right"].includes(null === R || void 0 === R ? void 0 : R.align)) return "left" === Z ? "justify-end" : "justify-center lg:justify-start";
                                                switch (Z) {
                                                    case "left":
                                                        return "items-start lg:max-w-1/2";
                                                    case "center":
                                                        return "items-center lg:max-w-1/2 mx-auto text-center";
                                                    case "right":
                                                        return "items-end lg:max-w-1/2 ml-auto text-right"
                                                }
                                            }()),
                                            children: q()
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, i.jsx)(f.iz, {
                        contentRef: _,
                        divider: z,
                        previousDivider: null === w || void 0 === w ? void 0 : w.divider,
                        border: E,
                        previousBorder: null === w || void 0 === w ? void 0 : w.border,
                        dividerUniqueId: "".concat(x, "-").concat(z),
                        noPadding: !!(null === R || void 0 === R ? void 0 : R.borderless),
                        onPaddingChange: H,
                        combinedWithHeaderOffset: B ? O : 0
                    })]
                })
            }
        },
        399: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var o = n(67294),
                i = "website-header";

            function l(t) {
                var e;
                return t && 1 === t.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0
            }

            function c(t) {
                var e, n, i = (0, o.useState)(0),
                    c = i[0],
                    d = i[1],
                    a = (0, o.useState)([0, 0]),
                    r = a[0],
                    s = a[1];
                return (0, o.useEffect)((function() {
                    var e, n = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        e = new ResizeObserver((function() {
                            t && d(l(t))
                        })), o && e.observe(o)
                    } catch (i) {}
                    return window.addEventListener("resize", n), n(),
                        function() {
                            window.removeEventListener("resize", n), e && e.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && d(l(t))
                }), [t, r]), {
                    minHeight: (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : c, "px)") : "134px",
                    headerHeight: c
                }
            }
        }
    }
]);