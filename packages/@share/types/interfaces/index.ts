import type {
  EAlert,
  EEntityState,
  EEntityType,
  EGuess,
  EProgressCaption,
  EVideoTypes,
} from "../enums";
import type { TElemsList, TExtendsArray, TMessageType } from "../types";

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
  filename: string;
  alt: string;
}

interface IModule {
  id: number;
  type: EEntityType;
  filename: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: EEntityState;
}

interface IModuleAdvanced {
  id: number;
  type: EEntityType;
  filename: string;
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
  type: EEntityType;
  state: EEntityState;
  slideNumber: number;
}

interface ITheme {
  id: number;
  type: EEntityType;
  state: EEntityState;
  title: string;
}

interface ITabsAuthors {
  id: number;
  type: EEntityType;
  surname: string;
  name: string;
  patronymic: string;
  regalia: string;
}

interface IVideoDB {
  id: number;
  type: EEntityType;
  filenamePoster: string;
  filenameVideo: string;
  duration: number;
  title: string;
  description: string;
  state: EEntityState;
}

interface IVideo {
  id: number;
  type: EEntityType;
  filename: string;
  poster: string;
  videoType: string;
  duration?: number;
  state: EEntityState;
  title: string;
  authors: ITabsAuthors[];
  description: string;
}

interface IVideoTypesDB {
  id: number;
  videoType: EVideoTypes;
}

interface IAuthor {
  id: number;
  type: EEntityType;
  surname: string;
  name: string;
  patronymic: string;
}

interface ITest {
  id: number;
  type: EEntityType;
  title: string;
  description: string;
  state: EEntityState;
}

interface ITestQuestion {
  id: number;
  type: EEntityType;
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
  type: EEntityType;
  answer: string;
  state: EEntityState;
}

interface IEntranceTest {
  id: number;
  type: EEntityType;
  title: string;
  description: string;
  state: EEntityState;
}

interface IEntranceTestQuestion {
  id: number;
  category: string;
  type: EEntityType;
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
  fillTheList(param: T[] | TElemsList<number, T>): void;
  addToList(param: T):void;
  getList(): T[] | TElemsList<number, T> | undefined;
}

interface IEduElementEntityArray<T> {
  updateElemByState(updateArray: IUpdateArray): void;
  getElemByState(state: EEntityState): T | undefined;
  updateElemFields(elem: TExtendsArray): void;
  deleteFromList(elem: TExtendsArray): void;
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

interface IElMessageUploadFile {
  message: string;
  type: TMessageType;
  appendTo: string;
  idMessage: number;
  shPayload: string;
}

interface IModuleBody { 
  header: string 
};

interface IFile { 
  filename: string 
};

export type {
  IUser,
  IAlert,
  INavigation,
  IModule,
  IModuleAdvanced,
  IGuess,
  ITheme,
  ITabsAuthors,
  IVideoDB,
  IVideo,
  IVideoTypesDB,
  IAuthor,
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
  IElMessageUploadFile,
  IModuleBody,
  IFile,
};
