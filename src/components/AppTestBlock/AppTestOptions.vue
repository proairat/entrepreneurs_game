<template>
  <AppTestLoader v-if="loading"></AppTestLoader>
</template>

<script setup lang="ts">
import AppTestLoader from "./AppTestLoader.vue";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { loading } = storeToRefs(testsStore);
const { startTest } = testsStore;

startTest();
</script>
