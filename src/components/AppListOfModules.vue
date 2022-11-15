<template>
  <div class="min-w-[35rem] outer-part">
    <div class="modules max-w-6xl mx-auto">
      <ul>
        <AppModule
          v-for="(module, index) in modules"
          :key="index"
          v-bind="module"
          @change-active-item="changeActiveItemHandler"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCoursesStore } from "@/stores";
import type { ICourse } from "@/types/interfaces";

const coursesStore = useCoursesStore();
const { getModulesList, updateActiveModule } = coursesStore;
const modules = ref<ICourse[]>([]);
const list = getModulesList();
// const search = ref("");

if (Array.isArray(list)) {
  modules.value = list;
}

/**
 * Update active module in Pinia
 * @param {number} moduleId - module identifier
 */
function changeActiveItemHandler(moduleId: number) {
  updateActiveModule(moduleId, modules.value);
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
