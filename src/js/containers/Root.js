/* global __DEVTOOLS__ */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router } from 'react-router';
import history from '../history';
import DevTools from './DevTools';
import routes from '../routes';
import { syncHistory } from 'redux-simple-router';

const reduxRouterMiddleware = syncHistory(history);
const store = configureStore(reduxRouterMiddleware);

export default class Root extends Component {
	static propTypes = {
	};

	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return { store };
	}

	render() {
		return (
			<Provider store={store} key="provider">
				<div>
					<Router history={history}>
						{routes}
					</Router>
					{__DEVTOOLS__ ? <DevTools /> : undefined}
				</div>
			</Provider>
		);
	}
}