<script lang="ts" setup>
interface IType {
  code: "mobile" | "tablette" | "pc";
  icon: string;
}

const type = ref<"mobile" | "tablette" | "pc">("pc");
const typeAvailables = ref<IType[]>([]);
const { t } = useI18n({ useScope: "local" });

onMounted(init);
function init() {
  addEventListener("resize", () => setTypeAvailable());
  setTypeAvailable();
}

function setTypeAvailable() {
  typeAvailables.value = [];

  if (innerWidth > 1024) {
    typeAvailables.value.push({ code: "pc", icon: "fi fi-rr-computer" });
  }
  if (innerWidth > 662) {
    typeAvailables.value.push({ code: "tablette", icon: "fi fi-rr-laptop" });
  }

  typeAvailables.value.push({ code: "mobile", icon: "fi fi-br-mobile-notch" });

  if (!typeAvailables.value.map((ta) => ta.code).includes(type.value)) {
    type.value = typeAvailables.value.map((ta) => ta.code)[0];
  }
}
</script>

<template>
  <div class="py-16">
    <v-container>
      <div class="text-center">
        <svg-icon
          name="e-commerce"
          style="width: 56px; height: 56px"
          class="text-primary"
        />
        <h2
          style="max-width: 662px"
          class="text-h4 text-sm-h4 font-weight-black mx-auto"
        >
          {{ t("title") }}
        </h2>
        <p
          class="py-5 mx-auto"
          style="max-width: 662px"
          v-html="Markdown(t('text'))"
        ></p>
      </div>

      <div class="d-flex align-center justify-center ga-2">
        <v-btn
          v-if="typeAvailables.filter((ta) => ta.code === 'pc').length"
          icon
          variant="text"
          @click="type = 'pc'"
        >
          <svg-icon
            name="pc"
            style="width: 36px; height: 36px"
            :class="{ 'text-primary': type === 'pc' }"
          />
        </v-btn>

        <v-btn
          v-if="typeAvailables.filter((ta) => ta.code === 'tablette').length"
          icon
          variant="text"
          @click="type = 'tablette'"
        >
          <svg-icon
            name="laptop"
            style="width: 32px; height: 32px"
            :class="{ 'text-primary': type === 'tablette' }"
          />
        </v-btn>

        <v-btn
          v-if="typeAvailables.filter((ta) => ta.code === 'mobile').length"
          icon
          variant="text"
          @click="type = 'mobile'"
        >
          <svg-icon
            name="smartphone"
            style="width: 24px; height: 24px"
            :class="{ 'text-primary': type === 'mobile' }"
          />
        </v-btn>
      </div>
    </v-container>

    <div
      class="ui-responsive-screen bg-background border"
      :style="{
        width: `${type === 'pc' ? 1024 : type === 'tablette' ? 772 : 332}px`,
      }"
    >
      <div class="top-header">
        <div
          class="d-flex align-center ma-auto"
          style="width: 90%"
        >
          <div class="mr-auto d-flex align-center ga-2">
            <i
              class="fi fi-br-menu-burger"
              v-if="type !== 'pc'"
            ></i>

            <svg-icon
              name="shop-logo-2"
              style="width: 32px; height: 32px"
            />
          </div>

          <div
            v-if="type !== 'mobile'"
            class="d-flex align-center ga-3"
          >
            <div
              v-for="i in 4"
              :key="i"
              style="width: 72px; height: 12px"
              class="bg-grey rounded-pill"
            ></div>
          </div>

          <div class="d-flex align-center ga-3 ml-auto">
            <v-badge
              color="grey"
              dot
            >
              <i class="fi fi-sr-shopping-cart text-h5"></i>
            </v-badge>

            <i
              v-if="type !== 'mobile'"
              class="fi fi-rr-circle-user text-h5"
            ></i>
          </div>
        </div>
      </div>

      <div
        v-if="type !== 'mobile'"
        style="
          width: 552px;
          max-width: 90%;
          height: 54px;
          margin: auto;
          margin-top: 15px;
        "
        class="d-flex align-center px-7 bg-surface rounded-pill"
      >
        <div
          style="width: 50%; height: 12px"
          class="bg-grey rounded-pill"
        ></div>
        <i class="fi fi-sr-settings-sliders ml-auto"></i>
      </div>

      <div
        class="d-flex flex-wrap mx-auto mt-5"
        :style="{
          maxWidth: '100%',
          width: `${type === 'pc' ? 900 : type === 'tablette' ? 600 : 300}px`,
        }"
      >
        <div
          v-for="i in 18"
          :key="i"
          style="width: 300px"
        >
          <div class="mx-5 mb-10 d-flex flex-column">
            <div
              style="margin: auto; margin-bottom: 20px"
              class="bg-surface w-100 d-flex rounded-lg"
            >
              <SvgIcon
                name="dress"
                style="width: 110px; height: 210px; margin: auto; opacity: 0.5"
              />
            </div>

            <div
              style="width: 150px; height: 18px"
              class="bg-surface rounded-pill"
            ></div>

            <div
              style="width: 80px; height: 12px"
              class="bg-surface rounded-pill mt-1"
            ></div>
          </div>
        </div>
      </div>

      <div
        v-if="type === 'mobile'"
        class="bottom-header text-h5 border-t bg-background elevation-5"
      >
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: auto;
          "
        >
          <!-- <i class="fi fi-rr-search"></i> -->
          <i
            class="fi fi-rr-house-blank"
            style="opacity: 1"
          ></i>
          <i class="fi fi-rr-bell-ring"></i>
          <i class="fi fi-rr-comments"></i>
          <i class="fi fi-rr-circle-user"></i>
        </div>
      </div>
    </div>

    <div class="d-flex justify-center mt-10">
      <v-btn
        rounded="xl"
        color="success"
        size="large"
        class="mx-auto"
        tag="a"
        target="_blank"
        href="https://calendly.com/domutala/analyse-gratuite-pour-votre-site-e-commerce"
      >
        {{ t("cta") }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-responsive-screen {
  height: 552px;
  max-width: 90%;
  margin: auto;
  border-radius: 0.9em;
  overflow: hidden;
  transition: all 0.5s ease;
  position: relative;

  box-shadow: rgba(var(--v-theme-on-background), 0.1) 0px 7px 29px 0px;

  .bottom-header,
  .top-header {
    height: 62px;
    background: rgb(var(--v-theme-surface));
    display: flex;
    align-items: center;
    z-index: 50;
  }

  .bottom-header {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    i {
      opacity: 0.5;
    }
  }
}
</style>

<i18n lang="json" src="./lang.json"></i18n>
