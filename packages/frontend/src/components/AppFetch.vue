<template>
  AppFetch
  <div>data {{ data }}</div>
</template>

<script setup lang="ts">
import { useFetchComposable } from "@/composables/use-fetch";

const { data } = useFetchComposable("/notes", "0", "GET", null);
</script>
