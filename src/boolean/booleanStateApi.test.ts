import { createTestApi } from '../createTestApi';
import { booleanStateApiFactory } from './useBooleanStateApi';

const testUseBooleanStateApi = (bool: boolean) =>
  createTestApi(booleanStateApiFactory, bool);

describe('booleanStateApi', () => {
  test('sets true', () => {
    const booleanState = testUseBooleanStateApi(false);
    booleanState.api.setTrue();
    expect(booleanState.api.state).toEqual(true);
  });

  test('sets false', () => {
    const booleanState = testUseBooleanStateApi(true);
    booleanState.api.setFalse();
    expect(booleanState.api.state).toEqual(false);
  });

  test('toggles state', () => {
    const booleanState = testUseBooleanStateApi(false);
    booleanState.api.toggle();
    expect(booleanState.api.state).toEqual(true);
    booleanState.api.toggle();
    expect(booleanState.api.state).toEqual(false);
  });
});
