import type { EEntityStateDashboard } from "share/types/enums";
import type { IEduCommonElementDashboard } from "share/types/interfaces";
import type { TExtendsDashboardArray } from "share/types/types";

class EntityDashboard<T extends TExtendsDashboardArray>
  implements IEduCommonElementDashboard<T>
{
  list: T[] | undefined;

  public createTheList(fromDB: T[]): T[] | undefined {
    if (this.list === undefined && fromDB instanceof Array) {
      this.list = [];
      return this.list;
    }
  }

  public fillTheList(fromDB: T[]): void {
    if (
      Array.isArray(this.list) &&
      fromDB instanceof Array &&
      this.list.length === 0
    ) {
      for (let i = 0; i < fromDB.length; i++) {
        this.list.push(fromDB[i]);
      }
    }
  }

  public addElemToTheList(elemToAdd: T): T[] | undefined {
    if (Array.isArray(this.list)) {
      this.list.push(elemToAdd);
      return this.list;
    }
  }

  public getTheList(): T[] | undefined {
    return this.list;
  }

  public findElemInTheListByState(state: EEntityStateDashboard): T | undefined {
    if (Array.isArray(this.list)) {
      return this.list.find((item: T) => item.state === state);
    }
  }

  public findIndexInTheListById(id: number): number | undefined {
    if (Array.isArray(this.list)) {
      return this.list.findIndex((item: T) => item.id === id);
    }
  }

  public filterElemsInTheListByState(
    state: EEntityStateDashboard
  ): T[] | undefined {
    if (Array.isArray(this.list)) {
      return this.list.filter((item: T) => item.state === state);
    }
  }

  public replaceAnElementFromTheList(
    index: number,
    elemToReplace: T
  ): T[] | undefined {
    if (Array.isArray(this.list)) {
      return this.list.splice(index, 1, elemToReplace);
    }
  }

  public deleteAnElementFromTheList(index: number, count = 1): T[] | undefined {
    if (Array.isArray(this.list)) {
      return this.list.splice(index, count);
    }
  }
}

export { EntityDashboard };
