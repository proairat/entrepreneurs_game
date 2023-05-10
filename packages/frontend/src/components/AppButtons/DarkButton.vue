<template>
  <div class="wrapper-div">
    <button
      type="button"
      class="py-2 px-4 inline-block text-center rounded"
      :class="[
        fontSizeClass,
        heightClass,
        colorClass,
        disabled
          ? 'bg-gray-700 cursor-not-allowed'
          : 'bg-gray-900 border border-gray-900 hover:text-white hover:bg-black hover:ring-0 hover:border-black focus:bg-black focus:border-black focus:outline-none focus:ring-0',
      ]"
      :disabled="disabled"
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
  disabled?: boolean;
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
const disabled = computed(() => props.disabled ?? false);
</script>

<style scoped lang="scss">
.wrapper-div {
  display: inline-block;
}
</style>
