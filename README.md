# use-state-api-hooks

> React hooks for managing reusable stateful object patterns

[![NPM](https://img.shields.io/npm/v/use-state-api-hooks.svg)](https://www.npmjs.com/package/use-state-api-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-state-api-hooks
or 
yarn add use-state-api-hooks
```

## State API Hooks 

### useBooleanStateApi
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

### useArrayStateApi
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

## License

MIT © [BenBrewerBowman](https://github.com/BenBrewerBowman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
