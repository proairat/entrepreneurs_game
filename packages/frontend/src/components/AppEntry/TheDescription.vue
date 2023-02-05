<template>
  <div class="the-description-center">
    <h3 class="the-description-center__primary-content">
      ИГРОВАЯ ПЛАТФОРМА<br />ПО РАЗВИТИЮ ПРЕДПРИНИМАТЕЛЬСТВА
    </h3>
    <el-icon :size="100" class="icon-trophyBase">
      <TrophyBase />
    </el-icon>
    <h5 class="the-description-center__secondary-content">
      Веб-платформа с курсами по предпринимательству <br />
      с игрофикацией, тестами остаточных знаний и <br />системой ввода
      образовательного контента
    </h5>
  </div>
</template>

<script setup lang="ts">
import { TrophyBase } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.the-description-center {
  &__primary-content {
    font-size: $text-size-h3;
    font-weight: $font-weight-medium;
    line-height: $line-height-xl;
    color: $gray-80;
    padding-bottom: 2rem;
    margin: 0;
  }
  &__secondary-content {
    font-size: $text-size-h5;
    font-weight: $font-weight-medium;
    line-height: $line-height-s;
    color: $gray-80;
    padding-top: 2rem;
    margin: 0;
  }
}

@include iconMixin("trophyBase", $sun-80, 100%);
</style>
