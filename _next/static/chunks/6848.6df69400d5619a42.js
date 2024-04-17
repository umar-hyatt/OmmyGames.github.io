"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6848], {
        60546: function(t, n, i) {
            i.d(n, {
                OC: function() {
                    return r
                }
            });
            var o = i(85893),
                e = i(67294),
                c = i(62246),
                a = i(4433),
                l = [{
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
                        i = t.shape,
                        e = t.strokeWidth,
                        c = t.strokeColor,
                        d = t.strokeType,
                        r = l.find((function(t) {
                            return t.id === (null !== i && void 0 !== i ? i : "none")
                        })),
                        u = Math.floor(n),
                        v = "none" === r.id ? Math.floor(e) : Math.floor(u / a.c8),
                        s = r.getPath(u, v);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: v,
                        viewBox: "0 0 ".concat(u, " ").concat(v),
                        children: (0, o.jsx)("path", {
                            d: s,
                            stroke: c,
                            strokeWidth: e,
                            strokeDasharray: "dashed" === d ? "40 20" : void 0
                        })
                    })
                },
                r = function(t) {
                    var n = t.contentRef,
                        i = t.border,
                        a = t.sectionDivider,
                        l = i || {},
                        r = l.type,
                        u = l.width,
                        v = l.color,
                        s = (0, e.useState)(0),
                        h = s[0],
                        f = s[1],
                        g = (0, e.useCallback)((function() {
                            var t;
                            f(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, c.Z)(g, i ? n : null), i ? (0, o.jsx)(d, {
                        width: h,
                        shape: a,
                        strokeType: r,
                        strokeWidth: u,
                        strokeColor: v
                    }) : null
                }
        },
        16848: function(t, n, i) {
            i.r(n), i.d(n, {
                default: function() {
                    return f
                }
            });
            var o = i(26042),
                e = i(85893),
                c = i(69623),
                a = i(29260),
                l = i.n(a),
                d = i(399),
                r = i(21123),
                u = i(67294),
                v = i(4433),
                s = i(60546),
                h = i(41370);

            function f(t) {
                var n, i, a, f = t.id,
                    g = t.website,
                    m = t.block,
                    w = t.previousBlock,
                    p = t.stickyHeaderOffsetStyle,
                    x = (0, d.Z)(m).minHeight,
                    b = null === m || void 0 === m ? void 0 : m.animation,
                    j = null === g || void 0 === g ? void 0 : g.animation,
                    P = null === m || void 0 === m ? void 0 : m.divider,
                    C = null === m || void 0 === m ? void 0 : m.border,
                    L = (0, u.useRef)(null);
                return (0, e.jsxs)("section", {
                    className: "relative",
                    children: [(0, e.jsxs)("div", {
                        ref: L,
                        id: f,
                        className: (0, c.AK)("flex flex-none relative", (0, c.A2)((null === m || void 0 === m ? void 0 : m.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: x
                        }, (0, v.$h)(m), p),
                        children: [(0, e.jsx)(r.Z, {
                            block: m,
                            website: g
                        }), (0, e.jsx)("div", {
                            className: (0, c.AK)("relative z-10", (null === m || void 0 === m ? void 0 : m.fullWidth) ? "w-full" : "container ".concat((0, c.bG)(null === m || void 0 === m ? void 0 : m.spacing)), "mx-auto"),
                            children: (0, e.jsx)(h.Z, {
                                settings: b,
                                globalSettings: j,
                                className: (0, c.AK)("relative z-10", !m.fullWidth && ("min-h-screen" !== (null === m || void 0 === m || null === (n = m.spacing) || void 0 === n ? void 0 : n.minHeight) ? "max-h-250 mx-auto overflow-hidden" : "mx-auto"), "flex justify-center items-center"),
                                children: (null === m || void 0 === m ? void 0 : m.media) && (0, e.jsx)("div", {
                                    className: (0, c.AK)("relative overflow-hidden w-full", (null === m || void 0 === m ? void 0 : m.fullWidth) ? "w-full " + ("min-h-screen" === (null === m || void 0 === m || null === (i = m.spacing) || void 0 === i ? void 0 : i.minHeight) ? "" : "h-60 md:h-80 lg:h-120 xl:h-150") : (0, c.n3)(null === m || void 0 === m ? void 0 : m.aspectRatio), !(null === m || void 0 === m ? void 0 : m.fullWidth) && (0, c.yW)(null === m || void 0 === m ? void 0 : m.cornerRadius, null === g || void 0 === g ? void 0 : g.cornerRadius)),
                                    style: "min-h-screen" === (null === m || void 0 === m || null === (a = m.spacing) || void 0 === a ? void 0 : a.minHeight) && (null === m || void 0 === m ? void 0 : m.fullWidth) ? {
                                        minHeight: x
                                    } : {},
                                    children: !(null === m || void 0 === m ? void 0 : m.fullWidth) && (0, c.QW)(null === m || void 0 === m ? void 0 : m.media) && (0, e.jsx)(l(), {
                                        sizes: "200vw",
                                        quality: 90,
                                        onContextMenu: function(t) {
                                            return t.preventDefault()
                                        },
                                        src: (0, c.QW)(null === m || void 0 === m ? void 0 : m.media),
                                        alt: m.altText || m.media.description || m.media.author,
                                        title: m.altText,
                                        layout: "fill",
                                        objectFit: (null === m || void 0 === m ? void 0 : m.imageFit) || "cover",
                                        objectPosition: "".concat((null === m || void 0 === m ? void 0 : m.imagePositionX) || "center", " ").concat((null === m || void 0 === m ? void 0 : m.imagePositionY) || "center"),
                                        className: "w-full h-full"
                                    })
                                })
                            })
                        }), (null === m || void 0 === m ? void 0 : m.fullWidth) && (0, c.QW)(null === m || void 0 === m ? void 0 : m.media) && (0, e.jsx)(h.Z, {
                            settings: b,
                            globalSettings: j,
                            className: "absolute z-10 inset-0 w-full h-full",
                            children: (0, e.jsx)(l(), {
                                sizes: "200vw",
                                quality: 90,
                                onContextMenu: function(t) {
                                    return t.preventDefault()
                                },
                                src: (0, c.QW)(null === m || void 0 === m ? void 0 : m.media),
                                alt: m.altText || m.media.description || m.media.author,
                                title: m.altText,
                                layout: "fill",
                                objectFit: (null === m || void 0 === m ? void 0 : m.imageFit) || "cover",
                                objectPosition: "".concat((null === m || void 0 === m ? void 0 : m.imagePositionX) || "center", " ").concat((null === m || void 0 === m ? void 0 : m.imagePositionY) || "center"),
                                className: (0, c.AK)("absolute inset-0 w-full h-full")
                            })
                        }), (0, e.jsx)(v.iz, {
                            contentRef: L,
                            divider: P,
                            previousDivider: null === w || void 0 === w ? void 0 : w.divider,
                            border: C,
                            previousBorder: null === w || void 0 === w ? void 0 : w.border,
                            dividerUniqueId: "".concat(f, "-").concat(P)
                        })]
                    }), C && (0, e.jsx)(s.OC, {
                        contentRef: L,
                        border: C,
                        sectionDivider: P
                    })]
                })
            }
        },
        399: function(t, n, i) {
            i.d(n, {
                Z: function() {
                    return a
                }
            });
            var o = i(67294),
                e = "website-header";

            function c(t) {
                var n;
                return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(e)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function a(t) {
                var n, i, e = (0, o.useState)(0),
                    a = e[0],
                    l = e[1],
                    d = (0, o.useState)([0, 0]),
                    r = d[0],
                    u = d[1];
                return (0, o.useEffect)((function() {
                    var n, i = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && l(c(t))
                        })), o && n.observe(o)
                    } catch (e) {}
                    return window.addEventListener("resize", i), i(),
                        function() {
                            window.removeEventListener("resize", i), n && n.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && l(c(t))
                }), [t, r]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (i = t.spacing) || void 0 === i ? void 0 : i.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);