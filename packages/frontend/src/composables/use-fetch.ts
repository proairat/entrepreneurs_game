// import { ref, computed } from 'vue';
import { useFetch } from "@vueuse/core";
import { BASE_URL } from "../API";

export function useFetchComposable(
  urlConst: string,
  urlVar: string,
  method: string,
  body: BodyInit | null
) {
  const url = `${BASE_URL}${urlConst}/${urlVar}`;
  const {
    isFinished,
    data,
    error,
    onFetchError,
    onFetchResponse,
    onFetchFinally,
  } = useFetch(
    url,
    { method, body },
    {
      refetch: true,
    }
  );

  return {
    isFinished,
    data,
    error,
    onFetchError,
    onFetchResponse,
    onFetchFinally,
  };
}
