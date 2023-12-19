<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });

const trusts = [
  { name: "Novazeo", logo: "/parteners/novazeo.png" },
  { name: "Cegedim", logo: "/parteners/cegedim.png" },
  { name: "Sapco", logo: "/parteners/sapco.png" },
  { name: "Dev Foryou", logo: "/parteners/devforyou.png" },
  { name: "Barnani Com", logo: "/parteners/barnanicom.png" },
];
</script>

<template>
  <div class="py-16">
    <v-container>
      <div class="text-center">
        <svg-icon
          name="trust"
          style="width: 56px; height: 56px"
          class="text-primary"
        />
        <div
          class="px-2 py-1 bg-background mx-auto text-body-2 border border-primary border-md rounded-pill text-prumary font-weight-bold mt-2 bg-background"
          style="width: max-content"
        >
          {{ t("parteners") }}
        </div>

        <h2
          style="max-width: 662px"
          class="text-h4 text-sm-h4 font-weight-black mx-auto mt-5"
        >
          {{ t("title") }}
        </h2>
      </div>

      <div
        class="d-flex flex-wrap justify-center mt-10"
        style="gap: 50px"
      >
        <div
          v-for="(trust, t) in trusts"
          :key="t"
          class="trust"
        >
          <img
            :src="trust.logo"
            :alt="trust.name"
            style="width: 64px"
          />
          <div class="name font-weight-bold">{{ trust.name }}</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.trust {
  text-align: center;
  width: 100px;
  height: 100px;

  &:not(:hover) {
    img {
      filter: grayscale(100%);
    }

    .name {
      display: none;
    }
  }
}
</style>

<i18n lang="json" src="./lang.json"></i18n>
