import { EEntityState, EEntityType } from "share/types/enums";
import type {
  IEduElementEntityArray,
  IEntranceTest,
  IModule,
  IModuleAdvanced,
  IUpdateArray,
} from "share/types/interfaces";
import type { TExtendsArray, TModuleBodyFile } from "share/types/types";
import { BaseEduElement } from "@/classes";

function isIModule(entity: TExtendsArray): entity is IModule {
  return (entity as IModule).type === EEntityType.Modules;
}

function isIModuleAdvanced(entity: TExtendsArray): entity is IModuleAdvanced {
  return (entity as IModuleAdvanced).type === EEntityType.ModulesAdvanced;
}

function isIEntranceTest(entity: TExtendsArray): entity is IEntranceTest {
  return (entity as IEntranceTest).type === EEntityType.EntranceTests;
}

class EntityExtendedArray<T extends TExtendsArray>
  extends BaseEduElement
  implements IEduElementEntityArray<T>
{
  list: T[];

  constructor(list: T[]) {
    super();
    this.list = list;
  }

  /**
   * updateElemByState()
   * 1. Вначале с помощью stateForFindElem ищется элемент с указанным состоянием в списке элементов.
   * 2. Далее с помощью entityId ищется индекс нажатого (назначаемого) элемента в списке элементов.
   * 3. Далее с помощью stateForFindIndex назначается новое состояние для элемента найденного на шаге 1.
   * 4. Далее с помощью stateForClickIndex назначается новое состояние для элемента найденного на шаге 2.
   *
   * @param updateArray: IUpdateArray
   */
  public updateElemByState(updateArray: IUpdateArray): void {
    const thisList = this.list;
    const findElem = this.getElemByState(updateArray.stateForFindElem);
    if (Array.isArray(thisList) && findElem) {
      const findIndex = super.findIndex(findElem.id, thisList);
      const clickIndex = super.findIndex(updateArray.entityId, thisList);
      if (findIndex !== -1 && clickIndex !== -1) {
        thisList[findIndex]["state"] = updateArray.stateForFindIndex;
        thisList[clickIndex]["state"] = updateArray.stateForClickIndex;
      }
    }
  }

  public getElemByState(state: EEntityState): T | undefined {
    if (Array.isArray(this.list)) {
      return super.find(state, this.list);
    }
  }

  public updateElemFields(elem: TExtendsArray): void {
    if (Array.isArray(this.list) && isIModule(elem)) {
      const thisList = this.list as IModule[];
      const findIndex = super.findIndex(elem.id, thisList);
      const subsample: TModuleBodyFile = {
        header: elem.header,
        filename: elem.filename,
      };
      Object.entries(subsample).forEach(
        ([key, value]: [string, TModuleBodyFile[keyof TModuleBodyFile]]) => {
          const opa = key as keyof TModuleBodyFile;
          thisList[findIndex][opa] = value;
        }
      );

      if (isIModuleAdvanced(elem)) {
        elem;
      }

      if (isIEntranceTest(elem)) {
        elem;
      }
    }
  }

  public deleteFromList(elem: TExtendsArray): void {
    if (Array.isArray(this.list) && this.list.length !== 0) {
      const thisList = this.list;
      const findIndex = super.findIndex(elem.id, thisList);
      super.delete(findIndex, this.list);
    }
  }

  public updateList(elemToUpdate: T): void {
    if (Array.isArray(this.list)) {
      console.log("updateList() -> elemToUpdate", elemToUpdate);
      const findIndex = super.findIndex(elemToUpdate.id, this.list);
      console.log("updateList() -> findIndex", findIndex);
      this.list.splice(findIndex, 1, elemToUpdate);
      console.log("updateList() -> this.list", this.list);
    }
  }
}

export { EntityExtendedArray };
