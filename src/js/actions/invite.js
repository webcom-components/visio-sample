import {rooms, ref, invites} from '../utils/reach';
import * as roomActions from './room';
import {RECEIVE_INVITATION, INVITATION_SENT, INVITATION_ANSWERED, INVITATION_ARCHIVED} from '../utils/constants';
import {guid} from '../utils';

const archive = () => {
	return dispatch => {
		const reach = ref();
		reach.invites()
			.then(_invites => {
				_invites.forEach(invite => {
					reach.base.child(`_/invites/${reach.current.uid}/${invite.uid}`).remove();
					invites.remove(invite);
				});
			})
			.then(() => {
				dispatch({
					type: INVITATION_ARCHIVED,
					data: null
				});
			});
	};
};

const answered = (accept, invitee, info) => {
	return (dispatch, getState) => {
		rooms.add(info.room);

		const alreadyInRoom = getState().room && getState().room.info;
		if (!alreadyInRoom && accept) {
			dispatch(roomActions.join(info.room));
		}

		dispatch({
			type: INVITATION_ANSWERED,
			data: {
				accept,
				invitee,
				info
			}
		});
	};
};

const send = (invitee, room) => {
	return (dispatch, getState) => {
		Promise.resolve(rooms.find(room))
			.then(_room => {
				if(!_room) {
					return ref()
						.createRoom(guid())
						.then(_newRoom => {
							rooms.add(_newRoom);
							return _newRoom;
						});
				}
				return _room;
			})
			.then(_room => _room.invite([invitee], 'MODERATOR', 'Let\'s chat...'))
			.then(_data => {
				const
					_room = _data.room,
					_invite = _data.invites[0];

				invites.add(_invite);

				dispatch({type: INVITATION_SENT, data: {invitee, room: {..._room}}});

				_invite.on('ACCEPTED', invite => {
					dispatch(answered(true, invitee, invite, _room));
				});

				_invite.on('REJECTED', invite => {
					dispatch(answered(false, invitee, invite, _room));
				});

				const alreadyInRoom = getState().room && getState().room.info;
				if (!alreadyInRoom) {
					dispatch(roomActions.join(_room));
				}
			});
	};
};

const receive = (sender, invite) => {
	invites.add(invite);
	return {
		type: RECEIVE_INVITATION,
		data: {
			from: sender.name,
			topic: invite.topic,
			uid: invite.uid,
			room: invite.room
		}
	};
};

const answer = (accept, invite, reason) => {
	return dispatch => {
		invites.find(invite)[accept ? 'accept' : 'reject'](reason)
			.then(data => {
				dispatch(answered(accept, ref().current, data));
			});
	};
};


export {archive, send, receive, answer, answered};



