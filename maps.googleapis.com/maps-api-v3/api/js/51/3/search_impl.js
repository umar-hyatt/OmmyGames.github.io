google.maps.__gjsload__('search_impl', function(_) {
    var bab = function(a) {
            _.G.call(this, a)
        },
        dab = function(a) {
            var b = _.Vi.Sa;
            a = a.toArray();
            cab || (cab = {
                M: "sssM",
                T: ["ss"]
            });
            return b.call(_.Vi, a, cab)
        },
        eab = function(a, b) {
            _.D(a.o, 3, b)
        },
        X$ = function(a) {
            _.G.call(this, a)
        },
        fab = function() {
            var a = _.Vj,
                b = _.ij;
            this.j = _.jg;
            this.h = _.Nk(_.Gs, a, _.gt + "/maps/api/js/LayersService.GetFeature", b)
        },
        iab = function(a, b, c) {
            var d = _.hD(new fab);
            c.mr = (0, _.Ma)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.PCa(c, _.fK(b));
            var e = [];
            e.push(_.N(c, "click", (0, _.Ma)(gab, null, a)));
            _.kb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.N(c, f, (0, _.Ma)(hab, null, a, f)))
            });
            e.push(_.N(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        gab = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.o, 2) ? new _.Qe(_.$m(e.getLocation().o, 1), _.$m(e.getLocation().o, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.o, 3), h = 0; h < g; ++h) {
                    var k = _.Tk(e.o, 3, _.lK, h);
                    f.fields[k.getKey()] = k.Ka()
                }
            }
            _.O(a, "click", b, c, d, f)
        },
        hab = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.O(a, b, c, d, e, h, g)
        },
        jab = function() {};
    _.B(bab, _.G);
    bab.prototype.Tb = function() {
        return _.L(this.o, 2)
    };
    var cab;
    _.B(X$, _.G);
    X$.prototype.getStatus = function() {
        return _.K(this.o, 1, -1)
    };
    X$.prototype.getLocation = function() {
        return _.I(this.o, 2, _.on)
    };
    fab.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new bab;
        _.D(d.o, 1, a.layerId.split("|")[0]);
        _.D(d.o, 2, a.featureId);
        eab(d, _.Vd(_.Zd(this.j)));
        for (var e in a.parameters) {
            var f = _.Sd(d.o, 4, _.lK);
            _.D(f.o, 1, e);
            _.D(f.o, 2, a.parameters[e])
        }
        a = dab(d);
        this.h(a, c, c);
        return a
    };
    fab.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    jab.prototype.Ou = function(a) {
        if (_.Ei[15]) {
            var b = a.Gd,
                c = a.Gd = a.getMap();
            b && a.h && (a.m ? (b = b.__gm.j, b.set(b.get().Bf(a.h))) : a.h && _.kDa(a.h, b) && (_.kb(a.j || [], _.sf), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds");
                b = new _.jm;
                d = d.split("|");
                b.layerId = d[0];
                for (var t =
                        1; t < d.length; ++t) {
                    var u = _.A(d[t].split(":")),
                        w = u.next().value;
                    u = _.la(u);
                    b.parameters[w] = u.join(":")
                }
                e && (b.spotlightDescription = new _.np(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.pm(g));
                m && (b.travelMapRequest = new _.ps(m));
                h && (b.mapsApiLayer = new _.Wk(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.fq(p));
                q && (b.overlayLayer = new _.yn(q));
                r && (b.caseExperimentIds = r.slice(0));
                b.darkLaunch = !!k;
                a.h = b;
                a.m = a.get("renderOnBaseMap");
                a.m ? (a = c.__gm.j, a.set(a.get().Qd(b))) : iab(a, c, b);
                _.xg(c,
                    "Lg");
                _.vg(c, 148282)
            }
        }
    };
    _.jf("search_impl", new jab);
});