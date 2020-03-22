---
title: Abstraction & Application
---

In the previous chapter the basic idea behind _abstraction_ and _application_ was already discussed. This chapter will explore how these concepts can be used in Tony.

## Abstraction

Here is how you can abstract operations:

```tn
# returns the applied argument
(x) => x

# returns a tuple containing the two arguments
(a, b) => (a, b)
```

:::info Execute JavaScript
In its current version, Tony does not yet come with a standard library. That means that any abstraction you use also has to be defined by yourself. You can use the `eval` keyword to execute JavaScript inline (e.g. `eval('console.log')` returns an abstraction that if applied to prints to `stdout`).
:::

## Operator & Identifier

Before we move on to make use of our abstractions by applying arguments to them, we have to make an important distinction.
Other than in most programming languages in Tony _operators_ like `+` or `*` are identifiers, This means that their value has to be defined before use in the same way as the value of a regular identifier like `print` would have to be defined.

In their use in [infix applications](#infix-application) and [prefix applications](#prefix-application) there exist a small syntactic differences between operators and regular identifiers which are detailed in the referenced sections.

## Application

Here is how to apply arguments to an abstraction:

```tn
# returns the tuple (1, 2)
((a, b) => (a, b))(1, 2)

# prints 'hello world' to stdout
eval('console.log')('hello world')
```

### Infix Application

Infix applications are useful when applying to an abstraction expecting two arguments.

```tn
+ := (a, b) => eval('{a} + {b}')
1 + 1 # returns 2

add := +
1 `add` 1 # also returns 2
```

:::note
Note here that regular identifiers are surrounded by ` when used in infix applications.
:::

### Prefix Application

Prefix applications are can be used to apply a single argument to an operator without parentheses.

```tn
- := (x) => eval('-{x}')
-1 # is the same as -(1)
```

:::note
Prefix application can only be used for operators and not for regular identifiers.
:::

### Partial Application

Tony [_curries_](https://en.wikipedia.org/wiki/Currying) the parameters of abstractions. This means that whenever multiple arguments are applied to an abstraction at the same time, Tony will instead apply these argumentes ony by one. Whenever an argument is applied and there remain parameters that have not been satisfied, a new abstraction is returned that relects the already applied arguments. This process is also called _partial application_.

Partial application allows for arguments to be applied to an abstraction one by one. `?` can be used as a placeholder to skip the application of a specific parameter.

```tn
tuple := ((a, b) => (a, b))

# returns ((b) => (1, b))
tuple(1)

# returns the tuple (1, 2)
tuple(1)(2)

# returns ((a) => (a, 1))
tuple(?, 1)

# returns the tuple (2, 1)
tuple(?, 1)(2)
```
