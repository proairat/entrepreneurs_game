import type {
  IEduElementModules,
  IEduElementTests,
  IEduElementTestsContent,
  IEduElementThemes,
  IEduElementVideos,
} from "@/types/interfaces";

abstract class CreatorExtended {
  public abstract factoryMethod():
    | IEduElementModules
    | IEduElementThemes
    | IEduElementVideos
    | IEduElementTests
    | IEduElementTestsContent;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtended };
