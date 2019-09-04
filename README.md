# use-state-api-hooks

> React hooks for managing and creating reusable stateful object patterns.

[![NPM](https://img.shields.io/npm/v/use-state-api-hooks.svg)](https://www.npmjs.com/package/use-state-api-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/BenBrewerBowman/use-state-api-hooks.svg?branch=master)](https://travis-ci.org/BenBrewerBowman/use-state-api-hooks)

## Demo
[![Edit use-state-api-hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-state-api-hooks-6r4qh?fontsize=14)

## Install

```bash
npm install --save use-state-api-hooks
or 
yarn add use-state-api-hooks
```

## State API Hooks 

- [Boolean](#usebooleanstateapi)
- [Array](#usearraystateapi)
- [Counter](#usecounterstateapi)
- [Anchor El](#useanchorelstateapi)
- [Creating your own state API's](#usestateapi)

## useBooleanStateApi
State API for boolean values (T or F states)

#### Example
```tsx
import React from "react";
import { useBooleanStateApi } from "use-state-api-hooks";

const styles = {
  button: {
    marginRight: 8,
    marginBottom: 8
  }
};
const BooleanExample = () => {
  const lightSwitch = useBooleanStateApi(false);

  return (
    <div>
      <button onClick={lightSwitch.setTrue} style={styles.button}>
        Turn on
      </button>
      <button onClick={lightSwitch.setFalse} style={styles.button}>
        Turn off
      </button>
      <button onClick={lightSwitch.toggle} style={styles.button}>
        Toggle
      </button>

      <div>The light switch is turned {lightSwitch.state ? "on" : "off"}</div>
    </div>
  );
};

export default BooleanExample;
```

######
| useBooleanStateApi | API Methods |
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

const styles = {
  button: {
    marginRight: 8,
    marginBottom: 8
  }
};

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ArrayExample = () => {
  const list = useArrayStateApi<number>(mockData);

  return (
    <div>
      <button onClick={list.clear} style={styles.button}>
        Clear
      </button>
      <button
        onClick={() => list.push(list.state.length + 1)}
        style={styles.button}
      >
        Push
      </button>
      <button onClick={list.pop} style={styles.button}>
        Pop
      </button>
      <button onClick={list.reverse} style={styles.button}>
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
| useArrayStateApi | API Methods |
| ----------- | ----------- |
| state | State of the array |
| setState | Sets the array state |
|  |  |
| clear | Clears the array |
|  |  |
| pop | Removes value from end of array |
| push | Pushes value onto end of array |
| shift | removes value from beginning of array (does nothing on empty array) |
| unshift | Adds values to beginning of array |
| reverse | Reverses array |
|  |  |
| insertAt | Inserts value at a given index (Boundary safe) |
| upsertAt | Replaces value at a given index (Boundary safe) |
| deleteAt | Deletes value at a given index (Boundary safe) |

## useCounterStateApi
State API for counters

######
| useCounterStateApi | API Methods |
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

######
| useAnchorElStateApi | API Methods |
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
