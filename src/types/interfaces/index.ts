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
  state: string;
  title: string;
}

interface ICourse {
  id: number;
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
  getList(): void;
  deleteElem(): void;
  updateElem(): void;
  getElem(): void;
  getActiveElem(courseId?: number): ITheme | ICourse | undefined;
}

interface IEduElementThemes extends IEduElementCourses {
  // getThemesByCourseId(courseId: number):  Array<ITheme> | undefined;
}

export type {
  INavigation,
  ITheme,
  ICourse,
  IEduElementCourses,
  IEduElementThemes,
};
