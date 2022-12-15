<template>
  <div
    class="test-result__percent-answers text-center font-medium text-xl pb-6"
  >
    У вас {{ props.percent }}% верных ответов
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  percent: number;
}>();
</script>

<style scoped lang="scss">
.test-result__percent-answers {
  grid-area: AppTestPercentAnswers;
}
</style>
