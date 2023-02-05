<template>
  <div class="test-result__result-coins">
    <div class="test-result__img-coins">
      <img
        v-for="n in countCoins"
        :src="coin"
        :key="n"
        class="w-12 h-12 mb-6"
        alt="Монета"
      />
    </div>
    <div class="test-result__message font-medium text-xl">
      {{ message() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavbarStore } from "@/stores";
import { storeToRefs } from "pinia";
import { getImageUrl } from "@/helpers/commonFunctions";
import { EPercent } from "share/types/enums";
import { computed } from "vue";

const props = defineProps<{
  percent: number;
}>();

const coin = await getImageUrl("coin");
const navbarStore = useNavbarStore();
const { coins } = storeToRefs(navbarStore);
const countCoins = computed(() => {
  let count = 0;

  if (
    props.percent >= EPercent.OneCoinLowBoundary &&
    props.percent <= EPercent.OneCoinHighBoundary
  ) {
    count = 1;
  }
  if (
    props.percent >= EPercent.TwoCoinLowBoundary &&
    props.percent <= EPercent.TwoCoinHighBoundary
  ) {
    count = 2;
  }
  if (
    props.percent >= EPercent.ThreeCoinLowBoundary &&
    props.percent <= EPercent.ThreeCoinHighBoundary
  ) {
    count = 3;
  }

  return count;
});

coins.value += countCoins.value;

function message() {
  let message = "К сожалению, вы ничего не заработали, пройдите тест заново";
  switch (countCoins.value) {
    case 1:
      message = "Вы заработали 1 монету, поздравляем!";
      break;
    case 2:
      message = "Вы заработали 2 монеты, поздравляем!";
      break;
    case 3:
      message = "Вы заработали 3 монеты, поздравляем!";
      break;
  }

  return message;
}
</script>

<style scope lang="scss">
.test-result {
  &__result-coins {
    grid-area: AppTestResultCoins;
  }
  &__img-coins {
    display: flex;
    justify-content: center;
  }
}
</style>
