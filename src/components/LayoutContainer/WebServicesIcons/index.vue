<template>
  <div class="webServicesIcons">
    <img v-for="icon of icons" :src="icon.src" :key="icon.id" class="icons" />
  </div>
</template>

<script lang="ts">
export default {
  name: "WebServicesIcons",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { getImageUrl } from "@/helpers/commonFunctions";

const icons = ref([
  { id: 1, src: await getImageUrl("gosuslugi") },
  { id: 2, src: await getImageUrl("vk") },
  {
    id: 3,
    src: await getImageUrl("google"),
  },
]);
</script>

<style scoped lang="scss">
$padding: 1.375rem;

.webServicesIcons {
  padding: 0 $padding;
  height: 30px;
  display: flex;
  justify-content: center;
}

.icons {
  width: 30px;
  margin: 0 10px;
}
</style>
