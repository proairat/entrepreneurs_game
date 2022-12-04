import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "@/classes/Creator";
import { Entity } from "@/classes/Entity";

class EntityCreator<T> extends Creator<T> {
  public factoryMethod(): IEduCommonElement<T> {
    return new Entity<T>();
  }
}

export { EntityCreator };
