---
id: data_structures
title: Data Structures
---

## List

A list is a sequence of values of the same type.

```tn
[]
[1, 2, 3]
['hello', 'world']
```

## Tuple

A tuple is a sequence of values of different types. A tuple must always contain at least two elements.

```tn
name := 'Tony'
age := 86

(name, age)
```

## Map

A map is a mapping from keys of some type to values of another type.

```tn
{ 'a' -> 1, 'b' -> 2 }

# Shorthand pair identifier
a := 1
b := 2
{ a, b } # is the same as { 'a' -> 1, 'b' -> 2 }
```

## Struct

:::note Not implemented yet
:::

A struct is a mapping from keys of type String to values of different types.

## Spread operator

The spread operator `...` can be used to merge two data structures of the same type:

```tn
# returns [1, 2, 3, 4, 5]
[1, 2, ...[3, 4, 5]]

# returns ('Tony', 86, 'Cambridge', 'Computer Science')
('Tony', 86, ...('Cambridge', 'Computer Science'))

# returns {'a' -> 1, 'b' -> 3, 'c' -> 4}
{ 'a' -> 1, 'b' -> 2, ...{ 'b' -> 3, 'c' -> 4 } }
```

## Access operator

To access data in complex data structures, Tony comes with the access operator `->`.

```tn
# returns 1
[1, 2, 3]->0

# returns 2
{ 'a' -> 1, 'b' -> 2 }->b
```

To evaluate an expression returning the index/key that is accessed, the expression has to be wrapped in square brackets:

```tn
# returns 3
index := 2
[1, 2, 3]->[index]

# returns 1
{ 'a' -> 1, 'b' -> 2 }->['a']
```
