<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="Шаг 1" />
    <el-step title="Шаг 2" />
    <el-step title="Шаг 3" />
  </el-steps>

  <el-button style="margin-top: 12px" @click="next">Следующий шаг</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};
</script>
