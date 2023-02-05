<template>
  AppFetch
  <div>isFetching {{ isFetching }}</div>
  <div>data {{ data }}</div>
  <div>error {{ error }}</div>
</template>

<script setup lang="ts">
import { useFetchComposable } from "@/composables/use-fetch";

const { isFetching, data, error } = useFetchComposable("/notes", "0");
</script>
