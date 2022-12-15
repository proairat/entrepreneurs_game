<template>
  <div class="theFormCenter">
    <div class="entry-personal-data">Введите персональные данные</div>
    <el-form
      ref="ruleFormRef"
      :model="formModel"
      :rules="rules"
      :size="formSize"
      :status-icon="true"
      class="the-form"
    >
      <el-form-item prop="faculty">
        <el-input
          v-model="formModel.faculty"
          type="text"
          placeholder="Факультет"
        />
      </el-form-item>
      <el-form-item prop="course">
        <el-input v-model="formModel.course" type="text" placeholder="Курс" />
      </el-form-item>
      <el-form-item prop="groups">
        <el-input v-model="formModel.groups" type="text" placeholder="Группа" />
      </el-form-item>
      <el-form-item prop="eMail">
        <el-input
          v-model="formModel.eMail"
          type="text"
          placeholder="Адрес электронной почты"
        />
      </el-form-item>
      <el-form-item prop="leaderID">
        <el-input
          v-model="formModel.leaderID"
          type="text"
          placeholder="Номер ID на ресурсе LEADER-ID"
        />
      </el-form-item>
      <el-form-item prop="phoneNumber">
        <el-input
          v-model="formModel.phoneNumber"
          type="text"
          placeholder="Контактный номер телефона"
        />
      </el-form-item>
      <el-form-item prop="interests">
        <el-input
          v-model="formModel.interests"
          type="textarea"
          placeholder="Интересы"
          class="interests"
        />
      </el-form-item>
      <div class="test-description__outer-start-test">
        <el-button
          type="primary"
          class="test-description__button-start-test rounded-md"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
        >
          Начать входное тестирование</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useEntranceTestsStore } from "@/stores";

const entranceTestsStore = useEntranceTestsStore();
const { startTest } = entranceTestsStore;
const formSize = ref("large");
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  faculty: "",
  course: "",
  groups: "",
  eMail: "",
  leaderID: "",
  phoneNumber: "",
  interests: "",
});

const rules = reactive<FormRules>({
  faculty: [
    {
      required: true,
      message: "Пожалуйста, введите факультет обучения",
      trigger: "change",
    },
  ],
  course: [
    {
      required: true,
      message: "Пожалуйста, введите курс обучения",
      trigger: "change",
    },
  ],
  groups: [
    {
      required: true,
      message: "Пожалуйста, введите группу, в которой обучаетесь",
      trigger: "change",
    },
  ],
  eMail: [
    {
      required: true,
      message: "Пожалуйста, введите электронную почту",
      trigger: "change",
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: "Пожалуйста, введите номер телефона",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        startTest();
      } catch (error) {
        console.error("Entrance test error", error);
      }
    } else {
      console.error("'Entrance test  error fields", fields);
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

.test-description {
  &__outer-start-test {
    display: flex;
    justify-content: center;
  }
  &__button-start-test {
    height: 3.5rem;
    font-size: 1rem;
    background-color: $sun-30;
    color: inherit;
    border: none;
    &:hover {
      background-color: $sun-20;
    }
  }
}
</style>
