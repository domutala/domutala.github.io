import { defineStore } from "pinia";
import { ref } from "vue";

export interface IAppMode {
  value: "light" | "dark" | null;
  use: "light" | "dark";
}

const useAppStore = defineStore(
  "app",
  () => {
    const mode = ref<IAppMode>({ value: null, use: "light" });
    function setMode(value: "light" | "dark" | null) {
      function nativeMode() {
        let nativeThemeMode: "dark" | "light" = "dark";

        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          nativeThemeMode = "dark";
        } else {
          nativeThemeMode = "light";
        }

        return nativeThemeMode;
      }

      mode.value.value = value;

      let _mode = mode.value.value;
      if (_mode === null) _mode = nativeMode();

      mode.value.use = _mode;
    }

    return {
      setMode,
      mode,
    };
  },
  { persist: true }
);

export default useAppStore;
