<template>
  <div v-bind="$attrs"></div>
  <el-upload
    ref="upload"
    :method="props.method"
    :action="URL_MODULES_UPLOAD"
    list-type="picture"
    :limit="1"
    :data="props.additionalData"
    :auto-upload="false"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
    :on-change="handleChange"
    :file-list="props.fileList"
  >
    <!--<transition-group name="">
      <el-upload-list></el-upload-list>
    </transition-group>-->
    <template #tip>
      <!--<div class="el-upload__tip text-red-600">
        <div>Ограничения:</div>
        <div>Количество файлов: 1</div>
        <div>Тип файла: PNG, SVG</div>
        <div>Размер файла: не более 3 Мбайт</div>
      </div>-->
    </template>
    <template #trigger>
      <InfoButton> Выберите файл </InfoButton>
    </template>
  </el-upload>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, watch, useAttrs } from "vue";
import {
  ElMessage,
  genFileId,
  type UploadInstance,
  type UploadProps,
  type UploadRawFile,
} from "element-plus";
import { URL_MODULES_UPLOAD } from "@/API";
import type { IElMessageUploadFile } from "share/types/interfaces";

/**
 * Состояния, передаваемые родительскому компоненту
 * 1 - Файл не выбран
 * 2 - Файл выбран
 * 3 - Файл успешно загружен
 *  */

const { class: appendTo } = useAttrs();
const props = defineProps<{
  isCheckFileReadyPass: boolean;
  fileList?: Array<any>;
  method: string;
  additionalData?: { id: string };
}>();
const emits = defineEmits<{
  (
    e: "message-event",
    value: {
      message: string;
      type: string;
      appendTo: string;
      idMessage: number;
      shPayload: any;
    }
  ): void;
  (e: "upload-file-error", isError: boolean): void;
}>();
const emitsObj = ref<IElMessageUploadFile>({
  message: "Файл не выбран",
  type: "error",
  appendTo: `.${appendTo}`,
  idMessage: 1,
  shPayload: "",
});
const upload = ref<UploadInstance>();
const handleRemove: UploadProps["onRemove"] = () => {
  emitObjFunc({
    appendTo: `.${appendTo}`,
  });
};
const handleExceed: UploadProps["onExceed"] = (files) => {
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
  emitObjFunc({
    message: "Файл успешно загружен!",
    type: "success",
    idMessage: 3,
    shPayload: response.response,
    appendTo: `.${appendTo}`,
  });
};
const handleError: UploadProps["onError"] = (error: Error) => {
  ElMessage({
    message: `Файл не был загружен. Произошла ошибка: ${error}`,
    type: "error",
    appendTo: `.${appendTo}`,
  });
  emitObjFunc({
    appendTo: `.${appendTo}`,
  });
  emits("upload-file-error", true);
};
const handleChange: UploadProps["onChange"] = (uploadFile) => {
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
  emits("message-event", emitsObj.value);
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

emitObjFunc({ appendTo: `.${appendTo}` });
emits("upload-file-error", false);
</script>

<style scoped lang="scss">
.el-message-wrapper-main {
  position: relative;
}

.el-message-wrapper-dialog {
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
</style>
