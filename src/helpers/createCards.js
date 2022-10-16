function createCards() {
  class Card {
    constructor(src, alt, header, title, duration, footer) {
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
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 1",
      "Основы предпринимательства",
      "Модуль 1",
      "2 часа",
      "Изучить курс"
    ),
    new Card(
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 2",
      "Грантовое проектирование",
      "Модуль 2",
      "1 час 20 минут",
      "Изучить курс"
    ),
    new Card(
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 3",
      "Технологическое предпринимательство",
      "Модуль 3",
      "2 часа 15 минут",
      "Изучить курс"
    ),
    new Card(
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 4",
      "Массовое предпринимательство",
      "Модуль 4",
      "43 минуты",
      "Изучить курс"
    ),
    new Card(
      "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
      "Модуль 5",
      "Креативные индустрии",
      "Модуль 5",
      "37 минут",
      "Изучить курс"
    ),
    new Card(
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

export { createCards };
