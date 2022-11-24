import { EEntityType } from "@/types/enums";
import type { IEduCommonElement, ICourse } from "@/types/interfaces";

class Modules implements IEduCommonElement {
  list: ICourse[] | undefined;

  public createList() {
    if (this.list === undefined) {
      this.list = [];
    }
    return this.list;
  }
  public addToList(): void {
    if (Array.isArray(this.list) && this.list.length === 0) {
      this.list.push({
        id: 1,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 1",
        header: "Основы предпринимательства",
        title: "Модуль 1",
        duration: "2 часа",
        footer: "Изучить модуль",
        state: "default",
      });

      this.list.push({
        id: 2,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 2",
        header: "Грантовое проектирование",
        title: "Модуль 2",
        duration: "1 час 20 минут",
        footer: "Изучить модуль",
        state: "default",
      });

      this.list.push({
        id: 3,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 3",
        header: "Технологическое предпринимательство",
        title: "Модуль 3",
        duration: "2 часа 15 минут",
        footer: "Изучить модуль",
        state: "active",
      });

      this.list.push({
        id: 4,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 4",
        header: "Массовое предпринимательство",
        title: "Модуль 4",
        duration: "43 минуты",
        footer: "Изучить модуль",
        state: "default",
      });

      this.list.push({
        id: 5,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 5",
        header: "Креативные индустрии",
        title: "Модуль 5",
        duration: "37 минут",
        footer: "Изучить модуль",
        state: "default",
      });

      this.list.push({
        id: 6,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 6",
        header: "Социальное предпринимательство",
        title: "Модуль 6",
        duration: "2 часа 7 минут",
        footer: "Изучить модуль",
        state: "default",
      });

      this.list.push({
        id: 7,
        type: EEntityType.Modules,
        src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
        alt: "Модуль 7",
        header: "Итоговое тестирование",
        title: "Модуль 7",
        duration: "30 минут",
        footer: "Изучить модуль",
        state: "default",
      });
    }
  }
  public getList() {
    return this.list;
  }
}

export { Modules };
