<template>
  <div ref="div"></div>
  <!-- <div class="ui-matrix">
    <canvas ref="canvasRef"></canvas>
  </div> -->
</template>

<script setup lang="ts">
const div = ref<HTMLDivElement>();

onMounted(() => {
  function printAsciiArt(text: string): void {
    const asciiArt: { [key: string]: string[] } = {
      M: ["M   M", "MM MM", "M M M", "M   M", "M   M"],
      o: [" OOO ", "O   O", "O   O", "O   O", " OOO "],
    };

    // Récupérer l'élément div
    const container = div.value;

    if (container) {
      // Créer une chaîne HTML pour afficher la représentation ASCII
      let asciiHtml = "";

      // Construire la chaîne HTML en ajoutant chaque ligne de la représentation ASCII
      for (let i = 0; i < 5; i++) {
        for (let char of text) {
          asciiHtml += asciiArt[char][i] + "  ";
        }
        asciiHtml += "<br>";
      }

      // Ajouter la chaîne HTML à l'élément div
      container.innerHTML = asciiHtml;
    } else {
      console.error(`L'élément avec l'ID n'a pas été trouvé.`);
    }
  }

  // Appeler la fonction avec le mot "Momo" et l'ID de l'élément div
  setTimeout(() => {
    // printAsciiArt("Momo");

    console.log(
      `
  ██████╗ ██╗   ██╗███╗   ██╗███████╗    ██╗  ██╗███████╗ ██████╗ ██████╗ 
 ██╔═══██╗██║   ██║████╗  ██║██╔════╝    ██║  ██║██╔════╝██╔═══██╗██╔══██╗
 ██║   ██║██║   ██║██╔██╗ ██║███████╗    ███████║█████╗  ██║   ██║██████╔╝
 ██║▄▄ ██║██║   ██║██║╚██╗██║╚════██║    ██╔══██║██╔══╝  ██║   ██║██╔══██╗
 ╚██████╔╝╚██████╔╝██║ ╚████║███████║    ██║  ██║███████╗╚██████╔╝██║  ██║
  ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝    ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
  `
    );
  }, 200);
});
</script>

<style scoped lang="scss">
.ui-matrix {
  overflow: hidden;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
