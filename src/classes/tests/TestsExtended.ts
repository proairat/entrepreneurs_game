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
    themeId: number,
    elems: ITest[],
    testId: number
  ): void {
    if (this.list instanceof Map) {
      const activeElem = this.getActiveElem(themeId);

      if (Array.isArray(elems) && activeElem !== undefined) {
        const activeThemeIndex = super.findIndex(elems, activeElem.id);
        const clickThemeIndex = super.findIndex(elems, testId);

        if (activeThemeIndex !== -1 && clickThemeIndex !== -1) {
          elems[activeThemeIndex]["state"] = EEntityState.Default;
          elems[clickThemeIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(themeId: number): ITest | undefined {
    if (this.list instanceof Map) {
      const list = this.getTestsByThemeId(themeId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getTestsByThemeId(themeId: number): ITest[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(themeId);
    }
  }
}

export { TestsExtended };
