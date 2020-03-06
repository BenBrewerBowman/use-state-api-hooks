import { useStateApi } from '../useStateApi';
import { push, toggle, unshift, insertAt, upsertAt } from './uniqueArray.reducers';
import { arrayStateApiFactory, ArrayStateApiFactory } from '../array/useArrayStateApi';
import { Dispatch, SetStateAction } from 'react';

export type UniqueArrayStateApiFactory<T> = ArrayStateApiFactory<T> & {
  toggle: (...val: T[]) => void;
};

export const uniqueArrayStateApiFactory = <T>(setState: Dispatch<SetStateAction<T[]>>): UniqueArrayStateApiFactory<T> => ({
  ...arrayStateApiFactory(setState),

  push: (...val: T[]) => setState(push<T>(val)),
  toggle: (...val: T[]) => setState(toggle<T>(val)),

  unshift: (...val: T[]) => setState(unshift<T>(val)),

  insertAt: (val: T, index: number) => setState(insertAt<T>(val, index)),
  upsertAt: (val: T, index: number) => setState(upsertAt<T>(val, index)),
});

export const useUniqueArrayStateApi = <T>(initialState: T[]) =>
  useStateApi<UniqueArrayStateApiFactory<T>, T[]>(uniqueArrayStateApiFactory, initialState);