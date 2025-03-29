(() => {
    "use strict";
    var e = {},
        t = {};

    function r(a) {
        var d = t[a];
        if (void 0 !== d) return d.exports;
        var c = t[a] = {
                id: a,
                loaded: !1,
                exports: {}
            },
            f = !0;
        try {
            e[a].call(c.exports, c, c.exports, r), f = !1
        } finally {
            f && delete t[a]
        }
        return c.loaded = !0, c.exports
    }
    r.m = e, r.amdD = function() {
        throw Error("define cannot be used indirect")
    }, r.amdO = {}, (() => {
        var e = [];
        r.O = (t, a, d, c) => {
            if (a) {
                c = c || 0;
                for (var f = e.length; f > 0 && e[f - 1][2] > c; f--) e[f] = e[f - 1];
                e[f] = [a, d, c];
                return
            }
            for (var o = 1 / 0, f = 0; f < e.length; f++) {
                for (var [a, d, c] = e[f], n = !0, i = 0; i < a.length; i++)(!1 & c || o >= c) && Object.keys(r.O).every(e => r.O[e](a[i])) ? a.splice(i--, 1) : (n = !1, c < o && (o = c));
                if (n) {
                    e.splice(f--, 1);
                    var b = d();
                    void 0 !== b && (t = b)
                }
            }
            return t
        }
    })(), r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        r.t = function(a, d) {
            if (1 & d && (a = this(a)), 8 & d || "object" == typeof a && a && (4 & d && a.__esModule || 16 & d && "function" == typeof a.then)) return a;
            var c = Object.create(null);
            r.r(c);
            var f = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & d && a;
                "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach(e => f[e] = () => a[e]);
            return f.default = () => a, r.d(c, f), c
        }
    })(), r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), [])), r.u = e => "static/chunks/" + (({
        248: "auto-track",
        521: "remoteMiddleware",
        1478: "7413e8b9",
        2006: "1743016e",
        3104: "schemaFilter",
        3852: "ab16df01",
        4309: "12e1a23a",
        4852: "74030e57",
        5050: "ajs-destination",
        5611: "3d35b88c",
        7538: "queryString",
        9010: "tsub-middleware",
        9694: "legacyVideos",
        9835: "1fe4175e"
    })[e] || e) + "." + ({
        3: "2cb41c258cdc659d",
        151: "d0c7a5a43ed2b3f6",
        209: "a3145e6187456885",
        248: "54b48aa1ac851f77",
        521: "70545c573e7f131e",
        751: "89d20f53687c6638",
        880: "2fb55cd1ea379019",
        928: "43c24134cdcf0cb5",
        1105: "0410de8dca6bdcd3",
        1276: "92fec82bff807cbb",
        1297: "bad3be21e6a315a4",
        1432: "e555129550f1e918",
        1478: "26789ad7eaab3ff4",
        1811: "577f645c5f1254a6",
        2006: "cafbf12bf63073bf",
        2532: "edf2212b5358e8ef",
        2638: "9bbff9de0519ed9d",
        2645: "d4e7d3f0493bfed7",
        2937: "eae43372a42fca95",
        3068: "042c4458b69f6858",
        3104: "8d58a0c07b98db06",
        3341: "268b02f694b2e36d",
        3740: "8d53ef4b2cbc1726",
        3747: "771e540b3fab25c1",
        3852: "b0ff28437b4c61d7",
        4309: "78223c345413e5a0",
        4407: "c6fdd6d098cf40a3",
        4478: "782c923a620d0199",
        4483: "b1e22900348e682f",
        4571: "d0641c370bea29b7",
        4731: "1f735a4be8e0aa58",
        4852: "027dec5d199bc53f",
        4899: "d396578555961519",
        5006: "df71cb3bdbbbd069",
        5050: "98a76d85851ba663",
        5332: "db809f16f4c171fa",
        5546: "a629d74a266a89ef",
        5570: "49e5f91535f7e918",
        5605: "f23d5f3dc526f954",
        5611: "89c8cbcdea31a14b",
        5740: "af4cf51d7f97157c",
        5968: "4cd52eda5f362684",
        6158: "a9fa814ed984b420",
        6493: "e42a1b0392ee4b3d",
        6949: "03d9ee1cb787d2da",
        7113: "bd8ada1d0d44f060",
        7506: "d6e1c757545e23c7",
        7538: "477b1b82314c8cee",
        7601: "7ac9916d57d2ad52",
        7603: "45d31ae12a914027",
        7877: "2bf7666f498b5f59",
        7897: "a775023f018a941e",
        8467: "0bc19d3d5d540080",
        8882: "412265f72f26e0c9",
        9010: "dc552f7e36a78c8e",
        9015: "3da411409f75d0c1",
        9206: "2e4d22349e5c4625",
        9484: "2d145ec231909a76",
        9511: "d5e636540bd0bc18",
        9694: "4f8631d21da90891",
        9699: "a5418382b7e4126b",
        9835: "e31f36e38879e8e0",
        9839: "1774db0d953992e5",
        9865: "4b7079116cfd6bed",
        9953: "35de2a5774ce4e37",
        9989: "3982992d6c73184c"
    })[e] + ".js", r.miniCssF = e => "static/css/" + ({
        7585: "484767f3eb25cddc",
        8683: "745392de27033dde"
    })[e] + ".css", r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "_N_E:";
        r.l = (a, d, c, f) => {
            if (e[a]) {
                e[a].push(d);
                return
            }
            if (void 0 !== c)
                for (var o, n, i = document.getElementsByTagName("script"), b = 0; b < i.length; b++) {
                    var l = i[b];
                    if (l.getAttribute("src") == a || l.getAttribute("data-webpack") == t + c) {
                        o = l;
                        break
                    }
                }
            o || (n = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, r.nc && o.setAttribute("nonce", r.nc), o.setAttribute("data-webpack", t + c), o.src = r.tu(a)), e[a] = [d];
            var s = (t, r) => {
                    o.onerror = o.onload = null, clearTimeout(u);
                    var d = e[a];
                    if (delete e[a], o.parentNode && o.parentNode.removeChild(o), d && d.forEach(e => e(r)), t) return t(r)
                },
                u = setTimeout(s.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
            o.onerror = s.bind(null, o.onerror), o.onload = s.bind(null, o.onload), n && document.head.appendChild(o)
        }
    })(), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "https://assets.gammahosted.com/eynl6a9v4/_next/", (() => {
        var e = (e, t, r, a) => {
                var d = document.createElement("link");
                return d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = c => {
                        if (d.onerror = d.onload = null, "load" === c.type) r();
                        else {
                            var f = c && ("load" === c.type ? "missing" : c.type),
                                o = c && c.target && c.target.href || t,
                                n = Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                            n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, d.parentNode.removeChild(d), a(n)
                        }
                    }, d.href = t,
                    function(e) {
                        if ("function" == typeof _N_E_STYLE_LOAD) {
                            let {
                                href: t,
                                onload: r,
                                onerror: a
                            } = e;
                            _N_E_STYLE_LOAD(new URL(t).pathname).then(() => null == r ? void 0 : r.call(e, {
                                type: "load"
                            }), () => null == a ? void 0 : a.call(e, {}))
                        } else document.head.appendChild(e)
                    }(d), d
            },
            t = (e, t) => {
                for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                    var d = r[a],
                        c = d.getAttribute("data-href") || d.getAttribute("href");
                    if ("stylesheet" === d.rel && (c === e || c === t)) return d
                }
                for (var f = document.getElementsByTagName("style"), a = 0; a < f.length; a++) {
                    var d = f[a],
                        c = d.getAttribute("data-href");
                    if (c === e || c === t) return d
                }
            },
            a = a => new Promise((d, c) => {
                var f = r.miniCssF(a),
                    o = r.p + f;
                if (t(f, o)) return d();
                e(a, o, d, c)
            }),
            d = {
                8068: 0
            };
        r.f.miniCss = (e, t) => {
            d[e] ? t.push(d[e]) : 0 !== d[e] && ({
                7585: 1,
                8683: 1
            })[e] && t.push(d[e] = a(e).then(() => {
                d[e] = 0
            }, t => {
                throw delete d[e], t
            }))
        }
    })(), (() => {
        var e = {
            8068: 0
        };
        r.f.j = (t, a) => {
            var d = r.o(e, t) ? e[t] : void 0;
            if (0 !== d) {
                if (d) a.push(d[2]);
                else if (/^(7585|8068|8683)$/.test(t)) e[t] = 0;
                else {
                    var c = new Promise((r, a) => d = e[t] = [r, a]);
                    a.push(d[2] = c);
                    var f = r.p + r.u(t),
                        o = Error();
                    r.l(f, a => {
                        if (r.o(e, t) && (0 !== (d = e[t]) && (e[t] = void 0), d)) {
                            var c = a && ("load" === a.type ? "missing" : a.type),
                                f = a && a.target && a.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + c + ": " + f + ")", o.name = "ChunkLoadError", o.type = c, o.request = f, d[1](o)
                        }
                    }, "chunk-" + t, t)
                }
            }
        }, r.O.j = t => 0 === e[t];
        var t = (t, a) => {
                var d, c, [f, o, n] = a,
                    i = 0;
                if (f.some(t => 0 !== e[t])) {
                    for (d in o) r.o(o, d) && (r.m[d] = o[d]);
                    if (n) var b = n(r)
                }
                for (t && t(a); i < f.length; i++) c = f[i], r.o(e, c) && e[c] && e[c][0](), e[c] = 0;
                return r.O(b)
            },
            a = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    })(), r.nc = void 0
})();
//# sourceMappingURL=webpack-9a1a7fa8963e3fd9.js.map