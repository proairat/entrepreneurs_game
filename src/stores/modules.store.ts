import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IModuleAdvanced,
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
import {
  modules,
  modulesAdvanced,
  themes,
  videos,
  tests,
} from "@/classes/fetchFromDB";

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

const eduElementModules = getEduElement(new EntityCreator<IModule>(), modules);
const eduElementModulesAdvanced = getEduElement(
  new EntityCreator<IModuleAdvanced>(),
  modulesAdvanced
);
const eduElementThemes = getEduElement(new EntityCreator<ITheme>(), themes);
const eduElementVideos = getEduElement(new EntityCreator<IVideo>(), videos);
const eduElementTests = getEduElement(new EntityCreator<ITest>(), tests);

const eduElementModulesExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<IModule>(
    ref(eduElementModules.getList()).value as IModule[]
  )
) as IEduElementEntityArray<IModule>;

const eduElementModulesAdvancedExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<IModuleAdvanced>(
    ref(eduElementModulesAdvanced.getList()).value as IModuleAdvanced[]
  )
) as IEduElementEntityArray<IModuleAdvanced>;

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
  const activeModuleAdvanced = ref(getActiveModuleAdvanced());
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

  function updateActiveModuleAdvanced(moduleAdvancedId: number) {
    eduElementModulesAdvancedExtended.updateActiveElem(moduleAdvancedId);
    activeModuleAdvanced.value = getActiveModuleAdvanced();
    activeTheme.value = getActiveTheme(moduleAdvancedId);
    activeVideo.value = getActiveVideo(moduleAdvancedId);
    activeTest.value = getActiveTest(moduleAdvancedId);
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

  function getModulesAdvancedList() {
    return ref(eduElementModulesAdvanced.getList()).value as IModuleAdvanced[];
  }

  function getThemesByModuleId(moduleId: number) {
    return eduElementThemesExtended.getListByEntityId(moduleId) as ITheme[];
  }

  function getVideosByModuleId(moduleId: number) {
    return eduElementVideosExtended.getListByEntityId(moduleId) as IVideo[];
  }

  function getTestsByModuleId(moduleId: number) {
    return eduElementTestsExtended.getListByEntityId(moduleId) as ITest[];
  }

  function getActiveModule() {
    return eduElementModulesExtended.getActiveElem() as IModule;
  }

  function getActiveModuleAdvanced() {
    return eduElementModulesAdvancedExtended.getActiveElem() as IModuleAdvanced;
  }

  function getActiveTheme(moduleId: number) {
    return eduElementThemesExtended.getActiveElem(
      eduElementThemesExtended.getListByEntityId(moduleId)
    ) as ITheme;
  }

  function getActiveVideo(moduleId: number) {
    return eduElementVideosExtended.getActiveElem(
      eduElementVideosExtended.getListByEntityId(moduleId)
    ) as IVideo;
  }

  function getActiveTest(moduleId: number) {
    return eduElementTestsExtended.getActiveElem(
      eduElementTestsExtended.getListByEntityId(moduleId)
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
    activeModuleAdvanced,
    activeTheme,
    activeVideo,
    activeTest,
    getActiveTheme,
    getModulesList,
    getModulesAdvancedList,
    getThemesByModuleId,
    getVideosByModuleId,
    getTestsByModuleId,
    updateActiveModule,
    updateActiveModuleAdvanced,
    updateActiveTheme,
    updateActiveVideo,
    updateActiveTest,
  };
});
