---
id: syntax
title: Syntax
---

## Operator precedence

The following table lists operator precedence from highest to lowest.

| operator | description |
|---|---|
| `!` | not |
| `^` | exponentiation |
| `*` `/` `%` | product |
| `+` `-` | sum |
| `<` `<=` `>` `>=` | order |
| `==` `!=` `===` `!==` | equality |
| `&&` | and |
| \|\| | or |
| `==>` | implication |
| `<=>` | biconditional |

## AST nodes

## `import`

```ebnf
import = "import", import_clause, "from", string;
import_clause = "{", _import_clause_element, { ",", _import_clause_element }, "}";
_import_clause_element = identifier | import_clause_identifier_pair;
import_clause_identifier_pair = identifier, "->", identifier;
```

## `export`

```ebnf
simple_export = "export", simple_assignment;
compound_export = "export", compound_assignment;
```

tbc...
