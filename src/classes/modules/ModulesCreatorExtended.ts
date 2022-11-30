import type { IEduElementModules, IModule } from "@/types/interfaces";
import { CreatorExtended } from "../CreatorExtended";
import { ModulesExtended } from "./ModulesExtended";

class ModulesCreatorExtended extends CreatorExtended {
  list: IModule[];

  constructor(list: IModule[]) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementModules {
    return new ModulesExtended(this.list);
  }
}

export { ModulesCreatorExtended };
