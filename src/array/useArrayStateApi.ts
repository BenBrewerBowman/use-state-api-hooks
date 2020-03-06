import { useStateApi } from '../useStateApi';
import { upsertAt, deleteAt, insertAt, reverse, unshift, shift, push, pop, clear } from './array.reducers';
import { Dispatch, SetStateAction } from 'react';

export type ArrayStateApiFactory<T> = {
  clear: VoidFunction;
  reverse: VoidFunction;

  pop: VoidFunction;
  push: (...val: T[]) => void,

  shift: VoidFunction;
  unshift: (...val: T[]) => void;

  insertAt: (val: T, index: number) => void,
  upsertAt: (val: T, index: number) => void,
  deleteAt: (index: number) => void,
};

export const arrayStateApiFactory = <T>(setState: Dispatch<SetStateAction<T[]>>): ArrayStateApiFactory<T> => ({
  clear: () => setState(clear),
  reverse: () => setState(reverse),

  pop: () => setState(pop),
  push: (...val: T[]) => setState(push<T>(val)),

  shift: () => setState(shift),
  unshift: (...val: T[]) => setState(unshift<T>(val)),

  insertAt: (val: T, index: number) => setState(insertAt<T>(val, index)),
  upsertAt: (val: T, index: number) => setState(upsertAt<T>(val, index)),
  deleteAt: (index: number) => setState(deleteAt<T>(index)),
});

export const useArrayStateApi = <T>(initialState: T[]) =>
  useStateApi<ArrayStateApiFactory<T>, T[]>(arrayStateApiFactory, initialState);
