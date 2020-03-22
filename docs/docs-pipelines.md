---
title: Pipelines
---

A pipeline applies the value to its left as the first argument to the abstraction to its right. This is usually referred to as _"piping"_.

Lets start by looking at a very reduced example. The following pipeline, pipes the value `'hello world'` into the abstraction `print`:

```tn
print := eval('console.log')

# prints `hello world` to stdout
'hello world'.print
```

Pipelines work well with partial application. In the next example we define an abstraction `inc` that always adds `1` to its argument based on the `+` abstraction:

```
+ := (a, b) => eval('{a} + {b}')

# returns 100
99 . +1

inc := +1

# also returns 100
99.inc
```

## Function composition

Pipelines are similar to function composition in mathematics. But where in mathematics composing the function `g` with the function `f` results in `g(f(x))` (i.e. `f` being applied to first), Tony first takes the left argument of the pipeline and applies it to the right argument. Pipelines in Tony can therefore be looked at as function composition in reverse order.

The benefit of reversing the argument ordering of function composition lies in readability. In Tony a pipeline resembles how data flows from one abstraction to the next from left to right whereas function composition in mathematics resembles data flow from right to left.

In the following example, first `f` is applied to the given value, then `g` and then `h`:

```tn
0 . f . g . h

# yielding the same result
comp := f . g . h
comp(0)
```
