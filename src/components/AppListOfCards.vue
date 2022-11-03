<template>
  <div class="min-w-[35rem] outer-part">
    <div class="cards max-w-6xl mx-auto">
      <ul>
        <AppCard v-for="(card, index) in cards" :key="index" v-bind="card" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { createCards } from "@/helpers/commonFunctions";

const search = ref("");
const cards = reactive(createCards());

console.log("1 cards", cards);
console.log("cards[1]", cards[1]);

// const filteredList = computed(() => FuzzySearch(search.value, cards, "title"));
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
}
.cards {
  padding: 0 1.5rem 1.5rem 1.5rem;
  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
