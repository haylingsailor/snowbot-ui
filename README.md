# Snowbot UI

## Development Environment

### NEXUS configuration

Required to access the luna UI artifacts used in the building of the app:

We have a kiwi-specific NEXUS access token:

`NpmToken.ea2aab67-d767-3667.....`

The build requires this token to be present in the environment using the key `NEXUS_TOKEN`

## Luna React Boilerplate

This project was started from the Luna React Boilerplate project. Details below.

Opinionated starter kit for building a project that makes use of [Luna](http://luna.sainsburys.co.uk/) through the [Luna React](https://github.com/JSainsburyPLC/luna-react) & [Luna Style](https://github.com/JSainsburyPLC/luna-style) libraries.

Aims to align as closely as possible to the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) recommendations.

### Badger Farm update

Note that this branch is aligned to the [Badger Farm release](https://jsainsburyplc.github.io/luna/#/Articles/Badger%20Farm%20release), for the previous version see the [abbey-road branch](https://github.com/JSainsburyPLC/luna-react-boilerplate/tree/abbey-road).

To be able to install the packages used in this app you will need to set up your npm to download from Nexus. More information on this process can be found in the [hosting section on the Codebase site](https://jsainsburyplc.github.io/luna/#/Hosting).

### Featured tools

#### React Router

The app contains a base set up for handling routes and navigation, which is handled by [React Router](https://reacttraining.com/react-router/web/guides/philosophy).

##### Code splitting

By making use of [`react-loadable`](https://github.com/jamiebuilds/react-loadable) for top level routes we're able to split out code from the main bundle & only load them when needed. You can make use of this functionality by defining your routes in `./src/routes.js` with the `loader` prop being a function returning a [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to the relevant file.

```javascript
{
  path: '/about',
  name: 'About',
  loader: () => import('modules/About'),
},
```

This config is then used by `./src/modules/App/Routes` passing it to `react-loadable` along with the loading screen to show.

```javascript
const createLoader = loader =>
  Loadable({
    loader,
    loading: LoadingIndicator,
  })
```

#### Prettier

The starter kit comes with the [Prettier](https://github.com/prettier/prettier) code formatter to provide a consistent style across the app. This tool parses written code and re-prints it following the configuration rules provided.

In order to get the best experience of Prettier it's highly recommended that you make use of an editor plugin to apply the formatting automatically (e.g. [Prettier - Code formatter](https://github.com/prettier/prettier-vscode) for VS Code). Alternatively you can make use of `lint:fix` npm script to target all files.
