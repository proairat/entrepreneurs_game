<template>
  <el-input v-model="input" placeholder="E-mail" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
</script>
