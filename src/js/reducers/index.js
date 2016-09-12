import { combineReducers } from 'redux';
import current from './current';
import room from './room';
import rooms from './rooms';
import users from './users';
import invite from './invite';
import { reducer as formReducer } from 'redux-form';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
	current,
	invite,
	users,
	room,
	rooms,
	form: formReducer,
	routing: routeReducer
});


export default rootReducer;
