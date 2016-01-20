import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
//import App from './containers/App';
import * as containers from './containers';
import AddPopin from './components/AddPopin';

const {
	App,
	LoginPage,
	ParticipantPage,
	VisioPage
} = containers;

function requireAuth(nextState, replace) {
	if (nextState.location.action === 'POP') {
		replace(null, '/');
	}
}

export default (
	<Route path='/' component={App}>
		<IndexRoute component={LoginPage} />
		<Route path="participants" component={ParticipantPage} onEnter={requireAuth} />
		<Route path="visio" component={VisioPage} onEnter={requireAuth} >
			<Route path="add" component={AddPopin} />
			</Route>
		<Redirect from="*" to="/" />
	</Route>
);