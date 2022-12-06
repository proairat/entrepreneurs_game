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
  public updateActiveElem(moduleId: number, elems: T[]): void {
    if (Array.isArray(this.list)) {
      const activeElem = this.getActiveElem();

      if (Array.isArray(elems) && activeElem) {
        const activeIndex = super.findIndex(elems, activeElem.id);
        const clickIndex = super.findIndex(elems, moduleId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          elems[activeIndex]["state"] = EEntityState.Default;
          elems[clickIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(): T | undefined {
    if (Array.isArray(this.list)) {
      return super.find(this.list);
    }
  }
}

export { EntityExtendedArray };
