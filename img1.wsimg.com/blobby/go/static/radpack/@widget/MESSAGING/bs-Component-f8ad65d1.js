define("@widget/MESSAGING/bs-Component-f8ad65d1.js", ["radpack", "exports", "@wsb/guac-widget-shared@^1/lib/components/Recaptcha/badge", "@wsb/guac-widget-shared@^1/lib/common/constants/traffic2", "@wsb/guac-widget-shared@^1/lib/common/constants/form/formIdentifiers"], (function(e, o, a, t, r) {
    "use strict";
    var l = (global.keyMirror || guac.keymirror)({
        MESSAGING_FAB: null,
        MESSAGING_MESSAGE_FLYOUT: null,
        WELCOME_MESSAGE: null,
        SEND_MESSAGE_TO: null,
        EMAIL_OPT_IN_TOGGLE: null,
        EMAIL_OPT_IN_MESSAGE: null,
        COLOR_SATURATION_KNOB: null,
        COLOR_HUE_SLIDER_KNOB: null
    });
    const c = (global.React || guac.react).createElement("path", {
        d: "M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"
    });

    function s(e) {
        let {
            text: o
        } = e;
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            category: "neutral",
            section: "overlay",
            style: {
                backgroundColor: "neutral",
                margin: "-medium medium medium medium",
                borderRadius: "5px",
                position: "relative"
            }
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
            style: {
                padding: "12px 15px",
                borderRadius: "5px",
                backgroundColor: "primaryOverlay",
                fontSize: "16px",
                color: "neutral"
            }
        }, o), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            icon: c,
            size: 24,
            style: {
                width: "33px",
                height: "16px",
                color: "primaryOverlay",
                position: "absolute",
                top: "100%",
                left: "3px",
                marginTop: "-1px"
            }
        }))
    }

    function p(e) {
        let {
            title: o,
            message: a,
            children: t,
            onClose: r
        } = e;
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            "data-aid": l.MESSAGING_MESSAGE_FLYOUT,
            style: {
                "-webkit-overflow-scrolling": "touch",
                overflowX: "hidden",
                overflowY: "auto",
                boxShadow: "0px 3px 18px rgba(0, 0, 0, 0.25)",
                backgroundColor: "neutral",
                borderRadius: "5px",
                borderWidth: "xsmall",
                borderStyle: "solid",
                borderColor: "#fff",
                width: "382px",
                marginBottom: "small",
                position: "absolute",
                maxHeight: "calc(100vh - 105px)",
                right: "-1px",
                bottom: "100%",
                "@xs-only": {
                    maxHeight: "100vh",
                    height: "100vh",
                    zIndex: "inherit",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    bottom: "89px",
                    width: "100%"
                }
            }
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            "data-field-id": "formEmail"
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            onClick: r,
            icon: "close",
            size: 22,
            style: {
                color: "#fff",
                position: "absolute",
                top: "18px",
                right: "14px",
                cursor: "pointer",
                "@sm": {
                    display: "none"
                }
            }
        }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading, {
            style: {
                color: "action",
                fontSize: "large",
                backgroundColor: "action",
                paddingTop: "small",
                paddingBottom: a ? "xlarge" : "small",
                paddingLeft: "medium",
                paddingRight: "medium",
                margin: a ? "0" : "0 0 medium 0",
                textAlign: "left",
                "@md": {
                    textAlign: "left"
                }
            }
        }, o), a ? (global.React || guac.react).createElement(s, {
            text: a
        }) : null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            style: {
                overflow: "hidden",
                padding: "0 medium"
            }
        }, t)))
    }
    s.propTypes = {
        text: (global.PropTypes || guac["prop-types"]).string.isRequired
    }, p.propTypes = {
        title: (global.PropTypes || guac["prop-types"]).string.isRequired,
        message: (global.PropTypes || guac["prop-types"]).string.isRequired,
        children: (global.PropTypes || guac["prop-types"]).node.isRequired,
        onClose: (global.PropTypes || guac["prop-types"]).func.isRequired
    };
    const {
        renderModes: n
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, i = "reamazejs-container";

    function g(e) {
        const {
            position: o,
            prompt: a,
            promptEnabled: t,
            color: r,
            reamazeBrandId: l,
            reamazeWrap: c,
            reamazeJsSource: s,
            reamazeCookieJsSource: p,
            cookieBannerEnabled: g,
            confirmationMessage: u,
            avatar: d,
            forceShowFlyout: m,
            renderMode: b
        } = e, [y, w] = (global.React || guac.react).useState(!0), [f, E] = (global.React || guac.react).useState(!0), T = e => ({
            mode: "notification",
            delay: b === n.EDIT ? 0 : 10,
            text: e
        }), S = (e, o) => {
            e.forEach((e => {
                const a = e.addedNodes[0];
                if (a ? .id === i && b === n.EDIT && c ? .current) return c.current.append(a), void o.disconnect()
            }))
        };
        return (global.React || guac.react).useEffect((() => {
            if (b === n.EDIT) {
                const e = {
                    childList: !0
                };
                new MutationObserver(S).observe(document.body, e)
            }
            const e = (e => {
                const o = e.createElement("script");
                return o.src = b !== n.EDIT && g ? p : s, o.async = !0, o.type = "text/javascript", o
            })(document);
            return document.body.appendChild(e), window._support = {
                account: l,
                openPopup: m,
                ui: {
                    contactMode: "default",
                    enableKb: "false",
                    styles: {
                        widgetColor: r
                    },
                    widget: {
                        icon: "webChat",
                        label: !(!t || b === n.EDIT) && T(a),
                        position: o
                    },
                    shoutboxFacesMode: "custom",
                    overrides: {
                        confirmationMessage: u
                    }
                },
                user: {
                    authpath: `/m/api/reamaze/v2/customers/auth?brand=${l}`
                },
                _preview: m
            }, () => {
                const e = document.querySelector(`script[src='${s}']`);
                e && e.remove();
                const o = document.getElementById(i);
                o && o.remove()
            }
        }), []), (global.React || guac.react).useEffect((() => {
            b === n.EDIT && (window._support.ui.widget.position = o, window._support.ui.styles = {
                widgetColor: r
            }, window._support.ui.shoutboxFacesMode = "custom", window._support.openPopup = m, window._support._preview = m, window._support._route = null, window._support.ui.widget.label = !1, void 0 !== window.reamaze && window.reamaze.reload())
        }), [o, r, d, m]), (global.React || guac.react).useEffect((() => {
            b === n.EDIT && (y ? w(!1) : (window._support.ui.widget.label = !(!t || !m) && T(a), window._support.openPopup = !1, void 0 !== window.reamaze && window.reamaze.reload()))
        }), [a, t]), (global.React || guac.react).useEffect((() => {
            b === n.EDIT && (f ? E(!1) : (window._support._route = "conversations:show", window._support._routeParams = {
                slug: "*mock_confirm_convo*"
            }, window._support.ui.overrides.confirmationMessage = u, window._support.openPopup = m, window._support._preview = m, void 0 !== window.reamaze && window.reamaze.reload()))
        }), [u]), (global.React || guac.react).createElement("div", null)
    }
    g.propTypes = {
        position: (global.PropTypes || guac["prop-types"]).string,
        prompt: (global.PropTypes || guac["prop-types"]).string,
        promptEnabled: (global.PropTypes || guac["prop-types"]).bool,
        color: (global.PropTypes || guac["prop-types"]).string,
        reamazeBrandId: (global.PropTypes || guac["prop-types"]).string,
        reamazeJsSource: (global.PropTypes || guac["prop-types"]).string,
        reamazeCookieJsSource: (global.PropTypes || guac["prop-types"]).string,
        reamazeWrap: (global.PropTypes || guac["prop-types"]).node,
        confirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        avatar: (global.PropTypes || guac["prop-types"]).string,
        forceShowFlyout: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        cookieBannerEnabled: (global.PropTypes || guac["prop-types"]).bool
    };
    const u = {
        contactApi: /[?&]contactApiVersion=([^&]*)/
    };

    function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "contactApi";
        if ("undefined" == typeof window) return "";
        const {
            location: {
                search: o = ""
            }
        } = window || {}, a = u[e], t = a.exec(o);
        return t && t[1] ? `${t[1]}.` : ""
    }
    const m = "EMAIL",
        b = "CONVERSATIONS",
        {
            utils: {
                TCCLUtils: y
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2,
        {
            MESSAGING_EMAIL: w,
            MESSAGING_CONVERSATIONS: f
        } = r.default,
        {
            Z_INDEX_COOKIE_BANNER: E,
            Z_INDEX_FULL_SCREEN_OVERLAY: T,
            Z_INDEX_STICKY_NAV: S
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants.layers,
        {
            renderModes: P
        } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
        R = e => {
            let {
                keyName: o
            } = e;
            return "phone" !== o
        },
        C = (global.React || guac.react).lazy((() => new Promise((function(o, a) {
            e.require(["@wsb/guac-widget-shared@^1/lib/components/Form"], o, a)
        })))),
        h = {
            marginBottom: "medium",
            display: "block",
            textAlign: "center",
            color: "action"
        };

    function I(e) {
        const {
            id: o,
            section: r,
            forceShowFlyout: c,
            welcomeMessage: s,
            config: n,
            formEmail: i,
            formFields: u,
            formSuccessMessage: I,
            emailOptInEnabled: _,
            emailOptInMessage: M,
            notificationPreference: x,
            recaptchaType: z,
            emailConfirmationMessage: v,
            locale: A,
            websiteId: k,
            accountId: N,
            domainName: O,
            staticContent: B,
            isReseller: G,
            businessName: L,
            reamazeBrandId: U,
            reamazePrompt: X,
            reamazePromptEnabled: F,
            reamazeThemeColor: D,
            reamazePosition: q,
            reamazeConfirmationMessage: J,
            reamazeAvatarImage: H,
            renderMode: j,
            cookieBannerEnabled: V
        } = e, W = (global.React || guac.react).useRef(!1), [Z, K] = (global.React || guac.react).useState(c), [Y, $] = (global.React || guac.react).useState(e.isMobile), Q = j === (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes.PUBLISH, ee = () => K(!Z);
        (global.React || guac.react).useEffect((() => {
            const e = window.document ? .body;
            e && Q && (Y && Z ? e.classList.add("disable-scroll") : e.classList.remove("disable-scroll"))
        }), [Z, Y]), (global.React || guac.react).useEffect((() => {
            Z !== c && K(c)
        }), [c]), (global.React || guac.react).useEffect((() => {
            W.current ? K(!0) : W.current = !0
        }), [i, s, I, _, M]);
        const oe = x === m ? u.filter(R) : u,
            ae = x === m ? w : f,
            te = (global.React || guac.react).useRef(null);
        return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            category: "neutral",
            section: r,
            style: {
                position: "fixed",
                right: "medium",
                bottom: "medium",
                zIndex: Z ? T : E - 1,
                width: "65px",
                height: "65px",
                "@md": {
                    zIndex: Z ? S + 1 : E - 1
                }
            }
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.MatchMedia, {
            onChange: o => {
                const a = Q && o ? "xs" === o.size : e.isMobile;
                $(a)
            }
        }), j !== P.PREVIEW && "REAMAZE" === x && U && (global.React || guac.react).createElement("div", {
            ref: te
        }, (global.React || guac.react).createElement(g, {
            position: q,
            prompt: X,
            promptEnabled: F,
            color: D,
            reamazeBrandId: U,
            reamazeWrap: te,
            reamazeJsSource: n.reamazeJsSource,
            reamazeCookieJsSource: n.reamazeCookieJsSource,
            confirmationMessage: J,
            avatar: H,
            forceShowFlyout: c,
            cookieBannerEnabled: V,
            renderMode: j
        })), [m, b].includes(x) && (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, Z ? (global.React || guac.react).createElement(p, {
            title: L,
            message: s,
            onClose: ee
        }, "undefined" != typeof window ? (global.React || guac.react).createElement((global.React || guac.react).Suspense, {
            fallback: (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: h
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Loader, {
                size: "medium"
            }))
        }, (global.React || guac.react).createElement(C, {
            locale: A,
            websiteId: k,
            accountId: N,
            domainName: O,
            staticContent: B,
            emailConfirmationMessage: v,
            emailOptInEnabled: _,
            emailOptInMessage: M,
            formSuccessMessage: I,
            formSubmitEndpoint: n.formSubmitEndpoint,
            formSubmitHost: n.formSubmitHost.replace("{{SHA}}", d()),
            formFields: oe,
            formIdentifier: ae,
            recaptchaType: z,
            recaptchaEnabled: Boolean(z),
            isReseller: G,
            category: "neutral",
            pageId: "00000000-0000-0000-0000-000000000000",
            widgetId: o,
            renderMode: j,
            dataAidPrefix: "MESSAGING"
        })) : null) : (global.React || guac.react).createElement(a.default, null), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
            "data-aid": l.MESSAGING_FAB,
            "data-field-id": Y || c ? null : "enabled",
            "data-edit-interactive": "true",
            onClick: ee,
            "data-traffic2": Z ? t.default.editor_preview.messaging_fab_close : t.default.editor_preview.messaging_fab_open,
            "data-tccl": y.getTCCLString({
                eid: Z ? "ux2.messaging.fab.close" : "ux2.messaging.fab.open",
                type: "click"
            }),
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: Z ? "#555" : "action",
                boxShadow: "0px 3px 18px rgba(0, 0, 0, 0.25)",
                transform: "translateZ(0)"
            }
        }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
            style: {
                color: Z ? "#fff" : "action"
            },
            icon: Z ? "close" : "chat",
            size: Z ? 34 : 44
        }))))
    }
    I.propTypes = {
        forceShowFlyout: (global.PropTypes || guac["prop-types"]).bool,
        businessName: (global.PropTypes || guac["prop-types"]).string,
        reamazeBrandId: (global.PropTypes || guac["prop-types"]).string,
        formEmail: (global.PropTypes || guac["prop-types"]).string,
        welcomeMessage: (global.PropTypes || guac["prop-types"]).string,
        formSuccessMessage: (global.PropTypes || guac["prop-types"]).string,
        emailOptInMessage: (global.PropTypes || guac["prop-types"]).string,
        emailOptInEnabled: (global.PropTypes || guac["prop-types"]).bool,
        section: (global.PropTypes || guac["prop-types"]).string,
        domainName: (global.PropTypes || guac["prop-types"]).string,
        cookieBannerEnabled: (global.PropTypes || guac["prop-types"]).bool,
        config: (global.PropTypes || guac["prop-types"]).shape({
            formSubmitEndpoint: (global.PropTypes || guac["prop-types"]).string,
            formSubmitHost: (global.PropTypes || guac["prop-types"]).string,
            reamazeJsSource: (global.PropTypes || guac["prop-types"]).string,
            reamazeCookieJsSource: (global.PropTypes || guac["prop-types"]).string
        }),
        formFields: (global.PropTypes || guac["prop-types"]).array,
        accountId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        websiteId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        id: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        locale: (global.PropTypes || guac["prop-types"]).string,
        emailConfirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        recaptchaType: (global.PropTypes || guac["prop-types"]).string,
        isMobile: (global.PropTypes || guac["prop-types"]).bool,
        notificationPreference: (global.PropTypes || guac["prop-types"]).string,
        isReseller: (global.PropTypes || guac["prop-types"]).bool,
        reamazePrompt: (global.PropTypes || guac["prop-types"]).string,
        reamazePromptEnabled: (global.PropTypes || guac["prop-types"]).bool,
        reamazeThemeColor: (global.PropTypes || guac["prop-types"]).string,
        reamazePosition: (global.PropTypes || guac["prop-types"]).string,
        reamazeConfirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        reamazeAvatarImage: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string
    }, o.default = I, Object.defineProperty(o, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-Component-f8ad65d1.js.map