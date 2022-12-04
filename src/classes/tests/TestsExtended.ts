import { EEntityState } from "@/types/enums";
import type { IEduElementTests, ITest } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { BaseEduElement } from "../BaseEduElement";

class TestsExtended extends BaseEduElement implements IEduElementTests {
  list: TElemsList<number, ITest>;

  constructor(list: TElemsList<number, ITest>) {
    super();
    this.list = list;
  }
  public updateActiveElem(
    moduleId: number,
    elems: ITest[],
    themeId: number
  ): void {
    if (this.list instanceof Map) {
      const activeElem = this.getActiveElem(moduleId);

      if (Array.isArray(elems) && activeElem !== undefined) {
        const activeIndex = super.findIndex(elems, activeElem.id);
        const clickIndex = super.findIndex(elems, themeId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          elems[activeIndex]["state"] = EEntityState.Default;
          elems[clickIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(moduleId: number): ITest | undefined {
    if (this.list instanceof Map) {
      const list = this.getTestsByModuleId(moduleId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getTestsByModuleId(moduleId: number): ITest[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(moduleId);
    }
  }
}

export { TestsExtended };
