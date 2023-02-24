<template>
  <div class="the-form">
    <div class="entry-personal-data">Введите данные карточки модуля</div>
    <el-form
      ref="ruleFormRef"
      :model="formModel"
      :rules="rules"
      :size="formSize"
      :status-icon="true"
      class="the-form"
      @validate="validateFormHandler"
    >
      <el-form-item prop="header">
        <el-input
          v-model="formModel.header"
          type="text"
          placeholder="Заголовок"
        />
      </el-form-item>
    </el-form>
    <AppDashboardUpload
      :is-check-file-ready-pass="isCheckFileReadyPass"
      @message-event="messageEventHandler"
      @upload-file-error="uploadFileErrorHandler"
    />
    <div class="submit-form__outer-start-test">
      <el-button
        type="primary"
        class="submit-form__button-start-test rounded-md"
        @click="checkFormReadyHandler(ruleFormRef), checkFileReadyHandler()"
      >
        Создать карточку модуля</el-button
      >
    </div>
  </div>
  <AppSpinner v-if="isSpinnerVisible" />
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { FormItemProp, FormInstance, FormRules } from "element-plus";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";

interface IElMessageUploadFile {
  message: string;
  type: MessageType;
  appendTo: string;
  idMessage: number;
  shPayload: string;
}
type MessageType = "success" | "warning" | "info" | "error";

const formSize = ref("large");
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  header: "",
});
const submitResult = ref({
  formReady: false,
  fileReady: false,
});
const overallResult = ref({
  formResult: "",
  fileResult: "",
});
const isCheckFileReadyPass = ref(false);
const isSpinnerVisible = ref(false);
const elMessageRef = ref<IElMessageUploadFile>({
  message: "Файл не выбран",
  type: "error",
  appendTo: ".el-message-wrapper",
  idMessage: 1,
  shPayload: "",
});
const rules = reactive<FormRules>({
  header: [
    {
      required: true,
      message: "Пожалуйста, введите заголовок модуля",
      trigger: "change",
    },
  ],
});

function validateFormHandler(props: FormItemProp, isValid: boolean, message: string){
  if (!isValid) {
    submitResult.value.formReady = false;
  } 
}

function checkFormReadyHandler(formEl: FormInstance | undefined) {
  if (!formEl) return;
    formEl.validate((valid) => {
    if (valid) {
      submitResult.value.formReady = true;
    } else {
      submitResult.value.formReady = false;
      ElMessage({
        message: "Не заполнены поля формы",
        type: "error",
        appendTo: ".el-message-wrapper",
      });
    }
  });
}

function checkFileReadyHandler() {
  if (elMessageRef.value.idMessage === 1) {
    // 1 - Файл не выбран
    ElMessage(elMessageRef.value);
    submitResult.value.fileReady = false;
  }

  if (elMessageRef.value.idMessage === 2) {
    // 2 - Файл выбран
    submitResult.value.fileReady = true;
  }
}

watch(overallResult.value, () => {
  if (
    overallResult.value.fileResult === "OK" &&
    overallResult.value.formResult === "OK"
  ) {
    isSpinnerVisible.value = false;
    ElMessage({
      message: "Карточка модуля успешно создана",
      type: "success",
      appendTo: ".el-message-wrapper",
    });
    ruleFormRef.value?.resetFields();
    submitResult.value.formReady = false;
    overallResult.value.formResult = "";
  }
});

watch(elMessageRef.value, () => {
  overallResult.value.fileResult = elMessageRef.value.shPayload;
});

watch(submitResult.value, () => {
  if (submitResult.value.formReady && submitResult.value.fileReady) {
    submitFormFields();
    isCheckFileReadyPass.value = true;
    isSpinnerVisible.value = true;
  } else {
    isCheckFileReadyPass.value = false;
  }
});

function submitFormFields() {
  try {
    const formData = new FormData();

    for (let item of Object.entries(formModel)) {
      const [name, value] = item;
      formData.append(name, value);
    }

    let { data, onFetchResponse, onFetchError } = useFetchComposable(
      "/modules",
      "upload",
      "POST",
      formData
    );

    onFetchResponse(() => {
      if (data.value.response === "OK") {
        overallResult.value.formResult = data.value.response;
      }
    });

    onFetchError((err) => {
      ElMessage({
        message: `Произошла ошибка при загрузке полей формы!: ${err}`,
        type: "error",
        appendTo: ".el-message-wrapper",
      });
      submitResult.value.formReady = false;
      overallResult.value.formResult = "";
      ruleFormRef.value?.resetFields();
      isSpinnerVisible.value = false;
    });
  } catch (error) {
    ElMessage({
      message: `Произошла ошибка дашборда: ${error}`,
      type: "error",
      appendTo: ".el-message-wrapper",
    });
  }
}

function messageEventHandler(elMessage: IElMessageUploadFile) {
  Object.assign(elMessageRef.value, elMessage);
}

function uploadFileErrorHandler(isError: boolean){
  if (isError){
    isSpinnerVisible.value = false;
  }
}
</script>

<style scoped lang="scss">
.entry-personal-data {
  padding: 1.5rem 0;
  text-align: center;
  font-size: $text-size-h5;
}

.el-input {
  background-color: transparent;

  &:deep(.el-input__wrapper) {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  &:deep(.el-input__inner) {
    padding-left: 0;
    padding-right: 0;
    &:focus {
      box-shadow: none;
    }
  }
  &:deep(.el-input__inner:-webkit-autofill) {
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    box-shadow: inset 0 0 0 50px #fff;
  }
}

.el-form-item {
  margin-bottom: 1.5rem;
}

:deep(.el-textarea__inner) {
  font-size: 1rem;
  min-height: 6rem !important;
  padding: 0.5rem 1rem;
}

.submit-form {
  &__outer-start-test {
    display: flex;
    justify-content: center;
  }
  &__button-start-test {
    height: 3.5rem;
    font-size: 1rem;
    background-color: $blue-80;
    color: $white;
    border: none;
    &:hover {
      background-color: $blue;
    }
  }
}
</style>
