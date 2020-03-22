---
id: introduction
title: Introduction
---

A program structures the flow of data in memory. We often write functions to extract fragments from this manipulation of data and make them reusable. Tony reduces the idea of a program to that fundamental core, but adds some ideas that make these programs easier to reason about. Those ideas will be discussed in the following document.

## Abstraction & Application

[Lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) is a theory devised by the mathematician Alonzo Church that can be used to model computation. The concepts introduced by lambda calculus are also at the core of Tony's design.
Lambda calculus introduces the notion of **abstraction**, which is similar to a _function_ or _closure_, and **application**, which describes _calling a function_. Tony borrows these terms, so don't be surprised when they come up again in this document.

But Tony goes further than just renaming functions to abstractions and function calls to applications. These two concepts are at the foundation of everything else that you write in a Tony program. Most higher level concepts do nothing more than to hide the abstraction of reused fragments and their application behind a fancy syntax.

## Immutability

Using only the two concepts of _abstraction_ and _application_, programs can become very confusing. This is because there is no way of actually storing an intermediate value or the abstraction of a value in memory to be accessed later. This is why Tony, and pretty much any other general purpose programming language for that matter, supports assignments.

Without assignments an abstraction could not be used to reuse fragments of code, but only to delay its execution (until it is applied).

Other than in most other programming languages though, all assignments in Tony are immutable. That means once a value is assigned to a constant, the constant cannot be reassigned to yet another value. At a first glance that might seem like an unnecessary restriction, but there are many compelling reasons why enforcing immutability actually improves the readability, maintainability and safety of programs:

1. in the most trivial case, immutability of values ensures that no value is overwritten accidentally at a later point in time.
2. when applying an argument to an abstraction, you can be sure that the value of that argument is the exact same when the applied abstraction returns.
3. in a concurrent context, the immutability of values prevents race conditions.

Somewhat unintuitively, states can still be expressed with immutable values. A common approach is to create a copy of the old value with the applied change. Through the use of Persistent Data Sctructure those copy operations can be virtually as efficient as mutating the original data structure.

## Expressions

In Tony everything you write in a program is or is part of an expression. An expression is any structure in your code code that returns a value (in contrast to a statement). Therefore, in Tony, every syntactic element (with the exception of imports and exports) return a value.

This means, for example, that you don't need to explicitly return from abstractions or that you can easily assign the result of an `if` expression to a constant.

You can always stop execution of the current block and return a value using `return`.

## Recursion

Tony does not have any iterative loops. Instead, to achieve repeated computation, recursion is used. There are some good reasons for this limitation:

1. recursion encourages the extraction of code fragments into abstractions, making code more readable
2. not supporting loops encourages the use of ranges and higher-order abstractions like `map` and `reduce` that are implemented recursively, also enhancing the readability of code

All loops can easily be transformed into tail recursive functions. Therefore, this syntactic limitation does not restrict expressiveness of programs written in Tony.
