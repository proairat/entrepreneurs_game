import { EEntityState } from "@/types/enums";
import type { IEduElementEntityMap } from "@/types/interfaces";
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
  public updateActiveElem(entityId: number, themeId: number): void {
    if (this.list instanceof Map) {
      const entityByModuleId = this.getListByEntityId(entityId);
      const activeElem = this.getActiveElem(entityByModuleId);

      if (Array.isArray(entityByModuleId) && activeElem) {
        const activeIndex = super.findIndex(entityByModuleId, activeElem.id);
        const clickIndex = super.findIndex(entityByModuleId, themeId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          entityByModuleId[activeIndex]["state"] = EEntityState.Default;
          entityByModuleId[clickIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(entityByModuleId: T[] | undefined): T | undefined {
    if (Array.isArray(entityByModuleId)) {
      return super.find(entityByModuleId, EEntityState.Active);
    }
  }
  public getListByEntityId(entityId: number): T[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(entityId);
    }
  }
}

export { EntityExtendedMap };
