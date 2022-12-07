<template>
  <button
    class="test-answer w-full bg-gray-100 transition p-6"
    @click="
      checkAnswer(props.idAnswer);
      clickAnswer();
    "
    :class="{
      'bg-red-200': !isCorrectAnswer && show,
      'bg-green-200': isCorrectAnswer && show,
      'hover:bg-gray-200': props.state === EEntityState.Unlocked,
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
  state: EEntityState.Unlocked | EEntityState.Blocked;
}>();

const emits = defineEmits<{
  (e: "clickAnswer"): void;
}>();

const testsStore = useTestsStore();
const { checkAnswer, isAnswerIsCorrect } = testsStore;
const show = ref(false);
const isCorrectAnswer = computed(() => isAnswerIsCorrect(props.idAnswer));

function clickAnswer() {
  emits("clickAnswer");
  show.value = true;
}
</script>

<style scoped lang="scss">
.test-answer {
  border-radius: 0.625rem;
  font-size: $text-size-h5;
}
</style>
