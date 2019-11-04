# use-state-api-hooks

> React hooks for managing and creating reusable stateful object patterns.

[![NPM](https://img.shields.io/npm/v/use-state-api-hooks.svg)](https://www.npmjs.com/package/use-state-api-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/BenBrewerBowman/use-state-api-hooks.svg?branch=master)](https://travis-ci.org/BenBrewerBowman/use-state-api-hooks)

## Demo
[![Edit use-state-api-hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-state-api-hooks-go48q?fontsize=14)

## Install

```bash
npm install --save use-state-api-hooks
or 
yarn add use-state-api-hooks
```

## Idea 

You can read about the inspiration behind this library [here](https://medium.com/free-code-camp/why-you-should-choose-usestate-instead-of-usereducer-ffc80057f815)


## State API Hooks 

- [Boolean](#usebooleanstateapi)
- [Array](#usearraystateapi)
- [Unique Array (Set)](#useuniquearraystateapi)
- [Counter](#usecounterstateapi)
- [Anchor El](#useanchorelstateapi)
- [Creating your own state API's](#creating-your-own-stateapis)

## useBooleanStateApi
State API for boolean values (T or F states)

#### Example
```tsx
import React from "react";
import { useBooleanStateApi } from "use-state-api-hooks";

const BooleanExample = () => {
  const lightSwitch = useBooleanStateApi(false);

  return (
    <div>
      <button onClick={lightSwitch.setTrue} >
        Turn on
      </button>
      <button onClick={lightSwitch.setFalse} >
        Turn off
      </button>
      <button onClick={lightSwitch.toggle} >
        Toggle
      </button>

      <div>The light switch is turned {lightSwitch.state ? "on" : "off"}</div>
    </div>
  );
};

export default BooleanExample;
```

| Name | Type | Default | Description
:--- | :--- | :------ | :----------
| state | Boolean | | State of the boolean object
| setState | Function(state: Boolean): void | | Sets the boolean state
|  |  |  |  |
| setTrue | Function(): void | | Sets state to true 
| setFalse | Function(): void | | Sets state to false 
| toggle | Function(): void | | Toggles boolean state 


## useArrayStateApi
State API for arrays (array states)

```tsx
import React from "react";
import { useArrayStateApi } from "use-state-api-hooks";

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ArrayExample = () => {
  const list = useArrayStateApi<number>(mockData);

  return (
    <div>
      <button onClick={list.clear} >
        Clear
      </button>
      <button
        onClick={() => list.push(list.state.length + 1)}
      >
        Push
      </button>
      <button onClick={list.pop} >
        Pop
      </button>
      <button onClick={list.reverse} >
        Reverse
      </button>

      {list.state.map(listItem => (
        <div key={listItem}>{listItem} </div>
      ))}
    </div>
  );
};

export default ArrayExample;
```

| Name | Type | Default | Description
:--- | :--- | :------ | :----------
| state | Array<T> | | State of the array object
| setState | Function(state: Array<T>): void | | Sets the array state
| | | | 
| clear | Function(): void | | Empty's the array ([])
| reverse | Function(): void | | Reverses the array
| | | |
| pop | Function(): void | | Pops value off of the end of the array (does nothing on empty array)
| push | Function(...vals: T[]) | | Pushes values onto end of the array
| shift | Function(): void | | Removes value from beginning of array (does nothing on empty array)
| unshift | Function(...vals: T[]) | | Pushes values onto beginning of array
| | | |
| insertAt | Function(val: T, index: number): void | | Inserts value at a given index (Does nothing out of bounds)
| upsertAt | Function(val: T, index: number): void | | Removes value from beginning of array (Does nothing out of bounds)
| deleteAt | Function(index: number): void | | Removes value from beginning of array (Does nothing out of bounds)


## useUniqueArrayStateApi
State API for unique arrays (sets)

| Name | Type | Default | Description
:--- | :--- | :------ | :----------
| state | Array<T> | | State of the array object with unique vals
| setState | Function(state: Array<T>): void | | Sets the array state with unique vals
| | | | 
| clear | Function(): void | | Empty's the array ([])
| reverse | Function(): void | | Reverses the array
| | | |
| toggle | Function(...vals: T[]): void | | For each val, either adds it to the array if it doesn't exist, or removes it if it already exists |
| pop | Function(): void | | Pops value off of the end of the array (does nothing on empty array)
| push | Function(...vals: T[]) | | Pushes unique values onto end of the array
| shift | Function(): void | | Removes value from beginning of array (does nothing on empty array)
| unshift | Function(...vals: T[]) | | Pushes unique values onto beginning of array
| | | |
| insertAt | Function(val: T, index: number): void | | Inserts unique value at a given index (Does nothing out of bounds or for nonunique vals)
| upsertAt | Function(val: T, index: number): void | | Removes value from beginning of array (Does nothing out of bounds or for nonunique vals)
| deleteAt | Function(index: number): void | | Removes value from beginning of array (Does nothing out of bounds)


## useCounterStateApi
State API for counters

```tsx
import React from "react";
import { useCounterStateApi } from "use-state-api-hooks";

const CounterExample = () => {
  const counter = useCounterStateApi({ min: 0, max: 10, count: 0 });

  return (
    <div>
      <button onClick={counter.increment} >
        Increment
      </Button>
      <button onClick={counter.decrement} >
        Decrement
      </Button>

      <h4>
        Count: {counter.count}
      </h4>
    </div>
  );
};
```

| Name | Type | Default | Description
:--- | :--- | :------ | :----------
| count | Number | | Value of the counter
| min | Number | 0 | Minimum possible value of the counter
| max | Number | | Maximum possible value of the counter
| setState | Function(state: {count: Number, min: Number, max: Number}): void | | Sets the counter state
| | | | 
| increment | Function(): void | | Increment the count by 1 (won't go above max)
| incrementBy | Function(x: Number): void | | Increment the count by 'x' (won't go above max)
| | | |
| decrement | Function(): void | | Decrement the count by 1 (won't go below min)
| incrementBy | Function(x: Number): void | | Decrement the count by 'x' (won't go below min)


## useAnchorElStateApi
State API for anchor elements (ie a button that opens a menu in its location)

```tsx
import React from "react";
import { useAnchorElStateApi } from "use-state-api-hooks";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const AnchorElExample = () => {
  const { anchorEl, setAnchorEl, clearAnchorEl } = useAnchorElStateApi(null);

  return (
    <div >
      <Button onClick={setAnchorEl}>Open Menu</Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={clearAnchorEl}
      >
        <MenuItem onClick={clearAnchorEl}>Profile</MenuItem>
        <MenuItem onClick={clearAnchorEl}>My account</MenuItem>
        <MenuItem onClick={clearAnchorEl}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
```

| Name | Type | Default | Description
:--- | :--- | :------ | :----------
| anchorEl | React.MouseEvent<HTMLElement> or null | | Anchored element
| setAnchorEl | Function(element: React.MouseEvent<HTMLElement> or null): void | Sets the anchored element
| clearAnchorEl | Function(): void | | Clears the anchored element (sets anchorEl state to null)
| setState | Function(state: {count: Number, min: Number, max: Number}): void | | Sets the counter state


## Creating your own StateAPIs
In addition to providing some common stateful object patterns, `useStateApiHooks` can be used to build your own stateful api's. This library follows compositional factory patterns, where each stateful api has a state api factory describing the state api interface. The `useStateApi` hook is a general hook at the base of every state api hook that takes a state api factory as a first argument, and an initial state as a second argument. 

```
useStateApi(<yourStateApiFactory>, <initialState>);
```

From there, it memoizes the state and state methods, and returns your state api hook. 

### useStateApi example
Below is an example of how you would use `useStateApi` to create a boolean stateful object using JS. If you are using TS, [here](https://github.com/BenBrewerBowman/use-state-api-hooks/blob/master/src/boolean/useBooleanStateApi.ts) is the source code.

```js
// this is how to create useBooleanStateApi is created using JS
import { useStateApi } from 'use-state-api-hooks';

export const booleanStateApiFactory = ({ state, setState }) => {
  return {
    setTrue: () => setState(true),
    setFalse: () => setState(false),
    toggle: () => setState(!state),

    state,
    setState
  };
};

export const useBooleanStateApi = (initialState) => useStateApi(booleanStateApiFactory, initialState);
```

## useStateApi compositional architecture
For scalable architecture, `useStateApiHooks` suggests using compositional factory patterns. This will help prevent architectural problems associated with classical inheritance, and will give you decoupled reusable factory methods.

```js

// mammalMethods.js
const play = (state, setState) => {...}
const walk = (state, setState) => {...}
const run = (state, setState) => {...}


// useCatStateApi.js
import { useStateApi } from 'use-state-api-hooks';
import { play, walk, run } from './mammalMethods';

export const catStateApiFactory = ({ state, setState }) => {
  return {

    // these are methods imported from mammalMethods
    play: () => play(state, setState),
    walk: () => walk(state, setState),
    run: () => run(state, setState),

    // these are specific cat methods
    meow: () => {...}
    takeBath: () => {...}

    state,
    setState
  };
};

export const useCatStateApi = (initialState) => useStateApi(dogStateApiFactory, initialState);

// useDogStateApi.js
import { useStateApi } from 'use-state-api-hooks';
import { play, walk, run } from './mammalMethods';

export const dogStateApiFactory = ({ state, setState }) => {
  return {

    // these are methods imported from mammalMethods
    play: () => play(state, setState),
    walk: () => walk(state, setState),
    run: () => run(state, setState),

    // these are specific dog methods
    bark: () => {...}
    smile: () => {...}

    state,
    setState
  };
};

export const useDogStateApi = (initialState) => useStateApi(dogStateApiFactory, initialState);
```

## License

MIT © [BenBrewerBowman](https://github.com/BenBrewerBowman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
