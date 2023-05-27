import type { IEduElementEntityArrayDashboard } from "share/types/interfaces";
import type { TExtendsDashboardArray } from "share/types/types";
import {
  CreatorExtendedDashboard,
  EntityExtendedArrayDashboard,
} from "@/classes";

class EntityCreatorExtendedArrayDashboard<
  C extends TExtendsDashboardArray
> extends CreatorExtendedDashboard<C> {
  list: C[];

  constructor(list: C[]) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementEntityArrayDashboard<C> {
    return new EntityExtendedArrayDashboard<C>(this.list);
  }
}

export { EntityCreatorExtendedArrayDashboard };
