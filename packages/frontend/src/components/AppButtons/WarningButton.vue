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
          ? 'bg-yellow-100 cursor-not-allowed'
          : 'bg-yellow-300 border border-yellow-300 hover:text-gray-900 hover:bg-yellow-400 hover:ring-0 hover:border-yellow-400 focus:bg-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-0',
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

const props = withDefaults(
  defineProps<{
    fontSizeClass?: string;
    heightClass?: string;
    colorClass?: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);
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
  props.colorClass ? props.colorClass : "text-gray-800"
);
const disabled = computed(() => props.disabled ?? false);
</script>

<style scoped lang="scss">
.wrapper-div {
  display: inline-block;
}
</style>
