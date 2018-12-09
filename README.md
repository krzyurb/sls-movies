<p align="center">
  <img src="https://github.com/serverless/assets/blob/master/Icon/Serverless_lockup_icon-red.png?raw=true" width="50">
</p>

# Serverless Boilerplate

## Using as a template

You can use that boilerplate when generating new
Serverless project using serverless cli:

```
$ serverless create --template-url https://github.com/krzyurb/sls-boilerplate --name your-project-name
$ cd your-project-name
$ yarn
```

## Installation

```
$ cp env.yml.example env.yml
$ yarn install
```

## Testing

This project uses [jest](https://jestjs.io/) and [sinonjs](sinonjs) for tests. It also includes CircleCI config file.

To start test suite simply run:

```
$ yarn test
```

## Serverless plugins

* [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack)
* [serverless-offline](https://github.com/dherault/serverless-offline)
