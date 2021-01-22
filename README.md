# Bridge

This repository provides the bridge between Razer Network and other decentralized Networks.

## Summary

- [Getting Started](README.md#getting-started)
- [Dependencies](src/package.json)
- [Supported Networks](README.md#supported-networks)
- [Visit RazerScan](README.md#visit-razerscan)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install either `npm` or `yarn` to build this project. Here are the link to resources to get started.

- [`npm`](https://www.npmjs.com/get-npm)
- [`yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Installing

First of all clone the repository using the following command.

```bash
git clone https://github.com/razor-network/bridge.git
```

Traverse to `src` folder, it contains the code of our web app.

```bash
cd bridge/src
```

#### Installing through `npm`

In case you are installing through `npm` follow the instructions below. If you are installing through `yarn` then jump ahead to [installation through `yarn`.](README.md#installation-through-yarn)

```bash
npm i
```

To run the app in development mode, use this command.

```bash
npm run serve
```

#### Installation through `yarn`

To install the dependencies you can do it by using the following command.

```bash
yarn install
```

To run the app in development mode, use this command.

```bash
yarn serve
```

### Viewing it in the Browser

You can open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

### Handling Errors

In case you are receiving the `eslint` warnings then you may ignore them for now and visit the `localhost:8080` on your web browser.

## Dependencies

You may find the dependencies inside the [`package.json`](src/package.json) file. It's inside the directory `bridge/src`.

## Supported Networks

Type of Networks available:

1. Algorand
2. Skale
3. Matic
4. Moonbeam
5. Meter

## Visit RazerScan

You can visit RazerScan on [razerscan.io](https://razorscan.io/#/dashboard)
