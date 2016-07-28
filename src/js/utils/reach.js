/* global Reach, __WEBCOM_SERVER__, __NAMESPACE__ */

let _reach;
const stores = {};

export const ref = () => {
	if(!_reach) {
		const constraints = Reach.media.constraints();
		constraints.video = Object.assign(constraints.video, {frameRate: {ideal: 10, max: 25}});
		_reach = new Reach(`${__WEBCOM_SERVER__}/base/${__NAMESPACE__}`, {constraints});
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
