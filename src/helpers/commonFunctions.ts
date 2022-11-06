// import { computed } from "vue";

import { number } from "yup";
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

/*
  Получить значение по ключу из хранилища
  getValueFromStore(ключ, хранилище)
*/

/*
  function getValueFromStore(key: string, store: Store<any>) {
    return computed(() => store.state[key]);
  }
*/

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
  let dynamicImport;
  try {
    dynamicImport = await import(`@/assets/img/${name}.${extension}`);
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

function getListOfCards() {
  const fakeCardsList = [];

  fakeCardsList.push({
    id: 1,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 1",
    header: "Основы предпринимательства",
    title: "Модуль 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: "active",
  });

  fakeCardsList.push({
    id: 2,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 2",
    header: "Грантовое проектирование",
    title: "Модуль 2",
    duration: "1 час 20 минут",
    footer: "Изучить модуль",
    state: "default",
  });

  fakeCardsList.push({
    id: 3,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 3",
    header: "Технологическое предпринимательство",
    title: "Модуль 3",
    duration: "2 часа 15 минут",
    footer: "Изучить модуль",
    state: "default",
  });

  fakeCardsList.push({
    id: 4,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 4",
    header: "Массовое предпринимательство",
    title: "Модуль 4",
    duration: "43 минуты",
    footer: "Изучить модуль",
    state: "default",
  });

  fakeCardsList.push({
    id: 5,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 5",
    header: "Креативные индустрии",
    title: "Модуль 5",
    duration: "37 минут",
    footer: "Изучить модуль",
    state: "default",
  });

  fakeCardsList.push({
    id: 6,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 6",
    header: "Социальное предпринимательство",
    title: "Модуль 6",
    duration: "2 часа 7 минут",
    footer: "Изучить модуль",
    state: "default",
  });

  fakeCardsList.push({
    id: 7,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 7",
    header: "Итоговое тестирование",
    title: "Модуль 7",
    duration: "30 минут",
    footer: "Изучить модуль",
    state: "default",
  });

  return fakeCardsList;
}

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function getTopicsByCourseId(courseId: number) {
  return getListOfTopics().get(courseId);
}

function getListOfTopics() {
  const fakeTopicList = new Map();

  fakeTopicList.set(1, [
    {
      id: 1,
      state: "active",
      title: "topic 1 theme 1",
    },
    {
      id: 2,
      state: "default",
      title: "two",
    },
    {
      id: 3,
      state: "default",
      title: "sdfg",
    },
    {
      id: 4,
      state: "default",
      title: "fghjfhj",
    },
    {
      id: 5,
      state: "default",
      title: "zxcv",
    },
    {
      id: 6,
      state: "default",
      title: "345345",
    },
    {
      id: 7,
      state: "default",
      title: "7",
    },
    {
      id: 8,
      state: "default",
      title: "asdf",
    },
    {
      id: 9,
      state: "default",
      title: "234",
    },
    {
      id: 10,
      state: "default",
      title: "десять",
    },
    {
      id: 11,
      state: "default",
      title: "Интересная тема",
    },
    {
      id: 12,
      state: "default",
      title: "zxcv",
    },
    {
      id: 13,
      state: "default",
      title: "345345",
    },
    {
      id: 14,
      state: "default",
      title: "7",
    },
    {
      id: 15,
      state: "default",
      title: "asdf",
    },
    {
      id: 16,
      state: "default",
      title: "234",
    },
    {
      id: 17,
      state: "default",
      title: "десять",
    },
    {
      id: 18,
      state: "default",
      title: "одиннадцать 1",
    },
    {
      id: 19,
      state: "default",
      title: "1",
    },
    {
      id: 20,
      state: "default",
      title: "11",
    },
    {
      id: 21,
      state: "default",
      title: "111",
    },
    {
      id: 22,
      state: "default",
      title: "1e4 1",
    },
    {
      id: 23,
      state: "default",
      title: "1e5 1",
    },
    {
      id: 24,
      state: "default",
      title: "1е6 1",
    },
    {
      id: 25,
      state: "default",
      title: "1e7 1",
    },
    {
      id: 26,
      state: "default",
      title: "1e8 1",
    },
    {
      id: 27,
      state: "default",
      title: "1e9 1",
    },
    {
      id: 28,
      state: "test",
      title: "Тестирование 1",
    },
  ]);

  fakeTopicList.set(2, [
    {
      id: 1,
      state: "active",
      title: "topic 2 theme 1",
    },
    {
      id: 2,
      state: "default",
      title: "two",
    },
    {
      id: 3,
      state: "default",
      title: "sdfg",
    },
    {
      id: 4,
      state: "default",
      title: "fghjfhj",
    },
    {
      id: 5,
      state: "default",
      title: "zxcv",
    },
    {
      id: 6,
      state: "default",
      title: "345345",
    },
    {
      id: 7,
      state: "default",
      title: "7",
    },
    {
      id: 8,
      state: "default",
      title: "asdf",
    },
    {
      id: 9,
      state: "default",
      title: "234",
    },
    {
      id: 10,
      state: "default",
      title: "десять",
    },
    {
      id: 11,
      state: "test",
      title: "Тестирование 2",
    },
  ]);

  fakeTopicList.set(3, [
    {
      id: 1,
      state: "active",
      title: "topic 3 theme 1",
    },
    {
      id: 2,
      state: "default",
      title: "two",
    },
    {
      id: 3,
      state: "default",
      title: "sdfg",
    },
    {
      id: 4,
      state: "default",
      title: "fghjfhj",
    },
    {
      id: 5,
      state: "default",
      title: "zxcv",
    },
    {
      id: 6,
      state: "default",
      title: "345345",
    },
    {
      id: 7,
      state: "default",
      title: "7",
    },
    {
      id: 8,
      state: "default",
      title: "asdf",
    },
    {
      id: 9,
      state: "default",
      title: "234",
    },
    {
      id: 10,
      state: "default",
      title: "десять",
    },
    {
      id: 11,
      state: "test",
      title: "Тестирование 3",
    },
  ]);

  fakeTopicList.set(4, [
    {
      id: 1,
      state: "default",
      title: "topic 4 theme 1",
    },
    {
      id: 2,
      state: "active",
      title: "two",
    },
    {
      id: 3,
      state: "default",
      title: "sdfg",
    },
    {
      id: 4,
      state: "default",
      title: "fghjfhj",
    },
    {
      id: 5,
      state: "default",
      title: "zxcv",
    },
    {
      id: 6,
      state: "default",
      title: "345345",
    },
    {
      id: 7,
      state: "default",
      title: "7",
    },
    {
      id: 8,
      state: "default",
      title: "asdf",
    },
    {
      id: 9,
      state: "default",
      title: "234",
    },
    {
      id: 10,
      state: "default",
      title: "десять",
    },
    {
      id: 11,
      state: "default",
      title: "что-то ещё",
    },
    {
      id: 12,
      state: "default",
      title: "asdf",
    },
    {
      id: 13,
      state: "default",
      title: "234",
    },
    {
      id: 14,
      state: "default",
      title: "десять",
    },
    {
      id: 15,
      state: "test",
      title: "Тестирование 4",
    },
  ]);

  fakeTopicList.set(5, [
    {
      id: 1,
      state: "active",
      title: "topic 5 theme 1",
    },
    {
      id: 2,
      state: "default",
      title: "two",
    },
    {
      id: 3,
      state: "default",
      title: "sdfg",
    },
    {
      id: 4,
      state: "default",
      title: "fghjfhj",
    },
    {
      id: 5,
      state: "default",
      title: "zxcv",
    },
    {
      id: 11,
      state: "test",
      title: "Тестирование 5",
    },
  ]);

  fakeTopicList.set(6, [
    {
      id: 1,
      state: "default",
      title: "topic 6 theme 1",
    },
    {
      id: 2,
      state: "default",
      title: "two",
    },
    { id: 3, state: "default", title: "345345" },
    {
      id: 4,
      state: "active",
      title: "7",
    },
    {
      id: 5,
      state: "default",
      title: "asdf",
    },
    {
      id: 6,
      state: "default",
      title: "234",
    },
    {
      id: 7,
      state: "default",
      title: "десять",
    },
    {
      id: 8,
      state: "test",
      title: "Тестирование 6",
    },
  ]);

  return fakeTopicList;
}

export {
  FuzzySearch,
  FulfillRequests,
  getURLParamValue,
  getURLPathNameDigit,
  // getValueFromStore,
  deepClone,
  getImageUrl,
  getListOfCards,
  getTopicsByCourseId,
  removeObjectProperty,
  shuffle,
  compose,
};
