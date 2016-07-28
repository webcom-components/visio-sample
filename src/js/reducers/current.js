/**
 * test reducer
 */

import {
	LOGGED,
	LOGOUT,
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
				...state,
				logged: true,
				name: action.data.name,
				uid: action.data.uid
			};
		case LOGOUT:
			return {
				...initialState
			};
		case DEVICES_LISTED:
			return {
				...state,
				devices: {
					video: action.data.videoinput.map(d => ({...d})),
					audio: action.data.audioinput.map(d => ({...d}))
				}
			};
		default:
			return state;
	}
}
