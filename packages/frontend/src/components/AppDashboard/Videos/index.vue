<template>
  <AppTitleLine>
    <AppTitle>Управление видеороликами</AppTitle>
  </AppTitleLine>
  <AppDashboardVideosList />
  <AppSteps />
  <AppDashboardVideosForm v-if="videoStep === 0" />
  <AppDashboardVideosUpload
    v-if="videoStep === 1"
    :type="EUploadType.VIDEO_POSTER"
    method="put"
  />
  <AppDashboardVideosUpload
    v-if="videoStep === 2"
    :type="EUploadType.VIDEO_VIDEO_FILE"
    method="put"
  />
  <AppDashboardVideosFullyFilled v-if="videoStep === 3" />
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
