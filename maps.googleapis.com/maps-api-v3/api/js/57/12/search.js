google.maps.__gjsload__('search', function(_) {
    var usa = function() {},
        hD = function(a) {
            this.setValues(a);
            _.rk("search_impl")
        },
        wsa = function(a) {
            let b = _.qm,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ci, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Xt().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new vsa(e, b, c))
            });
            return d
        },
        xsa = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...wsa(c))
            });
            return b
        };
    _.Ga(usa, _.Vk);
    var ysa = {
            ["1"]: {}
        },
        vsa = class {
            constructor(a, b, c) {
                this.vp = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = ysa;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Rm(new _.cn((this.vp.x * 256 + this.source.a[0]) / a, (this.vp.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.Vm(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.Vm(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === ysa) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var zsa = new WeakSet;
    _.Ga(hD, usa);
    hD.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.rk("search_impl").then(d => {
            d.VE(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    hD.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.In[15]) {
            var b = a.__gm.Yg;
            if (!zsa.has(a)) {
                zsa.add(a);
                var c = [],
                    d = (f, g) => {
                        f = wsa(f);
                        f.length && _.Ok(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.Ak(f, "insert", g => d(g, "addfeatures"))), c.push(_.Ak(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...xsa(g))
                });
                f.length && _.Ok(a, "addfeatures", f)
            })()
        }
    };
    _.Ea("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", hD.enableFeatureMapEventsRasterOnly);
    _.yl(hD.prototype, {
        map: _.Up
    });
    _.qa.google.maps.search = {
        GoogleLayer: hD
    };
    _.sk("search", {});
});