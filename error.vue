<script setup lang="ts">
const props = defineProps({ error: { type: Object } });
const { t } = useI18n({ useScope: "local" });

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <v-app>
    <div
      class="error-page"
      style=""
    >
      <img
        class="error-page-bg"
        src="~/assets/images/hero.png"
        alt=""
      />

      <v-container class="my-16">
        <div class="text-center">
          <div
            style="
              width: 48px;
              height: 48px;
              border-radius: 100%;
              overflow: hidden;
              background: rgb(var(--primary));
              background: linear-gradient(
                65deg,
                rgba(var(--v-theme-secondary), 1) 0%,
                rgba(var(--v-theme-primary), 1) 90%
              );
              margin: auto;
              margin-bottom: 15px;
            "
          >
            <v-img
              src="~/assets/images/domutala_004.png"
              alt="@domutala - Mamadou DIA"
              class="w-100 h-100"
            ></v-img>
          </div>

          <div
            class="px-2 py-1 bg-background mx-auto text-body-2 border border-primary border-md rounded-pill text-prumary font-weight-bold mt-2 bg-background"
            style="width: max-content"
          >
            @domutala
          </div>

          <h2 class="text-h1 mt-3">{{ error.statusCode }}</h2>

          <v-btn
            rounded="xl"
            color="primary"
            size="large"
            class="mt-5"
            @click="handleError"
          >
            {{ t("gotohome") }}

            <template #prepend>
              <i class="fi fi-sr-house-blank"></i>
            </template>
          </v-btn>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    position: relative;
  }

  .error-page-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>

<i18n lang="json" src="./error.lang.json"></i18n>
