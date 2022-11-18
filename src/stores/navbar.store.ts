import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore("navbar", () => {
  const starsSmth = ref(0);

  return {
    starsSmth,
  };
});
