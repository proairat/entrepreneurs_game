// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import type { IModule } from "share/types/interfaces";
import { useFetchComposable } from "@/composables/use-fetch";
import {
  BASE_URL_MODULES,
  BASE_URL_ASSETS_MODULES_CARDCOVER,
} from "share/api/API";

/**
 * MODULES
 */
let modulesFromDatabase: IModule[] | undefined = [];
const modules: IModule[] | undefined = [];

async function fetchData() {
  const { data, onFetchResponse, onFetchError } = useFetchComposable({
    url: BASE_URL_MODULES,
  });
  await new Promise((resolve) => {
    onFetchResponse(() => {
      modulesFromDatabase = data.value;
      resolve("");
    });
  });
  onFetchError((err) => {
    console.error(`Произошла ошибка при загрузке модулей из базы данных${err}`);
  });
}

await fetchData();

modules.push(
  {
    id: 1,
    type: EEntityType.Modules,
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
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
    filename: `${BASE_URL_ASSETS_MODULES_CARDCOVER}/image_not_found.png`,
    alt: "Модуль 7",
    header: "Итоговое тестирование",
    title: "Модуль 7",
    duration: "30 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  }
);

modulesFromDatabase.forEach((value, index) => {
  const vs = modules.find((item) => item.id === index + 1);
  vs!.filename = `${BASE_URL_ASSETS_MODULES_CARDCOVER}/${value.filename}`;
  vs!.header = value.header;
});

export { modules };
