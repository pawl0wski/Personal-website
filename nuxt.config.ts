import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: [
        "@nuxt/image",
        "@nuxt/eslint",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Rubik: [400, 700, 900],
                },
            },
        ],
    ],

    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
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
                    content: "/img/thumbnail.jpg",
                },
                {
                    property: "og:type",
                    content: "website",
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "assets/scss/main.scss",
        "animate.css",
        "@fortawesome/fontawesome-free/css/fontawesome.css",
        "@fortawesome/fontawesome-free/css/solid.css",
        "@fortawesome/fontawesome-free/css/brands.css",
    ],

    components: true,

    nitro: {
        prerender: {
            routes: [
                "/_ipx/f_webp/img/projects/ti2.jpg",
                "/_ipx/f_webp/img/projects/ti3.jpg",
                "/_ipx/f_webp/img/projects/ad2.jpg",
                "/_ipx/f_webp/img/projects/ad3.jpg",
                "/_ipx/f_webp/img/projects/ad4.jpg",
                "/_ipx/f_webp/img/projects/ad5.jpg",
                "/_ipx/f_webp/img/projects/bm2.jpg",
                "/_ipx/f_webp/img/projects/bm3.jpg",
                "/_ipx/f_webp/img/projects/bm4.jpg",
                "/_ipx/f_webp/img/projects/bm5.jpg",
                "/_ipx/f_webp/img/projects/bm6.jpg",
                "/_ipx/f_webp/img/projects/bm7.jpg",
                "/_ipx/f_webp/img/projects/m2.png",
                "/_ipx/f_webp/img/projects/m3.png",
                "/_ipx/f_webp/img/projects/m4.png",
                "/_ipx/f_webp/img/projects/m5.png",
                "/_ipx/f_webp/img/projects/pmk2.png",
                "/_ipx/f_webp/img/projects/pmk3.png",
                "/_ipx/f_webp/img/projects/pmk4.png",
                "/_ipx/f_webp/img/projects/pmk5.png",
                "/_ipx/f_webp/img/projects/pmk6.png",
                "/_ipx/f_webp/img/projects/pmk7.png",
                "/_ipx/f_webp/img/projects/pmk8.png",
                "/_ipx/f_webp/img/projects/pt2.png",
                "/_ipx/f_webp/img/projects/pt3.png",
                "/_ipx/f_webp/img/projects/pt4.png",
                "/_ipx/f_webp/img/projects/pt5.png",
            ],
        },
    },
});
