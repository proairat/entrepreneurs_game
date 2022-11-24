import type { ICourse, IEduElementCourses } from "@/types/interfaces";
import { BaseEduElement } from "./BaseEduElement";

class ModulesExtended extends BaseEduElement implements IEduElementCourses {
  list: ICourse[];

  constructor(list: ICourse[]) {
    super();
    this.list = list;
  }
  public updateActiveElem(moduleId: number, elems: ICourse[]): void {
    if (Array.isArray(this.list)) {
      const md = elems;
      const activeElem = this.getActiveElem();

      if (Array.isArray(md) && activeElem !== undefined) {
        const activeModuleIndex = super.findIndex(md, activeElem.id);
        const clickModuleIndex = super.findIndex(md, moduleId);

        if (activeModuleIndex !== -1 && clickModuleIndex !== -1) {
          md[activeModuleIndex]["state"] = "default";
          md[clickModuleIndex]["state"] = "active";
        }
      }
    }
  }
  public getActiveElem(): ICourse | undefined {
    if (Array.isArray(this.list)) {
      return super.find(this.list);
    }
  }
}

export { ModulesExtended };
