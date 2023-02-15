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
    >
      <el-form-item prop="header">
        <el-input
          v-model="formModel.header"
          type="text"
          placeholder="Заголовок"
        />
      </el-form-item>
      <AppDashboardUpload />
      <el-form-item>
        <div class="submit-form__outer-start-test">
          <el-button
            type="primary"
            class="submit-form__button-start-test rounded-md"
            @click="submitForm(ruleFormRef)"
            :loading="loading"
          >
            Создать карточку модуля</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
  <AppSpinner v-if="isSpinnerVisible"/>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useFetchComposable } from "@/composables/use-fetch";

const formSize = ref("large");
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  header: "",
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

let isSpinnerVisible = ref(false);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const formData = new FormData();

        for (let item of Object.entries(formModel)) {
          const [name, value] = item;
          formData.append(name, value);
        }

        let {
          data,
          onFetchError,
          onFetchResponse,
          onFetchFinally,
        } = useFetchComposable("/modules", "upload", "POST", formData);

        isSpinnerVisible.value = true;

        onFetchResponse((response)=>{
          console.log("response", response);
          console.log("data", data.value);
        });

        onFetchFinally(() => {
          isSpinnerVisible.value = false;
        });

        onFetchError((err)=>{
          console.error("error", err);
        });

      } catch (error) {
        console.error("Dashboard error", error);
      }
    } else {
      console.error("Dashboard error fields", fields);
    }
  });
};
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
