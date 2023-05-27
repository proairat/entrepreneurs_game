import type {
  IEduElementEntityArray,
  IEduElementEntityMap,
} from "share/types/interfaces";

abstract class CreatorExtended<T> {
  public abstract factoryMethod():
    | IEduElementEntityArray<T>
    | IEduElementEntityMap<T>;
  public getEduElement() {
    const eduElement = this.factoryMethod();
    return eduElement;
  }
}

export { CreatorExtended };
