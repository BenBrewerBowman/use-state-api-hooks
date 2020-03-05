import { useStateApi } from '../useStateApi';
import { State } from './types';
import { push, toggle, unshift, insertAt, upsertAt } from './uniqueArrayFunctions';
import { arrayStateApiFactory, ArrayStateApi } from '../array/useArrayStateApi';

export interface UniqueArrayStateApi<T> extends ArrayStateApi<T> {
  push: (...vals: T[]) => void;
  unshift: (...vals: T[]) => void;
  toggle: (...vals: T[]) => void;

  insertAt: (val: T, index: number) => void;
  upsertAt: (val: T, index: number) => void;

  state: T[];
  setState: (val: T[]) => void;
};

type Props<T> = {
  state: State<T>;
  setState: (state: State<T>) => void;
};

export const uniqueArrayStateApiFactory = <T>({
  state,
  setState
}: Props<T>): UniqueArrayStateApi<T> => ({
  ...arrayStateApiFactory({ state, setState }),

  push: (...val: T[]) => setState(push<T>(val, state)),
  toggle: (...val: T[]) => setState(toggle<T>(val, state)),

  unshift: (...val: T[]) => setState(unshift<T>(val, state)),

  insertAt: (val: T, index: number) => setState(insertAt<T>(val, index, state)),
  upsertAt: (val: T, index: number) => setState(upsertAt<T>(val, index, state)),

  state,
  setState
});

export const useUniqueArrayStateApi = <T>(initialState: T[]): UniqueArrayStateApi<T> =>
  useStateApi(uniqueArrayStateApiFactory, initialState);