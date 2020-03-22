---
id: conditionals
title: Conditionals
---

Conditionals in Tony are similar to most other programming languages.

As discussed in the first chapter, as Tony is expression-oriented, conditionals always return a value. You can therefore use the result of a conditional directly in an assignment.

```
cond := true
otherCond := false

# returns 'true'
if cond then 'true' else 'false'

# value := 'hello'
value :=
  if cond
    'hello'
  else if otherCond
    'world'
  else
    '...'
```
