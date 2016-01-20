import { combineReducers } from 'redux';
import user from './user';
import room from './room';
import participants from './participants';
import { reducer as formReducer } from 'redux-form';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
	user,
	room,
	participants,
	form: formReducer,
	routing: routeReducer
});


export default rootReducer;
