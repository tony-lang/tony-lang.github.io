---
id: modules
title: Modules
---

Modules can be used to bundle and namespace assignments. For example, we could create an `io` module that includes a `print` abstraction:

```tn
io := module
  print := eval('console.log')
```

A module is just shorthand syntax for a struct that maps assigned constants to their values. We can thus make us of the `print` abstraction in the `io` module through the [access operator](data_structures.md#access-operator):

```tn
io->print('hello world')
```

## Private assignments

If an assignment should not be available from a module, it can be prefixed with `_`:

```tn
m := module
  _internal := (x) => x
  fn := (x) => _internal(x)

# returns 0
m->fn(0)

# throws an error
m->_internal(0)
```
