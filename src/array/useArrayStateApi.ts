import { useStateApi } from '../useStateApi';
import { upsertAt, deleteAt, insertAt, reverse, unshift, shift, push, pop, clear } from './arrayFunctions';
import { State, SetState } from './types';

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
  setState: SetState<T>;
};

export const arrayStateApiFactory = <T>({
  state,
  setState
}: Props<T>): ArrayStateApi<T> => {

  return {
    clear: () => clear<T>(setState),
    reverse: () => reverse<T>(state, setState),

    pop: () => pop<T>(state, setState),
    push: (...val: T[]) => push<T>(val, state, setState),

    shift: () => shift<T>(state, setState),
    unshift: (...val: T[]) => unshift<T>(val, state, setState),

    insertAt: (val: T, index: number) => insertAt<T>(val, index, state, setState),
    upsertAt: (val: T, index: number) => upsertAt<T>(val, index, state, setState),
    deleteAt: (index: number) => deleteAt<T>(index, state, setState),

    state,
    setState
  };
};

export const useArrayStateApi = <T>(initialState: T[]): ArrayStateApi<T> =>
  useStateApi(arrayStateApiFactory, initialState);