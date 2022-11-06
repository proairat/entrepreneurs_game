import type { IEduElementThemes, ITheme } from "@/types/interfaces";
import type { TThemesList } from "@/types/types";
import { BaseEduElement } from "./BaseEduElement";

class Themes extends BaseEduElement implements IEduElementThemes {
  list: TThemesList<number, ITheme> | undefined;

  public createElem(): void {
    console.log("createElem of the Themes");
  }
  private createList() {
    // console.log("createList of the Themes");
    this.list = new Map();
    return this;
  }
  private addToList(): void {
    // console.log("addToList of the Themes");
    if (this.list instanceof Map) {
      this.list.set(1, [
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

      this.list.set(2, [
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

      this.list.set(3, [
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

      this.list.set(4, [
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

      this.list.set(5, [
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

      this.list.set(6, [
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
      this.list.set(7, [
        {
          id: 1,
          state: "test",
          title: "Тестирование 7",
        },
      ]);
    }
  }
  public getList() {
    console.log("getList of the Themes");
    this.createList();
    this.addToList();
    return this;
  }
  public deleteElem(): void {
    console.log("deleteElem of the Themes");
  }
  public updateElem(): void {
    console.log("updateElem of the Themes");
  }
  public getElem(): string {
    return "{getElem of the Themes}";
  }
  public getActiveElem(courseId: number): ITheme | undefined {
    if (this.list instanceof Map) {
      const list = this.getThemesByCourseId(courseId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  private getThemesByCourseId(courseId: number): Array<ITheme> | undefined {
    if (this.list instanceof Map) {
      return this.list.get(courseId);
    }
  }
}

export { Themes };
