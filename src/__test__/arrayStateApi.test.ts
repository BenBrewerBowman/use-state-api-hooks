import { createTestApi } from './createTestApi';
import { arrayStateApiFactory } from '../useArrayStateApi';

const testUseArrayStateApi = (array: Array<any>) =>
  createTestApi(arrayStateApiFactory, array);

describe('arrayStateApi', () => {
  describe('clear', () => {
    test('clears the array state', () => {
      const arrayState = testUseArrayStateApi([1, 2, 3]);
      arrayState.api.clear();
      expect(arrayState.api.state).toEqual([]);
    });
  });

  describe('push', () => {
    test('pushes to the end of the array', () => {
      const arrayState = testUseArrayStateApi([]);
      arrayState.api.push(1);
      expect(arrayState.api.state).toEqual([1]);
      arrayState.api.push(2);
      expect(arrayState.api.state).toEqual([1, 2]);
    });
  });

  describe('pop', () => {
    test('pops states from the end of the array', () => {
      const arrayState = testUseArrayStateApi([1, 2]);
      arrayState.api.pop();
      expect(arrayState.api.state).toEqual([1]);
      arrayState.api.pop();
      expect(arrayState.api.state).toEqual([]);
    });

    test('popping an empty array does nothing', () => {
      const arrayState = testUseArrayStateApi([]);
      arrayState.api.pop();
      expect(arrayState.api.state).toEqual([]);
    });
  });

  describe('shift', () => {
    test('pops off one element from the start of the array', () => {
      const arrayState = testUseArrayStateApi([1, 2, 3]);
      arrayState.api.shift();
      expect(arrayState.api.state).toEqual([2, 3]);
      arrayState.api.shift();
      expect(arrayState.api.state).toEqual([3]);
      arrayState.api.shift();
      expect(arrayState.api.state).toEqual([]);
    });

    test('shifting an empty array does nothing', () => {
      const arrayState = testUseArrayStateApi([]);
      arrayState.api.shift();
      expect(arrayState.api.state).toEqual([]);
    });
  });

  describe('unshift', () => {
    test('pushes elements onto the start of the array', () => {
      const arrayState = testUseArrayStateApi([]);
      arrayState.api.unshift(3, 4);
      expect(arrayState.api.state).toEqual([3, 4]);
      arrayState.api.unshift(1, 2);
      expect(arrayState.api.state).toEqual([1, 2, 3, 4]);
    });
  });
  describe('reverse', () => {
    test('reverses an array', () => {
      const arrayState = testUseArrayStateApi([1, 2, 3, 4, 5]);
      arrayState.api.reverse();
      expect(arrayState.api.state).toEqual([5, 4, 3, 2, 1]);
      arrayState.api.reverse();
      expect(arrayState.api.state).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('insertAt', () => {
    test('inserts states into an array at index', () => {
      const arrayState = testUseArrayStateApi(['Banana', 'Pineapple']);
      arrayState.api.insertAt('Mango', 1);
      expect(arrayState.api.state).toEqual(['Banana', 'Mango', 'Pineapple']);
      arrayState.api.insertAt('Apple', 0);
      expect(arrayState.api.state).toEqual([
        'Apple',
        'Banana',
        'Mango',
        'Pineapple'
      ]);
      arrayState.api.insertAt('Peach', 3);
      expect(arrayState.api.state).toEqual([
        'Apple',
        'Banana',
        'Mango',
        'Peach',
        'Pineapple'
      ]);
    });

    test('inserting out of bounds does nothing', () => {
      const arrayState = testUseArrayStateApi([1, 2, 3]);
      arrayState.api.insertAt(100, 5);
      expect(arrayState.api.state).toEqual([1, 2, 3]);
      arrayState.api.insertAt(-100, -1);
      expect(arrayState.api.state).toEqual([1, 2, 3]);
    });
  });

  describe('upsertAt', () => {
    test('replaces state of array at index', () => {
      const arrayState = testUseArrayStateApi(['Apple', 'Peach', 'Pear']);
      arrayState.api.upsertAt('Grapefruit', 1);
      expect(arrayState.api.state).toEqual(['Apple', 'Grapefruit', 'Pear']);
      arrayState.api.upsertAt('Banana', 0);
      expect(arrayState.api.state).toEqual(['Banana', 'Grapefruit', 'Pear']);
      arrayState.api.upsertAt('Nectarine', 2);
      expect(arrayState.api.state).toEqual([
        'Banana',
        'Grapefruit',
        'Nectarine'
      ]);
      arrayState.api.upsertAt('Carrot', 3);
      expect(arrayState.api.state).toEqual([
        'Banana',
        'Grapefruit',
        'Nectarine'
      ]);
    });

    test('upserting out of bounds does nothing', () => {
      const arrayState = testUseArrayStateApi(['Apple', 'Peach', 'Pear']);
      arrayState.api.upsertAt('Grapefruit', -1);
      expect(arrayState.api.state).toEqual(['Apple', 'Peach', 'Pear']);
      arrayState.api.upsertAt('Banana', 3);
      expect(arrayState.api.state).toEqual(['Apple', 'Peach', 'Pear']);
    });
  });

  describe('deleteAt', () => {
    test('deletes the element at index', () => {
      const arrayState = testUseArrayStateApi([
        'Apple',
        'Banana',
        'Grapefruit',
        'Peach',
        'Pear'
      ]);
      arrayState.api.deleteAt(2);
      expect(arrayState.api.state).toEqual([
        'Apple',
        'Banana',
        'Peach',
        'Pear'
      ]);
      arrayState.api.deleteAt(0);
      expect(arrayState.api.state).toEqual(['Banana', 'Peach', 'Pear']);
      arrayState.api.deleteAt(2);
      expect(arrayState.api.state).toEqual(['Banana', 'Peach']);
    });

    test('does nothing if delete index is out of bounds', () => {
      const arrayState = testUseArrayStateApi(['Apple', 'Banana']);
      arrayState.api.deleteAt(2);
      expect(arrayState.api.state).toEqual(['Apple', 'Banana']);
      arrayState.api.deleteAt(-1);
      expect(arrayState.api.state).toEqual(['Apple', 'Banana']);
    });
  });
});
