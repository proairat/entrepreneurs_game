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
  type: "topic" | "test";
  state: "active" | "default";
  title: string;
}

interface ICourse {
  id: number;
  type: "module";
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: string;
}

interface IEduElementCourses {
  createElem(): void;
  getList(): ICourse[] | TThemesList<number, ITheme> | undefined;
  deleteElem(): void;
  updateElem(): void;
  getElem(): void;
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
