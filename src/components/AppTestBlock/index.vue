<template>
  <div class="app-test-block">
    <!--<AppTestOptions v-if="step === 0"></AppTestOptions>-->
    <AppTestDescription v-if="step === 0" />
    <AppTestContent v-if="step === 1" />
    <AppTestRestart v-if="step === 2" />
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
const { initializeTest } = testsStore;

initializeTest();
</script>

<style scoped lang="scss">
.app-test-block {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  user-select: none;
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: $gray-90;
}
</style>
