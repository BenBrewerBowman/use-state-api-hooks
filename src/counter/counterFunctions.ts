import { CounterState, SetCounterState } from "./types";

export const incrementBy = (val: number, state: CounterState, setState: SetCounterState) => {
  const { max, count } = state;
  if (max !== undefined && count + val > max) {
    setState({ ...state, count: max });
  } else {
    setState({ ...state, count: count + val });
  }
};

export const decrementBy = (val: number, state: CounterState, setState: SetCounterState) => {
  const { min, count } = state;
  if (min !== undefined && count - val <= min) {
    setState({ ...state, count: min });
  } else {
    setState({ ...state, count: count - val });
  }
};