import { EAlert } from "share/types/enums";
import type { IAlert } from "share/types/interfaces";
import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    alert: {} as IAlert | null,
  }),
  actions: {
    success(message: string) {
      this.alert = { message, type: EAlert.Success };
    },
    error(message: string) {
      this.alert = { message, type: EAlert.Error };
    },
    clear() {
      this.alert = null;
    },
  },
});
