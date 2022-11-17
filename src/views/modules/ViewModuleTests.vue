<template>
  <AppTitleLine>
    <AppBackButton v-bind="backTo"></AppBackButton>
    <AppTitle>
      {{ getCourseHeader }}
    </AppTitle>
  </AppTitleLine>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <div class="left-side">
          <AppProgress type="tests" />
          <AppListOfThemes :moduleId="getModuleId" />
        </div>
        <div class="right-side">
          <AppThemeHeader>{{ getThemeTitle }}</AppThemeHeader>
          <AppBlock />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from "@/stores";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import AppBlock from "@/components/AppTestBlock/AppBlock.vue";

const coursesStore = useCoursesStore();
const { activeTheme, activeModule } = storeToRefs(coursesStore);
const backTo = ref({
  path: `/modules`,
  name: "ViewModules",
});

// const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));

const getCourseHeader = computed(() => {
  return activeModule.value.header;
});

const getModuleId = computed(() => {
  return activeModule.value.id;
});

const getThemeTitle = computed(() => {
  return activeTheme.value.title;
});
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
  padding-bottom: 1.5rem;
}
.main-part {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "left-side right-side";
  background-color: $gray-10;
  margin: 0 1.5rem;
}

.left-side {
  grid-area: left-side;
  margin-right: 1.5rem;
}
.right-side {
  grid-area: right-side;
}
</style>
