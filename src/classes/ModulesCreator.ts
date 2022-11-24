import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "./Creator";
import { Modules } from "./Modules";

class ModulesCreator extends Creator {
  public factoryMethod(): IEduCommonElement {
    return new Modules();
  }
}

export { ModulesCreator };
