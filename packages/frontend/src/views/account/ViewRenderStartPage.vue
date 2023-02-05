<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores";
import { router } from "@/router";

// redirect home if already logged in
const authStore = useAuthStore();

if (authStore.user) {
  router.push("/modules");
}
</script>
