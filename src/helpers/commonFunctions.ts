// import { computed } from "vue";

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
 * @name {string} prop - свойство объекта, которое следует удалить
 * @returns {URL} объект без свойства prop
 *
 * const user = {
 *  id: 100,
 *  name: 'John Smith',
 *  password: 'password'
 * }
 *
 * getImageUrl('user')
 */
function getImageUrl(name: string) {
  return new URL(`./../assets/img/${name}.svg`, import.meta.url).href;
}

function createCards() {
  class Card {
    id: number;
    src: string;
    alt: string;
    header: string;
    title: string;
    duration: string;
    footer: string;

    constructor(
      id: number,
      src: string,
      alt: string,
      header: string,
      title: string,
      duration: string,
      footer: string
    ) {
      this.id = id;
      this.src = src;
      this.alt = alt;
      this.header = header;
      this.title = title;
      this.duration = duration;
      this.footer = footer;
    }
  }

  const cards = [
    new Card(
      1,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 1",
      "Основы предпринимательства",
      "Модуль 1",
      "2 часа",
      "Изучить курс"
    ),
    new Card(
      2,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 2",
      "Грантовое проектирование",
      "Модуль 2",
      "1 час 20 минут",
      "Изучить курс"
    ),
    new Card(
      3,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 3",
      "Технологическое предпринимательство",
      "Модуль 3",
      "2 часа 15 минут",
      "Изучить курс"
    ),
    new Card(
      4,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 4",
      "Массовое предпринимательство",
      "Модуль 4",
      "43 минуты",
      "Изучить курс"
    ),
    new Card(
      5,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 5",
      "Креативные индустрии",
      "Модуль 5",
      "37 минут",
      "Изучить курс"
    ),
    new Card(
      6,
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 6",
      "Социальное предпринимательство",
      "Модуль 6",
      "2 часа 7 минут",
      "Изучить курс"
    ),
  ];

  return cards;
}

function createTopicList(courseId: number) {
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

  return fakeTopicList.get(courseId);
}

export {
  FuzzySearch,
  FulfillRequests,
  getURLParamValue,
  getURLPathNameDigit,
  // getValueFromStore,
  deepClone,
  getImageUrl,
  createCards,
  createTopicList,
};

export { removeObjectProperty };
