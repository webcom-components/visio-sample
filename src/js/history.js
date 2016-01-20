import { hashHistory } from 'react-router';

const isInTest = typeof global.it === 'function';
const history = isInTest ?
	hashHistory: // TODO replace with memory history 
	hashHistory;

export default history;
