import type {
  EAlert,
  EEntityState,
  EEntityType,
  EGuessed,
  EProgressCaption,
} from "../enums";
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
  state: EEntityState;
}

interface IModuleAdvanced {
  id: number;
  type: EEntityType.ModulesAdvanced;
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: EEntityState;
  visibility: "visible" | "hidden";
  order: number;
}

interface ITheme {
  id: number;
  type: EEntityType.Topics | EEntityType.Tests;
  state: EEntityState;
  title: string;
}

interface ITabsAuthors {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  regalia: string;
}

interface IVideo {
  id: number;
  type: EEntityType.Videos;
  src: string;
  poster: string;
  videoType: string;
  duration?: number;
  state: EEntityState;
  title: string;
  authors: ITabsAuthors[];
  description: string;
}

interface ITest {
  id: number;
  type: EEntityType.Tests;
  title: string;
  description: string;
  state: EEntityState;
}

interface ITestContent {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  slideNumber: number;
  question: string;
  state: EEntityState;
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
  type: EEntityType.EntranceTests;
  title: string;
  description: string;
  state: EEntityState;
}

interface IEntranceTestContent {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  slideNumber: number;
  question: string;
  state: EEntityState;
  idAnswerCorrect: number;
  idAnswerUserSelected: number[];
  answers: IAnswer[];
  guessed: EGuessed;
}

interface IProgressCaption {
  modules: EProgressCaption.ModulesCaption;
  topics: EProgressCaption.TopicsCaption;
  tests: EProgressCaption.TestsCaption;
  entranceTests: EProgressCaption.EntranceTestsCaption;
}

interface IUpdateArray {
  entityId: number;
  activeIndexState: EEntityState;
  clickIndexState: EEntityState;
}

interface IUpdateMap {
  entityId: number;
  themeId: number;
  activeIndexState: EEntityState;
  clickIndexState: EEntityState;
}

interface IEduCommonElement<T> {
  createList(
    param: T[] | TElemsList<number, T>
  ): T[] | TElemsList<number, T> | undefined;
  addToList(param: T[] | TElemsList<number, T>): void;
  getList(): T[] | TElemsList<number, T> | undefined;
}

interface IEduElementEntityArray<T> {
  updateActiveElem(updateArray: IUpdateArray): void;
  getActiveElem(): T | undefined;
}

interface IEduElementEntityMap<T> {
  updateActiveElem(updateMap: IUpdateMap): void;
  getActiveElem(listByEntityId: T[] | undefined): T | undefined;
  getListByEntityId(entityId: number): T[] | undefined;
}

export type {
  IUser,
  IAlert,
  INavigation,
  IModule,
  IModuleAdvanced,
  ITheme,
  ITabsAuthors,
  IVideo,
  ITest,
  ITestContent,
  IAnswer,
  IEntranceTest,
  IEntranceTestContent,
  IProgressCaption,
  IUpdateArray,
  IUpdateMap,
  IEduCommonElement,
  IEduElementEntityArray,
  IEduElementEntityMap,
};
