<script lang="ts" setup>
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";

defineProps({ language: { type: String, reuired: true } });

const code = ref<HTMLElement>();

onMounted(mounted);
async function mounted() {
  // The code snippet you want to highlight, as a string
  const code = `var data = 1;`;
  const html = Prism.highlight(code, Prism.languages.javascript, language);
  console.log(html, "*");
  code.HTMLElement;
}
</script>

<template>
  <pre class="line-numbers">
    <code :class="`language-${language}`" ref="code"> 
      <slot />
    </code>
  </pre>
</template>
