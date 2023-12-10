import type { IStack } from ".";

const flutter: IStack = {
  code: "flutter",
  name: "Fultter",
  icon: "stack/vuejs",
  subStacks: {},
  codes: {
    default: {
      language: "javascript",
      dataLine: "5-8",
      code: `<script lang="ts" setup>
    import Prism from "prismjs";
    import "prismjs/plugins/line-numbers/prism-line-numbers";
    
    const props = defineProps({
      language: { type: String, reuired: true },
      lineStartAt: { type: Number, default: 1 },
    });
    const content = ref<HTMLDivElement>();
    const content = text;
    
    onMounted(mounted);
    async function mounted() {
      Prism.highlightAll();
    }
    </script>`,
    },
  },
};

export default flutter;
