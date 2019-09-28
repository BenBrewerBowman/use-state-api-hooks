import { useStateApi } from './useStateApi';

export type CounterState = {
  count: number;
  min?: number;
  max?: number;
};

type Props = {
  state: CounterState;
  setState: (counter: CounterState) => void;
};

export const counterStateApiFactory = ({ state, setState }: Props) => {
  const { count, min, max } = state;

  const incrementBy = (val: number) => {
    if (max !== undefined && count + val > max) {
      setState({ ...state, count: max });
    } else {
      setState({ ...state, count: count + val });
    }
  };

  const decrementBy = (val: number) => {
    if (min !== undefined && count - val <= min) {
      setState({ ...state, count: min });
    } else {
      setState({ ...state, count: count - val });
    }
  };

  return {
    increment: () => incrementBy(1),
    decrement: () => decrementBy(1),
    incrementBy,
    decrementBy,

    count,
    min,
    max,

    setState
  };
};

export const useCounterStateApi = ({
  count,
  min = 0,
  max
}: CounterState): ReturnType<typeof counterStateApiFactory> =>
  useStateApi(counterStateApiFactory, { count, min, max });