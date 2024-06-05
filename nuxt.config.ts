import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({

    modules: ["@nuxt/image", "@nuxt/eslint",
        ["@nuxtjs/google-fonts", {
            families: {
                Rubik: [400, 700, 900]
            }
        }]],

    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
        head: {
            title: "Jakub Pawłowski",
            htmlAttrs: {
                lang: "en"
            },
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                { name: "format-detection", content: "telephone=no" },
                {
                    name: "keywords",
                    content:
                        "portfolio, fullstack, pawl0wski, github, programming, developer, typescript, javascript, python, dart, flutter, programmer"
                },
                {
                    property: "og:image",
                    content: "/img/thumbnail.jpg"
                },
                {
                    property: "og:type",
                    content: "website"
                }
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
            script: [
                {
                    src: "@fortawesome/fontawesome-free/js/fontawesome.min.js"
                },
                {
                    src: "@fortawesome/fontawesome-free/js/solid.min.js"
                },
                {
                    src: "@fortawesome/fontawesome-free/js/brands.min.js"
                }
            ]
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "assets/scss/main.scss",
        "animate.css",
        "@fortawesome/fontawesome-free/css/fontawesome.css",
        "@fortawesome/fontawesome-free/css/solid.css",
        "@fortawesome/fontawesome-free/css/brands.css"
    ],

    components: true,

    build: {},

});
