import { EEntityStateDashboard, EEntityType } from "share/types/enums";
import type {
  IEduElementEntityArrayDashboard,
  IModule,
  IUpdateArrayDashboard,
} from "share/types/interfaces";
import type {
  TExtendsDashboardArray,
  TModuleBodyFile,
} from "share/types/types";
import { EntityDashboard } from "./EntityDashboard";

function isIModule(entity: TExtendsDashboardArray): entity is IModule {
  return (entity as IModule).type === EEntityType.Modules;
}

class EntityExtendedArrayDashboard<T extends TExtendsDashboardArray>
  extends EntityDashboard<T>
  implements IEduElementEntityArrayDashboard<T>
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
   * @param updateArray: IUpdateArrayDashboard
   */
  public updateElemByState(updateArray: IUpdateArrayDashboard): void {
    const thisList = this.list;
    const findElem = this.getElemByState(updateArray.stateForFindElem);
    if (Array.isArray(thisList) && findElem) {
      const findIndex = super.findIndexInTheListById(findElem.id);
      const clickIndex = super.findIndexInTheListById(updateArray.entityId);
      if (findIndex && findIndex !== -1 && clickIndex && clickIndex !== -1) {
        thisList[findIndex]["state"] = updateArray.stateForFindIndex;
        thisList[clickIndex]["state"] = updateArray.stateForClickIndex;
      }
    }
  }

  public getElemByState(state: EEntityStateDashboard): T | undefined {
    if (Array.isArray(this.list)) {
      return super.findElemInTheListByState(state);
    }
  }

  public updateElemFields(elem: TExtendsDashboardArray): void {
    if (Array.isArray(this.list) && isIModule(elem)) {
      const thisList = this.list as IModule[];
      const findIndex = super.findIndexInTheListById(elem.id);
      if (findIndex && findIndex !== -1) {
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
      }
    }
  }

  public deleteFromList(elem: TExtendsDashboardArray): void {
    if (Array.isArray(this.list) && this.list.length !== 0) {
      const findIndex = super.findIndexInTheListById(elem.id);
      if (findIndex && findIndex !== -1) {
        super.deleteAnElementFromTheList(findIndex);
      }
    }
  }

  public updateList(elemToUpdate: T): void {
    if (Array.isArray(this.list)) {
      console.log("updateList() -> elemToUpdate", elemToUpdate);
      const findIndex = super.findIndexInTheListById(elemToUpdate.id);
      if (findIndex && findIndex !== -1) {
        console.log("updateList() -> findIndex", findIndex);
        this.list.splice(findIndex, 1, elemToUpdate);
        console.log("updateList() -> this.list", this.list);
      }
    }
  }
}

export { EntityExtendedArrayDashboard };
