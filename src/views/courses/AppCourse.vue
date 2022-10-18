<template>
  <AppBreadcrumbs>
    <el-breadcrumb-item :to="{ path: '/' }">Все курсы</el-breadcrumb-item>
    <el-breadcrumb-item>{{ map.get(route.params.id) }}</el-breadcrumb-item>
    <el-breadcrumb-item></el-breadcrumb-item>
  </AppBreadcrumbs>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <AppProgress />
        <AppVideo />
        <AppListOfTopics />
        <AppVideoDescription />
        <AppTopicDescription />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * ВНИМАНИЕ! Это макет, его нужно обязательно изменить с использованием Pinia
 */
const map = new Map([
  ["1", "Основы предпринимательства"],
  ["2", "Грантовое проектирование"],
  ["3", "Технологическое предпринимательство"],
  ["4", "Массовое предпринимательство"],
  ["5", "Креативные индустрии"],
  ["6", "Социальное предпринимательство"],
]);
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
  padding-bottom: 1.5rem;
}
.main-part {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 8rem 10rem 10rem 10rem 2rem 2rem 2rem;
  grid-template-areas:
    "progress video video video"
    "topics video video video"
    "topics video video video"
    "topics video_description video_description video_description"
    "topics topic_description topic_description topic_description"
    "topics topic_description topic_description topic_description"
    "topics topic_description topic_description topic_description";
  background-color: $gray-10;
}
</style>
