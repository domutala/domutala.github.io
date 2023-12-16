<script lang="ts" setup>
import Stacks from "~/utils/Stacks";
</script>

<template>
  <v-app>
    <ui-header />
    <div class="homepage">
      <img
        class="homepage--bg"
        src="~/assets/images/hero.png"
        alt=""
      />

      <div
        class="border-b"
        style="border-bottom-left-radius: 100px; overflow: hidden"
      >
        <section
          class="homepage--section-one"
          style="min-height: 100vh"
        >
          <v-container>
            <div
              class="text-center"
              style="margin-top: 150px"
            >
              <div
                class="px-3 py-1 bg-background border mx-auto rounded-pill mb-5 text-body-2"
                style="width: max-content"
              >
                Mamadou DIA
                <!-- <span class="text-primary font-weight-bold">@domutala</span> -->
              </div>
              <h1
                class="text-h4 text-sm-h3 text-md-h2 font-weight-black text-center"
              >
                Lorem ipsum dolor sit amet consectetur
                <!-- <span
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
                <br />with Codespaces -->
              </h1>

              <p
                class="py-5 mx-auto"
                style="max-width: 552px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                atque voluptate iste, culpa non delectus, vero voluptas
                asperiores tenetur autem totam doloremque? Animi odit eos dolore
                rem, nam impedit. Hic.
              </p>

              <v-btn
                rounded="xl"
                color="primary"
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

        <section class="homepage--section-two">
          <img
            src="~/assets/images/domutala_002.png"
            alt=""
            class="section__u"
          />
          <v-container class="mb-16 position-relative">
            <v-row justify="end">
              <v-col cols="6">
                <div class="text-right">
                  <h2 class="text-h4 text-sm-h3 font-weight-black text-primary">
                    Lorem ipsum dolor sit amet consectetur
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
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </div>

      <!-- <ui-resonsive /> -->
    </div>
    <ui-footer />
  </v-app>
</template>

<style lang="scss" scoped>
.homepage {
  position: relative;
  z-index: 1;

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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .section--gb {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .section__u {
    position: absolute;
    bottom: 0;
    height: 90%;
  }

  // background-color: green;
  // border-bottom-right-radius: 50%;
}
</style>
