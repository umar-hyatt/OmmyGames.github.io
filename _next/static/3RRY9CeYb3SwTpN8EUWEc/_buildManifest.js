self.__BUILD_MANIFEST = function(s, c, e, t) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en|de|es|fr|it|nl|pt)/robots.txt",
                destination: "/:nextInternalLocale/api/robots"
            }, {
                source: "/:nextInternalLocale(en|de|es|fr|it|nl|pt)/sitemap",
                destination: "/:nextInternalLocale/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-05b27410f3eae19c.js"],
        "/_error": ["static/chunks/pages/_error-b81aa5d043cb9f7e.js"],
        "/blog": [s, t, c, e, "static/chunks/pages/blog-d9131fd3351c9fdf.js"],
        "/blog/[slug]": [s, t, c, e, "static/chunks/pages/blog/[slug]-1803a3452b2eff5c.js"],
        "/checkout/[...idInvoice]": [s, t, c, e, "static/chunks/pages/checkout/[...idInvoice]-257c902bd3d4458c.js"],
        "/contact-form": [s, t, "static/css/b44e452a9b15cc82.css", "static/chunks/9198-189c9ea729df928e.js", "static/chunks/5188-5c5ad3f989ddde8d.js", c, e, "static/chunks/pages/contact-form-e40dd69b75727bc4.js"],
        "/error/404": [s, c, e, "static/chunks/pages/error/404-519055fe16a5d172.js"],
        "/error/500": [s, c, e, "static/chunks/pages/error/500-57fe6612a20bb0df.js"],
        "/invoice/print/[idInvoice]": ["static/chunks/65291039-4f3f6955e28c2474.js", "static/chunks/1b8dab7b-a842008c24e6265c.js", "static/chunks/228771e0-1847fb34b4287f6e.js", "static/chunks/c9184924-6d73ccdc8ffe0fdd.js", s, t, "static/chunks/9668-16c024fab45e9f26.js", c, e, "static/chunks/pages/invoice/print/[idInvoice]-d3593dab0075b937.js"],
        "/invoice/[idInvoice]": [s, t, c, e, "static/chunks/pages/invoice/[idInvoice]-00699f2917f424e3.js"],
        "/unpublished": [s, c, e, "static/chunks/pages/unpublished-9a8906b31f848c42.js"],
        "/[[...slug]]": [s, c, e, "static/chunks/pages/[[...slug]]-1d5d5ce4ad947809.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/unpublished", "/[[...slug]]"]
    }
}("static/chunks/2379-407b804abe85df0d.js", "static/chunks/9623-f34fd1c22081c214.js", "static/css/c2c4e2b9bf1b95af.css", "static/chunks/120-9aa0e12b8112f0af.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();