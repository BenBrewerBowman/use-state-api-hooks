import { State, SetState } from "./types";
import _ from 'lodash';
import { 
  insertAt as arrayInsertAt,
  push as arrayPush,
  unshift as arrayUnshift,
  upsertAt as arrayUpsertAt
} from '../array/arrayFunctions';


const findIndex = <T>(arr: T[], value: T) =>
    arr.findIndex(element => _.isEqual(element, value));

export const toggle = <T>(values: T[], state: State<T>, setState: SetState<T>) => {
  const stateCopy = [...state];
  values.forEach(value => {
    const index = findIndex(stateCopy, value);
    if (index >= 0) {
      stateCopy.splice(index, 1);
    } else {
      stateCopy.push(value);
    }
  });
  setState(stateCopy);
};

export const push = <T>(values: T[], state: State<T>, setState: SetState<T>) => {
  const uniqueNewVals: T[] = [];
  values.forEach(value => {
    if (findIndex(state, value) < 0) {
      uniqueNewVals.push(value);
    }
  });
  arrayPush(uniqueNewVals, state, setState);
};

export const unshift = <T>(values: T[], state: State<T>, setState: SetState<T>) => {
  const uniqueNewVals: T[] = [];
  values.forEach(value => {
    if (findIndex(state, value) < 0) {
      uniqueNewVals.push(value);
    }
  });
  arrayUnshift(uniqueNewVals, state, setState);
};

export const upsertAt = <T>(val: T, index: number, state: State<T>, setState: SetState<T>) => {
  const indexOfVal = findIndex(state, val);
  if (indexOfVal < 0) {
    arrayUpsertAt(val, index, state, setState);
  }
};

export const insertAt = <T>(val: T, index: number, state: State<T>, setState: SetState<T>) => {
  const indexOfVal = findIndex(state, val);
  if (indexOfVal < 0) {
    arrayInsertAt(val, index, state, setState);
  }
};