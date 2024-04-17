"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8037], {
        60546: function(n, e, i) {
            i.d(e, {
                OC: function() {
                    return d
                }
            });
            var t = i(85893),
                o = i(67294),
                c = i(62246),
                l = i(4433),
                r = [{
                    id: "slantLeft",
                    getPath: function(n, e) {
                        return "M".concat(n, " 0L-0 ").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(n, e) {
                        return "M0 0L".concat(n, " ").concat(e)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(n, e) {
                        return "M0 0".concat(e, "L").concat(n / 2, " 0L").concat(n, " ").concat(e, "L").concat(1.5 * n, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(n, e) {
                        return "M0 0L".concat(n / 2, " ").concat(e, "L").concat(n, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(n, e) {
                        return "M0 0 C".concat(n / 2, " ").concat(e, " ").concat(n - n / 2, " ").concat(e, " ").concat(n, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(n, e) {
                        return "M0 ".concat(e, " C").concat(n / 2, " 0 ").concat(n - n / 2, " 0 ").concat(n, " ").concat(e)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(n, e) {
                        return "M0 0C0 0 ".concat(.2023 * n, " ").concat(e, " ").concat(.3333 * n, " ").concat(e, "C").concat(.4681 * n, " ").concat(e, " ").concat(.5318 * n, " 0 ").concat(.6667 * n, " 0C").concat(.8015 * n, " 0 ").concat(n, " ").concat(e, " ").concat(n, " ").concat(e)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(n, e) {
                        return "M".concat(n, " 0C").concat(n, " 0 ").concat(.8 * n, " ").concat(e, " ").concat(.666 * n, " ").concat(e, "C").concat(.547 * n, " ").concat(e, " ").concat(.483 * n, " 0 ").concat(.333 * n, " 0C").concat(.184 * n, " 0 -0.00012207 ").concat(e, " -0.00012207 ").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(n, e) {
                        return "M0 0L".concat(n / 3, " ").concat(e, "L").concat(n / 1.5, " 0L").concat(n, " ").concat(e)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(n, e) {
                        return "M".concat(n, " 0L").concat(n / 1.5, " ").concat(e, "L").concat(n / 3, " 0L0 ").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(n, e) {
                        return "M0 ".concat(e, "C").concat(n, " 0 ").concat(2 * n, " 0 ").concat(2 * n, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(n, e) {
                        return "M".concat(n, " ").concat(e, "C").concat(n / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(n, e) {
                        return "M0 ".concat(e, "H").concat(n)
                    }
                }],
                a = function(n) {
                    var e = n.width,
                        i = n.shape,
                        o = n.strokeWidth,
                        c = n.strokeColor,
                        a = n.strokeType,
                        d = r.find((function(n) {
                            return n.id === (null !== i && void 0 !== i ? i : "none")
                        })),
                        s = Math.floor(e),
                        u = "none" === d.id ? Math.floor(o) : Math.floor(s / l.c8),
                        v = d.getPath(s, u);
                    return (0, t.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, t.jsx)("path", {
                            d: v,
                            stroke: c,
                            strokeWidth: o,
                            strokeDasharray: "dashed" === a ? "40 20" : void 0
                        })
                    })
                },
                d = function(n) {
                    var e = n.contentRef,
                        i = n.border,
                        l = n.sectionDivider,
                        r = i || {},
                        d = r.type,
                        s = r.width,
                        u = r.color,
                        v = (0, o.useState)(0),
                        g = v[0],
                        m = v[1],
                        h = (0, o.useCallback)((function() {
                            var n;
                            m(null !== (n = e.current.offsetWidth) && void 0 !== n ? n : 0)
                        }), [e]);
                    return (0, c.Z)(h, i ? e : null), i ? (0, t.jsx)(a, {
                        width: g,
                        shape: l,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        98037: function(n, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return y
                }
            });
            var t = i(26042),
                o = i(69396),
                c = i(85893),
                l = i(69623),
                r = i(67294),
                a = i(29260),
                d = i.n(a),
                s = i(33752),
                u = i.n(s),
                v = i(41984),
                g = i(3677),
                m = i(11355),
                h = i(94053),
                f = i(43751);

            function p(n) {
                var e = n.pictures,
                    i = n.selected,
                    t = n.aspectRatio,
                    o = n.cornerRadius,
                    a = n.open,
                    s = n.background,
                    p = n.setOpen,
                    x = (0, l.ac)("(min-width: 1920px)"),
                    j = (0, l.ac)("(min-width: 1440px)"),
                    w = (0, l.ac)("(min-width: 1280px)"),
                    b = (0, l.ac)("(min-width: 1024px)"),
                    N = (0, l.ac)("(min-width: 768px)");
                return (0, c.jsx)(m.u, {
                    appear: !0,
                    show: a,
                    as: r.Fragment,
                    children: (0, c.jsxs)(h.V, {
                        as: "div",
                        className: "relative z-[2000]",
                        onClose: function() {
                            return p(!1)
                        },
                        children: [(0, c.jsx)(m.u.Child, {
                            as: r.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, c.jsx)("div", {
                                className: (0, l.AK)("fixed inset-0 backdrop-blur-xl"),
                                children: (0, c.jsx)("div", {
                                    className: "fixed inset-0 bg-white opacity-50",
                                    style: {
                                        backgroundColor: s
                                    }
                                })
                            })
                        }), (0, c.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, c.jsx)("div", {
                                className: "flex w-full min-h-screen items-center justify-center text-center",
                                children: (0, c.jsx)(m.u.Child, {
                                    as: r.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, c.jsxs)(h.V.Panel, {
                                        className: "w-full transform overflow-hidden transition-all gallery-carousel",
                                        children: [(0, c.jsx)("div", {
                                            className: "text-right p-6",
                                            children: (0, c.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                                                style: {
                                                    color: (0, l.$O)(s)
                                                },
                                                onClick: function() {
                                                    return p(!1)
                                                },
                                                children: (0, c.jsx)(f.Z, {
                                                    className: "h-6 w-6 lg:h-12 lg:w-12",
                                                    "aria-hidden": "true"
                                                })
                                            })
                                        }), (null === e || void 0 === e ? void 0 : e.length) > 0 && (0, c.jsx)(u(), {
                                            slideIndex: i,
                                            cellSpacing: b ? 40 : N ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(n) {
                                                return "1:1" === n ? x ? 3 : b ? 2.5 : 1.25 : "2:3" === n ? x ? 3.5 : j ? 3 : w ? 2.5 : 3 : w ? 1.5 : b ? 1.25 : 1.15
                                            }(t),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            defaultControlsConfig: {
                                                nextButtonClassName: N ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, c.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: N ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, c.jsx)(g.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(n) {
                                                return (0, c.jsx)("ul", {
                                                    className: "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                                    children: e.map((function(e, i) {
                                                        return (0, c.jsx)("li", {
                                                            className: (0, l.AK)("flex items-center justify-center rounded-full transition-all duration-300", n.currentSlide === i ? "w-4 h-4" : "w-2.5 h-2.5"),
                                                            style: n.currentSlide === i ? {
                                                                backgroundColor: (0, l.mR)((0, l.$O)(s), 20)
                                                            } : {},
                                                            children: (0, c.jsx)("button", {
                                                                className: (0, l.AK)("w-2.5 h-2.5 rounded-full transition-all"),
                                                                style: {
                                                                    backgroundColor: (0, l.$O)(s),
                                                                    opacity: n.currentSlide !== i ? "35%" : "100%"
                                                                },
                                                                onClick: function() {
                                                                    return n.goToSlide(i)
                                                                }
                                                            })
                                                        }, "fullscreen-carousel-dots-".concat(i))
                                                    }))
                                                })
                                            },
                                            children: e.map((function(n, e) {
                                                return (0, c.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(t), o),
                                                    children: (0, l.QW)(n.media) && (0, c.jsx)(d(), {
                                                        sizes: "200vw",
                                                        quality: 90,
                                                        src: (0, l.QW)(n.media),
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        alt: n.altText || n.media.description || n.media.author,
                                                        onContextMenu: function(n) {
                                                            n.preventDefault()
                                                        },
                                                        objectPosition: "".concat((null === n || void 0 === n ? void 0 : n.positionX) || "center", " ").concat((null === n || void 0 === n ? void 0 : n.positionY) || "center"),
                                                        className: (0, l.AK)("w-full h-full object-center object-cover")
                                                    })
                                                }, "fullscreen-carousel-picture-".concat(n._id, "-").concat(e))
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var x = i(399),
                j = i(21123),
                w = i(4433),
                b = i(60546),
                N = i(41370);

            function y(n) {
                var e, i, a, s, m = n.id,
                    h = n.website,
                    f = n.block,
                    y = n.previousBlock,
                    C = n.isSeoHeadline,
                    k = n.stickyHeaderOffsetStyle,
                    A = "gallery" !== (null === f || void 0 === f || null === (e = f.WebsiteBlock) || void 0 === e ? void 0 : e.type) ? null === f || void 0 === f || null === (i = f.WebsiteBlock) || void 0 === i ? void 0 : i.type : "image-".concat((null === f || void 0 === f ? void 0 : f.style) || "grid"),
                    K = null === f || void 0 === f ? void 0 : f.headline,
                    F = null === f || void 0 === f ? void 0 : f.align,
                    S = (null === f || void 0 === f ? void 0 : f.pictures) || [],
                    B = null === f || void 0 === f ? void 0 : f.aspectRatio,
                    M = null === f || void 0 === f ? void 0 : f.cornerRadius,
                    L = null === f || void 0 === f ? void 0 : f.animation,
                    R = null === h || void 0 === h ? void 0 : h.animation,
                    _ = null === f || void 0 === f ? void 0 : f.divider,
                    T = null === f || void 0 === f ? void 0 : f.border,
                    W = (0, r.useRef)(null),
                    P = (0, r.useState)("#FFFFFF"),
                    G = P[0],
                    Z = P[1],
                    H = (0, r.useState)("#000000"),
                    O = H[0],
                    z = H[1],
                    D = (0, r.useState)(!1),
                    E = D[0],
                    $ = D[1],
                    I = (0, r.useState)(null),
                    q = I[0],
                    Q = I[1],
                    U = (0, l.ac)("(min-width: 1920px)"),
                    V = (0, l.ac)("(min-width: 1280px)"),
                    X = (0, l.ac)("(min-width: 1024px)"),
                    Y = (0, l.ac)("(min-width: 768px)"),
                    J = (0, x.Z)(f).minHeight,
                    nn = function(n) {
                        (null === f || void 0 === f ? void 0 : f.allowFullscreen) && X && ($(!0), Q(n))
                    },
                    en = function() {
                        return (null === f || void 0 === f ? void 0 : f.allowFullscreen) && X ? "hover:opacity-70 cursor-pointer transition-opacity" : ""
                    },
                    tn = function(n, e) {
                        var i = (0, l.QW)(null === n || void 0 === n ? void 0 : n.media);
                        return i ? (0, c.jsx)(d(), {
                            sizes: "200vw",
                            quality: 90,
                            src: i,
                            layout: "fill",
                            objectFit: "cover",
                            alt: n.altText || n.media.description || n.media.author,
                            title: n.altText,
                            onContextMenu: function(n) {
                                return n.preventDefault()
                            },
                            objectPosition: "".concat((null === n || void 0 === n ? void 0 : n.positionX) || "center", " ").concat((null === n || void 0 === n ? void 0 : n.positionY) || "center"),
                            className: (0, l.AK)("w-full h-full object-center object-cover", !e && (0, l.yW)(M, null === h || void 0 === h ? void 0 : h.cornerRadius))
                        }) : (0, c.jsx)(c.Fragment, {})
                    };
                return (null === f || void 0 === f ? void 0 : f.fullHeight) && ((null === f || void 0 === f ? void 0 : f.spacing) || (f.spacing = {}), f.spacing = (0, o.Z)((0, t.Z)({}, f.spacing), {
                    top: "none",
                    bottom: "none"
                })), (null === f || void 0 === f || null === (a = f.pictures) || void 0 === a ? void 0 : a.length) > 0 && !(null === (s = null === f || void 0 === f ? void 0 : f.pictures[0]) || void 0 === s ? void 0 : s.media) && (f.pictures = f.pictures.map((function(n) {
                    return {
                        media: n,
                        altText: n.description
                    }
                }))), (0, c.jsxs)("section", {
                    className: "relative",
                    children: [(0, c.jsxs)("div", {
                        ref: W,
                        id: m,
                        className: (0, l.AK)("flex flex-none flex-shrink-0 relative break-word", (0, l.A2)((null === f || void 0 === f ? void 0 : f.verticalAlign) || "center")),
                        style: (0, t.Z)({
                            minHeight: J
                        }, (0, w.$h)(f), k),
                        children: [(0, c.jsx)(j.Z, {
                            block: f,
                            website: h,
                            onChange: function(n) {
                                var e, i;
                                Z((null === n || void 0 === n || null === (e = n.overlay) || void 0 === e ? void 0 : e.color1) || "#FFFFFF"), z((0, l.$O)((null === n || void 0 === n || null === (i = n.overlay) || void 0 === i ? void 0 : i.color1) || "#FFFFFF"))
                            }
                        }), (0, c.jsx)("div", {
                            className: (0, l.AK)("relative z-10", "image-carousel" === A || (null === f || void 0 === f ? void 0 : f.fullWidth) ? "w-full" : "container mx-auto", (0, l.bG)(null === f || void 0 === f ? void 0 : f.spacing)),
                            children: (0, c.jsxs)(N.Z, {
                                settings: L,
                                globalSettings: R,
                                children: [(0, c.jsx)("div", {
                                    className: (0, l.AK)(("image-carousel" === A || (null === f || void 0 === f ? void 0 : f.fullWidth)) && "container mx-auto"),
                                    children: K && (0, c.jsx)(l.s0, {
                                        className: (0, l.AK)("heading-large mb-6", "text-".concat(F)),
                                        style: (0, t.Z)({
                                            color: O
                                        }, (0, l.j2)(h)),
                                        h1: C,
                                        children: K
                                    })
                                }), (0, c.jsx)("div", {
                                    className: (0, l.AK)("image-carousel" === A && "gallery-carousel", "image-carousel" !== A && !(null === f || void 0 === f ? void 0 : f.noGutters) && (null === f || void 0 === f ? void 0 : f.fullWidth) && "md:px-6"),
                                    children: "image-carousel" === A ? (0, c.jsx)(c.Fragment, {
                                        children: (null === S || void 0 === S ? void 0 : S.length) > 0 && (0, c.jsx)(u(), {
                                            cellSpacing: X ? 40 : Y ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(n) {
                                                return "1:1" === n ? U ? 3 : X ? 2.5 : 1.25 : "2:3" === n ? U ? 4 : V ? 3.5 : X ? 3 : Y ? 2.5 : 1.5 : "3:2" === n && U ? 1.75 : V ? 1.5 : X ? 1.25 : 1.15
                                            }(B),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            enableKeyboardControls: !0,
                                            keyCodeConfig: {
                                                previousSlide: [37],
                                                nextSlide: [39]
                                            },
                                            defaultControlsConfig: {
                                                nextButtonClassName: Y ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, c.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: Y ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, c.jsx)(g.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(n) {
                                                return (0, c.jsx)("ul", {
                                                    className: "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                                    children: S.map((function(e, i) {
                                                        return (0, c.jsx)("li", {
                                                            children: (0, c.jsx)("button", {
                                                                className: (0, l.AK)("w-2.5 h-2.5 rounded-full transition-all", n.currentSlide === i && "bg-gray-900 ring-4 ring-gray-200", n.currentSlide > i && ("#111827" === O ? "bg-gray-600" : "bg-gray-200"), n.currentSlide < i && ("#111827" === O ? "bg-gray-900" : "bg-gray-50")),
                                                                onClick: function() {
                                                                    return n.goToSlide(i)
                                                                }
                                                            })
                                                        }, "image-carousel-dots-".concat(f.idx, "-").concat(i))
                                                    }))
                                                })
                                            },
                                            children: S.map((function(n, e) {
                                                return (0, c.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden cursor-auto", (0, l.n3)(B), (0, l.yW)(M, null === h || void 0 === h ? void 0 : h.cornerRadius)),
                                                    children: tn(n, !0)
                                                }, "image-carousel-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                            }))
                                        })
                                    }) : (0, c.jsx)(c.Fragment, {
                                        children: 1 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsx)("div", {
                                            className: (0, l.AK)(!(null === f || void 0 === f ? void 0 : f.fullWidth) && "max-w-3xl"),
                                            children: (0, c.jsx)("div", {
                                                className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                onClick: function() {
                                                    return nn(0)
                                                },
                                                children: tn(S[0])
                                            })
                                        }) || 2 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                            children: S.map((function(n, e) {
                                                return (0, c.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                    onClick: function() {
                                                        return nn(e)
                                                    },
                                                    children: tn(n)
                                                }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                            }))
                                        }) || (3 === (null === S || void 0 === S ? void 0 : S.length) || 6 === (null === S || void 0 === S ? void 0 : S.length) || 9 === (null === S || void 0 === S ? void 0 : S.length) || 12 === (null === S || void 0 === S ? void 0 : S.length)) && (0, c.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                            children: S.map((function(n, e) {
                                                return (0, c.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                    onClick: function() {
                                                        return nn(e)
                                                    },
                                                    children: tn(n)
                                                }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                            }))
                                        }) || 4 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                            children: S.map((function(n, e) {
                                                return (0, c.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                    onClick: function() {
                                                        return nn(e)
                                                    },
                                                    children: tn(n)
                                                }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                            }))
                                        }) || 5 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: S.slice(0, 3).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            }), (0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                                children: S.slice(3, 5).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            })]
                                        }) || 7 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: S.slice(0, 3).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            }), (0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                                children: S.slice(3, 7).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            })]
                                        }) || 8 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: S.slice(0, 6).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            }), (0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                                children: S.slice(6, 8).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            })]
                                        }) || 10 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: S.slice(0, 6).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            }), (0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                                children: S.slice(6, 10).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            })]
                                        }) || 11 === (null === S || void 0 === S ? void 0 : S.length) && (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: S.slice(0, 9).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            }), (0, c.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === f || void 0 === f ? void 0 : f.noGutters) && "gap-6 md:gap-10"),
                                                children: S.slice(9, 11).map((function(n, e) {
                                                    return (0, c.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(B), en()),
                                                        onClick: function() {
                                                            return nn(e)
                                                        },
                                                        children: tn(n)
                                                    }, "image-grid-picture-".concat(f.idx, "-").concat(n._id, "-").concat(e))
                                                }))
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), (null === f || void 0 === f ? void 0 : f.allowFullscreen) && (0, c.jsx)(p, {
                            website: h,
                            pictures: S,
                            selected: q,
                            aspectRatio: B,
                            cornerRadius: (0, l.yW)(M, null === h || void 0 === h ? void 0 : h.cornerRadius),
                            background: G,
                            open: E,
                            setOpen: $
                        }), (0, c.jsx)(w.iz, {
                            contentRef: W,
                            divider: _,
                            previousDivider: null === y || void 0 === y ? void 0 : y.divider,
                            border: T,
                            previousBorder: null === y || void 0 === y ? void 0 : y.border,
                            dividerUniqueId: "".concat(m, "-").concat(_)
                        })]
                    }), T && (0, c.jsx)(b.OC, {
                        contentRef: W,
                        border: T,
                        sectionDivider: _
                    })]
                })
            }
        },
        399: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return l
                }
            });
            var t = i(67294),
                o = "website-header";

            function c(n) {
                var e;
                return n && 1 === n.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById(o)) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0
            }

            function l(n) {
                var e, i, o = (0, t.useState)(0),
                    l = o[0],
                    r = o[1],
                    a = (0, t.useState)([0, 0]),
                    d = a[0],
                    s = a[1];
                return (0, t.useEffect)((function() {
                    var e, i = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var t = document.getElementById("website-header");
                        e = new ResizeObserver((function() {
                            n && r(c(n))
                        })), t && e.observe(t)
                    } catch (o) {}
                    return window.addEventListener("resize", i), i(),
                        function() {
                            window.removeEventListener("resize", i), e && e.disconnect()
                        }
                }), []), (0, t.useEffect)((function() {
                    n && r(c(n))
                }), [n, d]), {
                    minHeight: (null === n || void 0 === n || null === (e = n.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === n || void 0 === n || null === (i = n.spacing) || void 0 === i ? void 0 : i.minHeight) ? "100vh" : "134px", " - ").concat((null === n || void 0 === n ? void 0 : n.combineWithHeader) ? 0 : l, "px)") : "134px",
                    headerHeight: l
                }
            }
        }
    }
]);