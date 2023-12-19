<script setup>
const { t } = useI18n({ useScope: "local" });

const links = {
  // mail: { url: "https://github.com/domutala", icon: "fi fi-sr-envelope" },
  github: {
    url: "https://github.com/domutala",
    icon: {
      tag: "i",
      props: {
        class: "fi fi-brands-github",
      },
    },
  },
  linkedin: {
    url: "https://www.linkedin.com/in/domutala",
    icon: {
      tag: "svg-icon",
      props: {
        name: "linkedin",
        width: "24",
        height: "24",
      },
    },
  },
  discord: {
    url: "https://discord.gg/uTCHgBNdTg",
    icon: {
      tag: "i",
      props: {
        class: "fi fi-brands-discord",
      },
    },
  },

  malt: {
    url: "https://www.malt.fr/profile/domutala",
    icon: {
      tag: "svg-icon",
      props: {
        name: "malt",
        width: "24",
        height: "24",
      },
    },
  },
};
</script>

<template>
  <v-footer
    class="ui--footer d-flex flex-column"
    color="transparent"
  >
    <img
      class="footer--bg"
      src="~/assets/images/hero_02.png"
      alt=""
    />

    <div class="h-100 d-flex align-center justify-center">
      <v-container class="mb-16">
        <div class="text-center mt-16">
          <div
            style="
              width: 64px;
              height: 64px;
              border-radius: 100%;
              overflow: hidden;
              background: rgb(var(--primary));
              background: linear-gradient(
                65deg,
                rgba(var(--v-theme-secondary), 1) 0%,
                rgba(var(--v-theme-primary), 1) 90%
              );
              margin: auto;
            "
          >
            <v-img
              src="~/assets/images/domutala_002.png"
              alt="@domutala - Mamadou DIA"
              class="w-100 h-100"
            ></v-img>
          </div>
          <div
            class="px-3 bg-background mx-auto text-body-2 border border-primary border-md rounded-pill text-prumary font-weight-bold mt-2"
            style="
              border-color: rgb(var(--v-theme-primary));
              padding-top: 2px;
              padding-bottom: 2px;
              width: max-content;
            "
          >
            @domutala
          </div>

          <div class="mt-3">
            <v-btn
              v-for="(link, l) in links"
              :key="l"
              variant="text"
              icon
              tag="a"
              target="_blank"
              :href="link.url"
            >
              <component
                :is="link.icon.tag"
                class="text-h5"
                v-bind="link.icon.props"
              />
            </v-btn>
          </div>

          <!-- <div
            style="width: 552px; max-width: 90%; margin: auto; margin-top: 15px"
          >
            <ui-newsletter-input />
          </div> -->
        </div>
      </v-container>
    </div>

    <div
      class="d-flex align-center mt-auto mb-5"
      style="width: 90%; margin: auto; margin-top: 20px"
    >
      <div class="d-flex align-center ga-2">
        {{ t("madeWith") }} <i class="fi fi-sr-heart text-primary"></i>
      </div>

      <v-spacer />

      <ui-theme />

      <div class="ml-auto">© {{ new Date().getFullYear() }}</div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
.ui--footer {
  min-height: 100vh;

  > * {
    position: relative;
  }

  .footer--bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>

<i18n lang="json" src="./lang.json"></i18n>
