<template>
  <div class="test-result">
    <AppTestPercentAnswers :percent="getPercent" />
    <AppTestResultCoins :percent="getPercent" />
    <AppTestResultButton :percent="getPercent" />
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

<style scoped lang="scss">
.test-result {
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: auto;
  grid-template-areas:
    "AppTestPercentAnswers"
    "AppTestResultCoins"
    "AppTestResultButton";
  justify-items: center;
  padding-top: 1.5rem;
}
</style>
