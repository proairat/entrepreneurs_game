import type { IEduCommonElement, ITheme } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

class Themes implements IEduCommonElement {
  list: TElemsList<number, ITheme> | undefined;

  public createList() {
    if (this.list === undefined) {
      this.list = new Map();
    }
    return this.list;
  }
  public addToList(): void {
    if (this.list instanceof Map && this.list.size === 0) {
      this.list.set(1, [
        {
          id: 1,
          type: "topics",
          state: "active",
          title: "topic 1 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "default",
          title: "two",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "sdfg",
        },
        {
          id: 4,
          type: "topics",
          state: "default",
          title: "fghjfhj",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 6,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 7,
          type: "topics",
          state: "default",
          title: "7",
        },
        {
          id: 8,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 9,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 10,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 11,
          type: "topics",
          state: "default",
          title: "Интересная тема",
        },
        {
          id: 12,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 13,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 14,
          type: "topics",
          state: "default",
          title: "7",
        },
        {
          id: 15,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 16,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 17,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 18,
          type: "topics",
          state: "default",
          title: "одиннадцать 1",
        },
        {
          id: 19,
          type: "topics",
          state: "default",
          title: "1",
        },
        {
          id: 20,
          type: "topics",
          state: "default",
          title: "11",
        },
        {
          id: 21,
          type: "topics",
          state: "default",
          title: "111",
        },
        {
          id: 22,
          type: "topics",
          state: "default",
          title: "1e4 1",
        },
        {
          id: 23,
          type: "topics",
          state: "default",
          title: "1e5 1",
        },
        {
          id: 24,
          type: "topics",
          state: "default",
          title: "1е6 1",
        },
        {
          id: 25,
          type: "topics",
          state: "default",
          title: "1e7 1",
        },
        {
          id: 26,
          type: "topics",
          state: "default",
          title: "1e8 1",
        },
        {
          id: 27,
          type: "topics",
          state: "default",
          title: "1e9 1",
        },
        {
          id: 28,
          type: "tests",
          state: "default",
          title: "Тестирование 1",
        },
      ]);

      this.list.set(2, [
        {
          id: 1,
          type: "topics",
          state: "active",
          title: "topic 2 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "default",
          title: "two",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "sdfg",
        },
        {
          id: 4,
          type: "topics",
          state: "default",
          title: "fghjfhj",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 6,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 7,
          type: "topics",
          state: "default",
          title: "7",
        },
        {
          id: 8,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 9,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 10,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 11,
          type: "tests",
          state: "default",
          title: "Тестирование 2",
        },
      ]);

      this.list.set(3, [
        {
          id: 1,
          type: "topics",
          state: "active",
          title: "topic 3 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "default",
          title: "two",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "sdfg",
        },
        {
          id: 4,
          type: "topics",
          state: "default",
          title: "fghjfhj",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 6,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 7,
          type: "topics",
          state: "default",
          title: "7",
        },
        {
          id: 8,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 9,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 10,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 11,
          type: "tests",
          state: "default",
          title: "Тестирование 3",
        },
      ]);

      this.list.set(4, [
        {
          id: 1,
          type: "topics",
          state: "default",
          title: "topic 4 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "active",
          title: "topic 4 theme 2",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "sdfg",
        },
        {
          id: 4,
          type: "topics",
          state: "default",
          title: "fghjfhj",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 6,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 7,
          type: "topics",
          state: "default",
          title: "7",
        },
        {
          id: 8,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 9,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 10,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 11,
          type: "topics",
          state: "default",
          title: "что-то ещё",
        },
        {
          id: 12,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 13,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 14,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 15,
          type: "tests",
          state: "default",
          title: "Тестирование 4",
        },
      ]);

      this.list.set(5, [
        {
          id: 1,
          type: "topics",
          state: "active",
          title: "topic 5 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "default",
          title: "two",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "sdfg",
        },
        {
          id: 4,
          type: "topics",
          state: "default",
          title: "fghjfhj",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "zxcv",
        },
        {
          id: 6,
          type: "tests",
          state: "default",
          title: "Тестирование 5",
        },
      ]);

      this.list.set(6, [
        {
          id: 1,
          type: "topics",
          state: "default",
          title: "topic 6 theme 1",
        },
        {
          id: 2,
          type: "topics",
          state: "default",
          title: "two",
        },
        {
          id: 3,
          type: "topics",
          state: "default",
          title: "345345",
        },
        {
          id: 4,
          type: "topics",
          state: "active",
          title: "topic 6 theme 4",
        },
        {
          id: 5,
          type: "topics",
          state: "default",
          title: "asdf",
        },
        {
          id: 6,
          type: "topics",
          state: "default",
          title: "234",
        },
        {
          id: 7,
          type: "topics",
          state: "default",
          title: "десять",
        },
        {
          id: 8,
          type: "tests",
          state: "default",
          title: "Тестирование 6",
        },
      ]);
      this.list.set(7, [
        {
          id: 1,
          type: "tests",
          state: "active",
          title: "test 7 theme 1",
        },
      ]);
    }
  }
  public getList() {
    return this.list;
  }
}

export { Themes };
