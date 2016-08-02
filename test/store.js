import {expect} from 'chai';
import {createStore} from 'redux';
import rootReducer from '../src/js/reducers';

function makeStore() {
	return createStore(rootReducer);
}

describe('store', () => {
	describe('users reducer', () => {
		it('should add a user', () => {
			const state = makeStore().getState();
			expect(state).to.have.property('current');
			expect(state).to.have.property('room');
			expect(state).to.have.property('users');
			expect(state).to.have.property('form');
			expect(state).to.have.property('routing');
		});
	});
});
