import {
	ADD_ROOM,
	UPDATE_ROOM,
	DELETE_ROOM
} from '../utils/constants';

const initialState = [];

export default function users(state = initialState, action = {}) {
	const _updateRoom = () => state.map(p => p.uid === action.data.uid ? Object.assign({}, p, { ...action.data }) : p);

	switch (action.type) {
		case ADD_ROOM:
			return state.find(p => p.uid === action.data.uid) ? _updateRoom() : [
				...state,
				{...action.data}
			];
		case UPDATE_ROOM:
			return _updateRoom();
		case DELETE_ROOM:
			return state.filter(p => p.uid !== action.data.uid);
		default:
			return state;
	}
}
