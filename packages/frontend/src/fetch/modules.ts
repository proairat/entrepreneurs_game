// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import type { IModule } from "share/types/interfaces";

/**
 * MODULES
 */
const modules: IModule[] | undefined = [];

modules.push(
  {
    id: 1,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/1.png",
    alt: "Модуль 1",
    header: "Основы предпринимательства",
    title: "Модуль 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: EEntityState.Active,
  },
  {
    id: 2,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/2.png",
    alt: "Модуль 2",
    header: "Грантовое проектирование",
    title: "Модуль 2",
    duration: "1 час 20 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 3,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/3.png",
    alt: "Модуль 3",
    header: "Технологическое предпринимательство",
    title: "Модуль 3",
    duration: "2 часа 15 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 4,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/4.png",
    alt: "Модуль 4",
    header: "Массовое предпринимательство",
    title: "Модуль 4",
    duration: "43 минуты",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 5,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/5.png",
    alt: "Модуль 5",
    header: "Креативные индустрии",
    title: "Модуль 5",
    duration: "37 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 6,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/6.png",
    alt: "Модуль 6",
    header: "Социальное предпринимательство",
    title: "Модуль 6",
    duration: "2 часа 7 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 7,
    type: EEntityType.Modules,
    filename: "../assets/modules/cardCover/7.png",
    alt: "Модуль 7",
    header: "Итоговое тестирование",
    title: "Модуль 7",
    duration: "30 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  }
);

export { modules };
