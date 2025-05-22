"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6935], {
        12504: (t, e, n) => {
            let r, o, i;
            n.r(e), n.d(e, {
                applyDevTools: () => o0,
                removeDevTools: () => o2
            });
            var l = n(94289),
                s = n(87910),
                a = n(63305);

            function c() {}

            function f(t, e) {
                for (let n in e) t[n] = e[n];
                return t
            }

            function u(t) {
                return t()
            }

            function d() {
                return Object.create(null)
            }

            function p(t) {
                t.forEach(u)
            }

            function h(t) {
                return "function" == typeof t
            }

            function v(t, e) {
                return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
            }

            function g(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                if (null == t) {
                    for (let t of n) t(void 0);
                    return c
                }
                let o = t.subscribe(...n);
                return o.unsubscribe ? () => o.unsubscribe() : o
            }

            function m(t) {
                let e;
                return g(t, t => e = t)(), e
            }

            function y(t, e, n) {
                t.$$.on_destroy.push(g(e, n))
            }

            function b(t, e, n, r) {
                if (t) {
                    let o = $(t, e, n, r);
                    return t[0](o)
                }
            }

            function $(t, e, n, r) {
                return t[1] && r ? f(n.ctx.slice(), t[1](r(e))) : n.ctx
            }

            function x(t, e, n, r) {
                if (t[2] && r) {
                    let o = t[2](r(n));
                    if (void 0 === e.dirty) return o;
                    if ("object" == typeof o) {
                        let t = [],
                            n = Math.max(e.dirty.length, o.length);
                        for (let r = 0; r < n; r += 1) t[r] = e.dirty[r] | o[r];
                        return t
                    }
                    return e.dirty | o
                }
                return e.dirty
            }

            function w(t, e, n, r, o, i) {
                if (o) {
                    let l = $(e, n, r, i);
                    t.p(l, o)
                }
            }

            function k(t) {
                if (t.ctx.length > 32) {
                    let e = [],
                        n = t.ctx.length / 32;
                    for (let t = 0; t < n; t++) e[t] = -1;
                    return e
                }
                return -1
            }

            function _(t) {
                let e = {};
                for (let n in t) "$" !== n[0] && (e[n] = t[n]);
                return e
            }

            function j(t) {
                return null == t ? "" : t
            }

            function C(t, e) {
                t.appendChild(e)
            }

            function O(t, e, n) {
                let r = function(t) {
                    if (!t) return document;
                    let e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
                    return e && e.host ? e : t.ownerDocument
                }(t);
                if (!r.getElementById(e)) {
                    var o, i;
                    let t = S("style");
                    t.id = e, t.textContent = n, o = r, i = t, C(o.head || o, i), i.sheet
                }
            }

            function E(t, e, n) {
                t.insertBefore(e, n || null)
            }

            function q(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }

            function D(t, e) {
                for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
            }

            function S(t) {
                return document.createElement(t)
            }

            function M(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }

            function N(t) {
                return document.createTextNode(t)
            }

            function A() {
                return N(" ")
            }

            function R() {
                return N("")
            }

            function T(t, e, n, r) {
                return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
            }

            function P(t, e, n) {
                null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
            }

            function z(t, e, n) {
                t.setAttributeNS("http://www.w3.org/1999/xlink", e, n)
            }

            function I(t, e) {
                e = "" + e, t.data !== e && (t.data = e)
            }

            function B(t, e) {
                t.value = null == e ? "" : e
            }

            function F(t, e, n) {
                t.classList.toggle(e, !!n)
            }
            "function" == typeof SuppressedError && SuppressedError;

            function L() {
                if (!r) throw Error("Function called outside component initialization");
                return r
            }

            function V(t) {
                L().$$.on_mount.push(t)
            }

            function H() {
                let t = L();
                return function(e, n) {
                    let {
                        cancelable: r = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.$$.callbacks[e];
                    if (o) {
                        let i = function(t, e) {
                            let {
                                bubbles: n = !1,
                                cancelable: r = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return new CustomEvent(t, {
                                detail: e,
                                bubbles: n,
                                cancelable: r
                            })
                        }(e, n, {
                            cancelable: r
                        });
                        return o.slice().forEach(e => {
                            e.call(t, i)
                        }), !i.defaultPrevented
                    }
                    return !0
                }
            }

            function U(t, e) {
                return L().$$.context.set(t, e), e
            }

            function J(t) {
                return L().$$.context.get(t)
            }

            function G(t, e) {
                let n = t.$$.callbacks[e.type];
                n && n.slice().forEach(t => t.call(this, e))
            }
            let K = [],
                W = [],
                Y = [],
                Q = [],
                Z = Promise.resolve(),
                X = !1;

            function tt(t) {
                Y.push(t)
            }
            let te = new Set,
                tn = 0;

            function tr() {
                if (0 !== tn) return;
                let t = r;
                do {
                    try {
                        for (; tn < K.length;) {
                            let t = K[tn];
                            tn++, r = t,
                                function(t) {
                                    if (null !== t.fragment) {
                                        t.update(), p(t.before_update);
                                        let e = t.dirty;
                                        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(tt)
                                    }
                                }(t.$$)
                        }
                    } catch (t) {
                        throw K.length = 0, tn = 0, t
                    }
                    for (r = null, K.length = 0, tn = 0; W.length;) W.pop()();
                    for (let t = 0; t < Y.length; t += 1) {
                        let e = Y[t];
                        te.has(e) || (te.add(e), e())
                    }
                    Y.length = 0
                } while (K.length);
                for (; Q.length;) Q.pop()();
                X = !1, te.clear(), r = t
            }
            let to = new Set;

            function ti() {
                o = {
                    r: 0,
                    c: [],
                    p: o
                }
            }

            function tl() {
                o.r || p(o.c), o = o.p
            }

            function ts(t, e) {
                t && t.i && (to.delete(t), t.i(e))
            }

            function ta(t, e, n, r) {
                t && t.o ? to.has(t) || (to.add(t), o.c.push(() => {
                    to.delete(t), r && (n && t.d(1), r())
                }), t.o(e)) : r && r()
            }

            function tc(t) {
                return (null == t ? void 0 : t.length) !== void 0 ? t : Array.from(t)
            }

            function tf(t, e) {
                t.d(1), e.delete(t.key)
            }

            function tu(t, e, n, r, o, i, l, s, a, c, f, u) {
                let d = t.length,
                    h = i.length,
                    v = d,
                    g = {};
                for (; v--;) g[t[v].key] = v;
                let m = [],
                    y = new Map,
                    b = new Map,
                    $ = [];
                for (v = h; v--;) {
                    let t = u(o, i, v),
                        r = n(t),
                        s = l.get(r);
                    s ? $.push(() => s.p(t, e)) : (s = c(r, t)).c(), y.set(r, m[v] = s), r in g && b.set(r, Math.abs(v - g[r]))
                }
                let x = new Set,
                    w = new Set;

                function k(t) {
                    ts(t, 1), t.m(s, f), l.set(t.key, t), f = t.first, h--
                }
                for (; d && h;) {
                    let e = m[h - 1],
                        n = t[d - 1],
                        r = e.key,
                        o = n.key;
                    e === n ? (f = e.first, d--, h--) : y.has(o) ? !l.has(r) || x.has(r) ? k(e) : w.has(o) ? d-- : b.get(r) > b.get(o) ? (w.add(r), k(e)) : (x.add(o), d--) : (a(n, l), d--)
                }
                for (; d--;) {
                    let e = t[d];
                    y.has(e.key) || a(e, l)
                }
                for (; h;) k(m[h - 1]);
                return p($), m
            }

            function td(t) {
                t && t.c()
            }

            function tp(t, e, n) {
                let {
                    fragment: r,
                    after_update: o
                } = t.$$;
                r && r.m(e, n), tt(() => {
                    let e = t.$$.on_mount.map(u).filter(h);
                    t.$$.on_destroy ? t.$$.on_destroy.push(...e) : p(e), t.$$.on_mount = []
                }), o.forEach(tt)
            }

            function th(t, e) {
                let n = t.$$;
                if (null !== n.fragment) {
                    var r = n.after_update;
                    let t = [],
                        o = [];
                    Y.forEach(e => -1 === r.indexOf(e) ? t.push(e) : o.push(e)), o.forEach(t => t()), Y = t, p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []
                }
            }

            function tv(t, e, n, o, i, l) {
                let s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [-1],
                    f = r;
                r = t;
                let u = t.$$ = {
                    fragment: null,
                    ctx: [],
                    props: l,
                    update: c,
                    not_equal: i,
                    bound: d(),
                    on_mount: [],
                    on_destroy: [],
                    on_disconnect: [],
                    before_update: [],
                    after_update: [],
                    context: new Map(e.context || (f ? f.$$.context : [])),
                    callbacks: d(),
                    dirty: a,
                    skip_bound: !1,
                    root: e.target || f.$$.root
                };
                s && s(u.root);
                let h = !1;
                if (u.ctx = n ? n(t, e.props || {}, function(e, n) {
                        let r = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? void 0 : arguments[2] : n;
                        u.ctx && i(u.ctx[e], u.ctx[e] = r) && (!u.skip_bound && u.bound[e] && u.bound[e](r), h && (-1 === t.$$.dirty[0] && (K.push(t), X || (X = !0, Z.then(tr)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31));
                        return n
                    }) : [], u.update(), h = !0, p(u.before_update), u.fragment = !!o && o(u.ctx), e.target) {
                    if (e.hydrate) {
                        let t = Array.from(e.target.childNodes);
                        u.fragment && u.fragment.l(t), t.forEach(q)
                    } else u.fragment && u.fragment.c();
                    e.intro && ts(t.$$.fragment), tp(t, e.target, e.anchor), tr()
                }
                r = f
            }
            class tg {
                constructor() {
                    this.$$ = void 0, this.$$set = void 0
                }
                $destroy() {
                    th(this, 1), this.$destroy = c
                }
                $on(t, e) {
                    if (!h(e)) return c;
                    let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                    return n.push(e), () => {
                        let t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                    }
                }
                $set(t) {
                    this.$$set && 0 !== Object.keys(t).length && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
                }
            }
            "undefined" != typeof window && (window.__svelte || (window.__svelte = {
                v: new Set
            })).v.add("4");
            let tm = (t, e) => U(t, e),
                ty = t => J(t);

            function tb(t) {
                O(t, "svelte-1lt2k10", ".floating-btn.svelte-1lt2k10.svelte-1lt2k10{background:#363755;border:0;border-radius:50%;box-shadow:0 0 30px rgba(34, 34, 34, 0.3);cursor:pointer;position:fixed;padding:6px;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;z-index:99999}.floating-btn.bottom-right.svelte-1lt2k10.svelte-1lt2k10{bottom:16px;right:16px}.floating-btn.bottom-left.svelte-1lt2k10.svelte-1lt2k10{bottom:16px;left:16px}.floating-btn.top-right.svelte-1lt2k10.svelte-1lt2k10{top:16px;right:16px}.floating-btn.top-left.svelte-1lt2k10.svelte-1lt2k10{top:16px;left:16px}.floating-btn.svelte-1lt2k10.svelte-1lt2k10:hover{opacity:0.7}.floating-btn.svelte-1lt2k10>svg.svelte-1lt2k10{display:block;width:34px;height:34px;position:relative}")
            }

            function t$(t) {
                let e, n, r, o, i, l, s, a, f, u, d, p, h, v, g, m, y, b, $, x, w, k, _, O;
                return {
                    c() {
                        e = S("button"), n = M("svg"), r = M("title"), o = N("prosemirror"), i = M("desc"), l = N("Created using Figma"), s = M("use"), a = M("use"), f = M("use"), u = M("use"), d = M("use"), p = M("use"), h = M("use"), v = M("defs"), g = M("path"), m = M("path"), y = M("path"), b = M("path"), $ = M("path"), x = M("path"), w = M("path"), z(s, "xlink:href", "#a"), P(s, "transform", "matrix(2 0 0 2 118 116)"), P(s, "fill", "#FFF"), z(a, "xlink:href", "#b"), P(a, "transform", "rotate(16 59.054 420.192) scale(2)"), P(a, "fill", "#FFF"), z(f, "xlink:href", "#c"), P(f, "transform", "matrix(2 0 0 2 154.024 141.58)"), P(f, "fill", "#363755"), z(u, "xlink:href", "#d"), P(u, "transform", "matrix(2 0 0 2 220 334.8)"), P(u, "fill", "#FFF"), z(d, "xlink:href", "#e"), P(d, "transform", "matrix(2 0 0 2 218.826 262.052)"), P(d, "fill", "#363755"), z(p, "xlink:href", "#f"), P(p, "transform", "matrix(2 0 0 2 197.108 184.998)"), P(p, "fill", "#FFF"), z(h, "xlink:href", "#g"), P(h, "transform", "matrix(2 0 0 2 221.8 216)"), P(h, "fill", "#363755"), P(g, "id", "a"), P(g, "d", "M73.5 0C32.859 0 0 32.859 0 73.5S32.859 147 73.5 147 147 114.141 147 73.5 114.069 0 73.5\n        0z"), P(m, "id", "b"), P(m, "d", "M193.601 107.116c0-13.376 8.238-23.91\n        20.619-31.153-2.244-7.447-5.19-14.6-8.824-21.32-13.886\n        3.633-25.12-1.799-34.568-11.26-9.449-9.437-12.344-20.672-8.709-34.571A111.362 111.362 0 0 0\n        140.799 0c-7.243 12.37-20.339 20.594-33.689 20.594-13.363\n        0-26.446-8.225-33.701-20.594A110.888 110.888 0 0 0 52.1 8.812c3.634 13.9.753 25.134-8.721\n        34.57-9.436 9.462-20.67 14.894-34.569 11.26A112.178 112.178 0 0 0 0 75.963c12.369 7.243\n        20.593 17.777 20.593 31.153 0 13.352-8.224 26.448-20.593 33.704a113.338 113.338 0 0 0 8.811\n        21.321c13.899-3.634 25.133-.752 34.569 8.697 9.448 9.462 12.355 20.696 8.721 34.57a112.653\n        112.653 0 0 0 21.32 8.837c7.243-12.407 20.338-20.619 33.702-20.619 13.35 0 26.446 8.225\n        33.701 20.619a114.22 114.22 0 0 0 21.32-8.837c-3.634-13.874-.752-25.108 8.709-34.57\n        9.449-9.437 20.683-14.869 34.569-11.26a112.343 112.343 0 0 0\n        8.823-21.321c-12.406-7.256-20.644-17.789-20.644-31.141zm-86.491 46.57c-25.732\n        0-46.58-20.849-46.58-46.57 0-25.733 20.86-46.595 46.58-46.595 25.732 0 46.567 20.875 46.567\n        46.595 0 25.734-20.835 46.57-46.567 46.57z"), P(y, "id", "c"), P(y, "d", "M98.088 49.91c-6.9 83.9 10.8 103.401 10.8 103.401s-55.1\n        5.499-82.7-13.401c-30.5-20.9-26-67.5-25.9-94.6.1-28.4 25.6-45.8 49.9-45.3 29.1.5 50.2 21.6\n        47.9 49.9z"), P(b, "id", "d"), P(b, "d", "M.1.1c12.2 33.3 22.5 42.7 40 55.2 25.3 18 36.6 17.5 76.3 41C78.1 60.3 30.8 45.7 0 0l.1.1z"), P($, "id", "e"), P($, "d", "M.687 36.474c3 13.3 17.9 29.9 30.4 41.6 24.8 23.2 42 22.4 86\n        54.7-18.2-51.8-18.8-62-43.5-106.1-24.7-44-67.6-20.3-67.6-20.3s-8.4 16.6-5.3 29.9v.2z"), P(x, "id", "f"), P(x, "d", "M38.346 11.5s-4-11.6-18-11.5c-30 .2-28.8 52.1 16.9 52 39.6-.1 39.2-49.4\n        16.1-49.6-10.2-.2-15 9.1-15 9.1z"), P(w, "id", "g"), P(w, "d", "M26.5 15c10.8 0 2 14.9-.6 20.9-1.8-8.4-10.2-20.9.6-20.9zM10.2.1C4.6.1 0 4.6 0 10.3c0 5.6\n        4.5 10.2 10.2 10.2 5.6 0 10.2-4.5 10.2-10.2C20.4 4.7 15.9.1 10.2.1zM40.7 0c-4.8 0-8.8\n        4.5-8.8 10.2 0 5.6 3.9 10.2 8.8 10.2 4.8 0 8.8-4.5 8.8-10.2C49.5 4.6 45.6 0 40.7 0z"), P(n, "width", "530"), P(n, "height", "530"), P(n, "viewBox", "0 0 530 530"), P(n, "xmlns", "http://www.w3.org/2000/svg"), P(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), P(n, "class", "svelte-1lt2k10"), P(e, "class", k = j("floating-btn ".concat(t[0])) + " svelte-1lt2k10")
                    },
                    m(c, k) {
                        E(c, e, k), C(e, n), C(n, r), C(r, o), C(n, i), C(i, l), C(n, s), C(n, a), C(n, f), C(n, u), C(n, d), C(n, p), C(n, h), C(n, v), C(v, g), C(v, m), C(v, y), C(v, b), C(v, $), C(v, x), C(v, w), _ || (O = T(e, "click", t[1]), _ = !0)
                    },
                    p(t, n) {
                        let [r] = n;
                        1 & r && k !== (k = j("floating-btn ".concat(t[0])) + " svelte-1lt2k10") && P(e, "class", k)
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e), _ = !1, O()
                    }
                }
            }

            function tx(t, e, n) {
                let {
                    buttonPosition: r
                } = e;
                return t.$$set = t => {
                    "buttonPosition" in t && n(0, r = t.buttonPosition)
                }, [r, function(e) {
                    G.call(this, t, e)
                }]
            }
            class tw extends tg {
                constructor(t) {
                    super(), tv(this, t, tx, t$, v, {
                        buttonPosition: 0
                    }, tb)
                }
            }
            let tk = [];

            function t_(t) {
                let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                    r = new Set;

                function o(n) {
                    if (v(t, n) && (t = n, e)) {
                        let e = !tk.length;
                        for (let e of r) e[1](), tk.push(e, t);
                        if (e) {
                            for (let t = 0; t < tk.length; t += 2) tk[t][0](tk[t + 1]);
                            tk.length = 0
                        }
                    }
                }

                function i(e) {
                    o(e(t))
                }
                return {
                    set: o,
                    update: i,
                    subscribe: function(l) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                            a = [l, s];
                        return r.add(a), 1 === r.size && (e = n(o, i) || c), l(t), () => {
                            r.delete(a), 0 === r.size && e && (e(), e = null)
                        }
                    }
                }
            }
            let tj = "__prosemirror-dev-toolkit__snapshots",
                tC = t_([]),
                tO = t_(),
                tE = t_(),
                tq = !0;

            function tD(t, e) {
                let n = t.state.schema.nodeFromJSON(e),
                    r = t.state.tr;
                r.replaceWith(0, t.state.doc.nodeSize - 2, n.content), t.dispatch(r)
            }

            function tS(t, e) {
                let n = {
                    name: t,
                    timestamp: Date.now(),
                    doc: e
                };
                return tC.update(t => [n, ...t]), n
            }

            function tM(t) {
                tC.update(e => e.map(e => e.timestamp === t.timestamp ? t : e))
            }

            function tN(t, e) {
                tD(t, e.doc), tE.set(void 0), tO.set(void 0)
            }

            function tA(t) {
                let e = document.createElement("a"),
                    n = new Blob([JSON.stringify(t.doc)], {
                        type: "application/json"
                    });
                e.href = URL.createObjectURL(n), e.download = `${t.name}.json`, e.click()
            }

            function tR(t) {
                tC.update(e => e.filter(e => e.timestamp !== t.timestamp));
                let e = m(tO);
                (null == e ? void 0 : e.timestamp) === t.timestamp && tO.set(void 0)
            }

            function tT(t, e) {
                let n = n => {
                    !t || n.composedPath().includes(t) || n.defaultPrevented || e()
                };
                return document.addEventListener("click", n, !0), {
                    destroy() {
                        document.removeEventListener("click", n, !0)
                    }
                }
            }

            function tP(t) {
                O(t, "svelte-19h7j7n", ".paste-modal.svelte-19h7j7n.svelte-19h7j7n{font-size:15px;height:100%;left:0;position:fixed;top:0;width:100%;z-index:1000}.paste-modal.svelte-19h7j7n>form.svelte-19h7j7n{display:flex;height:100%;justify-content:center;padding:64px}.modal-bg.svelte-19h7j7n.svelte-19h7j7n{background:#000;height:100%;left:0;opacity:0.8;position:absolute;top:0;width:100%;z-index:-1}fieldset.svelte-19h7j7n.svelte-19h7j7n{border-color:transparent;width:100%;max-width:800px}.submit-container.svelte-19h7j7n.svelte-19h7j7n{position:relative;width:100%}button.svelte-19h7j7n.svelte-19h7j7n{cursor:pointer;padding:4px 8px;position:absolute;right:-6px;top:-32px}legend.svelte-19h7j7n.svelte-19h7j7n{color:white}textarea.svelte-19h7j7n.svelte-19h7j7n{background:#fefcfc;height:calc(100vh - 128px);width:100%}")
            }

            function tz(t) {
                let e, n, r, o, i, l, s, a, f, u, d, v;
                return {
                    c() {
                        e = S("div"), n = S("div"), r = A(), o = S("form"), i = S("fieldset"), (l = S("div")).innerHTML = '<button class="svelte-19h7j7n">Submit</button>', s = A(), (a = S("legend")).textContent = "Doc", f = A(), u = S("textarea"), P(n, "class", "modal-bg svelte-19h7j7n"), P(l, "class", "submit-container svelte-19h7j7n"), P(a, "class", "svelte-19h7j7n"), P(u, "class", "svelte-19h7j7n"), P(i, "class", "svelte-19h7j7n"), P(o, "class", "paste-content svelte-19h7j7n"), P(e, "class", "paste-modal svelte-19h7j7n"), F(e, "hidden", !t[0])
                    },
                    m(p, g) {
                        if (E(p, e, g), C(e, n), C(e, r), C(e, o), C(o, i), C(i, l), C(i, s), C(i, a), C(i, f), C(i, u), B(u, t[1]), !d) {
                            var m, y;
                            v = [T(u, "input", t[4]), (m = tT.call(null, i, t[2])) && h(m.destroy) ? m.destroy : c, T(o, "submit", (y = t[3], function(t) {
                                return t.preventDefault(), y.call(this, t)
                            }))], d = !0
                        }
                    },
                    p(t, n) {
                        let [r] = n;
                        2 & r && B(u, t[1]), 1 & r && F(e, "hidden", !t[0])
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e), d = !1, p(v)
                    }
                }
            }

            function tI(t, e, n) {
                let r, {
                        isOpen: o
                    } = e,
                    i = H();
                return t.$$set = t => {
                    "isOpen" in t && n(0, o = t.isOpen)
                }, [o, r, function() {
                    i("close")
                }, function() {
                    try {
                        i("submit", {
                            doc: JSON.parse(r)
                        })
                    } catch (t) {}
                }, function() {
                    n(1, r = this.value)
                }]
            }! function() {
                let t = null;
                try {
                    t = localStorage.getItem(tj)
                } catch (t) {
                    tq = !1
                }
                if (t && t.length > 0) try {
                    let e = JSON.parse(t);
                    tC.set(e)
                } catch (t) {
                    console.error("Corrupted snapshots values in localStorage", t)
                }
            }(), tC.subscribe(t => {
                tq && localStorage.setItem(tj, JSON.stringify(t))
            });
            class tB extends tg {
                constructor(t) {
                    super(), tv(this, t, tI, tz, v, {
                        isOpen: 0
                    }, tP)
                }
            }

            function tF(t) {
                O(t, "svelte-10notzq", "ul.svelte-10notzq{display:flex;list-style:none;margin:0;overflow-x:scroll;padding:0}button.svelte-10notzq{background:transparent;border:0;border-bottom:2px solid transparent;color:#fff;cursor:pointer;height:100%;font-size:var(--font-medium);font-weight:400;padding:1em}button.svelte-10notzq:hover{background:rgba(255, 255, 255, 0.05)}button.active.svelte-10notzq{border-bottom:2px solid rgb(255, 162, 177)}")
            }

            function tL(t) {
                let e, n, r, o, i, l, s, a, f, u, d, h, v, g, m, y, b, $, x, w;
                return {
                    c() {
                        e = S("ul"), n = S("li"), (r = S("button")).textContent = "STATE", o = A(), i = S("li"), (l = S("button")).textContent = "HISTORY", s = A(), a = S("li"), (f = S("button")).textContent = "PLUGINS", u = A(), d = S("li"), (h = S("button")).textContent = "SCHEMA", v = A(), g = S("li"), (m = S("button")).textContent = "STRUCTURE", y = A(), b = S("li"), ($ = S("button")).textContent = "SNAPSHOTS", P(r, "class", "svelte-10notzq"), F(r, "active", "state" === t[0]), P(l, "class", "svelte-10notzq"), F(l, "active", "history" === t[0]), P(f, "class", "svelte-10notzq"), F(f, "active", "plugins" === t[0]), P(h, "class", "svelte-10notzq"), F(h, "active", "schema" === t[0]), P(m, "class", "svelte-10notzq"), F(m, "active", "structure" === t[0]), P($, "class", "svelte-10notzq"), F($, "active", "snapshots" === t[0]), P(e, "class", "tabs-menu svelte-10notzq")
                    },
                    m(c, p) {
                        E(c, e, p), C(e, n), C(n, r), C(e, o), C(e, i), C(i, l), C(e, s), C(e, a), C(a, f), C(e, u), C(e, d), C(d, h), C(e, v), C(e, g), C(g, m), C(e, y), C(e, b), C(b, $), x || (w = [T(r, "click", t[2]), T(l, "click", t[3]), T(f, "click", t[4]), T(h, "click", t[5]), T(m, "click", t[6]), T($, "click", t[7])], x = !0)
                    },
                    p(t, e) {
                        let [n] = e;
                        1 & n && F(r, "active", "state" === t[0]), 1 & n && F(l, "active", "history" === t[0]), 1 & n && F(f, "active", "plugins" === t[0]), 1 & n && F(h, "active", "schema" === t[0]), 1 & n && F(m, "active", "structure" === t[0]), 1 & n && F($, "active", "snapshots" === t[0])
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e), x = !1, p(w)
                    }
                }
            }

            function tV(t, e, n) {
                let {
                    active: r,
                    onClickTab: o
                } = e;
                return t.$$set = t => {
                    "active" in t && n(0, r = t.active), "onClickTab" in t && n(1, o = t.onClickTab)
                }, [r, o, () => o("state"), () => o("history"), () => o("plugins"), () => o("schema"), () => o("structure"), () => o("snapshots")]
            }
            class tH extends tg {
                constructor(t) {
                    super(), tv(this, t, tV, tL, v, {
                        active: 0,
                        onClickTab: 1
                    }, tF)
                }
            }
            var tU = {
                exports: {}
            };
            ! function(t) {
                var e = function() {
                    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
                };
                e.Diff = function(t, e) {
                    return [t, e]
                }, e.prototype.diff_main = function(t, n, r, o) {
                    void 0 === o && (o = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : new Date().getTime() + 1e3 * this.Diff_Timeout);
                    var i = o;
                    if (null == t || null == n) throw Error("Null input. (diff_main)");
                    if (t == n) return t ? [new e.Diff(0, t)] : [];
                    void 0 === r && (r = !0);
                    var l = r,
                        s = this.diff_commonPrefix(t, n),
                        a = t.substring(0, s);
                    t = t.substring(s), n = n.substring(s), s = this.diff_commonSuffix(t, n);
                    var c = t.substring(t.length - s);
                    t = t.substring(0, t.length - s), n = n.substring(0, n.length - s);
                    var f = this.diff_compute_(t, n, l, i);
                    return a && f.unshift(new e.Diff(0, a)), c && f.push(new e.Diff(0, c)), this.diff_cleanupMerge(f), f
                }, e.prototype.diff_compute_ = function(t, n, r, o) {
                    if (!t) return [new e.Diff(1, n)];
                    if (!n) return [new e.Diff(-1, t)];
                    var i, l = t.length > n.length ? t : n,
                        s = t.length > n.length ? n : t,
                        a = l.indexOf(s);
                    if (-1 != a) return i = [new e.Diff(1, l.substring(0, a)), new e.Diff(0, s), new e.Diff(1, l.substring(a + s.length))], t.length > n.length && (i[0][0] = i[2][0] = -1), i;
                    if (1 == s.length) return [new e.Diff(-1, t), new e.Diff(1, n)];
                    var c = this.diff_halfMatch_(t, n);
                    if (c) {
                        var f = c[0],
                            u = c[1],
                            d = c[2],
                            p = c[3],
                            h = c[4],
                            v = this.diff_main(f, d, r, o),
                            g = this.diff_main(u, p, r, o);
                        return v.concat([new e.Diff(0, h)], g)
                    }
                    return r && t.length > 100 && n.length > 100 ? this.diff_lineMode_(t, n, o) : this.diff_bisect_(t, n, o)
                }, e.prototype.diff_lineMode_ = function(t, n, r) {
                    var o = this.diff_linesToChars_(t, n);
                    t = o.chars1, n = o.chars2;
                    var i = o.lineArray,
                        l = this.diff_main(t, n, !1, r);
                    this.diff_charsToLines_(l, i), this.diff_cleanupSemantic(l), l.push(new e.Diff(0, ""));
                    for (var s = 0, a = 0, c = 0, f = "", u = ""; s < l.length;) {
                        switch (l[s][0]) {
                            case 1:
                                c++, u += l[s][1];
                                break;
                            case -1:
                                a++, f += l[s][1];
                                break;
                            case 0:
                                if (a >= 1 && c >= 1) {
                                    l.splice(s - a - c, a + c), s = s - a - c;
                                    for (var d = this.diff_main(f, u, !1, r), p = d.length - 1; p >= 0; p--) l.splice(s, 0, d[p]);
                                    s += d.length
                                }
                                c = 0, a = 0, f = "", u = ""
                        }
                        s++
                    }
                    return l.pop(), l
                }, e.prototype.diff_bisect_ = function(t, n, r) {
                    for (var o = t.length, i = n.length, l = Math.ceil((o + i) / 2), s = 2 * l, a = Array(s), c = Array(s), f = 0; f < s; f++) a[f] = -1, c[f] = -1;
                    a[l + 1] = 0, c[l + 1] = 0;
                    for (var u = o - i, d = u % 2 != 0, p = 0, h = 0, v = 0, g = 0, m = 0; m < l && !(new Date().getTime() > r); m++) {
                        for (var y = -m + p; y <= m - h; y += 2) {
                            for (var b, $ = l + y, x = (b = y == -m || y != m && a[$ - 1] < a[$ + 1] ? a[$ + 1] : a[$ - 1] + 1) - y; b < o && x < i && t.charAt(b) == n.charAt(x);) b++, x++;
                            if (a[$] = b, b > o) h += 2;
                            else if (x > i) p += 2;
                            else if (d) {
                                var w = l + u - y;
                                if (w >= 0 && w < s && -1 != c[w]) {
                                    var k = o - c[w];
                                    if (b >= k) return this.diff_bisectSplit_(t, n, b, x, r)
                                }
                            }
                        }
                        for (var _ = -m + v; _ <= m - g; _ += 2) {
                            for (var k, w = l + _, j = (k = _ == -m || _ != m && c[w - 1] < c[w + 1] ? c[w + 1] : c[w - 1] + 1) - _; k < o && j < i && t.charAt(o - k - 1) == n.charAt(i - j - 1);) k++, j++;
                            if (c[w] = k, k > o) g += 2;
                            else if (j > i) v += 2;
                            else if (!d) {
                                var $ = l + u - _;
                                if ($ >= 0 && $ < s && -1 != a[$]) {
                                    var b = a[$],
                                        x = l + b - $;
                                    if (b >= (k = o - k)) return this.diff_bisectSplit_(t, n, b, x, r)
                                }
                            }
                        }
                    }
                    return [new e.Diff(-1, t), new e.Diff(1, n)]
                }, e.prototype.diff_bisectSplit_ = function(t, e, n, r, o) {
                    var i = t.substring(0, n),
                        l = e.substring(0, r),
                        s = t.substring(n),
                        a = e.substring(r),
                        c = this.diff_main(i, l, !1, o),
                        f = this.diff_main(s, a, !1, o);
                    return c.concat(f)
                }, e.prototype.diff_linesToChars_ = function(t, e) {
                    var n = [],
                        r = {};

                    function o(t) {
                        for (var e = "", o = 0, l = -1, s = n.length; l < t.length - 1;) {
                            -1 == (l = t.indexOf("\n", o)) && (l = t.length - 1);
                            var a = t.substring(o, l + 1);
                            (r.hasOwnProperty ? r.hasOwnProperty(a) : void 0 !== r[a]) ? e += String.fromCharCode(r[a]): (s == i && (a = t.substring(o), l = t.length), e += String.fromCharCode(s), r[a] = s, n[s++] = a), o = l + 1
                        }
                        return e
                    }
                    n[0] = "";
                    var i = 4e4,
                        l = o(t);
                    return i = 65535, {
                        chars1: l,
                        chars2: o(e),
                        lineArray: n
                    }
                }, e.prototype.diff_charsToLines_ = function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        for (var r = t[n][1], o = [], i = 0; i < r.length; i++) o[i] = e[r.charCodeAt(i)];
                        t[n][1] = o.join("")
                    }
                }, e.prototype.diff_commonPrefix = function(t, e) {
                    if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                    for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                    return o
                }, e.prototype.diff_commonSuffix = function(t, e) {
                    if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                    for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                    return o
                }, e.prototype.diff_commonOverlap_ = function(t, e) {
                    var n = t.length,
                        r = e.length;
                    if (0 == n || 0 == r) return 0;
                    n > r ? t = t.substring(n - r) : n < r && (e = e.substring(0, n));
                    var o = Math.min(n, r);
                    if (t == e) return o;
                    for (var i = 0, l = 1;;) {
                        var s = t.substring(o - l),
                            a = e.indexOf(s);
                        if (-1 == a) return i;
                        l += a, (0 == a || t.substring(o - l) == e.substring(0, l)) && (i = l, l++)
                    }
                }, e.prototype.diff_halfMatch_ = function(t, e) {
                    if (this.Diff_Timeout <= 0) return null;
                    var n, r, o, i, l, s = t.length > e.length ? t : e,
                        a = t.length > e.length ? e : t;
                    if (s.length < 4 || 2 * a.length < s.length) return null;
                    var c = this;

                    function f(t, e, n) {
                        for (var r, o, i, l, s = t.substring(n, n + Math.floor(t.length / 4)), a = -1, f = ""; - 1 != (a = e.indexOf(s, a + 1));) {
                            var u = c.diff_commonPrefix(t.substring(n), e.substring(a)),
                                d = c.diff_commonSuffix(t.substring(0, n), e.substring(0, a));
                            f.length < d + u && (f = e.substring(a - d, a) + e.substring(a, a + u), r = t.substring(0, n - d), o = t.substring(n + u), i = e.substring(0, a - d), l = e.substring(a + u))
                        }
                        return 2 * f.length >= t.length ? [r, o, i, l, f] : null
                    }
                    var u = f(s, a, Math.ceil(s.length / 4)),
                        d = f(s, a, Math.ceil(s.length / 2));
                    return u || d ? (n = d ? u && u[4].length > d[4].length ? u : d : u, t.length > e.length ? (r = n[0], o = n[1], i = n[2], l = n[3]) : (i = n[0], l = n[1], r = n[2], o = n[3]), [r, o, i, l, n[4]]) : null
                }, e.prototype.diff_cleanupSemantic = function(t) {
                    for (var n = !1, r = [], o = 0, i = null, l = 0, s = 0, a = 0, c = 0, f = 0; l < t.length;) 0 == t[l][0] ? (r[o++] = l, s = c, a = f, c = 0, f = 0, i = t[l][1]) : (1 == t[l][0] ? c += t[l][1].length : f += t[l][1].length, i && i.length <= Math.max(s, a) && i.length <= Math.max(c, f) && (t.splice(r[o - 1], 0, new e.Diff(-1, i)), t[r[o - 1] + 1][0] = 1, o--, l = --o > 0 ? r[o - 1] : -1, s = 0, a = 0, c = 0, f = 0, i = null, n = !0)), l++;
                    for (n && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), l = 1; l < t.length;) {
                        if (-1 == t[l - 1][0] && 1 == t[l][0]) {
                            var u = t[l - 1][1],
                                d = t[l][1],
                                p = this.diff_commonOverlap_(u, d),
                                h = this.diff_commonOverlap_(d, u);
                            p >= h ? (p >= u.length / 2 || p >= d.length / 2) && (t.splice(l, 0, new e.Diff(0, d.substring(0, p))), t[l - 1][1] = u.substring(0, u.length - p), t[l + 1][1] = d.substring(p), l++) : (h >= u.length / 2 || h >= d.length / 2) && (t.splice(l, 0, new e.Diff(0, u.substring(0, h))), t[l - 1][0] = 1, t[l - 1][1] = d.substring(0, d.length - h), t[l + 1][0] = -1, t[l + 1][1] = u.substring(h), l++), l++
                        }
                        l++
                    }
                }, e.prototype.diff_cleanupSemanticLossless = function(t) {
                    function n(t, n) {
                        if (!t || !n) return 6;
                        var r = t.charAt(t.length - 1),
                            o = n.charAt(0),
                            i = r.match(e.nonAlphaNumericRegex_),
                            l = o.match(e.nonAlphaNumericRegex_),
                            s = i && r.match(e.whitespaceRegex_),
                            a = l && o.match(e.whitespaceRegex_),
                            c = s && r.match(e.linebreakRegex_),
                            f = a && o.match(e.linebreakRegex_),
                            u = c && t.match(e.blanklineEndRegex_),
                            d = f && n.match(e.blanklineStartRegex_);
                        if (u || d) return 5;
                        if (c || f) return 4;
                        if (i && !s && a) return 3;
                        if (s || a) return 2;
                        if (i || l) return 1;
                        return 0
                    }
                    for (var r = 1; r < t.length - 1;) {
                        if (0 == t[r - 1][0] && 0 == t[r + 1][0]) {
                            var o = t[r - 1][1],
                                i = t[r][1],
                                l = t[r + 1][1],
                                s = this.diff_commonSuffix(o, i);
                            if (s) {
                                var a = i.substring(i.length - s);
                                o = o.substring(0, o.length - s), i = a + i.substring(0, i.length - s), l = a + l
                            }
                            for (var c = o, f = i, u = l, d = n(o, i) + n(i, l); i.charAt(0) === l.charAt(0);) {
                                o += i.charAt(0), i = i.substring(1) + l.charAt(0), l = l.substring(1);
                                var p = n(o, i) + n(i, l);
                                p >= d && (d = p, c = o, f = i, u = l)
                            }
                            t[r - 1][1] != c && (c ? t[r - 1][1] = c : (t.splice(r - 1, 1), r--), t[r][1] = f, u ? t[r + 1][1] = u : (t.splice(r + 1, 1), r--))
                        }
                        r++
                    }
                }, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.diff_cleanupEfficiency = function(t) {
                    for (var n = !1, r = [], o = 0, i = null, l = 0, s = !1, a = !1, c = !1, f = !1; l < t.length;) 0 == t[l][0] ? (t[l][1].length < this.Diff_EditCost && (c || f) ? (r[o++] = l, s = c, a = f, i = t[l][1]) : (o = 0, i = null), c = f = !1) : (-1 == t[l][0] ? f = !0 : c = !0, i && (s && a && c && f || i.length < this.Diff_EditCost / 2 && s + a + c + f == 3) && (t.splice(r[o - 1], 0, new e.Diff(-1, i)), t[r[o - 1] + 1][0] = 1, o--, i = null, s && a ? (c = f = !0, o = 0) : (l = --o > 0 ? r[o - 1] : -1, c = f = !1), n = !0)), l++;
                    n && this.diff_cleanupMerge(t)
                }, e.prototype.diff_cleanupMerge = function(t) {
                    t.push(new e.Diff(0, ""));
                    for (var n, r = 0, o = 0, i = 0, l = "", s = ""; r < t.length;) switch (t[r][0]) {
                        case 1:
                            i++, s += t[r][1], r++;
                            break;
                        case -1:
                            o++, l += t[r][1], r++;
                            break;
                        case 0:
                            o + i > 1 ? (0 !== o && 0 !== i && (0 !== (n = this.diff_commonPrefix(s, l)) && (r - o - i > 0 && 0 == t[r - o - i - 1][0] ? t[r - o - i - 1][1] += s.substring(0, n) : (t.splice(0, 0, new e.Diff(0, s.substring(0, n))), r++), s = s.substring(n), l = l.substring(n)), 0 !== (n = this.diff_commonSuffix(s, l)) && (t[r][1] = s.substring(s.length - n) + t[r][1], s = s.substring(0, s.length - n), l = l.substring(0, l.length - n))), r -= o + i, t.splice(r, o + i), l.length && (t.splice(r, 0, new e.Diff(-1, l)), r++), s.length && (t.splice(r, 0, new e.Diff(1, s)), r++), r++) : 0 !== r && 0 == t[r - 1][0] ? (t[r - 1][1] += t[r][1], t.splice(r, 1)) : r++, i = 0, o = 0, l = "", s = ""
                    }
                    "" === t[t.length - 1][1] && t.pop();
                    var a = !1;
                    for (r = 1; r < t.length - 1;) 0 == t[r - 1][0] && 0 == t[r + 1][0] && (t[r][1].substring(t[r][1].length - t[r - 1][1].length) == t[r - 1][1] ? (t[r][1] = t[r - 1][1] + t[r][1].substring(0, t[r][1].length - t[r - 1][1].length), t[r + 1][1] = t[r - 1][1] + t[r + 1][1], t.splice(r - 1, 1), a = !0) : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] && (t[r - 1][1] += t[r + 1][1], t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1], t.splice(r + 1, 1), a = !0)), r++;
                    a && this.diff_cleanupMerge(t)
                }, e.prototype.diff_xIndex = function(t, e) {
                    var n, r = 0,
                        o = 0,
                        i = 0,
                        l = 0;
                    for (n = 0; n < t.length && (1 !== t[n][0] && (r += t[n][1].length), -1 !== t[n][0] && (o += t[n][1].length), !(r > e)); n++) i = r, l = o;
                    return t.length != n && -1 === t[n][0] ? l : l + (e - i)
                }, e.prototype.diff_prettyHtml = function(t) {
                    for (var e = [], n = /&/g, r = /</g, o = />/g, i = /\n/g, l = 0; l < t.length; l++) {
                        var s = t[l][0],
                            a = t[l][1].replace(n, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(i, "&para;<br>");
                        switch (s) {
                            case 1:
                                e[l] = '<ins style="background:#e6ffe6;">' + a + "</ins>";
                                break;
                            case -1:
                                e[l] = '<del style="background:#ffe6e6;">' + a + "</del>";
                                break;
                            case 0:
                                e[l] = "<span>" + a + "</span>"
                        }
                    }
                    return e.join("")
                }, e.prototype.diff_text1 = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) 1 !== t[n][0] && (e[n] = t[n][1]);
                    return e.join("")
                }, e.prototype.diff_text2 = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) - 1 !== t[n][0] && (e[n] = t[n][1]);
                    return e.join("")
                }, e.prototype.diff_levenshtein = function(t) {
                    for (var e = 0, n = 0, r = 0, o = 0; o < t.length; o++) {
                        var i = t[o][0],
                            l = t[o][1];
                        switch (i) {
                            case 1:
                                n += l.length;
                                break;
                            case -1:
                                r += l.length;
                                break;
                            case 0:
                                e += Math.max(n, r), n = 0, r = 0
                        }
                    }
                    return e + Math.max(n, r)
                }, e.prototype.diff_toDelta = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) switch (t[n][0]) {
                        case 1:
                            e[n] = "+" + encodeURI(t[n][1]);
                            break;
                        case -1:
                            e[n] = "-" + t[n][1].length;
                            break;
                        case 0:
                            e[n] = "=" + t[n][1].length
                    }
                    return e.join("	").replace(/%20/g, " ")
                }, e.prototype.diff_fromDelta = function(t, n) {
                    for (var r = [], o = 0, i = 0, l = n.split(/\t/g), s = 0; s < l.length; s++) {
                        var a = l[s].substring(1);
                        switch (l[s].charAt(0)) {
                            case "+":
                                try {
                                    r[o++] = new e.Diff(1, decodeURI(a))
                                } catch (t) {
                                    throw Error("Illegal escape in diff_fromDelta: " + a)
                                }
                                break;
                            case "-":
                            case "=":
                                var c = parseInt(a, 10);
                                if (isNaN(c) || c < 0) throw Error("Invalid number in diff_fromDelta: " + a);
                                var f = t.substring(i, i += c);
                                "=" == l[s].charAt(0) ? r[o++] = new e.Diff(0, f) : r[o++] = new e.Diff(-1, f);
                                break;
                            default:
                                if (l[s]) throw Error("Invalid diff operation in diff_fromDelta: " + l[s])
                        }
                    }
                    if (i != t.length) throw Error("Delta length (" + i + ") does not equal source text length (" + t.length + ").");
                    return r
                }, e.prototype.match_main = function(t, e, n) {
                    if (null == t || null == e || null == n) throw Error("Null input. (match_main)");
                    return (n = Math.max(0, Math.min(n, t.length)), t == e) ? 0 : t.length ? t.substring(n, n + e.length) == e ? n : this.match_bitap_(t, e, n) : -1
                }, e.prototype.match_bitap_ = function(t, e, n) {
                    if (e.length > this.Match_MaxBits) throw Error("Pattern too long for this browser.");
                    var r, o, i, l = this.match_alphabet_(e),
                        s = this;

                    function a(t, r) {
                        var o = t / e.length,
                            i = Math.abs(n - r);
                        return s.Match_Distance ? o + i / s.Match_Distance : i ? 1 : o
                    }
                    var c = this.Match_Threshold,
                        f = t.indexOf(e, n); - 1 != f && (c = Math.min(a(0, f), c), -1 != (f = t.lastIndexOf(e, n + e.length)) && (c = Math.min(a(0, f), c)));
                    var u = 1 << e.length - 1;
                    f = -1;
                    for (var d = e.length + t.length, p = 0; p < e.length; p++) {
                        for (r = 0, o = d; r < o;) a(p, n + o) <= c ? r = o : d = o, o = Math.floor((d - r) / 2 + r);
                        d = o;
                        var h = Math.max(1, n - o + 1),
                            v = Math.min(n + o, t.length) + e.length,
                            g = Array(v + 2);
                        g[v + 1] = (1 << p) - 1;
                        for (var m = v; m >= h; m--) {
                            var y = l[t.charAt(m - 1)];
                            if (0 === p ? g[m] = (g[m + 1] << 1 | 1) & y : g[m] = (g[m + 1] << 1 | 1) & y | ((i[m + 1] | i[m]) << 1 | 1) | i[m + 1], g[m] & u) {
                                var b = a(p, m - 1);
                                if (b <= c)
                                    if (c = b, (f = m - 1) > n) h = Math.max(1, 2 * n - f);
                                    else break
                            }
                        }
                        if (a(p + 1, n) > c) break;
                        i = g
                    }
                    return f
                }, e.prototype.match_alphabet_ = function(t) {
                    for (var e = {}, n = 0; n < t.length; n++) e[t.charAt(n)] = 0;
                    for (var n = 0; n < t.length; n++) e[t.charAt(n)] |= 1 << t.length - n - 1;
                    return e
                }, e.prototype.patch_addContext_ = function(t, n) {
                    if (0 != n.length) {
                        if (null === t.start2) throw Error("patch not initialized");
                        for (var r = n.substring(t.start2, t.start2 + t.length1), o = 0; n.indexOf(r) != n.lastIndexOf(r) && r.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) o += this.Patch_Margin, r = n.substring(t.start2 - o, t.start2 + t.length1 + o);
                        o += this.Patch_Margin;
                        var i = n.substring(t.start2 - o, t.start2);
                        i && t.diffs.unshift(new e.Diff(0, i));
                        var l = n.substring(t.start2 + t.length1, t.start2 + t.length1 + o);
                        l && t.diffs.push(new e.Diff(0, l)), t.start1 -= i.length, t.start2 -= i.length, t.length1 += i.length + l.length, t.length2 += i.length + l.length
                    }
                }, e.prototype.patch_make = function(t, n, r) {
                    if ("string" == typeof t && "string" == typeof n && void 0 === r) o = t, (i = this.diff_main(o, n, !0)).length > 2 && (this.diff_cleanupSemantic(i), this.diff_cleanupEfficiency(i));
                    else if (t && "object" == typeof t && void 0 === n && void 0 === r) i = t, o = this.diff_text1(i);
                    else if ("string" == typeof t && n && "object" == typeof n && void 0 === r) o = t, i = n;
                    else if ("string" == typeof t && "string" == typeof n && r && "object" == typeof r) o = t, i = r;
                    else throw Error("Unknown call format to patch_make.");
                    if (0 === i.length) return [];
                    for (var o, i, l = [], s = new e.patch_obj, a = 0, c = 0, f = 0, u = o, d = o, p = 0; p < i.length; p++) {
                        var h = i[p][0],
                            v = i[p][1];
                        switch (!a && 0 !== h && (s.start1 = c, s.start2 = f), h) {
                            case 1:
                                s.diffs[a++] = i[p], s.length2 += v.length, d = d.substring(0, f) + v + d.substring(f);
                                break;
                            case -1:
                                s.length1 += v.length, s.diffs[a++] = i[p], d = d.substring(0, f) + d.substring(f + v.length);
                                break;
                            case 0:
                                v.length <= 2 * this.Patch_Margin && a && i.length != p + 1 ? (s.diffs[a++] = i[p], s.length1 += v.length, s.length2 += v.length) : v.length >= 2 * this.Patch_Margin && a && (this.patch_addContext_(s, u), l.push(s), s = new e.patch_obj, a = 0, u = d, c = f)
                        }
                        1 !== h && (c += v.length), -1 !== h && (f += v.length)
                    }
                    return a && (this.patch_addContext_(s, u), l.push(s)), l
                }, e.prototype.patch_deepCopy = function(t) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var o = t[r],
                            i = new e.patch_obj;
                        i.diffs = [];
                        for (var l = 0; l < o.diffs.length; l++) i.diffs[l] = new e.Diff(o.diffs[l][0], o.diffs[l][1]);
                        i.start1 = o.start1, i.start2 = o.start2, i.length1 = o.length1, i.length2 = o.length2, n[r] = i
                    }
                    return n
                }, e.prototype.patch_apply = function(t, e) {
                    if (0 == t.length) return [e, []];
                    t = this.patch_deepCopy(t);
                    var n = this.patch_addPadding(t);
                    e = n + e + n, this.patch_splitMax(t);
                    for (var r = 0, o = [], i = 0; i < t.length; i++) {
                        var l = t[i].start2 + r,
                            s = this.diff_text1(t[i].diffs),
                            a = -1;
                        if (s.length > this.Match_MaxBits ? -1 != (f = this.match_main(e, s.substring(0, this.Match_MaxBits), l)) && (-1 == (a = this.match_main(e, s.substring(s.length - this.Match_MaxBits), l + s.length - this.Match_MaxBits)) || f >= a) && (f = -1) : f = this.match_main(e, s, l), -1 == f) o[i] = !1, r -= t[i].length2 - t[i].length1;
                        else if (o[i] = !0, r = f - l, u = -1 == a ? e.substring(f, f + s.length) : e.substring(f, a + this.Match_MaxBits), s == u) e = e.substring(0, f) + this.diff_text2(t[i].diffs) + e.substring(f + s.length);
                        else {
                            var c = this.diff_main(s, u, !1);
                            if (s.length > this.Match_MaxBits && this.diff_levenshtein(c) / s.length > this.Patch_DeleteThreshold) o[i] = !1;
                            else {
                                this.diff_cleanupSemanticLossless(c);
                                for (var f, u, d, p = 0, h = 0; h < t[i].diffs.length; h++) {
                                    var v = t[i].diffs[h];
                                    0 !== v[0] && (d = this.diff_xIndex(c, p)), 1 === v[0] ? e = e.substring(0, f + d) + v[1] + e.substring(f + d) : -1 === v[0] && (e = e.substring(0, f + d) + e.substring(f + this.diff_xIndex(c, p + v[1].length))), -1 !== v[0] && (p += v[1].length)
                                }
                            }
                        }
                    }
                    return [e = e.substring(n.length, e.length - n.length), o]
                }, e.prototype.patch_addPadding = function(t) {
                    for (var n = this.Patch_Margin, r = "", o = 1; o <= n; o++) r += String.fromCharCode(o);
                    for (var o = 0; o < t.length; o++) t[o].start1 += n, t[o].start2 += n;
                    var i = t[0],
                        l = i.diffs;
                    if (0 == l.length || 0 != l[0][0]) l.unshift(new e.Diff(0, r)), i.start1 -= n, i.start2 -= n, i.length1 += n, i.length2 += n;
                    else if (n > l[0][1].length) {
                        var s = n - l[0][1].length;
                        l[0][1] = r.substring(l[0][1].length) + l[0][1], i.start1 -= s, i.start2 -= s, i.length1 += s, i.length2 += s
                    }
                    if (0 == (l = (i = t[t.length - 1]).diffs).length || 0 != l[l.length - 1][0]) l.push(new e.Diff(0, r)), i.length1 += n, i.length2 += n;
                    else if (n > l[l.length - 1][1].length) {
                        var s = n - l[l.length - 1][1].length;
                        l[l.length - 1][1] += r.substring(0, s), i.length1 += s, i.length2 += s
                    }
                    return r
                }, e.prototype.patch_splitMax = function(t) {
                    for (var n = this.Match_MaxBits, r = 0; r < t.length; r++)
                        if (!(t[r].length1 <= n)) {
                            var o = t[r];
                            t.splice(r--, 1);
                            for (var i = o.start1, l = o.start2, s = ""; 0 !== o.diffs.length;) {
                                var a = new e.patch_obj,
                                    c = !0;
                                for (a.start1 = i - s.length, a.start2 = l - s.length, "" !== s && (a.length1 = a.length2 = s.length, a.diffs.push(new e.Diff(0, s))); 0 !== o.diffs.length && a.length1 < n - this.Patch_Margin;) {
                                    var f = o.diffs[0][0],
                                        u = o.diffs[0][1];
                                    1 === f ? (a.length2 += u.length, l += u.length, a.diffs.push(o.diffs.shift()), c = !1) : -1 === f && 1 == a.diffs.length && 0 == a.diffs[0][0] && u.length > 2 * n ? (a.length1 += u.length, i += u.length, c = !1, a.diffs.push(new e.Diff(f, u)), o.diffs.shift()) : (u = u.substring(0, n - a.length1 - this.Patch_Margin), a.length1 += u.length, i += u.length, 0 === f ? (a.length2 += u.length, l += u.length) : c = !1, a.diffs.push(new e.Diff(f, u)), u == o.diffs[0][1] ? o.diffs.shift() : o.diffs[0][1] = o.diffs[0][1].substring(u.length))
                                }
                                s = (s = this.diff_text2(a.diffs)).substring(s.length - this.Patch_Margin);
                                var d = this.diff_text1(o.diffs).substring(0, this.Patch_Margin);
                                "" !== d && (a.length1 += d.length, a.length2 += d.length, 0 !== a.diffs.length && 0 === a.diffs[a.diffs.length - 1][0] ? a.diffs[a.diffs.length - 1][1] += d : a.diffs.push(new e.Diff(0, d))), c || t.splice(++r, 0, a)
                            }
                        }
                }, e.prototype.patch_toText = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e[n] = t[n];
                    return e.join("")
                }, e.prototype.patch_fromText = function(t) {
                    var n = [];
                    if (!t) return n;
                    for (var r = t.split("\n"), o = 0, i = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; o < r.length;) {
                        var l = r[o].match(i);
                        if (!l) throw Error("Invalid patch string: " + r[o]);
                        var s = new e.patch_obj;
                        for (n.push(s), s.start1 = parseInt(l[1], 10), "" === l[2] ? (s.start1--, s.length1 = 1) : "0" == l[2] ? s.length1 = 0 : (s.start1--, s.length1 = parseInt(l[2], 10)), s.start2 = parseInt(l[3], 10), "" === l[4] ? (s.start2--, s.length2 = 1) : "0" == l[4] ? s.length2 = 0 : (s.start2--, s.length2 = parseInt(l[4], 10)), o++; o < r.length;) {
                            var a = r[o].charAt(0);
                            try {
                                var c = decodeURI(r[o].substring(1))
                            } catch (t) {
                                throw Error("Illegal escape in patch_fromText: " + c)
                            }
                            if ("-" == a) s.diffs.push(new e.Diff(-1, c));
                            else if ("+" == a) s.diffs.push(new e.Diff(1, c));
                            else if (" " == a) s.diffs.push(new e.Diff(0, c));
                            else if ("@" == a) break;
                            else if ("" === a);
                            else throw Error('Invalid patch mode "' + a + '" in: ' + c);
                            o++
                        }
                    }
                    return n
                }, e.patch_obj = function() {
                    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
                }, e.patch_obj.prototype.toString = function() {
                    t = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1;
                    for (var t, e, n = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2, r = ["@@ -" + t + " +" + n + " @@\n"], o = 0; o < this.diffs.length; o++) {
                        switch (this.diffs[o][0]) {
                            case 1:
                                e = "+";
                                break;
                            case -1:
                                e = "-";
                                break;
                            case 0:
                                e = " "
                        }
                        r[o + 1] = e + encodeURI(this.diffs[o][1]) + "\n"
                    }
                    return r.join("").replace(/%20/g, " ")
                }, t.exports = e, t.exports.diff_match_patch = e, t.exports.DIFF_DELETE = -1, t.exports.DIFF_INSERT = 1, t.exports.DIFF_EQUAL = 0
            }(tU);
            var tJ = function(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                }(tU.exports),
                tG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                tK = function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                },
                tW = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                tY = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                        var i = Object.getPrototypeOf(e);
                        if (null === i) return;
                        return t(i, n, r)
                    }
                    if ("value" in o) return o.value;
                    var l = o.get;
                    if (void 0 !== l) return l.call(r)
                },
                tQ = function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                },
                tZ = function(t, e) {
                    if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e && ("object" == typeof e || "function" == typeof e) ? e : t
                },
                tX = function() {
                    function t(e) {
                        tK(this, t), this.selfOptions = e || {}, this.pipes = {}
                    }
                    return tW(t, [{
                        key: "options",
                        value: function(t) {
                            return t && (this.selfOptions = t), this.selfOptions
                        }
                    }, {
                        key: "pipe",
                        value: function(t, e) {
                            var n = e;
                            if ("string" == typeof t)
                                if (void 0 === n) return this.pipes[t];
                                else this.pipes[t] = n;
                            if (t && t.name) {
                                if ((n = t).processor === this) return n;
                                this.pipes[n.name] = n
                            }
                            return n.processor = this, n
                        }
                    }, {
                        key: "process",
                        value: function(t, e) {
                            var n = t;
                            n.options = this.options();
                            for (var r = e || t.pipe || "default", o = void 0, i = void 0; r;) void 0 !== n.nextAfterChildren && (n.next = n.nextAfterChildren, n.nextAfterChildren = null), "string" == typeof r && (r = this.pipe(r)), r.process(n), i = n, o = r, r = null, n && n.next && (n = n.next, r = i.nextPipe || n.pipe || o);
                            return n.hasResult ? n.result : void 0
                        }
                    }]), t
                }(),
                t1 = function() {
                    function t(e) {
                        tK(this, t), this.name = e, this.filters = []
                    }
                    return tW(t, [{
                        key: "process",
                        value: function(t) {
                            if (!this.processor) throw Error("add this pipe to a processor before using it");
                            for (var e = this.debug, n = this.filters.length, r = 0; r < n; r++) {
                                var o = this.filters[r];
                                if (e && this.log("filter: " + o.filterName), o(t), (void 0 === t ? "undefined" : tG(t)) === "object" && t.exiting) {
                                    t.exiting = !1;
                                    break
                                }
                            }!t.next && this.resultCheck && this.resultCheck(t)
                        }
                    }, {
                        key: "log",
                        value: function(t) {
                            console.log("[jsondiffpatch] " + this.name + " pipe, " + t)
                        }
                    }, {
                        key: "append",
                        value: function() {
                            var t;
                            return (t = this.filters).push.apply(t, arguments), this
                        }
                    }, {
                        key: "prepend",
                        value: function() {
                            var t;
                            return (t = this.filters).unshift.apply(t, arguments), this
                        }
                    }, {
                        key: "indexOf",
                        value: function(t) {
                            if (!t) throw Error("a filter name is required");
                            for (var e = 0; e < this.filters.length; e++)
                                if (this.filters[e].filterName === t) return e;
                            throw Error("filter not found: " + t)
                        }
                    }, {
                        key: "list",
                        value: function() {
                            return this.filters.map(function(t) {
                                return t.filterName
                            })
                        }
                    }, {
                        key: "after",
                        value: function(t) {
                            var e = this.indexOf(t),
                                n = Array.prototype.slice.call(arguments, 1);
                            if (!n.length) throw Error("a filter is required");
                            return n.unshift(e + 1, 0), Array.prototype.splice.apply(this.filters, n), this
                        }
                    }, {
                        key: "before",
                        value: function(t) {
                            var e = this.indexOf(t),
                                n = Array.prototype.slice.call(arguments, 1);
                            if (!n.length) throw Error("a filter is required");
                            return n.unshift(e, 0), Array.prototype.splice.apply(this.filters, n), this
                        }
                    }, {
                        key: "replace",
                        value: function(t) {
                            var e = this.indexOf(t),
                                n = Array.prototype.slice.call(arguments, 1);
                            if (!n.length) throw Error("a filter is required");
                            return n.unshift(e, 1), Array.prototype.splice.apply(this.filters, n), this
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            var e = this.indexOf(t);
                            return this.filters.splice(e, 1), this
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this.filters.length = 0, this
                        }
                    }, {
                        key: "shouldHaveResult",
                        value: function(t) {
                            if (!1 === t) {
                                this.resultCheck = null;
                                return
                            }
                            if (!this.resultCheck) {
                                var e = this;
                                return this.resultCheck = function(t) {
                                    if (!t.hasResult) {
                                        console.log(t);
                                        var n = Error(e.name + " failed");
                                        throw n.noResult = !0, n
                                    }
                                }, this
                            }
                        }
                    }]), t
                }(),
                t0 = function() {
                    function t() {
                        tK(this, t)
                    }
                    return tW(t, [{
                        key: "setResult",
                        value: function(t) {
                            return this.result = t, this.hasResult = !0, this
                        }
                    }, {
                        key: "exit",
                        value: function() {
                            return this.exiting = !0, this
                        }
                    }, {
                        key: "switchTo",
                        value: function(t, e) {
                            return "string" == typeof t || t instanceof t1 ? this.nextPipe = t : (this.next = t, e && (this.nextPipe = e)), this
                        }
                    }, {
                        key: "push",
                        value: function(t, e) {
                            return t.parent = this, void 0 !== e && (t.childName = e), t.root = this.root || this, t.options = t.options || this.options, this.children ? (this.children[this.children.length - 1].next = t, this.children.push(t)) : (this.children = [t], this.nextAfterChildren = this.next || null, this.next = t), t.next = this, this
                        }
                    }]), t
                }(),
                t2 = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                    return t instanceof Array
                };

            function t3(t) {
                if ((void 0 === t ? "undefined" : tG(t)) !== "object") return t;
                if (null === t) return null;
                if (t2(t)) return t.map(t3);
                if (t instanceof Date) return new Date(t.getTime());
                if (t instanceof RegExp) {
                    var e;
                    return new RegExp((e = /^\/(.*)\/([gimyu]*)$/.exec(t.toString()))[1], e[2])
                }
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t3(t[r]));
                return n
            }
            var t5 = function(t) {
                    function e(t, n) {
                        tK(this, e);
                        var r = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return r.left = t, r.right = n, r.pipe = "diff", r
                    }
                    return tQ(e, t), tW(e, [{
                        key: "setResult",
                        value: function(t) {
                            if (this.options.cloneDiffValues && (void 0 === t ? "undefined" : tG(t)) === "object") {
                                var e = "function" == typeof this.options.cloneDiffValues ? this.options.cloneDiffValues : t3;
                                "object" === tG(t[0]) && (t[0] = e(t[0])), "object" === tG(t[1]) && (t[1] = e(t[1]))
                            }
                            return t0.prototype.setResult.apply(this, arguments)
                        }
                    }]), e
                }(t0),
                t6 = function(t) {
                    function e(t, n) {
                        tK(this, e);
                        var r = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return r.left = t, r.delta = n, r.pipe = "patch", r
                    }
                    return tQ(e, t), e
                }(t0),
                t4 = function(t) {
                    function e(t) {
                        tK(this, e);
                        var n = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return n.delta = t, n.pipe = "reverse", n
                    }
                    return tQ(e, t), e
                }(t0),
                t9 = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                    return t instanceof Array
                },
                t7 = function(t) {
                    if (t.left === t.right) return void t.setResult(void 0).exit();
                    if (void 0 === t.left) {
                        if ("function" == typeof t.right) throw Error("functions are not supported");
                        t.setResult([t.right]).exit();
                        return
                    }
                    if (void 0 === t.right) return void t.setResult([t.left, 0, 0]).exit();
                    if ("function" == typeof t.left || "function" == typeof t.right) throw Error("functions are not supported");
                    return (t.leftType = null === t.left ? "null" : tG(t.left), t.rightType = null === t.right ? "null" : tG(t.right), t.leftType !== t.rightType || "boolean" === t.leftType || "number" === t.leftType || ("object" === t.leftType && (t.leftIsArray = t9(t.left)), "object" === t.rightType && (t.rightIsArray = t9(t.right)), t.leftIsArray !== t.rightIsArray)) ? void t.setResult([t.left, t.right]).exit() : void(t.left instanceof RegExp && (t.right instanceof RegExp ? t.setResult([t.left.toString(), t.right.toString()]).exit() : t.setResult([t.left, t.right]).exit()))
                };
            t7.filterName = "trivial";
            var t8 = function(t) {
                if (void 0 === t.delta) return void t.setResult(t.left).exit();
                if (t.nested = !t9(t.delta), !t.nested) {
                    if (1 === t.delta.length) return void t.setResult(t.delta[0]).exit();
                    if (2 === t.delta.length) {
                        if (t.left instanceof RegExp) {
                            var e = /^\/(.*)\/([gimyu]+)$/.exec(t.delta[1]);
                            if (e) return void t.setResult(new RegExp(e[1], e[2])).exit()
                        }
                        t.setResult(t.delta[1]).exit();
                        return
                    }
                    3 === t.delta.length && 0 === t.delta[2] && t.setResult(void 0).exit()
                }
            };
            t8.filterName = "trivial";
            var et = function(t) {
                if (void 0 === t.delta) return void t.setResult(t.delta).exit();
                if (t.nested = !t9(t.delta), !t.nested) {
                    if (1 === t.delta.length) return void t.setResult([t.delta[0], 0, 0]).exit();
                    if (2 === t.delta.length) return void t.setResult([t.delta[1], t.delta[0]]).exit();
                    3 === t.delta.length && 0 === t.delta[2] && t.setResult([t.delta[0]]).exit()
                }
            };

            function ee(t) {
                if (t && t.children) {
                    for (var e = t.children.length, n = void 0, r = t.result, o = 0; o < e; o++) void 0 !== (n = t.children[o]).result && ((r = r || {})[n.childName] = n.result);
                    r && t.leftIsArray && (r._t = "a"), t.setResult(r).exit()
                }
            }

            function en(t) {
                if (!t.leftIsArray && "object" === t.leftType) {
                    var e = void 0,
                        n = void 0,
                        r = t.options.propertyFilter;
                    for (e in t.left) Object.prototype.hasOwnProperty.call(t.left, e) && (!r || r(e, t)) && (n = new t5(t.left[e], t.right[e]), t.push(n, e));
                    for (e in t.right) Object.prototype.hasOwnProperty.call(t.right, e) && (!r || r(e, t)) && void 0 === t.left[e] && (n = new t5(void 0, t.right[e]), t.push(n, e));
                    if (!t.children || 0 === t.children.length) return void t.setResult(void 0).exit();
                    t.exit()
                }
            }
            et.filterName = "trivial", ee.filterName = "collectChildren", en.filterName = "objects";
            var er = function(t) {
                if (t.nested && !t.delta._t) {
                    var e = void 0,
                        n = void 0;
                    for (e in t.delta) n = new t6(t.left[e], t.delta[e]), t.push(n, e);
                    t.exit()
                }
            };
            er.filterName = "objects";
            var eo = function(t) {
                if (t && t.children && !t.delta._t) {
                    for (var e = t.children.length, n = void 0, r = 0; r < e; r++) n = t.children[r], Object.prototype.hasOwnProperty.call(t.left, n.childName) && void 0 === n.result ? delete t.left[n.childName] : t.left[n.childName] !== n.result && (t.left[n.childName] = n.result);
                    t.setResult(t.left).exit()
                }
            };
            eo.filterName = "collectChildren";
            var ei = function(t) {
                if (t.nested && !t.delta._t) {
                    var e = void 0,
                        n = void 0;
                    for (e in t.delta) n = new t4(t.delta[e]), t.push(n, e);
                    t.exit()
                }
            };

            function el(t) {
                if (t && t.children && !t.delta._t) {
                    for (var e = t.children.length, n = void 0, r = {}, o = 0; o < e; o++) r[(n = t.children[o]).childName] !== n.result && (r[n.childName] = n.result);
                    t.setResult(r).exit()
                }
            }
            ei.filterName = "objects", el.filterName = "collectChildren";
            var es = function(t, e, n, r) {
                    return t[n] === e[r]
                },
                ea = function(t, e, n, r) {
                    var o = t.length,
                        i = e.length,
                        l = void 0,
                        s = void 0,
                        a = [o + 1];
                    for (l = 0; l < o + 1; l++)
                        for (s = 0, a[l] = [i + 1]; s < i + 1; s++) a[l][s] = 0;
                    for (l = 1, a.match = n; l < o + 1; l++)
                        for (s = 1; s < i + 1; s++) n(t, e, l - 1, s - 1, r) ? a[l][s] = a[l - 1][s - 1] + 1 : a[l][s] = Math.max(a[l - 1][s], a[l][s - 1]);
                    return a
                },
                ec = function(t, e, n, r) {
                    for (var o = e.length, i = n.length, l = {
                            sequence: [],
                            indices1: [],
                            indices2: []
                        }; 0 !== o && 0 !== i;) t.match(e, n, o - 1, i - 1, r) ? (l.sequence.unshift(e[o - 1]), l.indices1.unshift(o - 1), l.indices2.unshift(i - 1), --o, --i) : t[o][i - 1] > t[o - 1][i] ? --i : --o;
                    return l
                },
                ef = {
                    get: function(t, e, n, r) {
                        var o = r || {},
                            i = ec(ea(t, e, n || es, o), t, e, o);
                        return "string" == typeof t && "string" == typeof e && (i.sequence = i.sequence.join("")), i
                    }
                },
                eu = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                    return t instanceof Array
                },
                ed = "function" == typeof Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                } : function(t, e) {
                    for (var n = t.length, r = 0; r < n; r++)
                        if (t[r] === e) return r;
                    return -1
                };

            function ep(t, e, n, r, o) {
                var i = t[n],
                    l = e[r];
                if (i === l) return !0;
                if ((void 0 === i ? "undefined" : tG(i)) !== "object" || (void 0 === l ? "undefined" : tG(l)) !== "object") return !1;
                var s = o.objectHash;
                if (!s) return o.matchByPosition && n === r;
                var a = void 0,
                    c = void 0;
                return "number" == typeof n ? (o.hashCache1 = o.hashCache1 || [], void 0 === (a = o.hashCache1[n]) && (o.hashCache1[n] = a = s(i, n))) : a = s(i), void 0 !== a && ("number" == typeof r ? (o.hashCache2 = o.hashCache2 || [], void 0 === (c = o.hashCache2[r]) && (o.hashCache2[r] = c = s(l, r))) : c = s(l), void 0 !== c && a === c)
            }
            var eh = function(t) {
                if (t.leftIsArray) {
                    var e = {
                            objectHash: t.options && t.options.objectHash,
                            matchByPosition: t.options && t.options.matchByPosition
                        },
                        n = 0,
                        r = 0,
                        o = void 0,
                        i = void 0,
                        l = void 0,
                        s = t.left,
                        a = t.right,
                        c = s.length,
                        f = a.length,
                        u = void 0;
                    for (c > 0 && f > 0 && !e.objectHash && "boolean" != typeof e.matchByPosition && (e.matchByPosition = ! function(t, e, n, r) {
                            for (var o = 0; o < n; o++)
                                for (var i = t[o], l = 0; l < r; l++) {
                                    var s = e[l];
                                    if (o !== l && i === s) return !0
                                }
                        }(s, a, c, f)); n < c && n < f && ep(s, a, n, n, e);) o = n, u = new t5(t.left[o], t.right[o]), t.push(u, o), n++;
                    for (; r + n < c && r + n < f && ep(s, a, c - 1 - r, f - 1 - r, e);) i = c - 1 - r, l = f - 1 - r, u = new t5(t.left[i], t.right[l]), t.push(u, l), r++;
                    var d = void 0;
                    if (n + r === c) {
                        if (c === f) return void t.setResult(void 0).exit();
                        for (d = d || {
                                _t: "a"
                            }, o = n; o < f - r; o++) d[o] = [a[o]];
                        return void t.setResult(d).exit()
                    }
                    if (n + r === f) {
                        for (d = d || {
                                _t: "a"
                            }, o = n; o < c - r; o++) d["_" + o] = [s[o], 0, 0];
                        t.setResult(d).exit();
                        return
                    }
                    delete e.hashCache1, delete e.hashCache2;
                    var p = s.slice(n, c - r),
                        h = a.slice(n, f - r),
                        v = ef.get(p, h, ep, e),
                        g = [];
                    for (d = d || {
                            _t: "a"
                        }, o = n; o < c - r; o++) 0 > ed(v.indices1, o - n) && (d["_" + o] = [s[o], 0, 0], g.push(o));
                    var m = !0;
                    t.options && t.options.arrays && !1 === t.options.arrays.detectMove && (m = !1);
                    var y = !1;
                    t.options && t.options.arrays && t.options.arrays.includeValueOnMove && (y = !0);
                    var b = g.length;
                    for (o = n; o < f - r; o++) {
                        var $ = ed(v.indices2, o - n);
                        if ($ < 0) {
                            var x = !1;
                            if (m && b > 0) {
                                for (var w = 0; w < b; w++)
                                    if (ep(p, h, (i = g[w]) - n, o - n, e)) {
                                        d["_" + i].splice(1, 2, o, 3), y || (d["_" + i][0] = ""), l = o, u = new t5(t.left[i], t.right[l]), t.push(u, l), g.splice(w, 1), x = !0;
                                        break
                                    }
                            }
                            x || (d[o] = [a[o]])
                        } else i = v.indices1[$] + n, l = v.indices2[$] + n, u = new t5(t.left[i], t.right[l]), t.push(u, l)
                    }
                    t.setResult(d).exit()
                }
            };
            eh.filterName = "arrays";
            var ev = {
                    numerically: function(t, e) {
                        return t - e
                    },
                    numericallyBy: function(t) {
                        return function(e, n) {
                            return e[t] - n[t]
                        }
                    }
                },
                eg = function(t) {
                    if (t.nested && "a" === t.delta._t) {
                        var e = void 0,
                            n = void 0,
                            r = t.delta,
                            o = t.left,
                            i = [],
                            l = [],
                            s = [];
                        for (e in r)
                            if ("_t" !== e)
                                if ("_" === e[0])
                                    if (0 === r[e][2] || 3 === r[e][2]) i.push(parseInt(e.slice(1), 10));
                                    else throw Error("only removal or move can be applied at original array indices, invalid diff type: " + r[e][2]);
                        else 1 === r[e].length ? l.push({
                            index: parseInt(e, 10),
                            value: r[e][0]
                        }) : s.push({
                            index: parseInt(e, 10),
                            delta: r[e]
                        });
                        for (e = (i = i.sort(ev.numerically)).length - 1; e >= 0; e--) {
                            var a = r["_" + (n = i[e])],
                                c = o.splice(n, 1)[0];
                            3 === a[2] && l.push({
                                index: a[1],
                                value: c
                            })
                        }
                        var f = (l = l.sort(ev.numericallyBy("index"))).length;
                        for (e = 0; e < f; e++) {
                            var u = l[e];
                            o.splice(u.index, 0, u.value)
                        }
                        var d = s.length,
                            p = void 0;
                        if (d > 0)
                            for (e = 0; e < d; e++) {
                                var h = s[e];
                                p = new t6(t.left[h.index], h.delta), t.push(p, h.index)
                            }
                        if (!t.children) return void t.setResult(t.left).exit();
                        t.exit()
                    }
                };
            eg.filterName = "arrays";
            var em = function(t) {
                if (t && t.children && "a" === t.delta._t) {
                    for (var e = t.children.length, n = void 0, r = 0; r < e; r++) n = t.children[r], t.left[n.childName] = n.result;
                    t.setResult(t.left).exit()
                }
            };
            em.filterName = "arraysCollectChildren";
            var ey = function(t) {
                if (!t.nested) {
                    3 === t.delta[2] && (t.newName = "_" + t.delta[1], t.setResult([t.delta[0], parseInt(t.childName.substr(1), 10), 3]).exit());
                    return
                }
                if ("a" === t.delta._t) {
                    var e = void 0,
                        n = void 0;
                    for (e in t.delta) "_t" !== e && (n = new t4(t.delta[e]), t.push(n, e));
                    t.exit()
                }
            };
            ey.filterName = "arrays";
            var eb = function(t, e, n) {
                if ("string" == typeof e && "_" === e[0]) return parseInt(e.substr(1), 10);
                if (eu(n) && 0 === n[2]) return "_" + e;
                var r = +e;
                for (var o in t) {
                    var i = t[o];
                    if (eu(i))
                        if (3 === i[2]) {
                            var l = parseInt(o.substr(1), 10),
                                s = i[1];
                            if (s === +e) return l;
                            l <= r && s > r ? r++ : l >= r && s < r && r--
                        } else 0 === i[2] ? parseInt(o.substr(1), 10) <= r && r++ : 1 === i.length && o <= r && r--
                }
                return r
            };

            function e$(t) {
                if (t && t.children && "a" === t.delta._t) {
                    for (var e = t.children.length, n = void 0, r = {
                            _t: "a"
                        }, o = 0; o < e; o++) {
                        var i = (n = t.children[o]).newName;
                        void 0 === i && (i = eb(t.delta, n.childName, n.result)), r[i] !== n.result && (r[i] = n.result)
                    }
                    t.setResult(r).exit()
                }
            }
            e$.filterName = "arraysCollectChildren";
            var ex = function(t) {
                t.left instanceof Date ? (t.right instanceof Date ? t.left.getTime() !== t.right.getTime() ? t.setResult([t.left, t.right]) : t.setResult(void 0) : t.setResult([t.left, t.right]), t.exit()) : t.right instanceof Date && t.setResult([t.left, t.right]).exit()
            };
            ex.filterName = "dates";
            var ew = null,
                ek = function(t) {
                    if (!ew) {
                        var e = void 0;
                        if ("undefined" != typeof diff_match_patch) e = "function" == typeof diff_match_patch ? new diff_match_patch : new diff_match_patch.diff_match_patch;
                        else if (tJ) try {
                            e = tJ && new tJ
                        } catch (t) {
                            e = null
                        }
                        if (!e) {
                            if (!t) return null;
                            var n = Error("text diff_match_patch library not found");
                            throw n.diff_match_patch_not_found = !0, n
                        }
                        ew = {
                            diff: function(t, n) {
                                return e.patch_toText(e.patch_make(t, n))
                            },
                            patch: function(t, n) {
                                for (var r = e.patch_apply(e.patch_fromText(n), t), o = 0; o < r[1].length; o++) r[1][o] || (Error("text patch failed").textPatchFailed = !0);
                                return r[0]
                            }
                        }
                    }
                    return ew
                },
                e_ = function(t) {
                    if ("string" === t.leftType) {
                        var e = t.options && t.options.textDiff && t.options.textDiff.minLength || 60;
                        if (t.left.length < e || t.right.length < e) return void t.setResult([t.left, t.right]).exit();
                        var n = ek();
                        if (!n) return void t.setResult([t.left, t.right]).exit();
                        var r = n.diff;
                        t.setResult([r(t.left, t.right), 0, 2]).exit()
                    }
                };
            e_.filterName = "texts";
            var ej = function(t) {
                if (!t.nested && 2 === t.delta[2]) {
                    var e = ek(!0).patch;
                    t.setResult(e(t.left, t.delta[0])).exit()
                }
            };
            ej.filterName = "texts";
            var eC = function(t) {
                    var e = void 0,
                        n = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0,
                        l = null,
                        s = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,
                        a = void 0;
                    for (e = 0, n = (r = t.split("\n")).length; e < n; e++) {
                        var c = (o = r[e]).slice(0, 1);
                        "@" === c ? (l = s.exec(o), r[e] = "@@ -" + l[3] + "," + l[4] + " +" + l[1] + "," + l[2] + " @@") : "+" === c ? (r[e] = "-" + r[e].slice(1), "+" === r[e - 1].slice(0, 1) && (i = r[e], r[e] = r[e - 1], r[e - 1] = i)) : "-" === c && (r[e] = "+" + r[e].slice(1))
                    }
                    return r.join("\n")
                },
                eO = function(t) {
                    t.nested || 2 === t.delta[2] && t.setResult([eC(t.delta[0]), 0, 2]).exit()
                };
            eO.filterName = "texts";
            var eE = function() {
                    function t(e) {
                        tK(this, t), this.processor = new tX(e), this.processor.pipe(new t1("diff").append(ee, t7, ex, e_, en, eh).shouldHaveResult()), this.processor.pipe(new t1("patch").append(eo, em, t8, ej, er, eg).shouldHaveResult()), this.processor.pipe(new t1("reverse").append(el, e$, et, eO, ei, ey).shouldHaveResult())
                    }
                    return tW(t, [{
                        key: "options",
                        value: function() {
                            var t;
                            return (t = this.processor).options.apply(t, arguments)
                        }
                    }, {
                        key: "diff",
                        value: function(t, e) {
                            return this.processor.process(new t5(t, e))
                        }
                    }, {
                        key: "patch",
                        value: function(t, e) {
                            return this.processor.process(new t6(t, e))
                        }
                    }, {
                        key: "reverse",
                        value: function(t) {
                            return this.processor.process(new t4(t))
                        }
                    }, {
                        key: "unpatch",
                        value: function(t, e) {
                            return this.patch(t, this.reverse(e))
                        }
                    }, {
                        key: "clone",
                        value: function(t) {
                            return t3(t)
                        }
                    }]), t
                }(),
                eq = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                    return t instanceof Array
                },
                eD = "function" == typeof Object.keys ? function(t) {
                    return Object.keys(t)
                } : function(t) {
                    var e = [];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                    return e
                },
                eS = function(t) {
                    return "_t" === t ? -1 : "_" === t.substr(0, 1) ? parseInt(t.slice(1), 10) : parseInt(t, 10) + .1
                },
                eM = function(t, e) {
                    return eS(t) - eS(e)
                },
                eN = function() {
                    function t() {
                        tK(this, t)
                    }
                    return tW(t, [{
                        key: "format",
                        value: function(t, e) {
                            var n = {};
                            return this.prepareContext(n), this.recurse(n, t, e), this.finalize(n)
                        }
                    }, {
                        key: "prepareContext",
                        value: function(t) {
                            t.buffer = [], t.out = function() {
                                var t;
                                (t = this.buffer).push.apply(t, arguments)
                            }
                        }
                    }, {
                        key: "typeFormattterNotFound",
                        value: function(t, e) {
                            throw Error("cannot format delta type: " + e)
                        }
                    }, {
                        key: "typeFormattterErrorFormatter",
                        value: function(t, e) {
                            return e.toString()
                        }
                    }, {
                        key: "finalize",
                        value: function(t) {
                            var e = t.buffer;
                            if (eq(e)) return e.join("")
                        }
                    }, {
                        key: "recurse",
                        value: function(t, e, n, r, o, i, l) {
                            var s = e && i ? i.value : n;
                            if (void 0 !== e || void 0 !== r) {
                                var a = this.getDeltaType(e, i),
                                    c = "node" === a ? "a" === e._t ? "array" : "object" : "";
                                void 0 !== r ? this.nodeBegin(t, r, o, a, c, l) : this.rootBegin(t, a, c);
                                var f = void 0;
                                try {
                                    (this["format_" + a] || this.typeFormattterNotFound(t, a)).call(this, t, e, s, r, o, i)
                                } catch (n) {
                                    this.typeFormattterErrorFormatter(t, n, e, s, r, o, i), "undefined" != typeof console && console.error && console.error(n.stack)
                                }
                                void 0 !== r ? this.nodeEnd(t, r, o, a, c, l) : this.rootEnd(t, a, c)
                            }
                        }
                    }, {
                        key: "formatDeltaChildren",
                        value: function(t, e, n) {
                            var r = this;
                            this.forEachDeltaKey(e, n, function(o, i, l, s) {
                                r.recurse(t, e[o], n ? n[i] : void 0, o, i, l, s)
                            })
                        }
                    }, {
                        key: "forEachDeltaKey",
                        value: function(t, e, n) {
                            var r = eD(t),
                                o = "a" === t._t,
                                i = {},
                                l = void 0;
                            if (void 0 !== e)
                                for (l in e) Object.prototype.hasOwnProperty.call(e, l) && void 0 === t[l] && (!o || void 0 === t["_" + l]) && r.push(l);
                            for (l in t)
                                if (Object.prototype.hasOwnProperty.call(t, l)) {
                                    var s = t[l];
                                    eq(s) && 3 === s[2] && (i[s[1].toString()] = {
                                        key: l,
                                        value: e && e[parseInt(l.substr(1))]
                                    }, !1 !== this.includeMoveDestinations && void 0 === e && void 0 === t[s[1]] && r.push(s[1].toString()))
                                }
                            o ? r.sort(eM) : r.sort();
                            for (var a = 0, c = r.length; a < c; a++) {
                                var f = r[a];
                                if (!o || "_t" !== f) {
                                    var u = o ? "number" == typeof f ? f : parseInt("_" === f.substr(0, 1) ? f.slice(1) : f, 10) : f,
                                        d = a === c - 1;
                                    n(f, u, i[u], d)
                                }
                            }
                        }
                    }, {
                        key: "getDeltaType",
                        value: function(t, e) {
                            if (void 0 === t) return void 0 !== e ? "movedestination" : "unchanged";
                            if (eq(t)) {
                                if (1 === t.length) return "added";
                                if (2 === t.length) return "modified";
                                if (3 === t.length && 0 === t[2]) return "deleted";
                                if (3 === t.length && 2 === t[2]) return "textdiff";
                                if (3 === t.length && 3 === t[2]) return "moved"
                            } else if ((void 0 === t ? "undefined" : tG(t)) === "object") return "node";
                            return "unknown"
                        }
                    }, {
                        key: "parseTextDiff",
                        value: function(t) {
                            for (var e = [], n = t.split("\n@@ "), r = 0, o = n.length; r < o; r++) {
                                var i = n[r],
                                    l = {
                                        pieces: []
                                    },
                                    s = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(i).slice(1);
                                l.location = {
                                    line: s[0],
                                    chr: s[1]
                                };
                                for (var a = i.split("\n").slice(1), c = 0, f = a.length; c < f; c++) {
                                    var u = a[c];
                                    if (u.length) {
                                        var d = {
                                            type: "context"
                                        };
                                        "+" === u.substr(0, 1) ? d.type = "added" : "-" === u.substr(0, 1) && (d.type = "deleted"), d.text = u.slice(1), l.pieces.push(d)
                                    }
                                }
                                e.push(l)
                            }
                            return e
                        }
                    }]), t
                }();

            function eA(t) {
                for (var e = t, n = [
                        [/&/g, "&amp;"],
                        [/</g, "&lt;"],
                        [/>/g, "&gt;"],
                        [/'/g, "&apos;"],
                        [/"/g, "&quot;"]
                    ], r = 0; r < n.length; r++) e = e.replace(n[r][0], n[r][1]);
                return e
            }! function(t) {
                function e() {
                    return tK(this, e), tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                tQ(e, t), tW(e, [{
                    key: "typeFormattterErrorFormatter",
                    value: function(t, e) {
                        t.out('<pre class="jsondiffpatch-error">' + e + "</pre>")
                    }
                }, {
                    key: "formatValue",
                    value: function(t, e) {
                        t.out("<pre>" + eA(JSON.stringify(e, null, 2)) + "</pre>")
                    }
                }, {
                    key: "formatTextDiffString",
                    value: function(t, e) {
                        var n = this.parseTextDiff(e);
                        t.out('<ul class="jsondiffpatch-textdiff">');
                        for (var r = 0, o = n.length; r < o; r++) {
                            var i = n[r];
                            t.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + i.location.line + '</span><span class="jsondiffpatch-textdiff-char">') + i.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">');
                            for (var l = i.pieces, s = 0, a = l.length; s < a; s++) {
                                var c = l[s];
                                t.out('<span class="jsondiffpatch-textdiff-' + c.type + '">' + eA(decodeURI(c.text)) + "</span>")
                            }
                            t.out("</div></li>")
                        }
                        t.out("</ul>")
                    }
                }, {
                    key: "rootBegin",
                    value: function(t, e, n) {
                        t.out('<div class="jsondiffpatch-delta jsondiffpatch-' + e + (n ? " jsondiffpatch-child-node-type-" + n : "") + '">')
                    }
                }, {
                    key: "rootEnd",
                    value: function(t) {
                        t.out("</div>" + (t.hasArrows ? '<script type="text/javascript">setTimeout(' + eR.toString() + ",10);<\/script>" : ""))
                    }
                }, {
                    key: "nodeBegin",
                    value: function(t, e, n, r, o) {
                        t.out('<li class="jsondiffpatch-' + r + (o ? " jsondiffpatch-child-node-type-" + o : "") + '" data-key="' + n + '"><div class="jsondiffpatch-property-name">' + n + "</div>")
                    }
                }, {
                    key: "nodeEnd",
                    value: function(t) {
                        t.out("</li>")
                    }
                }, {
                    key: "format_unchanged",
                    value: function(t, e, n) {
                        void 0 !== n && (t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, n), t.out("</div>"))
                    }
                }, {
                    key: "format_movedestination",
                    value: function(t, e, n) {
                        void 0 !== n && (t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, n), t.out("</div>"))
                    }
                }, {
                    key: "format_node",
                    value: function(t, e, n) {
                        var r = "a" === e._t ? "array" : "object";
                        t.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + r + '">'), this.formatDeltaChildren(t, e, n), t.out("</ul>")
                    }
                }, {
                    key: "format_added",
                    value: function(t, e) {
                        t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out("</div>")
                    }
                }, {
                    key: "format_modified",
                    value: function(t, e) {
                        t.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">'), this.formatValue(t, e[0]), t.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'), this.formatValue(t, e[1]), t.out("</div>")
                    }
                }, {
                    key: "format_deleted",
                    value: function(t, e) {
                        t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out("</div>")
                    }
                }, {
                    key: "format_moved",
                    value: function(t, e) {
                        t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out('</div><div class="jsondiffpatch-moved-destination">' + e[1] + "</div>"), t.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'), t.hasArrows = !0
                    }
                }, {
                    key: "format_textdiff",
                    value: function(t, e) {
                        t.out('<div class="jsondiffpatch-value">'), this.formatTextDiffString(t, e[0]), t.out("</div>")
                    }
                }])
            }(eN);
            var eR = function(t) {
                    var e = function(t) {
                            var e = t.textContent,
                                n = t.innerText;
                            return e || n
                        },
                        n = function(t, e) {
                            for (var n = t.children, r = 0, o = n.length; r < o; r++) e(n[r], r)
                        };
                    ! function(t, e, n) {
                        for (var r = t.querySelectorAll(e), o = 0, i = r.length; o < i; o++) n(r[o])
                    }(t || document, ".jsondiffpatch-arrow", function(t) {
                        var r = t.parentNode,
                            o = t.children,
                            i = t.style,
                            l = o[0],
                            s = l.children[1];
                        l.style.display = "none";
                        var a = e(r.querySelector(".jsondiffpatch-moved-destination")),
                            c = r.parentNode,
                            f = void 0;
                        if (n(c, function(t) {
                                t.getAttribute("data-key") === a && (f = t)
                            }), f) try {
                            var u = f.offsetTop - r.offsetTop;
                            l.setAttribute("height", Math.abs(u) + 6), i.top = -8 + (u > 0 ? 0 : u) + "px";
                            var d = u > 0 ? "M30,0 Q-10," + Math.round(u / 2) + " 26," + (u - 4) : "M30," + -u + " Q-10," + Math.round(-u / 2) + " 26,4";
                            s.setAttribute("d", d), l.style.display = ""
                        } catch (t) {}
                    })
                },
                eT = function(t) {
                    function e() {
                        tK(this, e);
                        var t = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.includeMoveDestinations = !1, t
                    }
                    return tQ(e, t), tW(e, [{
                        key: "prepareContext",
                        value: function(t) {
                            tY(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.indent = function(t) {
                                this.indentLevel = (this.indentLevel || 0) + (void 0 === t ? 1 : t), this.indentPad = Array(this.indentLevel + 1).join("&nbsp;&nbsp;")
                            }, t.row = function(e, n) {
                                t.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">'), t.out(t.indentPad), t.out('</pre><pre style="display: inline-block">'), t.out(e), t.out('</pre></td><td class="jsondiffpatch-delta-note"><div>'), t.out(n), t.out("</div></td></tr>")
                            }
                        }
                    }, {
                        key: "typeFormattterErrorFormatter",
                        value: function(t, e) {
                            t.row("", '<pre class="jsondiffpatch-error">' + e + "</pre>")
                        }
                    }, {
                        key: "formatTextDiffString",
                        value: function(t, e) {
                            var n = this.parseTextDiff(e);
                            t.out('<ul class="jsondiffpatch-textdiff">');
                            for (var r = 0, o = n.length; r < o; r++) {
                                var i = n[r];
                                t.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + i.location.line + '</span><span class="jsondiffpatch-textdiff-char">') + i.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">');
                                for (var l = i.pieces, s = 0, a = l.length; s < a; s++) {
                                    var c = l[s];
                                    t.out('<span class="jsondiffpatch-textdiff-' + c.type + '">' + c.text + "</span>")
                                }
                                t.out("</div></li>")
                            }
                            t.out("</ul>")
                        }
                    }, {
                        key: "rootBegin",
                        value: function(t, e, n) {
                            t.out('<table class="jsondiffpatch-annotated-delta">'), "node" === e && (t.row("{"), t.indent()), "array" === n && t.row('"_t": "a",', "Array delta (member names indicate array indices)")
                        }
                    }, {
                        key: "rootEnd",
                        value: function(t, e) {
                            "node" === e && (t.indent(-1), t.row("}")), t.out("</table>")
                        }
                    }, {
                        key: "nodeBegin",
                        value: function(t, e, n, r, o) {
                            t.row("&quot;" + e + "&quot;: {"), "node" === r && t.indent(), "array" === o && t.row('"_t": "a",', "Array delta (member names indicate array indices)")
                        }
                    }, {
                        key: "nodeEnd",
                        value: function(t, e, n, r, o, i) {
                            "node" === r && t.indent(-1), t.row("}" + (i ? "" : ","))
                        }
                    }, {
                        key: "format_unchanged",
                        value: function() {}
                    }, {
                        key: "format_movedestination",
                        value: function() {}
                    }, {
                        key: "format_node",
                        value: function(t, e, n) {
                            this.formatDeltaChildren(t, e, n)
                        }
                    }]), e
                }(eN),
                eP = function(t) {
                    return '<pre style="display:inline-block">&quot;' + t + "&quot;</pre>"
                },
                ez = {
                    added: function(t, e, n, r) {
                        var o = " <pre>([newValue])</pre>";
                        return void 0 === r ? "new value" + o : "number" == typeof r ? "insert at index " + r + o : "add property " + eP(r) + o
                    },
                    modified: function(t, e, n, r) {
                        var o = " <pre>([previousValue, newValue])</pre>";
                        return void 0 === r ? "modify value" + o : "number" == typeof r ? "modify at index " + r + o : "modify property " + eP(r) + o
                    },
                    deleted: function(t, e, n, r) {
                        var o = " <pre>([previousValue, 0, 0])</pre>";
                        return void 0 === r ? "delete value" + o : "number" == typeof r ? "remove index " + r + o : "delete property " + eP(r) + o
                    },
                    moved: function(t, e, n, r) {
                        return 'move from <span title="(position to remove at original state)">index ' + r + '</span> to <span title="(position to insert at final state)">index ' + t[1] + "</span>"
                    },
                    textdiff: function(t, e, n, r) {
                        return "text diff" + (void 0 === r ? "" : "number" == typeof r ? " at index " + r : " at property " + eP(r)) + ', format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>'
                    }
                },
                eI = function(t, e) {
                    var n = this.getDeltaType(e),
                        r = ez[n],
                        o = r && r.apply(r, Array.prototype.slice.call(arguments, 1)),
                        i = JSON.stringify(e, null, 2);
                    "textdiff" === n && (i = i.split("\\n").join('\\n"+\n   "')), t.indent(), t.row(i, o), t.indent(-1)
                };
            eT.prototype.format_added = eI, eT.prototype.format_modified = eI, eT.prototype.format_deleted = eI, eT.prototype.format_moved = eI, eT.prototype.format_textdiff = eI;
            var eB = {
                add: "add",
                remove: "remove",
                replace: "replace",
                move: "move"
            };

            function eF(t) {
                return a.A && a.A[t] || function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return e
                }
            }! function(t) {
                function e() {
                    tK(this, e);
                    var t = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t.includeMoveDestinations = !0, t
                }
                tQ(e, t), tW(e, [{
                    key: "prepareContext",
                    value: function(t) {
                        tY(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.result = [], t.path = [], t.pushCurrentOp = function(t) {
                            var e = t.op,
                                n = t.value,
                                r = {
                                    op: e,
                                    path: this.currentPath()
                                };
                            void 0 !== n && (r.value = n), this.result.push(r)
                        }, t.pushMoveOp = function(t) {
                            var e = this.currentPath();
                            this.result.push({
                                op: eB.move,
                                from: e,
                                path: this.toPath(t)
                            })
                        }, t.currentPath = function() {
                            return "/" + this.path.join("/")
                        }, t.toPath = function(t) {
                            var e = this.path.slice();
                            return e[e.length - 1] = t, "/" + e.join("/")
                        }
                    }
                }, {
                    key: "typeFormattterErrorFormatter",
                    value: function(t, e) {
                        t.out("[ERROR] " + e)
                    }
                }, {
                    key: "rootBegin",
                    value: function() {}
                }, {
                    key: "rootEnd",
                    value: function() {}
                }, {
                    key: "nodeBegin",
                    value: function(t, e, n) {
                        t.path.push(n)
                    }
                }, {
                    key: "nodeEnd",
                    value: function(t) {
                        t.path.pop()
                    }
                }, {
                    key: "format_unchanged",
                    value: function() {}
                }, {
                    key: "format_movedestination",
                    value: function() {}
                }, {
                    key: "format_node",
                    value: function(t, e, n) {
                        this.formatDeltaChildren(t, e, n)
                    }
                }, {
                    key: "format_added",
                    value: function(t, e) {
                        t.pushCurrentOp({
                            op: eB.add,
                            value: e[0]
                        })
                    }
                }, {
                    key: "format_modified",
                    value: function(t, e) {
                        t.pushCurrentOp({
                            op: eB.replace,
                            value: e[1]
                        })
                    }
                }, {
                    key: "format_deleted",
                    value: function(t) {
                        t.pushCurrentOp({
                            op: eB.remove
                        })
                    }
                }, {
                    key: "format_moved",
                    value: function(t, e) {
                        var n = e[1];
                        t.pushMoveOp(n)
                    }
                }, {
                    key: "format_textdiff",
                    value: function() {
                        throw Error("Not implemented")
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        var n = {};
                        return this.prepareContext(n), this.recurse(n, t, e), n.result
                    }
                }])
            }(eN);
            var eL = {
                added: eF("green"),
                deleted: eF("red"),
                movedestination: eF("gray"),
                moved: eF("yellow"),
                unchanged: eF("gray"),
                error: eF("white.bgRed"),
                textDiffLine: eF("gray")
            };
            ! function(t) {
                function e() {
                    tK(this, e);
                    var t = tZ(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t.includeMoveDestinations = !1, t
                }
                tQ(e, t), tW(e, [{
                    key: "prepareContext",
                    value: function(t) {
                        tY(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.indent = function(t) {
                            this.indentLevel = (this.indentLevel || 0) + (void 0 === t ? 1 : t), this.indentPad = Array(this.indentLevel + 1).join("  "), this.outLine()
                        }, t.outLine = function() {
                            this.buffer.push("\n" + (this.indentPad || ""))
                        }, t.out = function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            for (var r = 0, o = e.length; r < o; r++) {
                                var i = e[r].split("\n").join("\n" + (this.indentPad || ""));
                                this.color && this.color[0] && (i = this.color[0](i)), this.buffer.push(i)
                            }
                        }, t.pushColor = function(t) {
                            this.color = this.color || [], this.color.unshift(t)
                        }, t.popColor = function() {
                            this.color = this.color || [], this.color.shift()
                        }
                    }
                }, {
                    key: "typeFormattterErrorFormatter",
                    value: function(t, e) {
                        t.pushColor(eL.error), t.out("[ERROR]" + e), t.popColor()
                    }
                }, {
                    key: "formatValue",
                    value: function(t, e) {
                        t.out(JSON.stringify(e, null, 2))
                    }
                }, {
                    key: "formatTextDiffString",
                    value: function(t, e) {
                        var n = this.parseTextDiff(e);
                        t.indent();
                        for (var r = 0, o = n.length; r < o; r++) {
                            var i = n[r];
                            t.pushColor(eL.textDiffLine), t.out(i.location.line + "," + i.location.chr + " "), t.popColor();
                            for (var l = i.pieces, s = 0, a = l.length; s < a; s++) {
                                var c = l[s];
                                t.pushColor(eL[c.type]), t.out(c.text), t.popColor()
                            }
                            r < o - 1 && t.outLine()
                        }
                        t.indent(-1)
                    }
                }, {
                    key: "rootBegin",
                    value: function(t, e, n) {
                        t.pushColor(eL[e]), "node" === e && (t.out("array" === n ? "[" : "{"), t.indent())
                    }
                }, {
                    key: "rootEnd",
                    value: function(t, e, n) {
                        "node" === e && (t.indent(-1), t.out("array" === n ? "]" : "}")), t.popColor()
                    }
                }, {
                    key: "nodeBegin",
                    value: function(t, e, n, r, o) {
                        t.pushColor(eL[r]), t.out(n + ": "), "node" === r && (t.out("array" === o ? "[" : "{"), t.indent())
                    }
                }, {
                    key: "nodeEnd",
                    value: function(t, e, n, r, o, i) {
                        "node" === r && (t.indent(-1), t.out("array" === o ? "]" : "}" + (i ? "" : ","))), i || t.outLine(), t.popColor()
                    }
                }, {
                    key: "format_unchanged",
                    value: function(t, e, n) {
                        void 0 !== n && this.formatValue(t, n)
                    }
                }, {
                    key: "format_movedestination",
                    value: function(t, e, n) {
                        void 0 !== n && this.formatValue(t, n)
                    }
                }, {
                    key: "format_node",
                    value: function(t, e, n) {
                        this.formatDeltaChildren(t, e, n)
                    }
                }, {
                    key: "format_added",
                    value: function(t, e) {
                        this.formatValue(t, e[0])
                    }
                }, {
                    key: "format_modified",
                    value: function(t, e) {
                        t.pushColor(eL.deleted), this.formatValue(t, e[0]), t.popColor(), t.out(" => "), t.pushColor(eL.added), this.formatValue(t, e[1]), t.popColor()
                    }
                }, {
                    key: "format_deleted",
                    value: function(t, e) {
                        this.formatValue(t, e[0])
                    }
                }, {
                    key: "format_moved",
                    value: function(t, e) {
                        t.out("==> " + e[1])
                    }
                }, {
                    key: "format_textdiff",
                    value: function(t, e) {
                        this.formatTextDiffString(t, e[0])
                    }
                }])
            }(eN);
            let eV = new eE({
                    arrays: {
                        detectMove: !1,
                        includeValueOnMove: !1
                    },
                    textDiff: {
                        minLength: 1
                    }
                }),
                eH = ["docChanged", "isGeneric", "scrolledIntoView", "selectionSet", "storedMarksSet"];

            function eU(t) {
                return {
                    type: t.type,
                    empty: t.empty,
                    anchor: t.anchor,
                    head: t.head,
                    from: t.from,
                    to: t.to
                }
            }

            function eJ(t) {
                return ("00" + t).slice(-2)
            }
            let eG = t => {
                    let e = new Date(t);
                    return [eJ(e.getHours()), eJ(e.getMinutes()), eJ(e.getSeconds()), ("000" + e.getMilliseconds()).slice(-3)].join(":")
                },
                eK = /(&lt;\/?[\w\d\s="']+&gt;)/gim,
                eW = t => t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(eK, "<span style='color: cadetblue;'>$&</span>"),
                eY = t_(new Map),
                eQ = t_([]),
                eZ = t_(void 0),
                eX = t_(0);

            function e1() {
                eY.set(new Map), eQ.set([]), eZ.set(void 0)
            }
            let e0 = ["jsonID", "empty", "anchor", "from", "head", "to"],
                e2 = ["$anchor", "$head", "$cursor", "$to", "$from"],
                e3 = ["nodeAfter", "nodeBefore", "textOffset"];

            function e5(t) {
                return e0.reduce((e, n) => (e[n] = t[n], e), {})
            }

            function e6(t) {
                return e0.concat(e2).reduce((e, n) => {
                    let r = t[n];
                    if (r && e2.includes(n)) {
                        let t = {};
                        e3.forEach(e => {
                            t[e] = r[e]
                        }), r = Object.assign(Object.assign({}, r), t)
                    }
                    return e[n] = r, e
                }, {})
            }

            function e4(t, e, n, r, o) {
                let i = o ? [...o.path, t] : [];
                return {
                    id: "[".concat(i.join(","), "]"),
                    index: t,
                    key: e,
                    value: n,
                    depth: r,
                    collapsed: !0,
                    type: e9(n),
                    path: i,
                    parentId: o ? o.id : null,
                    circularOfId: null,
                    children: []
                }
            }

            function e9(t) {
                if (Array.isArray(t)) return "array";
                if (t instanceof Map) return "map";
                if (t instanceof Set) return "set";
                if (t instanceof Date) return "date";
                if (null === t) return "null";
                else return typeof t
            }

            function e7(t, e, n, r, o, i, l, s, a, c, f) {
                var u;
                if ((null == (u = f.omitKeys) ? void 0 : u.includes(e)) || f.maxDepth && r > f.maxDepth) return null;
                let d = e4(t, e, n, r, i),
                    p = s.get(d.id);
                if (o ? d.collapsed = !1 : p && !c ? d.collapsed = p.collapsed : f.shouldExpandNode && (d.collapsed = !f.shouldExpandNode(d)), l.set(d.id, d), function(t, e, n, r) {
                        if (e) {
                            if (t.collapsed && (null == e ? void 0 : e.collapsed)) return !1;
                            else if (r.stopCircularRecursion) {
                                if (r.isCircularNode) return r.isCircularNode(t, n);
                                else if ("object" === t.type || "array" === t.type) {
                                    let e = n.get(t.value);
                                    if (e && t.id !== e.id) return t.circularOfId = e.id, !1;
                                    n.set(t.value, t)
                                }
                            }
                        }
                        return !0
                    }(d, i, a, f)) {
                    let t = f.mapChildren && f.mapChildren(n, e9(n), d);
                    d.children = (null != t ? t : function(t, e) {
                        switch (e) {
                            case "array":
                                return t.map((t, e) => [e.toString(), t]);
                            case "map":
                                return Array.from(t.entries()).map((t, e) => {
                                    let [n, r] = t;
                                    return ["[map entry ".concat(e, "]"), {
                                        "[key]": n,
                                        "[value]": r
                                    }]
                                });
                            case "set":
                                return Array.from(t.values()).map((t, e) => ["[set entry ".concat(e, "]"), t]);
                            case "object":
                                return Object.entries(t);
                            default:
                                return []
                        }
                    }(n, e9(n))).map((t, e) => {
                        let [n, o] = t;
                        return e7(e, n, o, r + 1, !1, d, l, s, a, c, f)
                    }).filter(t => null !== t)
                }
                return d
            }
            let e8 = t => {
                    let e = t_(t),
                        n = function(t, e, n) {
                            let r = !Array.isArray(t),
                                o = r ? [t] : t;
                            if (!o.every(Boolean)) throw Error("derived() expects stores as input, got a falsy value");
                            let i = e.length < 2;
                            return {
                                subscribe: t_(void 0, (t, n) => {
                                    let l = !1,
                                        s = [],
                                        a = 0,
                                        f = c,
                                        u = () => {
                                            if (a) return;
                                            f();
                                            let o = e(r ? s[0] : s, t, n);
                                            i ? t(o) : f = h(o) ? o : c
                                        },
                                        d = o.map((t, e) => g(t, t => {
                                            s[e] = t, a &= ~(1 << e), l && u()
                                        }, () => {
                                            a |= 1 << e
                                        }));
                                    return l = !0, u(),
                                        function() {
                                            p(d), f(), l = !1
                                        }
                                }).subscribe
                            }
                        }(e, t => t.recursionOpts);
                    return {
                        props: e,
                        recursionOpts: n,
                        setProps(t) {
                            e.set(t)
                        },
                        formatValue(t, n) {
                            let {
                                valueFormatter: r
                            } = m(e), o = r ? r(t, n) : void 0;
                            if (o) return o;
                            switch (n.type) {
                                case "array":
                                    return "".concat(n.circularOfId ? "circular" : "", " [] ").concat(t.length, " items");
                                case "object":
                                    return "".concat(n.circularOfId ? "circular" : "", " {} ").concat(Object.keys(t).length, " keys");
                                case "map":
                                case "set":
                                    return "".concat(n.circularOfId ? "circular" : "", " () ").concat(t.size, " entries");
                                case "date":
                                    return "".concat(t.toISOString());
                                case "string":
                                    return '"'.concat(t, '"');
                                case "boolean":
                                    return t ? "true" : "false";
                                case "symbol":
                                    return String(t);
                                default:
                                    return t
                            }
                        }
                    }
                },
                nt = () => {
                    let t = t_(null);
                    return {
                        set: t.set,
                        subscribe: t.subscribe
                    }
                },
                ne = t => {
                    let e = e4(0, "root", [], 0, null),
                        n = t_(e),
                        r = t_(new Map),
                        o = t_(new Map);
                    return {
                        tree: n,
                        treeMap: r,
                        defaultRootNode: e,
                        init(t, i, l) {
                            t ? n.set(t) : n.set(e), r.set(i), o.set(l)
                        },
                        getNode: t => m(r).get(t),
                        toggleCollapse(e) {
                            let n = m(r).get(e);
                            if (!n) return void console.warn("Attempted to collapse non-existent node: ".concat(e));
                            let o = Object.assign(Object.assign({}, n), {
                                collapsed: !n.collapsed
                            });
                            r.update(t => new Map(t.set(n.id, o)));
                            let i = m(t.recursionOpts);
                            i && this.expandNodeChildren(o, i)
                        },
                        expandNodeChildren(t, e) {
                            let n = this.getNode((null == t ? void 0 : t.parentId) || "") || null;
                            if (!n) throw Error("No parent in expandNodeChildren for node: " + t);
                            let i = new Map(m(r)),
                                l = m(r),
                                s = m(o),
                                a = e7(t.index, t.key, t.value, t.depth, !t.collapsed, n, i, l, s, !1, e);
                            a && (n.children = n.children.map(t => t.id === a.id ? a : t), i.set(a.id, a), i.set(n.id, n), r.set(i), o.set(s))
                        },
                        expandAllNodesToNode(t) {
                            let e = new Map(m(r));
                            ! function t(e, n) {
                                n && (e.set(n.id, Object.assign(Object.assign({}, n), {
                                    collapsed: !1
                                })), n.parentId && t(e, e.get(n.parentId)))
                            }(e, e.get(t)), r.set(e)
                        }
                    }
                };

            function nn(t) {
                O(t, "svelte-ngcjq5", "ul.svelte-ngcjq5.svelte-ngcjq5{display:flex;flex-direction:column;height:max-content;list-style:none;padding:0;padding-left:var(--tree-view-left-indent);margin:0;width:100%}li.svelte-ngcjq5.svelte-ngcjq5{align-items:baseline;display:flex;height:max-content;line-height:var(--tree-view-line-height);list-style:none;width:100%}li.svelte-ngcjq5+li.svelte-ngcjq5{margin-top:0.25em}.empty-block.svelte-ngcjq5.svelte-ngcjq5{visibility:hidden}.node-key.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base0D);margin-right:var(--tree-view-key-margin-right)}.node-key.has-children.svelte-ngcjq5.svelte-ngcjq5{cursor:pointer}.node-key.p-left.svelte-ngcjq5.svelte-ngcjq5{padding-left:1.1em}.node-value.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base0B);margin-right:0.5em;word-break:break-all}.node-value[data-type=number].svelte-ngcjq5.svelte-ngcjq5,.node-value[data-type=boolean].svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base09)}.node-value[data-type=null].svelte-ngcjq5.svelte-ngcjq5,.node-value[data-type=undefined].svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base08)}.node-value.expanded.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base03)}.node-value.has-children.svelte-ngcjq5.svelte-ngcjq5{cursor:pointer}.arrow-btn.svelte-ngcjq5.svelte-ngcjq5{background:transparent;border:0;color:var(--tree-view-base0D);cursor:pointer;margin-right:0.7em;padding:0;transition:all 150ms ease 0s;transform:rotateZ(90deg);transform-origin:47% 43%;position:relative;line-height:1.1em;font-size:0.75em}.arrow-btn.collapsed.svelte-ngcjq5.svelte-ngcjq5{transform:rotateZ(0deg)}.buttons.svelte-ngcjq5.svelte-ngcjq5{display:flex;flex-wrap:wrap}.log-copy-button.svelte-ngcjq5.svelte-ngcjq5{background:transparent;border:0;color:var(--tree-view-base0D);cursor:pointer;margin:0;padding:0 0.5em}.log-copy-button.svelte-ngcjq5.svelte-ngcjq5:hover{background:rgba(255, 162, 177, 0.4);border-radius:2px;color:var(--tree-view-base07)}")
            }

            function nr(t, e, n) {
                let r = t.slice();
                return r[14] = e[n], r
            }

            function no(t) {
                let e, n, r, o, i;
                return {
                    c() {
                        e = S("button"), n = N("▶"), P(e, "class", r = j("arrow-btn ".concat(t[0].collapsed ? "collapsed" : "")) + " svelte-ngcjq5")
                    },
                    m(r, l) {
                        E(r, e, l), C(e, n), o || (i = T(e, "click", t[9]), o = !0)
                    },
                    p(t, n) {
                        1 & n && r !== (r = j("arrow-btn ".concat(t[0].collapsed ? "collapsed" : "")) + " svelte-ngcjq5") && P(e, "class", r)
                    },
                    d(t) {
                        t && q(e), o = !1, i()
                    }
                }
            }

            function ni(t) {
                let e, n = t[5].formatValue(t[0].value, t[0]) + "";
                return {
                    c() {
                        e = N(n)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, r) {
                        1 & r && n !== (n = t[5].formatValue(t[0].value, t[0]) + "") && I(e, n)
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function nl(t) {
                let e, n, r;
                var o = t[3];

                function i(t, e) {
                    return {
                        props: {
                            value: t[0].value,
                            node: t[0],
                            defaultFormatter: t[10]
                        }
                    }
                }
                return o && (e = new o(i(t))), {
                    c() {
                        e && td(e.$$.fragment), n = R()
                    },
                    m(t, o) {
                        e && tp(e, t, o), E(t, n, o), r = !0
                    },
                    p(t, r) {
                        if (8 & r && o !== (o = t[3])) {
                            if (e) {
                                ti();
                                let t = e;
                                ta(t.$$.fragment, 1, 0, () => {
                                    th(t, 1)
                                }), tl()
                            }
                            o ? (td((e = new o(i(t))).$$.fragment), ts(e.$$.fragment, 1), tp(e, n.parentNode, n)) : e = null
                        } else if (o) {
                            let n = {};
                            1 & r && (n.value = t[0].value), 1 & r && (n.node = t[0]), e.$set(n)
                        }
                    },
                    i(t) {
                        r || (e && ts(e.$$.fragment, t), r = !0)
                    },
                    o(t) {
                        e && ta(e.$$.fragment, t), r = !1
                    },
                    d(t) {
                        t && q(n), e && th(e, t)
                    }
                }
            }

            function ns(t) {
                let e, n, r;
                return {
                    c() {
                        (e = S("button")).textContent = "log", P(e, "class", "log-copy-button svelte-ngcjq5")
                    },
                    m(o, i) {
                        E(o, e, i), n || (r = T(e, "click", t[7]), n = !0)
                    },
                    p: c,
                    d(t) {
                        t && q(e), n = !1, r()
                    }
                }
            }

            function na(t) {
                let e, n, r;
                return {
                    c() {
                        (e = S("button")).textContent = "copy", P(e, "class", "log-copy-button svelte-ngcjq5")
                    },
                    m(o, i) {
                        E(o, e, i), n || (r = T(e, "click", t[8]), n = !0)
                    },
                    p: c,
                    d(t) {
                        t && q(e), n = !1, r()
                    }
                }
            }

            function nc(t) {
                let e, n, r, o = tc(t[0].children),
                    i = [];
                for (let e = 0; e < o.length; e += 1) i[e] = nf(nr(t, o, e));
                let l = t => ta(i[t], 1, 1, () => {
                    i[t] = null
                });
                return {
                    c() {
                        e = S("li"), n = S("ul");
                        for (let t = 0; t < i.length; t += 1) i[t].c();
                        P(n, "class", "svelte-ngcjq5"), P(e, "class", "row svelte-ngcjq5")
                    },
                    m(t, o) {
                        E(t, e, o), C(e, n);
                        for (let t = 0; t < i.length; t += 1) i[t] && i[t].m(n, null);
                        r = !0
                    },
                    p(t, e) {
                        if (1 & e) {
                            let r;
                            for (r = 0, o = tc(t[0].children); r < o.length; r += 1) {
                                let l = nr(t, o, r);
                                i[r] ? (i[r].p(l, e), ts(i[r], 1)) : (i[r] = nf(l), i[r].c(), ts(i[r], 1), i[r].m(n, null))
                            }
                            for (ti(), r = o.length; r < i.length; r += 1) l(r);
                            tl()
                        }
                    },
                    i(t) {
                        if (!r) {
                            for (let t = 0; t < o.length; t += 1) ts(i[t]);
                            r = !0
                        }
                    },
                    o(t) {
                        i = i.filter(Boolean);
                        for (let t = 0; t < i.length; t += 1) ta(i[t]);
                        r = !1
                    },
                    d(t) {
                        t && q(e), D(i, t)
                    }
                }
            }

            function nf(t) {
                let e, n;
                return e = new np({
                    props: {
                        id: t[14].id
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        1 & n && (r.id = t[14].id), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function nu(t) {
                var e;
                let n, r, o, i, l, s, a, c, f, u, d, h, v, g, m, y, b, $, x, w = t[0].key + "",
                    k = t[2] && no(t),
                    _ = [nl, ni],
                    j = [];

                function O(t, e) {
                    return +!t[3]
                }
                f = j[c = +!t[3]] = _[c](t);
                let D = t[1].showLogButton && ns(t),
                    M = t[1].showCopyButton && na(t),
                    z = !t[0].collapsed && t[2] && nc(t);
                return {
                    c() {
                        n = S("li"), k && k.c(), r = A(), o = S("div"), i = N(w), l = N(":"), s = A(), a = S("div"), f.c(), d = A(), h = S("div"), D && D.c(), v = A(), M && M.c(), m = A(), z && z.c(), y = R(), P(o, "class", "node-key svelte-ngcjq5"), P(o, "role", "presentation"), F(o, "has-children", t[2]), F(o, "p-left", !t[2]), P(a, "class", "node-value svelte-ngcjq5"), P(a, "data-type", u = t[0].type), P(a, "role", "presentation"), F(a, "expanded", !t[0].collapsed && t[2]), F(a, "has-children", t[2]), P(h, "class", "buttons svelte-ngcjq5"), P(n, "class", "row svelte-ngcjq5"), P(n, "data-tree-id", g = t[0].id), F(n, "collapsed", t[0].collapsed && t[2])
                    },
                    m(e, f) {
                        E(e, n, f), k && k.m(n, null), C(n, r), C(n, o), C(o, i), C(o, l), C(n, s), C(n, a), j[c].m(a, null), C(n, d), C(n, h), D && D.m(h, null), C(h, v), M && M.m(h, null), E(e, m, f), z && z.m(e, f), E(e, y, f), b = !0, $ || (x = [T(o, "click", t[9]), T(a, "click", t[9])], $ = !0)
                    },
                    p(t, e) {
                        var l;
                        let [s] = e;
                        t[2] ? k ? k.p(t, s) : ((k = no(t)).c(), k.m(n, r)) : k && (k.d(1), k = null), (!b || 1 & s) && w !== (w = t[0].key + "") && I(i, w), (!b || 4 & s) && F(o, "has-children", t[2]), (!b || 4 & s) && F(o, "p-left", !t[2]);
                        let d = c;
                        (c = +!t[3]) === d ? j[c].p(t, s) : (ti(), ta(j[d], 1, 1, () => {
                            j[d] = null
                        }), tl(), (f = j[c]) ? f.p(t, s) : (f = j[c] = _[c](t)).c(), ts(f, 1), f.m(a, null)), (!b || 1 & s && u !== (u = t[0].type)) && P(a, "data-type", u), (!b || 5 & s) && F(a, "expanded", !t[0].collapsed && t[2]), (!b || 4 & s) && F(a, "has-children", t[2]), t[1].showLogButton ? D ? D.p(t, s) : ((D = ns(t)).c(), D.m(h, v)) : D && (D.d(1), D = null), t[1].showCopyButton ? M ? M.p(t, s) : ((M = na(t)).c(), M.m(h, null)) : M && (M.d(1), M = null), (!b || 1 & s && g !== (g = t[0].id)) && P(n, "data-tree-id", g), (!b || 5 & s) && F(n, "collapsed", t[0].collapsed && t[2]), !t[0].collapsed && t[2] ? z ? (z.p(t, s), 5 & s && ts(z, 1)) : ((z = nc(t)).c(), ts(z, 1), z.m(y.parentNode, y)) : z && (ti(), ta(z, 1, 1, () => {
                            z = null
                        }), tl())
                    },
                    i(t) {
                        b || (ts(f), ts(z), b = !0)
                    },
                    o(t) {
                        ta(f), ta(z), b = !1
                    },
                    d(t) {
                        t && (q(n), q(m), q(y)), k && k.d(), j[c].d(), D && D.d(), M && M.d(), z && z.d(t), $ = !1, p(x)
                    }
                }
            }

            function nd(t, e, n) {
                let r, o, i, l, s, a, f = c;
                t.$$.on_destroy.push(() => f());
                let {
                    id: u
                } = e, {
                    treeStore: d,
                    propsStore: p,
                    rootElementStore: h
                } = J("svelte-tree-view");
                return y(t, h, t => n(12, l = t)), d.treeMap.subscribe(t => {
                    let e = t.get(u);
                    e && s !== e && n(0, s = e)
                }), t.$$set = t => {
                    "id" in t && n(11, u = t.id)
                }, t.$$.update = () => {
                    if (2048 & t.$$.dirty) {
                        let t = d.getNode(u);
                        if (!t) throw Error("[svelte-tree-view] TreeViewNode.svelte received undefined node from treeMapStore whereas it should be already unmounted!");
                        n(0, s = t)
                    }
                    1 & t.$$.dirty && n(2, r = s && s.children.length > 0), 2 & t.$$.dirty && n(3, i = a.valueComponent)
                }, n(4, o = p.props), f(), f = g(o, t => n(1, a = t)), [s, a, r, i, o, p, h, function() {
                    console.info("%c [svelte-tree-view]: Property added to window._node", "color: #b8e248"), console.log(s.value);
                    try {
                        "undefined" != typeof window && (window._node = s.value)
                    } catch (t) {
                        console.error("Failed to set _node, window was undefined")
                    }
                }, function() {
                    try {
                        navigator.clipboard.writeText(JSON.stringify(s.value))
                    } catch (t) {
                        console.error("Copying node to clipboard failed: ", t)
                    }
                }, function() {
                    var t;
                    r ? d.toggleCollapse(s.id) : s.circularOfId && (d.expandAllNodesToNode(s.circularOfId), null == (t = null == l ? void 0 : l.querySelector('li[data-tree-id="'.concat(s.circularOfId, '"]'))) || t.scrollIntoView())
                }, function(t) {
                    return p.formatValue(t, s)
                }, u]
            }
            class np extends tg {
                constructor(t) {
                    super(), tv(this, t, nd, nu, v, {
                        id: 11
                    }, nn)
                }
            }

            function nh(t) {
                O(t, "svelte-167awo5", ":root{--tree-view-font-family:'Helvetica Neue', 'Calibri Light', Roboto, sans-serif;--tree-view-font-size:13px;--tree-view-left-indent:0.875em;--tree-view-line-height:1.1;--tree-view-key-margin-right:0.5em}ul.svelte-167awo5{background:var(--tree-view-base00);font-family:var(--tree-view-font-family);font-size:var(--tree-view-font-size);height:max-content;list-style:none;margin:0;padding:0;width:max-content}")
            }

            function nv(t, e, n) {
                let r = t.slice();
                return r[18] = e[n], r
            }

            function ng(t) {
                let e, n;
                return e = new np({
                    props: {
                        id: t[18].id
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        4 & n && (r.id = t[18].id), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function nm(t) {
                let e, n, r, o = tc(t[2].children),
                    i = [];
                for (let e = 0; e < o.length; e += 1) i[e] = ng(nv(t, o, e));
                let l = t => ta(i[t], 1, 1, () => {
                    i[t] = null
                });
                return {
                    c() {
                        e = S("ul");
                        for (let t = 0; t < i.length; t += 1) i[t].c();
                        P(e, "class", n = j("".concat(t[3].class || "", " svelte-tree-view")) + " svelte-167awo5")
                    },
                    m(n, o) {
                        E(n, e, o);
                        for (let t = 0; t < i.length; t += 1) i[t] && i[t].m(e, null);
                        t[13](e), r = !0
                    },
                    p(t, s) {
                        let [a] = s;
                        if (4 & a) {
                            let n;
                            for (n = 0, o = tc(t[2].children); n < o.length; n += 1) {
                                let r = nv(t, o, n);
                                i[n] ? (i[n].p(r, a), ts(i[n], 1)) : (i[n] = ng(r), i[n].c(), ts(i[n], 1), i[n].m(e, null))
                            }
                            for (ti(), n = o.length; n < i.length; n += 1) l(n);
                            tl()
                        }(!r || 8 & a && n !== (n = j("".concat(t[3].class || "", " svelte-tree-view")) + " svelte-167awo5")) && P(e, "class", n)
                    },
                    i(t) {
                        if (!r) {
                            for (let t = 0; t < o.length; t += 1) ts(i[t]);
                            r = !0
                        }
                    },
                    o(t) {
                        i = i.filter(Boolean);
                        for (let t = 0; t < i.length; t += 1) ta(i[t]);
                        r = !1
                    },
                    d(n) {
                        n && q(e), D(i, n), t[13](null)
                    }
                }
            }

            function ny(t, e, n) {
                var r;
                let o, i, l = c;
                t.$$.on_destroy.push(() => l());
                let {
                    data: s,
                    theme: a,
                    showLogButton: u = !1,
                    showCopyButton: d = !1,
                    valueComponent: p,
                    recursionOpts: h = {},
                    valueFormatter: v
                } = e, y = null, b = {
                    maxDepth: 16,
                    omitKeys: [],
                    stopCircularRecursion: !1,
                    shouldExpandNode: () => !1
                }, $ = {
                    showLogButton: u,
                    showCopyButton: d,
                    valueComponent: p,
                    recursionOpts: { ...b,
                        ...h
                    },
                    valueFormatter: v
                }, x = e8($), w = nt(), k = ne(x);
                return U("svelte-tree-view", {
                    propsStore: x,
                    rootElementStore: w,
                    treeStore: k
                }), V(() => {
                    w.set(y)
                }), t.$$set = t => {
                    n(3, e = f(f({}, e), _(t))), "data" in t && n(4, s = t.data), "theme" in t && n(5, a = t.theme), "showLogButton" in t && n(6, u = t.showLogButton), "showCopyButton" in t && n(7, d = t.showCopyButton), "valueComponent" in t && n(8, p = t.valueComponent), "recursionOpts" in t && n(9, h = t.recursionOpts), "valueFormatter" in t && n(10, v = t.valueFormatter)
                }, t.$$.update = () => {
                    if (5568 & t.$$.dirty && n(12, $ = {
                            showLogButton: u,
                            showCopyButton: d,
                            valueComponent: p,
                            valueFormatter: v,
                            recursionOpts: $.recursionOpts
                        }), 6672 & t.$$.dirty) {
                        let t = { ...b,
                                ...h
                            },
                            e = (null === n(11, r = null == $ ? void 0 : $.recursionOpts) || void 0 === r ? void 0 : r.shouldExpandNode) !== t.shouldExpandNode,
                            o = m(k.treeMap),
                            {
                                treeMap: i,
                                tree: l,
                                iteratedValues: a
                            } = function(t, e, n, r) {
                                let o = new Map,
                                    i = new Map,
                                    l = e7(-1, "root", t, 0, !0, null, o, e, i, r, n);
                                return {
                                    treeMap: o,
                                    tree: l,
                                    iteratedValues: i
                                }
                            }(s, o, t, e);
                        k.init(l, i, a), n(12, $.recursionOpts = t, $), x.setProps($)
                    }
                    if (33 & t.$$.dirty && a && y) {
                        let t;
                        for (t in a) {
                            let e = a[t];
                            y && t.includes("base") && e && y.style.setProperty("--tree-view-".concat(t), e)
                        }
                    }
                }, n(1, o = k.tree), l(), l = g(o, t => n(2, i = t)), e = _(e), [y, o, i, e, s, a, u, d, p, h, v, r, $, function(t) {
                    W[t ? "unshift" : "push"](() => {
                        n(0, y = t)
                    })
                }]
            }
            class nb extends tg {
                constructor(t) {
                    super(), tv(this, t, ny, nm, v, {
                        data: 4,
                        theme: 5,
                        showLogButton: 6,
                        showCopyButton: 7,
                        valueComponent: 8,
                        recursionOpts: 9,
                        valueFormatter: 10
                    }, nh)
                }
            }

            function n$(t) {
                O(t, "svelte-fdudio", ".split-view.svelte-fdudio{border-top:1px solid rgba(255, 162, 177, 0.2);color:#fff;display:flex;height:calc(100% - var(--height-tabs-menu));width:100%}.split-view h2{color:rgb(187, 145, 163);font-family:var(--font-sans);font-size:var(--font-medium);font-weight:400;letter-spacing:1px;margin:0;text-transform:uppercase}.split-view > .left-panel{display:flex;flex-direction:column;flex-grow:1;overflow:scroll;padding:1em}.split-view > .right-panel{border-left:1px solid rgba(255, 162, 177, 0.2);display:flex;flex-direction:column;flex-grow:1;overflow:scroll;padding:1em}.split-view .hidden{visibility:hidden}")
            }
            let nx = t => ({}),
                nw = t => ({
                    class: "right-panel"
                }),
                nk = t => ({}),
                n_ = t => ({
                    class: "left-panel"
                });

            function nj(t) {
                let e, n, r, o = t[1].left,
                    i = b(o, t, t[0], n_),
                    l = t[1].right,
                    s = b(l, t, t[0], nw);
                return {
                    c() {
                        e = S("section"), i && i.c(), n = A(), s && s.c(), P(e, "class", "split-view svelte-fdudio")
                    },
                    m(t, o) {
                        E(t, e, o), i && i.m(e, null), C(e, n), s && s.m(e, null), r = !0
                    },
                    p(t, e) {
                        let [n] = e;
                        i && i.p && (!r || 1 & n) && w(i, o, t, t[0], r ? x(o, t[0], n, nk) : k(t[0]), n_), s && s.p && (!r || 1 & n) && w(s, l, t, t[0], r ? x(l, t[0], n, nx) : k(t[0]), nw)
                    },
                    i(t) {
                        r || (ts(i, t), ts(s, t), r = !0)
                    },
                    o(t) {
                        ta(i, t), ta(s, t), r = !1
                    },
                    d(t) {
                        t && q(e), i && i.d(t), s && s.d(t)
                    }
                }
            }

            function nC(t, e, n) {
                let {
                    $$slots: r = {},
                    $$scope: o
                } = e;
                return t.$$set = t => {
                    "$$scope" in t && n(0, o = t.$$scope)
                }, [o, r]
            }
            class nO extends tg {
                constructor(t) {
                    super(), tv(this, t, nC, nj, v, {}, n$)
                }
            }

            function nE(t) {
                O(t, "svelte-it3v6s", "button.svelte-it3v6s{background:transparent;border:0;border-radius:2px;color:#d3d3d9;cursor:pointer;font-family:var(--font-family);font-size:var(--font-small);font-weight:400;padding:6px 10px;text-transform:uppercase}button.svelte-it3v6s:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button.selected.svelte-it3v6s{background:rgba(255, 162, 177, 0.4)}")
            }

            function nq(t) {
                let e, n, r, o, i, l = t[3].default,
                    s = b(l, t, t[2], null);
                return {
                    c() {
                        e = S("button"), s && s.c(), P(e, "class", n = j("".concat(t[1].class || "")) + " svelte-it3v6s"), F(e, "selected", t[0])
                    },
                    m(n, l) {
                        E(n, e, l), s && s.m(e, null), r = !0, o || (i = [T(e, "click", t[4]), T(e, "mouseover", t[5]), T(e, "mouseenter", t[6]), T(e, "mouseleave", t[7]), T(e, "focus", t[8])], o = !0)
                    },
                    p(t, o) {
                        let [i] = o;
                        s && s.p && (!r || 4 & i) && w(s, l, t, t[2], r ? x(l, t[2], i, null) : k(t[2]), null), (!r || 2 & i && n !== (n = j("".concat(t[1].class || "")) + " svelte-it3v6s")) && P(e, "class", n), (!r || 3 & i) && F(e, "selected", t[0])
                    },
                    i(t) {
                        r || (ts(s, t), r = !0)
                    },
                    o(t) {
                        ta(s, t), r = !1
                    },
                    d(t) {
                        t && q(e), s && s.d(t), o = !1, p(i)
                    }
                }
            }

            function nD(t, e, n) {
                let {
                    $$slots: r = {},
                    $$scope: o
                } = e, {
                    selected: i = !1
                } = e;
                return t.$$set = t => {
                    n(1, e = f(f({}, e), _(t))), "selected" in t && n(0, i = t.selected), "$$scope" in t && n(2, o = t.$$scope)
                }, e = _(e), [i, e, o, r, function(e) {
                    G.call(this, t, e)
                }, function(e) {
                    G.call(this, t, e)
                }, function(e) {
                    G.call(this, t, e)
                }, function(e) {
                    G.call(this, t, e)
                }, function(e) {
                    G.call(this, t, e)
                }]
            }
            class nS extends tg {
                constructor(t) {
                    super(), tv(this, t, nD, nq, v, {
                        selected: 0
                    }, nE)
                }
            }

            function nM(t) {
                O(t, "svelte-8c7oqn", '@charset "UTF-8";.top-row.svelte-8c7oqn{align-items:center;display:flex;justify-content:space-between}.left-panel[slot=left].svelte-8c7oqn{overflow:scroll}.right-panel[slot=right].svelte-8c7oqn{border-left:1px solid rgba(255, 162, 177, 0.2);flex-grow:0;min-width:200px;width:200px}.split-view .selection-btn{height:24px;width:35px}.caret-icon.svelte-8c7oqn::before{content:"▶"}.caret-icon.expanded.svelte-8c7oqn::before{content:"▼"}.no-marks.svelte-8c7oqn{color:#85d9ef;margin:0.5em 0 1.25em 1em}.split-view .tree-view{margin:0.5em 0 1.25em 0}')
            }

            function nN(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function nA(t) {
                let e, n, r, o, i, l, s, a;
                return (i = new nS({
                    props: {
                        $$slots: {
                            default: [nN]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[6]), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[0],
                        showLogButton: !0,
                        showCopyButton: !0,
                        valueFormatter: nB
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Current doc", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "top-row svelte-8c7oqn"), P(e, "slot", "left"), P(e, "class", "left-panel svelte-8c7oqn")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        1024 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        1 & e && (r.data = t[0]), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function nR(t) {
                let e;
                return {
                    c() {
                        P(e = S("span"), "class", "caret-icon svelte-8c7oqn"), F(e, "expanded", t[5])
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, n) {
                        32 & n && F(e, "expanded", t[5])
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function nT(t) {
                let e, n;
                return e = new nb({
                    props: {
                        class: "tree-view",
                        data: t[2]
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        4 & n && (r.data = t[2]), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function nP(t) {
                let e;
                return {
                    c() {
                        (e = S("div")).textContent = "No active marks", P(e, "class", "no-marks svelte-8c7oqn")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p: c,
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function nz(t) {
                let e, n, r, o, i, l, s, a, c, f, u, d, p, h, v, g, m, y, b;
                (i = new nS({
                    props: {
                        class: "selection-btn",
                        $$slots: {
                            default: [nR]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[7]), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[1]
                    }
                });
                let $ = [nP, nT],
                    x = [];

                function w(t, e) {
                    return +(0 !== t[2].length)
                }
                return p = x[d = w(t)] = $[d](t), y = new nb({
                    props: {
                        class: "tree-view",
                        data: {
                            nodeSize: t[3],
                            childCount: t[4]
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Selection", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), a = A(), c = S("div"), (f = S("h2")).textContent = "Active marks", u = A(), p.c(), h = A(), v = S("div"), (g = S("h2")).textContent = "Document stats", m = A(), td(y.$$.fragment), P(n, "class", "top-row svelte-8c7oqn"), P(e, "slot", "right"), P(e, "class", "right-panel svelte-8c7oqn")
                    },
                    m(t, p) {
                        E(t, e, p), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), C(e, a), C(e, c), C(c, f), C(c, u), x[d].m(c, null), C(e, h), C(e, v), C(v, g), C(v, m), tp(y, v, null), b = !0
                    },
                    p(t, e) {
                        let n = {};
                        1056 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        2 & e && (r.data = t[1]), s.$set(r);
                        let o = d;
                        (d = w(t)) === o ? x[d].p(t, e) : (ti(), ta(x[o], 1, 1, () => {
                            x[o] = null
                        }), tl(), (p = x[d]) ? p.p(t, e) : (p = x[d] = $[d](t)).c(), ts(p, 1), p.m(c, null));
                        let l = {};
                        24 & e && (l.data = {
                            nodeSize: t[3],
                            childCount: t[4]
                        }), y.$set(l)
                    },
                    i(t) {
                        b || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), ts(p), ts(y.$$.fragment, t), b = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), ta(p), ta(y.$$.fragment, t), b = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s), x[d].d(), th(y)
                    }
                }
            }

            function nI(t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [nz],
                            left: [nA]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        1087 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function nB(t, e) {
                if ("object" === e.type && t.type) return "{} ".concat(t.type)
            }

            function nF(t, e, n) {
                let {
                    view: r
                } = ty("editor-view"), o = r.state.doc.toJSON(), i = e5(r.state.selection), l = r.state, s = [], a = r.state.doc.nodeSize, c = r.state.doc.childCount, f = !1;
                return eZ.subscribe(t => {
                    if (!t) return;
                    let {
                        state: e
                    } = t;
                    l = e, n(0, o = e.doc.toJSON()), n(1, i = f ? e6(e.selection) : e5(e.selection)), n(2, s = function(t) {
                        if (t.selection.empty) {
                            let e = t.selection.$from,
                                n = t.storedMarks;
                            return n ? n.map(t => t.type.name) : e.marks().map(t => t.type.name)
                        } {
                            let e = t.selection.$head,
                                n = t.selection.$anchor,
                                r = new Set;
                            return e.marks().forEach(t => r.add(t.type.name)), n.marks().forEach(t => r.add(t.type.name)), Array.from(r)
                        }
                    }(e)), n(3, a = e.doc.nodeSize), n(4, c = e.doc.childCount)
                }), [o, i, s, a, c, f, function() {
                    console.log(o), window._doc = o
                }, function() {
                    n(5, f = !f), f ? n(1, i = e6(l.selection)) : n(1, i = e5(l.selection))
                }]
            }
            class nL extends tg {
                constructor(t) {
                    super(), tv(this, t, nF, nI, v, {}, nM)
                }
            }

            function nV(t, e, n) {
                if ("array" === e) return []
            }

            function nH(t, e) {
                if ("array" === e && 0 === t[1] && 0 === t[2] || "array" === e && "string" == typeof t[0] && 0 === t[1] && 2 === t[2] || "array" === e && 1 === t.length && "object" == typeof t[0]) return [];
                if ("object" !== e || "a" !== t._t) return;
                let n = [];
                for (let e in t) "_t" !== e && ("_" === e.charAt(0) ? n.push([e.substr(1), t[e]]) : n.push([e, t[e]]));
                return n
            }

            function nU(t) {
                O(t, "svelte-vbjxb8", '@charset "UTF-8";ul.svelte-vbjxb8.svelte-vbjxb8{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-vbjxb8.svelte-vbjxb8{transition:background 0.7s ease}li.svelte-vbjxb8.svelte-vbjxb8:hover{background:rgba(255, 162, 177, 0.4);color:#fff}li.selected.svelte-vbjxb8.svelte-vbjxb8{background:rgba(255, 162, 177, 0.4)}li.svelte-vbjxb8+li.svelte-vbjxb8{border-top:1px solid rgb(96, 76, 104)}button.svelte-vbjxb8.svelte-vbjxb8{background:transparent;border:0;color:#d3d3d9;cursor:pointer;display:flex;font-family:monospace;font-size:var(--font-medium);justify-content:space-between;padding:6px 18px;text-transform:uppercase;width:100%}button.p-left.svelte-vbjxb8.svelte-vbjxb8{margin-left:1em}.caret-icon.svelte-vbjxb8.svelte-vbjxb8::before{content:"▶"}.caret-icon.expanded.svelte-vbjxb8.svelte-vbjxb8::before{content:"▼"}')
            }

            function nJ(t, e, n) {
                let r = t.slice();
                return r[6] = e[n], r[8] = n, r
            }

            function nG(t, e, n) {
                let r = t.slice();
                return r[9] = e[n], r
            }

            function nK(t) {
                let e, n, r, o = t[6].entries.length + "";
                return {
                    c() {
                        e = N("["), n = N(o), r = N("]")
                    },
                    m(t, o) {
                        E(t, e, o), E(t, n, o), E(t, r, o)
                    },
                    p(t, e) {
                        1 & e && o !== (o = t[6].entries.length + "") && I(n, o)
                    },
                    d(t) {
                        t && (q(e), q(n), q(r))
                    }
                }
            }

            function nW(t) {
                let e, n, r = t[6].topEntry.trs.length - 1 + "";
                return {
                    c() {
                        e = N("+"), n = N(r)
                    },
                    m(t, r) {
                        E(t, e, r), E(t, n, r)
                    },
                    p(t, e) {
                        1 & e && r !== (r = t[6].topEntry.trs.length - 1 + "") && I(n, r)
                    },
                    d(t) {
                        t && (q(e), q(n))
                    }
                }
            }

            function nY(t) {
                let e;
                return {
                    c() {
                        P(e = S("span"), "class", "caret-icon svelte-vbjxb8"), F(e, "expanded", t[6].expanded)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, n) {
                        1 & n && F(e, "expanded", t[6].expanded)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function nQ(t) {
                let e, n = [],
                    r = new Map,
                    o = tc(t[6].entries),
                    i = t => {
                        var e;
                        return null == (e = t[9]) ? void 0 : e.id
                    };
                for (let e = 0; e < o.length; e += 1) {
                    let l = nG(t, o, e),
                        s = i(l);
                    r.set(s, n[e] = nZ(s, l))
                }
                return {
                    c() {
                        for (let t = 0; t < n.length; t += 1) n[t].c();
                        e = R()
                    },
                    m(t, r) {
                        for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(t, r);
                        E(t, e, r)
                    },
                    p(t, l) {
                        7 & l && (o = tc(t[6].entries), n = tu(n, l, i, 1, t, o, r, e.parentNode, tf, nZ, e, nG))
                    },
                    d(t) {
                        t && q(e);
                        for (let e = 0; e < n.length; e += 1) n[e].d(t)
                    }
                }
            }

            function nZ(t, e) {
                var n;
                let r, o, i, l, s, a, c = (null == (n = e[9]) ? void 0 : n.timeStr) + "";

                function f() {
                    return e[5](e[9], e[8])
                }
                return {
                    key: t,
                    first: null,
                    c() {
                        var t;
                        r = S("li"), o = S("button"), i = N(c), l = A(), P(o, "class", "p-left svelte-vbjxb8"), P(r, "class", "svelte-vbjxb8"), F(r, "selected", e[1] === (null == (t = e[9]) ? void 0 : t.id)), this.first = r
                    },
                    m(t, e) {
                        E(t, r, e), C(r, o), C(o, i), C(r, l), s || (a = T(o, "click", f), s = !0)
                    },
                    p(t, n) {
                        var o, l;
                        e = t, 1 & n && c !== (c = (null == (o = e[9]) ? void 0 : o.timeStr) + "") && I(i, c), 3 & n && F(r, "selected", e[1] === (null == (l = e[9]) ? void 0 : l.id))
                    },
                    d(t) {
                        t && q(r), s = !1, a()
                    }
                }
            }

            function nX(t, e) {
                var n;
                let r, o, i, l, s, a, c, f, u, d, h, v = (null == (n = e[6]) || null == (n = n.topEntry) ? void 0 : n.timeStr) + "",
                    g = e[6].isGroup && nK(e),
                    m = e[6].topEntry && e[6].topEntry.trs.length > 1 && nW(e),
                    y = e[6].isGroup && e[6].entries.length > 1 && nY(e);

                function b() {
                    return e[3](e[6], e[8])
                }

                function $() {
                    return e[4](e[6])
                }
                let x = e[6].isGroup && e[6].expanded && nQ(e);
                return {
                    key: t,
                    first: null,
                    c() {
                        var t;
                        r = S("li"), o = S("button"), i = S("span"), l = N(v), s = A(), g && g.c(), a = A(), m && m.c(), c = A(), y && y.c(), f = A(), x && x.c(), u = R(), P(o, "class", "svelte-vbjxb8"), F(o, "is-group", e[6].isGroup), P(r, "class", "svelte-vbjxb8"), F(r, "selected", !e[6].expanded && e[1] === (null == (t = e[6]) || null == (t = t.topEntry) ? void 0 : t.id)), this.first = r
                    },
                    m(t, e) {
                        E(t, r, e), C(r, o), C(o, i), C(i, l), C(i, s), g && g.m(i, null), C(i, a), m && m.m(i, null), C(o, c), y && y.m(o, null), E(t, f, e), x && x.m(t, e), E(t, u, e), d || (h = [T(o, "click", b), T(o, "dblclick", $)], d = !0)
                    },
                    p(t, n) {
                        var s, c;
                        e = t, 1 & n && v !== (v = (null == (s = e[6]) || null == (s = s.topEntry) ? void 0 : s.timeStr) + "") && I(l, v), e[6].isGroup ? g ? g.p(e, n) : ((g = nK(e)).c(), g.m(i, a)) : g && (g.d(1), g = null), e[6].topEntry && e[6].topEntry.trs.length > 1 ? m ? m.p(e, n) : ((m = nW(e)).c(), m.m(i, null)) : m && (m.d(1), m = null), e[6].isGroup && e[6].entries.length > 1 ? y ? y.p(e, n) : ((y = nY(e)).c(), y.m(o, null)) : y && (y.d(1), y = null), 1 & n && F(o, "is-group", e[6].isGroup), 3 & n && F(r, "selected", !e[6].expanded && e[1] === (null == (c = e[6]) || null == (c = c.topEntry) ? void 0 : c.id)), e[6].isGroup && e[6].expanded ? x ? x.p(e, n) : ((x = nQ(e)).c(), x.m(u.parentNode, u)) : x && (x.d(1), x = null)
                    },
                    d(t) {
                        t && (q(r), q(f), q(u)), g && g.d(), m && m.d(), y && y.d(), x && x.d(t), d = !1, p(h)
                    }
                }
            }

            function n1(t) {
                let e, n = [],
                    r = new Map,
                    o = tc(t[0]),
                    i = t => t[6].id;
                for (let e = 0; e < o.length; e += 1) {
                    let l = nJ(t, o, e),
                        s = i(l);
                    r.set(s, n[e] = nX(s, l))
                }
                return {
                    c() {
                        e = S("ul");
                        for (let t = 0; t < n.length; t += 1) n[t].c();
                        P(e, "class", "svelte-vbjxb8")
                    },
                    m(t, r) {
                        E(t, e, r);
                        for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
                    },
                    p(t, l) {
                        let [s] = l;
                        7 & s && (o = tc(t[0]), n = tu(n, s, i, 1, t, o, r, e, tf, nX, null, nJ))
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e);
                        for (let t = 0; t < n.length; t += 1) n[t].d()
                    }
                }
            }

            function n0(t, e, n) {
                let {
                    listItems: r = [],
                    selectedId: o
                } = e, i = H();
                return t.$$set = t => {
                    "listItems" in t && n(0, r = t.listItems), "selectedId" in t && n(1, o = t.selectedId)
                }, [r, o, i, (t, e) => {
                    var n;
                    return i("click-item", {
                        id: null == t || null == (n = t.topEntry) ? void 0 : n.id,
                        groupIdx: e,
                        wasTopNode: !0
                    })
                }, t => {
                    var e;
                    return i("dblclick-item", {
                        id: null == t || null == (e = t.topEntry) ? void 0 : e.id
                    })
                }, (t, e) => i("click-item", {
                    id: null == t ? void 0 : t.id,
                    groupIdx: e,
                    wasTopNode: !1
                })]
            }
            class n2 extends tg {
                constructor(t) {
                    super(), tv(this, t, n0, n1, v, {
                        listItems: 0,
                        selectedId: 1
                    }, nU)
                }
            }

            function n3(t) {
                O(t, "svelte-1a1oqej", ".added.svelte-1a1oqej.svelte-1a1oqej{display:inline-block;background:#87cc86;border-radius:1px;color:green;padding:1px 2px;text-indent:0;min-height:1ex}.deleted.svelte-1a1oqej.svelte-1a1oqej{display:inline-block;background:#d66363;border-radius:1px;color:#222;padding:1px 2px;text-decoration:line-through;text-indent:0;min-height:1ex}.updated.svelte-1a1oqej.svelte-1a1oqej{word-break:break-all}.updated.svelte-1a1oqej .added.svelte-1a1oqej{background:#eaea37}.arrow.svelte-1a1oqej.svelte-1a1oqej{color:#87cc86}")
            }

            function n5(t, e, n) {
                let r = t.slice();
                return r[3] = e[n], r
            }

            function n6(t) {
                let e, n = t[0](t[1]) + "";
                return {
                    c() {
                        e = N(n)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, r) {
                        3 & r && n !== (n = t[0](t[1]) + "") && I(e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function n4(t) {
                let e;

                function n(t, e) {
                    return 1 === t[1].length ? rt : 2 === t[1].length ? n8 : 3 === t[1].length && 0 === t[1][1] && 0 === t[1][2] ? n7 : 3 === t[1].length && 2 === t[1][2] ? n9 : void 0
                }
                let r = n(t),
                    o = r && r(t);
                return {
                    c() {
                        o && o.c(), e = R()
                    },
                    m(t, n) {
                        o && o.m(t, n), E(t, e, n)
                    },
                    p(t, i) {
                        r === (r = n(t)) && o ? o.p(t, i) : (o && o.d(1), (o = r && r(t)) && (o.c(), o.m(e.parentNode, e)))
                    },
                    d(t) {
                        t && q(e), o && o.d(t)
                    }
                }
            }

            function n9(t) {
                let e, n = tc(rl(t[1][0])),
                    r = [];
                for (let e = 0; e < n.length; e += 1) r[e] = ro(n5(t, n, e));
                return {
                    c() {
                        e = S("span");
                        for (let t = 0; t < r.length; t += 1) r[t].c();
                        P(e, "class", "updated svelte-1a1oqej")
                    },
                    m(t, n) {
                        E(t, e, n);
                        for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, null)
                    },
                    p(t, o) {
                        if (2 & o) {
                            let i;
                            for (i = 0, n = tc(rl(t[1][0])); i < n.length; i += 1) {
                                let l = n5(t, n, i);
                                r[i] ? r[i].p(l, o) : (r[i] = ro(l), r[i].c(), r[i].m(e, null))
                            }
                            for (; i < r.length; i += 1) r[i].d(1);
                            r.length = n.length
                        }
                    },
                    d(t) {
                        t && q(e), D(r, t)
                    }
                }
            }

            function n7(t) {
                let e, n, r = rs(t[1][0]) + "";
                return {
                    c() {
                        e = S("span"), n = N(r), P(e, "class", "deleted svelte-1a1oqej")
                    },
                    m(t, r) {
                        E(t, e, r), C(e, n)
                    },
                    p(t, e) {
                        2 & e && r !== (r = rs(t[1][0]) + "") && I(n, r)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function n8(t) {
                let e, n, r, o, i, l, s, a, c = rs(t[1][0]) + "",
                    f = rs(t[1][1]) + "";
                return {
                    c() {
                        e = S("span"), n = S("span"), r = N(c), o = A(), (i = S("span")).textContent = "=>", l = A(), s = S("span"), a = N(f), P(n, "class", "deleted svelte-1a1oqej"), P(i, "class", "arrow svelte-1a1oqej"), P(s, "class", "added svelte-1a1oqej"), P(e, "class", "updated svelte-1a1oqej")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(e, o), C(e, i), C(e, l), C(e, s), C(s, a)
                    },
                    p(t, e) {
                        2 & e && c !== (c = rs(t[1][0]) + "") && I(r, c), 2 & e && f !== (f = rs(t[1][1]) + "") && I(a, f)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rt(t) {
                let e, n, r = rs(t[1][0]) + "";
                return {
                    c() {
                        e = S("span"), n = N(r), P(e, "class", "added svelte-1a1oqej")
                    },
                    m(t, r) {
                        E(t, e, r), C(e, n)
                    },
                    p(t, e) {
                        2 & e && r !== (r = rs(t[1][0]) + "") && I(n, r)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function re(t) {
                let e, n, r = t[3].raw + "";
                return {
                    c() {
                        e = S("span"), n = N(r)
                    },
                    m(t, r) {
                        E(t, e, r), C(e, n)
                    },
                    p(t, e) {
                        2 & e && r !== (r = t[3].raw + "") && I(n, r)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rn(t) {
                let e, n, r = t[3].add + "";
                return {
                    c() {
                        e = S("span"), n = N(r), P(e, "class", "added svelte-1a1oqej")
                    },
                    m(t, r) {
                        E(t, e, r), C(e, n)
                    },
                    p(t, e) {
                        2 & e && r !== (r = t[3].add + "") && I(n, r)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rr(t) {
                let e, n, r = t[3].delete + "";
                return {
                    c() {
                        e = S("span"), n = N(r), P(e, "class", "deleted svelte-1a1oqej")
                    },
                    m(t, r) {
                        E(t, e, r), C(e, n)
                    },
                    p(t, e) {
                        2 & e && r !== (r = t[3].delete + "") && I(n, r)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function ro(t) {
                let e;

                function n(t, e) {
                    return t[3].delete ? rr : t[3].add ? rn : re
                }
                let r = n(t),
                    o = r(t);
                return {
                    c() {
                        o.c(), e = R()
                    },
                    m(t, n) {
                        o.m(t, n), E(t, e, n)
                    },
                    p(t, i) {
                        r === (r = n(t)) && o ? o.p(t, i) : (o.d(1), (o = r(t)) && (o.c(), o.m(e.parentNode, e)))
                    },
                    d(t) {
                        t && q(e), o.d(t)
                    }
                }
            }

            function ri(t) {
                let e, n;

                function r(t, n) {
                    return (2 & n && (e = null), null == e && (e = !!Array.isArray(t[1])), e) ? n4 : n6
                }
                let o = r(t, -1),
                    i = o(t);
                return {
                    c() {
                        i.c(), n = R()
                    },
                    m(t, e) {
                        i.m(t, e), E(t, n, e)
                    },
                    p(t, e) {
                        let [l] = e;
                        o === (o = r(t, l)) && i ? i.p(t, l) : (i.d(1), (i = o(t)) && (i.c(), i.m(n.parentNode, n)))
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(n), i.d(t)
                    }
                }
            }

            function rl(t) {
                return t.split(/\n/gm).slice(1).map(t => ({
                    [t.startsWith("-") ? "delete" : t.startsWith("+") ? "add" : "raw"]: t.slice(1).replace(/\s/gm, "\xa0")
                }))
            }

            function rs(t) {
                if ("string" == typeof t) return t;
                if (null === t) return "null";
                let e = JSON.stringify(t);
                return void 0 === e ? "undefined" : e.length > 22 ? "".concat(e.slice(0, 15), "…").concat(e.slice(-5)) : e
            }

            function ra(t, e, n) {
                let r, {
                    node: o,
                    defaultFormatter: i
                } = e;
                return t.$$set = t => {
                    "node" in t && n(2, o = t.node), "defaultFormatter" in t && n(0, i = t.defaultFormatter)
                }, t.$$.update = () => {
                    4 & t.$$.dirty && n(1, r = o.value)
                }, [i, r, o]
            }
            class rc extends tg {
                constructor(t) {
                    super(), tv(this, t, ra, ri, v, {
                        node: 2,
                        defaultFormatter: 0
                    }, n3)
                }
            }

            function rf(t) {
                O(t, "svelte-r7zw98", ".left-panel.svelte-r7zw98.svelte-r7zw98{flex-grow:0;padding:0;min-width:190px;width:190px}.title-container.svelte-r7zw98.svelte-r7zw98{align-items:center;display:flex}.transaction-buttons.svelte-r7zw98.svelte-r7zw98{margin-left:2rem}.entry-row.svelte-r7zw98+.entry-row.svelte-r7zw98{margin-top:1em}.selection-html.svelte-r7zw98.svelte-r7zw98{font-weight:100;margin:0.5em 0 0 0;padding:0}.equal-diff.svelte-r7zw98.svelte-r7zw98{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}")
            }

            function ru(t, e, n) {
                let r = t.slice();
                return r[13] = e[n], r
            }

            function rd(t) {
                var e;
                let n, r, o;
                return (r = new n2({
                    props: {
                        listItems: t[4],
                        selectedId: (null == (e = t[0]) ? void 0 : e.id) || ""
                    }
                })).$on("click-item", t[7]), r.$on("dblclick-item", t[8]), {
                    c() {
                        n = S("div"), td(r.$$.fragment), P(n, "slot", "left"), P(n, "class", "left-panel svelte-r7zw98")
                    },
                    m(t, e) {
                        E(t, n, e), tp(r, n, null), o = !0
                    },
                    p(t, e) {
                        var n;
                        let o = {};
                        16 & e && (o.listItems = t[4]), 1 & e && (o.selectedId = (null == (n = t[0]) ? void 0 : n.id) || ""), r.$set(o)
                    },
                    i(t) {
                        o || (ts(r.$$.fragment, t), o = !0)
                    },
                    o(t) {
                        ta(r.$$.fragment, t), o = !1
                    },
                    d(t) {
                        t && q(n), th(r)
                    }
                }
            }

            function rp(t) {
                let e;
                return {
                    c() {
                        (e = S("div")).textContent = "Docs are equal.", P(e, "class", "equal-diff svelte-r7zw98")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p: c,
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rh(t) {
                let e, n, r, o, i, l, s, a, c, f, u, d, p, h = t[0].contentDiff && rv(t),
                    v = t[0].selectionDiff && rm(t),
                    g = t[0].selectionHtml.length > 0 && rb(t),
                    m = t[1] && rx(t);
                (u = new nS({
                    props: {
                        $$slots: {
                            default: [r_]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[5]);
                let y = t[1] && rj(t);
                return {
                    c() {
                        e = S("div"), h && h.c(), n = A(), v && v.c(), r = A(), g && g.c(), o = A(), i = S("div"), l = S("div"), (s = S("h2")).textContent = "Transactions", a = A(), c = S("div"), m && m.c(), f = A(), td(u.$$.fragment), d = A(), y && y.c(), P(c, "class", "transaction-buttons svelte-r7zw98"), P(l, "class", "title-container svelte-r7zw98"), P(i, "class", "entry-row svelte-r7zw98")
                    },
                    m(t, b) {
                        E(t, e, b), h && h.m(e, null), C(e, n), v && v.m(e, null), C(e, r), g && g.m(e, null), C(e, o), C(e, i), C(i, l), C(l, s), C(l, a), C(l, c), m && m.m(c, null), C(c, f), tp(u, c, null), C(i, d), y && y.m(i, null), p = !0
                    },
                    p(t, l) {
                        t[0].contentDiff ? h ? (h.p(t, l), 1 & l && ts(h, 1)) : ((h = rv(t)).c(), ts(h, 1), h.m(e, n)) : h && (ti(), ta(h, 1, 1, () => {
                            h = null
                        }), tl()), t[0].selectionDiff ? v ? (v.p(t, l), 1 & l && ts(v, 1)) : ((v = rm(t)).c(), ts(v, 1), v.m(e, r)) : v && (ti(), ta(v, 1, 1, () => {
                            v = null
                        }), tl()), t[0].selectionHtml.length > 0 ? g ? (g.p(t, l), 1 & l && ts(g, 1)) : ((g = rb(t)).c(), ts(g, 1), g.m(e, o)) : g && (ti(), ta(g, 1, 1, () => {
                            g = null
                        }), tl()), t[1] ? m ? (m.p(t, l), 2 & l && ts(m, 1)) : ((m = rx(t)).c(), ts(m, 1), m.m(c, f)) : m && (ti(), ta(m, 1, 1, () => {
                            m = null
                        }), tl());
                        let s = {};
                        65538 & l && (s.$$scope = {
                            dirty: l,
                            ctx: t
                        }), u.$set(s), t[1] ? y ? (y.p(t, l), 2 & l && ts(y, 1)) : ((y = rj(t)).c(), ts(y, 1), y.m(i, null)) : y && (ti(), ta(y, 1, 1, () => {
                            y = null
                        }), tl())
                    },
                    i(t) {
                        p || (ts(h), ts(v), ts(g), ts(m), ts(u.$$.fragment, t), ts(y), p = !0)
                    },
                    o(t) {
                        ta(h), ta(v), ta(g), ta(m), ta(u.$$.fragment, t), ta(y), p = !1
                    },
                    d(t) {
                        t && q(e), h && h.d(), v && v.d(), g && g.d(), m && m.d(), th(u), y && y.d()
                    }
                }
            }

            function rv(t) {
                let e, n, r, o, i, l, s, a;
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [rg]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[0].contentDiff,
                        showLogButton: !0,
                        showCopyButton: !0,
                        valueComponent: rc,
                        recursionOpts: {
                            maxDepth: 12,
                            mapChildren: nH,
                            shouldExpandNode: rq
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Doc diff", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "title-container svelte-r7zw98"), P(e, "class", "entry-row svelte-r7zw98")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        65536 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        1 & e && (r.data = t[0].contentDiff), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function rg(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rm(t) {
                let e, n, r, o, i, l, s, a;
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [ry]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[0].selectionDiff,
                        valueComponent: rc,
                        recursionOpts: {
                            mapChildren: nV,
                            shouldExpandNode: rD
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Selection diff", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "title-container svelte-r7zw98"), P(e, "class", "entry-row svelte-r7zw98")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        65536 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        1 & e && (r.data = t[0].selectionDiff), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function ry(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rb(t) {
                let e, n, r, o, i, l, s, a, c, f = t[0].selectionHtml + "";
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [r$]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Selection content", o = A(), td(i.$$.fragment), l = A(), s = S("pre"), a = S("code"), P(n, "class", "title-container svelte-r7zw98"), P(s, "class", "selection-html svelte-r7zw98"), P(e, "class", "entry-row svelte-r7zw98")
                    },
                    m(t, u) {
                        E(t, e, u), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), C(e, s), C(s, a), a.innerHTML = f, c = !0
                    },
                    p(t, e) {
                        let n = {};
                        65536 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n), (!c || 1 & e) && f !== (f = t[0].selectionHtml + "") && (a.innerHTML = f)
                    },
                    i(t) {
                        c || (ts(i.$$.fragment, t), c = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), c = !1
                    },
                    d(t) {
                        t && q(e), th(i)
                    }
                }
            }

            function r$(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rx(t) {
                let e, n, r, o;
                return (e = new nS({
                    props: {
                        $$slots: {
                            default: [rw]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[9]), (r = new nS({
                    props: {
                        $$slots: {
                            default: [rk]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[6]), {
                    c() {
                        td(e.$$.fragment), n = A(), td(r.$$.fragment)
                    },
                    m(t, i) {
                        tp(e, t, i), E(t, n, i), tp(r, t, i), o = !0
                    },
                    p(t, n) {
                        let o = {};
                        65540 & n && (o.$$scope = {
                            dirty: n,
                            ctx: t
                        }), e.$set(o);
                        let i = {};
                        65536 & n && (i.$$scope = {
                            dirty: n,
                            ctx: t
                        }), r.$set(i)
                    },
                    i(t) {
                        o || (ts(e.$$.fragment, t), ts(r.$$.fragment, t), o = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), ta(r.$$.fragment, t), o = !1
                    },
                    d(t) {
                        t && q(n), th(e, t), th(r, t)
                    }
                }
            }

            function rw(t) {
                let e, n = t[2] ? "collapse" : "expand";
                return {
                    c() {
                        e = N(n)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, r) {
                        4 & r && n !== (n = t[2] ? "collapse" : "expand") && I(e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rk(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function r_(t) {
                let e, n = t[1] ? "hide" : "show";
                return {
                    c() {
                        e = N(n)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, r) {
                        2 & r && n !== (n = t[1] ? "hide" : "show") && I(e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rj(t) {
                let e, n, r = tc(t[0].trs),
                    o = [];
                for (let e = 0; e < r.length; e += 1) o[e] = rC(ru(t, r, e));
                let i = t => ta(o[t], 1, 1, () => {
                    o[t] = null
                });
                return {
                    c() {
                        for (let t = 0; t < o.length; t += 1) o[t].c();
                        e = R()
                    },
                    m(t, r) {
                        for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, r);
                        E(t, e, r), n = !0
                    },
                    p(t, n) {
                        if (9 & n) {
                            let l;
                            for (l = 0, r = tc(t[0].trs); l < r.length; l += 1) {
                                let i = ru(t, r, l);
                                o[l] ? (o[l].p(i, n), ts(o[l], 1)) : (o[l] = rC(i), o[l].c(), ts(o[l], 1), o[l].m(e.parentNode, e))
                            }
                            for (ti(), l = r.length; l < o.length; l += 1) i(l);
                            tl()
                        }
                    },
                    i(t) {
                        if (!n) {
                            for (let t = 0; t < r.length; t += 1) ts(o[t]);
                            n = !0
                        }
                    },
                    o(t) {
                        o = o.filter(Boolean);
                        for (let t = 0; t < o.length; t += 1) ta(o[t]);
                        n = !1
                    },
                    d(t) {
                        t && q(e), D(o, t)
                    }
                }
            }

            function rC(t) {
                let e, n;
                return e = new nb({
                    props: {
                        class: "tree-view",
                        data: t[13],
                        showLogButton: !0,
                        showCopyButton: !0,
                        recursionOpts: t[3]
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        1 & n && (r.data = t[13]), 8 & n && (r.recursionOpts = t[3]), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function rO(t) {
                var e;
                let n, r, o, i, l = [rh, rp],
                    s = [];

                function a(t, e) {
                    return +!t[0]
                }
                return o = s[r = +!t[0]] = l[r](t), {
                    c() {
                        n = S("div"), o.c(), P(n, "slot", "right"), P(n, "class", "right-panel")
                    },
                    m(t, e) {
                        E(t, n, e), s[r].m(n, null), i = !0
                    },
                    p(t, e) {
                        var i;
                        let a = r;
                        (r = +!t[0]) === a ? s[r].p(t, e) : (ti(), ta(s[a], 1, 1, () => {
                            s[a] = null
                        }), tl(), (o = s[r]) ? o.p(t, e) : (o = s[r] = l[r](t)).c(), ts(o, 1), o.m(n, null))
                    },
                    i(t) {
                        i || (ts(o), i = !0)
                    },
                    o(t) {
                        ta(o), i = !1
                    },
                    d(t) {
                        t && q(n), s[r].d()
                    }
                }
            }

            function rE(t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [rO],
                            left: [rd]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        65567 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }
            let rq = () => !0,
                rD = () => !0;

            function rS(t, e, n) {
                let r, o, i;
                y(t, eY, t => n(10, o = t)), y(t, eQ, t => n(11, i = t));
                let l, s = !1,
                    {
                        replaceEditorContent: a
                    } = ty("editor-view"),
                    c = !1,
                    f = {
                        maxDepth: 24,
                        stopCircularRecursion: !0,
                        omitKeys: ["schema"],
                        shouldExpandNode: () => c
                    };
                return eZ.subscribe(t => {
                    t && n(0, l = t)
                }), t.$$.update = () => {
                    3072 & t.$$.dirty && n(4, r = i.map(t => ({
                        id: t.id,
                        isGroup: t.isGroup,
                        topEntry: o.get(t.topEntryId),
                        entries: t.entryIds.map(t => o.get(t)),
                        expanded: t.expanded
                    })))
                }, [l, s, c, f, r, function() {
                    n(1, s = !s)
                }, function() {
                    console.info("%c [prosemirror-dev-toolkit]: Property added to window._trs", "color: #b8e248"), console.log(null == l ? void 0 : l.trs), window._trs = null == l ? void 0 : l.trs
                }, function(t) {
                    let {
                        id: e = "",
                        groupIdx: i,
                        wasTopNode: s
                    } = t.detail;
                    if (n(0, l = o.get(e)), !l) return;
                    let a = r[i];
                    a.isGroup && a.entries.length > 1 && s && eQ.update(t => t.map((t, e) => e !== i ? t : Object.assign(Object.assign({}, t), {
                        expanded: !t.expanded
                    })))
                }, function(t) {
                    n(0, l = o.get(t.detail.id || "")), l && a(l.state)
                }, function() {
                    n(2, c = !c), n(3, f = Object.assign(Object.assign({}, f), {
                        shouldExpandNode: () => c
                    }))
                }, o, i]
            }
            class rM extends tg {
                constructor(t) {
                    super(), tv(this, t, rS, rE, v, {}, rf)
                }
            }

            function rN(t) {
                O(t, "svelte-1fq2hhi", "ul.svelte-1fq2hhi.svelte-1fq2hhi{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-1fq2hhi+li.svelte-1fq2hhi{border-top:1px solid rgb(96, 76, 104)}button.svelte-1fq2hhi.svelte-1fq2hhi{background:transparent;border:0;color:#d3d3d9;cursor:pointer;display:flex;font-family:monospace;font-size:var(--font-medium);font-weight:100;padding:6px 18px;text-transform:uppercase;width:100%}button.svelte-1fq2hhi.svelte-1fq2hhi:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button:hover.empty.svelte-1fq2hhi.svelte-1fq2hhi{background:rgb(80, 68, 93)}button.selected.svelte-1fq2hhi.svelte-1fq2hhi{background:rgba(255, 162, 177, 0.4)}button.selected.empty.svelte-1fq2hhi.svelte-1fq2hhi{background:rgb(80, 68, 93)}button.empty.svelte-1fq2hhi.svelte-1fq2hhi{color:#727288}")
            }

            function rA(t, e, n) {
                let r = t.slice();
                return r[4] = e[n], r
            }

            function rR(t) {
                let e, n, r, o, i, l, s = t[4].value + "";

                function a() {
                    return t[3](t[4])
                }
                return {
                    c() {
                        e = S("li"), n = S("button"), r = N(s), o = A(), P(n, "class", "svelte-1fq2hhi"), F(n, "selected", t[1] === t[4].key), F(n, "empty", t[4].empty), P(e, "class", "svelte-1fq2hhi")
                    },
                    m(t, s) {
                        E(t, e, s), C(e, n), C(n, r), C(e, o), i || (l = T(n, "click", a), i = !0)
                    },
                    p(e, o) {
                        t = e, 1 & o && s !== (s = t[4].value + "") && I(r, s), 3 & o && F(n, "selected", t[1] === t[4].key), 1 & o && F(n, "empty", t[4].empty)
                    },
                    d(t) {
                        t && q(e), i = !1, l()
                    }
                }
            }

            function rT(t) {
                let e, n = tc(t[0]),
                    r = [];
                for (let e = 0; e < n.length; e += 1) r[e] = rR(rA(t, n, e));
                return {
                    c() {
                        e = S("ul");
                        for (let t = 0; t < r.length; t += 1) r[t].c();
                        P(e, "class", "svelte-1fq2hhi")
                    },
                    m(t, n) {
                        E(t, e, n);
                        for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, null)
                    },
                    p(t, o) {
                        let [i] = o;
                        if (7 & i) {
                            let o;
                            for (o = 0, n = tc(t[0]); o < n.length; o += 1) {
                                let l = rA(t, n, o);
                                r[o] ? r[o].p(l, i) : (r[o] = rR(l), r[o].c(), r[o].m(e, null))
                            }
                            for (; o < r.length; o += 1) r[o].d(1);
                            r.length = n.length
                        }
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e), D(r, t)
                    }
                }
            }

            function rP(t, e, n) {
                let {
                    listItems: r = [],
                    selectedKey: o,
                    onSelect: i
                } = e;
                return t.$$set = t => {
                    "listItems" in t && n(0, r = t.listItems), "selectedKey" in t && n(1, o = t.selectedKey), "onSelect" in t && n(2, i = t.onSelect)
                }, [r, o, i, t => i(t)]
            }
            class rz extends tg {
                constructor(t) {
                    super(), tv(this, t, rP, rT, v, {
                        listItems: 0,
                        selectedKey: 1,
                        onSelect: 2
                    }, rN)
                }
            }

            function rI(t) {
                O(t, "svelte-9l897d", ".top-row.svelte-9l897d{align-items:center;display:flex;justify-content:space-between;margin-bottom:0.5em}.left-panel[slot=left].svelte-9l897d{flex-grow:0;overflow:scroll;padding:0;min-width:190px;width:190px}.right-panel[slot=right].svelte-9l897d{border-left:1px solid rgba(255, 162, 177, 0.2)}.empty-state.svelte-9l897d{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}")
            }

            function rB(t) {
                var e;
                let n, r, o;
                return r = new rz({
                    props: {
                        listItems: t[4],
                        selectedKey: null == (e = t[0]) ? void 0 : e.key,
                        onSelect: t[5]
                    }
                }), {
                    c() {
                        n = S("div"), td(r.$$.fragment), P(n, "slot", "left"), P(n, "class", "left-panel svelte-9l897d")
                    },
                    m(t, e) {
                        E(t, n, e), tp(r, n, null), o = !0
                    },
                    p(t, e) {
                        var n;
                        let o = {};
                        16 & e && (o.listItems = t[4]), 1 & e && (o.selectedKey = null == (n = t[0]) ? void 0 : n.key), r.$set(o)
                    },
                    i(t) {
                        o || (ts(r.$$.fragment, t), o = !0)
                    },
                    o(t) {
                        ta(r.$$.fragment, t), o = !1
                    },
                    d(t) {
                        t && q(n), th(r)
                    }
                }
            }

            function rF(t) {
                let e, n, r, o, i, l, s, a;
                return (i = new nS({
                    props: {
                        $$slots: {
                            default: [rL]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[6]), (s = new nS({
                    props: {
                        $$slots: {
                            default: [rV]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[7]), {
                    c() {
                        e = S("div"), (n = S("h2")).textContent = "Plugin state", r = A(), o = S("div"), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(e, "class", "top-row svelte-9l897d")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(e, r), C(e, o), tp(i, o, null), C(o, l), tp(s, o, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        2050 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        2048 & e && (r.$$scope = {
                            dirty: e,
                            ctx: t
                        }), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function rL(t) {
                let e, n = t[1] ? "collapse" : "expand";
                return {
                    c() {
                        e = N(n)
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p(t, r) {
                        2 & r && n !== (n = t[1] ? "collapse" : "expand") && I(e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rV(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rH(t) {
                let e;
                return {
                    c() {
                        (e = S("div")).textContent = "Plugin has no state", P(e, "class", "empty-state svelte-9l897d")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p: c,
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rU(t) {
                let e, n;
                return e = new nb({
                    props: {
                        data: t[3],
                        showLogButton: !0,
                        showCopyButton: !0,
                        recursionOpts: t[2]
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        8 & n && (r.data = t[3]), 4 & n && (r.recursionOpts = t[2]), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function rJ(t) {
                var e;
                let n, r, o, i, l, s = t[3] && rF(t),
                    a = [rU, rH],
                    c = [];

                function f(t, e) {
                    return +!t[3]
                }
                return i = c[o = +!t[3]] = a[o](t), {
                    c() {
                        n = S("div"), s && s.c(), r = A(), i.c(), P(n, "slot", "right"), P(n, "class", "right-panel svelte-9l897d")
                    },
                    m(t, e) {
                        E(t, n, e), s && s.m(n, null), C(n, r), c[o].m(n, null), l = !0
                    },
                    p(t, e) {
                        var l;
                        t[3] ? s ? (s.p(t, e), 8 & e && ts(s, 1)) : ((s = rF(t)).c(), ts(s, 1), s.m(n, r)) : s && (ti(), ta(s, 1, 1, () => {
                            s = null
                        }), tl());
                        let f = o;
                        (o = +!t[3]) === f ? c[o].p(t, e) : (ti(), ta(c[f], 1, 1, () => {
                            c[f] = null
                        }), tl(), (i = c[o]) ? i.p(t, e) : (i = c[o] = a[o](t)).c(), ts(i, 1), i.m(n, null))
                    },
                    i(t) {
                        l || (ts(s), ts(i), l = !0)
                    },
                    o(t) {
                        ta(s), ta(i), l = !1
                    },
                    d(t) {
                        t && q(n), s && s.d(), c[o].d()
                    }
                }
            }

            function rG(t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [rJ],
                            left: [rB]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        2079 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function rK(t, e, n) {
                let r, o, {
                        view: i
                    } = ty("editor-view"),
                    l = !1,
                    s = {
                        maxDepth: 10,
                        stopCircularRecursion: !0,
                        shouldExpandNode: () => l
                    },
                    a = i.state,
                    c = a.plugins,
                    f = c[0];
                return eZ.subscribe(t => {
                    t && (n(8, a = t.state), n(9, c = a.plugins), n(0, f = c.find(t => t.key === (null == f ? void 0 : f.key))))
                }), t.$$.update = () => {
                    257 & t.$$.dirty && n(3, r = (null == f ? void 0 : f.getState) ? f.getState(a) : void 0), 768 & t.$$.dirty && n(4, o = c.map(t => ({
                        key: t.key,
                        value: t.key.toUpperCase(),
                        empty: !(t.getState && t.getState(a))
                    })))
                }, [f, l, s, r, o, function(t) {
                    n(0, f = c.find(e => e.key === t.key))
                }, function() {
                    n(1, l = !l), n(2, s = Object.assign(Object.assign({}, s), {
                        shouldExpandNode: () => l
                    }))
                }, function() {
                    window._plugin = [f, r], console.info("%c [prosemirror-dev-toolkit]: Property added to window._plugin", "color: #b8e248"), console.log(f), console.log(r)
                }, a, c]
            }
            class rW extends tg {
                constructor(t) {
                    super(), tv(this, t, rK, rG, v, {}, rI)
                }
            }

            function rY(t) {
                O(t, "svelte-1u2reu1", ".top-row.svelte-1u2reu1{align-items:center;display:flex;justify-content:space-between}.left-panel[slot=left].svelte-1u2reu1{overflow:scroll;padding:1em}.right-panel[slot=right].svelte-1u2reu1{border-left:1px solid rgba(255, 162, 177, 0.2);overflow:scroll;padding:1em}")
            }

            function rQ(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function rZ(t) {
                let e, n, r, o, i, l, s, a;
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [rQ]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[0],
                        showLogButton: !0,
                        showCopyButton: !0,
                        recursionOpts: {
                            stopCircularRecursion: !0
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Nodes", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "top-row svelte-1u2reu1"), P(e, "slot", "left"), P(e, "class", "left-panel svelte-1u2reu1")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        8 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function rX(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function r1(t) {
                let e, n, r, o, i, l, s, a;
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [rX]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), s = new nb({
                    props: {
                        class: "tree-view",
                        data: t[1],
                        showLogButton: !0,
                        showCopyButton: !0,
                        recursionOpts: {
                            stopCircularRecursion: !0
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Marks", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "top-row svelte-1u2reu1"), P(e, "slot", "right"), P(e, "class", "right-panel svelte-1u2reu1")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        8 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function r0(t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [r1],
                            left: [rZ]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        8 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function r2(t) {
                let {
                    view: e
                } = ty("editor-view");
                return [e.state.schema.nodes, e.state.schema.marks]
            }
            class r3 extends tg {
                constructor(t) {
                    super(), tv(this, t, r2, r0, v, {}, rY)
                }
            }

            function r5(t) {
                O(t, "svelte-1un819s", ".doc-node.svelte-1un819s{border-left:1px solid #363755;border-right:1px solid #363755;display:flex;flex-direction:column;padding:0 12px}.doc-node.root.svelte-1un819s{border:0;padding:0}.doc-node-body.svelte-1un819s{background:#363755;color:#222;display:flex;font-size:13px;margin-top:3px}.number-box.svelte-1un819s{padding:3px 6px;background:rgba(255, 255, 255, 0.3)}.node-name.svelte-1un819s{width:100%}button.svelte-1un819s{align-items:center;background:transparent;border:0;color:#222;cursor:pointer;display:flex;height:100%;white-space:pre;width:100%}button.svelte-1un819s:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button.selected.svelte-1un819s{background:rgba(255, 162, 177, 0.4)}ul.svelte-1un819s{list-style:none;margin:0;padding:0}ul.show-borders.svelte-1un819s{border-left:1px solid rgb(96, 76, 104);border-right:1px solid rgb(96, 76, 104)}.inline-children.svelte-1un819s{border-left:1px solid rgb(96, 76, 104);border-right:1px solid rgb(96, 76, 104);display:flex;flex-wrap:wrap;padding:0 12px}.inline-children.svelte-1un819s>.doc-node{flex-grow:1;padding:0}")
            }

            function r6(t, e, n) {
                let r = t.slice();
                return r[15] = e[n], r[17] = n, r
            }

            function r4(t) {
                let e, n;
                return e = new r8({
                    props: {
                        node: t[15],
                        startPos: t[5][t[17]],
                        depth: t[1] + 1
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        4 & n && (r.node = t[15]), 32 & n && (r.startPos = t[5][t[17]]), 2 & n && (r.depth = t[1] + 1), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function r9(t) {
                let e, n, r, o, i, l, s, a, c, f, u, d, h, v, g, m, y, b, $ = tc(t[2].content),
                    x = [];
                for (let e = 0; e < $.length; e += 1) x[e] = r4(r6(t, $, e));
                let w = t => ta(x[t], 1, 1, () => {
                    x[t] = null
                });
                return {
                    c() {
                        e = S("li"), n = S("div"), r = S("div"), o = N(t[0]), i = A(), l = S("div"), s = S("button"), a = N(t[6]), c = A(), f = S("div"), u = N(t[4]), h = A(), v = S("ul");
                        for (let t = 0; t < x.length; t += 1) x[t].c();
                        P(r, "class", "number-box svelte-1un819s"), P(s, "aria-label", "Show node info button"), P(s, "class", "svelte-1un819s"), F(s, "selected", !1), P(l, "class", "node-name svelte-1un819s"), P(f, "class", "number-box svelte-1un819s"), P(n, "class", "doc-node-body svelte-1un819s"), P(n, "style", d = "background: ".concat(t[7])), P(v, "class", "svelte-1un819s"), F(v, "inline-children", t[3]), F(v, "show-borders", t[1] >= 1), P(e, "class", g = j("".concat(t[11].class || "", " doc-node")) + " svelte-1un819s"), F(e, "root", t[8])
                    },
                    m(d, p) {
                        E(d, e, p), C(e, n), C(n, r), C(r, o), C(n, i), C(n, l), C(l, s), C(s, a), C(n, c), C(n, f), C(f, u), C(e, h), C(e, v);
                        for (let t = 0; t < x.length; t += 1) x[t] && x[t].m(v, null);
                        m = !0, y || (b = [T(s, "click", t[9]), T(s, "dblclick", t[10])], y = !0)
                    },
                    p(t, r) {
                        let [i] = r;
                        if ((!m || 1 & i) && I(o, t[0]), (!m || 64 & i) && I(a, t[6]), (!m || 16 & i) && I(u, t[4]), (!m || 128 & i && d !== (d = "background: ".concat(t[7]))) && P(n, "style", d), 38 & i) {
                            let e;
                            for (e = 0, $ = tc(t[2].content); e < $.length; e += 1) {
                                let n = r6(t, $, e);
                                x[e] ? (x[e].p(n, i), ts(x[e], 1)) : (x[e] = r4(n), x[e].c(), ts(x[e], 1), x[e].m(v, null))
                            }
                            for (ti(), e = $.length; e < x.length; e += 1) w(e);
                            tl()
                        }(!m || 8 & i) && F(v, "inline-children", t[3]), (!m || 2 & i) && F(v, "show-borders", t[1] >= 1), (!m || 2048 & i && g !== (g = j("".concat(t[11].class || "", " doc-node")) + " svelte-1un819s")) && P(e, "class", g), (!m || 2304 & i) && F(e, "root", t[8])
                    },
                    i(t) {
                        if (!m) {
                            for (let t = 0; t < $.length; t += 1) ts(x[t]);
                            m = !0
                        }
                    },
                    o(t) {
                        x = x.filter(Boolean);
                        for (let t = 0; t < x.length; t += 1) ta(x[t]);
                        m = !1
                    },
                    d(t) {
                        t && q(e), D(x, t), y = !1, p(b)
                    }
                }
            }

            function r7(t, e, n) {
                let r, o, i, l, s, a, {
                        colors: c,
                        handleNodeClick: u
                    } = ty("doc-view"),
                    {
                        node: d,
                        startPos: p,
                        depth: h
                    } = e,
                    v = 0 === h;
                return t.$$set = t => {
                    n(11, e = f(f({}, e), _(t))), "node" in t && n(12, d = t.node), "startPos" in t && n(0, p = t.startPos), "depth" in t && n(1, h = t.depth)
                }, t.$$.update = () => {
                    4096 & t.$$.dirty && n(2, r = d.content), 4096 & t.$$.dirty && n(7, o = c[d.type.name]), 4096 & t.$$.dirty && n(6, i = d.isText && d.marks.length > 0 ? "".concat(d.type.name, " - [").concat(d.marks.map(t => t.type.name).join(", "), "]") : d.type.name), 4097 & t.$$.dirty && n(5, l = Array(d.childCount).fill(void 0).reduce((t, e, n) => {
                        if (0 === n) return [v ? 0 : p + 1];
                        let r = t[n - 1];
                        return [...t, r + d.child(n - 1).nodeSize]
                    }, [])), 4097 & t.$$.dirty && n(4, s = p + d.nodeSize), 4 & t.$$.dirty && n(3, a = r.content.every(t => t.isInline))
                }, e = _(e), [p, h, r, a, s, l, i, o, v, function() {
                    u(d, p)
                }, function() {
                    u(d, p, !0)
                }, e, d]
            }
            class r8 extends tg {
                constructor(t) {
                    super(), tv(this, t, r7, r9, v, {
                        node: 12,
                        startPos: 0,
                        depth: 1
                    }, r5)
                }
            }
            let ot = ["#EA7C7F", "#67B0C6", "#94BB7F", "#CA9EDB", "#DCDC5D", "#B9CC7C", "#DD97D8", "#FFB761", "#4D8FD1", "#F36E98", "#E45F44", "#A6A4AE", "#FCC047", "#FFC129", "#D3929C", "#4CBCD4", "#8D7BC0"];

            function oe(t) {
                O(t, "svelte-is7zuw", "ul.svelte-is7zuw{list-style:none;margin:0;padding:0}")
            }

            function on(t) {
                let e, n, r;
                return n = new r8({
                    props: {
                        class: t[1].class,
                        node: t[0],
                        startPos: 0,
                        depth: 0
                    }
                }), {
                    c() {
                        e = S("ul"), td(n.$$.fragment), P(e, "class", "svelte-is7zuw")
                    },
                    m(t, o) {
                        E(t, e, o), tp(n, e, null), r = !0
                    },
                    p(t, e) {
                        let [r] = e, o = {};
                        2 & r && (o.class = t[1].class), 1 & r && (o.node = t[0]), n.$set(o)
                    },
                    i(t) {
                        r || (ts(n.$$.fragment, t), r = !0)
                    },
                    o(t) {
                        ta(n.$$.fragment, t), r = !1
                    },
                    d(t) {
                        t && q(e), th(n)
                    }
                }
            }

            function or(t, e, n) {
                let {
                    doc: r,
                    schema: o,
                    selected: i = {
                        type: "",
                        start: 0,
                        end: 0
                    },
                    handleNodeSelect: l
                } = e;
                return tm("doc-view", {
                    selected: i,
                    colors: Object.keys(o.nodes).reduce((t, e, n) => {
                        let r = n >= ot.length ? function(t, e) {
                            let n = t / e;
                            return Math.round(e * (n - Math.floor(n)))
                        }(n, ot.length) : n;
                        return t[e] = ot[r], t
                    }, {}),
                    handleNodeClick: l
                }), t.$$set = t => {
                    n(1, e = f(f({}, e), _(t))), "doc" in t && n(0, r = t.doc), "schema" in t && n(2, o = t.schema), "selected" in t && n(3, i = t.selected), "handleNodeSelect" in t && n(4, l = t.handleNodeSelect)
                }, e = _(e), [r, e, o, i, l]
            }
            class oo extends tg {
                constructor(t) {
                    super(), tv(this, t, or, on, v, {
                        doc: 0,
                        schema: 2,
                        selected: 3,
                        handleNodeSelect: 4
                    }, oe)
                }
            }

            function oi(t) {
                O(t, "svelte-15i66m0", ".top-row.svelte-15i66m0{align-items:center;display:flex;justify-content:space-between}.right-panel[slot=right].svelte-15i66m0{border-left:1px solid rgba(255, 162, 177, 0.2);flex-grow:0;min-width:220px;width:220px}.split-view .m-top{margin-top:0.75em}")
            }

            function ol(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function os(t) {
                let e, n, r, o, i, l, s, a;
                return i = new nS({
                    props: {
                        class: "hidden",
                        $$slots: {
                            default: [ol]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), s = new oo({
                    props: {
                        class: "m-top",
                        doc: t[0],
                        schema: t[2],
                        handleNodeSelect: t[3]
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Current doc", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "top-row svelte-15i66m0"), P(e, "slot", "left"), P(e, "class", "left-panel")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        256 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        1 & e && (r.doc = t[0]), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function oa(t) {
                let e;
                return {
                    c() {
                        e = N("log")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function oc(t) {
                let e, n, r, o, i, l, s, a;
                return (i = new nS({
                    props: {
                        $$slots: {
                            default: [oa]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                })).$on("click", t[4]), s = new nb({
                    props: {
                        class: "m-top",
                        data: t[1],
                        recursionOpts: {
                            shouldExpandNode: ou
                        }
                    }
                }), {
                    c() {
                        e = S("div"), n = S("div"), (r = S("h2")).textContent = "Node info", o = A(), td(i.$$.fragment), l = A(), td(s.$$.fragment), P(n, "class", "top-row svelte-15i66m0"), P(e, "slot", "right"), P(e, "class", "right-panel svelte-15i66m0")
                    },
                    m(t, c) {
                        E(t, e, c), C(e, n), C(n, r), C(n, o), tp(i, n, null), C(e, l), tp(s, e, null), a = !0
                    },
                    p(t, e) {
                        let n = {};
                        256 & e && (n.$$scope = {
                            dirty: e,
                            ctx: t
                        }), i.$set(n);
                        let r = {};
                        2 & e && (r.data = t[1]), s.$set(r)
                    },
                    i(t) {
                        a || (ts(i.$$.fragment, t), ts(s.$$.fragment, t), a = !0)
                    },
                    o(t) {
                        ta(i.$$.fragment, t), ta(s.$$.fragment, t), a = !1
                    },
                    d(t) {
                        t && q(e), th(i), th(s)
                    }
                }
            }

            function of (t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [oc],
                            left: [os]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        259 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }
            let ou = t => "array" !== t.type || t.value.length <= 50;

            function od(t, e, n) {
                let r, o, {
                        view: i
                    } = ty("editor-view"),
                    l = i.state.doc,
                    s = {
                        node: i.state.doc,
                        pos: 0
                    },
                    a = i.state.schema;
                return eZ.subscribe(t => {
                    t && (t.trs.forEach(t => {
                        n(5, s.pos = t.mapping.map(s.pos), s)
                    }), clearTimeout(o), o = setTimeout(() => {
                        n(0, l = t.state.doc);
                        let e = s.pos;
                        try {
                            let t = l.nodeAt(e);
                            n(5, s = {
                                node: t || l,
                                pos: t ? e : 0
                            })
                        } catch (t) {}
                    }, 100))
                }), t.$$.update = () => {
                    32 & t.$$.dirty && n(1, r = s.node.toJSON())
                }, [l, r, a, function(t, e) {
                    var r;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n(5, s = {
                            node: t,
                            pos: e
                        }), !o) return;
                    let l = i.nodeDOM(e);
                    for (; l && !(l instanceof HTMLElement);) l = l.parentElement;
                    if (!l || "none" === getComputedStyle(l).display) return;
                    let a = function t(e) {
                        return e && e !== document.body ? e.scrollHeight !== e.clientHeight ? e : t(e.parentElement) : void 0
                    }(i.dom);
                    if (a) {
                        let t = a.scrollTop,
                            e = a.offsetTop - window.scrollY,
                            n = a.getBoundingClientRect().top - e,
                            r = l.getBoundingClientRect().top - e,
                            o = a.clientHeight / 2;
                        a.scroll(0, t + n + r - o)
                    }
                    let c = i.coordsAtPos(e).top,
                        f = (null == (r = document.querySelector(".floating-dock")) ? void 0 : r.clientHeight) || 0;
                    window.scroll(0, c - f + l.clientHeight + window.scrollY)
                }, function() {
                    console.log(s), window._node = s, console.info("%c [prosemirror-dev-toolkit]: Property added to window._node", "color: #b8e248")
                }, s]
            }
            class op extends tg {
                constructor(t) {
                    super(), tv(this, t, od, of , v, {}, oi)
                }
            }

            function oh(t) {
                O(t, "svelte-969ox4", "ul.svelte-969ox4.svelte-969ox4{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-969ox4+li.svelte-969ox4{border-top:1px solid rgb(96, 76, 104)}li.svelte-969ox4.svelte-969ox4{align-items:center;display:flex;font-family:monospace;padding:6px 18px}input.svelte-969ox4.svelte-969ox4{background:transparent;border:0;color:#fff;height:100%;margin:0;padding:2px;width:100%}.unstyled-btn.svelte-969ox4.svelte-969ox4{background:transparent;border:0;color:#fff;cursor:pointer;display:block;font-family:monospace;margin:0;padding:0;text-align:start;width:100%}.snapshot-btn.svelte-969ox4.svelte-969ox4{background:transparent;border:0;border-radius:3px;color:#d3d3d9;cursor:pointer;display:flex;font-size:11px;padding:6px 18px;text-transform:uppercase}.snapshot-btn.svelte-969ox4.svelte-969ox4:hover{background:rgba(255, 162, 177, 0.4);color:#fff}.ml-2.svelte-969ox4.svelte-969ox4{margin-left:1rem}")
            }

            function ov(t, e, n) {
                let r = t.slice();
                return r[23] = e[n], r
            }

            function og(t) {
                let e, n, r, o, i = t[23].name + "";

                function l() {
                    return t[16](t[23])
                }
                return {
                    c() {
                        e = S("button"), n = N(i), P(e, "class", "unstyled-btn svelte-969ox4"), P(e, "aria-label", "Edit snapshot name button")
                    },
                    m(t, i) {
                        E(t, e, i), C(e, n), r || (o = T(e, "dblclick", l), r = !0)
                    },
                    p(e, r) {
                        t = e, 1 & r && i !== (i = t[23].name + "") && I(n, i)
                    },
                    d(t) {
                        t && q(e), r = !1, o()
                    }
                }
            }

            function om(t) {
                let e, n, r, o;
                return {
                    c() {
                        (e = S("input")).value = n = t[2].name, P(e, "class", "svelte-969ox4")
                    },
                    m(n, i) {
                        E(n, e, i), r || (o = [T(e, "input", t[5]), T(e, "keypress", t[6])], r = !0)
                    },
                    p(t, r) {
                        4 & r && n !== (n = t[2].name) && e.value !== n && (e.value = n)
                    },
                    d(t) {
                        t && q(e), r = !1, p(o)
                    }
                }
            }

            function oy(t) {
                let e;
                return {
                    c() {
                        e = N("Show")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function ob(t) {
                let e;
                return {
                    c() {
                        e = N("Hide")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function o$(t) {
                let e;
                return {
                    c() {
                        e = N("Delete")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function ox(t) {
                let e;
                return {
                    c() {
                        e = N("Confirm Delete")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function ow(t) {
                let e, n, r, o, i, l, s, a, c, f, u, d;

                function h(t, e) {
                    return t[2] && t[2].timestamp === t[23].timestamp ? om : og
                }
                let v = h(t),
                    g = v(t);

                function m(t, e) {
                    var n;
                    return (null == (n = t[1]) ? void 0 : n.timestamp) === t[23].timestamp ? ob : oy
                }
                let y = m(t),
                    b = y(t);

                function $() {
                    return t[17](t[23])
                }

                function x() {
                    return t[18](t[23])
                }

                function w() {
                    return t[19](t[23])
                }

                function k(t, e) {
                    var n;
                    return (null == (n = t[3]) ? void 0 : n.timestamp) === t[23].timestamp ? ox : o$
                }
                let _ = k(t),
                    j = _(t);

                function O() {
                    return t[20](t[23])
                }
                return {
                    c() {
                        e = S("li"), g.c(), n = A(), r = S("button"), b.c(), o = A(), (i = S("button")).textContent = "Restore", l = A(), (s = S("button")).textContent = "Export", a = A(), c = S("button"), j.c(), f = A(), P(r, "class", "snapshot-btn ml-2 svelte-969ox4"), P(i, "class", "snapshot-btn svelte-969ox4"), P(s, "class", "snapshot-btn svelte-969ox4"), P(c, "class", "snapshot-btn svelte-969ox4"), P(e, "class", "svelte-969ox4")
                    },
                    m(t, p) {
                        E(t, e, p), g.m(e, null), C(e, n), C(e, r), b.m(r, null), C(e, o), C(e, i), C(e, l), C(e, s), C(e, a), C(e, c), j.m(c, null), C(e, f), u || (d = [T(r, "click", $), T(i, "click", x), T(s, "click", w), T(c, "click", O)], u = !0)
                    },
                    p(o, i) {
                        v === (v = h(t = o)) && g ? g.p(t, i) : (g.d(1), (g = v(t)) && (g.c(), g.m(e, n))), y !== (y = m(t)) && (b.d(1), (b = y(t)) && (b.c(), b.m(r, null))), _ !== (_ = k(t)) && (j.d(1), (j = _(t)) && (j.c(), j.m(c, null)))
                    },
                    d(t) {
                        t && q(e), g.d(), b.d(), j.d(), u = !1, p(d)
                    }
                }
            }

            function ok(t) {
                let e, n = tc(t[0]),
                    r = [];
                for (let e = 0; e < n.length; e += 1) r[e] = ow(ov(t, n, e));
                return {
                    c() {
                        e = S("ul");
                        for (let t = 0; t < r.length; t += 1) r[t].c();
                        P(e, "class", "svelte-969ox4")
                    },
                    m(t, n) {
                        E(t, e, n);
                        for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, null)
                    },
                    p(t, o) {
                        let [i] = o;
                        if (2047 & i) {
                            let o;
                            for (o = 0, n = tc(t[0]); o < n.length; o += 1) {
                                let l = ov(t, n, o);
                                r[o] ? r[o].p(l, i) : (r[o] = ow(l), r[o].c(), r[o].m(e, null))
                            }
                            for (; o < r.length; o += 1) r[o].d(1);
                            r.length = n.length
                        }
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e), D(r, t)
                    }
                }
            }

            function o_(t, e, n) {
                let r, o, i, {
                        snapshots: l = [],
                        selectedSnapshot: s,
                        onUpdate: a,
                        onView: c,
                        onRestore: f,
                        onExport: u,
                        onDelete: d
                    } = e,
                    p = () => {
                        clearTimeout(i), i = setTimeout(() => {
                            a(r)
                        }, 150)
                    };

                function h(t) {
                    n(2, r = t), n(3, o = void 0)
                }

                function v(t) {
                    (null == s ? void 0 : s.timestamp) === t.timestamp ? c() : c(t), n(3, o = void 0)
                }

                function g(t) {
                    f(t), n(3, o = void 0)
                }

                function m(t) {
                    u(t), n(3, o = void 0)
                }

                function y(t) {
                    o && o.timestamp === t.timestamp ? (d(t), n(3, o = void 0)) : n(3, o = t)
                }
                return t.$$set = t => {
                    "snapshots" in t && n(0, l = t.snapshots), "selectedSnapshot" in t && n(1, s = t.selectedSnapshot), "onUpdate" in t && n(11, a = t.onUpdate), "onView" in t && n(12, c = t.onView), "onRestore" in t && n(13, f = t.onRestore), "onExport" in t && n(14, u = t.onExport), "onDelete" in t && n(15, d = t.onDelete)
                }, [l, s, r, o, h, function(t) {
                    r && (n(2, r.name = t.currentTarget.value, r), p())
                }, function(t) {
                    "Enter" === t.key && r && (a(r), clearTimeout(i), n(2, r = void 0), n(3, o = void 0))
                }, v, g, m, y, a, c, f, u, d, t => h(t), t => v(t), t => g(t), t => m(t), t => y(t)]
            }
            class oj extends tg {
                constructor(t) {
                    super(), tv(this, t, o_, ok, v, {
                        snapshots: 0,
                        selectedSnapshot: 1,
                        onUpdate: 11,
                        onView: 12,
                        onRestore: 13,
                        onExport: 14,
                        onDelete: 15
                    }, oh)
                }
            }

            function oC(t) {
                O(t, "svelte-3jdj5c", ".right-panel[slot=right].svelte-3jdj5c{padding:0}.no-snapshots.svelte-3jdj5c{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}")
            }

            function oO(t) {
                let e, n;
                return e = new oj({
                    props: {
                        snapshots: t[0],
                        selectedSnapshot: t[1],
                        onUpdate: tM,
                        onView: t[4],
                        onRestore: t[3],
                        onExport: tA,
                        onDelete: tR
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        1 & n && (r.snapshots = t[0]), 2 & n && (r.selectedSnapshot = t[1]), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oE(t) {
                let e;
                return {
                    c() {
                        (e = S("div")).textContent = 'Save snapshots by clicking "Save" button.', P(e, "class", "no-snapshots svelte-3jdj5c")
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    p: c,
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function oq(t) {
                let e, n, r, o, i = [oE, oO],
                    l = [];

                function s(t, e) {
                    return +(0 !== t[0].length)
                }
                return r = l[n = s(t)] = i[n](t), {
                    c() {
                        e = S("div"), r.c(), P(e, "slot", "right"), P(e, "class", "right-panel svelte-3jdj5c")
                    },
                    m(t, r) {
                        E(t, e, r), l[n].m(e, null), o = !0
                    },
                    p(t, o) {
                        let a = n;
                        (n = s(t)) === a ? l[n].p(t, o) : (ti(), ta(l[a], 1, 1, () => {
                            l[a] = null
                        }), tl(), (r = l[n]) ? r.p(t, o) : (r = l[n] = i[n](t)).c(), ts(r, 1), r.m(e, null))
                    },
                    i(t) {
                        o || (ts(r), o = !0)
                    },
                    o(t) {
                        ta(r), o = !1
                    },
                    d(t) {
                        t && q(e), l[n].d()
                    }
                }
            }

            function oD(t) {
                let e, n;
                return e = new nO({
                    props: {
                        $$slots: {
                            right: [oq]
                        },
                        $$scope: {
                            ctx: t
                        }
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let [r] = n, o = {};
                        35 & r && (o.$$scope = {
                            dirty: r,
                            ctx: t
                        }), e.$set(o)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oS(t, e, n) {
                let r, o;
                y(t, tC, t => n(0, r = t)), y(t, tO, t => n(1, o = t));
                let {
                    view: i
                } = ty("editor-view");
                return [r, o, i, function(t) {
                    tN(i, t), e1()
                }, t => (function(t, e) {
                    if (e) m(tE) || tE.set(t.state), tD(t, e.doc);
                    else {
                        let e = m(tE);
                        e ? t.updateState(e) : console.error("No previous state to restore!"), tE.set(void 0)
                    }
                    tO.set(e)
                })(i, t)]
            }
            class oM extends tg {
                constructor(t) {
                    super(), tv(this, t, oS, oD, v, {}, oC)
                }
            }

            function oN(t) {
                O(t, "svelte-1quf800", ".floating-dock-wrapper.svelte-1quf800{position:fixed;width:0px;height:0px;top:0px;left:0px;z-index:99999999}.floating-dock.svelte-1quf800{background-color:#363755;position:fixed;z-index:1;box-shadow:rgba(34, 34, 34, 0.3) 0px 0px 4px 0px;left:0px;top:50%;width:100%;height:50%}.resizing-div.svelte-1quf800{position:absolute;z-index:2;opacity:0;top:-5px;height:10px;left:0px;width:100%;cursor:row-resize}.floating-dock-body.svelte-1quf800{height:100%}button.svelte-1quf800{background:rgba(255, 162, 177, 0.6);border:0;border-radius:3px;color:#fff;cursor:pointer;font-size:12px;height:24px;line-height:25px;padding:0 6px;position:absolute}button.svelte-1quf800:hover{background:rgba(255, 162, 177, 0.8)}.copy-btn.svelte-1quf800{right:173px;top:-28px}.save-btn.svelte-1quf800{right:129px;top:-28px}.import-btn.svelte-1quf800{right:79px;top:-28px}.paste-btn.svelte-1quf800{right:32px;top:-28px}.close-btn.svelte-1quf800{font-size:var(--font-medium);right:4px;top:-28px;width:24px}")
            }

            function oA(t) {
                let e;
                return {
                    c() {
                        (e = S("p")).textContent = "nuting here"
                    },
                    m(t, n) {
                        E(t, e, n)
                    },
                    i: c,
                    o: c,
                    d(t) {
                        t && q(e)
                    }
                }
            }

            function oR(t) {
                let e, n;
                return e = new oM({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oT(t) {
                let e, n;
                return e = new op({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oP(t) {
                let e, n;
                return e = new r3({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oz(t) {
                let e, n;
                return e = new rW({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oI(t) {
                let e, n;
                return e = new rM({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oB(t) {
                let e, n;
                return e = new nL({}), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oF(t) {
                let e, n, r, o, i, l, s, a, c, f, u, d, v, g, m, y, b, $, x, w, k, _, j, O, D, M, N, R;
                (n = new tB({
                    props: {
                        isOpen: t[5]
                    }
                })).$on("submit", t[12]), n.$on("close", t[11]), k = new tH({
                    props: {
                        onClickTab: t[14],
                        active: t[1]
                    }
                });
                let z = [oB, oI, oz, oP, oT, oR, oA],
                    I = [];

                function B(t, e) {
                    return "state" === t[1] ? 0 : "history" === t[1] ? 1 : "plugins" === t[1] ? 2 : "schema" === t[1] ? 3 : "structure" === t[1] ? 4 : "snapshots" === t[1] ? 5 : 6
                }
                return O = I[j = B(t)] = z[j](t), {
                    c() {
                        e = S("div"), td(n.$$.fragment), r = A(), o = S("div"), i = S("div"), l = A(), s = S("div"), a = S("div"), (c = S("button")).textContent = "Copy", f = A(), (u = S("button")).textContent = "Save", d = A(), (v = S("button")).textContent = "Import", g = A(), (m = S("button")).textContent = "Paste", y = A(), (b = S("button")).textContent = "X", $ = A(), x = S("input"), w = A(), td(k.$$.fragment), _ = A(), O.c(), P(i, "class", "resizing-div svelte-1quf800"), P(i, "role", "button"), P(i, "tabindex", "-1"), P(c, "class", "copy-btn svelte-1quf800"), P(u, "class", "save-btn svelte-1quf800"), P(v, "class", "import-btn svelte-1quf800"), P(m, "class", "paste-btn svelte-1quf800"), P(b, "class", "close-btn svelte-1quf800"), P(b, "aria-label", "Close dev-toolkit"), x.style.setProperty("display", "none", ""), P(x, "type", "file"), P(x, "accept", ".json"), x.multiple = !0, P(s, "class", "floating-dock-body svelte-1quf800"), P(o, "class", "floating-dock svelte-1quf800"), P(o, "style", D = "top: ".concat(t[2], "%; height: ").concat(t[3], "%;")), P(e, "class", "floating-dock-wrapper svelte-1quf800")
                    },
                    m(p, O) {
                        E(p, e, O), tp(n, e, null), C(e, r), C(e, o), C(o, i), C(o, l), C(o, s), C(s, a), C(a, c), C(a, f), C(a, u), C(a, d), C(a, v), C(a, g), C(a, m), C(a, y), C(a, b), C(s, $), C(s, x), t[15](x), C(s, w), tp(k, s, null), C(s, _), I[j].m(s, null), M = !0, N || (R = [T(i, "mousedown", t[6]), T(c, "click", t[7]), T(u, "click", t[8]), T(v, "click", t[9]), T(m, "click", t[10]), T(b, "click", function() {
                            h(t[0]) && t[0].apply(this, arguments)
                        }), T(x, "change", t[13])], N = !0)
                    },
                    p(e, r) {
                        let [i] = r;
                        t = e;
                        let l = {};
                        32 & i && (l.isOpen = t[5]), n.$set(l);
                        let a = {};
                        2 & i && (a.active = t[1]), k.$set(a);
                        let c = j;
                        (j = B(t)) !== c && (ti(), ta(I[c], 1, 1, () => {
                            I[c] = null
                        }), tl(), (O = I[j]) || (O = I[j] = z[j](t)).c(), ts(O, 1), O.m(s, null)), (!M || 12 & i && D !== (D = "top: ".concat(t[2], "%; height: ").concat(t[3], "%;"))) && P(o, "style", D)
                    },
                    i(t) {
                        M || (ts(n.$$.fragment, t), ts(k.$$.fragment, t), ts(O), M = !0)
                    },
                    o(t) {
                        ta(n.$$.fragment, t), ta(k.$$.fragment, t), ta(O), M = !1
                    },
                    d(r) {
                        r && q(e), th(n), t[15](null), th(k), I[j].d(), N = !1, p(R)
                    }
                }
            }

            function oL(t, e, n) {
                let {
                    onClose: r
                } = e, {
                    view: o
                } = ty("editor-view"), i = "state", l = 50, s = 50, a, c = !1;

                function f(t) {
                    t.preventDefault(), n(2, l = 100 * t.clientY / window.innerHeight), n(3, s = 100 * (1 - t.clientY / window.innerHeight))
                }

                function u(t) {
                    t.preventDefault(), document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", u)
                }
                return L().$$.on_destroy.push(() => {
                    document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", u)
                }), t.$$set = t => {
                    "onClose" in t && n(0, r = t.onClose)
                }, [r, i, l, s, a, c, function() {
                    document.addEventListener("mousemove", f), document.addEventListener("mouseup", u)
                }, function() {
                    navigator.clipboard.writeText(JSON.stringify(o.state.doc.toJSON()))
                }, function() {
                    let t = prompt("Enter snapshot name", new Date().toLocaleString("sv"));
                    t && tS(t, o.state.doc.toJSON())
                }, function() {
                    a.click()
                }, function() {
                    n(5, c = !c)
                }, function() {
                    n(5, c = !1)
                }, function(t) {
                    tN(o, tS(new Date().toLocaleString("sv"), t.detail.doc)), n(5, c = !1)
                }, function(t) {
                    Array.from(t.currentTarget.files || []).forEach(t => {
                        let e = new FileReader;
                        e.readAsText(t), e.onload = e => {
                            var n, r;
                            let i = "string" == typeof(null == (n = e.target) ? void 0 : n.result) ? null == (r = e.target) ? void 0 : r.result : "";
                            try {
                                let e = JSON.parse(i);
                                if (!e || "object" != typeof e) throw Error("Imported snapshot was not a JSON object" + e);
                                var l = t.name.slice(0, t.name.lastIndexOf(".")),
                                    s = e,
                                    a = o.state.schema;
                                let n = a.nodeFromJSON(s),
                                    r = {
                                        name: l,
                                        timestamp: Date.now(),
                                        doc: n.toJSON()
                                    };
                                tC.update(t => [r, ...t])
                            } catch (t) {
                                console.error("Failed to import snapshot: " + t)
                            }
                        }
                    })
                }, function(t) {
                    n(1, i = t)
                }, function(t) {
                    W[t ? "unshift" : "push"](() => {
                        n(4, a = t)
                    })
                }]
            }
            class oV extends tg {
                constructor(t) {
                    super(), tv(this, t, oL, oF, v, {
                        onClose: 0
                    }, oN)
                }
            }

            function oH(t) {
                O(t, "svelte-pr6kw9", '.dev-tools.svelte-pr6kw9{font-family:var(--font-sans);font-size:var(--font-medium);font-weight:400;--font-sans:Helvetica Neue, Calibri Light, Roboto, sans-serif;--font-small:11px;--font-medium:13px;--font-large:16px;--height-tabs-menu:48px;--tree-view-font-family:"Helvetica Neue", "Calibri Light", Roboto, sans-serif;--tree-view-font-size:13px;--tree-view-left-indent:0.875em;--tree-view-line-height:1.1;--tree-view-key-margin-right:0.5em;--tree-view-base00:#363755;--tree-view-base01:#604d49;--tree-view-base02:#6d5a55;--tree-view-base03:#d1929b;--tree-view-base04:#b79f8d;--tree-view-base05:#f9f8f2;--tree-view-base06:#f7f4f1;--tree-view-base07:#faf8f5;--tree-view-base08:#fa3e7e;--tree-view-base09:#fd993c;--tree-view-base0A:#f6bf81;--tree-view-base0B:#b8e248;--tree-view-base0C:#b4efe4;--tree-view-base0D:#85d9ef;--tree-view-base0E:#be87ff;--tree-view-base0F:#d6724c}.dev-tools.svelte-pr6kw9 .svelte-tree-view *{box-sizing:border-box}.dev-tools.svelte-pr6kw9 .hidden{opacity:0;visibility:hidden}')
            }

            function oU(t) {
                let e, n;
                return (e = new tw({
                    props: {
                        buttonPosition: t[1]
                    }
                })).$on("click", t[2]), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p(t, n) {
                        let r = {};
                        2 & n && (r.buttonPosition = t[1]), e.$set(r)
                    },
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oJ(t) {
                let e, n;
                return e = new oV({
                    props: {
                        onClose: t[3]
                    }
                }), {
                    c() {
                        td(e.$$.fragment)
                    },
                    m(t, r) {
                        tp(e, t, r), n = !0
                    },
                    p: c,
                    i(t) {
                        n || (ts(e.$$.fragment, t), n = !0)
                    },
                    o(t) {
                        ta(e.$$.fragment, t), n = !1
                    },
                    d(t) {
                        th(e, t)
                    }
                }
            }

            function oG(t) {
                var e;
                let n, r, o, i, l = [oJ, oU],
                    s = [];

                function a(t, e) {
                    return +!t[0]
                }
                return o = s[r = +!t[0]] = l[r](t), {
                    c() {
                        n = S("section"), o.c(), P(n, "class", "dev-tools svelte-pr6kw9")
                    },
                    m(t, e) {
                        E(t, n, e), s[r].m(n, null), i = !0
                    },
                    p(t, e) {
                        var i;
                        let [a] = e, c = r;
                        (r = +!t[0]) === c ? s[r].p(t, a) : (ti(), ta(s[c], 1, 1, () => {
                            s[c] = null
                        }), tl(), (o = s[r]) ? o.p(t, a) : (o = s[r] = l[r](t)).c(), ts(o, 1), o.m(n, null))
                    },
                    i(t) {
                        i || (ts(o), i = !0)
                    },
                    o(t) {
                        ta(o), i = !1
                    },
                    d(t) {
                        t && q(n), s[r].d()
                    }
                }
            }

            function oK(t, e, n) {
                let {
                    view: r,
                    devToolsExpanded: o = !1,
                    buttonPosition: i = "bottom-right"
                } = e;
                return tm("editor-view", {
                    view: r,
                    execCmd(t) {
                        t(r.state, r.dispatch)
                    },
                    replaceEditorContent(t) {
                        let e = r.state.tr;
                        e.replaceWith(0, r.state.doc.nodeSize - 2, t.doc.content), r.dispatch(e)
                    }
                }), V(() => {
                    let t = document && document.querySelector("html");
                    o && t && (t.style.paddingBottom = "341px")
                }), t.$$set = t => {
                    "view" in t && n(4, r = t.view), "devToolsExpanded" in t && n(0, o = t.devToolsExpanded), "buttonPosition" in t && n(1, i = t.buttonPosition)
                }, [o, i, function() {
                    n(0, o = !0);
                    let t = document && document.querySelector("html");
                    t && (t.style.paddingBottom = "341px")
                }, function() {
                    n(0, o = !1);
                    let t = document && document.querySelector("html");
                    t && (t.style.paddingBottom = "")
                }, r]
            }
            class oW extends tg {
                constructor(t) {
                    super(), tv(this, t, oK, oG, v, {
                        view: 4,
                        devToolsExpanded: 0,
                        buttonPosition: 1
                    }, oH)
                }
            }
            let oY = !1,
                oQ, oZ = (t, e) => n => {
                    let r = t.state,
                        o = t.state.applyTransaction(n);
                    if (e) {
                        let r = t.state.applyTransaction.bind(t.state);
                        t.state.applyTransaction = function(e) {
                            return e !== n ? (t.state.applyTransaction = r, Reflect.apply(r, t.state, arguments)) : o
                        }, e(n)
                    } else t.updateState(o.state);
                    oY && o.transactions.length > 0 && function(t, e, n) {
                        let r = m(eY),
                            o = m(eQ)[0],
                            i = function(t, e, n, r) {
                                var o, i, a, c;
                                let f = l.ZF.fromSchema(e.schema),
                                    u = e.selection,
                                    d = f.serializeFragment(u.content().content),
                                    p = [];
                                if (d) {
                                    let t = d.firstChild;
                                    for (; t;) p.push(t.outerHTML), t = t.nextSibling
                                }
                                let h = r ? r.state : n,
                                    v = (o = h.doc.toJSON(), i = e.doc.toJSON(), eV.diff(o, i)),
                                    g = (a = eU(h.selection), c = eU(e.selection), eV.diff(a, c));
                                return {
                                    id: Math.random().toString() + Math.random().toString(),
                                    state: e,
                                    trs: t.map(t => Object.keys(t).concat(eH).reduce((e, n) => (e[n] = t[n], e), {})),
                                    timestamp: t[0].time,
                                    timeStr: eG(t[0].time),
                                    contentDiff: v,
                                    selectionDiff: g,
                                    selectionHtml: eW((0, s.prettyPrint)(p.join("\n"), {
                                        max_char: 60,
                                        indent_size: 2
                                    }))
                                }
                            }(t, e, n, r.get((null == o ? void 0 : o.topEntryId) || ""));
                        eY.update(t => new Map(t.set(i.id, i))), eZ.set(i);
                        let a = !i.contentDiff;
                        if ((null == o ? void 0 : o.isGroup) && a) {
                            let t = {
                                id: o.id,
                                isGroup: a,
                                entryIds: [i.id, ...o.entryIds],
                                topEntryId: i.id,
                                expanded: o.expanded
                            };
                            eQ.update(e => [t, ...e.slice(1)])
                        } else {
                            let t = m(eX) + 1,
                                e = {
                                    id: t,
                                    isGroup: a,
                                    entryIds: [i.id],
                                    topEntryId: i.id,
                                    expanded: !1
                                };
                            eQ.update(t => [e, ...t]), eX.set(t)
                        }
                    }(o.transactions, t.state, r)
                },
                oX = "__prosemirror-dev-toolkit__";
            class o1 extends HTMLElement {
                constructor() {
                    super();
                    let t = this.attachShadow({
                        mode: "open"
                    });
                    this.addEventListener("init-dev-toolkit", e => {
                        let {
                            detail: {
                                view: n,
                                opts: r
                            }
                        } = e;
                        this.component = new oW({
                            target: t,
                            props: Object.assign({
                                view: n
                            }, r)
                        })
                    })
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.component) || t.$destroy()
                }
            }

            function o0(t, e = {}) {
                var n;
                let r, o, l = ((o = document.querySelector(`.${oX}`)) || ((o = document.createElement("div")).className = oX, document.body.appendChild(o)), o);
                if (o2(), t.isDestroyed) return;
                let {
                    disableWebComponent: s
                } = e, a = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) 0 > e.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                    return n
                }(e, ["disableWebComponent"]);
                if (s) r = new oW({
                    target: l,
                    props: Object.assign({
                        view: t
                    }, a)
                });
                else {
                    let e = document.createElement("prosemirror-dev-toolkit");
                    e.dispatchEvent(new CustomEvent("init-dev-toolkit", {
                        detail: {
                            view: t,
                            opts: a
                        }
                    })), l.appendChild(e)
                }
                "undefined" != typeof window && (window.editorView = t, window.pmCmd = e => e(t.state, t.dispatch, t));
                let c = t.destroy.bind(t);
                t.destroy = () => {
                    o2(), c()
                }, oY = !0;
                let f = null == (n = (t.props || t._props).dispatchTransaction) ? void 0 : n.bind(t);
                t.setProps({
                    dispatchTransaction: oZ(t, f)
                }), oQ = () => t.setProps({
                    dispatchTransaction: f
                }), i = () => {
                    e1(), oY = !1, oQ && oQ(), oQ = void 0, null == r || r.$destroy();
                    let t = l.firstChild;
                    t && l.removeChild(t)
                }
            }

            function o2() {
                i && i(), i = void 0
            }
            customElements.get("prosemirror-dev-toolkit") || customElements.define("prosemirror-dev-toolkit", o1), "undefined" != typeof window && (window.applyDevTools = o0)
        }
    }
]);
//# sourceMappingURL=a3e3fa54.69709282545d4ab2.js.map