// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";

const primaryColor = "#1764ff";
const secondaryColor = "#1764ff";

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
          dark: "#000",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          dark: "#fff",
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
