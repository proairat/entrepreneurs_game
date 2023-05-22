<template>
  <div class="el-message-wrapper-main"></div>
  <AppMargin :margin="{ marginTop: '1.5rem' }" />
  <el-upload
    ref="upload"
    :method="props.method"
    :action="uploadParams.action"
    list-type="picture"
    :limit="1"
    :auto-upload="false"
    v-model:file-list="fileList"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
    :on-change="handleChange"
    :data="additionalData"
  >
    <!--
    <template #tip>
      <div class="el-upload__tip text-red-600">
        <div>Ограничения:</div>
        <div>Количество файлов: 1</div>
        <div>Тип файла: PNG, SVG</div>
        <div>Размер файла: не более 3 Мбайт</div>
      </div>
    </template>
    -->
    <template #trigger>
      <InfoButton :disabled="disabled">
        {{ uploadParams.textForTriggerButton }}
      </InfoButton>
    </template>
  </el-upload>
  <AppMargin :margin="{ marginTop: '0.625rem' }" />
  <div class="create-video-card__outer">
    <PrimaryButton :disabled="disabled" @click="checkFileReadyHandler">
      {{ uploadParams.textForUploadButton }}
    </PrimaryButton>
  </div>
  <AppSpinner v-if="isSpinnerVisible" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  ElMessage,
  genFileId,
  type UploadInstance,
  type UploadProps,
  type UploadRawFile,
  type UploadUserFile,
} from "element-plus";
import { useDashboardStore } from "@/stores";
import { storeToRefs } from "pinia";
import { getUploadParams } from "share/helpers/commonFunctions";
import {
  EEntityState,
  EEntityType,
  EServerResponses,
  type EUploadType,
} from "share/types/enums";
import type { IVideo } from "share/types/interfaces";

const dashboardStore = useDashboardStore();
const { updateVideoStep, getVideosList, updateVideoList, updateActiveVideo } =
  dashboardStore;
const { activeVideo } = storeToRefs(dashboardStore);
const disabled = ref(false);
const fileList = ref<UploadUserFile[]>([]);
const appendTo = "el-message-wrapper-main";
const props = defineProps<{
  method: string;
  type: EUploadType;
}>();
const upload = ref<UploadInstance>();
const handleExceed: UploadProps["onExceed"] = (files) => {
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.clearFiles();
  if (isComplianceWithRestrictions(file)) {
    upload.value!.handleStart(file);
  }
};
const handleSuccess: UploadProps["onSuccess"] = ({ videoRow, response }) => {
  if (response === EServerResponses.VIDEOS_POST_UPLOAD_POSTER_SUCCESSFUL) {
    updateVideoList(videoRow);
    updateActiveVideo({
      entityId: videoRow.id,
      stateForFindElem: EEntityState.Default,
      stateForFindIndex: EEntityState.Active,
      stateForClickIndex: EEntityState.Active,
    });
    ElMessage({
      message: uploadParams.messageHandleSuccess,
      type: "success",
      appendTo: `.${appendTo}`,
    });
    setTimeout(() => {
      updateVideoStep(uploadParams.updateVideoStep);
    }, 3000);
    isSpinnerVisible.value = false;
  }
};
const handleError: UploadProps["onError"] = (error: Error) => {
  ElMessage({
    message: `${uploadParams.messageHandleError}. Произошла ошибка: ${error}`,
    type: "error",
    appendTo: `.${appendTo}`,
  });
  disabled.value = false;
  isSpinnerVisible.value = false;
};
const handleChange: UploadProps["onChange"] = (uploadFile) => {
  if (
    uploadFile.status === "ready" &&
    !isComplianceWithRestrictions(uploadFile.raw as UploadRawFile)
  ) {
    upload.value!.clearFiles();
  }
};
const additionalData = ref<Pick<IVideo, "id">>({ id: 0 });
const isSpinnerVisible = ref(false);
const uploadParams = getUploadParams(props.type);

function isComplianceWithRestrictions(file: UploadRawFile) {
  const allowTypes = uploadParams.allowTypes;
  if (!allowTypes.includes(file.type)) {
    ElMessage({
      message: uploadParams.messageFileType,
      type: "error",
      appendTo: `.${appendTo}`,
    });
    return false;
  }
  if (file.size / 1024 / 1024 > uploadParams.fileSize) {
    ElMessage({
      message: uploadParams.messageFileSize,
      type: "error",
      appendTo: `.${appendTo}`,
    });
    return false;
  }
  return true;
}

function checkFileReadyHandler() {
  additionalData.value = { id: activeVideo.value.id };
  if (fileList.value.length && !disabled.value) {
    disabled.value = true;
    upload.value!.submit();
    isSpinnerVisible.value = true;
  } else {
    ElMessage({
      message: "Файл не выбран",
      type: "error",
      appendTo: `.${appendTo}`,
    });
  }
}
</script>

<style scoped lang="scss">
.el-message-wrapper-main {
  position: relative;
}

:deep(.el-message--error) {
  position: absolute;
}

:deep(.el-message--success) {
  position: absolute;
}

:deep(.el-message--warning) {
  position: absolute;
}

.create-video-card {
  &__outer {
    display: flex;
    justify-content: center;
  }
}
</style>
