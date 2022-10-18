<template>
  <ul class="appListOfTopics">
    <AppTopic v-for="topic in topics" :key="topic.id" v-bind="topic" />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const topics = ref([
  {
    id: 1,
    state: "active",
    title:
      "abaaasdf asdffsdaf sad ff w wf8798asdf adsf87fdsa adsf0 adsfads dfa89adf 0adsf dasf09adf a dsdfasdf",
  },
  {
    id: 2,
    state: "default",
    title: "two",
  },
  {
    id: 3,
    state: "default",
    title: "sdfg",
  },
  {
    id: 4,
    state: "default",
    title: "fghjfhj",
  },
  {
    id: 5,
    state: "default",
    title: "zxcv",
  },
  {
    id: 6,
    state: "default",
    title: "345345",
  },
  {
    id: 7,
    state: "default",
    title: "7",
  },
  {
    id: 8,
    state: "test",
    title: "asdf",
  },
  {
    id: 9,
    state: "default",
    title: "234",
  },
  {
    id: 10,
    state: "default",
    title: "десять",
  },
  {
    id: 11,
    state: "default",
    title: "фываолжцзгук",
  },
]);
</script>

<style scoped lang="scss">
.appListOfTopics {
  grid-area: topics;
  position: relative;
  top: -1.5rem;
  height: calc(100% + 1.5rem);
  background-color: $white;
  border-radius: 0.625rem;
  box-shadow: $box-shadow-2dp;
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
}
</style>
