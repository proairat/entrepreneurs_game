import { EEntityState } from "@/types/enums";
import type { IModule, ITest, ITheme, IVideo } from "@/types/interfaces";

class BaseEduElement {
  public find<T extends IModule | ITheme | IVideo | ITest>(
    list: Array<T>
  ): T | undefined {
    return list.find((item: T) => item.state === EEntityState.Active);
  }
  public findIndex<T extends IModule | ITheme | IVideo | ITest>(
    list: Array<T>,
    id: number
  ): number | -1 {
    return list.findIndex((elem: T) => elem.id === id);
  }
}

export { BaseEduElement };
