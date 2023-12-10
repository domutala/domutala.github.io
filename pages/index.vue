<script lang="ts" setup>
import Stacks from "~/utils/Stacks";
</script>

<template>
  <v-app theme="dark">
    <ui-header />
    <div class="homepage">
      <img
        class="homepage--bg"
        src="~/assets/images/bg-001.png"
        alt=""
      />

      <div
        class="elevation-9 border-b"
        style="border-bottom-left-radius: 100px; border-bottom: 1px solid #000"
      >
        <section
          class="homepage--section-one"
          style="min-height: 100vh"
        >
          <v-container>
            <div
              class="text-center"
              style="margin-top: 120px"
            >
              <h1
                class="text-h4 text-sm-h3 text-md-h2 font-weight-black text-center"
              >
                Start coding
                <span
                  style="
                    font-family: Sans-serif;
                    background-image: linear-gradient(
                      45deg,
                      rgb(var(--v-theme-primary)),
                      rgb(var(--v-theme-on-background))
                    );
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
                Spin up fully configured dev environments in the cloud that
                start in seconds with up to 60 hours a month free.
              </p>

              <v-btn
                rounded="xl"
                color="white"
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
        </section>

        <ui-resonsive />

        <section class="homepage--section-two">
          <v-container>
            <v-row align="center">
              <v-col cols="6">
                <img
                  src="~/assets/images/003.png"
                  alt=""
                  class="section__u"
                />
              </v-col>

              <v-col cols="6">
                <div class="text-right">
                  <h2 class="text-h4 text-sm-h3 font-weight-black">
                    Start coding
                    <span
                      style="
                        font-family: Sans-serif;
                        background-image: linear-gradient(
                          45deg,
                          #ff00a9,
                          #00ff94
                        );
                        -webkit-background-clip: text;
                        color: transparent;
                      "
                    >
                      instantly
                    </span>
                    with Codespaces
                  </h2>

                  <p
                    class="py-5 mx-auto"
                    style="max-width: 552px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi eveniet, qui unde saepe neque sed culpa amet fuga
                    magni quae corrupti illum ea consequatur eius consectetur
                    architecto provident libero. Eos.
                  </p>

                  <v-btn
                    rounded="xl"
                    color="white"
                    size="large"
                  >
                    En savoir plus
                    <template #append>
                      <i class="fi fi-rr-arrow-right"></i>
                    </template>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </div>

      <v-app>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores corporis, ad esse sapiente natus, quasi placeat ab
                  quaerat officia modi sunt at perferendis exercitationem maxime
                  sit quam odio qui minima.
                </p>
              </v-col>
              <v-col
                cols="12"
                md="7"
              >
                <div class="border overflow-hidden elevation-5 rounded-lg">
                  <div class="pa-5 bg-surface">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint voluptatibus eveniet quod commodi, animi minus aut
                    voluptate nihil itaque omnis placeat harum, quam atque. Quas
                    obcaecati temporibus aliquid natus doloremque.
                  </div>

                  <div class="pa-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    officiis aspernatur saepe accusantium repudiandae quae
                    incidunt nemo non optio. Repellendus pariatur voluptatem
                    voluptas reprehenderit maxime, quibusdam architecto dolor
                    soluta nam.

                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    officiis aspernatur saepe accusantium repudiandae quae
                    incidunt nemo non optio. Repellendus pariatur voluptatem
                    voluptas reprehenderit maxime, quibusdam architecto dolor
                    soluta nam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aut officiis aspernatur saepe accusantium
                    repudiandae quae incidunt nemo non optio. Repellendus
                    pariatur voluptatem voluptas reprehenderit maxime, quibusdam
                    architecto dolor soluta nam.
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-col cols="12">
              <div class="position-relative">
                <div class="elevation-5 border rounded-lg overflow-hiden">
                  <ui-code
                    language="javascript"
                    background-color="grey lighten-5"
                    :code="Stacks.vuejs.codes.default"
                    hide-options
                  />
                </div>

                <div
                  style="
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 36px;
                    height: 36px;
                    transform: translate(50%, -50%);
                  "
                  class="bg-background border rounded-pill d-flex align-center justify-center bg-grey-lighten-4"
                >
                  <!-- <svg-icon
                style="width: 60%; height: 60%"
                :name="Stacks.vuejs.logo!"
              /> -->
                </div>
              </div>
            </v-col>
          </v-container>
        </div>
      </v-app>
      <ui-footer />
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.homepage {
  > * {
    position: relative;
  }
}
.homepage--bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
}

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

.homepage--section-two {
  height: 100vh;
  position: relative;

  .section--gb {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // background-color: green;
  // border-bottom-right-radius: 50%;
}
</style>
