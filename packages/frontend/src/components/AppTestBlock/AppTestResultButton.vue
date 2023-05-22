<template>
  <div class="test-result__result-button result-button">
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
          <span>Изучить другие разделы курса</span>
        </router-link>
      </div>
    </el-button>
    <el-button
      v-else
      type="primary"
      class="result-button__take-the-test-again transition rounded-md"
      @click="initializeTest"
    >
      <span class="mr-2">Пройти тест заново</span
      ><img :src="restart" alt="Рестарт" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { getImageUrlAwaitImport } from "@/helpers/frontendFunctions";
import { EPercent } from "share/types/enums";

const props = defineProps<{
  percent: number;
}>();

const testsStore = useTestsStore();
const { initializeTest } = testsStore;
const restart = await getImageUrlAwaitImport("restart");

function checkBoundaryPercent() {
  return props.percent > EPercent.OneCoinLowBoundary ? true : false;
}
</script>

<style scoped lang="scss">
.test-result__result-button {
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
