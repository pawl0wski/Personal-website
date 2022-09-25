export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Jakub Pawłowski",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "format-detection", content: "telephone=no" },
            {
                name: "keywords",
                content:
                    "portfolio, fullstack, pawl0wski, github, programming, developer, typescript, javascript, python, dart, flutter, programmer",
            },
            {
                property: "og:image",
                content: "/img/thumbnail.jpeg",
            },
            {
                property: "og:type",
                content: "website",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~assets/scss/main.scss",
        "animate.css/animate.min.css",
        "@fortawesome/fontawesome-free/css/fontawesome.css",
        "@fortawesome/fontawesome-free/css/solid.css",
        "@fortawesome/fontawesome-free/css/brands.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: "~/lib/locale/localePlugin.ts" }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "@nuxt/image",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "@nuxtjs/google-fonts",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    styleResources: {
        scss: ["./assets/scss/*.scss"],
    },

    script: [
        {
            src: "@fortawesome/fontawesome-free/js/fontawesome.min.js",
        },
        {
            src: "@fortawesome/fontawesome-free/js/solid.min.js",
        },
        {
            src: "@fortawesome/fontawesome-free/js/brands.min.js",
        },
    ],

    // Google Fonts
    googleFonts: {
        families: {
            Inter: [400, 700, 900],
        },
    },
};
