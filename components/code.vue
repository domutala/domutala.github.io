<script lang="ts" setup>
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";

defineProps({
  code: { type: Object as PropType<ICode>, required: true },
  hideOptions: { type: Boolean, default: false },
  backgroundColor: { type: String, default: "bg-grey-darken-4" },
});
const codeElement = ref<HTMLElement>();

onMounted(mounted);
async function mounted() {
  Prism.highlightAll();
}

function copy() {
  if (!codeElement.value) return;

  // Copiez le contenu de la balise dans une variable
  const code = codeElement.value.innerText;

  // Utilisez l'API navigator.clipboard.writeText() pour copier dans le presse-papiers
  navigator.clipboard.writeText(code).then(function () {
    alert("Contenu copié");
  });
}
</script>

<template>
  <div
    class="ui-code-viewer position-relative"
    :class="backgroundColor"
  >
    <div
      v-if="!hideOptions"
      class="ui-code-viewer-options"
    >
      <v-btn
        variant="text"
        rounded="xl"
        color="light"
        size="small"
        icon
        @click="copy"
      >
        <i class="fi fi-rr-clone"></i>
      </v-btn>
    </div>
    <pre
      :class="`language-${code.language}`"
      :data-start="code.dataStart"
      :data-line="code.dataLine"
      class="line-numbers"
      style="margin: 0; border-radius: 0"
    ><code style="border: none;" ref="codeElement" v-text="code.code"></code></pre>
  </div>
</template>

<style lang="scss">
.ui-code-viewer {
  position: relative;

  .ui-code-viewer-options {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
  }

  &:not(:hover) {
    .ui-code-viewer-options {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.line-numbers-rows {
  border-right: 0 !important;
  left: -4.2em !important;
}

.line-highlight {
  background: rgba(var(--v-theme-primary), 0.08);
  background: linear-gradient(
    to right,
    rgba(var(--v-theme-primary), 0.1) 70%,
    rgba(var(--v-theme-primary), 0)
  );
}

code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  font-family: Roboto Mono, monospace;
  font-size: 1em;
  line-height: 1.5em;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

code[class*="language-"]::selection,
pre[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection {
  background: #0a0a0a;
  color: #fff;
}

:not(pre) > code[class*="language-"] {
  white-space: normal;
  border-radius: 0.2em;
  padding: 0.1em;
}

pre[class*="language-"] {
  overflow: auto;
  position: relative;
  margin: 0.5em 0;
  padding: 1.25em 1em;

  &:not(:hover) {
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    border-radius: 0.6em;
  }
}

.language-css > code,
.language-sass > code,
.language-scss > code {
  color: #fd9170;
}

[class*="language-"] .namespace {
  opacity: 0.7;
}

.token.atrule {
  color: #c792ea;
}

.token.attr-name {
  color: #ffcb6b;
}

.token.attr-value {
  color: #a5e844;
}

.token.attribute {
  color: #a5e844;
}

.token.boolean {
  color: #c792ea;
}

.token.builtin {
  color: #ffcb6b;
}

.token.cdata {
  color: #80cbc4;
}

.token.char {
  color: #80cbc4;
}

.token.class {
  color: #ffcb6b;
}

.token.class-name {
  color: #f2ff00;
}

.token.comment {
  color: #616161;
}

.token.constant {
  color: #c792ea;
}

.token.deleted {
  color: #ff6666;
}

.token.doctype {
  color: #616161;
}

.token.entity {
  color: #ff6666;
}

.token.function {
  color: #c792ea;
}

.token.hexcode {
  color: #f2ff00;
}

.token.id {
  color: #c792ea;
  font-weight: bold;
}

.token.important {
  color: #c792ea;
  font-weight: bold;
}

.token.inserted {
  color: #80cbc4;
}

.token.keyword {
  color: #c792ea;
}

.token.number {
  color: #fd9170;
}

.token.operator {
  color: #89ddff;
}

.token.prolog {
  color: #616161;
}

.token.property {
  color: #80cbc4;
}

.token.pseudo-class {
  color: #a5e844;
}

.token.pseudo-element {
  color: #a5e844;
}

.token.punctuation {
  color: #89ddff;
}

.token.regex {
  color: #f2ff00;
}

.token.selector {
  color: #ff6666;
}

.token.string {
  color: #a5e844;
}

.token.symbol {
  color: #c792ea;
}

.token.tag {
  color: #ff6666;
}

.token.unit {
  color: #fd9170;
}

.token.url {
  color: #ff6666;
}

.token.variable {
  color: #ff6666;
}
</style>
