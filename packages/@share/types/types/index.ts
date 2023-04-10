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
  IModuleFile,
} from "../interfaces";

type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;
type TExtendsArray = IModule | IModuleAdvanced | IEntranceTest;
type TExtendsArrayCombination = IModule & IModuleAdvanced & IEntranceTest;
type TExtendsMap =
  | ITheme
  | IVideo
  | ITest
  | ITestQuestion
  | ITestAnswer
  | IGuess;
type TMessageType = "success" | "warning" | "info" | "error";
type TModuleBodyFile = IModuleBody & IModuleFile;

export type { Tfns, TElemsList, TExtendsArray, TExtendsArrayCombination, TExtendsMap, TMessageType, TModuleBodyFile };
