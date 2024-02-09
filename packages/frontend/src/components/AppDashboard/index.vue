<template>
  <div class="max-w-6xl mx-auto min-w-[35rem]">
    <div class="dashboard-page">
      <div class="dashboard-page__sidebar">
        <AppDashboardMenu @click-menu-item="clickMenuItemHandler" />
      </div>
      <div class="dashboard-page__main">
        <component :is="tabs[currentTab]"></component>
      </div>
      <!--<TestTestTest />-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppDashboard",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import AppDashboardModules from "@/components/AppDashboard/Modules/index.vue";
import AppDashboardVideos from "@/components/AppDashboard/Videos/index.vue";
import AppDashboardTests from "@/components/AppDashboard/Tests/index.vue";
import AppDashboardSettings from "@/components/AppDashboard/Settings/index.vue";

const currentTab = ref("AppDashboardModules");
const tabs = {
  AppDashboardModules,
  AppDashboardVideos,
  AppDashboardTests,
  AppDashboardSettings,
};

function clickMenuItemHandler(component: string) {
  currentTab.value = component;
}
</script>

<style scoped lang="scss">
.dashboard-page {
  // background-color: red;
  display: grid;
  grid-template-areas:
    "sidebar main"
    "sidebar main";
  grid-template-rows: 2fr 6fr;
  grid-template-columns: 2fr 6fr;
  &__sidebar {
    grid-area: sidebar;
  }
  &__main {
    grid-area: main;
  }
}
</style>
