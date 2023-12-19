import i18nConfig from "./i18n.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: { port: 48600 },

  ssr: false,

  app: {
    head: {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "En tant que développeur Full Stack, UI/UX Designer et chef de projet, je possède une expertise approfondie dans la conception de solutions conviviales. Mon engagement envers des standards élevés assure la réalisation ponctuelle des projets, mettant en œuvre des expériences utilisateur optimales.",
        },
      ],

      title: "@domutala - Mamadou DIA",
    },
  },

  modules: ["vuetify-nuxt-module", "@nuxtjs/svg-sprite", "@nuxtjs/i18n"],

  css: [
    "~/styles/main.scss",
    // "prismjs/themes/prism-okaidia.css",
    "@flaticon/flaticon-uicons/css/all/all.css",
    "prismjs/plugins/line-numbers/prism-line-numbers.css",
    "prismjs/plugins/line-highlight/prism-line-highlight.css",
  ],

  components: [{ path: "@/components", global: true, prefix: "ui" }],

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
    vueI18n: "./i18n.config.ts",
  },

  nitro: {
    preset: "github-pages",
  },
});
