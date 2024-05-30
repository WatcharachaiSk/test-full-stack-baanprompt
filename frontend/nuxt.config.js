require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  head: {
    title: "baanprompt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~layouts/global.css"],
  plugins: [
    "~plugins/vuesax.js",
    "~plugins/vee-validate.js",
    {
      src: "~/plugins/amchart.js",
      ssr: false,
    },
    { src: "~plugins/vee-validate.js", ssr: true },
  ],
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/dotenv", { filename: `.env.${process.env.NODE_ENV}` }],
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/dotenv",
    "@nuxtjs/auth-next", //TODO auth
  ],
  auth: {
    //TODO auth
    strategies: {
      local: {
        token: {
          prefix: "_token.",
          property: "token",
          global: true,
          maxAge: 1800,
        },
        user: {
          property: false,
          autoFetch: false,
        },
        refreshToken: {
          property: "refresh_token",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "data.accessToken",
          },
          user: { url: "/auth/profile", method: "get", propertyName: "data" },
          logout: false,
        },
      },
    },
    redirect: {
      login: "/auth",
    },
    localStorage: {
      prefix: "auth",
    },
  },
  router: {
    middleware: ["auth"], //TODO auth
  },
  axios: {
    baseURL: process.env.BASE_API || "http://localhost:3500/api",
  },
  build: {
    transpile: ["@amcharts/amcharts5"],
    transpile: ["vee-validate/dist/rules"],
  },
  env: {
    BASE_API: process.env.BASE_API || "http://localhost:3500/api",
  },
};
