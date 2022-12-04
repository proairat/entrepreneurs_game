import type { IEduCommonElement, ITheme } from "@/types/interfaces";
import { Creator } from "../Creator";
import { GenericEntityClass } from "@/classes/GenericEntityClass";

class ThemesCreator extends Creator {
  public factoryMethod(): IEduCommonElement<ITheme> {
    return new GenericEntityClass<ITheme>();
  }
}

export { ThemesCreator };
