<template>
  <div class="min-h-full min-w-full flex items-center justify-center">
    <button
      type="button"
      class="choose-button w-[18rem] p-4 text-indigo-900 border border-indigo-200 rounded-[0.625rem] cursor-default"
      v-if="!isAnswerSelected && !isClickedCheckButton"
    >
      Выберите вариант ответа
    </button>
    <button
      type="button"
      v-if="isAnswerSelected && !isClickedCheckButton"
      class="check-button w-[18rem] p-4 bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-[0.625rem] hover:bg-indigo-200"
      @click="checkButton"
    >
      Проверить
    </button>
    <button
      type="button"
      v-if="isClickedCheckButton"
      @click="
        getNextQuestion();
        incrementProgressValue();
        toggleIsAnswerSelected(false);
      "
      class="further-button w-[18rem] p-4 bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-[0.625rem] hover:bg-indigo-200"
    >
      Дальше
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EEntityState } from "share/types/enums";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { isAnswerSelected, isClickedCheckButton, activeQuestion, activeAnswer } =
  storeToRefs(testsStore);
const {
  checkAnswer,
  getNextQuestion,
  incrementProgressValue,
  toggleIsAnswerSelected,
  updateTestsAnswersElementsByState,
  toggleIsClickedCheckButton,
} = testsStore;

function checkButton() {
  toggleIsClickedCheckButton(true);
  updateTestsAnswersElementsByState({
    entityIdForListByEntityId: activeQuestion.value.id,
    stateForListByEntityIdFiltered: EEntityState.Unlocked,
    stateForListByEntityId: EEntityState.Blocked,
  });
  checkAnswer(activeAnswer.value.id);
}
</script>

<style scoped lang="scss">
.bg-sun-30 {
  background-color: $sun-30;
}
.choose-button,
.check-button,
.further-button {
  margin-top: 1.5rem;
  font-size: $text-size-h5;
  line-height: $line-height-l;
}
</style>
