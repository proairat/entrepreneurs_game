<template>
  <div class="el-message-wrapper"></div>
  <!--v-model:file-list="fileList"-->
  <el-upload
    ref="upload"
    class="upload-demo"
    action="http://localhost:3000/modules/upload"
    list-type="picture"
    :limit="1"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-upload="handleBeforeUpload"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <template #trigger>
      <button class="bg-indigo-500 p-2 hover:bg-indigo-600 text-white">
        Выберите файл
      </button>
    </template>
    <template #tip>
      <div class="el-upload__tip text-red-600">
        <div>Ограничения:</div>
        <div>Количество файлов: 1</div>
        <div>Тип файла: PNG, SVG</div>
        <div>Размер файла: меньше 2 Мбайт</div>
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  ElMessage,
  genFileId,
  type UploadInstance,
  type UploadProps,
  type UploadRawFile,
} from "element-plus";

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  console.log("handlePreview");
};

const handleBeforeUpload: UploadProps["beforeUpload"] = (file) => {
  return isComplianceWithRestrictions(file);
};

function isComplianceWithRestrictions(file: UploadRawFile) {
  const allowTypes = ["image/svg+xml", "image/png"];
  console.log("file", file);
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

const upload = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = (files) => {
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();

  if (isComplianceWithRestrictions(file)) {
    upload.value!.clearFiles();
    upload.value!.handleStart(file);
    upload.value!.submit();
  }
};

const handleSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  console.log("response", response);
  console.log("uploadFile", uploadFile);

  ElMessage({
    message: "Файл успешно загружен!",
    type: "success",
    appendTo: ".el-message-wrapper",
  });
};

const handleError: UploadProps["onError"] = (error, file) => {
  console.log("Error occurred!", error, "file", file);
};

/*
const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
*/
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
</style>
