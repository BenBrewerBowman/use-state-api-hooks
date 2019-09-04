const createTestApi = (apiFactory: any, defaultValue: any) => {
  let state = defaultValue;
  let setState = (updater: any) => {
    if (typeof updater === 'function') {
      state = updater(state);
    } else {
      state = updater;
    }
    // tslint:disable:no-use-before-declare
    ref.api = apiFactory({ state, setState });
  };
  const ref = {
    api: apiFactory({ state, setState })
  };
  return ref;
};

export default createTestApi;
