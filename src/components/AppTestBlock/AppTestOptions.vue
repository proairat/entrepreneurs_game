<template>
  <AppTestLoader v-if="store.loading"></AppTestLoader>
</template>

<script setup lang="ts">
import AppTestLoader from "./AppTestLoader.vue";
import { store } from "./store";

store.startQuiz();
</script>
