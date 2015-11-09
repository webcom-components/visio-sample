# Samples with Webcom and WebRTC

Web application with 
- Share Audio/video 
- presence
- invitations
- room with multiple participants

Implemented with :
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
gulp help
```

## Build

To only build visio sample in ./dist folder

*visiowebrtc* is on https://webcom.orange.com

```bash
gulp build
```

Parameters :
- *--namespace* : namespace for signalisation. Default is *visiowebrtc*
- *--server* : webcom server url. Default is *https://webcom.orange.com*

## Build and watch out visio sample

To build and launch a web server on port 8080

```bash
gulp serve
```

Parameters :
- *--namespace* : namespace for signalisation. Default is *visiowebrtc*
- *--server* : webcom server url. Default is *https://webcom.orange.com*

## Dev server 

To build and launch a dev web server on port 8080

```bash
gulp
```

or

```bash
gulp dev
```


Parameters :
- *--namespace* : namespace for signalisation. Default is *visiowebrtc*
- *--server* : webcom server url. Default is *https://webcom.orange.com*
