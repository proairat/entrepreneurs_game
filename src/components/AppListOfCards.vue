<template>
  <main class="min-w-[35rem] main">
    <section class="cards container mx-auto max-w-6xl">
      <ul>
        <AppCard
          v-for="(post, index) in filteredList"
          :key="index"
          v-bind="post"
        />
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { createCards } from "@/helpers/createCards";
import { FuzzySearch } from "@/helpers/commonFunctions";

const search = ref("");
const cards = reactive(createCards());
const filteredList = computed(() => FuzzySearch(search.value, cards, "title"));

console.log("ViewChoiceOfCourses -> filteredList", filteredList.value);
</script>

<style scoped lang="scss">
.main {
  background-color: $gray-10;
}
.cards {
  padding: 1.5rem;
  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
