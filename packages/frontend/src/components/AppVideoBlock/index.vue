<template>
  <AppVideoPlayer :getVideoSrc="getVideoSrc" :getVideoPoster="getVideoPoster" />
  <AppTitleLine>
    <AppTitle>{{ getVideoTitle }}</AppTitle>
  </AppTitleLine>
  <AppVideoTabs
    :video-authors="getVideoAuthors"
    :video-description="getVideoDescription"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModulesStore } from "@/stores";
import { storeToRefs } from "pinia";

const modulesStore = useModulesStore();
const { activeVideo } = storeToRefs(modulesStore);
const getVideoTitle = computed(() => activeVideo.value.title);
const getVideoAuthors = computed(() => activeVideo.value.authors);
const getVideoDescription = computed(() => activeVideo.value.description);

const getVideoSrc = computed(
  () => new URL(activeVideo.value.filename, import.meta.url).href
);

const getVideoPoster = computed(
  () => new URL(activeVideo.value.poster, import.meta.url).href
);
</script>

<script lang="ts">
export default {
  name: "AppVideoBlock",
};
</script>
