<template>
  <v-app theme="dark">
    <div class="homepage-background">
      <img src="~/assets/sprite/svg/background.svg" alt="" />
    </div>

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
              <div class="d-flex align-center mt-5 ga-5">
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
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.homepage-title {
  height: 100lvh;
  position: relative;
}

.homepage-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  z-index: 0;
  user-select: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top right;
  }
}
</style>
