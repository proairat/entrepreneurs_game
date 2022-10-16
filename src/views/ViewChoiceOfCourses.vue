<template>
  <div v-if="user">
    <AppNavbar :logout="logout" />
    <AppBreadcrumbs />
    <!--<AppVideo />-->
    <AppListOfCards />
    <!--<TestCards />-->
    <AppFooter />
    <router-link to="/users">Управление пользователями</router-link>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import AppVideo from "@/components/AppVideo.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBreadcrumbs from "../components/AppBreadcrumbs.vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { logout } = authStore;
</script>
