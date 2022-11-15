<template>
  <div v-if="user">
    <div class="wrapper">
      <AppNavbar :logout="logout" />
      <router-view />
    </div>
    <AppFooter />
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
}
</style>
