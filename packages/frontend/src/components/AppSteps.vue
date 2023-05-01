<template>
  <el-steps :active="videoStep" finish-status="success">
    <el-step title="Шаг 1" />
    <el-step title="Шаг 2" />
    <el-step title="Шаг 3" />
  </el-steps>
  <!--<el-button style="margin-top: 12px" @click="next">Следующий шаг</el-button>-->
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDashboardStore } from "@/stores";

const dashboardStore = useDashboardStore();
const { videoStep } = storeToRefs(dashboardStore);

console.log("AppSteps -> videoStep", videoStep.value);

/*
const next = () => {
  if (videoStep.value++ > 2) videoStep.value = 0;
};
*/
</script>
