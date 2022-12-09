<template>
  <div class="min-w-[35rem] outer-part">
    <div class="modules max-w-6xl mx-auto">
      <ul>
        <AppModule
          v-for="modul in modules"
          :key="modul.id"
          v-bind="modul"
          @change-active-module="changeActiveModuleHandler"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModulesStore } from "@/stores";

const modulesStore = useModulesStore();
const { getModulesList, updateActiveModule } = modulesStore;
const modules = getModulesList();

// const search = ref("");

/**
 * Update active module in Pinia
 * @param {number} moduleId - module identifier
 */
function changeActiveModuleHandler(moduleId: number) {
  updateActiveModule(moduleId);
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
