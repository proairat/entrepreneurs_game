<template>
  <div class="theFormCenter">
    <div class="enterLoginAndPassword">Введите ваш логин и пароль</div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      :size="formSize"
      :status-icon="true"
      class="theForm"
    >
      <el-form-item prop="login">
        <el-input v-model="ruleForm.login" type="text" placeholder="Логин" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="Пароль"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Войти</el-button
        >
      </el-form-item>
    </el-form>
    <el-divider>Войти через веб-сервисы</el-divider>
    <WebServicesIcons />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import WebServicesIcons from "@/components/WebServicesIcons.vue";

const formSize = ref("large");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
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
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped lang="scss">
$padding: 22px;

.enterLoginAndPassword {
  color: $gray-80;
  padding: $padding;
  text-align: center;
  font-size: $text-size-h5;
}
.theForm {
  padding: 0 $padding;
}

.el-button {
  width: 100%;
  color: $blue-10;
  background-color: $blue-80;
  &:hover {
    background-color: $blue;
  }
}

.el-divider {
  border-top-color: $gray-80;
  &:deep(.el-divider__text) {
    font-weight: $font-weight-regular;
    color: $gray-80;
    width: 45%;
    text-align: center;
    background-color: $blue-15;
  }
}
</style>
