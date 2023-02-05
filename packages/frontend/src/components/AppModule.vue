<template>
  <li class="module-item" :class="visibility">
    <img
      class="module-item__poster"
      :src="getModuleSrc"
      :alt="props.alt"
      :class="{ grayscale: props.state === EEntityState.Blocked }"
    />
    <div class="module-item__header">{{ props.header }}</div>
    <div class="module-item__title">
      <div class="module-item__state-icon" :class="stateIcon"></div>
      <div :class="stateTitle">{{ props.title }}</div>
    </div>
    <div class="module-item__duration">Длительность: {{ props.duration }}</div>
    <AppProgress class="module-item__progress" type="modules" />
    <el-popover
      v-if="props.state === EEntityState.Blocked"
      placement="top"
      :width="250"
      trigger="click"
    >
      <template #reference>
        <span
          class="module-item__footer rounded-md font-medium grayscale cursor-not-allowed"
          >Изучить модуль</span
        >
      </template>
      <div>
        Для открытия углубленного курса необходимо набрать
        <div class="flex items-center">
          <img
            class="h-[1.75rem] w-[1.25rem] inline-block mr-1"
            :src="coin"
            alt="Логотип"
          />
          <span class="font-medium inline-block">15</span>
        </div>
      </div>
    </el-popover>
    <AppRouterLink v-else />
  </li>
</template>

<script setup lang="ts">
import { EEntityState, EEntityType } from "share/types/enums";
import { computed, h, resolveComponent } from "vue";
import { useModulesStore } from "@/stores";
import { getImageUrl } from "@/helpers/commonFunctions";

/**
 * Due to the limitations of defineProps in TS, no "IModule" interface is used
 * */
const props = defineProps<{
  id: number;
  type: EEntityType.Modules | EEntityType.ModulesAdvanced;
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: EEntityState.Active | EEntityState.Default | EEntityState.Blocked;
  visibility?: "visible" | "hidden";
  order?: number;
}>();

const emits = defineEmits<{
  (e: "changeActiveModule", moduleId: number): void;
}>();

const modulesStore = useModulesStore();
const { getActiveTheme } = modulesStore;

const visibility = computed(() => {
  return props.type === EEntityType.ModulesAdvanced
    ? {
        visible: props.visibility === "visible",
        invisible: props.visibility === "hidden",
        order2: props.visibility === "hidden" && props.order === 2,
        order3: props.visibility === "hidden" && props.order === 3,
      }
    : "";
});
const getModuleSrc = computed(() => new URL(props.src, import.meta.url).href);
const coin = await getImageUrl("coin");

// Due to the fact that backtics does not work correctly, let's leave it like that
const stateIcon = computed(() => ({
  "module-item__state-icon_active":
    (props.type === EEntityType.Modules &&
      props.state === EEntityState.Active) ||
    (props.type === EEntityType.ModulesAdvanced &&
      props.state === EEntityState.Active),
  "module-item__state-icon_default":
    (props.type === EEntityType.Modules &&
      props.state === EEntityState.Default) ||
    (props.type === EEntityType.ModulesAdvanced &&
      props.state === EEntityState.Default),
  "module-item__state-icon_blocked":
    props.type === EEntityType.ModulesAdvanced &&
    props.state === EEntityState.Blocked,
}));

const stateTitle = computed(() => ({
  "module-item__state-title_active":
    (props.type === EEntityType.Modules &&
      props.state === EEntityState.Active) ||
    (props.type === EEntityType.ModulesAdvanced &&
      props.state === EEntityState.Active),
  "module-item__state-title_default":
    (props.type === EEntityType.Modules &&
      props.state === EEntityState.Default) ||
    (props.type === EEntityType.ModulesAdvanced &&
      props.state === EEntityState.Default),
  "module-item__state-title_blocked":
    props.type === EEntityType.ModulesAdvanced &&
    props.state === EEntityState.Blocked,
}));

function getName(moduleId: number) {
  const activeElem = getActiveTheme(moduleId);
  if (activeElem.type === EEntityType.Topics) {
    return "ViewModuleTopics";
  }
  if (activeElem.type === EEntityType.Tests) {
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

function AppRouterLink() {
  return h(
    resolveComponent("router-link"),
    {
      onClick() {
        emits("changeActiveModule", props.id);
      },
      class: "module-item__footer rounded-md",
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
  grid-template-areas:
    "progress"
    "poster"
    "header"
    "title"
    "duration"
    "footer";
  background-color: $white;
  box-shadow: $box-shadow-2dp;
  border-radius: 0.625rem;
  user-select: none;

  &__poster {
    grid-area: poster;
    padding: 1rem;
    object-fit: cover;
    height: 18.75rem;
    width: 100%;
  }

  &__header {
    grid-area: header;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: $font-weight-bold;
    color: $gray-90;
    line-height: $line-height-m;
    min-height: 3rem;
  }

  &__title {
    grid-area: title;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 1rem 0 1rem;
  }

  &__duration {
    grid-area: duration;
    font-size: $text-size-s;
    line-height: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    color: $gray;
  }

  &__progress {
    margin: 1rem 1rem 0;
  }

  &__footer {
    grid-area: footer;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    border-radius: 0.625rem;
    background-color: $sun-30;
    color: $gray-90;
    text-align: center;
    &:hover {
      background-color: $sun-20;
    }
  }

  &__state-icon {
    @include stateIcon("active", $green-40) {
      margin-right: 0.5rem;
    }
    @include stateIcon("default", $gray-40) {
      margin-right: 0.5rem;
    }
    @include stateIcon("blocked", $rose-60) {
      margin-right: 0.5rem;
    }
  }

  &__state-title {
    &_active {
      color: $green-60;
    }
    &_default {
      color: $gray-90;
    }
    &_blocked {
      color: $rose-80;
    }
  }
}

.order2 {
  display: none;
  @media (min-width: 1013px) {
    display: grid;
  }
}

.order3 {
  display: none;
  @media (min-width: 689px) {
    display: grid;
  }
}
</style>
