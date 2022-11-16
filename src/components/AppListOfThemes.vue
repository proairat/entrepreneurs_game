<template>
  <ul class="app-list-of-themes">
    <AppTheme
      v-for="theme in themes"
      :key="theme.id"
      v-bind="theme"
      @change-active-item="changeActiveItemHandler"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCoursesStore } from "@/stores";
import type { ITheme, IVideo } from "@/types/interfaces";

const props = defineProps<{
  moduleId: number;
}>();

const coursesStore = useCoursesStore();
const {
  getThemesByModuleId,
  updateActiveTheme,
  updateActiveVideo,
  getVideosByModuleId,
} = coursesStore;
const themes = ref<ITheme[]>([]);
const themesByModuleId = getThemesByModuleId(props.moduleId);

const videos = ref<IVideo[]>([]);
const videosByModuleId = getVideosByModuleId(props.moduleId);

if (Array.isArray(themesByModuleId)) {
  themes.value = themesByModuleId;
}

if (Array.isArray(videosByModuleId)) {
  videos.value = videosByModuleId;
}

/**
 * Update active theme in Pinia
 * @param {number} themeId - theme identifier
 */
function changeActiveItemHandler(themeId: number, videoId: number) {
  updateActiveTheme(props.moduleId, themes.value, themeId);
  updateActiveVideo(props.moduleId, videos.value, videoId);
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
