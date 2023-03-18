// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import type { IModuleAdvanced } from "share/types/interfaces";

/**
 * MODULES ADVANCED
 */
const modulesAdvanced: IModuleAdvanced[] | undefined = [];
modulesAdvanced.push(
  {
    id: 8,
    type: EEntityType.ModulesAdvanced,
    path: "../assets/modulesAdvanced/cardCover/1.png",
    alt: "Модуль углубленный 1",
    header: "Углубленный курс",
    title: "Модуль углубленный 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: EEntityState.Blocked,
    visibility: "visible",
    order: 1,
  },
  {
    id: 8,
    type: EEntityType.ModulesAdvanced,
    path: "../assets/modulesAdvanced/cardCover/1.png",
    alt: "Модуль углубленный 1",
    header: "Углубленный курс",
    title: "Модуль углубленный 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: EEntityState.Blocked,
    visibility: "hidden",
    order: 2,
  },
  {
    id: 8,
    type: EEntityType.ModulesAdvanced,
    path: "../assets/modulesAdvanced/cardCover/1.png",
    alt: "Модуль углубленный 1",
    header: "Углубленный курс",
    title: "Модуль углубленный 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: EEntityState.Blocked,
    visibility: "hidden",
    order: 3,
  }
);

export { modulesAdvanced };
