<template>
  <AppTestLoader v-if="isLoading" />
  <div v-else class="test-content">
    <AppEntranceTestPassingIndicator />
    <AppEntranceTestQuestion />
    <AppTestAnswerBlock>
      <AppEntranceTestAnswer
        v-for="{ id, answer, state } in testContent[questionNumber].answers"
        :key="id"
        :id="id"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsAnswerSelected(true);
          changeOptionState();
          setIdAnswerUserSelected(id);
        "
      ></AppEntranceTestAnswer>
    </AppTestAnswerBlock>
    <AppEntranceTestPassingButton />
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { EEntityState } from "share/types/enums";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { activeEntranceTest, testContent, isLoading, questionNumber } =
  storeToRefs(entranceTestsStore);
const {
  toggleIsAnswerSelected,
  getEntranceTestsQuestionsByEntityId,
  setIdAnswerUserSelected,
} = entranceTestsStore;

getEntranceTestsQuestionsByEntityId(activeEntranceTest.value.id);

function changeOptionState() {
  testContent.value[questionNumber.value].answers.forEach((elem) => {
    elem.state = EEntityState.Blocked;
  });
}
</script>

<style scoped lang="scss">
.test-content {
  display: grid;
}
</style>
