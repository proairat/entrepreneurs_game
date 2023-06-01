<template>
  <div class="entry-personal-data el-message-wrapper-main">
    Введите данные карточки видео
  </div>
  <el-form
    ref="ruleFormRef"
    :model="formModel"
    :rules="rules"
    :size="formSize"
    :status-icon="true"
    label-width="250px"
  >
    <el-form-item prop="title" label="Название видеоролика">
      <el-input
        v-model="formModel.title"
        type="text"
        placeholder="Название видеоролика"
      />
    </el-form-item>
    <template v-for="author in authors" :key="author.id">
      <el-divider />
      <el-form-item
        :prop="`surname${author.id}`"
        label="Фамилия автора видеоролика"
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
          placeholder="Фамилия автора видеоролика"
        />
      </el-form-item>
      <el-form-item
        :prop="`name${author.id}`"
        label="Имя автора видеоролика"
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
          placeholder="Имя автора видеоролика"
        />
      </el-form-item>
      <el-form-item
        :prop="`patronymic${author.id}`"
        label="Отчество автора видеоролика"
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
          placeholder="Отчество автора видеоролика"
        />
      </el-form-item>
    </template>
    <el-form-item>
      <InfoButton
        :disabled="disabled"
        class="mr-3"
        height-class="h-10"
        font-size-class="text-sm"
        @click-button="infoButtonHandler"
        >Добавить ещё одного автора</InfoButton
      >
      <DangerButton
        :disabled="disabled"
        height-class="h-10"
        font-size-class="text-sm"
        @click-button="dangerButtonHandler"
        >Удалить лишние поля автора</DangerButton
      >
    </el-form-item>
    <div class="create-module-card__outer">
      <PrimaryButton
        :disabled="disabled"
        @click-button="checkFormReadyHandler(ruleFormRef)"
      >
        Создать карточку видео
      </PrimaryButton>
    </div>
    <AppMargin :margin="{ marginBottom: '1.5rem' }" />
  </el-form>
  <AppSpinner v-if="isSpinnerVisible" />
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {
  EEntityStateDashboard,
  EEntityType,
  EHttpMethods,
  EServerResponses,
} from "share/types/enums";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";
import { useDashboardStore } from "@/stores";
import type { FormInstance, FormRules } from "element-plus";
import type { IAuthor, IVideoDB } from "share/types/interfaces";
import { BASE_URL_VIDEOS } from "share/api/API";

const dashboardStore = useDashboardStore();
const {
  updateVideoStep,
  updateCurrentVideoByState,
  addToVideosList,
  updateRowVideoJustInserted,
} = dashboardStore;
const formSize = ref("large");
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  title: "",
  surname1: "",
  name1: "",
  patronymic1: "",
} as Record<string | "title", string>);
const authors = ref([
  {
    id: 1,
    surname: "",
    name: "",
    patronymic: "",
  },
]);
const isSpinnerVisible = ref(false);
const appendTo = "el-message-wrapper-main";
const rules = reactive<FormRules>({
  title: [
    {
      required: true,
      message: "Пожалуйста, введите название видеоролика",
      trigger: "change",
    },
  ],
});
const disabled = ref(false);

function checkFormReadyHandler(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid && !disabled.value) {
      disabled.value = true;
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

function submitFormFields() {
  const transformedFormModel = transformObject(formModel);
  const formData = new FormData();

  interface IAuthors {
    [index: string]: string;
  }

  type TReturnObj = Pick<IAuthors, "title"> & {
    authors: Array<IAuthor>;
  };

  function transformObject(obj: IAuthors): TReturnObj {
    const returnObj: TReturnObj = {
      title: "",
      authors: [],
    };

    returnObj.title = obj.title;

    for (const key of Object.keys(obj)) {
      if (key.startsWith("surname")) {
        const num = key.slice(7);
        const nameKey = `name${num}`;
        const patronymicKey = `patronymic${num}`;

        if (obj[nameKey] && obj[patronymicKey]) {
          const surname = obj[key];
          const name = obj[nameKey];
          const patronymic = obj[patronymicKey];
          returnObj.authors.push({
            id: +num,
            surname: surname,
            name: name,
            patronymic: patronymic,
            type: EEntityType.TabsAuthors,
          });
        }
      }
    }

    return returnObj;
  }

  formData.append("title", transformedFormModel.title);

  transformedFormModel.authors.forEach((author, i) => {
    formData.append(`authors[${i}][id]`, String(author.id));
    formData.append(`authors[${i}][surname]`, author.surname);
    formData.append(`authors[${i}][name]`, author.name);
    formData.append(`authors[${i}][patronymic]`, author.patronymic);
  });

  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    url: BASE_URL_VIDEOS,
    method: EHttpMethods.POST,
    body: formData,
  });

  isSpinnerVisible.value = true;

  onFetchResponse(() => {
    const {
      response,
      videoRow,
    }: { response: EServerResponses; videoRow: IVideoDB } = data.value;

    if (response === EServerResponses.VIDEOS_CREATE_SUCCESSFUL) {
      isSpinnerVisible.value = false;
      ruleFormRef.value?.resetFields();

      ElMessage({
        message: "Данные о видео успешно загружены! Переходим ко второму шагу.",
        type: "success",
        appendTo: `.${appendTo}`,
      });
      setTimeout(() => {
        updateVideoStep(1);
      }, 3000);
      ruleFormRef.value?.resetFields();
      addToVideosList(videoRow);
      updateRowVideoJustInserted(videoRow);
      updateCurrentVideoByState({
        entityId: videoRow.id,
        stateForFindElem: EEntityStateDashboard.Undefined,
        stateForFindIndex: EEntityStateDashboard.After_create_video_card,
        stateForClickIndex: EEntityStateDashboard.After_create_video_card,
      });
    }
    if (response === EServerResponses.VIDEOS_CREATE_ERROR) {
      ElMessage({
        message: "Произошла ошибка при создании карточки видео",
        type: "error",
        appendTo: `.${appendTo}`,
      });
      disabled.value = false;
    }
  });

  onFetchError((err) => {
    ElMessage({
      message: `Произошла ошибка при загрузке полей формы: ${err}`,
      type: "error",
      appendTo: `.${appendTo}`,
    });
    isSpinnerVisible.value = false;
    ruleFormRef.value?.resetFields();
    disabled.value = false;
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
    const lastId = authors.value[authors.value.length - 1].id;
    authors.value.pop();
    delete formModel[`surname${lastId}`];
    delete formModel[`name${lastId}`];
    delete formModel[`patronymic${lastId}`];
  } else {
    ElMessage({
      message: "У видео должен быть хотя бы один автор",
      type: "warning",
      appendTo: `.${appendTo}`,
    });
  }
}

watch(
  isSpinnerVisible,
  () => {
    if (isSpinnerVisible.value) {
      window.scrollBy(0, window.innerHeight);
    }
  },
  { flush: "post" }
);

watch(
  authors,
  () => {
    window.scrollBy(0, window.innerHeight);
  },
  { deep: true, flush: "post" }
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
