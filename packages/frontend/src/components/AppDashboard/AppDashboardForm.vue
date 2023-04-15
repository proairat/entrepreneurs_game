<template>
  <div class="entry-personal-data">Введите данные карточки модуля</div>
  <el-form
    ref="ruleFormRef"
    :model="formModel"
    :rules="rules"
    :size="formSize"
    :status-icon="true"
    @validate="validateFormHandler"
  >
    <el-form-item prop="header" label="Заголовок">
      <el-input
        v-model="formModel.header"
        type="text"
        placeholder="Заголовок"
      />
    </el-form-item>
    <AppDashboardUpload
      :method="method.toLowerCase()"
      :isCheckFileReadyPass="isCheckFileReadyPass"
      :class="appendTo"
      @message-event="messageEventHandler"
      @upload-file-error="uploadFileErrorHandler"
    />
    <div class="create-module-card__outer">
      <PrimaryButton
        @click="checkFormReadyHandler(ruleFormRef), checkFileReadyHandler()"
      >
        Создать карточку модуля
      </PrimaryButton>
    </div>
  </el-form>
  <AppSpinner v-if="isSpinnerVisible" />
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { FormItemProp, FormInstance, FormRules } from "element-plus";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";
import { useDashboardStore } from "@/stores";
import type { IModule, IElMessageUploadFile } from "share/types/interfaces";

const dashboardStore = useDashboardStore();
const { updateRowJustInserted } = dashboardStore;
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
const appendTo = "el-message-wrapper-main";
const elMessageRef = ref<IElMessageUploadFile>({
  message: "Файл не выбран",
  type: "error",
  appendTo: `.${appendTo}`,
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
const method = ref("POST");

function validateFormHandler(
  props: FormItemProp,
  isValid: boolean,
  message: string
) {
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
        appendTo: `.${appendTo}`,
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

function submitFormFields() {
  const formData = new FormData();

  for (let item of Object.entries(formModel)) {
    const [name, value] = item;
    formData.append(name, value);
  }

  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    urlConst: "/modules",
    urlVar: "/upload",
    method: method.value,
    body: formData,
  });

  onFetchResponse(() => {
    if (data.value.response === "OK") {
      overallResult.value.formResult = data.value.response;
    }
  });

  onFetchError((err) => {
    ElMessage({
      message: `Произошла ошибка при загрузке полей формы!: ${err}`,
      type: "error",
      appendTo: `.${appendTo}`,
    });
    ruleFormRef.value?.resetFields();
    submitResult.value.formReady = false;
    overallResult.value.formResult = "";
    isSpinnerVisible.value = false;
  });
}

function uploadFileErrorHandler(isError: boolean) {
  if (isError) {
    submitResult.value.fileReady = false;
    overallResult.value.fileResult = "";
    isSpinnerVisible.value = false;
  }
}

function messageEventHandler(elMessage: IElMessageUploadFile) {
  Object.assign(elMessageRef.value, elMessage);
}

watch(
  overallResult,
  () => {
    if (
      overallResult.value.fileResult === "OK" &&
      overallResult.value.formResult === "OK"
    ) {
      isSpinnerVisible.value = false;
      ElMessage({
        message: "Карточка модуля успешно создана!",
        type: "success",
        appendTo: `.${appendTo}`,
      });
      ruleFormRef.value?.resetFields();
      submitResult.value.formReady = false;
      submitResult.value.fileReady = false;
      overallResult.value.formResult = "";
      overallResult.value.fileResult = "";
    }
  },
  { deep: true }
);

watch(
  elMessageRef,
  () => {
    overallResult.value.fileResult = elMessageRef.value.shPayload;
  },
  { deep: true }
);

watch(
  submitResult,
  () => {
    if (submitResult.value.formReady && submitResult.value.fileReady) {
      const eventSource = new EventSource("http://localhost/modules/stream");
      eventSource.onopen = () => {
        console.log("Произошло открытие потока в AppDashboardForm.vue");
      };
      eventSource.onmessage = (event) => {
        const data: IModule = JSON.parse(event.data);
        updateRowJustInserted(data);
        eventSource.close();
      };
      eventSource.onerror = (e) => {
        console.error("error occured in EventSource...");
        eventSource.close();
      };
      submitFormFields();
      isCheckFileReadyPass.value = true;
      isSpinnerVisible.value = true;
    } else {
      isCheckFileReadyPass.value = false;
    }
  },
  { deep: true }
);
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

.create-module-card {
  &__outer {
    display: flex;
    justify-content: center;
  }
}
</style>
