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
          ? 'bg-purple-500 cursor-not-allowed'
          : 'bg-purple-700 border border-purple-700 hover:text-white hover:bg-purple-800 hover:ring-0 hover:border-purple-800 focus:bg-purple-800 focus:border-purple-800 focus:outline-none focus:ring-0',
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
