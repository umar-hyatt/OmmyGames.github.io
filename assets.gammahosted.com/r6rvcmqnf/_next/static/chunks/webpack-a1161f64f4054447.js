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
            o = !0;
        try {
            e[a].call(c.exports, c, c.exports, r), o = !1
        } finally {
            o && delete t[a]
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
                for (var o = e.length; o > 0 && e[o - 1][2] > c; o--) e[o] = e[o - 1];
                e[o] = [a, d, c];
                return
            }
            for (var n = 1 / 0, o = 0; o < e.length; o++) {
                for (var [a, d, c] = e[o], f = !0, i = 0; i < a.length; i++)(!1 & c || n >= c) && Object.keys(r.O).every(e => r.O[e](a[i])) ? a.splice(i--, 1) : (f = !1, c < n && (n = c));
                if (f) {
                    e.splice(o--, 1);
                    var l = d();
                    void 0 !== l && (t = l)
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
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var n = 2 & d && a;
                "object" == typeof n && !~e.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach(e => o[e] = () => a[e]);
            return o.default = () => a, r.d(c, o), c
        }
    })(), r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), [])), r.u = e => "static/chunks/" + (({
        248: "auto-track",
        1078: "ccdd186b",
        2902: "remoteMiddleware",
        3104: "schemaFilter",
        4638: "2f53cf9a",
        5050: "ajs-destination",
        5307: "a02d8926",
        6273: "c1eae3d0",
        6935: "a3e3fa54",
        7155: "dd47488c",
        7538: "queryString",
        7547: "010a479d",
        9010: "tsub-middleware",
        9694: "legacyVideos"
    })[e] || e) + "." + ({
        248: "c8d9936e59d51389",
        650: "501fa145e75a9dc4",
        810: "5e6590c5596e35bb",
        1078: "03a54448cb2bf77d",
        1099: "06504351ef2b38e9",
        1166: "52a58661bca02767",
        1186: "06f0ec8435887407",
        1266: "8a9050e9994589cb",
        1312: "e770a8125c2b8273",
        1865: "4773f1c63afeb933",
        1940: "981f3671ac90a0f1",
        2004: "2417f35978e48df6",
        2101: "779e46bf1f5c0155",
        2308: "688e2408d2119fc4",
        2360: "c3e86ecbbc5a8474",
        2400: "c5fc49531a8e85b6",
        2829: "98cbc159d26c7550",
        2902: "47f59eafbc695c66",
        3006: "236070d2263f3400",
        3104: "d0bd29534a04d0e0",
        3308: "940f89ef3756fafd",
        3466: "f2d30db9e6cbc891",
        3603: "3b1dc375ff76dad2",
        3793: "15e0df9efcd1e958",
        3806: "95ab6a97d324c798",
        3910: "7fb18d48f605e59b",
        4136: "8206ef4008c233dd",
        4324: "eb7d1c19c820b0e1",
        4638: "f576bbf1806d52f6",
        4688: "be9aa6a89a36cdaa",
        4823: "ec32509ceb601841",
        5050: "f301bbd5d1982b0c",
        5086: "6a4e3887b3db2310",
        5307: "6b09fddf96a230db",
        5481: "f0198af42ba374ba",
        5894: "25b545ef5c0358d3",
        5903: "7237a5c38994067e",
        5977: "4120c34df00c1a90",
        6126: "dce809b4e6b3c9cd",
        6273: "7e25ea272b2603c0",
        6935: "69709282545d4ab2",
        6994: "9bf5d950665e6fbd",
        7012: "5bd169e38c3864fb",
        7070: "da0dd826f96b7688",
        7096: "61d463a60815c31d",
        7155: "915862a03cf054d0",
        7332: "e3efbf2d82ab4c6f",
        7430: "0228a22f9722fa4f",
        7538: "a10e2564ca9144e8",
        7547: "65783e0ffe3565d2",
        7582: "5a7bddf9c1eb5a9a",
        7850: "94e4bfb58889f94d",
        8107: "dc11948cd3c62c21",
        8272: "5c8dde2cc231c655",
        8277: "d2c33a3e40c96f2a",
        8391: "eddd306072dcf1bd",
        8606: "29a408598e140c1d",
        8979: "807776b86185f065",
        9010: "dc65e915b4259b9e",
        9051: "8a0fa558dafb80f2",
        9461: "53eb6f13e4d627fa",
        9499: "04c5e8eb5ff56263",
        9694: "dc8613b69c3922a6",
        9819: "18191ca8de02363a",
        9871: "868273d435c3b5e2",
        9978: "5312f71461aa47b2"
    })[e] + ".js", r.miniCssF = e => "static/css/" + ({
        7585: "262b1eb9b5ca33fe",
        8683: "6a04dfe25c3e2299"
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
        r.l = (a, d, c, o) => {
            if (e[a]) return void e[a].push(d);
            if (void 0 !== c)
                for (var n, f, i = document.getElementsByTagName("script"), l = 0; l < i.length; l++) {
                    var s = i[l];
                    if (s.getAttribute("src") == a || s.getAttribute("data-webpack") == t + c) {
                        n = s;
                        break
                    }
                }
            n || (f = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, r.nc && n.setAttribute("nonce", r.nc), n.setAttribute("data-webpack", t + c), n.src = r.tu(a)), e[a] = [d];
            var b = (t, r) => {
                    n.onerror = n.onload = null, clearTimeout(u);
                    var d = e[a];
                    if (delete e[a], n.parentNode && n.parentNode.removeChild(n), d && d.forEach(e => e(r)), t) return t(r)
                },
                u = setTimeout(b.bind(null, void 0, {
                    type: "timeout",
                    target: n
                }), 12e4);
            n.onerror = b.bind(null, n.onerror), n.onload = b.bind(null, n.onload), f && document.head.appendChild(n)
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
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "https://assets.gammahosted.com/r6rvcmqnf/_next/", (() => {
        var e = (e, t, r, a) => {
                var d = document.createElement("link");
                return d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = c => {
                    if (d.onerror = d.onload = null, "load" === c.type) r();
                    else {
                        var o = c && ("load" === c.type ? "missing" : c.type),
                            n = c && c.target && c.target.href || t,
                            f = Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                        f.code = "CSS_CHUNK_LOAD_FAILED", f.type = o, f.request = n, d.parentNode.removeChild(d), a(f)
                    }
                }, d.href = t, ! function(e) {
                    if ("function" == typeof _N_E_STYLE_LOAD) {
                        let {
                            href: t,
                            onload: r,
                            onerror: a
                        } = e;
                        _N_E_STYLE_LOAD(0 === t.indexOf(window.location.origin) ? new URL(t).pathname : t).then(() => null == r ? void 0 : r.call(e, {
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
                for (var o = document.getElementsByTagName("style"), a = 0; a < o.length; a++) {
                    var d = o[a],
                        c = d.getAttribute("data-href");
                    if (c === e || c === t) return d
                }
            },
            a = a => new Promise((d, c) => {
                var o = r.miniCssF(a),
                    n = r.p + o;
                if (t(o, n)) return d();
                e(a, n, d, c)
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
            if (0 !== d)
                if (d) a.push(d[2]);
                else if (/^(7585|8068|8683)$/.test(t)) e[t] = 0;
            else {
                var c = new Promise((r, a) => d = e[t] = [r, a]);
                a.push(d[2] = c);
                var o = r.p + r.u(t),
                    n = Error();
                r.l(o, a => {
                    if (r.o(e, t) && (0 !== (d = e[t]) && (e[t] = void 0), d)) {
                        var c = a && ("load" === a.type ? "missing" : a.type),
                            o = a && a.target && a.target.src;
                        n.message = "Loading chunk " + t + " failed.\n(" + c + ": " + o + ")", n.name = "ChunkLoadError", n.type = c, n.request = o, d[1](n)
                    }
                }, "chunk-" + t, t)
            }
        }, r.O.j = t => 0 === e[t];
        var t = (t, a) => {
                var d, c, [o, n, f] = a,
                    i = 0;
                if (o.some(t => 0 !== e[t])) {
                    for (d in n) r.o(n, d) && (r.m[d] = n[d]);
                    if (f) var l = f(r)
                }
                for (t && t(a); i < o.length; i++) c = o[i], r.o(e, c) && e[c] && e[c][0](), e[c] = 0;
                return r.O(l)
            },
            a = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    })(), r.nc = void 0
})();
//# sourceMappingURL=webpack-a1161f64f4054447.js.map