import i18nConfig from "./i18n.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["vuetify-nuxt-module", "@nuxtjs/svg-sprite", "@nuxtjs/i18n"],

  css: ["~/styles/main.scss", "@flaticon/flaticon-uicons/css/all/all.css"],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "wlf", "fr"],
    vueI18n: "./i18n.config.ts",
  },
});
