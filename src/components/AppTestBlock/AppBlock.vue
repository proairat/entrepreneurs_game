<template>
  <div class="text-gray-700 appBlock">
    <AppTestOptions v-if="store.step == 0"></AppTestOptions>
    <AppTestQuiz v-if="store.step == 1"></AppTestQuiz>
    <AppTestRestart v-if="store.step == 2"></AppTestRestart>
  </div>
</template>

<script setup lang="ts">
import { store } from "./store";
</script>

<style lang="scss">
.appBlock {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 0 1.5rem 1.5rem 1.5rem;
}
</style>
