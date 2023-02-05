<template>
  <VideoPlayer
    class="video-player vjs-big-play-centered"
    controls
    :src="getVideoSrc"
    :poster="getVideoPoster"
    :loop="true"
    :volume="0.6"
    aspectRatio="16:9"
    playsinline
    :playback-rates="[1.0, 1.5, 2.0]"
    @mounted="handleMounted"
    @ready="handleEvent($event)"
    @play="handleEvent($event)"
    @pause="handleEvent($event)"
    @ended="handleEvent($event)"
    @loadeddata="handleEvent($event)"
    @waiting="handleEvent($event)"
    @playing="handleEvent($event)"
    @canplay="handleEvent($event)"
    @canplaythrough="handleEvent($event)"
    @timeupdate="handleEvent(player?.currentTime())"
  />
  <AppTitleLine>
    <AppTitle>{{ getVideoTitle }}</AppTitle>
  </AppTitleLine>
  <AppVideoTabs
    :video-authors="getVideoAuthors"
    :video-description="getVideoDescription"
  />
</template>

<script setup lang="ts">
import type { VideoJsPlayer } from "video.js";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import { useModulesStore } from "@/stores";
import { storeToRefs } from "pinia";
import { computed, shallowRef } from "vue";

const modulesStore = useModulesStore();
const { activeVideo } = storeToRefs(modulesStore);
const getVideoTitle = computed(() => activeVideo.value.title);
const getVideoSrc = computed(
  () => new URL(activeVideo.value.src, import.meta.url).href
);
const getVideoPoster = computed(
  () => new URL(activeVideo.value.poster, import.meta.url).href
);
const getVideoAuthors = computed(() => activeVideo.value.authors);
const getVideoDescription = computed(() => activeVideo.value.description);
const player = shallowRef<VideoJsPlayer>();
const handleMounted = (payload: any) => {
  player.value = payload.player;
  // console.log('Basic player mounted', payload)
};
const handleEvent = (log: any) => {
  // console.log('Basic player event', log)
};
</script>

<style scoped lang="scss">
.video-player {
  background-color: $gray-90;
  width: 100%;
}
</style>
