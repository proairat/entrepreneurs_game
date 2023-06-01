import { EEntityState } from "share/types/enums";
import { useFetchComposable } from "@/composables/use-fetch";
import type { IModule } from "share/types/interfaces";
import { BASE_URL_MODULES } from "share/api/API";

/**
 * MODULES
 */
let modulesFromDatabase: IModule[] | undefined = [];

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

if (modulesFromDatabase.length) {
  // в данном случае, первый элемент набора становится активным
  modulesFromDatabase[0].state = EEntityState.Active;
}

export { modulesFromDatabase };
