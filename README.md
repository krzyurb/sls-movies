# Slack bot that suggests a random 80s action flick.

Project inspired by [#noServerNovember](https://serverless.com/blog/no-server-november-challenge/) challenge. Slack bot that suggests a random 80s action flick.
After using `/action` slash command - bot responds with random '80 action movie fetched from [themoviedb.org](http://www.themoviedb.org/).


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
