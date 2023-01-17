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
} from "../interfaces";

type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;
type TExtendsArray = IModule | IModuleAdvanced | IEntranceTest;
type TExtendsMap =
  | ITheme
  | IVideo
  | ITest
  | ITestQuestion
  | ITestAnswer
  | IGuess;

export type { Tfns, TElemsList, TExtendsArray, TExtendsMap };
