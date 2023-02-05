<template>
  <div class="test-result">
    <AppEntranceTestResultTest :result-message="resultMessage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { testContent } = storeToRefs(entranceTestsStore);
const emptySequence = [0, 0, 0, 0];
const map = new Map([
  [[1, 5, 11, 15], "Бизнес сейчас - точно не твоё 🙂"],
  [[4, 7, 12, 15], "Здорово, что ты готов рискнуть! Мы поможем! 😉"],
  [emptySequence, "Ты готов! 😉"],
]);
const resultArray = testContent.value.map(
  (item) => item.idAnswerUserSelected[0]
);
const resultMessage = ref(checkMatching(map, resultArray));

function checkMatching(map: Map<number[], string>, resultArray: number[]) {
  let keyMatch: number[] = [];

  for (let key of map.keys()) {
    for (let i = 0; i < key.length; i++) {
      let difference = resultArray[i] - key[i];
      if (difference !== 0) {
        break;
      } else if (i === key.length - 1 && difference === 0) {
        keyMatch = key;
      }
    }
    if (keyMatch.length !== 0) {
      return map.get(keyMatch);
    }
  }

  if (keyMatch.length === 0) {
    return map.get(emptySequence);
  }
}
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
