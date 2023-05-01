<template>
  <div
    :class="{
      'margin-top': isIncludes(props, EMargin.Top),
      'margin-right': isIncludes(props, EMargin.Right),
      'margin-bottom': isIncludes(props, EMargin.Bottom),
      'margin-left': isIncludes(props, EMargin.Left),
    }"
  ></div>
</template>

<script setup lang="ts">
import { EMargin } from "share/types/enums";

const props = defineProps<{
  margin: Record<EMargin, string>;
}>();

function isIncludes(
  props: Readonly<{ margin: Record<EMargin, string> }>,
  margin: EMargin
) {
  const keys = Object.keys(props.margin);
  return keys.includes(margin) ? true : false;
}
</script>

<style scoped lang="scss">
.margin-top {
  margin-top: v-bind("props.margin.marginTop");
}

.margin-right {
  margin-right: v-bind("props.margin.marginRight");
}

.margin-bottom {
  margin-bottom: v-bind("props.margin.marginBottom");
}

.margin-left {
  margin-left: v-bind("props.margin.marginLeft");
}
</style>
