import history from '../history';
import {initComSDK, getReach, getNamespaceRef } from '../utils/com';
import { enterRoom } from './room';
import { guid } from '../utils';

export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT';
export const UPDATE_PARTICIPANT_ROOM = 'UPDATE_PARTICIPANT_ROOM';
export const LOGGED = 'LOGGED';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_INVITATION = 'RECEIVE_INVITATION';
export const INVITATION_SENT = 'INVITATION_SENT';
export const INVITATION_ANSWERED = 'INVITATION_ANSWERED';
export const INVITATION_ARCHIVED = 'INVITATION_ARCHIVED';

export function addParticipant(username, data) {
	return {
		type: ADD_PARTICIPANT,
		data: {
			username,
			info: data
		}
	};
}

export function updateParticipant(username, data) {
	return {
		type: UPDATE_PARTICIPANT,
		data: {
			username,
			info: data
		}
	};
}

export function islogged(username) {
	return {
		type: LOGGED,
		data: username
	};
}

export function receiveInvitation(data) {
	return {
		type: RECEIVE_INVITATION,
		data
	};
}

export function invitationSent(invitee) {
	return {
		type: INVITATION_SENT,
		data: invitee
	};
}

export function invitationAnswered(accept, roomname, owner, username) {
	return (dispatch, getState) => {
		const alreadyInRoom = getState().room && getState().room.name;

		if ( accept && !alreadyInRoom ) {
			dispatch(enterRoom(roomname, owner, username));
		}

		dispatch({
			type: INVITATION_ANSWERED,
			data: {
				accept,
				roomname,
				owner,
				username
			}
		});
	}
}

export function logout() {
	const reach = getReach();
	reach.close();
	history.push('/');
	return {
		type: LOGOUT
	};
}

export function login(username) {
	return dispatch => {
		initComSDK(username);

		history.push('/participants');

		dispatch(islogged(username));

		const reach = getReach();

		reach.on('userAdded', (data) => {
			const username = Object.keys(data)[0];
			getNamespaceRef().child(`reach/userList/${username}/room`).on('value', (snap) => {
				dispatch({
					type: UPDATE_PARTICIPANT_ROOM,
					data: {
						username,
						roomname: snap.val() || undefined
					}
				});
			});
			dispatch(addParticipant(username, data[username]));
		});

		reach.on('userChanged', (data) => {
			const username = Object.keys(data)[0];
			dispatch(updateParticipant(username, data[username]));
		});

		reach.on('newRoomInvitation', (data) => {
			dispatch(receiveInvitation(data));
		});
	};
}

export function sendInvitation(me, invitee, roomname = guid()) {
	return dispatch => {
		const reach = getReach();

		dispatch(invitationSent(invitee));

		reach.inviteToRoom(roomname, [invitee], 'test', (rId, invitee, status, info) => {
			dispatch(invitationAnswered(status === 'ACCEPTED', rId, me, me));
		});
	};
}

export function respondToInvitation(username, accept, data, reason) {
	return dispatch => {
		const reach = getReach();

		if (accept) {
			const invitname = Object.keys(data)[0];
			const roomname = data[invitname].room;
			const owner = data[invitname].from;
			reach.acceptInvitation(data);
			dispatch(invitationAnswered(accept,roomname, owner, username));
		}
		else {
			reach.rejectInvitation(data, reason);
			dispatch(invitationAnswered(accept));
		}

	};
}

export function archiveInvitations() {
	return dispatch => {
		const reach = getReach();
		reach.archiveMyInvitations(() => {
			dispatch({
				type: INVITATION_ARCHIVED,
				data: null
			});
		});
	};
}