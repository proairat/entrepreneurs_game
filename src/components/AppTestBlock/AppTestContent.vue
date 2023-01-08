<template>
  <AppTestLoader v-if="isLoading" />
  <div v-else class="test-content">
    <AppTestPassingIndicator />
    <AppTestQuestion />
    <AppTestAnswerBlock>
      <!--<AppTestAnswer
        v-for="{ id, answer, state } in shuffle<ITestAnswer>(
          testContent[questionNumber].answers
        )"
        :key="id"
        :id="id"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsAnswerSelected(true);
          clickAnswerHandler(id);
        "
      ></AppTestAnswer>-->
      <AppTestAnswer
        v-for="{ id, answer, state } in answers"
        :key="id"
        :id="id"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsAnswerSelected(true);
          clickAnswerHandler(id);
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
const { testContent, isLoading, questionNumber, activeQuestion, activeAnswer } =
  storeToRefs(testsStore);
const {
  toggleIsAnswerSelected,
  getTestsQuestionsByActiveTestId,
  getTestsAnswersByQuestionId,
} = testsStore;
const tluser = ref(getTestsQuestionsByActiveTestId(activeTest.value.id));
const answers = ref(
  shuffle<ITestAnswer>(getTestsAnswersByQuestionId(activeQuestion.value.id))
);

console.log("activeQuestion", activeQuestion.value);
console.log("activeAnswer", activeAnswer.value);
console.log(
  "Поглядим, что можешь getTestsAnswersByQuestionId",
  getTestsAnswersByQuestionId(11)
);

/*
function clickAnswerHandler(id: number) {
  console.log("clickAnswerHandler(), id", id);
  testContent.value[questionNumber.value].answers.forEach((elem) => {
    if (elem.id === id) {
      elem.state = EEntityState.Active;
    } else {
      elem.state = EEntityState.Unlocked;
    }
  });
}*/

function clickAnswerHandler(id: number) {
  console.log("clickAnswerHandler(), id", id);
  console.log(
    "clickAnswerHandler() tluser.value",
    tluser.value,
    "questionNumber.value",
    questionNumber.value
  );
  tluser.value[questionNumber.value].answers.forEach((elem) => {
    if (elem.id === id) {
      elem.state = EEntityState.Active;
    } else {
      elem.state = EEntityState.Unlocked;
    }
  });
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
