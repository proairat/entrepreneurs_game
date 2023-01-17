import type { EEntityState } from "@/types/enums";
import type { TExtendsArray } from "@/types/types";
import type { TExtendsMap } from "@/types/types";

class BaseEduElement {
  public find<T extends TExtendsMap | TExtendsArray>(
    state: EEntityState,
    list: T[]
  ): T | undefined {
    return list.find((item: T) => item.state === state);
  }
  public findIndex<T extends TExtendsMap | TExtendsArray>(
    id: number,
    list: T[]
  ): number | -1 {
    return list.findIndex((item: T) => item.id === id);
  }
  public filter<T extends TExtendsMap | TExtendsArray>(
    state: EEntityState,
    list: T[]
  ): T[] {
    return list.filter((item: T) => item.state === state);
  }
}

export { BaseEduElement };
