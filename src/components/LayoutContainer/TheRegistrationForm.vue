<template>
  <div class="theFormCenter">
    <div class="entryRegistrationData">Введите регистрационные данные</div>
    <el-form
      ref="ruleFormRef"
      :model="formModel"
      :rules="rules"
      :size="formSize"
      :status-icon="true"
      class="theForm"
    >
      <el-form-item prop="surname">
        <el-input
          v-model="formModel.surname"
          type="text"
          placeholder="Фамилия"
        />
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="formModel.name" type="text" placeholder="Имя" />
      </el-form-item>
      <el-form-item prop="patronymic">
        <el-input
          v-model="formModel.patronymic"
          type="text"
          placeholder="Отчество"
        />
      </el-form-item>
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
          class="registrationButton"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
        >
          Регистрация</el-button
        ><span class="cancellation">
          <router-link to="login">Отмена</router-link></span
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUsersStore, useAlertStore } from "@/stores";
import { router } from "@/router";

const formSize = ref("large");
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const formModel = reactive({
  surname: "",
  name: "",
  patronymic: "",
  login: "",
  password: "",
});

const rules = reactive<FormRules>({
  surname: [
    {
      required: true,
      message: "Пожалуйста, введите фамилию",
      trigger: "change",
    },
  ],
  name: [
    {
      required: true,
      message: "Пожалуйста, введите имя",
      trigger: "change",
    },
  ],
  patronymic: [
    {
      required: true,
      message: "Пожалуйста, введите отчество",
      trigger: "change",
    },
  ],
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
      const usersStore = useUsersStore();
      const alertStore = useAlertStore();
      try {
        loading.value = true;
        await usersStore.register(formModel);
        await router.push("/account/login");
        alertStore.success("Регистрация прошла успешно!");
        loading.value = false;
      } catch (error) {
        alertStore.error(error);
      }
    } else {
      console.log("error TheRegistrationForm", fields);
    }
  });
};
</script>

<style scoped lang="scss">
$padding: 22px;
$margin: 22px;

.entryRegistrationData {
  color: $gray-80;
  padding: $padding;
  text-align: center;
  font-size: $text-size-h5;
}

.theForm {
  padding: 0 $padding;
}

.registrationButton {
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
    left: calc(50% - 70px);
    & + span {
      margin-left: 0;
    }
  }
}

.cancellation {
  color: $blue-80;
  font-weight: $font-weight-bold;
  &:hover {
    color: $blue;
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
