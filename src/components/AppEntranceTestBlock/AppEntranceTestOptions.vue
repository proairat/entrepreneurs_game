<template>
  <AppEntranceTestLoader v-if="isLoading"></AppEntranceTestLoader>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { isLoading } = storeToRefs(entranceTestsStore);
</script>
