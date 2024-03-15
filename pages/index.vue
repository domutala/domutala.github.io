<template>
  <v-app>
    <Ui-matrix
      style="height: 100vh; width: 100%; position: absolute; top: 0; left: 0"
    />

    <div class="homepage-title">
      <div
        style="
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        "
      >
        <v-container>
          <v-row justify="center">
            <v-col cols="10">
              <div style="line-height: 1; font-size: 42px" class="roboto-bold">
                Mamadou DIA
              </div>
              <div
                style="
                  line-height: 1;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                "
              >
                <svg-icon
                  name="verifiyed"
                  width="20"
                  height="20"
                  class="text-success"
                />
                <b>Senior Software Engineer</b>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <div
      class="bg-background d-flex align-center justify-center flex-column ga-2"
      style="
        height: 120px;
        width: 100%;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        position: fixed;
        bottom: 0;
      "
    >
      <div class="d-flex align-center justify-center ga-5">
        <a
          href="https://github.com/domutala"
          style="text-decoration: none; color: inherit; font-size: 24px"
          target="_blank"
        >
          <i class="fi fi-brands-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/domutala/"
          style="text-decoration: none; color: inherit"
          target="_blank"
        >
          <i class="fi fi-brands-linkedin" style="font-size: 24px"></i>
        </a>
        <a
          href="https://wa.me/+212643673564"
          style="text-decoration: none; color: inherit"
          target="_blank"
        >
          <i class="fi fi-brands-whatsapp" style="font-size: 24px"></i>
        </a>
      </div>
      <div class="text-body-2">@<b>domutala</b></div>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.homepage-title {
  height: calc(100lvh - 120px);
  position: relative;
}
</style>
