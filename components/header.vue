<template>
  <header class="ui-header">
    <nuxt-link
      to="/"
      class="d-flex text-primary position-relative"
    >
      <svg-icon
        name="logo"
        width="36"
        height="36"
      />
    </nuxt-link>

    <div
      class="px-3 bg-background mx-auto text-body-2 border border-primary border-md rounded-pill text-prumary font-weight-bold"
      style="
        /* position: absolute; */
        z-index: -1;
        border-color: rgb(var(--v-theme-primary));
        padding-top: 2px;
        padding-bottom: 2px;
      "
    >
      @domutala
    </div>

    <!-- <div
      class="seach-placeholder d-flex align-center ga-2 pa-2 rounded-lg bg-surface"
    >
      <i class="fi fi-br-search"></i>
      Search
      <div class="border px-2 rounded text-body-2 text-no-wrap">ctrl k</div>
    </div> -->

    <!-- <div class="d-flex align-center gap-2">
      <v-btn
        variant="text"
        rounded="xl"
        color="light"
      >
        <i class="fi fi-br-shopping-cart"></i>
        <div class="ml-2">Shop</div>
      </v-btn>

      <v-btn
        variant="text"
        rounded="xl"
        color="light"
      >
        <i class="fi fi-br-blog-pencil"></i>
        <div class="ml-2">Blog</div>
      </v-btn>

      <v-btn
        variant="text"
        rounded="xl"
        color="light"
      >
        <i class="fi fi-br-tools"></i>
        <div class="ml-2">Tools</div>
      </v-btn>
    </div> -->

    <v-spacer />

    <v-btn
      variant="text"
      rounded="xl"
      color="light"
      size="small"
      tag="href"
      target="_blank"
      href="https://github.com/domutala"
      icon
    >
      <svg-icon
        name="github"
        width="18"
        height="18"
      />
    </v-btn>

    <!-- <v-btn
      variant="text"
      rounded="xl"
      color="light"
      size="small"
      icon
    >
      <svg-icon
        name="lang"
        width="16"
        height="16"
      />
    </v-btn> -->
  </header>
</template>

<style lang="scss" scoped>
.ui-header {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 68px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  position: fixed;
  top: 0;
  z-index: 500;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(var(--v-theme-background), 0.1);

  .seach-placeholder {
    border: 1px solid transparent;
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      border-color: rgba(var(--v-theme-primary));
    }
  }
}
</style>
