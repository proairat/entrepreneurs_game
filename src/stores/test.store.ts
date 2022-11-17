import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestsStore = defineStore("tests", () => {
  const progressValue = ref(0);

  return {
    progressValue,
  };
});
