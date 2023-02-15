<template>
  AppFetch
  <div>isFinished {{ isFinished }}</div>
  <div>data {{ data }}</div>
  <div>error {{ error }}</div>
</template>

<script setup lang="ts">
import { useFetchComposable } from "@/composables/use-fetch";

const { isFinished, data, error } = useFetchComposable(
  "/notes",
  "0",
  "GET",
  null
);
</script>
