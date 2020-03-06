import { useState, useMemo, Dispatch, SetStateAction } from 'react';

export const useStateApi = <AF, S>(apiFactory: (setState: Dispatch<SetStateAction<S>>) => AF, initialState: S) => {
  const [state, setState] = useState<S>(initialState);
  return ({
    ...useMemo(() => apiFactory(setState), [apiFactory]),
    state,
    setState
  });
};