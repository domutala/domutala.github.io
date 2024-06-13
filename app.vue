<script lang="ts" setup>
import useAppStore from "~/store/app";

const appStore = useAppStore();
const { $vuetify } = useNuxtApp();

onMounted(mounted);
function mounted() {
  appStore.setMode("dark");
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addEventListener("change", () => {
    appStore.setMode(appStore.mode.value);
  });
  $vuetify.theme.global.name.value = appStore.mode.use;
}

watch(
  () => appStore.mode.use,
  () => {
    $vuetify.theme.global.name.value = appStore.mode.use;
  }
);
</script>

<template>
  <nuxt-page />
</template>
