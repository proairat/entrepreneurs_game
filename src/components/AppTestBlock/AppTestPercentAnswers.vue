<template>
  <h1 class="mb-4 text-center text-lg font-medium">
    У вас {{ props.percent }}% верных ответов!
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  percent: number;
}>();
</script>
