<template>
  <AppTitleLine>
    <AppBackButton v-bind="backTo"></AppBackButton>
    <AppTitle>
      {{ getCourseHeader.get(Number(route.params.id)) }}
    </AppTitle>
  </AppTitleLine>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <div class="left-side">
          <AppProgress />
          <AppListOfThemes :courseId="Number(route.params.id)" />
        </div>
        <div class="right-side">
          <AppVideo />
          <AppThemeHeader><!--{{ getActiveTheme?.title }} --></AppThemeHeader>
          <el-tabs type="border-card">
            <el-tab-pane label="Описание темы">
              <AppTabs>
                Статья 1. Законодательство Российской Федерации о налогах и
                сборах, законодательство субъектов Российской Федерации о
                налогах и сборах, нормативные правовые акты представительных
                органов муниципальных образований о налогах и сборах,
                нормативные правовые акты представительного органа федеральной
                территории "Сириус" о местных налогах и сборах Статья 1.
                Законодательство Российской Федерации о налогах и сборах,
                законодательство субъектов Российской Федерации о налогах и
                сборах, нормативные правовые акты представительных органов
                муниципальных образований о налогах и сборах, нормативные
                правовые акты представительного органа федеральной территории
                "Сириус" о местных налогах и сборах
              </AppTabs>
            </el-tab-pane>
            <el-tab-pane label="Ключевые навыки">
              <AppTabs>
                <div>Навык 1</div>
                <div>Навык 2</div>
                <div>Навык 3</div>
              </AppTabs>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
  <!--<router-view />-->
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useCoursesStore } from "@/stores";
import { reactive } from "vue";

const route = useRoute();
const coursesStore = useCoursesStore();
const { getCourseHeader, getActiveTheme } = storeToRefs(coursesStore);

const backTo = reactive({
  path: `/courses`,
  name: "AppModules",
});
</script>

<style scoped lang="scss">
.outer-part {
  background-color: $gray-10;
  padding-bottom: 1.5rem;
}
.main-part {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "left-side right-side";
  background-color: $gray-10;
  margin: 0 1.5rem;
}

.left-side {
  grid-area: left-side;
  margin-right: 1.5rem;
}
.right-side {
  grid-area: right-side;
}
</style>
