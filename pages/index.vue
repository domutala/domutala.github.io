<template>
  <header class="ui-header">
    <nuxt-link
      to="/"
      class="text-white d-flex"
    >
      <svg-icon
        name="logo"
        width="36"
        height="36"
      />
    </nuxt-link>

    <div
      class="seach-placeholder d-flex align-center ga-2 pa-2 rounded-lg bg-surface"
    >
      <i class="fi fi-br-search"></i>
      Search
      <div class="border px-2 rounded text-body-2">ctrl k</div>
    </div>

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

    <v-btn
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
    </v-btn>
  </header>
  <v-container>
    <div
      class="text-center"
      style="margin-top: 120px"
    >
      <h1 class="text-h4 text-sm-h3 text-md-h2 font-weight-black text-center">
        Start coding
        <span
          style="
            font-family: Sans-serif;
            background-image: linear-gradient(45deg, #ff00a9, #00ff94);
            -webkit-background-clip: text;
            color: transparent;
          "
        >
          instantly
        </span>
        <br />with Codespaces
      </h1>

      <p
        class="py-5 mx-auto"
        style="max-width: 552px"
      >
        Spin up fully configured dev environments in the cloud that start in
        seconds with up to 60 hours a month free.
      </p>

      <v-btn
        variant="outlined"
        rounded="xl"
        color="light"
        size="large"
        tag="href"
        target="_blank"
        href="https://discord.gg/uTCHgBNdTg"
      >
        Discuter avec moi

        <template #append>
          <i class="fi fi-brands-discord"></i>
        </template>
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.ui-header {
  display: flex;
  align-items: center;
  height: 62px;
  padding-left: 40px;
  padding-right: 40px;

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
