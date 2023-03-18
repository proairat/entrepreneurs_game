import type {
  EAlert,
  EEntityState,
  EEntityType,
  EGuess,
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
  path: string;
  alt: string;
}

interface IModule {
  id: number;
  type: EEntityType.Modules;
  path: string;
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
  path: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: EEntityState;
  visibility: "visible" | "hidden";
  order: number;
}

interface IGuess {
  id: number;
  type: EEntityType.Guesses;
  state: EEntityState;
  slideNumber: number;
}

interface ITheme {
  id: number;
  type: EEntityType.Topics | EEntityType.Tests;
  state: EEntityState;
  title: string;
}

interface ITabsAuthors {
  id: number;
  type: EEntityType.TabsAuthors;
  surname: string;
  name: string;
  patronymic: string;
  regalia: string;
}

interface IVideo {
  id: number;
  type: EEntityType.Videos;
  path: string;
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

interface ITestQuestion {
  id: number;
  type: EEntityType.TestsQuestions;
  category: string;
  difficulty: string;
  slideNumber: number;
  question: string;
  state: EEntityState;
  idAnswerCorrect: number;
  guesses: EGuess;
}

interface ITestAnswer {
  id: number;
  type: EEntityType.TestsAnswers;
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

interface IEntranceTestQuestion {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  slideNumber: number;
  question: string;
  state: EEntityState;
  idAnswerCorrect: number;
  idAnswerUserSelected: number[];
  answers: ITestAnswer[];
  guesses: EGuess;
}

interface IProgressCaption {
  modules: EProgressCaption.ModulesCaption;
  topics: EProgressCaption.TopicsCaption;
  tests: EProgressCaption.TestsCaption;
  entranceTests: EProgressCaption.EntranceTestsCaption;
}

interface IUpdateArray {
  entityId: number;
  stateForFindElem: EEntityState;
  stateForFindIndex: EEntityState;
  stateForClickIndex: EEntityState;
}

interface IUpdateMapElem {
  entityIdForListByEntityId: number;
  entityIdForClickIndex: number;
  stateForFindElem: EEntityState;
  stateForFindIndex: EEntityState;
  stateForClickIndex: EEntityState;
}

interface IUpdateMapElements {
  entityIdForListByEntityId: number;
  stateForListByEntityIdFiltered: EEntityState;
  stateForListByEntityId: EEntityState;
}

interface IEduCommonElement<T> {
  createList(
    param: T[] | TElemsList<number, T>
  ): T[] | TElemsList<number, T> | undefined;
  addToList(param: T[] | TElemsList<number, T>): void;
  getList(): T[] | TElemsList<number, T> | undefined;
}

interface IEduElementEntityArray<T> {
  updateElemByState(updateArray: IUpdateArray): void;
  getElemByState(state: EEntityState): T | undefined;
}

interface IEduElementEntityMap<T> {
  updateElemByState(updateMapElem: IUpdateMapElem): void;
  updateElementsByState(updateMapElements: IUpdateMapElements): void;
  getElemByState(
    state: EEntityState,
    listByEntityId: T[] | undefined
  ): T | undefined;
  getElementsByState(
    state: EEntityState,
    listByEntityId: T[] | undefined
  ): T[] | undefined;
  getListByEntityId(entityId: number): T[] | undefined;
}

export type {
  IUser,
  IAlert,
  INavigation,
  IModule,
  IModuleAdvanced,
  IGuess,
  ITheme,
  ITabsAuthors,
  IVideo,
  ITest,
  ITestQuestion,
  ITestAnswer,
  IEntranceTest,
  IEntranceTestQuestion,
  IProgressCaption,
  IUpdateArray,
  IUpdateMapElem,
  IUpdateMapElements,
  IEduCommonElement,
  IEduElementEntityArray,
  IEduElementEntityMap,
};
