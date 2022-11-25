<template>
  <AppTestLoader v-if="isLoading"></AppTestLoader>
  <div v-else class="testContent text-gray-600">
    <div
      class="items-center justify-between rounded-lg flex flex-col items-center"
    >
      <div class="flex my-6 checkProba">
        <div
          v-for="item in data"
          :key="item.id"
          class="w-3 h-3 rounded text-white mx-1 text-center text-xs flex items-center justify-center"
          :class="{
            'bg-green-300': item.guessed === EGuessed.Right,
            'bg-red-300': item.guessed === EGuessed.Wrong,
            'bg-gray-200': item.guessed === EGuessed.Undefined,
          }"
        ></div>
      </div>
      <div
        class="border-2 border-gray-400 w-full rounded-lg flex items-center justify-center p-5 mb-6"
      >
        <h1 class="text-center font-medium md:text-lg">
          {{ data[currentQuestion].question }}
        </h1>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
        <AppTestAnswer
          v-for="answer in data[currentQuestion].shuffled_answers"
          :key="answer"
          :text="answer"
          :is-valid-answer="answer == data[currentQuestion].correct_answer"
          :is-invalid-answer="answer != data[currentQuestion].correct_answer"
          @disableAnswer="proslushka"
        ></AppTestAnswer>
      </div>
    </div>
    <div class="min-h-full min-w-full flex items-center justify-center">
      <Transition name="grow-fade">
        <button
          @click="
            getNextQuestion();
            incrementProgressValue();
          "
          class="px-12 py-4 bg-gray-600 mt-6 text-white text-lg rounded-lg hover:bg-gray-700 transition"
        >
          {{ getTheLabelOnTheButton() }}
        </button>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EGuessed } from "@/types/enums";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const {
  data,
  isLoading,
  currentQuestion,
  isOptionSelected,

  questionCount,
} = storeToRefs(testsStore);
const { getData, getNextQuestion, incrementProgressValue } = testsStore;

getData();

function proslushka() {
  console.log("Прослушка функция работает");
}

function getTheLabelOnTheButton() {
  console.log("getTheLabelOnTheButton");
  console.log("isOptionSelected", isOptionSelected.value);
  // if (isOptionSelected
  return "Выберите вариант ответа";
}
</script>

<style lang="scss">
.grow-fade-enter-active {
  transition: all 0.2s ease-out;
}

.grow-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.grow-fade-enter-from,
.grow-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(60px);
}

.testContent {
  display: grid;
}
</style>
