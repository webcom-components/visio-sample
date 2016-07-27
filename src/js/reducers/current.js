/**
 * test reducer
 */

import {
	LOGGED,
	LOGOUT
} from '../utils/constants';

const initialState = {
	logged: false,
	name: '',
	uid: ''
};

export default function user(state = initialState, action = {}) {
	switch (action.type) {
		case LOGGED:
			return {
				...state,
				logged: true,
				name: action.data.name,
				uid: action.data.uid
			};
		case LOGOUT:
			return {
				...initialState
			};
		default:
			return state;
	}
}
