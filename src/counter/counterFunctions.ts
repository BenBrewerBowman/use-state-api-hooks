import { CounterState } from "./types";

export const incrementBy = (val: number, state: CounterState) => {
  const { max, count } = state;
  if (max !== undefined && count + val > max) {
    return({ ...state, count: max });
  } else {
    return({ ...state, count: count + val });
  }
};

export const decrementBy = (val: number, state: CounterState) => {
  const { min, count } = state;
  if (min !== undefined && count - val <= min) {
    return({ ...state, count: min });
  } else {
    return({ ...state, count: count - val });
  }
};