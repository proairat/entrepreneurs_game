<template>
  <AppTestLoader v-if="isLoading" />
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { isLoading } = storeToRefs(entranceTestsStore);
</script>
