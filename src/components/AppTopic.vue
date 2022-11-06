<template>
  <li class="topic-item">
    <div class="topic-item__state-icon" :class="stateClasses"></div>
    <!--<router-link
      class="topic-item__title"
      :to="{
        path: `/tests/:test`,
        name: 'AppTest',
        params: { test: 1 },
      }"
      >{{ props.title }}</router-link
    >-->
    <render />
  </li>
</template>

<script setup lang="ts">
import { computed, h, resolveComponent } from "vue";
import { TopicState } from "@/types/enums";

// the existing interface ITheme is not used due to limitations with defineProps
const props = defineProps<{
  id: number;
  state: string;
  title: string;
}>();

// due to the fact that backtics does not work correctly, let's leave it like that
const stateClasses = computed(() => ({
  "topic-item__state-icon_active": props.state === TopicState.Active,
  "topic-item__state-icon_default": props.state === TopicState.Default,
  "topic-item__state-icon_test": props.state === TopicState.Test,
}));

/*
const obj = {
  [TopicState.Active]:'topic',
  [TopicState.Default]:'topic',
  [TopicState.Test]:'test'
}
*/

// console.log("+++ props", props);

function render() {
  return h(
    resolveComponent("router-link"),
    {
      class: "topic-item__title",
      to: (() => {
        return props.state === "test"
          ? {
              path: `/tests/:test`,
              name: "AppTest",
              params: { test: 1 },
            }
          : {
              path: `/topics/:topic`,
              name: "AppAnotherTopic",
              params: { topic: 1 },
            };
      })(),
    },
    () => props.title
  );
}
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
