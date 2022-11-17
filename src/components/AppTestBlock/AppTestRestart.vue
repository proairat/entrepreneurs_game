<template>
  <div class="text-gray-700 flex flex-col items-center justify-center pt-6">
    <div class="pb-20 flex flex-col items-center">
      <h1 class="mb-4 text-center text-lg font-medium">
        У вас {{getPercent()}} % верных ответов
      </h1>
      <AppTestResult class="mb-4" :percent="getPercent()"/>
      <button
        @click="
          store.restartQuiz();
          init();
        "
        class="bg-gray-200 rounded-lg px-12 py-4 transition md:text-lg hover:bg-gray-300 transition"
      >
        <div class="flex items-center">
          <span class="mr-3">Пройти тест заново</span
          ><svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#444"
          >
            <path
              d="M8 6.012h-6.58l1.935-6.012 1.718 2.223c1.958-1.389 4.346-2.211 6.927-2.211 6.623 0 12 5.377 12 12s-5.377 11.988-12 11.988-12-5.365-12-11.988c0-1.036.132-2.041.379-3h2.079c-.297.947-.458 1.955-.458 3 0 5.52 4.481 10 10 10 5.52 0 10-4.48 10-10 0-5.519-4.48-10-10-10-2.121 0-4.083.668-5.703 1.796l1.703 2.204zm4 1.988c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "./store";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { progressValue } = storeToRefs(testsStore);

function init() {
  progressValue.value = 0;
}

function getPercent(){
  return Math.ceil(store.score * 100 / store.questionCount);
}
</script>
