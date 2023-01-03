<template>
  <AppTestLoader v-if="isLoading" />
  <div v-else class="test-content">
    <AppTestPassingIndicator />
    <AppTestQuestion />
    <AppTestAnswerBlock>
      <AppTestAnswer
        v-for="{ idAnswer, answer, state } in testContent[questionNumber]
          .answers"
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

const modulesStore = useModulesStore();
const testsStore = useTestsStore();
const { activeTest } = storeToRefs(modulesStore);
const { testContent, isLoading, questionNumber } = storeToRefs(testsStore);
const { toggleIsAnswerSelected, getTestsContentByEntityId } = testsStore;

getTestsContentByEntityId(activeTest.value.id);

function clickAnswerHandler(idAnswer: number) {
  console.log("clickAnswerHandler(), idAnswer", idAnswer);
  testContent.value[questionNumber.value].answers.forEach((elem) => {
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
