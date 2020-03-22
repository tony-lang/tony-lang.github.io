---
title: Assignments
---

As discussed in the first chapter, assignments in Tony are _immutable_. That means that once you declare a constant in Tony, you cannot re-declare its value.

Like in most other programming languages, constants are _scoped_ to (i.e. accessible from) the block in which they are declared and all its children. Therefore, a constant declared within an abstraction is only available from within the same abstraction. On the other hand a constant declared outside an abstraction is available from within the abstractions that are created in the same block.

Lets look at an example. To globally define a `print` abstraction (i.e. an abstraction that is available everywhere in the program), one could do the following:

```tn
print := eval('console.log')
```

`print` can now also be accessed from nested abstractions:

```tn
print := eval('console.log')

abstraction := (x) =>
  y := x
  print(y)

# prints 0 to stdout
abstraction(0)

# y is not accessible from outside `abstraction`
```
