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
          ? 'bg-blue-500 cursor-not-allowed'
          : 'bg-blue-700 border border-blue-500 hover:text-white hover:bg-blue-800 hover:ring-0 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0',
      ]"
      :disabled="disabled"
      @click="emits('click-button')"
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
const emits = defineEmits<{
  (e: "click-button"): void;
}>();

const fontSizeClass = computed(() =>
  props.fontSizeClass ? props.fontSizeClass : "text-base"
);
const heightClass = computed(() =>
  props.heightClass ? props.heightClass : "h-10"
);
const colorClass = computed(() =>
  props.colorClass ? props.colorClass : "text-white"
);
const disabled = computed(() => props.disabled ?? false);
</script>

<style scoped lang="scss">
.wrapper-div {
  display: inline-block;
}
</style>
