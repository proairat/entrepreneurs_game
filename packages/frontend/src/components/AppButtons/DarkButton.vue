<template>
  <div class="wrapper-div">
    <button
      type="button"
      class="py-2 px-4 inline-block text-center rounded bg-gray-900 border border-gray-900 hover:text-white hover:bg-black hover:ring-0 hover:border-black focus:bg-black focus:border-black focus:outline-none focus:ring-0"
      :class="[fontSizeClass, heightClass, colorClass]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
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
