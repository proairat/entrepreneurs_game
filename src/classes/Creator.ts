import type { IEduCommonElement } from "@/types/interfaces";

abstract class Creator<T> {
  public abstract factoryMethod(): IEduCommonElement<T>;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { Creator };
