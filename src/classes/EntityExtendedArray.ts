import { EEntityState } from "@/types/enums";
import type { IEduElementEntityArray } from "@/types/interfaces";
import type { TExtendsArray } from "@/types/types";
import { BaseEduElement } from "@/classes/BaseEduElement";

class EntityExtendedArray<T extends TExtendsArray>
  extends BaseEduElement
  implements IEduElementEntityArray<T>
{
  list: T[];

  constructor(list: T[]) {
    super();
    this.list = list;
  }
  public updateActiveElem(entityId: number): void {
    if (Array.isArray(this.list)) {
      const modules = this.list;
      const activeElem = this.getActiveElem();

      if (Array.isArray(modules) && activeElem) {
        const activeIndex = super.findIndex(modules, activeElem.id);
        const clickIndex = super.findIndex(modules, entityId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          modules[activeIndex]["state"] = EEntityState.Default;
          modules[clickIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(): T | undefined {
    if (Array.isArray(this.list)) {
      return super.find(this.list, EEntityState.Active);
    }
  }
}

export { EntityExtendedArray };
