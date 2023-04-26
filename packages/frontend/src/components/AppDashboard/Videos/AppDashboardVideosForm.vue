<template>
  <div class="entry-personal-data el-message-wrapper-main">
    Введите данные видео
  </div>
  <el-form
    ref="ruleFormRef"
    :model="formModel"
    :rules="rules"
    :size="formSize"
    :status-icon="true"
    label-width="200px"
  >
    <el-form-item prop="title" label="Название видеоролика">
      <el-input
        v-model="formModel.title"
        type="text"
        placeholder="Название видеоролика"
      />
    </el-form-item>
    <el-form-item prop="author" label="Автор видеоролика">
      <el-input
        v-model="formModel.author"
        type="text"
        placeholder="Название видеоролика"
      />
    </el-form-item>
    <!--
    <AppDashboardVideosUpload
      :method="method.toLowerCase()"
      :isCheckFileReadyPass="isCheckFileReadyPass"
      :class="appendTo"
      @message-event="messageEventHandler"
      @upload-file-error="uploadFileErrorHandler"
      textForTriggerButton="Выберите постер к видео"
    />
    <AppDashboardVideosUpload
      :method="method.toLowerCase()"
      :isCheckFileReadyPass="isCheckFileReadyPass"
      :class="appendTo"
      @message-event="messageEventHandler"
      @upload-file-error="uploadFileErrorHandler"
      textForTriggerButton="Выберите видеофайл"
    />-->
    <div class="create-module-card__outer">
      <PrimaryButton @click="checkFormReadyHandler(ruleFormRef)">
        Внести данные о видео
      </PrimaryButton>
    </div>
    <template v-for="author in authors" :key="author.id">
      <el-divider />
      <el-form-item
        :prop="`surname${author.id}`"
        label="Фамилия"
        :rules="[
          {
            required: true,
            message: 'Пожалуйста, введите фамилию автора видеоролика',
            trigger: 'change',
          },
        ]"
      >
        <el-input
          v-model="formModel[`surname${author.id}`]"
          placeholder="Фамилия"
        />
      </el-form-item>
      <el-form-item
        :prop="`name${author.id}`"
        label="Имя"
        :rules="[
          {
            required: true,
            message: 'Пожалуйста, введите имя автора видеоролика',
            trigger: 'change',
          },
        ]"
      >
        <el-input 
          v-model="formModel[`name${author.id}`]" 
          placeholder="Имя" 
        />
      </el-form-item>
      <el-form-item
        :prop="`patronymic${author.id}`"
        label="Отчество"
        :rules="[
          {
            required: true,
            message: 'Пожалуйста, введите отчество автора видеоролика',
            trigger: 'change',
          },
        ]"
      >
        <el-input
          v-model="formModel[`patronymic${author.id}`]"
          placeholder="Отчество"
        />
      </el-form-item>
    </template>
    <el-form-item>
      <InfoButton
        @click="infoButtonHandler"
        class="mr-3"
        height-class="h-10"
        font-size-class="text-sm"
        >Добавить ещё одного автора</InfoButton
      >
      <DangerButton
        @click="dangerButtonHandler"
        height-class="h-10"
        font-size-class="text-sm"
        >Удалить лишние поля автора</DangerButton
      >
    </el-form-item>
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

const authors = ref([{ 
  id: 1, 
  surname: "", 
  name: "", 
  patronymic: "" 
}]);

const dashboardStore = useDashboardStore();
const { updateRowJustInserted } = dashboardStore;
const formSize = ref("large");
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  title: "",
  author: "",
  surname1: "",
  name1: "",
  patronymic1: "",
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
  title: [
    {
      required: true,
      message: "Пожалуйста, введите название видеоролика",
      trigger: "change",
    },
  ],
  author: [
    {
      required: true,
      message: "Пожалуйста, введите автора видеоролика",
      trigger: "change",
    },
  ],
});
const method = ref("POST");

function checkFormReadyHandler(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("Проверка пройдена, отправляем данные на сервер");
      submitFormFields();
    } else {
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
  }

  if (elMessageRef.value.idMessage === 2) {
    // 2 - Файл выбран
  }
}

function submitFormFields() {
  console.log("submitFormFields()");
  const formData = new FormData();

  for (let item of Object.entries(formModel)) {
    const [name, value] = item;
    formData.append(name, value);
  }

  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    urlConst: "/videos",
    method: "POST",
    body: formData,
  });

  /*
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
    
    overallResult.value.formResult = "";
    isSpinnerVisible.value = false;
  });
  */
}

function uploadFileErrorHandler(isError: boolean) {
  if (isError) {
    overallResult.value.fileResult = "";
    isSpinnerVisible.value = false;
  }
}

function messageEventHandler(elMessage: IElMessageUploadFile) {
  Object.assign(elMessageRef.value, elMessage);
}

function insertVideoDataHandler() {
  console.log("insertVideoDataHandler is working");
  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    method: "POST",
    urlConst: "/videos",
  });
  onFetchResponse(() => {
    /*
    if (data.value.response === "OK") {
      deleteFromList(cellData.rowData);
      if (tableData.length && cellData.rowData.state === EEntityState.Active) {
        updateActiveModule({
          entityId: tableData[0].id,
          stateForFindElem: EEntityState.Default,
          stateForFindIndex: EEntityState.Default,
          stateForClickIndex: EEntityState.Active,
        });
      }
      ElMessage({
        message: `Запись успешно удалена!`,
        type: "success",
      });
    }
    */
  });
  onFetchError((err) => {
    /*
    ElMessage({
      message: `Произошла ошибка при удалении записи: ${err}`,
      type: "error",
    });
    */
  });
}

function infoButtonHandler() {
  const lastId = authors.value[authors.value.length - 1].id;
  const newId = lastId + 1;
  authors.value.push({
    id: newId,
    surname: "",
    name: "",
    patronymic: "",
  });
  formModel[`surname${newId}`] = "";
  formModel[`name${newId}`] = "";
  formModel[`patronymic${newId}`] = "";
}

function dangerButtonHandler() {
  if (authors.value.length > 1) {
    authors.value.pop();
  } else {
    ElMessage({
      message: "У видео должен быть хотя бы один автор",
      type: "warning",
      appendTo: `.${appendTo}`,
    });
  }
}

watch(
  authors,
  () => {
    window.scrollBy(0, window.innerHeight);
  },
  { deep: true, flush: "post" }
);

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

/*
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
    
    isCheckFileReadyPass.value = true;
    isSpinnerVisible.value = true;
  } else {
    isCheckFileReadyPass.value = false;
  }
*/
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
</style>
