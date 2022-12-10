<template>
  <AppTestLoader v-if="isLoading"></AppTestLoader>
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
          toggleIsOptionSelected(true);
          changeOptionState();
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
const { toggleIsOptionSelected, getTestsContentByEntityId } = testsStore;

getTestsContentByEntityId(activeTest.value.id);

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
