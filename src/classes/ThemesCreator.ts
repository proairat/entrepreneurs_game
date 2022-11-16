import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "./Creator";
import { Themes } from "./Themes";

class ThemesCreator extends Creator {
  public factoryMethod(): IEduCommonElement {
    return new Themes();
  }
}

export { ThemesCreator };
