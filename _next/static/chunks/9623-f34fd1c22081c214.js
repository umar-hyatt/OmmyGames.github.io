"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9623], {
        52077: function(e, n, o) {
            o.d(n, {
                Z: function() {
                    return v
                }
            });
            var t = o(26042),
                l = o(69396),
                i = o(85893),
                r = o(41664),
                a = o.n(r),
                s = o(16494),
                d = o(69623),
                c = o(67294),
                u = o(7004);

            function v(e) {
                var n = e.button,
                    o = e.type,
                    r = e.block,
                    v = e.website,
                    f = e.action,
                    m = e.loading,
                    h = e.className,
                    g = e.onClick,
                    p = (0, c.useState)({
                        borderWidth: 2,
                        borderStyle: "solid",
                        boxShadow: "none",
                        fontFamily: "var(--body-fontFamily)",
                        fontWeight: "var(--body-fontWeight)",
                        fontStyle: "var(--body-fontStyle)"
                    }),
                    x = p[0],
                    y = p[1];
                return (0, c.useEffect)((function() {
                    if (n && r && v) {
                        var e, o, i, a = (null === (e = v.colorPalette) || void 0 === e || null === (o = e.Palette) || void 0 === o ? void 0 : o.colors) || (null === (i = v.colorPalette) || void 0 === i ? void 0 : i.colors) || [];
                        if (a.length > 0 && !v.noPaletteSupport) {
                            var s, c, u, f, m, h, g = a[(0, d.dz)(null === (s = r.layers) || void 0 === s ? void 0 : s.palette)] || a[0];
                            if (!n.style) {
                                var p = v.button || {
                                    background: v.secondaryColor,
                                    cornerRadius: 8,
                                    style: "solid"
                                };
                                p.background || (p.background = v.secondaryColor), n.style = {
                                    type: p.style,
                                    cornerRadius: p.cornerRadius,
                                    name: "custom"
                                }
                            }
                            if ("custom" === (null === (c = r.layers) || void 0 === c ? void 0 : c.palette)) g = {
                                color: null === (u = r.layers) || void 0 === u || null === (f = u.overlay) || void 0 === f ? void 0 : f.color1,
                                accent: null === (m = r.layers) || void 0 === m || null === (h = m.foreground) || void 0 === h ? void 0 : h.accent
                            };
                            if ("custom" === n.style.name) y((function(e) {
                                return (0, l.Z)((0, t.Z)({}, e), {
                                    backgroundColor: "outline" === n.style.type ? "transparent" : g.accent,
                                    color: "outline" === n.style.type ? (0, d.$O)(g.color) : (0, d.$O)(g.accent),
                                    borderRadius: n.style.cornerRadius,
                                    borderColor: "outline" === n.style.type ? (0, d.$O)(g.color) : g.accent
                                })
                            }));
                            else {
                                var x = v.buttons && v.buttons[n.style.name] || {
                                    type: "solid",
                                    cornerRadius: 0
                                };
                                y((function(e) {
                                    return (0, l.Z)((0, t.Z)({}, e), {
                                        backgroundColor: "outline" === x.type ? "transparent" : g.accent,
                                        color: "outline" === x.type ? (0, d.$O)(g.color) : (0, d.$O)(g.accent),
                                        borderRadius: x.cornerRadius,
                                        borderColor: "outline" === x.type ? (0, d.$O)(g.color) : g.accent
                                    })
                                }))
                            }
                        } else {
                            var b = v.button || {
                                background: v.secondaryColor,
                                cornerRadius: 8,
                                style: "solid"
                            };
                            b.background || (b.background = v.secondaryColor), y((function(e) {
                                return (0, l.Z)((0, t.Z)({}, e), {
                                    backgroundColor: "outline" === b.style ? "transparent" : b.background,
                                    color: "outline" === b.style ? b.background : (0, d.$O)(b.background),
                                    borderRadius: isNaN(b.cornerRadius) ? 8 : b.cornerRadius,
                                    borderColor: b.background
                                })
                            }))
                        }
                    }
                }), [n, r, v]), f || "submit" === o || "section" === n.type ? (0, i.jsx)("button", {
                    type: "submit" === o ? "submit" : "button",
                    onClick: function(e) {
                        return (0, u.Gc)(e, n, f)
                    },
                    className: (0, d.AK)("button", h),
                    style: x,
                    disabled: m,
                    children: m ? (0, i.jsx)(s.Z, {}) : n.label
                }) : g ? (0, i.jsx)("a", {
                    className: (0, d.AK)("button", h),
                    style: x,
                    onClick: g,
                    children: n.label
                }) : (0, i.jsx)(a(), {
                    href: (0, u.f$)(n, v),
                    children: (0, i.jsx)("a", {
                        className: (0, d.AK)("button", h),
                        target: (0, u.U9)(n, v),
                        rel: "_blank" === (0, u.U9)(n, v) ? "noopener noreferrer" : null,
                        style: x,
                        children: n.label
                    })
                })
            }
        },
        4433: function(e, n, o) {
            o.d(n, {
                $h: function() {
                    return c
                },
                c8: function() {
                    return s
                },
                iz: function() {
                    return v
                }
            });
            var t = o(26042),
                l = o(69396),
                i = o(85893),
                r = o(67294),
                a = o(62246),
                s = 1928 / 118,
                d = [{
                    id: "slantLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0L-0 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e, " ").concat(n, "V0H0")
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0V".concat(n, "L").concat(e / 2, " 0L").concat(e, " ").concat(n, "L").concat(1.5 * e, " 0V0H0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e / 2, " ").concat(n, "L").concat(e, " 0H0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0 C".concat(e / 2, " ").concat(n, " ").concat(e - e / 2, " ").concat(n, " ").concat(e, " 0 L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 ".concat(n, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(n, " L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(n, " ").concat(.3333 * e, " ").concat(n, "C").concat(.4681 * e, " ").concat(n, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(n, " ").concat(e, " ").concat(n, "V0H0Z")
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(n, " ").concat(.666 * e, " ").concat(n, "C").concat(.547 * e, " ").concat(n, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e / 3, " ").concat(n, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(n, "V0H0")
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(n, "L").concat(e / 3, " 0L0 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 ".concat(n, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0H0V").concat(n)
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " ").concat(n, "C").concat(e / 2, " 0 0 0 0 0H").concat(2 * e, "V").concat(n)
                    }
                }];

            function c(e) {
                return {
                    zIndex: 40 - (null === e || void 0 === e ? void 0 : e.idx)
                }
            }
            var u = function(e) {
                    var n = e.uniqueId,
                        o = e.width,
                        t = e.height,
                        l = e.divider,
                        r = Math.floor(o / s),
                        a = Math.floor(o),
                        c = Math.floor(t),
                        u = Math.floor(t - r),
                        v = d.find((function(e) {
                            return e.id === l
                        }));
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0",
                        width: a,
                        height: c,
                        viewBox: "0 0 ".concat(a, " ").concat(c),
                        children: (0, i.jsxs)("clipPath", {
                            id: n,
                            children: [(0, i.jsx)("rect", {
                                width: a,
                                height: u,
                                fill: "transparent"
                            }), (0, i.jsx)("path", {
                                d: v.getPath(a),
                                transform: "translate(0, ".concat(u, ")"),
                                fill: "transparent"
                            })]
                        })
                    })
                },
                v = function(e) {
                    var n = e.contentRef,
                        o = e.divider,
                        d = e.previousDivider,
                        c = e.border,
                        v = e.previousBorder,
                        f = e.combinedWithHeaderOffset,
                        m = e.dividerUniqueId,
                        h = e.noPadding,
                        g = e.onPaddingChange,
                        p = function(e) {
                            var n, o, t = getComputedStyle(e);
                            return parseInt(null !== (n = t.paddingTop) && void 0 !== n ? n : "0") + parseInt(null !== (o = t.paddingBottom) && void 0 !== o ? o : "0")
                        },
                        x = (0, r.useState)({
                            width: 0,
                            height: 0
                        }),
                        y = x[0],
                        b = x[1],
                        w = (0, r.useState)({
                            top: 0,
                            bottom: 0
                        }),
                        j = w[0],
                        N = w[1],
                        k = !!o,
                        C = !!d;
                    (0, r.useEffect)((function() {
                        if (C) {
                            var e = Math.floor((y.width || window.innerWidth) / s);
                            n.current.style.marginTop = "-" + (e + 1) + "px", n.current.style.paddingTop = h ? "" : e + 1 + "px", N((function(n) {
                                return (0, l.Z)((0, t.Z)({}, n), {
                                    top: e + 1
                                })
                            }))
                        } else if (void 0 !== f) N((function(e) {
                            return (0, l.Z)((0, t.Z)({}, e), {
                                top: f
                            })
                        }));
                        else {
                            var o = 0;
                            v && (o = v.width / 2), n.current.style.paddingTop = "".concat(o, "px"), n.current.style.marginTop = "", N((function(e) {
                                return (0, l.Z)((0, t.Z)({}, e), {
                                    top: o
                                })
                            }))
                        }
                    }), [C, y.width, f, h, v]), (0, r.useEffect)((function() {
                        if (k) {
                            var e = Math.floor((y.width || window.innerWidth) / s);
                            n.current.style.paddingBottom = h ? "" : e + "px", n.current.style.clipPath = "url(#".concat(m, ")"), n.current.style.WebkitClipPath = "url(#".concat(m, ")"), n.current.classList.add("fix-safari-flickering"), N((function(n) {
                                return (0, l.Z)((0, t.Z)({}, n), {
                                    bottom: e
                                })
                            }))
                        } else {
                            var o = 0;
                            c && (o = c.width / 2), n.current.style.paddingBottom = "".concat(o, "px"), N((function(e) {
                                return (0, l.Z)((0, t.Z)({}, e), {
                                    bottom: o
                                })
                            })), n.current.style.clipPath = ""
                        }
                    }), [k, y.width, h, c]);
                    var F = (0, r.useCallback)((function() {
                        var e, o;
                        b({
                            width: null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0,
                            height: (null !== (o = n.current.offsetHeight) && void 0 !== o ? o : 0) - p(n.current)
                        })
                    }), [n]);
                    return (0, r.useEffect)((function() {
                        "function" === typeof g && g(j)
                    }), [j]), (0, a.Z)(F, k || C ? n : null), o ? (0, i.jsx)(u, {
                        uniqueId: m,
                        width: y.width,
                        height: y.height + (h ? 0 : j.top + j.bottom),
                        divider: o
                    }) : null
                }
        },
        74007: function(e, n, o) {
            o.d(n, {
                Z: function() {
                    return c
                }
            });
            var t = o(85893),
                l = o(67294),
                i = o(72510),
                r = o(11355),
                a = o(69623),
                s = o(40944),
                d = o(13880);

            function c(e) {
                var n = e.className,
                    o = e.icon,
                    c = e.iconClassName,
                    u = e.button,
                    v = e.buttonClassName,
                    f = e.openClassName,
                    m = e.iconOpenClassName,
                    h = e.children,
                    g = e.inline,
                    p = e.itemsContainerClass,
                    x = e.disabled,
                    y = e.itemsContainerStyle,
                    b = e.openUp,
                    w = void 0 !== b && b,
                    j = function() {
                        F(function(e) {
                            if (!e) return !1;
                            var n = e.getBoundingClientRect();
                            return !(n.left >= 0 && n.right <= (window.innerWidth || document.documentElement.clientWidth))
                        }(N.current))
                    },
                    N = (0, l.useRef)(),
                    k = (0, l.useState)(!1),
                    C = k[0],
                    F = k[1];
                return (0, t.jsx)(i.v, {
                    as: "div",
                    className: (0, a.AK)("relative inline-block text-left", n),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: function(e) {
                        var n = e.open;
                        return (0, t.jsxs)(d.bv, {
                            portal: !0,
                            children: [(0, t.jsx)(i.v.Button, {
                                className: (0, a.AK)(v, n ? f : "", "cursor-pointer z-5 focus:outline-none"),
                                disabled: x,
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: u || (0, t.jsx)(s.Z, {
                                    icon: o || "DotsVerticalIcon",
                                    className: (0, a.AK)(c, "h-5 w-5", n ? m || "text-indigo-500" : "text-gray-500")
                                })
                            }), (0, t.jsx)(r.u, {
                                show: n,
                                as: l.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                ref: N,
                                beforeEnter: j,
                                afterLeave: function() {
                                    return F(!1)
                                },
                                children: (0, t.jsx)(i.v.Items, {
                                    className: (0, a.AK)(p, "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg", g ? "static" : "absolute", w ? "bottom-full mb-10" : "mt-2", C ? "right-0" : "left-0"),
                                    style: y,
                                    children: h
                                })
                            })]
                        })
                    }
                })
            }
        },
        40944: function(e, n, o) {
            var t = o(40872),
                l = o(85893),
                i = o(91874);
            n.Z = function(e) {
                var n = (0, t.Z)({}, i)[e.icon];
                return n ? (0, l.jsx)(n, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        7004: function(e, n, o) {
            o.d(n, {
                Gc: function() {
                    return i
                },
                U9: function() {
                    return l
                },
                f$: function() {
                    return t
                }
            });
            var t = function(e, n) {
                    if (e) {
                        if ("email" === e.type) return "mailto:" + e.link;
                        if ("phone" === e.type) return "tel:" + e.link;
                        if ("page" === e.type) {
                            var o, t, l, i = null === n || void 0 === n || null === (o = n.pages) || void 0 === o ? void 0 : o.find((function(n) {
                                    return n._id === e.page
                                })),
                                r = (null === i || void 0 === i ? void 0 : i.Parent) ? null === n || void 0 === n || null === (t = n.pages) || void 0 === t ? void 0 : t.find((function(e) {
                                    return e._id === (null === i || void 0 === i ? void 0 : i.Parent)
                                })) : null,
                                a = "/";
                            return r && (a += "".concat(r.slug, "/")), a += null !== (l = null === i || void 0 === i ? void 0 : i.slug) && void 0 !== l ? l : ""
                        }
                        return "section" === e.type ? "#" + e.link : (null === e || void 0 === e || null === (s = e.link) || void 0 === s ? void 0 : s.includes("http")) || (null === e || void 0 === e || null === (d = e.link) || void 0 === d ? void 0 : d.includes("https")) ? e.link : (null === e || void 0 === e ? void 0 : e.link) && "#" !== (null === e || void 0 === e ? void 0 : e.link) ? "/" === (null === e || void 0 === e ? void 0 : e.link) ? "/" : "https://" + (null === e || void 0 === e ? void 0 : e.link) : "#";
                        var s, d
                    }
                    return "#"
                },
                l = function(e, n) {
                    var o, t, l, i = null === n || void 0 === n || null === (o = n.pages) || void 0 === o ? void 0 : o.find((function(n) {
                        return n._id === (null === e || void 0 === e ? void 0 : e.page)
                    }));
                    return (null === e || void 0 === e ? void 0 : e.newPage) ? "_blank" : (null === i || void 0 === i ? void 0 : i.forceRender) ? "_parent" : (null === n || void 0 === n || null === (t = n.button) || void 0 === t ? void 0 : t.target) ? null === n || void 0 === n || null === (l = n.button) || void 0 === l ? void 0 : l.target : "_self"
                };
            var i = function(e, n, o) {
                if ("function" !== typeof o) {
                    if ("section" === (null === n || void 0 === n ? void 0 : n.type)) {
                        e.preventDefault();
                        var t = document.getElementById("main-body"),
                            l = document.getElementById("website-header"),
                            i = document.getElementById(n.link);
                        if (i && t && l) {
                            var r = i.getBoundingClientRect().top;
                            if (l.classList.contains("sticky")) r -= l.getBoundingClientRect().height;
                            t.scroll({
                                top: r + t.scrollTop,
                                behavior: "smooth"
                            })
                        }
                    }
                } else o(e)
            }
        },
        16494: function(e, n, o) {
            o.d(n, {
                Z: function() {
                    return r
                }
            });
            var t = o(85893),
                l = o(67421),
                i = o(69623);

            function r(e) {
                var n = e.text,
                    o = e.className,
                    r = e.classNameChild,
                    a = e.variant,
                    s = (0, l.$G)("common").t;
                switch (a) {
                    case "form":
                        return (0, t.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, t.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, t.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, t.jsx)("div", {
                            className: o,
                            children: (0, t.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, t.jsx)("div", {
                                    className: (0, i.AK)("h-6 bg-gray-200 rounded", r)
                                })
                            })
                        });
                    case "table":
                        return (0, t.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, t.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, t.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, t.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, t.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, t.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, t.jsxs)("div", {
                            className: (0, i.AK)("inline-flex items-center", o),
                            children: [(0, t.jsxs)("svg", {
                                className: (0, i.AK)("animate-spin ml-1 mr-3 h-4 w-4", o && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, t.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, t.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), n || "" === n ? n : s("loading")]
                        })
                }
            }
        },
        23493: function(e, n, o) {
            o.d(n, {
                TR: function() {
                    return u
                },
                yA: function() {
                    return v
                },
                i6: function() {
                    return c
                }
            });
            var t = o(26042),
                l = o(29815),
                i = o(85893),
                r = o(69623),
                a = o(41664),
                s = o.n(a),
                d = o(67294);
            var c = function(e, n) {
                    var o, t, l, i = (0, r.p$)(e);
                    return i.siteName = i.siteName || i.businessName || "", i.logo = {
                        type: (null === e || void 0 === e ? void 0 : e.showLogo) && ((null === n || void 0 === n ? void 0 : n.logo) || (null === e || void 0 === e ? void 0 : e.customLogo)) ? "image" : "text-icon",
                        showText: !!i.siteName,
                        font: null === n || void 0 === n || null === (o = n.fonts) || void 0 === o ? void 0 : o.head,
                        showIcon: !1,
                        source: (null === e || void 0 === e ? void 0 : e.source) || "branding",
                        media: null === e || void 0 === e ? void 0 : e.customLogo,
                        height: {
                            desktop: (null === e || void 0 === e || null === (t = e.logoDesktop) || void 0 === t ? void 0 : t.height) || 80,
                            mobile: (null === e || void 0 === e || null === (l = e.logoMobile) || void 0 === l ? void 0 : l.height) || 40
                        }
                    }, i
                },
                u = function(e) {
                    var n, o, a, c = e.className,
                        u = e.text,
                        v = e.logo,
                        f = e.color,
                        m = e.forceRender,
                        h = e.location,
                        g = void 0 === h ? "header" : h,
                        p = function() {
                            var e, n, o = function() {
                                    var e, n = [],
                                        o = w.current.cloneNode(!0);
                                    return o.style.position = "fixed", o.style.visibility = "hidden", o.style.width = "auto", document.body.appendChild(o), w.current.innerText.split(" ").forEach((function(e) {
                                        o.innerText = e;
                                        var t = o.getBoundingClientRect().width;
                                        n.push(Number(t.toFixed(2)))
                                    })), o.innerHTML = "&nbsp;", e = Number(o.getBoundingClientRect().width.toFixed(2)), document.body.removeChild(o), {
                                        wordSizes: n,
                                        emptySpaceSize: e
                                    }
                                }(),
                                t = o.wordSizes,
                                i = o.emptySpaceSize,
                                r = [],
                                a = w.current.offsetWidth + 2,
                                s = 0,
                                d = null !== (n = t[0]) && void 0 !== n ? n : 0;
                            r[s] = d;
                            for (var c = 1; c < t.length; c++) {
                                var u = i + t[c];
                                d + u <= a ? (d += u, r[s] = d) : (s++, d = t[c], r[s] = d)
                            }
                            return (e = Math).max.apply(e, (0, l.Z)(r)) + 2
                        },
                        x = function() {
                            if (w.current) {
                                w.current.style.width = "auto", w.current.style.whiteSpace = "normal";
                                var e = p();
                                w.current.style.width = "".concat(e, "px"), w.current.style.whiteSpace = ""
                            }
                        },
                        y = function() {
                            j.current = (0, r.Ds)(x, 150, j.current)()
                        },
                        b = (0, r.ac)("(max-width: 1023px)"),
                        w = (0, d.useRef)(null),
                        j = (0, d.useRef)(null),
                        N = function() {
                            var e = (0, d.useState)(!1),
                                n = e[0],
                                o = e[1];
                            return (0, d.useEffect)((function() {
                                document.fonts.ready.then((function() {
                                    o(!0)
                                })).catch((function(e) {
                                    console.log("Error while loading fonts:", e)
                                }))
                            }), []), n
                        }();
                    return (0, d.useEffect)((function() {
                        if (w.current) return y(), window.addEventListener("resize", y),
                            function() {
                                window.removeEventListener("resize", y), clearTimeout(j.current)
                            }
                    }), [b, N]), (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) || (null === v || void 0 === v ? void 0 : v.showText) && u ? (0, i.jsx)(s(), {
                        href: "/",
                        children: (0, i.jsxs)("a", {
                            className: (0, r.AK)((null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v || null === (n = v.icon) || void 0 === n ? void 0 : n.url) ? "flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left" : "grid max-w-full", c),
                            target: m ? "_parent" : "_self",
                            children: [(null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) && (0, i.jsx)("div", {
                                className: "flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12",
                                children: (0, i.jsx)("div", {
                                    className: "absolute w-full h-full",
                                    style: {
                                        backgroundColor: f || "#1F2937",
                                        WebkitMaskImage: 'url("'.concat(null === v || void 0 === v || null === (o = v.icon) || void 0 === o ? void 0 : o.url, '")'),
                                        maskImage: 'url("'.concat(null === v || void 0 === v || null === (a = v.icon) || void 0 === a ? void 0 : a.url, '")'),
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain"
                                    }
                                })
                            }), (null === v || void 0 === v ? void 0 : v.showText) && u && (0, i.jsx)("h2", {
                                ref: w,
                                className: (0, r.AK)("heading-small lg:heading-medium max-w-full", (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) ? "whitespace-normal" : "whitespace-nowrap overflow-hidden overflow-ellipsis"),
                                style: (0, t.Z)({
                                    color: f
                                }, function() {
                                    var e;
                                    if ((null === v || void 0 === v ? void 0 : v.showText) && u && (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v || null === (e = v.icon) || void 0 === e ? void 0 : e.url)) {
                                        var n = (6 / (u.length || 0) + .66) * (b ? 18 : 22),
                                            o = Math.min(Math.max(n, 16), 40);
                                        return {
                                            fontSize: "".concat(o, "px"),
                                            lineHeight: 1.2
                                        }
                                    }
                                    return {}
                                }(), {
                                    fontFamily: "var(--".concat(g, "-logo-fontFamily)"),
                                    fontWeight: "var(--".concat(g, "-logo-fontWeight)")
                                }),
                                children: u
                            })]
                        })
                    }) : null
                };

            function v(e) {
                var n = e.src,
                    o = e.text,
                    t = e.height;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        className: "hidden lg:block transition-all object-contain",
                        src: n,
                        alt: o,
                        style: {
                            height: ((null === t || void 0 === t ? void 0 : t.desktop) || 80) + "px"
                        }
                    }), (0, i.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src: n,
                        alt: o,
                        style: {
                            height: ((null === t || void 0 === t ? void 0 : t.mobile) || 40) + "px"
                        }
                    })]
                })
            }
        },
        21123: function(e, n, o) {
            o.d(n, {
                Z: function() {
                    return c
                }
            });
            var t = o(26042),
                l = o(69396),
                i = o(85893),
                r = o(67294),
                a = o(69623),
                s = o(29260),
                d = o.n(s);

            function c(e) {
                var n, o = e.block,
                    s = e.website,
                    c = e.setTextColor,
                    u = e.onChange,
                    v = (0, r.useState)(null),
                    f = v[0],
                    m = v[1];
                return (0, r.useEffect)((function() {
                    if (s && o) {
                        var e, n, i, r, d = (null === s || void 0 === s || null === (e = s.colorPalette) || void 0 === e || null === (n = e.Palette) || void 0 === n ? void 0 : n.colors) || (null === s || void 0 === s || null === (i = s.colorPalette) || void 0 === i ? void 0 : i.colors) || [];
                        if (null === (r = o.layers) || void 0 === r ? void 0 : r.palette)
                            if ("custom" === o.layers.palette) m(null === o || void 0 === o ? void 0 : o.layers);
                            else {
                                var c, u, v, f, h, g, p, x, y = (0, a.dz)(o.layers.palette),
                                    b = {};
                                if ("gradient" === (null === (c = o.layers.overlay) || void 0 === c ? void 0 : c.type)) b = {
                                    type: "gradient",
                                    color1: null === (f = d[y]) || void 0 === f ? void 0 : f.color,
                                    color2: null === (h = d[y % 2 === 0 ? y + 1 : y - 1]) || void 0 === h ? void 0 : h.color,
                                    accent: null === (g = d[y]) || void 0 === g ? void 0 : g.accent
                                };
                                else b = {
                                    type: "solid",
                                    color1: null === (p = d[y]) || void 0 === p ? void 0 : p.color,
                                    accent: null === (x = d[y]) || void 0 === x ? void 0 : x.accent
                                };
                                m((0, l.Z)((0, t.Z)({}, null === o || void 0 === o ? void 0 : o.layers), {
                                    overlay: (0, t.Z)({}, null === o || void 0 === o || null === (u = o.layers) || void 0 === u ? void 0 : u.overlay, b),
                                    foreground: {
                                        accent: (null === (v = d[y]) || void 0 === v ? void 0 : v.accent) || (0, a.$O)(b.color1 || "#FFFFFF")
                                    }
                                }))
                            }
                        else {
                            var w, j, N, k, C, F, Z, S, A, R, _, P = {
                                    type: "solid"
                                },
                                M = {
                                    enabled: !1
                                };
                            if ("object" === typeof(null === o || void 0 === o ? void 0 : o.background))
                                if ("image" === (null === o || void 0 === o || null === (j = o.background) || void 0 === j ? void 0 : j.type)) P.color1 = (null === (k = o.background.overlay) || void 0 === k ? void 0 : k.color.includes("rgba")) ? (0, a.s)(null === (C = o.background.overlay) || void 0 === C ? void 0 : C.color) : null === (F = o.background.overlay) || void 0 === F ? void 0 : F.color, M.enabled = !0, M.media = null === o || void 0 === o || null === (Z = o.background) || void 0 === Z ? void 0 : Z.image, M.positionX = (null === (S = o.background) || void 0 === S ? void 0 : S.imagePositionX) || "50%", M.positionY = (null === (A = o.background) || void 0 === A ? void 0 : A.imagePositionY) || "50%", M.opacity = (null === (R = o.background) || void 0 === R || null === (_ = R.overlay) || void 0 === _ ? void 0 : _.amount) || 50;
                                else if ("gradient" === (null === o || void 0 === o || null === (N = o.background) || void 0 === N ? void 0 : N.type)) {
                                var L, T, I;
                                P.type = "gradient", P.color1 = null === o || void 0 === o || null === (L = o.background) || void 0 === L ? void 0 : L.color, P.color2 = null === o || void 0 === o || null === (T = o.background) || void 0 === T ? void 0 : T.color2, P.direction = null === (I = a.mQ.find((function(e) {
                                    var n;
                                    return e.value === (null === o || void 0 === o || null === (n = o.background) || void 0 === n ? void 0 : n.direction)
                                }))) || void 0 === I ? void 0 : I.id
                            } else {
                                var E;
                                P.color1 = null === o || void 0 === o || null === (E = o.background) || void 0 === E ? void 0 : E.color
                            } else P.color1 = (null === o || void 0 === o ? void 0 : o.background) || "#FFFFFF";
                            m({
                                palette: "custom",
                                image: M,
                                overlay: P,
                                foreground: {
                                    accent: (null === (w = d[0]) || void 0 === w ? void 0 : w.accent) || (0, a.$O)(P.color1 || "#FFFFFF")
                                }
                            })
                        }
                    }
                }), [o, s]), (0, r.useEffect)((function() {
                    f && ("function" === typeof c && c((0, a.$O)(f.overlay.color1 || "#FFFFFF")), "function" === typeof u && u(f))
                }), [f]), (0, i.jsx)(i.Fragment, {
                    children: f && (0, i.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 z-10",
                            style: function() {
                                var e, n, o, t, l, i, r, s = {};
                                "solid" === (null === f || void 0 === f || null === (e = f.overlay) || void 0 === e ? void 0 : e.type) ? s = {
                                    backgroundColor: null === f || void 0 === f || null === (o = f.overlay) || void 0 === o ? void 0 : o.color1
                                }: s = {
                                    backgroundImage: "linear-gradient(".concat(a.mQ.find((function(e) {
                                        var n;
                                        return e.id === ((null === f || void 0 === f || null === (n = f.overlay) || void 0 === n ? void 0 : n.direction) || "top-down")
                                    })).value, ", ").concat(null !== (i = null === f || void 0 === f || null === (t = f.overlay) || void 0 === t ? void 0 : t.color1) && void 0 !== i ? i : "#FFFFFF", ", ").concat(null !== (r = null === f || void 0 === f || null === (l = f.overlay) || void 0 === l ? void 0 : l.color2) && void 0 !== r ? r : "#D1D5DB", ")")
                                };
                                if (null === f || void 0 === f || null === (n = f.image) || void 0 === n ? void 0 : n.enabled) {
                                    var d, c, u = isNaN(null === f || void 0 === f || null === (d = f.image) || void 0 === d ? void 0 : d.opacity) ? 50 : null === f || void 0 === f || null === (c = f.image) || void 0 === c ? void 0 : c.opacity;
                                    s.opacity = u / 100
                                }
                                return s
                            }()
                        }), (null === (n = f.image) || void 0 === n ? void 0 : n.enabled) && f.image.media && (0, i.jsxs)(i.Fragment, {
                            children: [(0, a.$K)(f.image.blur) && "none" !== f.image.blur && (0, i.jsx)("div", {
                                className: "absolute inset-0 z-5",
                                style: {
                                    backdropFilter: "blur(".concat(a.uR.find((function(e) {
                                        return e.id === (f.image.blur || "none")
                                    })).value, ")"),
                                    WebkitBackdropFilter: "blur(".concat(a.uR.find((function(e) {
                                        return e.id === (f.image.blur || "none")
                                    })).value, ")")
                                }
                            }), (0, i.jsx)("div", {
                                className: "absolute inset-0 z-0 bg-white",
                                children: (0, i.jsx)(d(), {
                                    sizes: "200vw",
                                    quality: 90,
                                    priority: (null === o || void 0 === o ? void 0 : o.idx) <= 1,
                                    alt: "background",
                                    src: f.image.media.preview || f.image.media.url || f.image.media,
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "".concat(f.image.positionX || "center", " ").concat(f.image.positionY || "center")
                                })
                            })]
                        })]
                    })
                })
            }
        },
        75654: function(e, n, o) {
            o.d(n, {
                Q: function() {
                    return N
                },
                W: function() {
                    return j
                }
            });
            var t = o(85893),
                l = o(69623),
                i = o(71029),
                r = o(85296),
                a = o(44171),
                s = o(43180),
                d = o(10151),
                c = o(36234),
                u = o(66909),
                v = o(49791),
                f = o(28239),
                m = o(48192),
                h = o(94206),
                g = o(95115),
                p = o(13487),
                x = o(23863),
                y = o(14892),
                b = o(62458),
                w = function(e) {
                    var n = e.type,
                        o = e.className,
                        l = e.style;
                    switch (n) {
                        case "angi":
                            return (0, t.jsx)(i.Z, {
                                className: o,
                                style: l
                            });
                        case "behance":
                            return (0, t.jsx)(r.Z, {
                                className: o,
                                style: l
                            });
                        case "dribbble":
                            return (0, t.jsx)(a.Z, {
                                className: o,
                                style: l
                            });
                        case "facebook":
                            return (0, t.jsx)(s.Z, {
                                className: o,
                                style: l
                            });
                        case "homeadvisor":
                            return (0, t.jsx)(d.Z, {
                                className: o,
                                style: l
                            });
                        case "instagram":
                            return (0, t.jsx)(c.Z, {
                                className: o,
                                style: l
                            });
                        case "linkedin":
                            return (0, t.jsx)(u.Z, {
                                className: o,
                                style: l
                            });
                        case "pinterest":
                            return (0, t.jsx)(v.Z, {
                                className: o,
                                style: l
                            });
                        case "tiktok":
                            return (0, t.jsx)(f.Z, {
                                className: o,
                                style: l
                            });
                        case "thumbtack":
                            return (0, t.jsx)(m.Z, {
                                className: o,
                                style: l
                            });
                        case "twitter":
                            return (0, t.jsx)(h.Z, {
                                className: o,
                                style: l
                            });
                        case "twitterold":
                            return (0, t.jsx)(g.Z, {
                                className: o,
                                style: l
                            });
                        case "youtube":
                            return (0, t.jsx)(p.Z, {
                                className: o,
                                style: l
                            });
                        case "medium":
                            return (0, t.jsx)(x.Z, {
                                className: o,
                                style: l
                            });
                        case "threads":
                            return (0, t.jsx)(y.Z, {
                                className: o,
                                style: l
                            });
                        case "telegram":
                            return (0, t.jsx)(b.Z, {
                                className: o,
                                style: l
                            });
                        default:
                            return null
                    }
                },
                j = [{
                    id: "facebook",
                    host: "facebook.com"
                }, {
                    id: "twitter",
                    host: "twitter.com"
                }, {
                    id: "twitterold",
                    host: "twitter.com"
                }, {
                    id: "linkedin",
                    host: "linkedin.com"
                }, {
                    id: "youtube",
                    host: "youtube.com"
                }, {
                    id: "pinterest",
                    host: "pinterest.com"
                }, {
                    id: "instagram",
                    host: "instagram.com"
                }, {
                    id: "tiktok",
                    host: "tiktok.com"
                }, {
                    id: "thumbtack",
                    host: "thumbtack.com"
                }, {
                    id: "homeadvisor",
                    host: "homeadvisor.com"
                }, {
                    id: "angi",
                    host: "angi.com"
                }, {
                    id: "behance",
                    host: "behance.net"
                }, {
                    id: "dribbble",
                    host: "dribbble.com"
                }, {
                    id: "medium",
                    host: "medium.com"
                }, {
                    id: "threads",
                    host: "threads.net"
                }, {
                    id: "telegram",
                    host: "t.me"
                }],
                N = function(e) {
                    var n, o, i, r, a, s, d, c, u = e.icon,
                        v = e.color,
                        f = e.settings,
                        m = void 0 === f ? {} : f,
                        h = m.size = null !== (r = m.size) && void 0 !== r ? r : "large",
                        g = m.shape = null !== (a = m.shape) && void 0 !== a ? a : "none",
                        p = m.style = null !== (s = m.style) && void 0 !== s ? s : "solid",
                        x = "large" === h ? "w-8 h-8" : "medium" === h ? "w-7 h-7" : "w-6 h-6",
                        y = {};
                    return "none" !== g && (y = function() {
                        var e = "large" === h ? "w-12 h-12" : "medium" === h ? "w-10 h-10" : "w-8 h-8",
                            n = "circle" === g ? "rounded-full" : "square" === g ? "rounded-none" : "rounded" === g ? "rounded-md" : "",
                            o = "solid" === p ? v : "outline" === p ? "transparent" : "",
                            t = "outline" === p ? "border" : "";
                        return {
                            classes: (0, l.AK)(e, n, t),
                            styles: {
                                backgroundColor: o,
                                borderColor: v
                            }
                        }
                    }()), (0, t.jsxs)("div", {
                        className: (0, l.AK)("flex justify-center items-center", null !== (d = y.classes) && void 0 !== d ? d : ""),
                        style: null !== (c = y.styles) && void 0 !== c ? c : {},
                        children: ["custom" !== u.type && (0, t.jsx)(w, {
                            type: u.type,
                            className: (0, l.AK)(x),
                            style: {
                                color: "none" === g || "outline" === p ? v : (0, l.$O)(v)
                            }
                        }), "custom" === u.type && (null === (n = u.icon) || void 0 === n ? void 0 : n._id) && (0, t.jsx)("div", {
                            className: (0, l.AK)("flex-shrink-0 relative", x),
                            children: (0, t.jsx)("div", {
                                className: "absolute w-full h-full",
                                style: {
                                    backgroundColor: "none" === g || "outline" === p ? v : (0, l.$O)(v),
                                    WebkitMaskImage: 'url("'.concat(null === (o = u.icon) || void 0 === o ? void 0 : o.url, '")'),
                                    maskImage: 'url("'.concat(null === (i = u.icon) || void 0 === i ? void 0 : i.url, '")'),
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain"
                                }
                            })
                        })]
                    })
                }
        },
        165: function(e, n, o) {
            o.r(n), o.d(n, {
                default: function() {
                    return j
                }
            });
            var t = o(26042),
                l = o(85893),
                i = o(69623),
                r = o(67294),
                a = o(41664),
                s = o.n(a),
                d = o(90387),
                c = o(52077),
                u = o(90434),
                v = o(41984),
                f = o(43751),
                m = o(72510),
                h = o(94053),
                g = o(74007),
                p = o(75654),
                x = o(21123),
                y = o(4433),
                b = o(23493),
                w = o(10593);

            function j(e) {
                var n, o, a, j, N = e.website,
                    k = e.previousBlock,
                    C = (0, w.$G)("common").t,
                    F = (0, r.useState)(!1),
                    Z = F[0],
                    S = F[1],
                    A = (0, r.useState)(""),
                    R = A[0],
                    _ = A[1],
                    P = (0, r.useState)(null),
                    M = P[0],
                    L = P[1],
                    T = (0, r.useState)("#FFFFFF"),
                    I = T[0],
                    E = T[1],
                    B = (0, r.useState)("#000000"),
                    z = B[0],
                    D = B[1],
                    W = (0, r.useRef)(null),
                    K = (0, d.useRouter)(),
                    O = null === N || void 0 === N ? void 0 : N.footer;
                O && O.showName && (null === O.businessName || void 0 === O.businessName) && (O.businessName = null === N || void 0 === N || null === (j = N.Business) || void 0 === j ? void 0 : j.name);
                !O || null !== O.businessAddress && void 0 !== O.businessAddress || (O.businessAddress = "");
                var $ = null === N || void 0 === N ? void 0 : N.header,
                    H = null === N || void 0 === N || null === (n = N.pages) || void 0 === n ? void 0 : n.find((function(e) {
                        return !e.slug && e.default
                    })),
                    U = null === (a = null === (o = N.pages) || void 0 === o ? void 0 : o.filter((function(e) {
                        return !0 === e.showOnFooter || void 0 === e.showOnFooter
                    }))) || void 0 === a ? void 0 : a.map((function(e) {
                        var n = {
                            href: "/".concat(e.slug || ""),
                            name: e.label,
                            current: K.asPath === "/".concat(e.slug || "") || K.asPath.includes("/".concat(e.slug, "/")),
                            type: e.type,
                            forceRender: e.forceRender
                        };
                        return "parent" === n.type && (n.nests = N.pages.filter((function(n) {
                            return n.Parent === e._id
                        })).map((function(n) {
                            return {
                                href: "/".concat(e.slug, "/").concat(n.slug || ""),
                                name: n.label,
                                current: K.asPath === "/".concat(e.slug, "/").concat(n.slug || ""),
                                forceRender: n.forceRender
                            }
                        })), 0 === n.nests.length) ? null : n
                    })).filter((function(e) {
                        return null !== e
                    })),
                    q = function() {
                        var e, n, o, t, r, a = O;
                        (0, i.$K)(null === a || void 0 === a ? void 0 : a.logo) && (0, i.$K)(null === a || void 0 === a ? void 0 : a.siteName) || !N || (a = (0, b.i6)(O, N)), "header" === O.logoFrom && (a = (0, i.$K)(null === $ || void 0 === $ ? void 0 : $.logo) ? $ : (0, b.i6)($, N));
                        var d = "";
                        if ("stacked-right" === (null === O || void 0 === O ? void 0 : O.style) ? d = "justify-end" : "stacked-center" === (null === O || void 0 === O ? void 0 : O.style) ? d = "justify-center" : "simple-center" === (null === O || void 0 === O ? void 0 : O.style) && (d = "justify-center lg:justify-end mx-auto lg:mx-0"), "image" === (null === a || void 0 === a || null === (e = a.logo) || void 0 === e ? void 0 : e.type) && "branding" === (null === a || void 0 === a || null === (n = a.logo) || void 0 === n ? void 0 : n.source) && (null === N || void 0 === N ? void 0 : N.logo)) {
                            var c, u = (0, i.QW)(null === N || void 0 === N ? void 0 : N.logo);
                            return (0, l.jsx)(s(), {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                    className: (0, i.AK)("flex", d),
                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                    children: u && (0, l.jsx)(b.yA, {
                                        src: u,
                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                        height: null === a || void 0 === a || null === (c = a.logo) || void 0 === c ? void 0 : c.height
                                    })
                                })
                            })
                        }
                        if ("image" === (null === a || void 0 === a || null === (o = a.logo) || void 0 === o ? void 0 : o.type) && "upload" === (null === a || void 0 === a || null === (t = a.logo) || void 0 === t ? void 0 : t.source) && (null === a || void 0 === a || null === (r = a.logo) || void 0 === r ? void 0 : r.media)) {
                            var v, f, m = (0, i.QW)(null === a || void 0 === a || null === (v = a.logo) || void 0 === v ? void 0 : v.media);
                            return (0, l.jsx)(s(), {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                    className: (0, i.AK)("flex", d),
                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                    children: m && (0, l.jsx)(b.yA, {
                                        src: m,
                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                        height: null === a || void 0 === a || null === (f = a.logo) || void 0 === f ? void 0 : f.height
                                    })
                                })
                            })
                        }
                        return (0, l.jsx)(b.TR, {
                            className: d,
                            logo: null === a || void 0 === a ? void 0 : a.logo,
                            text: null === a || void 0 === a ? void 0 : a.siteName,
                            location: O.logoFrom || "footer",
                            color: z,
                            forceRender: null === H || void 0 === H ? void 0 : H.forceRender
                        })
                    },
                    V = function() {
                        if (0 === (null === U || void 0 === U ? void 0 : U.length)) return (0, l.jsx)(l.Fragment, {});
                        var e = (0, i.h)(I, -10);
                        return e !== z && e !== I || (e = (0, i.h)(I, 10)), (0, l.jsx)("ul", {
                            className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6", "stacked-right" === (null === O || void 0 === O ? void 0 : O.style) && "justify-end items-end", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "justify-center items-center"),
                            style: {
                                color: z
                            },
                            children: null === U || void 0 === U ? void 0 : U.filter((function(e) {
                                return "nested" !== e.type
                            })).map((function(n) {
                                var o;
                                return (0, l.jsx)("li", {
                                    className: "border-b-2 pb-1.5 -mb-2",
                                    style: {
                                        borderColor: n.current ? "".concat(z) : "transparent"
                                    },
                                    children: "parent" === n.type ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(g.Z, {
                                            className: "!hidden lg:!inline-block",
                                            openUp: !0,
                                            buttonClassName: "inline-flex items-center gap-2",
                                            itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                            button: (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsx)("span", {
                                                    className: "body-normal whitespace-nowrap",
                                                    children: n.name
                                                }), (0, l.jsx)(u.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            }),
                                            itemsContainerStyle: {
                                                backgroundColor: e,
                                                color: z
                                            },
                                            children: null === (o = n.nests) || void 0 === o ? void 0 : o.map((function(e) {
                                                return (0, l.jsx)(m.v.Item, {
                                                    children: (0, l.jsx)(s(), {
                                                        href: e.href,
                                                        legacyBehavior: !1,
                                                        className: "block py-2 body-normal border-b-2",
                                                        style: {
                                                            borderColor: e.current ? "".concat(z) : "transparent"
                                                        },
                                                        target: e.forceRender ? "_parent" : "_self",
                                                        children: e.name
                                                    })
                                                }, "page-link-".concat(e.href))
                                            }))
                                        }), (0, l.jsxs)("button", {
                                            className: "inline-flex lg:hidden items-center gap-2",
                                            onClick: function() {
                                                S(!0), L(n.nests)
                                            },
                                            children: [(0, l.jsx)("span", {
                                                className: "body-normal",
                                                children: n.name
                                            }), (0, l.jsx)(v.Z, {
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    }) : (0, l.jsx)(s(), {
                                        href: n.href,
                                        children: (0, l.jsx)("a", {
                                            className: "block body-normal",
                                            target: n.forceRender ? "_parent" : "_self",
                                            children: n.name
                                        })
                                    })
                                }, "footer-page-link-".concat(n.href))
                            }))
                        })
                    },
                    Q = function() {
                        return (null === N || void 0 === N ? void 0 : N.social) && 0 !== (null === N || void 0 === N ? void 0 : N.social.length) ? (0, l.jsx)("ul", {
                            className: (0, i.AK)("flex items-center gap-x-4 gap-y-2 flex-wrap", "stacked-right" === (null === O || void 0 === O ? void 0 : O.style) && "justify-end", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "justify-center"),
                            children: Array.isArray(N.social) && N.social.map((function(e, n) {
                                var o = p.W.find((function(n) {
                                        return n.id === e.type
                                    })),
                                    t = e.link;
                                return "custom" !== e.type && (t = (t = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), t = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(t)), (0, l.jsx)("li", {
                                    children: (0, l.jsx)(s(), {
                                        href: t,
                                        children: (0, l.jsx)("a", {
                                            target: "_blank",
                                            children: (0, l.jsx)(p.Q, {
                                                icon: e,
                                                color: z,
                                                settings: N.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(n))
                            }))
                        }) : (0, l.jsx)(l.Fragment, {})
                    },
                    G = function() {
                        return !1 === O.madeWithDurable ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsxs)("p", {
                            className: (0, i.AK)("body-normal lg:text-right whitespace-nowrap", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "!text-center", "stacked-left" === (null === O || void 0 === O ? void 0 : O.style) && "!text-left"),
                            children: [(0, l.jsxs)("span", {
                                children: [C("footer.madeWith"), "\xa0"]
                            }), (0, l.jsx)(s(), {
                                href: "https://durable.co?referrer=".concat(encodeURIComponent(R)),
                                children: (0, l.jsx)("a", {
                                    target: "_blank",
                                    className: "underline",
                                    style: {
                                        color: z
                                    },
                                    children: "Durable"
                                })
                            })]
                        })
                    },
                    J = function() {
                        return (0, l.jsx)(c.Z, {
                            className: "lg !py-2 break-normal",
                            button: O.button,
                            block: O,
                            website: N
                        })
                    },
                    Y = function() {
                        S(!1), L(null)
                    };
                return (0, r.useEffect)((function() {
                    K && Y()
                }), [K]), (0, r.useEffect)((function() {
                    _(null === location || void 0 === location ? void 0 : location.origin)
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("footer", {
                        className: "flex flex-1",
                        children: (0, l.jsxs)("div", {
                            ref: W,
                            id: "website-footer",
                            className: "relative flex-1 z-10 break-word",
                            style: {
                                color: z
                            },
                            children: [(0, l.jsx)(x.Z, {
                                block: O,
                                website: N,
                                onChange: function(e) {
                                    var n, o;
                                    E((null === e || void 0 === e || null === (n = e.overlay) || void 0 === n ? void 0 : n.color1) || "#FFFFFF"), D((0, i.$O)((null === e || void 0 === e || null === (o = e.overlay) || void 0 === o ? void 0 : o.color1) || "#FFFFFF"))
                                }
                            }), (0, l.jsx)("div", {
                                className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === O || void 0 === O ? void 0 : O.spacing)),
                                children: "split-left" === (null === O || void 0 === O ? void 0 : O.style) ? (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:justify-between gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-6",
                                        children: [q(), (0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row lg:items-center gap-12",
                                            children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && J()]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-6",
                                        children: [!!O.additionalDetails && (0, l.jsx)("div", {
                                            className: "body-normal lg:max-w-70 xl:max-w-120 lg:text-right",
                                            style: {
                                                color: z
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        }), G()]
                                    })]
                                }) : "stacked-right" === O.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-end items-end gap-12 text-right",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-end gap-6",
                                        children: [q(), !!O.additionalDetails && (0, l.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: z
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col justify-end gap-12 lg:gap-14",
                                        children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "stacked-center" === O.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-center gap-6",
                                        children: [q(), !!O.additionalDetails && (0, l.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: z
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-12 lg:gap-14",
                                        children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "stacked-left" === O.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 text-left",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-6",
                                        children: [q(), !!O.additionalDetails && (0, l.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: z
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-14",
                                        children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "simple-right" === O.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center gap-6", (null === O || void 0 === O ? void 0 : O.showLogo) ? "lg:gap-10" : "lg:gap-2"),
                                        children: [q(), !!O.additionalDetails && (0, l.jsxs)(l.Fragment, {
                                            children: [!(null === O || void 0 === O ? void 0 : O.showLogo) && (0, l.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, l.jsx)("div", {
                                                className: "body-normal lg:max-w-70 xl:max-w-120",
                                                style: {
                                                    color: z
                                                },
                                                children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                            children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && J()]
                                        }), G()]
                                    })]
                                }) : "simple-center" === O.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, l.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col justify-center lg:items-center gap-6", (null === O || void 0 === O ? void 0 : O.showLogo) ? "lg:gap-6" : "lg:flex-row lg:gap-2"),
                                        children: [q(), !!O.additionalDetails && (0, l.jsxs)(l.Fragment, {
                                            children: [!(null === O || void 0 === O ? void 0 : O.showLogo) && (0, l.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, l.jsx)("div", {
                                                className: "body-normal lg:max-w-[50vw]",
                                                style: {
                                                    color: z
                                                },
                                                children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                        children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && J(), G()]
                                    })]
                                }) : (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                        children: [q(), !!(null === O || void 0 === O ? void 0 : O.additionalDetails) && (0, l.jsx)("div", {
                                            className: "body-normal lg:max-w-70 xl:max-w-120",
                                            style: {
                                                color: z
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-12 lg:gap-6",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                            children: [V(), O.showSocial && Q(), (null === O || void 0 === O ? void 0 : O.button) && J()]
                                        }), G()]
                                    })]
                                })
                            }), (0, l.jsx)(y.iz, {
                                contentRef: W,
                                previousDivider: null === k || void 0 === k ? void 0 : k.divider,
                                previousBorder: null === k || void 0 === k ? void 0 : k.border,
                                dividerUniqueId: "website-footer-divider"
                            })]
                        })
                    }), (0, l.jsx)(h.V, {
                        open: Z,
                        onClose: Y,
                        className: "relative z-[30000] h-full",
                        children: (0, l.jsx)(h.V.Panel, {
                            className: "fixed inset-0 flex flex-col h-full",
                            style: {
                                backgroundColor: I,
                                color: z
                            },
                            children: (0, l.jsxs)("div", {
                                className: "flex-1 flex flex-col h-full container mx-auto pb-6",
                                children: [(0, l.jsxs)("div", {
                                    className: (0, i.AK)("items-center gap-3 py-6", "left" !== (null === $ || void 0 === $ ? void 0 : $.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === $ || void 0 === $ ? void 0 : $.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === $ || void 0 === $ ? void 0 : $.style) || "full-center" === (null === $ || void 0 === $ ? void 0 : $.style)) && (0, l.jsx)("div", {}), function() {
                                        var e, n, o, t, r, a = (0, i.$K)(null === $ || void 0 === $ ? void 0 : $.logo) ? $ : (0, b.i6)($, N);
                                        if ("image" === (null === a || void 0 === a || null === (e = a.logo) || void 0 === e ? void 0 : e.type) && "branding" === (null === a || void 0 === a || null === (n = a.logo) || void 0 === n ? void 0 : n.source) && (null === N || void 0 === N ? void 0 : N.logo)) {
                                            var d, c = (0, i.QW)(null === N || void 0 === N ? void 0 : N.logo);
                                            return (0, l.jsx)(s(), {
                                                href: "/",
                                                children: (0, l.jsx)("a", {
                                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                    children: c && (0, l.jsx)(b.yA, {
                                                        src: c,
                                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                                        height: null === a || void 0 === a || null === (d = a.logo) || void 0 === d ? void 0 : d.height
                                                    })
                                                })
                                            })
                                        }
                                        if ("image" === (null === a || void 0 === a || null === (o = a.logo) || void 0 === o ? void 0 : o.type) && "upload" === (null === a || void 0 === a || null === (t = a.logo) || void 0 === t ? void 0 : t.source) && (null === a || void 0 === a || null === (r = a.logo) || void 0 === r ? void 0 : r.media)) {
                                            var u, v, f = (0, i.QW)(null === a || void 0 === a || null === (u = a.logo) || void 0 === u ? void 0 : u.media);
                                            return (0, l.jsx)(s(), {
                                                href: "/",
                                                children: (0, l.jsx)("a", {
                                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                    children: f && (0, l.jsx)(b.yA, {
                                                        src: f,
                                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                                        height: null === a || void 0 === a || null === (v = a.logo) || void 0 === v ? void 0 : v.height
                                                    })
                                                })
                                            })
                                        }
                                        return (0, l.jsx)(b.TR, {
                                            logo: null === a || void 0 === a ? void 0 : a.logo,
                                            text: null === a || void 0 === a ? void 0 : a.siteName,
                                            color: z,
                                            forceRender: null === H || void 0 === H ? void 0 : H.forceRender
                                        })
                                    }(), (0, l.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, l.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: z
                                            },
                                            onClick: Y,
                                            children: (0, l.jsx)(f.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("ul", {
                                    className: (0, i.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === O || void 0 === O ? void 0 : O.style) || "full-center" === (null === O || void 0 === O ? void 0 : O.style) ? "text-center" : ""),
                                    style: (0, t.Z)({
                                        color: z
                                    }, (0, i.SV)(N)),
                                    children: null === M || void 0 === M ? void 0 : M.map((function(e) {
                                        return (0, l.jsx)("li", {
                                            className: (0, i.AK)("body-large py-2 border-b-2 -mb-2"),
                                            style: {
                                                borderColor: e.current ? "".concat(z) : "transparent"
                                            },
                                            children: (0, l.jsx)(s(), {
                                                href: e.href,
                                                children: (0, l.jsx)("a", {
                                                    className: "block w-full",
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    children: e.name
                                                })
                                            })
                                        }, "page-link-".concat(e.href))
                                    }))
                                })]
                            })
                        })
                    })]
                })
            }
        },
        62246: function(e, n, o) {
            var t = o(67294),
                l = (o(69623), o(91033));
            n.Z = function(e, n) {
                var o = (0, t.useState)(!1),
                    i = o[0],
                    r = o[1],
                    a = (0, t.useRef)(e);
                a.current = e;
                var s = function(e) {
                    var n = !0,
                        o = !1,
                        t = void 0;
                    try {
                        for (var l, s = e[Symbol.iterator](); !(n = (l = s.next()).done); n = !0) {
                            var d = l.value;
                            document.body.contains(d.target) || r(!i), a.current(d.target)
                        }
                    } catch (c) {
                        o = !0, t = c
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw t
                        }
                    }
                };
                (0, t.useEffect)((function() {
                    if (n) {
                        var e = new l.Z(s),
                            o = Array.isArray(n) ? n : [n];
                        return o.forEach((function(n) {
                                return n.current && e.observe(n.current)
                            })),
                            function() {
                                o.forEach((function(n) {
                                    return n.current && e.unobserve(n.current)
                                })), e.disconnect()
                            }
                    }
                }), [n, i])
            }
        },
        23226: function(e, n, o) {
            var t = o(47568),
                l = o(51438),
                i = o(14924),
                r = o(20414),
                a = o(9669),
                s = o.n(a),
                d = o(83454);
            n.Z = function e(n, o) {
                (0, l.Z)(this, e);
                var a = this;
                (0, i.Z)(this, "get", function() {
                    var e = (0, t.Z)((function(e, n) {
                        return (0, r.__generator)(this, (function(o) {
                            return [2, new Promise((function(o, l) {
                                s().get(e, {
                                    baseURL: a.baseURL,
                                    params: n || {},
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "*/*"
                                    }
                                }).then(function() {
                                    var e = (0, t.Z)((function(e) {
                                        return (0, r.__generator)(this, (function(n) {
                                            return o(e.data), [2]
                                        }))
                                    }));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    e.response ? o({
                                        status: !1,
                                        message: e.response.data.message
                                    }) : e.request ? o({
                                        status: !1,
                                        message: e.request.message
                                    }) : o({
                                        status: !1,
                                        message: e.message
                                    }), o({
                                        status: !1,
                                        message: e.config
                                    })
                                }))
                            }))]
                        }))
                    }));
                    return function(n, o) {
                        return e.apply(this, arguments)
                    }
                }());
                var c = this;
                (0, i.Z)(this, "post", function() {
                    var e = (0, t.Z)((function(e, n, o) {
                        return (0, r.__generator)(this, (function(t) {
                            return [2, new Promise((function(t, l) {
                                s().post(e, n || {}, {
                                    baseURL: c.baseURL,
                                    headers: {
                                        "Content-Type": o ? "multipart/form-data" : "application/json",
                                        Accept: "*/*"
                                    }
                                }).then((function(e) {
                                    t(e.data)
                                })).catch((function(e) {
                                    e.response ? t(e.response.data) : e.request ? t({
                                        status: !1,
                                        message: e.request
                                    }) : t({
                                        status: !1,
                                        message: e.message
                                    }), t({
                                        status: !1,
                                        message: e.config
                                    })
                                }))
                            }))]
                        }))
                    }));
                    return function(n, o, t) {
                        return e.apply(this, arguments)
                    }
                }()), s().defaults.withCredentials = null === o || void 0 === o || o, this.baseURL = n || d.env.API_URL || "https://api.durable.co"
            }
        },
        69623: function(e, n, o) {
            o.d(n, {
                uR: function() {
                    return le
                },
                nJ: function() {
                    return ne
                },
                mQ: function() {
                    return te
                },
                $O: function() {
                    return ae
                },
                s0: function() {
                    return Me
                },
                _y: function() {
                    return oe
                },
                h: function() {
                    return pe
                },
                SV: function() {
                    return fe
                },
                AK: function() {
                    return ie
                },
                Ds: function() {
                    return Ae
                },
                p$: function() {
                    return ue
                },
                n3: function() {
                    return be
                },
                e0: function() {
                    return ke
                },
                sd: function() {
                    return Ce
                },
                dz: function() {
                    return Ze
                },
                ej: function() {
                    return _e
                },
                yW: function() {
                    return ye
                },
                s4: function() {
                    return me
                },
                Ae: function() {
                    return Ne
                },
                QW: function() {
                    return Fe
                },
                Qm: function() {
                    return xe
                },
                G0: function() {
                    return he
                },
                ow: function() {
                    return Se
                },
                bG: function() {
                    return je
                },
                A2: function() {
                    return we
                },
                j2: function() {
                    return ve
                },
                mR: function() {
                    return se
                },
                jn: function() {
                    return ge
                },
                $K: function() {
                    return Re
                },
                s: function() {
                    return de
                },
                d8: function() {
                    return Pe
                },
                ac: function() {
                    return ce
                },
                oH: function() {
                    return re
                }
            });
            var t = o(26042),
                l = o(69396),
                i = o(29815),
                r = o(85893),
                a = o(67294),
                s = (o(79981), o(47568)),
                d = o(99534),
                c = o(20414),
                u = o(9008),
                v = o.n(u),
                f = o(25935),
                m = o(23226),
                h = o(85518),
                g = o(11163),
                p = o.n(g),
                x = (o(40993), o(42419)),
                y = o(28521),
                b = o(41968),
                w = o(28666),
                j = o(47041),
                N = o(52077),
                k = o(90387),
                C = o(41664),
                F = o.n(C),
                Z = o(72510),
                S = o(11355),
                A = o(94053),
                R = o(32713),
                _ = o(43751),
                P = o(41984),
                M = o(3677),
                L = o(92122),
                T = o(59956),
                I = o(72434),
                E = o(73423),
                B = o(83339),
                z = o(74007),
                D = o(75654),
                W = o(23493),
                K = o(75871),
                O = o(10593);

            function $(e) {
                var n, o, l, i, s, d, c = e.website,
                    u = function() {
                        var e, n;
                        return (0, r.jsxs)("div", {
                            className: "ml-auto lg:hidden",
                            children: [(te && (null === ee || void 0 === ee ? void 0 : ee.length) > 0 || (null === he || void 0 === he ? void 0 : he.length) > 0 || (null === me || void 0 === me ? void 0 : me.showSocial) && Array.isArray(null === c || void 0 === c ? void 0 : c.social) && (null === c || void 0 === c || null === (e = c.social) || void 0 === e ? void 0 : e.length) > 1) && (0, r.jsx)("button", {
                                className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                style: {
                                    color: ge ? J.textColor : j
                                },
                                onClick: function() {
                                    return p(!0)
                                },
                                children: Ze()
                            }), !te && 0 === (null === he || void 0 === he ? void 0 : he.length) && (null === me || void 0 === me ? void 0 : me.showSocial) && Array.isArray(null === c || void 0 === c ? void 0 : c.social) && 1 === (null === c || void 0 === c || null === (n = c.social) || void 0 === n ? void 0 : n.length) && we(!0)]
                        })
                    },
                    v = (0, O.$G)("common").t,
                    f = ce("(max-width: 1023px)"),
                    m = ce("(max-width: 767px)"),
                    h = (0, a.useState)(!1),
                    g = h[0],
                    p = h[1],
                    x = (0, a.useState)("#FFFFFF"),
                    y = x[0],
                    b = x[1],
                    w = (0, a.useState)("#000000"),
                    j = w[0],
                    C = w[1],
                    $ = (0, a.useState)(null),
                    H = $[0],
                    U = $[1],
                    q = (0, a.useState)(!1),
                    V = q[0],
                    Q = q[1],
                    G = (0, a.useState)({
                        combine: !1
                    }),
                    J = G[0],
                    Y = G[1],
                    X = (0, a.useState)(null),
                    ee = X[0],
                    ne = X[1],
                    oe = (0, a.useState)(!1),
                    te = oe[0],
                    le = oe[1],
                    re = (0, k.useRouter)(),
                    de = (0, a.useRef)(null),
                    ue = (0, a.useRef)(null),
                    ve = null === c || void 0 === c || null === (n = c.pages) || void 0 === n ? void 0 : n.find((function(e) {
                        return !e.slug && e.default
                    })),
                    me = null === c || void 0 === c ? void 0 : c.header,
                    he = (0, a.useMemo)((function() {
                        var e, n;
                        return (null === (n = null === (e = c.pages) || void 0 === e ? void 0 : e.filter((function(e) {
                            return !0 === e.showOnHeader || void 0 === e.showOnHeader
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            var n = {
                                href: "/".concat(e.slug || ""),
                                name: e.label,
                                current: re.asPath === "/".concat(e.slug || "") || re.asPath.includes("/".concat(e.slug, "/")),
                                type: e.type,
                                forceRender: e.forceRender
                            };
                            return "parent" === n.type && (n.nests = c.pages.filter((function(n) {
                                var o;
                                return n.Parent === e._id || (null === (o = n.Parent) || void 0 === o ? void 0 : o._id) === e._id
                            })).map((function(n) {
                                return {
                                    href: "/".concat(e.slug, "/").concat(n.slug || ""),
                                    name: n.label,
                                    current: re.asPath === "/".concat(e.slug, "/").concat(n.slug || ""),
                                    forceRender: n.forceRender
                                }
                            })), 0 === n.nests.length) ? null : n
                        })).filter((function(e) {
                            return null !== e && "nested" !== e.type && void 0 !== e
                        }))) || []
                    }), [c, re.asPath]),
                    ge = (null === J || void 0 === J ? void 0 : J.combine) && (!(null === me || void 0 === me ? void 0 : me.sticky) || !V),
                    xe = null === me || void 0 === me ? void 0 : me.style,
                    ye = (null === me || void 0 === me ? void 0 : me.navStyle) || "default",
                    be = function() {
                        return (null === ee || void 0 === ee ? void 0 : ee.length) > 0 && te && (0, r.jsx)("div", {
                            className: "hidden lg:flex items-center flex-shrink-0 gap-4",
                            children: null === ee || void 0 === ee ? void 0 : ee.map((function(e, n) {
                                return (0, r.jsx)(N.Z, {
                                    button: e,
                                    block: me,
                                    website: c,
                                    className: "xl xl:!text-2xl !py-1.5 flex"
                                }, "banner-button-".concat(n))
                            }))
                        })
                    },
                    we = function(e) {
                        return (0, r.jsx)("ul", {
                            className: ie("lg:flex items-center gap-x-4 gap-y-2 flex-wrap", "full-center" !== xe ? "justify-end" : "", !e && "hidden"),
                            children: Array.isArray(c.social) && c.social.map((function(e, n) {
                                var o = D.W.find((function(n) {
                                        return n.id === e.type
                                    })),
                                    t = e.link;
                                return "custom" !== e.type && (t = (t = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), t = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(t)), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(F(), {
                                        href: t,
                                        children: (0, r.jsx)("a", {
                                            target: "_blank",
                                            children: (0, r.jsx)(D.Q, {
                                                icon: e,
                                                color: ge ? J.textColor : j,
                                                settings: c.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(n))
                            }))
                        })
                    },
                    je = function(e) {
                        var n = null === me || void 0 === me ? void 0 : me.logo;
                        if (!Re(n) && c && (n = (0, W.i6)(me, c).logo), "image" === (null === n || void 0 === n ? void 0 : n.type) && "branding" === (null === n || void 0 === n ? void 0 : n.source) && (null === c || void 0 === c ? void 0 : c.logo)) {
                            var o = Fe(null === c || void 0 === c ? void 0 : c.logo);
                            return (0, r.jsx)(F(), {
                                href: "/",
                                children: (0, r.jsx)("a", {
                                    className: "max-w-full overflow-hidden grid",
                                    target: (null === ve || void 0 === ve ? void 0 : ve.forceRender) ? "_parent" : "_self",
                                    children: o && (0, r.jsx)(W.yA, {
                                        src: o,
                                        text: null === me || void 0 === me ? void 0 : me.siteName,
                                        height: null === n || void 0 === n ? void 0 : n.height
                                    })
                                })
                            })
                        }
                        if ("image" === (null === n || void 0 === n ? void 0 : n.type) && "upload" === (null === n || void 0 === n ? void 0 : n.source) && (null === n || void 0 === n ? void 0 : n.media)) {
                            var t = Fe(null === n || void 0 === n ? void 0 : n.media);
                            return (0, r.jsx)(F(), {
                                href: "/",
                                children: (0, r.jsx)("a", {
                                    className: "max-w-full overflow-hidden grid",
                                    target: (null === ve || void 0 === ve ? void 0 : ve.forceRender) ? "_parent" : "_self",
                                    children: t && (0, r.jsx)(W.yA, {
                                        src: t,
                                        text: null === me || void 0 === me ? void 0 : me.siteName,
                                        height: null === n || void 0 === n ? void 0 : n.height
                                    })
                                })
                            })
                        }
                        return (0, r.jsx)(W.TR, {
                            text: null === me || void 0 === me ? void 0 : me.siteName,
                            logo: n,
                            color: ge && !e ? J.textColor : j,
                            forceRender: null === ve || void 0 === ve ? void 0 : ve.forceRender
                        })
                    },
                    Ne = function(e, n) {
                        var o = se(n, (null === ye || void 0 === ye ? void 0 : ye.includes("subtle")) ? 10 : 80);
                        return {
                            borderColor: e.current ? n : "transparent",
                            backgroundColor: e.current && "default" !== ye ? o : "transparent",
                            color: e.current && ye.includes("bold") ? ae(n) : "currentColor"
                        }
                    },
                    ke = function() {
                        var e;
                        if (0 === (null === he || void 0 === he ? void 0 : he.length)) return (0, r.jsx)(r.Fragment, {});
                        var n = pe(y, -10);
                        n !== j && n !== y || (n = pe(y, 10));
                        var o = ge ? J.textColor : j;
                        return (0, r.jsx)("ul", {
                            className: ie("hidden items-center flex-wrap", !(null === me || void 0 === me || null === (e = me.menu) || void 0 === e ? void 0 : e.collapse) && "lg:flex", "left" === xe && "justify-end", "full-center" === xe && "justify-center", "default" === ye ? "gap-x-6" : "gap-x-2"),
                            style: {
                                color: o
                            },
                            children: null === he || void 0 === he ? void 0 : he.map((function(e) {
                                var t;
                                return (0, r.jsx)("li", {
                                    className: ie("default" === ye ? "border-b-2" : "", (null === ye || void 0 === ye ? void 0 : ye.includes("round")) && "rounded-lg"),
                                    style: Ne(e, o),
                                    children: "parent" === e.type ? (0, r.jsx)(z.Z, {
                                        buttonClassName: ie("inline-flex items-center gap-2", "default" === ye ? "py-1.5" : "py-2 px-3"),
                                        itemsContainerClass: ie("!p-4 !pr-6 w-max max-w-120 !max-h-[80vh] no-scrollbar", (null === ye || void 0 === ye ? void 0 : ye.includes("square")) && "!rounded-none", "default" === ye && "mt-0.5"),
                                        button: (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("span", {
                                                className: "body-normal whitespace-nowrap",
                                                children: e.name
                                            }), (0, r.jsx)(R.Z, {
                                                className: "w-4 h-4"
                                            })]
                                        }),
                                        itemsContainerStyle: {
                                            backgroundColor: n,
                                            color: o
                                        },
                                        children: null === (t = e.nests) || void 0 === t ? void 0 : t.map((function(e) {
                                            return (0, r.jsx)(Z.v.Item, {
                                                children: (0, r.jsx)(F(), {
                                                    className: ie("block py-2 body-normal", "default" === ye ? "border-b-2" : "px-3", (null === ye || void 0 === ye ? void 0 : ye.includes("round")) && "rounded-lg"),
                                                    href: e.href,
                                                    legacyBehavior: !1,
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    style: Ne(e, o),
                                                    children: e.name
                                                })
                                            }, "page-link-".concat(e.href))
                                        }))
                                    }) : (0, r.jsx)(F(), {
                                        className: ie("block body-normal whitespace-nowrap", "default" === ye ? "py-1.5" : "py-2 px-3"),
                                        legacyBehavior: !1,
                                        href: e.href,
                                        target: e.forceRender ? "_parent" : "_self",
                                        children: e.name
                                    })
                                }, "header-page-link-".concat(e.href))
                            }))
                        })
                    },
                    Ce = function() {
                        var e;
                        return 0 === (null === he || void 0 === he ? void 0 : he.length) ? (0, r.jsx)(r.Fragment, {}) : (null === me || void 0 === me || null === (e = me.menu) || void 0 === e ? void 0 : e.collapse) ? (0, r.jsxs)("button", {
                            className: ie("hidden lg:inline-flex items-center justify-center p-2 rounded-md font-light gap-2 ", g ? "pointer-events-none" : "hover:opacity-80"),
                            style: {
                                color: ge ? J.textColor : j
                            },
                            onClick: function() {
                                return p(!0)
                            },
                            children: ["Menu ", Ze()]
                        }) : null
                    },
                    Ze = function() {
                        var e, n = "block h-5 w-5";
                        switch (null === me || void 0 === me || null === (e = me.menu) || void 0 === e ? void 0 : e.icon) {
                            case "bars-3-bottom-left":
                                return (0, r.jsx)(L.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-bottom-right":
                                return (0, r.jsx)(T.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-center-left":
                                return (0, r.jsx)(I.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-2":
                                return (0, r.jsx)(E.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            default:
                                return (0, r.jsx)(B.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                })
                        }
                    },
                    Ae = function(e) {
                        var n, o, t = (null === (n = K.b[null === e || void 0 === e ? void 0 : e.top]) || void 0 === n ? void 0 : n.top) || K.b.medium.top,
                            l = (null === (o = K.b[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === o ? void 0 : o.bottom) || K.b.medium.bottom;
                        return "".concat(t, " ").concat(l)
                    },
                    _e = function() {
                        var e;
                        Q((null === (e = document.querySelector("#main-body")) || void 0 === e ? void 0 : e.scrollTop) > 20)
                    },
                    Pe = function(e) {
                        var n = document.querySelector("[data-combine-with-header]");
                        if (n) {
                            var o = null === n || void 0 === n ? void 0 : n.getAttribute("data-combine-with-header");
                            Y((function(t) {
                                return e < 10 && (null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")) !== t.textColor && setTimeout((function() {
                                    Pe(e + 1)
                                }), 100 * e), {
                                    combine: !0 === o || "true" === o,
                                    textColor: null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")
                                }
                            }))
                        } else Y((function(o) {
                            return e < 10 && (!n || (null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")) !== o.textColor) && setTimeout((function() {
                                Pe(e + 1)
                            }), 15 * e), {
                                combine: !1,
                                textColor: null
                            }
                        }))
                    };
                return (0, a.useEffect)((function() {
                    if (me) {
                        var e, n, o, t, l, i;
                        if (ne((null === me || void 0 === me || null === (e = me.buttons) || void 0 === e ? void 0 : e.items) || [me.button]), le((null === me || void 0 === me || null === (n = me.buttons) || void 0 === n ? void 0 : n.items) ? null === me || void 0 === me || null === (o = me.buttons) || void 0 === o ? void 0 : o.enabled : !!me.button), me.layers)
                            if ("custom" === me.layers.palette) {
                                var r;
                                b((null === (r = me.layers.overlay) || void 0 === r ? void 0 : r.color1) || "#FFFFFF")
                            } else {
                                var a, s, d = (null === c || void 0 === c || null === (a = c.colorPalette) || void 0 === a ? void 0 : a.Palette) || (null === c || void 0 === c ? void 0 : c.colorPalette);
                                b(Se(d, null === (s = me.layers) || void 0 === s ? void 0 : s.palette, "color"))
                            }
                        else b(me.background || "#FFFFFF");
                        if (null === me.siteName || void 0 === me.siteName) me.siteName = null === c || void 0 === c || null === (i = c.Business) || void 0 === i ? void 0 : i.name;
                        me.style || (me.style = "left"), (null === (t = me.logoDesktop) || void 0 === t ? void 0 : t.height) || (me.logoDesktop = {
                            height: 80
                        }), (null === (l = me.logoMobile) || void 0 === l ? void 0 : l.height) || (me.logoMobile = {
                            height: 40
                        }), me.sticky && (null === de || void 0 === de ? void 0 : de.current) && (document.documentElement.style.scrollPaddingTop = de.current.clientHeight + "px")
                    }
                }), [me]), (0, a.useEffect)((function() {
                    Pe(0)
                }), [re.asPath]), (0, a.useEffect)((function() {
                    y && C(ae(y))
                }), [y]), (0, a.useEffect)((function() {
                    p(!1), U(null)
                }), [re.asPath, f]), (0, a.useEffect)((function() {
                    var e;
                    return null === (e = document.querySelector("#main-body")) || void 0 === e || e.addEventListener("scroll", _e),
                        function() {
                            var e;
                            null === (e = document.querySelector("#main-body")) || void 0 === e || e.removeEventListener("scroll", _e)
                        }
                }), []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("header", {
                        id: "website-header",
                        ref: de,
                        className: ie("!z-[2000]", (null === me || void 0 === me ? void 0 : me.sticky) ? "sticky top-0 transition-colors" : "", (null === me || void 0 === me ? void 0 : me.sticky) && !J.combine && V || (null === me || void 0 === me ? void 0 : me.sticky) && V ? "shadow-md" : ""),
                        style: {
                            backgroundColor: ge ? "transparent" : y,
                            color: ge ? J.textColor : j
                        },
                        children: (0, r.jsx)("div", {
                            className: ie("grid items-center lg:gap-6 xl:gap-10 mx-auto", Ae(null === me || void 0 === me ? void 0 : me.spacing), (null === me || void 0 === me ? void 0 : me.fullWidth) ? "px-6 lg:px-12" : "container"),
                            style: function(e) {
                                return "center" === e ? {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : "full-center" === e ? (null === he || void 0 === he ? void 0 : he.length) > 6 ? {
                                    gridTemplateColumns: "1fr 4fr 1fr"
                                } : {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : {
                                    gridTemplateColumns: "auto auto auto"
                                }
                            }(xe),
                            children: "center" === xe ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: [ke(), Ce()]
                                }), (0, r.jsx)("div", {
                                    className: "flex justify-center",
                                    children: je()
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-end",
                                    children: [(0, r.jsxs)("div", {
                                        className: "hidden lg:flex item-center gap-10",
                                        children: [(null === me || void 0 === me ? void 0 : me.showSocial) && we(), te && be()]
                                    }), u()]
                                })]
                            }) : "full-center" === xe ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: (null === me || void 0 === me ? void 0 : me.showSocial) && we()
                                }), (0, r.jsxs)("div", {
                                    className: "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-4 w-full",
                                        children: [je(), Ce()]
                                    }), ke()]
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-end whitespace-nowrap",
                                    children: [te && be(), u()]
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "col-span-2 lg:col-span-1",
                                    children: je()
                                }), (0, r.jsxs)("div", {
                                    className: "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                                    children: [Ce(), ke(), (null === me || void 0 === me ? void 0 : me.showSocial) && we(), te && be()]
                                }), u()]
                            })
                        })
                    }), (0, r.jsx)(S.u, {
                        show: !!g,
                        as: "div",
                        children: (0, r.jsxs)(A.V, {
                            className: "relative z-[30000] h-full",
                            initialFocus: ue,
                            onClose: function() {
                                return p(!1)
                            },
                            children: [(0, r.jsx)(S.u.Child, {
                                as: a.Fragment,
                                enter: "ease-in-out duration-500",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in-out duration-500",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)(A.V.Overlay, {
                                    className: "fixed inset-0 bg-black bg-opacity-5 transition-opacity"
                                })
                            }), (0, r.jsx)(S.u.Child, {
                                as: a.Fragment,
                                enter: "transform transition transition-all ease-in-out duration-350",
                                enterFrom: (null === me || void 0 === me || null === (o = me.menu) || void 0 === o ? void 0 : o.collapse) && !f ? "left" !== xe ? "-translate-x-full" : "translate-x-full" : "translate-x-0 opacity-0",
                                enterTo: "translate-x-0 opacity-100",
                                leave: "transform transition transition-all ease-in-out duration-350",
                                leaveFrom: "translate-x-0 opacity-100",
                                leaveTo: (null === me || void 0 === me || null === (l = me.menu) || void 0 === l ? void 0 : l.collapse) && !f ? "left" !== xe ? "-translate-x-full" : "translate-x-full" : "translate-x-0 opacity-0",
                                children: (0, r.jsx)(A.V.Panel, {
                                    className: ie("fixed flex flex-col shadow-lg", (null === me || void 0 === me || null === (i = me.menu) || void 0 === i ? void 0 : i.collapse) && !f ? "left" !== xe ? "top-0 left-0 bottom-0 w-80" : "top-0 bottom-0 right-0 w-80" : (!te || 0 !== (null === he || void 0 === he ? void 0 : he.length) || (null === me || void 0 === me ? void 0 : me.showSocial)) && !(0 === (null === he || void 0 === he ? void 0 : he.length) && (null === me || void 0 === me ? void 0 : me.showSocial) && Array.isArray(null === c || void 0 === c ? void 0 : c.social) && (null === c || void 0 === c ? void 0 : c.social.length) > 1) && (te || me.showSocial || 1 !== (null === he || void 0 === he ? void 0 : he.length)) && (1 !== (null === he || void 0 === he ? void 0 : he.length) || !te && !me.showSocial) ? "inset-0 h-full" : "top-0 left-0 right-0"),
                                    style: {
                                        backgroundColor: y,
                                        color: j
                                    },
                                    children: (0, r.jsxs)("div", {
                                        ref: ue,
                                        className: ie("flex-1 flex flex-col h-full mx-auto pb-6", (null === me || void 0 === me ? void 0 : me.fullWidth) ? "w-full px-6" : "container"),
                                        children: [(0, r.jsxs)("div", {
                                            className: ie("items-center", Ae(null === me || void 0 === me ? void 0 : me.spacing), "left" !== xe ? "grid" : "flex justify-between"),
                                            style: "left" !== xe ? {
                                                gridTemplateColumns: "1fr auto 1fr"
                                            } : {},
                                            children: [
                                                ["center", "full-center"].includes(xe) && (0, r.jsx)("div", {}), (0, r.jsx)("div", {
                                                    className: "lg:invisible",
                                                    children: je(!0)
                                                }), (0, r.jsx)("div", {
                                                    className: "ml-auto",
                                                    children: (0, r.jsx)("button", {
                                                        className: "inline-flex items-center justify-center p-2 rounded-md outline-none",
                                                        style: {
                                                            color: j
                                                        },
                                                        onClick: function() {
                                                            return p(!1)
                                                        },
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: "block h-5 w-5",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            ]
                                        }), (null === he || void 0 === he ? void 0 : he.length) > 0 && (0, r.jsxs)("div", {
                                            className: "flex-1 py-6 overflow-auto",
                                            children: [(0, r.jsx)(S.u, {
                                                as: "div",
                                                show: !H,
                                                enter: "transition-opacity",
                                                enterFrom: "opacity-0",
                                                enterTo: "opacity-100",
                                                children: (0, r.jsx)("ul", {
                                                    className: ie("flex flex-col justify-center lg:justify-start gap-3 w-full", f && ["center", "full-center"].includes(xe) ? "text-center" : ""),
                                                    style: (0, t.Z)({
                                                        color: j
                                                    }, fe(c)),
                                                    children: 1 === he.length && "parent" === he[0].type ? (0, r.jsxs)(r.Fragment, {
                                                        children: [(0, r.jsx)("li", {
                                                            className: "text-xl lg:!text-sm font-medium py-2",
                                                            style: {
                                                                borderColor: he[0].current ? "".concat(j) : "transparent"
                                                            },
                                                            children: (0, r.jsx)("span", {
                                                                className: "block w-full",
                                                                children: he[0].name
                                                            })
                                                        }, "page-link-".concat(he[0].href)), null === (s = he[0].nests) || void 0 === s ? void 0 : s.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ie("relative body-large py-2", "default" !== ye ? "px-3" : "", ["center", "full-center"].includes(xe) && "default" === ye ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === ye ? "active-menu-item" : ""),
                                                                style: Ne(e, j),
                                                                children: (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    }) : (0, r.jsx)(r.Fragment, {
                                                        children: null === he || void 0 === he ? void 0 : he.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ie("relative body-large lg:!text-body py-2", "default" !== ye ? "px-3" : "", ["center", "full-center"].includes(xe) && "default" === ye ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === ye ? "active-menu-item" : ""),
                                                                style: Ne(e, j),
                                                                children: "parent" === e.type && e.nests.length > 0 ? (0, r.jsxs)("button", {
                                                                    className: "inline-flex items-center gap-2",
                                                                    onClick: function() {
                                                                        return U(e.nests)
                                                                    },
                                                                    children: [(0, r.jsx)("span", {
                                                                        children: e.name
                                                                    }), (0, r.jsx)(P.Z, {
                                                                        className: "w-4 h-4",
                                                                        "aria-hidden": "true"
                                                                    })]
                                                                }) : (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))
                                                    })
                                                })
                                            }), (0, r.jsx)(S.u, {
                                                as: "div",
                                                show: !!H,
                                                enter: "transition-opacity",
                                                enterFrom: "opacity-0",
                                                enterTo: "opacity-100",
                                                children: (0, r.jsx)("ul", {
                                                    className: ie("flex flex-col justify-center lg:justify-start gap-3 w-full", f && ["center", "full-center"].includes(xe) ? "text-center" : ""),
                                                    style: (0, t.Z)({
                                                        color: j
                                                    }, fe(c)),
                                                    children: (0, r.jsxs)(r.Fragment, {
                                                        children: [H && (0, r.jsx)("li", {
                                                            children: (0, r.jsxs)("button", {
                                                                className: ie("flex items-center gap-2 w-full py-2 body-large lg:!text-body", "default" !== ye ? "px-3" : "", f && ["center", "full-center"].includes(xe) ? "justify-center" : ""),
                                                                onClick: function() {
                                                                    return U(null)
                                                                },
                                                                children: [(0, r.jsx)(M.Z, {
                                                                    className: "w-4 h-4",
                                                                    "aria-hidden": "true"
                                                                }), (0, r.jsx)("span", {
                                                                    children: v("back")
                                                                })]
                                                            })
                                                        }), null === H || void 0 === H ? void 0 : H.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ie("relative body-large lg:!text-body py-2", "default" !== ye ? "px-3" : "", ["center", "full-center"].includes(xe) && "default" === ye ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === ye ? "active-menu-item" : ""),
                                                                style: Ne(e, j),
                                                                children: (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    })
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: ie("flex flex-col max-w-[100vw] lg:hidden", ["center", "full-center"].includes(xe) ? "items-center" : "", (null === he || void 0 === he ? void 0 : he.length) > 0 ? "" : "h-full justify-center"),
                                            children: [(null === me || void 0 === me ? void 0 : me.showSocial) && (null === (d = c.social) || void 0 === d ? void 0 : d.length) > 0 && (0, r.jsx)("ul", {
                                                className: "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                                children: Array.isArray(c.social) && c.social.map((function(e, n) {
                                                    var o = D.W.find((function(n) {
                                                            return n.id === e.type
                                                        })),
                                                        t = e.link;
                                                    return "custom" !== e.type && (t = (t = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), t = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(t)), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(F(), {
                                                            href: t,
                                                            children: (0, r.jsx)("a", {
                                                                target: "_blank",
                                                                children: (0, r.jsx)(D.Q, {
                                                                    icon: e,
                                                                    color: ge && !m ? J.textColor : j,
                                                                    settings: c.socialSettings
                                                                })
                                                            })
                                                        })
                                                    }, "social-icon-header-".concat(n))
                                                }))
                                            }), (null === ee || void 0 === ee ? void 0 : ee.length) > 0 && te && (0, r.jsx)("div", {
                                                className: ie("flex items-center flex-shrink-0 flex-wrap gap-4", ["center", "full-center"].includes(xe) ? "items-center justify-center" : ""),
                                                children: null === ee || void 0 === ee ? void 0 : ee.map((function(e, n) {
                                                    return (0, r.jsx)(N.Z, {
                                                        button: e,
                                                        block: me,
                                                        website: c,
                                                        className: ie("xl !font-normal !py-1.5", ["center", "full-center"].includes(xe) ? "text-center" : "")
                                                    }, "banner-button-".concat(n))
                                                }))
                                            }), (null === me || void 0 === me ? void 0 : me.button) && (0, r.jsx)("div", {
                                                className: "py-6",
                                                children: (0, r.jsx)(N.Z, {
                                                    className: "xl !font-normal !py-1.5",
                                                    button: me.button,
                                                    block: me,
                                                    website: c
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
            var H, U = o(165),
                q = o(40782),
                V = o(83457),
                Q = o.n(V),
                G = function(e) {
                    var n = e.apiUrl,
                        o = e.website,
                        t = (e.page, "home-local-markup"),
                        l = function() {
                            var e = (0, s.Z)((function() {
                                var e, t;
                                return (0, c.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, new m.Z(n).get("/office/get-info-by-business", {
                                                idBusiness: o.Business._id
                                            })];
                                        case 1:
                                            return e = l.sent(), t = {}, e && !0 === e.status && (t = (null === e || void 0 === e ? void 0 : e.content) || {}), [2, t]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        i = function() {
                            var e = (0, s.Z)((function() {
                                var e, t, l;
                                return (0, c.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, new m.Z(n).get("/seo/markup-local-business-images", {
                                                idBusiness: o.Business._id
                                            })];
                                        case 1:
                                            return e = i.sent(), t = {}, e && !0 === e.status && (t = (null === e || void 0 === e || null === (l = e.content) || void 0 === l ? void 0 : l.images) || {}), [2, t]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        d = function(e) {
                            var n = e;
                            return e && 2 === e.length && (n = "".concat(e[0].toUpperCase()).concat(e.substring(1))), n
                        },
                        u = function(e) {
                            var n = "";
                            try {
                                var o = e.indexOf("PM") > 0,
                                    t = e.replace("AM", "", e);
                                if (t = (t = t.replace("PM", "", t)).trim(), o) {
                                    var l = t.split(":"),
                                        i = +l[0];
                                    t = "".concat(i += 12, ":").concat(l[1])
                                }
                                n = t
                            } catch (r) {
                                n = e
                            }
                            return n
                        },
                        v = function(e) {
                            var n = [];
                            for (var o in e) {
                                var t = o.substring(0, 2),
                                    l = e[o];
                                if (l && Array.isArray(l)) {
                                    var i = !0,
                                        r = !1,
                                        a = void 0;
                                    try {
                                        for (var s, c = l[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                            var v = s.value;
                                            n.push("".concat(d(t), " ").concat(u(v.start), "-").concat(u(v.end)))
                                        }
                                    } catch (f) {
                                        r = !0, a = f
                                    } finally {
                                        try {
                                            i || null == c.return || c.return()
                                        } finally {
                                            if (r) throw a
                                        }
                                    }
                                }
                            }
                            return n
                        },
                        f = function(e) {
                            var n = [];
                            if (Array.isArray(e)) {
                                var o = !0,
                                    t = !1,
                                    l = void 0;
                                try {
                                    for (var i, r = e[Symbol.iterator](); !(o = (i = r.next()).done); o = !0) {
                                        var a = i.value;
                                        if ((null === a || void 0 === a ? void 0 : a.link) && (null === a || void 0 === a ? void 0 : a.type)) switch (a.type) {
                                            case "facebook":
                                                n.push("https://facebook.com/".concat(a.link));
                                                break;
                                            case "youtube":
                                                n.push("https://youtube.com/".concat(a.link));
                                                break;
                                            case "linkedin":
                                                n.push("https://linkedin.com/".concat(a.link));
                                                break;
                                            case "instagram":
                                                n.push("https://instagram.com/".concat(a.link))
                                        }
                                    }
                                } catch (s) {
                                    t = !0, l = s
                                } finally {
                                    try {
                                        o || null == r.return || r.return()
                                    } finally {
                                        if (t) throw l
                                    }
                                }
                            }
                            return n
                        },
                        h = function(e) {
                            return !0 === (null === e || void 0 === e ? void 0 : e.public) ? {
                                "@type": "PostalAddress",
                                streetAddress: (null === e || void 0 === e ? void 0 : e.line1) || "",
                                addressLocality: (null === e || void 0 === e ? void 0 : e.city) || "",
                                addressRegion: (null === e || void 0 === e ? void 0 : e.state) || "",
                                postalCode: (null === e || void 0 === e ? void 0 : e.postalCode) || "",
                                addressCountry: (null === e || void 0 === e ? void 0 : e.country) ? e.country.toUpperCase() : ""
                            } : {}
                        },
                        g = function() {
                            var e = (0, s.Z)((function() {
                                var e, n, r, a, s, d, u, m, g;
                                return (0, c.__generator)(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return "object" !== typeof document ? [3, 3] : [4, l().catch((function(e) {
                                                return console.log("Address Error", e)
                                            }))];
                                        case 1:
                                            return r = c.sent(), a = r.address, s = r.businessHours, d = r.phoneNumber, [4, i().catch((function(e) {
                                                return console.log("Gallery Error", e)
                                            }))];
                                        case 2:
                                            u = c.sent(), m = {
                                                "@context": "https://schema.org/",
                                                "@type": "LocalBusiness",
                                                name: (null === o || void 0 === o || null === (e = o.seo) || void 0 === e ? void 0 : e.title) || (null === o || void 0 === o || null === (n = o.header) || void 0 === n ? void 0 : n.name) || "",
                                                url: "".concat(location.protocol, "//").concat(location.hostname, "/"),
                                                telephone: d || "",
                                                image: u,
                                                address: h(a),
                                                sameAs: f((null === o || void 0 === o ? void 0 : o.social) || []),
                                                openingHours: v(s)
                                            }, (g = document.getElementById(t) || document.createElement("script")).id = t, g.type = "application/ld+json", g.innerHTML = JSON.stringify(m), document.body.appendChild(g), c.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.useEffect)((function() {
                        return g().catch((function(e) {
                                return console.error("Failed to build markup")
                            })),
                            function() {
                                ! function() {
                                    if ("object" === typeof document) {
                                        var e = document.getElementById(t);
                                        e && e.remove()
                                    }
                                }()
                            }
                    }), []), (0, r.jsx)(r.Fragment, {})
                },
                J = {
                    success: {
                        color: "bg-green-50 text-green-800",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-green-400"
                        }),
                        progress: "bg-green-700"
                    },
                    error: {
                        color: "bg-red-50 text-red-800",
                        icon: (0, r.jsx)(y.Z, {
                            className: "h-5 w-5 text-red-400"
                        }),
                        progress: "bg-red-700"
                    },
                    info: {
                        color: "bg-indigo-50 text-indigo-800",
                        icon: (0, r.jsx)(b.Z, {
                            className: "h-5 w-5 text-indigo-400"
                        }),
                        progress: "bg-indigo-700"
                    },
                    warning: {
                        color: "bg-yellow-50 text-yellow-800",
                        icon: (0, r.jsx)(w.Z, {
                            className: "h-5 w-5 text-yellow-400"
                        }),
                        progress: "bg-yellow-700"
                    },
                    default: {
                        color: "bg-gray-50 text-gray-800",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-700"
                    },
                    dark: {
                        color: "bg-white-600 font-gray-300",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-300"
                    }
                },
                Y = [],
                X = function(e) {
                    var n, l, u, g, x, y, b, w, N, k, C, F, Z, S, A = e.children,
                        R = e.website,
                        _ = e.page,
                        P = e.apiUrl,
                        M = e.ipAddress,
                        L = e.hideFooter,
                        T = p().useRouter(),
                        I = (0, a.useState)(0),
                        E = I[0],
                        B = I[1],
                        z = (0, a.useState)(!1),
                        D = z[0],
                        W = z[1],
                        K = (0, a.useState)(null),
                        O = K[0],
                        V = K[1],
                        X = (0, a.useState)(0),
                        ee = X[0],
                        ne = X[1],
                        oe = new m.Z(P),
                        te = null !== (S = R.seo) && void 0 !== S ? S : {},
                        le = te.headCode,
                        ie = te.footerCode,
                        re = (0, d.Z)(te, ["headCode", "footerCode"]),
                        ae = (0, t.Z)({
                            globalHeadCode: le,
                            globalFooterCode: ie
                        }, re, null === _ || void 0 === _ ? void 0 : _.seo),
                        se = (0, a.useCallback)(function() {
                            var e = (0, s.Z)((function(e) {
                                return (0, c.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return 0 !== e.target.scrollTop && 0 !== E || B(e.target.scrollTop), D ? [3, 2] : [4, ce("scroll")];
                                        case 1:
                                            n.sent(), W(!0), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(), [D]),
                        de = a.Children.map(A, (function(e) {
                            return a.isValidElement(e) ? a.cloneElement(e, (0, t.Z)({}, e.props)) : e
                        })),
                        ce = function() {
                            var e = (0, s.Z)((function(e) {
                                var n, t, l, i, r, a, s, d, u, v, f, m, g;
                                return (0, c.__generator)(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return s = JSON.parse(localStorage.getItem("user") || "{}"), d = Math.abs(new Date - new Date(s.date)) / 36e5, s && s.ip && !(d > 24) && s.hash ? [3, 4] : (u = M || "0.0.0.0", window.unsupportedBrowser || M ? [3, 3] : [4, o.e(6216).then(o.bind(o, 76216))]);
                                        case 1:
                                            return [4, c.sent().publicIpv4()];
                                        case 2:
                                            u = c.sent(), c.label = 3;
                                        case 3:
                                            v = (new Date).getTime(), f = (new Date).getTime(), m = new Date(f - f % 864e5), localStorage.setItem("user", JSON.stringify({
                                                ip: u,
                                                date: m.toISOString(),
                                                hash: v
                                            })), s.ip = u, s.hash = v, c.label = 4;
                                        case 4:
                                            g = {
                                                idWebsite: R._id,
                                                url: document.location.pathname,
                                                event: e,
                                                platform: (null === window || void 0 === window || null === (n = window.navigator) || void 0 === n ? void 0 : n.platform) ? null === window || void 0 === window || null === (t = window.navigator) || void 0 === t || null === (l = t.platform) || void 0 === l ? void 0 : l.toString() : (null === window || void 0 === window || null === (i = window.navigator) || void 0 === i ? void 0 : i.oscpu) ? null === window || void 0 === window || null === (r = window.navigator) || void 0 === r ? void 0 : r.oscpu : "bot",
                                                title: document.title.split(" - ")[0] || "Home",
                                                device: /bot|googlebot|crawler|spider|robot|crawling/i.test(null === window || void 0 === window || null === (a = window.navigator) || void 0 === a ? void 0 : a.userAgent) ? "bot" : h.tq ? "mobile" : "desktop",
                                                ip: s.ip,
                                                hash: s.hash
                                            }, Y.find((function(e) {
                                                return e.event === g.event
                                            })) || Y.push(g), c.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ue = function() {
                            var e, n, o, t, l, r, a, s, d, c, u, v, f, m, h, g, p, x, y, b, w, j, N, k, C, F, Z, S, A, _, P, M, L, T, I, E, B, z, D, W, K, O, $, H, U, q, V = [];
                            if ("custom" === (null === R || void 0 === R || null === (e = R.fonts) || void 0 === e ? void 0 : e.source)) V.push("family=".concat(null === R || void 0 === R || null === (f = R.fonts) || void 0 === f || null === (m = f.custom) || void 0 === m || null === (h = m.head) || void 0 === h || null === (g = h.name) || void 0 === g ? void 0 : g.replace(/ /gi, "+"), ":").concat("italic" === (null === R || void 0 === R || null === (p = R.fonts) || void 0 === p || null === (x = p.custom) || void 0 === x || null === (y = x.head) || void 0 === y ? void 0 : y.style) ? "ital," : "", "wght@").concat(null === R || void 0 === R || null === (b = R.fonts) || void 0 === b || null === (w = b.custom) || void 0 === w || null === (j = w.head) || void 0 === j ? void 0 : j.weight)), V.push("family=".concat(null === R || void 0 === R || null === (N = R.fonts) || void 0 === N || null === (k = N.custom) || void 0 === k || null === (C = k.body) || void 0 === C || null === (F = C.name) || void 0 === F ? void 0 : F.replace(/ /gi, "+"), ":").concat("italic" === (null === R || void 0 === R || null === (Z = R.fonts) || void 0 === Z || null === (S = Z.custom) || void 0 === S || null === (A = S.body) || void 0 === A ? void 0 : A.style) ? "ital," : "", "wght@").concat(null === R || void 0 === R || null === (_ = R.fonts) || void 0 === _ || null === (P = _.custom) || void 0 === P || null === (M = P.body) || void 0 === M ? void 0 : M.weight));
                            else if ((null === R || void 0 === R || null === (n = R.fonts) || void 0 === n || null === (o = n.head) || void 0 === o ? void 0 : o.name) && (null === R || void 0 === R || null === (t = R.fonts) || void 0 === t || null === (l = t.body) || void 0 === l ? void 0 : l.name)) {
                                var Q, G, J, Y, X, ee, ne, oe, te, le;
                                V.push("family=".concat(null === R || void 0 === R || null === (Q = R.fonts) || void 0 === Q || null === (G = Q.head) || void 0 === G || null === (J = G.name) || void 0 === J ? void 0 : J.replace(/ /gi, "+"), ":wght@").concat(null === R || void 0 === R || null === (Y = R.fonts) || void 0 === Y || null === (X = Y.head) || void 0 === X ? void 0 : X.weight)), V.push("family=".concat(null === R || void 0 === R || null === (ee = R.fonts) || void 0 === ee || null === (ne = ee.body) || void 0 === ne || null === (oe = ne.name) || void 0 === oe ? void 0 : oe.replace(/ /gi, "+"), ":wght@").concat(null === R || void 0 === R || null === (te = R.fonts) || void 0 === te || null === (le = te.body) || void 0 === le ? void 0 : le.weight))
                            }(null === R || void 0 === R || null === (r = R.header) || void 0 === r || null === (a = r.logo) || void 0 === a || null === (s = a.font) || void 0 === s ? void 0 : s.name) && V.push("family=".concat(null === R || void 0 === R || null === (L = R.header) || void 0 === L || null === (T = L.logo) || void 0 === T || null === (I = T.font) || void 0 === I || null === (E = I.name) || void 0 === E ? void 0 : E.replace(/ /gi, "+"), ":wght@").concat(null === R || void 0 === R || null === (B = R.header) || void 0 === B || null === (z = B.logo) || void 0 === z || null === (D = z.font) || void 0 === D ? void 0 : D.weight));
                            "header" !== (null === R || void 0 === R || null === (d = R.footer) || void 0 === d ? void 0 : d.logoFrom) && (null === R || void 0 === R || null === (c = R.footer) || void 0 === c || null === (u = c.logo) || void 0 === u || null === (v = u.font) || void 0 === v ? void 0 : v.name) && V.push("family=".concat(null === R || void 0 === R || null === (W = R.footer) || void 0 === W || null === (K = W.logo) || void 0 === K || null === (O = K.font) || void 0 === O || null === ($ = O.name) || void 0 === $ ? void 0 : $.replace(/ /gi, "+"), ":wght@").concat(null === R || void 0 === R || null === (H = R.footer) || void 0 === H || null === (U = H.logo) || void 0 === U || null === (q = U.font) || void 0 === q ? void 0 : q.weight));
                            return (0, i.Z)(new Set(V))
                        };
                    return (0, a.useEffect)((function() {
                        return ee < 6 && (clearInterval(H), H = setInterval((0, s.Z)((function() {
                                return (0, c.__generator)(this, (function(e) {
                                    return ce("ping"), ne(ee + 1), [2]
                                }))
                            })), 3e4)), O !== T.asPath && (ce("open"), V(T.asPath), ne(0), W(!1)),
                            function() {
                                ee >= 6 && ne(0), clearInterval(H), W(!1)
                            }
                    }), [T, ee]), (0, a.useEffect)((function() {
                        var e, n, o = function() {
                            var e = (0, s.Z)((function() {
                                var e;
                                return (0, c.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return (null === Y || void 0 === Y ? void 0 : Y.length) > 0 && (e = Y.shift()) ? [4, oe.post("/website/register-user-action", e)] : [3, 2];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        return o(), e = setInterval((function() {
                                o()
                            }), 500), null === (n = document.querySelector("#main-body")) || void 0 === n || n.addEventListener("scroll", se),
                            function() {
                                var n;
                                clearInterval(e), null === (n = document.querySelector("#main-body")) || void 0 === n || n.removeEventListener("scroll", se)
                            }
                    }), [D]), (0, a.useEffect)((function() {
                        var e = function() {
                            var e = document.querySelector("#main-body");
                            e && (e.style.scrollBehavior = "auto", e.scrollTop = 0, e.style.scrollBehavior = "smooth")
                        };
                        return T.events.on("routeChangeComplete", e),
                            function() {
                                T.events.off("routeChangeComplete", e)
                            }
                    }), []), (0, a.useEffect)((function() {
                        var e;
                        window.cnDisableCache = !0;
                        var n = (0, j.getCookie)("pt");
                        n && (null === T || void 0 === T || null === (e = T.query) || void 0 === e ? void 0 : e.pt) !== n && "public" !== R.status && T.replace("".concat(T.asPath, "?pt=").concat(n), void 0, {
                            shallow: !0
                        })
                    }), [T, R]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(v(), {
                            children: [(0, r.jsx)("link", {
                                rel: "icon",
                                href: (null === (n = R.favicon) || void 0 === n ? void 0 : n.url) || ""
                            }), (null === _ || void 0 === _ ? void 0 : _.isCanonical) && (0, r.jsx)("link", {
                                rel: "canonical",
                                href: "https://".concat("to-www" === R.redirect ? "www." : "").concat(R.rawDomain).concat(T.asPath)
                            }), (0, r.jsx)("title", {
                                children: (null === ae || void 0 === ae ? void 0 : ae.title) ? ae.title : (null === (l = R.Business) || void 0 === l ? void 0 : l.name) + " | " + (null === (u = R.Business) || void 0 === u || null === (g = u.type) || void 0 === g ? void 0 : g.name)
                            }), (0, r.jsx)("meta", {
                                httpEquiv: "Content-Language",
                                content: (null === R || void 0 === R ? void 0 : R.language) || "en"
                            }), (0, r.jsx)("meta", {
                                name: "keywords",
                                content: (null === ae || void 0 === ae ? void 0 : ae.keywords) ? ae.keywords : (null === R || void 0 === R || null === (x = R.Business) || void 0 === x || null === (y = x.name) || void 0 === y ? void 0 : y.split(" ").join(",")) + "," + (null === R || void 0 === R || null === (b = R.Business) || void 0 === b || null === (w = b.type) || void 0 === w || null === (N = w.name) || void 0 === N ? void 0 : N.split(" ").join(","))
                            }), (0, r.jsx)("meta", {
                                name: "title",
                                property: "og:title",
                                content: (null === ae || void 0 === ae ? void 0 : ae.title) ? ae.title : (null === (k = R.Business) || void 0 === k ? void 0 : k.name) + " | " + (null === (C = R.Business) || void 0 === C || null === (F = C.type) || void 0 === F ? void 0 : F.name)
                            }), (0, r.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, r.jsx)("meta", {
                                property: "og:url",
                                content: "https://".concat("to-www" === R.redirect ? "www." : "").concat(R.rawDomain).concat(T.asPath)
                            }), (0, r.jsx)("meta", {
                                name: "description",
                                property: "og:description",
                                content: (null === ae || void 0 === ae ? void 0 : ae.description) ? ae.description : ""
                            }), (null === ae || void 0 === ae || null === (Z = ae.Image) || void 0 === Z ? void 0 : Z.url) && (0, r.jsx)("meta", {
                                name: "image",
                                property: "og:image",
                                content: ae.Image.url
                            }), (0, r.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary"
                            }), (null === ae || void 0 === ae ? void 0 : ae.globalHeadCode) && (0, f.ZP)(ae.globalHeadCode), (null === ae || void 0 === ae ? void 0 : ae.headCode) && (0, f.ZP)(ae.headCode), ue().length > 0 && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.googleapis.com"
                                }), (0, r.jsx)("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.gstatic.com",
                                    crossOrigin: "anonymous"
                                }), (0, r.jsx)("link", {
                                    href: "https://fonts.googleapis.com/css2?".concat(ue().join("&"), "&display=swap"),
                                    rel: "stylesheet"
                                })]
                            }), (null === R || void 0 === R ? void 0 : R.searchIndexing) ? (0, r.jsx)("meta", {
                                name: "robots",
                                content: "all"
                            }) : (0, r.jsx)("meta", {
                                name: "robots",
                                content: "noindex,nofollow"
                            })]
                        }), (0, r.jsx)(Q(), {
                            color: function() {
                                var e, n, o, t, l = (null === R || void 0 === R || null === (e = R.colorPalette) || void 0 === e || null === (n = e.Palette) || void 0 === n ? void 0 : n.colors) || (null === R || void 0 === R || null === (o = R.colorPalette) || void 0 === o ? void 0 : o.colors) || [];
                                return 0 === (null === l || void 0 === l ? void 0 : l.length) ? "#333" : (null === (t = l[0]) || void 0 === t ? void 0 : t.accent) || "#333"
                            }(),
                            startPosition: .3,
                            options: {
                                showSpinner: !1,
                                trickle: !0,
                                trickleSpeed: 100
                            }
                        }), (0, r.jsxs)("div", {
                            id: "main-body",
                            onScroll: function(e) {
                                return se(e)
                            },
                            className: "flex flex-col h-full overflow-y-auto overflow-x-hidden smooth-scroll transition-all",
                            style: fe(R),
                            children: [(0, r.jsx)($, {
                                scrollY: E,
                                website: R
                            }), de, !L && (0, r.jsx)(U.default, {
                                website: R
                            }), (0, r.jsx)(q.ToastContainer, {
                                toastClassName: function(e) {
                                    var n = e.type;
                                    return J[n || "default"].color + " relative p-4 rounded-md justify-between overflow-hidden cursor-pointer text-sm font-medium my-2.5 shadow-md flex"
                                },
                                bodyClassName: function() {
                                    return "flex text-sm font-white font-medium items-center w-full max-w-xs"
                                },
                                icon: function(e) {
                                    var n = e.type;
                                    return J[n || "default"].icon
                                },
                                position: "bottom-center",
                                autoClose: 8e3,
                                hideProgressBar: !0,
                                newestOnTop: !0,
                                closeOnClick: !0,
                                rtl: !1,
                                pauseOnFocusLoss: !0,
                                draggable: !0,
                                pauseOnHover: !0,
                                closeButton: !1
                            }), (null === ae || void 0 === ae ? void 0 : ae.globalFooterCode) && (0, f.ZP)(ae.globalFooterCode), (null === ae || void 0 === ae ? void 0 : ae.footerCode) && (0, f.ZP)(ae.footerCode), null === (null === _ || void 0 === _ ? void 0 : _.slug) && (0, r.jsx)(G, {
                                website: R,
                                page: _,
                                apiUrl: P
                            })]
                        })]
                    })
                },
                ee = o(31955),
                ne = (o(83454), "#111827"),
                oe = "#FFFFFF",
                te = [{
                    id: "top-down",
                    value: "180deg",
                    icon: "ArrowDownIcon"
                }, {
                    id: "left-right",
                    value: "90deg",
                    icon: "ArrowRightIcon"
                }, {
                    id: "bottom-left-top-right",
                    value: "45deg",
                    icon: "ArrowUpRightIcon"
                }, {
                    id: "bottom-right-top-left",
                    value: "315deg",
                    icon: "ArrowUpLeftIcon"
                }],
                le = [{
                    id: "none",
                    name: "None",
                    value: "0"
                }, {
                    id: "light",
                    name: "Light",
                    value: "4px"
                }, {
                    id: "moderate",
                    name: "Moderate",
                    value: "12px"
                }, {
                    id: "strong",
                    name: "Strong",
                    value: "32px"
                }];

            function ie() {
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return n.filter(Boolean).join(" ")
            }

            function re(e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }

            function ae(e) {
                var n = ne.replace("#", ""),
                    o = oe.replace("#", ""),
                    t = !1;
                if (!e || !e[0]) return e;
                "#" === e[0] && (e = e.slice(1), t = !0);
                var l = parseInt(6 === (null === e || void 0 === e ? void 0 : e.length) ? e : "".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]), 16),
                    i = ((l >> 16) + (255 & l) + (l >> 8 & 255)) / 3;
                return (t ? "#" : "") + (i = i > 128 ? n : o)
            }
            var se = function(e, n) {
                var o;
                return n /= 100, /^#([A-Fa-f0-9]{3}){1,2}$/.test(e) ? (3 === (null === (o = e.substring(1).split("")) || void 0 === o ? void 0 : o.length) && (o = [o[0], o[0], o[1], o[1], o[2], o[2]]), "rgba(" + [(o = "0x" + o.join("")) >> 16 & 255, o >> 8 & 255, 255 & o].join(",") + "," + n + ")") : e
            };

            function de(e) {
                var n = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                    o = n ? (256 | n[1]).toString(16).slice(1) + (256 | n[2]).toString(16).slice(1) + (256 | n[3]).toString(16).slice(1) : e;
                return "#".concat(o)
            }

            function ce(e) {
                var n = (0, a.useState)(!0),
                    o = n[0],
                    t = n[1];
                return (0, a.useEffect)((function() {
                    var n = window.matchMedia(e);
                    n.matches !== o && t(n.matches);
                    var l = function() {
                        t(n.matches)
                    };
                    return n.addListener(l),
                        function() {
                            return n.removeListener(l)
                        }
                }), [o, e]), o
            }

            function ue(e) {
                return JSON.parse(JSON.stringify(e))
            }
            var ve = function(e) {
                    return {}
                },
                fe = function(e) {
                    return {}
                },
                me = function(e) {
                    var n = {
                        fontFamily: (null === e || void 0 === e ? void 0 : e.family) || '"Inter", sans-serif',
                        fontWeight: (null === e || void 0 === e ? void 0 : e.weight) || 500
                    };
                    return (null === e || void 0 === e ? void 0 : e.style) && (n.fontStyle = e.style), (null === e || void 0 === e ? void 0 : e.size) && (n.fontSize = e.size), (null === e || void 0 === e ? void 0 : e.lineHeight) && (n.fontHeight = e.lineHeight), n
                };

            function he(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = e.props.children[0].props.website,
                    i = e.props.children[0].props.page,
                    a = e.props.children[0].props.apiUrl;
                return (0, r.jsx)(X, (0, l.Z)((0, t.Z)({
                    page: i,
                    website: o,
                    apiUrl: a
                }, n), {
                    children: e
                }))
            }

            function ge(e) {
                var n, o, t;
                return e.match(/^rgb/) ? (n = (e = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1], o = e[2], t = e[3]) : (n = (e = +("0x" + e.slice(1).replace(e.length < 5 && /./g, "$&$&"))) >> 16, o = e >> 8 & 255, t = 255 & e), Math.sqrt(n * n * .299 + o * o * .587 + t * t * .114) <= 127.5
            }

            function pe(e, n) {
                if (!e) return "#FFFFFF";
                var o = parseInt(e.replace("#", ""), 16),
                    t = Math.round(2.55 * n),
                    l = (o >> 16) + t,
                    i = (o >> 8 & 255) + t,
                    r = (255 & o) + t;
                return "#" + (16777216 + 65536 * (l < 255 ? l < 1 ? 0 : l : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)
            }

            function xe(e) {
                if (!e) return "";
                var n = e.split(" ");
                return n.length > 1 && "" !== n[1] ? n[0][0] + n[1][0] : e[0] + e[1]
            }
            var ye = function(e, n) {
                    var o = {
                            small: "rounded-sm md:rounded-md lg:rounded-lg",
                            medium: "rounded-lg md:rounded-xl lg:rounded-2xl",
                            large: "rounded-2xl md:rounded-3xl lg:rounded-4xl",
                            "no-rounded": ""
                        },
                        t = String(e);
                    return e && "default" !== e || !n || (t = n), o[t] || o["no-rounded"]
                },
                be = function(e) {
                    return "1:1" === e ? "aspect-w-1 aspect-h-1" : "2:3" === e ? "aspect-w-2 aspect-h-3" : "3:2" === e ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9"
                },
                we = function(e) {
                    var n, o, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = {
                            top: {
                                row: "items-start",
                                col: "justify-start"
                            },
                            center: {
                                row: "items-center",
                                col: "justify-center"
                            },
                            bottom: {
                                row: "items-end",
                                col: "justify-end"
                            }
                        };
                    return t ? (null === (n = l[e]) || void 0 === n ? void 0 : n.col) || l.center.col : (null === (o = l[e]) || void 0 === o ? void 0 : o.row) || l.center.row
                },
                je = function(e) {
                    var n, o, t = {
                            none: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            small: {
                                top: "pt-8 lg:pt-12",
                                bottom: "pb-8 lg:pb-12"
                            },
                            medium: {
                                top: "pt-12 lg:pt-20",
                                bottom: "pb-12 lg:pb-20"
                            },
                            large: {
                                top: "pt-16 lg:pt-32",
                                bottom: "pb-16 lg:pb-32"
                            },
                            default: {
                                top: "pt-12 lg:pt-14 xl:pt-20",
                                bottom: "pb-12 lg:pb-14 xl:pb-20"
                            }
                        },
                        l = (null === (n = t[null === e || void 0 === e ? void 0 : e.top]) || void 0 === n ? void 0 : n.top) || t.default.top,
                        i = (null === (o = t[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === o ? void 0 : o.bottom) || t.default.bottom;
                    return "".concat(l, " ").concat(i)
                },
                Ne = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "xl",
                        o = {
                            sm: "heading-small",
                            md: "heading-medium",
                            lg: "heading-large",
                            xl: "heading-xlarge"
                        };
                    return o[e] || o[n]
                },
                ke = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "lg",
                        o = {
                            sm: "body-small",
                            md: "body-medium",
                            lg: "body-large"
                        };
                    return o[e] || o[n]
                },
                Ce = function(e) {
                    return "".concat("https://cdn.durable.co", "/assets/").concat(e)
                },
                Fe = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.url) || (null === e || void 0 === e ? void 0 : e.preview)
                },
                Ze = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "color1";
                    return parseInt((null === e || void 0 === e ? void 0 : e.replace(/[^0-9]/gi, "")) || 1, 10) - 1
                },
                Se = function(e, n, o) {
                    var t, l = Ze(n);
                    return (null === e || void 0 === e ? void 0 : e.colors) && !isNaN(l) ? null === (t = e.colors[l]) || void 0 === t ? void 0 : t[o] : "#FFFFFF"
                },
                Ae = function(e, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return function() {
                        for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                        return clearTimeout(o), setTimeout((function() {
                            e.apply(void 0, (0, i.Z)(l))
                        }), n)
                    }
                },
                Re = function(e) {
                    return null !== e && void 0 !== e
                };

            function _e(e) {
                return ee.Z.get(e)
            }

            function Pe(e, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ee.Z.set(e, n, o)
            }
            var Me = function(e) {
                var n = e.h1,
                    o = e.className,
                    t = e.style,
                    l = e.children;
                return n ? (0, r.jsx)("h1", {
                    className: o,
                    style: t,
                    children: l
                }) : (0, r.jsx)("h2", {
                    className: o,
                    style: t,
                    children: l
                })
            }
        },
        75871: function(e, n, o) {
            o.d(n, {
                M: function() {
                    return r
                },
                b: function() {
                    return l
                }
            });
            var t = o(85518),
                l = {
                    none: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    small: {
                        top: "pt-4",
                        bottom: "pb-4"
                    },
                    medium: {
                        top: "pt-6",
                        bottom: "pb-6"
                    },
                    large: {
                        top: "pt-8",
                        bottom: "pb-8"
                    }
                };

            function i(e) {
                switch (e) {
                    case "small":
                        return 1;
                    case "medium":
                        return 1.5;
                    case "large":
                        return 2;
                    default:
                        return 0
                }
            }

            function r(e) {
                var n, o, l, r = e.header;
                if (!r || !(null === r || void 0 === r ? void 0 : r.sticky)) return {};
                var a, s, d = "2rem";
                "image" === (null === r || void 0 === r || null === (n = r.logo) || void 0 === n ? void 0 : n.type) && (d = (d = t.tq ? null === (a = r.logo.height) || void 0 === a ? void 0 : a.mobile : null === (s = r.logo.height) || void 0 === s ? void 0 : s.desktop) < 32 ? "2rem" : "".concat(d, "px"));
                var c = i(null === r || void 0 === r || null === (o = r.spacing) || void 0 === o ? void 0 : o.top) + i(null === r || void 0 === r || null === (l = r.spacing) || void 0 === l ? void 0 : l.bottom);
                return {
                    scrollMarginTop: "calc(".concat(c, "rem + ").concat(d, ")")
                }
            }
        }
    }
]);