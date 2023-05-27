import type { IEduCommonElement } from "share/types/interfaces";
import { Creator, Entity } from "@/classes";

class EntityCreator<C> extends Creator<C> {
  public factoryMethod(): IEduCommonElement<C> {
    return new Entity<C>();
  }
}

export { EntityCreator };
