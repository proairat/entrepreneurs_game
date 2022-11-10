import { EntityType, EntityState } from "@/types/enums";
import type { ICourse, ITheme } from "@/types/interfaces";

class BaseEduElement {
  public find<T extends ITheme | ICourse>(list: Array<T>): T | undefined {
    return list.find(
      (item: T) =>
        (item.type === EntityType.Topic || item.type === EntityType.Test) &&
        item.state === EntityState.Active
    );
  }
}

export { BaseEduElement };
