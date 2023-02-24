<template>
  <div class="el-message-wrapper"></div>
  <!--v-model:file-list="fileList"-->
  <el-upload
    ref="upload"
    action="http://localhost:3000/modules/upload"
    list-type="picture"
    :limit="1"
    :auto-upload="false"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
    :on-change="handleChange"
  >
    <template #tip>
      <!--<div class="el-upload__tip text-red-600">
        <div>Ограничения:</div>
        <div>Количество файлов: 1</div>
        <div>Тип файла: PNG, SVG</div>
        <div>Размер файла: меньше 2 Мбайт</div>
      </div>-->
    </template>
    <template #trigger>
      <button class="bg-indigo-500 p-2 hover:bg-indigo-600 text-white">
        Выберите файл
      </button>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import {
  ElMessage,
  genFileId,
  type UploadInstance,
  type UploadProps,
  type UploadRawFile,
} from "element-plus";

/**
 * 1 - Файл не выбран
 * 2 - Файл выбран
 * 3 - Файл успешно загружен
 *  */

const props = defineProps<{
  isCheckFileReadyPass: boolean;
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
}>();

interface IElMessageUploadFile {
  message: string;
  type: MessageType;
  appendTo: string;
  idMessage: number;
  shPayload: string;
}
type MessageType = "success" | "warning" | "info" | "error";

const emitsObj = ref<IElMessageUploadFile>({
  message: "Файл не выбран",
  type: "error",
  appendTo: ".el-message-wrapper",
  idMessage: 1,
  shPayload: "",
});

const upload = ref<UploadInstance>();

function emitObjFunc(obj: any) {
  const {
    message = "Файл не выбран",
    type = "error",
    appendTo = ".el-message-wrapper",
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

watch(
  () => props.isCheckFileReadyPass,
  () => {
    if (props.isCheckFileReadyPass) {
      upload.value!.submit();
    } else {
      upload.value!.clearFiles();
      emitObjFunc({});
    }
  }
);

const handleRemove: UploadProps["onRemove"] = () => {
  emitObjFunc({});
};

function isComplianceWithRestrictions(file: UploadRawFile) {
  const allowTypes = ["image/svg+xml", "image/png"];
  if (!allowTypes.includes(file.type)) {
    ElMessage({
      message: "Тип файла должен быть либо PNG, либо SVG",
      type: "error",
      appendTo: ".el-message-wrapper",
    });
    return false;
  }

  if (file.size / 1024 / 1024 > 2) {
    ElMessage({
      message: "Размер файла не должен превышать 2 Мбайт",
      type: "error",
      appendTo: ".el-message-wrapper",
    });
    return false;
  }
  return true;
}

const handleExceed: UploadProps["onExceed"] = (files) => {
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.clearFiles();
  if (isComplianceWithRestrictions(file)) {
    upload.value!.handleStart(file);
  } else {
    emitObjFunc({});
  }
};

const handleSuccess: UploadProps["onSuccess"] = (response) => {
  emitObjFunc({
    message: "Файл успешно загружен!",
    type: "success",
    idMessage: 3,
    shPayload: response.response,
  });
};

const handleError: UploadProps["onError"] = () => {
  ElMessage({
    message: "Произошла ошибка! Файл не был загружен.",
    type: "error",
    appendTo: ".el-message-wrapper",
  });
  emitObjFunc({});
};

const handleChange: UploadProps["onChange"] = (uploadFile) => {
  if (uploadFile.status === "ready") {
    if (isComplianceWithRestrictions(uploadFile.raw as UploadRawFile)) {
      emitObjFunc({ message: "Файл выбран", type: "warning", idMessage: 2 });
    } else {
      upload.value!.clearFiles();
      emitObjFunc({});
    }
  }
};

emitObjFunc({});
</script>

<style scoped lang="scss">
.el-message-wrapper {
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
