import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  ICourse,
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

eduElementCourses.createList();
eduElementCourses.addToList();

eduElementThemes.createList();
eduElementThemes.addToList();

export const useCoursesStore = defineStore("modules", () => {
  const activeModule = ref(getActiveModule());
  const activeTheme = ref(getActiveTheme(activeModule.value.id));

  function updateActiveModule(moduleId: number, elems: ICourse[]): void {
    eduElementCourses.updateActiveElem(moduleId, elems);
    activeModule.value = getActiveModule();
    activeTheme.value = getActiveTheme(moduleId);
  }

  function updateActiveTheme(
    moduleId: number,
    themes: ITheme[],
    themeId: number
  ) {
    eduElementThemes.updateActiveElem(moduleId, themes, themeId);
    activeTheme.value = getActiveTheme(moduleId);
  }

  function getThemesByCourseId(moduleId: number) {
    return eduElementThemes.getThemesByCourseId(moduleId);
  }

  function getActiveModule() {
    return eduElementCourses.getActiveElem() as ICourse;
  }

  function getActiveTheme(moduleId: number) {
    return eduElementThemes.getActiveElem(moduleId) as ITheme;
  }

  function getModulesList() {
    return eduElementCourses.getList();
  }

  /*
  const square = (x: number) => x * x;
  const times2 = (x: number) => x * 2;
  const sum = () => 6;
  console.log("compose", compose(square, times2, sum)());
  */

  return {
    activeModule,
    activeTheme,
    getActiveTheme,
    getThemesByCourseId,
    getModulesList,
    updateActiveTheme,
    updateActiveModule,
  };
});
