import type { IStack } from ".";

export const nuxt: IStack = {
  code: "nuxt",
  name: "Nuxt",
  icon: "stack/nuxt",
  logo: "stack/nuxt-logo",
  subStacks: {},
  codes: {
    default: {
      language: "javascript",
      code: `import i18nConfig from "./i18n.config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["vuetify-nuxt-module", "@nuxtjs/svg-sprite", "@nuxtjs/i18n"],

  css: ["~/styles/main.scss"],

  components: [{ path: "@/components", global: true, prefix: "ui" }],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "wlf", "fr"],
    vueI18n: "./i18n.config.ts",
  },
});`,
    },
  },
};

const vuejs: IStack = {
  code: "vuejs",
  name: "Vue.js",
  icon: "stack/vuejs",
  subStacks: { nuxt },
  codes: {
    default: {
      language: "javascript",
      code: `<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>`,
    },
  },
};

export default vuejs;
