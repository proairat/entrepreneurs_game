import type { IEduElementEntityArrayDashboard } from "share/types/interfaces";

abstract class CreatorExtendedDashboard<T> {
  public abstract factoryMethod(): IEduElementEntityArrayDashboard<T>;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtendedDashboard };
