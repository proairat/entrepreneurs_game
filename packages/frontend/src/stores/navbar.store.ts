import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore("navbar", () => {
  const coins = ref(0);

  return {
    coins,
  };
});
