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
      <el-form-item prop="login">
        <el-input v-model="formModel.login" type="text" placeholder="Логин" />
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
          Войти
        </el-button>
      </el-form-item>
      <el-divider>Войти через веб-сервисы</el-divider>
      <WebServicesIcons />
      <div class="dontHaveAnAccount">
        Нет аккаунта?
        <span class="registration"
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
  login: "",
  password: "",
});

const rules = reactive<FormRules>({
  login: [
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
      try {
        loading.value = true;
        const authStore = useAuthStore();
        await authStore.login(formModel.login, formModel.password);
        loading.value = false;
      } catch (error) {
        console.log("try error TheLoginForm", error);
      }
    } else {
      console.log("error TheLoginForm", fields);
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
  &:deep(.el-icon.is-loading) {
    position: absolute;
    left: calc(50% - 45px);
    & + span {
      margin-left: 0;
    }
  }
}

.registration {
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
    width: 55%;
    text-align: center;
    background-color: $blue-10;
    padding: 0;
  }
}

.el-input {
  background-color: transparent;

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
</style>
