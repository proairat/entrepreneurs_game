import type { IModule, ITest, ITheme, IVideo } from "../interfaces";

type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;
type TExtendsArray = IModule;
type TExtendsMap = ITheme | IVideo | ITest;

export type { Tfns, TElemsList, TExtendsArray, TExtendsMap };
