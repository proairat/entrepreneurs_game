// import { computed } from "vue";

import type { IAnswer } from "@/types/interfaces";
import type { Tfns } from "@/types/types";

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
const removeObjectProperty =
  (prop: string): Record<string, any> =>
  ({ [prop]: _, ...rest }) =>
    rest;

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
    console.log("Что-то пошло не так...", e);
  }
}

function getURLParamValue(url: string, param: string) {
  return url ? new URL(url).searchParams.get(param) : url;
}

function getURLPathNameDigit(url: string): string | null {
  const result = new URL(url).pathname.match(/[0-9]+/);

  return Array.isArray(result) ? result[0] : null;
}

function deepClone(value: any): any {
  if (Array.isArray(value)) {
    return value.map((child) => deepClone(child));
  }
  if (Object.prototype.toString.call(value) === "[object Object]") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, deepClone(v)])
    );
  }
  return value;
}

/**
 * Функция для получения пути к изображению по названию изображения
 *
 * @param {string} name - название файла с изображением
 * @param {string} extension - расширение файла
 * @returns {string | undefined} путь к файлу изображения
 *
 * getImageUrl('academic-cap')
 */
async function getImageUrl(name: string, extension: string = "svg") {
  try {
    const dynamicImport = await import(`@/assets/img/${name}.${extension}`);
    return dynamicImport.default;
  } catch (err) {
    console.error("We are know about error and try to address it", err);
  }
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
 */

function compose(...fns: Tfns<number>) {
  return (...params: Array<number>) => {
    return fns.reduceRight((parameters: Array<number> | number, current) => {
      return current.apply(
        null,
        Array.isArray(parameters) ? parameters : [parameters]
      );
    }, params);
  };
}

const shuffle = (array: IAnswer[]) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

function isObjectEmpty(value: any) {
  return (
    Object.prototype.toString.call(value) === "[object Object]" &&
    JSON.stringify(value) === "{}"
  );
}

function groupByKey(key: any) {
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

export {
  FuzzySearch,
  FulfillRequests,
  getURLParamValue,
  getURLPathNameDigit,
  deepClone,
  getImageUrl,
  removeObjectProperty,
  shuffle,
  compose,
  isObjectEmpty,
  groupByKey,
};
