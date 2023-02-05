<template>
  <div
    class="test-question border w-full flex items-center justify-center p-4 mb-6 text-xl font-medium text-center"
  >
    {{ getQuestionContent() }}
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";

const testsStore = useTestsStore();
const { getQuestionContent } = testsStore;
</script>

<style scoped lang="scss">
.test-question {
  border-color: $gray-40;
  border-radius: 0.625rem;
}
</style>
