import { useStateApi } from '../useStateApi';
import { CounterState } from './types';
import { incrementBy, decrementBy } from './counterFunctions';

type Props = {
  state: CounterState;
  setState: (counter: CounterState) => void;
};

export const counterStateApiFactory = ({ state, setState }: Props) => ({
  
  increment: () => incrementBy(1, state, setState),
  decrement: () => decrementBy(1, state, setState),
  incrementBy: (val: number) => incrementBy(val, state, setState),
  decrementBy: (val: number) => decrementBy(val, state, setState),

  ...state,
  setState
});

export const useCounterStateApi = ({
  count,
  min = 0,
  max
}: CounterState): ReturnType<typeof counterStateApiFactory> =>
  useStateApi(counterStateApiFactory, { count, min, max });