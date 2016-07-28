/*global Reach*/

import {
	AUDIO_UNMUTED, AUDIO_MUTED,
	VIDEO_UNMUTED, VIDEO_MUTED, VIDEO_FOCUS,
	DEVICES_LISTED, VIDEO_SWITCH,
	STREAM_PUBLISHED, STREAM_UNPUBLISHED,
	STREAM_RECEIVED, STREAM_SUBSCRIBED, STREAM_UNSUBSCRIBED, STREAM_CHANGED
} from '../utils/constants';
import {rooms, streams} from '../utils/reach';

const _toggle = (streamType, types, stream) => {
	const _stream = streams.find(stream);
	const muted = _stream.muted[streamType];
	_stream.mute(streamType, !muted);
	return {
		type: types[muted ? 0 : 1],
		data: {
			stream : {..._stream}
		}
	};
};

const toggleAudio = _toggle.bind(null, Reach.types.AUDIO, [AUDIO_UNMUTED, AUDIO_MUTED]);

const toggleVideo = _toggle.bind(null, Reach.types.VIDEO, [VIDEO_UNMUTED, VIDEO_MUTED]);

const switchVideo = stream => {
	streams.find(stream).switchCamera();
	return {
		type: VIDEO_SWITCH
	};
};

const focusVideo = ref => ({type: VIDEO_FOCUS, data: ref});

const publish = (user, room, videoTag) => (dispatch, getState) => {
	const _room = rooms.find(room);
	if(_room) {
		_room
			.share(Reach.types.AUDIO_VIDEO, videoTag)
			.then(localStream => {
				streams.add(localStream);
				dispatch({
					type: STREAM_PUBLISHED,
					data: {
						from: getState().current.uid,
						uid: localStream.uid,
						type: localStream.type,
						muted: localStream.muted
					}
				});
				Reach.media.devices()
					.then(devices => {
						dispatch({
							type: DEVICES_LISTED,
							data: {...devices}
						});
					});
			});
	}
};

const listen = room => (dispatch, getState) => {
	const _room = rooms.find(room);
	if(_room) {
		_room.on(Reach.events.room.STREAM_PUBLISHED, remoteStream => {
			streams.add(remoteStream);
			dispatch({
				type: STREAM_RECEIVED,
				data: {
					uid: remoteStream.uid,
					from: remoteStream.from,
					muted: remoteStream.muted,
					type: remoteStream.type
				}
			});
		});

		_room.on(Reach.events.room.STREAM_UNPUBLISHED, remoteStream => {
			const subscribed = getState().room.participants.some(
				u => u.stream && u.stream.uid === remoteStream.uid && u.stream.subscribed
			);
			if (subscribed) {
				dispatch({
					type: STREAM_UNSUBSCRIBED,
					data: {
						uid: remoteStream.uid,
						from: remoteStream.from,
						muted: remoteStream.muted,
						type: remoteStream.type
					}
				});
			}
			dispatch({
				type: STREAM_UNPUBLISHED,
				data: {
					uid: remoteStream.uid,
					from: remoteStream.from,
					muted: remoteStream.muted,
					type: remoteStream.type
				}
			});
			streams.remove(remoteStream);
		});
	}
};

const subscribe = (remoteStream, videoTab) => (dispatch, getState) => {
	if (getState().room.participants.find(u => u.subscribed && u.stream && u.stream.uid === remoteStream.uid )) {
		return;
	}
	const _stream = streams.find(remoteStream);
	_stream.subscribe(videoTab)
		.then(() => {
			dispatch({
				type: STREAM_SUBSCRIBED,
				data: {
					uid: _stream.uid,
					from: _stream.from,
					muted: _stream.muted,
					type: _stream.type
				}
			});
			_stream.on(Reach.events.stream.MUTE, muted => {
				dispatch({
					type: STREAM_CHANGED,
					data: {
						uid: _stream.uid,
						from: _stream.from,
						muted,
						type: _stream.type
					}
				});
			});
		});
};

export {toggleAudio, toggleVideo, switchVideo, focusVideo, publish, listen, subscribe};
