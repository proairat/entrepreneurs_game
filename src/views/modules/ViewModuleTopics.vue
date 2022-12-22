<template>
  <AppTitleLine>
    <AppBackButton v-bind="backTo"></AppBackButton>
    <AppTitle>
      {{ getModuleHeader }}
    </AppTitle>
  </AppTitleLine>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <div class="left-side">
          <AppProgress type="topics" />
          <AppListOfThemes :moduleId="getModuleId" />
        </div>
        <div class="right-side">
          <AppTitleLine>
            <AppTitle>{{ getThemeTitle }}</AppTitle>
          </AppTitleLine>
          <AppVideo />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModulesStore } from "@/stores";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

const modulesStore = useModulesStore();
const { activeModule, activeTheme } = storeToRefs(modulesStore);
const backTo = ref({
  path: `/modules`,
  name: "ViewModules",
});

// const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));

const getModuleHeader = computed(() => activeModule.value.header);
const getModuleId = computed(() => activeModule.value.id);
const getThemeTitle = computed(() => activeTheme.value.title);
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
