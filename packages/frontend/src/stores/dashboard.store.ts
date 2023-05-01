import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  IModule,
  IEduElementEntityArray,
  IUpdateArray,
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
import { modulesFromDatabase } from "@/fetch";
import { EEntityState } from "share/types/enums";

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
  new EntityCreator<TExtendsArrayCombination>(),
  modulesFromDatabase
);

const eduElementModulesExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<TExtendsArrayCombination>(
    ref(eduElementModules.getList()).value as TExtendsArrayCombination[]
  )
) as IEduElementEntityArray<IModule>;

export const useDashboardStore = defineStore("dashboard", () => {
  const activeModule = ref(getActiveModule());
  const rowJustInserted = ref({} as IModule);
  const isDialogFormVisible = ref(false);
  const dialogFormTitle = ref("");
  const videoStep = ref(0);

  function getModulesList() {
    return ref(eduElementModules.getList()).value as IModule[];
  }

  function getVideosList() {
    return [];
  }

  function getActiveModule() {
    return eduElementModulesExtended.getElemByState(
      EEntityState.Active
    ) as IModule;
  }

  function updateActiveModule(updateArray: IUpdateArray) {
    eduElementModulesExtended.updateElemByState(updateArray);
    activeModule.value = getActiveModule();
  }

  function updateRowJustInserted(row: IModule) {
    rowJustInserted.value = row;
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
    rowJustInserted,
    isDialogFormVisible,
    dialogFormTitle,
    videoStep,
    getModulesList,
    getVideosList,
    updateActiveModule,
    updateRowJustInserted,
    updateDialogFormTitle,
    updateElemFields,
    updateVideoStep,
    deleteFromList,
    toggleIsDialogFormVisible,
  };
});
