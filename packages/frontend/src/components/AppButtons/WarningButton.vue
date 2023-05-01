<template>
  <div class="wrapper-div">
    <button
      type="button"
      class="py-2 px-4 inline-block text-center rounded bg-yellow-300 border border-yellow-300 hover:text-gray-900 hover:bg-yellow-400 hover:ring-0 hover:border-yellow-400 focus:bg-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-0"
      :class="[fontSizeClass, heightClass, colorClass]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  fontSizeClass?: string;
  heightClass?: string;
  colorClass?: string;
}>();

const fontSizeClass = computed(() =>
  props.fontSizeClass ? props.fontSizeClass : "text-base"
);
const heightClass = computed(() =>
  props.heightClass ? props.heightClass : "h-10"
);
const colorClass = computed(() =>
  props.colorClass ? props.colorClass : "text-gray-800"
);
</script>

<style scoped lang="scss">
.wrapper-div {
  display: inline-block;
}
</style>
