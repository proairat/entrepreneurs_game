import type { IEduElementEntityArray } from "@/types/interfaces";
import type { TExtendsArray } from "@/types/types";
import { CreatorExtended, EntityExtendedArray } from "@/classes";

class EntityCreatorExtendedArray<
  C extends TExtendsArray
> extends CreatorExtended<C> {
  list: C[];

  constructor(list: C[]) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementEntityArray<C> {
    return new EntityExtendedArray<C>(this.list);
  }
}

export { EntityCreatorExtendedArray };
