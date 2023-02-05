<template>
  <div
    class="progress-box"
    :class="{
      'progress-box_shadowed': props.type !== EEntityType.Modules,
      'progress-box_padding': props.type !== EEntityType.Modules,
    }"
  >
    <div class="progress-box__caption">{{ getProgressCaption }}</div>
    <el-progress
      class="progress-box__progress"
      :text-inside="false"
      :stroke-width="10"
      :percentage="getPercentage"
      :color="color"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProgressCaption } from "share/types/interfaces";
import { computed } from "vue";
import { useTestsStore, useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";
import { EEntityType, EProgressCaption } from "share/types/enums";

/**
 * Due to the limitations of defineProps in TS, no interface is used
 * */
const props = defineProps<{
  type: EEntityType;
}>();

const testsStore = useTestsStore();
const entranceTestsStore = useEntranceTestsStore();
const caption: IProgressCaption = {
  modules: EProgressCaption.ModulesCaption,
  topics: EProgressCaption.TopicsCaption,
  tests: EProgressCaption.TestsCaption,
  entranceTests: EProgressCaption.EntranceTestsCaption,
};
const color = "#FFE97A"; // $sun-40
const getProgressCaption = computed(
  () => caption[props.type as keyof IProgressCaption]
);
const getPercentage = computed(() => {
  let progress: number | undefined;
  // заготовка под прогресс модуля
  // if (props.type === "modules") {}
  if (props.type === EEntityType.EntranceTests) {
    const { progressValue } = storeToRefs(entranceTestsStore);
    progress = progressValue.value;
  }
  if (props.type === EEntityType.Tests || props.type === EEntityType.Topics) {
    const { progressValue } = storeToRefs(testsStore);
    progress = progressValue.value;
  }
  return progress;
});
</script>

<style scoped lang="scss">
.progress-box {
  background-color: $white;
  border-radius: 0.625rem;
  margin-bottom: 1.5rem;

  #{&}__caption {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  &_shadowed {
    box-shadow: $box-shadow-2dp;
  }
  &_padding {
    padding: 1rem;
  }
}

:deep(.el-progress__text) {
  font-size: $text-base-size !important;
  margin-left: 0.5rem;
  min-width: auto;
}
</style>
