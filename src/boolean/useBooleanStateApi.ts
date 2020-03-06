import { useStateApi } from '../useStateApi';
import { Dispatch, SetStateAction } from 'react';

type State = boolean;

export const booleanStateApiFactory = (setState: Dispatch<SetStateAction<State>>) => ({
  setTrue: () => setState(true),
  setFalse: () => setState(false),
  toggle: () => setState(state => !state)
});

export const useBooleanStateApi = (
  initialState: State
)=> useStateApi<ReturnType<typeof booleanStateApiFactory>, State>(
  booleanStateApiFactory, initialState
);