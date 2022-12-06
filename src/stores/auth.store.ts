import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers";
import { router } from "@/router";
import { useAlertStore } from "@/stores";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(login: string, password: string) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
          login,
          password,
        });

        // update pinia state
        this.user = user;

        console.log("this.user", this.user);
        /*
        const url = this.user.entranceTesting
          ? "/modules"
          : "/entrance-testing";
        */

        const url = this.user.entranceTesting
          ? "/entrance-testing"
          : "/modules";

        console.log("login url", url);
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));

        // redirect to previous url or default to home page
        router.push(this.returnUrl || url);
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
