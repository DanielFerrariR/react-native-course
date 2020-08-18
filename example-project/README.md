<h1 align="center">
  Example project
</h1>

<p align="center">
  A example project to show the basics of react native
</p>

<a align="center" href="./CHANGELOG.md">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
</a>

## TOC

- [Workspace](#workspace)
- [Configuration](#configuration)
- [Download](#download)

## Workspace

- Visual Studio Code 1.45.1

  - VSCode extensions:

    - Prettier - Code formatter 4.7.0
    - Eslint 2.1.5
    - VSCode MDX 0.1.4

  - VSCode settings:

  ```sh
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    },
    "javascript.validate.enable": false,
    "eslint.validate": ["markdown", "md", "mdx"],
    "prettier.requireConfig": true,
  }
  ```

## Configuration

1. **Install these packages/applications (prefer the listed versions):**

- Node 12.18.2
- Yarn 1.21.1

2. **Install all dependencies with yarn (not npm!!)**

```sh
yarn
```

3. **Commands**

```bash
# Installs all dependendies
$ yarn

# Starts expo server
$ yarn start

# Builds the application for android
$ yarn build:android

# Builds the application for ios
$ yarn build:ios

# Checks Eslint errors
$ yarn lint

# Formats all files with prettier
$ yarn format

# Checks if all files are formatted with prettier
$ yarn check-format

# Checks typescript errors
$ yarn check-types

# Commits with karma interface
$ yarn commit
```

## Download

Android: <https://drive.google.com/file/d/1FuTG8c1iJFgcmc6o5ICMlusprxwa0K1w/view?usp=sharing>
