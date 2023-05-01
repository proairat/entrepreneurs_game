<template>
  <div class="wrapper-div">
    <button
      type="button"
      class="py-2 px-4 inline-block text-center rounded bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0"
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
  props.colorClass ? props.colorClass : "text-gray-100"
);
</script>

<style scoped lang="scss">
.wrapper-div {
  display: inline-block;
}
</style>
