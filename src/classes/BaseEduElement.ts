import { EEntityState } from "@/types/enums";
import type { TExtendsArray } from "@/types/types";
import type { TExtendsMap } from "@/types/types";

class BaseEduElement {
  public find<T extends TExtendsMap | TExtendsArray>(list: T[]): T | undefined {
    return list.find((item: T) => item.state === EEntityState.Active);
  }
  public findIndex<T extends TExtendsMap | TExtendsArray>(
    list: T[],
    id: number
  ): number | -1 {
    return list.findIndex((elem: T) => elem.id === id);
  }
}

export { BaseEduElement };
