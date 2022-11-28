import { EEntityState } from "@/types/enums";
import type { IEduElementThemes, ITheme } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { BaseEduElement } from "./BaseEduElement";

class ThemesExtended extends BaseEduElement implements IEduElementThemes {
  list: TElemsList<number, ITheme>;

  constructor(list: TElemsList<number, ITheme>) {
    super();
    this.list = list;
  }
  public updateActiveElem(
    moduleId: number,
    elems: ITheme[],
    themeId: number
  ): void {
    if (this.list instanceof Map) {
      const th = elems;
      const activeElem = this.getActiveElem(moduleId);

      if (Array.isArray(th) && activeElem !== undefined) {
        const activeThemeIndex = super.findIndex(th, activeElem.id);
        const clickThemeIndex = super.findIndex(th, themeId);

        if (activeThemeIndex !== -1 && clickThemeIndex !== -1) {
          th[activeThemeIndex]["state"] = EEntityState.Default;
          th[clickThemeIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(moduleId: number): ITheme | undefined {
    if (this.list instanceof Map) {
      const list = this.getThemesByModuleId(moduleId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getThemesByModuleId(moduleId: number): ITheme[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(moduleId);
    }
  }
}

export { ThemesExtended };
