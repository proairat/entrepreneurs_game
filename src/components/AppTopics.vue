<template>
  <div class="container mx-auto px-4 text-left py-10">
    <div class="flex items-baseline">
      <div class="flex text-blue-500 text-xl">
        <span
          class="tab mr-2 cursor-pointer font-serif"
          v-for="topic in topics"
          :key="topic.key"
          @click="clickTopicHandler(topic.key)"
          :class="{ 'text-green-600 font-semibold': isActive(topic) }"
        >
          {{ topic.title }}
        </span>
      </div>
    </div>
    <div class="flex">
      <div class="flex-auto">
        <div>Вместо компонента TopStories</div>
      </div>
      <div class="flex-auto"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { reactive, onMounted } from "vue";
import { CHANGE_MENU_ITEM, FETCH_ITEMS } from "@/store/storeTypes";
import type { ITopic } from "@/TSTypes";
// import { getValueFromStore } from "@/utils/commonFunctions";
import TopStories from "@/components/TopStories.vue";

// const items = getValueFromStore("items", store);
// const errors = getValueFromStore("errors", store);
// const lsTopicKey = getValueFromStore("lsTopicKey", store);
const topics = reactive([
  { key: "top", title: "Top" },
  { key: "new", title: "New" },
  { key: "best", title: "Best" },
  { key: "ask", title: "Ask" },
  { key: "show", title: "Show" },
  { key: "job", title: "Jobs" },
]);

function clickTopicHandler(topicKey: string): void {
  // if (lsTopicKey.value !== topicKey) {
  console.log("clickTopicHandler");
  // }
}

function isActive(topic: ITopic): boolean {
  // return topic.key === lsTopicKey.value ? true : false;
  return true;
}

window.addEventListener("unhandledrejection", function (event) {
  // объект события имеет два специальных свойства:
  console.log("unhandledrejection event.promise", event.promise); // [object Promise] - промис, который сгенерировал ошибку
  console.log("unhandledrejection event.promise", event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      console.log("Белые розы");
    }
  };
});
</script>

<style>
/*html {
  margin-left: calc(100vw - 100%);
  margin-right: 0;
}
*/
</style>
