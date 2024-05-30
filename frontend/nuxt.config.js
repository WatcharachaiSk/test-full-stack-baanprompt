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
  ],

  axios: {
    baseURL: process.env.BASE_API,
  },
  router: {},
  build: {
    transpile: ["@amcharts/amcharts5"],
    transpile: ["vee-validate/dist/rules"],
  },
  env: {
    BASE_API: process.env.BASE_API || "http://localhost:3500/api",
  },
};
