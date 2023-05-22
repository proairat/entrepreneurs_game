<template>
  <VideoPlayer
    class="video-player vjs-big-play-centered"
    controls
    :src="props.getVideoSrc"
    :poster="props.getVideoPoster"
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
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import type { VideoJsPlayer } from "video.js";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const props = defineProps<{
  getVideoSrc?: string;
  getVideoPoster?: string;
}>();

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
