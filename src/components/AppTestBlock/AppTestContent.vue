<template>
  <AppTestLoader v-if="isLoading"></AppTestLoader>
  <div v-else class="testContent text-gray-600">
    <AppTestPassingIndicator />
    <AppTestQuestion />
    <AppTestAnswerBlock>
      <AppTestAnswer
        v-for="{ idAnswer, answer, state } in data[questionNumber].answers"
        :key="idAnswer"
        :idAnswer="idAnswer"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsOptionSelected(true);
          changeOptionState();
        "
      ></AppTestAnswer>
    </AppTestAnswerBlock>
    <AppTestPassingButton />
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { data, isLoading, questionNumber } = storeToRefs(testsStore);
const { getData, toggleIsOptionSelected } = testsStore;

getData();

function changeOptionState() {
  data.value[questionNumber.value].answers.forEach((elem) => {
    elem.state = EEntityState.Blocked;
  });
}
</script>

<style scoped lang="scss">
.testContent {
  display: grid;
}
</style>
