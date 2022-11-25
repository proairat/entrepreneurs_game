import type {
  IEduElementModules,
  IEduElementThemes,
  IEduElementVideos,
} from "@/types/interfaces";

abstract class CreatorExtended {
  public abstract factoryMethod():
    | IEduElementModules
    | IEduElementThemes
    | IEduElementVideos;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtended };
