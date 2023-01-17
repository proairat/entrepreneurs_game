<template>
  <div class="app-test-block">
    <AppEntranceTestDescription v-if="step === 0" />
    <AppEntranceTestContent v-if="step === 1" />
    <AppEntranceTestResult v-if="step === 2" />
  </div>
</template>

<script lang="ts">
export default {
  name: "AppEntranceTestBlock",
};
</script>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { step } = storeToRefs(entranceTestsStore);
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
