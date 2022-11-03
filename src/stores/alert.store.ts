import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    alert: null,
  }),
  actions: {
    success(message: string) {
      this.alert = { message, type: "success" };
    },
    error(message: unknown) {
      this.alert = { message, type: "error" };
    },
    clear() {
      this.alert = null;
    },
  },
});
