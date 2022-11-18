<template>
  <div class="flex">
    <svg
      v-for="n in countStars"
      xmlns="http://www.w3.org/2000/svg"
      fill="yellow"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#eab308"
      class="w-12 h-12"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  </div>
  <div v-if="countStars === 1" class="msg">
    Вы заработали {{ countStars }} звезду, поздравляем!
  </div>
  <div v-if="countStars === 2 || countStars === 3" class="msg">
    Вы заработали {{ countStars }} звезды, поздравляем!
  </div>
  <div v-else class="msg">
    К сожалению, вы ничего не заработали, пройдите тест заново
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNavbarStore } from "@/stores";
import { storeToRefs } from "pinia";

const navbarStore = useNavbarStore();
const { starsSmth } = storeToRefs(navbarStore);

const props = defineProps<{
  percent: number;
}>();

const countStars = computed(() => {
  let count = 0;

  if (props.percent >= 45 && props.percent <= 59) {
    count = 1;
  }
  if (props.percent >= 60 && props.percent <= 79) {
    count = 2;
  }
  if (props.percent >= 80 && props.percent <= 100) {
    count = 3;
  }

  starsSmth.value = count;

  return count;
});
</script>

<style scoped lang="scss">
.msg {
  font-weight: 500;
  margin: 1rem auto;
}
</style>
