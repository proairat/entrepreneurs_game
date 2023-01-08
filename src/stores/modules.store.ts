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
  IUpdateMap,
  IUpdateArray,
} from "@/types/interfaces";
import {
  Creator,
  CreatorExtended,
  EntityCreator,
  EntityCreatorExtendedMap,
  EntityCreatorExtendedArray,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import { modules, modulesAdvanced, themes, videos, tests } from "@/fetch";
import type { EEntityState } from "@/types/enums";

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

  function updateActiveModule(updateArray: IUpdateArray) {
    eduElementModulesExtended.updateActiveElem(updateArray);
    activeModule.value = getActiveModule();
    activeTheme.value = getActiveTheme(updateArray.entityId);
    activeVideo.value = getActiveVideo(updateArray.entityId);
    if (getActiveTest(updateArray.entityId)) {
      activeTest.value = getActiveTest(updateArray.entityId);
    }
  }

  function updateActiveModuleAdvanced(updateArray: IUpdateArray) {
    eduElementModulesAdvancedExtended.updateActiveElem(updateArray);
    activeModuleAdvanced.value = getActiveModuleAdvanced();
    activeTheme.value = getActiveTheme(updateArray.entityId);
    activeVideo.value = getActiveVideo(updateArray.entityId);
    if (getActiveTest(updateArray.entityId)) {
      activeTest.value = getActiveTest(updateArray.entityId);
    }
  }

  function updateActiveTheme(updateMap: IUpdateMap) {
    eduElementThemesExtended.updateActiveElem(updateMap);
    activeTheme.value = getActiveTheme(updateMap.entityIdForListByEntityId);
  }

  function updateActiveVideo(updateMap: IUpdateMap) {
    eduElementVideosExtended.updateActiveElem(updateMap);
    activeVideo.value = getActiveVideo(updateMap.entityIdForListByEntityId);
  }

  function updateActiveTest(updateMap: IUpdateMap) {
    eduElementTestsExtended.updateActiveElem(updateMap);
    activeTest.value = getActiveTest(updateMap.entityIdForListByEntityId);
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
      getThemesByModuleId(moduleId)
    ) as ITheme;
  }

  function getActiveVideo(moduleId: number) {
    return eduElementVideosExtended.getActiveElem(
      getVideosByModuleId(moduleId)
    ) as IVideo;
  }

  function getActiveTest(moduleId: number) {
    return eduElementTestsExtended.getActiveElem(
      getTestsByModuleId(moduleId)
    ) as ITest;
  }

  return {
    activeModule,
    activeModuleAdvanced,
    activeTheme,
    activeVideo,
    activeTest,
    getActiveTheme,
    getActiveTest,
    getModulesList,
    getModulesAdvancedList,
    getThemesByModuleId,
    updateActiveModule,
    updateActiveModuleAdvanced,
    updateActiveTheme,
    updateActiveVideo,
    updateActiveTest,
  };
});
