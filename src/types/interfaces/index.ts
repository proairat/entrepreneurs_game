import type { TElemsList } from "../types";

interface INavigation {
  name: string;
  to: string;
  componentName: string;
  current: boolean;
  src: string;
  alt: string;
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

interface ITheme {
  id: number;
  type: "topics" | "tests";
  state: "active" | "default";
  title: string;
}

interface IVideo {
  id: number;
  type: "videos";
  src: string;
  videoType: string;
  duration?: number;
  state: string;
  title: string;
}

interface IEduCommonElement {
  createList():
    | ICourse[]
    | TElemsList<number, ITheme>
    | TElemsList<number, IVideo>;
  addToList(): void;
  getList():
    | ICourse[]
    | TElemsList<number, ITheme>
    | TElemsList<number, IVideo>
    | undefined;
}

interface IEduElementCourses {
  updateActiveElem(moduleId: number, elems: ICourse[]): void;
  getActiveElem(): ICourse | undefined;
}

interface IEduElementThemes {
  updateActiveElem(moduleId: number, elems: ITheme[], themeId: number): void;
  getActiveElem(moduleId: number): ITheme | undefined;
  getThemesByModuleId(moduleId: number): ITheme[] | undefined;
}

interface IEduElementVideos {
  updateActiveElem(moduleId: number, elems: IVideo[], videoId: number): void;
  getActiveElem(moduleId: number): IVideo | undefined;
  getVideosByModuleId(moduleId: number): IVideo[] | undefined;
}

export type {
  INavigation,
  ITheme,
  ICourse,
  IVideo,
  IEduCommonElement,
  IEduElementCourses,
  IEduElementThemes,
  IEduElementVideos,
};
