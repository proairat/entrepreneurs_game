import { EEntityState, EEntityType } from "@/types/enums";
import type { IEduCommonElement, ITest } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

class Tests implements IEduCommonElement {
  list: TElemsList<number, ITest> | undefined;

  public createList() {
    if (this.list === undefined) {
      this.list = new Map();
    }
    return this.list;
  }
  public addToList(): void {
    if (this.list instanceof Map && this.list.size === 0) {
      this.list.set(1, [
        {
          id: 7,
          type: EEntityType.Tests,
          title: "Заголовок первого теста id 7",
          description: "Описание первого теста",
          state: EEntityState.Active,
        },
        {
          id: 14,
          type: EEntityType.Tests,
          title: "Заголовок второго теста id 14",
          description: "Описание второго теста",
          state: EEntityState.Default,
        },
        {
          id: 28,
          type: EEntityType.Tests,
          title: "Заголовок третьего теста id 28",
          description: "Описание третьего теста",
          state: EEntityState.Default,
        },
      ]);
      this.list.set(2, [
        {
          id: 39,
          type: EEntityType.Tests,
          title: "Заголовок четвёртого теста id 39",
          description: "Описание четвёртого теста",
          state: EEntityState.Active,
        },
      ]);
    }
  }
  public getList() {
    return this.list;
  }
}

export { Tests };
