import { State } from "./types";
import _ from 'lodash';
import { 
  insertAt as arrayInsertAt,
  push as arrayPush,
  unshift as arrayUnshift,
  upsertAt as arrayUpsertAt
} from '../array/arrayFunctions';


const findIndex = <T>(arr: T[], value: T) =>
    arr.findIndex(element => _.isEqual(element, value));

export const toggle = <T>(values: T[], state: State<T>) => {
  const stateCopy = [...state];
  values.forEach(value => {
    const index = findIndex(stateCopy, value);
    if (index >= 0) {
      stateCopy.splice(index, 1);
    } else {
      stateCopy.push(value);
    }
  });
  return stateCopy;
};

export const push = <T>(values: T[], state: State<T>) => {
  const uniqueNewVals: T[] = [];
  values.forEach(value => {
    if (findIndex(state, value) < 0) {
      uniqueNewVals.push(value);
    }
  });
  return arrayPush(uniqueNewVals, state);
};

export const unshift = <T>(values: T[], state: State<T>) => {
  const uniqueNewVals: T[] = [];
  values.forEach(value => {
    if (findIndex(state, value) < 0) {
      uniqueNewVals.push(value);
    }
  });
  return arrayUnshift(uniqueNewVals, state);
};

export const upsertAt = <T>(val: T, index: number, state: State<T>) => {
  const indexOfVal = findIndex(state, val);
  if (indexOfVal < 0) {
    return arrayUpsertAt(val, index, state);
  }
  return state;
};

export const insertAt = <T>(val: T, index: number, state: State<T>) => {
  const indexOfVal = findIndex(state, val);
  if (indexOfVal < 0) {
    return arrayInsertAt(val, index, state);
  }
  return state;
};