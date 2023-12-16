<script setup>
const { t } = useI18n({ useScope: "local" });

const links = {
  // mail: { url: "https://github.com/domutala", icon: "fi fi-sr-envelope" },
  github: { url: "https://github.com/domutala", icon: "fi fi-brands-github" },
  linkedin: {
    url: "https://www.linkedin.com/in/mamadou-dia-a06a67166",
    icon: "fi fi-brands-linkedin",
  },
  discord: {
    url: "https://discord.gg/uTCHgBNdTg",
    icon: "fi fi-brands-discord",
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
            src="~/assets/images/domutala_004.png"
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
            <i
              class="text-h5"
              :class="link.icon"
            ></i>
          </v-btn>
        </div>

        <div
          style="width: 552px; max-width: 90%; margin: auto; margin-top: 15px"
        >
          <v-text-field
            rounded="pill"
            :placeholder="t('newsletter.placeholder')"
            variant="solo-filled"
            type="email"
          >
            <template #append-inner>
              <i class="fi fi-rr-envelope-open-text mr-3"></i>
            </template>
          </v-text-field>
        </div>
      </div>
    </v-container>

    <div
      class="d-flex align-center mt-auto mb-5"
      style="width: 90%; margin: auto; margin-top: 20px"
    >
      <div class="d-flex align-center ga-2">
        {{ t("madeWith") }} <i class="fi fi-sr-heart text-red"></i>
      </div>

      <v-spacer />
      <!-- <v-btn
        rounded="xl"
        color="white"
        class="mr-5"
      >
        En savoir plus
        <template #append>
          <i class="fi fi-sr-comments"></i>
        </template>
      </v-btn> -->

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
