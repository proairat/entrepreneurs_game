import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IVideoDB,
  IUpdateArrayDashboard,
  IEduElementEntityArrayDashboard,
} from "share/types/interfaces";
import {
  CreatorDashboard,
  CreatorExtendedDashboard,
  EntityCreatorDashboard,
  EntityCreatorExtendedArrayDashboard,
} from "@/classes";
import type { TExtendsDashboardArray } from "share/types/types";
import { modulesFromDatabase, videosFromDatabase } from "@/fetch";
import { EEntityStateDashboard } from "share/types/enums";
import cloneDeep from "lodash/cloneDeep";

function getEduElement<T>(
  creator: CreatorDashboard<T>,
  fromDB: T[] | undefined
) {
  const eduElement = creator.getEduElement();
  if (fromDB) {
    eduElement.createTheList(fromDB);
    eduElement.fillTheList(fromDB);
  }
  return eduElement;
}

function getEduElementExtended<T>(creator: CreatorExtendedDashboard<T>) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementModules = getEduElement(
  new EntityCreatorDashboard<TExtendsDashboardArray>(),
  modulesFromDatabase
);
const eduElementVideos = getEduElement(
  new EntityCreatorDashboard<TExtendsDashboardArray>(),
  videosFromDatabase
);

const eduElementModulesExtended = getEduElementExtended(
  new EntityCreatorExtendedArrayDashboard<TExtendsDashboardArray>(
    ref(eduElementModules.getTheList()).value as TExtendsDashboardArray[]
  )
) as IEduElementEntityArrayDashboard<IModule>;
const eduElementVideosExtended = getEduElementExtended(
  new EntityCreatorExtendedArrayDashboard<TExtendsDashboardArray>(
    eduElementVideos.getTheList() as TExtendsDashboardArray[]
  )
) as IEduElementEntityArrayDashboard<IVideoDB>;

export const useDashboardStore = defineStore("dashboard", () => {
  const activeModule = ref(getActiveModule());
  const currentVideo = ref(getActiveVideo());
  const rowModuleJustInserted = ref({} as IModule);
  const rowVideoJustInserted = ref({} as IVideoDB);
  const isDialogFormVisible = ref(false);
  const dialogFormTitle = ref("");
  const videoStep = ref(0);
  const tableData = ref(cloneDeep(getVideosList()));

  function getModulesList() {
    return ref(eduElementModules.getTheList()).value as IModule[];
  }

  function getVideosList() {
    return eduElementVideos.getTheList() as IVideoDB[];
  }

  function addToVideosList(param: IVideoDB) {
    return eduElementVideos.addElemToTheList(cloneDeep(param));
  }

  function getActiveModule() {
    return eduElementModulesExtended.getElemByState(
      EEntityStateDashboard.Active
    ) as IModule;
  }

  function getActiveVideo() {
    return eduElementVideosExtended.getElemByState(
      EEntityStateDashboard.Active
    ) as IVideoDB;
  }

  function getCurrentVideoByState(state: EEntityStateDashboard) {
    return eduElementVideosExtended.getElemByState(state) as IVideoDB;
  }

  function updateActiveModule(updateArray: IUpdateArrayDashboard) {
    eduElementModulesExtended.updateElemByState(updateArray);
    activeModule.value = getActiveModule();
  }

  function updateCurrentVideoByState(updateArray: IUpdateArrayDashboard) {
    eduElementVideosExtended.updateElemByState(updateArray);
    currentVideo.value = getCurrentVideoByState(updateArray.stateForClickIndex);
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

  function updateElemFields(elem: TExtendsDashboardArray) {
    eduElementModulesExtended.updateElemFields(elem);
  }

  function updateVideoStep(value: number) {
    videoStep.value = value;
  }

  function deleteFromList(elem: TExtendsDashboardArray) {
    eduElementModulesExtended.deleteFromList(elem);
  }

  function toggleIsDialogFormVisible(value: boolean) {
    isDialogFormVisible.value = value;
  }

  return {
    activeModule,
    currentVideo,
    rowModuleJustInserted,
    rowVideoJustInserted,
    isDialogFormVisible,
    dialogFormTitle,
    videoStep,
    tableData,
    getModulesList,
    getVideosList,
    getCurrentVideoByState,
    addToVideosList,
    updateActiveModule,
    updateCurrentVideoByState,
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
