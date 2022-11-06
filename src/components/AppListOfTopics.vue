<template>
  <ul class="app-list-of-topics">
    <AppTopic v-for="topic in topics" :key="topic.id" v-bind="topic" />
  </ul>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getTopicsByCourseId } from "@/helpers/commonFunctions";
import { TopicState } from "@/types/enums";
import { useCoursesStore } from "@/stores";

const props = defineProps<{
  courseId: number;
}>();

const coursesStore = useCoursesStore();
const topics = reactive(getTopicsByCourseId(props.courseId));
console.log("Oupics topics", topics);
const { setActiveTopic } = coursesStore;
const activeTopic = topics.find(
  (item: { state: TopicState }) => item.state === TopicState.Active
);

setActiveTopic(activeTopic);
</script>

<style scoped lang="scss">
.app-list-of-topics {
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
}
</style>
