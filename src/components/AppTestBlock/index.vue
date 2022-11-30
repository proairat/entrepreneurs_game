<template>
  <div class="text-gray-700 appTestBlock">
    <AppTestOptions v-if="step === 0"></AppTestOptions>
    <AppTestContent v-if="step === 1"></AppTestContent>
    <AppTestRestart v-if="step === 2"></AppTestRestart>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppTestBlock",
};
</script>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { step } = storeToRefs(testsStore);
</script>

<style scoped lang="scss">
.appTestBlock {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 0 1.5rem 1.5rem 1.5rem;
  user-select: none;
}
</style>
