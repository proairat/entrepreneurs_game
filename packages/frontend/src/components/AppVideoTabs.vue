<template>
  <el-tabs
    v-if="props.videoDescription || props.videoAuthors.length"
    type="border-card"
  >
    <el-tab-pane v-if="props.videoDescription" label="Описание темы">
      <AppTabs>{{ props.videoDescription }}</AppTabs>
    </el-tab-pane>
    <el-tab-pane v-if="props.videoAuthors.length" :label="getAuthorsLabel()">
      <AppTabs>
        <div
          v-for="author in props.videoAuthors"
          :key="author.id"
          class="author"
        >
          <span v-if="author.surname" class="author__surname">
            {{ author.surname }}
          </span>
          <span v-if="author.name" class="author__name">{{
            ` ${author.name}`
          }}</span>
          <span v-if="author.patronymic" class="author__patronymic">{{
            ` ${author.patronymic}`
          }}</span>
          <span v-if="author.regalia" class="author__regalia">{{
            `, ${author.regalia}`
          }}</span>
        </div>
      </AppTabs>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { ITabsAuthors } from "share/types/interfaces";

const props = defineProps<{
  videoAuthors: ITabsAuthors[];
  videoDescription: string;
}>();

const getAuthorsLabel = () =>
  props.videoAuthors.length === 1 ? "Автор" : "Авторы";
</script>

<style scoped lang="scss">
:deep(.el-tabs__item) {
  &.is-active {
    color: $green-40 !important;
  }
  &:hover {
    color: $green-60 !important;
  }
}

.author {
  &__surname,
  &__name,
  &__patronymic {
    font-weight: $font-weight-medium;
  }
}
</style>
