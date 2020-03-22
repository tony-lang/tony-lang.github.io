---
title: Usage
---

Tony provides a Command Line Interface to compile and run your programs.

## Commands

The following section describes available commands. If you need more information on a given command or want to lookup available options, run `tony command -h`.

### `shell`

:::note Not implemented yet
:::

```sh
tony [...projects]
```

Start a shell session.

#### Arguments

* `projects` - a list of projects to initiallize the shell session with

### `init`

:::note Not implemented yet
:::

```sh
tony init [project]
```

Initializes a new project within a new directory and installs required dependencies. If `project` is not given, you will be prompted for a name.

#### Arguments

* `project` - name of the project to be created

### `run`

```sh
tony run [project] [args...]
```

First compiles and then executes a project. If `project` is not given, the main project file according to the name of the current directory is used.

#### Arguments

* `project` - name of the project to be created
* `args` - supplied arguments at runtime

### `compile`

```sh
tony compile [project]
```

Compiles a project to JavaScripts. If `project` is not given, the main project file according to the name of the current directory is used.

#### Arguments

* `project` - name of the project to be created

### `exec`

```sh
tony exec <file> [...args]
```

Executes a JavaScript source. This command can be used to execute a project that was first compiled with the `compile` command.

#### Arguments

* `file` - name of the file to be executed
* `args` - supplied arguments at runtime

### `parse`

```sh
tony parse <file>
```

Runs the Tree-sitter parser to build an abstract syntax tree of a program.

#### Arguments

* `file` - name of the file to be parsed

## Hot code recompilation

You can use [nodemon](https://github.com/remy/nodemon) to automatically compile to JavaScript as you write your program in Tony. Then you only need to run the [`exec`](#exec) command, to see your code in action.
