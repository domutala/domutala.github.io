<script lang="ts" setup></script>

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
      <div class="border px-2 rounded text-body-2 text-no-wrap">ctrl k</div>
    </div>

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

  <div style="min-height: 100vh">
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
  </div>
  <v-app theme="ligth">
    <div class="py-16">
      <v-container class="my-10">
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <div
              class="border rounded-lg px-3 py-2 rounded text-body-2 text-no-wrap d-flex align-center ga-2"
              style="width: max-content"
            >
              <i class="fi fi-rr-browser"></i>
              Frontend
            </div>
            <h2
              class="text-h3 font-weight-bold mt-3"
              style="font-family: Sans-serif"
            >
              Web applications
            </h2>
            <p class="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              corporis, ad esse sapiente natus, quasi placeat ab quaerat officia
              modi sunt at perferendis exercitationem maxime sit quam odio qui
              minima.
            </p>
          </v-col>
          <v-col
            cols="12"
            md="7"
          >
            <div class="border elevation-5 rounded-lg overflow-hidden">
              <div class="pa-5 bg-surface">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                voluptatibus eveniet quod commodi, animi minus aut voluptate
                nihil itaque omnis placeat harum, quam atque. Quas obcaecati
                temporibus aliquid natus doloremque.
              </div>

              <ui-code
                language="javascript"
                background-color="grey lighten-5"
                :code="Codes.default"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.ui-header {
  display: flex;
  align-items: center;
  gap: 10px;
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
~/utils
