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
} = modulesStore;
const testsStore = useTestsStore();
const { initializeTest, updateActiveQuestion, updateActiveAnswer } = testsStore;
const { activeQuestion, activeAnswer } = storeToRefs(testsStore);
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
    stateForFindElem: EEntityState.Active,
    stateForFindIndex: EEntityState.Default,
    stateForClickIndex: EEntityState.Active,
  });

  // находим первый активный вопрос соответствующего теста
  updateActiveQuestion({
    entityIdForListByEntityId: activeTest.value.id,
    entityIdForClickIndex: activeQuestion.value.id,
    stateForFindElem: EEntityState.Active,
    stateForFindIndex: EEntityState.Active,
    stateForClickIndex: EEntityState.Active,
  });
  if (activeAnswer.value) {
    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: activeAnswer.value.id,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Unlocked,
    });
  }
  initializeTest();
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
