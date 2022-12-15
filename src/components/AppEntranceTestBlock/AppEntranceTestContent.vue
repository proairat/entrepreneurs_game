<template>
  <AppEntranceTestLoader v-if="isLoading"></AppEntranceTestLoader>
  <div v-else class="test-content">
    <AppEntranceTestPassingIndicator />
    <AppEntranceTestQuestion />
    <AppEntranceTestAnswerBlock>
      <AppEntranceTestAnswer
        v-for="{ idAnswer, answer, state } in testContent[questionNumber]
          .answers"
        :key="idAnswer"
        :idAnswer="idAnswer"
        :answer="answer"
        :state="state"
        @click-answer="
          toggleIsOptionSelected(true);
          changeOptionState();
          setIdAnswerUserSelected(idAnswer);
        "
      ></AppEntranceTestAnswer>
    </AppEntranceTestAnswerBlock>
    <AppEntranceTestPassingButton />
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { activeEntranceTest, testContent, isLoading, questionNumber } =
  storeToRefs(entranceTestsStore);
const {
  toggleIsOptionSelected,
  getEntranceTestsContentByEntityId,
  setIdAnswerUserSelected,
} = entranceTestsStore;

getEntranceTestsContentByEntityId(activeEntranceTest.value.id);

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
