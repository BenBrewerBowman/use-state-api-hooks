import { useStateApi } from './useStateApi';

type Props = {
  state: boolean;
  setState: (value: boolean) => void;
};

export const booleanStateApiFactory = ({ state, setState }: Props) => {
  return {
    setTrue: () => setState(true),
    setFalse: () => setState(false),
    toggle: () => setState(!state),

    state,
    setState
  };
};

export const useBooleanStateApi = (
  initialState: boolean
): ReturnType<typeof booleanStateApiFactory> =>
  useStateApi(booleanStateApiFactory, initialState);