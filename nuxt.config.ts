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
          content: "Freelancer - fullstack developper",
        },
      ],

      title: "Mamadou DIA - portofolio",
    },
  },

  modules: ["vuetify-nuxt-module", "@nuxtjs/svg-sprite"],

  css: ["~/styles/main.scss", "@flaticon/flaticon-uicons/css/all/all.css"],

  components: [{ path: "@/components/ui", global: true, prefix: "ui" }],
});
