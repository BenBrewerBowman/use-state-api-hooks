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
- [Creating your own state API's](#usestateapi)

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

######
| useBooleanStateApi API | Description |
| ----------- | ----------- |
| state | Boolean state |
| setState | Sets the boolean state |
|  |  |
| setTrue | Sets state to true |
| setFalse | Sets state to false |
| toggle | Toggles boolean state |


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

######
| useArrayStateApi API | Description |
| ----------- | ----------- |
| state | State of the array |
| setState | Sets the array state |
|  |  |
| clear | Clears the array |
|  |  |
| pop | Removes value from end of array |
| push | Pushes value onto end of array |
| shift | removes value from beginning of array (boundary safe) |
| unshift | Adds values to beginning of array |
| reverse | Reverses array |
|  |  |
| insertAt | Inserts value at a given index (boundary safe) |
| upsertAt | Replaces value at a given index (boundary safe) |
| deleteAt | Deletes value at a given index (boundary safe) |


## useUniqueArrayStateApi
State API for unique arrays (sets)


######
| useUniqueArrayStateApi API | Description |
| ----------- | ----------- |
| state | State of the array |
| setState | Sets the array state |
|  |  |
| clear | Clears the array |
|  |  |
| pop | Removes value from end of array |
| push | Pushes unique values onto end of array |
| shift | removes value from beginning of array (boundary safe) |
| unshift | Adds unique values to beginning of array |
| reverse | Reverses array |
| toggle | Removes or adds a unique value to the array |
|  |  |
| insertAt | Inserts unique value at a given index (boundary safe) |
| upsertAt | Replaces unique value at a given index |
| deleteAt | Deletes value at a given index (boundary safe) |


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

######
| useCounterStateApi API | Description |
| ----------- | ----------- |
| count | Value of the counter |
| min | Min boundary of the counter (default 0) |
| max | Max boundary of the counter |
| setState | Sets the counter state |
|  |  |
| increment | Increment the counter by 1 (max safe) |
| incrementBy | Increment the counter by X (max safe) |
|  |  |
| decrementBy | Decrement the counter by 1 (min safe) |
| decrementBy | Decrement the counter by X (min safe) |

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

######
| useAnchorElStateApi API | Description |
| ----------- | ----------- |
| anchorEl | The anchored element |
| clearAnchorEl | Clears the anchored element |
| setAnchorEl | Set's the anchored element from an event |

## useStateApi
State API for creating your own stateful api's. Uses memoized state and methods to prevent recomputing state api methods each rerender.

## License

MIT © [BenBrewerBowman](https://github.com/BenBrewerBowman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
