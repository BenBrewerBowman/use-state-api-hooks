import { useStateApi } from '../useStateApi';
import { upsertAt, deleteAt, insertAt, reverse, unshift, shift, push, pop, clear } from './arrayFunctions';
import { State } from './types';

export type ArrayStateApi<T> = {
  clear: () => void;

  pop: () => void;
  push: (...vals: T[]) => void;
  shift: () => void;
  unshift: (...vals: T[]) => void;
  reverse: () => void;

  insertAt: (val: T, index: number) => void;
  upsertAt: (val: T, index: number) => void;
  deleteAt: (index: number) => void;

  state: T[];
  setState: (val: T[]) => void;
};

type Props<T> = {
  state: State<T>;
  setState: (state: State<T>) => void;
};

export const arrayStateApiFactory = <T>({
  state,
  setState
}: Props<T>): ArrayStateApi<T> => ({
  clear: () => setState(clear()),
  reverse: () => setState(reverse<T>(state)),

  pop: () => setState(pop<T>(state)),
  push: (...val: T[]) => setState(push<T>(val, state)),

  shift: () => setState(shift<T>(state)),
  unshift: (...val: T[]) => setState(unshift<T>(val, state)),

  insertAt: (val: T, index: number) => setState(insertAt<T>(val, index, state)),
  upsertAt: (val: T, index: number) => setState(upsertAt<T>(val, index, state)),
  deleteAt: (index: number) => setState(deleteAt<T>(index, state)),

  state,
  setState
});

export const useArrayStateApi = <T>(initialState: T[]): ArrayStateApi<T> =>
  useStateApi(arrayStateApiFactory, initialState);