<template>
  <el-input v-model="input" :placeholder="placeholder" />
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  placeholder: string;
}>();

const input = ref("");
</script>
