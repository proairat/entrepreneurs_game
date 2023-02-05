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
import { useViewModulesEntity } from "@/componentsScripts/useViewModuleEntity";
const { backTo, getModuleHeader, getModuleId, getThemeTitle } =
  useViewModulesEntity();
</script>

<style scoped lang="scss">
@import "@/componentsStyles/ViewModuleEntity.scss";
</style>
