// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";

const primaryColor = "#ff8617";
const secondaryColor = "#fbbf24";

export default {
  theme: {
    defaultTheme: "light",

    themes: {
      light: {
        dark: false,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          surface: "#e7e7e7",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
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
