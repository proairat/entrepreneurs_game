import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ITheme } from "@/types/interfaces";
// import { getTopicsByCourseId, compose } from "@/helpers/commonFunctions";
import type { IEduElementCourses, IEduElementThemes } from "@/types/interfaces";

import { Creator, CoursesCreator, ThemesCreator } from "@/classes";

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
  const activeTopic = ref<ITheme>();

  const getCourseHeader = computed(() => courseHeader.value);
  const getActiveTopic = computed(() => activeTopic.value);

  /*
  const square = (x: number) => x * x;
  const times2 = (x: number) => x * 2;
  const sum = () => 6;

  const getActiveCourse = () => {};
  const getActiveTheme = () => {};

  console.log("Согреть", compose(square, times2, sum)());
  */

  function getEduElement(creator: Creator) {
    return creator.getEduElement();
  }

  const eduElementCourses = getEduElement(
    new CoursesCreator()
  ) as IEduElementCourses;

  console.log("client, ура!", eduElementCourses.getList());
  console.log("client, ура! getActiveElem", eduElementCourses.getActiveElem());

  const eduElementThemes = getEduElement(
    new ThemesCreator()
  ) as IEduElementThemes;

  console.log("client, ура!", eduElementThemes.getList());
  console.log("client, ура! getActiveElem", eduElementThemes.getActiveElem(3));

  function setActiveTopic(topic: ITheme) {
    activeTopic.value = topic;
  }

  return { getCourseHeader, getActiveTopic, setActiveTopic };
});
