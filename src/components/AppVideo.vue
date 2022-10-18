<template>
  <div class="video">
    <video controls="controls">
      <source
        src="https://www.youtube.com/watch?v=S4pcP6eYnBE&list=PLsfiCXqrxftlugGQ-uo_QlMeJNMx5Kc4q&index=1"
        type='video/ogg; codecs="theora, vorbis"'
      />
    </video>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.video {
  grid-area: video;
  margin-right: 1.5rem;
  & > video {
    width: 100%;
  }
}
</style>
