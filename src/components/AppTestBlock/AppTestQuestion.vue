<template>
  <div
    class="border w-full flex items-center justify-center p-4 mb-6 questionHeader"
  >
    <h4>
      {{ getQuestion() }}
    </h4>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";

const testsStore = useTestsStore();
const { getQuestion } = testsStore;
</script>

<style scoped lang="scss">
.questionHeader {
  color: $gray-90;
  border-color: $gray-40;
  border-radius: 0.625rem;
  font-size: 20px;
}
</style>
