<template>
  <div class="progress-box">
    <div class="progress-box__caption">{{ progressCaption }}</div>
    <el-progress
      class="progress-box__progress"
      :text-inside="false"
      :stroke-width="20"
      :percentage="progressValue"
      :color="color"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProgressCaption } from "@/types/interfaces";
import { computed } from "vue";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { progressValue } = storeToRefs(testsStore);

/**
 * Due to the limitations of defineProps in TS, no interface is used
 * */
const props = defineProps<{
  type: string;
}>();

const caption: IProgressCaption = {
  entryTests: "Текущий прогресс входного тестирования",
  topics: "Текущий прогресс темы",
  tests: "Текущий прогресс теста",
};
const color = "#FFE97A"; // $sun-40
const progressCaption = computed(() => {
  return caption[props.type as keyof IProgressCaption];
});
</script>

<style scoped lang="scss">
.progress-box {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
  margin-bottom: 1.5rem;

  #{&}__caption {
    text-align: center;
    margin-bottom: 8px;
  }
}

:deep(.el-progress__text) {
  font-size: $text-base-size !important;
}
</style>
