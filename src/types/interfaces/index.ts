import type { TThemesList } from "../types";

interface INavigation {
  name: string;
  to: string;
  componentName: string;
  current: boolean;
  src: string;
  alt: string;
}

interface ITheme {
  id: number;
  type: "topics" | "tests";
  state: "active" | "default";
  title: string;
}

interface ICourse {
  id: number;
  type: "modules";
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: string;
}

interface IEduElementCourses {
  createList(): TThemesList<number, ITheme> | ICourse[];
  addToList(): void;
  getList(): ICourse[] | TThemesList<number, ITheme> | undefined;
  updateActiveElem(
    moduleId: number,
    elems: ICourse[] | ITheme[],
    themeId?: number
  ): void;
  getActiveElem(courseId?: number): ITheme | ICourse | undefined;
}

interface IEduElementThemes extends IEduElementCourses {
  getThemesByCourseId(courseId: number): Array<ITheme> | undefined;
}

export type {
  INavigation,
  ITheme,
  ICourse,
  IEduElementCourses,
  IEduElementThemes,
};
