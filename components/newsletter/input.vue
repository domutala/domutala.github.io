<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });

const loading = ref(false);
const form = ref();
const valid = ref(false);

const email = ref("");
const rules = [
  (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (re.test(value)) return true;
    return t("invalid-email");
  },
];

async function submit() {
  console.log("okay", form.value);

  if (loading.value) return;

  await form.value?.validate();
  if (!valid.value) return;

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submit"
  >
    <v-text-field
      rounded="pill"
      :placeholder="t('placeholder')"
      variant="solo-filled"
      type="email"
      v-model:model-value="email"
      required
      :rules="rules"
      validate-on="submit"
    >
      <template #append-inner>
        <div>
          <v-btn
            v-if="email"
            icon
            color="success"
            size="small"
            type="submit"
            :loading="loading"
            @click="submit"
          >
            <i class="fi fi-rr-paper-plane"></i>
          </v-btn>
          <i
            v-else
            class="fi fi-rr-envelope-open-text mr-3"
          ></i>
        </div>
      </template>
    </v-text-field>

    <button type="submit"></button>
  </v-form>
</template>

<i18n lang="json" src="./lang.json"></i18n>
