define("@wsb/guac-widget-shared/c/_rollupPluginBabelHelpers-8ce54c82.js", ["exports"], (function(e) {
    "use strict";

    function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
            }
            return e
        }, n.apply(this, arguments)
    }
    e._ = n, e.a = function(e, n, r) {
        return n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r, e
    }
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=_rollupPluginBabelHelpers-8ce54c82.js.map