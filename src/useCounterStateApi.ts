import useApi from './useApi';

export type CounterState = {
  count: number;
  min?: number;
  max?: number;
};

type Props = {
  state: CounterState;
  setState: (counter: CounterState) => void;
};

const counterStateApiFactory = ({ state, setState }: Props) => {
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

    state,
    setState
  };
};

export { counterStateApiFactory };

const useCounterStateApi = ({
  count,
  min = 0,
  max
}: CounterState): ReturnType<typeof counterStateApiFactory> =>
  useApi(counterStateApiFactory, { count, min, max });
export default useCounterStateApi;
