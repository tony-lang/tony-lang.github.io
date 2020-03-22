---
id: import_export
title: Import & Export
---

Imports and exports are used to make bindings available across multiple files. Both `import` and `export` may not be nested within blocks.

## Export

To export a binding from a file, just prefix the assignment with `export`.

```tn
export print := eval('console.log')
```

## Import

To import a binding from another file, add an `import` statement to the top of your file.

```tn
import { print } from './print.tn'

# prints `hello Tony` to stdout
print('hello Tony')
```

The imported bindings can also be renamed:

```tn
import { print -> puts } from './print.tn'

# prints `hello Tony` to stdout
puts('hello Tony')
```

## External Imports

`import` can also import JavaScript functions.

```js
export const print = console.log
```

```tn
import { print } from './print.js'

# prints `hello Tony` to stdout
print('hello Tony')
```
