<template>
  <li class="theme-item">
    <div :class="stateIcon"></div>
    <AppRouterLink />
  </li>
</template>

<script setup lang="ts">
import { computed, h, resolveComponent } from "vue";
import { EEntityState, EEntityType } from "@/types/enums";

/**
 * Due to the limitations of defineProps in TS, no "ITheme" interface is used
 * */
const props = defineProps<{
  id: number;
  type: EEntityType.Topics | EEntityType.Tests;
  state: EEntityState.Active | EEntityState.Default;
  title: string;
}>();

const emits = defineEmits<{
  (e: "changeActiveTheme", themeId: number): void;
  (
    e: "changeActiveVideo",
    themeId: number,
    themeType: EEntityType.Topics
  ): void;
  (e: "changeActiveTest", themeId: number, themeType: EEntityType.Tests): void;
}>();

// Due to the fact that backtics does not work correctly, let's leave it like that
const stateIcon = computed(() => ({
  "topic-item__state-icon topic-item__state-icon_active":
    props.type === EEntityType.Topics && props.state === EEntityState.Active,
  "topic-item__state-icon topic-item__state-icon_default":
    props.type === EEntityType.Topics && props.state === EEntityState.Default,
  "test-item__state-icon test-item__state-icon_active":
    props.type === EEntityType.Tests && props.state === EEntityState.Active,
  "test-item__state-icon test-item__state-icon_default":
    props.type === EEntityType.Tests && props.state === EEntityState.Default,
}));

const stateTitle = computed(() => ({
  "theme-item__title topic-item__state-title_active":
    props.type === EEntityType.Topics && props.state === EEntityState.Active,
  "theme-item__title topic-item__state-title_default":
    props.type === EEntityType.Topics && props.state === EEntityState.Default,
  "theme-item__title test-item__state-title_active":
    props.type === EEntityType.Tests && props.state === EEntityState.Active,
  "theme-item__title test-item__state-title_default":
    props.type === EEntityType.Tests && props.state === EEntityState.Default,
}));

function AppRouterLink() {
  return h(
    resolveComponent("router-link"),
    {
      onClick() {
        emits("changeActiveTheme", props.id);
        emits("changeActiveVideo", props.id, props.type as EEntityType.Topics);
        emits("changeActiveTest", props.id, props.type as EEntityType.Tests);
      },
      class: stateTitle.value,
      to: (() => {
        if (props.type === EEntityType.Tests) {
          return {
            path: "",
            name: "ViewModuleTests",
            params: { themeType: "tests", themeId: props.id },
          };
        }
        if (props.type === EEntityType.Topics) {
          return {
            path: "",
            name: "ViewModuleTopics",
            params: { themeType: "topics", themeId: props.id },
          };
        }
      })(),
    },
    () => props.title
  );
}
</script>

<style scoped lang="scss">
.theme-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  &__title {
    font-weight: $font-weight-regular;
    &:hover {
      text-decoration: underline;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}

.topic-item__state-icon {
  @include stateIcon("active", $green-40) {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
  @include stateIcon("default", $gray-40) {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
}
.test-item__state-icon {
  @include stateIcon("active", $green-40) {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
  @include stateIcon("default", $sun-40) {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
}

.topic-item__state-title {
  &_active {
    color: $green-60;
  }
  &_default {
    color: $gray-90;
  }
}
.test-item__state-title {
  &_active {
    color: $green-60;
  }
  &_default {
    color: $sun-90;
  }
}
</style>
