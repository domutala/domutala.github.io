<script lang="ts" setup>
const index = ref(Math.random());
const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  addEventListener("resize", startMatrix);
  setTimeout(startMatrix, 100);
});

function startMatrix() {
  index.value = Math.random();
  matrix();
}

function matrix() {
  if (!canvas.value) return;
  const _index = index.value;

  // Initialising the canvas
  const ctx = canvas.value.getContext("2d") as CanvasRenderingContext2D;

  // Setting the width and height of the canvas
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  // Setting up the letters
  const painLetters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
  const letters = painLetters.split("");

  // Setting up the columns
  var fontSize = 10,
    columns = canvas.value.width / fontSize;

  // Setting up the drops
  const drops: any[] = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  const style = window.getComputedStyle(document.body);
  const themeBackground = style.getPropertyValue("--v-theme-background");
  const themeOnBackground = style.getPropertyValue("--v-theme-on-background");

  // Setting up the draw function
  function draw() {
    if (!canvas.value) return;

    ctx.fillStyle = `rgba(${themeBackground}, .1)`;
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = `rgba(${themeOnBackground}, .2)`; // "rgba(0, 0, 0, .2)";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.value.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }

    if (_index === index.value) setTimeout(draw, 25);
  }

  draw();
}
</script>

<template>
  <div class="ui-matrix">
    <canvas ref="canvas" style="font-size: 124px"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.ui-matrix {
  overflow: hidden;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
