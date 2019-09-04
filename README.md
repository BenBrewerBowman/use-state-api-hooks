# use-state-api-hooks

> React hooks for managing reusable stateful object patterns

[![NPM](https://img.shields.io/npm/v/use-state-api-hooks.svg)](https://www.npmjs.com/package/use-state-api-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-state-api-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-state-api-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [BenBrewerBowman](https://github.com/BenBrewerBowman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
