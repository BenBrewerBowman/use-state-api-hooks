import { useState, useMemo } from 'react';

export const useStateApi = (apiFactory: any, initialState: any) => {
  const [state, setState] = useState(initialState);
  return useMemo(() => apiFactory({ state, setState }), [
    state,
    setState,
    apiFactory
  ]);
};