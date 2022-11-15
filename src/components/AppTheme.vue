<template>
  <li class="theme-item">
    <div :class="stateIcon"></div>
    <AppRouterLink />
  </li>
</template>

<script setup lang="ts">
import { computed, h, resolveComponent } from "vue";
import { EntityState, EntityType } from "@/types/enums";
/**
 * Due to the limitations of defineProps in TS, no "ITheme" interface is used
 * */
const props = defineProps<{
  id: number;
  type: "topics" | "tests";
  state: "active" | "default";
  title: string;
}>();

const emits = defineEmits<{
  (e: "changeActiveItem", themeId: number): void;
}>();

// Due to the fact that backtics does not work correctly, let's leave it like that
const stateIcon = computed(() => ({
  "topic-item__state-icon topic-item__state-icon_active":
    props.type === EntityType.Topics && props.state === EntityState.Active,
  "topic-item__state-icon topic-item__state-icon_default":
    props.type === EntityType.Topics && props.state === EntityState.Default,
  "test-item__state-icon test-item__state-icon_active":
    props.type === EntityType.Tests && props.state === EntityState.Active,
  "test-item__state-icon test-item__state-icon_default":
    props.type === EntityType.Tests && props.state === EntityState.Default,
}));

const stateTitle = computed(() => ({
  "theme-item__title topic-item__state-title_active":
    props.type === EntityType.Topics && props.state === EntityState.Active,
  "theme-item__title topic-item__state-title_default":
    props.type === EntityType.Topics && props.state === EntityState.Default,
  "theme-item__title test-item__state-title_active":
    props.type === EntityType.Tests && props.state === EntityState.Active,
  "theme-item__title test-item__state-title_default":
    props.type === EntityType.Tests && props.state === EntityState.Default,
}));

function AppRouterLink() {
  return h(
    resolveComponent("router-link"),
    {
      onClick() {
        emits("changeActiveItem", props.id);
      },
      class: stateTitle.value,
      to: (() => {
        if (props.type === EntityType.Tests) {
          return {
            path: "",
            name: "ViewModule",
            params: { themeType: "test", themeId: props.id },
          };
        }
        if (props.type === EntityType.Topics) {
          return {
            path: "",
            name: "ViewModule",
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
  @include stateIcon($green-40, $gray-40) {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
}
.test-item__state-icon {
  @include stateIcon($sun-40, $sun-40) {
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
    color: $sun-90;
  }
  &_default {
    color: $sun-90;
  }
}
</style>
