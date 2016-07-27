/* global Reach */

import history from '../history';
import {rooms} from '../utils/reach';
import {reset} from 'redux-form';
import {
	ROOM_ENTER, ROOM_LEFT,
	PARTICIPANT_JOIN, PARTICIPANT_LEFT,
	TOGGLE_CHAT,
	MESSAGE_RECEIVED, MESSAGE_SENT,
	STREAM_UNSUBSCRIBED
} from '../utils/constants';

const listenToJoinAndLeave = room => (dispatch, getState) => {
	rooms.find(room).on(Reach.events.room.PARTICIPANT_ADDED, p => {
		const user = getState().users.find(u => u.uid === p.uid);
		dispatch({
			type: PARTICIPANT_JOIN,
			data: {
				uid: p.uid,
				role: p.role,
				name: user.name,
				status: p.status
			}
		});
	});
	rooms.find(room).on(Reach.events.room.PARTICIPANT_CHANGED, p => {
		if(p.status === 'WAS_CONNECTED') {
			dispatch({
				type: PARTICIPANT_LEFT,
				data: {
					uid: p.uid
				}
			});
		} else {
			dispatch({
				type: PARTICIPANT_JOIN,
				data: {
					uid: p.uid,
					status: p.status
				}
			});
		}
	});
	rooms.find(room).on(Reach.events.room.PARTICIPANT_REMOVED, p => {
		dispatch({
			type: PARTICIPANT_LEFT,
			data: {
				uid: p.uid
			}
		});
	});
};

const sendMessage = (room, user, message) => dispatch => {
	rooms.find(room).sendMessage(message)
		.then(data => {
			dispatch({
				type: MESSAGE_SENT,
				data: {
					...data,
					name: user.name
				}
			});
		});
	dispatch(reset('chat'));
};

const listenMessages = room => (dispatch, getState) => {
	rooms.find(room).on(Reach.events.room.MESSAGE_ADDED, data => {
		const sender = getState().users.filter(p => p.uid === data.from);
		dispatch({
			type: MESSAGE_RECEIVED,
			data: {
				name: sender.length ? sender[0].name : data.from,
				...data
			}
		});
	});
};

const join = room => dispatch => {
	rooms.find(room).join()
		.then(() => {
			dispatch({
				type: ROOM_ENTER,
				data: {
					uid: room.uid,
					owner: room.owner,
					status: room.status,
					name: room.name
				}
			});
			dispatch(listenMessages(room));
			dispatch(listenToJoinAndLeave(room));
			history.push('/visio');
		});
};


const leave = (user, room) => dispatch => {
	const _room = rooms.find(room);
	_room.remoteStreams()
		.then(remoteStreams => {
			remoteStreams.forEach(remoteStream => {
				dispatch({
					type: STREAM_UNSUBSCRIBED,
					data: {
						stream: remoteStream,
						user
					}
				});
			});
		})
		.then(() => _room.leave())
		.then(() => {
			history.push('/users');
			if (user.uid === _room.owner) {
				return _room.close();
			}
		})
		.then(() => {
			// TODO remove sent invites
			rooms.remove(room);
			dispatch({
				type: ROOM_LEFT,
				data: {
					uid: room.uid,
					room
				}
			});
		});
};

const toggleChat = () => ({type: TOGGLE_CHAT});

export {join, leave, toggleChat, sendMessage};
