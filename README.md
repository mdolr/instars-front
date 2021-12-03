# tinyinsta-front

An instagram clone written in Vue deployed on App Engine to scale!

## Setup

### Development environment

Requirements:

- node >= 17.0.1 (won't work below)
- yarn >= 1.22.17

```bash
# First clone the project
git clone https://github.com/mdolr/tinyinsta-front.git

# Go into the directory
cd instars-front

# Install dependencies
yarn

# Stat the project
yarn serve
```

The project is available on : [localhost:3000](http://localhost:3000)

## Code-styling

Use :

- prettier [see](https://prettier.io/)
- eslint [see](https://eslint.org/)

## Testing

Run tests with

```
yarn test:e2e
```

## Build

```
yarn build
```

## Deploy

Setup deployment workflow by following [this tutorial](https://medium.com/@brian.young.pro/how-to-deploy-vue-js-app-to-google-cloud-with-cloud-build-ad104bb1cf60)
