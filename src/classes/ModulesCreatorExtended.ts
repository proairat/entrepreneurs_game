import type { IEduElementCourses, ICourse } from "@/types/interfaces";
import { CreatorExtended } from "./CreatorExtended";
import { ModulesExtended } from "./ModulesExtended";

class ModulesCreatorExtended extends CreatorExtended {
  list: ICourse[];

  constructor(list: ICourse[]) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementCourses {
    return new ModulesExtended(this.list);
  }
}

export { ModulesCreatorExtended };
