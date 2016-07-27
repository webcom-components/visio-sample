import {
	LOGOUT,
	ADD_USER,
	UPDATE_USER,
	UPDATE_USER_ROOM,
	INVITATION_SENT,
	INVITATION_ANSWERED,
	INVITATION_ARCHIVED
} from '../utils/constants';

const initialState = [];

export default function users(state = initialState, action = {}) {
	const _updateUser = () => state.map(p => p.uid === action.data.uid ? Object.assign({}, p, { ...action.data }) : p);

	switch (action.type) {
		case ADD_USER:
			return state.find(p => p.uid === action.data.uid) ? _updateUser() : [
				...state,
				{...action.data}
			];

		case UPDATE_USER:
			return _updateUser();

		case UPDATE_USER_ROOM:
			return state.map(p => {
				return p.uid === action.data.uid ?
					Object.assign({}, p, { room: action.data.room }) :
					p;
			});

		case INVITATION_SENT:
			return state.map(p => {
				return p.uid === action.data.invitee.uid ?
					Object.assign({}, p, { invitSent: true }) :
					p;
			});

		case INVITATION_ANSWERED:
			return state.map(p => {
				if (action.data.invitee && p.uid === action.data.invitee.uid) {
					const newP = Object.assign({}, p);
					delete newP.invitSent;
					return newP;
				}
				return p;
			});

		case INVITATION_ARCHIVED:
			return state.map(p => {
				if (p.invitSent) {
					return Object.assign({}, p, {invitSent: undefined});
				}
				return p;
			});
		case LOGOUT:
			return [
				...initialState
			];
		default:
			return state;
	}
}
