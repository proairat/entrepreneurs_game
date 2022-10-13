<template>
  <div v-if="user">
    <AppNavbar :logout="logout" />
    <!--<AppVideo />-->
    <ListOfCards>
      <AppCard
        v-for="(post, index) in filteredList"
        :key="index"
        v-bind="post"
      />
    </ListOfCards>
    <router-link to="/users">Управление пользователями</router-link>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import AppVideo from "@/components/AppVideo.vue";
import { createCards } from "@/helpers/createCards";
import { FuzzySearch } from "@/helpers/commonFunctions";
import { computed, reactive, ref } from "vue";

const cards = reactive(createCards());
const search = ref("");
const filteredList = computed(() => FuzzySearch(search.value, cards, "title"));

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { logout } = authStore;
</script>
