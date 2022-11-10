<template>
  <div class="min-w-[35rem] outer-part">
    <div class="modules max-w-6xl mx-auto">
      <ul>
        <AppModule
          v-for="(module, index) in modules"
          :key="index"
          v-bind="module"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCoursesStore } from "@/stores";
import type { ICourse } from "@/types/interfaces";

const coursesStore = useCoursesStore();
const { getModules } = coursesStore;
const search = ref("");
const modules = ref<ICourse[]>([]);
const getModule = getModules();

if (Array.isArray(getModule)) {
  modules.value = getModule;
}

// const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
}
.modules {
  padding: 0 1.5rem 1.5rem 1.5rem;
  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
