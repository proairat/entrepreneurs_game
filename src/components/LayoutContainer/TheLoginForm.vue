<template>
  <div class="theFormCenter">
    <div class="entryLoginAndPassword">Введите ваш логин и пароль</div>
    <el-form
      ref="ruleFormRef"
      :model="formModel"
      :rules="rules"
      :size="formSize"
      :status-icon="true"
      class="theForm"
    >
      <el-form-item prop="username">
        <el-input
          v-model="formModel.username"
          type="text"
          placeholder="Логин"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formModel.password"
          type="password"
          placeholder="Пароль"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="entryButton"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
        >
          Войти</el-button
        >
      </el-form-item>
      <el-divider>Войти через веб-сервисы</el-divider>
      <WebServicesIcons />
      <div class="dontHaveAnAccount">
        Нет аккаунта?
        <span class="registrationButton"
          ><router-link to="register">Регистрация</router-link></span
        >
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import WebServicesIcons from "./WebServicesIcons/index.vue";
import { useAuthStore } from "@/stores";

const formSize = ref("large");
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  username: "",
  password: "",
});

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "Пожалуйста, введите логин",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "Пожалуйста, введите пароль",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true;
      const authStore = useAuthStore();
      await authStore.login(formModel.username, formModel.password);
      loading.value = false;
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped lang="scss">
$padding: 22px;
$margin: 22px;

.entryLoginAndPassword,
.dontHaveAnAccount {
  color: $gray-80;
  padding: $padding;
  text-align: center;
  font-size: $text-size-h5;
}

.theForm {
  padding: 0 $padding;
}

.entryButton {
  width: 100%;
  color: $blue-10;
  font-size: 1rem;
  background-color: $blue-80;
  border: none;
  &:hover {
    background-color: $blue;
  }
}

.registrationButton {
  color: $blue-80;
  font-weight: $font-weight-bold;
  &:hover {
    color: $blue;
  }
}

.el-divider {
  border-top-color: $gray;
  &:deep(.el-divider__text) {
    font-weight: $font-weight-regular;
    color: $gray;
    width: 50%;
    text-align: center;
    background-color: $blue-10;
  }
}

.el-input {
  background-color: white;
  &:deep(.el-input__inner:-webkit-autofill) {
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    box-shadow: inset 0 0 0 50px #fff;
  }
}
</style>
