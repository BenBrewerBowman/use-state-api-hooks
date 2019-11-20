import { State, SetState } from "./types";

export const deleteAt = <T>(index: number, state: State<T>, setState: SetState<T>) => {
  if (index >= 0 && index < state.length) {
    setState([
      ...state.slice(0, index),
      ...state.slice(index + 1, state.length)
    ]);
  }
};

export const clear = <T>(setState: SetState<T>) => setState([]);

export const pop = <T>(state: State<T>, setState: SetState<T>) => {
  if (state.length > 0) {
    setState([...state.slice(0, state.length - 1)]);
  }
};

export const push = <T>(val: T[], state: State<T>, setState: SetState<T>) => setState([...state, ...val]);

export const shift = <T>(state: State<T>, setState: SetState<T>) => {
  if (state.length > 0) {
    deleteAt<T>(0, state, setState );
  }
};

export const unshift = <T>(val: T[], state: State<T>, setState: SetState<T>) => {
  setState([...val, ...state]);
};

export const reverse = <T>(state: State<T>, setState: SetState<T>) => {
  setState([...state.reverse()]);
};

export const insertAt = <T>(val: T, index: number, state: State<T>, setState: SetState<T>) => {
  if (index >= 0 && index < state.length) {
    setState([
      ...state.slice(0, index),
      val,
      ...state.slice(index)
    ]);
  }
};

export const upsertAt = <T>(val: any, index: number, state: State<T>, setState: SetState<T>) => {
  if (index >= 0 && index < state.length) {
    state[index] = val;
    setState([...state]);
  }
};