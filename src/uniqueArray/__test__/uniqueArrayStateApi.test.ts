import { uniqueArrayStateApiFactory } from "../useUniqueArrayStateApi";

const setState = jest.fn();

beforeEach(jest.resetAllMocks);

describe('uniqueArrayStateApi', () => {

  describe('push', () => {
    test('pushes unique values', () => {
      const factory = uniqueArrayStateApiFactory({ state: [1,2,3], setState });
      const vals = [1,2,3,4,5];
      factory.push(...vals);
      expect(setState).toHaveBeenCalledWith(vals);
    });

    test('pushes deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };      

      const factory = uniqueArrayStateApiFactory({ state: [deepVal1], setState });
      const vals = [deepVal2, deepVal3];
      factory.push(...vals);
      expect(setState).toHaveBeenCalledWith([deepVal1, deepVal3]);
    });
  });

  describe('unshift', () => {
    test('unshifts unique values', () => {
      const state = [3,4,5];
      const vals = [1,2,3,4,5];

      const factory = uniqueArrayStateApiFactory({ state, setState });
      factory.unshift(...vals);
      expect(setState).toHaveBeenCalledWith(vals);
    });

    test('unshifts deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };

      const state = [deepVal1];
      const vals = [deepVal2, deepVal3];

      const factory = uniqueArrayStateApiFactory({ state, setState });
      factory.unshift(...vals);
      expect(setState).toHaveBeenCalledWith([deepVal3, deepVal1]);
    });
  });

  describe('toggle', () => {
    test('toggles unique values', () => {
      const state = [1, 2, 3, 4, 5];
      const vals = [1, 2, 3, 6, 7, 8];

      const factory = uniqueArrayStateApiFactory({ state, setState });
      factory.toggle(...vals);
      expect(setState).toHaveBeenCalledWith([4, 5, 6, 7, 8]);
    });

    test('toggles deep unique values', () => {
      const deepVal1 = { person: { name: 'James', age: 21 } };
      const deepVal2 = { person: { name: 'James', age: 21 } };
      const deepVal3 = { person: { name: 'Sara', age: 21 } };

      const state = [deepVal1];
      const vals = [deepVal2, deepVal3];

      const factory = uniqueArrayStateApiFactory({ state, setState });
      factory.toggle(...vals);
      expect(setState).toHaveBeenCalledWith([deepVal3]);
    });
  });
});
