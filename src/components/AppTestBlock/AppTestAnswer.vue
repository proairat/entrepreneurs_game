<!--<template>
  <button
    type="button"
    class="test-answer w-full transition p-6"
    @click="
      checkAnswer(props.id);
      clickAnswer(props.id);
    "
    :class="{
      'bg-red-200': !isCorrectAnswer && show,
      'bg-green-200': isCorrectAnswer && show,
      'bg-gray-100': props.state === EEntityState.Unlocked,
      'hover:bg-gray-200': props.state === EEntityState.Unlocked,
      'bg-sun-30': props.state === EEntityState.Active,
    }"
    :disabled="props.state === EEntityState.Blocked"
  >
    {{ props.answer }}
  </button>
</template>-->

<template>
  <button
    type="button"
    class="test-answer w-full transition p-6"
    @click="clickAnswer(props.id)"
    :class="{
      'bg-red-200':
        !isCorrectAnswer &&
        isClickedCheckButton &&
        props.state === EEntityState.Active,
      'bg-green-200':
        isCorrectAnswer &&
        isClickedCheckButton &&
        props.state === EEntityState.Active,
      'bg-gray-100':
        props.state === EEntityState.Unlocked ||
        props.state === EEntityState.Blocked,
      'hover:bg-gray-200':
        props.state === EEntityState.Unlocked && !isClickedCheckButton,
      'bg-sun-20': props.state === EEntityState.Active && !isClickedCheckButton,
      disabled: isClickedCheckButton,
    }"
    :disabled="isClickedCheckButton"
  >
    {{ props.answer }}
  </button>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";
import { EEntityState } from "@/types/enums";
import { computed } from "vue";

const props = defineProps<{
  id: number;
  answer: string;
  state: EEntityState;
}>();

const emits = defineEmits<{
  (e: "clickAnswer", answerId: number): void;
}>();

const testsStore = useTestsStore();
const { checkAnswer, isAnswerIsCorrect } = testsStore;
const { isClickedCheckButton } = storeToRefs(testsStore);
const isCorrectAnswer = computed(() => isAnswerIsCorrect(props.id));

function clickAnswer(answerId: number) {
  emits("clickAnswer", answerId);
}
console.log("common!");
</script>

<style scoped lang="scss">
.test-answer {
  border-radius: 0.625rem;
  font-size: $text-size-h5;
}
.bg-sun-20 {
  background-color: $sun-20;
  &:hover {
    background-color: $sun-40;
  }
}
.disabled {
  cursor: not-allowed;
}
</style>
