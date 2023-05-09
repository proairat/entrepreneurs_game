<template>
  <div class="el-message-wrapper-main"></div>
  <AppMargin :margin="{ marginTop: '1.5rem' }" />
  <el-upload
    ref="upload"
    :method="props.method"
    :action="URL_VIDEOS_UPLOAD"
    list-type="picture"
    :limit="1"
    :auto-upload="false"
    v-model:file-list="fileList"
    :on-remove="handleRemove"
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
      <InfoButton> {{ textForTriggerButton }} </InfoButton>
    </template>
  </el-upload>
  <AppMargin :margin="{ marginTop: '0.625rem' }" />
  <div class="create-video-card__outer">
    <PrimaryButton @click="checkFileReadyHandler">
      Загрузить обложку на сервер
    </PrimaryButton>
  </div>
  <pre>
    {{ fileList }}
  </pre>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  ElMessage,
  genFileId,
  type UploadInstance,
  type UploadProps,
  type UploadRawFile,
  type UploadUserFile,
} from "element-plus";
import { URL_VIDEOS_UPLOAD } from "@/API";
import { useDashboardStore } from "@/stores";
import { storeToRefs } from "pinia";
import type { IElMessageUploadFile, IVideo } from "share/types/interfaces";

const dashboardStore = useDashboardStore();
const { getVideosList, addToVideosList } = dashboardStore;
const { activeVideo } = storeToRefs(dashboardStore);

const fileList = ref<UploadUserFile[]>([]);
const appendTo = "el-message-wrapper-main";
const props = defineProps<{
  method: string;
  textForTriggerButton?: string;
}>();
const textForTriggerButton = computed(() =>
  props.textForTriggerButton ? props.textForTriggerButton : "Выберите файл"
);
const emitsObj = ref<IElMessageUploadFile>({
  message: "Файл не выбран",
  type: "error",
  appendTo: `.${appendTo}`,
  idMessage: 1,
  shPayload: "",
});
const upload = ref<UploadInstance>();
const handleRemove: UploadProps["onRemove"] = () => {
  console.log("handleRemove");
  emitObjFunc({
    appendTo: `.${appendTo}`,
  });
};
const handleExceed: UploadProps["onExceed"] = (files) => {
  console.log("handleExceed");
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.clearFiles();
  if (isComplianceWithRestrictions(file)) {
    upload.value!.handleStart(file);
  } else {
    emitObjFunc({
      appendTo: `.${appendTo}`,
    });
  }
};
const handleSuccess: UploadProps["onSuccess"] = (response) => {
  console.log("handleSuccess");
  emitObjFunc({
    message: "Файл успешно загружен!",
    type: "success",
    idMessage: 3,
    shPayload: response.response,
    appendTo: `.${appendTo}`,
  });
};
const handleError: UploadProps["onError"] = (error: Error) => {
  console.log("handleError");
  ElMessage({
    message: `Файл не был загружен. Произошла ошибка: ${error}`,
    type: "error",
    appendTo: `.${appendTo}`,
  });
  emitObjFunc({
    appendTo: `.${appendTo}`,
  });
};
const handleChange: UploadProps["onChange"] = (uploadFile) => {
  console.log("handleChange");
  console.log("uploadFile", uploadFile);
  if (uploadFile.status === "ready") {
    if (isComplianceWithRestrictions(uploadFile.raw as UploadRawFile)) {
      emitObjFunc({
        message: "Файл выбран",
        type: "warning",
        idMessage: 2,
        appendTo: `.${appendTo}`,
      });
    } else {
      upload.value!.clearFiles();
      emitObjFunc({
        appendTo: `.${appendTo}`,
      });
    }
  }
};
const additionalData = ref<Pick<IVideo, "id">>({ id: 0 });

function emitObjFunc(obj: any) {
  const {
    message = "Файл не выбран",
    type = "error",
    appendTo = "",
    idMessage = 1,
    shPayload = "",
  } = obj;
  emitsObj.value.message = message;
  emitsObj.value.type = type;
  emitsObj.value.appendTo = appendTo;
  emitsObj.value.idMessage = idMessage;
  emitsObj.value.shPayload = shPayload;
}

function isComplianceWithRestrictions(file: UploadRawFile) {
  const allowTypes = ["image/svg+xml", "image/png"];
  if (!allowTypes.includes(file.type)) {
    ElMessage({
      message: "Тип файла должен быть либо PNG, либо SVG",
      type: "error",
      appendTo: `.${appendTo}`,
    });
    return false;
  }

  if (file.size / 1024 / 1024 > 3) {
    ElMessage({
      message: "Размер файла не должен превышать 3 Мбайт",
      type: "error",
      appendTo: `.${appendTo}`,
    });
    return false;
  }
  return true;
}

function checkFileReadyHandler() {
  console.log("AppDashboardVideosUpload.vue -> checkFileReadyHandler()");
  additionalData.value = { id: activeVideo.value.id };
  if (fileList.value.length) {
    upload.value!.submit();
  } else {
    ElMessage({
      message: "Файл не выбран",
      type: "error",
      appendTo: `.${appendTo}`,
    });
  }
}

/*
watch(
  () => props.isCheckFileReadyPass,
  () => {
    if (props.isCheckFileReadyPass) {
      upload.value!.submit();
    } else {
      upload.value!.clearFiles();
      emitObjFunc({ appendTo: `.${appendTo}` });
    }
  }
);
*/

emitObjFunc({ appendTo: `.${appendTo}` });
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
