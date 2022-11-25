<template>
  <li class="module-item">
    <img class="poster" :src="props.src" :alt="props.alt" />
    <div class="header">{{ props.header }}</div>
    <div class="title">
      <div class="module-item__state-icon" :class="stateIcon"></div>
      <div :class="stateTitle">{{ props.title }}</div>
    </div>
    <div class="duration">Длительность: {{ props.duration }}</div>
    <AppRouterLink />
  </li>
</template>

<script setup lang="ts">
import { EEntityState, EEntityType } from "@/types/enums";
import { computed, h, resolveComponent } from "vue";
import { useModulesStore } from "@/stores";

/**
 * Due to the limitations of defineProps in TS, no "IModule" interface is used
 * */
const props = defineProps<{
  id: number;
  type: "modules";
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: string;
}>();

const emits = defineEmits<{
  (e: "changeActiveItem", moduleId: number): void;
}>();

const modulesStore = useModulesStore();
const { getActiveTheme } = modulesStore;

function getName(moduleId: number) {
  const activeElem = getActiveTheme(moduleId);

  if (activeElem.type === "topics") {
    return "ViewModuleTopics";
  }
  if (activeElem.type === "tests") {
    return "ViewModuleTests";
  }
}

function getPath(moduleId: number) {
  const activeElem = getActiveTheme(moduleId);
  return `modules/${moduleId}/${activeElem.type}/${activeElem.id}`;
}

function getParams(moduleId: number) {
  const activeElem = getActiveTheme(moduleId);

  return { moduleId, themeType: activeElem.type, themeId: activeElem.id };
}

// Due to the fact that backtics does not work correctly, let's leave it like that
const stateIcon = computed(() => ({
  "module-item__state-icon_active":
    props.type === EEntityType.Modules && props.state === EEntityState.Active,
  "module-item__state-icon_default":
    props.type === EEntityType.Modules && props.state === EEntityState.Default,
}));

const stateTitle = computed(() => ({
  "module-item__state-title_active":
    props.type === EEntityType.Modules && props.state === EEntityState.Active,
  "module-item__state-title_default":
    props.type === EEntityType.Modules && props.state === EEntityState.Default,
}));

function AppRouterLink() {
  return h(
    resolveComponent("router-link"),
    {
      onClick() {
        emits("changeActiveItem", props.id);
      },
      class: "footer",
      to: {
        path: getPath(props.id),
        name: getName(props.id),
        params: getParams(props.id),
      },
    },
    () => props.footer
  );
}
</script>

<style scoped lang="scss">
.module-item {
  display: grid;
  grid-template-rows: 1fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-template-areas:
    "poster"
    "header"
    "title"
    "duration"
    "footer";
  background-color: $white;
  box-shadow: $box-shadow-2dp;
  border-radius: 0.625rem;

  & > .poster {
    grid-area: poster;
    width: 100%;
    padding: 1rem;
  }

  & > .header {
    grid-area: header;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: $font-weight-bold;
    color: $gray-90;
    line-height: $line-height-m;
    min-height: 3rem;
  }

  & > .title {
    grid-area: title;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 1rem 0 1rem;
  }

  & > .duration {
    grid-area: duration;
    font-size: $text-size-s;
    line-height: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    color: $gray;
  }

  & > .footer {
    grid-area: footer;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    background-color: $sun-30;
    // background-color: $blue-10;
    color: $gray-90;
    text-align: center;
    &:hover {
      background-color: $sun-20;
    }
  }
}

.module-item__state-icon {
  @include stateIcon($green-40, $gray-40) {
    margin-right: 0.5rem;
  }
}

.module-item__state-title {
  &_active {
    color: $green-60;
  }
  &_default {
    color: $gray-90;
  }
}
</style>
