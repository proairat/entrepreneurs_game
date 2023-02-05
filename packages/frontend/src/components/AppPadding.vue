<template>
  <div
    :class="{
      'padding-top': isIncludes(EPadding.Top),
      'padding-right': isIncludes(EPadding.Right),
      'padding-bottom': isIncludes(EPadding.Bottom),
      'padding-left': isIncludes(EPadding.Left),
    }"
  ></div>
</template>

<script setup lang="ts">
import { EPadding } from "share/types/enums";

const props = defineProps<{
  padding: Record<EPadding, string>;
}>();

const keys = Object.keys(props.padding);

function isIncludes(padding: EPadding) {
  return keys.includes(padding) ? true : false;
}
</script>

<style scoped lang="scss">
.padding-top {
  padding-top: v-bind("props.padding.paddingTop");
}

.padding-right {
  padding-right: v-bind("props.padding.paddingRight");
}

.padding-bottom {
  padding-bottom: v-bind("props.padding.paddingBottom");
}

.padding-left {
  padding-left: v-bind("props.padding.paddingLeft");
}
</style>
