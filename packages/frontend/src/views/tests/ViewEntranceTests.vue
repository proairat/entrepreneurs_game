<template>
  <AppTitleLine>
    <AppTitle> Входное тестирование </AppTitle>
  </AppTitleLine>
  <div class="outer-part">
    <div class="max-w-6xl mx-auto">
      <div class="main-part">
        <div class="left-side">
          <AppProgress type="entranceTests" />
        </div>
        <div class="right-side">
          <AppEntranceTestBlock />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/componentsStyles/ViewModuleEntity.scss";
</style>
