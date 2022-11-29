<template>
  <div class="flex items-center justify-between">
    <div class="w-24">{{ questionNumber + 1 }}/{{ questionCount }}</div>
    <div class="flex my-6">
      <div
        v-for="item in data"
        :key="item.idQuestion"
        class="w-5 h-5 rounded-md text- mx-1 text-center text-xs flex items-center justify-center"
        :class="{
          'bg-green-200': item.guessed === EGuessed.Right,
          'bg-red-200': item.guessed === EGuessed.Wrong,
          'bg-gray-100': item.guessed === EGuessed.Undefined,
          yellowColor: item.guessed === EGuessed.Active,
        }"
      >
        {{ item.idQuestion }}
      </div>
    </div>
    <div
      class="w-24 text-center rounded-md"
      :class="{
        'bg-green-200': data[questionNumber].guessed === EGuessed.Right,
        'bg-red-200': data[questionNumber].guessed === EGuessed.Wrong,
        yellowColor: data[questionNumber].guessed === EGuessed.Active,
      }"
    >
      {{ resultOfAnswer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EGuessed } from "@/types/enums";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { data, questionCount, questionNumber } = storeToRefs(testsStore);

const resultOfAnswer = computed(() => {
  if (data.value[questionNumber.value].guessed === EGuessed.Right) {
    return "Верно!";
  }
  if (data.value[questionNumber.value].guessed === EGuessed.Wrong) {
    return "Неверно";
  }
  if (data.value[questionNumber.value].guessed === EGuessed.Active) {
    return "Активный";
  }
  return "";
});
</script>

<style scoped lang="scss">
.yellowColor {
  background-color: $sun-40;
}
</style>
