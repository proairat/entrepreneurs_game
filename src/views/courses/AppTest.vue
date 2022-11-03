<template>
  <AppTitleLine>
    <AppBackButton v-bind="backTo"></AppBackButton>
    <AppTitle>
      <!--{{ getCourseHeader.get(Number(route.params.id)) }}-->
      Что-то тестовое
    </AppTitle>
  </AppTitleLine>
  <div>AppTest.vue</div>
  <div>AppTest.vue</div>
  <div>AppTest.vue</div>
  <div>AppTest.vue</div>
  <div>AppTest.vue</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const backTo = reactive({
  path: ``,
  name: "AppCourse",
});

/**
 * ВНИМАНИЕ! Это макет, его нужно обязательно изменить с использованием Pinia
 */

console.log("AppTest.vue route", route);

/*const map = new Map([
  [1, "Основы предпринимательства"],
  [2, "Грантовое проектирование"],
  [3, "Технологическое предпринимательство"],
  [4, "Массовое предпринимательство"],
  [5, "Креативные индустрии"],
  [6, "Социальное предпринимательство"],
]);
*/
</script>

<style scoped lang="scss"></style>
