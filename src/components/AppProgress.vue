<template>
  <div class="progress-box">
    <div class="progress-box__caption">Текущий прогресс</div>
    <el-progress
      class="progress-box__progress"
      :text-inside="true"
      :stroke-width="24"
      :percentage="30"
      status="success"
    />
  </div>
</template>

<style scoped lang="scss">
.progress-box {
  grid-area: progress;
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  height: 5.5rem;
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;

  #{&}__caption {
    text-align: center;
    margin-bottom: 8px;
  }
}
</style>
