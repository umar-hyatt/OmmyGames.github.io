google.maps.__gjsload__('overlay', function(_) {
    var RD = function(a) {
            this.Eg = a
        },
        Qva = function() {},
        SD = function(a) {
            a.Yy = a.Yy || new Qva;
            return a.Yy
        },
        Rva = function(a) {
            this.Ch = new _.qn(() => {
                const b = a.Yy;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.qx && a.onAdd) a.onAdd();
                        b.qx = !0;
                        a.draw()
                    }
                } else {
                    if (b.qx)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.qx = !1
                }
            }, 0)
        },
        Sva = function(a, b) {
            const c = SD(a);
            let d = c.uw;
            d || (d = c.uw = new Rva(a));
            _.Kb(c.Qh || [], _.Ck);
            var e = c.oi = c.oi || new _.Epa;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.QC = c.QC || new RD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.rn(d.Ch);
            c.Qh = [_.Ak(a, "panes_changed", e), _.Ak(f, "zoom_changed", e), _.Ak(f, "offset_changed", e), _.Ak(b, "projection_changed", e), _.Ak(f, "projectioncenterq_changed", e)];
            _.rn(d.Ch);
            b instanceof _.al ? (_.Ll(b, "Ox"), _.Jl(b, 148440)) : b instanceof _.mm && (_.Ll(b, "Oxs"),
                _.Jl(b, 181451))
        },
        Xva = function(a) {
            if (a) {
                var b = a.getMap();
                if (Tva(a) !== b && b && b instanceof _.al) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Uva(b, a, c.overlayLayer) : c.Fg.then(({
                        lh: d
                    }) => {
                        const e = new Vva(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        Wva(a);
                        Xva(a)
                    })
                }
            }
        },
        Wva = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Gg.tl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        Tva = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Yva = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ga(RD, _.Vk);
    RD.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.pj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var TD = {};
    _.Ga(Rva, _.Vk);
    TD.Dl = function(a) {
        if (a) {
            var b = a.getMap();
            (SD(a).zC || null) !== b && (b && Sva(a, b), SD(a).zC = b)
        }
    };
    TD.tl = function(a) {
        const b = SD(a);
        var c = b.oi;
        c && c.unbindAll();
        (c = b.QC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Qh && _.Kb(b.Qh, _.Ck);
        b.Qh = null;
        b.uw && (b.uw.Ch.Dj(), b.uw = null);
        delete SD(a).zC
    };
    var UD = {},
        Uva = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Gg = c;
                this.Fg = !1;
                _.Ll(this.map, "Ox");
                _.Jl(this.map, 148440);
                c.Dl(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        Vva = class {
            constructor(a, b) {
                this.Ig = a;
                this.Gg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            ai(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.WA(this.Ig, this.Gg, () => {});
                k.ai(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) Yva(m, k), m.draw()
            }
            Dl(a) {
                this.Fg.push(a);
                this.Eg && Yva(a, this.Eg);
                this.Gg.refresh()
            }
            tl(a) {
                _.Pb(this.Fg,
                    a)
            }
        };
    UD.Dl = Xva;
    UD.tl = Wva;
    _.sk("overlay", {
        LA: function(a) {
            if (a) {
                (0, TD.tl)(a);
                (0, UD.tl)(a);
                var b = a.getMap();
                b && (b instanceof _.al ? (0, UD.Dl)(a) : (0, TD.Dl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Qv(a, {
                Vk: ({
                    event: b
                }) => {
                    _.St(b.Ih)
                },
                Yj: b => _.Bv(b),
                Yp: b => _.Cv(b),
                Wk: b => _.Cv(b),
                sk: b => _.Dv(b)
            }).Kr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.yk);
            a.addEventListener("contextmenu", _.yk);
            a.addEventListener("dblclick", _.yk);
            a.addEventListener("mousedown", _.yk);
            a.addEventListener("mousemove", _.yk);
            a.addEventListener("MSPointerDown",
                _.yk);
            a.addEventListener("pointerdown", _.yk);
            a.addEventListener("touchstart", _.yk);
            a.addEventListener("wheel", _.yk)
        }
    });
});