import type { IEduCommonElement } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

class Entity<T> implements IEduCommonElement<T> {
  list: T[] | TElemsList<number, T> | undefined;

  public createList(fromDB: T[] | TElemsList<number, T>) {
    if (this.list === undefined && fromDB instanceof Array) {
      this.list = [];
    }

    if (this.list === undefined && fromDB instanceof Map) {
      this.list = new Map();
    }
    return this.list;
  }
  public addToList(fromDB: T[] | TElemsList<number, T>): void {
    if (
      Array.isArray(this.list) &&
      fromDB instanceof Array &&
      this.list.length === 0
    ) {
      for (let i = 0; i < fromDB.length; i++) {
        this.list.push(fromDB[i]);
      }
    }
    if (
      this.list instanceof Map &&
      fromDB instanceof Map &&
      this.list.size === 0
    ) {
      for (const key of fromDB.keys()) {
        const value = fromDB.get(key);
        if (value) {
          this.list.set(key, value);
        }
      }
    }
  }
  public getList() {
    return this.list;
  }
}

export { Entity };
