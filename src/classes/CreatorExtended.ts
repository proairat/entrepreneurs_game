import type {
  IEduElementCourses,
  IEduElementThemes,
  IEduElementVideos,
} from "@/types/interfaces";

abstract class CreatorExtended {
  public abstract factoryMethod():
    | IEduElementCourses
    | IEduElementThemes
    | IEduElementVideos;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtended };
