<template>
  <div class="passing-indicator flex items-center justify-between">
    <div class="passing-indicator__question-number-count w-24">
      {{ questionNumber + 1 }}/{{ questionCount }}
    </div>
    <div class="passing-indicator__indicators flex my-6">
      <div
        v-for="item in guesses"
        :key="item.id"
        class="w-5 h-5 rounded-md mx-1 text-center text-xs flex items-center justify-center"
        :class="{
          'bg-green-200': item.state === EEntityState.Right,
          'bg-red-200': item.state === EEntityState.Wrong,
          'bg-gray-100': item.state === EEntityState.Undefined,
          'bg-sun-40': item.state === EEntityState.Active,
        }"
      >
        {{ item.slideNumber }}
      </div>
    </div>
    <div
      class="passing-indicator__result-of-answer w-24 text-center rounded-md"
      :class="{
        'bg-green-200': guesses[questionNumber].state === EEntityState.Right,
        'bg-red-200': guesses[questionNumber].state === EEntityState.Wrong,
        'bg-sun-40': guesses[questionNumber].state === EEntityState.Active,
      }"
    >
      {{ resultOfAnswer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore, useModulesStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const modulesStore = useModulesStore();
const { questionCount, questionNumber } = storeToRefs(testsStore);
const { getGuessesByTestId } = testsStore;
const { activeTest } = storeToRefs(modulesStore);
const guesses = getGuessesByTestId(activeTest.value.id);
const resultOfAnswer = computed(() => {
  if (guesses[questionNumber.value].state === EEntityState.Right) {
    return "Верно!";
  }
  if (guesses[questionNumber.value].state === EEntityState.Wrong) {
    return "Неверно";
  }
  if (guesses[questionNumber.value].state === EEntityState.Active) {
    return "Активно";
  }
  return "";
});
</script>

<style scoped lang="scss">
.bg-sun-40 {
  background-color: $sun-40;
}
</style>
