import {expect} from 'chai';
import {createStore} from 'redux';
import rootReducer from '../src/js/reducers';

function makeStore() {
	return createStore(rootReducer);
}

describe('store', () => {
	describe('participant reducer', () => {
		it('should add a participant', () => {
			const state = makeStore().getState();
			expect(state).to.have.property('user');
			expect(state).to.have.property('room');
			expect(state).to.have.property('participants');
			expect(state).to.have.property('form');
			expect(state).to.have.property('routing');
		});
	});
});