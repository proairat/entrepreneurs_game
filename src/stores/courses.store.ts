import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type {
  IEduElementCourses,
  IEduElementThemes,
  ITheme,
} from "@/types/interfaces";
import { Creator, CoursesCreator, ThemesCreator } from "@/classes";

function getEduElement(creator: Creator) {
  return creator.getEduElement();
}

const eduElementCourses = getEduElement(
  new CoursesCreator()
) as IEduElementCourses;

const eduElementThemes = getEduElement(
  new ThemesCreator()
) as IEduElementThemes;

const eduElementCoursesList = eduElementCourses.getList();
const eduElementThemesList = eduElementThemes.getList();

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
  const bijection = ref<Map<number, number>>(new Map());

  if (Array.isArray(eduElementCoursesList)) {
    for (const item of eduElementCoursesList) {
      bijection.value.set(item.id, eduElementThemes.getActiveElem(item.id)!.id);
    }
  }

  const getCourseHeader = computed(() => courseHeader.value);
  const getActiveTheme = computed(() => activeTopic.value);

  function updateBijection(courseId: number, themeId: number) {
    bijection.value.set(courseId, themeId);
  }

  function getThemesByCourseId(courseId: number) {
    return eduElementThemes.getThemesByCourseId(courseId);
  }

  function getModules() {
    return eduElementCoursesList;
  }

  function setActiveTopic(topic: ITheme) {
    activeTopic.value = topic;
  }

  /*
  const square = (x: number) => x * x;
  const times2 = (x: number) => x * 2;
  const sum = () => 6;

  const getActiveCourse = () => {};
  const getActiveTheme = () => {};

  console.log("Согреть", compose(square, times2, sum)());
  */

  console.log("bijection.value", bijection.value);

  // console.log("courses store, eduElementThemes.getActiveElem", eduElementThemes.getActiveElem(3));
  // console.log("courses store, eduElementThemes.getThemesByCourseId", eduElementThemes.getThemesByCourseId(3));

  return {
    bijection,
    getCourseHeader,
    getActiveTheme,
    updateBijection,
    getThemesByCourseId,
    setActiveTopic,
    getModules,
  };
});
