<template>
  <AppTestLoader v-if="isLoading" />
  <div v-else class="test-content">
    <AppTestPassingIndicator />
    <AppTestQuestion />
    <AppTestAnswerBlock>
      <AppTestAnswer
        v-for="{ id, answer, state } in answers"
        :key="id"
        :id="id"
        :answer="answer"
        :state="state"
        @click-answer="clickAnswerHandler"
      ></AppTestAnswer>
    </AppTestAnswerBlock>
    <AppTestPassingButton />
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EEntityState } from "share/types/enums";
import { storeToRefs } from "pinia";
import { shuffle } from "share/helpers/commonFunctions";
import type { ITestAnswer } from "share/types/interfaces";
import { ref, watch } from "vue";

const testsStore = useTestsStore();
const { isLoading, activeQuestion, activeAnswer } = storeToRefs(testsStore);
const {
  toggleIsAnswerSelected,
  getTestsAnswersByQuestionId,
  updateActiveAnswer,
} = testsStore;
const answers = ref(
  shuffle<ITestAnswer>(getTestsAnswersByQuestionId(activeQuestion.value.id))
);

watch(activeQuestion, (changedActiveQuestion) => {
  answers.value = shuffle<ITestAnswer>(
    getTestsAnswersByQuestionId(changedActiveQuestion.id)
  );
});

function clickAnswerHandler(answerId: number) {
  toggleIsAnswerSelected(true);
  changeActiveAnswerHandler(answerId);
}

function changeActiveAnswerHandler(answerId: number) {
  if (activeAnswer.value) {
    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: answerId,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Active,
    });
  } else {
    // будет найден элемент с нулевым индексом, так как все элементы массива изначально в state="UNLOCKED"
    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: answerId,
      stateForFindElem: EEntityState.Unlocked,
      stateForFindIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Active,
    });
  }
}
</script>

<style scoped lang="scss">
.test-content {
  display: grid;
}
</style>
