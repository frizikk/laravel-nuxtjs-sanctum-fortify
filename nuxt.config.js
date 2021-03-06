require("dotenv").config();
const development = process.env.NODE_ENV !== "production";

export default {
    srcDir: "resources/nuxt",
    ssr: false,

    head: {
        titleTemplate: "%s - " + process.env.APP_NAME,
        title: process.env.APP_NAME || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.APP_DESC || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    loading: { color: "#fff" },
    css: [],
    plugins: [],
    modules: ["nuxt-laravel", "@nuxtjs/axios", "@nuxtjs/auth-next"],
    buildModules: [
        ['@nuxtjs/dotenv', { path: './' }],
        "@nuxtjs/eslint-module",
        "bootstrap-vue/nuxt"
    ],

    laravel: { publicDir: "public" },
    bootstrapVue: { icons: true },
    router: { base: "/" },
    axios: {
        baseURL: development ? process.env.DEV_URL : undefined,
        credentials: true
    },
    build: { extend(config, ctx) {} },

    auth: {
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: development ? process.env.LARAVEL_DEV_URL : process.env.APP_URL
            }
        }
    }
};
