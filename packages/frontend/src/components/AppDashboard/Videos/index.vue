<template>
  <AppTitleLine>
    <AppTitle>Управление видео</AppTitle>
  </AppTitleLine>
  <AppDashboardVideosList />
  <AppSteps />
  <AppDashboardVideosForm v-if="videoStep === 0" />
  <AppDashboardVideosUpload
    v-if="videoStep === 1"
    :type="EUploadType.VIDEO_POSTER"
    method="post"
  />
  <AppDashboardVideosUpload
    v-if="videoStep === 2"
    :type="EUploadType.VIDEO_VIDEO_FILE"
    method="post"
  />
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
import { EUploadType } from "share/types/enums";

const dashboardStore = useDashboardStore();
const { videoStep } = storeToRefs(dashboardStore);
</script>
