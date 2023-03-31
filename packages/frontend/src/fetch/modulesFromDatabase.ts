// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import { useFetchComposable } from "@/composables/use-fetch";
import type { IModule } from "share/types/interfaces";
import { URL_MODULES_IMAGES } from "@/API";

/**
 * MODULES
 */
const modulesFromDatabase: IModule[] | undefined = [];

async function fetchData() {
  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    urlConst: "/modules",
    urlVar: "",
    method: "GET",
    body: null,
  });

  await new Promise((resolve) => {
    onFetchResponse(() => {
      for (let item of data.value) {
        item.filename = `${URL_MODULES_IMAGES}/${item.filename}`;
        if (modulesFromDatabase){
          modulesFromDatabase.push(item);
        }
      }
      resolve('');
    });
  });

  onFetchError((err) => {
    console.error(`Произошла ошибка при загрузке модулей ${err}`);
  });
};

console.log('До modulesFromDatabase', modulesFromDatabase);
await fetchData();
console.log('После modulesFromDatabase', modulesFromDatabase);

export { modulesFromDatabase };
