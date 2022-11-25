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
import { useModulesStore } from "@/stores";
import { storeToRefs } from "pinia";

const modulesStore = useModulesStore();
const { activeVideo, activeModule, activeTheme } = storeToRefs(modulesStore);
</script>

<style scoped lang="scss">
.video {
  & > video {
    width: 100%;
  }
}
</style>
