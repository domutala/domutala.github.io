<script lang="ts" setup>
const theme = useTheme();
const themeMode = ref<"dark" | "light" | null>(null);

function nativeThemeMode(): "dark" | "light" {
  let nativeThemeMode: "dark" | "light" = "dark";

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    nativeThemeMode = "dark";
  } else {
    nativeThemeMode = "light";
  }

  return nativeThemeMode;
}

function toggle() {
  let themeMode = sessionStorage.getItem("theme-mode");
  if (themeMode === null) {
    themeMode = nativeThemeMode() === "dark" ? "light" : "dark";
  } else if (themeMode === "light") {
    themeMode = "dark";
  } else {
    themeMode = null;
  }

  if (themeMode) sessionStorage.setItem("theme-mode", themeMode);
  else sessionStorage.removeItem("theme-mode");

  setThemeMode();
}

onMounted(setThemeMode);
function setThemeMode() {
  themeMode.value = sessionStorage.getItem("theme-mode") as any;
  let _themeMode = themeMode.value;

  if (!_themeMode) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      _themeMode = "dark";
    } else {
      _themeMode = "light";
    }
  }

  theme.global.name.value = _themeMode;
}
</script>

<template>
  <v-btn
    rounded="xl"
    color="black"
    class="text-h6"
    @click="toggle"
    icon
    size="small"
  >
    <i
      class="fr"
      :class="{
        'fi-br-brightness': themeMode === 'light',
        'fi-sr-moon': themeMode === 'dark',
        'fi-rr-screen': !themeMode,
      }"
    ></i>
  </v-btn>
</template>
