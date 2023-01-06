import { EEntityState } from "@/types/enums";
import type { IEduElementEntityArray, IUpdateArray } from "@/types/interfaces";
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
  public updateActiveElem(updateArray: IUpdateArray): void {
    if (Array.isArray(this.list)) {
      const thisList = this.list;
      const activeElem = this.getActiveElem();

      if (Array.isArray(thisList) && activeElem) {
        const activeIndex = super.findIndex(thisList, activeElem.id);
        const clickIndex = super.findIndex(thisList, updateArray.entityId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          thisList[activeIndex]["state"] = updateArray.activeIndexState;
          thisList[clickIndex]["state"] = updateArray.clickIndexState;
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
