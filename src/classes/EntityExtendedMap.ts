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
  public updateActiveElem(moduleId: number, elems: T[], themeId: number): void {
    if (this.list instanceof Map) {
      const activeElem = this.getActiveElem(moduleId);

      if (Array.isArray(elems) && activeElem) {
        const activeIndex = super.findIndex(elems, activeElem.id);
        const clickThemeIndex = super.findIndex(elems, themeId);

        if (activeIndex !== -1 && clickThemeIndex !== -1) {
          elems[activeIndex]["state"] = EEntityState.Default;
          elems[clickThemeIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(moduleId: number): T | undefined {
    if (this.list instanceof Map) {
      const list = this.getEntityByModuleId(moduleId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getEntityByModuleId(moduleId: number): T[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(moduleId);
    }
  }
}

export { EntityExtendedMap };
