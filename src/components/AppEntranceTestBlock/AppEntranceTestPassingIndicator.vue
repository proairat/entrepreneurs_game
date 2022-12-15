<template>
  <div class="passing-indicator flex items-center justify-between">
    <div class="passing-indicator__question-number-count w-24">
      {{ questionNumber + 1 }}/{{ questionCount }}
    </div>
    <div class="passing-indicator__indicators flex my-6">
      <div
        v-for="item in testContent"
        :key="item.id"
        class="w-5 h-5 rounded-md mx-1 text-center text-xs flex items-center justify-center"
        :class="{
          'bg-gray-100':
            item.guessed === EGuessed.Undefined ||
            item.guessed === EGuessed.Right ||
            item.guessed === EGuessed.Wrong,
          'bg-sun-40': item.guessed === EGuessed.Active,
        }"
      >
        {{ item.slideNumber }}
      </div>
    </div>
    <div
      class="passing-indicator__result-of-answer w-24 text-center rounded-md"
      :class="{
        'bg-green-200': testContent[questionNumber].guessed === EGuessed.Right,
        'bg-red-200': testContent[questionNumber].guessed === EGuessed.Wrong,
        'bg-sun-40': testContent[questionNumber].guessed === EGuessed.Active,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { EGuessed } from "@/types/enums";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { testContent, questionCount, questionNumber } =
  storeToRefs(entranceTestsStore);
</script>

<style scoped lang="scss">
.bg-sun-40 {
  background-color: $sun-40;
}
</style>
