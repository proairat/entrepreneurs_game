<template>
  <div class="test-description">
    <div class="test-description__title text-xl">{{ activeTest.title }}</div>
    <div class="test-description__content"></div>
    <div class="test-description__outer-start-test">
      <el-button
        type="primary"
        class="test-description__button-start-test rounded-md"
        @click="startTest"
      >
        Начать тест
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore, useModulesStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const modulesStore = useModulesStore();
const { startTest } = testsStore;
const { activeTest } = storeToRefs(modulesStore);
</script>

<style scoped lang="scss">
.test-description {
  display: grid;
  padding-top: 1.5rem;
  &__outer-start-test {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
  }
  &__title {
    display: flex;
    justify-content: center;
    font-weight: $font-weight-medium;
  }
  &__button-start-test {
    height: 3.5rem;
    font-size: 1rem;
    background-color: $sun-30;
    padding: 1rem;
    color: inherit;
    border: none;
    &:hover {
      background-color: $sun-20;
    }
  }
}
</style>
