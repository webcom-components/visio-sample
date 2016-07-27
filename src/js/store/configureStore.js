/* global __DEVTOOLS__ */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
	level: 'info',
	collapsed: true
});

/**
 * Creates a preconfigured store.
 */
export default function configureStore(reduxRouterMiddleware, initialState) {
	let createStoreWithMiddleware;

	if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
		const DevTools = require('../containers/DevTools');

		createStoreWithMiddleware = compose(
			applyMiddleware(
				thunkMiddleware,
				promiseMiddleware,
				loggerMiddleware,
				reduxRouterMiddleware),
			DevTools.instrument()
		)(createStore);
	} else {
		createStoreWithMiddleware = compose(
			applyMiddleware(
				thunkMiddleware,
				promiseMiddleware,
				reduxRouterMiddleware),
		)(createStore);
	}

	const store = createStoreWithMiddleware(rootReducer, initialState);
	reduxRouterMiddleware.listenForReplays(store);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
