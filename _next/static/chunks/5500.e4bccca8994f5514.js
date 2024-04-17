"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5500], {
        60546: function(t, n, o) {
            o.d(n, {
                OC: function() {
                    return l
                }
            });
            var e = o(85893),
                c = o(67294),
                i = o(62246),
                a = o(4433),
                d = [{
                    id: "slantLeft",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0L-0 ").concat(n)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t, " ").concat(n)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(t, n) {
                        return "M0 0".concat(n, "L").concat(t / 2, " 0L").concat(t, " ").concat(n, "L").concat(1.5 * t, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t / 2, " ").concat(n, "L").concat(t, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(t, n) {
                        return "M0 0 C".concat(t / 2, " ").concat(n, " ").concat(t - t / 2, " ").concat(n, " ").concat(t, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(n)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(t, n) {
                        return "M0 0C0 0 ".concat(.2023 * t, " ").concat(n, " ").concat(.3333 * t, " ").concat(n, "C").concat(.4681 * t, " ").concat(n, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(n, " ").concat(t, " ").concat(n)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(n, " ").concat(.666 * t, " ").concat(n, "C").concat(.547 * t, " ").concat(n, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t / 3, " ").concat(n, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(n)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(n, "L").concat(t / 3, " 0L0 ").concat(n)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " ").concat(n, "C").concat(t / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, "H").concat(t)
                    }
                }],
                r = function(t) {
                    var n = t.width,
                        o = t.shape,
                        c = t.strokeWidth,
                        i = t.strokeColor,
                        r = t.strokeType,
                        l = d.find((function(t) {
                            return t.id === (null !== o && void 0 !== o ? o : "none")
                        })),
                        u = Math.floor(n),
                        s = "none" === l.id ? Math.floor(c) : Math.floor(u / a.c8),
                        v = l.getPath(u, s);
                    return (0, e.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: s,
                        viewBox: "0 0 ".concat(u, " ").concat(s),
                        children: (0, e.jsx)("path", {
                            d: v,
                            stroke: i,
                            strokeWidth: c,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                l = function(t) {
                    var n = t.contentRef,
                        o = t.border,
                        a = t.sectionDivider,
                        d = o || {},
                        l = d.type,
                        u = d.width,
                        s = d.color,
                        v = (0, c.useState)(0),
                        h = v[0],
                        f = v[1],
                        g = (0, c.useCallback)((function() {
                            var t;
                            f(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, i.Z)(g, o ? n : null), o ? (0, e.jsx)(r, {
                        width: h,
                        shape: a,
                        strokeType: l,
                        strokeWidth: u,
                        strokeColor: s
                    }) : null
                }
        },
        25500: function(t, n, o) {
            o.r(n), o.d(n, {
                default: function() {
                    return h
                }
            });
            var e = o(26042),
                c = o(85893),
                i = o(69623),
                a = o(52077),
                d = o(399),
                r = o(21123),
                l = o(67294),
                u = o(4433),
                s = o(60546),
                v = o(41370);

            function h(t) {
                var n, o, h, f, g = t.id,
                    m = t.block,
                    x = t.website,
                    b = t.previousBlock,
                    w = t.isSeoHeadline,
                    p = t.stickyHeaderOffsetStyle,
                    k = null === m || void 0 === m ? void 0 : m.headline,
                    L = null === m || void 0 === m ? void 0 : m.content,
                    C = null === m || void 0 === m || null === (n = m.buttons) || void 0 === n ? void 0 : n.items,
                    j = (null === m || void 0 === m || null === (o = m.buttons) || void 0 === o ? void 0 : o.enabled) && (null === m || void 0 === m || null === (h = m.buttons) || void 0 === h || null === (f = h.items) || void 0 === f ? void 0 : f.length) > 0,
                    H = (null === m || void 0 === m ? void 0 : m.align) || "center",
                    M = null === m || void 0 === m ? void 0 : m.animation,
                    y = null === x || void 0 === x ? void 0 : x.animation,
                    P = null === m || void 0 === m ? void 0 : m.divider,
                    N = null === m || void 0 === m ? void 0 : m.border,
                    S = 1 === (null === m || void 0 === m ? void 0 : m.idx) && (null === m || void 0 === m ? void 0 : m.combineWithHeader),
                    A = (0, l.useState)("#FFFFFF"),
                    R = A[0],
                    W = A[1],
                    Z = (0, d.Z)(m),
                    E = Z.minHeight,
                    T = Z.headerHeight,
                    z = (0, l.useRef)(null);
                return (0, c.jsxs)("section", {
                    className: "relative",
                    children: [(0, c.jsxs)("div", {
                        ref: z,
                        id: g,
                        "data-text-color": R,
                        className: (0, i.AK)("flex-shrink-0 flex relative break-word", (0, i.A2)(null === m || void 0 === m ? void 0 : m.verticalAlign)),
                        style: (0, e.Z)({
                            minHeight: E
                        }, (null === m || void 0 === m ? void 0 : m.combineWithHeader) ? {
                            marginTop: "-".concat(T, "px"),
                            paddingTop: "".concat(T, "px")
                        } : {}, (0, u.$h)(m), p),
                        "data-combine-with-header": S,
                        children: [(0, c.jsx)(r.Z, {
                            block: m,
                            website: x,
                            setTextColor: W
                        }), (0, c.jsx)("div", {
                            className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === m || void 0 === m ? void 0 : m.spacing)),
                            children: (0, c.jsxs)(v.Z, {
                                settings: M,
                                globalSettings: y,
                                className: (0, i.AK)("max-w-3xl", "text-".concat(H), "left" === H ? "ml-0 mr-auto" : "right" === H ? "ml-auto mr-0" : "mx-auto"),
                                children: [k && (0, c.jsx)(i.s0, {
                                    className: (0, i.AK)("mb-6 break-word", "text-".concat(H), (0, i.Ae)(null === m || void 0 === m ? void 0 : m.headingTextStyle, "lg")),
                                    style: (0, e.Z)({
                                        color: R
                                    }, (0, i.j2)(x)),
                                    h1: w,
                                    children: k
                                }), L && (0, c.jsx)("p", {
                                    className: (0, i.AK)((0, i.e0)(null === m || void 0 === m ? void 0 : m.bodyTextStyle, "md")),
                                    style: (0, e.Z)({
                                        color: R
                                    }, (0, i.SV)(x)),
                                    children: L
                                }), j && (0, c.jsx)("div", {
                                    className: "flex md:inline-flex flex-col md:flex-row md:gap-4 ",
                                    children: null === C || void 0 === C ? void 0 : C.map((function(t, n) {
                                        return (0, c.jsx)(a.Z, {
                                            button: t,
                                            block: m,
                                            website: x,
                                            className: (0, i.AK)("xl w-full md:w-max", k || L ? "mt-6 lg:mt-8" : "")
                                        }, "banner-button-".concat(n))
                                    }))
                                })]
                            })
                        }), (0, c.jsx)(u.iz, {
                            contentRef: z,
                            divider: P,
                            previousDivider: null === b || void 0 === b ? void 0 : b.divider,
                            border: N,
                            previousBorder: null === b || void 0 === b ? void 0 : b.border,
                            dividerUniqueId: "".concat(g, "-").concat(P),
                            combinedWithHeaderOffset: S ? T : 0
                        })]
                    }), N && (0, c.jsx)(s.OC, {
                        contentRef: z,
                        border: N,
                        sectionDivider: P
                    })]
                })
            }
        },
        399: function(t, n, o) {
            o.d(n, {
                Z: function() {
                    return a
                }
            });
            var e = o(67294),
                c = "website-header";

            function i(t) {
                var n;
                return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(c)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function a(t) {
                var n, o, c = (0, e.useState)(0),
                    a = c[0],
                    d = c[1],
                    r = (0, e.useState)([0, 0]),
                    l = r[0],
                    u = r[1];
                return (0, e.useEffect)((function() {
                    var n, o = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var e = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && d(i(t))
                        })), e && n.observe(e)
                    } catch (c) {}
                    return window.addEventListener("resize", o), o(),
                        function() {
                            window.removeEventListener("resize", o), n && n.disconnect()
                        }
                }), []), (0, e.useEffect)((function() {
                    t && d(i(t))
                }), [t, l]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (o = t.spacing) || void 0 === o ? void 0 : o.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);