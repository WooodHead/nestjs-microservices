## Installation

```bash
$ yarn install
$ cp .env.example .env
```

## Running the app

```bash
# development
$ yarn run start edge
$ yarn run start auth
$ yarn run start mailer

# watch mode
$ yarn run start:dev edge
$ yarn run start:dev auth
$ yarn run start:dev mailer

# production mode
$ yarn run start:prod:edge
$ yarn run start:prod:auth
$ yarn run start:prod:mailer
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
