import { defineNuxtConfig } from "nuxt/config";

type ImageRoutesExtension = "jpg" | "png";

const generateImageRoutesForProject = (
    projectId: string,
    numberOfImages: number,
    extension: ImageRoutesExtension,
): string[] =>
    Array.from(
        { length: numberOfImages },
        (_, i) => `/_ipx/f_webp/img/projects/${projectId}${i + 2}.${extension}`,
    );

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
                ...generateImageRoutesForProject("ti", 2, "jpg"),
                ...generateImageRoutesForProject("ad", 4, "jpg"),
                ...generateImageRoutesForProject("bm", 6, "jpg"),
                ...generateImageRoutesForProject("m", 4, "png"),
                ...generateImageRoutesForProject("pmk", 7, "png"),
                ...generateImageRoutesForProject("pt", 4, "png"),
            ],
        },
    },

    compatibilityDate: "2025-03-15",
});
