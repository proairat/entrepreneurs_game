<template>
  <AppTestLoader v-if="store.loading"></AppTestLoader>
  <div
    v-else
    class="grid grid-rows-3 grid-cols-1 text-gray-600 overflow-y-hidden"
  >
    <div class="row-span-1">
      <div
        class="items-center justify-between rounded-lg flex flex-col items-center"
      >
        <div class="flex my-6">
          <div
            v-for="(item, index) in store.data.results"
            class="w-3 h-3 rounded text-white mx-1 text-center text-xs flex items-center justify-center"
            :class="{
              'bg-green-300': item.guessedRight,
              'bg-red-300': item.guessedRight == false,
              'bg-gray-200': !item.guessedRight,
            }"
          ></div>
        </div>
        <div
          class="border-4 border-gray-400 w-full rounded-lg shadow-xl flex items-center justify-center p-5 mb-8"
        >
          <h1
            class="text-center font-medium md:text-lg"
            v-html="store.data.results[store.currentQuestion].question"
          ></h1>
        </div>
      </div>
    </div>
    <div class="row-span-1">
      <div class="flex flex-col justify-center">
        <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
          <AppTestAnswer
            v-for="answer in store.data.results[store.currentQuestion]
              .shuffled_answers"
            :key="answer"
            :text="answer"
            :is-valid-answer="
              answer == store.data.results[store.currentQuestion].correct_answer
            "
            :is-invalid-answer="
              answer != store.data.results[store.currentQuestion].correct_answer
            "
            :show-answer="store.showAnswer"
            @check-answer="store.checkAnswer"
          ></AppTestAnswer>
        </div>
      </div>
    </div>
    <div class="">
      <div class="min-h-full min-w-full flex items-center justify-center">
        <Transition name="grow-fade">
          <button
            @click="
              store.getNextQuestion();
              inc();
            "
            class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full md:w-1/3"
            v-show="store.showAnswer"
          >
            Дальше
          </button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "./store";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { progressValue } = storeToRefs(testsStore);

store.getData();

function inc() {
  progressValue.value += Math.ceil(100 / store.questionCount);
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
</style>
