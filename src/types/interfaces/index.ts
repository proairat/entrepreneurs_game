import type { EAlert, EEntityState, EEntityType, EGuessed } from "../enums";
import type { TElemsList } from "../types";

interface IUser {
  surname: string;
  name: string;
  patronymic: string;
  login: string;
  password: string;
  entranceTesting: boolean;
}

interface IAlert {
  message: string;
  type: EAlert.Success | EAlert.Error;
}

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
  state: EEntityState.Active | EEntityState.Default;
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
  type: EEntityType.Tests;
  title: string;
  description: string;
  state: EEntityState.Active | EEntityState.Default;
}

interface ITestContent {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  state: EEntityState.Active | EEntityState.Default;
  idAnswerCorrect: number;
  answers: IAnswer[];
  guessed: EGuessed;
}

interface IAnswer {
  idAnswer: number;
  answer: string;
  state: EEntityState;
}

interface IEntranceTest {
  id: number;
  category: string;
  type: EEntityType.EntranceTests;
  difficulty: string;
  question: string;
  idAnswerCorrect: number;
  answers: IAnswer[];
  guessed: EGuessed;
}

interface IEduCommonElement<T> {
  createList(
    param: T[] | TElemsList<number, T>
  ): T[] | TElemsList<number, T> | undefined;
  addToList(param: T[] | TElemsList<number, T>): void;
  getList(): T[] | TElemsList<number, T> | undefined;
}

interface IEduElementEntityArray<T> {
  updateActiveElem(moduleId: number, elems: T[]): void;
  getActiveElem(): T | undefined;
}

interface IEduElementEntityMap<T> {
  updateActiveElem(moduleId: number, elems: T[], themeId: number): void;
  getActiveElem(moduleId: number): T | undefined;
  getEntityByModuleId(moduleId: number): T[] | undefined;
}

interface IEduElementTestsContent {
  updateActiveElem(
    moduleId: number,
    elems: ITestContent[],
    themeId?: number
  ): void;
  getActiveElem(moduleId: number): ITestContent | undefined;
  getEntityByModuleId(moduleId: number): ITestContent[] | undefined;
}

interface IProgressCaption {
  topics: string;
  tests: string;
  entryTests: string;
}

export type {
  IUser,
  IAlert,
  INavigation,
  IModule,
  ITheme,
  IVideo,
  ITest,
  ITestContent,
  IAnswer,
  IEntranceTest,
  IEduCommonElement,
  IEduElementEntityArray,
  IEduElementTestsContent,
  IProgressCaption,
  IEduElementEntityMap,
};
