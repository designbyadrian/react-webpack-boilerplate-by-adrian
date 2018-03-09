# Testing

React 16 Webpack 4 Boilerplate uses linting and unit tests to ensure code quality.

## Eslint

[ESLint](https://eslint.org) is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. This is run before all unit tests, but is also active during development if installed properly in your editor.

#### Requirements

You need to install eslint and its libraries globally to use it from the CLI:

`npm i -g eslint eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint eslint-plugin-import`

## Jest

[Jest](https://facebook.github.io/jest/) is used by Facebook to test all JavaScript code including React applications. A folder named `/coverage` will be created featuring javascript classes and components you have (and haven't) covered.

## Run

Run all tests with

`npm run test`
