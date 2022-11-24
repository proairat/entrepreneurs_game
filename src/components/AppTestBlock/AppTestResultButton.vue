<template>
  <button
    v-if="checkBoundaryPercent()"
    @click="
      restartTest();
      init();
    "
    class="bg-gray-200 rounded-lg px-12 py-4 transition md:text-lg hover:bg-gray-300 transition"
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
  </button>
  <button
    v-else
    @click="
      restartTest();
      init();
    "
    class="bg-gray-200 rounded-lg px-12 py-4 transition md:text-lg hover:bg-gray-300 transition"
  >
    <div class="flex items-center">
      <span class="mr-3">Пройти тест заново</span>
      <img :src="restart" alt="Рестарт" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { useTestsStore } from "@/stores";
import { storeToRefs } from "pinia";
import { getImageUrl } from "@/helpers/commonFunctions";
import { EPercent } from "@/types/enums";

const props = defineProps<{
  percent: number;
}>();

const testsStore = useTestsStore();
const { progressValue } = storeToRefs(testsStore);
const { restartTest } = testsStore;
const restart = await getImageUrl("restart");

function checkBoundaryPercent() {
  return props.percent > EPercent.OneCoinLowBoundary ? true : false;
}

function init() {
  progressValue.value = 0;
}
</script>
