<!--<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useUsersStore, useAlertStore } from "@/stores";
import { router } from "@/router";

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

async function onSubmit(values) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  try {
    await usersStore.register(values);
    await router.push("/account/login");
    alertStore.success("Регистрация прошла успешно!");
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="card m-3">
    <h4 class="card-header">Register</h4>
    <div class="card-body">
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div class="form-group">
          <label>First Name</label>
          <Field
            name="firstName"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.firstName }"
          />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <Field
            name="lastName"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.lastName }"
          />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>
        <div class="form-group">
          <label>Username</label>
          <Field
            name="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span
              v-show="isSubmitting"
              class="spinner-border spinner-border-sm mr-1"
            ></span>
            Регистрация
          </button>
          <router-link to="login" class="btn btn-link">Отмена</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>-->

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
        >
          Регистрация</el-button
        >
        <router-link to="login" class="btn btn-link">Отмена</router-link>
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
        await usersStore.register(formModel);
        await router.push("/account/login");
        alertStore.success("Регистрация прошла успешно!");
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
}

.el-input {
  background-color: white;
  &:deep(.el-input__inner:-webkit-autofill) {
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    box-shadow: inset 0 0 0 50px #fff;
  }
}
</style>
