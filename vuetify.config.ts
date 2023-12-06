// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";

export default {
  theme: {
    defaultTheme: "ligth",

    themes: {
      ligth: {
        dark: true,
        colors: {
          primary: "#fe3282",
        },
      },
    },
  },

  defaults: {
    VBtn: {
      variant: "flat",
      style: { "text-transform": "none" },
    },
    VTextField: {
      variant: "outlined",
    },
  },
} satisfies ExternalVuetifyOptions;
