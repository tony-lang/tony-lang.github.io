---
id: list_comprehensions
title: List Comprehensions
---

Tony supports list comprehensions, posing an alternative to recursion and higher-order functions like `map` when implementing loops.

Say, we want to add `1` to each number from `1` to `3`:

```tn
+ := (a, b) => eval('{a} + {b}')

# returns [2, 3, 4]
[x + 1 | x in [1, 2, 3]]
```

A list conprehension in Tony consists of an evaluated expression and a list of generators. A generator represents a variable taking one values in a list. A generator may also include a condition:

```tn
+ := (a, b) => eval('{a} + {b}')
< := (a, b) => eval('{a} < {b}')

# returns [2, 3]
[x + 1 | x in [1, 2, 3] if x < 3]
```

A two dimensional list comprehension would look like this:

```tn
+ := (a, b) => eval('{a} + {b}')

# returns [5, 6, 6, 7, 7, 8]
[x + y | x in [1, 2, 3], y in [4, 5]]
```
