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
import type { ITheme } from "@/types/interfaces";

const props = defineProps<{
  courseId: number;
}>();

const coursesStore = useCoursesStore();
const { getThemesByCourseId, updateActiveTheme } = coursesStore;
const themes = ref<ITheme[]>([]);
const themesByCourseId = getThemesByCourseId(props.courseId);

if (Array.isArray(themesByCourseId)) {
  themes.value = themesByCourseId;
}

/**
 * Update active theme in Pinia
 * @param {number} themeId - theme identifier
 */
function changeActiveItemHandler(themeId: number) {
  updateActiveTheme(props.courseId, themes.value, themeId);
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
