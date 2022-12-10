import type {
  IModule,
  ITheme,
  IVideo,
  ITest,
  ITestContent,
} from "../interfaces";

type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;
type TExtendsArray = IModule;
type TExtendsMap = ITheme | IVideo | ITest | ITestContent;

export type { Tfns, TElemsList, TExtendsArray, TExtendsMap };
