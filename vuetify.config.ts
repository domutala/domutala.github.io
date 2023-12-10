// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import colors from "vuetify/util/colors";

export default {
  theme: {
    defaultTheme: "light",

    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#3936f5",
          surface: "#e7e7e7",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#3936f5",
        },
      },
    },
  },

  defaults: {
    VBtn: {
      variant: "elevated",
      style: { "text-transform": "none" },
    },
    VTextField: {
      variant: "outlined",
    },
  },
} satisfies ExternalVuetifyOptions;
