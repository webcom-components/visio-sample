/* global __WEBCOM_SERVER__, __NAMESPACE__, __DEVTOOLS__ */
import Reach from 'webcom-reach';

let _reach;
const stores = {};

export const ref = () => {
	if(!_reach) {
		const
			logLevel = __DEVTOOLS__ ? 'INFO' : 'ERROR',
			preferredAudioCodec = Reach.codecs.audio.OPUS,
			preferredVideoCodec = Reach.codecs.video.VP9,
			audioConstraints = {
				optional:[
					{googEchoCancellation: true},
					{googAutoGainControl: true},
					{googNoiseReduction: true}
				],
				mandatory:{}
			},
			constraints = Reach.media.constraints('HD', audioConstraints);

		// Force framerate
		constraints.video = Object.assign(constraints.video, {frameRate: {ideal: 10, max: 25}});

		_reach = new Reach(`${__WEBCOM_SERVER__}/base/${__NAMESPACE__}`, {
			logLevel,
			constraints,
			preferredAudioCodec,
			preferredVideoCodec
		});
	}
	return _reach;
};

class _Store {
	constructor(type) {
		if(!stores[type]) {
			stores[type] = this;
		}
		this._data = {};
		return stores[type];
	}
	add(o) {
		if(o) {
			this._data[o.uid] = o;
		}
	}
	find(o) {
		return o ? this._data[o.uid || o] : null;
	}
	remove(o) {
		if(o) {
			delete this._data[o.uid || o];
		}
	}
}

const
	rooms = new _Store('rooms'),
	invites = new _Store('invites'),
	streams = new _Store('streams'),
	users = new _Store('users');

export {rooms, invites, streams, users};
