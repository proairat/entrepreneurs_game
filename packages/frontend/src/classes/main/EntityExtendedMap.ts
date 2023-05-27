import type { EEntityState } from "share/types/enums";
import type {
  IEduElementEntityMap,
  IUpdateMapElem,
  IUpdateMapElements,
} from "share/types/interfaces";
import type { TElemsList, TExtendsMap } from "share/types/types";
import { BaseEduElement } from "@/classes";

class EntityExtendedMap<T extends TExtendsMap>
  extends BaseEduElement
  implements IEduElementEntityMap<T>
{
  list: TElemsList<number, T>;

  constructor(list: TElemsList<number, T>) {
    super();
    this.list = list;
  }

  public updateElemByState(updateMapElem: IUpdateMapElem): void {
    if (this.list instanceof Map) {
      const listByEntityId = this.getListByEntityId(
        updateMapElem.entityIdForListByEntityId
      );
      const findElem = this.getElemByState(
        updateMapElem.stateForFindElem,
        listByEntityId
      );
      if (Array.isArray(listByEntityId) && findElem) {
        const findIndex = super.findIndex(findElem.id, listByEntityId);
        const clickIndex = super.findIndex(
          updateMapElem.entityIdForClickIndex,
          listByEntityId
        );
        if (findIndex !== -1 && clickIndex !== -1) {
          listByEntityId[findIndex]["state"] = updateMapElem.stateForFindIndex;
          listByEntityId[clickIndex]["state"] =
            updateMapElem.stateForClickIndex;
        }
      }
    }
  }

  public updateElementsByState(updateMapElements: IUpdateMapElements) {
    if (this.list instanceof Map) {
      const listByEntityId = this.getListByEntityId(
        updateMapElements.entityIdForListByEntityId
      );

      const listByEntityIdFiltered = this.getElementsByState(
        updateMapElements.stateForListByEntityIdFiltered,
        listByEntityId
      );

      if (
        Array.isArray(listByEntityId) &&
        Array.isArray(listByEntityIdFiltered)
      ) {
        for (let i = 0; i < listByEntityId.length; i++) {
          if (listByEntityIdFiltered.includes(listByEntityId[i])) {
            listByEntityId[i]["state"] =
              updateMapElements.stateForListByEntityId;
          }
        }
      }
    }
  }

  public getElemByState(
    state: EEntityState,
    listByEntityId: T[] | undefined
  ): T | undefined {
    if (Array.isArray(listByEntityId)) {
      return super.find(state, listByEntityId);
    }
  }

  public getElementsByState(
    state: EEntityState,
    listByEntityId: T[] | undefined
  ): T[] | undefined {
    if (Array.isArray(listByEntityId)) {
      return super.filter(state, listByEntityId);
    }
  }

  public getListByEntityId(entityId: number): T[] | undefined {
    if (this.list instanceof Map && entityId) {
      return this.list.get(entityId);
    }
  }
}

export { EntityExtendedMap };
