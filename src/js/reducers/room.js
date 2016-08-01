/*eslint complexity: [2, 20] max-len: [2, 180]*/
import {
	STREAM_PUBLISHED,
	STREAM_SUBSCRIBED,
	STREAM_RECEIVED,
	STREAM_UNPUBLISHED,
	STREAM_CHANGED,
	VIDEO_MUTED,
	VIDEO_UNMUTED,
	AUDIO_MUTED,
	AUDIO_UNMUTED,
	ROOM_ENTER,
	ROOM_LEFT,
	PARTICIPANT_JOIN,
	PARTICIPANT_LEFT,
	VIDEO_FOCUS,
	TOGGLE_CHAT,
	MESSAGE_RECEIVED,
	LOGOUT
} from '../utils/constants';

const initialState = null;

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case ROOM_ENTER:
			return {
				...state,
				info: {...action.data},
				focus: null,
				chatMinimized: true,
				messages: [],
				participants: []
			};
		case PARTICIPANT_JOIN:
			return {
				...state,
				participants:
					state.participants.find(u => u.uid === action.data.uid) ?
						state.participants.map(u=> u.uid === action.data.uid ? {...u, ...action.data} : u) :
						[
							...state.participants,
							{...action.data}
						]
			};
		case PARTICIPANT_LEFT:
			return {
				...state,
				participants: state.participants.filter(u => u.uid !== action.data.uid)
			};

		case STREAM_PUBLISHED:
			return {
				...state,
				stream: {...action.data},
				participants: state.participants.map(u => {
					return u.uid === action.data.from ? Object.assign({}, u, {stream : {...action.data}, subscribed: true}) : u;
				})
			};

		case STREAM_CHANGED:
			return {
				...state,
				participants:
					state.participants.map(u => {
						return u.uid === action.data.from ? Object.assign({}, u, {stream : {...action.data}, subscribed: true}) : u;
					})
			};

		case STREAM_RECEIVED:
			return {
				...state,
				participants:
					state.participants.map((u) => {
						return u.uid === action.data.from ? Object.assign({}, u, {stream : {...action.data}, subscribed : false}) : u;
					})
			};

		case STREAM_SUBSCRIBED:
			return {
				...state,
				participants:
					state.participants.map(u => u.uid === action.data.from ? Object.assign({}, u, {subscribed : true}) : u)
			};

		case STREAM_UNPUBLISHED:
			return {
				...state,
				participants:
					state.participants.map(u => u.uid === action.data.from ? { ...u, stream: null, subscribed: null } : u)
			};

		case VIDEO_MUTED:
		case VIDEO_UNMUTED:
		case AUDIO_MUTED:
		case AUDIO_UNMUTED:
			return {
				...state,
				stream: action.data.stream
			};
		case ROOM_LEFT:
			return {
				...initialState
			};
		case LOGOUT:
			return {
				...initialState
			};
		case VIDEO_FOCUS:
			return {
				...state,
				focus: action.data
			};
		case TOGGLE_CHAT:
			return {
				...state,
				chatMinimized: !state.chatMinimized
			};
		case MESSAGE_RECEIVED:
			return {
				...state,
				messages: [
					...state.messages,
					{
						...action.data
					}
				]
			};
		default:
			return state;
	}
};
