import type { EEntityState, EEntityType, EGuessed } from "../enums";
import type { TElemsList } from "../types";

interface INavigation {
  id: number;
  name: string;
  current: boolean;
  href: string;
  src: string;
  alt: string;
}

interface IModule {
  id: number;
  type: EEntityType.Modules;
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
  type: EEntityType.Topics | EEntityType.Tests;
  state: EEntityState.Active | EEntityState.Default;
  title: string;
}

interface IVideo {
  id: number;
  type: EEntityType.Videos;
  src: string;
  videoType: string;
  duration?: number;
  state: EEntityState.Active | EEntityState.Default;
  title: string;
}

interface ITest {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  guessed: EGuessed.Right | EGuessed.Wrong | EGuessed.Undefined;
}

interface IEduCommonElement {
  createList():
    | IModule[]
    | TElemsList<number, ITheme>
    | TElemsList<number, IVideo>;
  addToList(): void;
  getList():
    | IModule[]
    | TElemsList<number, ITheme>
    | TElemsList<number, IVideo>
    | undefined;
}

interface IEduElementModules {
  updateActiveElem(moduleId: number, elems: IModule[]): void;
  getActiveElem(): IModule | undefined;
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

interface IProgressCaption {
  topics: string;
  tests: string;
}

export type {
  INavigation,
  ITheme,
  IModule,
  IVideo,
  ITest,
  IEduCommonElement,
  IEduElementModules,
  IEduElementThemes,
  IEduElementVideos,
  IProgressCaption,
};
