import type { EEntityState } from "@/types/enums";
import type { TExtendsArray } from "@/types/types";
import type { TExtendsMap } from "@/types/types";

class BaseEduElement {
  public find<T extends TExtendsMap | TExtendsArray>(
    list: T[],
    entityState: EEntityState
  ): T | undefined {
    return list.find((item: T) => item.state === entityState);
  }
  public findIndex<T extends TExtendsMap | TExtendsArray>(
    list: T[],
    id: number
  ): number | -1 {
    return list.findIndex((item: T) => item.id === id);
  }
}

export { BaseEduElement };
