<template>
  <div class="min-h-full min-w-full flex items-center justify-center">
    <button
      v-if="!isOptionSelected"
      class="w-[18rem] p-4 mt-6 text-indigo-900 border border-indigo-200 text-lg rounded-[0.625rem] cursor-default"
    >
      Выберите вариант ответа
    </button>
    <button
      v-else
      @click="
        getNextQuestion();
        incrementProgressValue();
        toggleIsOptionSelected(false);
      "
      class="w-[18rem] p-4 mt-6 bg-indigo-100 text-indigo-900 border border-indigo-200 text-lg rounded-[0.625rem] hover:bg-indigo-200"
    >
      Дальше
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { isOptionSelected } = storeToRefs(testsStore);
const { getNextQuestion, incrementProgressValue, toggleIsOptionSelected } =
  testsStore;
</script>
