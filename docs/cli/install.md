---
title: Installation
---

### Prerequisites

Tony requires [Node](nodejs.org) version `10.0` or greater. To check your Node version run `node -v`.

### Install with Yarn

```sh
yarn global add tony-lang
```

### Install with NPM

```sh
npm install -g tony-lang
```

### Install from source

```sh
git clone git@github.com:tony-lang/tony.git
yarn install
yarn build
yarn link
```

### Test installation

Run `tony -v` to ensure that the installation was successful.
