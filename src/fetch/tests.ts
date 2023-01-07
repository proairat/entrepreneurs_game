// Mock object represent database data
import { EEntityState, EEntityType } from "@/types/enums";
import type { ITest } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * TESTS
 */
const tests: TElemsList<number, ITest> | undefined = new Map();
// id_module 1
tests.set(1, [
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
// id_module 2
tests.set(2, [
  {
    id: 39,
    type: EEntityType.Tests,
    title: "Заголовок четвёртого теста id 39",
    description: "Описание четвёртого теста",
    state: EEntityState.Active,
  },
]);

export { tests };
