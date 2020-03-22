---
title: Literals
---

## Boolean

A boolean is either `true` or `false`.

## Number

Numbers can be either integers or decimals:

```tn
1       # an integer
1_000   # numbers can contain `_`
1_000.5 # a decimal
1e-3    # number in scientific notation

0b001   # binary
0xDEAD  # hex
0o123   # octal
```

## String

Strings can be defined using `'` or `"`:

```tn
"I'm ok"
'"I\'m ok"'

"multiline \
string"
```

### String interpolation

Expressions can be embedded into strings by surrounding them with braces:

```tn
name := 'Tony'

# returns 'hello Tony'
'hello {name}'
```

## Regular Expression

Tony recognizes regular expressions including flags like `/one/g`.
