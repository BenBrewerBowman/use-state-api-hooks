import { useStateApi } from '../useStateApi';
import { deleteAt, reverse, shift, pop, clear } from '../array/arrayFunctions';
import { State, SetState } from './types';
import { push, toggle, unshift, insertAt, upsertAt } from './uniqueArrayFunctions';

export type UniqueArrayStateApi<T> = {
  clear: () => void;
  reverse: () => void;

  pop: () => void;
  push: (...vals: T[]) => void;
  shift: () => void;
  unshift: (...vals: T[]) => void;
  toggle: (...vals: T[]) => void;

  insertAt: (val: T, index: number) => void;
  upsertAt: (val: T, index: number) => void;
  deleteAt: (index: number) => void;

  state: T[];
  setState: (val: T[]) => void;
};

type Props<T> = {
  state: State<T>;
  setState: SetState<T>;
};

export const uniqueArrayStateApiFactory = <T>({
  state,
  setState
}: Props<T>): UniqueArrayStateApi<T> => {

  return {
    clear: () => clear<T>(setState),
    reverse: () => reverse<T>(state, setState),

    pop: () => pop<T>(state, setState),
    push: (...val: T[]) => push<T>(val, state, setState),
    toggle: (...val: T[]) => toggle<T>(val, state, setState),

    shift: () => shift<T>(state, setState),
    unshift: (...val: T[]) => unshift<T>(val, state, setState),

    insertAt: (val: T, index: number) => insertAt<T>(val, index, state, setState),
    upsertAt: (val: T, index: number) => upsertAt<T>(val, index, state, setState),
    deleteAt: (index: number) => deleteAt<T>(index, state, setState),

    state,
    setState
  };
};

export const useUniqueArrayStateApi = <T>(initialState: T[]): UniqueArrayStateApi<T> =>
  useStateApi(uniqueArrayStateApiFactory, initialState);