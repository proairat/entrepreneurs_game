import type { IEduElementThemes } from "@/types/interfaces";
import { Creator } from "./Creator";
import { Themes } from "./Themes";

class ThemesCreator extends Creator {
  public factoryMethod(): IEduElementThemes {
    return new Themes();
  }
}

export { ThemesCreator };
