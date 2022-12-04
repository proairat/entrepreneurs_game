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
import { useModulesStore } from "@/stores";
import type { IModule } from "@/types/interfaces";

const modulesStore = useModulesStore();
const { getModulesList, updateActiveModule } = modulesStore;
const modules = ref<IModule[]>([]);
const list = getModulesList();
// const search = ref("");

console.log("Listochek", list);

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
