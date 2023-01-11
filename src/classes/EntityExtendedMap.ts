import type { EEntityState } from "@/types/enums";
import type { IEduElementEntityMap, IUpdateMap } from "@/types/interfaces";
import type { TElemsList, TExtendsMap } from "@/types/types";
import { BaseEduElement } from "@/classes/BaseEduElement";

class EntityExtendedMap<T extends TExtendsMap>
  extends BaseEduElement
  implements IEduElementEntityMap<T>
{
  list: TElemsList<number, T>;

  constructor(list: TElemsList<number, T>) {
    super();
    this.list = list;
  }
  public updateElemByState(updateMap: IUpdateMap): void {
    if (this.list instanceof Map) {
      const listByEntityId = this.getListByEntityId(
        updateMap.entityIdForListByEntityId
      );
      const currentElem = this.getElemByState(
        updateMap.stateForCurrentElem,
        listByEntityId
      );
      if (Array.isArray(listByEntityId) && currentElem) {
        const currentIndex = super.findIndex(currentElem.id, listByEntityId);
        const clickIndex = super.findIndex(
          updateMap.entityIdForClickIndex,
          listByEntityId
        );
        if (currentIndex !== -1 && clickIndex !== -1) {
          listByEntityId[currentIndex]["state"] =
            updateMap.stateForCurrentIndex;
          listByEntityId[clickIndex]["state"] = updateMap.stateForClickIndex;
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
  public getListByEntityId(entityId: number): T[] | undefined {
    if (this.list instanceof Map && entityId) {
      return this.list.get(entityId);
    }
  }
}

export { EntityExtendedMap };
