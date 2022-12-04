<template>
  <ul class="app-list-of-themes">
    <AppTheme
      v-for="theme in themes"
      :key="theme.id"
      v-bind="theme"
      @change-active-theme="changeActiveThemeHandler"
      @change-active-video="changeActiveVideoHandler"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useModulesStore } from "@/stores";
import type { ITest, ITheme, IVideo } from "@/types/interfaces";
import { EEntityType } from "@/types/enums";

const props = defineProps<{
  moduleId: number;
}>();

const modulesStore = useModulesStore();
const {
  getThemesByModuleId,
  getVideosByModuleId,
  getTestsByModuleId,
  updateActiveTheme,
  updateActiveVideo,
  updateActiveTest,
} = modulesStore;
const themes = ref<ITheme[]>([]);
const themesByModuleId = getThemesByModuleId(props.moduleId);
const videos = ref<IVideo[]>([]);
const videosByModuleId = getVideosByModuleId(props.moduleId);
const tests = ref<ITest[]>([]);
const testsByModuleId = getTestsByModuleId(props.moduleId);

if (Array.isArray(themesByModuleId)) {
  themes.value = themesByModuleId;
}

if (Array.isArray(videosByModuleId)) {
  videos.value = videosByModuleId;
}

if (Array.isArray(testsByModuleId)) {
  tests.value = testsByModuleId;
}

/**
 * Update active theme in Pinia
 * @param {number} themeId - theme identifier
 */
function changeActiveThemeHandler(themeId: number) {
  updateActiveTheme(props.moduleId, themes.value, themeId);
}
/**
 * Update active video in Pinia
 * @param {number} videoId - video identifier
 */
function changeActiveVideoHandler(theme: ITheme) {
  if (theme.type === EEntityType.Topics) {
    updateActiveVideo(props.moduleId, videos.value, theme.id);
  }
  if (theme.type === EEntityType.Tests) {
    console.log("Вот и на тест щёлкнули!", testsByModuleId);
    updateActiveTest(props.moduleId, tests.value, theme.id);
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
