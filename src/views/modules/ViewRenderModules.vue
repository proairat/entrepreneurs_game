<template>
  <div v-if="user">
    <div class="mt-[calc(7rem+8px)] sh-960:mt-[4rem] wrapper min-w-[35rem]">
      <AppNavbar :logout="logout" />
      <router-view />
      <AppFooter />
    </div>
    <!--<router-link to="/users">Управление пользователями</router-link>-->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { logout } = authStore;
</script>

<style scoped lang="scss">
.wrapper {
  min-height: calc(100vh - 24rem);
  background-color: $gray-10;
}
</style>
