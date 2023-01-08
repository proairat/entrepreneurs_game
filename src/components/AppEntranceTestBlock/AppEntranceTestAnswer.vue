<template>
  <button
    type="button"
    class="test-answer w-full bg-gray-100 transition p-6"
    @click="
      checkAnswer(props.id);
      clickAnswer(props.id);
    "
    :class="{
      'bg-sun-20': show,
      'hover:bg-gray-200': props.state === EEntityState.Unlocked,
    }"
    :disabled="props.state === EEntityState.Blocked"
  >
    {{ props.answer }}
  </button>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { EEntityState } from "@/types/enums";
import { ref } from "vue";

const props = defineProps<{
  id: number;
  answer: string;
  state: EEntityState.Unlocked | EEntityState.Blocked;
}>();
const emits = defineEmits<{
  (e: "clickAnswer", answerId: number): void;
}>();

const entranceTestsStore = useEntranceTestsStore();
const { checkAnswer } = entranceTestsStore;
const show = ref(false);

function clickAnswer(id: number) {
  emits("clickAnswer", id);
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
}
</style>
