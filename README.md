# Samples with Reach

[![Build Status](https://travis-ci.org/webcom-components/visio-sample.svg?branch=master)](https://travis-ci.org/webcom-components/visio-sample)
[![Code Climate](https://codeclimate.com/github/webcom-components/visio-sample/badges/gpa.svg)](https://codeclimate.com/github/webcom-components/visio-sample)
[![Test Coverage](https://codeclimate.com/github/webcom-components/visio-sample/badges/coverage.svg)](https://codeclimate.com/github/webcom-components/visio-sample/coverage)
[![devDependency Status](https://david-dm.org/webcom-components/visio-sample/dev-status.svg)](https://david-dm.org/webcom-components/visio-sample#info=devDependencies)

Web application with
- Share Audio/video
- presence
- invitations
- room with multiple participants

Implemented with :
- [Reach](https://github.com/webcom-components/reach)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React router](https://github.com/rackt/react-router)
- ES6 with [Babel](https://babeljs.io/)
- Packaging with [Webpack](http://webpack.github.io/)

Signalisation is stored on a namespace named *visiowebrtc*. It can be changed.

## Prerequisites

Install dependencies

```bash
npm install
```

## Help on tasks

```bash
npm run
```

## Build

To only build visio sample in ./dist folder

*visioreach* is on https://io.dataysnc.orange.com

```bash
npm run build
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *visioreach*
- WS_SERVER : webcom server url. Default is *https://io.datasync.orange.com*
- PUBLIC_PATH : relative path of application. Default is /

## Build and watch out visio sample

To build and launch a web server on port 8080

```bash
npm run serve
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *visioreach*
- WS_SERVER : webcom server url. Default is *https://io.datasync.orange.com*
- PUBLIC_PATH : relative path of application. Default is /


## Dev server

To build and launch a dev web server on port 8080

```bash
npm start
```

Optional env variables :
- NAMESPACE : namespace for signalisation. Default is *visioreach*
- WS_SERVER : webcom server url. Default is *https://io.datasync.orange.com*
- PUBLIC_PATH : relative path of application. Default is /

## Test

```bash
npm test
```

With coverage

```bash
npm run test:coverage
```

## License

Code released under the [MIT license](https://github.com/webcom-components/visio-sample/blob/master/LICENSE).
