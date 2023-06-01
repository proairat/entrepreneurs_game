import { EEntityState, EEntityStateDashboard } from "share/types/enums";
import { useFetchComposable } from "@/composables/use-fetch";
import type { IVideoDB } from "share/types/interfaces";
import { BASE_URL_VIDEOS } from "share/api/API";

/**
 * VIDEOS
 */
let videosFromDatabase: IVideoDB[] | undefined = [];

async function fetchData() {
  const { data, onFetchResponse, onFetchError } = useFetchComposable({
    url: BASE_URL_VIDEOS,
  });
  await new Promise((resolve) => {
    onFetchResponse(() => {
      videosFromDatabase = data.value;
      resolve("");
    });
  });
  onFetchError((err) => {
    console.error(`Произошла ошибка при загрузке видео из базы данных ${err}`);
  });
}

await fetchData();

/*
if (videosFromDatabase.length) {
  // в данном случае, первый элемент набора становится активным
  videosFromDatabase[0].state = EEntityStateDashboard.Active;
}
*/

export { videosFromDatabase };
