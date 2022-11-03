<template>
  <div class="backButton">
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

console.log("AppBackButton component, props", props);
</script>

<style scoped lang="scss">
.backButton {
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
