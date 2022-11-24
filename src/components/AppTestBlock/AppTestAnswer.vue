<template>
  <button
    class="w-full bg-gray-200 rounded-lg p-4 transition md:text-lg md:p-6"
    @click="
      checkAnswer(props.text);
      toogleDisabled();
    "
    :class="{
      'bg-red-200': showAnswer && props.isInvalidAnswer,
      'bg-green-200': showAnswer && props.isValidAnswer,
      'hover:bg-gray-300': !showAnswer,
    }"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const props = defineProps<{
  text: string;
  isValidAnswer: boolean;
  isInvalidAnswer: boolean;
}>();

const emits = defineEmits<{
  (e: "disableAnswer"): void;
}>();

const testsStore = useTestsStore();
const { showAnswer } = storeToRefs(testsStore);
const { checkAnswer } = testsStore;

function toogleDisabled() {
  console.log("toggle disabled");
  emits("disableAnswer");
}

console.log("showAnswer", showAnswer.value);
</script>
