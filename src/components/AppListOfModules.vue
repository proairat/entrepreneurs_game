<template>
  <div class="outer-part max-w-6xl mx-auto">
    <div class="modules">
      <ul class="modules__ul">
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
import { storeToRefs } from "pinia";
import { useModulesStore, useTestsStore } from "@/stores";
import { EEntityState, EEntityType } from "@/types/enums";
import type {
  IModule,
  IModuleAdvanced,
  IUpdateArray,
} from "@/types/interfaces";

const props = defineProps<{
  type: EEntityType;
}>();

const modulesStore = useModulesStore();
const {
  getModulesList,
  updateActiveModule,
  getModulesAdvancedList,
  updateActiveModuleAdvanced,
  getActiveTest,
} = modulesStore;
const testsStore = useTestsStore();
const { updateActiveQuestion } = testsStore;
const { activeTest } = storeToRefs(modulesStore);
let modules: IModule[] | IModuleAdvanced[] = [];
let updateEntity: (updateArray: IUpdateArray) => void;

if (props.type === EEntityType.Modules) {
  modules = getModulesList();
  updateEntity = updateActiveModule;
}

if (props.type === EEntityType.ModulesAdvanced) {
  modules = getModulesAdvancedList();
  updateEntity = updateActiveModuleAdvanced;
}

// const search = ref("");

/**
 * Update active module in Pinia
 * @param {number} moduleId - module identifier
 */
function changeActiveModuleHandler(moduleId: number) {
  updateEntity({
    entityId: moduleId,
    activeIndexState: EEntityState.Default,
    clickIndexState: EEntityState.Active,
  });

  updateActiveQuestion({
    entityIdForListByEntityId: activeTest.value.id,
    entityIdForClickIndex: 1,
    activeIndexState: EEntityState.Default,
    clickIndexState: EEntityState.Active,
  });
}

// const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
}
.modules {
  padding: 0 1.5rem;
  &__ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    grid-gap: 1.5rem;
  }
}
</style>
