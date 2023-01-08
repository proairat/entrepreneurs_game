import { EEntityState } from "@/types/enums";
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
  public updateActiveElem(updateMap: IUpdateMap): void {
    if (this.list instanceof Map) {
      const listByEntityId = this.getListByEntityId(
        updateMap.entityIdForListByEntityId
      );
      const activeElem = this.getActiveElem(listByEntityId);

      if (Array.isArray(listByEntityId) && activeElem) {
        const activeIndex = super.findIndex(listByEntityId, activeElem.id);
        const clickIndex = super.findIndex(
          listByEntityId,
          updateMap.entityIdForClickIndex
        );

        if (activeIndex !== -1 && clickIndex !== -1) {
          listByEntityId[activeIndex]["state"] = updateMap.activeIndexState;
          listByEntityId[clickIndex]["state"] = updateMap.clickIndexState;
        }
      }
    }
  }
  public getActiveElem(listByEntityId: T[] | undefined): T | undefined {
    if (Array.isArray(listByEntityId)) {
      return super.find(listByEntityId, EEntityState.Active);
    }
  }
  public getListByEntityId(entityId: number): T[] | undefined {
    if (this.list instanceof Map && entityId) {
      return this.list.get(entityId);
    }
  }
}

export { EntityExtendedMap };
