<template>
  <div class="video">
    <video controls>
      <source
        :src="activeVideo?.src"
        type='video/ogg; codecs=\"theora, vorbis\"'
      />
    </video>
    <AppThemeHeader>{{ getVideoTitle }}</AppThemeHeader>
  </div>
</template>

<script setup lang="ts">
import { useModulesStore } from "@/stores";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const modulesStore = useModulesStore();
const { activeVideo } = storeToRefs(modulesStore);
const getVideoTitle = computed(() => {
  return activeVideo.value.title;
});
</script>

<style scoped lang="scss">
.video {
  & > video {
    width: 100%;
  }
}
</style>
