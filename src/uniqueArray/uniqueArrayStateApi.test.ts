import { push, toggle, unshift } from "./uniqueArrayFunctions";

const setState = jest.fn();

beforeEach(jest.resetAllMocks);

describe('uniqueArrayStateApi', () => {

  describe('push', () => {
    test('pushes unique values', () => {
      const currentState = [1,2,3];
      const vals = [1,2,3,4,5];
      push(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([1,2,3,4,5]);
    });

    test('pushes deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };

      const currentState = [deepVal1];
      const vals = [deepVal2, deepVal3];

      push(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([deepVal1, deepVal3]);
    });
  });

  describe('unshift', () => {
    test('unshifts unique values', () => {
      const currentState = [3,4,5];
      const vals = [1,2,3,4,5];
      unshift(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([1,2,3,4,5]);
    });

    test('unshifts deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };

      const currentState = [deepVal1];
      const vals = [deepVal2, deepVal3];

      unshift(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([deepVal3, deepVal1]);
    });
  });

  describe('toggle', () => {
    test('toggles unique values', () => {
      const currentState = [1, 2, 3, 4, 5];
      const vals = [1, 2, 3, 6, 7, 8];
      toggle(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([4, 5, 6, 7, 8]);
    });

    test('toggles deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };

      const currentState = [deepVal1];
      const vals = [deepVal2, deepVal3];

      toggle(vals, currentState, setState);
      expect(setState).toHaveBeenCalledWith([deepVal3]);
    });
  });
});
