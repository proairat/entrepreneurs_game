<template>
  <AppTitleLine>
    <AppBackButton v-bind="backTo"></AppBackButton>
    <AppTitle>
      {{ getModuleHeader }}
    </AppTitle>
  </AppTitleLine>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <div class="left-side">
          <AppProgress type="topics" />
          <AppListOfThemes :moduleId="getModuleId" />
        </div>
        <div class="right-side">
          <AppThemeHeader>{{ getThemeTitle }}</AppThemeHeader>
          <AppVideo />
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
            <el-tab-pane label="Авторы темы">
              <AppTabs>
                <div>Иванов И.И.</div>
                <div>Калмыков К. К.</div>
                <div>Бахча Б. Б.</div>
                <div>Савушкин С.С.</div>
                <div>Гагаладзе Г.Г.</div>
              </AppTabs>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModulesStore } from "@/stores";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

const modulesStore = useModulesStore();
const { activeModule, activeTheme } = storeToRefs(modulesStore);
const backTo = ref({
  path: `/modules`,
  name: "ViewModules",
});

// const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));

const getModuleHeader = computed(() => {
  return activeModule.value.header;
});

const getModuleId = computed(() => {
  return activeModule.value.id;
});

const getThemeTitle = computed(() => {
  return activeTheme.value.title;
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
