<script setup lang="ts">
defineProps({ error: { type: Object, required: true } });
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <v-app>
    <div class="error-page" style="">
      <v-container class="my-16">
        <div class="text-center">
          <h2 class="text-h1">{{ error.statusCode }}</h2>

          <v-btn
            color="dark"
            size="large"
            class="mt-5"
            variant="tonal"
            @click="handleError"
            icon
          >
            <i class="fi fi-sr-house-blank" style="font-size: 24px"></i>
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
}
</style>
