<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">Свернуть</el-radio-button>
    <el-radio-button :label="true">Развернуть</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      index="1"
      @click="() => menuItemHandler('AppDashboardModules')"
    >
      <el-icon><Tickets /></el-icon>
      <template #title>Модули</template>
    </el-menu-item>
    <el-menu-item
      index="2"
      @click="() => menuItemHandler('AppDashboardVideos')"
    >
      <el-icon><VideoCamera /></el-icon>
      <template #title>Видео</template>
    </el-menu-item>
    <el-menu-item index="3" @click="() => menuItemHandler('AppDashboardTests')">
      <el-icon><Finished /></el-icon>
      <template #title>Тесты</template>
    </el-menu-item>
    <el-menu-item
      index="4"
      @click="() => menuItemHandler('AppDashboardSettings')"
    >
      <el-icon><setting /></el-icon>
      <template #title>Настройки</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Finished,
  Tickets,
  Setting,
  VideoCamera,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const emits = defineEmits<{
  (e: "click-menu-item", value: string): void;
}>();

function menuItemHandler(component: string) {
  emits("click-menu-item", component);
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
