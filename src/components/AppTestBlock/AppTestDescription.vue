<template>
  <div v-if="!activeTest" class="test-undefined">
    К сожалению, тест ещё не разработан...
  </div>
  <div v-else class="test-description">
    <div class="test-description__title text-xl">{{ activeTest.title }}</div>
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
.test-undefined {
  color: $rose-80;
  padding-top: 1.5rem;
  font-weight: $font-weight-medium;
}
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
    width: 10rem;
    font-size: 1rem;
    background-color: $sun-30;
    color: inherit;
    border: none;
    &:hover {
      background-color: $sun-20;
    }
  }
}
</style>
