<template>
  <li class="topic-item">
    <div class="topic-item__state-icon" :class="stateClasses"></div>
    <router-link
      class="topic-item__title"
      :to="{
        path: `/tests/:test`,
        name: 'AppTest',
        params: { test: 1 },
      }"
      >{{ props.title }}</router-link
    >
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TopicItemState } from "@/types/enums/topic-item-state";

const props = defineProps<{
  id: number;
  state: string;
  title: string;
}>();
// due to the fact that backtics does not work correctly, let's leave it like that
const stateClasses = computed(() => ({
  "topic-item__state-icon_active": props.state === TopicItemState.Active,
  "topic-item__state-icon_default": props.state === TopicItemState.Default,
  "topic-item__state-icon_test": props.state === TopicItemState.Test,
}));
</script>

<style scoped lang="scss">
.topic-item {
  display: flex;
  align-items: center;
}
.topic-item__state-icon {
  min-height: 1rem;
  min-width: 1rem;
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
  margin: 0.625rem;
  &_active {
    background-color: $green-60;
  }
  &_default {
    background-color: $gray;
  }
  &_test {
    background-color: $sun-60;
  }
}
.topic-item__title {
  font-weight: $font-weight-regular;
  &:hover {
    text-decoration: underline;
  }
}
</style>
