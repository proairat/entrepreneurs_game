<template>
  <ul class="app-list-of-themes">
    <AppTheme v-for="theme in themes" :key="theme.id" v-bind="theme" />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCoursesStore } from "@/stores";
import type { ITheme } from "@/types/interfaces";

const props = defineProps<{
  courseId: number;
}>();

const coursesStore = useCoursesStore();
const { bijection } = storeToRefs(coursesStore);
const { setActiveTopic, getThemesByCourseId } = coursesStore;
const themes = ref<ITheme[]>([]);
const themesByCourseId = getThemesByCourseId(props.courseId);

if (Array.isArray(themesByCourseId)) {
  themes.value = themesByCourseId;
}

/*
const activeTopic = themes.find(
  (item: { state: EntityState }) => item.state === EntityState.Active
);
*/
console.log("big", bijection.value);
// setActiveTopic(activeTopic);
</script>

<style scoped lang="scss">
.app-list-of-themes {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
}
</style>
