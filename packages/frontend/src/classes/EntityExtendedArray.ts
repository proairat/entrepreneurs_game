import { EEntityState, EEntityType } from "share/types/enums";
import type {
  IEduElementEntityArray,
  IEntranceTest,
  IModule,
  IModuleAdvanced,
  IUpdateArray,
} from "share/types/interfaces";
import type {
  TExtendsArray,
  TExtendsArrayCombination,
  TModuleBodyFile,
} from "share/types/types";
import { BaseEduElement } from "@/classes/BaseEduElement";

function isIModule(entity: TExtendsArray): entity is IModule {
  return (entity as IModule).type === EEntityType.Modules;
}

function isIModuleAdvanced(entity: TExtendsArray): entity is IModuleAdvanced {
  return (entity as IModuleAdvanced).type === EEntityType.ModulesAdvanced;
}

function isIEntranceTest(entity: TExtendsArray): entity is IEntranceTest {
  return (entity as IEntranceTest).type === EEntityType.EntranceTests;
}

class EntityExtendedArray<T extends TExtendsArrayCombination>
  extends BaseEduElement
  implements IEduElementEntityArray<T>
{
  list: T[];

  constructor(list: T[]) {
    super();
    this.list = list;
  }

  public updateElemByState(updateArray: IUpdateArray): void {
    if (Array.isArray(this.list)) {
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
  }

  public getElemByState(state: EEntityState): T | undefined {
    if (Array.isArray(this.list)) {
      return super.find(state, this.list);
    }
  }

  public updateElemFields(elem: TExtendsArray): void {
    if (Array.isArray(this.list)) {
      const thisList = this.list;
      const findIndex = super.findIndex(elem.id, thisList);
      if (isIModule(elem)) {
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

      if (isIModuleAdvanced(elem)) {
        elem;
      }

      if (isIEntranceTest(elem)) {
        elem;
      }
    }
  }
}

export { EntityExtendedArray };
