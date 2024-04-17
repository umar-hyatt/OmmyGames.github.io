"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [866], {
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
                r = [{
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
                d = function(t) {
                    var n = t.width,
                        o = t.shape,
                        c = t.strokeWidth,
                        i = t.strokeColor,
                        d = t.strokeType,
                        l = r.find((function(t) {
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
                            strokeDasharray: "dashed" === d ? "40 20" : void 0
                        })
                    })
                },
                l = function(t) {
                    var n = t.contentRef,
                        o = t.border,
                        a = t.sectionDivider,
                        r = o || {},
                        l = r.type,
                        u = r.width,
                        s = r.color,
                        v = (0, c.useState)(0),
                        f = v[0],
                        h = v[1],
                        g = (0, c.useCallback)((function() {
                            var t;
                            h(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, i.Z)(g, o ? n : null), o ? (0, e.jsx)(d, {
                        width: f,
                        shape: a,
                        strokeType: l,
                        strokeWidth: u,
                        strokeColor: s
                    }) : null
                }
        },
        50866: function(t, n, o) {
            o.r(n), o.d(n, {
                default: function() {
                    return f
                }
            });
            var e = o(26042),
                c = o(85893),
                i = o(69623),
                a = o(399),
                r = o(21123),
                d = o(67294),
                l = o(4433),
                u = o(60546),
                s = o(41370),
                v = o(52077);

            function f(t) {
                var n, o, f = t.id,
                    h = t.website,
                    g = t.block,
                    m = t.previousBlock,
                    w = t.stickyHeaderOffsetStyle,
                    x = null === g || void 0 === g ? void 0 : g.content,
                    b = null === g || void 0 === g ? void 0 : g.align,
                    p = null === g || void 0 === g ? void 0 : g.animation,
                    k = null === h || void 0 === h ? void 0 : h.animation,
                    L = null === g || void 0 === g ? void 0 : g.divider,
                    j = null === g || void 0 === g ? void 0 : g.border,
                    C = null === g || void 0 === g || null === (n = g.buttons) || void 0 === n ? void 0 : n.items,
                    M = null === g || void 0 === g || null === (o = g.buttons) || void 0 === o ? void 0 : o.enabled,
                    y = (0, d.useRef)(null),
                    P = (0, d.useState)("#FFFFFF"),
                    H = P[0],
                    N = P[1],
                    R = (0, a.Z)(g).minHeight;
                return (0, c.jsxs)("section", {
                    className: "relative",
                    children: [(0, c.jsxs)("div", {
                        ref: y,
                        id: f,
                        className: (0, i.AK)("flex flex-none flex-shrink-0 relative break-word", (0, i.A2)((null === g || void 0 === g ? void 0 : g.verticalAlign) || "center")),
                        style: (0, e.Z)({
                            minHeight: R
                        }, (0, l.$h)(g), w),
                        children: [(0, c.jsx)(r.Z, {
                            block: g,
                            website: h,
                            setTextColor: N
                        }), (0, c.jsx)("div", {
                            className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === g || void 0 === g ? void 0 : g.spacing)),
                            children: (0, c.jsxs)(s.Z, {
                                settings: p,
                                globalSettings: k,
                                children: [(0, c.jsx)("div", {
                                    className: (0, i.AK)("rich-text-block max-w-5xl", "text-".concat(b), "left" === b ? "ml-0 mr-auto" : "right" === b ? "ml-auto mr-0" : "mx-auto"),
                                    style: {
                                        color: H
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: x
                                    }
                                }), (null === C || void 0 === C ? void 0 : C.length) > 0 && M && (0, c.jsx)("div", {
                                    className: (0, i.AK)("flex flex-col md:flex-row md:gap-4", "left" === b ? "justify-start" : "right" === b ? "justify-end" : "justify-center"),
                                    children: null === C || void 0 === C ? void 0 : C.map((function(t, n) {
                                        return (0, c.jsx)(v.Z, {
                                            button: t,
                                            block: g,
                                            website: h,
                                            className: (0, i.AK)("xl w-full md:w-max", x ? "mt-6 lg:mt-8" : "")
                                        }, "banner-button-".concat(n))
                                    }))
                                })]
                            })
                        }), (0, c.jsx)(l.iz, {
                            contentRef: y,
                            divider: L,
                            previousDivider: null === m || void 0 === m ? void 0 : m.divider,
                            border: j,
                            previousBorder: null === m || void 0 === m ? void 0 : m.border,
                            dividerUniqueId: "".concat(f, "-").concat(L)
                        })]
                    }), j && (0, c.jsx)(u.OC, {
                        contentRef: y,
                        border: j,
                        sectionDivider: L
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
                    r = c[1],
                    d = (0, e.useState)([0, 0]),
                    l = d[0],
                    u = d[1];
                return (0, e.useEffect)((function() {
                    var n, o = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var e = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && r(i(t))
                        })), e && n.observe(e)
                    } catch (c) {}
                    return window.addEventListener("resize", o), o(),
                        function() {
                            window.removeEventListener("resize", o), n && n.disconnect()
                        }
                }), []), (0, e.useEffect)((function() {
                    t && r(i(t))
                }), [t, l]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (o = t.spacing) || void 0 === o ? void 0 : o.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);