/* global ComSDK, __WEBCOM_SERVER__, __NAMESPACE__, __DEVTOOLS__ */

let com,
	reach;
const rooms = {};

function getUrl() {
	return __WEBCOM_SERVER__;
}

export function getNamespaceRef() {
	return new Webcom(`${getUrl()}/base/${__NAMESPACE__}`);
}

export function initComSDK(username) {
	com = new ComSDK(`${getUrl()}/base/${__NAMESPACE__}`);
	reach = com.Reach(username);
}

export function getReach() {
	return reach;
}

export function getRoom(username, roomname) {
	if (!rooms[roomname]) {
		rooms[roomname] = com.Room(username, roomname);
	}
	return rooms[roomname];
}

export function deleteRoom(roomname) {
	delete rooms[roomname];
}