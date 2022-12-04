import { EEntityState } from "@/types/enums";
import type { IEduElementTestsContent, ITestContent } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { BaseEduElement } from "../BaseEduElement";

class TestsContentExtended
  extends BaseEduElement
  implements IEduElementTestsContent
{
  list: TElemsList<number, ITestContent>;

  constructor(list: TElemsList<number, ITestContent>) {
    super();
    this.list = list;
  }
  public updateActiveElem(
    themeId: number,
    elems: ITestContent[],
    testId: number
  ): void {
    if (this.list instanceof Map) {
      const activeElem = this.getActiveElem(themeId);

      if (Array.isArray(elems) && activeElem !== undefined) {
        const activeIndex = super.findIndex(elems, activeElem.id);
        const clickIndex = super.findIndex(elems, testId);

        if (activeIndex !== -1 && clickIndex !== -1) {
          elems[activeIndex]["state"] = EEntityState.Default;
          elems[clickIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(themeId: number): ITestContent | undefined {
    if (this.list instanceof Map) {
      const list = this.getTestsByModuleId(themeId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getTestsByModuleId(themeId: number): ITestContent[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(themeId);
    }
  }
}

export { TestsContentExtended };
