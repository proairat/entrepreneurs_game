<template>
  <div class="webServicesIcons">
    <img v-for="icon of icons" :src="icon.src" :key="icon.id" class="icons" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

function getImageUrl(name: string) {
  return new URL(`./../assets/services_icons/${name}.svg`, import.meta.url)
    .href;
}

const icons = ref([
  { id: 1, src: getImageUrl("gosuslugi") },
  { id: 2, src: getImageUrl("vk") },
  {
    id: 3,
    src: getImageUrl("google"),
  },
]);
</script>

<style scoped lang="scss">
$padding: 22px;

.webServicesIcons {
  padding: 0 $padding;
  height: 30px;
  display: flex;
  justify-content: center;
  padding-bottom: $padding;
}

.icons {
  width: 30px;
  margin: 0 10px;
}
</style>
