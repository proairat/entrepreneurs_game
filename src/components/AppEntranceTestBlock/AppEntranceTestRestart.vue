<template>
  <div class="test-restart">
    <AppEntranceTestPercentAnswers :percent="getPercent" />
    <AppEntranceTestResultCoins :percent="getPercent" />
    <AppEntranceTestResultButton :percent="getPercent" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { questionCount, score } = storeToRefs(entranceTestsStore);

const getPercent = computed(() => {
  return Math.ceil((score.value * 100) / questionCount.value);
});
</script>

<style scoped lang="scss">
.test-restart {
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
