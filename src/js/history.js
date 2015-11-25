const isInTest = typeof global.it === 'function';
const createHistory = isInTest ?
	require('history/lib/createMemoryHistory'):
	require('history/lib/createHashHistory');

export default createHistory();
