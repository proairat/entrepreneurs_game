import type { IEduElementEntityMap } from "@/types/interfaces";
import type { TElemsList, TExtendsMap } from "@/types/types";
import { CreatorExtended, EntityExtendedMap } from "@/classes";

class EntityCreatorExtendedMap<
  C extends TExtendsMap
> extends CreatorExtended<C> {
  list: TElemsList<number, C>;

  constructor(list: TElemsList<number, C>) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementEntityMap<C> {
    return new EntityExtendedMap<C>(this.list);
  }
}

export { EntityCreatorExtendedMap };
