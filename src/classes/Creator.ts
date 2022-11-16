import type { IEduCommonElement } from "@/types/interfaces";

abstract class Creator {
  public abstract factoryMethod(): IEduCommonElement;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { Creator };
