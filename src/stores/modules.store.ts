import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IEduElementModules,
  IEduElementThemes,
  IEduElementVideos,
  ITheme,
  IVideo,
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
} from "@/classes";
import type { TElemsList } from "@/types/types";

function getEduElement(creator: Creator) {
  const eduElement = creator.getEduElement();
  eduElement.createList();
  eduElement.addToList();
  return eduElement;
}

function getEduElementExtended(creator: CreatorExtended) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementModules = getEduElement(new ModulesCreator());
const eduElementThemes = getEduElement(new ThemesCreator());
const eduElementVideos = getEduElement(new VideosCreator());

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

export const useModulesStore = defineStore("modules", () => {
  const activeModule = ref(getActiveModule());
  const activeTheme = ref(getActiveTheme(activeModule.value.id));
  const activeVideo = ref(getActiveVideo(activeModule.value.id));

  function updateActiveModule(moduleId: number, elems: IModule[]): void {
    eduElementModulesExtended.updateActiveElem(moduleId, elems);
    activeModule.value = getActiveModule();
    activeTheme.value = getActiveTheme(moduleId);
    activeVideo.value = getActiveVideo(moduleId);
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
    videoId: number
  ) {
    eduElementVideosExtended.updateActiveElem(moduleId, videos, videoId);
    activeVideo.value = getActiveVideo(moduleId);
  }

  function getThemesByModuleId(moduleId: number) {
    return eduElementThemesExtended.getThemesByModuleId(moduleId);
  }

  function getVideosByModuleId(moduleId: number) {
    return eduElementVideosExtended.getVideosByModuleId(moduleId);
  }

  function getActiveModule() {
    return eduElementModulesExtended.getActiveElem() as IModule;
  }

  function getActiveTheme(moduleId: number) {
    return eduElementThemesExtended.getActiveElem(moduleId) as ITheme;
  }

  function getModulesList() {
    return eduElementModules.getList();
  }

  function getActiveVideo(moduleId: number) {
    return eduElementVideosExtended.getActiveElem(moduleId) as IVideo;
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
    getActiveTheme,
    getThemesByModuleId,
    getVideosByModuleId,
    getModulesList,
    updateActiveTheme,
    updateActiveModule,
    updateActiveVideo,
  };
});
