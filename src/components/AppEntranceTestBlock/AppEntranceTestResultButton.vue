<template>
  <div class="test-restart__result-button result-button">
    <el-button
      v-if="checkBoundaryPercent()"
      type="primary"
      class="result-button__explore-other-sections-of-the-course rounded-md"
    >
      <div class="flex items-center">
        <router-link
          class="flex"
          :to="{
            path: `/modules`,
            name: 'ViewModules',
          }"
        >
          <span class="mr-3">Изучить другие разделы курса</span>
        </router-link>
      </div>
    </el-button>
    <el-button
      v-else
      type="primary"
      class="result-button__take-the-test-again transition rounded-md"
      @click="initializeTest"
    >
      Пройти тест заново &nbsp;<img :src="restart" alt="Рестарт" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { getImageUrl } from "@/helpers/commonFunctions";
import { EPercent } from "@/types/enums";

const props = defineProps<{
  percent: number;
}>();

const entranceTestsStore = useEntranceTestsStore();
const { initializeTest } = entranceTestsStore;
const restart = await getImageUrl("restart");

function checkBoundaryPercent() {
  return props.percent > EPercent.OneCoinLowBoundary ? true : false;
}
</script>

<style scoped lang="scss">
.test-restart__result-button {
  grid-area: AppTestResultButton;
  display: flex;
  padding-top: 1.5rem;
}

.result-button {
  &__explore-other-sections-of-the-course,
  &__take-the-test-again {
    color: $blue-10;
    font-size: 1rem;
    background-color: $blue-80;
    border: none;
    padding: 1.5rem;
    &:hover {
      background-color: $blue;
    }
  }
}
</style>
