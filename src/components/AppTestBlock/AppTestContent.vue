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
        @click-answer="
          toggleIsAnswerSelected(true);
          changeActiveAnswerHandler(id);
        "
      ></AppTestAnswer>
    </AppTestAnswerBlock>
    <AppTestPassingButton />
  </div>
</template>

<script setup lang="ts">
import { useModulesStore, useTestsStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { storeToRefs } from "pinia";
import { shuffle } from "@/helpers/commonFunctions";
import type { ITestAnswer } from "@/types/interfaces";
import { ref } from "vue";

const modulesStore = useModulesStore();
const testsStore = useTestsStore();
const { activeTest } = storeToRefs(modulesStore);
const { isLoading, activeQuestion, activeAnswer } = storeToRefs(testsStore);
const {
  toggleIsAnswerSelected,
  getTestsQuestionsByActiveTestId,
  getTestsAnswersByQuestionId,
  updateActiveAnswer,
} = testsStore;
const tluser = ref(getTestsQuestionsByActiveTestId(activeTest.value.id));
const answers = ref(
  shuffle<ITestAnswer>(getTestsAnswersByQuestionId(activeQuestion.value.id))
);

function changeActiveAnswerHandler(answerId: number) {
  if (activeAnswer.value) {
    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: answerId,
      stateForCurrentElem: EEntityState.Active,
      stateForCurrentIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Active,
    });
  } else {
    // будет найден элемент с нулевым индексом, так как все элементы массива изначально в state="UNLOCKED"
    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: answerId,
      stateForCurrentElem: EEntityState.Unlocked,
      stateForCurrentIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Active,
    });
  }
}

/*
changeOptionState(EEntityState.Active);

function changeOptionState(state: EEntityState.Unlocked | EEntityState.Blocked | EEntityState.Active) {
  testContent.value[questionNumber.value].answers.forEach((elem) => {
    elem.state = state;
  });
}*/
</script>

<style scoped lang="scss">
.test-content {
  display: grid;
}
</style>
