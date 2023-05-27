import type { IEduCommonElementDashboard } from "share/types/interfaces";

abstract class CreatorDashboard<T> {
  public abstract factoryMethod(): IEduCommonElementDashboard<T>;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorDashboard };
