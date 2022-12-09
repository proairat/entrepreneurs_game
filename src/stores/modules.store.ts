import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IEduElementEntityArray,
  ITheme,
  IVideo,
  ITest,
  IEduElementEntityMap,
} from "@/types/interfaces";
import {
  Creator,
  CreatorExtended,
  EntityCreator,
  EntityCreatorExtendedMap,
  EntityCreatorExtendedArray,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import { DB } from "@/classes/fetchFromDB";

function getEduElement<T>(
  creator: Creator<T>,
  fromDB: T[] | TElemsList<number, T> | undefined
) {
  const eduElement = creator.getEduElement();
  if (fromDB) {
    eduElement.createList(fromDB);
    eduElement.addToList(fromDB);
  }
  return eduElement;
}

function getEduElementExtended<T>(creator: CreatorExtended<T>) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementModules = getEduElement(
  new EntityCreator<IModule>(),
  DB.modules
);
const eduElementThemes = getEduElement(new EntityCreator<ITheme>(), DB.themes);
const eduElementVideos = getEduElement(new EntityCreator<IVideo>(), DB.videos);
const eduElementTests = getEduElement(new EntityCreator<ITest>(), DB.tests);

const eduElementModulesExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<IModule>(
    ref(eduElementModules.getList()).value as IModule[]
  )
) as IEduElementEntityArray<IModule>;

const eduElementThemesExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<ITheme>(
    ref(eduElementThemes.getList()).value as TElemsList<number, ITheme>
  )
) as IEduElementEntityMap<ITheme>;

const eduElementVideosExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<IVideo>(
    ref(eduElementVideos.getList()).value as TElemsList<number, IVideo>
  )
) as IEduElementEntityMap<IVideo>;

const eduElementTestsExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<ITest>(
    ref(eduElementTests.getList()).value as TElemsList<number, ITest>
  )
) as IEduElementEntityMap<ITest>;

export const useModulesStore = defineStore("modules", () => {
  const activeModule = ref(getActiveModule());
  const activeTheme = ref(getActiveTheme(activeModule.value.id));
  const activeVideo = ref(getActiveVideo(activeModule.value.id));
  const activeTest = ref(getActiveTest(activeModule.value.id));

  function updateActiveModule(moduleId: number) {
    eduElementModulesExtended.updateActiveElem(moduleId);
    activeModule.value = getActiveModule();
    activeTheme.value = getActiveTheme(moduleId);
    activeVideo.value = getActiveVideo(moduleId);
    activeTest.value = getActiveTest(moduleId);
  }

  function updateActiveTheme(moduleId: number, themeId: number) {
    eduElementThemesExtended.updateActiveElem(moduleId, themeId);
    activeTheme.value = getActiveTheme(moduleId);
  }

  function updateActiveVideo(moduleId: number, themeId: number) {
    eduElementVideosExtended.updateActiveElem(moduleId, themeId);
    activeVideo.value = getActiveVideo(moduleId);
  }

  function updateActiveTest(moduleId: number, themeId: number) {
    eduElementTestsExtended.updateActiveElem(moduleId, themeId);
    activeTest.value = getActiveTest(moduleId);
  }

  function getModulesList() {
    return ref(eduElementModules.getList()).value as IModule[];
  }

  function getThemesByModuleId(moduleId: number) {
    return eduElementThemesExtended.getEntityByModuleId(moduleId) as ITheme[];
  }

  function getVideosByModuleId(moduleId: number) {
    return eduElementVideosExtended.getEntityByModuleId(moduleId) as IVideo[];
  }

  function getTestsByModuleId(moduleId: number) {
    return eduElementTestsExtended.getEntityByModuleId(moduleId) as ITest[];
  }

  function getActiveModule() {
    return eduElementModulesExtended.getActiveElem() as IModule;
  }

  function getActiveTheme(moduleId: number) {
    return eduElementThemesExtended.getActiveElem(
      eduElementThemesExtended.getEntityByModuleId(moduleId)
    ) as ITheme;
  }

  function getActiveVideo(moduleId: number) {
    return eduElementVideosExtended.getActiveElem(
      eduElementVideosExtended.getEntityByModuleId(moduleId)
    ) as IVideo;
  }

  function getActiveTest(moduleId: number) {
    return eduElementTestsExtended.getActiveElem(
      eduElementTestsExtended.getEntityByModuleId(moduleId)
    ) as ITest;
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
