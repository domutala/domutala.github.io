<script lang="ts" setup>
import useAppStore from "~/store/app";

const appStore = useAppStore();
async function submit(mode: string | null) {
  appStore.setMode(mode);
}
</script>

<template>
  <div class="d-flex align-center justify-center ga-2">
    <v-btn
      v-if="appStore.mode.value === null"
      variant="text"
      color="dark"
      rounded="pill"
      size="small"
      icon
      @click="submit('light')"
    >
      <svg-icon name="computer" width="20" height="20" />
    </v-btn>
    <v-btn
      v-else-if="appStore.mode.value === 'light'"
      variant="text"
      color="dark"
      rounded="pill"
      size="small"
      icon
      @click="submit('dark')"
    >
      <svg-icon name="sun" width="20" height="20" />
    </v-btn>
    <v-btn
      v-else
      variant="text"
      color="dark"
      rounded="pill"
      size="small"
      icon
      @click="submit(null)"
    >
      <svg-icon name="moon" width="20" height="20" />
    </v-btn>
  </div>
</template>
