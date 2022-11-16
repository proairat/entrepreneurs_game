import type { IEduElementThemes, ITheme } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { CreatorExtended } from "./CreatorExtended";
import { ThemesExtended } from "./ThemesExtended";

class ThemesCreatorExtended extends CreatorExtended {
  list: TElemsList<number, ITheme>;

  constructor(list: TElemsList<number, ITheme>) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementThemes {
    return new ThemesExtended(this.list);
  }
}

export { ThemesCreatorExtended };
