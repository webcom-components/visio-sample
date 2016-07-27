/* global Reach, __WEBCOM_SERVER__, __NAMESPACE__ */

let _reach;
const stores = {};

export function ref() {
	if(!_reach) {
		_reach = new Reach(`${__WEBCOM_SERVER__}/base/${__NAMESPACE__}`);
	}
	return _reach;
}

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
