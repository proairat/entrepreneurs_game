import type { IEduElementCourses, IEduElementThemes } from "@/types/interfaces";

abstract class Creator {
  public abstract factoryMethod(): IEduElementCourses | IEduElementThemes;

  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { Creator };
