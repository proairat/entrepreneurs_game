<template>
  <div
    class="test-restart__percent-answers text-center font-medium text-xl pb-6"
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
.test-restart__percent-answers {
  grid-area: AppTestPercentAnswers;
}
</style>
