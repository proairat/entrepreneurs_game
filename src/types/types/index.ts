type Tfn<T> = (...params: Array<T>) => T;
type Tfns<T> = Array<Tfn<T>>;
type TElemsList<K, V> = Map<K, Array<V>>;

export type { Tfns, TElemsList };
