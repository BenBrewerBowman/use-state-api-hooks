import { useStateApi } from '../useStateApi';
import { CounterState } from './types';
import { incrementBy, decrementBy, setCount, setMin, setMax } from './counter.reducers';
import { Dispatch, SetStateAction } from 'react';

export const counterStateApiFactory = (setState: Dispatch<SetStateAction<CounterState>>) => ({
  increment: () => setState(incrementBy(1)),
  decrement: () => setState(decrementBy(1)),
  incrementBy: (val: number) => setState(incrementBy(val)),
  decrementBy: (val: number) => setState(decrementBy(val)),

  setCount: (count: CounterState['count']) => setState(setCount(count)),
  setMin: (min: CounterState['min']) => setState(setMin(min)),
  setMax: (max: CounterState['min']) => setState(setMax(max)),
});

export const useCounterStateApi = ({
  min,
  max,
  count = 0,
}: CounterState) => {
  const {state, setState, ...counterStateApi} = useStateApi<ReturnType<typeof counterStateApiFactory>, CounterState>(counterStateApiFactory, { count, min, max });

  return ({
    count: state.count,
    min: state.min,
    max: state.max,
    ...counterStateApi
  });
};