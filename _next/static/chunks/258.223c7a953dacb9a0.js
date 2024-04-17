"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
        60546: function(t, n, e) {
            e.d(n, {
                OC: function() {
                    return d
                }
            });
            var o = e(85893),
                i = e(67294),
                c = e(62246),
                l = e(4433),
                a = [{
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
                        e = t.shape,
                        i = t.strokeWidth,
                        c = t.strokeColor,
                        r = t.strokeType,
                        d = a.find((function(t) {
                            return t.id === (null !== e && void 0 !== e ? e : "none")
                        })),
                        s = Math.floor(n),
                        u = "none" === d.id ? Math.floor(i) : Math.floor(s / l.c8),
                        v = d.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: c,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                d = function(t) {
                    var n = t.contentRef,
                        e = t.border,
                        l = t.sectionDivider,
                        a = e || {},
                        d = a.type,
                        s = a.width,
                        u = a.color,
                        v = (0, i.useState)(0),
                        h = v[0],
                        m = v[1],
                        f = (0, i.useCallback)((function() {
                            var t;
                            m(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, c.Z)(f, e ? n : null), e ? (0, o.jsx)(r, {
                        width: h,
                        shape: l,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        10258: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return x
                }
            });
            var o = e(26042),
                i = e(85893),
                c = e(69623),
                l = e(33752),
                a = e.n(l),
                r = e(40944),
                d = e(29260),
                s = e.n(d),
                u = e(399),
                v = e(21123),
                h = e(67294),
                m = e(4433),
                f = e(60546),
                g = e(41370);

            function x(t) {
                var n, e, l, d, x, y, b, p, w, j, C, k, N, L, M, A = t.id,
                    S = t.website,
                    P = t.block,
                    H = t.previousBlock,
                    W = t.isSeoHeadline,
                    Z = t.stickyHeaderOffsetStyle;
                Array.isArray(P.items) || (P.items = [{
                    content: P.content,
                    by: P.by
                }]);
                var B = null === P || void 0 === P ? void 0 : P.align,
                    K = null === P || void 0 === P ? void 0 : P.animation,
                    R = null === S || void 0 === S ? void 0 : S.animation,
                    z = null === P || void 0 === P ? void 0 : P.divider,
                    D = null === P || void 0 === P ? void 0 : P.border,
                    E = null === P || void 0 === P ? void 0 : P.headline,
                    F = (0, h.useRef)(null),
                    T = (0, h.useState)("#FFFFFF"),
                    I = T[0],
                    O = T[1],
                    Q = (0, u.Z)(P).minHeight;
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: F,
                        id: A,
                        className: (0, c.AK)("relative flex flex-none flex-shrink-0 break-word", (0, c.A2)((null === P || void 0 === P ? void 0 : P.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: Q
                        }, (0, m.$h)(P), Z),
                        children: [(0, i.jsx)(v.Z, {
                            block: P,
                            website: S,
                            setTextColor: O
                        }), (0, i.jsxs)("div", {
                            className: (0, c.AK)("relative z-10 container mx-auto testimonials-carousel", (0, c.bG)(null === P || void 0 === P ? void 0 : P.spacing)),
                            children: [E && (0, i.jsx)(g.Z, {
                                settings: K,
                                globalSettings: R,
                                children: (0, i.jsx)(c.s0, {
                                    className: (0, c.AK)("heading-large mb-10", "text-".concat(B)),
                                    style: {
                                        color: I
                                    },
                                    h1: W,
                                    children: E
                                })
                            }), (0, i.jsx)(g.Z, {
                                settings: K,
                                globalSettings: R,
                                children: (null === P || void 0 === P || null === (n = P.items) || void 0 === n ? void 0 : n.length) > 1 ? (0, i.jsx)(a(), {
                                    cellAlign: "center",
                                    slidesToShow: 1,
                                    autoplay: !0,
                                    pauseOnHover: !0,
                                    wrapAround: !0,
                                    transitionMode: "scroll",
                                    defaultControlsConfig: {
                                        nextButtonStyle: {
                                            background: "transparent",
                                            color: I
                                        },
                                        nextButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronRightIcon",
                                            className: "w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0"
                                        }),
                                        prevButtonStyle: {
                                            background: "transparent",
                                            color: I
                                        },
                                        prevButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronLeftIcon",
                                            className: "w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0"
                                        })
                                    },
                                    renderBottomCenterControls: function(t) {
                                        var n;
                                        return (0, i.jsx)("ul", {
                                            className: (0, c.AK)("flex gap-4 lg:gap-5 w-full", "right" === B ? "justify-end" : "left" === B ? "justify-start" : "justify-center"),
                                            children: null === P || void 0 === P || null === (n = P.items) || void 0 === n ? void 0 : n.map((function(n, e) {
                                                return (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("button", {
                                                        className: (0, c.AK)("w-2.5 h-2.5 rounded-full transition-all", t.currentSlide === e ? "bg-gray-900 ring-4 ring-gray-200" : "", t.currentSlide > e && (I === c.nJ ? "bg-gray-600" : "bg-gray-200"), t.currentSlide < e && (I === c.nJ ? "bg-gray-900" : "bg-gray-50")),
                                                        onClick: function() {
                                                            return t.goToSlide(e)
                                                        }
                                                    })
                                                }, e)
                                            }))
                                        })
                                    },
                                    children: null === P || void 0 === P || null === (e = P.items) || void 0 === e ? void 0 : e.map((function(t, n) {
                                        return (0, i.jsx)("div", {
                                            className: (0, c.AK)("px-8 md:px-28 my-auto h-full flex"),
                                            children: (0, i.jsxs)("div", {
                                                className: (0, c.AK)("flex flex-col gap-4 justify-center lg:max-w-5xl break-word", "text-".concat(B), "".concat("left" === B ? "ml-0 mr-auto items-start" : "right" === B ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                                children: [(0, c.QW)(null === t || void 0 === t ? void 0 : t.image) && (0, i.jsx)("div", {
                                                    className: (0, c.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                                    children: (0, c.QW)(null === t || void 0 === t ? void 0 : t.image) && (0, i.jsx)(s(), {
                                                        sizes: "200vw",
                                                        quality: 90,
                                                        onContextMenu: function(t) {
                                                            t.preventDefault()
                                                        },
                                                        src: (0, c.QW)(null === t || void 0 === t ? void 0 : t.image),
                                                        alt: t.by || t.image.description || t.image.author,
                                                        title: t.by,
                                                        layout: "fill",
                                                        objectFit: "cover"
                                                    })
                                                }), t.content && (0, i.jsx)("p", {
                                                    className: "heading-medium",
                                                    style: (0, o.Z)({
                                                        color: I
                                                    }, (0, c.j2)(S)),
                                                    children: t.content
                                                }), t.by && (0, i.jsx)("p", {
                                                    className: "body-large",
                                                    style: {
                                                        color: I
                                                    },
                                                    children: t.by
                                                })]
                                            })
                                        }, "testimonial-item-".concat(n))
                                    }))
                                }) : (0, i.jsx)("div", {
                                    className: "flex h-full my-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: (0, c.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(B), "".concat("left" === B ? "ml-0 mr-auto items-start" : "right" === B ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                        children: [(null === (l = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === l ? void 0 : l.image) && (0, i.jsx)("div", {
                                            className: (0, c.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                            children: (0, c.QW)(null === (d = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === d ? void 0 : d.image) && (0, i.jsx)(s(), {
                                                sizes: "200vw",
                                                quality: 90,
                                                onContextMenu: function(t) {
                                                    t.preventDefault()
                                                },
                                                src: (0, c.QW)(null === (x = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === x ? void 0 : x.image),
                                                alt: (null === (y = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === y ? void 0 : y.by) || (null === (b = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === b || null === (p = b.image) || void 0 === p ? void 0 : p.description) || (null === (w = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === w || null === (j = w.image) || void 0 === j ? void 0 : j.author),
                                                title: null === (C = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === C ? void 0 : C.by,
                                                layout: "fill",
                                                objectFit: "cover"
                                            })
                                        }), (null === (k = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === k ? void 0 : k.content) && (0, i.jsx)("p", {
                                            className: "heading-medium",
                                            style: (0, o.Z)({
                                                color: I
                                            }, (0, c.j2)(S)),
                                            children: null === (N = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === N ? void 0 : N.content
                                        }), (null === (L = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === L ? void 0 : L.by) && (0, i.jsx)("p", {
                                            className: "body-large",
                                            style: {
                                                color: I
                                            },
                                            children: null === (M = null === P || void 0 === P ? void 0 : P.items[0]) || void 0 === M ? void 0 : M.by
                                        })]
                                    })
                                })
                            })]
                        }), (0, i.jsx)(m.iz, {
                            contentRef: F,
                            divider: z,
                            previousDivider: null === H || void 0 === H ? void 0 : H.divider,
                            border: D,
                            previousBorder: null === H || void 0 === H ? void 0 : H.border,
                            dividerUniqueId: "".concat(A, "-").concat(z)
                        })]
                    }), D && (0, i.jsx)(f.OC, {
                        contentRef: F,
                        border: D,
                        sectionDivider: z
                    })]
                })
            }
        },
        399: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return l
                }
            });
            var o = e(67294),
                i = "website-header";

            function c(t) {
                var n;
                return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function l(t) {
                var n, e, i = (0, o.useState)(0),
                    l = i[0],
                    a = i[1],
                    r = (0, o.useState)([0, 0]),
                    d = r[0],
                    s = r[1];
                return (0, o.useEffect)((function() {
                    var n, e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && a(c(t))
                        })), o && n.observe(o)
                    } catch (i) {}
                    return window.addEventListener("resize", e), e(),
                        function() {
                            window.removeEventListener("resize", e), n && n.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && a(c(t))
                }), [t, d]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : l, "px)") : "134px",
                    headerHeight: l
                }
            }
        }
    }
]);