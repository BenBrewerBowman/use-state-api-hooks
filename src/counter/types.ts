export type CounterState = {
  count: number;
  min?: number;
  max?: number;
};

export type SetCounterState = (state: CounterState) => void;