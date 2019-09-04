import { useState, useMemo } from 'react';

const useStateApi = (apiFactory: any, initialState: any) => {
  const [state, setState] = useState(initialState);
  return useMemo(() => apiFactory({ state, setState }), [
    state,
    setState,
    apiFactory
  ]);
};

export default useStateApi;
