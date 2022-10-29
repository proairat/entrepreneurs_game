<template>
  <ul class="appListOfTopics">
    <AppTopic v-for="topic in topics" :key="topic.id" v-bind="topic" />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createTopicList } from "@/helpers/commonFunctions";

const props = defineProps<{
  topicId: number;
}>();

const topics = ref(createTopicList(props.topicId));
</script>

<style scoped lang="scss">
.appListOfTopics {
  grid-area: topics;
  position: relative;
  top: -1.5rem;
  height: calc(100% + 1.5rem);
  background-color: $white;
  overflow-y: auto;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
}
</style>
