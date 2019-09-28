import { createTestApi } from './createTestApi';
import { counterStateApiFactory, CounterState } from '../useCounterStateApi';

const testUseCounterStateApi = (initialState: CounterState) =>
  createTestApi(counterStateApiFactory, initialState);

describe('counterStateApi', () => {
  describe('increment', () => {
    test('adds 1 to the count', () => {
      const arrayState = testUseCounterStateApi({ count: 0 });
      arrayState.api.increment();
      expect(arrayState.api.count).toEqual(1);
      arrayState.api.increment();
      expect(arrayState.api.count).toEqual(2);
    });

    test('wont increment past max', () => {
      const arrayState = testUseCounterStateApi({ count: 0, max: 1 });
      arrayState.api.increment();
      expect(arrayState.api.count).toEqual(1);
      arrayState.api.increment();
      expect(arrayState.api.count).toEqual(1);
    });
  });

  describe('incrementBy', () => {
    test('adds X to the count', () => {
      const arrayState = testUseCounterStateApi({ count: 0 });
      arrayState.api.incrementBy(5);
      expect(arrayState.api.count).toEqual(5);
      arrayState.api.incrementBy(10);
      expect(arrayState.api.count).toEqual(15);
    });

    test('wont increment past max', () => {
      const arrayState = testUseCounterStateApi({ count: 0, max: 10 });
      arrayState.api.incrementBy(5);
      expect(arrayState.api.count).toEqual(5);
      arrayState.api.incrementBy(10);
      expect(arrayState.api.count).toEqual(10);
    });
  });

  describe('decrement', () => {
    test('removes 1 from the count', () => {
      const arrayState = testUseCounterStateApi({ count: 5 });
      arrayState.api.decrement();
      expect(arrayState.api.count).toEqual(4);
      arrayState.api.decrement();
      expect(arrayState.api.count).toEqual(3);
    });

    test('wont decrement below min', () => {
      const arrayState = testUseCounterStateApi({ count: 1, min: 0 });
      arrayState.api.decrement();
      expect(arrayState.api.count).toEqual(0);
      arrayState.api.decrement();
      expect(arrayState.api.count).toEqual(0);
    });
  });

  describe('decrementBy', () => {
    test('subtracts X from the count', () => {
      const arrayState = testUseCounterStateApi({ count: 20 });
      arrayState.api.decrementBy(5);
      expect(arrayState.api.count).toEqual(15);
      arrayState.api.decrementBy(10);
      expect(arrayState.api.count).toEqual(5);
    });

    test('wont decrement below min', () => {
      const arrayState = testUseCounterStateApi({ count: 10, min: 0 });
      arrayState.api.decrementBy(5);
      expect(arrayState.api.count).toEqual(5);
      arrayState.api.decrementBy(10);
      expect(arrayState.api.count).toEqual(0);
    });
  });
});
