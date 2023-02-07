import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchWrapper } from "@/helpers";
import { useAuthStore } from "@/stores";
import type { IUser } from "share/types/interfaces";

const baseUrl = `${import.meta.env.VITE_API_URL}/dashboard`;

export const useUsersStore = defineStore("users", () => {
  const users = ref({});
  const user = ref({});

  async function register(user: IUser) {
    user.entranceTesting = false;
    await fetchWrapper.post(`${baseUrl}/register`, user);
  }
  async function getAll() {
    users.value = { loading: true };
    try {
      users.value = await fetchWrapper.get(baseUrl);
    } catch (error) {
      users.value = { error };
    }
  }
  async function getById(id: string | string[]) {
    user.value = { loading: true };
    try {
      user.value = await fetchWrapper.get(`${baseUrl}/${id}`);
    } catch (error) {
      user.value = { error };
    }
  }
  async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

    // update stored user if the logged in user updated their own record
    const authStore = useAuthStore();
    if (id === authStore.user.id) {
      // update local storage
      const user = { ...authStore.user, ...params };
      localStorage.setItem("user", JSON.stringify(user));

      // update auth user in pinia state
      authStore.user = user;
    }
  }
  async function del(id) {
    // add isDeleting prop to user being deleted
    users.value.find((x) => x.id === id).isDeleting = true;

    await fetchWrapper.delete(`${baseUrl}/${id}`);

    // remove user from list after deleted
    users.value = users.value.filter((x) => x.id !== id);

    // auto logout if the logged in user deleted their own record
    const authStore = useAuthStore();
    if (id === authStore.user.id) {
      authStore.logout();
    }
  }

  return {
    users,
    user,
    register,
    getAll,
    getById,
    update,
    del,
  };
});
