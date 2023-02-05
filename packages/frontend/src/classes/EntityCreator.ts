import type { IEduCommonElement } from "share/types/interfaces";
import { Creator } from "@/classes/Creator";
import { Entity } from "@/classes/Entity";

class EntityCreator<C> extends Creator<C> {
  public factoryMethod(): IEduCommonElement<C> {
    return new Entity<C>();
  }
}

export { EntityCreator };
