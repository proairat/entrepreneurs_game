import type {
  IEduElementModules,
  IEduElementTests,
  IEduElementThemes,
  IEduElementVideos,
} from "@/types/interfaces";

abstract class CreatorExtended {
  public abstract factoryMethod():
    | IEduElementModules
    | IEduElementThemes
    | IEduElementVideos
    | IEduElementTests;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtended };
