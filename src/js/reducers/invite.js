import {
	RECEIVE_INVITATION,
	INVITATION_ANSWERED,
	INVITATION_SENT,
	INVITATION_ARCHIVED
} from '../utils/constants';

const initialState = {
	sent: null,
	received: null
};

export default function invite(state = initialState, action = {}) {
	switch (action.type) {
		case RECEIVE_INVITATION:
			return {...state, received: {...action.data}};
		case INVITATION_ANSWERED:
			return {...state, received: null};
		case INVITATION_SENT:
			return {...state, sent: true};
		case INVITATION_ARCHIVED:
			return {...state, sent: null};
		default:
			return state;
	}
}
