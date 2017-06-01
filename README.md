# lint-roller

**This package is deprecated. I have moved on from trying to maintain my own set
of eslint rules. My current preference is [prettier-eslint](https://github.com/prettier/prettier-eslint)
with [standardjs](https://standardjs.com/) eslint rules. If you would like to
take these rules, feel free to fork it, but I'd like the namespace to not stick
around.**

A repo with a collection of the various linting/styling rules that I wish to follow.

# eslint

## base

```json
{
  "extends": "ksmithut"
}
```

## es6 (babel)

`npm install --save-dev babel-eslint`

```json
{
  "extends": "ksmithut/es6"
}
```

## es6 (node 4)

```json
{
  "extends": "ksmithut/es6-node"
}
```

## react

`npm install --save-dev eslint-plugin-react`

```json
{
  "extends": "ksmithut/react"
}
```

## mocha

`npm install --save-dev eslint-plugin-mocha`

```json
{
  "extends": "ksmithut/mocha"
}
```
