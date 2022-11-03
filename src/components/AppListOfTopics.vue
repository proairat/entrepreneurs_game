<template>
  <ul class="app-list-of-topics">
    <AppTopic v-for="topic in topics" :key="topic.id" v-bind="topic" />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getTopicList } from "@/helpers/commonFunctions";
import { TopicItemState } from "@/types/enums/topic-item-state";
import { useCoursesStore } from "@/stores";

const props = defineProps<{
  courseId: number;
}>();

const coursesStore = useCoursesStore();
const topics = ref(getTopicList(props.courseId));
const { setActiveTopic } = coursesStore;
const activeTopic = topics.value.find(
  (item: { state: TopicItemState }): boolean =>
    item.state === TopicItemState.Active
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
