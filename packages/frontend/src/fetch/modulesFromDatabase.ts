// Mock object represent database data
import { EEntityState } from "share/types/enums";
import { useFetchComposable } from "@/composables/use-fetch";
import type { IModule } from "share/types/interfaces";

/**
 * MODULES
 */
let modulesFromDatabase: IModule[] | undefined = [];

async function fetchData() {
  const { data, onFetchResponse, onFetchError } = useFetchComposable({
    urlConst: "/modules",
    urlVar: "",
    method: "GET",
    body: null,
  });
  await new Promise((resolve) => {
    onFetchResponse(() => {
      modulesFromDatabase = data.value;
      resolve("");
    });
  });
  onFetchError((err) => {
    console.error(`Произошла ошибка при загрузке модулей ${err}`);
  });
}

await fetchData();

if (modulesFromDatabase.length) { 
  modulesFromDatabase[0].state = EEntityState.Active;
}

export { modulesFromDatabase };
