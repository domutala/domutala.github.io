// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import colors from "vuetify/util/colors";

export default {
  theme: {
    defaultTheme: "dark",

    themes: {
      ligth: {
        dark: false,
        colors: {
          primary: "#fe3282",
          surface: "#f8f8f8",
        },
      },
      dark: {
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
