import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IEduElementModules,
  IEduElementThemes,
  IEduElementVideos,
  ITheme,
  IVideo,
  IEduElementTests,
  ITest,
} from "@/types/interfaces";
import {
  Creator,
  ModulesCreator,
  ThemesCreator,
  CreatorExtended,
  ModulesCreatorExtended,
  ThemesCreatorExtended,
  VideosCreator,
  VideosCreatorExtended,
  TestsCreator,
  TestsCreatorExtended,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import { DB } from "@/classes/fetchFromDB";

function getEduElement<T>(
  creator: Creator,
  fromDB: T[] | TElemsList<number, T> | undefined
) {
  const eduElement = creator.getEduElement();
  eduElement.createList(fromDB);
  eduElement.addToList(fromDB);
  return eduElement;
}

function getEduElementExtended(creator: CreatorExtended) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementModules = getEduElement(new ModulesCreator(), DB.modules);
const eduElementThemes = getEduElement(new ThemesCreator(), DB.themes);
const eduElementVideos = getEduElement(new VideosCreator(), DB.videos);
const eduElementTests = getEduElement(new TestsCreator(), DB.tests);

const eduElementModulesExtended = getEduElementExtended(
  new ModulesCreatorExtended(eduElementModules.getList() as IModule[])
) as IEduElementModules;

const eduElementThemesExtended = getEduElementExtended(
  new ThemesCreatorExtended(
    eduElementThemes.getList() as TElemsList<number, ITheme>
  )
) as IEduElementThemes;

const eduElementVideosExtended = getEduElementExtended(
  new VideosCreatorExtended(
    eduElementVideos.getList() as TElemsList<number, IVideo>
  )
) as IEduElementVideos;

const eduElementTestsExtended = getEduElementExtended(
  new TestsCreatorExtended(
    eduElementTests.getList() as TElemsList<number, ITest>
  )
) as IEduElementTests;

export const useModulesStore = defineStore("modules", () => {
  const activeModule = ref(getActiveModule());
  const activeTheme = ref(getActiveTheme(activeModule.value.id));
  const activeVideo = ref(getActiveVideo(activeModule.value.id));
  const activeTest = ref(getActiveTest(activeModule.value.id));

  function updateActiveModule(moduleId: number, elems: IModule[]): void {
    eduElementModulesExtended.updateActiveElem(moduleId, elems);
    activeModule.value = getActiveModule();
    activeTheme.value = getActiveTheme(moduleId);
    activeVideo.value = getActiveVideo(moduleId);
    activeTest.value = getActiveTest(moduleId);
  }

  function updateActiveTheme(
    moduleId: number,
    themes: ITheme[],
    themeId: number
  ) {
    eduElementThemesExtended.updateActiveElem(moduleId, themes, themeId);
    activeTheme.value = getActiveTheme(moduleId);
  }

  function updateActiveVideo(
    moduleId: number,
    videos: IVideo[],
    themeId: number
  ) {
    eduElementVideosExtended.updateActiveElem(moduleId, videos, themeId);
    activeVideo.value = getActiveVideo(moduleId);
  }

  function updateActiveTest(moduleId: number, tests: ITest[], themeId: number) {
    eduElementTestsExtended.updateActiveElem(moduleId, tests, themeId);
    activeTest.value = getActiveTest(moduleId);
  }

  function getModulesList() {
    return eduElementModules.getList() as IModule[];
  }

  function getThemesByModuleId(moduleId: number) {
    return eduElementThemesExtended.getThemesByModuleId(moduleId);
  }

  function getVideosByModuleId(moduleId: number) {
    return eduElementVideosExtended.getVideosByModuleId(moduleId);
  }

  function getTestsByModuleId(moduleId: number) {
    return eduElementTestsExtended.getTestsByModuleId(moduleId);
  }

  function getActiveModule() {
    return eduElementModulesExtended.getActiveElem() as IModule;
  }

  function getActiveTheme(moduleId: number) {
    return eduElementThemesExtended.getActiveElem(moduleId) as ITheme;
  }

  function getActiveVideo(moduleId: number) {
    return eduElementVideosExtended.getActiveElem(moduleId) as IVideo;
  }

  function getActiveTest(moduleId: number) {
    return eduElementTestsExtended.getActiveElem(moduleId) as ITest;
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
    activeVideo,
    activeTest,
    getActiveTheme,
    getModulesList,
    getThemesByModuleId,
    getVideosByModuleId,
    getTestsByModuleId,
    updateActiveModule,
    updateActiveTheme,
    updateActiveVideo,
    updateActiveTest,
  };
});
