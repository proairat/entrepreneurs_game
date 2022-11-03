import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ITopic } from "@/types/interfaces";
import { getTopicList } from "@/helpers/commonFunctions";

export const useCoursesStore = defineStore("courses", () => {
  const courseHeader = ref(
    new Map([
      [1, "Основы предпринимательства"],
      [2, "Грантовое проектирование"],
      [3, "Технологическое предпринимательство"],
      [4, "Массовое предпринимательство"],
      [5, "Креативные индустрии"],
      [6, "Социальное предпринимательство"],
    ])
  );
  const activeTopic = ref<ITopic>();

  const getCourseHeader = computed(() => courseHeader.value);
  const getActiveTopic = computed(() => activeTopic.value);

  function setActiveTopic(topic: ITopic) {
    activeTopic.value = topic;
  }

  /**
   * Функция для получения значений из базы данных.
   * На данный момент, используется модель структуры Map
   * с последующей заменой на работу с базой данных.
   * @returns
   */
  function getTopicList() {
    return;
  }

  return { getCourseHeader, getActiveTopic, setActiveTopic };
});
