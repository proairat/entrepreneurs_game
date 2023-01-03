<!--<template>
  <button
    type="button"
    class="test-answer w-full transition p-6"
    @click="
      checkAnswer(props.idAnswer);
      clickAnswer(props.idAnswer);
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
    @click="clickAnswer(props.idAnswer)"
    :class="{
      'bg-gray-100': props.state === EEntityState.Unlocked,
      'hover:bg-gray-200': props.state === EEntityState.Unlocked,
      'bg-sun-20': props.state === EEntityState.Active,
    }"
    :disabled="props.state === EEntityState.Blocked"
  >
    {{ props.answer }}
  </button>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { computed } from "vue";
import { ref } from "vue";

const props = defineProps<{
  idAnswer: number;
  answer: string;
  state: EEntityState.Unlocked | EEntityState.Blocked | EEntityState.Active;
}>();

const emits = defineEmits<{
  (e: "clickAnswer", answerId: number): void;
}>();

const testsStore = useTestsStore();
const { checkAnswer, isAnswerIsCorrect } = testsStore;
const show = ref(false);
const isCorrectAnswer = computed(() => isAnswerIsCorrect(props.idAnswer));

function clickAnswer(idAnswer: number) {
  emits("clickAnswer", idAnswer);
  show.value = true;
}
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
</style>
