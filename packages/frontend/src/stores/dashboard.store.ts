import { defineStore } from "pinia";
import { isProxy, isReactive, isRef, ref } from "vue";
import type {
  IModule,
  IEduElementEntityArray,
  IUpdateArray,
  IVideoDB,
} from "share/types/interfaces";
import {
  Creator,
  CreatorExtended,
  EntityCreator,
  EntityCreatorExtendedArray,
} from "@/classes";
import type {
  TElemsList,
  TExtendsArray,
  TExtendsArrayCombination,
} from "share/types/types";
import { modulesFromDatabase, videosFromDatabase } from "@/fetch";
import { EEntityState } from "share/types/enums";
import cloneDeep from "lodash/cloneDeep";

function getEduElement<T>(
  creator: Creator<T>,
  fromDB: T[] | TElemsList<number, T> | undefined
) {
  const eduElement = creator.getEduElement();
  if (fromDB) {
    eduElement.createList(fromDB);
    eduElement.fillTheList(fromDB);
  }
  return eduElement;
}

function getEduElementExtended<T>(creator: CreatorExtended<T>) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementModules = getEduElement(
  new EntityCreator<TExtendsArrayCombination>(),
  modulesFromDatabase
);
const eduElementVideos = getEduElement(
  new EntityCreator<TExtendsArrayCombination>(),
  videosFromDatabase
);

const eduElementModulesExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<TExtendsArrayCombination>(
    ref(eduElementModules.getList()).value as TExtendsArrayCombination[]
  )
) as IEduElementEntityArray<IModule>;
const eduElementVideosExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<TExtendsArrayCombination>(
    eduElementVideos.getList() as TExtendsArrayCombination[]
  )
) as IEduElementEntityArray<IVideoDB>;

export const useDashboardStore = defineStore("dashboard", () => {
  const activeModule = ref(getActiveModule());
  const activeVideo = ref(getActiveVideo());
  const rowModuleJustInserted = ref({} as IModule);
  const rowVideoJustInserted = ref({} as IVideoDB);
  const isDialogFormVisible = ref(false);
  const dialogFormTitle = ref("");
  const videoStep = ref(0);
  
  function getModulesList() {
    return ref(eduElementModules.getList()).value as IModule[];
  }

  function getVideosList() {
    return eduElementVideos.getList() as IVideoDB[];
  }

  function addToVideosList(param: IVideoDB) {
    return eduElementVideos.addToList(cloneDeep(param));
  }

  function getActiveModule() {
    return eduElementModulesExtended.getElemByState(
      EEntityState.Active
    ) as IModule;
  }

  function getActiveVideo() {
    return eduElementVideosExtended.getElemByState(
      EEntityState.Active
    ) as IVideoDB;
  }

  function updateActiveModule(updateArray: IUpdateArray) {
    eduElementModulesExtended.updateElemByState(updateArray);
    activeModule.value = getActiveModule();
  }

  function updateActiveVideo(updateArray: IUpdateArray) {
    eduElementVideosExtended.updateElemByState(updateArray);
    activeVideo.value = getActiveVideo();
  }

  function updateRowModuleJustInserted(row: IModule) {
    rowModuleJustInserted.value = row;
  }

  function updateVideoList(elemToUpdate: IVideoDB) {
    eduElementVideosExtended.updateList(cloneDeep(elemToUpdate));
  }

  function updateRowVideoJustInserted(row: IVideoDB) {
    rowVideoJustInserted.value = cloneDeep(row);
  }

  function updateDialogFormTitle(title: string) {
    dialogFormTitle.value = title;
  }

  function updateElemFields(elem: TExtendsArray) {
    eduElementModulesExtended.updateElemFields(elem);
  }

  function updateVideoStep(value: number) {
    videoStep.value = value;
  }

  function deleteFromList(elem: TExtendsArray) {
    eduElementModulesExtended.deleteFromList(elem);
  }

  function toggleIsDialogFormVisible(value: boolean) {
    isDialogFormVisible.value = value;
  }

  return {
    activeModule,
    activeVideo,
    rowModuleJustInserted,
    rowVideoJustInserted,
    isDialogFormVisible,
    dialogFormTitle,
    videoStep,
    getModulesList,
    getVideosList,
    addToVideosList,
    updateActiveModule,
    updateActiveVideo,
    updateRowModuleJustInserted,
    updateRowVideoJustInserted,
    updateDialogFormTitle,
    updateElemFields,
    updateVideoStep,
    deleteFromList,
    toggleIsDialogFormVisible,
    updateVideoList,
  };
});
