<template>
  <AppNavbar />
  <!--<DescriptionAndCarousel>
    <template #main>
      <AppDescription />
      <div>Вместо карусели</div>
    </template>
  </DescriptionAndCarousel>
  <AppTopics  />
  <ListOfCards>
    <AppCard
      v-for="card in filteredList"
      :key="card.id"
      :card="card"
      @click="getOneCard(card)" />
  </ListOfCards>-->
  <router-link to="/">Home</router-link>
  <router-link to="/users">Users</router-link>
</template>

<script setup lang="ts">
import { /*ref,*/ computed /*reactive*/ } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
// import AppCard from "@/components/AppCard.vue";
// import { useRouter } from "vue-router";
import AppNavbar from "@/components/AppNavbar/index.vue";
/* import DescriptionAndCarousel from '@/components/DescriptionAndCarousel.vue';
import AppDescription from '@/components/AppDescription.vue';
import AppTopics from "@/components/AppTopics.vue";
import ListOfCards from '@/components/ListOfCards.vue'; */

// import { FuzzySearch } from '@/assets/scripts/CommonFunctions';
// import MyCard from '@/components/MyCard.vue';
// import createCards from '@/helpers/createCards';

// const router = useRouter();
const filteredList = computed(() => [111, 222, 333, 444, 555]);

console.log("Show me filteredList", filteredList.value);

/*
function getOneCard(card: unknown) {
  router.push({ path: `${card.id}` });
}
*/

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { logout } = authStore;

// const search = ref("");
// const cards = reactive(createCards());
// const filteredList = computed(() => FuzzySearch(search.value, cards, "title"));
</script>
