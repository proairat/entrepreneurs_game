<template>
  <div
    class="test-question border w-full flex items-center justify-center p-4 mb-6 text-xl font-medium"
  >
    {{ getQuestion() }}
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";

const entranceTestsStore = useEntranceTestsStore();
const { getQuestion } = entranceTestsStore;
</script>

<style scoped lang="scss">
.test-question {
  border-color: $gray-40;
  border-radius: 0.625rem;
}
</style>
