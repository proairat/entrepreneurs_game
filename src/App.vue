<template>
  <!--<BaseSide />-->
  <div :class="authStore.user">
    <AppNav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { AppNav } from "@/components";
import { useAuthStore } from "@/stores";
// import BaseSide from "./components/BaseSide.vue";
const authStore = useAuthStore();
</script>

<style lang="scss">
// comment for work vite.config.ts,
// because it is necessary to ensure the presence of at least some code from scss
</style>
