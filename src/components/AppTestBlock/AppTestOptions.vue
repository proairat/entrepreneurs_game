<template>
  <AppTestLoader v-if="isLoading" />
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { isLoading } = storeToRefs(testsStore);
</script>
