<template>
  <AppTitleLine>
    <AppTitle>Управление видео</AppTitle>
  </AppTitleLine>
  <AppDashboardVideosList />
  <AppSteps />
  <AppDashboardVideosForm v-if="videoStep === 0" />
  <AppDashboardVideosUpload
    v-if="videoStep === 1"
    method="post"
    textForTriggerButton="Выберите обложку видеоролика"
  />
  <!--<AppTestDescription v-if="step === 0" />
  <AppTestContent v-if="step === 1" />
  <AppTestResult v-if="step === 2" />-->
  <!--<AppDashboardVideosDialog />-->
</template>

<script lang="ts">
export default {
  name: "AppDashboardVideos",
};
</script>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDashboardStore } from "@/stores";

const dashboardStore = useDashboardStore();
const { videoStep } = storeToRefs(dashboardStore);
</script>
