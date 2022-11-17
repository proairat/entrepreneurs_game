<template>
  <button
    class="w-full bg-gray-200 rounded-lg p-4 transition md:text-lg md:p-6"
    @click="store.checkAnswer(props.text)"
    v-html="props.text"
    :disabled="store.showAnswer"
    :class="{
      'bg-red-200': store.showAnswer && props.isInvalidAnswer,
      'bg-green-200': store.showAnswer && props.isValidAnswer,
      'hover:bg-gray-300': !store.showAnswer,
    }"
  ></button>
</template>

<script setup lang="ts">
import { store } from "./store";

const props = defineProps<{
  text: string;
  isValidAnswer: boolean;
  isInvalidAnswer: boolean;
}>();
</script>
