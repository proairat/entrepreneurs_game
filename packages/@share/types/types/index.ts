import type {
  IModule,
  IModuleAdvanced,
  IEntranceTest,
  ITheme,
  IVideo,
  ITest,
  ITestQuestion,
  ITestAnswer,
  IGuess,
  IModuleBody,
  IFile,
  IVideoDB,
} from "../interfaces";

type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;
type TExtendsArray = IModule | IModuleAdvanced | IEntranceTest;
type TExtendsDashboardArray = IModule | IVideoDB;
type TExtendsMap =
  | ITheme
  | IVideo
  | ITest
  | ITestQuestion
  | ITestAnswer
  | IGuess;
type TMessageType = "success" | "warning" | "info" | "error";
type TModuleBodyFile = IModuleBody & IFile;

export type { 
  Tfns, 
  TElemsList, 
  TExtendsArray, 
  TExtendsDashboardArray,
  TExtendsMap, 
  TMessageType, 
  TModuleBodyFile 
};
