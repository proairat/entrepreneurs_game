<template>
  <div v-if="user">
    <div class="mt-[calc(7rem+8px)] sh-960:mt-[4rem] min-w-[35rem] wrapper">
      <AppNavbar :logout="logout" />
      <router-view />
      <AppFooter />
    </div>
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
  min-height: calc(100vh - 20rem);
  background-color: $gray-10;
}
</style>
