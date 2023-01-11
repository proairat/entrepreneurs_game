import type { EEntityState } from "@/types/enums";
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
  public updateElemByState(updateArray: IUpdateArray): void {
    if (Array.isArray(this.list)) {
      const thisList = this.list;
      const currentElem = this.getElemByState(updateArray.stateForCurrentElem);
      if (Array.isArray(thisList) && currentElem) {
        const currentIndex = super.findIndex(currentElem.id, thisList);
        const clickIndex = super.findIndex(updateArray.entityId, thisList);
        if (currentIndex !== -1 && clickIndex !== -1) {
          thisList[currentIndex]["state"] = updateArray.stateForCurrentIndex;
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
}

export { EntityExtendedArray };
