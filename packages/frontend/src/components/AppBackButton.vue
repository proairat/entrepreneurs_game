<template>
  <div class="app-title-line-content__back-button">
    <router-link
      class="flex"
      :to="{
        path: props.path,
        name: props.name,
      }"
    >
      <el-icon><Back /></el-icon>
      <span class="inscription">Назад</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";

const props = defineProps<{
  path: string;
  name: string;
}>();
</script>

<style scoped lang="scss">
.app-title-line-content__back-button {
  display: flex;
  align-items: center;

  &:hover {
    color: $black;
  }
  & .inscription {
    margin-left: 0.5rem;
  }
}

:deep(.el-icon) {
  height: 1.5rem;
}
</style>
