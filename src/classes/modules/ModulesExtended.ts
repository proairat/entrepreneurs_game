import { EEntityState } from "@/types/enums";
import type { IModule, IEduElementModules } from "@/types/interfaces";
import { BaseEduElement } from "../BaseEduElement";

class ModulesExtended extends BaseEduElement implements IEduElementModules {
  list: IModule[];

  constructor(list: IModule[]) {
    super();
    this.list = list;
  }
  public updateActiveElem(moduleId: number, elems: IModule[]): void {
    if (Array.isArray(this.list)) {
      const activeElem = this.getActiveElem();

      if (Array.isArray(elems) && activeElem !== undefined) {
        const activeModuleIndex = super.findIndex(elems, activeElem.id);
        const clickModuleIndex = super.findIndex(elems, moduleId);

        if (activeModuleIndex !== -1 && clickModuleIndex !== -1) {
          elems[activeModuleIndex]["state"] = EEntityState.Default;
          elems[clickModuleIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(): IModule | undefined {
    if (Array.isArray(this.list)) {
      return super.find(this.list);
    }
  }
}

export { ModulesExtended };
