---
title: Pattern Matching
---

Pattern matching is one of the most powerful concepts in Tony. It makes it possible to write very succinct and readable code and plays particularly nicely with Tony's focus on recursion.

A pattern in Tony can either be

* a _destructuring pattern_ (i.e. a list, tuple or map pattern) that contains other patterns;
* a _literal_ that is matched agains the assigned value; or
* an _identifier_ that is defined with the assigned value.

## Destructuring Lists & Tuples

Lists and tuples can be destructured/pattern matched as follows:

```tn
# a := 1, b := [3, 4, 5]
[0, a, 2, ...b] := [0, 1, 2, 3, 4, 5]

# throws an error
[1, 2, ...a] := [0, 1, 2, 3]

# a := 'hello', b := (2, 'Tony')
[(1, a), b] := [(1, 'hello'), (2, 'Tony')]
```

## Destructuring Maps

Maps can be pattern matched in this way:

```tn
# a := 1, b := 2, d := {'d' -> 4}
{ 'key' -> a, b, 'c' -> 3, ...d } := { 'key' -> 1, 'b' -> 2, 'c' -> 3, 'd' -> 4 }
```

## Rest pattern

As shown in the examples above, the rest pattern `...` can be used to pack remaining unmatched values, into a data structure. Rest patterns may only be used as the last pattern within a list, tuple or map pattern.

## Default values

Identifiers within patterns may have a default value:

```tn
# a := 0, b := 1
[a, b = 1] := [0]

# a := 1, b := 2, c := 0
{ a, b = 100, c = 0 } := { 'a' -> 1, 'b' -> 2 }
```

## Abstractions

The important thing to wrap your head around when working with Tony is that parameters are nothing more than a tuple pattern.
This means that your abstractions can also benefit from pattern matching with literals, rest patterns, and default values.

:::note
An important difference to pattern matching in assignments is that if a pattern is not large enough to capture an argument, it does not match:

```tn
# this pattern matches, a := 2, b := 3, c := 4
(1, a, b, c) := (1, 2, 3, 4, 5)

# this pattern does not match, throws an error
((1, a, b, c) => (a, b, c))(1, 2, 3, 4, 5)

# this pattern does match, returns (2, 3, (4, 5))
((1, a, b, ...c) => (a, b, c))(1, 2, 3, 4, 5)
```
:::

### Abstraction Branches

Tony allows you specify multiple patterns for a single abstraction where each of them have a different abstraction body, they are called _branches_:

```tn
fn := (0) => 1, (x) => x
fn(0) # returns 1
fn(1) # returns 1
```

All abstractions we have seen previously were abstractions with just a single branch.

When implementing recursion, one or more base cases are separated from the recursive step. As Tony supports pattern matching, this separation of multiple cases is very natural and easy to follow. Take a look at the following implementation of the Fibonacci sequence:

```tn
+ := (a, b) => eval('{a} + {b}')
- := (a, b) => eval('{a} - {b}')

fib :=
  (0) => 0
  (1) => 1
  (n) => fib(n - 1) + fib(n - 2)
```

#### Example: Quicksort

[Quicksort](https://en.wikipedia.org/wiki/Quicksort) is a sorting algorithm devloped by Tony Hoare that on average terminates in polynomial time.

Through the use of pattern matching, Quicksort can be implemented in Tony in a very reduced and readable fashion.

```tn
+ := (a, b) => eval('[{a}].concat([{b}])')
<= := (a, b) => eval('{a} <= {b}')
> := (a, b) => eval('{a} > {b}')

quicksort :=
  ([]) => []
  ([pivot, ...rest]) =>
    l := quicksort([n | n in rest if n <= pivot])
    r := quicksort([n | n in rest if n > pivot])
    l + [pivot] + r
```

Different from implementations in most other programming languages, this implementation preserves the characteristic features of the algorithm such as choosing a pivot element and then separately sorting smaller and larger elements.

## Properties

There are minor differences in the behavior of pattern matching depending on the area in which it is used.
Namely, there are two properties signifying those differences:

* _partially matching_ - pattern matching is still successful when all arguments are matched, but only some elements of the pattern (i.e. the pattern is larger than the provided value)
* _overmatching_ - pattern matching is still successful when all elements of the pattern are matched, but only some of the arguments (i.e. the provided value is larger than the pattern)

Here is how those properties are distributed among applications of pattern matching:

| | partially matching | overmatching |
|---|---|---|
| assignment | ❌ | ✔️ |
| abstraction | ✔️ in depth `1` | ❌ |
| [case](docs-case.md) | ❌ | ❌ |
