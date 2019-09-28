import { useStateApi } from './useStateApi';

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
  state: Array<T>;
  setState: (value: Array<T>) => void;
};

export const arrayStateApiFactory = <T>({
  state,
  setState
}: Props<T>): ArrayStateApi<T> => {
  const deleteAt = (index: number) => {
    if (index >= 0 && index < state.length) {
      setState([
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ]);
    }
  };

  return {
    clear: () => setState([]),

    pop: () => {
      if (state.length > 0) {
        setState([...state.slice(0, state.length - 1)]);
      }
    },

    push: (...val: T[]) => setState([...state, ...val]),

    shift: () => {
      if (state.length > 0) {
        deleteAt(0);
      }
    },

    unshift: (...val: T[]) => {
      setState([...val, ...state]);
    },

    reverse: () => {
      setState([...state.reverse()]);
    },

    insertAt: (val: T, index: number) => {
      if (index >= 0 && index < state.length) {
        setState([
          ...state.slice(0, index),
          val,
          ...state.slice(index, state.length)
        ]);
      }
    },

    upsertAt: (val: T, index: number) => {
      if (index >= 0 && index < state.length) {
        setState([
          ...state.slice(0, index),
          val,
          ...state.slice(index + 1, state.length)
        ]);
      }
    },

    deleteAt,

    state,
    setState
  };
};

export const useArrayStateApi = <T>(initialState: T[]): ArrayStateApi<T> =>
  useStateApi(arrayStateApiFactory, initialState);