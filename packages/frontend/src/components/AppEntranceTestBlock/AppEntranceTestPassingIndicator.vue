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
            item.guesses === EGuess.Undefined ||
            item.guesses === EGuess.Right ||
            item.guesses === EGuess.Wrong,
          'bg-sun-40': item.guesses === EGuess.Active,
        }"
      >
        {{ item.slideNumber }}
      </div>
    </div>
    <div
      class="passing-indicator__result-of-answer w-24 text-center rounded-md"
      :class="{
        'bg-green-200': testContent[questionNumber].guesses === EGuess.Right,
        'bg-red-200': testContent[questionNumber].guesses === EGuess.Wrong,
        'bg-sun-40': testContent[questionNumber].guesses === EGuess.Active,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { EGuess } from "share/types/enums";
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
