import type { Tfns } from "../types/types";
import { EEntityStateDashboard, EUploadType } from "../types/enums";
import { URL_VIDEOS_UPLOAD_POSTER, URL_VIDEOS_UPLOAD_VIDEO_FILE } from "../api/API";
// import cloneDeep from "lodash/cloneDeep";

/**
 * Функция для удаления свойства из объекта
 *
 * @param {string} prop - свойство объекта, которое следует удалить
 * @returns {Record<string, any>} объект без свойства prop
 *
 * const user = {
 *  id: 100,
 *  name: 'John Smith',
 *  password: 'password'
 * }
 *
 * removeObjectProperty('password')(user) //=> { id: 100, name: 'John Smith' }
 */
const removeObjectProperty = <T extends object, K extends keyof T>(prop: K) => (obj: T): Omit<T, K> => (({ [prop]: _, ...rest }) => rest)(obj);

function FuzzySearch(
  str: string,
  arr: Array<any>,
  searchByProp: string | number
) {
  const filtered = arr.filter((obj: any) => {
    const propToLowerCase = obj[searchByProp].toLowerCase();
    const strToLowerCase = str.toLowerCase();
    const result = [...strToLowerCase]
      .map((letter) => (propToLowerCase.includes(letter) ? letter : ""))
      .join("");

    return strToLowerCase === result;
  });

  return filtered;
}

async function FulfillRequests(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Один из запросов завершился с ошибкой. Статус ${response.status}`
      );
    } else {
      return await response.json();
    }
  } catch (e) {
    console.error("Что-то пошло не так...", e);
  }
}

function getURLParamValue(url: string, param: string) {
  return url ? new URL(url).searchParams.get(param) : url;
}

function getURLPathNameDigit(url: string): string | null {
  const result = new URL(url).pathname.match(/[0-9]+/);
  return Array.isArray(result) ? result[0] : null;
}

/**
 * const square = (x) => x * x;
 * const times2 = (x) => x * 2;
 * const sum = (a, b) => a + b;
 *
 * Композиция функций
 *
 * @param {Tfns<number>} fns - array of functions
 *
 * @returns {number | number[]} active item
 *
 * compose(square, times2)(2) === square(times2(2)));
 * compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
 * const square = (x: number) => x * x;
 * const times2 = (x: number) => x * 2;
 * const sum = () => 6;
 * console.log("compose", compose(square, times2, sum)());
 */

function compose(...fns: Tfns<number>) {
  return (...params: Array<number>) => {
    return fns.reduceRight((parameters: Array<number> | number, current) => {
      return current(
        ...(Array.isArray(parameters) ? parameters : [parameters])
      );
    }, params);
  };
}

const shuffle = <T>(inputArray: T[]): T[] | undefined => {
  if (Array.isArray(inputArray)) {
    // const outputArray = cloneDeep(inputArray);
    const outputArray = inputArray;
    let currentIndex = inputArray.length;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [outputArray[currentIndex], outputArray[randomIndex]] = [
        outputArray[randomIndex],
        outputArray[currentIndex],
      ];
    }
    return outputArray;
  }
};

function isObjectEmpty(value: any) {
  return (
    Object.prototype.toString.call(value) === "[object Object]" &&
    JSON.stringify(value) === "{}"
  );
}

function groupByKey(key: string) {
  return (array: any) =>
    array.reduce((prev: any, current: any) => {
      /*
      console.log('key', key);
      console.log('current', current);
      console.log('current[key]', current[key]);
      throw 'current';
      */

      const property = current[key];

      prev[property] = prev[property] || [];
      prev[property].push(current);

      return prev;
    }, {});
}

function getUploadParams(uploadItem: EUploadType) {
  const params = {
    [EUploadType.VIDEO_POSTER]: {
      action: URL_VIDEOS_UPLOAD_POSTER,
      allowTypes: ["image/svg+xml", "image/png"],
      fileSize: 3,
      textForTriggerButton: "Выберите обложку видеоролика",
      textForUploadButton: "Загрузить обложку видеоролика на сервер",
      messageFileType: "Тип файла должен быть либо PNG, либо SVG",
      messageFileSize: "Размер файла не должен превышать 3 Мбайт",
      messageHandleSuccess: "Обложка видеоролика успешно загружена! Переходим к третьему шагу.",
      messageHandleError: "Обложка видеоролика не была загружена",
      updateVideoStep: 2,
      stateForFindElem: EEntityStateDashboard.After_create_video_card,
      stateForFindIndex: EEntityStateDashboard.After_create_video_poster,
      stateForClickIndex: EEntityStateDashboard.After_create_video_poster,
    },
    [EUploadType.VIDEO_VIDEO_FILE]: {
      action: URL_VIDEOS_UPLOAD_VIDEO_FILE,
      allowTypes: ['video/mpeg', 'video/mp4'],
      fileSize: 800,
      textForTriggerButton: "Выберите видеоролик",
      textForUploadButton: "Загрузить видеоролик на сервер",
      messageFileType: "Тип файла должен быть либо MPEG, либо MP4",
      messageFileSize: "Размер файла не должен превышать 800 Мбайт",
      messageHandleSuccess: "Видеоролик успешно загружен! Все шаги пройдены.",
      messageHandleError: "Видеоролик не был загружен",
      updateVideoStep: 3,
      stateForFindElem: EEntityStateDashboard.After_create_video_poster,
      stateForFindIndex: EEntityStateDashboard.After_create_video_file,
      stateForClickIndex: EEntityStateDashboard.After_create_video_file,
    },
  };

  return params[uploadItem];
}

export {
  FuzzySearch,
  FulfillRequests,
  getURLParamValue,
  getURLPathNameDigit,
  removeObjectProperty,
  shuffle,
  compose,
  isObjectEmpty,
  groupByKey,
  getUploadParams,
};
