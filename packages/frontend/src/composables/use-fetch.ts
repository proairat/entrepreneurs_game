// import { ref, computed } from 'vue';
import { useFetch } from "@vueuse/core";
import { BASE_URL } from "../API";

export function useFetchComposable(urlConst: string, urlVar: string) {
  const url = `${BASE_URL}${urlConst}/${urlVar}`;
  const { isFetching, data, error } = useFetch(url, {
    refetch: true,
  });

  return { isFetching, data, error };
}
