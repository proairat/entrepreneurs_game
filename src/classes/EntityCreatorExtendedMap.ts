import type { IEduElementEntityMap } from "@/types/interfaces";
import type { TElemsList, TExtendsMap } from "@/types/types";
import { CreatorExtended } from "@/classes/CreatorExtended";
import { EntityExtendedMap } from "./EntityExtendedMap";

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
