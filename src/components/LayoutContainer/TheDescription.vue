<template>
  <div class="theDescriptionCenter">
    <h3 class="primaryContent">
      ИГРОВАЯ ПЛАТФОРМА<br />ПО РАЗВИТИЮ ПРЕДПРИНИМАТЕЛЬСТВА
    </h3>
    <el-icon :size="100" class="icon-trophyBase">
      <TrophyBase />
    </el-icon>
    <h5 class="secondaryContent">
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
.primaryContent {
  color: $gray-80;
  padding-bottom: 30px;
  margin: 0;
}

.secondaryContent {
  color: $gray-80;
  padding-top: 30px;
  margin: 0;
}

@include iconMixin("trophyBase", $sun-80, 100%);
</style>
