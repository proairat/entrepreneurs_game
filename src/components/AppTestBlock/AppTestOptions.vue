<template>
  <AppTestLoader v-if="isLoading"></AppTestLoader>
</template>

<script setup lang="ts">
import AppTestLoader from "./AppTestLoader.vue";
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const testsStore = useTestsStore();
const { isLoading } = storeToRefs(testsStore);
</script>
