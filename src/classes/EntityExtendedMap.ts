import type { EEntityState } from "@/types/enums";
import type {
  IEduElementEntityMap,
  IUpdateMapElem,
  IUpdateMapElements,
} from "@/types/interfaces";
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

  public updateElemByState(updateMapElem: IUpdateMapElem): void {
    if (this.list instanceof Map) {
      const listByEntityId = this.getListByEntityId(
        updateMapElem.entityIdForListByEntityId
      );
      const currentElem = this.getElemByState(
        updateMapElem.stateForCurrentElem,
        listByEntityId
      );
      if (Array.isArray(listByEntityId) && currentElem) {
        const currentIndex = super.findIndex(currentElem.id, listByEntityId);
        const clickIndex = super.findIndex(
          updateMapElem.entityIdForClickIndex,
          listByEntityId
        );
        if (currentIndex !== -1 && clickIndex !== -1) {
          listByEntityId[currentIndex]["state"] =
            updateMapElem.stateForCurrentIndex;
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

      /*return eduElementTestsAnswersExtended.getElementsByState(
      EEntityState.Unlocked,
      getTestsAnswersByQuestionId(questionId)
      )*/

      console.log(
        "BEFORE updateElementsByState() -> listByEntityId",
        listByEntityId
      );
      if (
        Array.isArray(listByEntityId) &&
        Array.isArray(listByEntityIdFiltered)
      ) {
        for (let i = 0; i < listByEntityId.length; i++) {
          const elem = listByEntityId[i];

          if (listByEntityIdFiltered.includes(elem)) {
            listByEntityId[i]["state"] =
              updateMapElements.stateForListByEntityId;
          }
        }

        console.log(
          "AFTER updateElementsByState() -> listByEntityId",
          listByEntityId
        );
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
