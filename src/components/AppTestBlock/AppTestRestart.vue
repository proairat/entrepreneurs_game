<template>
  <div class="text-gray-700 flex flex-col items-center justify-center pt-6">
    <div class="pb-20 flex flex-col items-center">
      <AppTestPercentAnswers :percent="getPercent" />
      <AppTestResultCoins class="mb-4" :percent="getPercent" />
      <AppTestResultButton :percent="getPercent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { questionCount, score } = storeToRefs(testsStore);

const getPercent = computed(() => {
  return Math.ceil((score.value * 100) / questionCount.value);
});
</script>
