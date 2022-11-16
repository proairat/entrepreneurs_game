<template>
  <div class="video">
    <video controls>
      <source
        :src="activeVideo?.src"
        type='video/ogg; codecs=\"theora, vorbis\"'
      />
    </video>
  </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from "@/stores";
import { storeToRefs } from "pinia";

const coursesStore = useCoursesStore();
const { activeVideo, activeModule, activeTheme } = storeToRefs(coursesStore);
</script>

<style scoped lang="scss">
.video {
  & > video {
    width: 100%;
  }
}
</style>
