---
id: case
title: Case
---

The `case` expression can be used to conditionally execute fragments of code depending on the value or type of an expression.

```tn
# returns 3
case [1, 2, 3]
when [1], [1, 2] then 0
when [1, 2, x] then x
else -1
```

Each `when` clause expects a comma separated list of patterns to match. If one of the provided patterns match, the corresponding body is executed. If no `when` clause has a match, the `else` clause is executed (if it is present).
