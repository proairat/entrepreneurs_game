<template>
  <AppTestLoader v-if="isLoading" />
  <div v-else class="test-content">
    <AppTestPassingIndicator />
    <AppTestQuestion />
    <AppTestAnswerBlock>
      <!--<AppTestAnswer
        v-for="{ idAnswer, answer, state } in shuffle<IAnswer>(
          testContent[questionNumber].answers
        )"
        :key="idAnswer"
        :idAnswer="idAnswer"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsAnswerSelected(true);
          clickAnswerHandler(idAnswer);
        "
      ></AppTestAnswer>-->
      <AppTestAnswer
        v-for="{ idAnswer, answer, state } in shuffle<IAnswer>(tluser[questionNumber].answers)"
        :key="idAnswer"
        :idAnswer="idAnswer"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsAnswerSelected(true);
          clickAnswerHandler(idAnswer);
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
import type { IAnswer } from "@/types/interfaces";
import { ref } from "vue";

const modulesStore = useModulesStore();
const testsStore = useTestsStore();
const { activeTest } = storeToRefs(modulesStore);
const { testContent, isLoading, questionNumber } = storeToRefs(testsStore);
const { toggleIsAnswerSelected, getTestsQuestionsByActiveTestId } = testsStore;
const tluser = ref(getTestsQuestionsByActiveTestId(activeTest.value.id));
const answers = ref(
  shuffle<IAnswer>(tluser.value[questionNumber.value].answers)
);
console.log(
  "FIRST tluser.value",
  tluser.value,
  "questionNumber.value",
  questionNumber.value
);

/*
function clickAnswerHandler(idAnswer: number) {
  console.log("clickAnswerHandler(), idAnswer", idAnswer);
  testContent.value[questionNumber.value].answers.forEach((elem) => {
    if (elem.idAnswer === idAnswer) {
      elem.state = EEntityState.Active;
    } else {
      elem.state = EEntityState.Unlocked;
    }
  });
}*/

function clickAnswerHandler(idAnswer: number) {
  console.log("clickAnswerHandler(), idAnswer", idAnswer);
  console.log(
    "clickAnswerHandler() tluser.value",
    tluser.value,
    "questionNumber.value",
    questionNumber.value
  );
  tluser.value[questionNumber.value].answers.forEach((elem) => {
    if (elem.idAnswer === idAnswer) {
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
