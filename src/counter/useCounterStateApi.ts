import { useStateApi } from '../useStateApi';
import { CounterState } from './types';
import { incrementBy, decrementBy } from './counterFunctions';

type Props = {
  state: CounterState;
  setState: (counter: CounterState) => void;
};

export const counterStateApiFactory = ({ state, setState }: Props) => ({
  
  increment: () => setState(incrementBy(1, state)),
  decrement: () => setState(decrementBy(1, state)),
  incrementBy: (val: number) => setState(incrementBy(val, state)),
  decrementBy: (val: number) => setState(decrementBy(val, state)),

  ...state,
  setState
});

export const useCounterStateApi = ({
  count,
  min = 0,
  max
}: CounterState): ReturnType<typeof counterStateApiFactory> =>
  useStateApi(counterStateApiFactory, { count, min, max });