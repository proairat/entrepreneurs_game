import type { IEduCommonElementDashboard } from "share/types/interfaces";
import { CreatorDashboard, EntityDashboard } from "@/classes";
import type { TExtendsDashboardArray } from "share/types/types";

class EntityCreatorDashboard<
  C extends TExtendsDashboardArray
> extends CreatorDashboard<C> {
  public factoryMethod(): IEduCommonElementDashboard<C> {
    return new EntityDashboard<C>();
  }
}

export { EntityCreatorDashboard };
