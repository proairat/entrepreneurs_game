import { EEntityState, EEntityType } from "@/types/enums";
import type { IEntranceTest } from "@/types/interfaces";

/**
 * ENTRANCE TESTS
 */
const entranceTests: IEntranceTest[] | undefined = [];
entranceTests.push(
  {
    id: 1,
    type: EEntityType.EntranceTests,
    title: "Готов ли ты к предпринимательству?",
    description: "Описание входного тестирования",
    state: EEntityState.Active,
  },
  {
    id: 2,
    type: EEntityType.EntranceTests,
    title: "Модуль входного тестирования 2",
    description: "Описание входного тестирования",
    state: EEntityState.Default,
  }
);

export { entranceTests };
