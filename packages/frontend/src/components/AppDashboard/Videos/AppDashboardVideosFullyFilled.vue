<template>
  <AppMargin :margin="{ marginTop: '1.5rem' }" />
  <PrimaryButton @click-button="goToTheAppDashboardVideosForm">
    Создать ещё одну видео карточку
  </PrimaryButton>
  <AppMargin :margin="{ marginBottom: '1.5rem' }" />
</template>

<script setup lang="ts">
import { BASE_URL_VIDEOS_UPDATE_VIDEO_STATE } from "share/api/API";
import { useFetchComposable } from "@/composables/use-fetch";
import { useDashboardStore } from "@/stores";
import {
  EEntityStateDashboard,
  EHttpMethods,
  EServerResponses,
} from "share/types/enums";
import type { IVideoDB } from "share/types/interfaces";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";

const dashboardStore = useDashboardStore();
const { tableData } = storeToRefs(dashboardStore);
const { updateVideoStep, getCurrentVideoByState, updateCurrentVideoByState } =
  dashboardStore;
const AfterCreateVideoFile = getCurrentVideoByState(
  EEntityStateDashboard.After_create_video_file
);

function goToTheAppDashboardVideosForm() {
  updateVideoStep(0);
}

if (AfterCreateVideoFile) {
  const formData = new FormData();
  formData.append("id", String(AfterCreateVideoFile.id));
  formData.append("state", EEntityStateDashboard.Fully_filled);

  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    url: BASE_URL_VIDEOS_UPDATE_VIDEO_STATE,
    method: EHttpMethods.PUT,
    body: formData,
  });

  onFetchResponse(() => {
    const {
      response,
      videoRow,
    }: { response: EServerResponses; videoRow: IVideoDB } = data.value;

    if (response === EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_SUCCESSFUL) {
      const findIndexWithDesiredId = tableData.value.findIndex(
        (item) => item.id === videoRow.id
      );
      tableData.value[findIndexWithDesiredId].state = videoRow.state;
      updateCurrentVideoByState({
        entityId: videoRow.id,
        stateForFindElem: EEntityStateDashboard.After_create_video_file,
        stateForFindIndex: EEntityStateDashboard.Fully_filled,
        stateForClickIndex: EEntityStateDashboard.Fully_filled,
      });
    }
  });

  onFetchError((err) => {
    const appendTo = "el-message-wrapper-main";
    ElMessage({
      message: `Произошла ошибка обновлении конечного состояния строки данных: ${err}`,
      type: "error",
      appendTo: `.${appendTo}`,
    });
  });
}
</script>

<style scoped lang="scss">
.el-message-wrapper-main {
  position: relative;
}
</style>
