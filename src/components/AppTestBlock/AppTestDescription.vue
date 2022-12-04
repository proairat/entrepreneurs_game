<template>
  <div v-if="!activeTest" class="test-undefined">
    К сожалению, тест ещё не разработан...
  </div>
  <div v-else class="test-description">
    <div class="test-description__title">{{ activeTest.title }}</div>
    <div class="test-description__outer-start-test">
      <el-button
        type="primary"
        class="test-description__button-start-test"
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

console.log("ээээ activeTest", activeTest.value);
</script>

<style scoped lang="scss">
.test-undefined {
  color: $rose-80;
  padding: 1.5rem;
  font-weight: $font-weight-medium;
}
.test-description {
  background-color: $blue-10;
  display: grid;
  color: $gray-90;
  &__outer-start-test {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
  }
  &__title {
    display: flex;
    padding-top: 1.5rem;
    justify-content: center;
    font-weight: $font-weight-medium;
    font-size: $text-size-h5;
  }
  &__button-start-test {
    width: 10rem;
    color: $blue-10;
    font-size: 1rem;
    background-color: $blue-80;
    border: none;
    &:hover {
      background-color: $blue;
    }
    &:deep(.el-icon.is-loading) {
      position: absolute;
      left: calc(50% - 45px);
      & + span {
        margin-left: 0;
      }
    }
  }
}
</style>
