/**
 * test reducer
 */

import {
	LOGGED,
	LOGOUT,
	LOGIN_ERROR,
	DEVICES_LISTED
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
				...initialState,
				logged: true,
				name: action.data.name,
				uid: action.data.uid
			};
		case LOGOUT:
			return {
				...initialState
			};
		case LOGIN_ERROR:
			return {
				...state,
				error: action.data
			};
		case DEVICES_LISTED:
			return {
				...state,
				error: null,
				devices: {
					video: action.data.videoinput.map(d => ({...d})),
					audio: action.data.audioinput.map(d => ({...d}))
				}
			};
		default:
			return state;
	}
}
