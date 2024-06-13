<script lang="ts" setup>
const player = ref<HTMLAudioElement>();

onMounted(() => {
  setTimeout(() => {
    if (!player.value) return;

    player.value.volume = 0.05;
    player.value.play();
  }, 100);
});

function swticher() {
  if (!player.value) return;

  if (player.value.paused) player.value.play();
  else player.value.pause();
}
</script>

<template>
  <div class="c-player" @click="swticher">
    <audio ref="player">
      <source src="~/assets/audios/000.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <img
      src="https://i.pinimg.com/originals/8f/92/df/8f92df73b0514885bbeec715cf2397e4.jpg"
      cover
      style="width: 100%; height: 100%; object-fit: cover"
    />
    <!-- src="https://i.pinimg.com/originals/72/bc/3b/72bc3bfb4f72f2cae4c4ad908702c5aa.jpg" -->
  </div>
</template>

<style lang="scss" scoped>
.c-player {
  position: fixed;
  bottom: 100px;
  right: 55px;
  overflow: hidden;
  transition: all 0.5s ease;
  width: 50px;
  height: 50px;
  border-radius: 0.6em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;

  &:hover {
    width: 60px;
    height: 60px;
  }
}
</style>
