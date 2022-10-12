<template>
  <div v-if="user">
    <AppNavbar :logout="logout" />
    <!--<AppVideo />-->
    <div class="cards">
      <MyCard
        v-for="(post, index) in filteredList"
        :key="index"
        v-bind="post"
      ></MyCard>
    </div>
    <p><router-link to="/users">Управление пользователями</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import { AppNavbar } from "@/components";
import AppVideo from "@/components/AppVideo.vue";
import MyCard from "@/components/MyCard.vue";
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

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  max-width: 800px;
  margin: 1em auto;
}
</style>
