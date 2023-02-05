<template>
  <ul class="app-list-of-themes">
    <AppTheme
      v-for="theme in themes"
      :key="theme.id"
      v-bind="theme"
      @change-active-theme="changeActiveThemeHandler"
      @change-active-video="changeActiveVideoHandler"
      @change-active-test="changeActiveTestHandler"
    />
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModulesStore, useTestsStore } from "@/stores";
import { EEntityState, EEntityType } from "share/types/enums";

const props = defineProps<{
  moduleId: number;
}>();

const modulesStore = useModulesStore();
const {
  getThemesByModuleId,
  updateActiveTheme,
  updateActiveVideo,
  updateActiveTest,
} = modulesStore;
const testsStore = useTestsStore();
const { initializeTest, updateActiveQuestion, updateActiveAnswer } = testsStore;
const { activeQuestion, activeAnswer } = storeToRefs(testsStore);
const themes = getThemesByModuleId(props.moduleId);

/**
 * Update active theme in Pinia
 * @param {number} themeId - theme identifier
 */
function changeActiveThemeHandler(themeId: number) {
  updateActiveTheme({
    entityIdForListByEntityId: props.moduleId,
    entityIdForClickIndex: themeId,
    stateForFindElem: EEntityState.Active,
    stateForFindIndex: EEntityState.Default,
    stateForClickIndex: EEntityState.Active,
  });
}

/**
 * Update active video in Pinia
 * @param {number} themeId - theme identifier
 * @param {EntityType.Topics} themeType - type is "EntityType.Topics"
 */
function changeActiveVideoHandler(
  themeId: number,
  themeType: EEntityType.Topics
) {
  if (themeType === EEntityType.Topics) {
    updateActiveVideo({
      entityIdForListByEntityId: props.moduleId,
      entityIdForClickIndex: themeId,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Default,
      stateForClickIndex: EEntityState.Active,
    });
  }
}

/**
 * Update active video in Pinia
 * @param {number} themeId - video identifier
 * @param {EntityType.Tests} themeType - type is "EntityType.Tests"
 */
function changeActiveTestHandler(
  themeId: number,
  themeType: EEntityType.Tests
) {
  if (themeType === EEntityType.Tests) {
    updateActiveTest({
      entityIdForListByEntityId: props.moduleId,
      entityIdForClickIndex: themeId,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Default,
      stateForClickIndex: EEntityState.Active,
    });

    updateActiveQuestion({
      entityIdForListByEntityId: themeId,
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
}
</script>

<style scoped lang="scss">
.app-list-of-themes {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
}
</style>
