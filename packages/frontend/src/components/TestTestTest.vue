<template>
  <div>TestTestTest</div>
  <button @click="clickHandler">Click</button>
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
  </el-form>
</template>

<script lang="ts" setup>
import { useDashboardStore } from "@/stores";
import { storeToRefs } from "pinia";
import { reactive, ref, watch } from "vue";
import type { FormItemProp, FormInstance, FormRules } from "element-plus";

const dashboardStore = useDashboardStore();
const { activeModule } = storeToRefs(dashboardStore);
const formSize = ref("large");
const ruleFormRef = ref<FormInstance>();
const formModel = ref({
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

function validateFormHandler(
  props: FormItemProp,
  isValid: boolean,
  message: string
) {}

watch(
  activeModule,
  (newActiveModule) => {
    formModel.value.header = newActiveModule.header;
  },
  { deep: true }
);

function clickHandler() {
}
</script>
