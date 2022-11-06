import { TopicState } from "@/types/enums";
import type { ICourse, ITheme } from "@/types/interfaces";

class BaseEduElement {
  public find<T extends ITheme | ICourse>(list: Array<T>): T | undefined {
    return list.find((item: T) => item.state === TopicState.Active);
  }
}

export { BaseEduElement };
