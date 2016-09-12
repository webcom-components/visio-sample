import {
	ADD_USER, UPDATE_USER,
	LOGGED, LOGOUT, LOGIN_ERROR,
	ADD_ROOM, UPDATE_ROOM, DELETE_ROOM
} from '../utils/constants';
import history from '../history';
import * as Invite from './invite';
import {ref, users, rooms} from '../utils/reach';
import Reach from 'webcom-reach';

const add = (uid, data) => {
	users.add(data);
	return {
		type: ADD_USER,
		data: {...data}
	};
};

const update = (uid, data) => {
	return {
		type: UPDATE_USER,
		data: {...data}
	};
};

const logout = () => {
	const reach = ref();
	reach.logout();
	history.push('/');
	return {
		type: LOGOUT
	};
};

const _onceLogged = (dispatch, getState) => currentUser => {
	history.push('/users');

	dispatch({
		type: LOGGED,
		data: {...currentUser}
	});

	const reach = ref();

	reach.on(Reach.events.reach.USER_ADDED, user => {
		dispatch(add(user.uid, user));
	});
	reach.on(Reach.events.reach.USER_CHANGED, user => {
		dispatch(update(user.uid, user));
	});
	reach.on(Reach.events.reach.INVITE_ADDED, invite => {
		const sender = getState().users.find(participant => participant.uid === invite.from);
		if(sender && invite.isOnGoing && invite._created > currentUser.lastSeen) {
			dispatch(Invite.receive(sender, invite));
		}
	});

	const roomDispatch = (event, room) => {
		const {uid, name, owner, _public, status} = room;
		if(_public) {
			dispatch({
				type: event,
				data: {uid, name, owner, status}
			});
		}
	};

	reach.on(Reach.events.reach.ROOM_ADDED, room => {
		rooms.add(room);
		room.status === 'OPENED' && roomDispatch(ADD_ROOM, room);
	});
	reach.on(Reach.events.reach.ROOM_CHANGED, room => {
		roomDispatch(UPDATE_ROOM, room);
	});
	reach.on(Reach.events.reach.ROOM_REMOVED, room => {
		rooms.remove(room);
		roomDispatch(DELETE_ROOM, room);
	});
};

const resume = () => {
	return (dispatch, getState) => {
		ref()
			.resume()
			.then(_onceLogged(dispatch, getState))
			.catch(() => {});
	};
};

const login = (email, password, username) => {
	return (dispatch, getState) => {
		const _reach = ref();
		_reach
			.login(email, password, username)
			.catch(e => {
				if(/INVALID_USER/i.test(e.code)) {
					return _reach.register(email, password, username);
				}
				dispatch({
					type: LOGIN_ERROR,
					data: e.code
				});
				return Promise.reject(e);
			})
			.then(_onceLogged(dispatch, getState))
			.catch(() => {});
	};
};

export {login, resume, logout, add, update};
