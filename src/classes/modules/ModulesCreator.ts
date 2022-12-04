import type { IEduCommonElement, IModule } from "@/types/interfaces";
import { Creator } from "../Creator";
import { GenericEntityClass } from "@/classes/GenericEntityClass";

class ModulesCreator extends Creator {
  public factoryMethod(): IEduCommonElement<IModule> {
    return new GenericEntityClass<IModule>();
  }
}

export { ModulesCreator };
