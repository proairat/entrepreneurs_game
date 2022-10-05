<template>
  <div v-if="alert">
    <el-alert
      :type="alert.type"
      :title="alert.message"
      effect="dark"
      show-icon
      @click="alertStore.clear()"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAlertStore } from "@/stores";

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<style scoped lang="scss">
.el-alert {
  position: absolute;
  &:deep(.el-alert__title) {
    line-height: 25px;
  }
}
</style>
