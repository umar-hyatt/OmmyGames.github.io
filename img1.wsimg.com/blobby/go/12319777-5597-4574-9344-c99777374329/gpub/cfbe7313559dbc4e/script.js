window.cxs && window.cxs.setOptions({
    prefix: "c2-"
});
window.wsb = window.wsb || {};
window.wsb["Theme30"] = window.wsb["Theme30"] || window.radpack("@widget/LAYOUT/bs-layout30-Theme-publish-Theme").then(function(t) {
    return new t.default();
});
window.wsb["FreemiumAd"] = function(e) {
    let {
        adEndpoint: t,
        isPublish: a,
        containerId: o
    } = e;
    const r = /<script[^>]*>([\s\S]*)<\/script>/;
    let l, n, i;

    function s(e) {
        e.preventDefault(), e.stopPropagation();
        const t = new CustomEvent("editor", {
            detail: {
                type: "showModal",
                modal: "plans",
                source: "freemiumAd"
            }
        });
        window.dispatchEvent(t)
    }

    function c(e) {
        if (i = document.getElementById(o), !i) return;
        l = document.createElement("div"), l.style.cssText = "width:100%;", i.prepend(l), n = document.createElement("div"), n.setAttribute("data-freemium-ad", !0), n.style.cssText = "overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;", n.innerHTML = (e || "").replace(r, ""), i.prepend(n);
        const t = `${n.offsetHeight}px`;
        if (l.style.minHeight = t, window.requestAnimationFrame((() => {
                const e = document.querySelector("[data-stickynav]");
                e && "fixed" === e.style.position && (e.style.top = t)
            })), a) {
            const t = r.exec(e);
            if (t) {
                const e = document.createElement("script");
                e.appendChild(document.createTextNode(t[1])), document.head.appendChild(e)
            }
        } else n.addEventListener("click", s, {
            useCapture: !0
        })
    }
    return function() {
            const e = a && sessionStorage.getItem(t) || "";
            e ? c(e) : window.fetch(t).then((e => e.ok && e.text())).then((e => {
                e && (sessionStorage.setItem(t, e), c(e))
            })).catch((() => {}))
        }(),
        function() {
            !a && n.removeEventListener("click", s, {
                useCapture: !0
            }), i && (i.removeChild(l), i.removeChild(n))
        }
};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-66554\"}"));
window.wsb['context-bs-1'] = JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#b50000\"],\"locale\":\"en-PK\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{},\"isHomepage\":true,\"navigationMap\":{\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"88d4874b-fb85-4a13-9684-a8995b26432e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"88d4874b-fb85-4a13-9684-a8995b26432e\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"d30ab80a-a5a5-49d7-9eee-a0a73740cf98\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d30ab80a-a5a5-49d7-9eee-a0a73740cf98\",\"name\":\"Games\",\"href\":\"/games\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#b50000\",\"meta\":{\"primary\":\"rgb(181, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme30\",\"paintJob\":\"DARK\"}");
Core.utils.deferBootstrap({
    elId: 'bs-1',
    componentName: '@widget/LAYOUT/bs-Hamburger-Component',
    props: JSON.parse("{\"left\":true,\"toggleId\":\"n-66553-navId-mobile\",\"uniqueId\":\"n-66553\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"a23ae8fe-311a-4a97-b6bc-83840529eed4\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"a23ae8fe-311a-4a97-b6bc-83840529eed4\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/LAYOUT/bs-Hamburger-Component"
}, false);
Core.utils.deferBootstrap({
    elId: 'bs-2',
    componentName: '@widget/LAYOUT/bs-Hamburger-Component',
    props: JSON.parse("{\"left\":true,\"isMobile\":false,\"toggleId\":\"n-66553-navId-mobile\",\"uniqueId\":\"n-66553\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"flex\"}},\"widgetId\":\"a23ae8fe-311a-4a97-b6bc-83840529eed4\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"a23ae8fe-311a-4a97-b6bc-83840529eed4\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/LAYOUT/bs-Hamburger-Component"
}, false);
window.wsb["DynamicFontScaler"] = function(e) {
    let t, {
        containerId: o,
        targetId: n,
        fontSizes: r,
        maxLines: a,
        prioritizeDefault: s
    } = e;
    if ("undefined" == typeof document) return;
    const i = document.getElementById(o),
        c = document.getElementById(n);

    function l(e) {
        return function(e) {
            const t = parseInt(d(e, "padding-left") || 0, 10),
                o = parseInt(d(e, "padding-right") || 0, 10);
            return e.scrollWidth + t + o
        }(e) <= i.clientWidth && function(e) {
            const t = e.offsetHeight,
                o = parseInt(d(e, "line-height"), 10) || 1;
            return Math.floor(t / o)
        }(e) <= a
    }

    function p() {
        if (!i || !c || t === window.innerWidth) return;
        if (c.hasAttribute("data-font-scaled")) return void
        function() {
            c.removeAttribute("data-last-size");
            const e = document.querySelector(`#${n}-style`);
            e && e.parentNode.removeChild(e)
        }();
        t = window.innerWidth;
        const e = Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`)).sort(((e, t) => r.indexOf(e.getAttribute("data-size")) - r.indexOf(t.getAttribute("data-size"))));
        if (i.clientWidth && e.length) {
            const t = i.style.width || "";
            i.style.width = "100%", e.forEach((e => {
                e.style.display = "inline-block", e.style.maxWidth = `${i.clientWidth}px`
            }));
            const o = function(e) {
                return e.find(l) || e[e.length - 1]
            }(e);
            ! function(e) {
                e.forEach((e => {
                    e.style.display = "none", e.style.maxWidth = ""
                }))
            }(e), i.style.width = t;
            const r = d(o, "font-size"),
                a = c.getAttribute("data-last-size");
            if (r && r !== a) {
                if (s) {
                    const e = d(c, "font-size");
                    if (parseInt(r, 10) >= parseInt(e, 10)) return
                }
                c.setAttribute("data-last-size", r);
                let e = document.querySelector(`#${n}-style`);
                e || (e = document.createElement("style"), e.id = `${n}-style`, document.head.appendChild(e)), e.textContent = `#${c.id} { font-size: ${r} !important; }`
            }
        }
    }

    function d(e, t) {
        return document.defaultView.getComputedStyle(e).getPropertyValue(t)
    }
    p(), window.addEventListener("resize", p)
};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-66565\",\"targetId\":\"dynamic-tagline-66566\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-66567\",\"targetId\":\"dynamic-tagline-66568\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb['context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container'] = JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#b50000\"],\"fontScale\":\"medium\",\"locale\":\"en-PK\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{},\"isHomepage\":true,\"navigationMap\":{\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"88d4874b-fb85-4a13-9684-a8995b26432e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"88d4874b-fb85-4a13-9684-a8995b26432e\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"d30ab80a-a5a5-49d7-9eee-a0a73740cf98\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d30ab80a-a5a5-49d7-9eee-a0a73740cf98\",\"name\":\"Games\",\"href\":\"/games\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#b50000\",\"meta\":{\"primary\":\"rgb(181, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme30\",\"paintJob\":\"DARK\"}");
Core.utils.deferBootstrap({
    elId: '93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    componentName: '@widget/CALENDAR/bs-calendar',
    props: JSON.parse("{\"anchorId\":\"iy8d9\",\"visitorMode\":true,\"detachedMode\":false,\"manualEvents\":[{\"id\":\"14b9f8ef-cf4d-4e07-9571-08232e8cd7f6\",\"date\":\"Monday\",\"title\":\"Character Build\",\"desc\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"7o8mp\\\",\\\"text\\\":\\\"Great characters make for great stories. Join fellow RPG friends and discuss character concepts, stats, and more!\\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"start\":\"6:00PM - 8:00PM\",\"end\":\"10pm\",\"location\":\"Main Room\"},{\"title\":\"Community D&D Night\",\"desc\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"ekv72\\\",\\\"text\\\":\\\"Three simultaneous campaigns! Masterful dungeon masters! Join in, or continue your adventure!\\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"date\":\"Wednesday\",\"location\":\"Main Room\",\"start\":\"6:00PM\",\"end\":\"11:00PM\",\"id\":\"2d63efd7-8831-45c3-89e0-d80c4ad63f0c\"},{\"title\":\"Something New\",\"desc\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"dcmuo\\\",\\\"text\\\":\\\"Each week we try out a different RPG than the week before, trying to explore as many of these great games as possible! Come join!\\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"date\":\"Thursday\",\"location\":\"Main Room\",\"start\":\"6:00PM\",\"end\":\"11:00PM\",\"id\":\"6e480836-b75c-4921-8022-9cbada11430d\"},{\"title\":\"Call of Cthulhu Night\",\"desc\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"d9eg7\\\",\\\"text\\\":\\\"Something unknowable remains undiscovered. Will you investigate? Join our band of cosmic horror victims every Friday!\\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"date\":\"Friday\",\"location\":\"Main Room\",\"start\":\"6:00PM\",\"end\":\"11:00PM\",\"id\":\"d2b65364-65bc-4384-b5ae-008c19d2d5a8\"}],\"icalURL\":\"https://calendar.google.com/calendar/ical/wsb.vnext%40gmail.com/public/basic.ics\",\"websiteId\":\"12319777-5597-4574-9344-c99777374329\",\"accountId\":\"7f2f4757-b736-11ed-82d2-3417ebe7253b\",\"pageId\":\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\",\"id\":\"93dd4415-26a2-47c1-b1de-c021866f9591\",\"staticContent\":{\"moreEvents\":\"More Events\",\"editNoEvents\":\"No upcoming events.\",\"publishNoEvents\":\"Calendar synced! But no event found in current calendar.\",\"eventDetails\":\"Event Details\",\"allDay\":\"All day\",\"defaultEvents\":{\"one\":{\"title\":\"Sunday Supper Club\",\"desc\":\"A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn cooking methods from top chefs.\",\"location\":\"144 W Elm St, Chicago, IL 60610, USA\"},\"two\":{\"title\":\"Evenings in the Park\",\"desc\":\"We invite you to listen to live bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tastings hosted by 5th Ave Wines and Spirits.\",\"location\":\"Estuary Park\"},\"three\":{\"title\":\"Morning Brews & Views\",\"desc\":\"Enjoy free samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet coffee drinks to perk up your day. Complimentary biscuits for everyone!\",\"location\":\"The Teapot and Brew Club\"},\"four\":{\"title\":\"Super Saturday Sale\",\"desc\":\"Every Saturday join us at The Depot for our weekly Super Sale! All items are slashed in price. Bring the whole family.\",\"location\":\"The Depot at 100 Liberty Street\"}}},\"isManual\":true,\"widgetId\":\"93dd4415-26a2-47c1-b1de-c021866f9591\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"order\":1,\"widgetId\":\"93dd4415-26a2-47c1-b1de-c021866f9591\",\"widgetType\":\"CALENDAR\",\"widgetPreset\":\"calendar1\",\"group\":\"Group\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    radpack: "@widget/CALENDAR/bs-calendar"
}, false);
Core.utils.deferBootstrap({
    elId: 'bs-3',
    componentName: '@widget/SUBSCRIBE/bs-subscribe2-subscribe-form',
    props: JSON.parse("{\"upgradeable\":false,\"preset\":\"subscribe2\",\"id\":\"a5d906db-2b6b-440a-b7a7-68698ca5a897\",\"isInternalPage\":false,\"websiteId\":\"12319777-5597-4574-9344-c99777374329\",\"accountId\":\"7f2f4757-b736-11ed-82d2-3417ebe7253b\",\"hasNonCommercePlan\":true,\"couponToggleHidden\":false,\"sectionTitle\":\"Subscribe\",\"staticContent\":{\"defaultButtonLabel\":\"Sign Up\",\"emailPlaceholderText\":\"Email Address\",\"verificationText\":\"To let us know it's really you and that you'd like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.\",\"emailErrorMessage\":\"Please enter a valid email address.\"},\"confirmationMessage\":\"Excellent! We're excited to send you our next update.\",\"couponConfirmationMessage\":\"Thanks so much for signing up!\",\"description\":\"Sign up to hear from us about sales and gaming events.\",\"inputPlaceholder\":\"Email Address\",\"subscribeButtonLabel\":\"Sign up\",\"couponToggle\":false,\"couponDiscount\":0,\"couponDiscountMessage\":\"Use this coupon code {coupon_code} for {discount}% off your first purchase.\",\"couponDescription\":\"Get 10% off your first purchase when you sign up for our newsletter!\",\"widgetId\":\"a5d906db-2b6b-440a-b7a7-68698ca5a897\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"order\":2,\"widgetId\":\"a5d906db-2b6b-440a-b7a7-68698ca5a897\",\"widgetType\":\"SUBSCRIBE\",\"widgetPreset\":\"subscribe2\",\"group\":\"Group\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    radpack: "@widget/SUBSCRIBE/bs-subscribe2-subscribe-form"
}, false);
Core.utils.deferBootstrap({
    elId: 'bs-4',
    componentName: '@widget/REVIEWS/bs-Component',
    props: JSON.parse("{\"hasBgImage\":true,\"upgradeable\":false,\"preset\":\"reviews1\",\"id\":\"7e2ae48c-3b97-4a87-89f1-c053bd0d1e9e\",\"planType\":\"freemiumV1\",\"market\":\"en-PK\",\"publishDate\":\"2023-02-28T07:17:10.765Z\",\"fbPageId\":null,\"gmbShowPendingMessage\":false,\"publishAfterLastUpgrade\":false,\"providerType\":\"facebook\",\"isInternalPage\":false,\"isReseller\":false,\"accountId\":\"7f2f4757-b736-11ed-82d2-3417ebe7253b\",\"viewDevice\":null,\"sectionTitle\":\"Reviews\",\"background\":{\"hasAlpha\":false,\"width\":\"NaN%\",\"left\":\"NaN%\",\"height\":\"NaN%\",\"position\":\"50% 50%\",\"editedAspectRatio\":\"1\",\"imageDimension\":null,\"overlayAlpha\":24,\"colors\":[{\"hex\":\"#e5d1b6\",\"rgb\":[229,209,182],\"hsluv\":[58.51283867315695,33.29099068389294,84.51533239520698],\"distance\":88.00696712657727},{\"hex\":\"#eec095\",\"rgb\":[238,192,149],\"hsluv\":[47.57875482227196,61.45205012430941,80.4824725289539],\"distance\":86.7598407492245},{\"hex\":\"#b39877\",\"rgb\":[179,152,119],\"hsluv\":[54.29615335110656,40.92000904262101,64.23064716259297],\"distance\":68.4734707150526},{\"hex\":\"#be8a5f\",\"rgb\":[190,138,95],\"hsluv\":[42.20855440274883,58.203339922713226,61.390230099313726],\"distance\":67.32781007603712},{\"hex\":\"#7c4b16\",\"rgb\":[124,75,22],\"hsluv\":[39.77816826984366,90.1921112354025,36.55510021418387],\"distance\":45.684806249584796},{\"hex\":\"#355d6b\",\"rgb\":[53,93,107],\"hsluv\":[221.1340161966433,65.55708682742338,37.057150597336566],\"distance\":44.22712043618069},{\"hex\":\"#6a5440\",\"rgb\":[106,84,64],\"hsluv\":[47.044924131488266,43.77152272399143,37.29167793178748],\"distance\":41.79951054899632},{\"hex\":\"#6d4b31\",\"rgb\":[109,75,49],\"hsluv\":[39.98387522598093,60.3902191505976,34.87742432515266],\"distance\":41.02751256028459},{\"hex\":\"#4b260e\",\"rgb\":[75,38,14],\"hsluv\":[31.144006912448642,82.98743968595512,19.608486667616866],\"distance\":27.993741766524735},{\"hex\":\"#3f281a\",\"rgb\":[63,40,26],\"hsluv\":[35.61521295000045,57.46774330867317,18.496595863012452],\"distance\":24.342301340963104},{\"hex\":\"#3a281e\",\"rgb\":[58,40,30],\"hsluv\":[36.003915507387674,44.64970921450549,17.88720510604044],\"distance\":22.452186903900397},{\"hex\":\"#100c0e\",\"rgb\":[16,12,14],\"hsluv\":[335.2142399120495,10.660606913008156,3.64011526330002],\"distance\":3.6401152633000198}],\"top\":\"NaN%\",\"oHeight\":1440,\"oWidth\":1985,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/stock/u4kOnlRnRmCnPl0Ea\",\"coordinates\":{\"x\":null,\"y\":null},\"rotation\":\"0\"},\"staticContent\":{\"txtPendingValidation\":\"Pending Validation\",\"reviewTitle\":\"Title\",\"add\":\"Add\",\"doesNotRecommend\":\"Doesn't recommend\",\"noWrittenReviews\":\"This customer did not write a review.\",\"connectionSuccess\":\"Successfully Connected!\",\"cantConnect\":\"Why can't I connect yet?\",\"reviewDate\":\"Review Date\",\"productReview\":\"{totalReviews} Product Review\",\"viewAllProductReviews\":\"View All {totalReviews} Product Reviews\",\"upgradeMessage\":\"Your site needs to have an online store to use {provider} reviews\",\"productReviews\":\"{totalReviews} Product Reviews\",\"goToProduct\":\"Go to {productName}\",\"anonymous\":\"Anonymous\",\"gmb3Days\":\"It may take up to 3 days to validate your business. Until then, reviews will not appear on your site.\",\"noReviewsYet\":\"There are no reviews yet.\",\"reviewerName\":\"Reviewer Name\",\"basedOn\":\"Based on the opinion of {reviewCount} people\",\"photo\":\"Photo\",\"gmbAwaitingData\":\"We are waiting for data. Please check back later\",\"reviewLink\":\"Review Link\",\"basedOnOne\":\"Based on the opinion of 1 person\",\"gmbUnderReview\":\"Google is reviewing your business info. We'll let you know when your listing is live.\",\"gmbPublishMessage\":\"Your website needs to be published before connecting to Google My Business.\",\"sourceMsgStatic\":\"Add reviews manually\",\"manualReviews\":\"Reviews\",\"ratingNone\":\"None\",\"reviewRating\":\"Rating\",\"percentRecommend\":\"{percent} recommend\",\"connectMsg\":\"To show reviews on your site, connect your account to {provider}\",\"twentyFourHourLag\":\"Data may take up to 24 hours to display.\",\"recommends\":\"Recommends\",\"reviewFirst\":\"Be the first to leave a review\",\"review\":\"{totalReviews} Review\",\"publishMessage\":\"Your website needs to be published before connecting to {provider}\",\"sourceMsgDynamic\":\"Connect to external source\",\"reviewBody\":\"Review\",\"upgradeNow\":\"Add Store Now\",\"viewMore\":\"View More\",\"reviews\":\"{totalReviews} Reviews\",\"cantConnectMsg\":\"Your website needs to be published before connecting to {provider}\",\"comingSoon\":\"Reviews coming soon!\",\"readFullReview\":\"Read full review\",\"labelForDeleteManualReview\":\"Delete Review\",\"gmbNoReviews\":\"You are successfully connected but there are no reviews yet.\",\"connectBtnText\":\"Connect to {provider}\",\"viewAllReviews\":\"View All {totalReviews} Reviews\"},\"websiteId\":\"12319777-5597-4574-9344-c99777374329\",\"sourceType\":\"dynamic\",\"manualReviews\":[{\"photo\":{},\"title\":\"Title 1\",\"body\":\"Review 1\",\"rating\":\"0\",\"name\":\"Anonymous\",\"date\":\"2/28/2023\"},{\"photo\":{},\"title\":\"Title 2\",\"body\":\"Review 2\",\"rating\":\"0\",\"name\":\"Anonymous\",\"date\":\"2/28/2023\"},{\"photo\":{},\"title\":\"Title 3\",\"body\":\"Review 3\",\"rating\":\"0\",\"name\":\"Anonymous\",\"date\":\"2/28/2023\"}],\"widgetId\":\"7e2ae48c-3b97-4a87-89f1-c053bd0d1e9e\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"order\":3,\"widgetId\":\"7e2ae48c-3b97-4a87-89f1-c053bd0d1e9e\",\"widgetType\":\"REVIEWS\",\"widgetPreset\":\"reviews1\",\"group\":\"Section\",\"groupType\":\"Banner\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    radpack: "@widget/REVIEWS/bs-Component"
}, false);
Core.utils.deferBootstrap({
    elId: 'bs-5',
    componentName: '@widget/CONTACT/bs-contact1-contact-form',
    props: JSON.parse("{\"formTitle\":\"Get in Touch\",\"formFields\":[{\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"required\":false,\"keyName\":\"name\"},{\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true,\"keyName\":\"email\"},{\"type\":\"MULTI_LINE\",\"label\":\"Message\",\"required\":false,\"keyName\":\"message\"},{\"type\":\"ATTACHMENT\",\"label\":\"Attachments\",\"required\":false,\"attachmentsEnabled\":false,\"attachmentsLabel\":\"\"},{\"type\":\"SUBMIT\",\"label\":\"Send Message\",\"required\":false}],\"blankInfo\":false,\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"showMap\":false,\"recaptchaEnabled\":true,\"recaptchaType\":\"V3\",\"domainName\":\"ommygames.com\",\"formSuccessMessage\":\"Thank you for your inquiry! We will get back to you within 48 hours.\",\"formEnabled\":true,\"websiteId\":\"12319777-5597-4574-9344-c99777374329\",\"pageId\":\"1221bfe9-c33d-44a1-ade6-d3a071ee15b0\",\"accountId\":\"7f2f4757-b736-11ed-82d2-3417ebe7253b\",\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up for our email list for updates, promotions, and more.\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"widgetId\":\"e748caad-bd32-45ac-b422-267d8fbf9a82\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"order\":5,\"widgetId\":\"e748caad-bd32-45ac-b422-267d8fbf9a82\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact7\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    radpack: "@widget/CONTACT/bs-contact1-contact-form"
}, false);
Core.utils.renderBootstrap({
    elId: 'bs-6',
    componentName: '@widget/MESSAGING/bs-Component',
    props: JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"2132524d-7526-486a-bf58-37b5ea2881fa\",\"isMobile\":null,\"websiteId\":\"12319777-5597-4574-9344-c99777374329\",\"accountId\":\"7f2f4757-b736-11ed-82d2-3417ebe7253b\",\"isReseller\":false,\"domainName\":\"ommygames.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"OmmyGames\",\"reamazeBrandId\":null,\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"cookieBannerEnabled\":true,\"notificationPreference\":\"EMAIL\",\"formEmail\":\"gamesommy@gmail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"reamazePosition\":\"bottom-right\",\"reamazeThemeColor\":\"#b50000\",\"reamazePromptEnabled\":true,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"reamazeDismissCarousel\":false,\"widgetId\":\"2132524d-7526-486a-bf58-37b5ea2881fa\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-PK\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"2132524d-7526-486a-bf58-37b5ea2881fa\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-93dd4415-26a2-47c1-b1de-c021866f9591-bootstrap-container',
    radpack: "@widget/MESSAGING/bs-Component"
});
window.wsb["CookieBannerScript"] = function(e) {
    let {
        id: t,
        acceptCookie: o,
        dismissCookie: a
    } = e;
    const n = 864e5;
    let i, l, r;

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
        const o = new Date;
        o.setTime(o.getTime() + n * t);
        const a = `expires=${o.toUTCString()}`;
        document.cookie = `${e}=true;${a};path=/`
    }

    function c(e) {
        return document.cookie.includes(e)
    }

    function p() {
        l && l.removeEventListener("click", g), r && r.removeEventListener("click", d), i.style.display = "none"
    }

    function g(e) {
        e.preventDefault(), u(), s(a), s(o), p()
    }

    function d(e) {
        var t;
        e.preventDefault(), s(a), c(o) && (t = o, document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`), p()
    }

    function u() {
        window._allowCT = !0, window._allowCTListener && window._allowCTListener.forEach((e => e()))
    }
    c(o) ? u() : c(a) || setTimeout((() => {
        i = document.getElementById(`${t}-banner`), l = document.getElementById(`${t}-accept`), r = document.getElementById(`${t}-decline`), l && l.addEventListener("click", g), r && r.addEventListener("click", d), i.style.transform = "translateY(-500px)"
    }), 200)
};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"34c1a2d1-7f8c-41d9-aca0-5ea2a44291e8\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-66552').addEventListener('click', function() {}, false);
var t = document.createElement("script");
t.type = "text/javascript", t.addEventListener("load", () => {
    window.tti.calculateTTI(({
        name: t,
        value: e
    } = {}) => {
        let i = {
            "wam_site_hasPopupWidget": false,
            "wam_site_hasMessagingWidget": true,
            "wam_site_headerTreatment": false,
            "wam_site_hasSlideshow": false,
            "wam_site_hasFreemiumBanner": true,
            "wam_site_homepageFirstWidgetType": "ABOUT",
            "wam_site_homepageFirstWidgetPreset": "about1",
            "wam_site_businessCategory": "role_playing_games",
            "wam_site_theme": "layout30",
            "wam_site_locale": "en-PK",
            "wam_site_fontPack": "league-spartan",
            "wam_site_cookieBannerEnabled": true,
            "wam_site_membershipEnabled": true,
            "wam_site_hasHomepageHTML": false,
            "wam_site_hasHomepageShop": false,
            "wam_site_hasHomepageOla": false,
            "wam_site_hasHomepageBlog": false,
            "wam_site_hasShop": false,
            "wam_site_hasOla": false,
            "wam_site_planType": "freemiumV1",
            "wam_site_isHomepage": true,
            "wam_site_htmlWidget": false
        };
        window.networkInfo && window.networkInfo.downlink && (i = Object.assign({}, i, {
            ["wam_site_networkSpeed"]: window.networkInfo.downlink.toFixed(2)
        })), window.tti.setCustomProperties(i), window.tti._collectVitals({
            name: t,
            value: e
        })
    })
}), t.setAttribute("src", "//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"), document.body.appendChild(t);